(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\libs\jquery.min.js
  var require_jquery_min = __commonJS({
    "ns-hugo:C:\\Users\\jack\\AppData\\Roaming\\site\\themes\\virgo\\assets\\js\\libs\\jquery.min.js"(exports, module) {
      !function(e2, t2) {
        "use strict";
        typeof module == "object" && typeof module.exports == "object" ? module.exports = e2.document ? t2(e2, true) : function(e3) {
          if (!e3.document)
            throw new Error("jQuery requires a window with a document");
          return t2(e3);
        } : t2(e2);
      }(typeof window != "undefined" ? window : exports, function(C, e2) {
        "use strict";
        var t2 = [], r2 = Object.getPrototypeOf, s2 = t2.slice, g = t2.flat ? function(e3) {
          return t2.flat.call(e3);
        } : function(e3) {
          return t2.concat.apply([], e3);
        }, u = t2.push, i2 = t2.indexOf, n2 = {}, o2 = n2.toString, v = n2.hasOwnProperty, a2 = v.toString, l = a2.call(Object), y = {}, m = function(e3) {
          return typeof e3 == "function" && typeof e3.nodeType != "number" && typeof e3.item != "function";
        }, x = function(e3) {
          return e3 != null && e3 === e3.window;
        }, E = C.document, c = { type: true, src: true, nonce: true, noModule: true };
        function b(e3, t3, n3) {
          var r3, i3, o3 = (n3 = n3 || E).createElement("script");
          if (o3.text = e3, t3)
            for (r3 in c)
              (i3 = t3[r3] || t3.getAttribute && t3.getAttribute(r3)) && o3.setAttribute(r3, i3);
          n3.head.appendChild(o3).parentNode.removeChild(o3);
        }
        function w(e3) {
          return e3 == null ? e3 + "" : typeof e3 == "object" || typeof e3 == "function" ? n2[o2.call(e3)] || "object" : typeof e3;
        }
        var f = "3.6.0", S = function(e3, t3) {
          return new S.fn.init(e3, t3);
        };
        function p(e3) {
          var t3 = !!e3 && "length" in e3 && e3.length, n3 = w(e3);
          return !m(e3) && !x(e3) && (n3 === "array" || t3 === 0 || typeof t3 == "number" && 0 < t3 && t3 - 1 in e3);
        }
        S.fn = S.prototype = { jquery: f, constructor: S, length: 0, toArray: function() {
          return s2.call(this);
        }, get: function(e3) {
          return e3 == null ? s2.call(this) : e3 < 0 ? this[e3 + this.length] : this[e3];
        }, pushStack: function(e3) {
          var t3 = S.merge(this.constructor(), e3);
          return t3.prevObject = this, t3;
        }, each: function(e3) {
          return S.each(this, e3);
        }, map: function(n3) {
          return this.pushStack(S.map(this, function(e3, t3) {
            return n3.call(e3, t3, e3);
          }));
        }, slice: function() {
          return this.pushStack(s2.apply(this, arguments));
        }, first: function() {
          return this.eq(0);
        }, last: function() {
          return this.eq(-1);
        }, even: function() {
          return this.pushStack(S.grep(this, function(e3, t3) {
            return (t3 + 1) % 2;
          }));
        }, odd: function() {
          return this.pushStack(S.grep(this, function(e3, t3) {
            return t3 % 2;
          }));
        }, eq: function(e3) {
          var t3 = this.length, n3 = +e3 + (e3 < 0 ? t3 : 0);
          return this.pushStack(0 <= n3 && n3 < t3 ? [this[n3]] : []);
        }, end: function() {
          return this.prevObject || this.constructor();
        }, push: u, sort: t2.sort, splice: t2.splice }, S.extend = S.fn.extend = function() {
          var e3, t3, n3, r3, i3, o3, a3 = arguments[0] || {}, s3 = 1, u2 = arguments.length, l2 = false;
          for (typeof a3 == "boolean" && (l2 = a3, a3 = arguments[s3] || {}, s3++), typeof a3 == "object" || m(a3) || (a3 = {}), s3 === u2 && (a3 = this, s3--); s3 < u2; s3++)
            if ((e3 = arguments[s3]) != null)
              for (t3 in e3)
                r3 = e3[t3], t3 !== "__proto__" && a3 !== r3 && (l2 && r3 && (S.isPlainObject(r3) || (i3 = Array.isArray(r3))) ? (n3 = a3[t3], o3 = i3 && !Array.isArray(n3) ? [] : i3 || S.isPlainObject(n3) ? n3 : {}, i3 = false, a3[t3] = S.extend(l2, o3, r3)) : r3 !== void 0 && (a3[t3] = r3));
          return a3;
        }, S.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e3) {
          throw new Error(e3);
        }, noop: function() {
        }, isPlainObject: function(e3) {
          var t3, n3;
          return !(!e3 || o2.call(e3) !== "[object Object]") && (!(t3 = r2(e3)) || typeof (n3 = v.call(t3, "constructor") && t3.constructor) == "function" && a2.call(n3) === l);
        }, isEmptyObject: function(e3) {
          var t3;
          for (t3 in e3)
            return false;
          return true;
        }, globalEval: function(e3, t3, n3) {
          b(e3, { nonce: t3 && t3.nonce }, n3);
        }, each: function(e3, t3) {
          var n3, r3 = 0;
          if (p(e3)) {
            for (n3 = e3.length; r3 < n3; r3++)
              if (t3.call(e3[r3], r3, e3[r3]) === false)
                break;
          } else
            for (r3 in e3)
              if (t3.call(e3[r3], r3, e3[r3]) === false)
                break;
          return e3;
        }, makeArray: function(e3, t3) {
          var n3 = t3 || [];
          return e3 != null && (p(Object(e3)) ? S.merge(n3, typeof e3 == "string" ? [e3] : e3) : u.call(n3, e3)), n3;
        }, inArray: function(e3, t3, n3) {
          return t3 == null ? -1 : i2.call(t3, e3, n3);
        }, merge: function(e3, t3) {
          for (var n3 = +t3.length, r3 = 0, i3 = e3.length; r3 < n3; r3++)
            e3[i3++] = t3[r3];
          return e3.length = i3, e3;
        }, grep: function(e3, t3, n3) {
          for (var r3 = [], i3 = 0, o3 = e3.length, a3 = !n3; i3 < o3; i3++)
            !t3(e3[i3], i3) !== a3 && r3.push(e3[i3]);
          return r3;
        }, map: function(e3, t3, n3) {
          var r3, i3, o3 = 0, a3 = [];
          if (p(e3))
            for (r3 = e3.length; o3 < r3; o3++)
              (i3 = t3(e3[o3], o3, n3)) != null && a3.push(i3);
          else
            for (o3 in e3)
              (i3 = t3(e3[o3], o3, n3)) != null && a3.push(i3);
          return g(a3);
        }, guid: 1, support: y }), typeof Symbol == "function" && (S.fn[Symbol.iterator] = t2[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e3, t3) {
          n2["[object " + t3 + "]"] = t3.toLowerCase();
        });
        var d = function(n3) {
          var e3, d2, b2, o3, i3, h2, f2, g2, w2, u2, l2, T2, C2, a3, E2, v2, s3, c2, y2, S2 = "sizzle" + 1 * new Date(), p2 = n3.document, k2 = 0, r3 = 0, m2 = ue2(), x2 = ue2(), A2 = ue2(), N2 = ue2(), j2 = function(e4, t4) {
            return e4 === t4 && (l2 = true), 0;
          }, D2 = {}.hasOwnProperty, t3 = [], q2 = t3.pop, L2 = t3.push, H2 = t3.push, O2 = t3.slice, P2 = function(e4, t4) {
            for (var n4 = 0, r4 = e4.length; n4 < r4; n4++)
              if (e4[n4] === t4)
                return n4;
            return -1;
          }, R2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M2 = "[\\x20\\t\\r\\n\\f]", I2 = "(?:\\\\[\\da-fA-F]{1,6}" + M2 + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W2 = "\\[" + M2 + "*(" + I2 + ")(?:" + M2 + "*([*^$|!~]?=)" + M2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + I2 + "))|)" + M2 + "*\\]", F2 = ":(" + I2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + W2 + ")*)|.*)\\)|)", B2 = new RegExp(M2 + "+", "g"), $13 = new RegExp("^" + M2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M2 + "+$", "g"), _2 = new RegExp("^" + M2 + "*," + M2 + "*"), z2 = new RegExp("^" + M2 + "*([>+~]|" + M2 + ")" + M2 + "*"), U2 = new RegExp(M2 + "|>"), X2 = new RegExp(F2), V2 = new RegExp("^" + I2 + "$"), G2 = { ID: new RegExp("^#(" + I2 + ")"), CLASS: new RegExp("^\\.(" + I2 + ")"), TAG: new RegExp("^(" + I2 + "|[*])"), ATTR: new RegExp("^" + W2), PSEUDO: new RegExp("^" + F2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M2 + "*(even|odd|(([+-]|)(\\d*)n|)" + M2 + "*(?:([+-]|)" + M2 + "*(\\d+)|))" + M2 + "*\\)|)", "i"), bool: new RegExp("^(?:" + R2 + ")$", "i"), needsContext: new RegExp("^" + M2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M2 + "*((?:-\\d)?\\d*)" + M2 + "*\\)|)(?=[^-]|$)", "i") }, Y2 = /HTML$/i, Q2 = /^(?:input|select|textarea|button)$/i, J2 = /^h\d$/i, K2 = /^[^{]+\{\s*\[native \w/, Z2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee2 = /[+~]/, te2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + M2 + "?|\\\\([^\\r\\n\\f])", "g"), ne2 = function(e4, t4) {
            var n4 = "0x" + e4.slice(1) - 65536;
            return t4 || (n4 < 0 ? String.fromCharCode(n4 + 65536) : String.fromCharCode(n4 >> 10 | 55296, 1023 & n4 | 56320));
          }, re2 = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie2 = function(e4, t4) {
            return t4 ? e4 === "\0" ? "\uFFFD" : e4.slice(0, -1) + "\\" + e4.charCodeAt(e4.length - 1).toString(16) + " " : "\\" + e4;
          }, oe2 = function() {
            T2();
          }, ae2 = be2(function(e4) {
            return e4.disabled === true && e4.nodeName.toLowerCase() === "fieldset";
          }, { dir: "parentNode", next: "legend" });
          try {
            H2.apply(t3 = O2.call(p2.childNodes), p2.childNodes), t3[p2.childNodes.length].nodeType;
          } catch (e4) {
            H2 = { apply: t3.length ? function(e5, t4) {
              L2.apply(e5, O2.call(t4));
            } : function(e5, t4) {
              var n4 = e5.length, r4 = 0;
              while (e5[n4++] = t4[r4++])
                ;
              e5.length = n4 - 1;
            } };
          }
          function se2(t4, e4, n4, r4) {
            var i4, o4, a4, s4, u3, l3, c3, f3 = e4 && e4.ownerDocument, p3 = e4 ? e4.nodeType : 9;
            if (n4 = n4 || [], typeof t4 != "string" || !t4 || p3 !== 1 && p3 !== 9 && p3 !== 11)
              return n4;
            if (!r4 && (T2(e4), e4 = e4 || C2, E2)) {
              if (p3 !== 11 && (u3 = Z2.exec(t4)))
                if (i4 = u3[1]) {
                  if (p3 === 9) {
                    if (!(a4 = e4.getElementById(i4)))
                      return n4;
                    if (a4.id === i4)
                      return n4.push(a4), n4;
                  } else if (f3 && (a4 = f3.getElementById(i4)) && y2(e4, a4) && a4.id === i4)
                    return n4.push(a4), n4;
                } else {
                  if (u3[2])
                    return H2.apply(n4, e4.getElementsByTagName(t4)), n4;
                  if ((i4 = u3[3]) && d2.getElementsByClassName && e4.getElementsByClassName)
                    return H2.apply(n4, e4.getElementsByClassName(i4)), n4;
                }
              if (d2.qsa && !N2[t4 + " "] && (!v2 || !v2.test(t4)) && (p3 !== 1 || e4.nodeName.toLowerCase() !== "object")) {
                if (c3 = t4, f3 = e4, p3 === 1 && (U2.test(t4) || z2.test(t4))) {
                  (f3 = ee2.test(t4) && ye2(e4.parentNode) || e4) === e4 && d2.scope || ((s4 = e4.getAttribute("id")) ? s4 = s4.replace(re2, ie2) : e4.setAttribute("id", s4 = S2)), o4 = (l3 = h2(t4)).length;
                  while (o4--)
                    l3[o4] = (s4 ? "#" + s4 : ":scope") + " " + xe2(l3[o4]);
                  c3 = l3.join(",");
                }
                try {
                  return H2.apply(n4, f3.querySelectorAll(c3)), n4;
                } catch (e5) {
                  N2(t4, true);
                } finally {
                  s4 === S2 && e4.removeAttribute("id");
                }
              }
            }
            return g2(t4.replace($13, "$1"), e4, n4, r4);
          }
          function ue2() {
            var r4 = [];
            return function e4(t4, n4) {
              return r4.push(t4 + " ") > b2.cacheLength && delete e4[r4.shift()], e4[t4 + " "] = n4;
            };
          }
          function le2(e4) {
            return e4[S2] = true, e4;
          }
          function ce2(e4) {
            var t4 = C2.createElement("fieldset");
            try {
              return !!e4(t4);
            } catch (e5) {
              return false;
            } finally {
              t4.parentNode && t4.parentNode.removeChild(t4), t4 = null;
            }
          }
          function fe2(e4, t4) {
            var n4 = e4.split("|"), r4 = n4.length;
            while (r4--)
              b2.attrHandle[n4[r4]] = t4;
          }
          function pe2(e4, t4) {
            var n4 = t4 && e4, r4 = n4 && e4.nodeType === 1 && t4.nodeType === 1 && e4.sourceIndex - t4.sourceIndex;
            if (r4)
              return r4;
            if (n4) {
              while (n4 = n4.nextSibling)
                if (n4 === t4)
                  return -1;
            }
            return e4 ? 1 : -1;
          }
          function de2(t4) {
            return function(e4) {
              return e4.nodeName.toLowerCase() === "input" && e4.type === t4;
            };
          }
          function he2(n4) {
            return function(e4) {
              var t4 = e4.nodeName.toLowerCase();
              return (t4 === "input" || t4 === "button") && e4.type === n4;
            };
          }
          function ge2(t4) {
            return function(e4) {
              return "form" in e4 ? e4.parentNode && e4.disabled === false ? "label" in e4 ? "label" in e4.parentNode ? e4.parentNode.disabled === t4 : e4.disabled === t4 : e4.isDisabled === t4 || e4.isDisabled !== !t4 && ae2(e4) === t4 : e4.disabled === t4 : "label" in e4 && e4.disabled === t4;
            };
          }
          function ve2(a4) {
            return le2(function(o4) {
              return o4 = +o4, le2(function(e4, t4) {
                var n4, r4 = a4([], e4.length, o4), i4 = r4.length;
                while (i4--)
                  e4[n4 = r4[i4]] && (e4[n4] = !(t4[n4] = e4[n4]));
              });
            });
          }
          function ye2(e4) {
            return e4 && typeof e4.getElementsByTagName != "undefined" && e4;
          }
          for (e3 in d2 = se2.support = {}, i3 = se2.isXML = function(e4) {
            var t4 = e4 && e4.namespaceURI, n4 = e4 && (e4.ownerDocument || e4).documentElement;
            return !Y2.test(t4 || n4 && n4.nodeName || "HTML");
          }, T2 = se2.setDocument = function(e4) {
            var t4, n4, r4 = e4 ? e4.ownerDocument || e4 : p2;
            return r4 != C2 && r4.nodeType === 9 && r4.documentElement && (a3 = (C2 = r4).documentElement, E2 = !i3(C2), p2 != C2 && (n4 = C2.defaultView) && n4.top !== n4 && (n4.addEventListener ? n4.addEventListener("unload", oe2, false) : n4.attachEvent && n4.attachEvent("onunload", oe2)), d2.scope = ce2(function(e5) {
              return a3.appendChild(e5).appendChild(C2.createElement("div")), typeof e5.querySelectorAll != "undefined" && !e5.querySelectorAll(":scope fieldset div").length;
            }), d2.attributes = ce2(function(e5) {
              return e5.className = "i", !e5.getAttribute("className");
            }), d2.getElementsByTagName = ce2(function(e5) {
              return e5.appendChild(C2.createComment("")), !e5.getElementsByTagName("*").length;
            }), d2.getElementsByClassName = K2.test(C2.getElementsByClassName), d2.getById = ce2(function(e5) {
              return a3.appendChild(e5).id = S2, !C2.getElementsByName || !C2.getElementsByName(S2).length;
            }), d2.getById ? (b2.filter.ID = function(e5) {
              var t5 = e5.replace(te2, ne2);
              return function(e6) {
                return e6.getAttribute("id") === t5;
              };
            }, b2.find.ID = function(e5, t5) {
              if (typeof t5.getElementById != "undefined" && E2) {
                var n5 = t5.getElementById(e5);
                return n5 ? [n5] : [];
              }
            }) : (b2.filter.ID = function(e5) {
              var n5 = e5.replace(te2, ne2);
              return function(e6) {
                var t5 = typeof e6.getAttributeNode != "undefined" && e6.getAttributeNode("id");
                return t5 && t5.value === n5;
              };
            }, b2.find.ID = function(e5, t5) {
              if (typeof t5.getElementById != "undefined" && E2) {
                var n5, r5, i4, o4 = t5.getElementById(e5);
                if (o4) {
                  if ((n5 = o4.getAttributeNode("id")) && n5.value === e5)
                    return [o4];
                  i4 = t5.getElementsByName(e5), r5 = 0;
                  while (o4 = i4[r5++])
                    if ((n5 = o4.getAttributeNode("id")) && n5.value === e5)
                      return [o4];
                }
                return [];
              }
            }), b2.find.TAG = d2.getElementsByTagName ? function(e5, t5) {
              return typeof t5.getElementsByTagName != "undefined" ? t5.getElementsByTagName(e5) : d2.qsa ? t5.querySelectorAll(e5) : void 0;
            } : function(e5, t5) {
              var n5, r5 = [], i4 = 0, o4 = t5.getElementsByTagName(e5);
              if (e5 === "*") {
                while (n5 = o4[i4++])
                  n5.nodeType === 1 && r5.push(n5);
                return r5;
              }
              return o4;
            }, b2.find.CLASS = d2.getElementsByClassName && function(e5, t5) {
              if (typeof t5.getElementsByClassName != "undefined" && E2)
                return t5.getElementsByClassName(e5);
            }, s3 = [], v2 = [], (d2.qsa = K2.test(C2.querySelectorAll)) && (ce2(function(e5) {
              var t5;
              a3.appendChild(e5).innerHTML = "<a id='" + S2 + "'></a><select id='" + S2 + "-\r\\' msallowcapture=''><option selected=''></option></select>", e5.querySelectorAll("[msallowcapture^='']").length && v2.push("[*^$]=" + M2 + `*(?:''|"")`), e5.querySelectorAll("[selected]").length || v2.push("\\[" + M2 + "*(?:value|" + R2 + ")"), e5.querySelectorAll("[id~=" + S2 + "-]").length || v2.push("~="), (t5 = C2.createElement("input")).setAttribute("name", ""), e5.appendChild(t5), e5.querySelectorAll("[name='']").length || v2.push("\\[" + M2 + "*name" + M2 + "*=" + M2 + `*(?:''|"")`), e5.querySelectorAll(":checked").length || v2.push(":checked"), e5.querySelectorAll("a#" + S2 + "+*").length || v2.push(".#.+[+~]"), e5.querySelectorAll("\\\f"), v2.push("[\\r\\n\\f]");
            }), ce2(function(e5) {
              e5.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t5 = C2.createElement("input");
              t5.setAttribute("type", "hidden"), e5.appendChild(t5).setAttribute("name", "D"), e5.querySelectorAll("[name=d]").length && v2.push("name" + M2 + "*[*^$|!~]?="), e5.querySelectorAll(":enabled").length !== 2 && v2.push(":enabled", ":disabled"), a3.appendChild(e5).disabled = true, e5.querySelectorAll(":disabled").length !== 2 && v2.push(":enabled", ":disabled"), e5.querySelectorAll("*,:x"), v2.push(",.*:");
            })), (d2.matchesSelector = K2.test(c2 = a3.matches || a3.webkitMatchesSelector || a3.mozMatchesSelector || a3.oMatchesSelector || a3.msMatchesSelector)) && ce2(function(e5) {
              d2.disconnectedMatch = c2.call(e5, "*"), c2.call(e5, "[s!='']:x"), s3.push("!=", F2);
            }), v2 = v2.length && new RegExp(v2.join("|")), s3 = s3.length && new RegExp(s3.join("|")), t4 = K2.test(a3.compareDocumentPosition), y2 = t4 || K2.test(a3.contains) ? function(e5, t5) {
              var n5 = e5.nodeType === 9 ? e5.documentElement : e5, r5 = t5 && t5.parentNode;
              return e5 === r5 || !(!r5 || r5.nodeType !== 1 || !(n5.contains ? n5.contains(r5) : e5.compareDocumentPosition && 16 & e5.compareDocumentPosition(r5)));
            } : function(e5, t5) {
              if (t5) {
                while (t5 = t5.parentNode)
                  if (t5 === e5)
                    return true;
              }
              return false;
            }, j2 = t4 ? function(e5, t5) {
              if (e5 === t5)
                return l2 = true, 0;
              var n5 = !e5.compareDocumentPosition - !t5.compareDocumentPosition;
              return n5 || (1 & (n5 = (e5.ownerDocument || e5) == (t5.ownerDocument || t5) ? e5.compareDocumentPosition(t5) : 1) || !d2.sortDetached && t5.compareDocumentPosition(e5) === n5 ? e5 == C2 || e5.ownerDocument == p2 && y2(p2, e5) ? -1 : t5 == C2 || t5.ownerDocument == p2 && y2(p2, t5) ? 1 : u2 ? P2(u2, e5) - P2(u2, t5) : 0 : 4 & n5 ? -1 : 1);
            } : function(e5, t5) {
              if (e5 === t5)
                return l2 = true, 0;
              var n5, r5 = 0, i4 = e5.parentNode, o4 = t5.parentNode, a4 = [e5], s4 = [t5];
              if (!i4 || !o4)
                return e5 == C2 ? -1 : t5 == C2 ? 1 : i4 ? -1 : o4 ? 1 : u2 ? P2(u2, e5) - P2(u2, t5) : 0;
              if (i4 === o4)
                return pe2(e5, t5);
              n5 = e5;
              while (n5 = n5.parentNode)
                a4.unshift(n5);
              n5 = t5;
              while (n5 = n5.parentNode)
                s4.unshift(n5);
              while (a4[r5] === s4[r5])
                r5++;
              return r5 ? pe2(a4[r5], s4[r5]) : a4[r5] == p2 ? -1 : s4[r5] == p2 ? 1 : 0;
            }), C2;
          }, se2.matches = function(e4, t4) {
            return se2(e4, null, null, t4);
          }, se2.matchesSelector = function(e4, t4) {
            if (T2(e4), d2.matchesSelector && E2 && !N2[t4 + " "] && (!s3 || !s3.test(t4)) && (!v2 || !v2.test(t4)))
              try {
                var n4 = c2.call(e4, t4);
                if (n4 || d2.disconnectedMatch || e4.document && e4.document.nodeType !== 11)
                  return n4;
              } catch (e5) {
                N2(t4, true);
              }
            return 0 < se2(t4, C2, null, [e4]).length;
          }, se2.contains = function(e4, t4) {
            return (e4.ownerDocument || e4) != C2 && T2(e4), y2(e4, t4);
          }, se2.attr = function(e4, t4) {
            (e4.ownerDocument || e4) != C2 && T2(e4);
            var n4 = b2.attrHandle[t4.toLowerCase()], r4 = n4 && D2.call(b2.attrHandle, t4.toLowerCase()) ? n4(e4, t4, !E2) : void 0;
            return r4 !== void 0 ? r4 : d2.attributes || !E2 ? e4.getAttribute(t4) : (r4 = e4.getAttributeNode(t4)) && r4.specified ? r4.value : null;
          }, se2.escape = function(e4) {
            return (e4 + "").replace(re2, ie2);
          }, se2.error = function(e4) {
            throw new Error("Syntax error, unrecognized expression: " + e4);
          }, se2.uniqueSort = function(e4) {
            var t4, n4 = [], r4 = 0, i4 = 0;
            if (l2 = !d2.detectDuplicates, u2 = !d2.sortStable && e4.slice(0), e4.sort(j2), l2) {
              while (t4 = e4[i4++])
                t4 === e4[i4] && (r4 = n4.push(i4));
              while (r4--)
                e4.splice(n4[r4], 1);
            }
            return u2 = null, e4;
          }, o3 = se2.getText = function(e4) {
            var t4, n4 = "", r4 = 0, i4 = e4.nodeType;
            if (i4) {
              if (i4 === 1 || i4 === 9 || i4 === 11) {
                if (typeof e4.textContent == "string")
                  return e4.textContent;
                for (e4 = e4.firstChild; e4; e4 = e4.nextSibling)
                  n4 += o3(e4);
              } else if (i4 === 3 || i4 === 4)
                return e4.nodeValue;
            } else
              while (t4 = e4[r4++])
                n4 += o3(t4);
            return n4;
          }, (b2 = se2.selectors = { cacheLength: 50, createPseudo: le2, match: G2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e4) {
            return e4[1] = e4[1].replace(te2, ne2), e4[3] = (e4[3] || e4[4] || e4[5] || "").replace(te2, ne2), e4[2] === "~=" && (e4[3] = " " + e4[3] + " "), e4.slice(0, 4);
          }, CHILD: function(e4) {
            return e4[1] = e4[1].toLowerCase(), e4[1].slice(0, 3) === "nth" ? (e4[3] || se2.error(e4[0]), e4[4] = +(e4[4] ? e4[5] + (e4[6] || 1) : 2 * (e4[3] === "even" || e4[3] === "odd")), e4[5] = +(e4[7] + e4[8] || e4[3] === "odd")) : e4[3] && se2.error(e4[0]), e4;
          }, PSEUDO: function(e4) {
            var t4, n4 = !e4[6] && e4[2];
            return G2.CHILD.test(e4[0]) ? null : (e4[3] ? e4[2] = e4[4] || e4[5] || "" : n4 && X2.test(n4) && (t4 = h2(n4, true)) && (t4 = n4.indexOf(")", n4.length - t4) - n4.length) && (e4[0] = e4[0].slice(0, t4), e4[2] = n4.slice(0, t4)), e4.slice(0, 3));
          } }, filter: { TAG: function(e4) {
            var t4 = e4.replace(te2, ne2).toLowerCase();
            return e4 === "*" ? function() {
              return true;
            } : function(e5) {
              return e5.nodeName && e5.nodeName.toLowerCase() === t4;
            };
          }, CLASS: function(e4) {
            var t4 = m2[e4 + " "];
            return t4 || (t4 = new RegExp("(^|" + M2 + ")" + e4 + "(" + M2 + "|$)")) && m2(e4, function(e5) {
              return t4.test(typeof e5.className == "string" && e5.className || typeof e5.getAttribute != "undefined" && e5.getAttribute("class") || "");
            });
          }, ATTR: function(n4, r4, i4) {
            return function(e4) {
              var t4 = se2.attr(e4, n4);
              return t4 == null ? r4 === "!=" : !r4 || (t4 += "", r4 === "=" ? t4 === i4 : r4 === "!=" ? t4 !== i4 : r4 === "^=" ? i4 && t4.indexOf(i4) === 0 : r4 === "*=" ? i4 && -1 < t4.indexOf(i4) : r4 === "$=" ? i4 && t4.slice(-i4.length) === i4 : r4 === "~=" ? -1 < (" " + t4.replace(B2, " ") + " ").indexOf(i4) : r4 === "|=" && (t4 === i4 || t4.slice(0, i4.length + 1) === i4 + "-"));
            };
          }, CHILD: function(h3, e4, t4, g3, v3) {
            var y3 = h3.slice(0, 3) !== "nth", m3 = h3.slice(-4) !== "last", x3 = e4 === "of-type";
            return g3 === 1 && v3 === 0 ? function(e5) {
              return !!e5.parentNode;
            } : function(e5, t5, n4) {
              var r4, i4, o4, a4, s4, u3, l3 = y3 !== m3 ? "nextSibling" : "previousSibling", c3 = e5.parentNode, f3 = x3 && e5.nodeName.toLowerCase(), p3 = !n4 && !x3, d3 = false;
              if (c3) {
                if (y3) {
                  while (l3) {
                    a4 = e5;
                    while (a4 = a4[l3])
                      if (x3 ? a4.nodeName.toLowerCase() === f3 : a4.nodeType === 1)
                        return false;
                    u3 = l3 = h3 === "only" && !u3 && "nextSibling";
                  }
                  return true;
                }
                if (u3 = [m3 ? c3.firstChild : c3.lastChild], m3 && p3) {
                  d3 = (s4 = (r4 = (i4 = (o4 = (a4 = c3)[S2] || (a4[S2] = {}))[a4.uniqueID] || (o4[a4.uniqueID] = {}))[h3] || [])[0] === k2 && r4[1]) && r4[2], a4 = s4 && c3.childNodes[s4];
                  while (a4 = ++s4 && a4 && a4[l3] || (d3 = s4 = 0) || u3.pop())
                    if (a4.nodeType === 1 && ++d3 && a4 === e5) {
                      i4[h3] = [k2, s4, d3];
                      break;
                    }
                } else if (p3 && (d3 = s4 = (r4 = (i4 = (o4 = (a4 = e5)[S2] || (a4[S2] = {}))[a4.uniqueID] || (o4[a4.uniqueID] = {}))[h3] || [])[0] === k2 && r4[1]), d3 === false) {
                  while (a4 = ++s4 && a4 && a4[l3] || (d3 = s4 = 0) || u3.pop())
                    if ((x3 ? a4.nodeName.toLowerCase() === f3 : a4.nodeType === 1) && ++d3 && (p3 && ((i4 = (o4 = a4[S2] || (a4[S2] = {}))[a4.uniqueID] || (o4[a4.uniqueID] = {}))[h3] = [k2, d3]), a4 === e5))
                      break;
                }
                return (d3 -= v3) === g3 || d3 % g3 == 0 && 0 <= d3 / g3;
              }
            };
          }, PSEUDO: function(e4, o4) {
            var t4, a4 = b2.pseudos[e4] || b2.setFilters[e4.toLowerCase()] || se2.error("unsupported pseudo: " + e4);
            return a4[S2] ? a4(o4) : 1 < a4.length ? (t4 = [e4, e4, "", o4], b2.setFilters.hasOwnProperty(e4.toLowerCase()) ? le2(function(e5, t5) {
              var n4, r4 = a4(e5, o4), i4 = r4.length;
              while (i4--)
                e5[n4 = P2(e5, r4[i4])] = !(t5[n4] = r4[i4]);
            }) : function(e5) {
              return a4(e5, 0, t4);
            }) : a4;
          } }, pseudos: { not: le2(function(e4) {
            var r4 = [], i4 = [], s4 = f2(e4.replace($13, "$1"));
            return s4[S2] ? le2(function(e5, t4, n4, r5) {
              var i5, o4 = s4(e5, null, r5, []), a4 = e5.length;
              while (a4--)
                (i5 = o4[a4]) && (e5[a4] = !(t4[a4] = i5));
            }) : function(e5, t4, n4) {
              return r4[0] = e5, s4(r4, null, n4, i4), r4[0] = null, !i4.pop();
            };
          }), has: le2(function(t4) {
            return function(e4) {
              return 0 < se2(t4, e4).length;
            };
          }), contains: le2(function(t4) {
            return t4 = t4.replace(te2, ne2), function(e4) {
              return -1 < (e4.textContent || o3(e4)).indexOf(t4);
            };
          }), lang: le2(function(n4) {
            return V2.test(n4 || "") || se2.error("unsupported lang: " + n4), n4 = n4.replace(te2, ne2).toLowerCase(), function(e4) {
              var t4;
              do {
                if (t4 = E2 ? e4.lang : e4.getAttribute("xml:lang") || e4.getAttribute("lang"))
                  return (t4 = t4.toLowerCase()) === n4 || t4.indexOf(n4 + "-") === 0;
              } while ((e4 = e4.parentNode) && e4.nodeType === 1);
              return false;
            };
          }), target: function(e4) {
            var t4 = n3.location && n3.location.hash;
            return t4 && t4.slice(1) === e4.id;
          }, root: function(e4) {
            return e4 === a3;
          }, focus: function(e4) {
            return e4 === C2.activeElement && (!C2.hasFocus || C2.hasFocus()) && !!(e4.type || e4.href || ~e4.tabIndex);
          }, enabled: ge2(false), disabled: ge2(true), checked: function(e4) {
            var t4 = e4.nodeName.toLowerCase();
            return t4 === "input" && !!e4.checked || t4 === "option" && !!e4.selected;
          }, selected: function(e4) {
            return e4.parentNode && e4.parentNode.selectedIndex, e4.selected === true;
          }, empty: function(e4) {
            for (e4 = e4.firstChild; e4; e4 = e4.nextSibling)
              if (e4.nodeType < 6)
                return false;
            return true;
          }, parent: function(e4) {
            return !b2.pseudos.empty(e4);
          }, header: function(e4) {
            return J2.test(e4.nodeName);
          }, input: function(e4) {
            return Q2.test(e4.nodeName);
          }, button: function(e4) {
            var t4 = e4.nodeName.toLowerCase();
            return t4 === "input" && e4.type === "button" || t4 === "button";
          }, text: function(e4) {
            var t4;
            return e4.nodeName.toLowerCase() === "input" && e4.type === "text" && ((t4 = e4.getAttribute("type")) == null || t4.toLowerCase() === "text");
          }, first: ve2(function() {
            return [0];
          }), last: ve2(function(e4, t4) {
            return [t4 - 1];
          }), eq: ve2(function(e4, t4, n4) {
            return [n4 < 0 ? n4 + t4 : n4];
          }), even: ve2(function(e4, t4) {
            for (var n4 = 0; n4 < t4; n4 += 2)
              e4.push(n4);
            return e4;
          }), odd: ve2(function(e4, t4) {
            for (var n4 = 1; n4 < t4; n4 += 2)
              e4.push(n4);
            return e4;
          }), lt: ve2(function(e4, t4, n4) {
            for (var r4 = n4 < 0 ? n4 + t4 : t4 < n4 ? t4 : n4; 0 <= --r4; )
              e4.push(r4);
            return e4;
          }), gt: ve2(function(e4, t4, n4) {
            for (var r4 = n4 < 0 ? n4 + t4 : n4; ++r4 < t4; )
              e4.push(r4);
            return e4;
          }) } }).pseudos.nth = b2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true })
            b2.pseudos[e3] = de2(e3);
          for (e3 in { submit: true, reset: true })
            b2.pseudos[e3] = he2(e3);
          function me2() {
          }
          function xe2(e4) {
            for (var t4 = 0, n4 = e4.length, r4 = ""; t4 < n4; t4++)
              r4 += e4[t4].value;
            return r4;
          }
          function be2(s4, e4, t4) {
            var u3 = e4.dir, l3 = e4.next, c3 = l3 || u3, f3 = t4 && c3 === "parentNode", p3 = r3++;
            return e4.first ? function(e5, t5, n4) {
              while (e5 = e5[u3])
                if (e5.nodeType === 1 || f3)
                  return s4(e5, t5, n4);
              return false;
            } : function(e5, t5, n4) {
              var r4, i4, o4, a4 = [k2, p3];
              if (n4) {
                while (e5 = e5[u3])
                  if ((e5.nodeType === 1 || f3) && s4(e5, t5, n4))
                    return true;
              } else
                while (e5 = e5[u3])
                  if (e5.nodeType === 1 || f3)
                    if (i4 = (o4 = e5[S2] || (e5[S2] = {}))[e5.uniqueID] || (o4[e5.uniqueID] = {}), l3 && l3 === e5.nodeName.toLowerCase())
                      e5 = e5[u3] || e5;
                    else {
                      if ((r4 = i4[c3]) && r4[0] === k2 && r4[1] === p3)
                        return a4[2] = r4[2];
                      if ((i4[c3] = a4)[2] = s4(e5, t5, n4))
                        return true;
                    }
              return false;
            };
          }
          function we2(i4) {
            return 1 < i4.length ? function(e4, t4, n4) {
              var r4 = i4.length;
              while (r4--)
                if (!i4[r4](e4, t4, n4))
                  return false;
              return true;
            } : i4[0];
          }
          function Te2(e4, t4, n4, r4, i4) {
            for (var o4, a4 = [], s4 = 0, u3 = e4.length, l3 = t4 != null; s4 < u3; s4++)
              (o4 = e4[s4]) && (n4 && !n4(o4, r4, i4) || (a4.push(o4), l3 && t4.push(s4)));
            return a4;
          }
          function Ce2(d3, h3, g3, v3, y3, e4) {
            return v3 && !v3[S2] && (v3 = Ce2(v3)), y3 && !y3[S2] && (y3 = Ce2(y3, e4)), le2(function(e5, t4, n4, r4) {
              var i4, o4, a4, s4 = [], u3 = [], l3 = t4.length, c3 = e5 || function(e6, t5, n5) {
                for (var r5 = 0, i5 = t5.length; r5 < i5; r5++)
                  se2(e6, t5[r5], n5);
                return n5;
              }(h3 || "*", n4.nodeType ? [n4] : n4, []), f3 = !d3 || !e5 && h3 ? c3 : Te2(c3, s4, d3, n4, r4), p3 = g3 ? y3 || (e5 ? d3 : l3 || v3) ? [] : t4 : f3;
              if (g3 && g3(f3, p3, n4, r4), v3) {
                i4 = Te2(p3, u3), v3(i4, [], n4, r4), o4 = i4.length;
                while (o4--)
                  (a4 = i4[o4]) && (p3[u3[o4]] = !(f3[u3[o4]] = a4));
              }
              if (e5) {
                if (y3 || d3) {
                  if (y3) {
                    i4 = [], o4 = p3.length;
                    while (o4--)
                      (a4 = p3[o4]) && i4.push(f3[o4] = a4);
                    y3(null, p3 = [], i4, r4);
                  }
                  o4 = p3.length;
                  while (o4--)
                    (a4 = p3[o4]) && -1 < (i4 = y3 ? P2(e5, a4) : s4[o4]) && (e5[i4] = !(t4[i4] = a4));
                }
              } else
                p3 = Te2(p3 === t4 ? p3.splice(l3, p3.length) : p3), y3 ? y3(null, t4, p3, r4) : H2.apply(t4, p3);
            });
          }
          function Ee2(e4) {
            for (var i4, t4, n4, r4 = e4.length, o4 = b2.relative[e4[0].type], a4 = o4 || b2.relative[" "], s4 = o4 ? 1 : 0, u3 = be2(function(e5) {
              return e5 === i4;
            }, a4, true), l3 = be2(function(e5) {
              return -1 < P2(i4, e5);
            }, a4, true), c3 = [function(e5, t5, n5) {
              var r5 = !o4 && (n5 || t5 !== w2) || ((i4 = t5).nodeType ? u3(e5, t5, n5) : l3(e5, t5, n5));
              return i4 = null, r5;
            }]; s4 < r4; s4++)
              if (t4 = b2.relative[e4[s4].type])
                c3 = [be2(we2(c3), t4)];
              else {
                if ((t4 = b2.filter[e4[s4].type].apply(null, e4[s4].matches))[S2]) {
                  for (n4 = ++s4; n4 < r4; n4++)
                    if (b2.relative[e4[n4].type])
                      break;
                  return Ce2(1 < s4 && we2(c3), 1 < s4 && xe2(e4.slice(0, s4 - 1).concat({ value: e4[s4 - 2].type === " " ? "*" : "" })).replace($13, "$1"), t4, s4 < n4 && Ee2(e4.slice(s4, n4)), n4 < r4 && Ee2(e4 = e4.slice(n4)), n4 < r4 && xe2(e4));
                }
                c3.push(t4);
              }
            return we2(c3);
          }
          return me2.prototype = b2.filters = b2.pseudos, b2.setFilters = new me2(), h2 = se2.tokenize = function(e4, t4) {
            var n4, r4, i4, o4, a4, s4, u3, l3 = x2[e4 + " "];
            if (l3)
              return t4 ? 0 : l3.slice(0);
            a4 = e4, s4 = [], u3 = b2.preFilter;
            while (a4) {
              for (o4 in n4 && !(r4 = _2.exec(a4)) || (r4 && (a4 = a4.slice(r4[0].length) || a4), s4.push(i4 = [])), n4 = false, (r4 = z2.exec(a4)) && (n4 = r4.shift(), i4.push({ value: n4, type: r4[0].replace($13, " ") }), a4 = a4.slice(n4.length)), b2.filter)
                !(r4 = G2[o4].exec(a4)) || u3[o4] && !(r4 = u3[o4](r4)) || (n4 = r4.shift(), i4.push({ value: n4, type: o4, matches: r4 }), a4 = a4.slice(n4.length));
              if (!n4)
                break;
            }
            return t4 ? a4.length : a4 ? se2.error(e4) : x2(e4, s4).slice(0);
          }, f2 = se2.compile = function(e4, t4) {
            var n4, v3, y3, m3, x3, r4, i4 = [], o4 = [], a4 = A2[e4 + " "];
            if (!a4) {
              t4 || (t4 = h2(e4)), n4 = t4.length;
              while (n4--)
                (a4 = Ee2(t4[n4]))[S2] ? i4.push(a4) : o4.push(a4);
              (a4 = A2(e4, (v3 = o4, m3 = 0 < (y3 = i4).length, x3 = 0 < v3.length, r4 = function(e5, t5, n5, r5, i5) {
                var o5, a5, s4, u3 = 0, l3 = "0", c3 = e5 && [], f3 = [], p3 = w2, d3 = e5 || x3 && b2.find.TAG("*", i5), h3 = k2 += p3 == null ? 1 : Math.random() || 0.1, g3 = d3.length;
                for (i5 && (w2 = t5 == C2 || t5 || i5); l3 !== g3 && (o5 = d3[l3]) != null; l3++) {
                  if (x3 && o5) {
                    a5 = 0, t5 || o5.ownerDocument == C2 || (T2(o5), n5 = !E2);
                    while (s4 = v3[a5++])
                      if (s4(o5, t5 || C2, n5)) {
                        r5.push(o5);
                        break;
                      }
                    i5 && (k2 = h3);
                  }
                  m3 && ((o5 = !s4 && o5) && u3--, e5 && c3.push(o5));
                }
                if (u3 += l3, m3 && l3 !== u3) {
                  a5 = 0;
                  while (s4 = y3[a5++])
                    s4(c3, f3, t5, n5);
                  if (e5) {
                    if (0 < u3)
                      while (l3--)
                        c3[l3] || f3[l3] || (f3[l3] = q2.call(r5));
                    f3 = Te2(f3);
                  }
                  H2.apply(r5, f3), i5 && !e5 && 0 < f3.length && 1 < u3 + y3.length && se2.uniqueSort(r5);
                }
                return i5 && (k2 = h3, w2 = p3), c3;
              }, m3 ? le2(r4) : r4))).selector = e4;
            }
            return a4;
          }, g2 = se2.select = function(e4, t4, n4, r4) {
            var i4, o4, a4, s4, u3, l3 = typeof e4 == "function" && e4, c3 = !r4 && h2(e4 = l3.selector || e4);
            if (n4 = n4 || [], c3.length === 1) {
              if (2 < (o4 = c3[0] = c3[0].slice(0)).length && (a4 = o4[0]).type === "ID" && t4.nodeType === 9 && E2 && b2.relative[o4[1].type]) {
                if (!(t4 = (b2.find.ID(a4.matches[0].replace(te2, ne2), t4) || [])[0]))
                  return n4;
                l3 && (t4 = t4.parentNode), e4 = e4.slice(o4.shift().value.length);
              }
              i4 = G2.needsContext.test(e4) ? 0 : o4.length;
              while (i4--) {
                if (a4 = o4[i4], b2.relative[s4 = a4.type])
                  break;
                if ((u3 = b2.find[s4]) && (r4 = u3(a4.matches[0].replace(te2, ne2), ee2.test(o4[0].type) && ye2(t4.parentNode) || t4))) {
                  if (o4.splice(i4, 1), !(e4 = r4.length && xe2(o4)))
                    return H2.apply(n4, r4), n4;
                  break;
                }
              }
            }
            return (l3 || f2(e4, c3))(r4, t4, !E2, n4, !t4 || ee2.test(e4) && ye2(t4.parentNode) || t4), n4;
          }, d2.sortStable = S2.split("").sort(j2).join("") === S2, d2.detectDuplicates = !!l2, T2(), d2.sortDetached = ce2(function(e4) {
            return 1 & e4.compareDocumentPosition(C2.createElement("fieldset"));
          }), ce2(function(e4) {
            return e4.innerHTML = "<a href='#'></a>", e4.firstChild.getAttribute("href") === "#";
          }) || fe2("type|href|height|width", function(e4, t4, n4) {
            if (!n4)
              return e4.getAttribute(t4, t4.toLowerCase() === "type" ? 1 : 2);
          }), d2.attributes && ce2(function(e4) {
            return e4.innerHTML = "<input/>", e4.firstChild.setAttribute("value", ""), e4.firstChild.getAttribute("value") === "";
          }) || fe2("value", function(e4, t4, n4) {
            if (!n4 && e4.nodeName.toLowerCase() === "input")
              return e4.defaultValue;
          }), ce2(function(e4) {
            return e4.getAttribute("disabled") == null;
          }) || fe2(R2, function(e4, t4, n4) {
            var r4;
            if (!n4)
              return e4[t4] === true ? t4.toLowerCase() : (r4 = e4.getAttributeNode(t4)) && r4.specified ? r4.value : null;
          }), se2;
        }(C);
        S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
        var h = function(e3, t3, n3) {
          var r3 = [], i3 = n3 !== void 0;
          while ((e3 = e3[t3]) && e3.nodeType !== 9)
            if (e3.nodeType === 1) {
              if (i3 && S(e3).is(n3))
                break;
              r3.push(e3);
            }
          return r3;
        }, T = function(e3, t3) {
          for (var n3 = []; e3; e3 = e3.nextSibling)
            e3.nodeType === 1 && e3 !== t3 && n3.push(e3);
          return n3;
        }, k = S.expr.match.needsContext;
        function A(e3, t3) {
          return e3.nodeName && e3.nodeName.toLowerCase() === t3.toLowerCase();
        }
        var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function j(e3, n3, r3) {
          return m(n3) ? S.grep(e3, function(e4, t3) {
            return !!n3.call(e4, t3, e4) !== r3;
          }) : n3.nodeType ? S.grep(e3, function(e4) {
            return e4 === n3 !== r3;
          }) : typeof n3 != "string" ? S.grep(e3, function(e4) {
            return -1 < i2.call(n3, e4) !== r3;
          }) : S.filter(n3, e3, r3);
        }
        S.filter = function(e3, t3, n3) {
          var r3 = t3[0];
          return n3 && (e3 = ":not(" + e3 + ")"), t3.length === 1 && r3.nodeType === 1 ? S.find.matchesSelector(r3, e3) ? [r3] : [] : S.find.matches(e3, S.grep(t3, function(e4) {
            return e4.nodeType === 1;
          }));
        }, S.fn.extend({ find: function(e3) {
          var t3, n3, r3 = this.length, i3 = this;
          if (typeof e3 != "string")
            return this.pushStack(S(e3).filter(function() {
              for (t3 = 0; t3 < r3; t3++)
                if (S.contains(i3[t3], this))
                  return true;
            }));
          for (n3 = this.pushStack([]), t3 = 0; t3 < r3; t3++)
            S.find(e3, i3[t3], n3);
          return 1 < r3 ? S.uniqueSort(n3) : n3;
        }, filter: function(e3) {
          return this.pushStack(j(this, e3 || [], false));
        }, not: function(e3) {
          return this.pushStack(j(this, e3 || [], true));
        }, is: function(e3) {
          return !!j(this, typeof e3 == "string" && k.test(e3) ? S(e3) : e3 || [], false).length;
        } });
        var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (S.fn.init = function(e3, t3, n3) {
          var r3, i3;
          if (!e3)
            return this;
          if (n3 = n3 || D, typeof e3 == "string") {
            if (!(r3 = e3[0] === "<" && e3[e3.length - 1] === ">" && 3 <= e3.length ? [null, e3, null] : q.exec(e3)) || !r3[1] && t3)
              return !t3 || t3.jquery ? (t3 || n3).find(e3) : this.constructor(t3).find(e3);
            if (r3[1]) {
              if (t3 = t3 instanceof S ? t3[0] : t3, S.merge(this, S.parseHTML(r3[1], t3 && t3.nodeType ? t3.ownerDocument || t3 : E, true)), N.test(r3[1]) && S.isPlainObject(t3))
                for (r3 in t3)
                  m(this[r3]) ? this[r3](t3[r3]) : this.attr(r3, t3[r3]);
              return this;
            }
            return (i3 = E.getElementById(r3[2])) && (this[0] = i3, this.length = 1), this;
          }
          return e3.nodeType ? (this[0] = e3, this.length = 1, this) : m(e3) ? n3.ready !== void 0 ? n3.ready(e3) : e3(S) : S.makeArray(e3, this);
        }).prototype = S.fn, D = S(E);
        var L = /^(?:parents|prev(?:Until|All))/, H = { children: true, contents: true, next: true, prev: true };
        function O(e3, t3) {
          while ((e3 = e3[t3]) && e3.nodeType !== 1)
            ;
          return e3;
        }
        S.fn.extend({ has: function(e3) {
          var t3 = S(e3, this), n3 = t3.length;
          return this.filter(function() {
            for (var e4 = 0; e4 < n3; e4++)
              if (S.contains(this, t3[e4]))
                return true;
          });
        }, closest: function(e3, t3) {
          var n3, r3 = 0, i3 = this.length, o3 = [], a3 = typeof e3 != "string" && S(e3);
          if (!k.test(e3)) {
            for (; r3 < i3; r3++)
              for (n3 = this[r3]; n3 && n3 !== t3; n3 = n3.parentNode)
                if (n3.nodeType < 11 && (a3 ? -1 < a3.index(n3) : n3.nodeType === 1 && S.find.matchesSelector(n3, e3))) {
                  o3.push(n3);
                  break;
                }
          }
          return this.pushStack(1 < o3.length ? S.uniqueSort(o3) : o3);
        }, index: function(e3) {
          return e3 ? typeof e3 == "string" ? i2.call(S(e3), this[0]) : i2.call(this, e3.jquery ? e3[0] : e3) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function(e3, t3) {
          return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e3, t3))));
        }, addBack: function(e3) {
          return this.add(e3 == null ? this.prevObject : this.prevObject.filter(e3));
        } }), S.each({ parent: function(e3) {
          var t3 = e3.parentNode;
          return t3 && t3.nodeType !== 11 ? t3 : null;
        }, parents: function(e3) {
          return h(e3, "parentNode");
        }, parentsUntil: function(e3, t3, n3) {
          return h(e3, "parentNode", n3);
        }, next: function(e3) {
          return O(e3, "nextSibling");
        }, prev: function(e3) {
          return O(e3, "previousSibling");
        }, nextAll: function(e3) {
          return h(e3, "nextSibling");
        }, prevAll: function(e3) {
          return h(e3, "previousSibling");
        }, nextUntil: function(e3, t3, n3) {
          return h(e3, "nextSibling", n3);
        }, prevUntil: function(e3, t3, n3) {
          return h(e3, "previousSibling", n3);
        }, siblings: function(e3) {
          return T((e3.parentNode || {}).firstChild, e3);
        }, children: function(e3) {
          return T(e3.firstChild);
        }, contents: function(e3) {
          return e3.contentDocument != null && r2(e3.contentDocument) ? e3.contentDocument : (A(e3, "template") && (e3 = e3.content || e3), S.merge([], e3.childNodes));
        } }, function(r3, i3) {
          S.fn[r3] = function(e3, t3) {
            var n3 = S.map(this, i3, e3);
            return r3.slice(-5) !== "Until" && (t3 = e3), t3 && typeof t3 == "string" && (n3 = S.filter(t3, n3)), 1 < this.length && (H[r3] || S.uniqueSort(n3), L.test(r3) && n3.reverse()), this.pushStack(n3);
          };
        });
        var P = /[^\x20\t\r\n\f]+/g;
        function R(e3) {
          return e3;
        }
        function M(e3) {
          throw e3;
        }
        function I(e3, t3, n3, r3) {
          var i3;
          try {
            e3 && m(i3 = e3.promise) ? i3.call(e3).done(t3).fail(n3) : e3 && m(i3 = e3.then) ? i3.call(e3, t3, n3) : t3.apply(void 0, [e3].slice(r3));
          } catch (e4) {
            n3.apply(void 0, [e4]);
          }
        }
        S.Callbacks = function(r3) {
          var e3, n3;
          r3 = typeof r3 == "string" ? (e3 = r3, n3 = {}, S.each(e3.match(P) || [], function(e4, t4) {
            n3[t4] = true;
          }), n3) : S.extend({}, r3);
          var i3, t3, o3, a3, s3 = [], u2 = [], l2 = -1, c2 = function() {
            for (a3 = a3 || r3.once, o3 = i3 = true; u2.length; l2 = -1) {
              t3 = u2.shift();
              while (++l2 < s3.length)
                s3[l2].apply(t3[0], t3[1]) === false && r3.stopOnFalse && (l2 = s3.length, t3 = false);
            }
            r3.memory || (t3 = false), i3 = false, a3 && (s3 = t3 ? [] : "");
          }, f2 = { add: function() {
            return s3 && (t3 && !i3 && (l2 = s3.length - 1, u2.push(t3)), function n4(e4) {
              S.each(e4, function(e5, t4) {
                m(t4) ? r3.unique && f2.has(t4) || s3.push(t4) : t4 && t4.length && w(t4) !== "string" && n4(t4);
              });
            }(arguments), t3 && !i3 && c2()), this;
          }, remove: function() {
            return S.each(arguments, function(e4, t4) {
              var n4;
              while (-1 < (n4 = S.inArray(t4, s3, n4)))
                s3.splice(n4, 1), n4 <= l2 && l2--;
            }), this;
          }, has: function(e4) {
            return e4 ? -1 < S.inArray(e4, s3) : 0 < s3.length;
          }, empty: function() {
            return s3 && (s3 = []), this;
          }, disable: function() {
            return a3 = u2 = [], s3 = t3 = "", this;
          }, disabled: function() {
            return !s3;
          }, lock: function() {
            return a3 = u2 = [], t3 || i3 || (s3 = t3 = ""), this;
          }, locked: function() {
            return !!a3;
          }, fireWith: function(e4, t4) {
            return a3 || (t4 = [e4, (t4 = t4 || []).slice ? t4.slice() : t4], u2.push(t4), i3 || c2()), this;
          }, fire: function() {
            return f2.fireWith(this, arguments), this;
          }, fired: function() {
            return !!o3;
          } };
          return f2;
        }, S.extend({ Deferred: function(e3) {
          var o3 = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]], i3 = "pending", a3 = { state: function() {
            return i3;
          }, always: function() {
            return s3.done(arguments).fail(arguments), this;
          }, "catch": function(e4) {
            return a3.then(null, e4);
          }, pipe: function() {
            var i4 = arguments;
            return S.Deferred(function(r3) {
              S.each(o3, function(e4, t3) {
                var n3 = m(i4[t3[4]]) && i4[t3[4]];
                s3[t3[1]](function() {
                  var e5 = n3 && n3.apply(this, arguments);
                  e5 && m(e5.promise) ? e5.promise().progress(r3.notify).done(r3.resolve).fail(r3.reject) : r3[t3[0] + "With"](this, n3 ? [e5] : arguments);
                });
              }), i4 = null;
            }).promise();
          }, then: function(t3, n3, r3) {
            var u2 = 0;
            function l2(i4, o4, a4, s4) {
              return function() {
                var n4 = this, r4 = arguments, e4 = function() {
                  var e5, t5;
                  if (!(i4 < u2)) {
                    if ((e5 = a4.apply(n4, r4)) === o4.promise())
                      throw new TypeError("Thenable self-resolution");
                    t5 = e5 && (typeof e5 == "object" || typeof e5 == "function") && e5.then, m(t5) ? s4 ? t5.call(e5, l2(u2, o4, R, s4), l2(u2, o4, M, s4)) : (u2++, t5.call(e5, l2(u2, o4, R, s4), l2(u2, o4, M, s4), l2(u2, o4, R, o4.notifyWith))) : (a4 !== R && (n4 = void 0, r4 = [e5]), (s4 || o4.resolveWith)(n4, r4));
                  }
                }, t4 = s4 ? e4 : function() {
                  try {
                    e4();
                  } catch (e5) {
                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e5, t4.stackTrace), u2 <= i4 + 1 && (a4 !== M && (n4 = void 0, r4 = [e5]), o4.rejectWith(n4, r4));
                  }
                };
                i4 ? t4() : (S.Deferred.getStackHook && (t4.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t4));
              };
            }
            return S.Deferred(function(e4) {
              o3[0][3].add(l2(0, e4, m(r3) ? r3 : R, e4.notifyWith)), o3[1][3].add(l2(0, e4, m(t3) ? t3 : R)), o3[2][3].add(l2(0, e4, m(n3) ? n3 : M));
            }).promise();
          }, promise: function(e4) {
            return e4 != null ? S.extend(e4, a3) : a3;
          } }, s3 = {};
          return S.each(o3, function(e4, t3) {
            var n3 = t3[2], r3 = t3[5];
            a3[t3[1]] = n3.add, r3 && n3.add(function() {
              i3 = r3;
            }, o3[3 - e4][2].disable, o3[3 - e4][3].disable, o3[0][2].lock, o3[0][3].lock), n3.add(t3[3].fire), s3[t3[0]] = function() {
              return s3[t3[0] + "With"](this === s3 ? void 0 : this, arguments), this;
            }, s3[t3[0] + "With"] = n3.fireWith;
          }), a3.promise(s3), e3 && e3.call(s3, s3), s3;
        }, when: function(e3) {
          var n3 = arguments.length, t3 = n3, r3 = Array(t3), i3 = s2.call(arguments), o3 = S.Deferred(), a3 = function(t4) {
            return function(e4) {
              r3[t4] = this, i3[t4] = 1 < arguments.length ? s2.call(arguments) : e4, --n3 || o3.resolveWith(r3, i3);
            };
          };
          if (n3 <= 1 && (I(e3, o3.done(a3(t3)).resolve, o3.reject, !n3), o3.state() === "pending" || m(i3[t3] && i3[t3].then)))
            return o3.then();
          while (t3--)
            I(i3[t3], a3(t3), o3.reject);
          return o3.promise();
        } });
        var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        S.Deferred.exceptionHook = function(e3, t3) {
          C.console && C.console.warn && e3 && W.test(e3.name) && C.console.warn("jQuery.Deferred exception: " + e3.message, e3.stack, t3);
        }, S.readyException = function(e3) {
          C.setTimeout(function() {
            throw e3;
          });
        };
        var F = S.Deferred();
        function B() {
          E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
        }
        S.fn.ready = function(e3) {
          return F.then(e3)["catch"](function(e4) {
            S.readyException(e4);
          }), this;
        }, S.extend({ isReady: false, readyWait: 1, ready: function(e3) {
          (e3 === true ? --S.readyWait : S.isReady) || (S.isReady = true) !== e3 && 0 < --S.readyWait || F.resolveWith(E, [S]);
        } }), S.ready.then = F.then, E.readyState === "complete" || E.readyState !== "loading" && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
        var $12 = function(e3, t3, n3, r3, i3, o3, a3) {
          var s3 = 0, u2 = e3.length, l2 = n3 == null;
          if (w(n3) === "object")
            for (s3 in i3 = true, n3)
              $12(e3, t3, s3, n3[s3], true, o3, a3);
          else if (r3 !== void 0 && (i3 = true, m(r3) || (a3 = true), l2 && (a3 ? (t3.call(e3, r3), t3 = null) : (l2 = t3, t3 = function(e4, t4, n4) {
            return l2.call(S(e4), n4);
          })), t3))
            for (; s3 < u2; s3++)
              t3(e3[s3], n3, a3 ? r3 : r3.call(e3[s3], s3, t3(e3[s3], n3)));
          return i3 ? e3 : l2 ? t3.call(e3) : u2 ? t3(e3[0], n3) : o3;
        }, _ = /^-ms-/, z = /-([a-z])/g;
        function U(e3, t3) {
          return t3.toUpperCase();
        }
        function X(e3) {
          return e3.replace(_, "ms-").replace(z, U);
        }
        var V = function(e3) {
          return e3.nodeType === 1 || e3.nodeType === 9 || !+e3.nodeType;
        };
        function G() {
          this.expando = S.expando + G.uid++;
        }
        G.uid = 1, G.prototype = { cache: function(e3) {
          var t3 = e3[this.expando];
          return t3 || (t3 = {}, V(e3) && (e3.nodeType ? e3[this.expando] = t3 : Object.defineProperty(e3, this.expando, { value: t3, configurable: true }))), t3;
        }, set: function(e3, t3, n3) {
          var r3, i3 = this.cache(e3);
          if (typeof t3 == "string")
            i3[X(t3)] = n3;
          else
            for (r3 in t3)
              i3[X(r3)] = t3[r3];
          return i3;
        }, get: function(e3, t3) {
          return t3 === void 0 ? this.cache(e3) : e3[this.expando] && e3[this.expando][X(t3)];
        }, access: function(e3, t3, n3) {
          return t3 === void 0 || t3 && typeof t3 == "string" && n3 === void 0 ? this.get(e3, t3) : (this.set(e3, t3, n3), n3 !== void 0 ? n3 : t3);
        }, remove: function(e3, t3) {
          var n3, r3 = e3[this.expando];
          if (r3 !== void 0) {
            if (t3 !== void 0) {
              n3 = (t3 = Array.isArray(t3) ? t3.map(X) : (t3 = X(t3)) in r3 ? [t3] : t3.match(P) || []).length;
              while (n3--)
                delete r3[t3[n3]];
            }
            (t3 === void 0 || S.isEmptyObject(r3)) && (e3.nodeType ? e3[this.expando] = void 0 : delete e3[this.expando]);
          }
        }, hasData: function(e3) {
          var t3 = e3[this.expando];
          return t3 !== void 0 && !S.isEmptyObject(t3);
        } };
        var Y = new G(), Q = new G(), J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;
        function Z(e3, t3, n3) {
          var r3, i3;
          if (n3 === void 0 && e3.nodeType === 1)
            if (r3 = "data-" + t3.replace(K, "-$&").toLowerCase(), typeof (n3 = e3.getAttribute(r3)) == "string") {
              try {
                n3 = (i3 = n3) === "true" || i3 !== "false" && (i3 === "null" ? null : i3 === +i3 + "" ? +i3 : J.test(i3) ? JSON.parse(i3) : i3);
              } catch (e4) {
              }
              Q.set(e3, t3, n3);
            } else
              n3 = void 0;
          return n3;
        }
        S.extend({ hasData: function(e3) {
          return Q.hasData(e3) || Y.hasData(e3);
        }, data: function(e3, t3, n3) {
          return Q.access(e3, t3, n3);
        }, removeData: function(e3, t3) {
          Q.remove(e3, t3);
        }, _data: function(e3, t3, n3) {
          return Y.access(e3, t3, n3);
        }, _removeData: function(e3, t3) {
          Y.remove(e3, t3);
        } }), S.fn.extend({ data: function(n3, e3) {
          var t3, r3, i3, o3 = this[0], a3 = o3 && o3.attributes;
          if (n3 === void 0) {
            if (this.length && (i3 = Q.get(o3), o3.nodeType === 1 && !Y.get(o3, "hasDataAttrs"))) {
              t3 = a3.length;
              while (t3--)
                a3[t3] && (r3 = a3[t3].name).indexOf("data-") === 0 && (r3 = X(r3.slice(5)), Z(o3, r3, i3[r3]));
              Y.set(o3, "hasDataAttrs", true);
            }
            return i3;
          }
          return typeof n3 == "object" ? this.each(function() {
            Q.set(this, n3);
          }) : $12(this, function(e4) {
            var t4;
            if (o3 && e4 === void 0)
              return (t4 = Q.get(o3, n3)) !== void 0 ? t4 : (t4 = Z(o3, n3)) !== void 0 ? t4 : void 0;
            this.each(function() {
              Q.set(this, n3, e4);
            });
          }, null, e3, 1 < arguments.length, null, true);
        }, removeData: function(e3) {
          return this.each(function() {
            Q.remove(this, e3);
          });
        } }), S.extend({ queue: function(e3, t3, n3) {
          var r3;
          if (e3)
            return t3 = (t3 || "fx") + "queue", r3 = Y.get(e3, t3), n3 && (!r3 || Array.isArray(n3) ? r3 = Y.access(e3, t3, S.makeArray(n3)) : r3.push(n3)), r3 || [];
        }, dequeue: function(e3, t3) {
          t3 = t3 || "fx";
          var n3 = S.queue(e3, t3), r3 = n3.length, i3 = n3.shift(), o3 = S._queueHooks(e3, t3);
          i3 === "inprogress" && (i3 = n3.shift(), r3--), i3 && (t3 === "fx" && n3.unshift("inprogress"), delete o3.stop, i3.call(e3, function() {
            S.dequeue(e3, t3);
          }, o3)), !r3 && o3 && o3.empty.fire();
        }, _queueHooks: function(e3, t3) {
          var n3 = t3 + "queueHooks";
          return Y.get(e3, n3) || Y.access(e3, n3, { empty: S.Callbacks("once memory").add(function() {
            Y.remove(e3, [t3 + "queue", n3]);
          }) });
        } }), S.fn.extend({ queue: function(t3, n3) {
          var e3 = 2;
          return typeof t3 != "string" && (n3 = t3, t3 = "fx", e3--), arguments.length < e3 ? S.queue(this[0], t3) : n3 === void 0 ? this : this.each(function() {
            var e4 = S.queue(this, t3, n3);
            S._queueHooks(this, t3), t3 === "fx" && e4[0] !== "inprogress" && S.dequeue(this, t3);
          });
        }, dequeue: function(e3) {
          return this.each(function() {
            S.dequeue(this, e3);
          });
        }, clearQueue: function(e3) {
          return this.queue(e3 || "fx", []);
        }, promise: function(e3, t3) {
          var n3, r3 = 1, i3 = S.Deferred(), o3 = this, a3 = this.length, s3 = function() {
            --r3 || i3.resolveWith(o3, [o3]);
          };
          typeof e3 != "string" && (t3 = e3, e3 = void 0), e3 = e3 || "fx";
          while (a3--)
            (n3 = Y.get(o3[a3], e3 + "queueHooks")) && n3.empty && (r3++, n3.empty.add(s3));
          return s3(), i3.promise(t3);
        } });
        var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"), ne = ["Top", "Right", "Bottom", "Left"], re = E.documentElement, ie = function(e3) {
          return S.contains(e3.ownerDocument, e3);
        }, oe = { composed: true };
        re.getRootNode && (ie = function(e3) {
          return S.contains(e3.ownerDocument, e3) || e3.getRootNode(oe) === e3.ownerDocument;
        });
        var ae = function(e3, t3) {
          return (e3 = t3 || e3).style.display === "none" || e3.style.display === "" && ie(e3) && S.css(e3, "display") === "none";
        };
        function se(e3, t3, n3, r3) {
          var i3, o3, a3 = 20, s3 = r3 ? function() {
            return r3.cur();
          } : function() {
            return S.css(e3, t3, "");
          }, u2 = s3(), l2 = n3 && n3[3] || (S.cssNumber[t3] ? "" : "px"), c2 = e3.nodeType && (S.cssNumber[t3] || l2 !== "px" && +u2) && te.exec(S.css(e3, t3));
          if (c2 && c2[3] !== l2) {
            u2 /= 2, l2 = l2 || c2[3], c2 = +u2 || 1;
            while (a3--)
              S.style(e3, t3, c2 + l2), (1 - o3) * (1 - (o3 = s3() / u2 || 0.5)) <= 0 && (a3 = 0), c2 /= o3;
            c2 *= 2, S.style(e3, t3, c2 + l2), n3 = n3 || [];
          }
          return n3 && (c2 = +c2 || +u2 || 0, i3 = n3[1] ? c2 + (n3[1] + 1) * n3[2] : +n3[2], r3 && (r3.unit = l2, r3.start = c2, r3.end = i3)), i3;
        }
        var ue = {};
        function le(e3, t3) {
          for (var n3, r3, i3, o3, a3, s3, u2, l2 = [], c2 = 0, f2 = e3.length; c2 < f2; c2++)
            (r3 = e3[c2]).style && (n3 = r3.style.display, t3 ? (n3 === "none" && (l2[c2] = Y.get(r3, "display") || null, l2[c2] || (r3.style.display = "")), r3.style.display === "" && ae(r3) && (l2[c2] = (u2 = a3 = o3 = void 0, a3 = (i3 = r3).ownerDocument, s3 = i3.nodeName, (u2 = ue[s3]) || (o3 = a3.body.appendChild(a3.createElement(s3)), u2 = S.css(o3, "display"), o3.parentNode.removeChild(o3), u2 === "none" && (u2 = "block"), ue[s3] = u2)))) : n3 !== "none" && (l2[c2] = "none", Y.set(r3, "display", n3)));
          for (c2 = 0; c2 < f2; c2++)
            l2[c2] != null && (e3[c2].style.display = l2[c2]);
          return e3;
        }
        S.fn.extend({ show: function() {
          return le(this, true);
        }, hide: function() {
          return le(this);
        }, toggle: function(e3) {
          return typeof e3 == "boolean" ? e3 ? this.show() : this.hide() : this.each(function() {
            ae(this) ? S(this).show() : S(this).hide();
          });
        } });
        var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
        ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(true).cloneNode(true).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(true).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
        var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        function ve(e3, t3) {
          var n3;
          return n3 = typeof e3.getElementsByTagName != "undefined" ? e3.getElementsByTagName(t3 || "*") : typeof e3.querySelectorAll != "undefined" ? e3.querySelectorAll(t3 || "*") : [], t3 === void 0 || t3 && A(e3, t3) ? S.merge([e3], n3) : n3;
        }
        function ye(e3, t3) {
          for (var n3 = 0, r3 = e3.length; n3 < r3; n3++)
            Y.set(e3[n3], "globalEval", !t3 || Y.get(t3[n3], "globalEval"));
        }
        ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
        var me = /<|&#?\w+;/;
        function xe(e3, t3, n3, r3, i3) {
          for (var o3, a3, s3, u2, l2, c2, f2 = t3.createDocumentFragment(), p2 = [], d2 = 0, h2 = e3.length; d2 < h2; d2++)
            if ((o3 = e3[d2]) || o3 === 0)
              if (w(o3) === "object")
                S.merge(p2, o3.nodeType ? [o3] : o3);
              else if (me.test(o3)) {
                a3 = a3 || f2.appendChild(t3.createElement("div")), s3 = (de.exec(o3) || ["", ""])[1].toLowerCase(), u2 = ge[s3] || ge._default, a3.innerHTML = u2[1] + S.htmlPrefilter(o3) + u2[2], c2 = u2[0];
                while (c2--)
                  a3 = a3.lastChild;
                S.merge(p2, a3.childNodes), (a3 = f2.firstChild).textContent = "";
              } else
                p2.push(t3.createTextNode(o3));
          f2.textContent = "", d2 = 0;
          while (o3 = p2[d2++])
            if (r3 && -1 < S.inArray(o3, r3))
              i3 && i3.push(o3);
            else if (l2 = ie(o3), a3 = ve(f2.appendChild(o3), "script"), l2 && ye(a3), n3) {
              c2 = 0;
              while (o3 = a3[c2++])
                he.test(o3.type || "") && n3.push(o3);
            }
          return f2;
        }
        var be = /^([^.]*)(?:\.(.+)|)/;
        function we() {
          return true;
        }
        function Te() {
          return false;
        }
        function Ce(e3, t3) {
          return e3 === function() {
            try {
              return E.activeElement;
            } catch (e4) {
            }
          }() == (t3 === "focus");
        }
        function Ee(e3, t3, n3, r3, i3, o3) {
          var a3, s3;
          if (typeof t3 == "object") {
            for (s3 in typeof n3 != "string" && (r3 = r3 || n3, n3 = void 0), t3)
              Ee(e3, s3, n3, r3, t3[s3], o3);
            return e3;
          }
          if (r3 == null && i3 == null ? (i3 = n3, r3 = n3 = void 0) : i3 == null && (typeof n3 == "string" ? (i3 = r3, r3 = void 0) : (i3 = r3, r3 = n3, n3 = void 0)), i3 === false)
            i3 = Te;
          else if (!i3)
            return e3;
          return o3 === 1 && (a3 = i3, (i3 = function(e4) {
            return S().off(e4), a3.apply(this, arguments);
          }).guid = a3.guid || (a3.guid = S.guid++)), e3.each(function() {
            S.event.add(this, t3, i3, r3, n3);
          });
        }
        function Se(e3, i3, o3) {
          o3 ? (Y.set(e3, i3, false), S.event.add(e3, i3, { namespace: false, handler: function(e4) {
            var t3, n3, r3 = Y.get(this, i3);
            if (1 & e4.isTrigger && this[i3]) {
              if (r3.length)
                (S.event.special[i3] || {}).delegateType && e4.stopPropagation();
              else if (r3 = s2.call(arguments), Y.set(this, i3, r3), t3 = o3(this, i3), this[i3](), r3 !== (n3 = Y.get(this, i3)) || t3 ? Y.set(this, i3, false) : n3 = {}, r3 !== n3)
                return e4.stopImmediatePropagation(), e4.preventDefault(), n3 && n3.value;
            } else
              r3.length && (Y.set(this, i3, { value: S.event.trigger(S.extend(r3[0], S.Event.prototype), r3.slice(1), this) }), e4.stopImmediatePropagation());
          } })) : Y.get(e3, i3) === void 0 && S.event.add(e3, i3, we);
        }
        S.event = { global: {}, add: function(t3, e3, n3, r3, i3) {
          var o3, a3, s3, u2, l2, c2, f2, p2, d2, h2, g2, v2 = Y.get(t3);
          if (V(t3)) {
            n3.handler && (n3 = (o3 = n3).handler, i3 = o3.selector), i3 && S.find.matchesSelector(re, i3), n3.guid || (n3.guid = S.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a3 = v2.handle) || (a3 = v2.handle = function(e4) {
              return typeof S != "undefined" && S.event.triggered !== e4.type ? S.event.dispatch.apply(t3, arguments) : void 0;
            }), l2 = (e3 = (e3 || "").match(P) || [""]).length;
            while (l2--)
              d2 = g2 = (s3 = be.exec(e3[l2]) || [])[1], h2 = (s3[2] || "").split(".").sort(), d2 && (f2 = S.event.special[d2] || {}, d2 = (i3 ? f2.delegateType : f2.bindType) || d2, f2 = S.event.special[d2] || {}, c2 = S.extend({ type: d2, origType: g2, data: r3, handler: n3, guid: n3.guid, selector: i3, needsContext: i3 && S.expr.match.needsContext.test(i3), namespace: h2.join(".") }, o3), (p2 = u2[d2]) || ((p2 = u2[d2] = []).delegateCount = 0, f2.setup && f2.setup.call(t3, r3, h2, a3) !== false || t3.addEventListener && t3.addEventListener(d2, a3)), f2.add && (f2.add.call(t3, c2), c2.handler.guid || (c2.handler.guid = n3.guid)), i3 ? p2.splice(p2.delegateCount++, 0, c2) : p2.push(c2), S.event.global[d2] = true);
          }
        }, remove: function(e3, t3, n3, r3, i3) {
          var o3, a3, s3, u2, l2, c2, f2, p2, d2, h2, g2, v2 = Y.hasData(e3) && Y.get(e3);
          if (v2 && (u2 = v2.events)) {
            l2 = (t3 = (t3 || "").match(P) || [""]).length;
            while (l2--)
              if (d2 = g2 = (s3 = be.exec(t3[l2]) || [])[1], h2 = (s3[2] || "").split(".").sort(), d2) {
                f2 = S.event.special[d2] || {}, p2 = u2[d2 = (r3 ? f2.delegateType : f2.bindType) || d2] || [], s3 = s3[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a3 = o3 = p2.length;
                while (o3--)
                  c2 = p2[o3], !i3 && g2 !== c2.origType || n3 && n3.guid !== c2.guid || s3 && !s3.test(c2.namespace) || r3 && r3 !== c2.selector && (r3 !== "**" || !c2.selector) || (p2.splice(o3, 1), c2.selector && p2.delegateCount--, f2.remove && f2.remove.call(e3, c2));
                a3 && !p2.length && (f2.teardown && f2.teardown.call(e3, h2, v2.handle) !== false || S.removeEvent(e3, d2, v2.handle), delete u2[d2]);
              } else
                for (d2 in u2)
                  S.event.remove(e3, d2 + t3[l2], n3, r3, true);
            S.isEmptyObject(u2) && Y.remove(e3, "handle events");
          }
        }, dispatch: function(e3) {
          var t3, n3, r3, i3, o3, a3, s3 = new Array(arguments.length), u2 = S.event.fix(e3), l2 = (Y.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = S.event.special[u2.type] || {};
          for (s3[0] = u2, t3 = 1; t3 < arguments.length; t3++)
            s3[t3] = arguments[t3];
          if (u2.delegateTarget = this, !c2.preDispatch || c2.preDispatch.call(this, u2) !== false) {
            a3 = S.event.handlers.call(this, u2, l2), t3 = 0;
            while ((i3 = a3[t3++]) && !u2.isPropagationStopped()) {
              u2.currentTarget = i3.elem, n3 = 0;
              while ((o3 = i3.handlers[n3++]) && !u2.isImmediatePropagationStopped())
                u2.rnamespace && o3.namespace !== false && !u2.rnamespace.test(o3.namespace) || (u2.handleObj = o3, u2.data = o3.data, (r3 = ((S.event.special[o3.origType] || {}).handle || o3.handler).apply(i3.elem, s3)) !== void 0 && (u2.result = r3) === false && (u2.preventDefault(), u2.stopPropagation()));
            }
            return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
          }
        }, handlers: function(e3, t3) {
          var n3, r3, i3, o3, a3, s3 = [], u2 = t3.delegateCount, l2 = e3.target;
          if (u2 && l2.nodeType && !(e3.type === "click" && 1 <= e3.button)) {
            for (; l2 !== this; l2 = l2.parentNode || this)
              if (l2.nodeType === 1 && (e3.type !== "click" || l2.disabled !== true)) {
                for (o3 = [], a3 = {}, n3 = 0; n3 < u2; n3++)
                  a3[i3 = (r3 = t3[n3]).selector + " "] === void 0 && (a3[i3] = r3.needsContext ? -1 < S(i3, this).index(l2) : S.find(i3, this, null, [l2]).length), a3[i3] && o3.push(r3);
                o3.length && s3.push({ elem: l2, handlers: o3 });
              }
          }
          return l2 = this, u2 < t3.length && s3.push({ elem: l2, handlers: t3.slice(u2) }), s3;
        }, addProp: function(t3, e3) {
          Object.defineProperty(S.Event.prototype, t3, { enumerable: true, configurable: true, get: m(e3) ? function() {
            if (this.originalEvent)
              return e3(this.originalEvent);
          } : function() {
            if (this.originalEvent)
              return this.originalEvent[t3];
          }, set: function(e4) {
            Object.defineProperty(this, t3, { enumerable: true, configurable: true, writable: true, value: e4 });
          } });
        }, fix: function(e3) {
          return e3[S.expando] ? e3 : new S.Event(e3);
        }, special: { load: { noBubble: true }, click: { setup: function(e3) {
          var t3 = this || e3;
          return pe.test(t3.type) && t3.click && A(t3, "input") && Se(t3, "click", we), false;
        }, trigger: function(e3) {
          var t3 = this || e3;
          return pe.test(t3.type) && t3.click && A(t3, "input") && Se(t3, "click"), true;
        }, _default: function(e3) {
          var t3 = e3.target;
          return pe.test(t3.type) && t3.click && A(t3, "input") && Y.get(t3, "click") || A(t3, "a");
        } }, beforeunload: { postDispatch: function(e3) {
          e3.result !== void 0 && e3.originalEvent && (e3.originalEvent.returnValue = e3.result);
        } } } }, S.removeEvent = function(e3, t3, n3) {
          e3.removeEventListener && e3.removeEventListener(t3, n3);
        }, S.Event = function(e3, t3) {
          if (!(this instanceof S.Event))
            return new S.Event(e3, t3);
          e3 && e3.type ? (this.originalEvent = e3, this.type = e3.type, this.isDefaultPrevented = e3.defaultPrevented || e3.defaultPrevented === void 0 && e3.returnValue === false ? we : Te, this.target = e3.target && e3.target.nodeType === 3 ? e3.target.parentNode : e3.target, this.currentTarget = e3.currentTarget, this.relatedTarget = e3.relatedTarget) : this.type = e3, t3 && S.extend(this, t3), this.timeStamp = e3 && e3.timeStamp || Date.now(), this[S.expando] = true;
        }, S.Event.prototype = { constructor: S.Event, isDefaultPrevented: Te, isPropagationStopped: Te, isImmediatePropagationStopped: Te, isSimulated: false, preventDefault: function() {
          var e3 = this.originalEvent;
          this.isDefaultPrevented = we, e3 && !this.isSimulated && e3.preventDefault();
        }, stopPropagation: function() {
          var e3 = this.originalEvent;
          this.isPropagationStopped = we, e3 && !this.isSimulated && e3.stopPropagation();
        }, stopImmediatePropagation: function() {
          var e3 = this.originalEvent;
          this.isImmediatePropagationStopped = we, e3 && !this.isSimulated && e3.stopImmediatePropagation(), this.stopPropagation();
        } }, S.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function(e3, t3) {
          S.event.special[e3] = { setup: function() {
            return Se(this, e3, Ce), false;
          }, trigger: function() {
            return Se(this, e3), true;
          }, _default: function() {
            return true;
          }, delegateType: t3 };
        }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e3, i3) {
          S.event.special[e3] = { delegateType: i3, bindType: i3, handle: function(e4) {
            var t3, n3 = e4.relatedTarget, r3 = e4.handleObj;
            return n3 && (n3 === this || S.contains(this, n3)) || (e4.type = r3.origType, t3 = r3.handler.apply(this, arguments), e4.type = i3), t3;
          } };
        }), S.fn.extend({ on: function(e3, t3, n3, r3) {
          return Ee(this, e3, t3, n3, r3);
        }, one: function(e3, t3, n3, r3) {
          return Ee(this, e3, t3, n3, r3, 1);
        }, off: function(e3, t3, n3) {
          var r3, i3;
          if (e3 && e3.preventDefault && e3.handleObj)
            return r3 = e3.handleObj, S(e3.delegateTarget).off(r3.namespace ? r3.origType + "." + r3.namespace : r3.origType, r3.selector, r3.handler), this;
          if (typeof e3 == "object") {
            for (i3 in e3)
              this.off(i3, t3, e3[i3]);
            return this;
          }
          return t3 !== false && typeof t3 != "function" || (n3 = t3, t3 = void 0), n3 === false && (n3 = Te), this.each(function() {
            S.event.remove(this, e3, n3, t3);
          });
        } });
        var ke = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function je(e3, t3) {
          return A(e3, "table") && A(t3.nodeType !== 11 ? t3 : t3.firstChild, "tr") && S(e3).children("tbody")[0] || e3;
        }
        function De(e3) {
          return e3.type = (e3.getAttribute("type") !== null) + "/" + e3.type, e3;
        }
        function qe(e3) {
          return (e3.type || "").slice(0, 5) === "true/" ? e3.type = e3.type.slice(5) : e3.removeAttribute("type"), e3;
        }
        function Le(e3, t3) {
          var n3, r3, i3, o3, a3, s3;
          if (t3.nodeType === 1) {
            if (Y.hasData(e3) && (s3 = Y.get(e3).events))
              for (i3 in Y.remove(t3, "handle events"), s3)
                for (n3 = 0, r3 = s3[i3].length; n3 < r3; n3++)
                  S.event.add(t3, i3, s3[i3][n3]);
            Q.hasData(e3) && (o3 = Q.access(e3), a3 = S.extend({}, o3), Q.set(t3, a3));
          }
        }
        function He(n3, r3, i3, o3) {
          r3 = g(r3);
          var e3, t3, a3, s3, u2, l2, c2 = 0, f2 = n3.length, p2 = f2 - 1, d2 = r3[0], h2 = m(d2);
          if (h2 || 1 < f2 && typeof d2 == "string" && !y.checkClone && Ae.test(d2))
            return n3.each(function(e4) {
              var t4 = n3.eq(e4);
              h2 && (r3[0] = d2.call(this, e4, t4.html())), He(t4, r3, i3, o3);
            });
          if (f2 && (t3 = (e3 = xe(r3, n3[0].ownerDocument, false, n3, o3)).firstChild, e3.childNodes.length === 1 && (e3 = t3), t3 || o3)) {
            for (s3 = (a3 = S.map(ve(e3, "script"), De)).length; c2 < f2; c2++)
              u2 = e3, c2 !== p2 && (u2 = S.clone(u2, true, true), s3 && S.merge(a3, ve(u2, "script"))), i3.call(n3[c2], u2, c2);
            if (s3)
              for (l2 = a3[a3.length - 1].ownerDocument, S.map(a3, qe), c2 = 0; c2 < s3; c2++)
                u2 = a3[c2], he.test(u2.type || "") && !Y.access(u2, "globalEval") && S.contains(l2, u2) && (u2.src && (u2.type || "").toLowerCase() !== "module" ? S._evalUrl && !u2.noModule && S._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : b(u2.textContent.replace(Ne, ""), u2, l2));
          }
          return n3;
        }
        function Oe(e3, t3, n3) {
          for (var r3, i3 = t3 ? S.filter(t3, e3) : e3, o3 = 0; (r3 = i3[o3]) != null; o3++)
            n3 || r3.nodeType !== 1 || S.cleanData(ve(r3)), r3.parentNode && (n3 && ie(r3) && ye(ve(r3, "script")), r3.parentNode.removeChild(r3));
          return e3;
        }
        S.extend({ htmlPrefilter: function(e3) {
          return e3;
        }, clone: function(e3, t3, n3) {
          var r3, i3, o3, a3, s3, u2, l2, c2 = e3.cloneNode(true), f2 = ie(e3);
          if (!(y.noCloneChecked || e3.nodeType !== 1 && e3.nodeType !== 11 || S.isXMLDoc(e3)))
            for (a3 = ve(c2), r3 = 0, i3 = (o3 = ve(e3)).length; r3 < i3; r3++)
              s3 = o3[r3], u2 = a3[r3], void 0, (l2 = u2.nodeName.toLowerCase()) === "input" && pe.test(s3.type) ? u2.checked = s3.checked : l2 !== "input" && l2 !== "textarea" || (u2.defaultValue = s3.defaultValue);
          if (t3)
            if (n3)
              for (o3 = o3 || ve(e3), a3 = a3 || ve(c2), r3 = 0, i3 = o3.length; r3 < i3; r3++)
                Le(o3[r3], a3[r3]);
            else
              Le(e3, c2);
          return 0 < (a3 = ve(c2, "script")).length && ye(a3, !f2 && ve(e3, "script")), c2;
        }, cleanData: function(e3) {
          for (var t3, n3, r3, i3 = S.event.special, o3 = 0; (n3 = e3[o3]) !== void 0; o3++)
            if (V(n3)) {
              if (t3 = n3[Y.expando]) {
                if (t3.events)
                  for (r3 in t3.events)
                    i3[r3] ? S.event.remove(n3, r3) : S.removeEvent(n3, r3, t3.handle);
                n3[Y.expando] = void 0;
              }
              n3[Q.expando] && (n3[Q.expando] = void 0);
            }
        } }), S.fn.extend({ detach: function(e3) {
          return Oe(this, e3, true);
        }, remove: function(e3) {
          return Oe(this, e3);
        }, text: function(e3) {
          return $12(this, function(e4) {
            return e4 === void 0 ? S.text(this) : this.empty().each(function() {
              this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9 || (this.textContent = e4);
            });
          }, null, e3, arguments.length);
        }, append: function() {
          return He(this, arguments, function(e3) {
            this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9 || je(this, e3).appendChild(e3);
          });
        }, prepend: function() {
          return He(this, arguments, function(e3) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var t3 = je(this, e3);
              t3.insertBefore(e3, t3.firstChild);
            }
          });
        }, before: function() {
          return He(this, arguments, function(e3) {
            this.parentNode && this.parentNode.insertBefore(e3, this);
          });
        }, after: function() {
          return He(this, arguments, function(e3) {
            this.parentNode && this.parentNode.insertBefore(e3, this.nextSibling);
          });
        }, empty: function() {
          for (var e3, t3 = 0; (e3 = this[t3]) != null; t3++)
            e3.nodeType === 1 && (S.cleanData(ve(e3, false)), e3.textContent = "");
          return this;
        }, clone: function(e3, t3) {
          return e3 = e3 != null && e3, t3 = t3 == null ? e3 : t3, this.map(function() {
            return S.clone(this, e3, t3);
          });
        }, html: function(e3) {
          return $12(this, function(e4) {
            var t3 = this[0] || {}, n3 = 0, r3 = this.length;
            if (e4 === void 0 && t3.nodeType === 1)
              return t3.innerHTML;
            if (typeof e4 == "string" && !ke.test(e4) && !ge[(de.exec(e4) || ["", ""])[1].toLowerCase()]) {
              e4 = S.htmlPrefilter(e4);
              try {
                for (; n3 < r3; n3++)
                  (t3 = this[n3] || {}).nodeType === 1 && (S.cleanData(ve(t3, false)), t3.innerHTML = e4);
                t3 = 0;
              } catch (e5) {
              }
            }
            t3 && this.empty().append(e4);
          }, null, e3, arguments.length);
        }, replaceWith: function() {
          var n3 = [];
          return He(this, arguments, function(e3) {
            var t3 = this.parentNode;
            S.inArray(this, n3) < 0 && (S.cleanData(ve(this)), t3 && t3.replaceChild(e3, this));
          }, n3);
        } }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e3, a3) {
          S.fn[e3] = function(e4) {
            for (var t3, n3 = [], r3 = S(e4), i3 = r3.length - 1, o3 = 0; o3 <= i3; o3++)
              t3 = o3 === i3 ? this : this.clone(true), S(r3[o3])[a3](t3), u.apply(n3, t3.get());
            return this.pushStack(n3);
          };
        });
        var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Re = function(e3) {
          var t3 = e3.ownerDocument.defaultView;
          return t3 && t3.opener || (t3 = C), t3.getComputedStyle(e3);
        }, Me = function(e3, t3, n3) {
          var r3, i3, o3 = {};
          for (i3 in t3)
            o3[i3] = e3.style[i3], e3.style[i3] = t3[i3];
          for (i3 in r3 = n3.call(e3), t3)
            e3.style[i3] = o3[i3];
          return r3;
        }, Ie = new RegExp(ne.join("|"), "i");
        function We(e3, t3, n3) {
          var r3, i3, o3, a3, s3 = e3.style;
          return (n3 = n3 || Re(e3)) && ((a3 = n3.getPropertyValue(t3) || n3[t3]) !== "" || ie(e3) || (a3 = S.style(e3, t3)), !y.pixelBoxStyles() && Pe.test(a3) && Ie.test(t3) && (r3 = s3.width, i3 = s3.minWidth, o3 = s3.maxWidth, s3.minWidth = s3.maxWidth = s3.width = a3, a3 = n3.width, s3.width = r3, s3.minWidth = i3, s3.maxWidth = o3)), a3 !== void 0 ? a3 + "" : a3;
        }
        function Fe(e3, t3) {
          return { get: function() {
            if (!e3())
              return (this.get = t3).apply(this, arguments);
            delete this.get;
          } };
        }
        !function() {
          function e3() {
            if (l2) {
              u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u2).appendChild(l2);
              var e4 = C.getComputedStyle(l2);
              n3 = e4.top !== "1%", s3 = t3(e4.marginLeft) === 12, l2.style.right = "60%", o3 = t3(e4.right) === 36, r3 = t3(e4.width) === 36, l2.style.position = "absolute", i3 = t3(l2.offsetWidth / 3) === 12, re.removeChild(u2), l2 = null;
            }
          }
          function t3(e4) {
            return Math.round(parseFloat(e4));
          }
          var n3, r3, i3, o3, a3, s3, u2 = E.createElement("div"), l2 = E.createElement("div");
          l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", y.clearCloneStyle = l2.style.backgroundClip === "content-box", S.extend(y, { boxSizingReliable: function() {
            return e3(), r3;
          }, pixelBoxStyles: function() {
            return e3(), o3;
          }, pixelPosition: function() {
            return e3(), n3;
          }, reliableMarginLeft: function() {
            return e3(), s3;
          }, scrollboxSize: function() {
            return e3(), i3;
          }, reliableTrDimensions: function() {
            var e4, t4, n4, r4;
            return a3 == null && (e4 = E.createElement("table"), t4 = E.createElement("tr"), n4 = E.createElement("div"), e4.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t4.style.cssText = "border:1px solid", t4.style.height = "1px", n4.style.height = "9px", n4.style.display = "block", re.appendChild(e4).appendChild(t4).appendChild(n4), r4 = C.getComputedStyle(t4), a3 = parseInt(r4.height, 10) + parseInt(r4.borderTopWidth, 10) + parseInt(r4.borderBottomWidth, 10) === t4.offsetHeight, re.removeChild(e4)), a3;
          } }));
        }();
        var Be = ["Webkit", "Moz", "ms"], $e = E.createElement("div").style, _e = {};
        function ze(e3) {
          var t3 = S.cssProps[e3] || _e[e3];
          return t3 || (e3 in $e ? e3 : _e[e3] = function(e4) {
            var t4 = e4[0].toUpperCase() + e4.slice(1), n3 = Be.length;
            while (n3--)
              if ((e4 = Be[n3] + t4) in $e)
                return e4;
          }(e3) || e3);
        }
        var Ue = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ve = { position: "absolute", visibility: "hidden", display: "block" }, Ge = { letterSpacing: "0", fontWeight: "400" };
        function Ye(e3, t3, n3) {
          var r3 = te.exec(t3);
          return r3 ? Math.max(0, r3[2] - (n3 || 0)) + (r3[3] || "px") : t3;
        }
        function Qe(e3, t3, n3, r3, i3, o3) {
          var a3 = t3 === "width" ? 1 : 0, s3 = 0, u2 = 0;
          if (n3 === (r3 ? "border" : "content"))
            return 0;
          for (; a3 < 4; a3 += 2)
            n3 === "margin" && (u2 += S.css(e3, n3 + ne[a3], true, i3)), r3 ? (n3 === "content" && (u2 -= S.css(e3, "padding" + ne[a3], true, i3)), n3 !== "margin" && (u2 -= S.css(e3, "border" + ne[a3] + "Width", true, i3))) : (u2 += S.css(e3, "padding" + ne[a3], true, i3), n3 !== "padding" ? u2 += S.css(e3, "border" + ne[a3] + "Width", true, i3) : s3 += S.css(e3, "border" + ne[a3] + "Width", true, i3));
          return !r3 && 0 <= o3 && (u2 += Math.max(0, Math.ceil(e3["offset" + t3[0].toUpperCase() + t3.slice(1)] - o3 - u2 - s3 - 0.5)) || 0), u2;
        }
        function Je(e3, t3, n3) {
          var r3 = Re(e3), i3 = (!y.boxSizingReliable() || n3) && S.css(e3, "boxSizing", false, r3) === "border-box", o3 = i3, a3 = We(e3, t3, r3), s3 = "offset" + t3[0].toUpperCase() + t3.slice(1);
          if (Pe.test(a3)) {
            if (!n3)
              return a3;
            a3 = "auto";
          }
          return (!y.boxSizingReliable() && i3 || !y.reliableTrDimensions() && A(e3, "tr") || a3 === "auto" || !parseFloat(a3) && S.css(e3, "display", false, r3) === "inline") && e3.getClientRects().length && (i3 = S.css(e3, "boxSizing", false, r3) === "border-box", (o3 = s3 in e3) && (a3 = e3[s3])), (a3 = parseFloat(a3) || 0) + Qe(e3, t3, n3 || (i3 ? "border" : "content"), o3, r3, a3) + "px";
        }
        function Ke(e3, t3, n3, r3, i3) {
          return new Ke.prototype.init(e3, t3, n3, r3, i3);
        }
        S.extend({ cssHooks: { opacity: { get: function(e3, t3) {
          if (t3) {
            var n3 = We(e3, "opacity");
            return n3 === "" ? "1" : n3;
          }
        } } }, cssNumber: { animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true }, cssProps: {}, style: function(e3, t3, n3, r3) {
          if (e3 && e3.nodeType !== 3 && e3.nodeType !== 8 && e3.style) {
            var i3, o3, a3, s3 = X(t3), u2 = Xe.test(t3), l2 = e3.style;
            if (u2 || (t3 = ze(s3)), a3 = S.cssHooks[t3] || S.cssHooks[s3], n3 === void 0)
              return a3 && "get" in a3 && (i3 = a3.get(e3, false, r3)) !== void 0 ? i3 : l2[t3];
            (o3 = typeof n3) === "string" && (i3 = te.exec(n3)) && i3[1] && (n3 = se(e3, t3, i3), o3 = "number"), n3 != null && n3 == n3 && (o3 !== "number" || u2 || (n3 += i3 && i3[3] || (S.cssNumber[s3] ? "" : "px")), y.clearCloneStyle || n3 !== "" || t3.indexOf("background") !== 0 || (l2[t3] = "inherit"), a3 && "set" in a3 && (n3 = a3.set(e3, n3, r3)) === void 0 || (u2 ? l2.setProperty(t3, n3) : l2[t3] = n3));
          }
        }, css: function(e3, t3, n3, r3) {
          var i3, o3, a3, s3 = X(t3);
          return Xe.test(t3) || (t3 = ze(s3)), (a3 = S.cssHooks[t3] || S.cssHooks[s3]) && "get" in a3 && (i3 = a3.get(e3, true, n3)), i3 === void 0 && (i3 = We(e3, t3, r3)), i3 === "normal" && t3 in Ge && (i3 = Ge[t3]), n3 === "" || n3 ? (o3 = parseFloat(i3), n3 === true || isFinite(o3) ? o3 || 0 : i3) : i3;
        } }), S.each(["height", "width"], function(e3, u2) {
          S.cssHooks[u2] = { get: function(e4, t3, n3) {
            if (t3)
              return !Ue.test(S.css(e4, "display")) || e4.getClientRects().length && e4.getBoundingClientRect().width ? Je(e4, u2, n3) : Me(e4, Ve, function() {
                return Je(e4, u2, n3);
              });
          }, set: function(e4, t3, n3) {
            var r3, i3 = Re(e4), o3 = !y.scrollboxSize() && i3.position === "absolute", a3 = (o3 || n3) && S.css(e4, "boxSizing", false, i3) === "border-box", s3 = n3 ? Qe(e4, u2, n3, a3, i3) : 0;
            return a3 && o3 && (s3 -= Math.ceil(e4["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i3[u2]) - Qe(e4, u2, "border", false, i3) - 0.5)), s3 && (r3 = te.exec(t3)) && (r3[3] || "px") !== "px" && (e4.style[u2] = t3, t3 = S.css(e4, u2)), Ye(0, t3, s3);
          } };
        }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e3, t3) {
          if (t3)
            return (parseFloat(We(e3, "marginLeft")) || e3.getBoundingClientRect().left - Me(e3, { marginLeft: 0 }, function() {
              return e3.getBoundingClientRect().left;
            })) + "px";
        }), S.each({ margin: "", padding: "", border: "Width" }, function(i3, o3) {
          S.cssHooks[i3 + o3] = { expand: function(e3) {
            for (var t3 = 0, n3 = {}, r3 = typeof e3 == "string" ? e3.split(" ") : [e3]; t3 < 4; t3++)
              n3[i3 + ne[t3] + o3] = r3[t3] || r3[t3 - 2] || r3[0];
            return n3;
          } }, i3 !== "margin" && (S.cssHooks[i3 + o3].set = Ye);
        }), S.fn.extend({ css: function(e3, t3) {
          return $12(this, function(e4, t4, n3) {
            var r3, i3, o3 = {}, a3 = 0;
            if (Array.isArray(t4)) {
              for (r3 = Re(e4), i3 = t4.length; a3 < i3; a3++)
                o3[t4[a3]] = S.css(e4, t4[a3], false, r3);
              return o3;
            }
            return n3 !== void 0 ? S.style(e4, t4, n3) : S.css(e4, t4);
          }, e3, t3, 1 < arguments.length);
        } }), ((S.Tween = Ke).prototype = { constructor: Ke, init: function(e3, t3, n3, r3, i3, o3) {
          this.elem = e3, this.prop = n3, this.easing = i3 || S.easing._default, this.options = t3, this.start = this.now = this.cur(), this.end = r3, this.unit = o3 || (S.cssNumber[n3] ? "" : "px");
        }, cur: function() {
          var e3 = Ke.propHooks[this.prop];
          return e3 && e3.get ? e3.get(this) : Ke.propHooks._default.get(this);
        }, run: function(e3) {
          var t3, n3 = Ke.propHooks[this.prop];
          return this.options.duration ? this.pos = t3 = S.easing[this.easing](e3, this.options.duration * e3, 0, 1, this.options.duration) : this.pos = t3 = e3, this.now = (this.end - this.start) * t3 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n3 && n3.set ? n3.set(this) : Ke.propHooks._default.set(this), this;
        } }).init.prototype = Ke.prototype, (Ke.propHooks = { _default: { get: function(e3) {
          var t3;
          return e3.elem.nodeType !== 1 || e3.elem[e3.prop] != null && e3.elem.style[e3.prop] == null ? e3.elem[e3.prop] : (t3 = S.css(e3.elem, e3.prop, "")) && t3 !== "auto" ? t3 : 0;
        }, set: function(e3) {
          S.fx.step[e3.prop] ? S.fx.step[e3.prop](e3) : e3.elem.nodeType !== 1 || !S.cssHooks[e3.prop] && e3.elem.style[ze(e3.prop)] == null ? e3.elem[e3.prop] = e3.now : S.style(e3.elem, e3.prop, e3.now + e3.unit);
        } } }).scrollTop = Ke.propHooks.scrollLeft = { set: function(e3) {
          e3.elem.nodeType && e3.elem.parentNode && (e3.elem[e3.prop] = e3.now);
        } }, S.easing = { linear: function(e3) {
          return e3;
        }, swing: function(e3) {
          return 0.5 - Math.cos(e3 * Math.PI) / 2;
        }, _default: "swing" }, S.fx = Ke.prototype.init, S.fx.step = {};
        var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;
        function ot() {
          et && (E.hidden === false && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick());
        }
        function at() {
          return C.setTimeout(function() {
            Ze = void 0;
          }), Ze = Date.now();
        }
        function st(e3, t3) {
          var n3, r3 = 0, i3 = { height: e3 };
          for (t3 = t3 ? 1 : 0; r3 < 4; r3 += 2 - t3)
            i3["margin" + (n3 = ne[r3])] = i3["padding" + n3] = e3;
          return t3 && (i3.opacity = i3.width = e3), i3;
        }
        function ut(e3, t3, n3) {
          for (var r3, i3 = (lt.tweeners[t3] || []).concat(lt.tweeners["*"]), o3 = 0, a3 = i3.length; o3 < a3; o3++)
            if (r3 = i3[o3].call(n3, t3, e3))
              return r3;
        }
        function lt(o3, e3, t3) {
          var n3, a3, r3 = 0, i3 = lt.prefilters.length, s3 = S.Deferred().always(function() {
            delete u2.elem;
          }), u2 = function() {
            if (a3)
              return false;
            for (var e4 = Ze || at(), t4 = Math.max(0, l2.startTime + l2.duration - e4), n4 = 1 - (t4 / l2.duration || 0), r4 = 0, i4 = l2.tweens.length; r4 < i4; r4++)
              l2.tweens[r4].run(n4);
            return s3.notifyWith(o3, [l2, n4, t4]), n4 < 1 && i4 ? t4 : (i4 || s3.notifyWith(o3, [l2, 1, 0]), s3.resolveWith(o3, [l2]), false);
          }, l2 = s3.promise({ elem: o3, props: S.extend({}, e3), opts: S.extend(true, { specialEasing: {}, easing: S.easing._default }, t3), originalProperties: e3, originalOptions: t3, startTime: Ze || at(), duration: t3.duration, tweens: [], createTween: function(e4, t4) {
            var n4 = S.Tween(o3, l2.opts, e4, t4, l2.opts.specialEasing[e4] || l2.opts.easing);
            return l2.tweens.push(n4), n4;
          }, stop: function(e4) {
            var t4 = 0, n4 = e4 ? l2.tweens.length : 0;
            if (a3)
              return this;
            for (a3 = true; t4 < n4; t4++)
              l2.tweens[t4].run(1);
            return e4 ? (s3.notifyWith(o3, [l2, 1, 0]), s3.resolveWith(o3, [l2, e4])) : s3.rejectWith(o3, [l2, e4]), this;
          } }), c2 = l2.props;
          for (!function(e4, t4) {
            var n4, r4, i4, o4, a4;
            for (n4 in e4)
              if (i4 = t4[r4 = X(n4)], o4 = e4[n4], Array.isArray(o4) && (i4 = o4[1], o4 = e4[n4] = o4[0]), n4 !== r4 && (e4[r4] = o4, delete e4[n4]), (a4 = S.cssHooks[r4]) && "expand" in a4)
                for (n4 in o4 = a4.expand(o4), delete e4[r4], o4)
                  n4 in e4 || (e4[n4] = o4[n4], t4[n4] = i4);
              else
                t4[r4] = i4;
          }(c2, l2.opts.specialEasing); r3 < i3; r3++)
            if (n3 = lt.prefilters[r3].call(l2, o3, c2, l2.opts))
              return m(n3.stop) && (S._queueHooks(l2.elem, l2.opts.queue).stop = n3.stop.bind(n3)), n3;
          return S.map(c2, ut, l2), m(l2.opts.start) && l2.opts.start.call(o3, l2), l2.progress(l2.opts.progress).done(l2.opts.done, l2.opts.complete).fail(l2.opts.fail).always(l2.opts.always), S.fx.timer(S.extend(u2, { elem: o3, anim: l2, queue: l2.opts.queue })), l2;
        }
        S.Animation = S.extend(lt, { tweeners: { "*": [function(e3, t3) {
          var n3 = this.createTween(e3, t3);
          return se(n3.elem, e3, te.exec(t3), n3), n3;
        }] }, tweener: function(e3, t3) {
          m(e3) ? (t3 = e3, e3 = ["*"]) : e3 = e3.match(P);
          for (var n3, r3 = 0, i3 = e3.length; r3 < i3; r3++)
            n3 = e3[r3], lt.tweeners[n3] = lt.tweeners[n3] || [], lt.tweeners[n3].unshift(t3);
        }, prefilters: [function(e3, t3, n3) {
          var r3, i3, o3, a3, s3, u2, l2, c2, f2 = "width" in t3 || "height" in t3, p2 = this, d2 = {}, h2 = e3.style, g2 = e3.nodeType && ae(e3), v2 = Y.get(e3, "fxshow");
          for (r3 in n3.queue || ((a3 = S._queueHooks(e3, "fx")).unqueued == null && (a3.unqueued = 0, s3 = a3.empty.fire, a3.empty.fire = function() {
            a3.unqueued || s3();
          }), a3.unqueued++, p2.always(function() {
            p2.always(function() {
              a3.unqueued--, S.queue(e3, "fx").length || a3.empty.fire();
            });
          })), t3)
            if (i3 = t3[r3], rt.test(i3)) {
              if (delete t3[r3], o3 = o3 || i3 === "toggle", i3 === (g2 ? "hide" : "show")) {
                if (i3 !== "show" || !v2 || v2[r3] === void 0)
                  continue;
                g2 = true;
              }
              d2[r3] = v2 && v2[r3] || S.style(e3, r3);
            }
          if ((u2 = !S.isEmptyObject(t3)) || !S.isEmptyObject(d2))
            for (r3 in f2 && e3.nodeType === 1 && (n3.overflow = [h2.overflow, h2.overflowX, h2.overflowY], (l2 = v2 && v2.display) == null && (l2 = Y.get(e3, "display")), (c2 = S.css(e3, "display")) === "none" && (l2 ? c2 = l2 : (le([e3], true), l2 = e3.style.display || l2, c2 = S.css(e3, "display"), le([e3]))), (c2 === "inline" || c2 === "inline-block" && l2 != null) && S.css(e3, "float") === "none" && (u2 || (p2.done(function() {
              h2.display = l2;
            }), l2 == null && (c2 = h2.display, l2 = c2 === "none" ? "" : c2)), h2.display = "inline-block")), n3.overflow && (h2.overflow = "hidden", p2.always(function() {
              h2.overflow = n3.overflow[0], h2.overflowX = n3.overflow[1], h2.overflowY = n3.overflow[2];
            })), u2 = false, d2)
              u2 || (v2 ? "hidden" in v2 && (g2 = v2.hidden) : v2 = Y.access(e3, "fxshow", { display: l2 }), o3 && (v2.hidden = !g2), g2 && le([e3], true), p2.done(function() {
                for (r3 in g2 || le([e3]), Y.remove(e3, "fxshow"), d2)
                  S.style(e3, r3, d2[r3]);
              })), u2 = ut(g2 ? v2[r3] : 0, r3, p2), r3 in v2 || (v2[r3] = u2.start, g2 && (u2.end = u2.start, u2.start = 0));
        }], prefilter: function(e3, t3) {
          t3 ? lt.prefilters.unshift(e3) : lt.prefilters.push(e3);
        } }), S.speed = function(e3, t3, n3) {
          var r3 = e3 && typeof e3 == "object" ? S.extend({}, e3) : { complete: n3 || !n3 && t3 || m(e3) && e3, duration: e3, easing: n3 && t3 || t3 && !m(t3) && t3 };
          return S.fx.off ? r3.duration = 0 : typeof r3.duration != "number" && (r3.duration in S.fx.speeds ? r3.duration = S.fx.speeds[r3.duration] : r3.duration = S.fx.speeds._default), r3.queue != null && r3.queue !== true || (r3.queue = "fx"), r3.old = r3.complete, r3.complete = function() {
            m(r3.old) && r3.old.call(this), r3.queue && S.dequeue(this, r3.queue);
          }, r3;
        }, S.fn.extend({ fadeTo: function(e3, t3, n3, r3) {
          return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t3 }, e3, n3, r3);
        }, animate: function(t3, e3, n3, r3) {
          var i3 = S.isEmptyObject(t3), o3 = S.speed(e3, n3, r3), a3 = function() {
            var e4 = lt(this, S.extend({}, t3), o3);
            (i3 || Y.get(this, "finish")) && e4.stop(true);
          };
          return a3.finish = a3, i3 || o3.queue === false ? this.each(a3) : this.queue(o3.queue, a3);
        }, stop: function(i3, e3, o3) {
          var a3 = function(e4) {
            var t3 = e4.stop;
            delete e4.stop, t3(o3);
          };
          return typeof i3 != "string" && (o3 = e3, e3 = i3, i3 = void 0), e3 && this.queue(i3 || "fx", []), this.each(function() {
            var e4 = true, t3 = i3 != null && i3 + "queueHooks", n3 = S.timers, r3 = Y.get(this);
            if (t3)
              r3[t3] && r3[t3].stop && a3(r3[t3]);
            else
              for (t3 in r3)
                r3[t3] && r3[t3].stop && it.test(t3) && a3(r3[t3]);
            for (t3 = n3.length; t3--; )
              n3[t3].elem !== this || i3 != null && n3[t3].queue !== i3 || (n3[t3].anim.stop(o3), e4 = false, n3.splice(t3, 1));
            !e4 && o3 || S.dequeue(this, i3);
          });
        }, finish: function(a3) {
          return a3 !== false && (a3 = a3 || "fx"), this.each(function() {
            var e3, t3 = Y.get(this), n3 = t3[a3 + "queue"], r3 = t3[a3 + "queueHooks"], i3 = S.timers, o3 = n3 ? n3.length : 0;
            for (t3.finish = true, S.queue(this, a3, []), r3 && r3.stop && r3.stop.call(this, true), e3 = i3.length; e3--; )
              i3[e3].elem === this && i3[e3].queue === a3 && (i3[e3].anim.stop(true), i3.splice(e3, 1));
            for (e3 = 0; e3 < o3; e3++)
              n3[e3] && n3[e3].finish && n3[e3].finish.call(this);
            delete t3.finish;
          });
        } }), S.each(["toggle", "show", "hide"], function(e3, r3) {
          var i3 = S.fn[r3];
          S.fn[r3] = function(e4, t3, n3) {
            return e4 == null || typeof e4 == "boolean" ? i3.apply(this, arguments) : this.animate(st(r3, true), e4, t3, n3);
          };
        }), S.each({ slideDown: st("show"), slideUp: st("hide"), slideToggle: st("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e3, r3) {
          S.fn[e3] = function(e4, t3, n3) {
            return this.animate(r3, e4, t3, n3);
          };
        }), S.timers = [], S.fx.tick = function() {
          var e3, t3 = 0, n3 = S.timers;
          for (Ze = Date.now(); t3 < n3.length; t3++)
            (e3 = n3[t3])() || n3[t3] !== e3 || n3.splice(t3--, 1);
          n3.length || S.fx.stop(), Ze = void 0;
        }, S.fx.timer = function(e3) {
          S.timers.push(e3), S.fx.start();
        }, S.fx.interval = 13, S.fx.start = function() {
          et || (et = true, ot());
        }, S.fx.stop = function() {
          et = null;
        }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(r3, e3) {
          return r3 = S.fx && S.fx.speeds[r3] || r3, e3 = e3 || "fx", this.queue(e3, function(e4, t3) {
            var n3 = C.setTimeout(e4, r3);
            t3.stop = function() {
              C.clearTimeout(n3);
            };
          });
        }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = tt.value !== "", y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = tt.value === "t";
        var ct, ft = S.expr.attrHandle;
        S.fn.extend({ attr: function(e3, t3) {
          return $12(this, S.attr, e3, t3, 1 < arguments.length);
        }, removeAttr: function(e3) {
          return this.each(function() {
            S.removeAttr(this, e3);
          });
        } }), S.extend({ attr: function(e3, t3, n3) {
          var r3, i3, o3 = e3.nodeType;
          if (o3 !== 3 && o3 !== 8 && o3 !== 2)
            return typeof e3.getAttribute == "undefined" ? S.prop(e3, t3, n3) : (o3 === 1 && S.isXMLDoc(e3) || (i3 = S.attrHooks[t3.toLowerCase()] || (S.expr.match.bool.test(t3) ? ct : void 0)), n3 !== void 0 ? n3 === null ? void S.removeAttr(e3, t3) : i3 && "set" in i3 && (r3 = i3.set(e3, n3, t3)) !== void 0 ? r3 : (e3.setAttribute(t3, n3 + ""), n3) : i3 && "get" in i3 && (r3 = i3.get(e3, t3)) !== null ? r3 : (r3 = S.find.attr(e3, t3)) == null ? void 0 : r3);
        }, attrHooks: { type: { set: function(e3, t3) {
          if (!y.radioValue && t3 === "radio" && A(e3, "input")) {
            var n3 = e3.value;
            return e3.setAttribute("type", t3), n3 && (e3.value = n3), t3;
          }
        } } }, removeAttr: function(e3, t3) {
          var n3, r3 = 0, i3 = t3 && t3.match(P);
          if (i3 && e3.nodeType === 1)
            while (n3 = i3[r3++])
              e3.removeAttribute(n3);
        } }), ct = { set: function(e3, t3, n3) {
          return t3 === false ? S.removeAttr(e3, n3) : e3.setAttribute(n3, n3), n3;
        } }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e3, t3) {
          var a3 = ft[t3] || S.find.attr;
          ft[t3] = function(e4, t4, n3) {
            var r3, i3, o3 = t4.toLowerCase();
            return n3 || (i3 = ft[o3], ft[o3] = r3, r3 = a3(e4, t4, n3) != null ? o3 : null, ft[o3] = i3), r3;
          };
        });
        var pt = /^(?:input|select|textarea|button)$/i, dt = /^(?:a|area)$/i;
        function ht(e3) {
          return (e3.match(P) || []).join(" ");
        }
        function gt(e3) {
          return e3.getAttribute && e3.getAttribute("class") || "";
        }
        function vt(e3) {
          return Array.isArray(e3) ? e3 : typeof e3 == "string" && e3.match(P) || [];
        }
        S.fn.extend({ prop: function(e3, t3) {
          return $12(this, S.prop, e3, t3, 1 < arguments.length);
        }, removeProp: function(e3) {
          return this.each(function() {
            delete this[S.propFix[e3] || e3];
          });
        } }), S.extend({ prop: function(e3, t3, n3) {
          var r3, i3, o3 = e3.nodeType;
          if (o3 !== 3 && o3 !== 8 && o3 !== 2)
            return o3 === 1 && S.isXMLDoc(e3) || (t3 = S.propFix[t3] || t3, i3 = S.propHooks[t3]), n3 !== void 0 ? i3 && "set" in i3 && (r3 = i3.set(e3, n3, t3)) !== void 0 ? r3 : e3[t3] = n3 : i3 && "get" in i3 && (r3 = i3.get(e3, t3)) !== null ? r3 : e3[t3];
        }, propHooks: { tabIndex: { get: function(e3) {
          var t3 = S.find.attr(e3, "tabindex");
          return t3 ? parseInt(t3, 10) : pt.test(e3.nodeName) || dt.test(e3.nodeName) && e3.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = { get: function(e3) {
          var t3 = e3.parentNode;
          return t3 && t3.parentNode && t3.parentNode.selectedIndex, null;
        }, set: function(e3) {
          var t3 = e3.parentNode;
          t3 && (t3.selectedIndex, t3.parentNode && t3.parentNode.selectedIndex);
        } }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
          S.propFix[this.toLowerCase()] = this;
        }), S.fn.extend({ addClass: function(t3) {
          var e3, n3, r3, i3, o3, a3, s3, u2 = 0;
          if (m(t3))
            return this.each(function(e4) {
              S(this).addClass(t3.call(this, e4, gt(this)));
            });
          if ((e3 = vt(t3)).length) {
            while (n3 = this[u2++])
              if (i3 = gt(n3), r3 = n3.nodeType === 1 && " " + ht(i3) + " ") {
                a3 = 0;
                while (o3 = e3[a3++])
                  r3.indexOf(" " + o3 + " ") < 0 && (r3 += o3 + " ");
                i3 !== (s3 = ht(r3)) && n3.setAttribute("class", s3);
              }
          }
          return this;
        }, removeClass: function(t3) {
          var e3, n3, r3, i3, o3, a3, s3, u2 = 0;
          if (m(t3))
            return this.each(function(e4) {
              S(this).removeClass(t3.call(this, e4, gt(this)));
            });
          if (!arguments.length)
            return this.attr("class", "");
          if ((e3 = vt(t3)).length) {
            while (n3 = this[u2++])
              if (i3 = gt(n3), r3 = n3.nodeType === 1 && " " + ht(i3) + " ") {
                a3 = 0;
                while (o3 = e3[a3++])
                  while (-1 < r3.indexOf(" " + o3 + " "))
                    r3 = r3.replace(" " + o3 + " ", " ");
                i3 !== (s3 = ht(r3)) && n3.setAttribute("class", s3);
              }
          }
          return this;
        }, toggleClass: function(i3, t3) {
          var o3 = typeof i3, a3 = o3 === "string" || Array.isArray(i3);
          return typeof t3 == "boolean" && a3 ? t3 ? this.addClass(i3) : this.removeClass(i3) : m(i3) ? this.each(function(e3) {
            S(this).toggleClass(i3.call(this, e3, gt(this), t3), t3);
          }) : this.each(function() {
            var e3, t4, n3, r3;
            if (a3) {
              t4 = 0, n3 = S(this), r3 = vt(i3);
              while (e3 = r3[t4++])
                n3.hasClass(e3) ? n3.removeClass(e3) : n3.addClass(e3);
            } else
              i3 !== void 0 && o3 !== "boolean" || ((e3 = gt(this)) && Y.set(this, "__className__", e3), this.setAttribute && this.setAttribute("class", e3 || i3 === false ? "" : Y.get(this, "__className__") || ""));
          });
        }, hasClass: function(e3) {
          var t3, n3, r3 = 0;
          t3 = " " + e3 + " ";
          while (n3 = this[r3++])
            if (n3.nodeType === 1 && -1 < (" " + ht(gt(n3)) + " ").indexOf(t3))
              return true;
          return false;
        } });
        var yt = /\r/g;
        S.fn.extend({ val: function(n3) {
          var r3, e3, i3, t3 = this[0];
          return arguments.length ? (i3 = m(n3), this.each(function(e4) {
            var t4;
            this.nodeType === 1 && ((t4 = i3 ? n3.call(this, e4, S(this).val()) : n3) == null ? t4 = "" : typeof t4 == "number" ? t4 += "" : Array.isArray(t4) && (t4 = S.map(t4, function(e5) {
              return e5 == null ? "" : e5 + "";
            })), (r3 = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r3 && r3.set(this, t4, "value") !== void 0 || (this.value = t4));
          })) : t3 ? (r3 = S.valHooks[t3.type] || S.valHooks[t3.nodeName.toLowerCase()]) && "get" in r3 && (e3 = r3.get(t3, "value")) !== void 0 ? e3 : typeof (e3 = t3.value) == "string" ? e3.replace(yt, "") : e3 == null ? "" : e3 : void 0;
        } }), S.extend({ valHooks: { option: { get: function(e3) {
          var t3 = S.find.attr(e3, "value");
          return t3 != null ? t3 : ht(S.text(e3));
        } }, select: { get: function(e3) {
          var t3, n3, r3, i3 = e3.options, o3 = e3.selectedIndex, a3 = e3.type === "select-one", s3 = a3 ? null : [], u2 = a3 ? o3 + 1 : i3.length;
          for (r3 = o3 < 0 ? u2 : a3 ? o3 : 0; r3 < u2; r3++)
            if (((n3 = i3[r3]).selected || r3 === o3) && !n3.disabled && (!n3.parentNode.disabled || !A(n3.parentNode, "optgroup"))) {
              if (t3 = S(n3).val(), a3)
                return t3;
              s3.push(t3);
            }
          return s3;
        }, set: function(e3, t3) {
          var n3, r3, i3 = e3.options, o3 = S.makeArray(t3), a3 = i3.length;
          while (a3--)
            ((r3 = i3[a3]).selected = -1 < S.inArray(S.valHooks.option.get(r3), o3)) && (n3 = true);
          return n3 || (e3.selectedIndex = -1), o3;
        } } } }), S.each(["radio", "checkbox"], function() {
          S.valHooks[this] = { set: function(e3, t3) {
            if (Array.isArray(t3))
              return e3.checked = -1 < S.inArray(S(e3).val(), t3);
          } }, y.checkOn || (S.valHooks[this].get = function(e3) {
            return e3.getAttribute("value") === null ? "on" : e3.value;
          });
        }), y.focusin = "onfocusin" in C;
        var mt = /^(?:focusinfocus|focusoutblur)$/, xt = function(e3) {
          e3.stopPropagation();
        };
        S.extend(S.event, { trigger: function(e3, t3, n3, r3) {
          var i3, o3, a3, s3, u2, l2, c2, f2, p2 = [n3 || E], d2 = v.call(e3, "type") ? e3.type : e3, h2 = v.call(e3, "namespace") ? e3.namespace.split(".") : [];
          if (o3 = f2 = a3 = n3 = n3 || E, n3.nodeType !== 3 && n3.nodeType !== 8 && !mt.test(d2 + S.event.triggered) && (-1 < d2.indexOf(".") && (d2 = (h2 = d2.split(".")).shift(), h2.sort()), u2 = d2.indexOf(":") < 0 && "on" + d2, (e3 = e3[S.expando] ? e3 : new S.Event(d2, typeof e3 == "object" && e3)).isTrigger = r3 ? 2 : 3, e3.namespace = h2.join("."), e3.rnamespace = e3.namespace ? new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e3.result = void 0, e3.target || (e3.target = n3), t3 = t3 == null ? [e3] : S.makeArray(t3, [e3]), c2 = S.event.special[d2] || {}, r3 || !c2.trigger || c2.trigger.apply(n3, t3) !== false)) {
            if (!r3 && !c2.noBubble && !x(n3)) {
              for (s3 = c2.delegateType || d2, mt.test(s3 + d2) || (o3 = o3.parentNode); o3; o3 = o3.parentNode)
                p2.push(o3), a3 = o3;
              a3 === (n3.ownerDocument || E) && p2.push(a3.defaultView || a3.parentWindow || C);
            }
            i3 = 0;
            while ((o3 = p2[i3++]) && !e3.isPropagationStopped())
              f2 = o3, e3.type = 1 < i3 ? s3 : c2.bindType || d2, (l2 = (Y.get(o3, "events") || /* @__PURE__ */ Object.create(null))[e3.type] && Y.get(o3, "handle")) && l2.apply(o3, t3), (l2 = u2 && o3[u2]) && l2.apply && V(o3) && (e3.result = l2.apply(o3, t3), e3.result === false && e3.preventDefault());
            return e3.type = d2, r3 || e3.isDefaultPrevented() || c2._default && c2._default.apply(p2.pop(), t3) !== false || !V(n3) || u2 && m(n3[d2]) && !x(n3) && ((a3 = n3[u2]) && (n3[u2] = null), S.event.triggered = d2, e3.isPropagationStopped() && f2.addEventListener(d2, xt), n3[d2](), e3.isPropagationStopped() && f2.removeEventListener(d2, xt), S.event.triggered = void 0, a3 && (n3[u2] = a3)), e3.result;
          }
        }, simulate: function(e3, t3, n3) {
          var r3 = S.extend(new S.Event(), n3, { type: e3, isSimulated: true });
          S.event.trigger(r3, null, t3);
        } }), S.fn.extend({ trigger: function(e3, t3) {
          return this.each(function() {
            S.event.trigger(e3, t3, this);
          });
        }, triggerHandler: function(e3, t3) {
          var n3 = this[0];
          if (n3)
            return S.event.trigger(e3, t3, n3, true);
        } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(n3, r3) {
          var i3 = function(e3) {
            S.event.simulate(r3, e3.target, S.event.fix(e3));
          };
          S.event.special[r3] = { setup: function() {
            var e3 = this.ownerDocument || this.document || this, t3 = Y.access(e3, r3);
            t3 || e3.addEventListener(n3, i3, true), Y.access(e3, r3, (t3 || 0) + 1);
          }, teardown: function() {
            var e3 = this.ownerDocument || this.document || this, t3 = Y.access(e3, r3) - 1;
            t3 ? Y.access(e3, r3, t3) : (e3.removeEventListener(n3, i3, true), Y.remove(e3, r3));
          } };
        });
        var bt = C.location, wt = { guid: Date.now() }, Tt = /\?/;
        S.parseXML = function(e3) {
          var t3, n3;
          if (!e3 || typeof e3 != "string")
            return null;
          try {
            t3 = new C.DOMParser().parseFromString(e3, "text/xml");
          } catch (e4) {
          }
          return n3 = t3 && t3.getElementsByTagName("parsererror")[0], t3 && !n3 || S.error("Invalid XML: " + (n3 ? S.map(n3.childNodes, function(e4) {
            return e4.textContent;
          }).join("\n") : e3)), t3;
        };
        var Ct = /\[\]$/, Et = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i, kt = /^(?:input|select|textarea|keygen)/i;
        function At(n3, e3, r3, i3) {
          var t3;
          if (Array.isArray(e3))
            S.each(e3, function(e4, t4) {
              r3 || Ct.test(n3) ? i3(n3, t4) : At(n3 + "[" + (typeof t4 == "object" && t4 != null ? e4 : "") + "]", t4, r3, i3);
            });
          else if (r3 || w(e3) !== "object")
            i3(n3, e3);
          else
            for (t3 in e3)
              At(n3 + "[" + t3 + "]", e3[t3], r3, i3);
        }
        S.param = function(e3, t3) {
          var n3, r3 = [], i3 = function(e4, t4) {
            var n4 = m(t4) ? t4() : t4;
            r3[r3.length] = encodeURIComponent(e4) + "=" + encodeURIComponent(n4 == null ? "" : n4);
          };
          if (e3 == null)
            return "";
          if (Array.isArray(e3) || e3.jquery && !S.isPlainObject(e3))
            S.each(e3, function() {
              i3(this.name, this.value);
            });
          else
            for (n3 in e3)
              At(n3, e3[n3], t3, i3);
          return r3.join("&");
        }, S.fn.extend({ serialize: function() {
          return S.param(this.serializeArray());
        }, serializeArray: function() {
          return this.map(function() {
            var e3 = S.prop(this, "elements");
            return e3 ? S.makeArray(e3) : this;
          }).filter(function() {
            var e3 = this.type;
            return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e3) && (this.checked || !pe.test(e3));
          }).map(function(e3, t3) {
            var n3 = S(this).val();
            return n3 == null ? null : Array.isArray(n3) ? S.map(n3, function(e4) {
              return { name: t3.name, value: e4.replace(Et, "\r\n") };
            }) : { name: t3.name, value: n3.replace(Et, "\r\n") };
          }).get();
        } });
        var Nt = /%20/g, jt = /#.*$/, Dt = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Lt = /^(?:GET|HEAD)$/, Ht = /^\/\//, Ot = {}, Pt = {}, Rt = "*/".concat("*"), Mt = E.createElement("a");
        function It(o3) {
          return function(e3, t3) {
            typeof e3 != "string" && (t3 = e3, e3 = "*");
            var n3, r3 = 0, i3 = e3.toLowerCase().match(P) || [];
            if (m(t3))
              while (n3 = i3[r3++])
                n3[0] === "+" ? (n3 = n3.slice(1) || "*", (o3[n3] = o3[n3] || []).unshift(t3)) : (o3[n3] = o3[n3] || []).push(t3);
          };
        }
        function Wt(t3, i3, o3, a3) {
          var s3 = {}, u2 = t3 === Pt;
          function l2(e3) {
            var r3;
            return s3[e3] = true, S.each(t3[e3] || [], function(e4, t4) {
              var n3 = t4(i3, o3, a3);
              return typeof n3 != "string" || u2 || s3[n3] ? u2 ? !(r3 = n3) : void 0 : (i3.dataTypes.unshift(n3), l2(n3), false);
            }), r3;
          }
          return l2(i3.dataTypes[0]) || !s3["*"] && l2("*");
        }
        function Ft(e3, t3) {
          var n3, r3, i3 = S.ajaxSettings.flatOptions || {};
          for (n3 in t3)
            t3[n3] !== void 0 && ((i3[n3] ? e3 : r3 || (r3 = {}))[n3] = t3[n3]);
          return r3 && S.extend(true, e3, r3), e3;
        }
        Mt.href = bt.href, S.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: bt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e3, t3) {
          return t3 ? Ft(Ft(e3, S.ajaxSettings), t3) : Ft(S.ajaxSettings, e3);
        }, ajaxPrefilter: It(Ot), ajaxTransport: It(Pt), ajax: function(e3, t3) {
          typeof e3 == "object" && (t3 = e3, e3 = void 0), t3 = t3 || {};
          var c2, f2, p2, n3, d2, r3, h2, g2, i3, o3, v2 = S.ajaxSetup({}, t3), y2 = v2.context || v2, m2 = v2.context && (y2.nodeType || y2.jquery) ? S(y2) : S.event, x2 = S.Deferred(), b2 = S.Callbacks("once memory"), w2 = v2.statusCode || {}, a3 = {}, s3 = {}, u2 = "canceled", T2 = { readyState: 0, getResponseHeader: function(e4) {
            var t4;
            if (h2) {
              if (!n3) {
                n3 = {};
                while (t4 = qt.exec(p2))
                  n3[t4[1].toLowerCase() + " "] = (n3[t4[1].toLowerCase() + " "] || []).concat(t4[2]);
              }
              t4 = n3[e4.toLowerCase() + " "];
            }
            return t4 == null ? null : t4.join(", ");
          }, getAllResponseHeaders: function() {
            return h2 ? p2 : null;
          }, setRequestHeader: function(e4, t4) {
            return h2 == null && (e4 = s3[e4.toLowerCase()] = s3[e4.toLowerCase()] || e4, a3[e4] = t4), this;
          }, overrideMimeType: function(e4) {
            return h2 == null && (v2.mimeType = e4), this;
          }, statusCode: function(e4) {
            var t4;
            if (e4)
              if (h2)
                T2.always(e4[T2.status]);
              else
                for (t4 in e4)
                  w2[t4] = [w2[t4], e4[t4]];
            return this;
          }, abort: function(e4) {
            var t4 = e4 || u2;
            return c2 && c2.abort(t4), l2(0, t4), this;
          } };
          if (x2.promise(T2), v2.url = ((e3 || v2.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v2.type = t3.method || t3.type || v2.method || v2.type, v2.dataTypes = (v2.dataType || "*").toLowerCase().match(P) || [""], v2.crossDomain == null) {
            r3 = E.createElement("a");
            try {
              r3.href = v2.url, r3.href = r3.href, v2.crossDomain = Mt.protocol + "//" + Mt.host != r3.protocol + "//" + r3.host;
            } catch (e4) {
              v2.crossDomain = true;
            }
          }
          if (v2.data && v2.processData && typeof v2.data != "string" && (v2.data = S.param(v2.data, v2.traditional)), Wt(Ot, v2, t3, T2), h2)
            return T2;
          for (i3 in (g2 = S.event && v2.global) && S.active++ == 0 && S.event.trigger("ajaxStart"), v2.type = v2.type.toUpperCase(), v2.hasContent = !Lt.test(v2.type), f2 = v2.url.replace(jt, ""), v2.hasContent ? v2.data && v2.processData && (v2.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (v2.data = v2.data.replace(Nt, "+")) : (o3 = v2.url.slice(f2.length), v2.data && (v2.processData || typeof v2.data == "string") && (f2 += (Tt.test(f2) ? "&" : "?") + v2.data, delete v2.data), v2.cache === false && (f2 = f2.replace(Dt, "$1"), o3 = (Tt.test(f2) ? "&" : "?") + "_=" + wt.guid++ + o3), v2.url = f2 + o3), v2.ifModified && (S.lastModified[f2] && T2.setRequestHeader("If-Modified-Since", S.lastModified[f2]), S.etag[f2] && T2.setRequestHeader("If-None-Match", S.etag[f2])), (v2.data && v2.hasContent && v2.contentType !== false || t3.contentType) && T2.setRequestHeader("Content-Type", v2.contentType), T2.setRequestHeader("Accept", v2.dataTypes[0] && v2.accepts[v2.dataTypes[0]] ? v2.accepts[v2.dataTypes[0]] + (v2.dataTypes[0] !== "*" ? ", " + Rt + "; q=0.01" : "") : v2.accepts["*"]), v2.headers)
            T2.setRequestHeader(i3, v2.headers[i3]);
          if (v2.beforeSend && (v2.beforeSend.call(y2, T2, v2) === false || h2))
            return T2.abort();
          if (u2 = "abort", b2.add(v2.complete), T2.done(v2.success), T2.fail(v2.error), c2 = Wt(Pt, v2, t3, T2)) {
            if (T2.readyState = 1, g2 && m2.trigger("ajaxSend", [T2, v2]), h2)
              return T2;
            v2.async && 0 < v2.timeout && (d2 = C.setTimeout(function() {
              T2.abort("timeout");
            }, v2.timeout));
            try {
              h2 = false, c2.send(a3, l2);
            } catch (e4) {
              if (h2)
                throw e4;
              l2(-1, e4);
            }
          } else
            l2(-1, "No Transport");
          function l2(e4, t4, n4, r4) {
            var i4, o4, a4, s4, u3, l3 = t4;
            h2 || (h2 = true, d2 && C.clearTimeout(d2), c2 = void 0, p2 = r4 || "", T2.readyState = 0 < e4 ? 4 : 0, i4 = 200 <= e4 && e4 < 300 || e4 === 304, n4 && (s4 = function(e5, t5, n5) {
              var r5, i5, o5, a5, s5 = e5.contents, u4 = e5.dataTypes;
              while (u4[0] === "*")
                u4.shift(), r5 === void 0 && (r5 = e5.mimeType || t5.getResponseHeader("Content-Type"));
              if (r5) {
                for (i5 in s5)
                  if (s5[i5] && s5[i5].test(r5)) {
                    u4.unshift(i5);
                    break;
                  }
              }
              if (u4[0] in n5)
                o5 = u4[0];
              else {
                for (i5 in n5) {
                  if (!u4[0] || e5.converters[i5 + " " + u4[0]]) {
                    o5 = i5;
                    break;
                  }
                  a5 || (a5 = i5);
                }
                o5 = o5 || a5;
              }
              if (o5)
                return o5 !== u4[0] && u4.unshift(o5), n5[o5];
            }(v2, T2, n4)), !i4 && -1 < S.inArray("script", v2.dataTypes) && S.inArray("json", v2.dataTypes) < 0 && (v2.converters["text script"] = function() {
            }), s4 = function(e5, t5, n5, r5) {
              var i5, o5, a5, s5, u4, l4 = {}, c3 = e5.dataTypes.slice();
              if (c3[1])
                for (a5 in e5.converters)
                  l4[a5.toLowerCase()] = e5.converters[a5];
              o5 = c3.shift();
              while (o5)
                if (e5.responseFields[o5] && (n5[e5.responseFields[o5]] = t5), !u4 && r5 && e5.dataFilter && (t5 = e5.dataFilter(t5, e5.dataType)), u4 = o5, o5 = c3.shift()) {
                  if (o5 === "*")
                    o5 = u4;
                  else if (u4 !== "*" && u4 !== o5) {
                    if (!(a5 = l4[u4 + " " + o5] || l4["* " + o5])) {
                      for (i5 in l4)
                        if ((s5 = i5.split(" "))[1] === o5 && (a5 = l4[u4 + " " + s5[0]] || l4["* " + s5[0]])) {
                          a5 === true ? a5 = l4[i5] : l4[i5] !== true && (o5 = s5[0], c3.unshift(s5[1]));
                          break;
                        }
                    }
                    if (a5 !== true)
                      if (a5 && e5["throws"])
                        t5 = a5(t5);
                      else
                        try {
                          t5 = a5(t5);
                        } catch (e6) {
                          return { state: "parsererror", error: a5 ? e6 : "No conversion from " + u4 + " to " + o5 };
                        }
                  }
                }
              return { state: "success", data: t5 };
            }(v2, s4, T2, i4), i4 ? (v2.ifModified && ((u3 = T2.getResponseHeader("Last-Modified")) && (S.lastModified[f2] = u3), (u3 = T2.getResponseHeader("etag")) && (S.etag[f2] = u3)), e4 === 204 || v2.type === "HEAD" ? l3 = "nocontent" : e4 === 304 ? l3 = "notmodified" : (l3 = s4.state, o4 = s4.data, i4 = !(a4 = s4.error))) : (a4 = l3, !e4 && l3 || (l3 = "error", e4 < 0 && (e4 = 0))), T2.status = e4, T2.statusText = (t4 || l3) + "", i4 ? x2.resolveWith(y2, [o4, l3, T2]) : x2.rejectWith(y2, [T2, l3, a4]), T2.statusCode(w2), w2 = void 0, g2 && m2.trigger(i4 ? "ajaxSuccess" : "ajaxError", [T2, v2, i4 ? o4 : a4]), b2.fireWith(y2, [T2, l3]), g2 && (m2.trigger("ajaxComplete", [T2, v2]), --S.active || S.event.trigger("ajaxStop")));
          }
          return T2;
        }, getJSON: function(e3, t3, n3) {
          return S.get(e3, t3, n3, "json");
        }, getScript: function(e3, t3) {
          return S.get(e3, void 0, t3, "script");
        } }), S.each(["get", "post"], function(e3, i3) {
          S[i3] = function(e4, t3, n3, r3) {
            return m(t3) && (r3 = r3 || n3, n3 = t3, t3 = void 0), S.ajax(S.extend({ url: e4, type: i3, dataType: r3, data: t3, success: n3 }, S.isPlainObject(e4) && e4));
          };
        }), S.ajaxPrefilter(function(e3) {
          var t3;
          for (t3 in e3.headers)
            t3.toLowerCase() === "content-type" && (e3.contentType = e3.headers[t3] || "");
        }), S._evalUrl = function(e3, t3, n3) {
          return S.ajax({ url: e3, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {
          } }, dataFilter: function(e4) {
            S.globalEval(e4, t3, n3);
          } });
        }, S.fn.extend({ wrapAll: function(e3) {
          var t3;
          return this[0] && (m(e3) && (e3 = e3.call(this[0])), t3 = S(e3, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t3.insertBefore(this[0]), t3.map(function() {
            var e4 = this;
            while (e4.firstElementChild)
              e4 = e4.firstElementChild;
            return e4;
          }).append(this)), this;
        }, wrapInner: function(n3) {
          return m(n3) ? this.each(function(e3) {
            S(this).wrapInner(n3.call(this, e3));
          }) : this.each(function() {
            var e3 = S(this), t3 = e3.contents();
            t3.length ? t3.wrapAll(n3) : e3.append(n3);
          });
        }, wrap: function(t3) {
          var n3 = m(t3);
          return this.each(function(e3) {
            S(this).wrapAll(n3 ? t3.call(this, e3) : t3);
          });
        }, unwrap: function(e3) {
          return this.parent(e3).not("body").each(function() {
            S(this).replaceWith(this.childNodes);
          }), this;
        } }), S.expr.pseudos.hidden = function(e3) {
          return !S.expr.pseudos.visible(e3);
        }, S.expr.pseudos.visible = function(e3) {
          return !!(e3.offsetWidth || e3.offsetHeight || e3.getClientRects().length);
        }, S.ajaxSettings.xhr = function() {
          try {
            return new C.XMLHttpRequest();
          } catch (e3) {
          }
        };
        var Bt = { 0: 200, 1223: 204 }, $t = S.ajaxSettings.xhr();
        y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function(i3) {
          var o3, a3;
          if (y.cors || $t && !i3.crossDomain)
            return { send: function(e3, t3) {
              var n3, r3 = i3.xhr();
              if (r3.open(i3.type, i3.url, i3.async, i3.username, i3.password), i3.xhrFields)
                for (n3 in i3.xhrFields)
                  r3[n3] = i3.xhrFields[n3];
              for (n3 in i3.mimeType && r3.overrideMimeType && r3.overrideMimeType(i3.mimeType), i3.crossDomain || e3["X-Requested-With"] || (e3["X-Requested-With"] = "XMLHttpRequest"), e3)
                r3.setRequestHeader(n3, e3[n3]);
              o3 = function(e4) {
                return function() {
                  o3 && (o3 = a3 = r3.onload = r3.onerror = r3.onabort = r3.ontimeout = r3.onreadystatechange = null, e4 === "abort" ? r3.abort() : e4 === "error" ? typeof r3.status != "number" ? t3(0, "error") : t3(r3.status, r3.statusText) : t3(Bt[r3.status] || r3.status, r3.statusText, (r3.responseType || "text") !== "text" || typeof r3.responseText != "string" ? { binary: r3.response } : { text: r3.responseText }, r3.getAllResponseHeaders()));
                };
              }, r3.onload = o3(), a3 = r3.onerror = r3.ontimeout = o3("error"), r3.onabort !== void 0 ? r3.onabort = a3 : r3.onreadystatechange = function() {
                r3.readyState === 4 && C.setTimeout(function() {
                  o3 && a3();
                });
              }, o3 = o3("abort");
              try {
                r3.send(i3.hasContent && i3.data || null);
              } catch (e4) {
                if (o3)
                  throw e4;
              }
            }, abort: function() {
              o3 && o3();
            } };
        }), S.ajaxPrefilter(function(e3) {
          e3.crossDomain && (e3.contents.script = false);
        }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e3) {
          return S.globalEval(e3), e3;
        } } }), S.ajaxPrefilter("script", function(e3) {
          e3.cache === void 0 && (e3.cache = false), e3.crossDomain && (e3.type = "GET");
        }), S.ajaxTransport("script", function(n3) {
          var r3, i3;
          if (n3.crossDomain || n3.scriptAttrs)
            return { send: function(e3, t3) {
              r3 = S("<script>").attr(n3.scriptAttrs || {}).prop({ charset: n3.scriptCharset, src: n3.url }).on("load error", i3 = function(e4) {
                r3.remove(), i3 = null, e4 && t3(e4.type === "error" ? 404 : 200, e4.type);
              }), E.head.appendChild(r3[0]);
            }, abort: function() {
              i3 && i3();
            } };
        });
        var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/;
        S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
          var e3 = zt.pop() || S.expando + "_" + wt.guid++;
          return this[e3] = true, e3;
        } }), S.ajaxPrefilter("json jsonp", function(e3, t3, n3) {
          var r3, i3, o3, a3 = e3.jsonp !== false && (Ut.test(e3.url) ? "url" : typeof e3.data == "string" && (e3.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Ut.test(e3.data) && "data");
          if (a3 || e3.dataTypes[0] === "jsonp")
            return r3 = e3.jsonpCallback = m(e3.jsonpCallback) ? e3.jsonpCallback() : e3.jsonpCallback, a3 ? e3[a3] = e3[a3].replace(Ut, "$1" + r3) : e3.jsonp !== false && (e3.url += (Tt.test(e3.url) ? "&" : "?") + e3.jsonp + "=" + r3), e3.converters["script json"] = function() {
              return o3 || S.error(r3 + " was not called"), o3[0];
            }, e3.dataTypes[0] = "json", i3 = C[r3], C[r3] = function() {
              o3 = arguments;
            }, n3.always(function() {
              i3 === void 0 ? S(C).removeProp(r3) : C[r3] = i3, e3[r3] && (e3.jsonpCallback = t3.jsonpCallback, zt.push(r3)), o3 && m(i3) && i3(o3[0]), o3 = i3 = void 0;
            }), "script";
        }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", _t.childNodes.length === 2), S.parseHTML = function(e3, t3, n3) {
          return typeof e3 != "string" ? [] : (typeof t3 == "boolean" && (n3 = t3, t3 = false), t3 || (y.createHTMLDocument ? ((r3 = (t3 = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t3.head.appendChild(r3)) : t3 = E), o3 = !n3 && [], (i3 = N.exec(e3)) ? [t3.createElement(i3[1])] : (i3 = xe([e3], t3, o3), o3 && o3.length && S(o3).remove(), S.merge([], i3.childNodes)));
          var r3, i3, o3;
        }, S.fn.load = function(e3, t3, n3) {
          var r3, i3, o3, a3 = this, s3 = e3.indexOf(" ");
          return -1 < s3 && (r3 = ht(e3.slice(s3)), e3 = e3.slice(0, s3)), m(t3) ? (n3 = t3, t3 = void 0) : t3 && typeof t3 == "object" && (i3 = "POST"), 0 < a3.length && S.ajax({ url: e3, type: i3 || "GET", dataType: "html", data: t3 }).done(function(e4) {
            o3 = arguments, a3.html(r3 ? S("<div>").append(S.parseHTML(e4)).find(r3) : e4);
          }).always(n3 && function(e4, t4) {
            a3.each(function() {
              n3.apply(this, o3 || [e4.responseText, t4, e4]);
            });
          }), this;
        }, S.expr.pseudos.animated = function(t3) {
          return S.grep(S.timers, function(e3) {
            return t3 === e3.elem;
          }).length;
        }, S.offset = { setOffset: function(e3, t3, n3) {
          var r3, i3, o3, a3, s3, u2, l2 = S.css(e3, "position"), c2 = S(e3), f2 = {};
          l2 === "static" && (e3.style.position = "relative"), s3 = c2.offset(), o3 = S.css(e3, "top"), u2 = S.css(e3, "left"), (l2 === "absolute" || l2 === "fixed") && -1 < (o3 + u2).indexOf("auto") ? (a3 = (r3 = c2.position()).top, i3 = r3.left) : (a3 = parseFloat(o3) || 0, i3 = parseFloat(u2) || 0), m(t3) && (t3 = t3.call(e3, n3, S.extend({}, s3))), t3.top != null && (f2.top = t3.top - s3.top + a3), t3.left != null && (f2.left = t3.left - s3.left + i3), "using" in t3 ? t3.using.call(e3, f2) : c2.css(f2);
        } }, S.fn.extend({ offset: function(t3) {
          if (arguments.length)
            return t3 === void 0 ? this : this.each(function(e4) {
              S.offset.setOffset(this, t3, e4);
            });
          var e3, n3, r3 = this[0];
          return r3 ? r3.getClientRects().length ? (e3 = r3.getBoundingClientRect(), n3 = r3.ownerDocument.defaultView, { top: e3.top + n3.pageYOffset, left: e3.left + n3.pageXOffset }) : { top: 0, left: 0 } : void 0;
        }, position: function() {
          if (this[0]) {
            var e3, t3, n3, r3 = this[0], i3 = { top: 0, left: 0 };
            if (S.css(r3, "position") === "fixed")
              t3 = r3.getBoundingClientRect();
            else {
              t3 = this.offset(), n3 = r3.ownerDocument, e3 = r3.offsetParent || n3.documentElement;
              while (e3 && (e3 === n3.body || e3 === n3.documentElement) && S.css(e3, "position") === "static")
                e3 = e3.parentNode;
              e3 && e3 !== r3 && e3.nodeType === 1 && ((i3 = S(e3).offset()).top += S.css(e3, "borderTopWidth", true), i3.left += S.css(e3, "borderLeftWidth", true));
            }
            return { top: t3.top - i3.top - S.css(r3, "marginTop", true), left: t3.left - i3.left - S.css(r3, "marginLeft", true) };
          }
        }, offsetParent: function() {
          return this.map(function() {
            var e3 = this.offsetParent;
            while (e3 && S.css(e3, "position") === "static")
              e3 = e3.offsetParent;
            return e3 || re;
          });
        } }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t3, i3) {
          var o3 = i3 === "pageYOffset";
          S.fn[t3] = function(e3) {
            return $12(this, function(e4, t4, n3) {
              var r3;
              if (x(e4) ? r3 = e4 : e4.nodeType === 9 && (r3 = e4.defaultView), n3 === void 0)
                return r3 ? r3[i3] : e4[t4];
              r3 ? r3.scrollTo(o3 ? r3.pageXOffset : n3, o3 ? n3 : r3.pageYOffset) : e4[t4] = n3;
            }, t3, e3, arguments.length);
          };
        }), S.each(["top", "left"], function(e3, n3) {
          S.cssHooks[n3] = Fe(y.pixelPosition, function(e4, t3) {
            if (t3)
              return t3 = We(e4, n3), Pe.test(t3) ? S(e4).position()[n3] + "px" : t3;
          });
        }), S.each({ Height: "height", Width: "width" }, function(a3, s3) {
          S.each({ padding: "inner" + a3, content: s3, "": "outer" + a3 }, function(r3, o3) {
            S.fn[o3] = function(e3, t3) {
              var n3 = arguments.length && (r3 || typeof e3 != "boolean"), i3 = r3 || (e3 === true || t3 === true ? "margin" : "border");
              return $12(this, function(e4, t4, n4) {
                var r4;
                return x(e4) ? o3.indexOf("outer") === 0 ? e4["inner" + a3] : e4.document.documentElement["client" + a3] : e4.nodeType === 9 ? (r4 = e4.documentElement, Math.max(e4.body["scroll" + a3], r4["scroll" + a3], e4.body["offset" + a3], r4["offset" + a3], r4["client" + a3])) : n4 === void 0 ? S.css(e4, t4, i3) : S.style(e4, t4, n4, i3);
              }, s3, n3 ? e3 : void 0, n3);
            };
          });
        }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e3, t3) {
          S.fn[t3] = function(e4) {
            return this.on(t3, e4);
          };
        }), S.fn.extend({ bind: function(e3, t3, n3) {
          return this.on(e3, null, t3, n3);
        }, unbind: function(e3, t3) {
          return this.off(e3, null, t3);
        }, delegate: function(e3, t3, n3, r3) {
          return this.on(t3, e3, n3, r3);
        }, undelegate: function(e3, t3, n3) {
          return arguments.length === 1 ? this.off(e3, "**") : this.off(t3, e3 || "**", n3);
        }, hover: function(e3, t3) {
          return this.mouseenter(e3).mouseleave(t3 || e3);
        } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e3, n3) {
          S.fn[n3] = function(e4, t3) {
            return 0 < arguments.length ? this.on(n3, null, e4, t3) : this.trigger(n3);
          };
        });
        var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        S.proxy = function(e3, t3) {
          var n3, r3, i3;
          if (typeof t3 == "string" && (n3 = e3[t3], t3 = e3, e3 = n3), m(e3))
            return r3 = s2.call(arguments, 2), (i3 = function() {
              return e3.apply(t3 || this, r3.concat(s2.call(arguments)));
            }).guid = e3.guid = e3.guid || S.guid++, i3;
        }, S.holdReady = function(e3) {
          e3 ? S.readyWait++ : S.ready(true);
        }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e3) {
          var t3 = S.type(e3);
          return (t3 === "number" || t3 === "string") && !isNaN(e3 - parseFloat(e3));
        }, S.trim = function(e3) {
          return e3 == null ? "" : (e3 + "").replace(Xt, "");
        }, typeof define == "function" && define.amd && define("jquery", [], function() {
          return S;
        });
        var Vt = C.jQuery, Gt = C.$;
        return S.noConflict = function(e3) {
          return C.$ === S && (C.$ = Gt), e3 && C.jQuery === S && (C.jQuery = Vt), S;
        }, typeof e2 == "undefined" && (C.jQuery = C.$ = S), S;
      });
    }
  });

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\libs\lodash.min.js
  var require_lodash_min = __commonJS({
    "ns-hugo:C:\\Users\\jack\\AppData\\Roaming\\site\\themes\\virgo\\assets\\js\\libs\\lodash.min.js"(exports, module) {
      (function() {
        function n2(n3, t3, r3) {
          switch (r3.length) {
            case 0:
              return n3.call(t3);
            case 1:
              return n3.call(t3, r3[0]);
            case 2:
              return n3.call(t3, r3[0], r3[1]);
            case 3:
              return n3.call(t3, r3[0], r3[1], r3[2]);
          }
          return n3.apply(t3, r3);
        }
        function t2(n3, t3, r3, e3) {
          for (var u2 = -1, i3 = n3 == null ? 0 : n3.length; ++u2 < i3; ) {
            var o3 = n3[u2];
            t3(e3, o3, r3(o3), n3);
          }
          return e3;
        }
        function r2(n3, t3) {
          for (var r3 = -1, e3 = n3 == null ? 0 : n3.length; ++r3 < e3 && t3(n3[r3], r3, n3) !== false; )
            ;
          return n3;
        }
        function e2(n3, t3) {
          for (var r3 = n3 == null ? 0 : n3.length; r3-- && t3(n3[r3], r3, n3) !== false; )
            ;
          return n3;
        }
        function u(n3, t3) {
          for (var r3 = -1, e3 = n3 == null ? 0 : n3.length; ++r3 < e3; )
            if (!t3(n3[r3], r3, n3))
              return false;
          return true;
        }
        function i2(n3, t3) {
          for (var r3 = -1, e3 = n3 == null ? 0 : n3.length, u2 = 0, i3 = []; ++r3 < e3; ) {
            var o3 = n3[r3];
            t3(o3, r3, n3) && (i3[u2++] = o3);
          }
          return i3;
        }
        function o2(n3, t3) {
          return !!(n3 == null ? 0 : n3.length) && y(n3, t3, 0) > -1;
        }
        function f(n3, t3, r3) {
          for (var e3 = -1, u2 = n3 == null ? 0 : n3.length; ++e3 < u2; )
            if (r3(t3, n3[e3]))
              return true;
          return false;
        }
        function c(n3, t3) {
          for (var r3 = -1, e3 = n3 == null ? 0 : n3.length, u2 = Array(e3); ++r3 < e3; )
            u2[r3] = t3(n3[r3], r3, n3);
          return u2;
        }
        function a2(n3, t3) {
          for (var r3 = -1, e3 = t3.length, u2 = n3.length; ++r3 < e3; )
            n3[u2 + r3] = t3[r3];
          return n3;
        }
        function l(n3, t3, r3, e3) {
          var u2 = -1, i3 = n3 == null ? 0 : n3.length;
          for (e3 && i3 && (r3 = n3[++u2]); ++u2 < i3; )
            r3 = t3(r3, n3[u2], u2, n3);
          return r3;
        }
        function s2(n3, t3, r3, e3) {
          var u2 = n3 == null ? 0 : n3.length;
          for (e3 && u2 && (r3 = n3[--u2]); u2--; )
            r3 = t3(r3, n3[u2], u2, n3);
          return r3;
        }
        function h(n3, t3) {
          for (var r3 = -1, e3 = n3 == null ? 0 : n3.length; ++r3 < e3; )
            if (t3(n3[r3], r3, n3))
              return true;
          return false;
        }
        function p(n3) {
          return n3.split("");
        }
        function _(n3) {
          return n3.match($t) || [];
        }
        function v(n3, t3, r3) {
          var e3;
          return r3(n3, function(n4, r4, u2) {
            if (t3(n4, r4, u2))
              return e3 = r4, false;
          }), e3;
        }
        function g(n3, t3, r3, e3) {
          for (var u2 = n3.length, i3 = r3 + (e3 ? 1 : -1); e3 ? i3-- : ++i3 < u2; )
            if (t3(n3[i3], i3, n3))
              return i3;
          return -1;
        }
        function y(n3, t3, r3) {
          return t3 === t3 ? Z(n3, t3, r3) : g(n3, b, r3);
        }
        function d(n3, t3, r3, e3) {
          for (var u2 = r3 - 1, i3 = n3.length; ++u2 < i3; )
            if (e3(n3[u2], t3))
              return u2;
          return -1;
        }
        function b(n3) {
          return n3 !== n3;
        }
        function w(n3, t3) {
          var r3 = n3 == null ? 0 : n3.length;
          return r3 ? k(n3, t3) / r3 : Cn;
        }
        function m(n3) {
          return function(t3) {
            return t3 == null ? X : t3[n3];
          };
        }
        function x(n3) {
          return function(t3) {
            return n3 == null ? X : n3[t3];
          };
        }
        function j(n3, t3, r3, e3, u2) {
          return u2(n3, function(n4, u3, i3) {
            r3 = e3 ? (e3 = false, n4) : t3(r3, n4, u3, i3);
          }), r3;
        }
        function A(n3, t3) {
          var r3 = n3.length;
          for (n3.sort(t3); r3--; )
            n3[r3] = n3[r3].value;
          return n3;
        }
        function k(n3, t3) {
          for (var r3, e3 = -1, u2 = n3.length; ++e3 < u2; ) {
            var i3 = t3(n3[e3]);
            i3 !== X && (r3 = r3 === X ? i3 : r3 + i3);
          }
          return r3;
        }
        function O(n3, t3) {
          for (var r3 = -1, e3 = Array(n3); ++r3 < n3; )
            e3[r3] = t3(r3);
          return e3;
        }
        function I(n3, t3) {
          return c(t3, function(t4) {
            return [t4, n3[t4]];
          });
        }
        function R(n3) {
          return n3 ? n3.slice(0, H(n3) + 1).replace(Lt, "") : n3;
        }
        function z(n3) {
          return function(t3) {
            return n3(t3);
          };
        }
        function E(n3, t3) {
          return c(t3, function(t4) {
            return n3[t4];
          });
        }
        function S(n3, t3) {
          return n3.has(t3);
        }
        function W(n3, t3) {
          for (var r3 = -1, e3 = n3.length; ++r3 < e3 && y(t3, n3[r3], 0) > -1; )
            ;
          return r3;
        }
        function L(n3, t3) {
          for (var r3 = n3.length; r3-- && y(t3, n3[r3], 0) > -1; )
            ;
          return r3;
        }
        function C(n3, t3) {
          for (var r3 = n3.length, e3 = 0; r3--; )
            n3[r3] === t3 && ++e3;
          return e3;
        }
        function U(n3) {
          return "\\" + Yr[n3];
        }
        function B(n3, t3) {
          return n3 == null ? X : n3[t3];
        }
        function T(n3) {
          return Nr.test(n3);
        }
        function $12(n3) {
          return Pr.test(n3);
        }
        function D(n3) {
          for (var t3, r3 = []; !(t3 = n3.next()).done; )
            r3.push(t3.value);
          return r3;
        }
        function M(n3) {
          var t3 = -1, r3 = Array(n3.size);
          return n3.forEach(function(n4, e3) {
            r3[++t3] = [e3, n4];
          }), r3;
        }
        function F(n3, t3) {
          return function(r3) {
            return n3(t3(r3));
          };
        }
        function N(n3, t3) {
          for (var r3 = -1, e3 = n3.length, u2 = 0, i3 = []; ++r3 < e3; ) {
            var o3 = n3[r3];
            o3 !== t3 && o3 !== cn || (n3[r3] = cn, i3[u2++] = r3);
          }
          return i3;
        }
        function P(n3) {
          var t3 = -1, r3 = Array(n3.size);
          return n3.forEach(function(n4) {
            r3[++t3] = n4;
          }), r3;
        }
        function q(n3) {
          var t3 = -1, r3 = Array(n3.size);
          return n3.forEach(function(n4) {
            r3[++t3] = [n4, n4];
          }), r3;
        }
        function Z(n3, t3, r3) {
          for (var e3 = r3 - 1, u2 = n3.length; ++e3 < u2; )
            if (n3[e3] === t3)
              return e3;
          return -1;
        }
        function K(n3, t3, r3) {
          for (var e3 = r3 + 1; e3--; )
            if (n3[e3] === t3)
              return e3;
          return e3;
        }
        function V(n3) {
          return T(n3) ? J(n3) : _e(n3);
        }
        function G(n3) {
          return T(n3) ? Y(n3) : p(n3);
        }
        function H(n3) {
          for (var t3 = n3.length; t3-- && Ct.test(n3.charAt(t3)); )
            ;
          return t3;
        }
        function J(n3) {
          for (var t3 = Mr.lastIndex = 0; Mr.test(n3); )
            ++t3;
          return t3;
        }
        function Y(n3) {
          return n3.match(Mr) || [];
        }
        function Q(n3) {
          return n3.match(Fr) || [];
        }
        var X, nn = "4.17.21", tn = 200, rn = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", en = "Expected a function", un = "Invalid `variable` option passed into `_.template`", on = "__lodash_hash_undefined__", fn = 500, cn = "__lodash_placeholder__", an = 1, ln = 2, sn = 4, hn = 1, pn = 2, _n = 1, vn = 2, gn = 4, yn = 8, dn = 16, bn = 32, wn = 64, mn = 128, xn = 256, jn = 512, An = 30, kn = "...", On = 800, In = 16, Rn = 1, zn = 2, En = 3, Sn = 1 / 0, Wn = 9007199254740991, Ln = 17976931348623157e292, Cn = NaN, Un = 4294967295, Bn = Un - 1, Tn = Un >>> 1, $n = [["ary", mn], ["bind", _n], ["bindKey", vn], ["curry", yn], ["curryRight", dn], ["flip", jn], ["partial", bn], ["partialRight", wn], ["rearg", xn]], Dn = "[object Arguments]", Mn = "[object Array]", Fn = "[object AsyncFunction]", Nn = "[object Boolean]", Pn = "[object Date]", qn = "[object DOMException]", Zn = "[object Error]", Kn = "[object Function]", Vn = "[object GeneratorFunction]", Gn = "[object Map]", Hn = "[object Number]", Jn = "[object Null]", Yn = "[object Object]", Qn = "[object Promise]", Xn = "[object Proxy]", nt = "[object RegExp]", tt = "[object Set]", rt = "[object String]", et = "[object Symbol]", ut = "[object Undefined]", it = "[object WeakMap]", ot = "[object WeakSet]", ft = "[object ArrayBuffer]", ct = "[object DataView]", at = "[object Float32Array]", lt = "[object Float64Array]", st = "[object Int8Array]", ht = "[object Int16Array]", pt = "[object Int32Array]", _t = "[object Uint8Array]", vt = "[object Uint8ClampedArray]", gt = "[object Uint16Array]", yt = "[object Uint32Array]", dt = /\b__p \+= '';/g, bt = /\b(__p \+=) '' \+/g, wt = /(__e\(.*?\)|\b__t\)) \+\n'';/g, mt = /&(?:amp|lt|gt|quot|#39);/g, xt = /[&<>"']/g, jt = RegExp(mt.source), At = RegExp(xt.source), kt = /<%-([\s\S]+?)%>/g, Ot = /<%([\s\S]+?)%>/g, It = /<%=([\s\S]+?)%>/g, Rt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, zt = /^\w*$/, Et = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, St = /[\\^$.*+?()[\]{}|]/g, Wt = RegExp(St.source), Lt = /^\s+/, Ct = /\s/, Ut = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Bt = /\{\n\/\* \[wrapped with (.+)\] \*/, Tt = /,? & /, $t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Dt = /[()=,{}\[\]\/\s]/, Mt = /\\(\\)?/g, Ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Nt = /\w*$/, Pt = /^[-+]0x[0-9a-f]+$/i, qt = /^0b[01]+$/i, Zt = /^\[object .+?Constructor\]$/, Kt = /^0o[0-7]+$/i, Vt = /^(?:0|[1-9]\d*)$/, Gt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ht = /($^)/, Jt = /['\n\r\u2028\u2029\\]/g, Yt = "\\ud800-\\udfff", Qt = "\\u0300-\\u036f", Xt = "\\ufe20-\\ufe2f", nr = "\\u20d0-\\u20ff", tr = Qt + Xt + nr, rr = "\\u2700-\\u27bf", er = "a-z\\xdf-\\xf6\\xf8-\\xff", ur = "\\xac\\xb1\\xd7\\xf7", ir = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", or = "\\u2000-\\u206f", fr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", cr = "A-Z\\xc0-\\xd6\\xd8-\\xde", ar = "\\ufe0e\\ufe0f", lr = ur + ir + or + fr, sr = "['\u2019]", hr = "[" + Yt + "]", pr = "[" + lr + "]", _r = "[" + tr + "]", vr = "\\d+", gr = "[" + rr + "]", yr = "[" + er + "]", dr = "[^" + Yt + lr + vr + rr + er + cr + "]", br = "\\ud83c[\\udffb-\\udfff]", wr = "(?:" + _r + "|" + br + ")", mr = "[^" + Yt + "]", xr = "(?:\\ud83c[\\udde6-\\uddff]){2}", jr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ar = "[" + cr + "]", kr = "\\u200d", Or = "(?:" + yr + "|" + dr + ")", Ir = "(?:" + Ar + "|" + dr + ")", Rr = "(?:" + sr + "(?:d|ll|m|re|s|t|ve))?", zr = "(?:" + sr + "(?:D|LL|M|RE|S|T|VE))?", Er = wr + "?", Sr = "[" + ar + "]?", Wr = "(?:" + kr + "(?:" + [mr, xr, jr].join("|") + ")" + Sr + Er + ")*", Lr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Cr = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ur = Sr + Er + Wr, Br = "(?:" + [gr, xr, jr].join("|") + ")" + Ur, Tr = "(?:" + [mr + _r + "?", _r, xr, jr, hr].join("|") + ")", $r = RegExp(sr, "g"), Dr = RegExp(_r, "g"), Mr = RegExp(br + "(?=" + br + ")|" + Tr + Ur, "g"), Fr = RegExp([Ar + "?" + yr + "+" + Rr + "(?=" + [pr, Ar, "$"].join("|") + ")", Ir + "+" + zr + "(?=" + [pr, Ar + Or, "$"].join("|") + ")", Ar + "?" + Or + "+" + Rr, Ar + "+" + zr, Cr, Lr, vr, Br].join("|"), "g"), Nr = RegExp("[" + kr + Yt + tr + ar + "]"), Pr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, qr = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Zr = -1, Kr = {};
        Kr[at] = Kr[lt] = Kr[st] = Kr[ht] = Kr[pt] = Kr[_t] = Kr[vt] = Kr[gt] = Kr[yt] = true, Kr[Dn] = Kr[Mn] = Kr[ft] = Kr[Nn] = Kr[ct] = Kr[Pn] = Kr[Zn] = Kr[Kn] = Kr[Gn] = Kr[Hn] = Kr[Yn] = Kr[nt] = Kr[tt] = Kr[rt] = Kr[it] = false;
        var Vr = {};
        Vr[Dn] = Vr[Mn] = Vr[ft] = Vr[ct] = Vr[Nn] = Vr[Pn] = Vr[at] = Vr[lt] = Vr[st] = Vr[ht] = Vr[pt] = Vr[Gn] = Vr[Hn] = Vr[Yn] = Vr[nt] = Vr[tt] = Vr[rt] = Vr[et] = Vr[_t] = Vr[vt] = Vr[gt] = Vr[yt] = true, Vr[Zn] = Vr[Kn] = Vr[it] = false;
        var Gr = {
          "\xC0": "A",
          "\xC1": "A",
          "\xC2": "A",
          "\xC3": "A",
          "\xC4": "A",
          "\xC5": "A",
          "\xE0": "a",
          "\xE1": "a",
          "\xE2": "a",
          "\xE3": "a",
          "\xE4": "a",
          "\xE5": "a",
          "\xC7": "C",
          "\xE7": "c",
          "\xD0": "D",
          "\xF0": "d",
          "\xC8": "E",
          "\xC9": "E",
          "\xCA": "E",
          "\xCB": "E",
          "\xE8": "e",
          "\xE9": "e",
          "\xEA": "e",
          "\xEB": "e",
          "\xCC": "I",
          "\xCD": "I",
          "\xCE": "I",
          "\xCF": "I",
          "\xEC": "i",
          "\xED": "i",
          "\xEE": "i",
          "\xEF": "i",
          "\xD1": "N",
          "\xF1": "n",
          "\xD2": "O",
          "\xD3": "O",
          "\xD4": "O",
          "\xD5": "O",
          "\xD6": "O",
          "\xD8": "O",
          "\xF2": "o",
          "\xF3": "o",
          "\xF4": "o",
          "\xF5": "o",
          "\xF6": "o",
          "\xF8": "o",
          "\xD9": "U",
          "\xDA": "U",
          "\xDB": "U",
          "\xDC": "U",
          "\xF9": "u",
          "\xFA": "u",
          "\xFB": "u",
          "\xFC": "u",
          "\xDD": "Y",
          "\xFD": "y",
          "\xFF": "y",
          "\xC6": "Ae",
          "\xE6": "ae",
          "\xDE": "Th",
          "\xFE": "th",
          "\xDF": "ss",
          "\u0100": "A",
          "\u0102": "A",
          "\u0104": "A",
          "\u0101": "a",
          "\u0103": "a",
          "\u0105": "a",
          "\u0106": "C",
          "\u0108": "C",
          "\u010A": "C",
          "\u010C": "C",
          "\u0107": "c",
          "\u0109": "c",
          "\u010B": "c",
          "\u010D": "c",
          "\u010E": "D",
          "\u0110": "D",
          "\u010F": "d",
          "\u0111": "d",
          "\u0112": "E",
          "\u0114": "E",
          "\u0116": "E",
          "\u0118": "E",
          "\u011A": "E",
          "\u0113": "e",
          "\u0115": "e",
          "\u0117": "e",
          "\u0119": "e",
          "\u011B": "e",
          "\u011C": "G",
          "\u011E": "G",
          "\u0120": "G",
          "\u0122": "G",
          "\u011D": "g",
          "\u011F": "g",
          "\u0121": "g",
          "\u0123": "g",
          "\u0124": "H",
          "\u0126": "H",
          "\u0125": "h",
          "\u0127": "h",
          "\u0128": "I",
          "\u012A": "I",
          "\u012C": "I",
          "\u012E": "I",
          "\u0130": "I",
          "\u0129": "i",
          "\u012B": "i",
          "\u012D": "i",
          "\u012F": "i",
          "\u0131": "i",
          "\u0134": "J",
          "\u0135": "j",
          "\u0136": "K",
          "\u0137": "k",
          "\u0138": "k",
          "\u0139": "L",
          "\u013B": "L",
          "\u013D": "L",
          "\u013F": "L",
          "\u0141": "L",
          "\u013A": "l",
          "\u013C": "l",
          "\u013E": "l",
          "\u0140": "l",
          "\u0142": "l",
          "\u0143": "N",
          "\u0145": "N",
          "\u0147": "N",
          "\u014A": "N",
          "\u0144": "n",
          "\u0146": "n",
          "\u0148": "n",
          "\u014B": "n",
          "\u014C": "O",
          "\u014E": "O",
          "\u0150": "O",
          "\u014D": "o",
          "\u014F": "o",
          "\u0151": "o",
          "\u0154": "R",
          "\u0156": "R",
          "\u0158": "R",
          "\u0155": "r",
          "\u0157": "r",
          "\u0159": "r",
          "\u015A": "S",
          "\u015C": "S",
          "\u015E": "S",
          "\u0160": "S",
          "\u015B": "s",
          "\u015D": "s",
          "\u015F": "s",
          "\u0161": "s",
          "\u0162": "T",
          "\u0164": "T",
          "\u0166": "T",
          "\u0163": "t",
          "\u0165": "t",
          "\u0167": "t",
          "\u0168": "U",
          "\u016A": "U",
          "\u016C": "U",
          "\u016E": "U",
          "\u0170": "U",
          "\u0172": "U",
          "\u0169": "u",
          "\u016B": "u",
          "\u016D": "u",
          "\u016F": "u",
          "\u0171": "u",
          "\u0173": "u",
          "\u0174": "W",
          "\u0175": "w",
          "\u0176": "Y",
          "\u0177": "y",
          "\u0178": "Y",
          "\u0179": "Z",
          "\u017B": "Z",
          "\u017D": "Z",
          "\u017A": "z",
          "\u017C": "z",
          "\u017E": "z",
          "\u0132": "IJ",
          "\u0133": "ij",
          "\u0152": "Oe",
          "\u0153": "oe",
          "\u0149": "'n",
          "\u017F": "s"
        }, Hr = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Jr = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, Yr = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, Qr = parseFloat, Xr = parseInt, ne = typeof global == "object" && global && global.Object === Object && global, te = typeof self == "object" && self && self.Object === Object && self, re = ne || te || Function("return this")(), ee = typeof exports == "object" && exports && !exports.nodeType && exports, ue = ee && typeof module == "object" && module && !module.nodeType && module, ie = ue && ue.exports === ee, oe = ie && ne.process, fe = function() {
          try {
            var n3 = ue && ue.require && ue.require("util").types;
            return n3 ? n3 : oe && oe.binding && oe.binding("util");
          } catch (n4) {
          }
        }(), ce = fe && fe.isArrayBuffer, ae = fe && fe.isDate, le = fe && fe.isMap, se = fe && fe.isRegExp, he = fe && fe.isSet, pe = fe && fe.isTypedArray, _e = m("length"), ve = x(Gr), ge = x(Hr), ye = x(Jr), de = function p2(x2) {
          function Z2(n3) {
            if (cc(n3) && !bh(n3) && !(n3 instanceof Ct2)) {
              if (n3 instanceof Y2)
                return n3;
              if (bl.call(n3, "__wrapped__"))
                return eo(n3);
            }
            return new Y2(n3);
          }
          function J2() {
          }
          function Y2(n3, t3) {
            this.__wrapped__ = n3, this.__actions__ = [], this.__chain__ = !!t3, this.__index__ = 0, this.__values__ = X;
          }
          function Ct2(n3) {
            this.__wrapped__ = n3, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Un, this.__views__ = [];
          }
          function $t2() {
            var n3 = new Ct2(this.__wrapped__);
            return n3.__actions__ = Tu(this.__actions__), n3.__dir__ = this.__dir__, n3.__filtered__ = this.__filtered__, n3.__iteratees__ = Tu(this.__iteratees__), n3.__takeCount__ = this.__takeCount__, n3.__views__ = Tu(this.__views__), n3;
          }
          function Yt2() {
            if (this.__filtered__) {
              var n3 = new Ct2(this);
              n3.__dir__ = -1, n3.__filtered__ = true;
            } else
              n3 = this.clone(), n3.__dir__ *= -1;
            return n3;
          }
          function Qt2() {
            var n3 = this.__wrapped__.value(), t3 = this.__dir__, r3 = bh(n3), e3 = t3 < 0, u2 = r3 ? n3.length : 0, i3 = Oi(0, u2, this.__views__), o3 = i3.start, f2 = i3.end, c2 = f2 - o3, a3 = e3 ? f2 : o3 - 1, l2 = this.__iteratees__, s3 = l2.length, h2 = 0, p3 = Hl(c2, this.__takeCount__);
            if (!r3 || !e3 && u2 == c2 && p3 == c2)
              return wu(n3, this.__actions__);
            var _2 = [];
            n:
              for (; c2-- && h2 < p3; ) {
                a3 += t3;
                for (var v2 = -1, g2 = n3[a3]; ++v2 < s3; ) {
                  var y2 = l2[v2], d2 = y2.iteratee, b2 = y2.type, w2 = d2(g2);
                  if (b2 == zn)
                    g2 = w2;
                  else if (!w2) {
                    if (b2 == Rn)
                      continue n;
                    break n;
                  }
                }
                _2[h2++] = g2;
              }
            return _2;
          }
          function Xt2(n3) {
            var t3 = -1, r3 = n3 == null ? 0 : n3.length;
            for (this.clear(); ++t3 < r3; ) {
              var e3 = n3[t3];
              this.set(e3[0], e3[1]);
            }
          }
          function nr2() {
            this.__data__ = is ? is(null) : {}, this.size = 0;
          }
          function tr2(n3) {
            var t3 = this.has(n3) && delete this.__data__[n3];
            return this.size -= t3 ? 1 : 0, t3;
          }
          function rr2(n3) {
            var t3 = this.__data__;
            if (is) {
              var r3 = t3[n3];
              return r3 === on ? X : r3;
            }
            return bl.call(t3, n3) ? t3[n3] : X;
          }
          function er2(n3) {
            var t3 = this.__data__;
            return is ? t3[n3] !== X : bl.call(t3, n3);
          }
          function ur2(n3, t3) {
            var r3 = this.__data__;
            return this.size += this.has(n3) ? 0 : 1, r3[n3] = is && t3 === X ? on : t3, this;
          }
          function ir2(n3) {
            var t3 = -1, r3 = n3 == null ? 0 : n3.length;
            for (this.clear(); ++t3 < r3; ) {
              var e3 = n3[t3];
              this.set(e3[0], e3[1]);
            }
          }
          function or2() {
            this.__data__ = [], this.size = 0;
          }
          function fr2(n3) {
            var t3 = this.__data__, r3 = Wr2(t3, n3);
            return !(r3 < 0) && (r3 == t3.length - 1 ? t3.pop() : Ll.call(t3, r3, 1), --this.size, true);
          }
          function cr2(n3) {
            var t3 = this.__data__, r3 = Wr2(t3, n3);
            return r3 < 0 ? X : t3[r3][1];
          }
          function ar2(n3) {
            return Wr2(this.__data__, n3) > -1;
          }
          function lr2(n3, t3) {
            var r3 = this.__data__, e3 = Wr2(r3, n3);
            return e3 < 0 ? (++this.size, r3.push([n3, t3])) : r3[e3][1] = t3, this;
          }
          function sr2(n3) {
            var t3 = -1, r3 = n3 == null ? 0 : n3.length;
            for (this.clear(); ++t3 < r3; ) {
              var e3 = n3[t3];
              this.set(e3[0], e3[1]);
            }
          }
          function hr2() {
            this.size = 0, this.__data__ = { hash: new Xt2(), map: new (ts || ir2)(), string: new Xt2() };
          }
          function pr2(n3) {
            var t3 = xi(this, n3).delete(n3);
            return this.size -= t3 ? 1 : 0, t3;
          }
          function _r2(n3) {
            return xi(this, n3).get(n3);
          }
          function vr2(n3) {
            return xi(this, n3).has(n3);
          }
          function gr2(n3, t3) {
            var r3 = xi(this, n3), e3 = r3.size;
            return r3.set(n3, t3), this.size += r3.size == e3 ? 0 : 1, this;
          }
          function yr2(n3) {
            var t3 = -1, r3 = n3 == null ? 0 : n3.length;
            for (this.__data__ = new sr2(); ++t3 < r3; )
              this.add(n3[t3]);
          }
          function dr2(n3) {
            return this.__data__.set(n3, on), this;
          }
          function br2(n3) {
            return this.__data__.has(n3);
          }
          function wr2(n3) {
            this.size = (this.__data__ = new ir2(n3)).size;
          }
          function mr2() {
            this.__data__ = new ir2(), this.size = 0;
          }
          function xr2(n3) {
            var t3 = this.__data__, r3 = t3.delete(n3);
            return this.size = t3.size, r3;
          }
          function jr2(n3) {
            return this.__data__.get(n3);
          }
          function Ar2(n3) {
            return this.__data__.has(n3);
          }
          function kr2(n3, t3) {
            var r3 = this.__data__;
            if (r3 instanceof ir2) {
              var e3 = r3.__data__;
              if (!ts || e3.length < tn - 1)
                return e3.push([n3, t3]), this.size = ++r3.size, this;
              r3 = this.__data__ = new sr2(e3);
            }
            return r3.set(n3, t3), this.size = r3.size, this;
          }
          function Or2(n3, t3) {
            var r3 = bh(n3), e3 = !r3 && dh(n3), u2 = !r3 && !e3 && mh(n3), i3 = !r3 && !e3 && !u2 && Oh(n3), o3 = r3 || e3 || u2 || i3, f2 = o3 ? O(n3.length, hl) : [], c2 = f2.length;
            for (var a3 in n3)
              !t3 && !bl.call(n3, a3) || o3 && (a3 == "length" || u2 && (a3 == "offset" || a3 == "parent") || i3 && (a3 == "buffer" || a3 == "byteLength" || a3 == "byteOffset") || Ci(a3, c2)) || f2.push(a3);
            return f2;
          }
          function Ir2(n3) {
            var t3 = n3.length;
            return t3 ? n3[tu(0, t3 - 1)] : X;
          }
          function Rr2(n3, t3) {
            return Xi(Tu(n3), Mr2(t3, 0, n3.length));
          }
          function zr2(n3) {
            return Xi(Tu(n3));
          }
          function Er2(n3, t3, r3) {
            (r3 === X || Gf(n3[t3], r3)) && (r3 !== X || t3 in n3) || Br2(n3, t3, r3);
          }
          function Sr2(n3, t3, r3) {
            var e3 = n3[t3];
            bl.call(n3, t3) && Gf(e3, r3) && (r3 !== X || t3 in n3) || Br2(n3, t3, r3);
          }
          function Wr2(n3, t3) {
            for (var r3 = n3.length; r3--; )
              if (Gf(n3[r3][0], t3))
                return r3;
            return -1;
          }
          function Lr2(n3, t3, r3, e3) {
            return ys(n3, function(n4, u2, i3) {
              t3(e3, n4, r3(n4), i3);
            }), e3;
          }
          function Cr2(n3, t3) {
            return n3 && $u(t3, Pc(t3), n3);
          }
          function Ur2(n3, t3) {
            return n3 && $u(t3, qc(t3), n3);
          }
          function Br2(n3, t3, r3) {
            t3 == "__proto__" && Tl ? Tl(n3, t3, { configurable: true, enumerable: true, value: r3, writable: true }) : n3[t3] = r3;
          }
          function Tr2(n3, t3) {
            for (var r3 = -1, e3 = t3.length, u2 = il(e3), i3 = n3 == null; ++r3 < e3; )
              u2[r3] = i3 ? X : Mc(n3, t3[r3]);
            return u2;
          }
          function Mr2(n3, t3, r3) {
            return n3 === n3 && (r3 !== X && (n3 = n3 <= r3 ? n3 : r3), t3 !== X && (n3 = n3 >= t3 ? n3 : t3)), n3;
          }
          function Fr2(n3, t3, e3, u2, i3, o3) {
            var f2, c2 = t3 & an, a3 = t3 & ln, l2 = t3 & sn;
            if (e3 && (f2 = i3 ? e3(n3, u2, i3, o3) : e3(n3)), f2 !== X)
              return f2;
            if (!fc(n3))
              return n3;
            var s3 = bh(n3);
            if (s3) {
              if (f2 = zi(n3), !c2)
                return Tu(n3, f2);
            } else {
              var h2 = zs(n3), p3 = h2 == Kn || h2 == Vn;
              if (mh(n3))
                return Iu(n3, c2);
              if (h2 == Yn || h2 == Dn || p3 && !i3) {
                if (f2 = a3 || p3 ? {} : Ei(n3), !c2)
                  return a3 ? Mu(n3, Ur2(f2, n3)) : Du(n3, Cr2(f2, n3));
              } else {
                if (!Vr[h2])
                  return i3 ? n3 : {};
                f2 = Si(n3, h2, c2);
              }
            }
            o3 || (o3 = new wr2());
            var _2 = o3.get(n3);
            if (_2)
              return _2;
            o3.set(n3, f2), kh(n3) ? n3.forEach(function(r3) {
              f2.add(Fr2(r3, t3, e3, r3, n3, o3));
            }) : jh(n3) && n3.forEach(function(r3, u3) {
              f2.set(u3, Fr2(r3, t3, e3, u3, n3, o3));
            });
            var v2 = l2 ? a3 ? di : yi : a3 ? qc : Pc, g2 = s3 ? X : v2(n3);
            return r2(g2 || n3, function(r3, u3) {
              g2 && (u3 = r3, r3 = n3[u3]), Sr2(f2, u3, Fr2(r3, t3, e3, u3, n3, o3));
            }), f2;
          }
          function Nr2(n3) {
            var t3 = Pc(n3);
            return function(r3) {
              return Pr2(r3, n3, t3);
            };
          }
          function Pr2(n3, t3, r3) {
            var e3 = r3.length;
            if (n3 == null)
              return !e3;
            for (n3 = ll(n3); e3--; ) {
              var u2 = r3[e3], i3 = t3[u2], o3 = n3[u2];
              if (o3 === X && !(u2 in n3) || !i3(o3))
                return false;
            }
            return true;
          }
          function Gr2(n3, t3, r3) {
            if (typeof n3 != "function")
              throw new pl(en);
            return Ws(function() {
              n3.apply(X, r3);
            }, t3);
          }
          function Hr2(n3, t3, r3, e3) {
            var u2 = -1, i3 = o2, a3 = true, l2 = n3.length, s3 = [], h2 = t3.length;
            if (!l2)
              return s3;
            r3 && (t3 = c(t3, z(r3))), e3 ? (i3 = f, a3 = false) : t3.length >= tn && (i3 = S, a3 = false, t3 = new yr2(t3));
            n:
              for (; ++u2 < l2; ) {
                var p3 = n3[u2], _2 = r3 == null ? p3 : r3(p3);
                if (p3 = e3 || p3 !== 0 ? p3 : 0, a3 && _2 === _2) {
                  for (var v2 = h2; v2--; )
                    if (t3[v2] === _2)
                      continue n;
                  s3.push(p3);
                } else
                  i3(t3, _2, e3) || s3.push(p3);
              }
            return s3;
          }
          function Jr2(n3, t3) {
            var r3 = true;
            return ys(n3, function(n4, e3, u2) {
              return r3 = !!t3(n4, e3, u2);
            }), r3;
          }
          function Yr2(n3, t3, r3) {
            for (var e3 = -1, u2 = n3.length; ++e3 < u2; ) {
              var i3 = n3[e3], o3 = t3(i3);
              if (o3 != null && (f2 === X ? o3 === o3 && !bc(o3) : r3(o3, f2)))
                var f2 = o3, c2 = i3;
            }
            return c2;
          }
          function ne2(n3, t3, r3, e3) {
            var u2 = n3.length;
            for (r3 = kc(r3), r3 < 0 && (r3 = -r3 > u2 ? 0 : u2 + r3), e3 = e3 === X || e3 > u2 ? u2 : kc(e3), e3 < 0 && (e3 += u2), e3 = r3 > e3 ? 0 : Oc(e3); r3 < e3; )
              n3[r3++] = t3;
            return n3;
          }
          function te2(n3, t3) {
            var r3 = [];
            return ys(n3, function(n4, e3, u2) {
              t3(n4, e3, u2) && r3.push(n4);
            }), r3;
          }
          function ee2(n3, t3, r3, e3, u2) {
            var i3 = -1, o3 = n3.length;
            for (r3 || (r3 = Li), u2 || (u2 = []); ++i3 < o3; ) {
              var f2 = n3[i3];
              t3 > 0 && r3(f2) ? t3 > 1 ? ee2(f2, t3 - 1, r3, e3, u2) : a2(u2, f2) : e3 || (u2[u2.length] = f2);
            }
            return u2;
          }
          function ue2(n3, t3) {
            return n3 && bs(n3, t3, Pc);
          }
          function oe2(n3, t3) {
            return n3 && ws(n3, t3, Pc);
          }
          function fe2(n3, t3) {
            return i2(t3, function(t4) {
              return uc(n3[t4]);
            });
          }
          function _e2(n3, t3) {
            t3 = ku(t3, n3);
            for (var r3 = 0, e3 = t3.length; n3 != null && r3 < e3; )
              n3 = n3[no(t3[r3++])];
            return r3 && r3 == e3 ? n3 : X;
          }
          function de2(n3, t3, r3) {
            var e3 = t3(n3);
            return bh(n3) ? e3 : a2(e3, r3(n3));
          }
          function we(n3) {
            return n3 == null ? n3 === X ? ut : Jn : Bl && Bl in ll(n3) ? ki(n3) : Ki(n3);
          }
          function me(n3, t3) {
            return n3 > t3;
          }
          function xe(n3, t3) {
            return n3 != null && bl.call(n3, t3);
          }
          function je(n3, t3) {
            return n3 != null && t3 in ll(n3);
          }
          function Ae(n3, t3, r3) {
            return n3 >= Hl(t3, r3) && n3 < Gl(t3, r3);
          }
          function ke(n3, t3, r3) {
            for (var e3 = r3 ? f : o2, u2 = n3[0].length, i3 = n3.length, a3 = i3, l2 = il(i3), s3 = 1 / 0, h2 = []; a3--; ) {
              var p3 = n3[a3];
              a3 && t3 && (p3 = c(p3, z(t3))), s3 = Hl(p3.length, s3), l2[a3] = !r3 && (t3 || u2 >= 120 && p3.length >= 120) ? new yr2(a3 && p3) : X;
            }
            p3 = n3[0];
            var _2 = -1, v2 = l2[0];
            n:
              for (; ++_2 < u2 && h2.length < s3; ) {
                var g2 = p3[_2], y2 = t3 ? t3(g2) : g2;
                if (g2 = r3 || g2 !== 0 ? g2 : 0, !(v2 ? S(v2, y2) : e3(h2, y2, r3))) {
                  for (a3 = i3; --a3; ) {
                    var d2 = l2[a3];
                    if (!(d2 ? S(d2, y2) : e3(n3[a3], y2, r3)))
                      continue n;
                  }
                  v2 && v2.push(y2), h2.push(g2);
                }
              }
            return h2;
          }
          function Oe(n3, t3, r3, e3) {
            return ue2(n3, function(n4, u2, i3) {
              t3(e3, r3(n4), u2, i3);
            }), e3;
          }
          function Ie(t3, r3, e3) {
            r3 = ku(r3, t3), t3 = Gi(t3, r3);
            var u2 = t3 == null ? t3 : t3[no(jo(r3))];
            return u2 == null ? X : n2(u2, t3, e3);
          }
          function Re(n3) {
            return cc(n3) && we(n3) == Dn;
          }
          function ze(n3) {
            return cc(n3) && we(n3) == ft;
          }
          function Ee(n3) {
            return cc(n3) && we(n3) == Pn;
          }
          function Se(n3, t3, r3, e3, u2) {
            return n3 === t3 || (n3 == null || t3 == null || !cc(n3) && !cc(t3) ? n3 !== n3 && t3 !== t3 : We(n3, t3, r3, e3, Se, u2));
          }
          function We(n3, t3, r3, e3, u2, i3) {
            var o3 = bh(n3), f2 = bh(t3), c2 = o3 ? Mn : zs(n3), a3 = f2 ? Mn : zs(t3);
            c2 = c2 == Dn ? Yn : c2, a3 = a3 == Dn ? Yn : a3;
            var l2 = c2 == Yn, s3 = a3 == Yn, h2 = c2 == a3;
            if (h2 && mh(n3)) {
              if (!mh(t3))
                return false;
              o3 = true, l2 = false;
            }
            if (h2 && !l2)
              return i3 || (i3 = new wr2()), o3 || Oh(n3) ? pi(n3, t3, r3, e3, u2, i3) : _i(n3, t3, c2, r3, e3, u2, i3);
            if (!(r3 & hn)) {
              var p3 = l2 && bl.call(n3, "__wrapped__"), _2 = s3 && bl.call(t3, "__wrapped__");
              if (p3 || _2) {
                var v2 = p3 ? n3.value() : n3, g2 = _2 ? t3.value() : t3;
                return i3 || (i3 = new wr2()), u2(v2, g2, r3, e3, i3);
              }
            }
            return !!h2 && (i3 || (i3 = new wr2()), vi(n3, t3, r3, e3, u2, i3));
          }
          function Le(n3) {
            return cc(n3) && zs(n3) == Gn;
          }
          function Ce(n3, t3, r3, e3) {
            var u2 = r3.length, i3 = u2, o3 = !e3;
            if (n3 == null)
              return !i3;
            for (n3 = ll(n3); u2--; ) {
              var f2 = r3[u2];
              if (o3 && f2[2] ? f2[1] !== n3[f2[0]] : !(f2[0] in n3))
                return false;
            }
            for (; ++u2 < i3; ) {
              f2 = r3[u2];
              var c2 = f2[0], a3 = n3[c2], l2 = f2[1];
              if (o3 && f2[2]) {
                if (a3 === X && !(c2 in n3))
                  return false;
              } else {
                var s3 = new wr2();
                if (e3)
                  var h2 = e3(a3, l2, c2, n3, t3, s3);
                if (!(h2 === X ? Se(l2, a3, hn | pn, e3, s3) : h2))
                  return false;
              }
            }
            return true;
          }
          function Ue(n3) {
            return !(!fc(n3) || Di(n3)) && (uc(n3) ? kl : Zt).test(to(n3));
          }
          function Be(n3) {
            return cc(n3) && we(n3) == nt;
          }
          function Te(n3) {
            return cc(n3) && zs(n3) == tt;
          }
          function $e(n3) {
            return cc(n3) && oc(n3.length) && !!Kr[we(n3)];
          }
          function De(n3) {
            return typeof n3 == "function" ? n3 : n3 == null ? La : typeof n3 == "object" ? bh(n3) ? Ze(n3[0], n3[1]) : qe(n3) : Fa(n3);
          }
          function Me(n3) {
            if (!Mi(n3))
              return Vl(n3);
            var t3 = [];
            for (var r3 in ll(n3))
              bl.call(n3, r3) && r3 != "constructor" && t3.push(r3);
            return t3;
          }
          function Fe(n3) {
            if (!fc(n3))
              return Zi(n3);
            var t3 = Mi(n3), r3 = [];
            for (var e3 in n3)
              (e3 != "constructor" || !t3 && bl.call(n3, e3)) && r3.push(e3);
            return r3;
          }
          function Ne(n3, t3) {
            return n3 < t3;
          }
          function Pe(n3, t3) {
            var r3 = -1, e3 = Hf(n3) ? il(n3.length) : [];
            return ys(n3, function(n4, u2, i3) {
              e3[++r3] = t3(n4, u2, i3);
            }), e3;
          }
          function qe(n3) {
            var t3 = ji(n3);
            return t3.length == 1 && t3[0][2] ? Ni(t3[0][0], t3[0][1]) : function(r3) {
              return r3 === n3 || Ce(r3, n3, t3);
            };
          }
          function Ze(n3, t3) {
            return Bi(n3) && Fi(t3) ? Ni(no(n3), t3) : function(r3) {
              var e3 = Mc(r3, n3);
              return e3 === X && e3 === t3 ? Nc(r3, n3) : Se(t3, e3, hn | pn);
            };
          }
          function Ke(n3, t3, r3, e3, u2) {
            n3 !== t3 && bs(t3, function(i3, o3) {
              if (u2 || (u2 = new wr2()), fc(i3))
                Ve(n3, t3, o3, r3, Ke, e3, u2);
              else {
                var f2 = e3 ? e3(Ji(n3, o3), i3, o3 + "", n3, t3, u2) : X;
                f2 === X && (f2 = i3), Er2(n3, o3, f2);
              }
            }, qc);
          }
          function Ve(n3, t3, r3, e3, u2, i3, o3) {
            var f2 = Ji(n3, r3), c2 = Ji(t3, r3), a3 = o3.get(c2);
            if (a3)
              return Er2(n3, r3, a3), X;
            var l2 = i3 ? i3(f2, c2, r3 + "", n3, t3, o3) : X, s3 = l2 === X;
            if (s3) {
              var h2 = bh(c2), p3 = !h2 && mh(c2), _2 = !h2 && !p3 && Oh(c2);
              l2 = c2, h2 || p3 || _2 ? bh(f2) ? l2 = f2 : Jf(f2) ? l2 = Tu(f2) : p3 ? (s3 = false, l2 = Iu(c2, true)) : _2 ? (s3 = false, l2 = Wu(c2, true)) : l2 = [] : gc(c2) || dh(c2) ? (l2 = f2, dh(f2) ? l2 = Rc(f2) : fc(f2) && !uc(f2) || (l2 = Ei(c2))) : s3 = false;
            }
            s3 && (o3.set(c2, l2), u2(l2, c2, e3, i3, o3), o3.delete(c2)), Er2(n3, r3, l2);
          }
          function Ge(n3, t3) {
            var r3 = n3.length;
            if (r3)
              return t3 += t3 < 0 ? r3 : 0, Ci(t3, r3) ? n3[t3] : X;
          }
          function He(n3, t3, r3) {
            t3 = t3.length ? c(t3, function(n4) {
              return bh(n4) ? function(t4) {
                return _e2(t4, n4.length === 1 ? n4[0] : n4);
              } : n4;
            }) : [La];
            var e3 = -1;
            return t3 = c(t3, z(mi())), A(Pe(n3, function(n4, r4, u2) {
              return { criteria: c(t3, function(t4) {
                return t4(n4);
              }), index: ++e3, value: n4 };
            }), function(n4, t4) {
              return Cu(n4, t4, r3);
            });
          }
          function Je(n3, t3) {
            return Ye(n3, t3, function(t4, r3) {
              return Nc(n3, r3);
            });
          }
          function Ye(n3, t3, r3) {
            for (var e3 = -1, u2 = t3.length, i3 = {}; ++e3 < u2; ) {
              var o3 = t3[e3], f2 = _e2(n3, o3);
              r3(f2, o3) && fu(i3, ku(o3, n3), f2);
            }
            return i3;
          }
          function Qe(n3) {
            return function(t3) {
              return _e2(t3, n3);
            };
          }
          function Xe(n3, t3, r3, e3) {
            var u2 = e3 ? d : y, i3 = -1, o3 = t3.length, f2 = n3;
            for (n3 === t3 && (t3 = Tu(t3)), r3 && (f2 = c(n3, z(r3))); ++i3 < o3; )
              for (var a3 = 0, l2 = t3[i3], s3 = r3 ? r3(l2) : l2; (a3 = u2(f2, s3, a3, e3)) > -1; )
                f2 !== n3 && Ll.call(f2, a3, 1), Ll.call(n3, a3, 1);
            return n3;
          }
          function nu(n3, t3) {
            for (var r3 = n3 ? t3.length : 0, e3 = r3 - 1; r3--; ) {
              var u2 = t3[r3];
              if (r3 == e3 || u2 !== i3) {
                var i3 = u2;
                Ci(u2) ? Ll.call(n3, u2, 1) : yu(n3, u2);
              }
            }
            return n3;
          }
          function tu(n3, t3) {
            return n3 + Nl(Ql() * (t3 - n3 + 1));
          }
          function ru(n3, t3, r3, e3) {
            for (var u2 = -1, i3 = Gl(Fl((t3 - n3) / (r3 || 1)), 0), o3 = il(i3); i3--; )
              o3[e3 ? i3 : ++u2] = n3, n3 += r3;
            return o3;
          }
          function eu(n3, t3) {
            var r3 = "";
            if (!n3 || t3 < 1 || t3 > Wn)
              return r3;
            do
              t3 % 2 && (r3 += n3), t3 = Nl(t3 / 2), t3 && (n3 += n3);
            while (t3);
            return r3;
          }
          function uu(n3, t3) {
            return Ls(Vi(n3, t3, La), n3 + "");
          }
          function iu(n3) {
            return Ir2(ra(n3));
          }
          function ou(n3, t3) {
            var r3 = ra(n3);
            return Xi(r3, Mr2(t3, 0, r3.length));
          }
          function fu(n3, t3, r3, e3) {
            if (!fc(n3))
              return n3;
            t3 = ku(t3, n3);
            for (var u2 = -1, i3 = t3.length, o3 = i3 - 1, f2 = n3; f2 != null && ++u2 < i3; ) {
              var c2 = no(t3[u2]), a3 = r3;
              if (c2 === "__proto__" || c2 === "constructor" || c2 === "prototype")
                return n3;
              if (u2 != o3) {
                var l2 = f2[c2];
                a3 = e3 ? e3(l2, c2, f2) : X, a3 === X && (a3 = fc(l2) ? l2 : Ci(t3[u2 + 1]) ? [] : {});
              }
              Sr2(f2, c2, a3), f2 = f2[c2];
            }
            return n3;
          }
          function cu(n3) {
            return Xi(ra(n3));
          }
          function au(n3, t3, r3) {
            var e3 = -1, u2 = n3.length;
            t3 < 0 && (t3 = -t3 > u2 ? 0 : u2 + t3), r3 = r3 > u2 ? u2 : r3, r3 < 0 && (r3 += u2), u2 = t3 > r3 ? 0 : r3 - t3 >>> 0, t3 >>>= 0;
            for (var i3 = il(u2); ++e3 < u2; )
              i3[e3] = n3[e3 + t3];
            return i3;
          }
          function lu(n3, t3) {
            var r3;
            return ys(n3, function(n4, e3, u2) {
              return r3 = t3(n4, e3, u2), !r3;
            }), !!r3;
          }
          function su(n3, t3, r3) {
            var e3 = 0, u2 = n3 == null ? e3 : n3.length;
            if (typeof t3 == "number" && t3 === t3 && u2 <= Tn) {
              for (; e3 < u2; ) {
                var i3 = e3 + u2 >>> 1, o3 = n3[i3];
                o3 !== null && !bc(o3) && (r3 ? o3 <= t3 : o3 < t3) ? e3 = i3 + 1 : u2 = i3;
              }
              return u2;
            }
            return hu(n3, t3, La, r3);
          }
          function hu(n3, t3, r3, e3) {
            var u2 = 0, i3 = n3 == null ? 0 : n3.length;
            if (i3 === 0)
              return 0;
            t3 = r3(t3);
            for (var o3 = t3 !== t3, f2 = t3 === null, c2 = bc(t3), a3 = t3 === X; u2 < i3; ) {
              var l2 = Nl((u2 + i3) / 2), s3 = r3(n3[l2]), h2 = s3 !== X, p3 = s3 === null, _2 = s3 === s3, v2 = bc(s3);
              if (o3)
                var g2 = e3 || _2;
              else
                g2 = a3 ? _2 && (e3 || h2) : f2 ? _2 && h2 && (e3 || !p3) : c2 ? _2 && h2 && !p3 && (e3 || !v2) : !p3 && !v2 && (e3 ? s3 <= t3 : s3 < t3);
              g2 ? u2 = l2 + 1 : i3 = l2;
            }
            return Hl(i3, Bn);
          }
          function pu(n3, t3) {
            for (var r3 = -1, e3 = n3.length, u2 = 0, i3 = []; ++r3 < e3; ) {
              var o3 = n3[r3], f2 = t3 ? t3(o3) : o3;
              if (!r3 || !Gf(f2, c2)) {
                var c2 = f2;
                i3[u2++] = o3 === 0 ? 0 : o3;
              }
            }
            return i3;
          }
          function _u(n3) {
            return typeof n3 == "number" ? n3 : bc(n3) ? Cn : +n3;
          }
          function vu(n3) {
            if (typeof n3 == "string")
              return n3;
            if (bh(n3))
              return c(n3, vu) + "";
            if (bc(n3))
              return vs ? vs.call(n3) : "";
            var t3 = n3 + "";
            return t3 == "0" && 1 / n3 == -Sn ? "-0" : t3;
          }
          function gu(n3, t3, r3) {
            var e3 = -1, u2 = o2, i3 = n3.length, c2 = true, a3 = [], l2 = a3;
            if (r3)
              c2 = false, u2 = f;
            else if (i3 >= tn) {
              var s3 = t3 ? null : ks(n3);
              if (s3)
                return P(s3);
              c2 = false, u2 = S, l2 = new yr2();
            } else
              l2 = t3 ? [] : a3;
            n:
              for (; ++e3 < i3; ) {
                var h2 = n3[e3], p3 = t3 ? t3(h2) : h2;
                if (h2 = r3 || h2 !== 0 ? h2 : 0, c2 && p3 === p3) {
                  for (var _2 = l2.length; _2--; )
                    if (l2[_2] === p3)
                      continue n;
                  t3 && l2.push(p3), a3.push(h2);
                } else
                  u2(l2, p3, r3) || (l2 !== a3 && l2.push(p3), a3.push(h2));
              }
            return a3;
          }
          function yu(n3, t3) {
            return t3 = ku(t3, n3), n3 = Gi(n3, t3), n3 == null || delete n3[no(jo(t3))];
          }
          function du(n3, t3, r3, e3) {
            return fu(n3, t3, r3(_e2(n3, t3)), e3);
          }
          function bu(n3, t3, r3, e3) {
            for (var u2 = n3.length, i3 = e3 ? u2 : -1; (e3 ? i3-- : ++i3 < u2) && t3(n3[i3], i3, n3); )
              ;
            return r3 ? au(n3, e3 ? 0 : i3, e3 ? i3 + 1 : u2) : au(n3, e3 ? i3 + 1 : 0, e3 ? u2 : i3);
          }
          function wu(n3, t3) {
            var r3 = n3;
            return r3 instanceof Ct2 && (r3 = r3.value()), l(t3, function(n4, t4) {
              return t4.func.apply(t4.thisArg, a2([n4], t4.args));
            }, r3);
          }
          function mu(n3, t3, r3) {
            var e3 = n3.length;
            if (e3 < 2)
              return e3 ? gu(n3[0]) : [];
            for (var u2 = -1, i3 = il(e3); ++u2 < e3; )
              for (var o3 = n3[u2], f2 = -1; ++f2 < e3; )
                f2 != u2 && (i3[u2] = Hr2(i3[u2] || o3, n3[f2], t3, r3));
            return gu(ee2(i3, 1), t3, r3);
          }
          function xu(n3, t3, r3) {
            for (var e3 = -1, u2 = n3.length, i3 = t3.length, o3 = {}; ++e3 < u2; ) {
              r3(o3, n3[e3], e3 < i3 ? t3[e3] : X);
            }
            return o3;
          }
          function ju(n3) {
            return Jf(n3) ? n3 : [];
          }
          function Au(n3) {
            return typeof n3 == "function" ? n3 : La;
          }
          function ku(n3, t3) {
            return bh(n3) ? n3 : Bi(n3, t3) ? [n3] : Cs(Ec(n3));
          }
          function Ou(n3, t3, r3) {
            var e3 = n3.length;
            return r3 = r3 === X ? e3 : r3, !t3 && r3 >= e3 ? n3 : au(n3, t3, r3);
          }
          function Iu(n3, t3) {
            if (t3)
              return n3.slice();
            var r3 = n3.length, e3 = zl ? zl(r3) : new n3.constructor(r3);
            return n3.copy(e3), e3;
          }
          function Ru(n3) {
            var t3 = new n3.constructor(n3.byteLength);
            return new Rl(t3).set(new Rl(n3)), t3;
          }
          function zu(n3, t3) {
            return new n3.constructor(t3 ? Ru(n3.buffer) : n3.buffer, n3.byteOffset, n3.byteLength);
          }
          function Eu(n3) {
            var t3 = new n3.constructor(n3.source, Nt.exec(n3));
            return t3.lastIndex = n3.lastIndex, t3;
          }
          function Su(n3) {
            return _s ? ll(_s.call(n3)) : {};
          }
          function Wu(n3, t3) {
            return new n3.constructor(t3 ? Ru(n3.buffer) : n3.buffer, n3.byteOffset, n3.length);
          }
          function Lu(n3, t3) {
            if (n3 !== t3) {
              var r3 = n3 !== X, e3 = n3 === null, u2 = n3 === n3, i3 = bc(n3), o3 = t3 !== X, f2 = t3 === null, c2 = t3 === t3, a3 = bc(t3);
              if (!f2 && !a3 && !i3 && n3 > t3 || i3 && o3 && c2 && !f2 && !a3 || e3 && o3 && c2 || !r3 && c2 || !u2)
                return 1;
              if (!e3 && !i3 && !a3 && n3 < t3 || a3 && r3 && u2 && !e3 && !i3 || f2 && r3 && u2 || !o3 && u2 || !c2)
                return -1;
            }
            return 0;
          }
          function Cu(n3, t3, r3) {
            for (var e3 = -1, u2 = n3.criteria, i3 = t3.criteria, o3 = u2.length, f2 = r3.length; ++e3 < o3; ) {
              var c2 = Lu(u2[e3], i3[e3]);
              if (c2) {
                if (e3 >= f2)
                  return c2;
                return c2 * (r3[e3] == "desc" ? -1 : 1);
              }
            }
            return n3.index - t3.index;
          }
          function Uu(n3, t3, r3, e3) {
            for (var u2 = -1, i3 = n3.length, o3 = r3.length, f2 = -1, c2 = t3.length, a3 = Gl(i3 - o3, 0), l2 = il(c2 + a3), s3 = !e3; ++f2 < c2; )
              l2[f2] = t3[f2];
            for (; ++u2 < o3; )
              (s3 || u2 < i3) && (l2[r3[u2]] = n3[u2]);
            for (; a3--; )
              l2[f2++] = n3[u2++];
            return l2;
          }
          function Bu(n3, t3, r3, e3) {
            for (var u2 = -1, i3 = n3.length, o3 = -1, f2 = r3.length, c2 = -1, a3 = t3.length, l2 = Gl(i3 - f2, 0), s3 = il(l2 + a3), h2 = !e3; ++u2 < l2; )
              s3[u2] = n3[u2];
            for (var p3 = u2; ++c2 < a3; )
              s3[p3 + c2] = t3[c2];
            for (; ++o3 < f2; )
              (h2 || u2 < i3) && (s3[p3 + r3[o3]] = n3[u2++]);
            return s3;
          }
          function Tu(n3, t3) {
            var r3 = -1, e3 = n3.length;
            for (t3 || (t3 = il(e3)); ++r3 < e3; )
              t3[r3] = n3[r3];
            return t3;
          }
          function $u(n3, t3, r3, e3) {
            var u2 = !r3;
            r3 || (r3 = {});
            for (var i3 = -1, o3 = t3.length; ++i3 < o3; ) {
              var f2 = t3[i3], c2 = e3 ? e3(r3[f2], n3[f2], f2, r3, n3) : X;
              c2 === X && (c2 = n3[f2]), u2 ? Br2(r3, f2, c2) : Sr2(r3, f2, c2);
            }
            return r3;
          }
          function Du(n3, t3) {
            return $u(n3, Is(n3), t3);
          }
          function Mu(n3, t3) {
            return $u(n3, Rs(n3), t3);
          }
          function Fu(n3, r3) {
            return function(e3, u2) {
              var i3 = bh(e3) ? t2 : Lr2, o3 = r3 ? r3() : {};
              return i3(e3, n3, mi(u2, 2), o3);
            };
          }
          function Nu(n3) {
            return uu(function(t3, r3) {
              var e3 = -1, u2 = r3.length, i3 = u2 > 1 ? r3[u2 - 1] : X, o3 = u2 > 2 ? r3[2] : X;
              for (i3 = n3.length > 3 && typeof i3 == "function" ? (u2--, i3) : X, o3 && Ui(r3[0], r3[1], o3) && (i3 = u2 < 3 ? X : i3, u2 = 1), t3 = ll(t3); ++e3 < u2; ) {
                var f2 = r3[e3];
                f2 && n3(t3, f2, e3, i3);
              }
              return t3;
            });
          }
          function Pu(n3, t3) {
            return function(r3, e3) {
              if (r3 == null)
                return r3;
              if (!Hf(r3))
                return n3(r3, e3);
              for (var u2 = r3.length, i3 = t3 ? u2 : -1, o3 = ll(r3); (t3 ? i3-- : ++i3 < u2) && e3(o3[i3], i3, o3) !== false; )
                ;
              return r3;
            };
          }
          function qu(n3) {
            return function(t3, r3, e3) {
              for (var u2 = -1, i3 = ll(t3), o3 = e3(t3), f2 = o3.length; f2--; ) {
                var c2 = o3[n3 ? f2 : ++u2];
                if (r3(i3[c2], c2, i3) === false)
                  break;
              }
              return t3;
            };
          }
          function Zu(n3, t3, r3) {
            function e3() {
              return (this && this !== re && this instanceof e3 ? i3 : n3).apply(u2 ? r3 : this, arguments);
            }
            var u2 = t3 & _n, i3 = Gu(n3);
            return e3;
          }
          function Ku(n3) {
            return function(t3) {
              t3 = Ec(t3);
              var r3 = T(t3) ? G(t3) : X, e3 = r3 ? r3[0] : t3.charAt(0), u2 = r3 ? Ou(r3, 1).join("") : t3.slice(1);
              return e3[n3]() + u2;
            };
          }
          function Vu(n3) {
            return function(t3) {
              return l(Ra(ca(t3).replace($r, "")), n3, "");
            };
          }
          function Gu(n3) {
            return function() {
              var t3 = arguments;
              switch (t3.length) {
                case 0:
                  return new n3();
                case 1:
                  return new n3(t3[0]);
                case 2:
                  return new n3(t3[0], t3[1]);
                case 3:
                  return new n3(t3[0], t3[1], t3[2]);
                case 4:
                  return new n3(t3[0], t3[1], t3[2], t3[3]);
                case 5:
                  return new n3(t3[0], t3[1], t3[2], t3[3], t3[4]);
                case 6:
                  return new n3(t3[0], t3[1], t3[2], t3[3], t3[4], t3[5]);
                case 7:
                  return new n3(t3[0], t3[1], t3[2], t3[3], t3[4], t3[5], t3[6]);
              }
              var r3 = gs(n3.prototype), e3 = n3.apply(r3, t3);
              return fc(e3) ? e3 : r3;
            };
          }
          function Hu(t3, r3, e3) {
            function u2() {
              for (var o3 = arguments.length, f2 = il(o3), c2 = o3, a3 = wi(u2); c2--; )
                f2[c2] = arguments[c2];
              var l2 = o3 < 3 && f2[0] !== a3 && f2[o3 - 1] !== a3 ? [] : N(f2, a3);
              return o3 -= l2.length, o3 < e3 ? oi(t3, r3, Qu, u2.placeholder, X, f2, l2, X, X, e3 - o3) : n2(this && this !== re && this instanceof u2 ? i3 : t3, this, f2);
            }
            var i3 = Gu(t3);
            return u2;
          }
          function Ju(n3) {
            return function(t3, r3, e3) {
              var u2 = ll(t3);
              if (!Hf(t3)) {
                var i3 = mi(r3, 3);
                t3 = Pc(t3), r3 = function(n4) {
                  return i3(u2[n4], n4, u2);
                };
              }
              var o3 = n3(t3, r3, e3);
              return o3 > -1 ? u2[i3 ? t3[o3] : o3] : X;
            };
          }
          function Yu(n3) {
            return gi(function(t3) {
              var r3 = t3.length, e3 = r3, u2 = Y2.prototype.thru;
              for (n3 && t3.reverse(); e3--; ) {
                var i3 = t3[e3];
                if (typeof i3 != "function")
                  throw new pl(en);
                if (u2 && !o3 && bi(i3) == "wrapper")
                  var o3 = new Y2([], true);
              }
              for (e3 = o3 ? e3 : r3; ++e3 < r3; ) {
                i3 = t3[e3];
                var f2 = bi(i3), c2 = f2 == "wrapper" ? Os(i3) : X;
                o3 = c2 && $i(c2[0]) && c2[1] == (mn | yn | bn | xn) && !c2[4].length && c2[9] == 1 ? o3[bi(c2[0])].apply(o3, c2[3]) : i3.length == 1 && $i(i3) ? o3[f2]() : o3.thru(i3);
              }
              return function() {
                var n4 = arguments, e4 = n4[0];
                if (o3 && n4.length == 1 && bh(e4))
                  return o3.plant(e4).value();
                for (var u3 = 0, i4 = r3 ? t3[u3].apply(this, n4) : e4; ++u3 < r3; )
                  i4 = t3[u3].call(this, i4);
                return i4;
              };
            });
          }
          function Qu(n3, t3, r3, e3, u2, i3, o3, f2, c2, a3) {
            function l2() {
              for (var y2 = arguments.length, d2 = il(y2), b2 = y2; b2--; )
                d2[b2] = arguments[b2];
              if (_2)
                var w2 = wi(l2), m2 = C(d2, w2);
              if (e3 && (d2 = Uu(d2, e3, u2, _2)), i3 && (d2 = Bu(d2, i3, o3, _2)), y2 -= m2, _2 && y2 < a3) {
                return oi(n3, t3, Qu, l2.placeholder, r3, d2, N(d2, w2), f2, c2, a3 - y2);
              }
              var x3 = h2 ? r3 : this, j2 = p3 ? x3[n3] : n3;
              return y2 = d2.length, f2 ? d2 = Hi(d2, f2) : v2 && y2 > 1 && d2.reverse(), s3 && c2 < y2 && (d2.length = c2), this && this !== re && this instanceof l2 && (j2 = g2 || Gu(j2)), j2.apply(x3, d2);
            }
            var s3 = t3 & mn, h2 = t3 & _n, p3 = t3 & vn, _2 = t3 & (yn | dn), v2 = t3 & jn, g2 = p3 ? X : Gu(n3);
            return l2;
          }
          function Xu(n3, t3) {
            return function(r3, e3) {
              return Oe(r3, n3, t3(e3), {});
            };
          }
          function ni(n3, t3) {
            return function(r3, e3) {
              var u2;
              if (r3 === X && e3 === X)
                return t3;
              if (r3 !== X && (u2 = r3), e3 !== X) {
                if (u2 === X)
                  return e3;
                typeof r3 == "string" || typeof e3 == "string" ? (r3 = vu(r3), e3 = vu(e3)) : (r3 = _u(r3), e3 = _u(e3)), u2 = n3(r3, e3);
              }
              return u2;
            };
          }
          function ti(t3) {
            return gi(function(r3) {
              return r3 = c(r3, z(mi())), uu(function(e3) {
                var u2 = this;
                return t3(r3, function(t4) {
                  return n2(t4, u2, e3);
                });
              });
            });
          }
          function ri(n3, t3) {
            t3 = t3 === X ? " " : vu(t3);
            var r3 = t3.length;
            if (r3 < 2)
              return r3 ? eu(t3, n3) : t3;
            var e3 = eu(t3, Fl(n3 / V(t3)));
            return T(t3) ? Ou(G(e3), 0, n3).join("") : e3.slice(0, n3);
          }
          function ei(t3, r3, e3, u2) {
            function i3() {
              for (var r4 = -1, c2 = arguments.length, a3 = -1, l2 = u2.length, s3 = il(l2 + c2), h2 = this && this !== re && this instanceof i3 ? f2 : t3; ++a3 < l2; )
                s3[a3] = u2[a3];
              for (; c2--; )
                s3[a3++] = arguments[++r4];
              return n2(h2, o3 ? e3 : this, s3);
            }
            var o3 = r3 & _n, f2 = Gu(t3);
            return i3;
          }
          function ui(n3) {
            return function(t3, r3, e3) {
              return e3 && typeof e3 != "number" && Ui(t3, r3, e3) && (r3 = e3 = X), t3 = Ac(t3), r3 === X ? (r3 = t3, t3 = 0) : r3 = Ac(r3), e3 = e3 === X ? t3 < r3 ? 1 : -1 : Ac(e3), ru(t3, r3, e3, n3);
            };
          }
          function ii(n3) {
            return function(t3, r3) {
              return typeof t3 == "string" && typeof r3 == "string" || (t3 = Ic(t3), r3 = Ic(r3)), n3(t3, r3);
            };
          }
          function oi(n3, t3, r3, e3, u2, i3, o3, f2, c2, a3) {
            var l2 = t3 & yn, s3 = l2 ? o3 : X, h2 = l2 ? X : o3, p3 = l2 ? i3 : X, _2 = l2 ? X : i3;
            t3 |= l2 ? bn : wn, t3 &= ~(l2 ? wn : bn), t3 & gn || (t3 &= ~(_n | vn));
            var v2 = [n3, t3, u2, p3, s3, _2, h2, f2, c2, a3], g2 = r3.apply(X, v2);
            return $i(n3) && Ss(g2, v2), g2.placeholder = e3, Yi(g2, n3, t3);
          }
          function fi(n3) {
            var t3 = al[n3];
            return function(n4, r3) {
              if (n4 = Ic(n4), r3 = r3 == null ? 0 : Hl(kc(r3), 292), r3 && Zl(n4)) {
                var e3 = (Ec(n4) + "e").split("e");
                return e3 = (Ec(t3(e3[0] + "e" + (+e3[1] + r3))) + "e").split("e"), +(e3[0] + "e" + (+e3[1] - r3));
              }
              return t3(n4);
            };
          }
          function ci(n3) {
            return function(t3) {
              var r3 = zs(t3);
              return r3 == Gn ? M(t3) : r3 == tt ? q(t3) : I(t3, n3(t3));
            };
          }
          function ai(n3, t3, r3, e3, u2, i3, o3, f2) {
            var c2 = t3 & vn;
            if (!c2 && typeof n3 != "function")
              throw new pl(en);
            var a3 = e3 ? e3.length : 0;
            if (a3 || (t3 &= ~(bn | wn), e3 = u2 = X), o3 = o3 === X ? o3 : Gl(kc(o3), 0), f2 = f2 === X ? f2 : kc(f2), a3 -= u2 ? u2.length : 0, t3 & wn) {
              var l2 = e3, s3 = u2;
              e3 = u2 = X;
            }
            var h2 = c2 ? X : Os(n3), p3 = [n3, t3, r3, e3, u2, l2, s3, i3, o3, f2];
            if (h2 && qi(p3, h2), n3 = p3[0], t3 = p3[1], r3 = p3[2], e3 = p3[3], u2 = p3[4], f2 = p3[9] = p3[9] === X ? c2 ? 0 : n3.length : Gl(p3[9] - a3, 0), !f2 && t3 & (yn | dn) && (t3 &= ~(yn | dn)), t3 && t3 != _n)
              _2 = t3 == yn || t3 == dn ? Hu(n3, t3, f2) : t3 != bn && t3 != (_n | bn) || u2.length ? Qu.apply(X, p3) : ei(n3, t3, r3, e3);
            else
              var _2 = Zu(n3, t3, r3);
            return Yi((h2 ? ms : Ss)(_2, p3), n3, t3);
          }
          function li(n3, t3, r3, e3) {
            return n3 === X || Gf(n3, gl[r3]) && !bl.call(e3, r3) ? t3 : n3;
          }
          function si(n3, t3, r3, e3, u2, i3) {
            return fc(n3) && fc(t3) && (i3.set(t3, n3), Ke(n3, t3, X, si, i3), i3.delete(t3)), n3;
          }
          function hi(n3) {
            return gc(n3) ? X : n3;
          }
          function pi(n3, t3, r3, e3, u2, i3) {
            var o3 = r3 & hn, f2 = n3.length, c2 = t3.length;
            if (f2 != c2 && !(o3 && c2 > f2))
              return false;
            var a3 = i3.get(n3), l2 = i3.get(t3);
            if (a3 && l2)
              return a3 == t3 && l2 == n3;
            var s3 = -1, p3 = true, _2 = r3 & pn ? new yr2() : X;
            for (i3.set(n3, t3), i3.set(t3, n3); ++s3 < f2; ) {
              var v2 = n3[s3], g2 = t3[s3];
              if (e3)
                var y2 = o3 ? e3(g2, v2, s3, t3, n3, i3) : e3(v2, g2, s3, n3, t3, i3);
              if (y2 !== X) {
                if (y2)
                  continue;
                p3 = false;
                break;
              }
              if (_2) {
                if (!h(t3, function(n4, t4) {
                  if (!S(_2, t4) && (v2 === n4 || u2(v2, n4, r3, e3, i3)))
                    return _2.push(t4);
                })) {
                  p3 = false;
                  break;
                }
              } else if (v2 !== g2 && !u2(v2, g2, r3, e3, i3)) {
                p3 = false;
                break;
              }
            }
            return i3.delete(n3), i3.delete(t3), p3;
          }
          function _i(n3, t3, r3, e3, u2, i3, o3) {
            switch (r3) {
              case ct:
                if (n3.byteLength != t3.byteLength || n3.byteOffset != t3.byteOffset)
                  return false;
                n3 = n3.buffer, t3 = t3.buffer;
              case ft:
                return !(n3.byteLength != t3.byteLength || !i3(new Rl(n3), new Rl(t3)));
              case Nn:
              case Pn:
              case Hn:
                return Gf(+n3, +t3);
              case Zn:
                return n3.name == t3.name && n3.message == t3.message;
              case nt:
              case rt:
                return n3 == t3 + "";
              case Gn:
                var f2 = M;
              case tt:
                var c2 = e3 & hn;
                if (f2 || (f2 = P), n3.size != t3.size && !c2)
                  return false;
                var a3 = o3.get(n3);
                if (a3)
                  return a3 == t3;
                e3 |= pn, o3.set(n3, t3);
                var l2 = pi(f2(n3), f2(t3), e3, u2, i3, o3);
                return o3.delete(n3), l2;
              case et:
                if (_s)
                  return _s.call(n3) == _s.call(t3);
            }
            return false;
          }
          function vi(n3, t3, r3, e3, u2, i3) {
            var o3 = r3 & hn, f2 = yi(n3), c2 = f2.length;
            if (c2 != yi(t3).length && !o3)
              return false;
            for (var a3 = c2; a3--; ) {
              var l2 = f2[a3];
              if (!(o3 ? l2 in t3 : bl.call(t3, l2)))
                return false;
            }
            var s3 = i3.get(n3), h2 = i3.get(t3);
            if (s3 && h2)
              return s3 == t3 && h2 == n3;
            var p3 = true;
            i3.set(n3, t3), i3.set(t3, n3);
            for (var _2 = o3; ++a3 < c2; ) {
              l2 = f2[a3];
              var v2 = n3[l2], g2 = t3[l2];
              if (e3)
                var y2 = o3 ? e3(g2, v2, l2, t3, n3, i3) : e3(v2, g2, l2, n3, t3, i3);
              if (!(y2 === X ? v2 === g2 || u2(v2, g2, r3, e3, i3) : y2)) {
                p3 = false;
                break;
              }
              _2 || (_2 = l2 == "constructor");
            }
            if (p3 && !_2) {
              var d2 = n3.constructor, b2 = t3.constructor;
              d2 != b2 && "constructor" in n3 && "constructor" in t3 && !(typeof d2 == "function" && d2 instanceof d2 && typeof b2 == "function" && b2 instanceof b2) && (p3 = false);
            }
            return i3.delete(n3), i3.delete(t3), p3;
          }
          function gi(n3) {
            return Ls(Vi(n3, X, _o), n3 + "");
          }
          function yi(n3) {
            return de2(n3, Pc, Is);
          }
          function di(n3) {
            return de2(n3, qc, Rs);
          }
          function bi(n3) {
            for (var t3 = n3.name + "", r3 = fs[t3], e3 = bl.call(fs, t3) ? r3.length : 0; e3--; ) {
              var u2 = r3[e3], i3 = u2.func;
              if (i3 == null || i3 == n3)
                return u2.name;
            }
            return t3;
          }
          function wi(n3) {
            return (bl.call(Z2, "placeholder") ? Z2 : n3).placeholder;
          }
          function mi() {
            var n3 = Z2.iteratee || Ca;
            return n3 = n3 === Ca ? De : n3, arguments.length ? n3(arguments[0], arguments[1]) : n3;
          }
          function xi(n3, t3) {
            var r3 = n3.__data__;
            return Ti(t3) ? r3[typeof t3 == "string" ? "string" : "hash"] : r3.map;
          }
          function ji(n3) {
            for (var t3 = Pc(n3), r3 = t3.length; r3--; ) {
              var e3 = t3[r3], u2 = n3[e3];
              t3[r3] = [e3, u2, Fi(u2)];
            }
            return t3;
          }
          function Ai(n3, t3) {
            var r3 = B(n3, t3);
            return Ue(r3) ? r3 : X;
          }
          function ki(n3) {
            var t3 = bl.call(n3, Bl), r3 = n3[Bl];
            try {
              n3[Bl] = X;
              var e3 = true;
            } catch (n4) {
            }
            var u2 = xl.call(n3);
            return e3 && (t3 ? n3[Bl] = r3 : delete n3[Bl]), u2;
          }
          function Oi(n3, t3, r3) {
            for (var e3 = -1, u2 = r3.length; ++e3 < u2; ) {
              var i3 = r3[e3], o3 = i3.size;
              switch (i3.type) {
                case "drop":
                  n3 += o3;
                  break;
                case "dropRight":
                  t3 -= o3;
                  break;
                case "take":
                  t3 = Hl(t3, n3 + o3);
                  break;
                case "takeRight":
                  n3 = Gl(n3, t3 - o3);
              }
            }
            return { start: n3, end: t3 };
          }
          function Ii(n3) {
            var t3 = n3.match(Bt);
            return t3 ? t3[1].split(Tt) : [];
          }
          function Ri(n3, t3, r3) {
            t3 = ku(t3, n3);
            for (var e3 = -1, u2 = t3.length, i3 = false; ++e3 < u2; ) {
              var o3 = no(t3[e3]);
              if (!(i3 = n3 != null && r3(n3, o3)))
                break;
              n3 = n3[o3];
            }
            return i3 || ++e3 != u2 ? i3 : (u2 = n3 == null ? 0 : n3.length, !!u2 && oc(u2) && Ci(o3, u2) && (bh(n3) || dh(n3)));
          }
          function zi(n3) {
            var t3 = n3.length, r3 = new n3.constructor(t3);
            return t3 && typeof n3[0] == "string" && bl.call(n3, "index") && (r3.index = n3.index, r3.input = n3.input), r3;
          }
          function Ei(n3) {
            return typeof n3.constructor != "function" || Mi(n3) ? {} : gs(El(n3));
          }
          function Si(n3, t3, r3) {
            var e3 = n3.constructor;
            switch (t3) {
              case ft:
                return Ru(n3);
              case Nn:
              case Pn:
                return new e3(+n3);
              case ct:
                return zu(n3, r3);
              case at:
              case lt:
              case st:
              case ht:
              case pt:
              case _t:
              case vt:
              case gt:
              case yt:
                return Wu(n3, r3);
              case Gn:
                return new e3();
              case Hn:
              case rt:
                return new e3(n3);
              case nt:
                return Eu(n3);
              case tt:
                return new e3();
              case et:
                return Su(n3);
            }
          }
          function Wi(n3, t3) {
            var r3 = t3.length;
            if (!r3)
              return n3;
            var e3 = r3 - 1;
            return t3[e3] = (r3 > 1 ? "& " : "") + t3[e3], t3 = t3.join(r3 > 2 ? ", " : " "), n3.replace(Ut, "{\n/* [wrapped with " + t3 + "] */\n");
          }
          function Li(n3) {
            return bh(n3) || dh(n3) || !!(Cl && n3 && n3[Cl]);
          }
          function Ci(n3, t3) {
            var r3 = typeof n3;
            return t3 = t3 == null ? Wn : t3, !!t3 && (r3 == "number" || r3 != "symbol" && Vt.test(n3)) && n3 > -1 && n3 % 1 == 0 && n3 < t3;
          }
          function Ui(n3, t3, r3) {
            if (!fc(r3))
              return false;
            var e3 = typeof t3;
            return !!(e3 == "number" ? Hf(r3) && Ci(t3, r3.length) : e3 == "string" && t3 in r3) && Gf(r3[t3], n3);
          }
          function Bi(n3, t3) {
            if (bh(n3))
              return false;
            var r3 = typeof n3;
            return !(r3 != "number" && r3 != "symbol" && r3 != "boolean" && n3 != null && !bc(n3)) || (zt.test(n3) || !Rt.test(n3) || t3 != null && n3 in ll(t3));
          }
          function Ti(n3) {
            var t3 = typeof n3;
            return t3 == "string" || t3 == "number" || t3 == "symbol" || t3 == "boolean" ? n3 !== "__proto__" : n3 === null;
          }
          function $i(n3) {
            var t3 = bi(n3), r3 = Z2[t3];
            if (typeof r3 != "function" || !(t3 in Ct2.prototype))
              return false;
            if (n3 === r3)
              return true;
            var e3 = Os(r3);
            return !!e3 && n3 === e3[0];
          }
          function Di(n3) {
            return !!ml && ml in n3;
          }
          function Mi(n3) {
            var t3 = n3 && n3.constructor;
            return n3 === (typeof t3 == "function" && t3.prototype || gl);
          }
          function Fi(n3) {
            return n3 === n3 && !fc(n3);
          }
          function Ni(n3, t3) {
            return function(r3) {
              return r3 != null && (r3[n3] === t3 && (t3 !== X || n3 in ll(r3)));
            };
          }
          function Pi(n3) {
            var t3 = Cf(n3, function(n4) {
              return r3.size === fn && r3.clear(), n4;
            }), r3 = t3.cache;
            return t3;
          }
          function qi(n3, t3) {
            var r3 = n3[1], e3 = t3[1], u2 = r3 | e3, i3 = u2 < (_n | vn | mn), o3 = e3 == mn && r3 == yn || e3 == mn && r3 == xn && n3[7].length <= t3[8] || e3 == (mn | xn) && t3[7].length <= t3[8] && r3 == yn;
            if (!i3 && !o3)
              return n3;
            e3 & _n && (n3[2] = t3[2], u2 |= r3 & _n ? 0 : gn);
            var f2 = t3[3];
            if (f2) {
              var c2 = n3[3];
              n3[3] = c2 ? Uu(c2, f2, t3[4]) : f2, n3[4] = c2 ? N(n3[3], cn) : t3[4];
            }
            return f2 = t3[5], f2 && (c2 = n3[5], n3[5] = c2 ? Bu(c2, f2, t3[6]) : f2, n3[6] = c2 ? N(n3[5], cn) : t3[6]), f2 = t3[7], f2 && (n3[7] = f2), e3 & mn && (n3[8] = n3[8] == null ? t3[8] : Hl(n3[8], t3[8])), n3[9] == null && (n3[9] = t3[9]), n3[0] = t3[0], n3[1] = u2, n3;
          }
          function Zi(n3) {
            var t3 = [];
            if (n3 != null)
              for (var r3 in ll(n3))
                t3.push(r3);
            return t3;
          }
          function Ki(n3) {
            return xl.call(n3);
          }
          function Vi(t3, r3, e3) {
            return r3 = Gl(r3 === X ? t3.length - 1 : r3, 0), function() {
              for (var u2 = arguments, i3 = -1, o3 = Gl(u2.length - r3, 0), f2 = il(o3); ++i3 < o3; )
                f2[i3] = u2[r3 + i3];
              i3 = -1;
              for (var c2 = il(r3 + 1); ++i3 < r3; )
                c2[i3] = u2[i3];
              return c2[r3] = e3(f2), n2(t3, this, c2);
            };
          }
          function Gi(n3, t3) {
            return t3.length < 2 ? n3 : _e2(n3, au(t3, 0, -1));
          }
          function Hi(n3, t3) {
            for (var r3 = n3.length, e3 = Hl(t3.length, r3), u2 = Tu(n3); e3--; ) {
              var i3 = t3[e3];
              n3[e3] = Ci(i3, r3) ? u2[i3] : X;
            }
            return n3;
          }
          function Ji(n3, t3) {
            if ((t3 !== "constructor" || typeof n3[t3] != "function") && t3 != "__proto__")
              return n3[t3];
          }
          function Yi(n3, t3, r3) {
            var e3 = t3 + "";
            return Ls(n3, Wi(e3, ro(Ii(e3), r3)));
          }
          function Qi(n3) {
            var t3 = 0, r3 = 0;
            return function() {
              var e3 = Jl(), u2 = In - (e3 - r3);
              if (r3 = e3, u2 > 0) {
                if (++t3 >= On)
                  return arguments[0];
              } else
                t3 = 0;
              return n3.apply(X, arguments);
            };
          }
          function Xi(n3, t3) {
            var r3 = -1, e3 = n3.length, u2 = e3 - 1;
            for (t3 = t3 === X ? e3 : t3; ++r3 < t3; ) {
              var i3 = tu(r3, u2), o3 = n3[i3];
              n3[i3] = n3[r3], n3[r3] = o3;
            }
            return n3.length = t3, n3;
          }
          function no(n3) {
            if (typeof n3 == "string" || bc(n3))
              return n3;
            var t3 = n3 + "";
            return t3 == "0" && 1 / n3 == -Sn ? "-0" : t3;
          }
          function to(n3) {
            if (n3 != null) {
              try {
                return dl.call(n3);
              } catch (n4) {
              }
              try {
                return n3 + "";
              } catch (n4) {
              }
            }
            return "";
          }
          function ro(n3, t3) {
            return r2($n, function(r3) {
              var e3 = "_." + r3[0];
              t3 & r3[1] && !o2(n3, e3) && n3.push(e3);
            }), n3.sort();
          }
          function eo(n3) {
            if (n3 instanceof Ct2)
              return n3.clone();
            var t3 = new Y2(n3.__wrapped__, n3.__chain__);
            return t3.__actions__ = Tu(n3.__actions__), t3.__index__ = n3.__index__, t3.__values__ = n3.__values__, t3;
          }
          function uo(n3, t3, r3) {
            t3 = (r3 ? Ui(n3, t3, r3) : t3 === X) ? 1 : Gl(kc(t3), 0);
            var e3 = n3 == null ? 0 : n3.length;
            if (!e3 || t3 < 1)
              return [];
            for (var u2 = 0, i3 = 0, o3 = il(Fl(e3 / t3)); u2 < e3; )
              o3[i3++] = au(n3, u2, u2 += t3);
            return o3;
          }
          function io(n3) {
            for (var t3 = -1, r3 = n3 == null ? 0 : n3.length, e3 = 0, u2 = []; ++t3 < r3; ) {
              var i3 = n3[t3];
              i3 && (u2[e3++] = i3);
            }
            return u2;
          }
          function oo() {
            var n3 = arguments.length;
            if (!n3)
              return [];
            for (var t3 = il(n3 - 1), r3 = arguments[0], e3 = n3; e3--; )
              t3[e3 - 1] = arguments[e3];
            return a2(bh(r3) ? Tu(r3) : [r3], ee2(t3, 1));
          }
          function fo(n3, t3, r3) {
            var e3 = n3 == null ? 0 : n3.length;
            return e3 ? (t3 = r3 || t3 === X ? 1 : kc(t3), au(n3, t3 < 0 ? 0 : t3, e3)) : [];
          }
          function co(n3, t3, r3) {
            var e3 = n3 == null ? 0 : n3.length;
            return e3 ? (t3 = r3 || t3 === X ? 1 : kc(t3), t3 = e3 - t3, au(n3, 0, t3 < 0 ? 0 : t3)) : [];
          }
          function ao(n3, t3) {
            return n3 && n3.length ? bu(n3, mi(t3, 3), true, true) : [];
          }
          function lo(n3, t3) {
            return n3 && n3.length ? bu(n3, mi(t3, 3), true) : [];
          }
          function so(n3, t3, r3, e3) {
            var u2 = n3 == null ? 0 : n3.length;
            return u2 ? (r3 && typeof r3 != "number" && Ui(n3, t3, r3) && (r3 = 0, e3 = u2), ne2(n3, t3, r3, e3)) : [];
          }
          function ho(n3, t3, r3) {
            var e3 = n3 == null ? 0 : n3.length;
            if (!e3)
              return -1;
            var u2 = r3 == null ? 0 : kc(r3);
            return u2 < 0 && (u2 = Gl(e3 + u2, 0)), g(n3, mi(t3, 3), u2);
          }
          function po(n3, t3, r3) {
            var e3 = n3 == null ? 0 : n3.length;
            if (!e3)
              return -1;
            var u2 = e3 - 1;
            return r3 !== X && (u2 = kc(r3), u2 = r3 < 0 ? Gl(e3 + u2, 0) : Hl(u2, e3 - 1)), g(n3, mi(t3, 3), u2, true);
          }
          function _o(n3) {
            return (n3 == null ? 0 : n3.length) ? ee2(n3, 1) : [];
          }
          function vo(n3) {
            return (n3 == null ? 0 : n3.length) ? ee2(n3, Sn) : [];
          }
          function go(n3, t3) {
            return (n3 == null ? 0 : n3.length) ? (t3 = t3 === X ? 1 : kc(t3), ee2(n3, t3)) : [];
          }
          function yo(n3) {
            for (var t3 = -1, r3 = n3 == null ? 0 : n3.length, e3 = {}; ++t3 < r3; ) {
              var u2 = n3[t3];
              e3[u2[0]] = u2[1];
            }
            return e3;
          }
          function bo(n3) {
            return n3 && n3.length ? n3[0] : X;
          }
          function wo(n3, t3, r3) {
            var e3 = n3 == null ? 0 : n3.length;
            if (!e3)
              return -1;
            var u2 = r3 == null ? 0 : kc(r3);
            return u2 < 0 && (u2 = Gl(e3 + u2, 0)), y(n3, t3, u2);
          }
          function mo(n3) {
            return (n3 == null ? 0 : n3.length) ? au(n3, 0, -1) : [];
          }
          function xo(n3, t3) {
            return n3 == null ? "" : Kl.call(n3, t3);
          }
          function jo(n3) {
            var t3 = n3 == null ? 0 : n3.length;
            return t3 ? n3[t3 - 1] : X;
          }
          function Ao(n3, t3, r3) {
            var e3 = n3 == null ? 0 : n3.length;
            if (!e3)
              return -1;
            var u2 = e3;
            return r3 !== X && (u2 = kc(r3), u2 = u2 < 0 ? Gl(e3 + u2, 0) : Hl(u2, e3 - 1)), t3 === t3 ? K(n3, t3, u2) : g(n3, b, u2, true);
          }
          function ko(n3, t3) {
            return n3 && n3.length ? Ge(n3, kc(t3)) : X;
          }
          function Oo(n3, t3) {
            return n3 && n3.length && t3 && t3.length ? Xe(n3, t3) : n3;
          }
          function Io(n3, t3, r3) {
            return n3 && n3.length && t3 && t3.length ? Xe(n3, t3, mi(r3, 2)) : n3;
          }
          function Ro(n3, t3, r3) {
            return n3 && n3.length && t3 && t3.length ? Xe(n3, t3, X, r3) : n3;
          }
          function zo(n3, t3) {
            var r3 = [];
            if (!n3 || !n3.length)
              return r3;
            var e3 = -1, u2 = [], i3 = n3.length;
            for (t3 = mi(t3, 3); ++e3 < i3; ) {
              var o3 = n3[e3];
              t3(o3, e3, n3) && (r3.push(o3), u2.push(e3));
            }
            return nu(n3, u2), r3;
          }
          function Eo(n3) {
            return n3 == null ? n3 : Xl.call(n3);
          }
          function So(n3, t3, r3) {
            var e3 = n3 == null ? 0 : n3.length;
            return e3 ? (r3 && typeof r3 != "number" && Ui(n3, t3, r3) ? (t3 = 0, r3 = e3) : (t3 = t3 == null ? 0 : kc(t3), r3 = r3 === X ? e3 : kc(r3)), au(n3, t3, r3)) : [];
          }
          function Wo(n3, t3) {
            return su(n3, t3);
          }
          function Lo(n3, t3, r3) {
            return hu(n3, t3, mi(r3, 2));
          }
          function Co(n3, t3) {
            var r3 = n3 == null ? 0 : n3.length;
            if (r3) {
              var e3 = su(n3, t3);
              if (e3 < r3 && Gf(n3[e3], t3))
                return e3;
            }
            return -1;
          }
          function Uo(n3, t3) {
            return su(n3, t3, true);
          }
          function Bo(n3, t3, r3) {
            return hu(n3, t3, mi(r3, 2), true);
          }
          function To(n3, t3) {
            if (n3 == null ? 0 : n3.length) {
              var r3 = su(n3, t3, true) - 1;
              if (Gf(n3[r3], t3))
                return r3;
            }
            return -1;
          }
          function $o(n3) {
            return n3 && n3.length ? pu(n3) : [];
          }
          function Do(n3, t3) {
            return n3 && n3.length ? pu(n3, mi(t3, 2)) : [];
          }
          function Mo(n3) {
            var t3 = n3 == null ? 0 : n3.length;
            return t3 ? au(n3, 1, t3) : [];
          }
          function Fo(n3, t3, r3) {
            return n3 && n3.length ? (t3 = r3 || t3 === X ? 1 : kc(t3), au(n3, 0, t3 < 0 ? 0 : t3)) : [];
          }
          function No(n3, t3, r3) {
            var e3 = n3 == null ? 0 : n3.length;
            return e3 ? (t3 = r3 || t3 === X ? 1 : kc(t3), t3 = e3 - t3, au(n3, t3 < 0 ? 0 : t3, e3)) : [];
          }
          function Po(n3, t3) {
            return n3 && n3.length ? bu(n3, mi(t3, 3), false, true) : [];
          }
          function qo(n3, t3) {
            return n3 && n3.length ? bu(n3, mi(t3, 3)) : [];
          }
          function Zo(n3) {
            return n3 && n3.length ? gu(n3) : [];
          }
          function Ko(n3, t3) {
            return n3 && n3.length ? gu(n3, mi(t3, 2)) : [];
          }
          function Vo(n3, t3) {
            return t3 = typeof t3 == "function" ? t3 : X, n3 && n3.length ? gu(n3, X, t3) : [];
          }
          function Go(n3) {
            if (!n3 || !n3.length)
              return [];
            var t3 = 0;
            return n3 = i2(n3, function(n4) {
              if (Jf(n4))
                return t3 = Gl(n4.length, t3), true;
            }), O(t3, function(t4) {
              return c(n3, m(t4));
            });
          }
          function Ho(t3, r3) {
            if (!t3 || !t3.length)
              return [];
            var e3 = Go(t3);
            return r3 == null ? e3 : c(e3, function(t4) {
              return n2(r3, X, t4);
            });
          }
          function Jo(n3, t3) {
            return xu(n3 || [], t3 || [], Sr2);
          }
          function Yo(n3, t3) {
            return xu(n3 || [], t3 || [], fu);
          }
          function Qo(n3) {
            var t3 = Z2(n3);
            return t3.__chain__ = true, t3;
          }
          function Xo(n3, t3) {
            return t3(n3), n3;
          }
          function nf(n3, t3) {
            return t3(n3);
          }
          function tf() {
            return Qo(this);
          }
          function rf() {
            return new Y2(this.value(), this.__chain__);
          }
          function ef() {
            this.__values__ === X && (this.__values__ = jc(this.value()));
            var n3 = this.__index__ >= this.__values__.length;
            return { done: n3, value: n3 ? X : this.__values__[this.__index__++] };
          }
          function uf() {
            return this;
          }
          function of(n3) {
            for (var t3, r3 = this; r3 instanceof J2; ) {
              var e3 = eo(r3);
              e3.__index__ = 0, e3.__values__ = X, t3 ? u2.__wrapped__ = e3 : t3 = e3;
              var u2 = e3;
              r3 = r3.__wrapped__;
            }
            return u2.__wrapped__ = n3, t3;
          }
          function ff() {
            var n3 = this.__wrapped__;
            if (n3 instanceof Ct2) {
              var t3 = n3;
              return this.__actions__.length && (t3 = new Ct2(this)), t3 = t3.reverse(), t3.__actions__.push({ func: nf, args: [Eo], thisArg: X }), new Y2(t3, this.__chain__);
            }
            return this.thru(Eo);
          }
          function cf() {
            return wu(this.__wrapped__, this.__actions__);
          }
          function af(n3, t3, r3) {
            var e3 = bh(n3) ? u : Jr2;
            return r3 && Ui(n3, t3, r3) && (t3 = X), e3(n3, mi(t3, 3));
          }
          function lf(n3, t3) {
            return (bh(n3) ? i2 : te2)(n3, mi(t3, 3));
          }
          function sf(n3, t3) {
            return ee2(yf(n3, t3), 1);
          }
          function hf(n3, t3) {
            return ee2(yf(n3, t3), Sn);
          }
          function pf(n3, t3, r3) {
            return r3 = r3 === X ? 1 : kc(r3), ee2(yf(n3, t3), r3);
          }
          function _f(n3, t3) {
            return (bh(n3) ? r2 : ys)(n3, mi(t3, 3));
          }
          function vf(n3, t3) {
            return (bh(n3) ? e2 : ds)(n3, mi(t3, 3));
          }
          function gf(n3, t3, r3, e3) {
            n3 = Hf(n3) ? n3 : ra(n3), r3 = r3 && !e3 ? kc(r3) : 0;
            var u2 = n3.length;
            return r3 < 0 && (r3 = Gl(u2 + r3, 0)), dc(n3) ? r3 <= u2 && n3.indexOf(t3, r3) > -1 : !!u2 && y(n3, t3, r3) > -1;
          }
          function yf(n3, t3) {
            return (bh(n3) ? c : Pe)(n3, mi(t3, 3));
          }
          function df(n3, t3, r3, e3) {
            return n3 == null ? [] : (bh(t3) || (t3 = t3 == null ? [] : [t3]), r3 = e3 ? X : r3, bh(r3) || (r3 = r3 == null ? [] : [r3]), He(n3, t3, r3));
          }
          function bf(n3, t3, r3) {
            var e3 = bh(n3) ? l : j, u2 = arguments.length < 3;
            return e3(n3, mi(t3, 4), r3, u2, ys);
          }
          function wf(n3, t3, r3) {
            var e3 = bh(n3) ? s2 : j, u2 = arguments.length < 3;
            return e3(n3, mi(t3, 4), r3, u2, ds);
          }
          function mf(n3, t3) {
            return (bh(n3) ? i2 : te2)(n3, Uf(mi(t3, 3)));
          }
          function xf(n3) {
            return (bh(n3) ? Ir2 : iu)(n3);
          }
          function jf(n3, t3, r3) {
            return t3 = (r3 ? Ui(n3, t3, r3) : t3 === X) ? 1 : kc(t3), (bh(n3) ? Rr2 : ou)(n3, t3);
          }
          function Af(n3) {
            return (bh(n3) ? zr2 : cu)(n3);
          }
          function kf(n3) {
            if (n3 == null)
              return 0;
            if (Hf(n3))
              return dc(n3) ? V(n3) : n3.length;
            var t3 = zs(n3);
            return t3 == Gn || t3 == tt ? n3.size : Me(n3).length;
          }
          function Of(n3, t3, r3) {
            var e3 = bh(n3) ? h : lu;
            return r3 && Ui(n3, t3, r3) && (t3 = X), e3(n3, mi(t3, 3));
          }
          function If(n3, t3) {
            if (typeof t3 != "function")
              throw new pl(en);
            return n3 = kc(n3), function() {
              if (--n3 < 1)
                return t3.apply(this, arguments);
            };
          }
          function Rf(n3, t3, r3) {
            return t3 = r3 ? X : t3, t3 = n3 && t3 == null ? n3.length : t3, ai(n3, mn, X, X, X, X, t3);
          }
          function zf(n3, t3) {
            var r3;
            if (typeof t3 != "function")
              throw new pl(en);
            return n3 = kc(n3), function() {
              return --n3 > 0 && (r3 = t3.apply(this, arguments)), n3 <= 1 && (t3 = X), r3;
            };
          }
          function Ef(n3, t3, r3) {
            t3 = r3 ? X : t3;
            var e3 = ai(n3, yn, X, X, X, X, X, t3);
            return e3.placeholder = Ef.placeholder, e3;
          }
          function Sf(n3, t3, r3) {
            t3 = r3 ? X : t3;
            var e3 = ai(n3, dn, X, X, X, X, X, t3);
            return e3.placeholder = Sf.placeholder, e3;
          }
          function Wf(n3, t3, r3) {
            function e3(t4) {
              var r4 = h2, e4 = p3;
              return h2 = p3 = X, d2 = t4, v2 = n3.apply(e4, r4);
            }
            function u2(n4) {
              return d2 = n4, g2 = Ws(f2, t3), b2 ? e3(n4) : v2;
            }
            function i3(n4) {
              var r4 = n4 - y2, e4 = n4 - d2, u3 = t3 - r4;
              return w2 ? Hl(u3, _2 - e4) : u3;
            }
            function o3(n4) {
              var r4 = n4 - y2, e4 = n4 - d2;
              return y2 === X || r4 >= t3 || r4 < 0 || w2 && e4 >= _2;
            }
            function f2() {
              var n4 = fh();
              return o3(n4) ? c2(n4) : (g2 = Ws(f2, i3(n4)), X);
            }
            function c2(n4) {
              return g2 = X, m2 && h2 ? e3(n4) : (h2 = p3 = X, v2);
            }
            function a3() {
              g2 !== X && As(g2), d2 = 0, h2 = y2 = p3 = g2 = X;
            }
            function l2() {
              return g2 === X ? v2 : c2(fh());
            }
            function s3() {
              var n4 = fh(), r4 = o3(n4);
              if (h2 = arguments, p3 = this, y2 = n4, r4) {
                if (g2 === X)
                  return u2(y2);
                if (w2)
                  return As(g2), g2 = Ws(f2, t3), e3(y2);
              }
              return g2 === X && (g2 = Ws(f2, t3)), v2;
            }
            var h2, p3, _2, v2, g2, y2, d2 = 0, b2 = false, w2 = false, m2 = true;
            if (typeof n3 != "function")
              throw new pl(en);
            return t3 = Ic(t3) || 0, fc(r3) && (b2 = !!r3.leading, w2 = "maxWait" in r3, _2 = w2 ? Gl(Ic(r3.maxWait) || 0, t3) : _2, m2 = "trailing" in r3 ? !!r3.trailing : m2), s3.cancel = a3, s3.flush = l2, s3;
          }
          function Lf(n3) {
            return ai(n3, jn);
          }
          function Cf(n3, t3) {
            if (typeof n3 != "function" || t3 != null && typeof t3 != "function")
              throw new pl(en);
            var r3 = function() {
              var e3 = arguments, u2 = t3 ? t3.apply(this, e3) : e3[0], i3 = r3.cache;
              if (i3.has(u2))
                return i3.get(u2);
              var o3 = n3.apply(this, e3);
              return r3.cache = i3.set(u2, o3) || i3, o3;
            };
            return r3.cache = new (Cf.Cache || sr2)(), r3;
          }
          function Uf(n3) {
            if (typeof n3 != "function")
              throw new pl(en);
            return function() {
              var t3 = arguments;
              switch (t3.length) {
                case 0:
                  return !n3.call(this);
                case 1:
                  return !n3.call(this, t3[0]);
                case 2:
                  return !n3.call(this, t3[0], t3[1]);
                case 3:
                  return !n3.call(this, t3[0], t3[1], t3[2]);
              }
              return !n3.apply(this, t3);
            };
          }
          function Bf(n3) {
            return zf(2, n3);
          }
          function Tf(n3, t3) {
            if (typeof n3 != "function")
              throw new pl(en);
            return t3 = t3 === X ? t3 : kc(t3), uu(n3, t3);
          }
          function $f(t3, r3) {
            if (typeof t3 != "function")
              throw new pl(en);
            return r3 = r3 == null ? 0 : Gl(kc(r3), 0), uu(function(e3) {
              var u2 = e3[r3], i3 = Ou(e3, 0, r3);
              return u2 && a2(i3, u2), n2(t3, this, i3);
            });
          }
          function Df(n3, t3, r3) {
            var e3 = true, u2 = true;
            if (typeof n3 != "function")
              throw new pl(en);
            return fc(r3) && (e3 = "leading" in r3 ? !!r3.leading : e3, u2 = "trailing" in r3 ? !!r3.trailing : u2), Wf(n3, t3, { leading: e3, maxWait: t3, trailing: u2 });
          }
          function Mf(n3) {
            return Rf(n3, 1);
          }
          function Ff(n3, t3) {
            return ph(Au(t3), n3);
          }
          function Nf() {
            if (!arguments.length)
              return [];
            var n3 = arguments[0];
            return bh(n3) ? n3 : [n3];
          }
          function Pf(n3) {
            return Fr2(n3, sn);
          }
          function qf(n3, t3) {
            return t3 = typeof t3 == "function" ? t3 : X, Fr2(n3, sn, t3);
          }
          function Zf(n3) {
            return Fr2(n3, an | sn);
          }
          function Kf(n3, t3) {
            return t3 = typeof t3 == "function" ? t3 : X, Fr2(n3, an | sn, t3);
          }
          function Vf(n3, t3) {
            return t3 == null || Pr2(n3, t3, Pc(t3));
          }
          function Gf(n3, t3) {
            return n3 === t3 || n3 !== n3 && t3 !== t3;
          }
          function Hf(n3) {
            return n3 != null && oc(n3.length) && !uc(n3);
          }
          function Jf(n3) {
            return cc(n3) && Hf(n3);
          }
          function Yf(n3) {
            return n3 === true || n3 === false || cc(n3) && we(n3) == Nn;
          }
          function Qf(n3) {
            return cc(n3) && n3.nodeType === 1 && !gc(n3);
          }
          function Xf(n3) {
            if (n3 == null)
              return true;
            if (Hf(n3) && (bh(n3) || typeof n3 == "string" || typeof n3.splice == "function" || mh(n3) || Oh(n3) || dh(n3)))
              return !n3.length;
            var t3 = zs(n3);
            if (t3 == Gn || t3 == tt)
              return !n3.size;
            if (Mi(n3))
              return !Me(n3).length;
            for (var r3 in n3)
              if (bl.call(n3, r3))
                return false;
            return true;
          }
          function nc(n3, t3) {
            return Se(n3, t3);
          }
          function tc(n3, t3, r3) {
            r3 = typeof r3 == "function" ? r3 : X;
            var e3 = r3 ? r3(n3, t3) : X;
            return e3 === X ? Se(n3, t3, X, r3) : !!e3;
          }
          function rc(n3) {
            if (!cc(n3))
              return false;
            var t3 = we(n3);
            return t3 == Zn || t3 == qn || typeof n3.message == "string" && typeof n3.name == "string" && !gc(n3);
          }
          function ec(n3) {
            return typeof n3 == "number" && Zl(n3);
          }
          function uc(n3) {
            if (!fc(n3))
              return false;
            var t3 = we(n3);
            return t3 == Kn || t3 == Vn || t3 == Fn || t3 == Xn;
          }
          function ic(n3) {
            return typeof n3 == "number" && n3 == kc(n3);
          }
          function oc(n3) {
            return typeof n3 == "number" && n3 > -1 && n3 % 1 == 0 && n3 <= Wn;
          }
          function fc(n3) {
            var t3 = typeof n3;
            return n3 != null && (t3 == "object" || t3 == "function");
          }
          function cc(n3) {
            return n3 != null && typeof n3 == "object";
          }
          function ac(n3, t3) {
            return n3 === t3 || Ce(n3, t3, ji(t3));
          }
          function lc(n3, t3, r3) {
            return r3 = typeof r3 == "function" ? r3 : X, Ce(n3, t3, ji(t3), r3);
          }
          function sc(n3) {
            return vc(n3) && n3 != +n3;
          }
          function hc(n3) {
            if (Es(n3))
              throw new fl(rn);
            return Ue(n3);
          }
          function pc(n3) {
            return n3 === null;
          }
          function _c(n3) {
            return n3 == null;
          }
          function vc(n3) {
            return typeof n3 == "number" || cc(n3) && we(n3) == Hn;
          }
          function gc(n3) {
            if (!cc(n3) || we(n3) != Yn)
              return false;
            var t3 = El(n3);
            if (t3 === null)
              return true;
            var r3 = bl.call(t3, "constructor") && t3.constructor;
            return typeof r3 == "function" && r3 instanceof r3 && dl.call(r3) == jl;
          }
          function yc(n3) {
            return ic(n3) && n3 >= -Wn && n3 <= Wn;
          }
          function dc(n3) {
            return typeof n3 == "string" || !bh(n3) && cc(n3) && we(n3) == rt;
          }
          function bc(n3) {
            return typeof n3 == "symbol" || cc(n3) && we(n3) == et;
          }
          function wc(n3) {
            return n3 === X;
          }
          function mc(n3) {
            return cc(n3) && zs(n3) == it;
          }
          function xc(n3) {
            return cc(n3) && we(n3) == ot;
          }
          function jc(n3) {
            if (!n3)
              return [];
            if (Hf(n3))
              return dc(n3) ? G(n3) : Tu(n3);
            if (Ul && n3[Ul])
              return D(n3[Ul]());
            var t3 = zs(n3);
            return (t3 == Gn ? M : t3 == tt ? P : ra)(n3);
          }
          function Ac(n3) {
            if (!n3)
              return n3 === 0 ? n3 : 0;
            if (n3 = Ic(n3), n3 === Sn || n3 === -Sn) {
              return (n3 < 0 ? -1 : 1) * Ln;
            }
            return n3 === n3 ? n3 : 0;
          }
          function kc(n3) {
            var t3 = Ac(n3), r3 = t3 % 1;
            return t3 === t3 ? r3 ? t3 - r3 : t3 : 0;
          }
          function Oc(n3) {
            return n3 ? Mr2(kc(n3), 0, Un) : 0;
          }
          function Ic(n3) {
            if (typeof n3 == "number")
              return n3;
            if (bc(n3))
              return Cn;
            if (fc(n3)) {
              var t3 = typeof n3.valueOf == "function" ? n3.valueOf() : n3;
              n3 = fc(t3) ? t3 + "" : t3;
            }
            if (typeof n3 != "string")
              return n3 === 0 ? n3 : +n3;
            n3 = R(n3);
            var r3 = qt.test(n3);
            return r3 || Kt.test(n3) ? Xr(n3.slice(2), r3 ? 2 : 8) : Pt.test(n3) ? Cn : +n3;
          }
          function Rc(n3) {
            return $u(n3, qc(n3));
          }
          function zc(n3) {
            return n3 ? Mr2(kc(n3), -Wn, Wn) : n3 === 0 ? n3 : 0;
          }
          function Ec(n3) {
            return n3 == null ? "" : vu(n3);
          }
          function Sc(n3, t3) {
            var r3 = gs(n3);
            return t3 == null ? r3 : Cr2(r3, t3);
          }
          function Wc(n3, t3) {
            return v(n3, mi(t3, 3), ue2);
          }
          function Lc(n3, t3) {
            return v(n3, mi(t3, 3), oe2);
          }
          function Cc(n3, t3) {
            return n3 == null ? n3 : bs(n3, mi(t3, 3), qc);
          }
          function Uc(n3, t3) {
            return n3 == null ? n3 : ws(n3, mi(t3, 3), qc);
          }
          function Bc(n3, t3) {
            return n3 && ue2(n3, mi(t3, 3));
          }
          function Tc(n3, t3) {
            return n3 && oe2(n3, mi(t3, 3));
          }
          function $c(n3) {
            return n3 == null ? [] : fe2(n3, Pc(n3));
          }
          function Dc(n3) {
            return n3 == null ? [] : fe2(n3, qc(n3));
          }
          function Mc(n3, t3, r3) {
            var e3 = n3 == null ? X : _e2(n3, t3);
            return e3 === X ? r3 : e3;
          }
          function Fc(n3, t3) {
            return n3 != null && Ri(n3, t3, xe);
          }
          function Nc(n3, t3) {
            return n3 != null && Ri(n3, t3, je);
          }
          function Pc(n3) {
            return Hf(n3) ? Or2(n3) : Me(n3);
          }
          function qc(n3) {
            return Hf(n3) ? Or2(n3, true) : Fe(n3);
          }
          function Zc(n3, t3) {
            var r3 = {};
            return t3 = mi(t3, 3), ue2(n3, function(n4, e3, u2) {
              Br2(r3, t3(n4, e3, u2), n4);
            }), r3;
          }
          function Kc(n3, t3) {
            var r3 = {};
            return t3 = mi(t3, 3), ue2(n3, function(n4, e3, u2) {
              Br2(r3, e3, t3(n4, e3, u2));
            }), r3;
          }
          function Vc(n3, t3) {
            return Gc(n3, Uf(mi(t3)));
          }
          function Gc(n3, t3) {
            if (n3 == null)
              return {};
            var r3 = c(di(n3), function(n4) {
              return [n4];
            });
            return t3 = mi(t3), Ye(n3, r3, function(n4, r4) {
              return t3(n4, r4[0]);
            });
          }
          function Hc(n3, t3, r3) {
            t3 = ku(t3, n3);
            var e3 = -1, u2 = t3.length;
            for (u2 || (u2 = 1, n3 = X); ++e3 < u2; ) {
              var i3 = n3 == null ? X : n3[no(t3[e3])];
              i3 === X && (e3 = u2, i3 = r3), n3 = uc(i3) ? i3.call(n3) : i3;
            }
            return n3;
          }
          function Jc(n3, t3, r3) {
            return n3 == null ? n3 : fu(n3, t3, r3);
          }
          function Yc(n3, t3, r3, e3) {
            return e3 = typeof e3 == "function" ? e3 : X, n3 == null ? n3 : fu(n3, t3, r3, e3);
          }
          function Qc(n3, t3, e3) {
            var u2 = bh(n3), i3 = u2 || mh(n3) || Oh(n3);
            if (t3 = mi(t3, 4), e3 == null) {
              var o3 = n3 && n3.constructor;
              e3 = i3 ? u2 ? new o3() : [] : fc(n3) && uc(o3) ? gs(El(n3)) : {};
            }
            return (i3 ? r2 : ue2)(n3, function(n4, r3, u3) {
              return t3(e3, n4, r3, u3);
            }), e3;
          }
          function Xc(n3, t3) {
            return n3 == null || yu(n3, t3);
          }
          function na(n3, t3, r3) {
            return n3 == null ? n3 : du(n3, t3, Au(r3));
          }
          function ta(n3, t3, r3, e3) {
            return e3 = typeof e3 == "function" ? e3 : X, n3 == null ? n3 : du(n3, t3, Au(r3), e3);
          }
          function ra(n3) {
            return n3 == null ? [] : E(n3, Pc(n3));
          }
          function ea(n3) {
            return n3 == null ? [] : E(n3, qc(n3));
          }
          function ua(n3, t3, r3) {
            return r3 === X && (r3 = t3, t3 = X), r3 !== X && (r3 = Ic(r3), r3 = r3 === r3 ? r3 : 0), t3 !== X && (t3 = Ic(t3), t3 = t3 === t3 ? t3 : 0), Mr2(Ic(n3), t3, r3);
          }
          function ia(n3, t3, r3) {
            return t3 = Ac(t3), r3 === X ? (r3 = t3, t3 = 0) : r3 = Ac(r3), n3 = Ic(n3), Ae(n3, t3, r3);
          }
          function oa(n3, t3, r3) {
            if (r3 && typeof r3 != "boolean" && Ui(n3, t3, r3) && (t3 = r3 = X), r3 === X && (typeof t3 == "boolean" ? (r3 = t3, t3 = X) : typeof n3 == "boolean" && (r3 = n3, n3 = X)), n3 === X && t3 === X ? (n3 = 0, t3 = 1) : (n3 = Ac(n3), t3 === X ? (t3 = n3, n3 = 0) : t3 = Ac(t3)), n3 > t3) {
              var e3 = n3;
              n3 = t3, t3 = e3;
            }
            if (r3 || n3 % 1 || t3 % 1) {
              var u2 = Ql();
              return Hl(n3 + u2 * (t3 - n3 + Qr("1e-" + ((u2 + "").length - 1))), t3);
            }
            return tu(n3, t3);
          }
          function fa(n3) {
            return Qh(Ec(n3).toLowerCase());
          }
          function ca(n3) {
            return n3 = Ec(n3), n3 && n3.replace(Gt, ve).replace(Dr, "");
          }
          function aa(n3, t3, r3) {
            n3 = Ec(n3), t3 = vu(t3);
            var e3 = n3.length;
            r3 = r3 === X ? e3 : Mr2(kc(r3), 0, e3);
            var u2 = r3;
            return r3 -= t3.length, r3 >= 0 && n3.slice(r3, u2) == t3;
          }
          function la(n3) {
            return n3 = Ec(n3), n3 && At.test(n3) ? n3.replace(xt, ge) : n3;
          }
          function sa(n3) {
            return n3 = Ec(n3), n3 && Wt.test(n3) ? n3.replace(St, "\\$&") : n3;
          }
          function ha(n3, t3, r3) {
            n3 = Ec(n3), t3 = kc(t3);
            var e3 = t3 ? V(n3) : 0;
            if (!t3 || e3 >= t3)
              return n3;
            var u2 = (t3 - e3) / 2;
            return ri(Nl(u2), r3) + n3 + ri(Fl(u2), r3);
          }
          function pa(n3, t3, r3) {
            n3 = Ec(n3), t3 = kc(t3);
            var e3 = t3 ? V(n3) : 0;
            return t3 && e3 < t3 ? n3 + ri(t3 - e3, r3) : n3;
          }
          function _a(n3, t3, r3) {
            n3 = Ec(n3), t3 = kc(t3);
            var e3 = t3 ? V(n3) : 0;
            return t3 && e3 < t3 ? ri(t3 - e3, r3) + n3 : n3;
          }
          function va(n3, t3, r3) {
            return r3 || t3 == null ? t3 = 0 : t3 && (t3 = +t3), Yl(Ec(n3).replace(Lt, ""), t3 || 0);
          }
          function ga(n3, t3, r3) {
            return t3 = (r3 ? Ui(n3, t3, r3) : t3 === X) ? 1 : kc(t3), eu(Ec(n3), t3);
          }
          function ya() {
            var n3 = arguments, t3 = Ec(n3[0]);
            return n3.length < 3 ? t3 : t3.replace(n3[1], n3[2]);
          }
          function da(n3, t3, r3) {
            return r3 && typeof r3 != "number" && Ui(n3, t3, r3) && (t3 = r3 = X), (r3 = r3 === X ? Un : r3 >>> 0) ? (n3 = Ec(n3), n3 && (typeof t3 == "string" || t3 != null && !Ah(t3)) && (t3 = vu(t3), !t3 && T(n3)) ? Ou(G(n3), 0, r3) : n3.split(t3, r3)) : [];
          }
          function ba(n3, t3, r3) {
            return n3 = Ec(n3), r3 = r3 == null ? 0 : Mr2(kc(r3), 0, n3.length), t3 = vu(t3), n3.slice(r3, r3 + t3.length) == t3;
          }
          function wa(n3, t3, r3) {
            var e3 = Z2.templateSettings;
            r3 && Ui(n3, t3, r3) && (t3 = X), n3 = Ec(n3), t3 = Sh({}, t3, e3, li);
            var u2, i3, o3 = Sh({}, t3.imports, e3.imports, li), f2 = Pc(o3), c2 = E(o3, f2), a3 = 0, l2 = t3.interpolate || Ht, s3 = "__p += '", h2 = sl((t3.escape || Ht).source + "|" + l2.source + "|" + (l2 === It ? Ft : Ht).source + "|" + (t3.evaluate || Ht).source + "|$", "g"), p3 = "//# sourceURL=" + (bl.call(t3, "sourceURL") ? (t3.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Zr + "]") + "\n";
            n3.replace(h2, function(t4, r4, e4, o4, f3, c3) {
              return e4 || (e4 = o4), s3 += n3.slice(a3, c3).replace(Jt, U), r4 && (u2 = true, s3 += "' +\n__e(" + r4 + ") +\n'"), f3 && (i3 = true, s3 += "';\n" + f3 + ";\n__p += '"), e4 && (s3 += "' +\n((__t = (" + e4 + ")) == null ? '' : __t) +\n'"), a3 = c3 + t4.length, t4;
            }), s3 += "';\n";
            var _2 = bl.call(t3, "variable") && t3.variable;
            if (_2) {
              if (Dt.test(_2))
                throw new fl(un);
            } else
              s3 = "with (obj) {\n" + s3 + "\n}\n";
            s3 = (i3 ? s3.replace(dt, "") : s3).replace(bt, "$1").replace(wt, "$1;"), s3 = "function(" + (_2 || "obj") + ") {\n" + (_2 ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (u2 ? ", __e = _.escape" : "") + (i3 ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + s3 + "return __p\n}";
            var v2 = Xh(function() {
              return cl(f2, p3 + "return " + s3).apply(X, c2);
            });
            if (v2.source = s3, rc(v2))
              throw v2;
            return v2;
          }
          function ma(n3) {
            return Ec(n3).toLowerCase();
          }
          function xa(n3) {
            return Ec(n3).toUpperCase();
          }
          function ja(n3, t3, r3) {
            if (n3 = Ec(n3), n3 && (r3 || t3 === X))
              return R(n3);
            if (!n3 || !(t3 = vu(t3)))
              return n3;
            var e3 = G(n3), u2 = G(t3);
            return Ou(e3, W(e3, u2), L(e3, u2) + 1).join("");
          }
          function Aa(n3, t3, r3) {
            if (n3 = Ec(n3), n3 && (r3 || t3 === X))
              return n3.slice(0, H(n3) + 1);
            if (!n3 || !(t3 = vu(t3)))
              return n3;
            var e3 = G(n3);
            return Ou(e3, 0, L(e3, G(t3)) + 1).join("");
          }
          function ka(n3, t3, r3) {
            if (n3 = Ec(n3), n3 && (r3 || t3 === X))
              return n3.replace(Lt, "");
            if (!n3 || !(t3 = vu(t3)))
              return n3;
            var e3 = G(n3);
            return Ou(e3, W(e3, G(t3))).join("");
          }
          function Oa(n3, t3) {
            var r3 = An, e3 = kn;
            if (fc(t3)) {
              var u2 = "separator" in t3 ? t3.separator : u2;
              r3 = "length" in t3 ? kc(t3.length) : r3, e3 = "omission" in t3 ? vu(t3.omission) : e3;
            }
            n3 = Ec(n3);
            var i3 = n3.length;
            if (T(n3)) {
              var o3 = G(n3);
              i3 = o3.length;
            }
            if (r3 >= i3)
              return n3;
            var f2 = r3 - V(e3);
            if (f2 < 1)
              return e3;
            var c2 = o3 ? Ou(o3, 0, f2).join("") : n3.slice(0, f2);
            if (u2 === X)
              return c2 + e3;
            if (o3 && (f2 += c2.length - f2), Ah(u2)) {
              if (n3.slice(f2).search(u2)) {
                var a3, l2 = c2;
                for (u2.global || (u2 = sl(u2.source, Ec(Nt.exec(u2)) + "g")), u2.lastIndex = 0; a3 = u2.exec(l2); )
                  var s3 = a3.index;
                c2 = c2.slice(0, s3 === X ? f2 : s3);
              }
            } else if (n3.indexOf(vu(u2), f2) != f2) {
              var h2 = c2.lastIndexOf(u2);
              h2 > -1 && (c2 = c2.slice(0, h2));
            }
            return c2 + e3;
          }
          function Ia(n3) {
            return n3 = Ec(n3), n3 && jt.test(n3) ? n3.replace(mt, ye) : n3;
          }
          function Ra(n3, t3, r3) {
            return n3 = Ec(n3), t3 = r3 ? X : t3, t3 === X ? $12(n3) ? Q(n3) : _(n3) : n3.match(t3) || [];
          }
          function za(t3) {
            var r3 = t3 == null ? 0 : t3.length, e3 = mi();
            return t3 = r3 ? c(t3, function(n3) {
              if (typeof n3[1] != "function")
                throw new pl(en);
              return [e3(n3[0]), n3[1]];
            }) : [], uu(function(e4) {
              for (var u2 = -1; ++u2 < r3; ) {
                var i3 = t3[u2];
                if (n2(i3[0], this, e4))
                  return n2(i3[1], this, e4);
              }
            });
          }
          function Ea(n3) {
            return Nr2(Fr2(n3, an));
          }
          function Sa(n3) {
            return function() {
              return n3;
            };
          }
          function Wa(n3, t3) {
            return n3 == null || n3 !== n3 ? t3 : n3;
          }
          function La(n3) {
            return n3;
          }
          function Ca(n3) {
            return De(typeof n3 == "function" ? n3 : Fr2(n3, an));
          }
          function Ua(n3) {
            return qe(Fr2(n3, an));
          }
          function Ba(n3, t3) {
            return Ze(n3, Fr2(t3, an));
          }
          function Ta(n3, t3, e3) {
            var u2 = Pc(t3), i3 = fe2(t3, u2);
            e3 != null || fc(t3) && (i3.length || !u2.length) || (e3 = t3, t3 = n3, n3 = this, i3 = fe2(t3, Pc(t3)));
            var o3 = !(fc(e3) && "chain" in e3 && !e3.chain), f2 = uc(n3);
            return r2(i3, function(r3) {
              var e4 = t3[r3];
              n3[r3] = e4, f2 && (n3.prototype[r3] = function() {
                var t4 = this.__chain__;
                if (o3 || t4) {
                  var r4 = n3(this.__wrapped__);
                  return (r4.__actions__ = Tu(this.__actions__)).push({ func: e4, args: arguments, thisArg: n3 }), r4.__chain__ = t4, r4;
                }
                return e4.apply(n3, a2([this.value()], arguments));
              });
            }), n3;
          }
          function $a() {
            return re._ === this && (re._ = Al), this;
          }
          function Da() {
          }
          function Ma(n3) {
            return n3 = kc(n3), uu(function(t3) {
              return Ge(t3, n3);
            });
          }
          function Fa(n3) {
            return Bi(n3) ? m(no(n3)) : Qe(n3);
          }
          function Na(n3) {
            return function(t3) {
              return n3 == null ? X : _e2(n3, t3);
            };
          }
          function Pa() {
            return [];
          }
          function qa() {
            return false;
          }
          function Za() {
            return {};
          }
          function Ka() {
            return "";
          }
          function Va() {
            return true;
          }
          function Ga(n3, t3) {
            if (n3 = kc(n3), n3 < 1 || n3 > Wn)
              return [];
            var r3 = Un, e3 = Hl(n3, Un);
            t3 = mi(t3), n3 -= Un;
            for (var u2 = O(e3, t3); ++r3 < n3; )
              t3(r3);
            return u2;
          }
          function Ha(n3) {
            return bh(n3) ? c(n3, no) : bc(n3) ? [n3] : Tu(Cs(Ec(n3)));
          }
          function Ja(n3) {
            var t3 = ++wl;
            return Ec(n3) + t3;
          }
          function Ya(n3) {
            return n3 && n3.length ? Yr2(n3, La, me) : X;
          }
          function Qa(n3, t3) {
            return n3 && n3.length ? Yr2(n3, mi(t3, 2), me) : X;
          }
          function Xa(n3) {
            return w(n3, La);
          }
          function nl(n3, t3) {
            return w(n3, mi(t3, 2));
          }
          function tl(n3) {
            return n3 && n3.length ? Yr2(n3, La, Ne) : X;
          }
          function rl(n3, t3) {
            return n3 && n3.length ? Yr2(n3, mi(t3, 2), Ne) : X;
          }
          function el(n3) {
            return n3 && n3.length ? k(n3, La) : 0;
          }
          function ul(n3, t3) {
            return n3 && n3.length ? k(n3, mi(t3, 2)) : 0;
          }
          x2 = x2 == null ? re : be.defaults(re.Object(), x2, be.pick(re, qr));
          var il = x2.Array, ol = x2.Date, fl = x2.Error, cl = x2.Function, al = x2.Math, ll = x2.Object, sl = x2.RegExp, hl = x2.String, pl = x2.TypeError, _l = il.prototype, vl = cl.prototype, gl = ll.prototype, yl = x2["__core-js_shared__"], dl = vl.toString, bl = gl.hasOwnProperty, wl = 0, ml = function() {
            var n3 = /[^.]+$/.exec(yl && yl.keys && yl.keys.IE_PROTO || "");
            return n3 ? "Symbol(src)_1." + n3 : "";
          }(), xl = gl.toString, jl = dl.call(ll), Al = re._, kl = sl("^" + dl.call(bl).replace(St, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Ol = ie ? x2.Buffer : X, Il = x2.Symbol, Rl = x2.Uint8Array, zl = Ol ? Ol.allocUnsafe : X, El = F(ll.getPrototypeOf, ll), Sl = ll.create, Wl = gl.propertyIsEnumerable, Ll = _l.splice, Cl = Il ? Il.isConcatSpreadable : X, Ul = Il ? Il.iterator : X, Bl = Il ? Il.toStringTag : X, Tl = function() {
            try {
              var n3 = Ai(ll, "defineProperty");
              return n3({}, "", {}), n3;
            } catch (n4) {
            }
          }(), $l = x2.clearTimeout !== re.clearTimeout && x2.clearTimeout, Dl = ol && ol.now !== re.Date.now && ol.now, Ml = x2.setTimeout !== re.setTimeout && x2.setTimeout, Fl = al.ceil, Nl = al.floor, Pl = ll.getOwnPropertySymbols, ql = Ol ? Ol.isBuffer : X, Zl = x2.isFinite, Kl = _l.join, Vl = F(ll.keys, ll), Gl = al.max, Hl = al.min, Jl = ol.now, Yl = x2.parseInt, Ql = al.random, Xl = _l.reverse, ns = Ai(x2, "DataView"), ts = Ai(x2, "Map"), rs = Ai(x2, "Promise"), es = Ai(x2, "Set"), us = Ai(x2, "WeakMap"), is = Ai(ll, "create"), os = us && new us(), fs = {}, cs = to(ns), as = to(ts), ls = to(rs), ss = to(es), hs = to(us), ps = Il ? Il.prototype : X, _s = ps ? ps.valueOf : X, vs = ps ? ps.toString : X, gs = function() {
            function n3() {
            }
            return function(t3) {
              if (!fc(t3))
                return {};
              if (Sl)
                return Sl(t3);
              n3.prototype = t3;
              var r3 = new n3();
              return n3.prototype = X, r3;
            };
          }();
          Z2.templateSettings = { escape: kt, evaluate: Ot, interpolate: It, variable: "", imports: { _: Z2 } }, Z2.prototype = J2.prototype, Z2.prototype.constructor = Z2, Y2.prototype = gs(J2.prototype), Y2.prototype.constructor = Y2, Ct2.prototype = gs(J2.prototype), Ct2.prototype.constructor = Ct2, Xt2.prototype.clear = nr2, Xt2.prototype.delete = tr2, Xt2.prototype.get = rr2, Xt2.prototype.has = er2, Xt2.prototype.set = ur2, ir2.prototype.clear = or2, ir2.prototype.delete = fr2, ir2.prototype.get = cr2, ir2.prototype.has = ar2, ir2.prototype.set = lr2, sr2.prototype.clear = hr2, sr2.prototype.delete = pr2, sr2.prototype.get = _r2, sr2.prototype.has = vr2, sr2.prototype.set = gr2, yr2.prototype.add = yr2.prototype.push = dr2, yr2.prototype.has = br2, wr2.prototype.clear = mr2, wr2.prototype.delete = xr2, wr2.prototype.get = jr2, wr2.prototype.has = Ar2, wr2.prototype.set = kr2;
          var ys = Pu(ue2), ds = Pu(oe2, true), bs = qu(), ws = qu(true), ms = os ? function(n3, t3) {
            return os.set(n3, t3), n3;
          } : La, xs = Tl ? function(n3, t3) {
            return Tl(n3, "toString", {
              configurable: true,
              enumerable: false,
              value: Sa(t3),
              writable: true
            });
          } : La, js = uu, As = $l || function(n3) {
            return re.clearTimeout(n3);
          }, ks = es && 1 / P(new es([, -0]))[1] == Sn ? function(n3) {
            return new es(n3);
          } : Da, Os = os ? function(n3) {
            return os.get(n3);
          } : Da, Is = Pl ? function(n3) {
            return n3 == null ? [] : (n3 = ll(n3), i2(Pl(n3), function(t3) {
              return Wl.call(n3, t3);
            }));
          } : Pa, Rs = Pl ? function(n3) {
            for (var t3 = []; n3; )
              a2(t3, Is(n3)), n3 = El(n3);
            return t3;
          } : Pa, zs = we;
          (ns && zs(new ns(new ArrayBuffer(1))) != ct || ts && zs(new ts()) != Gn || rs && zs(rs.resolve()) != Qn || es && zs(new es()) != tt || us && zs(new us()) != it) && (zs = function(n3) {
            var t3 = we(n3), r3 = t3 == Yn ? n3.constructor : X, e3 = r3 ? to(r3) : "";
            if (e3)
              switch (e3) {
                case cs:
                  return ct;
                case as:
                  return Gn;
                case ls:
                  return Qn;
                case ss:
                  return tt;
                case hs:
                  return it;
              }
            return t3;
          });
          var Es = yl ? uc : qa, Ss = Qi(ms), Ws = Ml || function(n3, t3) {
            return re.setTimeout(n3, t3);
          }, Ls = Qi(xs), Cs = Pi(function(n3) {
            var t3 = [];
            return n3.charCodeAt(0) === 46 && t3.push(""), n3.replace(Et, function(n4, r3, e3, u2) {
              t3.push(e3 ? u2.replace(Mt, "$1") : r3 || n4);
            }), t3;
          }), Us = uu(function(n3, t3) {
            return Jf(n3) ? Hr2(n3, ee2(t3, 1, Jf, true)) : [];
          }), Bs = uu(function(n3, t3) {
            var r3 = jo(t3);
            return Jf(r3) && (r3 = X), Jf(n3) ? Hr2(n3, ee2(t3, 1, Jf, true), mi(r3, 2)) : [];
          }), Ts = uu(function(n3, t3) {
            var r3 = jo(t3);
            return Jf(r3) && (r3 = X), Jf(n3) ? Hr2(n3, ee2(t3, 1, Jf, true), X, r3) : [];
          }), $s = uu(function(n3) {
            var t3 = c(n3, ju);
            return t3.length && t3[0] === n3[0] ? ke(t3) : [];
          }), Ds = uu(function(n3) {
            var t3 = jo(n3), r3 = c(n3, ju);
            return t3 === jo(r3) ? t3 = X : r3.pop(), r3.length && r3[0] === n3[0] ? ke(r3, mi(t3, 2)) : [];
          }), Ms = uu(function(n3) {
            var t3 = jo(n3), r3 = c(n3, ju);
            return t3 = typeof t3 == "function" ? t3 : X, t3 && r3.pop(), r3.length && r3[0] === n3[0] ? ke(r3, X, t3) : [];
          }), Fs = uu(Oo), Ns = gi(function(n3, t3) {
            var r3 = n3 == null ? 0 : n3.length, e3 = Tr2(n3, t3);
            return nu(n3, c(t3, function(n4) {
              return Ci(n4, r3) ? +n4 : n4;
            }).sort(Lu)), e3;
          }), Ps = uu(function(n3) {
            return gu(ee2(n3, 1, Jf, true));
          }), qs = uu(function(n3) {
            var t3 = jo(n3);
            return Jf(t3) && (t3 = X), gu(ee2(n3, 1, Jf, true), mi(t3, 2));
          }), Zs = uu(function(n3) {
            var t3 = jo(n3);
            return t3 = typeof t3 == "function" ? t3 : X, gu(ee2(n3, 1, Jf, true), X, t3);
          }), Ks = uu(function(n3, t3) {
            return Jf(n3) ? Hr2(n3, t3) : [];
          }), Vs = uu(function(n3) {
            return mu(i2(n3, Jf));
          }), Gs = uu(function(n3) {
            var t3 = jo(n3);
            return Jf(t3) && (t3 = X), mu(i2(n3, Jf), mi(t3, 2));
          }), Hs = uu(function(n3) {
            var t3 = jo(n3);
            return t3 = typeof t3 == "function" ? t3 : X, mu(i2(n3, Jf), X, t3);
          }), Js = uu(Go), Ys = uu(function(n3) {
            var t3 = n3.length, r3 = t3 > 1 ? n3[t3 - 1] : X;
            return r3 = typeof r3 == "function" ? (n3.pop(), r3) : X, Ho(n3, r3);
          }), Qs = gi(function(n3) {
            var t3 = n3.length, r3 = t3 ? n3[0] : 0, e3 = this.__wrapped__, u2 = function(t4) {
              return Tr2(t4, n3);
            };
            return !(t3 > 1 || this.__actions__.length) && e3 instanceof Ct2 && Ci(r3) ? (e3 = e3.slice(r3, +r3 + (t3 ? 1 : 0)), e3.__actions__.push({ func: nf, args: [u2], thisArg: X }), new Y2(e3, this.__chain__).thru(function(n4) {
              return t3 && !n4.length && n4.push(X), n4;
            })) : this.thru(u2);
          }), Xs = Fu(function(n3, t3, r3) {
            bl.call(n3, r3) ? ++n3[r3] : Br2(n3, r3, 1);
          }), nh = Ju(ho), th = Ju(po), rh = Fu(function(n3, t3, r3) {
            bl.call(n3, r3) ? n3[r3].push(t3) : Br2(n3, r3, [t3]);
          }), eh = uu(function(t3, r3, e3) {
            var u2 = -1, i3 = typeof r3 == "function", o3 = Hf(t3) ? il(t3.length) : [];
            return ys(t3, function(t4) {
              o3[++u2] = i3 ? n2(r3, t4, e3) : Ie(t4, r3, e3);
            }), o3;
          }), uh = Fu(function(n3, t3, r3) {
            Br2(n3, r3, t3);
          }), ih = Fu(function(n3, t3, r3) {
            n3[r3 ? 0 : 1].push(t3);
          }, function() {
            return [[], []];
          }), oh = uu(function(n3, t3) {
            if (n3 == null)
              return [];
            var r3 = t3.length;
            return r3 > 1 && Ui(n3, t3[0], t3[1]) ? t3 = [] : r3 > 2 && Ui(t3[0], t3[1], t3[2]) && (t3 = [t3[0]]), He(n3, ee2(t3, 1), []);
          }), fh = Dl || function() {
            return re.Date.now();
          }, ch = uu(function(n3, t3, r3) {
            var e3 = _n;
            if (r3.length) {
              var u2 = N(r3, wi(ch));
              e3 |= bn;
            }
            return ai(n3, e3, t3, r3, u2);
          }), ah = uu(function(n3, t3, r3) {
            var e3 = _n | vn;
            if (r3.length) {
              var u2 = N(r3, wi(ah));
              e3 |= bn;
            }
            return ai(t3, e3, n3, r3, u2);
          }), lh = uu(function(n3, t3) {
            return Gr2(n3, 1, t3);
          }), sh = uu(function(n3, t3, r3) {
            return Gr2(n3, Ic(t3) || 0, r3);
          });
          Cf.Cache = sr2;
          var hh = js(function(t3, r3) {
            r3 = r3.length == 1 && bh(r3[0]) ? c(r3[0], z(mi())) : c(ee2(r3, 1), z(mi()));
            var e3 = r3.length;
            return uu(function(u2) {
              for (var i3 = -1, o3 = Hl(u2.length, e3); ++i3 < o3; )
                u2[i3] = r3[i3].call(this, u2[i3]);
              return n2(t3, this, u2);
            });
          }), ph = uu(function(n3, t3) {
            return ai(n3, bn, X, t3, N(t3, wi(ph)));
          }), _h = uu(function(n3, t3) {
            return ai(n3, wn, X, t3, N(t3, wi(_h)));
          }), vh = gi(function(n3, t3) {
            return ai(n3, xn, X, X, X, t3);
          }), gh = ii(me), yh = ii(function(n3, t3) {
            return n3 >= t3;
          }), dh = Re(function() {
            return arguments;
          }()) ? Re : function(n3) {
            return cc(n3) && bl.call(n3, "callee") && !Wl.call(n3, "callee");
          }, bh = il.isArray, wh = ce ? z(ce) : ze, mh = ql || qa, xh = ae ? z(ae) : Ee, jh = le ? z(le) : Le, Ah = se ? z(se) : Be, kh = he ? z(he) : Te, Oh = pe ? z(pe) : $e, Ih = ii(Ne), Rh = ii(function(n3, t3) {
            return n3 <= t3;
          }), zh = Nu(function(n3, t3) {
            if (Mi(t3) || Hf(t3))
              return $u(t3, Pc(t3), n3), X;
            for (var r3 in t3)
              bl.call(t3, r3) && Sr2(n3, r3, t3[r3]);
          }), Eh = Nu(function(n3, t3) {
            $u(t3, qc(t3), n3);
          }), Sh = Nu(function(n3, t3, r3, e3) {
            $u(t3, qc(t3), n3, e3);
          }), Wh = Nu(function(n3, t3, r3, e3) {
            $u(t3, Pc(t3), n3, e3);
          }), Lh = gi(Tr2), Ch = uu(function(n3, t3) {
            n3 = ll(n3);
            var r3 = -1, e3 = t3.length, u2 = e3 > 2 ? t3[2] : X;
            for (u2 && Ui(t3[0], t3[1], u2) && (e3 = 1); ++r3 < e3; )
              for (var i3 = t3[r3], o3 = qc(i3), f2 = -1, c2 = o3.length; ++f2 < c2; ) {
                var a3 = o3[f2], l2 = n3[a3];
                (l2 === X || Gf(l2, gl[a3]) && !bl.call(n3, a3)) && (n3[a3] = i3[a3]);
              }
            return n3;
          }), Uh = uu(function(t3) {
            return t3.push(X, si), n2(Mh, X, t3);
          }), Bh = Xu(function(n3, t3, r3) {
            t3 != null && typeof t3.toString != "function" && (t3 = xl.call(t3)), n3[t3] = r3;
          }, Sa(La)), Th = Xu(function(n3, t3, r3) {
            t3 != null && typeof t3.toString != "function" && (t3 = xl.call(t3)), bl.call(n3, t3) ? n3[t3].push(r3) : n3[t3] = [r3];
          }, mi), $h = uu(Ie), Dh = Nu(function(n3, t3, r3) {
            Ke(n3, t3, r3);
          }), Mh = Nu(function(n3, t3, r3, e3) {
            Ke(n3, t3, r3, e3);
          }), Fh = gi(function(n3, t3) {
            var r3 = {};
            if (n3 == null)
              return r3;
            var e3 = false;
            t3 = c(t3, function(t4) {
              return t4 = ku(t4, n3), e3 || (e3 = t4.length > 1), t4;
            }), $u(n3, di(n3), r3), e3 && (r3 = Fr2(r3, an | ln | sn, hi));
            for (var u2 = t3.length; u2--; )
              yu(r3, t3[u2]);
            return r3;
          }), Nh = gi(function(n3, t3) {
            return n3 == null ? {} : Je(n3, t3);
          }), Ph = ci(Pc), qh = ci(qc), Zh = Vu(function(n3, t3, r3) {
            return t3 = t3.toLowerCase(), n3 + (r3 ? fa(t3) : t3);
          }), Kh = Vu(function(n3, t3, r3) {
            return n3 + (r3 ? "-" : "") + t3.toLowerCase();
          }), Vh = Vu(function(n3, t3, r3) {
            return n3 + (r3 ? " " : "") + t3.toLowerCase();
          }), Gh = Ku("toLowerCase"), Hh = Vu(function(n3, t3, r3) {
            return n3 + (r3 ? "_" : "") + t3.toLowerCase();
          }), Jh = Vu(function(n3, t3, r3) {
            return n3 + (r3 ? " " : "") + Qh(t3);
          }), Yh = Vu(function(n3, t3, r3) {
            return n3 + (r3 ? " " : "") + t3.toUpperCase();
          }), Qh = Ku("toUpperCase"), Xh = uu(function(t3, r3) {
            try {
              return n2(t3, X, r3);
            } catch (n3) {
              return rc(n3) ? n3 : new fl(n3);
            }
          }), np = gi(function(n3, t3) {
            return r2(t3, function(t4) {
              t4 = no(t4), Br2(n3, t4, ch(n3[t4], n3));
            }), n3;
          }), tp = Yu(), rp = Yu(true), ep = uu(function(n3, t3) {
            return function(r3) {
              return Ie(r3, n3, t3);
            };
          }), up = uu(function(n3, t3) {
            return function(r3) {
              return Ie(n3, r3, t3);
            };
          }), ip = ti(c), op = ti(u), fp = ti(h), cp = ui(), ap = ui(true), lp = ni(function(n3, t3) {
            return n3 + t3;
          }, 0), sp = fi("ceil"), hp = ni(function(n3, t3) {
            return n3 / t3;
          }, 1), pp = fi("floor"), _p = ni(function(n3, t3) {
            return n3 * t3;
          }, 1), vp = fi("round"), gp = ni(function(n3, t3) {
            return n3 - t3;
          }, 0);
          return Z2.after = If, Z2.ary = Rf, Z2.assign = zh, Z2.assignIn = Eh, Z2.assignInWith = Sh, Z2.assignWith = Wh, Z2.at = Lh, Z2.before = zf, Z2.bind = ch, Z2.bindAll = np, Z2.bindKey = ah, Z2.castArray = Nf, Z2.chain = Qo, Z2.chunk = uo, Z2.compact = io, Z2.concat = oo, Z2.cond = za, Z2.conforms = Ea, Z2.constant = Sa, Z2.countBy = Xs, Z2.create = Sc, Z2.curry = Ef, Z2.curryRight = Sf, Z2.debounce = Wf, Z2.defaults = Ch, Z2.defaultsDeep = Uh, Z2.defer = lh, Z2.delay = sh, Z2.difference = Us, Z2.differenceBy = Bs, Z2.differenceWith = Ts, Z2.drop = fo, Z2.dropRight = co, Z2.dropRightWhile = ao, Z2.dropWhile = lo, Z2.fill = so, Z2.filter = lf, Z2.flatMap = sf, Z2.flatMapDeep = hf, Z2.flatMapDepth = pf, Z2.flatten = _o, Z2.flattenDeep = vo, Z2.flattenDepth = go, Z2.flip = Lf, Z2.flow = tp, Z2.flowRight = rp, Z2.fromPairs = yo, Z2.functions = $c, Z2.functionsIn = Dc, Z2.groupBy = rh, Z2.initial = mo, Z2.intersection = $s, Z2.intersectionBy = Ds, Z2.intersectionWith = Ms, Z2.invert = Bh, Z2.invertBy = Th, Z2.invokeMap = eh, Z2.iteratee = Ca, Z2.keyBy = uh, Z2.keys = Pc, Z2.keysIn = qc, Z2.map = yf, Z2.mapKeys = Zc, Z2.mapValues = Kc, Z2.matches = Ua, Z2.matchesProperty = Ba, Z2.memoize = Cf, Z2.merge = Dh, Z2.mergeWith = Mh, Z2.method = ep, Z2.methodOf = up, Z2.mixin = Ta, Z2.negate = Uf, Z2.nthArg = Ma, Z2.omit = Fh, Z2.omitBy = Vc, Z2.once = Bf, Z2.orderBy = df, Z2.over = ip, Z2.overArgs = hh, Z2.overEvery = op, Z2.overSome = fp, Z2.partial = ph, Z2.partialRight = _h, Z2.partition = ih, Z2.pick = Nh, Z2.pickBy = Gc, Z2.property = Fa, Z2.propertyOf = Na, Z2.pull = Fs, Z2.pullAll = Oo, Z2.pullAllBy = Io, Z2.pullAllWith = Ro, Z2.pullAt = Ns, Z2.range = cp, Z2.rangeRight = ap, Z2.rearg = vh, Z2.reject = mf, Z2.remove = zo, Z2.rest = Tf, Z2.reverse = Eo, Z2.sampleSize = jf, Z2.set = Jc, Z2.setWith = Yc, Z2.shuffle = Af, Z2.slice = So, Z2.sortBy = oh, Z2.sortedUniq = $o, Z2.sortedUniqBy = Do, Z2.split = da, Z2.spread = $f, Z2.tail = Mo, Z2.take = Fo, Z2.takeRight = No, Z2.takeRightWhile = Po, Z2.takeWhile = qo, Z2.tap = Xo, Z2.throttle = Df, Z2.thru = nf, Z2.toArray = jc, Z2.toPairs = Ph, Z2.toPairsIn = qh, Z2.toPath = Ha, Z2.toPlainObject = Rc, Z2.transform = Qc, Z2.unary = Mf, Z2.union = Ps, Z2.unionBy = qs, Z2.unionWith = Zs, Z2.uniq = Zo, Z2.uniqBy = Ko, Z2.uniqWith = Vo, Z2.unset = Xc, Z2.unzip = Go, Z2.unzipWith = Ho, Z2.update = na, Z2.updateWith = ta, Z2.values = ra, Z2.valuesIn = ea, Z2.without = Ks, Z2.words = Ra, Z2.wrap = Ff, Z2.xor = Vs, Z2.xorBy = Gs, Z2.xorWith = Hs, Z2.zip = Js, Z2.zipObject = Jo, Z2.zipObjectDeep = Yo, Z2.zipWith = Ys, Z2.entries = Ph, Z2.entriesIn = qh, Z2.extend = Eh, Z2.extendWith = Sh, Ta(Z2, Z2), Z2.add = lp, Z2.attempt = Xh, Z2.camelCase = Zh, Z2.capitalize = fa, Z2.ceil = sp, Z2.clamp = ua, Z2.clone = Pf, Z2.cloneDeep = Zf, Z2.cloneDeepWith = Kf, Z2.cloneWith = qf, Z2.conformsTo = Vf, Z2.deburr = ca, Z2.defaultTo = Wa, Z2.divide = hp, Z2.endsWith = aa, Z2.eq = Gf, Z2.escape = la, Z2.escapeRegExp = sa, Z2.every = af, Z2.find = nh, Z2.findIndex = ho, Z2.findKey = Wc, Z2.findLast = th, Z2.findLastIndex = po, Z2.findLastKey = Lc, Z2.floor = pp, Z2.forEach = _f, Z2.forEachRight = vf, Z2.forIn = Cc, Z2.forInRight = Uc, Z2.forOwn = Bc, Z2.forOwnRight = Tc, Z2.get = Mc, Z2.gt = gh, Z2.gte = yh, Z2.has = Fc, Z2.hasIn = Nc, Z2.head = bo, Z2.identity = La, Z2.includes = gf, Z2.indexOf = wo, Z2.inRange = ia, Z2.invoke = $h, Z2.isArguments = dh, Z2.isArray = bh, Z2.isArrayBuffer = wh, Z2.isArrayLike = Hf, Z2.isArrayLikeObject = Jf, Z2.isBoolean = Yf, Z2.isBuffer = mh, Z2.isDate = xh, Z2.isElement = Qf, Z2.isEmpty = Xf, Z2.isEqual = nc, Z2.isEqualWith = tc, Z2.isError = rc, Z2.isFinite = ec, Z2.isFunction = uc, Z2.isInteger = ic, Z2.isLength = oc, Z2.isMap = jh, Z2.isMatch = ac, Z2.isMatchWith = lc, Z2.isNaN = sc, Z2.isNative = hc, Z2.isNil = _c, Z2.isNull = pc, Z2.isNumber = vc, Z2.isObject = fc, Z2.isObjectLike = cc, Z2.isPlainObject = gc, Z2.isRegExp = Ah, Z2.isSafeInteger = yc, Z2.isSet = kh, Z2.isString = dc, Z2.isSymbol = bc, Z2.isTypedArray = Oh, Z2.isUndefined = wc, Z2.isWeakMap = mc, Z2.isWeakSet = xc, Z2.join = xo, Z2.kebabCase = Kh, Z2.last = jo, Z2.lastIndexOf = Ao, Z2.lowerCase = Vh, Z2.lowerFirst = Gh, Z2.lt = Ih, Z2.lte = Rh, Z2.max = Ya, Z2.maxBy = Qa, Z2.mean = Xa, Z2.meanBy = nl, Z2.min = tl, Z2.minBy = rl, Z2.stubArray = Pa, Z2.stubFalse = qa, Z2.stubObject = Za, Z2.stubString = Ka, Z2.stubTrue = Va, Z2.multiply = _p, Z2.nth = ko, Z2.noConflict = $a, Z2.noop = Da, Z2.now = fh, Z2.pad = ha, Z2.padEnd = pa, Z2.padStart = _a, Z2.parseInt = va, Z2.random = oa, Z2.reduce = bf, Z2.reduceRight = wf, Z2.repeat = ga, Z2.replace = ya, Z2.result = Hc, Z2.round = vp, Z2.runInContext = p2, Z2.sample = xf, Z2.size = kf, Z2.snakeCase = Hh, Z2.some = Of, Z2.sortedIndex = Wo, Z2.sortedIndexBy = Lo, Z2.sortedIndexOf = Co, Z2.sortedLastIndex = Uo, Z2.sortedLastIndexBy = Bo, Z2.sortedLastIndexOf = To, Z2.startCase = Jh, Z2.startsWith = ba, Z2.subtract = gp, Z2.sum = el, Z2.sumBy = ul, Z2.template = wa, Z2.times = Ga, Z2.toFinite = Ac, Z2.toInteger = kc, Z2.toLength = Oc, Z2.toLower = ma, Z2.toNumber = Ic, Z2.toSafeInteger = zc, Z2.toString = Ec, Z2.toUpper = xa, Z2.trim = ja, Z2.trimEnd = Aa, Z2.trimStart = ka, Z2.truncate = Oa, Z2.unescape = Ia, Z2.uniqueId = Ja, Z2.upperCase = Yh, Z2.upperFirst = Qh, Z2.each = _f, Z2.eachRight = vf, Z2.first = bo, Ta(Z2, function() {
            var n3 = {};
            return ue2(Z2, function(t3, r3) {
              bl.call(Z2.prototype, r3) || (n3[r3] = t3);
            }), n3;
          }(), { chain: false }), Z2.VERSION = nn, r2(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n3) {
            Z2[n3].placeholder = Z2;
          }), r2(["drop", "take"], function(n3, t3) {
            Ct2.prototype[n3] = function(r3) {
              r3 = r3 === X ? 1 : Gl(kc(r3), 0);
              var e3 = this.__filtered__ && !t3 ? new Ct2(this) : this.clone();
              return e3.__filtered__ ? e3.__takeCount__ = Hl(r3, e3.__takeCount__) : e3.__views__.push({ size: Hl(r3, Un), type: n3 + (e3.__dir__ < 0 ? "Right" : "") }), e3;
            }, Ct2.prototype[n3 + "Right"] = function(t4) {
              return this.reverse()[n3](t4).reverse();
            };
          }), r2(["filter", "map", "takeWhile"], function(n3, t3) {
            var r3 = t3 + 1, e3 = r3 == Rn || r3 == En;
            Ct2.prototype[n3] = function(n4) {
              var t4 = this.clone();
              return t4.__iteratees__.push({ iteratee: mi(n4, 3), type: r3 }), t4.__filtered__ = t4.__filtered__ || e3, t4;
            };
          }), r2(["head", "last"], function(n3, t3) {
            var r3 = "take" + (t3 ? "Right" : "");
            Ct2.prototype[n3] = function() {
              return this[r3](1).value()[0];
            };
          }), r2(["initial", "tail"], function(n3, t3) {
            var r3 = "drop" + (t3 ? "" : "Right");
            Ct2.prototype[n3] = function() {
              return this.__filtered__ ? new Ct2(this) : this[r3](1);
            };
          }), Ct2.prototype.compact = function() {
            return this.filter(La);
          }, Ct2.prototype.find = function(n3) {
            return this.filter(n3).head();
          }, Ct2.prototype.findLast = function(n3) {
            return this.reverse().find(n3);
          }, Ct2.prototype.invokeMap = uu(function(n3, t3) {
            return typeof n3 == "function" ? new Ct2(this) : this.map(function(r3) {
              return Ie(r3, n3, t3);
            });
          }), Ct2.prototype.reject = function(n3) {
            return this.filter(Uf(mi(n3)));
          }, Ct2.prototype.slice = function(n3, t3) {
            n3 = kc(n3);
            var r3 = this;
            return r3.__filtered__ && (n3 > 0 || t3 < 0) ? new Ct2(r3) : (n3 < 0 ? r3 = r3.takeRight(-n3) : n3 && (r3 = r3.drop(n3)), t3 !== X && (t3 = kc(t3), r3 = t3 < 0 ? r3.dropRight(-t3) : r3.take(t3 - n3)), r3);
          }, Ct2.prototype.takeRightWhile = function(n3) {
            return this.reverse().takeWhile(n3).reverse();
          }, Ct2.prototype.toArray = function() {
            return this.take(Un);
          }, ue2(Ct2.prototype, function(n3, t3) {
            var r3 = /^(?:filter|find|map|reject)|While$/.test(t3), e3 = /^(?:head|last)$/.test(t3), u2 = Z2[e3 ? "take" + (t3 == "last" ? "Right" : "") : t3], i3 = e3 || /^find/.test(t3);
            u2 && (Z2.prototype[t3] = function() {
              var t4 = this.__wrapped__, o3 = e3 ? [1] : arguments, f2 = t4 instanceof Ct2, c2 = o3[0], l2 = f2 || bh(t4), s3 = function(n4) {
                var t5 = u2.apply(Z2, a2([n4], o3));
                return e3 && h2 ? t5[0] : t5;
              };
              l2 && r3 && typeof c2 == "function" && c2.length != 1 && (f2 = l2 = false);
              var h2 = this.__chain__, p3 = !!this.__actions__.length, _2 = i3 && !h2, v2 = f2 && !p3;
              if (!i3 && l2) {
                t4 = v2 ? t4 : new Ct2(this);
                var g2 = n3.apply(t4, o3);
                return g2.__actions__.push({ func: nf, args: [s3], thisArg: X }), new Y2(g2, h2);
              }
              return _2 && v2 ? n3.apply(this, o3) : (g2 = this.thru(s3), _2 ? e3 ? g2.value()[0] : g2.value() : g2);
            });
          }), r2(["pop", "push", "shift", "sort", "splice", "unshift"], function(n3) {
            var t3 = _l[n3], r3 = /^(?:push|sort|unshift)$/.test(n3) ? "tap" : "thru", e3 = /^(?:pop|shift)$/.test(n3);
            Z2.prototype[n3] = function() {
              var n4 = arguments;
              if (e3 && !this.__chain__) {
                var u2 = this.value();
                return t3.apply(bh(u2) ? u2 : [], n4);
              }
              return this[r3](function(r4) {
                return t3.apply(bh(r4) ? r4 : [], n4);
              });
            };
          }), ue2(Ct2.prototype, function(n3, t3) {
            var r3 = Z2[t3];
            if (r3) {
              var e3 = r3.name + "";
              bl.call(fs, e3) || (fs[e3] = []), fs[e3].push({ name: t3, func: r3 });
            }
          }), fs[Qu(X, vn).name] = [{ name: "wrapper", func: X }], Ct2.prototype.clone = $t2, Ct2.prototype.reverse = Yt2, Ct2.prototype.value = Qt2, Z2.prototype.at = Qs, Z2.prototype.chain = tf, Z2.prototype.commit = rf, Z2.prototype.next = ef, Z2.prototype.plant = of, Z2.prototype.reverse = ff, Z2.prototype.toJSON = Z2.prototype.valueOf = Z2.prototype.value = cf, Z2.prototype.first = Z2.prototype.head, Ul && (Z2.prototype[Ul] = uf), Z2;
        }, be = de();
        typeof define == "function" && typeof define.amd == "object" && define.amd ? (re._ = be, define(function() {
          return be;
        })) : ue ? ((ue.exports = be)._ = be, ee._ = be) : re._ = be;
      }).call(exports);
    }
  });

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\libs\darkreader.min.js
  var require_darkreader_min = __commonJS({
    "ns-hugo:C:\\Users\\jack\\AppData\\Roaming\\site\\themes\\virgo\\assets\\js\\libs\\darkreader.min.js"(exports, module) {
      !function(e2, t2) {
        typeof exports == "object" && typeof module != "undefined" ? t2(exports) : typeof define == "function" && define.amd ? define(["exports"], t2) : t2((e2 = typeof globalThis != "undefined" ? globalThis : e2 || self).DarkReader = {});
      }(exports, function(e2) {
        "use strict";
        var t2 = function() {
          return (t2 = Object.assign || function(e3) {
            for (var t3, r3 = 1, n3 = arguments.length; r3 < n3; r3++)
              for (var o3 in t3 = arguments[r3])
                Object.prototype.hasOwnProperty.call(t3, o3) && (e3[o3] = t3[o3]);
            return e3;
          }).apply(this, arguments);
        };
        function r2(e3, t3, r3, n3) {
          return new (r3 || (r3 = Promise))(function(o3, a3) {
            function i3(e4) {
              try {
                s3(n3.next(e4));
              } catch (e5) {
                a3(e5);
              }
            }
            function u2(e4) {
              try {
                s3(n3.throw(e4));
              } catch (e5) {
                a3(e5);
              }
            }
            function s3(e4) {
              var t4;
              e4.done ? o3(e4.value) : (t4 = e4.value, t4 instanceof r3 ? t4 : new r3(function(e5) {
                e5(t4);
              })).then(i3, u2);
            }
            s3((n3 = n3.apply(e3, t3 || [])).next());
          });
        }
        function n2(e3, t3) {
          var r3, n3, o3, a3, i3 = { label: 0, sent: function() {
            if (1 & o3[0])
              throw o3[1];
            return o3[1];
          }, trys: [], ops: [] };
          return a3 = { next: u2(0), throw: u2(1), return: u2(2) }, typeof Symbol == "function" && (a3[Symbol.iterator] = function() {
            return this;
          }), a3;
          function u2(a4) {
            return function(u3) {
              return function(a5) {
                if (r3)
                  throw new TypeError("Generator is already executing.");
                for (; i3; )
                  try {
                    if (r3 = 1, n3 && (o3 = 2 & a5[0] ? n3.return : a5[0] ? n3.throw || ((o3 = n3.return) && o3.call(n3), 0) : n3.next) && !(o3 = o3.call(n3, a5[1])).done)
                      return o3;
                    switch (n3 = 0, o3 && (a5 = [2 & a5[0], o3.value]), a5[0]) {
                      case 0:
                      case 1:
                        o3 = a5;
                        break;
                      case 4:
                        return i3.label++, { value: a5[1], done: false };
                      case 5:
                        i3.label++, n3 = a5[1], a5 = [0];
                        continue;
                      case 7:
                        a5 = i3.ops.pop(), i3.trys.pop();
                        continue;
                      default:
                        if (!(o3 = i3.trys, (o3 = o3.length > 0 && o3[o3.length - 1]) || a5[0] !== 6 && a5[0] !== 2)) {
                          i3 = 0;
                          continue;
                        }
                        if (a5[0] === 3 && (!o3 || a5[1] > o3[0] && a5[1] < o3[3])) {
                          i3.label = a5[1];
                          break;
                        }
                        if (a5[0] === 6 && i3.label < o3[1]) {
                          i3.label = o3[1], o3 = a5;
                          break;
                        }
                        if (o3 && i3.label < o3[2]) {
                          i3.label = o3[2], i3.ops.push(a5);
                          break;
                        }
                        o3[2] && i3.ops.pop(), i3.trys.pop();
                        continue;
                    }
                    a5 = t3.call(e3, i3);
                  } catch (e4) {
                    a5 = [6, e4], n3 = 0;
                  } finally {
                    r3 = o3 = 0;
                  }
                if (5 & a5[0])
                  throw a5[1];
                return { value: a5[0] ? a5[1] : void 0, done: true };
              }([a4, u3]);
            };
          }
        }
        function o2(e3) {
          var t3 = typeof Symbol == "function" && Symbol.iterator, r3 = t3 && e3[t3], n3 = 0;
          if (r3)
            return r3.call(e3);
          if (e3 && typeof e3.length == "number")
            return { next: function() {
              return e3 && n3 >= e3.length && (e3 = void 0), { value: e3 && e3[n3++], done: !e3 };
            } };
          throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function a2(e3, t3) {
          var r3 = typeof Symbol == "function" && e3[Symbol.iterator];
          if (!r3)
            return e3;
          var n3, o3, a3 = r3.call(e3), i3 = [];
          try {
            for (; (t3 === void 0 || t3-- > 0) && !(n3 = a3.next()).done; )
              i3.push(n3.value);
          } catch (e4) {
            o3 = { error: e4 };
          } finally {
            try {
              n3 && !n3.done && (r3 = a3.return) && r3.call(a3);
            } finally {
              if (o3)
                throw o3.error;
            }
          }
          return i3;
        }
        function i2(e3, t3, r3) {
          if (r3 || arguments.length === 2)
            for (var n3, o3 = 0, a3 = t3.length; o3 < a3; o3++)
              !n3 && o3 in t3 || (n3 || (n3 = Array.prototype.slice.call(t3, 0, o3)), n3[o3] = t3[o3]);
          return e3.concat(n3 || t3);
        }
        var u = typeof navigator == "undefined" ? "some useragent" : navigator.userAgent.toLowerCase(), s2 = typeof navigator == "undefined" ? "some platform" : navigator.platform.toLowerCase(), c = u.includes("chrome") || u.includes("chromium"), l = u.includes("thunderbird"), d = u.includes("firefox") || l;
        u.includes("vivaldi"), u.includes("yabrowser"), u.includes("opr") || u.includes("opera"), u.includes("edg");
        var f = u.includes("safari") && !c, h = s2.startsWith("win"), p = s2.startsWith("mac");
        u.includes("mobile");
        var v, m = typeof ShadowRoot == "function", g = typeof MediaQueryList == "function" && typeof MediaQueryList.prototype.addEventListener == "function";
        (v = u.match(/chrom[e|ium]\/([^ ]+)/)) && v[1] && v[1];
        var b = function() {
          try {
            return document.querySelector(":defined"), true;
          } catch (e3) {
            return false;
          }
        }();
        function y(e3, t3, o3) {
          return r2(this, void 0, void 0, function() {
            var r3;
            return n2(this, function(n3) {
              switch (n3.label) {
                case 0:
                  return [4, fetch(e3, { cache: "force-cache", credentials: "omit", referrer: o3 })];
                case 1:
                  if (r3 = n3.sent(), d && t3 === "text/css" && e3.startsWith("moz-extension://") && e3.endsWith(".css"))
                    return [2, r3];
                  if (t3 && !r3.headers.get("Content-Type").startsWith(t3))
                    throw new Error("Mime type mismatch when loading " + e3);
                  if (!r3.ok)
                    throw new Error("Unable to load " + e3 + " " + r3.status + " " + r3.statusText);
                  return [2, r3];
              }
            });
          });
        }
        function w(e3, t3) {
          return r2(this, void 0, void 0, function() {
            return n2(this, function(r3) {
              switch (r3.label) {
                case 0:
                  return [4, y(e3, t3)];
                case 1:
                  return [4, k(r3.sent())];
                case 2:
                  return [2, r3.sent()];
              }
            });
          });
        }
        function k(e3) {
          return r2(this, void 0, void 0, function() {
            var t3;
            return n2(this, function(r3) {
              switch (r3.label) {
                case 0:
                  return [4, e3.blob()];
                case 1:
                  return t3 = r3.sent(), [4, new Promise(function(e4) {
                    var r4 = new FileReader();
                    r4.onloadend = function() {
                      return e4(r4.result);
                    }, r4.readAsDataURL(t3);
                  })];
                case 2:
                  return [2, r3.sent()];
              }
            });
          });
        }
        var S = function(e3) {
          return r2(void 0, void 0, void 0, function() {
            return n2(this, function(t3) {
              return [2, Promise.reject(new Error(["Embedded Dark Reader cannot access a cross-origin resource", e3, "Overview your URLs and CORS policies or use", "`DarkReader.setFetchMethod(fetch: (url) => Promise<Response>))`.", "See if using `DarkReader.setFetchMethod(window.fetch)`", "before `DarkReader.enable()` works."].join(" ")))];
            });
          });
        }, _ = S;
        function E(e3) {
          return r2(this, void 0, void 0, function() {
            return n2(this, function(t3) {
              switch (t3.label) {
                case 0:
                  return [4, _(e3)];
                case 1:
                  return [2, t3.sent()];
              }
            });
          });
        }
        window.chrome || (window.chrome = {}), chrome.runtime || (chrome.runtime = {});
        var x = /* @__PURE__ */ new Set();
        function C() {
          for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
            e3[t3] = arguments[t3];
          return r2(this, void 0, void 0, function() {
            var t4, r3, o3, a3, i3, u2, s3;
            return n2(this, function(n3) {
              switch (n3.label) {
                case 0:
                  if (!e3[0] || e3[0].type !== "fetch")
                    return [3, 8];
                  t4 = e3[0].id, n3.label = 1;
                case 1:
                  return n3.trys.push([1, 7, , 8]), r3 = e3[0].data, o3 = r3.url, a3 = r3.responseType, [4, E(o3)];
                case 2:
                  return i3 = n3.sent(), a3 !== "data-url" ? [3, 4] : [4, k(i3)];
                case 3:
                  return u2 = n3.sent(), [3, 6];
                case 4:
                  return [4, i3.text()];
                case 5:
                  u2 = n3.sent(), n3.label = 6;
                case 6:
                  return x.forEach(function(e4) {
                    return e4({ type: "fetch-response", data: u2, error: null, id: t4 });
                  }), [3, 8];
                case 7:
                  return s3 = n3.sent(), console.error(s3), x.forEach(function(e4) {
                    return e4({ type: "fetch-response", data: null, err: s3, id: t4 });
                  }), [3, 8];
                case 8:
                  return [2];
              }
            });
          });
        }
        function V(e3) {
          x.add(e3);
        }
        if (typeof chrome.runtime.sendMessage == "function") {
          var R = chrome.runtime.sendMessage;
          chrome.runtime.sendMessage = function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
              e3[t3] = arguments[t3];
            C.apply(void 0, i2([], a2(e3))), R.apply(chrome.runtime, e3);
          };
        } else
          chrome.runtime.sendMessage = C;
        if (chrome.runtime.onMessage || (chrome.runtime.onMessage = {}), typeof chrome.runtime.onMessage.addListener == "function") {
          var M = chrome.runtime.onMessage.addListener;
          chrome.runtime.onMessage.addListener = function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
              e3[t3] = arguments[t3];
            V.apply(void 0, i2([], a2(e3))), M.apply(chrome.runtime.onMessage, e3);
          };
        } else
          chrome.runtime.onMessage.addListener = V;
        var T = "dynamicTheme", A = { background: "#181a1b", text: "#e8e6e3" }, L = { background: "#dcdad7", text: "#181a1b" }, P = { mode: 1, brightness: 100, contrast: 100, grayscale: 0, sepia: 0, useFont: false, fontFamily: p ? "Helvetica Neue" : h ? "Segoe UI" : "Open Sans", textStroke: 0, engine: T, stylesheet: "", darkSchemeBackgroundColor: A.background, darkSchemeTextColor: A.text, lightSchemeBackgroundColor: L.background, lightSchemeTextColor: L.text, scrollbarColor: p ? "" : "auto", selectionColor: "auto", styleSystemControls: true };
        function j(e3, t3) {
          var r3, n3;
          if (function(e4) {
            return e4.length != null;
          }(e3))
            for (var a3 = 0, i3 = e3.length; a3 < i3; a3++)
              t3(e3[a3]);
          else
            try {
              for (var u2 = o2(e3), s3 = u2.next(); !s3.done; s3 = u2.next()) {
                t3(s3.value);
              }
            } catch (e4) {
              r3 = { error: e4 };
            } finally {
              try {
                s3 && !s3.done && (n3 = u2.return) && n3.call(u2);
              } finally {
                if (r3)
                  throw r3.error;
              }
            }
        }
        function O(e3, t3) {
          j(t3, function(t4) {
            return e3.push(t4);
          });
        }
        function D() {
          for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
            e3[t3] = arguments[t3];
        }
        function F() {
          for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
            e3[t3] = arguments[t3];
        }
        function q(e3) {
          var t3, r3 = false, n3 = null;
          return Object.assign(function() {
            for (var o3 = [], u2 = 0; u2 < arguments.length; u2++)
              o3[u2] = arguments[u2];
            t3 = o3, n3 ? r3 = true : (e3.apply(void 0, i2([], a2(t3))), n3 = requestAnimationFrame(function() {
              n3 = null, r3 && (e3.apply(void 0, i2([], a2(t3))), r3 = false);
            }));
          }, { cancel: function() {
            cancelAnimationFrame(n3), r3 = false, n3 = null;
          } });
        }
        function N(e3) {
          var t3 = 0;
          return e3.seconds && (t3 += 1e3 * e3.seconds), e3.minutes && (t3 += 60 * e3.minutes * 1e3), e3.hours && (t3 += 60 * e3.hours * 60 * 1e3), e3.days && (t3 += 24 * e3.days * 60 * 60 * 1e3), t3;
        }
        function B(e3) {
          e3 && e3.parentNode && e3.parentNode.removeChild(e3);
        }
        function W(e3, t3, r3) {
          r3 === void 0 && (r3 = Function.prototype);
          var n3 = N({ seconds: 2 }), o3 = N({ seconds: 10 }), a3 = e3.previousSibling, i3 = e3.parentNode;
          if (!i3)
            throw new Error("Unable to watch for node position: parent element not found");
          if (t3 === "prev-sibling" && !a3)
            throw new Error("Unable to watch for node position: there is no previous sibling");
          var u2 = 0, s3 = null, c2 = null, l2 = q(function() {
            if (!c2) {
              u2++;
              var f3 = Date.now();
              if (s3 == null)
                s3 = f3;
              else if (u2 >= 10) {
                if (f3 - s3 < o3)
                  return F("Node position watcher paused: retry in " + n3 + "ms", e3, a3), void (c2 = setTimeout(function() {
                    s3 = null, u2 = 0, c2 = null, l2();
                  }, n3));
                s3 = f3, u2 = 1;
              }
              if (t3 === "parent" && a3 && a3.parentNode !== i3)
                return F("Unable to restore node position: sibling parent changed", e3, a3, i3), void h2();
              if (t3 === "prev-sibling") {
                if (a3.parentNode == null)
                  return F("Unable to restore node position: sibling was removed", e3, a3, i3), void h2();
                a3.parentNode !== i3 && (F("Style was moved to another parent", e3, a3, i3), p2(a3.parentNode));
              }
              F("Restoring node position", e3, a3, i3), i3.insertBefore(e3, a3 ? a3.nextSibling : i3.firstChild), d2.takeRecords(), r3 && r3();
            }
          }), d2 = new MutationObserver(function() {
            (t3 === "parent" && e3.parentNode !== i3 || t3 === "prev-sibling" && e3.previousSibling !== a3) && l2();
          }), f2 = function() {
            d2.observe(i3, { childList: true });
          }, h2 = function() {
            clearTimeout(c2), d2.disconnect(), l2.cancel();
          }, p2 = function(e4) {
            i3 = e4, h2(), f2();
          };
          return f2(), { run: f2, stop: h2, skip: function() {
            d2.takeRecords();
          } };
        }
        function I(e3, t3) {
          if (e3 != null)
            for (var r3 = document.createTreeWalker(e3, NodeFilter.SHOW_ELEMENT, { acceptNode: function(e4) {
              return e4.shadowRoot == null ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
            } }), n3 = e3.shadowRoot ? r3.currentNode : r3.nextNode(); n3 != null; n3 = r3.nextNode())
              t3(n3), I(n3.shadowRoot, t3);
        }
        function U() {
          return document.readyState === "complete" || document.readyState === "interactive";
        }
        var $12 = /* @__PURE__ */ new Set();
        function z(e3) {
          $12.add(e3);
        }
        function H(e3) {
          $12.delete(e3);
        }
        function G() {
          return document.readyState === "complete";
        }
        var Q = /* @__PURE__ */ new Set();
        function K(e3) {
          Q.add(e3);
        }
        if (!U()) {
          var J = function() {
            U() && ($12.forEach(function(e3) {
              return e3();
            }), $12.clear(), G() && (document.removeEventListener("readystatechange", J), Q.forEach(function(e3) {
              return e3();
            }), Q.clear()));
          };
          document.addEventListener("readystatechange", J);
        }
        var X, Y = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new WeakMap();
        function ee(e3, t3) {
          var r3, n3, o3;
          if (Y.has(e3))
            r3 = Y.get(e3), n3 = Z.get(r3);
          else {
            var a3 = false, i3 = false;
            (r3 = new MutationObserver(function(t4) {
              if (function(e4) {
                if (e4.length > 1e3)
                  return true;
                for (var t5 = 0, r5 = 0; r5 < e4.length; r5++)
                  if ((t5 += e4[r5].addedNodes.length) > 1e3)
                    return true;
                return false;
              }(t4))
                !a3 || U() ? n3.forEach(function(t5) {
                  return (0, t5.onHugeMutations)(e3);
                }) : i3 || (z(o3 = function() {
                  return n3.forEach(function(t5) {
                    return (0, t5.onHugeMutations)(e3);
                  });
                }), i3 = true), a3 = true;
              else {
                var r4 = function(e4) {
                  var t5 = /* @__PURE__ */ new Set(), r5 = /* @__PURE__ */ new Set(), n4 = /* @__PURE__ */ new Set();
                  e4.forEach(function(e5) {
                    j(e5.addedNodes, function(e6) {
                      e6 instanceof Element && e6.isConnected && t5.add(e6);
                    }), j(e5.removedNodes, function(e6) {
                      e6 instanceof Element && (e6.isConnected ? n4.add(e6) : r5.add(e6));
                    });
                  }), n4.forEach(function(e5) {
                    return t5.delete(e5);
                  });
                  var o4 = [], a4 = [];
                  return t5.forEach(function(e5) {
                    t5.has(e5.parentElement) && o4.push(e5);
                  }), r5.forEach(function(e5) {
                    r5.has(e5.parentElement) && a4.push(e5);
                  }), o4.forEach(function(e5) {
                    return t5.delete(e5);
                  }), a4.forEach(function(e5) {
                    return r5.delete(e5);
                  }), { additions: t5, moves: n4, deletions: r5 };
                }(t4);
                n3.forEach(function(e4) {
                  return (0, e4.onMinorMutations)(r4);
                });
              }
            })).observe(e3, { childList: true, subtree: true }), Y.set(e3, r3), n3 = /* @__PURE__ */ new Set(), Z.set(r3, n3);
          }
          return n3.add(t3), { disconnect: function() {
            n3.delete(t3), o3 && H(o3), n3.size === 0 && (r3.disconnect(), Z.delete(r3), Y.delete(e3));
          } };
        }
        var te = /* @__PURE__ */ new Map();
        function re(e3) {
          return X || (X = document.createElement("a")), X.href = e3, X.href;
        }
        function ne(e3, t3) {
          t3 === void 0 && (t3 = null);
          var r3 = e3 + (t3 ? ";" + t3 : "");
          if (te.has(r3))
            return te.get(r3);
          if (t3) {
            var n3 = new URL(e3, re(t3));
            return te.set(r3, n3), n3;
          }
          var o3 = new URL(re(e3));
          return te.set(e3, o3), o3;
        }
        function oe(e3, t3) {
          if (t3.match(/^data\\?\:/))
            return t3;
          var r3 = ne(e3);
          return ne(t3, r3.href).href;
        }
        function ae(e3, t3, r3) {
          j(e3, function(e4) {
            if (e4.selectorText)
              t3(e4);
            else if (e4.href)
              try {
                ae(e4.styleSheet.cssRules, t3, r3);
              } catch (e5) {
                D("Found a non-loaded link."), r3 && r3();
              }
            else if (e4.media) {
              var n3 = Array.from(e4.media), o3 = n3.some(function(e5) {
                return e5.startsWith("screen") || e5.startsWith("all");
              }), a3 = n3.some(function(e5) {
                return e5.startsWith("print") || e5.startsWith("speech");
              });
              !o3 && a3 || ae(e4.cssRules, t3, r3);
            } else
              e4.conditionText ? CSS.supports(e4.conditionText) && ae(e4.cssRules, t3, r3) : F("CSSRule type not supported", e4);
          });
        }
        var ie = ["background", "border", "border-color", "border-bottom", "border-left", "border-right", "border-top", "outline", "outline-color"], ue = f ? ie.map(function(e3) {
          return [e3, new RegExp(e3 + ":\\s*(.*?)\\s*;")];
        }) : null;
        function se(e3, t3) {
          j(e3, function(r3) {
            var n3 = e3.getPropertyValue(r3).trim();
            n3 && t3(r3, n3);
          }), f && e3.cssText.includes("var(") ? ue.forEach(function(r3) {
            var n3 = a2(r3, 2), o3 = n3[0], i3 = n3[1], u2 = e3.cssText.match(i3);
            if (u2 && u2[1]) {
              var s3 = u2[1].trim();
              t3(o3, s3);
            }
          }) : ie.forEach(function(r3) {
            var n3 = e3.getPropertyValue(r3);
            n3 && n3.includes("var(") && t3(r3, n3);
          });
        }
        var ce = /url\((('.+?')|(".+?")|([^\)]*?))\)/g, le = /@import\s*(url\()?(('.+?')|(".+?")|([^\)]*?))\)?;?/g;
        function de(e3) {
          return e3.replace(/^url\((.*)\)$/, "$1").replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
        }
        function fe(e3) {
          var t3 = ne(e3);
          return "" + t3.origin + t3.pathname.replace(/\?.*$/, "").replace(/(\/)([^\/]+)$/i, "$1");
        }
        var he = /\/\*[\s\S]*?\*\//g;
        var pe = /@font-face\s*{[^}]*}/g;
        function ve(e3) {
          var t3 = e3.h, r3 = e3.s, n3 = e3.l, o3 = e3.a, i3 = o3 === void 0 ? 1 : o3;
          if (r3 === 0) {
            var u2 = a2([n3, n3, n3].map(function(e4) {
              return Math.round(255 * e4);
            }), 3), s3 = u2[0], c2 = u2[1];
            return { r: s3, g: u2[2], b: c2, a: i3 };
          }
          var l2 = (1 - Math.abs(2 * n3 - 1)) * r3, d2 = l2 * (1 - Math.abs(t3 / 60 % 2 - 1)), f2 = n3 - l2 / 2, h2 = a2((t3 < 60 ? [l2, d2, 0] : t3 < 120 ? [d2, l2, 0] : t3 < 180 ? [0, l2, d2] : t3 < 240 ? [0, d2, l2] : t3 < 300 ? [d2, 0, l2] : [l2, 0, d2]).map(function(e4) {
            return Math.round(255 * (e4 + f2));
          }), 3);
          return { r: h2[0], g: h2[1], b: h2[2], a: i3 };
        }
        function me(e3) {
          var t3 = e3.r, r3 = e3.g, n3 = e3.b, o3 = e3.a, a3 = o3 === void 0 ? 1 : o3, i3 = t3 / 255, u2 = r3 / 255, s3 = n3 / 255, c2 = Math.max(i3, u2, s3), l2 = Math.min(i3, u2, s3), d2 = c2 - l2, f2 = (c2 + l2) / 2;
          if (d2 === 0)
            return { h: 0, s: 0, l: f2, a: a3 };
          var h2 = 60 * (c2 === i3 ? (u2 - s3) / d2 % 6 : c2 === u2 ? (s3 - i3) / d2 + 2 : (i3 - u2) / d2 + 4);
          return h2 < 0 && (h2 += 360), { h: h2, s: d2 / (1 - Math.abs(2 * f2 - 1)), l: f2, a: a3 };
        }
        function ge(e3, t3) {
          t3 === void 0 && (t3 = 0);
          var r3 = e3.toFixed(t3);
          if (t3 === 0)
            return r3;
          var n3 = r3.indexOf(".");
          if (n3 >= 0) {
            var o3 = r3.match(/0+$/);
            if (o3)
              return o3.index === n3 + 1 ? r3.substring(0, n3) : r3.substring(0, o3.index);
          }
          return r3;
        }
        function be(e3) {
          var t3 = e3.h, r3 = e3.s, n3 = e3.l, o3 = e3.a;
          return o3 != null && o3 < 1 ? "hsla(" + ge(t3) + ", " + ge(100 * r3) + "%, " + ge(100 * n3) + "%, " + ge(o3, 2) + ")" : "hsl(" + ge(t3) + ", " + ge(100 * r3) + "%, " + ge(100 * n3) + "%)";
        }
        var ye = /^rgba?\([^\(\)]+\)$/, we = /^hsla?\([^\(\)]+\)$/, ke = /^#[0-9a-f]+$/i;
        function Se(e3) {
          var t3, r3, n3, o3, i3, u2 = e3.trim().toLowerCase();
          if (u2.match(ye))
            return t3 = a2(_e(u2, Ee, xe, Ce), 4), r3 = t3[0], n3 = t3[1], o3 = t3[2], i3 = t3[3], { r: r3, g: n3, b: o3, a: i3 === void 0 ? 1 : i3 };
          if (u2.match(we))
            return function(e4) {
              var t4 = a2(_e(e4, Ve, Re, Me), 4), r4 = t4[0], n4 = t4[1], o4 = t4[2], i4 = t4[3];
              return ve({ h: r4, s: n4, l: o4, a: i4 === void 0 ? 1 : i4 });
            }(u2);
          if (u2.match(ke))
            return function(e4) {
              var t4 = e4.substring(1);
              switch (t4.length) {
                case 3:
                case 4:
                  var r4 = a2([0, 1, 2].map(function(e5) {
                    return parseInt("" + t4[e5] + t4[e5], 16);
                  }), 3);
                  return { r: r4[0], g: r4[1], b: r4[2], a: t4.length === 3 ? 1 : parseInt("" + t4[3] + t4[3], 16) / 255 };
                case 6:
                case 8:
                  var n4 = a2([0, 2, 4].map(function(e5) {
                    return parseInt(t4.substring(e5, e5 + 2), 16);
                  }), 3);
                  return { r: n4[0], g: n4[1], b: n4[2], a: t4.length === 6 ? 1 : parseInt(t4.substring(6, 8), 16) / 255 };
              }
              throw new Error("Unable to parse " + e4);
            }(u2);
          if (Te.has(u2))
            return function(e4) {
              var t4 = Te.get(e4);
              return { r: t4 >> 16 & 255, g: t4 >> 8 & 255, b: t4 >> 0 & 255, a: 1 };
            }(u2);
          if (Ae.has(u2))
            return function(e4) {
              var t4 = Ae.get(e4);
              return { r: t4 >> 16 & 255, g: t4 >> 8 & 255, b: t4 >> 0 & 255, a: 1 };
            }(u2);
          if (e3 === "transparent")
            return { r: 0, g: 0, b: 0, a: 0 };
          throw new Error("Unable to parse " + e3);
        }
        function _e(e3, t3, r3, n3) {
          var o3 = e3.split(t3).filter(function(e4) {
            return e4;
          }), i3 = Object.entries(n3);
          return o3.map(function(e4) {
            return e4.trim();
          }).map(function(e4, t4) {
            var n4, o4 = i3.find(function(t5) {
              var r4 = a2(t5, 1)[0];
              return e4.endsWith(r4);
            });
            return n4 = o4 ? parseFloat(e4.substring(0, e4.length - o4[0].length)) / o4[1] * r3[t4] : parseFloat(e4), r3[t4] > 1 ? Math.round(n4) : n4;
          });
        }
        var Ee = /rgba?|\(|\)|\/|,|\s/gi, xe = [255, 255, 255, 1], Ce = { "%": 100 };
        var Ve = /hsla?|\(|\)|\/|,|\s/gi, Re = [360, 1, 1, 1], Me = { "%": 100, deg: 360, rad: 2 * Math.PI, turn: 1 };
        var Te = new Map(Object.entries({ aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgrey: 11119017, darkgreen: 25600, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, grey: 8421504, green: 32768, greenyellow: 11403055, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgrey: 13882323, lightgreen: 9498256, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 })), Ae = new Map(Object.entries({ ActiveBorder: 3906044, ActiveCaption: 0, AppWorkspace: 11184810, Background: 6513614, ButtonFace: 16777215, ButtonHighlight: 15329769, ButtonShadow: 10461343, ButtonText: 0, CaptionText: 0, GrayText: 8355711, Highlight: 11720703, HighlightText: 0, InactiveBorder: 16777215, InactiveCaption: 16777215, InactiveCaptionText: 0, InfoBackground: 16514245, InfoText: 0, Menu: 16185078, MenuText: 16777215, Scrollbar: 11184810, ThreeDDarkShadow: 0, ThreeDFace: 12632256, ThreeDHighlight: 16777215, ThreeDLightShadow: 16777215, ThreeDShadow: 0, Window: 15527148, WindowFrame: 11184810, WindowText: 0, "-webkit-focus-ring-color": 15046400 }).map(function(e3) {
          var t3 = a2(e3, 2), r3 = t3[0], n3 = t3[1];
          return [r3.toLowerCase(), n3];
        }));
        function Le(e3, t3, r3, n3, o3) {
          return (e3 - t3) * (o3 - n3) / (r3 - t3) + n3;
        }
        function Pe(e3, t3, r3) {
          return Math.min(r3, Math.max(t3, e3));
        }
        function je(e3, t3) {
          for (var r3 = [], n3 = 0, o3 = e3.length; n3 < o3; n3++) {
            r3[n3] = [];
            for (var a3 = 0, i3 = t3[0].length; a3 < i3; a3++) {
              for (var u2 = 0, s3 = 0, c2 = e3[0].length; s3 < c2; s3++)
                u2 += e3[n3][s3] * t3[s3][a3];
              r3[n3][a3] = u2;
            }
          }
          return r3;
        }
        function Oe(e3, t3, r3) {
          r3 === void 0 && (r3 = 0);
          for (var n3, o3 = []; n3 = e3.exec(t3); )
            o3.push(n3[r3]);
          return o3;
        }
        function De(e3) {
          var t3 = Fe.identity();
          return e3.sepia !== 0 && (t3 = je(t3, Fe.sepia(e3.sepia / 100))), e3.grayscale !== 0 && (t3 = je(t3, Fe.grayscale(e3.grayscale / 100))), e3.contrast !== 100 && (t3 = je(t3, Fe.contrast(e3.contrast / 100))), e3.brightness !== 100 && (t3 = je(t3, Fe.brightness(e3.brightness / 100))), e3.mode === 1 && (t3 = je(t3, Fe.invertNHue())), t3;
        }
        var Fe = { identity: function() {
          return [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        }, invertNHue: function() {
          return [[0.333, -0.667, -0.667, 0, 1], [-0.667, 0.333, -0.667, 0, 1], [-0.667, -0.667, 0.333, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        }, brightness: function(e3) {
          return [[e3, 0, 0, 0, 0], [0, e3, 0, 0, 0], [0, 0, e3, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        }, contrast: function(e3) {
          var t3 = (1 - e3) / 2;
          return [[e3, 0, 0, 0, t3], [0, e3, 0, 0, t3], [0, 0, e3, 0, t3], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        }, sepia: function(e3) {
          return [[0.393 + 0.607 * (1 - e3), 0.769 - 0.769 * (1 - e3), 0.189 - 0.189 * (1 - e3), 0, 0], [0.349 - 0.349 * (1 - e3), 0.686 + 0.314 * (1 - e3), 0.168 - 0.168 * (1 - e3), 0, 0], [0.272 - 0.272 * (1 - e3), 0.534 - 0.534 * (1 - e3), 0.131 + 0.869 * (1 - e3), 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        }, grayscale: function(e3) {
          return [[0.2126 + 0.7874 * (1 - e3), 0.7152 - 0.7152 * (1 - e3), 0.0722 - 0.0722 * (1 - e3), 0, 0], [0.2126 - 0.2126 * (1 - e3), 0.7152 + 0.2848 * (1 - e3), 0.0722 - 0.0722 * (1 - e3), 0, 0], [0.2126 - 0.2126 * (1 - e3), 0.7152 - 0.7152 * (1 - e3), 0.0722 + 0.9278 * (1 - e3), 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        } };
        function qe(e3) {
          return e3[e3.mode === 1 ? "darkSchemeBackgroundColor" : "lightSchemeBackgroundColor"];
        }
        function Ne(e3) {
          return e3[e3.mode === 1 ? "darkSchemeTextColor" : "lightSchemeTextColor"];
        }
        var Be = /* @__PURE__ */ new Map(), We = /* @__PURE__ */ new Map();
        function Ie(e3) {
          if (We.has(e3))
            return We.get(e3);
          var t3 = me(Se(e3));
          return We.set(e3, t3), t3;
        }
        var Ue = ["r", "g", "b", "a"], $e = ["mode", "brightness", "contrast", "grayscale", "sepia", "darkSchemeBackgroundColor", "darkSchemeTextColor", "lightSchemeBackgroundColor", "lightSchemeTextColor"];
        function ze(e3, t3, r3, n3, o3) {
          var i3;
          Be.has(r3) ? i3 = Be.get(r3) : (i3 = /* @__PURE__ */ new Map(), Be.set(r3, i3));
          var u2 = function(e4, t4) {
            return Ue.map(function(t5) {
              return e4[t5];
            }).concat($e.map(function(e5) {
              return t4[e5];
            })).join(";");
          }(e3, t3);
          if (i3.has(u2))
            return i3.get(u2);
          var s3 = ve(r3(me(e3), n3 == null ? null : Ie(n3), o3 == null ? null : Ie(o3))), c2 = s3.r, l2 = s3.g, d2 = s3.b, f2 = s3.a, h2 = a2(function(e4, t4) {
            var r4 = a2(e4, 3), n4 = je(t4, [[r4[0] / 255], [r4[1] / 255], [r4[2] / 255], [1], [1]]);
            return [0, 1, 2].map(function(e5) {
              return Pe(Math.round(255 * n4[e5][0]), 0, 255);
            });
          }([c2, l2, d2], De(t3)), 3), p2 = h2[0], v2 = h2[1], m2 = h2[2], g2 = f2 === 1 ? function(e4) {
            var t4 = e4.r, r4 = e4.g, n4 = e4.b, o4 = e4.a;
            return "#" + (o4 != null && o4 < 1 ? [t4, r4, n4, Math.round(255 * o4)] : [t4, r4, n4]).map(function(e5) {
              return (e5 < 16 ? "0" : "") + e5.toString(16);
            }).join("");
          }({ r: p2, g: v2, b: m2 }) : function(e4) {
            var t4 = e4.r, r4 = e4.g, n4 = e4.b, o4 = e4.a;
            return o4 != null && o4 < 1 ? "rgba(" + ge(t4) + ", " + ge(r4) + ", " + ge(n4) + ", " + ge(o4, 2) + ")" : "rgb(" + ge(t4) + ", " + ge(r4) + ", " + ge(n4) + ")";
          }({ r: p2, g: v2, b: m2, a: f2 });
          return i3.set(u2, g2), g2;
        }
        function He(e3) {
          return e3;
        }
        function Ge(e3, t3) {
          var r3 = qe(t3);
          return ze(e3, t3, Qe, Ne(t3), r3);
        }
        function Qe(e3, t3, r3) {
          var n3, o3 = e3.h, a3 = e3.s, i3 = e3.l, u2 = e3.a, s3 = i3 < 0.5;
          s3 ? n3 = i3 < 0.2 || a3 < 0.12 : n3 = a3 < 0.24 || i3 > 0.8 && (o3 > 200 && o3 < 280);
          var c2 = o3, l2 = i3;
          return n3 && (s3 ? (c2 = t3.h, l2 = t3.s) : (c2 = r3.h, l2 = r3.s)), { h: c2, s: l2, l: Le(i3, 0, 1, t3.l, r3.l), a: u2 };
        }
        function Ke(e3, t3) {
          var r3 = e3.h, n3 = e3.s, o3 = e3.l, a3 = e3.a, i3 = n3 < 0.12 || o3 > 0.8 && (r3 > 200 && r3 < 280);
          if (o3 < 0.5) {
            var u2 = Le(o3, 0, 0.5, 0, 0.4);
            return i3 ? { h: t3.h, s: t3.s, l: u2, a: a3 } : { h: r3, s: n3, l: u2, a: a3 };
          }
          var s3 = Le(o3, 0.5, 1, 0.4, t3.l);
          if (i3)
            return { h: t3.h, s: t3.s, l: s3, a: a3 };
          var c2 = r3;
          r3 > 60 && r3 < 180 && (c2 = r3 > 120 ? Le(r3, 120, 180, 135, 180) : Le(r3, 60, 120, 60, 105));
          return { h: c2, s: n3, l: s3, a: a3 };
        }
        function Je(e3, r3) {
          if (r3.mode === 0)
            return Ge(e3, r3);
          var n3 = qe(r3);
          return ze(e3, t2(t2({}, r3), { mode: 0 }), Ke, n3);
        }
        var Xe, Ye = 0.55;
        function Ze(e3) {
          return Le(e3, 205, 245, 205, 220);
        }
        function et(e3, t3) {
          var r3 = e3.h, n3 = e3.s, o3 = e3.l, a3 = e3.a, i3 = o3 < 0.2 || n3 < 0.24, u2 = !i3 && r3 > 205 && r3 < 245;
          if (o3 > 0.5) {
            var s3 = Le(o3, 0.5, 1, Ye, t3.l);
            if (i3)
              return { h: t3.h, s: t3.s, l: s3, a: a3 };
            var c2 = r3;
            return u2 && (c2 = Ze(r3)), { h: c2, s: n3, l: s3, a: a3 };
          }
          if (i3)
            return { h: t3.h, s: t3.s, l: Le(o3, 0, 0.5, t3.l, Ye), a: a3 };
          var l2, d2 = r3;
          return u2 ? (d2 = Ze(r3), l2 = Le(o3, 0, 0.5, t3.l, Math.min(1, 0.6000000000000001))) : l2 = Le(o3, 0, 0.5, t3.l, Ye), { h: d2, s: n3, l: l2, a: a3 };
        }
        function tt(e3, r3) {
          if (r3.mode === 0)
            return Ge(e3, r3);
          var n3 = Ne(r3);
          return ze(e3, t2(t2({}, r3), { mode: 0 }), et, n3);
        }
        function rt(e3, t3, r3) {
          var n3 = e3.h, o3 = e3.s, a3 = e3.l, i3 = e3.a, u2 = n3, s3 = o3;
          return (a3 < 0.2 || o3 < 0.24) && (a3 < 0.5 ? (u2 = t3.h, s3 = t3.s) : (u2 = r3.h, s3 = r3.s)), { h: u2, s: s3, l: Le(a3, 0, 1, 0.5, 0.2), a: i3 };
        }
        function nt(e3, r3) {
          if (r3.mode === 0)
            return Ge(e3, r3);
          var n3 = Ne(r3), o3 = qe(r3);
          return ze(e3, t2(t2({}, r3), { mode: 0 }), rt, n3, o3);
        }
        function ot(e3, t3) {
          return Je(e3, t3);
        }
        function at(e3) {
          var t3 = [];
          return e3.mode === Xe.dark && t3.push("invert(100%) hue-rotate(180deg)"), e3.brightness !== 100 && t3.push("brightness(" + e3.brightness + "%)"), e3.contrast !== 100 && t3.push("contrast(" + e3.contrast + "%)"), e3.grayscale !== 0 && t3.push("grayscale(" + e3.grayscale + "%)"), e3.sepia !== 0 && t3.push("sepia(" + e3.sepia + "%)"), t3.length === 0 ? null : t3.join(" ");
        }
        !function(e3) {
          e3[e3.light = 0] = "light", e3[e3.dark = 1] = "dark";
        }(Xe || (Xe = {}));
        var it = 0, ut = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map();
        function ct(e3) {
          return r2(this, void 0, void 0, function() {
            return n2(this, function(t3) {
              return [2, new Promise(function(t4, r3) {
                var n3 = ++it;
                ut.set(n3, t4), st.set(n3, r3), chrome.runtime.sendMessage({ type: "fetch", data: e3, id: n3 });
              })];
            });
          });
        }
        function lt(e3) {
          return r2(this, void 0, void 0, function() {
            var r3, o3, a3;
            return n2(this, function(n3) {
              switch (n3.label) {
                case 0:
                  return e3.startsWith("data:") ? (r3 = e3, [3, 3]) : [3, 1];
                case 1:
                  return [4, dt(e3)];
                case 2:
                  r3 = n3.sent(), n3.label = 3;
                case 3:
                  return [4, ft(r3)];
                case 4:
                  return o3 = n3.sent(), a3 = function(e4) {
                    ht || (t3 = vt, r4 = vt, (ht = document.createElement("canvas")).width = t3, ht.height = r4, (pt = ht.getContext("2d")).imageSmoothingEnabled = false);
                    var t3, r4;
                    var n4 = e4.naturalWidth, o4 = e4.naturalHeight;
                    if (o4 === 0 || n4 === 0)
                      return F("logWarn(Image is empty " + e4.currentSrc + ")"), null;
                    var a4 = n4 * o4, i3 = Math.min(1, Math.sqrt(vt / a4)), u2 = Math.ceil(n4 * i3), s3 = Math.ceil(o4 * i3);
                    pt.clearRect(0, 0, u2, s3), pt.drawImage(e4, 0, 0, n4, o4, 0, 0, u2, s3);
                    var c2, l2, d2, f2, h2, p2, v2, m2 = pt.getImageData(0, 0, u2, s3).data, g2 = 0.05, b2 = 0.4, y2 = 0.7, w2 = 0, k2 = 0, S2 = 0;
                    for (d2 = 0; d2 < s3; d2++)
                      for (l2 = 0; l2 < u2; l2++)
                        f2 = m2[(c2 = 4 * (d2 * u2 + l2)) + 0] / 255, h2 = m2[c2 + 1] / 255, p2 = m2[c2 + 2] / 255, m2[c2 + 3] / 255 < g2 ? w2++ : ((v2 = 0.2126 * f2 + 0.7152 * h2 + 0.0722 * p2) < b2 && k2++, v2 > y2 && S2++);
                    var _2 = u2 * s3, E2 = _2 - w2;
                    return { isDark: k2 / E2 >= 0.7, isLight: S2 / E2 >= 0.7, isTransparent: w2 / _2 >= 0.1, isLarge: a4 >= 48e4 };
                  }(o3), [2, t2({ src: e3, dataURL: r3, width: o3.naturalWidth, height: o3.naturalHeight }, a3)];
              }
            });
          });
        }
        function dt(e3) {
          return r2(this, void 0, void 0, function() {
            return n2(this, function(t3) {
              switch (t3.label) {
                case 0:
                  return new URL(e3).origin !== location.origin ? [3, 2] : [4, w(e3)];
                case 1:
                  return [2, t3.sent()];
                case 2:
                  return [4, ct({ url: e3, responseType: "data-url" })];
                case 3:
                  return [2, t3.sent()];
              }
            });
          });
        }
        function ft(e3) {
          return r2(this, void 0, void 0, function() {
            return n2(this, function(t3) {
              return [2, new Promise(function(t4, r3) {
                var n3 = new Image();
                n3.onload = function() {
                  return t4(n3);
                }, n3.onerror = function() {
                  return r3("Unable to load image " + e3);
                }, n3.src = e3;
              })];
            });
          });
        }
        chrome.runtime.onMessage.addListener(function(e3) {
          var t3 = e3.type, r3 = e3.data, n3 = e3.error, o3 = e3.id;
          if (t3 === "fetch-response") {
            var a3 = ut.get(o3), i3 = st.get(o3);
            ut.delete(o3), st.delete(o3), n3 ? i3 && i3(n3) : a3 && a3(r3);
          }
        });
        var ht, pt, vt = 1024;
        function mt(e3, t3) {
          var r3 = e3.dataURL, n3 = e3.width, o3 = e3.height, a3 = ['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + n3 + '" height="' + o3 + '">', "<defs>", '<filter id="darkreader-image-filter">', '<feColorMatrix type="matrix" values="' + De(t3).slice(0, 4).map(function(e4) {
            return e4.map(function(e5) {
              return e5.toFixed(3);
            }).join(" ");
          }).join(" ") + '" />', "</filter>", "</defs>", '<image width="' + n3 + '" height="' + o3 + '" filter="url(#darkreader-image-filter)" xlink:href="' + r3 + '" />', "</svg>"].join("");
          return "data:image/svg+xml;base64," + btoa(a3);
        }
        function gt() {
          ht = null, pt = null;
        }
        function bt(e3, t3, r3, n3, o3, a3) {
          var i3 = Boolean(r3 && r3.style && r3.style.getPropertyPriority(e3)), u2 = t3;
          if (e3.startsWith("--")) {
            if (s3 = function(e4, t4, r4, n4, o4, a4) {
              return e4.getModifierForVariable({ varName: t4, sourceValue: r4, rule: n4, ignoredImgSelectors: o4, isCancelled: a4 });
            }(n3, e3, t3, r3, o3, a3))
              return { property: e3, value: s3, important: i3, sourceValue: u2 };
          } else if (t3.includes("var(")) {
            if (s3 = function(e4, t4, r4) {
              return e4.getModifierForVarDependant(t4, r4);
            }(n3, e3, t3))
              return { property: e3, value: s3, important: i3, sourceValue: u2 };
          } else if (e3.includes("color") && e3 !== "-webkit-print-color-adjust" || e3 === "fill" || e3 === "stroke" || e3 === "stop-color") {
            if (s3 = function(e4, t4) {
              if (St.has(t4.toLowerCase()))
                return t4;
              try {
                var r4 = Et(t4);
                return e4.includes("background") ? function(e5) {
                  return Je(r4, e5);
                } : e4.includes("border") || e4.includes("outline") ? function(e5) {
                  return nt(r4, e5);
                } : function(e5) {
                  return tt(r4, e5);
                };
              } catch (e5) {
                return F("Color parse error", e5), null;
              }
            }(e3, t3))
              return { property: e3, value: s3, important: i3, sourceValue: u2 };
          } else if (e3 === "background-image" || e3 === "list-style-image") {
            if (s3 = Mt(t3, r3, o3, a3))
              return { property: e3, value: s3, important: i3, sourceValue: u2 };
          } else if (e3.includes("shadow")) {
            var s3;
            if (s3 = function(e4) {
              try {
                var t4 = 0, r4 = Oe(/(^|\s)([a-z]+\(.+?\)|#[0-9a-f]+|[a-z]+)(.*?(inset|outset)?($|,))/gi, e4, 2), n4 = r4.map(function(n5, o4) {
                  var a4 = t4, i4 = e4.indexOf(n5, t4), u3 = i4 + n5.length;
                  t4 = u3;
                  var s4 = xt(n5);
                  return s4 ? function(t5) {
                    return "" + e4.substring(a4, i4) + function(e5, t6) {
                      return Je(e5, t6);
                    }(s4, t5) + (o4 === r4.length - 1 ? e4.substring(u3) : "");
                  } : function() {
                    return e4.substring(a4, u3);
                  };
                });
                return function(e5) {
                  return n4.map(function(t5) {
                    return t5(e5);
                  }).join("");
                };
              } catch (t5) {
                return F("Unable to parse shadow " + e4, t5), null;
              }
            }(t3))
              return { property: e3, value: s3, important: i3, sourceValue: u2 };
          }
          return null;
        }
        function yt(e3, r3, n3) {
          var o3 = [];
          return r3 || (o3.push("html {"), o3.push("    background-color: " + Je({ r: 255, g: 255, b: 255 }, e3) + " !important;"), o3.push("}")), o3.push((r3 ? "" : "html, body, ") + (n3 ? "input, textarea, select, button" : "") + " {"), o3.push("    background-color: " + Je({ r: 255, g: 255, b: 255 }, e3) + ";"), o3.push("}"), o3.push("html, body, " + (n3 ? "input, textarea, select, button" : "") + " {"), o3.push("    border-color: " + nt({ r: 76, g: 76, b: 76 }, e3) + ";"), o3.push("    color: " + tt({ r: 0, g: 0, b: 0 }, e3) + ";"), o3.push("}"), o3.push("a {"), o3.push("    color: " + tt({ r: 0, g: 64, b: 255 }, e3) + ";"), o3.push("}"), o3.push("table {"), o3.push("    border-color: " + nt({ r: 128, g: 128, b: 128 }, e3) + ";"), o3.push("}"), o3.push("::placeholder {"), o3.push("    color: " + tt({ r: 169, g: 169, b: 169 }, e3) + ";"), o3.push("}"), o3.push("input:-webkit-autofill,"), o3.push("textarea:-webkit-autofill,"), o3.push("select:-webkit-autofill {"), o3.push("    background-color: " + Je({ r: 250, g: 255, b: 189 }, e3) + " !important;"), o3.push("    color: " + tt({ r: 0, g: 0, b: 0 }, e3) + " !important;"), o3.push("}"), e3.scrollbarColor && o3.push(function(e4) {
            var r4, n4, o4, a3, i3, u2, s3 = [];
            if (e4.scrollbarColor === "auto")
              r4 = Je({ r: 241, g: 241, b: 241 }, e4), n4 = tt({ r: 96, g: 96, b: 96 }, e4), o4 = Je({ r: 176, g: 176, b: 176 }, e4), a3 = Je({ r: 144, g: 144, b: 144 }, e4), i3 = Je({ r: 96, g: 96, b: 96 }, e4), u2 = Je({ r: 255, g: 255, b: 255 }, e4);
            else {
              var c2 = me(Se(e4.scrollbarColor)), l2 = c2.l > 0.5, f2 = function(e5) {
                return t2(t2({}, c2), { l: Pe(c2.l + e5, 0, 1) });
              }, h2 = function(e5) {
                return t2(t2({}, c2), { l: Pe(c2.l - e5, 0, 1) });
              };
              r4 = be(h2(0.4)), n4 = be(l2 ? h2(0.4) : f2(0.4)), o4 = be(c2), a3 = be(f2(0.1)), i3 = be(f2(0.2));
            }
            s3.push("::-webkit-scrollbar {"), s3.push("    background-color: " + r4 + ";"), s3.push("    color: " + n4 + ";"), s3.push("}"), s3.push("::-webkit-scrollbar-thumb {"), s3.push("    background-color: " + o4 + ";"), s3.push("}"), s3.push("::-webkit-scrollbar-thumb:hover {"), s3.push("    background-color: " + a3 + ";"), s3.push("}"), s3.push("::-webkit-scrollbar-thumb:active {"), s3.push("    background-color: " + i3 + ";"), s3.push("}"), s3.push("::-webkit-scrollbar-corner {"), s3.push("    background-color: " + u2 + ";"), s3.push("}"), d && (s3.push("* {"), s3.push("    scrollbar-color: " + o4 + " " + r4 + ";"), s3.push("}"));
            return s3.join("\n");
          }(e3)), e3.selectionColor && o3.push(function(e4) {
            var t3 = [], r4 = wt(e4), n4 = r4.backgroundColorSelection, o4 = r4.foregroundColorSelection;
            return ["::selection", "::-moz-selection"].forEach(function(e5) {
              t3.push(e5 + " {"), t3.push("    background-color: " + n4 + " !important;"), t3.push("    color: " + o4 + " !important;"), t3.push("}");
            }), t3.join("\n");
          }(e3)), o3.join("\n");
        }
        function wt(e3) {
          var r3, n3;
          if (e3.selectionColor === "auto")
            r3 = Je({ r: 0, g: 96, b: 212 }, t2(t2({}, e3), { grayscale: 0 })), n3 = tt({ r: 255, g: 255, b: 255 }, t2(t2({}, e3), { grayscale: 0 }));
          else {
            var o3 = me(Se(e3.selectionColor));
            r3 = e3.selectionColor, n3 = o3.l < 0.5 ? "#FFF" : "#000";
          }
          return { backgroundColorSelection: r3, foregroundColorSelection: n3 };
        }
        function kt(e3, t3) {
          var r3 = t3.strict, n3 = [];
          return n3.push("html, body, " + (r3 ? "body :not(iframe)" : "body > :not(iframe)") + " {"), n3.push("    background-color: " + Je({ r: 255, g: 255, b: 255 }, e3) + " !important;"), n3.push("    border-color: " + nt({ r: 64, g: 64, b: 64 }, e3) + " !important;"), n3.push("    color: " + tt({ r: 0, g: 0, b: 0 }, e3) + " !important;"), n3.push("}"), n3.join("\n");
        }
        var St = /* @__PURE__ */ new Set(["inherit", "transparent", "initial", "currentcolor", "none", "unset"]), _t = /* @__PURE__ */ new Map();
        function Et(e3) {
          if (e3 = e3.trim(), _t.has(e3))
            return _t.get(e3);
          var t3 = Se(e3);
          return _t.set(e3, t3), t3;
        }
        function xt(e3) {
          try {
            return Et(e3);
          } catch (e4) {
            return null;
          }
        }
        var Ct = /[\-a-z]+gradient\(([^\(\)]*(\(([^\(\)]*(\(.*?\)))*[^\(\)]*\))){0,15}[^\(\)]*\)/g, Vt = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map();
        function Mt(e3, o3, a3, i3) {
          var u2 = this;
          try {
            var s3 = Oe(Ct, e3), c2 = Oe(ce, e3);
            if (c2.length === 0 && s3.length === 0)
              return e3;
            var l2 = function(t3) {
              var r3 = 0;
              return t3.map(function(t4) {
                var n3 = e3.indexOf(t4, r3);
                return r3 = n3 + t4.length, { match: t4, index: n3 };
              });
            }, d2 = l2(c2).map(function(e4) {
              return t2({ type: "url" }, e4);
            }).concat(l2(s3).map(function(e4) {
              return t2({ type: "gradient" }, e4);
            })).sort(function(e4, t3) {
              return e4.index - t3.index;
            }), f2 = function(e4, r3) {
              var n3, o4 = e4.isDark, a4 = e4.isLight, i4 = e4.isTransparent, u3 = e4.isLarge, s4 = e4.width;
              if (o4 && i4 && r3.mode === 1 && !u3 && s4 > 2)
                D("Inverting dark image " + e4.src), n3 = 'url("' + mt(e4, t2(t2({}, r3), { sepia: Pe(r3.sepia + 10, 0, 100) })) + '")';
              else if (a4 && !i4 && r3.mode === 1) {
                if (u3)
                  n3 = "none";
                else
                  D("Dimming light image " + e4.src), n3 = 'url("' + mt(e4, r3) + '")';
              } else if (r3.mode === 0 && a4 && !u3) {
                D("Applying filter to image " + e4.src), n3 = 'url("' + mt(e4, t2(t2({}, r3), { brightness: Pe(r3.brightness - 10, 5, 200), sepia: Pe(r3.sepia + 10, 0, 100) })) + '")';
              } else
                n3 = null;
              return n3;
            }, h2 = [], p2 = 0;
            return d2.forEach(function(t3, s4) {
              var c3 = t3.match, l3 = t3.type, v2 = t3.index, m2 = p2, g2 = v2 + c3.length;
              p2 = g2, h2.push(function() {
                return e3.substring(m2, v2);
              }), h2.push(l3 === "url" ? function(e4) {
                var t4;
                if (function(e5, t5) {
                  if (!e5 || t5.length === 0)
                    return false;
                  if (t5.some(function(e6) {
                    return e6 === "*";
                  }))
                    return true;
                  for (var r3 = e5.split(/,\s*/g), n3 = function(e6) {
                    var n4 = t5[e6];
                    if (r3.some(function(e7) {
                      return e7 === n4;
                    }))
                      return { value: true };
                  }, o4 = 0; o4 < t5.length; o4++) {
                    var a4 = n3(o4);
                    if (typeof a4 == "object")
                      return a4.value;
                  }
                  return false;
                }(o3.selectorText, a3))
                  return null;
                var s5 = de(e4), c4 = o3.parentStyleSheet, l4 = c4.href ? fe(c4.href) : ((t4 = c4.ownerNode) === null || t4 === void 0 ? void 0 : t4.baseURI) || location.origin, d3 = 'url("' + (s5 = oe(l4, s5)) + '")';
                return function(e5) {
                  return r2(u2, void 0, void 0, function() {
                    var t5, r3;
                    return n2(this, function(n3) {
                      switch (n3.label) {
                        case 0:
                          return Vt.has(s5) ? (t5 = Vt.get(s5), [3, 7]) : [3, 1];
                        case 1:
                          return n3.trys.push([1, 6, , 7]), Rt.has(s5) ? (r3 = Rt.get(s5), [4, new Promise(function(e6) {
                            return r3.push(e6);
                          })]) : [3, 3];
                        case 2:
                          return (t5 = n3.sent()) ? [3, 5] : [2, null];
                        case 3:
                          return Rt.set(s5, []), [4, lt(s5)];
                        case 4:
                          t5 = n3.sent(), Vt.set(s5, t5), Rt.get(s5).forEach(function(e6) {
                            return e6(t5);
                          }), Rt.delete(s5), n3.label = 5;
                        case 5:
                          return i3() ? [2, null] : [3, 7];
                        case 6:
                          return F(n3.sent()), Rt.has(s5) && (Rt.get(s5).forEach(function(e6) {
                            return e6(null);
                          }), Rt.delete(s5)), [2, d3];
                        case 7:
                          return [2, f2(t5, e5) || d3];
                      }
                    });
                  });
                };
              }(c3) : function(e4) {
                var t4 = e4.match(/^(.*-gradient)\((.*)\)$/), r3 = t4[1], n3 = t4[2], o4 = /^(from|color-stop|to)\(([^\(\)]*?,\s*)?(.*?)\)$/, a4 = Oe(/([^\(\),]+(\([^\(\)]*(\([^\(\)]*\)*[^\(\)]*)?\))?[^\(\),]*),?/g, n3, 1).map(function(e5) {
                  var t5 = xt(e5 = e5.trim());
                  if (t5)
                    return function(e6) {
                      return ot(t5, e6);
                    };
                  var r4 = e5.lastIndexOf(" ");
                  if (t5 = xt(e5.substring(0, r4)))
                    return function(n5) {
                      return ot(t5, n5) + " " + e5.substring(r4 + 1);
                    };
                  var n4 = e5.match(o4);
                  return n4 && (t5 = xt(n4[3])) ? function(e6) {
                    return n4[1] + "(" + (n4[2] ? n4[2] + ", " : "") + ot(t5, e6) + ")";
                  } : function() {
                    return e5;
                  };
                });
                return function(e5) {
                  return r3 + "(" + a4.map(function(t5) {
                    return t5(e5);
                  }).join(", ") + ")";
                };
              }(c3)), s4 === d2.length - 1 && h2.push(function() {
                return e3.substring(g2);
              });
            }), function(e4) {
              var t3 = h2.filter(Boolean).map(function(t4) {
                return t4(e4);
              });
              return t3.some(function(e5) {
                return e5 instanceof Promise;
              }) ? Promise.all(t3).then(function(e5) {
                return e5.join("");
              }) : t3.join("");
            };
          } catch (t3) {
            return F("Unable to parse gradient " + e3, t3), null;
          }
        }
        function Tt() {
          _t.clear(), Be.clear(), We.clear(), Vt.clear(), gt(), Rt.clear();
        }
        var At = new (function() {
          function e3() {
            this.varTypes = /* @__PURE__ */ new Map(), this.rulesQueue = [], this.definedVars = /* @__PURE__ */ new Set(), this.varRefs = /* @__PURE__ */ new Map(), this.unknownColorVars = /* @__PURE__ */ new Set(), this.unknownBgVars = /* @__PURE__ */ new Set(), this.undefinedVars = /* @__PURE__ */ new Set(), this.initialVarTypes = /* @__PURE__ */ new Map(), this.changedTypeVars = /* @__PURE__ */ new Set(), this.typeChangeSubscriptions = /* @__PURE__ */ new Map(), this.unstableVarValues = /* @__PURE__ */ new Map();
          }
          return e3.prototype.clear = function() {
            this.varTypes.clear(), this.rulesQueue.splice(0), this.definedVars.clear(), this.varRefs.clear(), this.unknownColorVars.clear(), this.unknownBgVars.clear(), this.undefinedVars.clear(), this.initialVarTypes.clear(), this.changedTypeVars.clear(), this.typeChangeSubscriptions.clear(), this.unstableVarValues.clear();
          }, e3.prototype.isVarType = function(e4, t3) {
            return this.varTypes.has(e4) && (this.varTypes.get(e4) & t3) > 0;
          }, e3.prototype.addRulesForMatching = function(e4) {
            this.rulesQueue.push(e4);
          }, e3.prototype.matchVariablesAndDependants = function() {
            var e4 = this;
            this.changedTypeVars.clear(), this.initialVarTypes = new Map(this.varTypes), this.collectRootVariables(), this.rulesQueue.forEach(function(t3) {
              return e4.collectVariables(t3);
            }), this.rulesQueue.forEach(function(t3) {
              return e4.collectVarDependants(t3);
            }), this.rulesQueue.splice(0), this.collectRootVarDependants(), this.varRefs.forEach(function(t3, r3) {
              t3.forEach(function(t4) {
                e4.varTypes.has(r3) && e4.resolveVariableType(t4, e4.varTypes.get(r3));
              });
            }), this.unknownColorVars.forEach(function(t3) {
              e4.unknownBgVars.has(t3) ? (e4.unknownColorVars.delete(t3), e4.unknownBgVars.delete(t3), e4.resolveVariableType(t3, 1)) : e4.isVarType(t3, 7) ? e4.unknownColorVars.delete(t3) : e4.undefinedVars.add(t3);
            }), this.unknownBgVars.forEach(function(t3) {
              e4.findVarRef(t3, function(t4) {
                return e4.unknownColorVars.has(t4) || e4.isVarType(t4, 6);
              }) != null ? e4.itarateVarRefs(t3, function(t4) {
                e4.resolveVariableType(t4, 1);
              }) : e4.isVarType(t3, 9) ? e4.unknownBgVars.delete(t3) : e4.undefinedVars.add(t3);
            }), this.changedTypeVars.forEach(function(t3) {
              e4.typeChangeSubscriptions.has(t3) && e4.typeChangeSubscriptions.get(t3).forEach(function(e5) {
                e5();
              });
            }), this.changedTypeVars.clear();
          }, e3.prototype.getModifierForVariable = function(e4) {
            var t3 = this;
            return function(r3) {
              var n3 = e4.varName, o3 = e4.sourceValue, a3 = e4.rule, i3 = e4.ignoredImgSelectors, u2 = e4.isCancelled, s3 = function() {
                var e5 = [], s4 = function(a4, i4, u3) {
                  if (t3.isVarType(n3, a4)) {
                    var s5, c4 = i4(n3);
                    if (Wt(o3))
                      if (It(o3)) {
                        var l3 = Ht(o3, t3.unstableVarValues);
                        l3 || (l3 = a4 === 1 ? "#ffffff" : "#000000"), s5 = u3(l3, r3);
                      } else
                        s5 = Ot(o3, function(e6) {
                          return i4(e6);
                        }, function(e6) {
                          return u3(e6, r3);
                        });
                    else
                      s5 = u3(o3, r3);
                    e5.push({ property: c4, value: s5 });
                  }
                };
                if (s4(1, Dt, Ut), s4(2, Ft, $t), s4(4, qt, zt), t3.isVarType(n3, 8)) {
                  var c3 = Nt(n3), l2 = o3;
                  Wt(o3) && (l2 = Ot(o3, function(e6) {
                    return Dt(e6);
                  }, function(e6) {
                    return Ut(e6, r3);
                  }));
                  var d2 = Mt(l2, a3, i3, u2);
                  l2 = typeof d2 == "function" ? d2(r3) : d2, e5.push({ property: c3, value: l2 });
                }
                return e5;
              }, c2 = /* @__PURE__ */ new Set();
              return { declarations: s3(), onTypeChange: { addListener: function(e5) {
                var r4 = function() {
                  var t4 = s3();
                  e5(t4);
                };
                c2.add(r4), t3.subscribeForVarTypeChange(n3, r4);
              }, removeListeners: function() {
                c2.forEach(function(e5) {
                  t3.unsubscribeFromVariableTypeChanges(n3, e5);
                });
              } } };
            };
          }, e3.prototype.getModifierForVarDependant = function(e4, t3) {
            var r3 = this;
            if (t3.match(/^\s*(rgb|hsl)a?\(/)) {
              var n3 = e4.startsWith("background"), o3 = e4 === "color";
              return function(e5) {
                var a4 = Ht(t3, r3.unstableVarValues);
                return a4 || (a4 = n3 ? "#ffffff" : "#000000"), (n3 ? Ut : o3 ? $t : zt)(a4, e5);
              };
            }
            if (e4 === "background-color")
              return function(e5) {
                return Ot(t3, function(e6) {
                  return Dt(e6);
                }, function(t4) {
                  return Ut(t4, e5);
                });
              };
            if (e4 === "color")
              return function(e5) {
                return Ot(t3, function(e6) {
                  return Ft(e6);
                }, function(t4) {
                  return $t(t4, e5);
                });
              };
            if (e4 === "background" || e4 === "background-image" || e4 === "box-shadow")
              return function(e5) {
                var n4 = /* @__PURE__ */ new Set(), o4 = function() {
                  return Ot(t3, function(e6) {
                    return r3.isVarType(e6, 1) ? Dt(e6) : r3.isVarType(e6, 8) ? Nt(e6) : (n4.add(e6), e6);
                  }, function(t4) {
                    return Ut(t4, e5);
                  });
                }, a4 = o4();
                return n4.size > 0 ? new Promise(function(e6) {
                  var t4 = n4.values().next().value, a5 = function() {
                    r3.unsubscribeFromVariableTypeChanges(t4, a5);
                    var n5 = o4();
                    e6(n5);
                  };
                  r3.subscribeForVarTypeChange(t4, a5);
                }) : a4;
              };
            if (e4.startsWith("border") || e4.startsWith("outline")) {
              if (t3.endsWith(")")) {
                var a3 = t3.match(/((rgb|hsl)a?)\(/);
                if (a3) {
                  var i3 = a3.index;
                  return function(e5) {
                    return Ht(t3, r3.unstableVarValues) ? "" + t3.substring(0, i3) + zt(Ht(t3.substring(i3, t3.length), r3.unstableVarValues), e5) : t3;
                  };
                }
              }
              return function(e5) {
                return Ot(t3, function(e6) {
                  return qt(e6);
                }, function(t4) {
                  return $t(t4, e5);
                });
              };
            }
            return null;
          }, e3.prototype.subscribeForVarTypeChange = function(e4, t3) {
            this.typeChangeSubscriptions.has(e4) || this.typeChangeSubscriptions.set(e4, /* @__PURE__ */ new Set()), this.typeChangeSubscriptions.get(e4).add(t3);
          }, e3.prototype.unsubscribeFromVariableTypeChanges = function(e4, t3) {
            this.typeChangeSubscriptions.has(e4) && this.typeChangeSubscriptions.get(e4).delete(t3);
          }, e3.prototype.collectVariables = function(e4) {
            var t3 = this;
            !function(e5, t4) {
              ae(e5, function(e6) {
                e6.style && se(e6.style, function(e7, r3) {
                  e7.startsWith("--") && t4(e7, r3);
                });
              });
            }(e4, function(e5, r3) {
              t3.inspectVariable(e5, r3);
            });
          }, e3.prototype.collectRootVariables = function() {
            var e4 = this;
            se(document.documentElement.style, function(t3, r3) {
              Bt(t3) && e4.inspectVariable(t3, r3);
            });
          }, e3.prototype.inspectVariable = function(e4, t3) {
            (this.unstableVarValues.set(e4, t3), Wt(t3) && It(t3) && (this.unknownColorVars.add(e4), this.definedVars.add(e4)), this.definedVars.has(e4)) || (this.definedVars.add(e4), xt(t3) ? this.unknownColorVars.add(e4) : (t3.includes("url(") || t3.includes("linear-gradient(") || t3.includes("radial-gradient(")) && this.resolveVariableType(e4, 8));
          }, e3.prototype.resolveVariableType = function(e4, t3) {
            var r3 = this.initialVarTypes.get(e4) || 0, n3 = (this.varTypes.get(e4) || 0) | t3;
            this.varTypes.set(e4, n3), (n3 !== r3 || this.undefinedVars.has(e4)) && (this.changedTypeVars.add(e4), this.undefinedVars.delete(e4)), this.unknownColorVars.delete(e4), this.unknownBgVars.delete(e4);
          }, e3.prototype.collectVarDependants = function(e4) {
            var t3 = this;
            !function(e5, t4) {
              ae(e5, function(e6) {
                e6.style && se(e6.style, function(e7, r3) {
                  Wt(r3) && t4(e7, r3);
                });
              });
            }(e4, function(e5, r3) {
              t3.inspectVerDependant(e5, r3);
            });
          }, e3.prototype.collectRootVarDependants = function() {
            var e4 = this;
            se(document.documentElement.style, function(t3, r3) {
              Wt(r3) && e4.inspectVerDependant(t3, r3);
            });
          }, e3.prototype.inspectVerDependant = function(e4, t3) {
            var r3 = this;
            Bt(e4) ? this.iterateVarDeps(t3, function(t4) {
              r3.varRefs.has(e4) || r3.varRefs.set(e4, /* @__PURE__ */ new Set()), r3.varRefs.get(e4).add(t4);
            }) : e4 === "background-color" || e4 === "box-shadow" ? this.iterateVarDeps(t3, function(e5) {
              return r3.resolveVariableType(e5, 1);
            }) : e4 === "color" ? this.iterateVarDeps(t3, function(e5) {
              return r3.resolveVariableType(e5, 2);
            }) : e4.startsWith("border") || e4.startsWith("outline") ? this.iterateVarDeps(t3, function(e5) {
              return r3.resolveVariableType(e5, 4);
            }) : e4 !== "background" && e4 !== "background-image" || this.iterateVarDeps(t3, function(e5) {
              if (!r3.isVarType(e5, 9)) {
                var t4 = r3.findVarRef(e5, function(e6) {
                  return r3.unknownColorVars.has(e6) || r3.isVarType(e6, 6);
                }) != null;
                r3.itarateVarRefs(e5, function(e6) {
                  t4 ? r3.resolveVariableType(e6, 1) : r3.unknownBgVars.add(e6);
                });
              }
            });
          }, e3.prototype.iterateVarDeps = function(e4, t3) {
            var r3 = /* @__PURE__ */ new Set();
            !function(e5, t4) {
              Ot(e5, function(e6) {
                return t4(e6), e6;
              });
            }(e4, function(e5) {
              return r3.add(e5);
            }), r3.forEach(function(e5) {
              return t3(e5);
            });
          }, e3.prototype.findVarRef = function(e4, t3, r3) {
            var n3, a3;
            if (r3 === void 0 && (r3 = /* @__PURE__ */ new Set()), r3.has(e4))
              return null;
            if (r3.add(e4), t3(e4))
              return e4;
            var i3 = this.varRefs.get(e4);
            if (!i3 || i3.size === 0)
              return null;
            try {
              for (var u2 = o2(i3), s3 = u2.next(); !s3.done; s3 = u2.next()) {
                var c2 = s3.value, l2 = this.findVarRef(c2, t3, r3);
                if (l2)
                  return l2;
              }
            } catch (e5) {
              n3 = { error: e5 };
            } finally {
              try {
                s3 && !s3.done && (a3 = u2.return) && a3.call(u2);
              } finally {
                if (n3)
                  throw n3.error;
              }
            }
            return null;
          }, e3.prototype.itarateVarRefs = function(e4, t3) {
            this.findVarRef(e4, function(e5) {
              return t3(e5), false;
            });
          }, e3.prototype.putRootVars = function(e4, t3) {
            var r3, n3, i3 = this, u2 = e4.sheet;
            u2.cssRules.length > 0 && u2.deleteRule(0);
            var s3 = /* @__PURE__ */ new Map();
            se(document.documentElement.style, function(e5, r4) {
              Bt(e5) && (i3.isVarType(e5, 1) && s3.set(Dt(e5), Ut(r4, t3)), i3.isVarType(e5, 2) && s3.set(Ft(e5), $t(r4, t3)), i3.isVarType(e5, 4) && s3.set(qt(e5), zt(r4, t3)));
            });
            var c2 = [];
            c2.push(":root {");
            try {
              for (var l2 = o2(s3), d2 = l2.next(); !d2.done; d2 = l2.next()) {
                var f2 = a2(d2.value, 2), h2 = f2[0], p2 = f2[1];
                c2.push("    " + h2 + ": " + p2 + ";");
              }
            } catch (e5) {
              r3 = { error: e5 };
            } finally {
              try {
                d2 && !d2.done && (n3 = l2.return) && n3.call(l2);
              } finally {
                if (r3)
                  throw r3.error;
              }
            }
            c2.push("}");
            var v2 = c2.join("\n");
            u2.insertRule(v2);
          }, e3;
        }())();
        function Lt(e3, t3) {
          t3 === void 0 && (t3 = 0);
          var r3 = e3.indexOf("var(", t3);
          if (r3 >= 0) {
            var n3 = function(e4, t4) {
              t4 === void 0 && (t4 = 0);
              for (var r4 = e4.length, n4 = 0, o3 = -1, a3 = t4; a3 < r4; a3++)
                if (n4 === 0) {
                  if ((i3 = e4.indexOf("(", a3)) < 0)
                    break;
                  o3 = i3, n4++, a3 = i3;
                } else {
                  var i3, u2 = e4.indexOf(")", a3);
                  if (u2 < 0)
                    break;
                  if ((i3 = e4.indexOf("(", a3)) < 0 || u2 < i3) {
                    if (--n4 == 0)
                      return { start: o3, end: u2 + 1 };
                    a3 = u2;
                  } else
                    n4++, a3 = i3;
                }
              return null;
            }(e3, r3 + 3);
            return n3 ? { start: r3, end: n3.end } : null;
          }
        }
        function Pt(e3, t3) {
          var r3 = function(e4) {
            for (var t4, r4 = [], n4 = 0; t4 = Lt(e4, n4); ) {
              var o4 = t4.start, a4 = t4.end;
              r4.push({ start: o4, end: a4, value: e4.substring(o4, a4) }), n4 = t4.end + 1;
            }
            return r4;
          }(e3), n3 = r3.length;
          if (n3 === 0)
            return e3;
          var o3 = e3.length, a3 = r3.map(function(e4) {
            return t3(e4.value);
          }), i3 = [];
          i3.push(e3.substring(0, r3[0].start));
          for (var u2 = 0; u2 < n3; u2++) {
            i3.push(a3[u2]);
            var s3 = r3[u2].end, c2 = u2 < n3 - 1 ? r3[u2 + 1].start : o3;
            i3.push(e3.substring(s3, c2));
          }
          return i3.join("");
        }
        function jt(e3) {
          var t3, r3, n3 = e3.indexOf(",");
          return n3 >= 0 ? (t3 = e3.substring(4, n3).trim(), r3 = e3.substring(n3 + 1, e3.length - 1).trim()) : (t3 = e3.substring(4, e3.length - 1).trim(), r3 = ""), { name: t3, fallback: r3 };
        }
        function Ot(e3, t3, r3) {
          return Pt(e3, function(e4) {
            var n3 = jt(e4), o3 = n3.name, a3 = n3.fallback, i3 = t3(o3);
            return a3 ? "var(" + i3 + ", " + (Wt(a3) ? Ot(a3, t3, r3) : r3 ? r3(a3) : a3) + ")" : "var(" + i3 + ")";
          });
        }
        function Dt(e3) {
          return "--darkreader-bg" + e3;
        }
        function Ft(e3) {
          return "--darkreader-text" + e3;
        }
        function qt(e3) {
          return "--darkreader-border" + e3;
        }
        function Nt(e3) {
          return "--darkreader-bgimg" + e3;
        }
        function Bt(e3) {
          return e3.startsWith("--");
        }
        function Wt(e3) {
          return e3.includes("var(");
        }
        function It(e3) {
          return e3.match(/^\s*(rgb|hsl)a?\(/);
        }
        function Ut(e3, t3) {
          var r3 = xt(e3);
          return r3 ? Je(r3, t3) : e3;
        }
        function $t(e3, t3) {
          var r3 = xt(e3);
          return r3 ? tt(r3, t3) : e3;
        }
        function zt(e3, t3) {
          var r3 = xt(e3);
          return r3 ? nt(r3, t3) : e3;
        }
        function Ht(e3, t3, r3) {
          r3 === void 0 && (r3 = /* @__PURE__ */ new Set());
          var n3 = false, o3 = Pt(e3, function(e4) {
            var o4 = jt(e4), a3 = o4.name, i3 = o4.fallback;
            if (r3.has(a3))
              return n3 = true, null;
            r3.add(a3);
            var u2 = t3.get(a3) || i3, s3 = null;
            return u2 && (s3 = Wt(u2) ? Ht(u2, t3, r3) : u2), s3 || (n3 = true, null);
          });
          return n3 ? null : o3;
        }
        var Gt = { "background-color": { customProp: "--darkreader-inline-bgcolor", cssProp: "background-color", dataAttr: "data-darkreader-inline-bgcolor" }, "background-image": { customProp: "--darkreader-inline-bgimage", cssProp: "background-image", dataAttr: "data-darkreader-inline-bgimage" }, "border-color": { customProp: "--darkreader-inline-border", cssProp: "border-color", dataAttr: "data-darkreader-inline-border" }, "border-bottom-color": { customProp: "--darkreader-inline-border-bottom", cssProp: "border-bottom-color", dataAttr: "data-darkreader-inline-border-bottom" }, "border-left-color": { customProp: "--darkreader-inline-border-left", cssProp: "border-left-color", dataAttr: "data-darkreader-inline-border-left" }, "border-right-color": { customProp: "--darkreader-inline-border-right", cssProp: "border-right-color", dataAttr: "data-darkreader-inline-border-right" }, "border-top-color": { customProp: "--darkreader-inline-border-top", cssProp: "border-top-color", dataAttr: "data-darkreader-inline-border-top" }, "box-shadow": { customProp: "--darkreader-inline-boxshadow", cssProp: "box-shadow", dataAttr: "data-darkreader-inline-boxshadow" }, color: { customProp: "--darkreader-inline-color", cssProp: "color", dataAttr: "data-darkreader-inline-color" }, fill: { customProp: "--darkreader-inline-fill", cssProp: "fill", dataAttr: "data-darkreader-inline-fill" }, stroke: { customProp: "--darkreader-inline-stroke", cssProp: "stroke", dataAttr: "data-darkreader-inline-stroke" }, "outline-color": { customProp: "--darkreader-inline-outline", cssProp: "outline-color", dataAttr: "data-darkreader-inline-outline" }, "stop-color": { customProp: "--darkreader-inline-stopcolor", cssProp: "stop-color", dataAttr: "data-darkreader-inline-stopcolor" } }, Qt = Object.values(Gt), Kt = {};
        Qt.forEach(function(e3) {
          var t3 = e3.cssProp, r3 = e3.customProp;
          return Kt[r3] = t3;
        });
        var Jt = ["style", "fill", "stop-color", "stroke", "bgcolor", "color"], Xt = Jt.map(function(e3) {
          return "[" + e3 + "]";
        }).join(", ");
        function Yt() {
          return Qt.map(function(e3) {
            var t3 = e3.dataAttr, r3 = e3.customProp;
            return ["[" + t3 + "] {", "  " + e3.cssProp + ": var(" + r3 + ") !important;", "}"].join("\n");
          }).join("\n");
        }
        var Zt = /* @__PURE__ */ new Map(), er = /* @__PURE__ */ new Map();
        function tr(e3, t3, r3) {
          Zt.has(e3) && (Zt.get(e3).disconnect(), er.get(e3).disconnect());
          var n3 = /* @__PURE__ */ new WeakSet();
          function o3(e4) {
            (function(e5) {
              var t4 = [];
              return e5 instanceof Element && e5.matches(Xt) && t4.push(e5), (e5 instanceof Element || m && e5 instanceof ShadowRoot || e5 instanceof Document) && O(t4, e5.querySelectorAll(Xt)), t4;
            })(e4).forEach(function(e5) {
              n3.has(e5) || (n3.add(e5), t3(e5));
            }), I(e4, function(o4) {
              n3.has(e4) || (n3.add(e4), r3(o4.shadowRoot), tr(o4.shadowRoot, t3, r3));
            });
          }
          var u2 = ee(e3, { onMinorMutations: function(e4) {
            e4.additions.forEach(function(e5) {
              return o3(e5);
            });
          }, onHugeMutations: function() {
            o3(e3);
          } });
          Zt.set(e3, u2);
          var s3 = 0, c2 = null, l2 = N({ seconds: 10 }), d2 = N({ seconds: 2 }), f2 = [], h2 = null, p2 = q(function(e4) {
            e4.forEach(function(e5) {
              Jt.includes(e5.attributeName) && t3(e5.target);
            });
          }), v2 = new MutationObserver(function(e4) {
            if (h2)
              f2.push.apply(f2, i2([], a2(e4)));
            else {
              s3++;
              var t4 = Date.now();
              if (c2 == null)
                c2 = t4;
              else if (s3 >= 50) {
                if (t4 - c2 < l2)
                  return h2 = setTimeout(function() {
                    c2 = null, s3 = 0, h2 = null;
                    var e5 = f2;
                    f2 = [], p2(e5);
                  }, d2), void f2.push.apply(f2, i2([], a2(e4)));
                c2 = t4, s3 = 1;
              }
              p2(e4);
            }
          });
          v2.observe(e3, { attributes: true, attributeFilter: Jt.concat(Qt.map(function(e4) {
            return e4.dataAttr;
          })), subtree: true }), er.set(e3, v2);
        }
        var rr = /* @__PURE__ */ new WeakMap(), nr = ["brightness", "contrast", "grayscale", "sepia", "mode"];
        function or(e3, t3) {
          return Jt.map(function(t4) {
            return t4 + '="' + e3.getAttribute(t4) + '"';
          }).concat(nr.map(function(e4) {
            return e4 + '="' + t3[e4] + '"';
          })).join(" ");
        }
        function ar(e3, t3, r3, n3) {
          if (or(e3, t3) !== rr.get(e3)) {
            var o3 = new Set(Object.keys(Gt));
            if (r3.length > 0 && function(e4, t4) {
              for (var r4 = 0, n4 = t4.length; r4 < n4; r4++) {
                var o4 = t4[r4];
                if (e4.matches(o4))
                  return true;
              }
              return false;
            }(e3, r3))
              o3.forEach(function(t4) {
                e3.removeAttribute(Gt[t4].dataAttr);
              });
            else {
              if (e3.hasAttribute("bgcolor"))
                ((u2 = e3.getAttribute("bgcolor")).match(/^[0-9a-f]{3}$/i) || u2.match(/^[0-9a-f]{6}$/i)) && (u2 = "#" + u2), s3("background-color", "background-color", u2);
              if (e3.hasAttribute("color"))
                ((u2 = e3.getAttribute("color")).match(/^[0-9a-f]{3}$/i) || u2.match(/^[0-9a-f]{6}$/i)) && (u2 = "#" + u2), s3("color", "color", u2);
              if (e3 instanceof SVGElement) {
                if (e3.hasAttribute("fill")) {
                  var a3 = e3.getAttribute("fill");
                  if (e3 instanceof SVGTextElement)
                    s3("fill", "color", a3);
                  else {
                    var i3 = function() {
                      var t4 = e3.getBoundingClientRect(), r4 = t4.width, n4 = t4.height;
                      s3("fill", r4 > 32 || n4 > 32 ? "background-color" : "color", a3);
                    };
                    G() ? i3() : K(i3);
                  }
                }
                e3.hasAttribute("stop-color") && s3("stop-color", "background-color", e3.getAttribute("stop-color"));
              }
              if (e3.hasAttribute("stroke")) {
                var u2 = e3.getAttribute("stroke");
                s3("stroke", e3 instanceof SVGLineElement || e3 instanceof SVGTextElement ? "border-color" : "color", u2);
              }
              e3.style && se(e3.style, function(t4, r4) {
                if (t4 !== "background-image" || !r4.includes("url"))
                  if (Gt.hasOwnProperty(t4))
                    s3(t4, t4, r4);
                  else {
                    var n4 = Kt[t4];
                    !n4 || e3.style.getPropertyValue(n4) || e3.hasAttribute(n4) || e3.style.setProperty(t4, "");
                  }
              }), e3.style && e3 instanceof SVGTextElement && e3.style.fill && s3("fill", "color", e3.style.getPropertyValue("fill")), j(o3, function(t4) {
                e3.removeAttribute(Gt[t4].dataAttr);
              }), rr.set(e3, or(e3, t3));
            }
          }
          function s3(r4, a4, i4) {
            var u3 = Gt[r4], s4 = u3.customProp, c2 = u3.dataAttr, l2 = bt(a4, i4, null, At, n3, null);
            if (l2) {
              var d2 = l2.value;
              typeof d2 == "function" && (d2 = d2(t3)), e3.style.setProperty(s4, d2), e3.hasAttribute(c2) || e3.setAttribute(c2, ""), o3.delete(r4);
            }
          }
        }
        var ir = "theme-color", ur = 'meta[name="theme-color"]', sr = null, cr = null;
        function lr(e3, t3) {
          sr = sr || e3.content;
          try {
            var r3 = Se(sr);
            e3.content = Je(r3, t3);
          } catch (e4) {
            F(e4);
          }
        }
        var dr = ["mode", "brightness", "contrast", "grayscale", "sepia", "darkSchemeBackgroundColor", "darkSchemeTextColor", "lightSchemeBackgroundColor", "lightSchemeTextColor"];
        var fr = function() {
          var e3 = [], t3 = null;
          function r3() {
            for (var r4; r4 = e3.shift(); )
              r4();
            t3 = null;
          }
          return { add: function(n3) {
            e3.push(n3), t3 || (t3 = requestAnimationFrame(r3));
          }, cancel: function() {
            e3.splice(0), cancelAnimationFrame(t3), t3 = null;
          } };
        }();
        function hr() {
          var e3 = 0, t3 = /* @__PURE__ */ new Set(), r3 = /* @__PURE__ */ new Map(), n3 = /* @__PURE__ */ new Set(), o3 = null, u2 = false, s3 = false;
          return { modifySheet: function(c2) {
            var l2 = c2.sourceCSSRules, d2 = c2.theme, f2 = c2.ignoreImageAnalysis, h2 = c2.force, p2 = c2.prepareSheet, v2 = c2.isAsyncCancelled, m2 = r3.size === 0, g2 = new Set(r3.keys()), b2 = function(e4) {
              return dr.map(function(t4) {
                return t4 + ":" + e4[t4];
              }).join(";");
            }(d2), y2 = b2 !== o3;
            u2 && (s3 = true);
            var w2 = [];
            if (ae(l2, function(e4) {
              var n4 = e4.cssText, o4 = false;
              if (g2.delete(n4), e4.parentRule instanceof CSSMediaRule && (n4 += ";" + e4.parentRule.media.mediaText), t3.has(n4) || (t3.add(n4), o4 = true), o4) {
                m2 = true;
                var a3 = [];
                e4.style && se(e4.style, function(t4, r4) {
                  var n5 = bt(t4, r4, e4, At, f2, v2);
                  n5 && a3.push(n5);
                });
                var i3 = null;
                if (a3.length > 0) {
                  var u3 = e4.parentRule;
                  i3 = { selector: e4.selectorText, declarations: a3, parentRule: u3 }, w2.push(i3);
                }
                r3.set(n4, i3);
              } else
                w2.push(r3.get(n4));
            }, function() {
              u2 = true;
            }), g2.forEach(function(e4) {
              t3.delete(e4), r3.delete(e4);
            }), o3 = b2, h2 || m2 || y2) {
              e3++;
              var k2 = /* @__PURE__ */ new Map(), S2 = /* @__PURE__ */ new Map(), _2 = 0, E2 = 0, x2 = { rule: null, rules: [], isGroup: true }, C2 = /* @__PURE__ */ new WeakMap();
              n3.forEach(function(e4) {
                return e4();
              }), n3.clear(), w2.filter(function(e4) {
                return e4;
              }).forEach(function(t4) {
                var r4 = t4.selector, o4 = t4.declarations, u3 = M2(t4.parentRule), s4 = { selector: r4, declarations: [], isGroup: false }, c3 = s4.declarations;
                function l3(t5, r5, n4, o5) {
                  var a3 = ++_2, i3 = { property: t5, value: null, important: n4, asyncKey: a3, sourceValue: o5 };
                  c3.push(i3);
                  var u4 = e3;
                  r5.then(function(t6) {
                    t6 && !v2() && u4 === e3 && (i3.value = t6, fr.add(function() {
                      v2() || u4 !== e3 || function(e4) {
                        var t7 = k2.get(e4), r6 = t7.rule, n5 = t7.target, o6 = t7.index;
                        n5.deleteRule(o6), R2(n5, o6, r6), k2.delete(e4);
                      }(a3);
                    }));
                  });
                }
                function f3(t5, r5, o5, u4) {
                  var s5 = r5, d3 = s5.declarations, f4 = s5.onTypeChange, h3 = ++E2, p3 = e3, m3 = c3.length, g3 = [];
                  if (d3.length === 0) {
                    var b3 = { property: t5, value: u4, important: o5, sourceValue: u4, varKey: h3 };
                    c3.push(b3), g3 = [b3];
                  }
                  d3.forEach(function(e4) {
                    if (e4.value instanceof Promise)
                      l3(e4.property, e4.value, o5, u4);
                    else {
                      var t6 = { property: e4.property, value: e4.value, important: o5, sourceValue: u4, varKey: h3 };
                      c3.push(t6), g3.push(t6);
                    }
                  }), f4.addListener(function(t6) {
                    if (!v2() && p3 === e3) {
                      var r6 = t6.map(function(e4) {
                        return { property: e4.property, value: e4.value, important: o5, sourceValue: u4, varKey: h3 };
                      }), n4 = c3.indexOf(g3[0], m3);
                      c3.splice.apply(c3, i2([n4, g3.length], a2(r6))), g3 = r6, function(e4) {
                        var t7 = S2.get(e4), r7 = t7.rule, n5 = t7.target, o6 = t7.index;
                        n5.deleteRule(o6), R2(n5, o6, r7);
                      }(h3);
                    }
                  }), n3.add(function() {
                    return f4.removeListeners();
                  });
                }
                u3.rules.push(s4), o4.forEach(function(e4) {
                  var t5 = e4.property, r5 = e4.value, n4 = e4.important, o5 = e4.sourceValue;
                  if (typeof r5 == "function") {
                    var a3 = r5(d2);
                    a3 instanceof Promise ? l3(t5, a3, n4, o5) : t5.startsWith("--") ? f3(t5, a3, n4, o5) : c3.push({ property: t5, value: a3, important: n4, sourceValue: o5 });
                  } else
                    c3.push({ property: t5, value: r5, important: n4, sourceValue: o5 });
                });
              });
              var V2 = p2();
              !function e4(t4, r4, n4) {
                t4.rules.forEach(function(t5) {
                  t5.isGroup ? e4(t5, function(e5, t6) {
                    var r5 = e5.rule;
                    if (r5 instanceof CSSMediaRule) {
                      var n5 = r5.media, o4 = t6.cssRules.length;
                      return t6.insertRule("@media " + n5.mediaText + " {}", o4), t6.cssRules[o4];
                    }
                    return t6;
                  }(t5, r4), n4) : n4(t5, r4);
                });
              }(x2, V2, function(e4, t4) {
                var r4 = t4.cssRules.length;
                e4.declarations.forEach(function(n4) {
                  var o4 = n4.asyncKey, a3 = n4.varKey;
                  o4 != null && k2.set(o4, { rule: e4, target: t4, index: r4 }), a3 != null && S2.set(a3, { rule: e4, target: t4, index: r4 });
                }), R2(t4, r4, e4);
              });
            }
            function R2(e4, t4, r4) {
              var n4 = r4.selector + " { " + r4.declarations.map(function(e5) {
                var t5 = e5.property, r5 = e5.value, n5 = e5.important, o4 = e5.sourceValue;
                return t5 + ": " + (r5 == null ? o4 : r5) + (n5 ? " !important" : "") + ";";
              }).join(" ") + " }";
              e4.insertRule(n4, t4);
            }
            function M2(e4) {
              if (e4 == null)
                return x2;
              if (C2.has(e4))
                return C2.get(e4);
              var t4 = { rule: e4, rules: [], isGroup: true };
              return C2.set(e4, t4), M2(e4.parentRule).rules.push(t4), t4;
            }
          }, shouldRebuildStyle: function() {
            return u2 && !s3;
          } };
        }
        function pr(e3) {
          return (e3 instanceof HTMLStyleElement || e3 instanceof SVGStyleElement || e3 instanceof HTMLLinkElement && e3.rel && e3.rel.toLowerCase().includes("stylesheet") && !e3.disabled) && !e3.classList.contains("darkreader") && e3.media.toLowerCase() !== "print" && !e3.classList.contains("stylus");
        }
        function vr(e3, t3, r3) {
          return t3 === void 0 && (t3 = []), r3 === void 0 && (r3 = true), pr(e3) ? t3.push(e3) : (e3 instanceof Element || m && e3 instanceof ShadowRoot || e3 === document) && (j(e3.querySelectorAll('style, link[rel*="stylesheet" i]:not([disabled])'), function(e4) {
            return vr(e4, t3, false);
          }), r3 && I(e3, function(e4) {
            return vr(e4.shadowRoot, t3, false);
          })), t3;
        }
        var mr = /* @__PURE__ */ new WeakSet(), gr = /* @__PURE__ */ new WeakSet(), br = false;
        document.addEventListener("__darkreader__inlineScriptsAllowed", function() {
          br = true;
        });
        var yr = 0, wr = /* @__PURE__ */ new Map();
        function kr(e3, t3) {
          for (var o3 = t3.update, i3 = t3.loadingStart, u2 = t3.loadingEnd, s3 = [], d2 = e3; (d2 = d2.nextElementSibling) && d2.matches(".darkreader"); )
            s3.push(d2);
          var h2 = s3.find(function(e4) {
            return e4.matches(".darkreader--cors") && !gr.has(e4);
          }) || null, p2 = s3.find(function(e4) {
            return e4.matches(".darkreader--sync") && !mr.has(e4);
          }) || null, v2 = null, m2 = null, g2 = false, b2 = true, y2 = hr(), w2 = new MutationObserver(function() {
            o3();
          }), k2 = { attributes: true, childList: true, subtree: true, characterData: true };
          function S2() {
            return e3 instanceof HTMLStyleElement && e3.textContent.trim().match(le);
          }
          function _2() {
            return h2 ? h2.sheet.cssRules : S2() ? null : A2();
          }
          function E2() {
            h2 ? (e3.nextSibling !== h2 && e3.parentNode.insertBefore(h2, e3.nextSibling), h2.nextSibling !== p2 && e3.parentNode.insertBefore(p2, h2.nextSibling)) : e3.nextSibling !== p2 && e3.parentNode.insertBefore(p2, e3.nextSibling);
          }
          var x2 = false, C2 = false, V2 = ++yr;
          function R2() {
            return r2(this, void 0, void 0, function() {
              var t4, r3, o4, i4, u3, s4, c2;
              return n2(this, function(n3) {
                switch (n3.label) {
                  case 0:
                    if (!(e3 instanceof HTMLLinkElement))
                      return [3, 7];
                    if (o4 = a2(T2(), 2), i4 = o4[0], (u3 = o4[1]) && F(u3), !(!i4 && !u3 && !f || f && !e3.sheet || (l2 = u3, l2 && l2.message && l2.message.includes("loading"))))
                      return [3, 5];
                    n3.label = 1;
                  case 1:
                    return n3.trys.push([1, 3, , 4]), D("Linkelement " + V2 + " is not loaded yet and thus will be await for", e3), [4, Sr(e3, V2)];
                  case 2:
                    return n3.sent(), [3, 4];
                  case 3:
                    return F(n3.sent()), C2 = true, [3, 4];
                  case 4:
                    if (g2)
                      return [2, null];
                    c2 = a2(T2(), 2), i4 = c2[0], (u3 = c2[1]) && F(u3), n3.label = 5;
                  case 5:
                    return i4 != null ? [2, i4] : [4, _r(e3.href)];
                  case 6:
                    return t4 = n3.sent(), r3 = fe(e3.href), g2 ? [2, null] : [3, 8];
                  case 7:
                    if (!S2())
                      return [2, null];
                    t4 = e3.textContent.trim(), r3 = fe(location.href), n3.label = 8;
                  case 8:
                    if (!t4)
                      return [3, 13];
                    n3.label = 9;
                  case 9:
                    return n3.trys.push([9, 11, , 12]), [4, Er(t4, r3)];
                  case 10:
                    return s4 = n3.sent(), h2 = function(e4, t5) {
                      if (!t5)
                        return null;
                      var r4 = document.createElement("style");
                      return r4.classList.add("darkreader"), r4.classList.add("darkreader--cors"), r4.media = "screen", r4.textContent = t5, e4.parentNode.insertBefore(r4, e4.nextSibling), r4.sheet.disabled = true, gr.add(r4), r4;
                    }(e3, s4), [3, 12];
                  case 11:
                    return F(n3.sent()), [3, 12];
                  case 12:
                    if (h2)
                      return v2 = W(h2, "prev-sibling"), [2, h2.sheet.cssRules];
                    n3.label = 13;
                  case 13:
                    return [2, null];
                }
                var l2;
              });
            });
          }
          var M2 = false;
          function T2() {
            try {
              return e3.sheet == null ? [null, null] : [e3.sheet.cssRules, null];
            } catch (e4) {
              return [null, e4];
            }
          }
          function A2() {
            var e4 = a2(T2(), 2), t4 = e4[0], r3 = e4[1];
            return r3 ? (F(r3), null) : t4;
          }
          function L2() {
            e3.addEventListener("__darkreader__updateSheet", I2), l || br && e3.sheet || function() {
              P2 = O2(), q2();
              var t4 = function() {
                O2() !== P2 && (P2 = O2(), o3()), br && e3.sheet ? q2() : j2 = requestAnimationFrame(t4);
              };
              t4();
            }();
          }
          var P2 = null, j2 = null;
          function O2() {
            var e4 = A2();
            return e4 ? e4.length : null;
          }
          function q2() {
            cancelAnimationFrame(j2);
          }
          var N2 = false;
          function I2() {
            function e4() {
              N2 = false, g2 || o3();
            }
            br = true, q2(), N2 || (N2 = true, typeof queueMicrotask == "function" ? queueMicrotask(e4) : requestAnimationFrame(e4));
          }
          function U2() {
            e3.removeEventListener("__darkreader__updateSheet", I2), q2();
          }
          function $13() {
            w2.disconnect(), g2 = true, v2 && v2.stop(), m2 && m2.stop(), U2();
          }
          var z2 = 0;
          return { details: function() {
            var e4 = _2();
            return e4 ? { rules: e4 } : (x2 || C2 || (x2 = true, i3(), R2().then(function(e5) {
              x2 = false, u2(), e5 && o3();
            }).catch(function(e5) {
              F(e5), x2 = false, u2();
            })), null);
          }, render: function(t4, r3) {
            var n3 = _2();
            function a3() {
              p2 || ((p2 = e3 instanceof SVGStyleElement ? document.createElementNS("http://www.w3.org/2000/svg", "style") : document.createElement("style")).classList.add("darkreader"), p2.classList.add("darkreader--sync"), p2.media = "screen", !c && e3.title && (p2.title = e3.title), mr.add(p2)), m2 && m2.stop(), E2(), p2.sheet == null && (p2.textContent = "");
              for (var t5 = p2.sheet, r4 = t5.cssRules.length - 1; r4 >= 0; r4--)
                t5.deleteRule(r4);
              return m2 ? m2.run() : m2 = W(p2, "prev-sibling", function() {
                M2 = true, i4();
              }), p2.sheet;
            }
            function i4() {
              var e4 = M2;
              M2 = false, y2.modifySheet({ prepareSheet: a3, sourceCSSRules: n3, theme: t4, ignoreImageAnalysis: r3, force: e4, isAsyncCancelled: function() {
                return g2;
              } }), b2 = p2.sheet.cssRules.length === 0, y2.shouldRebuildStyle() && K(function() {
                return o3();
              });
            }
            n3 && (g2 = false, i4());
          }, pause: $13, destroy: function() {
            if ($13(), B(h2), B(p2), u2(), wr.has(V2)) {
              var e4 = wr.get(V2);
              wr.delete(V2), e4 && e4();
            }
          }, watch: function() {
            w2.observe(e3, k2), e3 instanceof HTMLStyleElement && L2();
          }, restore: function() {
            p2 && (++z2 > 10 ? F("Style sheet was moved multiple times", e3) : (F("Restore style", p2, e3), E2(), v2 && v2.skip(), m2 && m2.skip(), b2 || (M2 = true, o3())));
          } };
        }
        function Sr(e3, t3) {
          return r2(this, void 0, void 0, function() {
            return n2(this, function(r3) {
              return [2, new Promise(function(r4, n3) {
                var o3 = function() {
                  e3.removeEventListener("load", a3), e3.removeEventListener("error", i3), wr.delete(t3);
                }, a3 = function() {
                  o3(), D("Linkelement " + t3 + " has been loaded"), r4();
                }, i3 = function() {
                  o3(), n3("Linkelement " + t3 + " couldn't be loaded. " + e3.href);
                };
                wr.set(t3, function() {
                  o3(), n3();
                }), e3.addEventListener("load", a3), e3.addEventListener("error", i3), e3.href || i3();
              })];
            });
          });
        }
        function _r(e3) {
          return r2(this, void 0, void 0, function() {
            return n2(this, function(t3) {
              switch (t3.label) {
                case 0:
                  return e3.startsWith("data:") ? [4, fetch(e3)] : [3, 3];
                case 1:
                  return [4, t3.sent().text()];
                case 2:
                  return [2, t3.sent()];
                case 3:
                  return [4, ct({ url: e3, responseType: "text", mimeType: "text/css", origin: window.location.origin })];
                case 4:
                  return [2, t3.sent()];
              }
            });
          });
        }
        function Er(e3, t3, a3) {
          return a3 === void 0 && (a3 = /* @__PURE__ */ new Map()), r2(this, void 0, void 0, function() {
            var r3, i3, u2, s3, c2, l2, d2, f2, h2, p2;
            return n2(this, function(n3) {
              switch (n3.label) {
                case 0:
                  e3 = function(e4, t4) {
                    return e4.replace(ce, function(e5) {
                      var r4 = de(e5);
                      return 'url("' + oe(t4, r4) + '")';
                    });
                  }(e3 = function(e4) {
                    return e4.replace(pe, "");
                  }(e3 = e3.replace(he, "")), t3), r3 = Oe(le, e3), n3.label = 1;
                case 1:
                  n3.trys.push([1, 10, 11, 12]), i3 = o2(r3), u2 = i3.next(), n3.label = 2;
                case 2:
                  return u2.done ? [3, 9] : (s3 = u2.value, c2 = de(s3.substring(8).replace(/;$/, "")), l2 = oe(t3, c2), d2 = void 0, a3.has(l2) ? (d2 = a3.get(l2), [3, 7]) : [3, 3]);
                case 3:
                  return n3.trys.push([3, 6, , 7]), [4, _r(l2)];
                case 4:
                  return d2 = n3.sent(), a3.set(l2, d2), [4, Er(d2, fe(l2), a3)];
                case 5:
                  return d2 = n3.sent(), [3, 7];
                case 6:
                  return F(n3.sent()), d2 = "", [3, 7];
                case 7:
                  e3 = e3.split(s3).join(d2), n3.label = 8;
                case 8:
                  return u2 = i3.next(), [3, 2];
                case 9:
                  return [3, 12];
                case 10:
                  return f2 = n3.sent(), h2 = { error: f2 }, [3, 12];
                case 11:
                  try {
                    u2 && !u2.done && (p2 = i3.return) && p2.call(i3);
                  } finally {
                    if (h2)
                      throw h2.error;
                  }
                  return [7];
                case 12:
                  return [2, e3 = e3.trim()];
              }
            });
          });
        }
        var xr, Cr, Vr = [], Rr = /* @__PURE__ */ new Map();
        function Mr(e3) {
          b && j(e3.querySelectorAll(":not(:defined)"), function(e4) {
            var t3 = e4.tagName.toLowerCase();
            Rr.has(t3) || (Rr.set(t3, /* @__PURE__ */ new Set()), function(e5) {
              return r2(this, void 0, void 0, function() {
                return n2(this, function(t4) {
                  return [2, new Promise(function(t5) {
                    if (window.customElements && typeof customElements.whenDefined == "function")
                      customElements.whenDefined(e5).then(t5);
                    else if (Tr)
                      Ar.set(e5, t5), document.dispatchEvent(new CustomEvent("__darkreader__addUndefinedResolver", { detail: { tag: e5 } }));
                    else {
                      var r3 = function() {
                        var n3 = Rr.get(e5);
                        n3 && n3.size > 0 && (n3.values().next().value.matches(":defined") ? t5() : requestAnimationFrame(r3));
                      };
                      requestAnimationFrame(r3);
                    }
                  })];
                });
              });
            }(t3).then(function() {
              if (Cr) {
                var e5 = Rr.get(t3);
                Rr.delete(t3), Cr(Array.from(e5));
              }
            })), Rr.get(t3).add(e4);
          });
        }
        var Tr = false;
        document.addEventListener("__darkreader__inlineScriptsAllowed", function() {
          Tr = true;
        });
        var Ar = /* @__PURE__ */ new Map();
        function Lr(e3) {
          (Tr = true, Ar.has(e3.detail.tag)) && Ar.get(e3.detail.tag)();
        }
        function Pr(e3, t3, r3) {
          jr();
          var n3 = new Set(e3), o3 = /* @__PURE__ */ new WeakMap(), a3 = /* @__PURE__ */ new WeakMap();
          function i3(e4) {
            o3.set(e4, e4.previousElementSibling), a3.set(e4, e4.nextElementSibling);
          }
          function u2(e4) {
            var r4 = e4.createdStyles, u3 = e4.removedStyles, s4 = e4.movedStyles;
            r4.forEach(function(e5) {
              return i3(e5);
            }), s4.forEach(function(e5) {
              return i3(e5);
            }), u3.forEach(function(e5) {
              return t4 = e5, o3.delete(t4), void a3.delete(t4);
              var t4;
            }), r4.forEach(function(e5) {
              return n3.add(e5);
            }), u3.forEach(function(e5) {
              return n3.delete(e5);
            }), r4.size + u3.size + s4.size > 0 && t3({ created: Array.from(r4), removed: Array.from(u3), moved: Array.from(s4), updated: [] });
          }
          function s3(e4) {
            var t4 = e4.additions, r4 = e4.moves, n4 = e4.deletions, o4 = /* @__PURE__ */ new Set(), a4 = /* @__PURE__ */ new Set(), i4 = /* @__PURE__ */ new Set();
            t4.forEach(function(e5) {
              return vr(e5).forEach(function(e6) {
                return o4.add(e6);
              });
            }), n4.forEach(function(e5) {
              return vr(e5).forEach(function(e6) {
                return a4.add(e6);
              });
            }), r4.forEach(function(e5) {
              return vr(e5).forEach(function(e6) {
                return i4.add(e6);
              });
            }), u2({ createdStyles: o4, removedStyles: a4, movedStyles: i4 }), t4.forEach(function(e5) {
              I(e5, f2), Mr(e5);
            });
          }
          function c2(e4) {
            var t4 = new Set(vr(e4)), r4 = /* @__PURE__ */ new Set(), i4 = /* @__PURE__ */ new Set(), s4 = /* @__PURE__ */ new Set();
            t4.forEach(function(e5) {
              n3.has(e5) || r4.add(e5);
            }), n3.forEach(function(e5) {
              t4.has(e5) || i4.add(e5);
            }), t4.forEach(function(e5) {
              var t5;
              r4.has(e5) || i4.has(e5) || (t5 = e5).previousElementSibling === o3.get(t5) && t5.nextElementSibling === a3.get(t5) || s4.add(e5);
            }), u2({ createdStyles: r4, removedStyles: i4, movedStyles: s4 }), I(e4, f2), Mr(e4);
          }
          function l2(e4) {
            var r4 = /* @__PURE__ */ new Set(), n4 = /* @__PURE__ */ new Set();
            e4.forEach(function(e5) {
              var t4 = e5.target;
              t4.isConnected && (pr(t4) ? r4.add(t4) : t4 instanceof HTMLLinkElement && t4.disabled && n4.add(t4));
            }), r4.size + n4.size > 0 && t3({ updated: Array.from(r4), created: [], removed: Array.from(n4), moved: [] });
          }
          function d2(e4) {
            var t4 = ee(e4, { onMinorMutations: s3, onHugeMutations: c2 }), r4 = new MutationObserver(l2);
            r4.observe(e4, { attributes: true, attributeFilter: ["rel", "disabled", "media"], subtree: true }), Vr.push(t4, r4), xr.add(e4);
          }
          function f2(e4) {
            var t4 = e4.shadowRoot;
            t4 == null || xr.has(t4) || (d2(t4), r3(t4));
          }
          e3.forEach(i3), d2(document), I(document.documentElement, f2), Cr = function(e4) {
            var r4 = [];
            e4.forEach(function(e5) {
              return O(r4, vr(e5.shadowRoot));
            }), t3({ created: r4, updated: [], removed: [], moved: [] }), e4.forEach(function(e5) {
              var t4 = e5.shadowRoot;
              t4 != null && (f2(e5), I(t4, f2), Mr(t4));
            });
          }, document.addEventListener("__darkreader__isDefined", Lr), Mr(document);
        }
        function jr() {
          Vr.forEach(function(e3) {
            return e3.disconnect();
          }), Vr.splice(0, Vr.length), xr = /* @__PURE__ */ new WeakSet(), Cr = null, Rr.clear(), document.removeEventListener("__darkreader__isDefined", Lr);
        }
        var Or = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakSet();
        function Fr(e3) {
          var t3 = false;
          return { render: function(r3, n3) {
            e3.adoptedStyleSheets.forEach(function(o3) {
              if (!Dr.has(o3)) {
                var u2 = o3.rules, s3 = new CSSStyleSheet();
                hr().modifySheet({ prepareSheet: function() {
                  for (var t4 = s3.cssRules.length - 1; t4 >= 0; t4--)
                    s3.deleteRule(t4);
                  return function(t5, r4) {
                    var n4 = i2([], a2(e3.adoptedStyleSheets)), o4 = n4.indexOf(t5), u3 = n4.indexOf(r4);
                    o4 !== u3 - 1 && (u3 >= 0 && n4.splice(u3, 1), n4.splice(o4 + 1, 0, r4), e3.adoptedStyleSheets = n4);
                  }(o3, s3), Or.set(o3, s3), Dr.add(s3), s3;
                }, sourceCSSRules: u2, theme: r3, ignoreImageAnalysis: n3, force: false, isAsyncCancelled: function() {
                  return t3;
                } });
              }
            });
          }, destroy: function() {
            t3 = true;
            var r3 = i2([], a2(e3.adoptedStyleSheets));
            e3.adoptedStyleSheets.forEach(function(e4) {
              if (Dr.has(e4)) {
                var t4 = r3.indexOf(e4);
                t4 >= 0 && r3.splice(t4, 1), Or.delete(e4), Dr.delete(e4);
              }
            }), e3.adoptedStyleSheets = r3;
          } };
        }
        function qr() {
          document.dispatchEvent(new CustomEvent("__darkreader__inlineScriptsAllowed"));
          var e3 = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "addRule"), t3 = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "insertRule"), r3 = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "deleteRule"), n3 = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "removeRule"), o3 = location.hostname.endsWith("pushbullet.com") || location.hostname.endsWith("ilsole24ore.com") || location.hostname.endsWith("allegro.pl"), u2 = o3 ? Object.getOwnPropertyDescriptor(Document.prototype, "styleSheets") : null, s3 = function() {
            Object.defineProperty(CSSStyleSheet.prototype, "addRule", e3), Object.defineProperty(CSSStyleSheet.prototype, "insertRule", t3), Object.defineProperty(CSSStyleSheet.prototype, "deleteRule", r3), Object.defineProperty(CSSStyleSheet.prototype, "removeRule", n3), document.removeEventListener("__darkreader__cleanUp", s3), document.removeEventListener("__darkreader__addUndefinedResolver", c2), o3 && Object.defineProperty(Document.prototype, "styleSheets", u2);
          }, c2 = function(e4) {
            customElements.whenDefined(e4.detail.tag).then(function() {
              document.dispatchEvent(new CustomEvent("__darkreader__isDefined", { detail: { tag: e4.detail.tag } }));
            });
          };
          document.addEventListener("__darkreader__cleanUp", s3), document.addEventListener("__darkreader__addUndefinedResolver", c2);
          var l2 = new Event("__darkreader__updateSheet");
          Object.defineProperty(CSSStyleSheet.prototype, "addRule", Object.assign({}, e3, { value: function(t4, r4, n4) {
            return e3.value.call(this, t4, r4, n4), this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(l2), -1;
          } })), Object.defineProperty(CSSStyleSheet.prototype, "insertRule", Object.assign({}, t3, { value: function(e4, r4) {
            var n4 = t3.value.call(this, e4, r4);
            return this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(l2), n4;
          } })), Object.defineProperty(CSSStyleSheet.prototype, "deleteRule", Object.assign({}, r3, { value: function(e4) {
            r3.value.call(this, e4), this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(l2);
          } })), Object.defineProperty(CSSStyleSheet.prototype, "removeRule", Object.assign({}, n3, { value: function(e4) {
            n3.value.call(this, e4), this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(l2);
          } })), o3 && Object.defineProperty(Document.prototype, "styleSheets", Object.assign({}, u2, { get: function() {
            var e4 = i2([], a2(u2.get.call(this))).filter(function(e5) {
              return !e5.ownerNode.classList.contains("darkreader");
            });
            return Object.setPrototypeOf(e4, StyleSheetList.prototype);
          } }));
        }
        var Nr = Array.from(crypto.getRandomValues(new Uint8Array(16))).map(function(e3) {
          return ((t3 = e3) < 16 ? "0" : "") + t3.toString(16);
          var t3;
        }).join(""), Br = /* @__PURE__ */ new Map(), Wr = [], Ir = null, Ur = null, $r = null, zr = null, Hr = null;
        function Gr(e3, t3) {
          t3 === void 0 && (t3 = document.head || document);
          var r3 = t3.querySelector("." + e3);
          return r3 || ((r3 = document.createElement("style")).classList.add("darkreader"), r3.classList.add(e3), r3.media = "screen", r3.textContent = ""), r3;
        }
        var Qr = /* @__PURE__ */ new Map();
        function Kr(e3, t3) {
          Qr.has(t3) && Qr.get(t3).stop(), Qr.set(t3, W(e3, "parent"));
        }
        function Jr() {
          var e3 = Gr("darkreader--fallback", document);
          e3.textContent = kt(Ir, { strict: true }), document.head.insertBefore(e3, document.head.firstChild), Kr(e3, "fallback");
          var r3 = Gr("darkreader--user-agent");
          r3.textContent = yt(Ir, $r, Ir.styleSystemControls), document.head.insertBefore(r3, e3.nextSibling), Kr(r3, "user-agent");
          var n3, o3, a3 = Gr("darkreader--text");
          Ir.useFont || Ir.textStroke > 0 ? a3.textContent = (n3 = Ir, (o3 = []).push('*:not(pre, .far, .fa, .glyphicon, [class*="vjs-"], .fab, .fa-github, .fas, .material-icons, .icofont, .typcn, mu, [class*="mu-"], .glyphicon, .icon) {'), n3.useFont && n3.fontFamily && o3.push("  font-family: " + n3.fontFamily + " !important;"), n3.textStroke > 0 && (o3.push("  -webkit-text-stroke: " + n3.textStroke + "px !important;"), o3.push("  text-stroke: " + n3.textStroke + "px !important;")), o3.push("}"), o3.join("\n")) : a3.textContent = "", document.head.insertBefore(a3, e3.nextSibling), Kr(a3, "text");
          var i3 = Gr("darkreader--invert");
          Ur && Array.isArray(Ur.invert) && Ur.invert.length > 0 ? i3.textContent = [Ur.invert.join(", ") + " {", "    filter: " + at(t2(t2({}, Ir), { contrast: Ir.mode === 0 ? Ir.contrast : Pe(Ir.contrast - 10, 0, 100) })) + " !important;", "}"].join("\n") : i3.textContent = "", document.head.insertBefore(i3, a3.nextSibling), Kr(i3, "invert");
          var u2 = Gr("darkreader--inline");
          u2.textContent = Yt(), document.head.insertBefore(u2, i3.nextSibling), Kr(u2, "inline");
          var s3 = Gr("darkreader--override");
          s3.textContent = Ur && Ur.css ? Zr(Ur.css) : "", document.head.appendChild(s3), Kr(s3, "override");
          var c2 = Gr("darkreader--variables"), l2 = wt(Ir), d2 = Ir.darkSchemeBackgroundColor, f2 = Ir.darkSchemeTextColor, h2 = Ir.lightSchemeBackgroundColor, p2 = Ir.lightSchemeTextColor, v2 = Ir.mode, m2 = v2 === 0 ? h2 : d2, g2 = v2 === 0 ? p2 : f2;
          m2 = Je(Se(m2), Ir), g2 = tt(Se(g2), Ir), c2.textContent = [":root {", "   --darkreader-neutral-background: " + m2 + ";", "   --darkreader-neutral-text: " + g2 + ";", "   --darkreader-selection-background: " + l2.backgroundColorSelection + ";", "   --darkreader-selection-text: " + l2.foregroundColorSelection + ";", "}"].join("\n"), document.head.insertBefore(c2, u2.nextSibling), Kr(c2, "variables");
          var b2 = Gr("darkreader--root-vars");
          document.head.insertBefore(b2, c2.nextSibling);
          var y2 = function(e4, t3) {
            t3 === void 0 && (t3 = document.head || document);
            var r4 = t3.querySelector("." + e4);
            return r4 || ((r4 = document.createElement("script")).classList.add("darkreader"), r4.classList.add(e4)), r4;
          }("darkreader--proxy");
          y2.textContent = "(" + qr + ")()", document.head.insertBefore(y2, b2.nextSibling);
        }
        var Xr = /* @__PURE__ */ new Set();
        function Yr(e3) {
          var t3 = Gr("darkreader--inline", e3);
          t3.textContent = Yt(), e3.insertBefore(t3, e3.firstChild);
          var r3 = Gr("darkreader--override", e3);
          r3.textContent = Ur && Ur.css ? Zr(Ur.css) : "", e3.insertBefore(r3, t3.nextSibling), Xr.add(e3);
        }
        function Zr(e3) {
          return e3.replace(/\${(.+?)}/g, function(e4, t3) {
            try {
              var r3 = Et(t3);
              return ze(r3, Ir, He);
            } catch (e5) {
              return F(e5), t3;
            }
          });
        }
        function en() {
          var e3 = document.querySelector(".darkreader--fallback");
          e3 && (e3.textContent = "");
        }
        var tn = 0, rn = /* @__PURE__ */ new Set();
        function nn(e3) {
          var t3 = ++tn;
          D("New manager for element, with loadingStyleID " + t3, e3);
          var r3 = kr(e3, { update: function() {
            var e4 = r3.details();
            e4 && (At.addRulesForMatching(e4.rules), At.matchVariablesAndDependants(), r3.render(Ir, zr));
          }, loadingStart: function() {
            if (!U() || !ln) {
              rn.add(t3), D("Current amount of styles loading: " + rn.size);
              var e4 = document.querySelector(".darkreader--fallback");
              e4.textContent || (e4.textContent = kt(Ir, { strict: false }));
            }
          }, loadingEnd: function() {
            rn.delete(t3), D("Removed loadingStyle " + t3 + ", now awaiting: " + rn.size), D("To-do to be loaded", rn), rn.size === 0 && U() && en();
          } });
          return Br.set(e3, r3), r3;
        }
        function on(e3) {
          var t3 = Br.get(e3);
          t3 && (t3.destroy(), Br.delete(e3));
        }
        var an = q(function(e3) {
          Br.forEach(function(e4) {
            return e4.render(Ir, zr);
          }), Wr.forEach(function(e4) {
            return e4.render(Ir, zr);
          }), e3 && e3();
        }), un = function() {
          an.cancel();
        };
        function sn() {
          rn.size !== 0 ? F("DOM is ready, but still have styles being loaded.", rn) : en();
        }
        var cn = null, ln = !document.hidden;
        function dn() {
          document.removeEventListener("visibilitychange", cn), cn = null;
        }
        function fn() {
          function e3() {
            var e4, t4;
            !function() {
              un();
              var e5 = vr(document).filter(function(e6) {
                return !Br.has(e6);
              }).map(function(e6) {
                return nn(e6);
              });
              e5.map(function(e6) {
                return e6.details();
              }).filter(function(e6) {
                return e6 && e6.rules.length > 0;
              }).forEach(function(e6) {
                At.addRulesForMatching(e6.rules);
              }), At.matchVariablesAndDependants(), At.putRootVars(document.head.querySelector(".darkreader--root-vars"), Ir), Br.forEach(function(e6) {
                return e6.render(Ir, zr);
              }), rn.size === 0 && en(), e5.forEach(function(e6) {
                return e6.watch();
              });
              var t5 = function(e6) {
                for (var t6 = [], r4 = 0, n4 = e6.length; r4 < n4; r4++)
                  t6.push(e6[r4]);
                return t6;
              }(document.querySelectorAll(Xt));
              I(document.documentElement, function(e6) {
                Yr(e6.shadowRoot);
                var r4 = e6.shadowRoot.querySelectorAll(Xt);
                r4.length > 0 && O(t5, r4);
              }), t5.forEach(function(e6) {
                return ar(e6, Ir, Hr, zr);
              }), hn(document);
            }(), Pr(Array.from(Br.keys()), function(e5) {
              var t5 = e5.created, r4 = e5.updated, n4 = e5.removed, o4 = e5.moved, a3 = n4, i3 = t5.concat(r4).concat(o4).filter(function(e6) {
                return !Br.has(e6);
              }), u2 = o4.filter(function(e6) {
                return Br.has(e6);
              });
              D("Styles to be removed:", a3), a3.forEach(function(e6) {
                return on(e6);
              });
              var s3 = i3.map(function(e6) {
                return nn(e6);
              });
              s3.map(function(e6) {
                return e6.details();
              }).filter(function(e6) {
                return e6 && e6.rules.length > 0;
              }).forEach(function(e6) {
                At.addRulesForMatching(e6.rules);
              }), At.matchVariablesAndDependants(), s3.forEach(function(e6) {
                return e6.render(Ir, zr);
              }), s3.forEach(function(e6) {
                return e6.watch();
              }), u2.forEach(function(e6) {
                return Br.get(e6).restore();
              });
            }, function(e5) {
              Yr(e5), hn(e5);
            }), e4 = function(e5) {
              ar(e5, Ir, Hr, zr), e5 === document.documentElement && e5.getAttribute("style").includes("--") && (At.matchVariablesAndDependants(), At.putRootVars(document.head.querySelector(".darkreader--root-vars"), Ir));
            }, t4 = function(e5) {
              Yr(e5);
              var t5 = e5.querySelectorAll(Xt);
              t5.length > 0 && j(t5, function(e6) {
                return ar(e6, Ir, Hr, zr);
              });
            }, tr(document, e4, t4), I(document.documentElement, function(r4) {
              tr(r4.shadowRoot, e4, t4);
            }), z(sn);
          }
          var t3, r3, n3, o3;
          Jr(), document.hidden ? (t3 = e3, r3 = Boolean(cn), cn = function() {
            document.hidden || (dn(), t3(), ln = true);
          }, r3 || document.addEventListener("visibilitychange", cn)) : e3(), n3 = Ir, (o3 = document.querySelector(ur)) ? lr(o3, n3) : (cr && cr.disconnect(), (cr = new MutationObserver(function(e4) {
            e:
              for (var t4 = 0; t4 < e4.length; t4++)
                for (var r4 = e4[t4].addedNodes, o4 = 0; o4 < r4.length; o4++) {
                  var a3 = r4[o4];
                  if (a3 instanceof HTMLMetaElement && a3.name === ir) {
                    cr.disconnect(), cr = null, lr(a3, n3);
                    break e;
                  }
                }
          })).observe(document.head, { childList: true }));
        }
        function hn(e3) {
          if (Array.isArray(e3.adoptedStyleSheets) && e3.adoptedStyleSheets.length > 0) {
            var t3 = Fr(e3);
            Wr.push(t3), t3.render(Ir, zr);
          }
        }
        function pn() {
          Br.forEach(function(e3) {
            return e3.pause();
          }), j(Qr.values(), function(e3) {
            return e3.stop();
          }), Qr.clear(), jr(), Zt.forEach(function(e3) {
            return e3.disconnect();
          }), er.forEach(function(e3) {
            return e3.disconnect();
          }), Zt.clear(), er.clear(), H(sn), Q.clear();
        }
        function vn() {
          var e3, t3 = document.querySelector('meta[name="darkreader"]');
          return t3 ? t3.content !== Nr : ((e3 = document.createElement("meta")).name = "darkreader", e3.content = Nr, document.head.appendChild(e3), false);
        }
        function mn(e3, t3, r3) {
          if (Ir = e3, (Ur = t3) ? (zr = Array.isArray(Ur.ignoreImageAnalysis) ? Ur.ignoreImageAnalysis : [], Hr = Array.isArray(Ur.ignoreInlineStyle) ? Ur.ignoreInlineStyle : []) : (zr = [], Hr = []), $r = r3, document.head) {
            if (vn())
              return;
            document.documentElement.setAttribute("data-darkreader-mode", "dynamic"), document.documentElement.setAttribute("data-darkreader-scheme", Ir.mode ? "dark" : "dimmed"), fn();
          } else {
            if (!d) {
              var n3 = Gr("darkreader--fallback");
              document.documentElement.appendChild(n3), n3.textContent = kt(Ir, { strict: true });
            }
            var o3 = new MutationObserver(function() {
              if (document.head) {
                if (o3.disconnect(), vn())
                  return void gn();
                fn();
              }
            });
            o3.observe(document, { childList: true, subtree: true });
          }
        }
        function gn() {
          document.documentElement.removeAttribute("data-darkreader-mode"), document.documentElement.removeAttribute("data-darkreader-scheme"), At.clear(), te.clear(), dn(), un(), pn(), Tt(), B(document.querySelector(".darkreader--fallback")), document.head && (!function() {
            cr && (cr.disconnect(), cr = null);
            var e3 = document.querySelector(ur);
            e3 && sr && (e3.content = sr);
          }(), B(document.head.querySelector(".darkreader--user-agent")), B(document.head.querySelector(".darkreader--text")), B(document.head.querySelector(".darkreader--invert")), B(document.head.querySelector(".darkreader--inline")), B(document.head.querySelector(".darkreader--override")), B(document.head.querySelector(".darkreader--variables")), B(document.head.querySelector(".darkreader--root-vars")), B(document.head.querySelector('meta[name="darkreader"]')), document.dispatchEvent(new CustomEvent("__darkreader__cleanUp")), B(document.head.querySelector(".darkreader--proxy"))), Xr.forEach(function(e3) {
            B(e3.querySelector(".darkreader--inline")), B(e3.querySelector(".darkreader--override"));
          }), Xr.clear(), j(Br.keys(), function(e3) {
            return on(e3);
          }), rn.clear(), wr.clear(), j(document.querySelectorAll(".darkreader"), B), Wr.forEach(function(e3) {
            e3.destroy();
          }), Wr.splice(0);
        }
        var bn = /url\(\"(blob\:.*?)\"\)/g;
        function yn(e3) {
          return r2(this, void 0, void 0, function() {
            var t3, r3;
            return n2(this, function(n3) {
              switch (n3.label) {
                case 0:
                  return t3 = [], Oe(bn, e3, 1).forEach(function(e4) {
                    var r4 = w(e4);
                    t3.push(r4);
                  }), [4, Promise.all(t3)];
                case 1:
                  return r3 = n3.sent(), [2, e3.replace(bn, function() {
                    return 'url("' + r3.shift() + '")';
                  })];
              }
            });
          });
        }
        function wn() {
          return r2(this, void 0, void 0, function() {
            function e3(e4, r4) {
              var n3 = document.querySelector(e4);
              n3 && n3.textContent && (t3.push("/* " + r4 + " */"), t3.push(n3.textContent), t3.push(""));
            }
            var t3, r3, o3, a3, i3;
            return n2(this, function(n3) {
              switch (n3.label) {
                case 0:
                  return t3 = ['/*\n                        _______\n                       /       \\\n                      .==.    .==.\n                     ((  ))==((  ))\n                    / "=="    "=="\\\n                   /____|| || ||___\\\n       ________     ____    ________  ___    ___\n       |  ___  \\   /    \\   |  ___  \\ |  |  /  /\n       |  |  \\  \\ /  /\\  \\  |  |  \\  \\|  |_/  /\n       |  |   )  /  /__\\  \\ |  |__/  /|  ___  \\\n       |  |__/  /  ______  \\|  ____  \\|  |  \\  \\\n_______|_______/__/ ____ \\__\\__|___\\__\\__|___\\__\\____\n|  ___  \\ |  ____/ /    \\   |  ___  \\ |  ____|  ___  \\\n|  |  \\  \\|  |___ /  /\\  \\  |  |  \\  \\|  |___|  |  \\  \\\n|  |__/  /|  ____/  /__\\  \\ |  |   )  |  ____|  |__/  /\n|  ____  \\|  |__/  ______  \\|  |__/  /|  |___|  ____  \\\n|__|   \\__\\____/__/      \\__\\_______/ |______|__|   \\__\\\n                https://darkreader.org\n*/'], e3(".darkreader--fallback", "Fallback Style"), e3(".darkreader--user-agent", "User-Agent Style"), e3(".darkreader--text", "Text Style"), e3(".darkreader--invert", "Invert Style"), e3(".darkreader--variables", "Variables Style"), r3 = [], document.querySelectorAll(".darkreader--sync").forEach(function(e4) {
                    j(e4.sheet.cssRules, function(e5) {
                      e5 && e5.cssText && r3.push(e5.cssText);
                    });
                  }), r3.length ? (o3 = function(e4) {
                    function t4(e5) {
                      return e5.replace(/^\s+/, "");
                    }
                    function r4(e5) {
                      return e5 === 0 ? "" : " ".repeat(4 * e5);
                    }
                    for (var n4 = /[^{}]+{\s*}/g; n4.test(e4); )
                      e4 = e4.replace(n4, "");
                    for (var o4 = e4.replace(/\s{2,}/g, " ").replace(/\{/g, "{\n").replace(/\}/g, "\n}\n").replace(/\;(?![^\(|\"]*(\)|\"))/g, ";\n").replace(/\,(?![^\(|\"]*(\)|\"))/g, ",\n").replace(/\n\s*\n/g, "\n").split("\n"), a4 = 0, i4 = [], u2 = 0, s3 = o4.length; u2 < s3; u2++) {
                      var c2 = o4[u2] + "\n";
                      c2.match(/\{/) ? i4.push(r4(a4++) + t4(c2)) : c2.match(/\}/) ? i4.push(r4(--a4) + t4(c2)) : i4.push(r4(a4) + t4(c2));
                    }
                    return i4.join("").trim();
                  }(r3.join("\n")), t3.push("/* Modified CSS */"), i3 = (a3 = t3).push, [4, yn(o3)]) : [3, 2];
                case 1:
                  i3.apply(a3, [n3.sent()]), t3.push(""), n3.label = 2;
                case 2:
                  return e3(".darkreader--override", "Override Style"), [2, t3.join("\n")];
              }
            });
          });
        }
        var kn = false, Sn = function() {
          try {
            return window.self !== window.top;
          } catch (e3) {
            return console.warn(e3), true;
          }
        }();
        function _n(e3, r3) {
          e3 === void 0 && (e3 = {}), r3 === void 0 && (r3 = null);
          var n3 = t2(t2({}, P), e3);
          if (n3.engine !== T)
            throw new Error("Theme engine is not supported.");
          mn(n3, r3, Sn), kn = true;
        }
        function En() {
          gn(), kn = false;
        }
        var xn = matchMedia("(prefers-color-scheme: dark)"), Cn = { themeOptions: null, fixes: null };
        function Vn() {
          xn.matches ? _n(Cn.themeOptions, Cn.fixes) : En();
        }
        var Rn = function(e3) {
          _ = e3 || S;
        };
        e2.auto = function(e3, t3) {
          e3 === void 0 && (e3 = {}), t3 === void 0 && (t3 = null), e3 ? (Cn = { themeOptions: e3, fixes: t3 }, Vn(), g ? xn.addEventListener("change", Vn) : xn.addListener(Vn)) : (g ? xn.removeEventListener("change", Vn) : xn.removeListener(Vn), En());
        }, e2.disable = En, e2.enable = _n, e2.exportGeneratedCSS = function() {
          return r2(this, void 0, void 0, function() {
            return n2(this, function(e3) {
              switch (e3.label) {
                case 0:
                  return [4, wn()];
                case 1:
                  return [2, e3.sent()];
              }
            });
          });
        }, e2.isEnabled = function() {
          return kn;
        }, e2.setFetchMethod = Rn, Object.defineProperty(e2, "__esModule", { value: true });
      });
    }
  });

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\libs\md5-es.min.js
  var require_md5_es_min = __commonJS({
    "ns-hugo:C:\\Users\\jack\\AppData\\Roaming\\site\\themes\\virgo\\assets\\js\\libs\\md5-es.min.js"(exports, module) {
      !function(e2, r2) {
        typeof exports == "object" && typeof module == "object" ? module.exports = r2() : typeof define == "function" && define.amd ? define([], r2) : typeof exports == "object" ? exports["md5-es"] = r2() : e2["md5-es"] = r2();
      }(exports, function() {
        return function(e2) {
          function r2(t2) {
            if (n2[t2])
              return n2[t2].exports;
            var f = n2[t2] = { i: t2, l: false, exports: {} };
            return e2[t2].call(f.exports, f, f.exports, r2), f.l = true, f.exports;
          }
          var n2 = {};
          return r2.m = e2, r2.c = n2, r2.i = function(e3) {
            return e3;
          }, r2.d = function(e3, n3, t2) {
            r2.o(e3, n3) || Object.defineProperty(e3, n3, { configurable: false, enumerable: true, get: t2 });
          }, r2.n = function(e3) {
            var n3 = e3 && e3.__esModule ? function() {
              return e3.default;
            } : function() {
              return e3;
            };
            return r2.d(n3, "a", n3), n3;
          }, r2.o = function(e3, r3) {
            return Object.prototype.hasOwnProperty.call(e3, r3);
          }, r2.p = "", r2(r2.s = 1);
        }([function(e2, r2, n2) {
          "use strict";
          function t2(e3, r3) {
            if (!(e3 instanceof r3))
              throw new TypeError("Cannot call a class as a function");
          }
          Object.defineProperty(r2, "__esModule", { value: true });
          var f = function() {
            function e3(e4, r3) {
              for (var n3 = 0; n3 < r3.length; n3++) {
                var t3 = r3[n3];
                t3.enumerable = t3.enumerable || false, t3.configurable = true, "value" in t3 && (t3.writable = true), Object.defineProperty(e4, t3.key, t3);
              }
            }
            return function(r3, n3, t3) {
              return n3 && e3(r3.prototype, n3), t3 && e3(r3, t3), r3;
            };
          }(), i2 = function() {
            function e3() {
              t2(this, e3);
            }
            return f(e3, null, [{ key: "hash", value: function(r3) {
              return e3.hex(e3.md51(r3));
            } }, { key: "md5cycle", value: function(r3, n3) {
              var t3 = r3[0], f2 = r3[1], i3 = r3[2], u = r3[3];
              t3 = e3.ff(t3, f2, i3, u, n3[0], 7, -680876936), u = e3.ff(u, t3, f2, i3, n3[1], 12, -389564586), i3 = e3.ff(i3, u, t3, f2, n3[2], 17, 606105819), f2 = e3.ff(f2, i3, u, t3, n3[3], 22, -1044525330), t3 = e3.ff(t3, f2, i3, u, n3[4], 7, -176418897), u = e3.ff(u, t3, f2, i3, n3[5], 12, 1200080426), i3 = e3.ff(i3, u, t3, f2, n3[6], 17, -1473231341), f2 = e3.ff(f2, i3, u, t3, n3[7], 22, -45705983), t3 = e3.ff(t3, f2, i3, u, n3[8], 7, 1770035416), u = e3.ff(u, t3, f2, i3, n3[9], 12, -1958414417), i3 = e3.ff(i3, u, t3, f2, n3[10], 17, -42063), f2 = e3.ff(f2, i3, u, t3, n3[11], 22, -1990404162), t3 = e3.ff(t3, f2, i3, u, n3[12], 7, 1804603682), u = e3.ff(u, t3, f2, i3, n3[13], 12, -40341101), i3 = e3.ff(i3, u, t3, f2, n3[14], 17, -1502002290), f2 = e3.ff(f2, i3, u, t3, n3[15], 22, 1236535329), t3 = e3.gg(t3, f2, i3, u, n3[1], 5, -165796510), u = e3.gg(u, t3, f2, i3, n3[6], 9, -1069501632), i3 = e3.gg(i3, u, t3, f2, n3[11], 14, 643717713), f2 = e3.gg(f2, i3, u, t3, n3[0], 20, -373897302), t3 = e3.gg(t3, f2, i3, u, n3[5], 5, -701558691), u = e3.gg(u, t3, f2, i3, n3[10], 9, 38016083), i3 = e3.gg(i3, u, t3, f2, n3[15], 14, -660478335), f2 = e3.gg(f2, i3, u, t3, n3[4], 20, -405537848), t3 = e3.gg(t3, f2, i3, u, n3[9], 5, 568446438), u = e3.gg(u, t3, f2, i3, n3[14], 9, -1019803690), i3 = e3.gg(i3, u, t3, f2, n3[3], 14, -187363961), f2 = e3.gg(f2, i3, u, t3, n3[8], 20, 1163531501), t3 = e3.gg(t3, f2, i3, u, n3[13], 5, -1444681467), u = e3.gg(u, t3, f2, i3, n3[2], 9, -51403784), i3 = e3.gg(i3, u, t3, f2, n3[7], 14, 1735328473), f2 = e3.gg(f2, i3, u, t3, n3[12], 20, -1926607734), t3 = e3.hh(t3, f2, i3, u, n3[5], 4, -378558), u = e3.hh(u, t3, f2, i3, n3[8], 11, -2022574463), i3 = e3.hh(i3, u, t3, f2, n3[11], 16, 1839030562), f2 = e3.hh(f2, i3, u, t3, n3[14], 23, -35309556), t3 = e3.hh(t3, f2, i3, u, n3[1], 4, -1530992060), u = e3.hh(u, t3, f2, i3, n3[4], 11, 1272893353), i3 = e3.hh(i3, u, t3, f2, n3[7], 16, -155497632), f2 = e3.hh(f2, i3, u, t3, n3[10], 23, -1094730640), t3 = e3.hh(t3, f2, i3, u, n3[13], 4, 681279174), u = e3.hh(u, t3, f2, i3, n3[0], 11, -358537222), i3 = e3.hh(i3, u, t3, f2, n3[3], 16, -722521979), f2 = e3.hh(f2, i3, u, t3, n3[6], 23, 76029189), t3 = e3.hh(t3, f2, i3, u, n3[9], 4, -640364487), u = e3.hh(u, t3, f2, i3, n3[12], 11, -421815835), i3 = e3.hh(i3, u, t3, f2, n3[15], 16, 530742520), f2 = e3.hh(f2, i3, u, t3, n3[2], 23, -995338651), t3 = e3.ii(t3, f2, i3, u, n3[0], 6, -198630844), u = e3.ii(u, t3, f2, i3, n3[7], 10, 1126891415), i3 = e3.ii(i3, u, t3, f2, n3[14], 15, -1416354905), f2 = e3.ii(f2, i3, u, t3, n3[5], 21, -57434055), t3 = e3.ii(t3, f2, i3, u, n3[12], 6, 1700485571), u = e3.ii(u, t3, f2, i3, n3[3], 10, -1894986606), i3 = e3.ii(i3, u, t3, f2, n3[10], 15, -1051523), f2 = e3.ii(f2, i3, u, t3, n3[1], 21, -2054922799), t3 = e3.ii(t3, f2, i3, u, n3[8], 6, 1873313359), u = e3.ii(u, t3, f2, i3, n3[15], 10, -30611744), i3 = e3.ii(i3, u, t3, f2, n3[6], 15, -1560198380), f2 = e3.ii(f2, i3, u, t3, n3[13], 21, 1309151649), t3 = e3.ii(t3, f2, i3, u, n3[4], 6, -145523070), u = e3.ii(u, t3, f2, i3, n3[11], 10, -1120210379), i3 = e3.ii(i3, u, t3, f2, n3[2], 15, 718787259), f2 = e3.ii(f2, i3, u, t3, n3[9], 21, -343485551), r3[0] = t3 + r3[0] & 4294967295, r3[1] = f2 + r3[1] & 4294967295, r3[2] = i3 + r3[2] & 4294967295, r3[3] = u + r3[3] & 4294967295;
            } }, { key: "cmn", value: function(e4, r3, n3, t3, f2, i3) {
              return ((r3 = (r3 + e4 & 4294967295) + (t3 + i3 & 4294967295) & 4294967295) << f2 | r3 >>> 32 - f2) + n3 & 4294967295;
            } }, { key: "ff", value: function(r3, n3, t3, f2, i3, u, o2) {
              return e3.cmn(n3 & t3 | ~n3 & f2, r3, n3, i3, u, o2);
            } }, { key: "gg", value: function(r3, n3, t3, f2, i3, u, o2) {
              return e3.cmn(n3 & f2 | t3 & ~f2, r3, n3, i3, u, o2);
            } }, { key: "hh", value: function(r3, n3, t3, f2, i3, u, o2) {
              return e3.cmn(n3 ^ t3 ^ f2, r3, n3, i3, u, o2);
            } }, { key: "ii", value: function(r3, n3, t3, f2, i3, u, o2) {
              return e3.cmn(t3 ^ (n3 | ~f2), r3, n3, i3, u, o2);
            } }, { key: "md51", value: function(r3) {
              var n3 = r3.length, t3 = [1732584193, -271733879, -1732584194, 271733878], f2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i3 = 0, u = 64;
              for (u; u <= n3; u += 64)
                e3.md5cycle(t3, e3.md5blk(r3.substring(u - 64, u)));
              for (r3 = r3.substring(u - 64), u = 0, i3 = r3.length, u; u < i3; u++)
                f2[u >> 2] |= r3.charCodeAt(u) << (u % 4 << 3);
              if (f2[u >> 2] |= 128 << (u % 4 << 3), u > 55)
                for (e3.md5cycle(t3, f2), u = 0; u < 16; u++)
                  f2[u] = 0;
              return f2[14] = 8 * n3, e3.md5cycle(t3, f2), t3;
            } }, { key: "md5blk", value: function(e4) {
              var r3 = [], n3 = 0;
              for (n3; n3 < 64; n3 += 4)
                r3[n3 >> 2] = e4.charCodeAt(n3) + (e4.charCodeAt(n3 + 1) << 8) + (e4.charCodeAt(n3 + 2) << 16) + (e4.charCodeAt(n3 + 3) << 24);
              return r3;
            } }, { key: "rhex", value: function(r3) {
              var n3 = "";
              return n3 += e3.hexArray[r3 >> 4 & 15] + e3.hexArray[r3 >> 0 & 15], n3 += e3.hexArray[r3 >> 12 & 15] + e3.hexArray[r3 >> 8 & 15], n3 += e3.hexArray[r3 >> 20 & 15] + e3.hexArray[r3 >> 16 & 15], n3 += e3.hexArray[r3 >> 28 & 15] + e3.hexArray[r3 >> 24 & 15];
            } }, { key: "hex", value: function(r3) {
              var n3 = r3.length, t3 = 0;
              for (t3; t3 < n3; t3++)
                r3[t3] = e3.rhex(r3[t3]);
              return r3.join("");
            } }]), e3;
          }();
          i2.hexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], r2.default = i2;
        }, function(e2, r2, n2) {
          e2.exports = n2(0);
        }]);
      });
    }
  });

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\init\greet.js
  function greet() {
    let year = new Date().getFullYear();
    console.log(`---------------------
		
	Hello Jack \u{1F60E}, ${year} !

		---------------------`);
    document.querySelector("#info-date").innerHTML = year;
  }

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\init\eventBinding.js
  var import_jquery6 = __toESM(require_jquery_min());
  var import_lodash = __toESM(require_lodash_min());

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\init\colorToc.js
  var import_jquery2 = __toESM(require_jquery_min());

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\init\initToc.js
  var import_jquery = __toESM(require_jquery_min());
  function initToc() {
    (0, import_jquery.default)("h2, h3, h4").addClass("headline");
    (0, import_jquery.default)("#TableOfContents a").each(function() {
      let _id = "id-" + (0, import_jquery.default)(this).attr("href").split("#")[1];
      (0, import_jquery.default)(this).attr("id", _id);
      (0, import_jquery.default)(this).addClass("toc-link");
    });
  }

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\init\colorToc.js
  function colorToc() {
    initToc();
    let _curScroll = (0, import_jquery2.default)(this).scrollTop() + 48;
    let _curHeadline;
    let _arrTop = [];
    (0, import_jquery2.default)(".headline").each(function() {
      let _curHeadlineTop = (0, import_jquery2.default)(this).offset().top;
      _arrTop.push(_curHeadlineTop);
      if (_curHeadlineTop - 1 < _curScroll)
        _curHeadline = (0, import_jquery2.default)(this);
      if (_curScroll >= _arrTop[0]) {
        let _id = "id-" + _curHeadline.attr("id");
        (0, import_jquery2.default)(".toc-link").removeClass("toc-link--active");
        (0, import_jquery2.default)("#" + _id).addClass("toc-link--active");
      }
    });
  }

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\utils\toggleToc.js
  var import_jquery3 = __toESM(require_jquery_min());
  function toggleToc(e2) {
    e2.stopPropagation();
    let toc = (0, import_jquery3.default)(".toc"), po = (0, import_jquery3.default)(".toc .page-operation");
    let _right = toc.css("right");
    if (_right === "-300px") {
      toc.css({ right: "16px" });
      po.css({ right: "24px" });
      (0, import_jquery3.default)("body").click(toggleToc);
    } else {
      toc.css({ right: "-300px" });
      po.css({ right: "-300px" });
      (0, import_jquery3.default)("body").unbind("click");
    }
  }

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\utils\toggleColor.js
  var import_darkreader = __toESM(require_darkreader_min());
  var import_jquery4 = __toESM(require_jquery_min());
  var sun = `<svg t="1657283336399" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2283" width="16" height="16"><path d="M512 288c-123.488 0-224 100.512-224 224 0 123.488 100.512 224 224 224s224-100.512 224-224C736 388.512 635.488 288 512 288zM512 672c-88.384 0-160-71.616-160-160s71.616-160 160-160 160 71.616 160 160S600.384 672 512 672zM512 224c17.664 0 32-14.336 32-32L544 128c0-17.664-14.336-32-32-32s-32 14.336-32 32l0 64C480 209.664 494.336 224 512 224zM512 800c-17.664 0-32 14.336-32 32l0 64c0 17.664 14.336 32 32 32s32-14.336 32-32l0-64C544 814.336 529.664 800 512 800zM760.864 308.32l45.248-45.248c12.512-12.512 12.512-32.736 0-45.248-12.512-12.512-32.736-12.512-45.248 0l-45.248 45.248c-12.512 12.512-12.512 32.736 0 45.248C728.128 320.832 748.384 320.832 760.864 308.32zM263.136 715.68l-45.248 45.248c-12.512 12.512-12.512 32.736 0 45.248s32.736 12.512 45.248 0l45.248-45.248c12.512-12.544 12.512-32.768 0-45.248C295.872 703.168 275.616 703.136 263.136 715.68zM224 512c0-17.664-14.336-32-32-32L128 480c-17.664 0-32 14.336-32 32s14.336 32 32 32l64 0C209.664 544 224 529.664 224 512zM896 480l-64 0c-17.664 0-32 14.336-32 32s14.336 32 32 32l64 0c17.664 0 32-14.336 32-32S913.664 480 896 480zM263.072 308.32c12.512 12.512 32.768 12.512 45.248 0 12.512-12.512 12.512-32.736 0-45.248l-45.248-45.248c-12.512-12.512-32.736-12.512-45.248 0-12.512 12.512-12.512 32.736 0 45.248L263.072 308.32zM760.928 715.616c-12.544-12.512-32.768-12.512-45.248 0-12.512 12.512-12.544 32.736 0 45.248l45.248 45.248c12.512 12.512 32.736 12.512 45.248 0s12.512-32.736 0-45.248L760.928 715.616z" p-id="2284" fill="#8a8a8a"></path></svg>`;
  var moon = `<svg t="1695286075420" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3452" width="16" height="16"><path d="M427.989333 181.12A395.84 395.84 0 0 0 426.666667 213.333333c0 211.754667 172.245333 384 384 384 10.816 0 21.557333-0.437333 32.213333-1.322666C805.344 743.733333 671.232 853.333333 512 853.333333c-188.213333 0-341.333333-153.12-341.333333-341.333333 0-159.232 109.6-293.344 257.322666-330.88M512 85.333333C276.362667 85.333333 85.333333 276.362667 85.333333 512c0 235.648 191.029333 426.666667 426.666667 426.666667 235.648 0 426.666667-191.018667 426.666667-426.666667 0-9.525333-0.426667-18.933333-1.045334-28.309333A297.418667 297.418667 0 0 1 810.666667 512c-164.949333 0-298.666667-133.717333-298.666667-298.666667 0-45.408 10.186667-88.426667 28.309333-126.954666A424.672 424.672 0 0 0 512 85.333333z" p-id="3453" fill="#8a8a8a"></path></svg>`;
  moon = `<svg t="1695287541521" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6596" width="16" height="16"><path d="M512 938.666667a426.666667 426.666667 0 0 1 0-853.333334 42.666667 42.666667 0 0 1 42.666667 42.666667 341.333333 341.333333 0 0 0 341.333333 341.333333 42.666667 42.666667 0 0 1 42.666667 42.666667 426.666667 426.666667 0 0 1-426.666667 426.666667z m-40.106667-765.44a341.333333 341.333333 0 1 0 378.88 378.88 426.666667 426.666667 0 0 1-378.88-378.88z" fill="#8a8a8a" p-id="6597"></path></svg>`;
  var initColor = {
    brightness: 100,
    contrast: 90,
    sepia: 10
  };
  if (DARK && getDarkOfLocalStorage() !== "off") {
    setDarkOfLocalStorage("on");
  }
  if (getDarkOfLocalStorage() === "on") {
    (0, import_darkreader.enable)(initColor);
    (0, import_jquery4.default)("#light-dark a").html(sun);
  } else if (getDarkOfLocalStorage() === "off") {
    (0, import_darkreader.disable)();
  }
  function toggleColor() {
    let _isEnabled = (0, import_darkreader.isEnabled)();
    if (_isEnabled) {
      (0, import_darkreader.disable)();
      setDarkOfLocalStorage("off");
      (0, import_jquery4.default)("#light-dark a").html(moon);
    } else {
      (0, import_darkreader.enable)(initColor);
      setDarkOfLocalStorage("on");
      (0, import_jquery4.default)("#light-dark a").html(sun);
    }
  }
  function getDarkOfLocalStorage() {
    return localStorage.getItem("dark");
  }
  function setDarkOfLocalStorage(flag) {
    localStorage.setItem("dark", flag);
  }

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\utils\viewImage.js
  var import_jquery5 = __toESM(require_jquery_min());
  function viewImage(e2) {
    if (location.pathname === "/")
      return;
    let curImgSrc = e2.target.attributes.src.value;
    curImgSrc = encodeURI(curImgSrc);
    console.log(curImgSrc);
    document.body.style = "overflow: hidden;";
    (0, import_jquery5.default)("body").prepend(`
		<div 
			id="mask" 
			style="
				position: fixed; 
				background: rgba(255, 255, 255, .96); 
				backdrop-filter: blur(5px);
				left: 0; top: 0; 
				width: 100%; height: 100%; 
				overflow-y:auto; 
				overflow-x: hidden; 
				z-index: 2000; 
				"
			>
			<div 
				id="wrapper_img"
				style="
					width:90%; 
					height: 80%;
					margin: 32px auto; 
					overflow: auto;
				"
				>
				<img 
					id="img"
					src=${curImgSrc} 
					style="
						max-width: none;
						display: block; 
						box-sizing: border-box; 
						margin: 0 auto; 
						padding: 8px; 
						transition: all 0.3s ease;
						" 
					onclick="document.getElementById('img').width += DELTA;"
					ondblclick="document.body.removeChild(document.getElementById('mask')); document.body.style='';"
				/>
			</div>
			<div
				style="
					position: absolute;
					bottom: 6%;
					left: 50%;
					transform: translateX(-50%);
					display: flex;
					background: #F1F2F6;
					width: 200px;
					padding:8px 6px 4px 6px;
					justify-content: space-around;
					border-radius: 24px;
				"
				>

				<div onclick="document.getElementById('img').width -= DELTA"><svg t="1667354608074" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2903" width="24" height="24"><path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z" p-id="2904" fill="#1296db"></path><path d="M597.333333 437.333333H341.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h256c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" p-id="2905" fill="#1296db"></path></svg></div>
				<div style="width: 24px;" onclick="document.getElementById('img').width = _width"><svg t="1667356342781" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19270" width="22" height="22"><path d="M192 720v96h160v64H128v-160h64z m704 0v160h-224v-64h160v-96h64z m0-576v160h-64v-96h-160v-64h224z m-544 0v64H192v96H128v-160h224z" p-id="19271" fill="#1296db"></path></svg></div>	
				<div style="width: 24px;" onclick="document.getElementById('img').width += DELTA"><svg t="1667354518760" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2555" width="24" height="24"><path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z" p-id="2556" fill="#1296db"></path><path d="M597.333333 437.333333h-96V341.333333c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v96H341.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h96V597.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-96H597.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" p-id="2557" fill="#1296db"></path></svg></div>
				<div onclick="document.body.removeChild(document.getElementById('mask')); document.body.style=''"><svg t="1667354913254" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4876" width="24" height="24"><path d="M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z" p-id="4877" fill="#e69"></path></svg></div>
			</div>
			<script>
				var DELTA = 200;

				var _wiWidth = document.getElementById('img').offsetWidth;
				var _screenWidth = document.getElementById('mask').offsetWidth;
				console.log(_wiWidth)
				console.log(_screenWidth)
				var _width = 0;
				if (_wiWidth > 2052) {
					_width = _wiWidth / 3;
				} else if (_wiWidth > 1026) {
					_width = _wiWidth / 2;
				} else {
					_width = _wiWidth;
				}
				_width = _screenWidth > 1026 ? _width : _screenWidth * 0.9;
				// \u8BFB\u53D6 http \u56FE\u7247\u7684\u65F6\u5019\uFF0C\u5176\u9ED8\u8BA4\u5C3A\u5BF8\u4E3A 18 \uFF0C\u597D\u5947\u602A
				console.log(_width);
				if (_width < 30) { _width = 618 }
				document.getElementById('img').width = _width;
			<\/script>
		</div>
		`);
  }

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\utils\ship.js
  var config = {
    engine: "by"
  };
  var scClear = document.querySelector("#ship-clear");
  var scInput = document.querySelector("#ship-input");
  var scVal = "";
  var eby = document.querySelector("#by");
  var ebd = document.querySelector("#bd");
  var ego = document.querySelector("#go");
  var cur;
  var defaultId = "#" + config.engine;
  var urlRegexp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;
  init();
  function init() {
    scInput && scInput.focus();
    scClear && (scClear.style = "opacity: 0;");
    let curId = localStorage.getItem("curId");
    cur = curId ? document.querySelector(curId) : document.querySelector(defaultId);
    cur && (cur.className = "activated");
  }
  function search(e2) {
    if (e2 && e2.keyCode !== 13)
      return;
    if (urlRegexp.test(scVal)) {
      scVal = scVal.indexOf("http") === 0 ? scVal : "https://" + scVal;
      window.open(scVal);
      clearVal();
      return;
    }
    let _eg;
    if (cur.id === "by") {
      _eg = "https://cn.bing.com/search?q=";
    } else if (cur.id === "bd") {
      _eg = "https://baidu.com/s?wd=";
    } else if (cur.id === "go") {
      _eg = "https://google.com/search?q=";
    }
    window.open(_eg + scVal);
  }
  function select(e2) {
    let _id = "#" + e2.target.id;
    if (_id === "#engine")
      return;
    cur = document.querySelector(_id);
    localStorage.setItem("curId", _id);
    eby.className = "";
    ebd.className = "";
    ego.className = "";
    cur.className = "activated";
    if (scVal)
      search();
  }
  function clearVal() {
    if (!scInput.value)
      return;
    scInput.value = "";
    reactive();
  }
  function reactive() {
    scVal = scInput.value.trim();
    scClear.style = scVal ? "opacity: 1" : "opacity: 0";
    scInput.focus();
  }
  var ship_default = {
    init,
    select,
    search,
    clearVal,
    reactive
  };

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\utils\isMobile.js
  function browserRedirect() {
    let sUserAgent = navigator.userAgent.toLowerCase(), bIsIpad = sUserAgent.match(/ipad/i) == "ipad", bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os", bIsMidp = sUserAgent.match(/midp/i) == "midp", bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4", bIsUc = sUserAgent.match(/ucweb/i) == "ucweb", bIsAndroid = sUserAgent.match(/android/i) == "android", bIsCE = sUserAgent.match(/windows ce/i) == "windows ce", bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
      return true;
    }
  }

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\libs\notyf.min.js
  var t;
  var i = function() {
    return i = Object.assign || function(t2) {
      for (var i2, n2 = 1, e2 = arguments.length; n2 < e2; n2++)
        for (var o2 in i2 = arguments[n2])
          Object.prototype.hasOwnProperty.call(i2, o2) && (t2[o2] = i2[o2]);
      return t2;
    }, i.apply(this, arguments);
  };
  var n = function() {
    function t2(t3) {
      this.options = t3, this.listeners = {};
    }
    return t2.prototype.on = function(t3, i2) {
      var n2 = this.listeners[t3] || [];
      this.listeners[t3] = n2.concat([i2]);
    }, t2.prototype.triggerEvent = function(t3, i2) {
      var n2 = this;
      (this.listeners[t3] || []).forEach(function(t4) {
        return t4({ target: n2, event: i2 });
      });
    }, t2;
  }();
  !function(t2) {
    t2[t2.Add = 0] = "Add", t2[t2.Remove = 1] = "Remove";
  }(t || (t = {}));
  var e;
  var o = function() {
    function i2() {
      this.notifications = [];
    }
    return i2.prototype.push = function(i3) {
      this.notifications.push(i3), this.updateFn(i3, t.Add, this.notifications);
    }, i2.prototype.splice = function(i3, n2) {
      var e2 = this.notifications.splice(i3, n2)[0];
      return this.updateFn(e2, t.Remove, this.notifications), e2;
    }, i2.prototype.indexOf = function(t2) {
      return this.notifications.indexOf(t2);
    }, i2.prototype.onUpdate = function(t2) {
      this.updateFn = t2;
    }, i2;
  }();
  !function(t2) {
    t2.Dismiss = "dismiss", t2.Click = "click";
  }(e || (e = {}));
  var s = { types: [{ type: "success", className: "notyf__toast--success", backgroundColor: "#3dc763", icon: { className: "notyf__icon--success", tagName: "i" } }, { type: "error", className: "notyf__toast--error", backgroundColor: "#ed3d3d", icon: { className: "notyf__icon--error", tagName: "i" } }], duration: 2e3, ripple: true, position: { x: "right", y: "bottom" }, dismissible: false };
  var a = function() {
    function n2() {
      this.notifications = [], this.events = {}, this.X_POSITION_FLEX_MAP = { left: "flex-start", center: "center", right: "flex-end" }, this.Y_POSITION_FLEX_MAP = { top: "flex-start", center: "center", bottom: "flex-end" };
      var t2 = document.createDocumentFragment(), i2 = this._createHTMLElement({ tagName: "div", className: "notyf" });
      t2.appendChild(i2), document.body.appendChild(t2), this.container = i2, this.animationEndEventName = this._getAnimationEndEventName(), this._createA11yContainer();
    }
    return n2.prototype.on = function(t2, n3) {
      var e2;
      this.events = i(i({}, this.events), ((e2 = {})[t2] = n3, e2));
    }, n2.prototype.update = function(i2, n3) {
      n3 === t.Add ? this.addNotification(i2) : n3 === t.Remove && this.removeNotification(i2);
    }, n2.prototype.removeNotification = function(t2) {
      var i2, n3, e2 = this, o2 = this._popRenderedNotification(t2);
      o2 && ((i2 = o2.node).classList.add("notyf__toast--disappear"), i2.addEventListener(this.animationEndEventName, n3 = function(t3) {
        t3.target === i2 && (i2.removeEventListener(e2.animationEndEventName, n3), e2.container.removeChild(i2));
      }));
    }, n2.prototype.addNotification = function(t2) {
      var i2 = this._renderNotification(t2);
      this.notifications.push({ notification: t2, node: i2 }), this._announce(t2.options.message || "Notification");
    }, n2.prototype._renderNotification = function(t2) {
      var i2, n3 = this._buildNotificationCard(t2), e2 = t2.options.className;
      return e2 && (i2 = n3.classList).add.apply(i2, e2.split(" ")), this.container.appendChild(n3), n3;
    }, n2.prototype._popRenderedNotification = function(t2) {
      for (var i2 = -1, n3 = 0; n3 < this.notifications.length && i2 < 0; n3++)
        this.notifications[n3].notification === t2 && (i2 = n3);
      if (i2 !== -1)
        return this.notifications.splice(i2, 1)[0];
    }, n2.prototype.getXPosition = function(t2) {
      var i2;
      return ((i2 = t2 == null ? void 0 : t2.position) === null || i2 === void 0 ? void 0 : i2.x) || "right";
    }, n2.prototype.getYPosition = function(t2) {
      var i2;
      return ((i2 = t2 == null ? void 0 : t2.position) === null || i2 === void 0 ? void 0 : i2.y) || "bottom";
    }, n2.prototype.adjustContainerAlignment = function(t2) {
      var i2 = this.X_POSITION_FLEX_MAP[this.getXPosition(t2)], n3 = this.Y_POSITION_FLEX_MAP[this.getYPosition(t2)], e2 = this.container.style;
      e2.setProperty("justify-content", n3), e2.setProperty("align-items", i2);
    }, n2.prototype._buildNotificationCard = function(t2) {
      var i2 = this, n3 = t2.options, o2 = n3.icon;
      this.adjustContainerAlignment(n3);
      var s2 = this._createHTMLElement({ tagName: "div", className: "notyf__toast" }), a2 = this._createHTMLElement({ tagName: "div", className: "notyf__ripple" }), r2 = this._createHTMLElement({ tagName: "div", className: "notyf__wrapper" }), c = this._createHTMLElement({ tagName: "div", className: "notyf__message" });
      c.innerHTML = n3.message || "";
      var p = n3.background || n3.backgroundColor;
      if (o2) {
        var d = this._createHTMLElement({ tagName: "div", className: "notyf__icon" });
        if ((typeof o2 == "string" || o2 instanceof String) && (d.innerHTML = new String(o2).valueOf()), typeof o2 == "object") {
          var l = o2.tagName, u = l === void 0 ? "i" : l, f = o2.className, h = o2.text, m = o2.color, v = m === void 0 ? p : m, y = this._createHTMLElement({ tagName: u, className: f, text: h });
          v && (y.style.color = v), d.appendChild(y);
        }
        r2.appendChild(d);
      }
      if (r2.appendChild(c), s2.appendChild(r2), p && (n3.ripple ? (a2.style.background = p, s2.appendChild(a2)) : s2.style.background = p), n3.dismissible) {
        var _ = this._createHTMLElement({ tagName: "div", className: "notyf__dismiss" }), g = this._createHTMLElement({ tagName: "button", className: "notyf__dismiss-btn" });
        _.appendChild(g), r2.appendChild(_), s2.classList.add("notyf__toast--dismissible"), g.addEventListener("click", function(n4) {
          var o3, s3;
          (s3 = (o3 = i2.events)[e.Dismiss]) === null || s3 === void 0 || s3.call(o3, { target: t2, event: n4 }), n4.stopPropagation();
        });
      }
      s2.addEventListener("click", function(n4) {
        var o3, s3;
        return (s3 = (o3 = i2.events)[e.Click]) === null || s3 === void 0 ? void 0 : s3.call(o3, { target: t2, event: n4 });
      });
      var N = this.getYPosition(n3) === "top" ? "upper" : "lower";
      return s2.classList.add("notyf__toast--" + N), s2;
    }, n2.prototype._createHTMLElement = function(t2) {
      var i2 = t2.tagName, n3 = t2.className, e2 = t2.text, o2 = document.createElement(i2);
      return n3 && (o2.className = n3), o2.textContent = e2 || null, o2;
    }, n2.prototype._createA11yContainer = function() {
      var t2 = this._createHTMLElement({ tagName: "div", className: "notyf-announcer" });
      t2.setAttribute("aria-atomic", "true"), t2.setAttribute("aria-live", "polite"), t2.style.border = "0", t2.style.clip = "rect(0 0 0 0)", t2.style.height = "1px", t2.style.margin = "-1px", t2.style.overflow = "hidden", t2.style.padding = "0", t2.style.position = "absolute", t2.style.width = "1px", t2.style.outline = "0", document.body.appendChild(t2), this.a11yContainer = t2;
    }, n2.prototype._announce = function(t2) {
      var i2 = this;
      this.a11yContainer.textContent = "", setTimeout(function() {
        i2.a11yContainer.textContent = t2;
      }, 100);
    }, n2.prototype._getAnimationEndEventName = function() {
      var t2, i2 = document.createElement("_fake"), n3 = { MozTransition: "animationend", OTransition: "oAnimationEnd", WebkitTransition: "webkitAnimationEnd", transition: "animationend" };
      for (t2 in n3)
        if (i2.style[t2] !== void 0)
          return n3[t2];
      return "animationend";
    }, n2;
  }();
  var r = function() {
    function t2(t3) {
      var n2 = this;
      this.dismiss = this._removeNotification, this.notifications = new o(), this.view = new a();
      var r2 = this.registerTypes(t3);
      this.options = i(i({}, s), t3), this.options.types = r2, this.notifications.onUpdate(function(t4, i2) {
        return n2.view.update(t4, i2);
      }), this.view.on(e.Dismiss, function(t4) {
        var i2 = t4.target, o2 = t4.event;
        n2._removeNotification(i2), i2.triggerEvent(e.Dismiss, o2);
      }), this.view.on(e.Click, function(t4) {
        var i2 = t4.target, n3 = t4.event;
        return i2.triggerEvent(e.Click, n3);
      });
    }
    return t2.prototype.error = function(t3) {
      var i2 = this.normalizeOptions("error", t3);
      return this.open(i2);
    }, t2.prototype.success = function(t3) {
      var i2 = this.normalizeOptions("success", t3);
      return this.open(i2);
    }, t2.prototype.open = function(t3) {
      var e2 = this.options.types.find(function(i2) {
        return i2.type === t3.type;
      }) || {}, o2 = i(i({}, e2), t3);
      this.assignProps(["ripple", "position", "dismissible"], o2);
      var s2 = new n(o2);
      return this._pushNotification(s2), s2;
    }, t2.prototype.dismissAll = function() {
      for (; this.notifications.splice(0, 1); )
        ;
    }, t2.prototype.assignProps = function(t3, i2) {
      var n2 = this;
      t3.forEach(function(t4) {
        i2[t4] = i2[t4] == null ? n2.options[t4] : i2[t4];
      });
    }, t2.prototype._pushNotification = function(t3) {
      var i2 = this;
      this.notifications.push(t3);
      var n2 = t3.options.duration !== void 0 ? t3.options.duration : this.options.duration;
      n2 && setTimeout(function() {
        return i2._removeNotification(t3);
      }, n2);
    }, t2.prototype._removeNotification = function(t3) {
      var i2 = this.notifications.indexOf(t3);
      i2 !== -1 && this.notifications.splice(i2, 1);
    }, t2.prototype.normalizeOptions = function(t3, n2) {
      var e2 = { type: t3 };
      return typeof n2 == "string" ? e2.message = n2 : typeof n2 == "object" && (e2 = i(i({}, e2), n2)), e2;
    }, t2.prototype.registerTypes = function(t3) {
      var n2 = (t3 && t3.types || []).slice();
      return s.types.map(function(t4) {
        var e2 = -1;
        n2.forEach(function(i2, n3) {
          i2.type === t4.type && (e2 = n3);
        });
        var o2 = e2 !== -1 ? n2.splice(e2, 1)[0] : {};
        return i(i({}, t4), o2);
      }).concat(n2);
    }, t2;
  }();

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\utils\notyf.js
  var notyf = new r({
    duration: 1500,
    position: {
      x: "right",
      y: "top"
    },
    types: [
      {
        type: "success",
        background: "#198754",
        icon: "\u{1F44D}"
      },
      {
        type: "warning",
        background: "#ffc107",
        icon: "\u{1F916}"
      },
      {
        type: "info",
        background: "#0dcaf0",
        icon: "\u{1FAA7}"
      },
      {
        type: "error",
        background: "#dc3545",
        icon: "\u{1F6AB}"
      }
    ]
  });
  var notyf_default = notyf;

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\utils\localsearch.js
  var IS_MOBILE = browserRedirect();
  var map = [];
  var scClear2 = document.querySelector("#sc-clear");
  var scInput2 = document.querySelector("#sc-input");
  var scRes = document.querySelector("#sc-res");
  var scVal2 = "";
  map = getDocMap();
  scClear2 && (scClear2.style = "opacity: 0;");
  function getDocMap() {
    let today = Date.now();
    let _today = localStorage.getItem("today");
    if (!_today) {
      let _docData = getDocData();
      localStorage.setItem("today", today);
      localStorage.setItem("data", _docData);
      return JSON.parse(_docData);
    }
    if (today - _today > !IS_MOBILE ? 864e5 : 30 * 864e5) {
      let _docData = getDocData();
      localStorage.setItem("data", _docData);
      return JSON.parse(_docData);
    }
    return JSON.parse(localStorage.getItem("data"));
  }
  function getDocData() {
    let data = document.querySelector("#data") && document.querySelector("#data").innerText.trim();
    data = data && data.slice(0, data.length - 2) + "]";
    data = data && data.replace(/\]\s+\[/g, "");
    return data;
  }
  function forceSearch() {
    localStorage.removeItem("today");
    map = getDocMap();
    notyf_default.open({
      type: "success",
      message: "\u7AD9\u70B9\u7F13\u5B58\u66F4\u65B0\u6210\u529F"
    });
  }
  function search2(e2) {
    if (!IS_MOBILE && e2 && e2.keyCode !== 13)
      return;
    console.log("search....");
    let post = "";
    scVal2 = scInput2.value.trim().toLowerCase();
    let scResPostsCounts = 0, scResScValCounts = 0;
    map.forEach((item) => {
      if (!scVal2)
        return;
      if (item.content.indexOf(scVal2) > -1 || item.title.indexOf(scVal2) > -1) {
        let _arrIndex = scanStr(item.content, scVal2);
        let strRes = "";
        let _radius = 100;
        let _strStyle0 = '<span style="background: #ffff0099;">';
        let _strStyle1 = "</span>";
        let _strSeparator = "<hr>";
        scResPostsCounts += 1;
        scResScValCounts += _arrIndex.length;
        let _count = 0;
        for (let i2 = 0, len = _arrIndex.length; i2 < len; i2++) {
          let _idxItem = _arrIndex[i2];
          let _relidx = i2;
          if (_relidx > 0 && _arrIndex[_relidx] - _arrIndex[_relidx - 1 - _count] < _radius) {
            _count += 1;
            continue;
          }
          _count = 0;
          strRes += _strSeparator;
          let _startIdx = _idxItem - _radius + (_relidx + 1) * _strSeparator.length;
          let _endIdx = _idxItem + _radius + (_relidx + 1) * _strSeparator.length;
          strRes += item.content.substring(_startIdx, _endIdx);
        }
        let _arrStrRes = scanStr(strRes, scVal2);
        for (let i2 = 0, len = _arrStrRes.length; i2 < len; i2++) {
          let _idxItem = _arrStrRes[i2];
          let _realidx = i2;
          strRes = strRes.slice(0, _idxItem + _realidx * (_strStyle0.length + _strStyle1.length)) + _strStyle0 + scVal2 + _strStyle1 + strRes.slice(_idxItem + scVal2.length + _realidx * (_strStyle0.length + _strStyle1.length));
        }
        post += `
                <div class="item" >
                    <a href="${item.permalink}">
                        <span>${item.title}</span>
                    </a>
                    <div class="summary">${strRes}</div>
                </div>
            `;
      }
    });
    if (scVal2 && !post) {
      notyf_default.open({
        type: "warning",
        message: "\u672A\u627E\u5230\u76F8\u5173\u5185\u5BB9"
      });
    }
    let _total = "\u6761\u76EE", _times = "\u6B21\u6570";
    let res = `
        <div class="statistics">${_total}\uFF1A ${scResPostsCounts} &nbsp;&nbsp;${_times}\uFF1A ${scResScValCounts}</div>
        <div class="list">
            ${post}
        </div>
    `;
    scRes.innerHTML = res;
    if (scResPostsCounts == 0) {
      document.querySelector(".statistics").remove();
    }
    scClear2.style = scVal2 ? "opacity: 1" : "opacity: 0";
  }
  function scanStr(content, str) {
    let index = content.indexOf(str);
    let num = 0;
    let arrIndex = [];
    while (index !== -1) {
      arrIndex.push(index);
      num += 1;
      index = content.indexOf(str, index + 1);
    }
    return arrIndex;
  }
  function clearInputVal() {
    if (!scInput2.value)
      return;
    scInput2.value = "";
    search2();
  }
  var localsearch_default = { search: search2, forceSearch, clearInputVal };

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\init\eventBinding.js
  function initEventBinding() {
    (0, import_jquery6.default)(window).bind("scroll", (0, import_lodash.throttle)(colorToc, 500));
    (0, import_jquery6.default)("#toc").bind("click", toggleToc);
    (0, import_jquery6.default)("#light-dark").bind("click", toggleColor);
    (0, import_jquery6.default)(".content img").bind("click", viewImage);
    (0, import_jquery6.default)("#engine").bind("click", ship_default.select);
    (0, import_jquery6.default)("#ship-clear").bind("click", ship_default.clearVal);
    (0, import_jquery6.default)("#ship-input").bind("input", ship_default.reactive).bind("keypress", ship_default.search);
    (0, import_jquery6.default)("#sc-clear").bind("click", localsearch_default.clearInputVal);
    (0, import_jquery6.default)("#sc-input").bind("keypress blur", localsearch_default.search);
    (0, import_jquery6.default)("#sc-icon").bind("click", localsearch_default.forceSearch);
  }

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\init\initImage.js
  var import_jquery7 = __toESM(require_jquery_min());
  function initImage() {
    (0, import_jquery7.default)("img").each((idx, item) => {
      let src = (0, import_jquery7.default)(item).attr("src");
      if (!src.startsWith("http") && !src.startsWith("/")) {
        (0, import_jquery7.default)(item).attr("src", "/" + src);
      }
      let _alt = (0, import_jquery7.default)(item).attr("alt") || "";
      if (_alt.indexOf("|") > -1) {
        (0, import_jquery7.default)(item).attr("width", _alt.split("|")[1]);
      }
    });
  }

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\init\initCodeBlock.js
  var import_jquery8 = __toESM(require_jquery_min());
  function initCodeBlock() {
    const _arr = (0, import_jquery8.default)("pre code");
    _arr.each(function(idx) {
      let _lang = (0, import_jquery8.default)(this).attr("data-lang");
      if (!_lang)
        return;
      if (!_lang.startsWith("_")) {
        (0, import_jquery8.default)(this).parents("pre").before(`<div class="lang">${_lang}</div>`);
      } else {
        _lang = _lang.slice(1);
        if (!_lang.startsWith("_")) {
          (0, import_jquery8.default)(this).parents("pre").before(`
					<details>
						<summary>${_lang}</summary>
						<pre>${(0, import_jquery8.default)(this).html()}</pre>
					</details>
				`);
        } else {
          (0, import_jquery8.default)(this).parents("pre").before(`
					<details>
						<summary>${_lang.slice(1)}</summary>
						<blockquote>${(0, import_jquery8.default)(this).html()}</blockquote>
					</details>
				`);
        }
        (0, import_jquery8.default)(this).parents("pre").remove();
      }
    });
  }

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\init\enhanceOrgMode.js
  var import_jquery9 = __toESM(require_jquery_min());
  function enhanceOrgMode_default() {
    (0, import_jquery9.default)(".html-block p").each((idx, item) => {
      item.innerHTML = `${item.innerText}`;
    });
  }

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\init\enhanceMarkdown.js
  var import_jquery10 = __toESM(require_jquery_min());
  function enhanceMarkdown_default() {
    (0, import_jquery10.default)("em").each((idx, item) => {
      let _innerText = item.innerHTML;
      if (_innerText.indexOf("_") === 0) {
        item.outerHTML = `<u>${_innerText.slice(1)}</u>`;
      } else if (_innerText.indexOf("=") === 0) {
        item.outerHTML = `<span class="oh-hl">${_innerText.slice(1)}</span>`;
      }
    });
    (0, import_jquery10.default)("blockquote p").each((idx, item) => {
      let _innerHtml = item.innerHTML;
      if (_innerHtml.indexOf("::") === 0) {
        item.parentNode.setAttribute("class", "oh-essay");
        item.outerHTML = `<div>${_innerHtml.slice(2)}</div>`;
      }
    });
    (0, import_jquery10.default)("code").each((idx, item) => {
      let _innerHtml = item.innerHTML;
      if (_innerHtml.indexOf("&gt; ") === 0 || _innerHtml.indexOf("> ") === 0) {
        item.setAttribute("class", "oh-tag");
      }
    });
    (0, import_jquery10.default)(".content, .list").each((idx, item) => {
      let _innerHtml = item.innerHTML;
      if (_innerHtml.indexOf("[[") > -1) {
        let _re = /!\[\[(([\/\-\.\*\$\&\:]|\w|\s|[^\x00-\xff])*\.\w+)\s*\|?\s*(\d*)\]\]/g;
        let _str = _innerHtml.replace(_re, '<img src="$1" alt="$1" width="$3" />');
        let _reLink = /\[\[(([\/\-\.\*\$\:\#]|\w|\s|[^\x00-\xff])*)\|?(([\/\-\.\*\$]|\w|\s|[^\x00-\xff])*)\]\]/g;
        let _strLink = _str.replace(_reLink, (val) => {
          val = val.replace(/[\[\]]/g, "");
          let _arr = val.split(/\s*\|\s*/);
          let _relLink = _arr[0];
          let _desc = _arr[1] ? _arr[1] : _arr[0];
          let _idx = _desc.indexOf("#");
          if (_idx > -1) {
            if (_idx == 0) {
              _relLink = location.pathname.slice(1) + _desc;
            } else {
              _relLink = _desc.replace("#", "/#");
              _relLink = _relLink.replace(/[\.\、]/g, "");
            }
          }
          return `<a href="/${_relLink.replace(/\s/g, "-").toLowerCase()}">${_desc}</a>`;
        });
        item.innerHTML = _strLink;
      }
    });
  }

  // ns-hugo:C:\Users\jack\AppData\Roaming\site\themes\virgo\assets\js\init\runMisc.js
  var import_jquery11 = __toESM(require_jquery_min());
  var import_md5_es = __toESM(require_md5_es_min());
  function getMD5Color(str, len = 6) {
    return "#" + import_md5_es.default.hash(str).slice(0, len);
  }
  function runMisc_default() {
    let freqNavLinkEle = `<div class="freq"></div>`;
    (0, import_jquery11.default)(".content-nav").prepend(freqNavLinkEle);
    (0, import_jquery11.default)(".content-nav table td").each((idx, item) => {
      if (!item.innerHTML) {
        item.innerHTML = `<a style='border: 1px dashed #3333;'><span style='opacity: 0;'>.</span></a>`;
      } else {
        if (item.innerText.startsWith(">")) {
          (0, import_jquery11.default)(item).addClass("frequtent");
          let _text = item.innerText.slice(1).trim();
          item.children[0].innerText = _text;
          let _aClone = (0, import_jquery11.default)(item.children[0]).clone();
          (0, import_jquery11.default)(item).empty().append(_aClone);
          let _color = getMD5Color(_text) + "66";
          let _ele = (0, import_jquery11.default)(item.children[0]).clone().append(`<div class="color-ball" style="background: ${_color};"></div>`);
          item.children[0].style = `border-left: 5px solid ${_color};`;
          (0, import_jquery11.default)(".freq").append(_ele);
        }
      }
    });
    (0, import_jquery11.default)(".rel a, .toc a").each((idx, item) => item.target = "_self");
  }

  // <stdin>
  greet();
  enhanceOrgMode_default();
  initCodeBlock();
  enhanceMarkdown_default();
  initImage();
  initEventBinding();
  runMisc_default();
})();
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

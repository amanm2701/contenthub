function Pf(L) {
  return L && L.__esModule && Object.prototype.hasOwnProperty.call(L, "default") ? L.default : L;
}
var xa = { exports: {} }, yr = {}, Na = { exports: {} }, D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sa;
function zf() {
  if (Sa)
    return D;
  Sa = 1;
  var L = Symbol.for("react.element"), ee = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), ze = Symbol.for("react.strict_mode"), ye = Symbol.for("react.profiler"), ge = Symbol.for("react.provider"), ce = Symbol.for("react.context"), ue = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), fe = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), J = Symbol.iterator;
  function Y(c) {
    return c === null || typeof c != "object" ? null : (c = J && c[J] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var $e = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, We = Object.assign, X = {};
  function H(c, v, O) {
    this.props = c, this.context = v, this.refs = X, this.updater = O || $e;
  }
  H.prototype.isReactComponent = {}, H.prototype.setState = function(c, v) {
    if (typeof c != "object" && typeof c != "function" && c != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, v, "setState");
  }, H.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function yn() {
  }
  yn.prototype = H.prototype;
  function an(c, v, O) {
    this.props = c, this.context = v, this.refs = X, this.updater = O || $e;
  }
  var qe = an.prototype = new yn();
  qe.constructor = an, We(qe, H.prototype), qe.isPureReactComponent = !0;
  var Se = Array.isArray, be = Object.prototype.hasOwnProperty, xe = { current: null }, Te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(c, v, O) {
    var M, F = {}, j = null, $ = null;
    if (v != null)
      for (M in v.ref !== void 0 && ($ = v.ref), v.key !== void 0 && (j = "" + v.key), v)
        be.call(v, M) && !Te.hasOwnProperty(M) && (F[M] = v[M]);
    var A = arguments.length - 2;
    if (A === 1)
      F.children = O;
    else if (1 < A) {
      for (var G = Array(A), Ue = 0; Ue < A; Ue++)
        G[Ue] = arguments[Ue + 2];
      F.children = G;
    }
    if (c && c.defaultProps)
      for (M in A = c.defaultProps, A)
        F[M] === void 0 && (F[M] = A[M]);
    return { $$typeof: L, type: c, key: j, ref: $, props: F, _owner: xe.current };
  }
  function Pn(c, v) {
    return { $$typeof: L, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function gn(c) {
    return typeof c == "object" && c !== null && c.$$typeof === L;
  }
  function Yn(c) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(O) {
      return v[O];
    });
  }
  var cn = /\/+/g;
  function je(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Yn("" + c.key) : v.toString(36);
  }
  function en(c, v, O, M, F) {
    var j = typeof c;
    (j === "undefined" || j === "boolean") && (c = null);
    var $ = !1;
    if (c === null)
      $ = !0;
    else
      switch (j) {
        case "string":
        case "number":
          $ = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case L:
            case ee:
              $ = !0;
          }
      }
    if ($)
      return $ = c, F = F($), c = M === "" ? "." + je($, 0) : M, Se(F) ? (O = "", c != null && (O = c.replace(cn, "$&/") + "/"), en(F, v, O, "", function(Ue) {
        return Ue;
      })) : F != null && (gn(F) && (F = Pn(F, O + (!F.key || $ && $.key === F.key ? "" : ("" + F.key).replace(cn, "$&/") + "/") + c)), v.push(F)), 1;
    if ($ = 0, M = M === "" ? "." : M + ":", Se(c))
      for (var A = 0; A < c.length; A++) {
        j = c[A];
        var G = M + je(j, A);
        $ += en(j, v, O, G, F);
      }
    else if (G = Y(c), typeof G == "function")
      for (c = G.call(c), A = 0; !(j = c.next()).done; )
        j = j.value, G = M + je(j, A++), $ += en(j, v, O, G, F);
    else if (j === "object")
      throw v = String(c), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return $;
  }
  function fn(c, v, O) {
    if (c == null)
      return c;
    var M = [], F = 0;
    return en(c, M, "", "", function(j) {
      return v.call(O, j, F++);
    }), M;
  }
  function Le(c) {
    if (c._status === -1) {
      var v = c._result;
      v = v(), v.then(function(O) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = O);
      }, function(O) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = O);
      }), c._status === -1 && (c._status = 0, c._result = v);
    }
    if (c._status === 1)
      return c._result.default;
    throw c._result;
  }
  var ne = { current: null }, S = { transition: null }, T = { ReactCurrentDispatcher: ne, ReactCurrentBatchConfig: S, ReactCurrentOwner: xe };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return D.Children = { map: fn, forEach: function(c, v, O) {
    fn(c, function() {
      v.apply(this, arguments);
    }, O);
  }, count: function(c) {
    var v = 0;
    return fn(c, function() {
      v++;
    }), v;
  }, toArray: function(c) {
    return fn(c, function(v) {
      return v;
    }) || [];
  }, only: function(c) {
    if (!gn(c))
      throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, D.Component = H, D.Fragment = m, D.Profiler = ye, D.PureComponent = an, D.StrictMode = ze, D.Suspense = V, D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, D.act = _, D.cloneElement = function(c, v, O) {
    if (c == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var M = We({}, c.props), F = c.key, j = c.ref, $ = c._owner;
    if (v != null) {
      if (v.ref !== void 0 && (j = v.ref, $ = xe.current), v.key !== void 0 && (F = "" + v.key), c.type && c.type.defaultProps)
        var A = c.type.defaultProps;
      for (G in v)
        be.call(v, G) && !Te.hasOwnProperty(G) && (M[G] = v[G] === void 0 && A !== void 0 ? A[G] : v[G]);
    }
    var G = arguments.length - 2;
    if (G === 1)
      M.children = O;
    else if (1 < G) {
      A = Array(G);
      for (var Ue = 0; Ue < G; Ue++)
        A[Ue] = arguments[Ue + 2];
      M.children = A;
    }
    return { $$typeof: L, type: c.type, key: F, ref: j, props: M, _owner: $ };
  }, D.createContext = function(c) {
    return c = { $$typeof: ce, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: ge, _context: c }, c.Consumer = c;
  }, D.createElement = Qe, D.createFactory = function(c) {
    var v = Qe.bind(null, c);
    return v.type = c, v;
  }, D.createRef = function() {
    return { current: null };
  }, D.forwardRef = function(c) {
    return { $$typeof: ue, render: c };
  }, D.isValidElement = gn, D.lazy = function(c) {
    return { $$typeof: we, _payload: { _status: -1, _result: c }, _init: Le };
  }, D.memo = function(c, v) {
    return { $$typeof: fe, type: c, compare: v === void 0 ? null : v };
  }, D.startTransition = function(c) {
    var v = S.transition;
    S.transition = {};
    try {
      c();
    } finally {
      S.transition = v;
    }
  }, D.unstable_act = _, D.useCallback = function(c, v) {
    return ne.current.useCallback(c, v);
  }, D.useContext = function(c) {
    return ne.current.useContext(c);
  }, D.useDebugValue = function() {
  }, D.useDeferredValue = function(c) {
    return ne.current.useDeferredValue(c);
  }, D.useEffect = function(c, v) {
    return ne.current.useEffect(c, v);
  }, D.useId = function() {
    return ne.current.useId();
  }, D.useImperativeHandle = function(c, v, O) {
    return ne.current.useImperativeHandle(c, v, O);
  }, D.useInsertionEffect = function(c, v) {
    return ne.current.useInsertionEffect(c, v);
  }, D.useLayoutEffect = function(c, v) {
    return ne.current.useLayoutEffect(c, v);
  }, D.useMemo = function(c, v) {
    return ne.current.useMemo(c, v);
  }, D.useReducer = function(c, v, O) {
    return ne.current.useReducer(c, v, O);
  }, D.useRef = function(c) {
    return ne.current.useRef(c);
  }, D.useState = function(c) {
    return ne.current.useState(c);
  }, D.useSyncExternalStore = function(c, v, O) {
    return ne.current.useSyncExternalStore(c, v, O);
  }, D.useTransition = function() {
    return ne.current.useTransition();
  }, D.version = "18.3.1", D;
}
Na.exports = zf();
var gr = Na.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ka;
function Tf() {
  if (ka)
    return yr;
  ka = 1;
  var L = gr, ee = Symbol.for("react.element"), m = Symbol.for("react.fragment"), ze = Object.prototype.hasOwnProperty, ye = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ce(ue, V, fe) {
    var we, J = {}, Y = null, $e = null;
    fe !== void 0 && (Y = "" + fe), V.key !== void 0 && (Y = "" + V.key), V.ref !== void 0 && ($e = V.ref);
    for (we in V)
      ze.call(V, we) && !ge.hasOwnProperty(we) && (J[we] = V[we]);
    if (ue && ue.defaultProps)
      for (we in V = ue.defaultProps, V)
        J[we] === void 0 && (J[we] = V[we]);
    return { $$typeof: ee, type: ue, key: Y, ref: $e, props: J, _owner: ye.current };
  }
  return yr.Fragment = m, yr.jsx = ce, yr.jsxs = ce, yr;
}
xa.exports = Tf();
var Pa = xa.exports;
const oe = Pa.jsx, Ei = Pa.jsxs;
var za = { exports: {} }, Fe = {}, _i = { exports: {} }, Ci = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ea;
function Lf() {
  return Ea || (Ea = 1, function(L) {
    function ee(S, T) {
      var _ = S.length;
      S.push(T);
      e:
        for (; 0 < _; ) {
          var c = _ - 1 >>> 1, v = S[c];
          if (0 < ye(v, T))
            S[c] = T, S[_] = v, _ = c;
          else
            break e;
        }
    }
    function m(S) {
      return S.length === 0 ? null : S[0];
    }
    function ze(S) {
      if (S.length === 0)
        return null;
      var T = S[0], _ = S.pop();
      if (_ !== T) {
        S[0] = _;
        e:
          for (var c = 0, v = S.length, O = v >>> 1; c < O; ) {
            var M = 2 * (c + 1) - 1, F = S[M], j = M + 1, $ = S[j];
            if (0 > ye(F, _))
              j < v && 0 > ye($, F) ? (S[c] = $, S[j] = _, c = j) : (S[c] = F, S[M] = _, c = M);
            else if (j < v && 0 > ye($, _))
              S[c] = $, S[j] = _, c = j;
            else
              break e;
          }
      }
      return T;
    }
    function ye(S, T) {
      var _ = S.sortIndex - T.sortIndex;
      return _ !== 0 ? _ : S.id - T.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ge = performance;
      L.unstable_now = function() {
        return ge.now();
      };
    } else {
      var ce = Date, ue = ce.now();
      L.unstable_now = function() {
        return ce.now() - ue;
      };
    }
    var V = [], fe = [], we = 1, J = null, Y = 3, $e = !1, We = !1, X = !1, H = typeof setTimeout == "function" ? setTimeout : null, yn = typeof clearTimeout == "function" ? clearTimeout : null, an = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function qe(S) {
      for (var T = m(fe); T !== null; ) {
        if (T.callback === null)
          ze(fe);
        else if (T.startTime <= S)
          ze(fe), T.sortIndex = T.expirationTime, ee(V, T);
        else
          break;
        T = m(fe);
      }
    }
    function Se(S) {
      if (X = !1, qe(S), !We)
        if (m(V) !== null)
          We = !0, Le(be);
        else {
          var T = m(fe);
          T !== null && ne(Se, T.startTime - S);
        }
    }
    function be(S, T) {
      We = !1, X && (X = !1, yn(Qe), Qe = -1), $e = !0;
      var _ = Y;
      try {
        for (qe(T), J = m(V); J !== null && (!(J.expirationTime > T) || S && !Yn()); ) {
          var c = J.callback;
          if (typeof c == "function") {
            J.callback = null, Y = J.priorityLevel;
            var v = c(J.expirationTime <= T);
            T = L.unstable_now(), typeof v == "function" ? J.callback = v : J === m(V) && ze(V), qe(T);
          } else
            ze(V);
          J = m(V);
        }
        if (J !== null)
          var O = !0;
        else {
          var M = m(fe);
          M !== null && ne(Se, M.startTime - T), O = !1;
        }
        return O;
      } finally {
        J = null, Y = _, $e = !1;
      }
    }
    var xe = !1, Te = null, Qe = -1, Pn = 5, gn = -1;
    function Yn() {
      return !(L.unstable_now() - gn < Pn);
    }
    function cn() {
      if (Te !== null) {
        var S = L.unstable_now();
        gn = S;
        var T = !0;
        try {
          T = Te(!0, S);
        } finally {
          T ? je() : (xe = !1, Te = null);
        }
      } else
        xe = !1;
    }
    var je;
    if (typeof an == "function")
      je = function() {
        an(cn);
      };
    else if (typeof MessageChannel < "u") {
      var en = new MessageChannel(), fn = en.port2;
      en.port1.onmessage = cn, je = function() {
        fn.postMessage(null);
      };
    } else
      je = function() {
        H(cn, 0);
      };
    function Le(S) {
      Te = S, xe || (xe = !0, je());
    }
    function ne(S, T) {
      Qe = H(function() {
        S(L.unstable_now());
      }, T);
    }
    L.unstable_IdlePriority = 5, L.unstable_ImmediatePriority = 1, L.unstable_LowPriority = 4, L.unstable_NormalPriority = 3, L.unstable_Profiling = null, L.unstable_UserBlockingPriority = 2, L.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, L.unstable_continueExecution = function() {
      We || $e || (We = !0, Le(be));
    }, L.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pn = 0 < S ? Math.floor(1e3 / S) : 5;
    }, L.unstable_getCurrentPriorityLevel = function() {
      return Y;
    }, L.unstable_getFirstCallbackNode = function() {
      return m(V);
    }, L.unstable_next = function(S) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = Y;
      }
      var _ = Y;
      Y = T;
      try {
        return S();
      } finally {
        Y = _;
      }
    }, L.unstable_pauseExecution = function() {
    }, L.unstable_requestPaint = function() {
    }, L.unstable_runWithPriority = function(S, T) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var _ = Y;
      Y = S;
      try {
        return T();
      } finally {
        Y = _;
      }
    }, L.unstable_scheduleCallback = function(S, T, _) {
      var c = L.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? c + _ : c) : _ = c, S) {
        case 1:
          var v = -1;
          break;
        case 2:
          v = 250;
          break;
        case 5:
          v = 1073741823;
          break;
        case 4:
          v = 1e4;
          break;
        default:
          v = 5e3;
      }
      return v = _ + v, S = { id: we++, callback: T, priorityLevel: S, startTime: _, expirationTime: v, sortIndex: -1 }, _ > c ? (S.sortIndex = _, ee(fe, S), m(V) === null && S === m(fe) && (X ? (yn(Qe), Qe = -1) : X = !0, ne(Se, _ - c))) : (S.sortIndex = v, ee(V, S), We || $e || (We = !0, Le(be))), S;
    }, L.unstable_shouldYield = Yn, L.unstable_wrapCallback = function(S) {
      var T = Y;
      return function() {
        var _ = Y;
        Y = T;
        try {
          return S.apply(this, arguments);
        } finally {
          Y = _;
        }
      };
    };
  }(Ci)), Ci;
}
var _a;
function Rf() {
  return _a || (_a = 1, _i.exports = Lf()), _i.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ca;
function Of() {
  if (Ca)
    return Fe;
  Ca = 1;
  var L = gr, ee = Rf();
  function m(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
      n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ze = /* @__PURE__ */ new Set(), ye = {};
  function ge(e, n) {
    ce(e, n), ce(e + "Capture", n);
  }
  function ce(e, n) {
    for (ye[e] = n, e = 0; e < n.length; e++)
      ze.add(n[e]);
  }
  var ue = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), V = Object.prototype.hasOwnProperty, fe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, we = {}, J = {};
  function Y(e) {
    return V.call(J, e) ? !0 : V.call(we, e) ? !1 : fe.test(e) ? J[e] = !0 : (we[e] = !0, !1);
  }
  function $e(e, n, t, r) {
    if (t !== null && t.type === 0)
      return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function We(e, n, t, r) {
    if (n === null || typeof n > "u" || $e(e, n, t, r))
      return !0;
    if (r)
      return !1;
    if (t !== null)
      switch (t.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function X(e, n, t, r, l, u, i) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = u, this.removeEmptyString = i;
  }
  var H = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    H[e] = new X(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    H[n] = new X(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    H[e] = new X(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    H[e] = new X(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    H[e] = new X(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    H[e] = new X(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    H[e] = new X(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    H[e] = new X(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    H[e] = new X(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var yn = /[\-:]([a-z])/g;
  function an(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      yn,
      an
    );
    H[n] = new X(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(yn, an);
    H[n] = new X(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(yn, an);
    H[n] = new X(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    H[e] = new X(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), H.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    H[e] = new X(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function qe(e, n, t, r) {
    var l = H.hasOwnProperty(n) ? H[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (We(n, t, l, r) && (t = null), r || l === null ? Y(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var Se = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, be = Symbol.for("react.element"), xe = Symbol.for("react.portal"), Te = Symbol.for("react.fragment"), Qe = Symbol.for("react.strict_mode"), Pn = Symbol.for("react.profiler"), gn = Symbol.for("react.provider"), Yn = Symbol.for("react.context"), cn = Symbol.for("react.forward_ref"), je = Symbol.for("react.suspense"), en = Symbol.for("react.suspense_list"), fn = Symbol.for("react.memo"), Le = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), S = Symbol.iterator;
  function T(e) {
    return e === null || typeof e != "object" ? null : (e = S && e[S] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var _ = Object.assign, c;
  function v(e) {
    if (c === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        c = n && n[1] || "";
      }
    return `
` + c + e;
  }
  var O = !1;
  function M(e, n) {
    if (!e || O)
      return "";
    O = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (n = function() {
          throw Error();
        }, Object.defineProperty(n.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(n, []);
          } catch (p) {
            var r = p;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (p) {
            r = p;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (var l = p.stack.split(`
`), u = r.stack.split(`
`), i = l.length - 1, o = u.length - 1; 1 <= i && 0 <= o && l[i] !== u[o]; )
          o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (l[i] !== u[o]) {
            if (i !== 1 || o !== 1)
              do
                if (i--, o--, 0 > o || l[i] !== u[o]) {
                  var s = `
` + l[i].replace(" at new ", " at ");
                  return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      O = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function F(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = M(e.type, !1), e;
      case 11:
        return e = M(e.type.render, !1), e;
      case 1:
        return e = M(e.type, !0), e;
      default:
        return "";
    }
  }
  function j(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case Te:
        return "Fragment";
      case xe:
        return "Portal";
      case Pn:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case je:
        return "Suspense";
      case en:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yn:
          return (e.displayName || "Context") + ".Consumer";
        case gn:
          return (e._context.displayName || "Context") + ".Provider";
        case cn:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case fn:
          return n = e.displayName || null, n !== null ? n : j(e.type) || "Memo";
        case Le:
          n = e._payload, e = e._init;
          try {
            return j(e(n));
          } catch {
          }
      }
    return null;
  }
  function $(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return j(n);
      case 8:
        return n === Qe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function")
          return n.displayName || n.name || null;
        if (typeof n == "string")
          return n;
    }
    return null;
  }
  function A(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function G(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Ue(e) {
    var n = G(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l = t.get, u = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(i) {
        r = "" + i, u.call(this, i);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(i) {
        r = "" + i;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function wr(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function xi(e) {
    if (!e)
      return !1;
    var n = e._valueTracker;
    if (!n)
      return !0;
    var t = n.getValue(), r = "";
    return e && (r = G(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
  }
  function Sr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Tl(e, n) {
    var t = n.checked;
    return _({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function Ni(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = A(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function Pi(e, n) {
    n = n.checked, n != null && qe(e, "checked", n, !1);
  }
  function Ll(e, n) {
    Pi(e, n);
    var t = A(n.value), r = n.type;
    if (t != null)
      r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Rl(e, n.type, t) : n.hasOwnProperty("defaultValue") && Rl(e, n.type, A(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function zi(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null))
        return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function Rl(e, n, t) {
    (n !== "number" || Sr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Ot = Array.isArray;
  function ot(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var l = 0; l < t.length; l++)
        n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++)
        l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + A(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ol(e, n) {
    if (n.dangerouslySetInnerHTML != null)
      throw Error(m(91));
    return _({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ti(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null)
          throw Error(m(92));
        if (Ot(t)) {
          if (1 < t.length)
            throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: A(t) };
  }
  function Li(e, n) {
    var t = A(n.value), r = A(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function Ri(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Oi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Dl(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Oi(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var kr, Di = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, r, l);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (kr = kr || document.createElement("div"), kr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = kr.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
    }
  });
  function Dt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Mt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, La = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Mt).forEach(function(e) {
    La.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), Mt[n] = Mt[e];
    });
  });
  function Mi(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Mt.hasOwnProperty(e) && Mt[e] ? ("" + n).trim() : n + "px";
  }
  function Ii(e, n) {
    e = e.style;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r = t.indexOf("--") === 0, l = Mi(t, n[t], r);
        t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
      }
  }
  var Ra = _({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ml(e, n) {
    if (n) {
      if (Ra[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null)
          throw Error(m(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
          throw Error(m(61));
      }
      if (n.style != null && typeof n.style != "object")
        throw Error(m(62));
    }
  }
  function Il(e, n) {
    if (e.indexOf("-") === -1)
      return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Fl = null;
  function jl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ul = null, st = null, at = null;
  function Fi(e) {
    if (e = tr(e)) {
      if (typeof Ul != "function")
        throw Error(m(280));
      var n = e.stateNode;
      n && (n = Wr(n), Ul(e.stateNode, e.type, n));
    }
  }
  function ji(e) {
    st ? at ? at.push(e) : at = [e] : st = e;
  }
  function Ui() {
    if (st) {
      var e = st, n = at;
      if (at = st = null, Fi(e), n)
        for (e = 0; e < n.length; e++)
          Fi(n[e]);
    }
  }
  function Vi(e, n) {
    return e(n);
  }
  function Ai() {
  }
  var Vl = !1;
  function Bi(e, n, t) {
    if (Vl)
      return e(n, t);
    Vl = !0;
    try {
      return Vi(e, n, t);
    } finally {
      Vl = !1, (st !== null || at !== null) && (Ai(), Ui());
    }
  }
  function It(e, n) {
    var t = e.stateNode;
    if (t === null)
      return null;
    var r = Wr(t);
    if (r === null)
      return null;
    t = r[n];
    e:
      switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
          break e;
        default:
          e = !1;
      }
    if (e)
      return null;
    if (t && typeof t != "function")
      throw Error(m(231, n, typeof t));
    return t;
  }
  var Al = !1;
  if (ue)
    try {
      var Ft = {};
      Object.defineProperty(Ft, "passive", { get: function() {
        Al = !0;
      } }), window.addEventListener("test", Ft, Ft), window.removeEventListener("test", Ft, Ft);
    } catch {
      Al = !1;
    }
  function Oa(e, n, t, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var jt = !1, Er = null, _r = !1, Bl = null, Da = { onError: function(e) {
    jt = !0, Er = e;
  } };
  function Ma(e, n, t, r, l, u, i, o, s) {
    jt = !1, Er = null, Oa.apply(Da, arguments);
  }
  function Ia(e, n, t, r, l, u, i, o, s) {
    if (Ma.apply(this, arguments), jt) {
      if (jt) {
        var p = Er;
        jt = !1, Er = null;
      } else
        throw Error(m(198));
      _r || (_r = !0, Bl = p);
    }
  }
  function Xn(e) {
    var n = e, t = e;
    if (e.alternate)
      for (; n.return; )
        n = n.return;
    else {
      e = n;
      do
        n = e, n.flags & 4098 && (t = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Hi(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
        return n.dehydrated;
    }
    return null;
  }
  function $i(e) {
    if (Xn(e) !== e)
      throw Error(m(188));
  }
  function Fa(e) {
    var n = e.alternate;
    if (!n) {
      if (n = Xn(e), n === null)
        throw Error(m(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null)
        break;
      var u = l.alternate;
      if (u === null) {
        if (r = l.return, r !== null) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === t)
            return $i(l), e;
          if (u === r)
            return $i(l), n;
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return)
        t = l, r = u;
      else {
        for (var i = !1, o = l.child; o; ) {
          if (o === t) {
            i = !0, t = l, r = u;
            break;
          }
          if (o === r) {
            i = !0, r = l, t = u;
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = u.child; o; ) {
            if (o === t) {
              i = !0, t = u, r = l;
              break;
            }
            if (o === r) {
              i = !0, r = u, t = l;
              break;
            }
            o = o.sibling;
          }
          if (!i)
            throw Error(m(189));
        }
      }
      if (t.alternate !== r)
        throw Error(m(190));
    }
    if (t.tag !== 3)
      throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function Wi(e) {
    return e = Fa(e), e !== null ? Qi(e) : null;
  }
  function Qi(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var n = Qi(e);
      if (n !== null)
        return n;
      e = e.sibling;
    }
    return null;
  }
  var Ki = ee.unstable_scheduleCallback, Yi = ee.unstable_cancelCallback, ja = ee.unstable_shouldYield, Ua = ee.unstable_requestPaint, re = ee.unstable_now, Va = ee.unstable_getCurrentPriorityLevel, Hl = ee.unstable_ImmediatePriority, Xi = ee.unstable_UserBlockingPriority, Cr = ee.unstable_NormalPriority, Aa = ee.unstable_LowPriority, Gi = ee.unstable_IdlePriority, xr = null, dn = null;
  function Ba(e) {
    if (dn && typeof dn.onCommitFiberRoot == "function")
      try {
        dn.onCommitFiberRoot(xr, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var nn = Math.clz32 ? Math.clz32 : Wa, Ha = Math.log, $a = Math.LN2;
  function Wa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ha(e) / $a | 0) | 0;
  }
  var Nr = 64, Pr = 4194304;
  function Ut(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function zr(e, n) {
    var t = e.pendingLanes;
    if (t === 0)
      return 0;
    var r = 0, l = e.suspendedLanes, u = e.pingedLanes, i = t & 268435455;
    if (i !== 0) {
      var o = i & ~l;
      o !== 0 ? r = Ut(o) : (u &= i, u !== 0 && (r = Ut(u)));
    } else
      i = t & ~l, i !== 0 ? r = Ut(i) : u !== 0 && (r = Ut(u));
    if (r === 0)
      return 0;
    if (n !== 0 && n !== r && !(n & l) && (l = r & -r, u = n & -n, l >= u || l === 16 && (u & 4194240) !== 0))
      return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0)
      for (e = e.entanglements, n &= r; 0 < n; )
        t = 31 - nn(n), l = 1 << t, r |= e[t], n &= ~l;
    return r;
  }
  function Qa(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ka(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var i = 31 - nn(u), o = 1 << i, s = l[i];
      s === -1 ? (!(o & t) || o & r) && (l[i] = Qa(o, n)) : s <= n && (e.expiredLanes |= o), u &= ~o;
    }
  }
  function $l(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Zi() {
    var e = Nr;
    return Nr <<= 1, !(Nr & 4194240) && (Nr = 64), e;
  }
  function Wl(e) {
    for (var n = [], t = 0; 31 > t; t++)
      n.push(e);
    return n;
  }
  function Vt(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - nn(n), e[n] = t;
  }
  function Ya(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - nn(t), u = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~u;
    }
  }
  function Ql(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - nn(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var B = 0;
  function Ji(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var qi, Kl, bi, eo, no, Yl = !1, Tr = [], zn = null, Tn = null, Ln = null, At = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), Rn = [], Xa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function to(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        zn = null;
        break;
      case "dragenter":
      case "dragleave":
        Tn = null;
        break;
      case "mouseover":
      case "mouseout":
        Ln = null;
        break;
      case "pointerover":
      case "pointerout":
        At.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bt.delete(n.pointerId);
    }
  }
  function Ht(e, n, t, r, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, n !== null && (n = tr(n), n !== null && Kl(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function Ga(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return zn = Ht(zn, e, n, t, r, l), !0;
      case "dragenter":
        return Tn = Ht(Tn, e, n, t, r, l), !0;
      case "mouseover":
        return Ln = Ht(Ln, e, n, t, r, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return At.set(u, Ht(At.get(u) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, Bt.set(u, Ht(Bt.get(u) || null, e, n, t, r, l)), !0;
    }
    return !1;
  }
  function ro(e) {
    var n = Gn(e.target);
    if (n !== null) {
      var t = Xn(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Hi(t), n !== null) {
            e.blockedOn = n, no(e.priority, function() {
              bi(t);
            });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Lr(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Gl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        Fl = r, t.target.dispatchEvent(r), Fl = null;
      } else
        return n = tr(t), n !== null && Kl(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function lo(e, n, t) {
    Lr(e) && t.delete(n);
  }
  function Za() {
    Yl = !1, zn !== null && Lr(zn) && (zn = null), Tn !== null && Lr(Tn) && (Tn = null), Ln !== null && Lr(Ln) && (Ln = null), At.forEach(lo), Bt.forEach(lo);
  }
  function $t(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Yl || (Yl = !0, ee.unstable_scheduleCallback(ee.unstable_NormalPriority, Za)));
  }
  function Wt(e) {
    function n(l) {
      return $t(l, e);
    }
    if (0 < Tr.length) {
      $t(Tr[0], e);
      for (var t = 1; t < Tr.length; t++) {
        var r = Tr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (zn !== null && $t(zn, e), Tn !== null && $t(Tn, e), Ln !== null && $t(Ln, e), At.forEach(n), Bt.forEach(n), t = 0; t < Rn.length; t++)
      r = Rn[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rn.length && (t = Rn[0], t.blockedOn === null); )
      ro(t), t.blockedOn === null && Rn.shift();
  }
  var ct = Se.ReactCurrentBatchConfig, Rr = !0;
  function Ja(e, n, t, r) {
    var l = B, u = ct.transition;
    ct.transition = null;
    try {
      B = 1, Xl(e, n, t, r);
    } finally {
      B = l, ct.transition = u;
    }
  }
  function qa(e, n, t, r) {
    var l = B, u = ct.transition;
    ct.transition = null;
    try {
      B = 4, Xl(e, n, t, r);
    } finally {
      B = l, ct.transition = u;
    }
  }
  function Xl(e, n, t, r) {
    if (Rr) {
      var l = Gl(e, n, t, r);
      if (l === null)
        du(e, n, r, Or, t), to(e, r);
      else if (Ga(l, e, n, t, r))
        r.stopPropagation();
      else if (to(e, r), n & 4 && -1 < Xa.indexOf(e)) {
        for (; l !== null; ) {
          var u = tr(l);
          if (u !== null && qi(u), u = Gl(e, n, t, r), u === null && du(e, n, r, Or, t), u === l)
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else
        du(e, n, r, null, t);
    }
  }
  var Or = null;
  function Gl(e, n, t, r) {
    if (Or = null, e = jl(r), e = Gn(e), e !== null)
      if (n = Xn(e), n === null)
        e = null;
      else if (t = n.tag, t === 13) {
        if (e = Hi(n), e !== null)
          return e;
        e = null;
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else
        n !== e && (e = null);
    return Or = e, null;
  }
  function uo(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Va()) {
          case Hl:
            return 1;
          case Xi:
            return 4;
          case Cr:
          case Aa:
            return 16;
          case Gi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var On = null, Zl = null, Dr = null;
  function io() {
    if (Dr)
      return Dr;
    var e, n = Zl, t = n.length, r, l = "value" in On ? On.value : On.textContent, u = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++)
      ;
    var i = t - e;
    for (r = 1; r <= i && n[t - r] === l[u - r]; r++)
      ;
    return Dr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Mr(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ir() {
    return !0;
  }
  function oo() {
    return !1;
  }
  function Ve(e) {
    function n(t, r, l, u, i) {
      this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var o in e)
        e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(u) : u[o]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ir : oo, this.isPropagationStopped = oo, this;
    }
    return _(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Ir);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Ir);
    }, persist: function() {
    }, isPersistent: Ir }), n;
  }
  var ft = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Jl = Ve(ft), Qt = _({}, ft, { view: 0, detail: 0 }), ba = Ve(Qt), ql, bl, Kt, Fr = _({}, Qt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: nu, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Kt && (Kt && e.type === "mousemove" ? (ql = e.screenX - Kt.screenX, bl = e.screenY - Kt.screenY) : bl = ql = 0, Kt = e), ql);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : bl;
  } }), so = Ve(Fr), ec = _({}, Fr, { dataTransfer: 0 }), nc = Ve(ec), tc = _({}, Qt, { relatedTarget: 0 }), eu = Ve(tc), rc = _({}, ft, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lc = Ve(rc), uc = _({}, ft, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), ic = Ve(uc), oc = _({}, ft, { data: 0 }), ao = Ve(oc), sc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, ac = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, cc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function fc(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = cc[e]) ? !!n[e] : !1;
  }
  function nu() {
    return fc;
  }
  var dc = _({}, Qt, { key: function(e) {
    if (e.key) {
      var n = sc[e.key] || e.key;
      if (n !== "Unidentified")
        return n;
    }
    return e.type === "keypress" ? (e = Mr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ac[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: nu, charCode: function(e) {
    return e.type === "keypress" ? Mr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Mr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), pc = Ve(dc), mc = _({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), co = Ve(mc), hc = _({}, Qt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: nu }), vc = Ve(hc), yc = _({}, ft, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), gc = Ve(yc), wc = _({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Sc = Ve(wc), kc = [9, 13, 27, 32], tu = ue && "CompositionEvent" in window, Yt = null;
  ue && "documentMode" in document && (Yt = document.documentMode);
  var Ec = ue && "TextEvent" in window && !Yt, fo = ue && (!tu || Yt && 8 < Yt && 11 >= Yt), po = String.fromCharCode(32), mo = !1;
  function ho(e, n) {
    switch (e) {
      case "keyup":
        return kc.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function vo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var dt = !1;
  function _c(e, n) {
    switch (e) {
      case "compositionend":
        return vo(n);
      case "keypress":
        return n.which !== 32 ? null : (mo = !0, po);
      case "textInput":
        return e = n.data, e === po && mo ? null : e;
      default:
        return null;
    }
  }
  function Cc(e, n) {
    if (dt)
      return e === "compositionend" || !tu && ho(e, n) ? (e = io(), Dr = Zl = On = null, dt = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which)
            return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return fo && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var xc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function yo(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!xc[e.type] : n === "textarea";
  }
  function go(e, n, t, r) {
    ji(r), n = Br(n, "onChange"), 0 < n.length && (t = new Jl("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var Xt = null, Gt = null;
  function Nc(e) {
    Fo(e, 0);
  }
  function jr(e) {
    var n = yt(e);
    if (xi(n))
      return e;
  }
  function Pc(e, n) {
    if (e === "change")
      return n;
  }
  var wo = !1;
  if (ue) {
    var ru;
    if (ue) {
      var lu = "oninput" in document;
      if (!lu) {
        var So = document.createElement("div");
        So.setAttribute("oninput", "return;"), lu = typeof So.oninput == "function";
      }
      ru = lu;
    } else
      ru = !1;
    wo = ru && (!document.documentMode || 9 < document.documentMode);
  }
  function ko() {
    Xt && (Xt.detachEvent("onpropertychange", Eo), Gt = Xt = null);
  }
  function Eo(e) {
    if (e.propertyName === "value" && jr(Gt)) {
      var n = [];
      go(n, Gt, e, jl(e)), Bi(Nc, n);
    }
  }
  function zc(e, n, t) {
    e === "focusin" ? (ko(), Xt = n, Gt = t, Xt.attachEvent("onpropertychange", Eo)) : e === "focusout" && ko();
  }
  function Tc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return jr(Gt);
  }
  function Lc(e, n) {
    if (e === "click")
      return jr(n);
  }
  function Rc(e, n) {
    if (e === "input" || e === "change")
      return jr(n);
  }
  function Oc(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var tn = typeof Object.is == "function" ? Object.is : Oc;
  function Zt(e, n) {
    if (tn(e, n))
      return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length)
      return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!V.call(n, l) || !tn(e[l], n[l]))
        return !1;
    }
    return !0;
  }
  function _o(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function Co(e, n) {
    var t = _o(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (r = e + t.textContent.length, e <= n && r >= n)
          return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = _o(t);
    }
  }
  function xo(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? xo(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function No() {
    for (var e = window, n = Sr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t)
        e = n.contentWindow;
      else
        break;
      n = Sr(e.document);
    }
    return n;
  }
  function uu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function Dc(e) {
    var n = No(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && xo(t.ownerDocument.documentElement, t)) {
      if (r !== null && uu(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t)
          t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, u = Math.min(r.start, l);
          r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = Co(t, u);
          var i = Co(
            t,
            r
          );
          l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; )
        e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
        e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Mc = ue && "documentMode" in document && 11 >= document.documentMode, pt = null, iu = null, Jt = null, ou = !1;
  function Po(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    ou || pt == null || pt !== Sr(r) || (r = pt, "selectionStart" in r && uu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Jt && Zt(Jt, r) || (Jt = r, r = Br(iu, "onSelect"), 0 < r.length && (n = new Jl("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = pt)));
  }
  function Ur(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var mt = { animationend: Ur("Animation", "AnimationEnd"), animationiteration: Ur("Animation", "AnimationIteration"), animationstart: Ur("Animation", "AnimationStart"), transitionend: Ur("Transition", "TransitionEnd") }, su = {}, zo = {};
  ue && (zo = document.createElement("div").style, "AnimationEvent" in window || (delete mt.animationend.animation, delete mt.animationiteration.animation, delete mt.animationstart.animation), "TransitionEvent" in window || delete mt.transitionend.transition);
  function Vr(e) {
    if (su[e])
      return su[e];
    if (!mt[e])
      return e;
    var n = mt[e], t;
    for (t in n)
      if (n.hasOwnProperty(t) && t in zo)
        return su[e] = n[t];
    return e;
  }
  var To = Vr("animationend"), Lo = Vr("animationiteration"), Ro = Vr("animationstart"), Oo = Vr("transitionend"), Do = /* @__PURE__ */ new Map(), Mo = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Dn(e, n) {
    Do.set(e, n), ge(n, [e]);
  }
  for (var au = 0; au < Mo.length; au++) {
    var cu = Mo[au], Ic = cu.toLowerCase(), Fc = cu[0].toUpperCase() + cu.slice(1);
    Dn(Ic, "on" + Fc);
  }
  Dn(To, "onAnimationEnd"), Dn(Lo, "onAnimationIteration"), Dn(Ro, "onAnimationStart"), Dn("dblclick", "onDoubleClick"), Dn("focusin", "onFocus"), Dn("focusout", "onBlur"), Dn(Oo, "onTransitionEnd"), ce("onMouseEnter", ["mouseout", "mouseover"]), ce("onMouseLeave", ["mouseout", "mouseover"]), ce("onPointerEnter", ["pointerout", "pointerover"]), ce("onPointerLeave", ["pointerout", "pointerover"]), ge("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ge("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ge("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ge("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ge("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ge("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), jc = new Set("cancel close invalid load scroll toggle".split(" ").concat(qt));
  function Io(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, Ia(r, n, void 0, e), e.currentTarget = null;
  }
  function Fo(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (n)
          for (var i = r.length - 1; 0 <= i; i--) {
            var o = r[i], s = o.instance, p = o.currentTarget;
            if (o = o.listener, s !== u && l.isPropagationStopped())
              break e;
            Io(l, o, p), u = s;
          }
        else
          for (i = 0; i < r.length; i++) {
            if (o = r[i], s = o.instance, p = o.currentTarget, o = o.listener, s !== u && l.isPropagationStopped())
              break e;
            Io(l, o, p), u = s;
          }
      }
    }
    if (_r)
      throw e = Bl, _r = !1, Bl = null, e;
  }
  function Q(e, n) {
    var t = n[gu];
    t === void 0 && (t = n[gu] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (jo(n, e, 2, !1), t.add(r));
  }
  function fu(e, n, t) {
    var r = 0;
    n && (r |= 4), jo(t, e, r, n);
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function bt(e) {
    if (!e[Ar]) {
      e[Ar] = !0, ze.forEach(function(t) {
        t !== "selectionchange" && (jc.has(t) || fu(t, !1, e), fu(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Ar] || (n[Ar] = !0, fu("selectionchange", !1, n));
    }
  }
  function jo(e, n, t, r) {
    switch (uo(n)) {
      case 1:
        var l = Ja;
        break;
      case 4:
        l = qa;
        break;
      default:
        l = Xl;
    }
    t = l.bind(null, n, t, e), l = void 0, !Al || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
  }
  function du(e, n, t, r, l) {
    var u = r;
    if (!(n & 1) && !(n & 2) && r !== null)
      e:
        for (; ; ) {
          if (r === null)
            return;
          var i = r.tag;
          if (i === 3 || i === 4) {
            var o = r.stateNode.containerInfo;
            if (o === l || o.nodeType === 8 && o.parentNode === l)
              break;
            if (i === 4)
              for (i = r.return; i !== null; ) {
                var s = i.tag;
                if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                  return;
                i = i.return;
              }
            for (; o !== null; ) {
              if (i = Gn(o), i === null)
                return;
              if (s = i.tag, s === 5 || s === 6) {
                r = u = i;
                continue e;
              }
              o = o.parentNode;
            }
          }
          r = r.return;
        }
    Bi(function() {
      var p = u, y = jl(t), g = [];
      e: {
        var h = Do.get(e);
        if (h !== void 0) {
          var k = Jl, C = e;
          switch (e) {
            case "keypress":
              if (Mr(t) === 0)
                break e;
            case "keydown":
            case "keyup":
              k = pc;
              break;
            case "focusin":
              C = "focus", k = eu;
              break;
            case "focusout":
              C = "blur", k = eu;
              break;
            case "beforeblur":
            case "afterblur":
              k = eu;
              break;
            case "click":
              if (t.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k = so;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = nc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = vc;
              break;
            case To:
            case Lo:
            case Ro:
              k = lc;
              break;
            case Oo:
              k = gc;
              break;
            case "scroll":
              k = ba;
              break;
            case "wheel":
              k = Sc;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = ic;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = co;
          }
          var x = (n & 4) !== 0, le = !x && e === "scroll", f = x ? h !== null ? h + "Capture" : null : h;
          x = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, f !== null && (w = It(a, f), w != null && x.push(er(a, w, d)))), le)
              break;
            a = a.return;
          }
          0 < x.length && (h = new k(h, C, null, t, y), g.push({ event: h, listeners: x }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", h && t !== Fl && (C = t.relatedTarget || t.fromElement) && (Gn(C) || C[wn]))
            break e;
          if ((k || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, k ? (C = t.relatedTarget || t.toElement, k = p, C = C ? Gn(C) : null, C !== null && (le = Xn(C), C !== le || C.tag !== 5 && C.tag !== 6) && (C = null)) : (k = null, C = p), k !== C)) {
            if (x = so, w = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (x = co, w = "onPointerLeave", f = "onPointerEnter", a = "pointer"), le = k == null ? h : yt(k), d = C == null ? h : yt(C), h = new x(w, a + "leave", k, t, y), h.target = le, h.relatedTarget = d, w = null, Gn(y) === p && (x = new x(f, a + "enter", C, t, y), x.target = d, x.relatedTarget = le, w = x), le = w, k && C)
              n: {
                for (x = k, f = C, a = 0, d = x; d; d = ht(d))
                  a++;
                for (d = 0, w = f; w; w = ht(w))
                  d++;
                for (; 0 < a - d; )
                  x = ht(x), a--;
                for (; 0 < d - a; )
                  f = ht(f), d--;
                for (; a--; ) {
                  if (x === f || f !== null && x === f.alternate)
                    break n;
                  x = ht(x), f = ht(f);
                }
                x = null;
              }
            else
              x = null;
            k !== null && Uo(g, h, k, x, !1), C !== null && le !== null && Uo(g, le, C, x, !0);
          }
        }
        e: {
          if (h = p ? yt(p) : window, k = h.nodeName && h.nodeName.toLowerCase(), k === "select" || k === "input" && h.type === "file")
            var N = Pc;
          else if (yo(h))
            if (wo)
              N = Rc;
            else {
              N = Tc;
              var P = zc;
            }
          else
            (k = h.nodeName) && k.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (N = Lc);
          if (N && (N = N(e, p))) {
            go(g, N, t, y);
            break e;
          }
          P && P(e, h, p), e === "focusout" && (P = h._wrapperState) && P.controlled && h.type === "number" && Rl(h, "number", h.value);
        }
        switch (P = p ? yt(p) : window, e) {
          case "focusin":
            (yo(P) || P.contentEditable === "true") && (pt = P, iu = p, Jt = null);
            break;
          case "focusout":
            Jt = iu = pt = null;
            break;
          case "mousedown":
            ou = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ou = !1, Po(g, t, y);
            break;
          case "selectionchange":
            if (Mc)
              break;
          case "keydown":
          case "keyup":
            Po(g, t, y);
        }
        var z;
        if (tu)
          e: {
            switch (e) {
              case "compositionstart":
                var R = "onCompositionStart";
                break e;
              case "compositionend":
                R = "onCompositionEnd";
                break e;
              case "compositionupdate":
                R = "onCompositionUpdate";
                break e;
            }
            R = void 0;
          }
        else
          dt ? ho(e, t) && (R = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (R = "onCompositionStart");
        R && (fo && t.locale !== "ko" && (dt || R !== "onCompositionStart" ? R === "onCompositionEnd" && dt && (z = io()) : (On = y, Zl = "value" in On ? On.value : On.textContent, dt = !0)), P = Br(p, R), 0 < P.length && (R = new ao(R, e, null, t, y), g.push({ event: R, listeners: P }), z ? R.data = z : (z = vo(t), z !== null && (R.data = z)))), (z = Ec ? _c(e, t) : Cc(e, t)) && (p = Br(p, "onBeforeInput"), 0 < p.length && (y = new ao("onBeforeInput", "beforeinput", null, t, y), g.push({ event: y, listeners: p }), y.data = z));
      }
      Fo(g, n);
    });
  }
  function er(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Br(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = It(e, t), u != null && r.unshift(er(e, u, l)), u = It(e, n), u != null && r.push(er(e, u, l))), e = e.return;
    }
    return r;
  }
  function ht(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Uo(e, n, t, r, l) {
    for (var u = n._reactName, i = []; t !== null && t !== r; ) {
      var o = t, s = o.alternate, p = o.stateNode;
      if (s !== null && s === r)
        break;
      o.tag === 5 && p !== null && (o = p, l ? (s = It(t, u), s != null && i.unshift(er(t, s, o))) : l || (s = It(t, u), s != null && i.push(er(t, s, o)))), t = t.return;
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
  }
  var Uc = /\r\n?/g, Vc = /\u0000|\uFFFD/g;
  function Vo(e) {
    return (typeof e == "string" ? e : "" + e).replace(Uc, `
`).replace(Vc, "");
  }
  function Hr(e, n, t) {
    if (n = Vo(n), Vo(e) !== n && t)
      throw Error(m(425));
  }
  function $r() {
  }
  var pu = null, mu = null;
  function hu(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var vu = typeof setTimeout == "function" ? setTimeout : void 0, Ac = typeof clearTimeout == "function" ? clearTimeout : void 0, Ao = typeof Promise == "function" ? Promise : void 0, Bc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ao < "u" ? function(e) {
    return Ao.resolve(null).then(e).catch(Hc);
  } : vu;
  function Hc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function yu(e, n) {
    var t = n, r = 0;
    do {
      var l = t.nextSibling;
      if (e.removeChild(t), l && l.nodeType === 8)
        if (t = l.data, t === "/$") {
          if (r === 0) {
            e.removeChild(l), Wt(n);
            return;
          }
          r--;
        } else
          t !== "$" && t !== "$?" && t !== "$!" || r++;
      t = l;
    } while (t);
    Wt(n);
  }
  function Mn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3)
        break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?")
          break;
        if (n === "/$")
          return null;
      }
    }
    return e;
  }
  function Bo(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0)
            return e;
          n--;
        } else
          t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var vt = Math.random().toString(36).slice(2), pn = "__reactFiber$" + vt, nr = "__reactProps$" + vt, wn = "__reactContainer$" + vt, gu = "__reactEvents$" + vt, $c = "__reactListeners$" + vt, Wc = "__reactHandles$" + vt;
  function Gn(e) {
    var n = e[pn];
    if (n)
      return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[wn] || t[pn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
          for (e = Bo(e); e !== null; ) {
            if (t = e[pn])
              return t;
            e = Bo(e);
          }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function tr(e) {
    return e = e[pn] || e[wn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function yt(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[nr] || null;
  }
  var wu = [], gt = -1;
  function In(e) {
    return { current: e };
  }
  function K(e) {
    0 > gt || (e.current = wu[gt], wu[gt] = null, gt--);
  }
  function W(e, n) {
    gt++, wu[gt] = e.current, e.current = n;
  }
  var Fn = {}, ke = In(Fn), Re = In(!1), Zn = Fn;
  function wt(e, n) {
    var t = e.type.contextTypes;
    if (!t)
      return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in t)
      l[u] = n[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Oe(e) {
    return e = e.childContextTypes, e != null;
  }
  function Qr() {
    K(Re), K(ke);
  }
  function Ho(e, n, t) {
    if (ke.current !== Fn)
      throw Error(m(168));
    W(ke, n), W(Re, t);
  }
  function $o(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function")
      return t;
    r = r.getChildContext();
    for (var l in r)
      if (!(l in n))
        throw Error(m(108, $(e) || "Unknown", l));
    return _({}, t, r);
  }
  function Kr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fn, Zn = ke.current, W(ke, e), W(Re, Re.current), !0;
  }
  function Wo(e, n, t) {
    var r = e.stateNode;
    if (!r)
      throw Error(m(169));
    t ? (e = $o(e, n, Zn), r.__reactInternalMemoizedMergedChildContext = e, K(Re), K(ke), W(ke, e)) : K(Re), W(Re, t);
  }
  var Sn = null, Yr = !1, Su = !1;
  function Qo(e) {
    Sn === null ? Sn = [e] : Sn.push(e);
  }
  function Qc(e) {
    Yr = !0, Qo(e);
  }
  function jn() {
    if (!Su && Sn !== null) {
      Su = !0;
      var e = 0, n = B;
      try {
        var t = Sn;
        for (B = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Sn = null, Yr = !1;
      } catch (l) {
        throw Sn !== null && (Sn = Sn.slice(e + 1)), Ki(Hl, jn), l;
      } finally {
        B = n, Su = !1;
      }
    }
    return null;
  }
  var St = [], kt = 0, Xr = null, Gr = 0, Ke = [], Ye = 0, Jn = null, kn = 1, En = "";
  function qn(e, n) {
    St[kt++] = Gr, St[kt++] = Xr, Xr = e, Gr = n;
  }
  function Ko(e, n, t) {
    Ke[Ye++] = kn, Ke[Ye++] = En, Ke[Ye++] = Jn, Jn = e;
    var r = kn;
    e = En;
    var l = 32 - nn(r) - 1;
    r &= ~(1 << l), t += 1;
    var u = 32 - nn(n) + l;
    if (30 < u) {
      var i = l - l % 5;
      u = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, kn = 1 << 32 - nn(n) + l | t << l | r, En = u + e;
    } else
      kn = 1 << u | t << l | r, En = e;
  }
  function ku(e) {
    e.return !== null && (qn(e, 1), Ko(e, 1, 0));
  }
  function Eu(e) {
    for (; e === Xr; )
      Xr = St[--kt], St[kt] = null, Gr = St[--kt], St[kt] = null;
    for (; e === Jn; )
      Jn = Ke[--Ye], Ke[Ye] = null, En = Ke[--Ye], Ke[Ye] = null, kn = Ke[--Ye], Ke[Ye] = null;
  }
  var Ae = null, Be = null, Z = !1, rn = null;
  function Yo(e, n) {
    var t = Je(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function Xo(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Ae = e, Be = Mn(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Ae = e, Be = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Jn !== null ? { id: kn, overflow: En } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Je(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, Ae = e, Be = null, !0) : !1;
      default:
        return !1;
    }
  }
  function _u(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Cu(e) {
    if (Z) {
      var n = Be;
      if (n) {
        var t = n;
        if (!Xo(e, n)) {
          if (_u(e))
            throw Error(m(418));
          n = Mn(t.nextSibling);
          var r = Ae;
          n && Xo(e, n) ? Yo(r, t) : (e.flags = e.flags & -4097 | 2, Z = !1, Ae = e);
        }
      } else {
        if (_u(e))
          throw Error(m(418));
        e.flags = e.flags & -4097 | 2, Z = !1, Ae = e;
      }
    }
  }
  function Go(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    Ae = e;
  }
  function Zr(e) {
    if (e !== Ae)
      return !1;
    if (!Z)
      return Go(e), Z = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !hu(e.type, e.memoizedProps)), n && (n = Be)) {
      if (_u(e))
        throw Zo(), Error(m(418));
      for (; n; )
        Yo(e, n), n = Mn(n.nextSibling);
    }
    if (Go(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Be = Mn(e.nextSibling);
                break e;
              }
              n--;
            } else
              t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        Be = null;
      }
    } else
      Be = Ae ? Mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Zo() {
    for (var e = Be; e; )
      e = Mn(e.nextSibling);
  }
  function Et() {
    Be = Ae = null, Z = !1;
  }
  function xu(e) {
    rn === null ? rn = [e] : rn.push(e);
  }
  var Kc = Se.ReactCurrentBatchConfig;
  function rr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1)
            throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r)
          throw Error(m(147, e));
        var l = r, u = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === u ? n.ref : (n = function(i) {
          var o = l.refs;
          i === null ? delete o[u] : o[u] = i;
        }, n._stringRef = u, n);
      }
      if (typeof e != "string")
        throw Error(m(284));
      if (!t._owner)
        throw Error(m(290, e));
    }
    return e;
  }
  function Jr(e, n) {
    throw e = Object.prototype.toString.call(n), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function Jo(e) {
    var n = e._init;
    return n(e._payload);
  }
  function qo(e) {
    function n(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
      }
    }
    function t(f, a) {
      if (!e)
        return null;
      for (; a !== null; )
        n(f, a), a = a.sibling;
      return null;
    }
    function r(f, a) {
      for (f = /* @__PURE__ */ new Map(); a !== null; )
        a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
      return f;
    }
    function l(f, a) {
      return f = Qn(f, a), f.index = 0, f.sibling = null, f;
    }
    function u(f, a, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function o(f, a, d, w) {
      return a === null || a.tag !== 6 ? (a = vi(d, f.mode, w), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function s(f, a, d, w) {
      var N = d.type;
      return N === Te ? y(f, a, d.props.children, w, d.key) : a !== null && (a.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Le && Jo(N) === a.type) ? (w = l(a, d.props), w.ref = rr(f, a, d), w.return = f, w) : (w = kl(d.type, d.key, d.props, null, f.mode, w), w.ref = rr(f, a, d), w.return = f, w);
    }
    function p(f, a, d, w) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = yi(d, f.mode, w), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function y(f, a, d, w, N) {
      return a === null || a.tag !== 7 ? (a = it(d, f.mode, w, N), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function g(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number")
        return a = vi("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case be:
            return d = kl(a.type, a.key, a.props, null, f.mode, d), d.ref = rr(f, null, a), d.return = f, d;
          case xe:
            return a = yi(a, f.mode, d), a.return = f, a;
          case Le:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (Ot(a) || T(a))
          return a = it(a, f.mode, d, null), a.return = f, a;
        Jr(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var N = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number")
        return N !== null ? null : o(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            return d.key === N ? s(f, a, d, w) : null;
          case xe:
            return d.key === N ? p(f, a, d, w) : null;
          case Le:
            return N = d._init, h(
              f,
              a,
              N(d._payload),
              w
            );
        }
        if (Ot(d) || T(d))
          return N !== null ? null : y(f, a, d, w, null);
        Jr(f, d);
      }
      return null;
    }
    function k(f, a, d, w, N) {
      if (typeof w == "string" && w !== "" || typeof w == "number")
        return f = f.get(d) || null, o(a, f, "" + w, N);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case be:
            return f = f.get(w.key === null ? d : w.key) || null, s(a, f, w, N);
          case xe:
            return f = f.get(w.key === null ? d : w.key) || null, p(a, f, w, N);
          case Le:
            var P = w._init;
            return k(f, a, d, P(w._payload), N);
        }
        if (Ot(w) || T(w))
          return f = f.get(d) || null, y(a, f, w, N, null);
        Jr(a, w);
      }
      return null;
    }
    function C(f, a, d, w) {
      for (var N = null, P = null, z = a, R = a = 0, me = null; z !== null && R < d.length; R++) {
        z.index > R ? (me = z, z = null) : me = z.sibling;
        var U = h(f, z, d[R], w);
        if (U === null) {
          z === null && (z = me);
          break;
        }
        e && z && U.alternate === null && n(f, z), a = u(U, a, R), P === null ? N = U : P.sibling = U, P = U, z = me;
      }
      if (R === d.length)
        return t(f, z), Z && qn(f, R), N;
      if (z === null) {
        for (; R < d.length; R++)
          z = g(f, d[R], w), z !== null && (a = u(z, a, R), P === null ? N = z : P.sibling = z, P = z);
        return Z && qn(f, R), N;
      }
      for (z = r(f, z); R < d.length; R++)
        me = k(z, f, R, d[R], w), me !== null && (e && me.alternate !== null && z.delete(me.key === null ? R : me.key), a = u(me, a, R), P === null ? N = me : P.sibling = me, P = me);
      return e && z.forEach(function(Kn) {
        return n(f, Kn);
      }), Z && qn(f, R), N;
    }
    function x(f, a, d, w) {
      var N = T(d);
      if (typeof N != "function")
        throw Error(m(150));
      if (d = N.call(d), d == null)
        throw Error(m(151));
      for (var P = N = null, z = a, R = a = 0, me = null, U = d.next(); z !== null && !U.done; R++, U = d.next()) {
        z.index > R ? (me = z, z = null) : me = z.sibling;
        var Kn = h(f, z, U.value, w);
        if (Kn === null) {
          z === null && (z = me);
          break;
        }
        e && z && Kn.alternate === null && n(f, z), a = u(Kn, a, R), P === null ? N = Kn : P.sibling = Kn, P = Kn, z = me;
      }
      if (U.done)
        return t(
          f,
          z
        ), Z && qn(f, R), N;
      if (z === null) {
        for (; !U.done; R++, U = d.next())
          U = g(f, U.value, w), U !== null && (a = u(U, a, R), P === null ? N = U : P.sibling = U, P = U);
        return Z && qn(f, R), N;
      }
      for (z = r(f, z); !U.done; R++, U = d.next())
        U = k(z, f, R, U.value, w), U !== null && (e && U.alternate !== null && z.delete(U.key === null ? R : U.key), a = u(U, a, R), P === null ? N = U : P.sibling = U, P = U);
      return e && z.forEach(function(Nf) {
        return n(f, Nf);
      }), Z && qn(f, R), N;
    }
    function le(f, a, d, w) {
      if (typeof d == "object" && d !== null && d.type === Te && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            e: {
              for (var N = d.key, P = a; P !== null; ) {
                if (P.key === N) {
                  if (N = d.type, N === Te) {
                    if (P.tag === 7) {
                      t(f, P.sibling), a = l(P, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (P.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Le && Jo(N) === P.type) {
                    t(f, P.sibling), a = l(P, d.props), a.ref = rr(f, P, d), a.return = f, f = a;
                    break e;
                  }
                  t(f, P);
                  break;
                } else
                  n(f, P);
                P = P.sibling;
              }
              d.type === Te ? (a = it(d.props.children, f.mode, w, d.key), a.return = f, f = a) : (w = kl(d.type, d.key, d.props, null, f.mode, w), w.ref = rr(f, a, d), w.return = f, f = w);
            }
            return i(f);
          case xe:
            e: {
              for (P = d.key; a !== null; ) {
                if (a.key === P)
                  if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                    t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                    break e;
                  } else {
                    t(f, a);
                    break;
                  }
                else
                  n(f, a);
                a = a.sibling;
              }
              a = yi(d, f.mode, w), a.return = f, f = a;
            }
            return i(f);
          case Le:
            return P = d._init, le(f, a, P(d._payload), w);
        }
        if (Ot(d))
          return C(f, a, d, w);
        if (T(d))
          return x(f, a, d, w);
        Jr(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = vi(d, f.mode, w), a.return = f, f = a), i(f)) : t(f, a);
    }
    return le;
  }
  var _t = qo(!0), bo = qo(!1), qr = In(null), br = null, Ct = null, Nu = null;
  function Pu() {
    Nu = Ct = br = null;
  }
  function zu(e) {
    var n = qr.current;
    K(qr), e._currentValue = n;
  }
  function Tu(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t)
        break;
      e = e.return;
    }
  }
  function xt(e, n) {
    br = e, Nu = Ct = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (De = !0), e.firstContext = null);
  }
  function Xe(e) {
    var n = e._currentValue;
    if (Nu !== e)
      if (e = { context: e, memoizedValue: n, next: null }, Ct === null) {
        if (br === null)
          throw Error(m(308));
        Ct = e, br.dependencies = { lanes: 0, firstContext: e };
      } else
        Ct = Ct.next = e;
    return n;
  }
  var bn = null;
  function Lu(e) {
    bn === null ? bn = [e] : bn.push(e);
  }
  function es(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Lu(n)) : (t.next = l.next, l.next = t), n.interleaved = t, _n(e, r);
  }
  function _n(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
      e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Un = !1;
  function Ru(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ns(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Cn(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function Vn(e, n, t) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, I & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, _n(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, Lu(r)) : (n.next = l.next, l.next = n), r.interleaved = n, _n(e, t);
  }
  function el(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Ql(e, t);
    }
  }
  function ts(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var l = null, u = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var i = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          u === null ? l = u = i : u = u.next = i, t = t.next;
        } while (t !== null);
        u === null ? l = u = n : u = u.next = n;
      } else
        l = u = n;
      t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function nl(e, n, t, r) {
    var l = e.updateQueue;
    Un = !1;
    var u = l.firstBaseUpdate, i = l.lastBaseUpdate, o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o, p = s.next;
      s.next = null, i === null ? u = p : i.next = p, i = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, o = y.lastBaseUpdate, o !== i && (o === null ? y.firstBaseUpdate = p : o.next = p, y.lastBaseUpdate = s));
    }
    if (u !== null) {
      var g = l.baseState;
      i = 0, y = p = s = null, o = u;
      do {
        var h = o.lane, k = o.eventTime;
        if ((r & h) === h) {
          y !== null && (y = y.next = {
            eventTime: k,
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          });
          e: {
            var C = e, x = o;
            switch (h = n, k = t, x.tag) {
              case 1:
                if (C = x.payload, typeof C == "function") {
                  g = C.call(k, g, h);
                  break e;
                }
                g = C;
                break e;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = x.payload, h = typeof C == "function" ? C.call(k, g, h) : C, h == null)
                  break e;
                g = _({}, g, h);
                break e;
              case 2:
                Un = !0;
            }
          }
          o.callback !== null && o.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [o] : h.push(o));
        } else
          k = { eventTime: k, lane: h, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, y === null ? (p = y = k, s = g) : y = y.next = k, i |= h;
        if (o = o.next, o === null) {
          if (o = l.shared.pending, o === null)
            break;
          h = o, o = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
        }
      } while (1);
      if (y === null && (s = g), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          i |= l.lane, l = l.next;
        while (l !== n);
      } else
        u === null && (l.shared.lanes = 0);
      tt |= i, e.lanes = i, e.memoizedState = g;
    }
  }
  function rs(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null)
      for (n = 0; n < e.length; n++) {
        var r = e[n], l = r.callback;
        if (l !== null) {
          if (r.callback = null, r = t, typeof l != "function")
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var lr = {}, mn = In(lr), ur = In(lr), ir = In(lr);
  function et(e) {
    if (e === lr)
      throw Error(m(174));
    return e;
  }
  function Ou(e, n) {
    switch (W(ir, n), W(ur, e), W(mn, lr), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Dl(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Dl(n, e);
    }
    K(mn), W(mn, n);
  }
  function Nt() {
    K(mn), K(ur), K(ir);
  }
  function ls(e) {
    et(ir.current);
    var n = et(mn.current), t = Dl(n, e.type);
    n !== t && (W(ur, e), W(mn, t));
  }
  function Du(e) {
    ur.current === e && (K(mn), K(ur));
  }
  var q = In(0);
  function tl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!"))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128)
          return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e)
          return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Mu = [];
  function Iu() {
    for (var e = 0; e < Mu.length; e++)
      Mu[e]._workInProgressVersionPrimary = null;
    Mu.length = 0;
  }
  var rl = Se.ReactCurrentDispatcher, Fu = Se.ReactCurrentBatchConfig, nt = 0, b = null, se = null, de = null, ll = !1, or = !1, sr = 0, Yc = 0;
  function Ee() {
    throw Error(m(321));
  }
  function ju(e, n) {
    if (n === null)
      return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!tn(e[t], n[t]))
        return !1;
    return !0;
  }
  function Uu(e, n, t, r, l, u) {
    if (nt = u, b = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, rl.current = e === null || e.memoizedState === null ? Jc : qc, e = t(r, l), or) {
      u = 0;
      do {
        if (or = !1, sr = 0, 25 <= u)
          throw Error(m(301));
        u += 1, de = se = null, n.updateQueue = null, rl.current = bc, e = t(r, l);
      } while (or);
    }
    if (rl.current = ol, n = se !== null && se.next !== null, nt = 0, de = se = b = null, ll = !1, n)
      throw Error(m(300));
    return e;
  }
  function Vu() {
    var e = sr !== 0;
    return sr = 0, e;
  }
  function hn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return de === null ? b.memoizedState = de = e : de = de.next = e, de;
  }
  function Ge() {
    if (se === null) {
      var e = b.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = se.next;
    var n = de === null ? b.memoizedState : de.next;
    if (n !== null)
      de = n, se = e;
    else {
      if (e === null)
        throw Error(m(310));
      se = e, e = { memoizedState: se.memoizedState, baseState: se.baseState, baseQueue: se.baseQueue, queue: se.queue, next: null }, de === null ? b.memoizedState = de = e : de = de.next = e;
    }
    return de;
  }
  function ar(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Au(e) {
    var n = Ge(), t = n.queue;
    if (t === null)
      throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = se, l = r.baseQueue, u = t.pending;
    if (u !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = u.next, u.next = i;
      }
      r.baseQueue = l = u, t.pending = null;
    }
    if (l !== null) {
      u = l.next, r = r.baseState;
      var o = i = null, s = null, p = u;
      do {
        var y = p.lane;
        if ((nt & y) === y)
          s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (o = s = g, i = r) : s = s.next = g, b.lanes |= y, tt |= y;
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? i = r : s.next = o, tn(r, n.memoizedState) || (De = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, b.lanes |= u, tt |= u, l = l.next;
      while (l !== e);
    } else
      l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Bu(e) {
    var n = Ge(), t = n.queue;
    if (t === null)
      throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, u = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var i = l = l.next;
      do
        u = e(u, i.action), i = i.next;
      while (i !== l);
      tn(u, n.memoizedState) || (De = !0), n.memoizedState = u, n.baseQueue === null && (n.baseState = u), t.lastRenderedState = u;
    }
    return [u, r];
  }
  function us() {
  }
  function is(e, n) {
    var t = b, r = Ge(), l = n(), u = !tn(r.memoizedState, l);
    if (u && (r.memoizedState = l, De = !0), r = r.queue, Hu(as.bind(null, t, r, e), [e]), r.getSnapshot !== n || u || de !== null && de.memoizedState.tag & 1) {
      if (t.flags |= 2048, cr(9, ss.bind(null, t, r, l, n), void 0, null), pe === null)
        throw Error(m(349));
      nt & 30 || os(t, n, l);
    }
    return l;
  }
  function os(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = b.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, b.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function ss(e, n, t, r) {
    n.value = t, n.getSnapshot = r, cs(n) && fs(e);
  }
  function as(e, n, t) {
    return t(function() {
      cs(n) && fs(e);
    });
  }
  function cs(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !tn(e, t);
    } catch {
      return !0;
    }
  }
  function fs(e) {
    var n = _n(e, 1);
    n !== null && sn(n, e, 1, -1);
  }
  function ds(e) {
    var n = hn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ar, lastRenderedState: e }, n.queue = e, e = e.dispatch = Zc.bind(null, b, e), [n.memoizedState, e];
  }
  function cr(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = b.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, b.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function ps() {
    return Ge().memoizedState;
  }
  function ul(e, n, t, r) {
    var l = hn();
    b.flags |= e, l.memoizedState = cr(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function il(e, n, t, r) {
    var l = Ge();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (se !== null) {
      var i = se.memoizedState;
      if (u = i.destroy, r !== null && ju(r, i.deps)) {
        l.memoizedState = cr(n, t, u, r);
        return;
      }
    }
    b.flags |= e, l.memoizedState = cr(1 | n, t, u, r);
  }
  function ms(e, n) {
    return ul(8390656, 8, e, n);
  }
  function Hu(e, n) {
    return il(2048, 8, e, n);
  }
  function hs(e, n) {
    return il(4, 2, e, n);
  }
  function vs(e, n) {
    return il(4, 4, e, n);
  }
  function ys(e, n) {
    if (typeof n == "function")
      return e = e(), n(e), function() {
        n(null);
      };
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function gs(e, n, t) {
    return t = t != null ? t.concat([e]) : null, il(4, 4, ys.bind(null, n, e), t);
  }
  function $u() {
  }
  function ws(e, n) {
    var t = Ge();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && ju(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function Ss(e, n) {
    var t = Ge();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && ju(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function ks(e, n, t) {
    return nt & 21 ? (tn(t, n) || (t = Zi(), b.lanes |= t, tt |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, De = !0), e.memoizedState = t);
  }
  function Xc(e, n) {
    var t = B;
    B = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = Fu.transition;
    Fu.transition = {};
    try {
      e(!1), n();
    } finally {
      B = t, Fu.transition = r;
    }
  }
  function Es() {
    return Ge().memoizedState;
  }
  function Gc(e, n, t) {
    var r = $n(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, _s(e))
      Cs(n, t);
    else if (t = es(e, n, t, r), t !== null) {
      var l = Pe();
      sn(t, e, r, l), xs(t, n, r);
    }
  }
  function Zc(e, n, t) {
    var r = $n(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (_s(e))
      Cs(n, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = n.lastRenderedReducer, u !== null))
        try {
          var i = n.lastRenderedState, o = u(i, t);
          if (l.hasEagerState = !0, l.eagerState = o, tn(o, i)) {
            var s = n.interleaved;
            s === null ? (l.next = l, Lu(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
            return;
          }
        } catch {
        } finally {
        }
      t = es(e, n, l, r), t !== null && (l = Pe(), sn(t, e, r, l), xs(t, n, r));
    }
  }
  function _s(e) {
    var n = e.alternate;
    return e === b || n !== null && n === b;
  }
  function Cs(e, n) {
    or = ll = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function xs(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Ql(e, t);
    }
  }
  var ol = { readContext: Xe, useCallback: Ee, useContext: Ee, useEffect: Ee, useImperativeHandle: Ee, useInsertionEffect: Ee, useLayoutEffect: Ee, useMemo: Ee, useReducer: Ee, useRef: Ee, useState: Ee, useDebugValue: Ee, useDeferredValue: Ee, useTransition: Ee, useMutableSource: Ee, useSyncExternalStore: Ee, useId: Ee, unstable_isNewReconciler: !1 }, Jc = { readContext: Xe, useCallback: function(e, n) {
    return hn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Xe, useEffect: ms, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ul(
      4194308,
      4,
      ys.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return ul(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return ul(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = hn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r = hn();
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = Gc.bind(null, b, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = hn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: ds, useDebugValue: $u, useDeferredValue: function(e) {
    return hn().memoizedState = e;
  }, useTransition: function() {
    var e = ds(!1), n = e[0];
    return e = Xc.bind(null, e[1]), hn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = b, l = hn();
    if (Z) {
      if (t === void 0)
        throw Error(m(407));
      t = t();
    } else {
      if (t = n(), pe === null)
        throw Error(m(349));
      nt & 30 || os(r, n, t);
    }
    l.memoizedState = t;
    var u = { value: t, getSnapshot: n };
    return l.queue = u, ms(as.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, cr(9, ss.bind(null, r, u, t, n), void 0, null), t;
  }, useId: function() {
    var e = hn(), n = pe.identifierPrefix;
    if (Z) {
      var t = En, r = kn;
      t = (r & ~(1 << 32 - nn(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = sr++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else
      t = Yc++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, qc = {
    readContext: Xe,
    useCallback: ws,
    useContext: Xe,
    useEffect: Hu,
    useImperativeHandle: gs,
    useInsertionEffect: hs,
    useLayoutEffect: vs,
    useMemo: Ss,
    useReducer: Au,
    useRef: ps,
    useState: function() {
      return Au(ar);
    },
    useDebugValue: $u,
    useDeferredValue: function(e) {
      var n = Ge();
      return ks(n, se.memoizedState, e);
    },
    useTransition: function() {
      var e = Au(ar)[0], n = Ge().memoizedState;
      return [e, n];
    },
    useMutableSource: us,
    useSyncExternalStore: is,
    useId: Es,
    unstable_isNewReconciler: !1
  }, bc = { readContext: Xe, useCallback: ws, useContext: Xe, useEffect: Hu, useImperativeHandle: gs, useInsertionEffect: hs, useLayoutEffect: vs, useMemo: Ss, useReducer: Bu, useRef: ps, useState: function() {
    return Bu(ar);
  }, useDebugValue: $u, useDeferredValue: function(e) {
    var n = Ge();
    return se === null ? n.memoizedState = e : ks(n, se.memoizedState, e);
  }, useTransition: function() {
    var e = Bu(ar)[0], n = Ge().memoizedState;
    return [e, n];
  }, useMutableSource: us, useSyncExternalStore: is, useId: Es, unstable_isNewReconciler: !1 };
  function ln(e, n) {
    if (e && e.defaultProps) {
      n = _({}, n), e = e.defaultProps;
      for (var t in e)
        n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function Wu(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : _({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var sl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Xn(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = Pe(), l = $n(e), u = Cn(r, l);
    u.payload = n, t != null && (u.callback = t), n = Vn(e, u, l), n !== null && (sn(n, e, l, r), el(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = Pe(), l = $n(e), u = Cn(r, l);
    u.tag = 1, u.payload = n, t != null && (u.callback = t), n = Vn(e, u, l), n !== null && (sn(n, e, l, r), el(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = Pe(), r = $n(e), l = Cn(t, r);
    l.tag = 2, n != null && (l.callback = n), n = Vn(e, l, r), n !== null && (sn(n, e, r, t), el(n, e, r));
  } };
  function Ns(e, n, t, r, l, u, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, i) : n.prototype && n.prototype.isPureReactComponent ? !Zt(t, r) || !Zt(l, u) : !0;
  }
  function Ps(e, n, t) {
    var r = !1, l = Fn, u = n.contextType;
    return typeof u == "object" && u !== null ? u = Xe(u) : (l = Oe(n) ? Zn : ke.current, r = n.contextTypes, u = (r = r != null) ? wt(e, l) : Fn), n = new n(t, u), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = sl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), n;
  }
  function zs(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && sl.enqueueReplaceState(n, n.state, null);
  }
  function Qu(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = {}, Ru(e);
    var u = n.contextType;
    typeof u == "object" && u !== null ? l.context = Xe(u) : (u = Oe(n) ? Zn : ke.current, l.context = wt(e, u)), l.state = e.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (Wu(e, n, u, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && sl.enqueueReplaceState(l, l.state, null), nl(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Pt(e, n) {
    try {
      var t = "", r = n;
      do
        t += F(r), r = r.return;
      while (r);
      var l = t;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Ku(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Yu(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var ef = typeof WeakMap == "function" ? WeakMap : Map;
  function Ts(e, n, t) {
    t = Cn(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      hl || (hl = !0, si = r), Yu(e, n);
    }, t;
  }
  function Ls(e, n, t) {
    t = Cn(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      t.payload = function() {
        return r(l);
      }, t.callback = function() {
        Yu(e, n);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (t.callback = function() {
      Yu(e, n), typeof r != "function" && (Bn === null ? Bn = /* @__PURE__ */ new Set([this]) : Bn.add(this));
      var i = n.stack;
      this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
    }), t;
  }
  function Rs(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new ef();
      var l = /* @__PURE__ */ new Set();
      r.set(n, l);
    } else
      l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
    l.has(t) || (l.add(t), e = hf.bind(null, e, n, t), n.then(e, e));
  }
  function Os(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ds(e, n, t, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Cn(-1, 1), n.tag = 2, Vn(t, n, 1))), t.lanes |= 1), e);
  }
  var nf = Se.ReactCurrentOwner, De = !1;
  function Ne(e, n, t, r) {
    n.child = e === null ? bo(n, null, t, r) : _t(n, e.child, t, r);
  }
  function Ms(e, n, t, r, l) {
    t = t.render;
    var u = n.ref;
    return xt(n, l), r = Uu(e, n, t, r, u, l), t = Vu(), e !== null && !De ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, xn(e, n, l)) : (Z && t && ku(n), n.flags |= 1, Ne(e, n, r, l), n.child);
  }
  function Is(e, n, t, r, l) {
    if (e === null) {
      var u = t.type;
      return typeof u == "function" && !hi(u) && u.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = u, Fs(e, n, u, r, l)) : (e = kl(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (u = e.child, !(e.lanes & l)) {
      var i = u.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Zt, t(i, r) && e.ref === n.ref)
        return xn(e, n, l);
    }
    return n.flags |= 1, e = Qn(u, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Fs(e, n, t, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Zt(u, r) && e.ref === n.ref)
        if (De = !1, n.pendingProps = r = u, (e.lanes & l) !== 0)
          e.flags & 131072 && (De = !0);
        else
          return n.lanes = e.lanes, xn(e, n, l);
    }
    return Xu(e, n, t, r, l);
  }
  function js(e, n, t) {
    var r = n.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(n.mode & 1))
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, W(Tt, He), He |= t;
      else {
        if (!(t & 1073741824))
          return e = u !== null ? u.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, W(Tt, He), He |= e, null;
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : t, W(Tt, He), He |= r;
      }
    else
      u !== null ? (r = u.baseLanes | t, n.memoizedState = null) : r = t, W(Tt, He), He |= r;
    return Ne(e, n, l, t), n.child;
  }
  function Us(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Xu(e, n, t, r, l) {
    var u = Oe(t) ? Zn : ke.current;
    return u = wt(n, u), xt(n, l), t = Uu(e, n, t, r, u, l), r = Vu(), e !== null && !De ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, xn(e, n, l)) : (Z && r && ku(n), n.flags |= 1, Ne(e, n, t, l), n.child);
  }
  function Vs(e, n, t, r, l) {
    if (Oe(t)) {
      var u = !0;
      Kr(n);
    } else
      u = !1;
    if (xt(n, l), n.stateNode === null)
      cl(e, n), Ps(n, t, r), Qu(n, t, r, l), r = !0;
    else if (e === null) {
      var i = n.stateNode, o = n.memoizedProps;
      i.props = o;
      var s = i.context, p = t.contextType;
      typeof p == "object" && p !== null ? p = Xe(p) : (p = Oe(t) ? Zn : ke.current, p = wt(n, p));
      var y = t.getDerivedStateFromProps, g = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      g || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== r || s !== p) && zs(n, i, r, p), Un = !1;
      var h = n.memoizedState;
      i.state = h, nl(n, r, i, l), s = n.memoizedState, o !== r || h !== s || Re.current || Un ? (typeof y == "function" && (Wu(n, t, y, r), s = n.memoizedState), (o = Un || Ns(n, t, o, r, h, s, p)) ? (g || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = p, r = o) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      i = n.stateNode, ns(e, n), o = n.memoizedProps, p = n.type === n.elementType ? o : ln(n.type, o), i.props = p, g = n.pendingProps, h = i.context, s = t.contextType, typeof s == "object" && s !== null ? s = Xe(s) : (s = Oe(t) ? Zn : ke.current, s = wt(n, s));
      var k = t.getDerivedStateFromProps;
      (y = typeof k == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== g || h !== s) && zs(n, i, r, s), Un = !1, h = n.memoizedState, i.state = h, nl(n, r, i, l);
      var C = n.memoizedState;
      o !== g || h !== C || Re.current || Un ? (typeof k == "function" && (Wu(n, t, k, r), C = n.memoizedState), (p = Un || Ns(n, t, p, r, h, C, s) || !1) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, C, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, C, s)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = C), i.props = r, i.state = C, i.context = s, r = p) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return Gu(e, n, t, r, u, l);
  }
  function Gu(e, n, t, r, l, u) {
    Us(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i)
      return l && Wo(n, t, !1), xn(e, n, u);
    r = n.stateNode, nf.current = n;
    var o = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && i ? (n.child = _t(n, e.child, null, u), n.child = _t(n, null, o, u)) : Ne(e, n, o, u), n.memoizedState = r.state, l && Wo(n, t, !0), n.child;
  }
  function As(e) {
    var n = e.stateNode;
    n.pendingContext ? Ho(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Ho(e, n.context, !1), Ou(e, n.containerInfo);
  }
  function Bs(e, n, t, r, l) {
    return Et(), xu(l), n.flags |= 256, Ne(e, n, t, r), n.child;
  }
  var Zu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ju(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Hs(e, n, t) {
    var r = n.pendingProps, l = q.current, u = !1, i = (n.flags & 128) !== 0, o;
    if ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (u = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), W(q, l & 1), e === null)
      return Cu(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, u ? (r = n.mode, u = n.child, i = { mode: "hidden", children: i }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = i) : u = El(i, r, 0, null), e = it(e, r, t, null), u.return = n, e.return = n, u.sibling = e, n.child = u, n.child.memoizedState = Ju(t), n.memoizedState = Zu, e) : qu(n, i));
    if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null))
      return tf(e, n, i, r, o, l, t);
    if (u) {
      u = r.fallback, i = n.mode, l = e.child, o = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = Qn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? u = Qn(o, u) : (u = it(u, i, t, null), u.flags |= 2), u.return = n, r.return = n, r.sibling = u, n.child = r, r = u, u = n.child, i = e.child.memoizedState, i = i === null ? Ju(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, u.memoizedState = i, u.childLanes = e.childLanes & ~t, n.memoizedState = Zu, r;
    }
    return u = e.child, e = u.sibling, r = Qn(u, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function qu(e, n) {
    return n = El({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function al(e, n, t, r) {
    return r !== null && xu(r), _t(n, e.child, null, t), e = qu(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function tf(e, n, t, r, l, u, i) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r = Ku(Error(m(422))), al(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (u = r.fallback, l = n.mode, r = El({ mode: "visible", children: r.children }, l, 0, null), u = it(u, l, i, null), u.flags |= 2, r.return = n, u.return = n, r.sibling = u, n.child = r, n.mode & 1 && _t(n, e.child, null, i), n.child.memoizedState = Ju(i), n.memoizedState = Zu, u);
    if (!(n.mode & 1))
      return al(e, n, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r)
        var o = r.dgst;
      return r = o, u = Error(m(419)), r = Ku(u, r, void 0), al(e, n, i, r);
    }
    if (o = (i & e.childLanes) !== 0, De || o) {
      if (r = pe, r !== null) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, _n(e, l), sn(r, e, l, -1));
      }
      return mi(), r = Ku(Error(m(421))), al(e, n, i, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = vf.bind(null, e), l._reactRetry = n, null) : (e = u.treeContext, Be = Mn(l.nextSibling), Ae = n, Z = !0, rn = null, e !== null && (Ke[Ye++] = kn, Ke[Ye++] = En, Ke[Ye++] = Jn, kn = e.id, En = e.overflow, Jn = n), n = qu(n, r.children), n.flags |= 4096, n);
  }
  function $s(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Tu(e.return, n, t);
  }
  function bu(e, n, t, r, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (u.isBackwards = n, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = t, u.tailMode = l);
  }
  function Ws(e, n, t) {
    var r = n.pendingProps, l = r.revealOrder, u = r.tail;
    if (Ne(e, n, r.children, t), r = q.current, r & 2)
      r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = n.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && $s(e, t, n);
            else if (e.tag === 19)
              $s(e, t, n);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === n)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === n)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      r &= 1;
    }
    if (W(q, r), !(n.mode & 1))
      n.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (t = n.child, l = null; t !== null; )
            e = t.alternate, e !== null && tl(e) === null && (l = t), t = t.sibling;
          t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), bu(n, !1, l, t, u);
          break;
        case "backwards":
          for (t = null, l = n.child, n.child = null; l !== null; ) {
            if (e = l.alternate, e !== null && tl(e) === null) {
              n.child = l;
              break;
            }
            e = l.sibling, l.sibling = t, t = l, l = e;
          }
          bu(n, !0, t, null, u);
          break;
        case "together":
          bu(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function cl(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function xn(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), tt |= n.lanes, !(t & n.childLanes))
      return null;
    if (e !== null && n.child !== e.child)
      throw Error(m(153));
    if (n.child !== null) {
      for (e = n.child, t = Qn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
        e = e.sibling, t = t.sibling = Qn(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function rf(e, n, t) {
    switch (n.tag) {
      case 3:
        As(n), Et();
        break;
      case 5:
        ls(n);
        break;
      case 1:
        Oe(n.type) && Kr(n);
        break;
      case 4:
        Ou(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        W(qr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (W(q, q.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Hs(e, n, t) : (W(q, q.current & 1), e = xn(e, n, t), e !== null ? e.sibling : null);
        W(q, q.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r)
            return Ws(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), W(q, q.current), r)
          break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, js(e, n, t);
    }
    return xn(e, n, t);
  }
  var Qs, ei, Ks, Ys;
  Qs = function(e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6)
        e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n)
          return;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }, ei = function() {
  }, Ks = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = n.stateNode, et(mn.current);
      var u = null;
      switch (t) {
        case "input":
          l = Tl(e, l), r = Tl(e, r), u = [];
          break;
        case "select":
          l = _({}, l, { value: void 0 }), r = _({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = Ol(e, l), r = Ol(e, r), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r);
      }
      Ml(t, r);
      var i;
      t = null;
      for (p in l)
        if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
          if (p === "style") {
            var o = l[p];
            for (i in o)
              o.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
          } else
            p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (ye.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (o = l != null ? l[p] : void 0, r.hasOwnProperty(p) && s !== o && (s != null || o != null))
          if (p === "style")
            if (o) {
              for (i in o)
                !o.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
              for (i in s)
                s.hasOwnProperty(i) && o[i] !== s[i] && (t || (t = {}), t[i] = s[i]);
            } else
              t || (u || (u = []), u.push(
                p,
                t
              )), t = s;
          else
            p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, o = o ? o.__html : void 0, s != null && o !== s && (u = u || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (ye.hasOwnProperty(p) ? (s != null && p === "onScroll" && Q("scroll", e), u || o === s || (u = [])) : (u = u || []).push(p, s));
      }
      t && (u = u || []).push("style", t);
      var p = u;
      (n.updateQueue = p) && (n.flags |= 4);
    }
  }, Ys = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function fr(e, n) {
    if (!Z)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var t = null; n !== null; )
            n.alternate !== null && (t = n), n = n.sibling;
          t === null ? e.tail = null : t.sibling = null;
          break;
        case "collapsed":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), t = t.sibling;
          r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function _e(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n)
      for (var l = e.child; l !== null; )
        t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function lf(e, n, t) {
    var r = n.pendingProps;
    switch (Eu(n), n.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _e(n), null;
      case 1:
        return Oe(n.type) && Qr(), _e(n), null;
      case 3:
        return r = n.stateNode, Nt(), K(Re), K(ke), Iu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, rn !== null && (fi(rn), rn = null))), ei(e, n), _e(n), null;
      case 5:
        Du(n);
        var l = et(ir.current);
        if (t = n.type, e !== null && n.stateNode != null)
          Ks(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null)
              throw Error(m(166));
            return _e(n), null;
          }
          if (e = et(mn.current), Zr(n)) {
            r = n.stateNode, t = n.type;
            var u = n.memoizedProps;
            switch (r[pn] = n, r[nr] = u, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                Q("cancel", r), Q("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < qt.length; l++)
                  Q(qt[l], r);
                break;
              case "source":
                Q("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Q(
                  "error",
                  r
                ), Q("load", r);
                break;
              case "details":
                Q("toggle", r);
                break;
              case "input":
                Ni(r, u), Q("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, Q("invalid", r);
                break;
              case "textarea":
                Ti(r, u), Q("invalid", r);
            }
            Ml(t, u), l = null;
            for (var i in u)
              if (u.hasOwnProperty(i)) {
                var o = u[i];
                i === "children" ? typeof o == "string" ? r.textContent !== o && (u.suppressHydrationWarning !== !0 && Hr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (u.suppressHydrationWarning !== !0 && Hr(
                  r.textContent,
                  o,
                  e
                ), l = ["children", "" + o]) : ye.hasOwnProperty(i) && o != null && i === "onScroll" && Q("scroll", r);
              }
            switch (t) {
              case "input":
                wr(r), zi(r, u, !0);
                break;
              case "textarea":
                wr(r), Ri(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = $r);
            }
            r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Oi(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[pn] = n, e[nr] = r, Qs(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (i = Il(t, r), t) {
                case "dialog":
                  Q("cancel", e), Q("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Q("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < qt.length; l++)
                    Q(qt[l], e);
                  l = r;
                  break;
                case "source":
                  Q("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Q(
                    "error",
                    e
                  ), Q("load", e), l = r;
                  break;
                case "details":
                  Q("toggle", e), l = r;
                  break;
                case "input":
                  Ni(e, r), l = Tl(e, r), Q("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = _({}, r, { value: void 0 }), Q("invalid", e);
                  break;
                case "textarea":
                  Ti(e, r), l = Ol(e, r), Q("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ml(t, l), o = l;
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === "style" ? Ii(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Di(e, s)) : u === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Dt(e, s) : typeof s == "number" && Dt(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ye.hasOwnProperty(u) ? s != null && u === "onScroll" && Q("scroll", e) : s != null && qe(e, u, s, i));
                }
              switch (t) {
                case "input":
                  wr(e), zi(e, r, !1);
                  break;
                case "textarea":
                  wr(e), Ri(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + A(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? ot(e, !!r.multiple, u, !1) : r.defaultValue != null && ot(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = $r);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return _e(n), null;
      case 6:
        if (e && n.stateNode != null)
          Ys(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null)
            throw Error(m(166));
          if (t = et(ir.current), et(mn.current), Zr(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[pn] = n, (u = r.nodeValue !== t) && (e = Ae, e !== null))
              switch (e.tag) {
                case 3:
                  Hr(r.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Hr(r.nodeValue, t, (e.mode & 1) !== 0);
              }
            u && (n.flags |= 4);
          } else
            r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[pn] = n, n.stateNode = r;
        }
        return _e(n), null;
      case 13:
        if (K(q), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Z && Be !== null && n.mode & 1 && !(n.flags & 128))
            Zo(), Et(), n.flags |= 98560, u = !1;
          else if (u = Zr(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u)
                throw Error(m(318));
              if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u)
                throw Error(m(317));
              u[pn] = n;
            } else
              Et(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            _e(n), u = !1;
          } else
            rn !== null && (fi(rn), rn = null), u = !0;
          if (!u)
            return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || q.current & 1 ? ae === 0 && (ae = 3) : mi())), n.updateQueue !== null && (n.flags |= 4), _e(n), null);
      case 4:
        return Nt(), ei(e, n), e === null && bt(n.stateNode.containerInfo), _e(n), null;
      case 10:
        return zu(n.type._context), _e(n), null;
      case 17:
        return Oe(n.type) && Qr(), _e(n), null;
      case 19:
        if (K(q), u = n.memoizedState, u === null)
          return _e(n), null;
        if (r = (n.flags & 128) !== 0, i = u.rendering, i === null)
          if (r)
            fr(u, !1);
          else {
            if (ae !== 0 || e !== null && e.flags & 128)
              for (e = n.child; e !== null; ) {
                if (i = tl(e), i !== null) {
                  for (n.flags |= 128, fr(u, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; )
                    u = t, e = r, u.flags &= 14680066, i = u.alternate, i === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = i.childLanes, u.lanes = i.lanes, u.child = i.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = i.memoizedProps, u.memoizedState = i.memoizedState, u.updateQueue = i.updateQueue, u.type = i.type, e = i.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                  return W(q, q.current & 1 | 2), n.child;
                }
                e = e.sibling;
              }
            u.tail !== null && re() > Lt && (n.flags |= 128, r = !0, fr(u, !1), n.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = tl(i), e !== null) {
              if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), fr(u, !0), u.tail === null && u.tailMode === "hidden" && !i.alternate && !Z)
                return _e(n), null;
            } else
              2 * re() - u.renderingStartTime > Lt && t !== 1073741824 && (n.flags |= 128, r = !0, fr(u, !1), n.lanes = 4194304);
          u.isBackwards ? (i.sibling = n.child, n.child = i) : (t = u.last, t !== null ? t.sibling = i : n.child = i, u.last = i);
        }
        return u.tail !== null ? (n = u.tail, u.rendering = n, u.tail = n.sibling, u.renderingStartTime = re(), n.sibling = null, t = q.current, W(q, r ? t & 1 | 2 : t & 1), n) : (_e(n), null);
      case 22:
      case 23:
        return pi(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? He & 1073741824 && (_e(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : _e(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function uf(e, n) {
    switch (Eu(n), n.tag) {
      case 1:
        return Oe(n.type) && Qr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Nt(), K(Re), K(ke), Iu(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Du(n), null;
      case 13:
        if (K(q), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(m(340));
          Et();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return K(q), null;
      case 4:
        return Nt(), null;
      case 10:
        return zu(n.type._context), null;
      case 22:
      case 23:
        return pi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1, Ce = !1, of = typeof WeakSet == "function" ? WeakSet : Set, E = null;
  function zt(e, n) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r) {
          te(e, n, r);
        }
      else
        t.current = null;
  }
  function ni(e, n, t) {
    try {
      t();
    } catch (r) {
      te(e, n, r);
    }
  }
  var Xs = !1;
  function sf(e, n) {
    if (pu = Rr, e = No(), uu(e)) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = (t = e.ownerDocument) && t.defaultView || window;
          var r = t.getSelection && t.getSelection();
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode;
            var l = r.anchorOffset, u = r.focusNode;
            r = r.focusOffset;
            try {
              t.nodeType, u.nodeType;
            } catch {
              t = null;
              break e;
            }
            var i = 0, o = -1, s = -1, p = 0, y = 0, g = e, h = null;
            n:
              for (; ; ) {
                for (var k; g !== t || l !== 0 && g.nodeType !== 3 || (o = i + l), g !== u || r !== 0 && g.nodeType !== 3 || (s = i + r), g.nodeType === 3 && (i += g.nodeValue.length), (k = g.firstChild) !== null; )
                  h = g, g = k;
                for (; ; ) {
                  if (g === e)
                    break n;
                  if (h === t && ++p === l && (o = i), h === u && ++y === r && (s = i), (k = g.nextSibling) !== null)
                    break;
                  g = h, h = g.parentNode;
                }
                g = k;
              }
            t = o === -1 || s === -1 ? null : { start: o, end: s };
          } else
            t = null;
        }
      t = t || { start: 0, end: 0 };
    } else
      t = null;
    for (mu = { focusedElem: e, selectionRange: t }, Rr = !1, E = n; E !== null; )
      if (n = E, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = n, E = e;
      else
        for (; E !== null; ) {
          n = E;
          try {
            var C = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (C !== null) {
                    var x = C.memoizedProps, le = C.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? x : ln(n.type, x), le);
                    f.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var d = n.stateNode.containerInfo;
                  d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (w) {
            te(n, n.return, w);
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, E = e;
            break;
          }
          E = n.return;
        }
    return C = Xs, Xs = !1, C;
  }
  function dr(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && ni(n, t, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function dl(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
      var t = n = n.next;
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function ti(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : n.current = e;
    }
  }
  function Gs(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Gs(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[pn], delete n[nr], delete n[gu], delete n[$c], delete n[Wc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Zs(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Js(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Zs(e.return))
            return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
          return e.stateNode;
      }
  }
  function ri(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = $r));
    else if (r !== 4 && (e = e.child, e !== null))
      for (ri(e, n, t), e = e.sibling; e !== null; )
        ri(e, n, t), e = e.sibling;
  }
  function li(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (li(e, n, t), e = e.sibling; e !== null; )
        li(e, n, t), e = e.sibling;
  }
  var he = null, un = !1;
  function An(e, n, t) {
    for (t = t.child; t !== null; )
      qs(e, n, t), t = t.sibling;
  }
  function qs(e, n, t) {
    if (dn && typeof dn.onCommitFiberUnmount == "function")
      try {
        dn.onCommitFiberUnmount(xr, t);
      } catch {
      }
    switch (t.tag) {
      case 5:
        Ce || zt(t, n);
      case 6:
        var r = he, l = un;
        he = null, An(e, n, t), he = r, un = l, he !== null && (un ? (e = he, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : he.removeChild(t.stateNode));
        break;
      case 18:
        he !== null && (un ? (e = he, t = t.stateNode, e.nodeType === 8 ? yu(e.parentNode, t) : e.nodeType === 1 && yu(e, t), Wt(e)) : yu(he, t.stateNode));
        break;
      case 4:
        r = he, l = un, he = t.stateNode.containerInfo, un = !0, An(e, n, t), he = r, un = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ce && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var u = l, i = u.destroy;
            u = u.tag, i !== void 0 && (u & 2 || u & 4) && ni(t, n, i), l = l.next;
          } while (l !== r);
        }
        An(e, n, t);
        break;
      case 1:
        if (!Ce && (zt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
          } catch (o) {
            te(t, n, o);
          }
        An(e, n, t);
        break;
      case 21:
        An(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (Ce = (r = Ce) || t.memoizedState !== null, An(e, n, t), Ce = r) : An(e, n, t);
        break;
      default:
        An(e, n, t);
    }
  }
  function bs(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new of()), n.forEach(function(r) {
        var l = yf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
    }
  }
  function on(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var l = t[r];
        try {
          var u = e, i = n, o = i;
          e:
            for (; o !== null; ) {
              switch (o.tag) {
                case 5:
                  he = o.stateNode, un = !1;
                  break e;
                case 3:
                  he = o.stateNode.containerInfo, un = !0;
                  break e;
                case 4:
                  he = o.stateNode.containerInfo, un = !0;
                  break e;
              }
              o = o.return;
            }
          if (he === null)
            throw Error(m(160));
          qs(u, i, l), he = null, un = !1;
          var s = l.alternate;
          s !== null && (s.return = null), l.return = null;
        } catch (p) {
          te(l, n, p);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; )
        ea(n, e), n = n.sibling;
  }
  function ea(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (on(n, e), vn(e), r & 4) {
          try {
            dr(3, e, e.return), dl(3, e);
          } catch (x) {
            te(e, e.return, x);
          }
          try {
            dr(5, e, e.return);
          } catch (x) {
            te(e, e.return, x);
          }
        }
        break;
      case 1:
        on(n, e), vn(e), r & 512 && t !== null && zt(t, t.return);
        break;
      case 5:
        if (on(n, e), vn(e), r & 512 && t !== null && zt(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Dt(l, "");
          } catch (x) {
            te(e, e.return, x);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, i = t !== null ? t.memoizedProps : u, o = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null)
            try {
              o === "input" && u.type === "radio" && u.name != null && Pi(l, u), Il(o, i);
              var p = Il(o, u);
              for (i = 0; i < s.length; i += 2) {
                var y = s[i], g = s[i + 1];
                y === "style" ? Ii(l, g) : y === "dangerouslySetInnerHTML" ? Di(l, g) : y === "children" ? Dt(l, g) : qe(l, y, g, p);
              }
              switch (o) {
                case "input":
                  Ll(l, u);
                  break;
                case "textarea":
                  Li(l, u);
                  break;
                case "select":
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var k = u.value;
                  k != null ? ot(l, !!u.multiple, k, !1) : h !== !!u.multiple && (u.defaultValue != null ? ot(
                    l,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  ) : ot(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[nr] = u;
            } catch (x) {
              te(e, e.return, x);
            }
        }
        break;
      case 6:
        if (on(n, e), vn(e), r & 4) {
          if (e.stateNode === null)
            throw Error(m(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (x) {
            te(e, e.return, x);
          }
        }
        break;
      case 3:
        if (on(n, e), vn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Wt(n.containerInfo);
          } catch (x) {
            te(e, e.return, x);
          }
        break;
      case 4:
        on(n, e), vn(e);
        break;
      case 13:
        on(n, e), vn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (oi = re())), r & 4 && bs(e);
        break;
      case 22:
        if (y = t !== null && t.memoizedState !== null, e.mode & 1 ? (Ce = (p = Ce) || y, on(n, e), Ce = p) : on(n, e), vn(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && e.mode & 1)
            for (E = e, y = e.child; y !== null; ) {
              for (g = E = y; E !== null; ) {
                switch (h = E, k = h.child, h.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    dr(4, h, h.return);
                    break;
                  case 1:
                    zt(h, h.return);
                    var C = h.stateNode;
                    if (typeof C.componentWillUnmount == "function") {
                      r = h, t = h.return;
                      try {
                        n = r, C.props = n.memoizedProps, C.state = n.memoizedState, C.componentWillUnmount();
                      } catch (x) {
                        te(r, t, x);
                      }
                    }
                    break;
                  case 5:
                    zt(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      ra(g);
                      continue;
                    }
                }
                k !== null ? (k.return = h, E = k) : ra(g);
              }
              y = y.sibling;
            }
          e:
            for (y = null, g = e; ; ) {
              if (g.tag === 5) {
                if (y === null) {
                  y = g;
                  try {
                    l = g.stateNode, p ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (o = g.stateNode, s = g.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, o.style.display = Mi("display", i));
                  } catch (x) {
                    te(e, e.return, x);
                  }
                }
              } else if (g.tag === 6) {
                if (y === null)
                  try {
                    g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                  } catch (x) {
                    te(e, e.return, x);
                  }
              } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
                g.child.return = g, g = g.child;
                continue;
              }
              if (g === e)
                break e;
              for (; g.sibling === null; ) {
                if (g.return === null || g.return === e)
                  break e;
                y === g && (y = null), g = g.return;
              }
              y === g && (y = null), g.sibling.return = g.return, g = g.sibling;
            }
        }
        break;
      case 19:
        on(n, e), vn(e), r & 4 && bs(e);
        break;
      case 21:
        break;
      default:
        on(
          n,
          e
        ), vn(e);
    }
  }
  function vn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (Zs(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Dt(l, ""), r.flags &= -33);
            var u = Js(e);
            li(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, o = Js(e);
            ri(e, o, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        te(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function af(e, n, t) {
    E = e, na(e);
  }
  function na(e, n, t) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E, u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || fl;
        if (!i) {
          var o = l.alternate, s = o !== null && o.memoizedState !== null || Ce;
          o = fl;
          var p = Ce;
          if (fl = i, (Ce = s) && !p)
            for (E = l; E !== null; )
              i = E, s = i.child, i.tag === 22 && i.memoizedState !== null ? la(l) : s !== null ? (s.return = i, E = s) : la(l);
          for (; u !== null; )
            E = u, na(u), u = u.sibling;
          E = l, fl = o, Ce = p;
        }
        ta(e);
      } else
        l.subtreeFlags & 8772 && u !== null ? (u.return = l, E = u) : ta(e);
    }
  }
  function ta(e) {
    for (; E !== null; ) {
      var n = E;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Ce || dl(5, n);
                break;
              case 1:
                var r = n.stateNode;
                if (n.flags & 4 && !Ce)
                  if (t === null)
                    r.componentDidMount();
                  else {
                    var l = n.elementType === n.type ? t.memoizedProps : ln(n.type, t.memoizedProps);
                    r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var u = n.updateQueue;
                u !== null && rs(n, u, r);
                break;
              case 3:
                var i = n.updateQueue;
                if (i !== null) {
                  if (t = null, n.child !== null)
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode;
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  rs(n, i, t);
                }
                break;
              case 5:
                var o = n.stateNode;
                if (t === null && n.flags & 4) {
                  t = o;
                  var s = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && t.focus();
                      break;
                    case "img":
                      s.src && (t.src = s.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var p = n.alternate;
                  if (p !== null) {
                    var y = p.memoizedState;
                    if (y !== null) {
                      var g = y.dehydrated;
                      g !== null && Wt(g);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(m(163));
            }
          Ce || n.flags & 512 && ti(n);
        } catch (h) {
          te(n, n.return, h);
        }
      }
      if (n === e) {
        E = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function ra(e) {
    for (; E !== null; ) {
      var n = E;
      if (n === e) {
        E = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function la(e) {
    for (; E !== null; ) {
      var n = E;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              dl(4, n);
            } catch (s) {
              te(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                te(n, l, s);
              }
            }
            var u = n.return;
            try {
              ti(n);
            } catch (s) {
              te(n, u, s);
            }
            break;
          case 5:
            var i = n.return;
            try {
              ti(n);
            } catch (s) {
              te(n, i, s);
            }
        }
      } catch (s) {
        te(n, n.return, s);
      }
      if (n === e) {
        E = null;
        break;
      }
      var o = n.sibling;
      if (o !== null) {
        o.return = n.return, E = o;
        break;
      }
      E = n.return;
    }
  }
  var cf = Math.ceil, pl = Se.ReactCurrentDispatcher, ui = Se.ReactCurrentOwner, Ze = Se.ReactCurrentBatchConfig, I = 0, pe = null, ie = null, ve = 0, He = 0, Tt = In(0), ae = 0, pr = null, tt = 0, ml = 0, ii = 0, mr = null, Me = null, oi = 0, Lt = 1 / 0, Nn = null, hl = !1, si = null, Bn = null, vl = !1, Hn = null, yl = 0, hr = 0, ai = null, gl = -1, wl = 0;
  function Pe() {
    return I & 6 ? re() : gl !== -1 ? gl : gl = re();
  }
  function $n(e) {
    return e.mode & 1 ? I & 2 && ve !== 0 ? ve & -ve : Kc.transition !== null ? (wl === 0 && (wl = Zi()), wl) : (e = B, e !== 0 || (e = window.event, e = e === void 0 ? 16 : uo(e.type)), e) : 1;
  }
  function sn(e, n, t, r) {
    if (50 < hr)
      throw hr = 0, ai = null, Error(m(185));
    Vt(e, t, r), (!(I & 2) || e !== pe) && (e === pe && (!(I & 2) && (ml |= t), ae === 4 && Wn(e, ve)), Ie(e, r), t === 1 && I === 0 && !(n.mode & 1) && (Lt = re() + 500, Yr && jn()));
  }
  function Ie(e, n) {
    var t = e.callbackNode;
    Ka(e, n);
    var r = zr(e, e === pe ? ve : 0);
    if (r === 0)
      t !== null && Yi(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && Yi(t), n === 1)
        e.tag === 0 ? Qc(ia.bind(null, e)) : Qo(ia.bind(null, e)), Bc(function() {
          !(I & 6) && jn();
        }), t = null;
      else {
        switch (Ji(r)) {
          case 1:
            t = Hl;
            break;
          case 4:
            t = Xi;
            break;
          case 16:
            t = Cr;
            break;
          case 536870912:
            t = Gi;
            break;
          default:
            t = Cr;
        }
        t = ma(t, ua.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function ua(e, n) {
    if (gl = -1, wl = 0, I & 6)
      throw Error(m(327));
    var t = e.callbackNode;
    if (Rt() && e.callbackNode !== t)
      return null;
    var r = zr(e, e === pe ? ve : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || n)
      n = Sl(e, r);
    else {
      n = r;
      var l = I;
      I |= 2;
      var u = sa();
      (pe !== e || ve !== n) && (Nn = null, Lt = re() + 500, lt(e, n));
      do
        try {
          pf();
          break;
        } catch (o) {
          oa(e, o);
        }
      while (1);
      Pu(), pl.current = u, I = l, ie !== null ? n = 0 : (pe = null, ve = 0, n = ae);
    }
    if (n !== 0) {
      if (n === 2 && (l = $l(e), l !== 0 && (r = l, n = ci(e, l))), n === 1)
        throw t = pr, lt(e, 0), Wn(e, r), Ie(e, re()), t;
      if (n === 6)
        Wn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !ff(l) && (n = Sl(e, r), n === 2 && (u = $l(e), u !== 0 && (r = u, n = ci(e, u))), n === 1))
          throw t = pr, lt(e, 0), Wn(e, r), Ie(e, re()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ut(e, Me, Nn);
            break;
          case 3:
            if (Wn(e, r), (r & 130023424) === r && (n = oi + 500 - re(), 10 < n)) {
              if (zr(e, 0) !== 0)
                break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Pe(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = vu(ut.bind(null, e, Me, Nn), n);
              break;
            }
            ut(e, Me, Nn);
            break;
          case 4:
            if (Wn(e, r), (r & 4194240) === r)
              break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - nn(r);
              u = 1 << i, i = n[i], i > l && (l = i), r &= ~u;
            }
            if (r = l, r = re() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * cf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = vu(ut.bind(null, e, Me, Nn), r);
              break;
            }
            ut(e, Me, Nn);
            break;
          case 5:
            ut(e, Me, Nn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Ie(e, re()), e.callbackNode === t ? ua.bind(null, e) : null;
  }
  function ci(e, n) {
    var t = mr;
    return e.current.memoizedState.isDehydrated && (lt(e, n).flags |= 256), e = Sl(e, n), e !== 2 && (n = Me, Me = t, n !== null && fi(n)), e;
  }
  function fi(e) {
    Me === null ? Me = e : Me.push.apply(Me, e);
  }
  function ff(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null))
          for (var r = 0; r < t.length; r++) {
            var l = t[r], u = l.getSnapshot;
            l = l.value;
            try {
              if (!tn(u(), l))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (t = n.child, n.subtreeFlags & 16384 && t !== null)
        t.return = n, n = t;
      else {
        if (n === e)
          break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e)
            return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Wn(e, n) {
    for (n &= ~ii, n &= ~ml, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - nn(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function ia(e) {
    if (I & 6)
      throw Error(m(327));
    Rt();
    var n = zr(e, 0);
    if (!(n & 1))
      return Ie(e, re()), null;
    var t = Sl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = $l(e);
      r !== 0 && (n = r, t = ci(e, r));
    }
    if (t === 1)
      throw t = pr, lt(e, 0), Wn(e, n), Ie(e, re()), t;
    if (t === 6)
      throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, ut(e, Me, Nn), Ie(e, re()), null;
  }
  function di(e, n) {
    var t = I;
    I |= 1;
    try {
      return e(n);
    } finally {
      I = t, I === 0 && (Lt = re() + 500, Yr && jn());
    }
  }
  function rt(e) {
    Hn !== null && Hn.tag === 0 && !(I & 6) && Rt();
    var n = I;
    I |= 1;
    var t = Ze.transition, r = B;
    try {
      if (Ze.transition = null, B = 1, e)
        return e();
    } finally {
      B = r, Ze.transition = t, I = n, !(I & 6) && jn();
    }
  }
  function pi() {
    He = Tt.current, K(Tt);
  }
  function lt(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Ac(t)), ie !== null)
      for (t = ie.return; t !== null; ) {
        var r = t;
        switch (Eu(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && Qr();
            break;
          case 3:
            Nt(), K(Re), K(ke), Iu();
            break;
          case 5:
            Du(r);
            break;
          case 4:
            Nt();
            break;
          case 13:
            K(q);
            break;
          case 19:
            K(q);
            break;
          case 10:
            zu(r.type._context);
            break;
          case 22:
          case 23:
            pi();
        }
        t = t.return;
      }
    if (pe = e, ie = e = Qn(e.current, null), ve = He = n, ae = 0, pr = null, ii = ml = tt = 0, Me = mr = null, bn !== null) {
      for (n = 0; n < bn.length; n++)
        if (t = bn[n], r = t.interleaved, r !== null) {
          t.interleaved = null;
          var l = r.next, u = t.pending;
          if (u !== null) {
            var i = u.next;
            u.next = l, r.next = i;
          }
          t.pending = r;
        }
      bn = null;
    }
    return e;
  }
  function oa(e, n) {
    do {
      var t = ie;
      try {
        if (Pu(), rl.current = ol, ll) {
          for (var r = b.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ll = !1;
        }
        if (nt = 0, de = se = b = null, or = !1, sr = 0, ui.current = null, t === null || t.return === null) {
          ae = 1, pr = n, ie = null;
          break;
        }
        e: {
          var u = e, i = t.return, o = t, s = n;
          if (n = ve, o.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = o, g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var k = Os(i);
            if (k !== null) {
              k.flags &= -257, Ds(k, i, o, u, n), k.mode & 1 && Rs(u, p, n), n = k, s = p;
              var C = n.updateQueue;
              if (C === null) {
                var x = /* @__PURE__ */ new Set();
                x.add(s), n.updateQueue = x;
              } else
                C.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Rs(u, p, n), mi();
                break e;
              }
              s = Error(m(426));
            }
          } else if (Z && o.mode & 1) {
            var le = Os(i);
            if (le !== null) {
              !(le.flags & 65536) && (le.flags |= 256), Ds(le, i, o, u, n), xu(Pt(s, o));
              break e;
            }
          }
          u = s = Pt(s, o), ae !== 4 && (ae = 2), mr === null ? mr = [u] : mr.push(u), u = i;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, n &= -n, u.lanes |= n;
                var f = Ts(u, s, n);
                ts(u, f);
                break e;
              case 1:
                o = s;
                var a = u.type, d = u.stateNode;
                if (!(u.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Bn === null || !Bn.has(d)))) {
                  u.flags |= 65536, n &= -n, u.lanes |= n;
                  var w = Ls(u, o, n);
                  ts(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ca(t);
      } catch (N) {
        n = N, ie === t && t !== null && (ie = t = t.return);
        continue;
      }
      break;
    } while (1);
  }
  function sa() {
    var e = pl.current;
    return pl.current = ol, e === null ? ol : e;
  }
  function mi() {
    (ae === 0 || ae === 3 || ae === 2) && (ae = 4), pe === null || !(tt & 268435455) && !(ml & 268435455) || Wn(pe, ve);
  }
  function Sl(e, n) {
    var t = I;
    I |= 2;
    var r = sa();
    (pe !== e || ve !== n) && (Nn = null, lt(e, n));
    do
      try {
        df();
        break;
      } catch (l) {
        oa(e, l);
      }
    while (1);
    if (Pu(), I = t, pl.current = r, ie !== null)
      throw Error(m(261));
    return pe = null, ve = 0, ae;
  }
  function df() {
    for (; ie !== null; )
      aa(ie);
  }
  function pf() {
    for (; ie !== null && !ja(); )
      aa(ie);
  }
  function aa(e) {
    var n = pa(e.alternate, e, He);
    e.memoizedProps = e.pendingProps, n === null ? ca(e) : ie = n, ui.current = null;
  }
  function ca(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = uf(t, n), t !== null) {
          t.flags &= 32767, ie = t;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ae = 6, ie = null;
          return;
        }
      } else if (t = lf(t, n, He), t !== null) {
        ie = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        ie = n;
        return;
      }
      ie = n = e;
    } while (n !== null);
    ae === 0 && (ae = 5);
  }
  function ut(e, n, t) {
    var r = B, l = Ze.transition;
    try {
      Ze.transition = null, B = 1, mf(e, n, t, r);
    } finally {
      Ze.transition = l, B = r;
    }
    return null;
  }
  function mf(e, n, t, r) {
    do
      Rt();
    while (Hn !== null);
    if (I & 6)
      throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
      throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = t.lanes | t.childLanes;
    if (Ya(e, u), e === pe && (ie = pe = null, ve = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || vl || (vl = !0, ma(Cr, function() {
      return Rt(), null;
    })), u = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || u) {
      u = Ze.transition, Ze.transition = null;
      var i = B;
      B = 1;
      var o = I;
      I |= 4, ui.current = null, sf(e, t), ea(t, e), Dc(mu), Rr = !!pu, mu = pu = null, e.current = t, af(t), Ua(), I = o, B = i, Ze.transition = u;
    } else
      e.current = t;
    if (vl && (vl = !1, Hn = e, yl = l), u = e.pendingLanes, u === 0 && (Bn = null), Ba(t.stateNode), Ie(e, re()), n !== null)
      for (r = e.onRecoverableError, t = 0; t < n.length; t++)
        l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl)
      throw hl = !1, e = si, si = null, e;
    return yl & 1 && e.tag !== 0 && Rt(), u = e.pendingLanes, u & 1 ? e === ai ? hr++ : (hr = 0, ai = e) : hr = 0, jn(), null;
  }
  function Rt() {
    if (Hn !== null) {
      var e = Ji(yl), n = Ze.transition, t = B;
      try {
        if (Ze.transition = null, B = 16 > e ? 16 : e, Hn === null)
          var r = !1;
        else {
          if (e = Hn, Hn = null, yl = 0, I & 6)
            throw Error(m(331));
          var l = I;
          for (I |= 4, E = e.current; E !== null; ) {
            var u = E, i = u.child;
            if (E.flags & 16) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var p = o[s];
                  for (E = p; E !== null; ) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dr(8, y, u);
                    }
                    var g = y.child;
                    if (g !== null)
                      g.return = y, E = g;
                    else
                      for (; E !== null; ) {
                        y = E;
                        var h = y.sibling, k = y.return;
                        if (Gs(y), y === p) {
                          E = null;
                          break;
                        }
                        if (h !== null) {
                          h.return = k, E = h;
                          break;
                        }
                        E = k;
                      }
                  }
                }
                var C = u.alternate;
                if (C !== null) {
                  var x = C.child;
                  if (x !== null) {
                    C.child = null;
                    do {
                      var le = x.sibling;
                      x.sibling = null, x = le;
                    } while (x !== null);
                  }
                }
                E = u;
              }
            }
            if (u.subtreeFlags & 2064 && i !== null)
              i.return = u, E = i;
            else
              e:
                for (; E !== null; ) {
                  if (u = E, u.flags & 2048)
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dr(9, u, u.return);
                    }
                  var f = u.sibling;
                  if (f !== null) {
                    f.return = u.return, E = f;
                    break e;
                  }
                  E = u.return;
                }
          }
          var a = e.current;
          for (E = a; E !== null; ) {
            i = E;
            var d = i.child;
            if (i.subtreeFlags & 2064 && d !== null)
              d.return = i, E = d;
            else
              e:
                for (i = a; E !== null; ) {
                  if (o = E, o.flags & 2048)
                    try {
                      switch (o.tag) {
                        case 0:
                        case 11:
                        case 15:
                          dl(9, o);
                      }
                    } catch (N) {
                      te(o, o.return, N);
                    }
                  if (o === i) {
                    E = null;
                    break e;
                  }
                  var w = o.sibling;
                  if (w !== null) {
                    w.return = o.return, E = w;
                    break e;
                  }
                  E = o.return;
                }
          }
          if (I = l, jn(), dn && typeof dn.onPostCommitFiberRoot == "function")
            try {
              dn.onPostCommitFiberRoot(xr, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        B = t, Ze.transition = n;
      }
    }
    return !1;
  }
  function fa(e, n, t) {
    n = Pt(t, n), n = Ts(e, n, 1), e = Vn(e, n, 1), n = Pe(), e !== null && (Vt(e, 1, n), Ie(e, n));
  }
  function te(e, n, t) {
    if (e.tag === 3)
      fa(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          fa(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Bn === null || !Bn.has(r))) {
            e = Pt(t, e), e = Ls(n, e, 1), n = Vn(n, e, 1), e = Pe(), n !== null && (Vt(n, 1, e), Ie(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function hf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = Pe(), e.pingedLanes |= e.suspendedLanes & t, pe === e && (ve & t) === t && (ae === 4 || ae === 3 && (ve & 130023424) === ve && 500 > re() - oi ? lt(e, 0) : ii |= t), Ie(e, n);
  }
  function da(e, n) {
    n === 0 && (e.mode & 1 ? (n = Pr, Pr <<= 1, !(Pr & 130023424) && (Pr = 4194304)) : n = 1);
    var t = Pe();
    e = _n(e, n), e !== null && (Vt(e, n, t), Ie(e, t));
  }
  function vf(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), da(e, t);
  }
  function yf(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(n), da(e, t);
  }
  var pa;
  pa = function(e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || Re.current)
        De = !0;
      else {
        if (!(e.lanes & t) && !(n.flags & 128))
          return De = !1, rf(e, n, t);
        De = !!(e.flags & 131072);
      }
    else
      De = !1, Z && n.flags & 1048576 && Ko(n, Gr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        cl(e, n), e = n.pendingProps;
        var l = wt(n, ke.current);
        xt(n, t), l = Uu(null, n, r, e, l, t);
        var u = Vu();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Oe(r) ? (u = !0, Kr(n)) : u = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ru(n), l.updater = sl, n.stateNode = l, l._reactInternals = n, Qu(n, r, e, t), n = Gu(null, n, r, !0, u, t)) : (n.tag = 0, Z && u && ku(n), Ne(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (cl(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = wf(r), e = ln(r, e), l) {
            case 0:
              n = Xu(null, n, r, e, t);
              break e;
            case 1:
              n = Vs(null, n, r, e, t);
              break e;
            case 11:
              n = Ms(null, n, r, e, t);
              break e;
            case 14:
              n = Is(null, n, r, ln(r.type, e), t);
              break e;
          }
          throw Error(m(
            306,
            r,
            ""
          ));
        }
        return n;
      case 0:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ln(r, l), Xu(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ln(r, l), Vs(e, n, r, l, t);
      case 3:
        e: {
          if (As(n), e === null)
            throw Error(m(387));
          r = n.pendingProps, u = n.memoizedState, l = u.element, ns(e, n), nl(n, r, null, t);
          var i = n.memoizedState;
          if (r = i.element, u.isDehydrated)
            if (u = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = u, n.memoizedState = u, n.flags & 256) {
              l = Pt(Error(m(423)), n), n = Bs(e, n, r, t, l);
              break e;
            } else if (r !== l) {
              l = Pt(Error(m(424)), n), n = Bs(e, n, r, t, l);
              break e;
            } else
              for (Be = Mn(n.stateNode.containerInfo.firstChild), Ae = n, Z = !0, rn = null, t = bo(n, null, r, t), n.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Et(), r === l) {
              n = xn(e, n, t);
              break e;
            }
            Ne(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return ls(n), e === null && Cu(n), r = n.type, l = n.pendingProps, u = e !== null ? e.memoizedProps : null, i = l.children, hu(r, l) ? i = null : u !== null && hu(r, u) && (n.flags |= 32), Us(e, n), Ne(e, n, i, t), n.child;
      case 6:
        return e === null && Cu(n), null;
      case 13:
        return Hs(e, n, t);
      case 4:
        return Ou(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = _t(n, null, r, t) : Ne(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ln(r, l), Ms(e, n, r, l, t);
      case 7:
        return Ne(e, n, n.pendingProps, t), n.child;
      case 8:
        return Ne(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Ne(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, u = n.memoizedProps, i = l.value, W(qr, r._currentValue), r._currentValue = i, u !== null)
            if (tn(u.value, i)) {
              if (u.children === l.children && !Re.current) {
                n = xn(e, n, t);
                break e;
              }
            } else
              for (u = n.child, u !== null && (u.return = n); u !== null; ) {
                var o = u.dependencies;
                if (o !== null) {
                  i = u.child;
                  for (var s = o.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (u.tag === 1) {
                        s = Cn(-1, t & -t), s.tag = 2;
                        var p = u.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var y = p.pending;
                          y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                        }
                      }
                      u.lanes |= t, s = u.alternate, s !== null && (s.lanes |= t), Tu(
                        u.return,
                        t,
                        n
                      ), o.lanes |= t;
                      break;
                    }
                    s = s.next;
                  }
                } else if (u.tag === 10)
                  i = u.type === n.type ? null : u.child;
                else if (u.tag === 18) {
                  if (i = u.return, i === null)
                    throw Error(m(341));
                  i.lanes |= t, o = i.alternate, o !== null && (o.lanes |= t), Tu(i, t, n), i = u.sibling;
                } else
                  i = u.child;
                if (i !== null)
                  i.return = u;
                else
                  for (i = u; i !== null; ) {
                    if (i === n) {
                      i = null;
                      break;
                    }
                    if (u = i.sibling, u !== null) {
                      u.return = i.return, i = u;
                      break;
                    }
                    i = i.return;
                  }
                u = i;
              }
          Ne(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, xt(n, t), l = Xe(l), r = r(l), n.flags |= 1, Ne(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = ln(r, n.pendingProps), l = ln(r.type, l), Is(e, n, r, l, t);
      case 15:
        return Fs(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ln(r, l), cl(e, n), n.tag = 1, Oe(r) ? (e = !0, Kr(n)) : e = !1, xt(n, t), Ps(n, r, l), Qu(n, r, l, t), Gu(null, n, r, !0, e, t);
      case 19:
        return Ws(e, n, t);
      case 22:
        return js(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function ma(e, n) {
    return Ki(e, n);
  }
  function gf(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Je(e, n, t, r) {
    return new gf(e, n, t, r);
  }
  function hi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function wf(e) {
    if (typeof e == "function")
      return hi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === cn)
        return 11;
      if (e === fn)
        return 14;
    }
    return 2;
  }
  function Qn(e, n) {
    var t = e.alternate;
    return t === null ? (t = Je(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function kl(e, n, t, r, l, u) {
    var i = 2;
    if (r = e, typeof e == "function")
      hi(e) && (i = 1);
    else if (typeof e == "string")
      i = 5;
    else
      e:
        switch (e) {
          case Te:
            return it(t.children, l, u, n);
          case Qe:
            i = 8, l |= 8;
            break;
          case Pn:
            return e = Je(12, t, n, l | 2), e.elementType = Pn, e.lanes = u, e;
          case je:
            return e = Je(13, t, n, l), e.elementType = je, e.lanes = u, e;
          case en:
            return e = Je(19, t, n, l), e.elementType = en, e.lanes = u, e;
          case ne:
            return El(t, l, u, n);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case gn:
                  i = 10;
                  break e;
                case Yn:
                  i = 9;
                  break e;
                case cn:
                  i = 11;
                  break e;
                case fn:
                  i = 14;
                  break e;
                case Le:
                  i = 16, r = null;
                  break e;
              }
            throw Error(m(130, e == null ? e : typeof e, ""));
        }
    return n = Je(i, t, n, l), n.elementType = e, n.type = r, n.lanes = u, n;
  }
  function it(e, n, t, r) {
    return e = Je(7, e, r, n), e.lanes = t, e;
  }
  function El(e, n, t, r) {
    return e = Je(22, e, r, n), e.elementType = ne, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function vi(e, n, t) {
    return e = Je(6, e, null, n), e.lanes = t, e;
  }
  function yi(e, n, t) {
    return n = Je(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function Sf(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wl(0), this.expirationTimes = Wl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function gi(e, n, t, r, l, u, i, o, s) {
    return e = new Sf(e, n, t, o, s), n === 1 ? (n = 1, u === !0 && (n |= 8)) : n = 0, u = Je(3, null, null, n), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ru(u), e;
  }
  function kf(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: xe, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function ha(e) {
    if (!e)
      return Fn;
    e = e._reactInternals;
    e: {
      if (Xn(e) !== e || e.tag !== 1)
        throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Oe(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Oe(t))
        return $o(e, t, n);
    }
    return n;
  }
  function va(e, n, t, r, l, u, i, o, s) {
    return e = gi(t, r, !0, e, l, u, i, o, s), e.context = ha(null), t = e.current, r = Pe(), l = $n(t), u = Cn(r, l), u.callback = n ?? null, Vn(t, u, l), e.current.lanes = l, Vt(e, l, r), Ie(e, r), e;
  }
  function _l(e, n, t, r) {
    var l = n.current, u = Pe(), i = $n(l);
    return t = ha(t), n.context === null ? n.context = t : n.pendingContext = t, n = Cn(u, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = Vn(l, n, i), e !== null && (sn(e, l, i, u), el(e, l, i)), i;
  }
  function Cl(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ya(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function wi(e, n) {
    ya(e, n), (e = e.alternate) && ya(e, n);
  }
  function Ef() {
    return null;
  }
  var ga = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Si(e) {
    this._internalRoot = e;
  }
  xl.prototype.render = Si.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null)
      throw Error(m(409));
    _l(e, n, null, null);
  }, xl.prototype.unmount = Si.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      rt(function() {
        _l(null, e, null, null);
      }), n[wn] = null;
    }
  };
  function xl(e) {
    this._internalRoot = e;
  }
  xl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = eo();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Rn.length && n !== 0 && n < Rn[t].priority; t++)
        ;
      Rn.splice(t, 0, e), t === 0 && ro(e);
    }
  };
  function ki(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Nl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function wa() {
  }
  function _f(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var p = Cl(i);
          u.call(p);
        };
      }
      var i = va(n, r, e, 0, null, !1, !1, "", wa);
      return e._reactRootContainer = i, e[wn] = i.current, bt(e.nodeType === 8 ? e.parentNode : e), rt(), i;
    }
    for (; l = e.lastChild; )
      e.removeChild(l);
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var p = Cl(s);
        o.call(p);
      };
    }
    var s = gi(e, 0, !1, null, null, !1, !1, "", wa);
    return e._reactRootContainer = s, e[wn] = s.current, bt(e.nodeType === 8 ? e.parentNode : e), rt(function() {
      _l(n, s, t, r);
    }), s;
  }
  function Pl(e, n, t, r, l) {
    var u = t._reactRootContainer;
    if (u) {
      var i = u;
      if (typeof l == "function") {
        var o = l;
        l = function() {
          var s = Cl(i);
          o.call(s);
        };
      }
      _l(n, i, e, l);
    } else
      i = _f(t, n, e, l, r);
    return Cl(i);
  }
  qi = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = Ut(n.pendingLanes);
          t !== 0 && (Ql(n, t | 1), Ie(n, re()), !(I & 6) && (Lt = re() + 500, jn()));
        }
        break;
      case 13:
        rt(function() {
          var r = _n(e, 1);
          if (r !== null) {
            var l = Pe();
            sn(r, e, 1, l);
          }
        }), wi(e, 1);
    }
  }, Kl = function(e) {
    if (e.tag === 13) {
      var n = _n(e, 134217728);
      if (n !== null) {
        var t = Pe();
        sn(n, e, 134217728, t);
      }
      wi(e, 134217728);
    }
  }, bi = function(e) {
    if (e.tag === 13) {
      var n = $n(e), t = _n(e, n);
      if (t !== null) {
        var r = Pe();
        sn(t, e, n, r);
      }
      wi(e, n);
    }
  }, eo = function() {
    return B;
  }, no = function(e, n) {
    var t = B;
    try {
      return B = e, n();
    } finally {
      B = t;
    }
  }, Ul = function(e, n, t) {
    switch (n) {
      case "input":
        if (Ll(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; )
            t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l = Wr(r);
              if (!l)
                throw Error(m(90));
              xi(r), Ll(r, l);
            }
          }
        }
        break;
      case "textarea":
        Li(e, t);
        break;
      case "select":
        n = t.value, n != null && ot(e, !!t.multiple, n, !1);
    }
  }, Vi = di, Ai = rt;
  var Cf = { usingClientEntryPoint: !1, Events: [tr, yt, Wr, ji, Ui, di] }, vr = { findFiberByHostInstance: Gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, xf = { bundleType: vr.bundleType, version: vr.version, rendererPackageName: vr.rendererPackageName, rendererConfig: vr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Se.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Wi(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: vr.findFiberByHostInstance || Ef, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber)
      try {
        xr = zl.inject(xf), dn = zl;
      } catch {
      }
  }
  return Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cf, Fe.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ki(n))
      throw Error(m(200));
    return kf(e, n, null, t);
  }, Fe.createRoot = function(e, n) {
    if (!ki(e))
      throw Error(m(299));
    var t = !1, r = "", l = ga;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = gi(e, 1, !1, null, null, t, !1, r, l), e[wn] = n.current, bt(e.nodeType === 8 ? e.parentNode : e), new Si(n);
  }, Fe.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = Wi(n), e = e === null ? null : e.stateNode, e;
  }, Fe.flushSync = function(e) {
    return rt(e);
  }, Fe.hydrate = function(e, n, t) {
    if (!Nl(n))
      throw Error(m(200));
    return Pl(null, e, n, !0, t);
  }, Fe.hydrateRoot = function(e, n, t) {
    if (!ki(e))
      throw Error(m(405));
    var r = t != null && t.hydratedSources || null, l = !1, u = "", i = ga;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = va(n, null, e, 1, t ?? null, l, !1, u, i), e[wn] = n.current, bt(e), r)
      for (e = 0; e < r.length; e++)
        t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
          t,
          l
        );
    return new xl(n);
  }, Fe.render = function(e, n, t) {
    if (!Nl(n))
      throw Error(m(200));
    return Pl(null, e, n, !1, t);
  }, Fe.unmountComponentAtNode = function(e) {
    if (!Nl(e))
      throw Error(m(40));
    return e._reactRootContainer ? (rt(function() {
      Pl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[wn] = null;
      });
    }), !0) : !1;
  }, Fe.unstable_batchedUpdates = di, Fe.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!Nl(t))
      throw Error(m(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(m(38));
    return Pl(e, n, t, !1, r);
  }, Fe.version = "18.3.1-next-f1338f8080-20240426", Fe;
}
function Ta() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ta);
    } catch (L) {
      console.error(L);
    }
}
Ta(), za.exports = Of();
var Df = za.exports;
const Mf = /* @__PURE__ */ Pf(Df);
function If(L) {
  return {
    render(ee) {
      L.innerHTML = "";
      const m = () => {
        const [ye, ge] = gr.useState(!1), [ce, ue] = gr.useState(null);
        gr.useEffect(() => {
          const fe = document.querySelectorAll('[data-testid="duplicate"]');
          fe.length > 0 && (ge(!0), ue(fe.length));
        }, []);
        const V = () => {
          ge(!1);
        };
        return /* @__PURE__ */ oe("div", { children: ye && /* @__PURE__ */ oe("div", { className: "modal fade show", role: "dialog", id: "duplicate-popup", style: { display: "block" }, children: /* @__PURE__ */ oe("div", { className: "modal-dialog modal-lg", children: /* @__PURE__ */ Ei("div", { className: "modal-content", children: [
          /* @__PURE__ */ Ei("div", { className: "modal-header", children: [
            /* @__PURE__ */ oe("button", { type: "button", className: "close btn btn-default", onClick: V, children: /* @__PURE__ */ oe("span", { "aria-hidden": "true", children: /* @__PURE__ */ oe("i", { className: "m-icon m-icon-cross" }) }) }),
            /* @__PURE__ */ oe("h3", { className: "modal-title", children: "Duplicate Entry" })
          ] }),
          /* @__PURE__ */ oe("div", { className: "modal-body use-type", children: /* @__PURE__ */ oe("div", { className: "grid__section", children: /* @__PURE__ */ oe("div", { className: "container", children: /* @__PURE__ */ oe("div", { className: "row", children: /* @__PURE__ */ oe("div", { id: "sec2row0col0", className: "col-12", children: /* @__PURE__ */ oe("div", { id: "mHtmlComponent_4ae0jtsaSL6r4Bo-DzjR-A", children: /* @__PURE__ */ oe("div", { className: "htmlSanitizer", children: ce && ce > 1 ? /* @__PURE__ */ oe("p", { children: /* @__PURE__ */ Ei("span", { style: { fontSize: "24px" }, children: [
            "There are ",
            ce,
            " duplicate items. Please review them."
          ] }) }) : /* @__PURE__ */ oe("p", { children: /* @__PURE__ */ oe("span", { style: { fontSize: "24px" }, children: "You have a duplicate entry." }) }) }) }) }) }) }) }) }),
          /* @__PURE__ */ oe("div", { className: "modal-footer", children: /* @__PURE__ */ oe("button", { type: "button", className: "btn btn-primary", onClick: V, children: "Close" }) })
        ] }) }) }) });
      }, ze = document.createElement("div");
      L.appendChild(ze), Mf.render(/* @__PURE__ */ oe(m, {}), ze);
    },
    unmount() {
      L.innerHTML = "";
    }
  };
}
export {
  If as default
};

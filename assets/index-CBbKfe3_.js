(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) o(l);
  new MutationObserver((l) => {
    for (const u of l)
      if (u.type === "childList")
        for (const c of u.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && o(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(l) {
    const u = {};
    return (
      l.integrity && (u.integrity = l.integrity),
      l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function o(l) {
    if (l.ep) return;
    l.ep = !0;
    const u = i(l);
    fetch(l.href, u);
  }
})();
function H_(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default")
    ? f.default
    : f;
}
var qc = { exports: {} },
  Xl = {},
  Zc = { exports: {} },
  Re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fh;
function b_() {
  if (Fh) return Re;
  Fh = 1;
  var f = Symbol.for("react.element"),
    n = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    u = Symbol.for("react.provider"),
    c = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    _ = Symbol.for("react.lazy"),
    S = Symbol.iterator;
  function x(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (S && T[S]) || T["@@iterator"]),
        typeof T == "function" ? T : null);
  }
  var v = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    E = Object.assign,
    y = {};
  function O(T, B, de) {
    (this.props = T),
      (this.context = B),
      (this.refs = y),
      (this.updater = de || v);
  }
  (O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (T, B) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, T, B, "setState");
    }),
    (O.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    });
  function I() {}
  I.prototype = O.prototype;
  function A(T, B, de) {
    (this.props = T),
      (this.context = B),
      (this.refs = y),
      (this.updater = de || v);
  }
  var U = (A.prototype = new I());
  (U.constructor = A), E(U, O.prototype), (U.isPureReactComponent = !0);
  var D = Array.isArray,
    F = Object.prototype.hasOwnProperty,
    V = { current: null },
    L = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(T, B, de) {
    var oe,
      me = {},
      ve = null,
      xe = null;
    if (B != null)
      for (oe in (B.ref !== void 0 && (xe = B.ref),
      B.key !== void 0 && (ve = "" + B.key),
      B))
        F.call(B, oe) && !L.hasOwnProperty(oe) && (me[oe] = B[oe]);
    var Ce = arguments.length - 2;
    if (Ce === 1) me.children = de;
    else if (1 < Ce) {
      for (var Te = Array(Ce), at = 0; at < Ce; at++)
        Te[at] = arguments[at + 2];
      me.children = Te;
    }
    if (T && T.defaultProps)
      for (oe in ((Ce = T.defaultProps), Ce))
        me[oe] === void 0 && (me[oe] = Ce[oe]);
    return {
      $$typeof: f,
      type: T,
      key: ve,
      ref: xe,
      props: me,
      _owner: V.current,
    };
  }
  function $(T, B) {
    return {
      $$typeof: f,
      type: T.type,
      key: B,
      ref: T.ref,
      props: T.props,
      _owner: T._owner,
    };
  }
  function X(T) {
    return typeof T == "object" && T !== null && T.$$typeof === f;
  }
  function pe(T) {
    var B = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (de) {
        return B[de];
      })
    );
  }
  var K = /\/+/g;
  function he(T, B) {
    return typeof T == "object" && T !== null && T.key != null
      ? pe("" + T.key)
      : B.toString(36);
  }
  function ge(T, B, de, oe, me) {
    var ve = typeof T;
    (ve === "undefined" || ve === "boolean") && (T = null);
    var xe = !1;
    if (T === null) xe = !0;
    else
      switch (ve) {
        case "string":
        case "number":
          xe = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case f:
            case n:
              xe = !0;
          }
      }
    if (xe)
      return (
        (xe = T),
        (me = me(xe)),
        (T = oe === "" ? "." + he(xe, 0) : oe),
        D(me)
          ? ((de = ""),
            T != null && (de = T.replace(K, "$&/") + "/"),
            ge(me, B, de, "", function (at) {
              return at;
            }))
          : me != null &&
            (X(me) &&
              (me = $(
                me,
                de +
                  (!me.key || (xe && xe.key === me.key)
                    ? ""
                    : ("" + me.key).replace(K, "$&/") + "/") +
                  T
              )),
            B.push(me)),
        1
      );
    if (((xe = 0), (oe = oe === "" ? "." : oe + ":"), D(T)))
      for (var Ce = 0; Ce < T.length; Ce++) {
        ve = T[Ce];
        var Te = oe + he(ve, Ce);
        xe += ge(ve, B, de, Te, me);
      }
    else if (((Te = x(T)), typeof Te == "function"))
      for (T = Te.call(T), Ce = 0; !(ve = T.next()).done; )
        (ve = ve.value),
          (Te = oe + he(ve, Ce++)),
          (xe += ge(ve, B, de, Te, me));
    else if (ve === "object")
      throw (
        ((B = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (B === "[object Object]"
              ? "object with keys {" + Object.keys(T).join(", ") + "}"
              : B) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return xe;
  }
  function ke(T, B, de) {
    if (T == null) return T;
    var oe = [],
      me = 0;
    return (
      ge(T, oe, "", "", function (ve) {
        return B.call(de, ve, me++);
      }),
      oe
    );
  }
  function fe(T) {
    if (T._status === -1) {
      var B = T._result;
      (B = B()),
        B.then(
          function (de) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = de));
          },
          function (de) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = de));
          }
        ),
        T._status === -1 && ((T._status = 0), (T._result = B));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var ee = { current: null },
    W = { transition: null },
    Z = {
      ReactCurrentDispatcher: ee,
      ReactCurrentBatchConfig: W,
      ReactCurrentOwner: V,
    };
  function k() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Re.Children = {
      map: ke,
      forEach: function (T, B, de) {
        ke(
          T,
          function () {
            B.apply(this, arguments);
          },
          de
        );
      },
      count: function (T) {
        var B = 0;
        return (
          ke(T, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (T) {
        return (
          ke(T, function (B) {
            return B;
          }) || []
        );
      },
      only: function (T) {
        if (!X(T))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return T;
      },
    }),
    (Re.Component = O),
    (Re.Fragment = i),
    (Re.Profiler = l),
    (Re.PureComponent = A),
    (Re.StrictMode = o),
    (Re.Suspense = h),
    (Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z),
    (Re.act = k),
    (Re.cloneElement = function (T, B, de) {
      if (T == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            T +
            "."
        );
      var oe = E({}, T.props),
        me = T.key,
        ve = T.ref,
        xe = T._owner;
      if (B != null) {
        if (
          (B.ref !== void 0 && ((ve = B.ref), (xe = V.current)),
          B.key !== void 0 && (me = "" + B.key),
          T.type && T.type.defaultProps)
        )
          var Ce = T.type.defaultProps;
        for (Te in B)
          F.call(B, Te) &&
            !L.hasOwnProperty(Te) &&
            (oe[Te] = B[Te] === void 0 && Ce !== void 0 ? Ce[Te] : B[Te]);
      }
      var Te = arguments.length - 2;
      if (Te === 1) oe.children = de;
      else if (1 < Te) {
        Ce = Array(Te);
        for (var at = 0; at < Te; at++) Ce[at] = arguments[at + 2];
        oe.children = Ce;
      }
      return {
        $$typeof: f,
        type: T.type,
        key: me,
        ref: ve,
        props: oe,
        _owner: xe,
      };
    }),
    (Re.createContext = function (T) {
      return (
        (T = {
          $$typeof: c,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (T.Provider = { $$typeof: u, _context: T }),
        (T.Consumer = T)
      );
    }),
    (Re.createElement = b),
    (Re.createFactory = function (T) {
      var B = b.bind(null, T);
      return (B.type = T), B;
    }),
    (Re.createRef = function () {
      return { current: null };
    }),
    (Re.forwardRef = function (T) {
      return { $$typeof: d, render: T };
    }),
    (Re.isValidElement = X),
    (Re.lazy = function (T) {
      return { $$typeof: _, _payload: { _status: -1, _result: T }, _init: fe };
    }),
    (Re.memo = function (T, B) {
      return { $$typeof: g, type: T, compare: B === void 0 ? null : B };
    }),
    (Re.startTransition = function (T) {
      var B = W.transition;
      W.transition = {};
      try {
        T();
      } finally {
        W.transition = B;
      }
    }),
    (Re.unstable_act = k),
    (Re.useCallback = function (T, B) {
      return ee.current.useCallback(T, B);
    }),
    (Re.useContext = function (T) {
      return ee.current.useContext(T);
    }),
    (Re.useDebugValue = function () {}),
    (Re.useDeferredValue = function (T) {
      return ee.current.useDeferredValue(T);
    }),
    (Re.useEffect = function (T, B) {
      return ee.current.useEffect(T, B);
    }),
    (Re.useId = function () {
      return ee.current.useId();
    }),
    (Re.useImperativeHandle = function (T, B, de) {
      return ee.current.useImperativeHandle(T, B, de);
    }),
    (Re.useInsertionEffect = function (T, B) {
      return ee.current.useInsertionEffect(T, B);
    }),
    (Re.useLayoutEffect = function (T, B) {
      return ee.current.useLayoutEffect(T, B);
    }),
    (Re.useMemo = function (T, B) {
      return ee.current.useMemo(T, B);
    }),
    (Re.useReducer = function (T, B, de) {
      return ee.current.useReducer(T, B, de);
    }),
    (Re.useRef = function (T) {
      return ee.current.useRef(T);
    }),
    (Re.useState = function (T) {
      return ee.current.useState(T);
    }),
    (Re.useSyncExternalStore = function (T, B, de) {
      return ee.current.useSyncExternalStore(T, B, de);
    }),
    (Re.useTransition = function () {
      return ee.current.useTransition();
    }),
    (Re.version = "18.3.1"),
    Re
  );
}
var Bh;
function Yf() {
  return Bh || ((Bh = 1), (Zc.exports = b_())), Zc.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uh;
function X_() {
  if (Uh) return Xl;
  Uh = 1;
  var f = Yf(),
    n = Symbol.for("react.element"),
    i = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    l = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, h, g) {
    var _,
      S = {},
      x = null,
      v = null;
    g !== void 0 && (x = "" + g),
      h.key !== void 0 && (x = "" + h.key),
      h.ref !== void 0 && (v = h.ref);
    for (_ in h) o.call(h, _) && !u.hasOwnProperty(_) && (S[_] = h[_]);
    if (d && d.defaultProps)
      for (_ in ((h = d.defaultProps), h)) S[_] === void 0 && (S[_] = h[_]);
    return {
      $$typeof: n,
      type: d,
      key: x,
      ref: v,
      props: S,
      _owner: l.current,
    };
  }
  return (Xl.Fragment = i), (Xl.jsx = c), (Xl.jsxs = c), Xl;
}
var Vh;
function Q_() {
  return Vh || ((Vh = 1), (qc.exports = X_())), qc.exports;
}
var M = Q_(),
  Be = Yf();
const uo = H_(Be);
var Nu = {},
  Jc = { exports: {} },
  En = {},
  ef = { exports: {} },
  tf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $h;
function G_() {
  return (
    $h ||
      (($h = 1),
      (function (f) {
        function n(W, Z) {
          var k = W.length;
          W.push(Z);
          e: for (; 0 < k; ) {
            var T = (k - 1) >>> 1,
              B = W[T];
            if (0 < l(B, Z)) (W[T] = Z), (W[k] = B), (k = T);
            else break e;
          }
        }
        function i(W) {
          return W.length === 0 ? null : W[0];
        }
        function o(W) {
          if (W.length === 0) return null;
          var Z = W[0],
            k = W.pop();
          if (k !== Z) {
            W[0] = k;
            e: for (var T = 0, B = W.length, de = B >>> 1; T < de; ) {
              var oe = 2 * (T + 1) - 1,
                me = W[oe],
                ve = oe + 1,
                xe = W[ve];
              if (0 > l(me, k))
                ve < B && 0 > l(xe, me)
                  ? ((W[T] = xe), (W[ve] = k), (T = ve))
                  : ((W[T] = me), (W[oe] = k), (T = oe));
              else if (ve < B && 0 > l(xe, k))
                (W[T] = xe), (W[ve] = k), (T = ve);
              else break e;
            }
          }
          return Z;
        }
        function l(W, Z) {
          var k = W.sortIndex - Z.sortIndex;
          return k !== 0 ? k : W.id - Z.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var u = performance;
          f.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            d = c.now();
          f.unstable_now = function () {
            return c.now() - d;
          };
        }
        var h = [],
          g = [],
          _ = 1,
          S = null,
          x = 3,
          v = !1,
          E = !1,
          y = !1,
          O = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          A = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function U(W) {
          for (var Z = i(g); Z !== null; ) {
            if (Z.callback === null) o(g);
            else if (Z.startTime <= W)
              o(g), (Z.sortIndex = Z.expirationTime), n(h, Z);
            else break;
            Z = i(g);
          }
        }
        function D(W) {
          if (((y = !1), U(W), !E))
            if (i(h) !== null) (E = !0), fe(F);
            else {
              var Z = i(g);
              Z !== null && ee(D, Z.startTime - W);
            }
        }
        function F(W, Z) {
          (E = !1), y && ((y = !1), I(b), (b = -1)), (v = !0);
          var k = x;
          try {
            for (
              U(Z), S = i(h);
              S !== null && (!(S.expirationTime > Z) || (W && !pe()));

            ) {
              var T = S.callback;
              if (typeof T == "function") {
                (S.callback = null), (x = S.priorityLevel);
                var B = T(S.expirationTime <= Z);
                (Z = f.unstable_now()),
                  typeof B == "function"
                    ? (S.callback = B)
                    : S === i(h) && o(h),
                  U(Z);
              } else o(h);
              S = i(h);
            }
            if (S !== null) var de = !0;
            else {
              var oe = i(g);
              oe !== null && ee(D, oe.startTime - Z), (de = !1);
            }
            return de;
          } finally {
            (S = null), (x = k), (v = !1);
          }
        }
        var V = !1,
          L = null,
          b = -1,
          $ = 5,
          X = -1;
        function pe() {
          return !(f.unstable_now() - X < $);
        }
        function K() {
          if (L !== null) {
            var W = f.unstable_now();
            X = W;
            var Z = !0;
            try {
              Z = L(!0, W);
            } finally {
              Z ? he() : ((V = !1), (L = null));
            }
          } else V = !1;
        }
        var he;
        if (typeof A == "function")
          he = function () {
            A(K);
          };
        else if (typeof MessageChannel < "u") {
          var ge = new MessageChannel(),
            ke = ge.port2;
          (ge.port1.onmessage = K),
            (he = function () {
              ke.postMessage(null);
            });
        } else
          he = function () {
            O(K, 0);
          };
        function fe(W) {
          (L = W), V || ((V = !0), he());
        }
        function ee(W, Z) {
          b = O(function () {
            W(f.unstable_now());
          }, Z);
        }
        (f.unstable_IdlePriority = 5),
          (f.unstable_ImmediatePriority = 1),
          (f.unstable_LowPriority = 4),
          (f.unstable_NormalPriority = 3),
          (f.unstable_Profiling = null),
          (f.unstable_UserBlockingPriority = 2),
          (f.unstable_cancelCallback = function (W) {
            W.callback = null;
          }),
          (f.unstable_continueExecution = function () {
            E || v || ((E = !0), fe(F));
          }),
          (f.unstable_forceFrameRate = function (W) {
            0 > W || 125 < W
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : ($ = 0 < W ? Math.floor(1e3 / W) : 5);
          }),
          (f.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (f.unstable_getFirstCallbackNode = function () {
            return i(h);
          }),
          (f.unstable_next = function (W) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = x;
            }
            var k = x;
            x = Z;
            try {
              return W();
            } finally {
              x = k;
            }
          }),
          (f.unstable_pauseExecution = function () {}),
          (f.unstable_requestPaint = function () {}),
          (f.unstable_runWithPriority = function (W, Z) {
            switch (W) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                W = 3;
            }
            var k = x;
            x = W;
            try {
              return Z();
            } finally {
              x = k;
            }
          }),
          (f.unstable_scheduleCallback = function (W, Z, k) {
            var T = f.unstable_now();
            switch (
              (typeof k == "object" && k !== null
                ? ((k = k.delay),
                  (k = typeof k == "number" && 0 < k ? T + k : T))
                : (k = T),
              W)
            ) {
              case 1:
                var B = -1;
                break;
              case 2:
                B = 250;
                break;
              case 5:
                B = 1073741823;
                break;
              case 4:
                B = 1e4;
                break;
              default:
                B = 5e3;
            }
            return (
              (B = k + B),
              (W = {
                id: _++,
                callback: Z,
                priorityLevel: W,
                startTime: k,
                expirationTime: B,
                sortIndex: -1,
              }),
              k > T
                ? ((W.sortIndex = k),
                  n(g, W),
                  i(h) === null &&
                    W === i(g) &&
                    (y ? (I(b), (b = -1)) : (y = !0), ee(D, k - T)))
                : ((W.sortIndex = B), n(h, W), E || v || ((E = !0), fe(F))),
              W
            );
          }),
          (f.unstable_shouldYield = pe),
          (f.unstable_wrapCallback = function (W) {
            var Z = x;
            return function () {
              var k = x;
              x = Z;
              try {
                return W.apply(this, arguments);
              } finally {
                x = k;
              }
            };
          });
      })(tf)),
    tf
  );
}
var Wh;
function K_() {
  return Wh || ((Wh = 1), (ef.exports = G_())), ef.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yh;
function q_() {
  if (Yh) return En;
  Yh = 1;
  var f = Yf(),
    n = K_();
  function i(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var o = new Set(),
    l = {};
  function u(e, t) {
    c(e, t), c(e + "Capture", t);
  }
  function c(e, t) {
    for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
  }
  var d = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    h = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    _ = {},
    S = {};
  function x(e) {
    return h.call(S, e)
      ? !0
      : h.call(_, e)
      ? !1
      : g.test(e)
      ? (S[e] = !0)
      : ((_[e] = !0), !1);
  }
  function v(e, t, r, s) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function E(e, t, r, s) {
    if (t === null || typeof t > "u" || v(e, t, r, s)) return !0;
    if (s) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function y(e, t, r, s, a, p, m) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = s),
      (this.attributeNamespace = a),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = p),
      (this.removeEmptyString = m);
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      O[e] = new y(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      O[t] = new y(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      O[e] = new y(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      O[e] = new y(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        O[e] = new y(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      O[e] = new y(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      O[e] = new y(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      O[e] = new y(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      O[e] = new y(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var I = /[\-:]([a-z])/g;
  function A(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(I, A);
      O[t] = new y(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(I, A);
        O[t] = new y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(I, A);
      O[t] = new y(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      O[e] = new y(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (O.xlinkHref = new y(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      O[e] = new y(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function U(e, t, r, s) {
    var a = O.hasOwnProperty(t) ? O[t] : null;
    (a !== null
      ? a.type !== 0
      : s ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (E(t, r, a, s) && (r = null),
      s || a === null
        ? x(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : a.mustUseProperty
        ? (e[a.propertyName] = r === null ? (a.type === 3 ? !1 : "") : r)
        : ((t = a.attributeName),
          (s = a.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((a = a.type),
              (r = a === 3 || (a === 4 && r === !0) ? "" : "" + r),
              s ? e.setAttributeNS(s, t, r) : e.setAttribute(t, r))));
  }
  var D = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    F = Symbol.for("react.element"),
    V = Symbol.for("react.portal"),
    L = Symbol.for("react.fragment"),
    b = Symbol.for("react.strict_mode"),
    $ = Symbol.for("react.profiler"),
    X = Symbol.for("react.provider"),
    pe = Symbol.for("react.context"),
    K = Symbol.for("react.forward_ref"),
    he = Symbol.for("react.suspense"),
    ge = Symbol.for("react.suspense_list"),
    ke = Symbol.for("react.memo"),
    fe = Symbol.for("react.lazy"),
    ee = Symbol.for("react.offscreen"),
    W = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (W && e[W]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var k = Object.assign,
    T;
  function B(e) {
    if (T === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        T = (t && t[1]) || "";
      }
    return (
      `
` +
      T +
      e
    );
  }
  var de = !1;
  function oe(e, t) {
    if (!e || de) return "";
    de = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (z) {
            var s = z;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (z) {
            s = z;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (z) {
          s = z;
        }
        e();
      }
    } catch (z) {
      if (z && s && typeof z.stack == "string") {
        for (
          var a = z.stack.split(`
`),
            p = s.stack.split(`
`),
            m = a.length - 1,
            w = p.length - 1;
          1 <= m && 0 <= w && a[m] !== p[w];

        )
          w--;
        for (; 1 <= m && 0 <= w; m--, w--)
          if (a[m] !== p[w]) {
            if (m !== 1 || w !== 1)
              do
                if ((m--, w--, 0 > w || a[m] !== p[w])) {
                  var C =
                    `
` + a[m].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      C.includes("<anonymous>") &&
                      (C = C.replace("<anonymous>", e.displayName)),
                    C
                  );
                }
              while (1 <= m && 0 <= w);
            break;
          }
      }
    } finally {
      (de = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? B(e) : "";
  }
  function me(e) {
    switch (e.tag) {
      case 5:
        return B(e.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = oe(e.type, !1)), e;
      case 11:
        return (e = oe(e.type.render, !1)), e;
      case 1:
        return (e = oe(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ve(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case L:
        return "Fragment";
      case V:
        return "Portal";
      case $:
        return "Profiler";
      case b:
        return "StrictMode";
      case he:
        return "Suspense";
      case ge:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case pe:
          return (e.displayName || "Context") + ".Consumer";
        case X:
          return (e._context.displayName || "Context") + ".Provider";
        case K:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ke:
          return (
            (t = e.displayName || null), t !== null ? t : ve(e.type) || "Memo"
          );
        case fe:
          (t = e._payload), (e = e._init);
          try {
            return ve(e(t));
          } catch {}
      }
    return null;
  }
  function xe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ve(t);
      case 8:
        return t === b ? "StrictMode" : "Mode";
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
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Ce(e) {
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
  function Te(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function at(e) {
    var t = Te(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      s = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var a = r.get,
        p = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (m) {
            (s = "" + m), p.call(this, m);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (m) {
            s = "" + m;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function vt(e) {
    e._valueTracker || (e._valueTracker = at(e));
  }
  function gn(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      s = "";
    return (
      e && (s = Te(e) ? (e.checked ? "true" : "false") : e.value),
      (e = s),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function ze(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Qe(e, t) {
    var r = t.checked;
    return k({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function Bt(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      s = t.checked != null ? t.checked : t.defaultChecked;
    (r = Ce(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: s,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Wt(e, t) {
    (t = t.checked), t != null && U(e, "checked", t, !1);
  }
  function j(e, t) {
    Wt(e, t);
    var r = Ce(t.value),
      s = t.type;
    if (r != null)
      s === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Ln(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && Ln(e, t.type, Ce(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Yt(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (
        !(
          (s !== "submit" && s !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
  }
  function Ln(e, t, r) {
    (t !== "number" || ze(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var _n = Array.isArray;
  function $e(e, t, r, s) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
      for (r = 0; r < e.length; r++)
        (a = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== a && (e[r].selected = a),
          a && s && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Ce(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          (e[a].selected = !0), s && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Gn(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return k({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Tr(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(i(92));
        if (_n(r)) {
          if (1 < r.length) throw Error(i(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: Ce(r) };
  }
  function Vr(e, t) {
    var r = Ce(t.value),
      s = Ce(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      s != null && (e.defaultValue = "" + s);
  }
  function pt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function fr(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ge(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? fr(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Ht,
    tn = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, s, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, s, a);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ht = Ht || document.createElement("div"),
            Ht.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ht.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function nn(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var dr = {
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
      strokeWidth: !0,
    },
    ct = ["Webkit", "ms", "Moz", "O"];
  Object.keys(dr).forEach(function (e) {
    ct.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (dr[t] = dr[e]);
    });
  });
  function Bi(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (dr.hasOwnProperty(e) && dr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function pr(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var s = r.indexOf("--") === 0,
          a = Bi(r, t[r], s);
        r === "float" && (r = "cssFloat"), s ? e.setProperty(r, a) : (e[r] = a);
      }
  }
  var oi = k(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Er(e, t) {
    if (t) {
      if (oi[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function Kn(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
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
  var hr = null;
  function Ee(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var mr = null,
    Nt = null,
    Rt = null;
  function vn(e) {
    if ((e = zl(e))) {
      if (typeof mr != "function") throw Error(i(280));
      var t = e.stateNode;
      t && ((t = Ys(t)), mr(e.stateNode, e.type, t));
    }
  }
  function Pr(e) {
    Nt ? (Rt ? Rt.push(e) : (Rt = [e])) : (Nt = e);
  }
  function $r() {
    if (Nt) {
      var e = Nt,
        t = Rt;
      if (((Rt = Nt = null), vn(e), t)) for (e = 0; e < t.length; e++) vn(t[e]);
    }
  }
  function qn(e, t) {
    return e(t);
  }
  function li() {}
  var Se = !1;
  function ue(e, t, r) {
    if (Se) return e(t, r);
    Se = !0;
    try {
      return qn(e, t, r);
    } finally {
      (Se = !1), (Nt !== null || Rt !== null) && (li(), $r());
    }
  }
  function De(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var s = Ys(r);
    if (s === null) return null;
    r = s[t];
    e: switch (t) {
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
        (s = !s.disabled) ||
          ((e = e.type),
          (s = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !s);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(i(231, t, typeof r));
    return r;
  }
  var q = !1;
  if (d)
    try {
      var ye = {};
      Object.defineProperty(ye, "passive", {
        get: function () {
          q = !0;
        },
      }),
        window.addEventListener("test", ye, ye),
        window.removeEventListener("test", ye, ye);
    } catch {
      q = !1;
    }
  function se(e, t, r, s, a, p, m, w, C) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, z);
    } catch (H) {
      this.onError(H);
    }
  }
  var _e = !1,
    rt = null,
    Oe = !1,
    Ke = null,
    Mt = {
      onError: function (e) {
        (_e = !0), (rt = e);
      },
    };
  function et(e, t, r, s, a, p, m, w, C) {
    (_e = !1), (rt = null), se.apply(Mt, arguments);
  }
  function Ye(e, t, r, s, a, p, m, w, C) {
    if ((et.apply(this, arguments), _e)) {
      if (_e) {
        var z = rt;
        (_e = !1), (rt = null);
      } else throw Error(i(198));
      Oe || ((Oe = !0), (Ke = z));
    }
  }
  function je(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function yn(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function He(e) {
    if (je(e) !== e) throw Error(i(188));
  }
  function rn(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = je(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var r = e, s = t; ; ) {
      var a = r.return;
      if (a === null) break;
      var p = a.alternate;
      if (p === null) {
        if (((s = a.return), s !== null)) {
          r = s;
          continue;
        }
        break;
      }
      if (a.child === p.child) {
        for (p = a.child; p; ) {
          if (p === r) return He(a), e;
          if (p === s) return He(a), t;
          p = p.sibling;
        }
        throw Error(i(188));
      }
      if (r.return !== s.return) (r = a), (s = p);
      else {
        for (var m = !1, w = a.child; w; ) {
          if (w === r) {
            (m = !0), (r = a), (s = p);
            break;
          }
          if (w === s) {
            (m = !0), (s = a), (r = p);
            break;
          }
          w = w.sibling;
        }
        if (!m) {
          for (w = p.child; w; ) {
            if (w === r) {
              (m = !0), (r = p), (s = a);
              break;
            }
            if (w === s) {
              (m = !0), (s = p), (r = a);
              break;
            }
            w = w.sibling;
          }
          if (!m) throw Error(i(189));
        }
      }
      if (r.alternate !== s) throw Error(i(190));
    }
    if (r.tag !== 3) throw Error(i(188));
    return r.stateNode.current === r ? e : t;
  }
  function jn(e) {
    return (e = rn(e)), e !== null ? yt(e) : null;
  }
  function yt(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = yt(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var xt = n.unstable_scheduleCallback,
    Ct = n.unstable_cancelCallback,
    Wr = n.unstable_shouldYield,
    ko = n.unstable_requestPaint,
    Ne = n.unstable_now,
    ht = n.unstable_getCurrentPriorityLevel,
    xn = n.unstable_ImmediatePriority,
    Co = n.unstable_UserBlockingPriority,
    Ui = n.unstable_NormalPriority,
    Vi = n.unstable_LowPriority,
    An = n.unstable_IdlePriority,
    Or = null,
    on = null;
  function $i(e) {
    if (on && typeof on.onCommitFiberRoot == "function")
      try {
        on.onCommitFiberRoot(Or, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var gr = Math.clz32 ? Math.clz32 : ag,
    sg = Math.log,
    ug = Math.LN2;
  function ag(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((sg(e) / ug) | 0)) | 0;
  }
  var Es = 64,
    Ps = 4194304;
  function hl(e) {
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
  function Os(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var s = 0,
      a = e.suspendedLanes,
      p = e.pingedLanes,
      m = r & 268435455;
    if (m !== 0) {
      var w = m & ~a;
      w !== 0 ? (s = hl(w)) : ((p &= m), p !== 0 && (s = hl(p)));
    } else (m = r & ~a), m !== 0 ? (s = hl(m)) : p !== 0 && (s = hl(p));
    if (s === 0) return 0;
    if (
      t !== 0 &&
      t !== s &&
      !(t & a) &&
      ((a = s & -s), (p = t & -t), a >= p || (a === 16 && (p & 4194240) !== 0))
    )
      return t;
    if ((s & 4 && (s |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= s; 0 < t; )
        (r = 31 - gr(t)), (a = 1 << r), (s |= e[r]), (t &= ~a);
    return s;
  }
  function cg(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
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
        return t + 5e3;
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
  function fg(e, t) {
    for (
      var r = e.suspendedLanes,
        s = e.pingedLanes,
        a = e.expirationTimes,
        p = e.pendingLanes;
      0 < p;

    ) {
      var m = 31 - gr(p),
        w = 1 << m,
        C = a[m];
      C === -1
        ? (!(w & r) || w & s) && (a[m] = cg(w, t))
        : C <= t && (e.expiredLanes |= w),
        (p &= ~w);
    }
  }
  function va(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function md() {
    var e = Es;
    return (Es <<= 1), !(Es & 4194240) && (Es = 64), e;
  }
  function ya(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function ml(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - gr(t)),
      (e[t] = r);
  }
  function dg(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var a = 31 - gr(r),
        p = 1 << a;
      (t[a] = 0), (s[a] = -1), (e[a] = -1), (r &= ~p);
    }
  }
  function xa(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var s = 31 - gr(r),
        a = 1 << s;
      (a & t) | (e[s] & t) && (e[s] |= t), (r &= ~a);
    }
  }
  var Ve = 0;
  function gd(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var _d,
    wa,
    vd,
    yd,
    xd,
    Sa = !1,
    Ns = [],
    si = null,
    ui = null,
    ai = null,
    gl = new Map(),
    _l = new Map(),
    ci = [],
    pg =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function wd(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        si = null;
        break;
      case "dragenter":
      case "dragleave":
        ui = null;
        break;
      case "mouseover":
      case "mouseout":
        ai = null;
        break;
      case "pointerover":
      case "pointerout":
        gl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _l.delete(t.pointerId);
    }
  }
  function vl(e, t, r, s, a, p) {
    return e === null || e.nativeEvent !== p
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: s,
          nativeEvent: p,
          targetContainers: [a],
        }),
        t !== null && ((t = zl(t)), t !== null && wa(t)),
        e)
      : ((e.eventSystemFlags |= s),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function hg(e, t, r, s, a) {
    switch (t) {
      case "focusin":
        return (si = vl(si, e, t, r, s, a)), !0;
      case "dragenter":
        return (ui = vl(ui, e, t, r, s, a)), !0;
      case "mouseover":
        return (ai = vl(ai, e, t, r, s, a)), !0;
      case "pointerover":
        var p = a.pointerId;
        return gl.set(p, vl(gl.get(p) || null, e, t, r, s, a)), !0;
      case "gotpointercapture":
        return (
          (p = a.pointerId), _l.set(p, vl(_l.get(p) || null, e, t, r, s, a)), !0
        );
    }
    return !1;
  }
  function Sd(e) {
    var t = Wi(e.target);
    if (t !== null) {
      var r = je(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = yn(r)), t !== null)) {
            (e.blockedOn = t),
              xd(e.priority, function () {
                vd(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Rs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var s = new r.constructor(r.type, r);
        (hr = s), r.target.dispatchEvent(s), (hr = null);
      } else return (t = zl(r)), t !== null && wa(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function kd(e, t, r) {
    Rs(e) && r.delete(t);
  }
  function mg() {
    (Sa = !1),
      si !== null && Rs(si) && (si = null),
      ui !== null && Rs(ui) && (ui = null),
      ai !== null && Rs(ai) && (ai = null),
      gl.forEach(kd),
      _l.forEach(kd);
  }
  function yl(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Sa ||
        ((Sa = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, mg)));
  }
  function xl(e) {
    function t(a) {
      return yl(a, e);
    }
    if (0 < Ns.length) {
      yl(Ns[0], e);
      for (var r = 1; r < Ns.length; r++) {
        var s = Ns[r];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (
      si !== null && yl(si, e),
        ui !== null && yl(ui, e),
        ai !== null && yl(ai, e),
        gl.forEach(t),
        _l.forEach(t),
        r = 0;
      r < ci.length;
      r++
    )
      (s = ci[r]), s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < ci.length && ((r = ci[0]), r.blockedOn === null); )
      Sd(r), r.blockedOn === null && ci.shift();
  }
  var To = D.ReactCurrentBatchConfig,
    Ms = !0;
  function gg(e, t, r, s) {
    var a = Ve,
      p = To.transition;
    To.transition = null;
    try {
      (Ve = 1), ka(e, t, r, s);
    } finally {
      (Ve = a), (To.transition = p);
    }
  }
  function _g(e, t, r, s) {
    var a = Ve,
      p = To.transition;
    To.transition = null;
    try {
      (Ve = 4), ka(e, t, r, s);
    } finally {
      (Ve = a), (To.transition = p);
    }
  }
  function ka(e, t, r, s) {
    if (Ms) {
      var a = Ca(e, t, r, s);
      if (a === null) Va(e, t, s, zs, r), wd(e, s);
      else if (hg(a, e, t, r, s)) s.stopPropagation();
      else if ((wd(e, s), t & 4 && -1 < pg.indexOf(e))) {
        for (; a !== null; ) {
          var p = zl(a);
          if (
            (p !== null && _d(p),
            (p = Ca(e, t, r, s)),
            p === null && Va(e, t, s, zs, r),
            p === a)
          )
            break;
          a = p;
        }
        a !== null && s.stopPropagation();
      } else Va(e, t, s, null, r);
    }
  }
  var zs = null;
  function Ca(e, t, r, s) {
    if (((zs = null), (e = Ee(s)), (e = Wi(e)), e !== null))
      if (((t = je(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = yn(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (zs = e), null;
  }
  function Cd(e) {
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
        switch (ht()) {
          case xn:
            return 1;
          case Co:
            return 4;
          case Ui:
          case Vi:
            return 16;
          case An:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var fi = null,
    Ta = null,
    Ds = null;
  function Td() {
    if (Ds) return Ds;
    var e,
      t = Ta,
      r = t.length,
      s,
      a = "value" in fi ? fi.value : fi.textContent,
      p = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var m = r - e;
    for (s = 1; s <= m && t[r - s] === a[p - s]; s++);
    return (Ds = a.slice(e, 1 < s ? 1 - s : void 0));
  }
  function Ls(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function js() {
    return !0;
  }
  function Ed() {
    return !1;
  }
  function In(e) {
    function t(r, s, a, p, m) {
      (this._reactName = r),
        (this._targetInst = a),
        (this.type = s),
        (this.nativeEvent = p),
        (this.target = m),
        (this.currentTarget = null);
      for (var w in e)
        e.hasOwnProperty(w) && ((r = e[w]), (this[w] = r ? r(p) : p[w]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? js
          : Ed),
        (this.isPropagationStopped = Ed),
        this
      );
    }
    return (
      k(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = js));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = js));
        },
        persist: function () {},
        isPersistent: js,
      }),
      t
    );
  }
  var Eo = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ea = In(Eo),
    wl = k({}, Eo, { view: 0, detail: 0 }),
    vg = In(wl),
    Pa,
    Oa,
    Sl,
    As = k({}, wl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ra,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Sl &&
              (Sl && e.type === "mousemove"
                ? ((Pa = e.screenX - Sl.screenX), (Oa = e.screenY - Sl.screenY))
                : (Oa = Pa = 0),
              (Sl = e)),
            Pa);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Oa;
      },
    }),
    Pd = In(As),
    yg = k({}, As, { dataTransfer: 0 }),
    xg = In(yg),
    wg = k({}, wl, { relatedTarget: 0 }),
    Na = In(wg),
    Sg = k({}, Eo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kg = In(Sg),
    Cg = k({}, Eo, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Tg = In(Cg),
    Eg = k({}, Eo, { data: 0 }),
    Od = In(Eg),
    Pg = {
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
      MozPrintableKey: "Unidentified",
    },
    Og = {
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
      224: "Meta",
    },
    Ng = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Rg(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Ng[e])
      ? !!t[e]
      : !1;
  }
  function Ra() {
    return Rg;
  }
  var Mg = k({}, wl, {
      key: function (e) {
        if (e.key) {
          var t = Pg[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ls(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Og[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ra,
      charCode: function (e) {
        return e.type === "keypress" ? Ls(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ls(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    zg = In(Mg),
    Dg = k({}, As, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Nd = In(Dg),
    Lg = k({}, wl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ra,
    }),
    jg = In(Lg),
    Ag = k({}, Eo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ig = In(Ag),
    Fg = k({}, As, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Bg = In(Fg),
    Ug = [9, 13, 27, 32],
    Ma = d && "CompositionEvent" in window,
    kl = null;
  d && "documentMode" in document && (kl = document.documentMode);
  var Vg = d && "TextEvent" in window && !kl,
    Rd = d && (!Ma || (kl && 8 < kl && 11 >= kl)),
    Md = " ",
    zd = !1;
  function Dd(e, t) {
    switch (e) {
      case "keyup":
        return Ug.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ld(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Po = !1;
  function $g(e, t) {
    switch (e) {
      case "compositionend":
        return Ld(t);
      case "keypress":
        return t.which !== 32 ? null : ((zd = !0), Md);
      case "textInput":
        return (e = t.data), e === Md && zd ? null : e;
      default:
        return null;
    }
  }
  function Wg(e, t) {
    if (Po)
      return e === "compositionend" || (!Ma && Dd(e, t))
        ? ((e = Td()), (Ds = Ta = fi = null), (Po = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Rd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Yg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function jd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Yg[e.type] : t === "textarea";
  }
  function Ad(e, t, r, s) {
    Pr(s),
      (t = Vs(t, "onChange")),
      0 < t.length &&
        ((r = new Ea("onChange", "change", null, r, s)),
        e.push({ event: r, listeners: t }));
  }
  var Cl = null,
    Tl = null;
  function Hg(e) {
    ep(e, 0);
  }
  function Is(e) {
    var t = zo(e);
    if (gn(t)) return e;
  }
  function bg(e, t) {
    if (e === "change") return t;
  }
  var Id = !1;
  if (d) {
    var za;
    if (d) {
      var Da = "oninput" in document;
      if (!Da) {
        var Fd = document.createElement("div");
        Fd.setAttribute("oninput", "return;"),
          (Da = typeof Fd.oninput == "function");
      }
      za = Da;
    } else za = !1;
    Id = za && (!document.documentMode || 9 < document.documentMode);
  }
  function Bd() {
    Cl && (Cl.detachEvent("onpropertychange", Ud), (Tl = Cl = null));
  }
  function Ud(e) {
    if (e.propertyName === "value" && Is(Tl)) {
      var t = [];
      Ad(t, Tl, e, Ee(e)), ue(Hg, t);
    }
  }
  function Xg(e, t, r) {
    e === "focusin"
      ? (Bd(), (Cl = t), (Tl = r), Cl.attachEvent("onpropertychange", Ud))
      : e === "focusout" && Bd();
  }
  function Qg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Is(Tl);
  }
  function Gg(e, t) {
    if (e === "click") return Is(t);
  }
  function Kg(e, t) {
    if (e === "input" || e === "change") return Is(t);
  }
  function qg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var _r = typeof Object.is == "function" ? Object.is : qg;
  function El(e, t) {
    if (_r(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      s = Object.keys(t);
    if (r.length !== s.length) return !1;
    for (s = 0; s < r.length; s++) {
      var a = r[s];
      if (!h.call(t, a) || !_r(e[a], t[a])) return !1;
    }
    return !0;
  }
  function Vd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $d(e, t) {
    var r = Vd(e);
    e = 0;
    for (var s; r; ) {
      if (r.nodeType === 3) {
        if (((s = e + r.textContent.length), e <= t && s >= t))
          return { node: r, offset: t - e };
        e = s;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Vd(r);
    }
  }
  function Wd(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Wd(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Yd() {
    for (var e = window, t = ze(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = ze(e.document);
    }
    return t;
  }
  function La(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Zg(e) {
    var t = Yd(),
      r = e.focusedElem,
      s = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      Wd(r.ownerDocument.documentElement, r)
    ) {
      if (s !== null && La(r)) {
        if (
          ((t = s.start),
          (e = s.end),
          e === void 0 && (e = t),
          "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var a = r.textContent.length,
            p = Math.min(s.start, a);
          (s = s.end === void 0 ? p : Math.min(s.end, a)),
            !e.extend && p > s && ((a = s), (s = p), (p = a)),
            (a = $d(r, p));
          var m = $d(r, s);
          a &&
            m &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== m.node ||
              e.focusOffset !== m.offset) &&
            ((t = t.createRange()),
            t.setStart(a.node, a.offset),
            e.removeAllRanges(),
            p > s
              ? (e.addRange(t), e.extend(m.node, m.offset))
              : (t.setEnd(m.node, m.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Jg = d && "documentMode" in document && 11 >= document.documentMode,
    Oo = null,
    ja = null,
    Pl = null,
    Aa = !1;
  function Hd(e, t, r) {
    var s =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Aa ||
      Oo == null ||
      Oo !== ze(s) ||
      ((s = Oo),
      "selectionStart" in s && La(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = (
            (s.ownerDocument && s.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (Pl && El(Pl, s)) ||
        ((Pl = s),
        (s = Vs(ja, "onSelect")),
        0 < s.length &&
          ((t = new Ea("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: s }),
          (t.target = Oo))));
  }
  function Fs(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var No = {
      animationend: Fs("Animation", "AnimationEnd"),
      animationiteration: Fs("Animation", "AnimationIteration"),
      animationstart: Fs("Animation", "AnimationStart"),
      transitionend: Fs("Transition", "TransitionEnd"),
    },
    Ia = {},
    bd = {};
  d &&
    ((bd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete No.animationend.animation,
      delete No.animationiteration.animation,
      delete No.animationstart.animation),
    "TransitionEvent" in window || delete No.transitionend.transition);
  function Bs(e) {
    if (Ia[e]) return Ia[e];
    if (!No[e]) return e;
    var t = No[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in bd) return (Ia[e] = t[r]);
    return e;
  }
  var Xd = Bs("animationend"),
    Qd = Bs("animationiteration"),
    Gd = Bs("animationstart"),
    Kd = Bs("transitionend"),
    qd = new Map(),
    Zd =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function di(e, t) {
    qd.set(e, t), u(t, [e]);
  }
  for (var Fa = 0; Fa < Zd.length; Fa++) {
    var Ba = Zd[Fa],
      e_ = Ba.toLowerCase(),
      t_ = Ba[0].toUpperCase() + Ba.slice(1);
    di(e_, "on" + t_);
  }
  di(Xd, "onAnimationEnd"),
    di(Qd, "onAnimationIteration"),
    di(Gd, "onAnimationStart"),
    di("dblclick", "onDoubleClick"),
    di("focusin", "onFocus"),
    di("focusout", "onBlur"),
    di(Kd, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    u(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    u(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    u(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    u(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ol =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    n_ = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Ol)
    );
  function Jd(e, t, r) {
    var s = e.type || "unknown-event";
    (e.currentTarget = r), Ye(s, t, void 0, e), (e.currentTarget = null);
  }
  function ep(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var s = e[r],
        a = s.event;
      s = s.listeners;
      e: {
        var p = void 0;
        if (t)
          for (var m = s.length - 1; 0 <= m; m--) {
            var w = s[m],
              C = w.instance,
              z = w.currentTarget;
            if (((w = w.listener), C !== p && a.isPropagationStopped()))
              break e;
            Jd(a, w, z), (p = C);
          }
        else
          for (m = 0; m < s.length; m++) {
            if (
              ((w = s[m]),
              (C = w.instance),
              (z = w.currentTarget),
              (w = w.listener),
              C !== p && a.isPropagationStopped())
            )
              break e;
            Jd(a, w, z), (p = C);
          }
      }
    }
    if (Oe) throw ((e = Ke), (Oe = !1), (Ke = null), e);
  }
  function qe(e, t) {
    var r = t[Xa];
    r === void 0 && (r = t[Xa] = new Set());
    var s = e + "__bubble";
    r.has(s) || (tp(t, e, 2, !1), r.add(s));
  }
  function Ua(e, t, r) {
    var s = 0;
    t && (s |= 4), tp(r, e, s, t);
  }
  var Us = "_reactListening" + Math.random().toString(36).slice(2);
  function Nl(e) {
    if (!e[Us]) {
      (e[Us] = !0),
        o.forEach(function (r) {
          r !== "selectionchange" && (n_.has(r) || Ua(r, !1, e), Ua(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Us] || ((t[Us] = !0), Ua("selectionchange", !1, t));
    }
  }
  function tp(e, t, r, s) {
    switch (Cd(t)) {
      case 1:
        var a = gg;
        break;
      case 4:
        a = _g;
        break;
      default:
        a = ka;
    }
    (r = a.bind(null, t, r, e)),
      (a = void 0),
      !q ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (a = !0),
      s
        ? a !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: a })
          : e.addEventListener(t, r, !0)
        : a !== void 0
        ? e.addEventListener(t, r, { passive: a })
        : e.addEventListener(t, r, !1);
  }
  function Va(e, t, r, s, a) {
    var p = s;
    if (!(t & 1) && !(t & 2) && s !== null)
      e: for (;;) {
        if (s === null) return;
        var m = s.tag;
        if (m === 3 || m === 4) {
          var w = s.stateNode.containerInfo;
          if (w === a || (w.nodeType === 8 && w.parentNode === a)) break;
          if (m === 4)
            for (m = s.return; m !== null; ) {
              var C = m.tag;
              if (
                (C === 3 || C === 4) &&
                ((C = m.stateNode.containerInfo),
                C === a || (C.nodeType === 8 && C.parentNode === a))
              )
                return;
              m = m.return;
            }
          for (; w !== null; ) {
            if (((m = Wi(w)), m === null)) return;
            if (((C = m.tag), C === 5 || C === 6)) {
              s = p = m;
              continue e;
            }
            w = w.parentNode;
          }
        }
        s = s.return;
      }
    ue(function () {
      var z = p,
        H = Ee(r),
        Q = [];
      e: {
        var Y = qd.get(e);
        if (Y !== void 0) {
          var J = Ea,
            re = e;
          switch (e) {
            case "keypress":
              if (Ls(r) === 0) break e;
            case "keydown":
            case "keyup":
              J = zg;
              break;
            case "focusin":
              (re = "focus"), (J = Na);
              break;
            case "focusout":
              (re = "blur"), (J = Na);
              break;
            case "beforeblur":
            case "afterblur":
              J = Na;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              J = Pd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = xg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = jg;
              break;
            case Xd:
            case Qd:
            case Gd:
              J = kg;
              break;
            case Kd:
              J = Ig;
              break;
            case "scroll":
              J = vg;
              break;
            case "wheel":
              J = Bg;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = Tg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = Nd;
          }
          var ie = (t & 4) !== 0,
            mt = !ie && e === "scroll",
            N = ie ? (Y !== null ? Y + "Capture" : null) : Y;
          ie = [];
          for (var P = z, R; P !== null; ) {
            R = P;
            var G = R.stateNode;
            if (
              (R.tag === 5 &&
                G !== null &&
                ((R = G),
                N !== null &&
                  ((G = De(P, N)), G != null && ie.push(Rl(P, G, R)))),
              mt)
            )
              break;
            P = P.return;
          }
          0 < ie.length &&
            ((Y = new J(Y, re, null, r, H)),
            Q.push({ event: Y, listeners: ie }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((Y = e === "mouseover" || e === "pointerover"),
            (J = e === "mouseout" || e === "pointerout"),
            Y &&
              r !== hr &&
              (re = r.relatedTarget || r.fromElement) &&
              (Wi(re) || re[Yr]))
          )
            break e;
          if (
            (J || Y) &&
            ((Y =
              H.window === H
                ? H
                : (Y = H.ownerDocument)
                ? Y.defaultView || Y.parentWindow
                : window),
            J
              ? ((re = r.relatedTarget || r.toElement),
                (J = z),
                (re = re ? Wi(re) : null),
                re !== null &&
                  ((mt = je(re)),
                  re !== mt || (re.tag !== 5 && re.tag !== 6)) &&
                  (re = null))
              : ((J = null), (re = z)),
            J !== re)
          ) {
            if (
              ((ie = Pd),
              (G = "onMouseLeave"),
              (N = "onMouseEnter"),
              (P = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ie = Nd),
                (G = "onPointerLeave"),
                (N = "onPointerEnter"),
                (P = "pointer")),
              (mt = J == null ? Y : zo(J)),
              (R = re == null ? Y : zo(re)),
              (Y = new ie(G, P + "leave", J, r, H)),
              (Y.target = mt),
              (Y.relatedTarget = R),
              (G = null),
              Wi(H) === z &&
                ((ie = new ie(N, P + "enter", re, r, H)),
                (ie.target = R),
                (ie.relatedTarget = mt),
                (G = ie)),
              (mt = G),
              J && re)
            )
              t: {
                for (ie = J, N = re, P = 0, R = ie; R; R = Ro(R)) P++;
                for (R = 0, G = N; G; G = Ro(G)) R++;
                for (; 0 < P - R; ) (ie = Ro(ie)), P--;
                for (; 0 < R - P; ) (N = Ro(N)), R--;
                for (; P--; ) {
                  if (ie === N || (N !== null && ie === N.alternate)) break t;
                  (ie = Ro(ie)), (N = Ro(N));
                }
                ie = null;
              }
            else ie = null;
            J !== null && np(Q, Y, J, ie, !1),
              re !== null && mt !== null && np(Q, mt, re, ie, !0);
          }
        }
        e: {
          if (
            ((Y = z ? zo(z) : window),
            (J = Y.nodeName && Y.nodeName.toLowerCase()),
            J === "select" || (J === "input" && Y.type === "file"))
          )
            var le = bg;
          else if (jd(Y))
            if (Id) le = Kg;
            else {
              le = Qg;
              var ae = Xg;
            }
          else
            (J = Y.nodeName) &&
              J.toLowerCase() === "input" &&
              (Y.type === "checkbox" || Y.type === "radio") &&
              (le = Gg);
          if (le && (le = le(e, z))) {
            Ad(Q, le, r, H);
            break e;
          }
          ae && ae(e, Y, z),
            e === "focusout" &&
              (ae = Y._wrapperState) &&
              ae.controlled &&
              Y.type === "number" &&
              Ln(Y, "number", Y.value);
        }
        switch (((ae = z ? zo(z) : window), e)) {
          case "focusin":
            (jd(ae) || ae.contentEditable === "true") &&
              ((Oo = ae), (ja = z), (Pl = null));
            break;
          case "focusout":
            Pl = ja = Oo = null;
            break;
          case "mousedown":
            Aa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Aa = !1), Hd(Q, r, H);
            break;
          case "selectionchange":
            if (Jg) break;
          case "keydown":
          case "keyup":
            Hd(Q, r, H);
        }
        var ce;
        if (Ma)
          e: {
            switch (e) {
              case "compositionstart":
                var we = "onCompositionStart";
                break e;
              case "compositionend":
                we = "onCompositionEnd";
                break e;
              case "compositionupdate":
                we = "onCompositionUpdate";
                break e;
            }
            we = void 0;
          }
        else
          Po
            ? Dd(e, r) && (we = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (we = "onCompositionStart");
        we &&
          (Rd &&
            r.locale !== "ko" &&
            (Po || we !== "onCompositionStart"
              ? we === "onCompositionEnd" && Po && (ce = Td())
              : ((fi = H),
                (Ta = "value" in fi ? fi.value : fi.textContent),
                (Po = !0))),
          (ae = Vs(z, we)),
          0 < ae.length &&
            ((we = new Od(we, e, null, r, H)),
            Q.push({ event: we, listeners: ae }),
            ce
              ? (we.data = ce)
              : ((ce = Ld(r)), ce !== null && (we.data = ce)))),
          (ce = Vg ? $g(e, r) : Wg(e, r)) &&
            ((z = Vs(z, "onBeforeInput")),
            0 < z.length &&
              ((H = new Od("onBeforeInput", "beforeinput", null, r, H)),
              Q.push({ event: H, listeners: z }),
              (H.data = ce)));
      }
      ep(Q, t);
    });
  }
  function Rl(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Vs(e, t) {
    for (var r = t + "Capture", s = []; e !== null; ) {
      var a = e,
        p = a.stateNode;
      a.tag === 5 &&
        p !== null &&
        ((a = p),
        (p = De(e, r)),
        p != null && s.unshift(Rl(e, p, a)),
        (p = De(e, t)),
        p != null && s.push(Rl(e, p, a))),
        (e = e.return);
    }
    return s;
  }
  function Ro(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function np(e, t, r, s, a) {
    for (var p = t._reactName, m = []; r !== null && r !== s; ) {
      var w = r,
        C = w.alternate,
        z = w.stateNode;
      if (C !== null && C === s) break;
      w.tag === 5 &&
        z !== null &&
        ((w = z),
        a
          ? ((C = De(r, p)), C != null && m.unshift(Rl(r, C, w)))
          : a || ((C = De(r, p)), C != null && m.push(Rl(r, C, w)))),
        (r = r.return);
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var r_ = /\r\n?/g,
    i_ = /\u0000|\uFFFD/g;
  function rp(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        r_,
        `
`
      )
      .replace(i_, "");
  }
  function $s(e, t, r) {
    if (((t = rp(t)), rp(e) !== t && r)) throw Error(i(425));
  }
  function Ws() {}
  var $a = null,
    Wa = null;
  function Ya(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ha = typeof setTimeout == "function" ? setTimeout : void 0,
    o_ = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ip = typeof Promise == "function" ? Promise : void 0,
    l_ =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ip < "u"
        ? function (e) {
            return ip.resolve(null).then(e).catch(s_);
          }
        : Ha;
  function s_(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ba(e, t) {
    var r = t,
      s = 0;
    do {
      var a = r.nextSibling;
      if ((e.removeChild(r), a && a.nodeType === 8))
        if (((r = a.data), r === "/$")) {
          if (s === 0) {
            e.removeChild(a), xl(t);
            return;
          }
          s--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || s++;
      r = a;
    } while (r);
    xl(t);
  }
  function pi(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function op(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Mo = Math.random().toString(36).slice(2),
    Nr = "__reactFiber$" + Mo,
    Ml = "__reactProps$" + Mo,
    Yr = "__reactContainer$" + Mo,
    Xa = "__reactEvents$" + Mo,
    u_ = "__reactListeners$" + Mo,
    a_ = "__reactHandles$" + Mo;
  function Wi(e) {
    var t = e[Nr];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[Yr] || r[Nr])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = op(e); e !== null; ) {
            if ((r = e[Nr])) return r;
            e = op(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function zl(e) {
    return (
      (e = e[Nr] || e[Yr]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function zo(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Ys(e) {
    return e[Ml] || null;
  }
  var Qa = [],
    Do = -1;
  function hi(e) {
    return { current: e };
  }
  function Ze(e) {
    0 > Do || ((e.current = Qa[Do]), (Qa[Do] = null), Do--);
  }
  function be(e, t) {
    Do++, (Qa[Do] = e.current), (e.current = t);
  }
  var mi = {},
    bt = hi(mi),
    wn = hi(!1),
    Yi = mi;
  function Lo(e, t) {
    var r = e.type.contextTypes;
    if (!r) return mi;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
      return s.__reactInternalMemoizedMaskedChildContext;
    var a = {},
      p;
    for (p in r) a[p] = t[p];
    return (
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      a
    );
  }
  function Sn(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Hs() {
    Ze(wn), Ze(bt);
  }
  function lp(e, t, r) {
    if (bt.current !== mi) throw Error(i(168));
    be(bt, t), be(wn, r);
  }
  function sp(e, t, r) {
    var s = e.stateNode;
    if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
      return r;
    s = s.getChildContext();
    for (var a in s) if (!(a in t)) throw Error(i(108, xe(e) || "Unknown", a));
    return k({}, r, s);
  }
  function bs(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        mi),
      (Yi = bt.current),
      be(bt, e),
      be(wn, wn.current),
      !0
    );
  }
  function up(e, t, r) {
    var s = e.stateNode;
    if (!s) throw Error(i(169));
    r
      ? ((e = sp(e, t, Yi)),
        (s.__reactInternalMemoizedMergedChildContext = e),
        Ze(wn),
        Ze(bt),
        be(bt, e))
      : Ze(wn),
      be(wn, r);
  }
  var Hr = null,
    Xs = !1,
    Ga = !1;
  function ap(e) {
    Hr === null ? (Hr = [e]) : Hr.push(e);
  }
  function c_(e) {
    (Xs = !0), ap(e);
  }
  function gi() {
    if (!Ga && Hr !== null) {
      Ga = !0;
      var e = 0,
        t = Ve;
      try {
        var r = Hr;
        for (Ve = 1; e < r.length; e++) {
          var s = r[e];
          do s = s(!0);
          while (s !== null);
        }
        (Hr = null), (Xs = !1);
      } catch (a) {
        throw (Hr !== null && (Hr = Hr.slice(e + 1)), xt(xn, gi), a);
      } finally {
        (Ve = t), (Ga = !1);
      }
    }
    return null;
  }
  var jo = [],
    Ao = 0,
    Qs = null,
    Gs = 0,
    Zn = [],
    Jn = 0,
    Hi = null,
    br = 1,
    Xr = "";
  function bi(e, t) {
    (jo[Ao++] = Gs), (jo[Ao++] = Qs), (Qs = e), (Gs = t);
  }
  function cp(e, t, r) {
    (Zn[Jn++] = br), (Zn[Jn++] = Xr), (Zn[Jn++] = Hi), (Hi = e);
    var s = br;
    e = Xr;
    var a = 32 - gr(s) - 1;
    (s &= ~(1 << a)), (r += 1);
    var p = 32 - gr(t) + a;
    if (30 < p) {
      var m = a - (a % 5);
      (p = (s & ((1 << m) - 1)).toString(32)),
        (s >>= m),
        (a -= m),
        (br = (1 << (32 - gr(t) + a)) | (r << a) | s),
        (Xr = p + e);
    } else (br = (1 << p) | (r << a) | s), (Xr = e);
  }
  function Ka(e) {
    e.return !== null && (bi(e, 1), cp(e, 1, 0));
  }
  function qa(e) {
    for (; e === Qs; )
      (Qs = jo[--Ao]), (jo[Ao] = null), (Gs = jo[--Ao]), (jo[Ao] = null);
    for (; e === Hi; )
      (Hi = Zn[--Jn]),
        (Zn[Jn] = null),
        (Xr = Zn[--Jn]),
        (Zn[Jn] = null),
        (br = Zn[--Jn]),
        (Zn[Jn] = null);
  }
  var Fn = null,
    Bn = null,
    tt = !1,
    vr = null;
  function fp(e, t) {
    var r = rr(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function dp(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Fn = e), (Bn = pi(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Fn = e), (Bn = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = Hi !== null ? { id: br, overflow: Xr } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = rr(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (Fn = e),
              (Bn = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Za(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ja(e) {
    if (tt) {
      var t = Bn;
      if (t) {
        var r = t;
        if (!dp(e, t)) {
          if (Za(e)) throw Error(i(418));
          t = pi(r.nextSibling);
          var s = Fn;
          t && dp(e, t)
            ? fp(s, r)
            : ((e.flags = (e.flags & -4097) | 2), (tt = !1), (Fn = e));
        }
      } else {
        if (Za(e)) throw Error(i(418));
        (e.flags = (e.flags & -4097) | 2), (tt = !1), (Fn = e);
      }
    }
  }
  function pp(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Fn = e;
  }
  function Ks(e) {
    if (e !== Fn) return !1;
    if (!tt) return pp(e), (tt = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Ya(e.type, e.memoizedProps))),
      t && (t = Bn))
    ) {
      if (Za(e)) throw (hp(), Error(i(418)));
      for (; t; ) fp(e, t), (t = pi(t.nextSibling));
    }
    if ((pp(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                Bn = pi(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Bn = null;
      }
    } else Bn = Fn ? pi(e.stateNode.nextSibling) : null;
    return !0;
  }
  function hp() {
    for (var e = Bn; e; ) e = pi(e.nextSibling);
  }
  function Io() {
    (Bn = Fn = null), (tt = !1);
  }
  function ec(e) {
    vr === null ? (vr = [e]) : vr.push(e);
  }
  var f_ = D.ReactCurrentBatchConfig;
  function Dl(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(i(309));
          var s = r.stateNode;
        }
        if (!s) throw Error(i(147, e));
        var a = s,
          p = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === p
          ? t.ref
          : ((t = function (m) {
              var w = a.refs;
              m === null ? delete w[p] : (w[p] = m);
            }),
            (t._stringRef = p),
            t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!r._owner) throw Error(i(290, e));
    }
    return e;
  }
  function qs(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        i(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function mp(e) {
    var t = e._init;
    return t(e._payload);
  }
  function gp(e) {
    function t(N, P) {
      if (e) {
        var R = N.deletions;
        R === null ? ((N.deletions = [P]), (N.flags |= 16)) : R.push(P);
      }
    }
    function r(N, P) {
      if (!e) return null;
      for (; P !== null; ) t(N, P), (P = P.sibling);
      return null;
    }
    function s(N, P) {
      for (N = new Map(); P !== null; )
        P.key !== null ? N.set(P.key, P) : N.set(P.index, P), (P = P.sibling);
      return N;
    }
    function a(N, P) {
      return (N = Ci(N, P)), (N.index = 0), (N.sibling = null), N;
    }
    function p(N, P, R) {
      return (
        (N.index = R),
        e
          ? ((R = N.alternate),
            R !== null
              ? ((R = R.index), R < P ? ((N.flags |= 2), P) : R)
              : ((N.flags |= 2), P))
          : ((N.flags |= 1048576), P)
      );
    }
    function m(N) {
      return e && N.alternate === null && (N.flags |= 2), N;
    }
    function w(N, P, R, G) {
      return P === null || P.tag !== 6
        ? ((P = Hc(R, N.mode, G)), (P.return = N), P)
        : ((P = a(P, R)), (P.return = N), P);
    }
    function C(N, P, R, G) {
      var le = R.type;
      return le === L
        ? H(N, P, R.props.children, G, R.key)
        : P !== null &&
          (P.elementType === le ||
            (typeof le == "object" &&
              le !== null &&
              le.$$typeof === fe &&
              mp(le) === P.type))
        ? ((G = a(P, R.props)), (G.ref = Dl(N, P, R)), (G.return = N), G)
        : ((G = wu(R.type, R.key, R.props, null, N.mode, G)),
          (G.ref = Dl(N, P, R)),
          (G.return = N),
          G);
    }
    function z(N, P, R, G) {
      return P === null ||
        P.tag !== 4 ||
        P.stateNode.containerInfo !== R.containerInfo ||
        P.stateNode.implementation !== R.implementation
        ? ((P = bc(R, N.mode, G)), (P.return = N), P)
        : ((P = a(P, R.children || [])), (P.return = N), P);
    }
    function H(N, P, R, G, le) {
      return P === null || P.tag !== 7
        ? ((P = eo(R, N.mode, G, le)), (P.return = N), P)
        : ((P = a(P, R)), (P.return = N), P);
    }
    function Q(N, P, R) {
      if ((typeof P == "string" && P !== "") || typeof P == "number")
        return (P = Hc("" + P, N.mode, R)), (P.return = N), P;
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case F:
            return (
              (R = wu(P.type, P.key, P.props, null, N.mode, R)),
              (R.ref = Dl(N, null, P)),
              (R.return = N),
              R
            );
          case V:
            return (P = bc(P, N.mode, R)), (P.return = N), P;
          case fe:
            var G = P._init;
            return Q(N, G(P._payload), R);
        }
        if (_n(P) || Z(P))
          return (P = eo(P, N.mode, R, null)), (P.return = N), P;
        qs(N, P);
      }
      return null;
    }
    function Y(N, P, R, G) {
      var le = P !== null ? P.key : null;
      if ((typeof R == "string" && R !== "") || typeof R == "number")
        return le !== null ? null : w(N, P, "" + R, G);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case F:
            return R.key === le ? C(N, P, R, G) : null;
          case V:
            return R.key === le ? z(N, P, R, G) : null;
          case fe:
            return (le = R._init), Y(N, P, le(R._payload), G);
        }
        if (_n(R) || Z(R)) return le !== null ? null : H(N, P, R, G, null);
        qs(N, R);
      }
      return null;
    }
    function J(N, P, R, G, le) {
      if ((typeof G == "string" && G !== "") || typeof G == "number")
        return (N = N.get(R) || null), w(P, N, "" + G, le);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case F:
            return (
              (N = N.get(G.key === null ? R : G.key) || null), C(P, N, G, le)
            );
          case V:
            return (
              (N = N.get(G.key === null ? R : G.key) || null), z(P, N, G, le)
            );
          case fe:
            var ae = G._init;
            return J(N, P, R, ae(G._payload), le);
        }
        if (_n(G) || Z(G)) return (N = N.get(R) || null), H(P, N, G, le, null);
        qs(P, G);
      }
      return null;
    }
    function re(N, P, R, G) {
      for (
        var le = null, ae = null, ce = P, we = (P = 0), Lt = null;
        ce !== null && we < R.length;
        we++
      ) {
        ce.index > we ? ((Lt = ce), (ce = null)) : (Lt = ce.sibling);
        var Ue = Y(N, ce, R[we], G);
        if (Ue === null) {
          ce === null && (ce = Lt);
          break;
        }
        e && ce && Ue.alternate === null && t(N, ce),
          (P = p(Ue, P, we)),
          ae === null ? (le = Ue) : (ae.sibling = Ue),
          (ae = Ue),
          (ce = Lt);
      }
      if (we === R.length) return r(N, ce), tt && bi(N, we), le;
      if (ce === null) {
        for (; we < R.length; we++)
          (ce = Q(N, R[we], G)),
            ce !== null &&
              ((P = p(ce, P, we)),
              ae === null ? (le = ce) : (ae.sibling = ce),
              (ae = ce));
        return tt && bi(N, we), le;
      }
      for (ce = s(N, ce); we < R.length; we++)
        (Lt = J(ce, N, we, R[we], G)),
          Lt !== null &&
            (e &&
              Lt.alternate !== null &&
              ce.delete(Lt.key === null ? we : Lt.key),
            (P = p(Lt, P, we)),
            ae === null ? (le = Lt) : (ae.sibling = Lt),
            (ae = Lt));
      return (
        e &&
          ce.forEach(function (Ti) {
            return t(N, Ti);
          }),
        tt && bi(N, we),
        le
      );
    }
    function ie(N, P, R, G) {
      var le = Z(R);
      if (typeof le != "function") throw Error(i(150));
      if (((R = le.call(R)), R == null)) throw Error(i(151));
      for (
        var ae = (le = null), ce = P, we = (P = 0), Lt = null, Ue = R.next();
        ce !== null && !Ue.done;
        we++, Ue = R.next()
      ) {
        ce.index > we ? ((Lt = ce), (ce = null)) : (Lt = ce.sibling);
        var Ti = Y(N, ce, Ue.value, G);
        if (Ti === null) {
          ce === null && (ce = Lt);
          break;
        }
        e && ce && Ti.alternate === null && t(N, ce),
          (P = p(Ti, P, we)),
          ae === null ? (le = Ti) : (ae.sibling = Ti),
          (ae = Ti),
          (ce = Lt);
      }
      if (Ue.done) return r(N, ce), tt && bi(N, we), le;
      if (ce === null) {
        for (; !Ue.done; we++, Ue = R.next())
          (Ue = Q(N, Ue.value, G)),
            Ue !== null &&
              ((P = p(Ue, P, we)),
              ae === null ? (le = Ue) : (ae.sibling = Ue),
              (ae = Ue));
        return tt && bi(N, we), le;
      }
      for (ce = s(N, ce); !Ue.done; we++, Ue = R.next())
        (Ue = J(ce, N, we, Ue.value, G)),
          Ue !== null &&
            (e &&
              Ue.alternate !== null &&
              ce.delete(Ue.key === null ? we : Ue.key),
            (P = p(Ue, P, we)),
            ae === null ? (le = Ue) : (ae.sibling = Ue),
            (ae = Ue));
      return (
        e &&
          ce.forEach(function (Y_) {
            return t(N, Y_);
          }),
        tt && bi(N, we),
        le
      );
    }
    function mt(N, P, R, G) {
      if (
        (typeof R == "object" &&
          R !== null &&
          R.type === L &&
          R.key === null &&
          (R = R.props.children),
        typeof R == "object" && R !== null)
      ) {
        switch (R.$$typeof) {
          case F:
            e: {
              for (var le = R.key, ae = P; ae !== null; ) {
                if (ae.key === le) {
                  if (((le = R.type), le === L)) {
                    if (ae.tag === 7) {
                      r(N, ae.sibling),
                        (P = a(ae, R.props.children)),
                        (P.return = N),
                        (N = P);
                      break e;
                    }
                  } else if (
                    ae.elementType === le ||
                    (typeof le == "object" &&
                      le !== null &&
                      le.$$typeof === fe &&
                      mp(le) === ae.type)
                  ) {
                    r(N, ae.sibling),
                      (P = a(ae, R.props)),
                      (P.ref = Dl(N, ae, R)),
                      (P.return = N),
                      (N = P);
                    break e;
                  }
                  r(N, ae);
                  break;
                } else t(N, ae);
                ae = ae.sibling;
              }
              R.type === L
                ? ((P = eo(R.props.children, N.mode, G, R.key)),
                  (P.return = N),
                  (N = P))
                : ((G = wu(R.type, R.key, R.props, null, N.mode, G)),
                  (G.ref = Dl(N, P, R)),
                  (G.return = N),
                  (N = G));
            }
            return m(N);
          case V:
            e: {
              for (ae = R.key; P !== null; ) {
                if (P.key === ae)
                  if (
                    P.tag === 4 &&
                    P.stateNode.containerInfo === R.containerInfo &&
                    P.stateNode.implementation === R.implementation
                  ) {
                    r(N, P.sibling),
                      (P = a(P, R.children || [])),
                      (P.return = N),
                      (N = P);
                    break e;
                  } else {
                    r(N, P);
                    break;
                  }
                else t(N, P);
                P = P.sibling;
              }
              (P = bc(R, N.mode, G)), (P.return = N), (N = P);
            }
            return m(N);
          case fe:
            return (ae = R._init), mt(N, P, ae(R._payload), G);
        }
        if (_n(R)) return re(N, P, R, G);
        if (Z(R)) return ie(N, P, R, G);
        qs(N, R);
      }
      return (typeof R == "string" && R !== "") || typeof R == "number"
        ? ((R = "" + R),
          P !== null && P.tag === 6
            ? (r(N, P.sibling), (P = a(P, R)), (P.return = N), (N = P))
            : (r(N, P), (P = Hc(R, N.mode, G)), (P.return = N), (N = P)),
          m(N))
        : r(N, P);
    }
    return mt;
  }
  var Fo = gp(!0),
    _p = gp(!1),
    Zs = hi(null),
    Js = null,
    Bo = null,
    tc = null;
  function nc() {
    tc = Bo = Js = null;
  }
  function rc(e) {
    var t = Zs.current;
    Ze(Zs), (e._currentValue = t);
  }
  function ic(e, t, r) {
    for (; e !== null; ) {
      var s = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
          : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function Uo(e, t) {
    (Js = e),
      (tc = Bo = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (kn = !0), (e.firstContext = null));
  }
  function er(e) {
    var t = e._currentValue;
    if (tc !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Bo === null)) {
        if (Js === null) throw Error(i(308));
        (Bo = e), (Js.dependencies = { lanes: 0, firstContext: e });
      } else Bo = Bo.next = e;
    return t;
  }
  var Xi = null;
  function oc(e) {
    Xi === null ? (Xi = [e]) : Xi.push(e);
  }
  function vp(e, t, r, s) {
    var a = t.interleaved;
    return (
      a === null ? ((r.next = r), oc(t)) : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      Qr(e, s)
    );
  }
  function Qr(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var _i = !1;
  function lc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function yp(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Gr(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function vi(e, t, r) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), Fe & 2)) {
      var a = s.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (s.pending = t),
        Qr(e, r)
      );
    }
    return (
      (a = s.interleaved),
      a === null ? ((t.next = t), oc(s)) : ((t.next = a.next), (a.next = t)),
      (s.interleaved = t),
      Qr(e, r)
    );
  }
  function eu(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var s = t.lanes;
      (s &= e.pendingLanes), (r |= s), (t.lanes = r), xa(e, r);
    }
  }
  function xp(e, t) {
    var r = e.updateQueue,
      s = e.alternate;
    if (s !== null && ((s = s.updateQueue), r === s)) {
      var a = null,
        p = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var m = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          p === null ? (a = p = m) : (p = p.next = m), (r = r.next);
        } while (r !== null);
        p === null ? (a = p = t) : (p = p.next = t);
      } else a = p = t;
      (r = {
        baseState: s.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: p,
        shared: s.shared,
        effects: s.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function tu(e, t, r, s) {
    var a = e.updateQueue;
    _i = !1;
    var p = a.firstBaseUpdate,
      m = a.lastBaseUpdate,
      w = a.shared.pending;
    if (w !== null) {
      a.shared.pending = null;
      var C = w,
        z = C.next;
      (C.next = null), m === null ? (p = z) : (m.next = z), (m = C);
      var H = e.alternate;
      H !== null &&
        ((H = H.updateQueue),
        (w = H.lastBaseUpdate),
        w !== m &&
          (w === null ? (H.firstBaseUpdate = z) : (w.next = z),
          (H.lastBaseUpdate = C)));
    }
    if (p !== null) {
      var Q = a.baseState;
      (m = 0), (H = z = C = null), (w = p);
      do {
        var Y = w.lane,
          J = w.eventTime;
        if ((s & Y) === Y) {
          H !== null &&
            (H = H.next =
              {
                eventTime: J,
                lane: 0,
                tag: w.tag,
                payload: w.payload,
                callback: w.callback,
                next: null,
              });
          e: {
            var re = e,
              ie = w;
            switch (((Y = t), (J = r), ie.tag)) {
              case 1:
                if (((re = ie.payload), typeof re == "function")) {
                  Q = re.call(J, Q, Y);
                  break e;
                }
                Q = re;
                break e;
              case 3:
                re.flags = (re.flags & -65537) | 128;
              case 0:
                if (
                  ((re = ie.payload),
                  (Y = typeof re == "function" ? re.call(J, Q, Y) : re),
                  Y == null)
                )
                  break e;
                Q = k({}, Q, Y);
                break e;
              case 2:
                _i = !0;
            }
          }
          w.callback !== null &&
            w.lane !== 0 &&
            ((e.flags |= 64),
            (Y = a.effects),
            Y === null ? (a.effects = [w]) : Y.push(w));
        } else
          (J = {
            eventTime: J,
            lane: Y,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null,
          }),
            H === null ? ((z = H = J), (C = Q)) : (H = H.next = J),
            (m |= Y);
        if (((w = w.next), w === null)) {
          if (((w = a.shared.pending), w === null)) break;
          (Y = w),
            (w = Y.next),
            (Y.next = null),
            (a.lastBaseUpdate = Y),
            (a.shared.pending = null);
        }
      } while (!0);
      if (
        (H === null && (C = Q),
        (a.baseState = C),
        (a.firstBaseUpdate = z),
        (a.lastBaseUpdate = H),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do (m |= a.lane), (a = a.next);
        while (a !== t);
      } else p === null && (a.shared.lanes = 0);
      (Ki |= m), (e.lanes = m), (e.memoizedState = Q);
    }
  }
  function wp(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var s = e[t],
          a = s.callback;
        if (a !== null) {
          if (((s.callback = null), (s = r), typeof a != "function"))
            throw Error(i(191, a));
          a.call(s);
        }
      }
  }
  var Ll = {},
    Rr = hi(Ll),
    jl = hi(Ll),
    Al = hi(Ll);
  function Qi(e) {
    if (e === Ll) throw Error(i(174));
    return e;
  }
  function sc(e, t) {
    switch ((be(Al, t), be(jl, e), be(Rr, Ll), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ge(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ge(t, e));
    }
    Ze(Rr), be(Rr, t);
  }
  function Vo() {
    Ze(Rr), Ze(jl), Ze(Al);
  }
  function Sp(e) {
    Qi(Al.current);
    var t = Qi(Rr.current),
      r = Ge(t, e.type);
    t !== r && (be(jl, e), be(Rr, r));
  }
  function uc(e) {
    jl.current === e && (Ze(Rr), Ze(jl));
  }
  var it = hi(0);
  function nu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ac = [];
  function cc() {
    for (var e = 0; e < ac.length; e++)
      ac[e]._workInProgressVersionPrimary = null;
    ac.length = 0;
  }
  var ru = D.ReactCurrentDispatcher,
    fc = D.ReactCurrentBatchConfig,
    Gi = 0,
    ot = null,
    Tt = null,
    zt = null,
    iu = !1,
    Il = !1,
    Fl = 0,
    d_ = 0;
  function Xt() {
    throw Error(i(321));
  }
  function dc(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!_r(e[r], t[r])) return !1;
    return !0;
  }
  function pc(e, t, r, s, a, p) {
    if (
      ((Gi = p),
      (ot = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ru.current = e === null || e.memoizedState === null ? g_ : __),
      (e = r(s, a)),
      Il)
    ) {
      p = 0;
      do {
        if (((Il = !1), (Fl = 0), 25 <= p)) throw Error(i(301));
        (p += 1),
          (zt = Tt = null),
          (t.updateQueue = null),
          (ru.current = v_),
          (e = r(s, a));
      } while (Il);
    }
    if (
      ((ru.current = su),
      (t = Tt !== null && Tt.next !== null),
      (Gi = 0),
      (zt = Tt = ot = null),
      (iu = !1),
      t)
    )
      throw Error(i(300));
    return e;
  }
  function hc() {
    var e = Fl !== 0;
    return (Fl = 0), e;
  }
  function Mr() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return zt === null ? (ot.memoizedState = zt = e) : (zt = zt.next = e), zt;
  }
  function tr() {
    if (Tt === null) {
      var e = ot.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Tt.next;
    var t = zt === null ? ot.memoizedState : zt.next;
    if (t !== null) (zt = t), (Tt = e);
    else {
      if (e === null) throw Error(i(310));
      (Tt = e),
        (e = {
          memoizedState: Tt.memoizedState,
          baseState: Tt.baseState,
          baseQueue: Tt.baseQueue,
          queue: Tt.queue,
          next: null,
        }),
        zt === null ? (ot.memoizedState = zt = e) : (zt = zt.next = e);
    }
    return zt;
  }
  function Bl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function mc(e) {
    var t = tr(),
      r = t.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var s = Tt,
      a = s.baseQueue,
      p = r.pending;
    if (p !== null) {
      if (a !== null) {
        var m = a.next;
        (a.next = p.next), (p.next = m);
      }
      (s.baseQueue = a = p), (r.pending = null);
    }
    if (a !== null) {
      (p = a.next), (s = s.baseState);
      var w = (m = null),
        C = null,
        z = p;
      do {
        var H = z.lane;
        if ((Gi & H) === H)
          C !== null &&
            (C = C.next =
              {
                lane: 0,
                action: z.action,
                hasEagerState: z.hasEagerState,
                eagerState: z.eagerState,
                next: null,
              }),
            (s = z.hasEagerState ? z.eagerState : e(s, z.action));
        else {
          var Q = {
            lane: H,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null,
          };
          C === null ? ((w = C = Q), (m = s)) : (C = C.next = Q),
            (ot.lanes |= H),
            (Ki |= H);
        }
        z = z.next;
      } while (z !== null && z !== p);
      C === null ? (m = s) : (C.next = w),
        _r(s, t.memoizedState) || (kn = !0),
        (t.memoizedState = s),
        (t.baseState = m),
        (t.baseQueue = C),
        (r.lastRenderedState = s);
    }
    if (((e = r.interleaved), e !== null)) {
      a = e;
      do (p = a.lane), (ot.lanes |= p), (Ki |= p), (a = a.next);
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function gc(e) {
    var t = tr(),
      r = t.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var s = r.dispatch,
      a = r.pending,
      p = t.memoizedState;
    if (a !== null) {
      r.pending = null;
      var m = (a = a.next);
      do (p = e(p, m.action)), (m = m.next);
      while (m !== a);
      _r(p, t.memoizedState) || (kn = !0),
        (t.memoizedState = p),
        t.baseQueue === null && (t.baseState = p),
        (r.lastRenderedState = p);
    }
    return [p, s];
  }
  function kp() {}
  function Cp(e, t) {
    var r = ot,
      s = tr(),
      a = t(),
      p = !_r(s.memoizedState, a);
    if (
      (p && ((s.memoizedState = a), (kn = !0)),
      (s = s.queue),
      _c(Pp.bind(null, r, s, e), [e]),
      s.getSnapshot !== t || p || (zt !== null && zt.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        Ul(9, Ep.bind(null, r, s, a, t), void 0, null),
        Dt === null)
      )
        throw Error(i(349));
      Gi & 30 || Tp(r, t, a);
    }
    return a;
  }
  function Tp(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = ot.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ot.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function Ep(e, t, r, s) {
    (t.value = r), (t.getSnapshot = s), Op(t) && Np(e);
  }
  function Pp(e, t, r) {
    return r(function () {
      Op(t) && Np(e);
    });
  }
  function Op(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !_r(e, r);
    } catch {
      return !0;
    }
  }
  function Np(e) {
    var t = Qr(e, 1);
    t !== null && Sr(t, e, 1, -1);
  }
  function Rp(e) {
    var t = Mr();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bl,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = m_.bind(null, ot, e)),
      [t.memoizedState, e]
    );
  }
  function Ul(e, t, r, s) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: s, next: null }),
      (t = ot.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ot.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((s = r.next), (r.next = e), (e.next = s), (t.lastEffect = e))),
      e
    );
  }
  function Mp() {
    return tr().memoizedState;
  }
  function ou(e, t, r, s) {
    var a = Mr();
    (ot.flags |= e),
      (a.memoizedState = Ul(1 | t, r, void 0, s === void 0 ? null : s));
  }
  function lu(e, t, r, s) {
    var a = tr();
    s = s === void 0 ? null : s;
    var p = void 0;
    if (Tt !== null) {
      var m = Tt.memoizedState;
      if (((p = m.destroy), s !== null && dc(s, m.deps))) {
        a.memoizedState = Ul(t, r, p, s);
        return;
      }
    }
    (ot.flags |= e), (a.memoizedState = Ul(1 | t, r, p, s));
  }
  function zp(e, t) {
    return ou(8390656, 8, e, t);
  }
  function _c(e, t) {
    return lu(2048, 8, e, t);
  }
  function Dp(e, t) {
    return lu(4, 2, e, t);
  }
  function Lp(e, t) {
    return lu(4, 4, e, t);
  }
  function jp(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ap(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), lu(4, 4, jp.bind(null, t, e), r)
    );
  }
  function vc() {}
  function Ip(e, t) {
    var r = tr();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && dc(t, s[1])
      ? s[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function Fp(e, t) {
    var r = tr();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && dc(t, s[1])
      ? s[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function Bp(e, t, r) {
    return Gi & 21
      ? (_r(r, t) ||
          ((r = md()), (ot.lanes |= r), (Ki |= r), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (kn = !0)), (e.memoizedState = r));
  }
  function p_(e, t) {
    var r = Ve;
    (Ve = r !== 0 && 4 > r ? r : 4), e(!0);
    var s = fc.transition;
    fc.transition = {};
    try {
      e(!1), t();
    } finally {
      (Ve = r), (fc.transition = s);
    }
  }
  function Up() {
    return tr().memoizedState;
  }
  function h_(e, t, r) {
    var s = Si(e);
    if (
      ((r = {
        lane: s,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Vp(e))
    )
      $p(t, r);
    else if (((r = vp(e, t, r, s)), r !== null)) {
      var a = sn();
      Sr(r, e, s, a), Wp(r, t, s);
    }
  }
  function m_(e, t, r) {
    var s = Si(e),
      a = {
        lane: s,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Vp(e)) $p(t, a);
    else {
      var p = e.alternate;
      if (
        e.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = t.lastRenderedReducer), p !== null)
      )
        try {
          var m = t.lastRenderedState,
            w = p(m, r);
          if (((a.hasEagerState = !0), (a.eagerState = w), _r(w, m))) {
            var C = t.interleaved;
            C === null
              ? ((a.next = a), oc(t))
              : ((a.next = C.next), (C.next = a)),
              (t.interleaved = a);
            return;
          }
        } catch {
        } finally {
        }
      (r = vp(e, t, a, s)),
        r !== null && ((a = sn()), Sr(r, e, s, a), Wp(r, t, s));
    }
  }
  function Vp(e) {
    var t = e.alternate;
    return e === ot || (t !== null && t === ot);
  }
  function $p(e, t) {
    Il = iu = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function Wp(e, t, r) {
    if (r & 4194240) {
      var s = t.lanes;
      (s &= e.pendingLanes), (r |= s), (t.lanes = r), xa(e, r);
    }
  }
  var su = {
      readContext: er,
      useCallback: Xt,
      useContext: Xt,
      useEffect: Xt,
      useImperativeHandle: Xt,
      useInsertionEffect: Xt,
      useLayoutEffect: Xt,
      useMemo: Xt,
      useReducer: Xt,
      useRef: Xt,
      useState: Xt,
      useDebugValue: Xt,
      useDeferredValue: Xt,
      useTransition: Xt,
      useMutableSource: Xt,
      useSyncExternalStore: Xt,
      useId: Xt,
      unstable_isNewReconciler: !1,
    },
    g_ = {
      readContext: er,
      useCallback: function (e, t) {
        return (Mr().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: er,
      useEffect: zp,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          ou(4194308, 4, jp.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return ou(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ou(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = Mr();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var s = Mr();
        return (
          (t = r !== void 0 ? r(t) : t),
          (s.memoizedState = s.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (s.queue = e),
          (e = e.dispatch = h_.bind(null, ot, e)),
          [s.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Mr();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Rp,
      useDebugValue: vc,
      useDeferredValue: function (e) {
        return (Mr().memoizedState = e);
      },
      useTransition: function () {
        var e = Rp(!1),
          t = e[0];
        return (e = p_.bind(null, e[1])), (Mr().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var s = ot,
          a = Mr();
        if (tt) {
          if (r === void 0) throw Error(i(407));
          r = r();
        } else {
          if (((r = t()), Dt === null)) throw Error(i(349));
          Gi & 30 || Tp(s, t, r);
        }
        a.memoizedState = r;
        var p = { value: r, getSnapshot: t };
        return (
          (a.queue = p),
          zp(Pp.bind(null, s, p, e), [e]),
          (s.flags |= 2048),
          Ul(9, Ep.bind(null, s, p, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = Mr(),
          t = Dt.identifierPrefix;
        if (tt) {
          var r = Xr,
            s = br;
          (r = (s & ~(1 << (32 - gr(s) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Fl++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = d_++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    __ = {
      readContext: er,
      useCallback: Ip,
      useContext: er,
      useEffect: _c,
      useImperativeHandle: Ap,
      useInsertionEffect: Dp,
      useLayoutEffect: Lp,
      useMemo: Fp,
      useReducer: mc,
      useRef: Mp,
      useState: function () {
        return mc(Bl);
      },
      useDebugValue: vc,
      useDeferredValue: function (e) {
        var t = tr();
        return Bp(t, Tt.memoizedState, e);
      },
      useTransition: function () {
        var e = mc(Bl)[0],
          t = tr().memoizedState;
        return [e, t];
      },
      useMutableSource: kp,
      useSyncExternalStore: Cp,
      useId: Up,
      unstable_isNewReconciler: !1,
    },
    v_ = {
      readContext: er,
      useCallback: Ip,
      useContext: er,
      useEffect: _c,
      useImperativeHandle: Ap,
      useInsertionEffect: Dp,
      useLayoutEffect: Lp,
      useMemo: Fp,
      useReducer: gc,
      useRef: Mp,
      useState: function () {
        return gc(Bl);
      },
      useDebugValue: vc,
      useDeferredValue: function (e) {
        var t = tr();
        return Tt === null ? (t.memoizedState = e) : Bp(t, Tt.memoizedState, e);
      },
      useTransition: function () {
        var e = gc(Bl)[0],
          t = tr().memoizedState;
        return [e, t];
      },
      useMutableSource: kp,
      useSyncExternalStore: Cp,
      useId: Up,
      unstable_isNewReconciler: !1,
    };
  function yr(e, t) {
    if (e && e.defaultProps) {
      (t = k({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function yc(e, t, r, s) {
    (t = e.memoizedState),
      (r = r(s, t)),
      (r = r == null ? t : k({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var uu = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? je(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var s = sn(),
        a = Si(e),
        p = Gr(s, a);
      (p.payload = t),
        r != null && (p.callback = r),
        (t = vi(e, p, a)),
        t !== null && (Sr(t, e, a, s), eu(t, e, a));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var s = sn(),
        a = Si(e),
        p = Gr(s, a);
      (p.tag = 1),
        (p.payload = t),
        r != null && (p.callback = r),
        (t = vi(e, p, a)),
        t !== null && (Sr(t, e, a, s), eu(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = sn(),
        s = Si(e),
        a = Gr(r, s);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = vi(e, a, s)),
        t !== null && (Sr(t, e, s, r), eu(t, e, s));
    },
  };
  function Yp(e, t, r, s, a, p, m) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(s, p, m)
        : t.prototype && t.prototype.isPureReactComponent
        ? !El(r, s) || !El(a, p)
        : !0
    );
  }
  function Hp(e, t, r) {
    var s = !1,
      a = mi,
      p = t.contextType;
    return (
      typeof p == "object" && p !== null
        ? (p = er(p))
        : ((a = Sn(t) ? Yi : bt.current),
          (s = t.contextTypes),
          (p = (s = s != null) ? Lo(e, a) : mi)),
      (t = new t(r, p)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = uu),
      (e.stateNode = t),
      (t._reactInternals = e),
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = p)),
      t
    );
  }
  function bp(e, t, r, s) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, s),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, s),
      t.state !== e && uu.enqueueReplaceState(t, t.state, null);
  }
  function xc(e, t, r, s) {
    var a = e.stateNode;
    (a.props = r), (a.state = e.memoizedState), (a.refs = {}), lc(e);
    var p = t.contextType;
    typeof p == "object" && p !== null
      ? (a.context = er(p))
      : ((p = Sn(t) ? Yi : bt.current), (a.context = Lo(e, p))),
      (a.state = e.memoizedState),
      (p = t.getDerivedStateFromProps),
      typeof p == "function" && (yc(e, t, p, r), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function" ||
        (typeof a.UNSAFE_componentWillMount != "function" &&
          typeof a.componentWillMount != "function") ||
        ((t = a.state),
        typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" &&
          a.UNSAFE_componentWillMount(),
        t !== a.state && uu.enqueueReplaceState(a, a.state, null),
        tu(e, r, a, s),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function $o(e, t) {
    try {
      var r = "",
        s = t;
      do (r += me(s)), (s = s.return);
      while (s);
      var a = r;
    } catch (p) {
      a =
        `
Error generating stack: ` +
        p.message +
        `
` +
        p.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function wc(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function Sc(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var y_ = typeof WeakMap == "function" ? WeakMap : Map;
  function Xp(e, t, r) {
    (r = Gr(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var s = t.value;
    return (
      (r.callback = function () {
        mu || ((mu = !0), (Ic = s)), Sc(e, t);
      }),
      r
    );
  }
  function Qp(e, t, r) {
    (r = Gr(-1, r)), (r.tag = 3);
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var a = t.value;
      (r.payload = function () {
        return s(a);
      }),
        (r.callback = function () {
          Sc(e, t);
        });
    }
    var p = e.stateNode;
    return (
      p !== null &&
        typeof p.componentDidCatch == "function" &&
        (r.callback = function () {
          Sc(e, t),
            typeof s != "function" &&
              (xi === null ? (xi = new Set([this])) : xi.add(this));
          var m = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: m !== null ? m : "",
          });
        }),
      r
    );
  }
  function Gp(e, t, r) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new y_();
      var a = new Set();
      s.set(t, a);
    } else (a = s.get(t)), a === void 0 && ((a = new Set()), s.set(t, a));
    a.has(r) || (a.add(r), (e = D_.bind(null, e, t, r)), t.then(e, e));
  }
  function Kp(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function qp(e, t, r, s, a) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = a), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = Gr(-1, 1)), (t.tag = 2), vi(r, t, 1))),
            (r.lanes |= 1)),
        e);
  }
  var x_ = D.ReactCurrentOwner,
    kn = !1;
  function ln(e, t, r, s) {
    t.child = e === null ? _p(t, null, r, s) : Fo(t, e.child, r, s);
  }
  function Zp(e, t, r, s, a) {
    r = r.render;
    var p = t.ref;
    return (
      Uo(t, a),
      (s = pc(e, t, r, s, p, a)),
      (r = hc()),
      e !== null && !kn
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          Kr(e, t, a))
        : (tt && r && Ka(t), (t.flags |= 1), ln(e, t, s, a), t.child)
    );
  }
  function Jp(e, t, r, s, a) {
    if (e === null) {
      var p = r.type;
      return typeof p == "function" &&
        !Yc(p) &&
        p.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = p), eh(e, t, p, s, a))
        : ((e = wu(r.type, null, s, t, t.mode, a)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((p = e.child), !(e.lanes & a))) {
      var m = p.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : El), r(m, s) && e.ref === t.ref)
      )
        return Kr(e, t, a);
    }
    return (
      (t.flags |= 1),
      (e = Ci(p, s)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function eh(e, t, r, s, a) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (El(p, s) && e.ref === t.ref)
        if (((kn = !1), (t.pendingProps = s = p), (e.lanes & a) !== 0))
          e.flags & 131072 && (kn = !0);
        else return (t.lanes = e.lanes), Kr(e, t, a);
    }
    return kc(e, t, r, s, a);
  }
  function th(e, t, r) {
    var s = t.pendingProps,
      a = s.children,
      p = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          be(Yo, Un),
          (Un |= r);
      else {
        if (!(r & 1073741824))
          return (
            (e = p !== null ? p.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            be(Yo, Un),
            (Un |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (s = p !== null ? p.baseLanes : r),
          be(Yo, Un),
          (Un |= s);
      }
    else
      p !== null ? ((s = p.baseLanes | r), (t.memoizedState = null)) : (s = r),
        be(Yo, Un),
        (Un |= s);
    return ln(e, t, a, r), t.child;
  }
  function nh(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function kc(e, t, r, s, a) {
    var p = Sn(r) ? Yi : bt.current;
    return (
      (p = Lo(t, p)),
      Uo(t, a),
      (r = pc(e, t, r, s, p, a)),
      (s = hc()),
      e !== null && !kn
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          Kr(e, t, a))
        : (tt && s && Ka(t), (t.flags |= 1), ln(e, t, r, a), t.child)
    );
  }
  function rh(e, t, r, s, a) {
    if (Sn(r)) {
      var p = !0;
      bs(t);
    } else p = !1;
    if ((Uo(t, a), t.stateNode === null))
      cu(e, t), Hp(t, r, s), xc(t, r, s, a), (s = !0);
    else if (e === null) {
      var m = t.stateNode,
        w = t.memoizedProps;
      m.props = w;
      var C = m.context,
        z = r.contextType;
      typeof z == "object" && z !== null
        ? (z = er(z))
        : ((z = Sn(r) ? Yi : bt.current), (z = Lo(t, z)));
      var H = r.getDerivedStateFromProps,
        Q =
          typeof H == "function" ||
          typeof m.getSnapshotBeforeUpdate == "function";
      Q ||
        (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
          typeof m.componentWillReceiveProps != "function") ||
        ((w !== s || C !== z) && bp(t, m, s, z)),
        (_i = !1);
      var Y = t.memoizedState;
      (m.state = Y),
        tu(t, s, m, a),
        (C = t.memoizedState),
        w !== s || Y !== C || wn.current || _i
          ? (typeof H == "function" && (yc(t, r, H, s), (C = t.memoizedState)),
            (w = _i || Yp(t, r, w, s, Y, C, z))
              ? (Q ||
                  (typeof m.UNSAFE_componentWillMount != "function" &&
                    typeof m.componentWillMount != "function") ||
                  (typeof m.componentWillMount == "function" &&
                    m.componentWillMount(),
                  typeof m.UNSAFE_componentWillMount == "function" &&
                    m.UNSAFE_componentWillMount()),
                typeof m.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof m.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = s),
                (t.memoizedState = C)),
            (m.props = s),
            (m.state = C),
            (m.context = z),
            (s = w))
          : (typeof m.componentDidMount == "function" && (t.flags |= 4194308),
            (s = !1));
    } else {
      (m = t.stateNode),
        yp(e, t),
        (w = t.memoizedProps),
        (z = t.type === t.elementType ? w : yr(t.type, w)),
        (m.props = z),
        (Q = t.pendingProps),
        (Y = m.context),
        (C = r.contextType),
        typeof C == "object" && C !== null
          ? (C = er(C))
          : ((C = Sn(r) ? Yi : bt.current), (C = Lo(t, C)));
      var J = r.getDerivedStateFromProps;
      (H =
        typeof J == "function" ||
        typeof m.getSnapshotBeforeUpdate == "function") ||
        (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
          typeof m.componentWillReceiveProps != "function") ||
        ((w !== Q || Y !== C) && bp(t, m, s, C)),
        (_i = !1),
        (Y = t.memoizedState),
        (m.state = Y),
        tu(t, s, m, a);
      var re = t.memoizedState;
      w !== Q || Y !== re || wn.current || _i
        ? (typeof J == "function" && (yc(t, r, J, s), (re = t.memoizedState)),
          (z = _i || Yp(t, r, z, s, Y, re, C) || !1)
            ? (H ||
                (typeof m.UNSAFE_componentWillUpdate != "function" &&
                  typeof m.componentWillUpdate != "function") ||
                (typeof m.componentWillUpdate == "function" &&
                  m.componentWillUpdate(s, re, C),
                typeof m.UNSAFE_componentWillUpdate == "function" &&
                  m.UNSAFE_componentWillUpdate(s, re, C)),
              typeof m.componentDidUpdate == "function" && (t.flags |= 4),
              typeof m.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof m.componentDidUpdate != "function" ||
                (w === e.memoizedProps && Y === e.memoizedState) ||
                (t.flags |= 4),
              typeof m.getSnapshotBeforeUpdate != "function" ||
                (w === e.memoizedProps && Y === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = s),
              (t.memoizedState = re)),
          (m.props = s),
          (m.state = re),
          (m.context = C),
          (s = z))
        : (typeof m.componentDidUpdate != "function" ||
            (w === e.memoizedProps && Y === e.memoizedState) ||
            (t.flags |= 4),
          typeof m.getSnapshotBeforeUpdate != "function" ||
            (w === e.memoizedProps && Y === e.memoizedState) ||
            (t.flags |= 1024),
          (s = !1));
    }
    return Cc(e, t, r, s, p, a);
  }
  function Cc(e, t, r, s, a, p) {
    nh(e, t);
    var m = (t.flags & 128) !== 0;
    if (!s && !m) return a && up(t, r, !1), Kr(e, t, p);
    (s = t.stateNode), (x_.current = t);
    var w =
      m && typeof r.getDerivedStateFromError != "function" ? null : s.render();
    return (
      (t.flags |= 1),
      e !== null && m
        ? ((t.child = Fo(t, e.child, null, p)), (t.child = Fo(t, null, w, p)))
        : ln(e, t, w, p),
      (t.memoizedState = s.state),
      a && up(t, r, !0),
      t.child
    );
  }
  function ih(e) {
    var t = e.stateNode;
    t.pendingContext
      ? lp(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && lp(e, t.context, !1),
      sc(e, t.containerInfo);
  }
  function oh(e, t, r, s, a) {
    return Io(), ec(a), (t.flags |= 256), ln(e, t, r, s), t.child;
  }
  var Tc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ec(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function lh(e, t, r) {
    var s = t.pendingProps,
      a = it.current,
      p = !1,
      m = (t.flags & 128) !== 0,
      w;
    if (
      ((w = m) ||
        (w = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      w
        ? ((p = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (a |= 1),
      be(it, a & 1),
      e === null)
    )
      return (
        Ja(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((m = s.children),
            (e = s.fallback),
            p
              ? ((s = t.mode),
                (p = t.child),
                (m = { mode: "hidden", children: m }),
                !(s & 1) && p !== null
                  ? ((p.childLanes = 0), (p.pendingProps = m))
                  : (p = Su(m, s, 0, null)),
                (e = eo(e, s, r, null)),
                (p.return = t),
                (e.return = t),
                (p.sibling = e),
                (t.child = p),
                (t.child.memoizedState = Ec(r)),
                (t.memoizedState = Tc),
                e)
              : Pc(t, m))
      );
    if (((a = e.memoizedState), a !== null && ((w = a.dehydrated), w !== null)))
      return w_(e, t, m, s, w, a, r);
    if (p) {
      (p = s.fallback), (m = t.mode), (a = e.child), (w = a.sibling);
      var C = { mode: "hidden", children: s.children };
      return (
        !(m & 1) && t.child !== a
          ? ((s = t.child),
            (s.childLanes = 0),
            (s.pendingProps = C),
            (t.deletions = null))
          : ((s = Ci(a, C)), (s.subtreeFlags = a.subtreeFlags & 14680064)),
        w !== null ? (p = Ci(w, p)) : ((p = eo(p, m, r, null)), (p.flags |= 2)),
        (p.return = t),
        (s.return = t),
        (s.sibling = p),
        (t.child = s),
        (s = p),
        (p = t.child),
        (m = e.child.memoizedState),
        (m =
          m === null
            ? Ec(r)
            : {
                baseLanes: m.baseLanes | r,
                cachePool: null,
                transitions: m.transitions,
              }),
        (p.memoizedState = m),
        (p.childLanes = e.childLanes & ~r),
        (t.memoizedState = Tc),
        s
      );
    }
    return (
      (p = e.child),
      (e = p.sibling),
      (s = Ci(p, { mode: "visible", children: s.children })),
      !(t.mode & 1) && (s.lanes = r),
      (s.return = t),
      (s.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = s),
      (t.memoizedState = null),
      s
    );
  }
  function Pc(e, t) {
    return (
      (t = Su({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function au(e, t, r, s) {
    return (
      s !== null && ec(s),
      Fo(t, e.child, null, r),
      (e = Pc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function w_(e, t, r, s, a, p, m) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (s = wc(Error(i(422)))), au(e, t, m, s))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((p = s.fallback),
          (a = t.mode),
          (s = Su({ mode: "visible", children: s.children }, a, 0, null)),
          (p = eo(p, a, m, null)),
          (p.flags |= 2),
          (s.return = t),
          (p.return = t),
          (s.sibling = p),
          (t.child = s),
          t.mode & 1 && Fo(t, e.child, null, m),
          (t.child.memoizedState = Ec(m)),
          (t.memoizedState = Tc),
          p);
    if (!(t.mode & 1)) return au(e, t, m, null);
    if (a.data === "$!") {
      if (((s = a.nextSibling && a.nextSibling.dataset), s)) var w = s.dgst;
      return (
        (s = w), (p = Error(i(419))), (s = wc(p, s, void 0)), au(e, t, m, s)
      );
    }
    if (((w = (m & e.childLanes) !== 0), kn || w)) {
      if (((s = Dt), s !== null)) {
        switch (m & -m) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
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
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        (a = a & (s.suspendedLanes | m) ? 0 : a),
          a !== 0 &&
            a !== p.retryLane &&
            ((p.retryLane = a), Qr(e, a), Sr(s, e, a, -1));
      }
      return Wc(), (s = wc(Error(i(421)))), au(e, t, m, s);
    }
    return a.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = L_.bind(null, e)),
        (a._reactRetry = t),
        null)
      : ((e = p.treeContext),
        (Bn = pi(a.nextSibling)),
        (Fn = t),
        (tt = !0),
        (vr = null),
        e !== null &&
          ((Zn[Jn++] = br),
          (Zn[Jn++] = Xr),
          (Zn[Jn++] = Hi),
          (br = e.id),
          (Xr = e.overflow),
          (Hi = t)),
        (t = Pc(t, s.children)),
        (t.flags |= 4096),
        t);
  }
  function sh(e, t, r) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), ic(e.return, t, r);
  }
  function Oc(e, t, r, s, a) {
    var p = e.memoizedState;
    p === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: r,
          tailMode: a,
        })
      : ((p.isBackwards = t),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = s),
        (p.tail = r),
        (p.tailMode = a));
  }
  function uh(e, t, r) {
    var s = t.pendingProps,
      a = s.revealOrder,
      p = s.tail;
    if ((ln(e, t, s.children, r), (s = it.current), s & 2))
      (s = (s & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && sh(e, r, t);
          else if (e.tag === 19) sh(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      s &= 1;
    }
    if ((be(it, s), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (r = t.child, a = null; r !== null; )
            (e = r.alternate),
              e !== null && nu(e) === null && (a = r),
              (r = r.sibling);
          (r = a),
            r === null
              ? ((a = t.child), (t.child = null))
              : ((a = r.sibling), (r.sibling = null)),
            Oc(t, !1, a, r, p);
          break;
        case "backwards":
          for (r = null, a = t.child, t.child = null; a !== null; ) {
            if (((e = a.alternate), e !== null && nu(e) === null)) {
              t.child = a;
              break;
            }
            (e = a.sibling), (a.sibling = r), (r = a), (a = e);
          }
          Oc(t, !0, r, null, p);
          break;
        case "together":
          Oc(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function cu(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Kr(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Ki |= t.lanes),
      !(r & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, r = Ci(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = Ci(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function S_(e, t, r) {
    switch (t.tag) {
      case 3:
        ih(t), Io();
        break;
      case 5:
        Sp(t);
        break;
      case 1:
        Sn(t.type) && bs(t);
        break;
      case 4:
        sc(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context,
          a = t.memoizedProps.value;
        be(Zs, s._currentValue), (s._currentValue = a);
        break;
      case 13:
        if (((s = t.memoizedState), s !== null))
          return s.dehydrated !== null
            ? (be(it, it.current & 1), (t.flags |= 128), null)
            : r & t.child.childLanes
            ? lh(e, t, r)
            : (be(it, it.current & 1),
              (e = Kr(e, t, r)),
              e !== null ? e.sibling : null);
        be(it, it.current & 1);
        break;
      case 19:
        if (((s = (r & t.childLanes) !== 0), e.flags & 128)) {
          if (s) return uh(e, t, r);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          be(it, it.current),
          s)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), th(e, t, r);
    }
    return Kr(e, t, r);
  }
  var ah, Nc, ch, fh;
  (ah = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (Nc = function () {}),
    (ch = function (e, t, r, s) {
      var a = e.memoizedProps;
      if (a !== s) {
        (e = t.stateNode), Qi(Rr.current);
        var p = null;
        switch (r) {
          case "input":
            (a = Qe(e, a)), (s = Qe(e, s)), (p = []);
            break;
          case "select":
            (a = k({}, a, { value: void 0 })),
              (s = k({}, s, { value: void 0 })),
              (p = []);
            break;
          case "textarea":
            (a = Gn(e, a)), (s = Gn(e, s)), (p = []);
            break;
          default:
            typeof a.onClick != "function" &&
              typeof s.onClick == "function" &&
              (e.onclick = Ws);
        }
        Er(r, s);
        var m;
        r = null;
        for (z in a)
          if (!s.hasOwnProperty(z) && a.hasOwnProperty(z) && a[z] != null)
            if (z === "style") {
              var w = a[z];
              for (m in w) w.hasOwnProperty(m) && (r || (r = {}), (r[m] = ""));
            } else
              z !== "dangerouslySetInnerHTML" &&
                z !== "children" &&
                z !== "suppressContentEditableWarning" &&
                z !== "suppressHydrationWarning" &&
                z !== "autoFocus" &&
                (l.hasOwnProperty(z)
                  ? p || (p = [])
                  : (p = p || []).push(z, null));
        for (z in s) {
          var C = s[z];
          if (
            ((w = a != null ? a[z] : void 0),
            s.hasOwnProperty(z) && C !== w && (C != null || w != null))
          )
            if (z === "style")
              if (w) {
                for (m in w)
                  !w.hasOwnProperty(m) ||
                    (C && C.hasOwnProperty(m)) ||
                    (r || (r = {}), (r[m] = ""));
                for (m in C)
                  C.hasOwnProperty(m) &&
                    w[m] !== C[m] &&
                    (r || (r = {}), (r[m] = C[m]));
              } else r || (p || (p = []), p.push(z, r)), (r = C);
            else
              z === "dangerouslySetInnerHTML"
                ? ((C = C ? C.__html : void 0),
                  (w = w ? w.__html : void 0),
                  C != null && w !== C && (p = p || []).push(z, C))
                : z === "children"
                ? (typeof C != "string" && typeof C != "number") ||
                  (p = p || []).push(z, "" + C)
                : z !== "suppressContentEditableWarning" &&
                  z !== "suppressHydrationWarning" &&
                  (l.hasOwnProperty(z)
                    ? (C != null && z === "onScroll" && qe("scroll", e),
                      p || w === C || (p = []))
                    : (p = p || []).push(z, C));
        }
        r && (p = p || []).push("style", r);
        var z = p;
        (t.updateQueue = z) && (t.flags |= 4);
      }
    }),
    (fh = function (e, t, r, s) {
      r !== s && (t.flags |= 4);
    });
  function Vl(e, t) {
    if (!tt)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var s = null; r !== null; )
            r.alternate !== null && (s = r), (r = r.sibling);
          s === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function Qt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      s = 0;
    if (t)
      for (var a = e.child; a !== null; )
        (r |= a.lanes | a.childLanes),
          (s |= a.subtreeFlags & 14680064),
          (s |= a.flags & 14680064),
          (a.return = e),
          (a = a.sibling);
    else
      for (a = e.child; a !== null; )
        (r |= a.lanes | a.childLanes),
          (s |= a.subtreeFlags),
          (s |= a.flags),
          (a.return = e),
          (a = a.sibling);
    return (e.subtreeFlags |= s), (e.childLanes = r), t;
  }
  function k_(e, t, r) {
    var s = t.pendingProps;
    switch ((qa(t), t.tag)) {
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
        return Qt(t), null;
      case 1:
        return Sn(t.type) && Hs(), Qt(t), null;
      case 3:
        return (
          (s = t.stateNode),
          Vo(),
          Ze(wn),
          Ze(bt),
          cc(),
          s.pendingContext &&
            ((s.context = s.pendingContext), (s.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ks(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), vr !== null && (Uc(vr), (vr = null)))),
          Nc(e, t),
          Qt(t),
          null
        );
      case 5:
        uc(t);
        var a = Qi(Al.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          ch(e, t, r, s, a),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(i(166));
            return Qt(t), null;
          }
          if (((e = Qi(Rr.current)), Ks(t))) {
            (s = t.stateNode), (r = t.type);
            var p = t.memoizedProps;
            switch (((s[Nr] = t), (s[Ml] = p), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                qe("cancel", s), qe("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                qe("load", s);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Ol.length; a++) qe(Ol[a], s);
                break;
              case "source":
                qe("error", s);
                break;
              case "img":
              case "image":
              case "link":
                qe("error", s), qe("load", s);
                break;
              case "details":
                qe("toggle", s);
                break;
              case "input":
                Bt(s, p), qe("invalid", s);
                break;
              case "select":
                (s._wrapperState = { wasMultiple: !!p.multiple }),
                  qe("invalid", s);
                break;
              case "textarea":
                Tr(s, p), qe("invalid", s);
            }
            Er(r, p), (a = null);
            for (var m in p)
              if (p.hasOwnProperty(m)) {
                var w = p[m];
                m === "children"
                  ? typeof w == "string"
                    ? s.textContent !== w &&
                      (p.suppressHydrationWarning !== !0 &&
                        $s(s.textContent, w, e),
                      (a = ["children", w]))
                    : typeof w == "number" &&
                      s.textContent !== "" + w &&
                      (p.suppressHydrationWarning !== !0 &&
                        $s(s.textContent, w, e),
                      (a = ["children", "" + w]))
                  : l.hasOwnProperty(m) &&
                    w != null &&
                    m === "onScroll" &&
                    qe("scroll", s);
              }
            switch (r) {
              case "input":
                vt(s), Yt(s, p, !0);
                break;
              case "textarea":
                vt(s), pt(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (s.onclick = Ws);
            }
            (s = a), (t.updateQueue = s), s !== null && (t.flags |= 4);
          } else {
            (m = a.nodeType === 9 ? a : a.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = fr(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = m.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof s.is == "string"
                  ? (e = m.createElement(r, { is: s.is }))
                  : ((e = m.createElement(r)),
                    r === "select" &&
                      ((m = e),
                      s.multiple
                        ? (m.multiple = !0)
                        : s.size && (m.size = s.size)))
                : (e = m.createElementNS(e, r)),
              (e[Nr] = t),
              (e[Ml] = s),
              ah(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((m = Kn(r, s)), r)) {
                case "dialog":
                  qe("cancel", e), qe("close", e), (a = s);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  qe("load", e), (a = s);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Ol.length; a++) qe(Ol[a], e);
                  a = s;
                  break;
                case "source":
                  qe("error", e), (a = s);
                  break;
                case "img":
                case "image":
                case "link":
                  qe("error", e), qe("load", e), (a = s);
                  break;
                case "details":
                  qe("toggle", e), (a = s);
                  break;
                case "input":
                  Bt(e, s), (a = Qe(e, s)), qe("invalid", e);
                  break;
                case "option":
                  a = s;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!s.multiple }),
                    (a = k({}, s, { value: void 0 })),
                    qe("invalid", e);
                  break;
                case "textarea":
                  Tr(e, s), (a = Gn(e, s)), qe("invalid", e);
                  break;
                default:
                  a = s;
              }
              Er(r, a), (w = a);
              for (p in w)
                if (w.hasOwnProperty(p)) {
                  var C = w[p];
                  p === "style"
                    ? pr(e, C)
                    : p === "dangerouslySetInnerHTML"
                    ? ((C = C ? C.__html : void 0), C != null && tn(e, C))
                    : p === "children"
                    ? typeof C == "string"
                      ? (r !== "textarea" || C !== "") && nn(e, C)
                      : typeof C == "number" && nn(e, "" + C)
                    : p !== "suppressContentEditableWarning" &&
                      p !== "suppressHydrationWarning" &&
                      p !== "autoFocus" &&
                      (l.hasOwnProperty(p)
                        ? C != null && p === "onScroll" && qe("scroll", e)
                        : C != null && U(e, p, C, m));
                }
              switch (r) {
                case "input":
                  vt(e), Yt(e, s, !1);
                  break;
                case "textarea":
                  vt(e), pt(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + Ce(s.value));
                  break;
                case "select":
                  (e.multiple = !!s.multiple),
                    (p = s.value),
                    p != null
                      ? $e(e, !!s.multiple, p, !1)
                      : s.defaultValue != null &&
                        $e(e, !!s.multiple, s.defaultValue, !0);
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Ws);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Qt(t), null;
      case 6:
        if (e && t.stateNode != null) fh(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(i(166));
          if (((r = Qi(Al.current)), Qi(Rr.current), Ks(t))) {
            if (
              ((s = t.stateNode),
              (r = t.memoizedProps),
              (s[Nr] = t),
              (p = s.nodeValue !== r) && ((e = Fn), e !== null))
            )
              switch (e.tag) {
                case 3:
                  $s(s.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    $s(s.nodeValue, r, (e.mode & 1) !== 0);
              }
            p && (t.flags |= 4);
          } else
            (s = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(s)),
              (s[Nr] = t),
              (t.stateNode = s);
        }
        return Qt(t), null;
      case 13:
        if (
          (Ze(it),
          (s = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (tt && Bn !== null && t.mode & 1 && !(t.flags & 128))
            hp(), Io(), (t.flags |= 98560), (p = !1);
          else if (((p = Ks(t)), s !== null && s.dehydrated !== null)) {
            if (e === null) {
              if (!p) throw Error(i(318));
              if (
                ((p = t.memoizedState),
                (p = p !== null ? p.dehydrated : null),
                !p)
              )
                throw Error(i(317));
              p[Nr] = t;
            } else
              Io(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Qt(t), (p = !1);
          } else vr !== null && (Uc(vr), (vr = null)), (p = !0);
          if (!p) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = r), t)
          : ((s = s !== null),
            s !== (e !== null && e.memoizedState !== null) &&
              s &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || it.current & 1 ? Et === 0 && (Et = 3) : Wc())),
            t.updateQueue !== null && (t.flags |= 4),
            Qt(t),
            null);
      case 4:
        return (
          Vo(),
          Nc(e, t),
          e === null && Nl(t.stateNode.containerInfo),
          Qt(t),
          null
        );
      case 10:
        return rc(t.type._context), Qt(t), null;
      case 17:
        return Sn(t.type) && Hs(), Qt(t), null;
      case 19:
        if ((Ze(it), (p = t.memoizedState), p === null)) return Qt(t), null;
        if (((s = (t.flags & 128) !== 0), (m = p.rendering), m === null))
          if (s) Vl(p, !1);
          else {
            if (Et !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((m = nu(e)), m !== null)) {
                  for (
                    t.flags |= 128,
                      Vl(p, !1),
                      s = m.updateQueue,
                      s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      s = r,
                      r = t.child;
                    r !== null;

                  )
                    (p = r),
                      (e = s),
                      (p.flags &= 14680066),
                      (m = p.alternate),
                      m === null
                        ? ((p.childLanes = 0),
                          (p.lanes = e),
                          (p.child = null),
                          (p.subtreeFlags = 0),
                          (p.memoizedProps = null),
                          (p.memoizedState = null),
                          (p.updateQueue = null),
                          (p.dependencies = null),
                          (p.stateNode = null))
                        : ((p.childLanes = m.childLanes),
                          (p.lanes = m.lanes),
                          (p.child = m.child),
                          (p.subtreeFlags = 0),
                          (p.deletions = null),
                          (p.memoizedProps = m.memoizedProps),
                          (p.memoizedState = m.memoizedState),
                          (p.updateQueue = m.updateQueue),
                          (p.type = m.type),
                          (e = m.dependencies),
                          (p.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return be(it, (it.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            p.tail !== null &&
              Ne() > Ho &&
              ((t.flags |= 128), (s = !0), Vl(p, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = nu(m)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                Vl(p, !0),
                p.tail === null &&
                  p.tailMode === "hidden" &&
                  !m.alternate &&
                  !tt)
              )
                return Qt(t), null;
            } else
              2 * Ne() - p.renderingStartTime > Ho &&
                r !== 1073741824 &&
                ((t.flags |= 128), (s = !0), Vl(p, !1), (t.lanes = 4194304));
          p.isBackwards
            ? ((m.sibling = t.child), (t.child = m))
            : ((r = p.last),
              r !== null ? (r.sibling = m) : (t.child = m),
              (p.last = m));
        }
        return p.tail !== null
          ? ((t = p.tail),
            (p.rendering = t),
            (p.tail = t.sibling),
            (p.renderingStartTime = Ne()),
            (t.sibling = null),
            (r = it.current),
            be(it, s ? (r & 1) | 2 : r & 1),
            t)
          : (Qt(t), null);
      case 22:
      case 23:
        return (
          $c(),
          (s = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
          s && t.mode & 1
            ? Un & 1073741824 &&
              (Qt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Qt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function C_(e, t) {
    switch ((qa(t), t.tag)) {
      case 1:
        return (
          Sn(t.type) && Hs(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Vo(),
          Ze(wn),
          Ze(bt),
          cc(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return uc(t), null;
      case 13:
        if (
          (Ze(it), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          Io();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Ze(it), null;
      case 4:
        return Vo(), null;
      case 10:
        return rc(t.type._context), null;
      case 22:
      case 23:
        return $c(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fu = !1,
    Gt = !1,
    T_ = typeof WeakSet == "function" ? WeakSet : Set,
    te = null;
  function Wo(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (s) {
          ft(e, t, s);
        }
      else r.current = null;
  }
  function Rc(e, t, r) {
    try {
      r();
    } catch (s) {
      ft(e, t, s);
    }
  }
  var dh = !1;
  function E_(e, t) {
    if ((($a = Ms), (e = Yd()), La(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var s = r.getSelection && r.getSelection();
          if (s && s.rangeCount !== 0) {
            r = s.anchorNode;
            var a = s.anchorOffset,
              p = s.focusNode;
            s = s.focusOffset;
            try {
              r.nodeType, p.nodeType;
            } catch {
              r = null;
              break e;
            }
            var m = 0,
              w = -1,
              C = -1,
              z = 0,
              H = 0,
              Q = e,
              Y = null;
            t: for (;;) {
              for (
                var J;
                Q !== r || (a !== 0 && Q.nodeType !== 3) || (w = m + a),
                  Q !== p || (s !== 0 && Q.nodeType !== 3) || (C = m + s),
                  Q.nodeType === 3 && (m += Q.nodeValue.length),
                  (J = Q.firstChild) !== null;

              )
                (Y = Q), (Q = J);
              for (;;) {
                if (Q === e) break t;
                if (
                  (Y === r && ++z === a && (w = m),
                  Y === p && ++H === s && (C = m),
                  (J = Q.nextSibling) !== null)
                )
                  break;
                (Q = Y), (Y = Q.parentNode);
              }
              Q = J;
            }
            r = w === -1 || C === -1 ? null : { start: w, end: C };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Wa = { focusedElem: e, selectionRange: r }, Ms = !1, te = t;
      te !== null;

    )
      if (
        ((t = te), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (te = e);
      else
        for (; te !== null; ) {
          t = te;
          try {
            var re = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (re !== null) {
                    var ie = re.memoizedProps,
                      mt = re.memoizedState,
                      N = t.stateNode,
                      P = N.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ie : yr(t.type, ie),
                        mt
                      );
                    N.__reactInternalSnapshotBeforeUpdate = P;
                  }
                  break;
                case 3:
                  var R = t.stateNode.containerInfo;
                  R.nodeType === 1
                    ? (R.textContent = "")
                    : R.nodeType === 9 &&
                      R.documentElement &&
                      R.removeChild(R.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch (G) {
            ft(t, t.return, G);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (te = e);
            break;
          }
          te = t.return;
        }
    return (re = dh), (dh = !1), re;
  }
  function $l(e, t, r) {
    var s = t.updateQueue;
    if (((s = s !== null ? s.lastEffect : null), s !== null)) {
      var a = (s = s.next);
      do {
        if ((a.tag & e) === e) {
          var p = a.destroy;
          (a.destroy = void 0), p !== void 0 && Rc(t, r, p);
        }
        a = a.next;
      } while (a !== s);
    }
  }
  function du(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var s = r.create;
          r.destroy = s();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Mc(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function ph(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), ph(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Nr],
          delete t[Ml],
          delete t[Xa],
          delete t[u_],
          delete t[a_])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function hh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function mh(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || hh(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function zc(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = Ws));
    else if (s !== 4 && ((e = e.child), e !== null))
      for (zc(e, t, r), e = e.sibling; e !== null; )
        zc(e, t, r), (e = e.sibling);
  }
  function Dc(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (s !== 4 && ((e = e.child), e !== null))
      for (Dc(e, t, r), e = e.sibling; e !== null; )
        Dc(e, t, r), (e = e.sibling);
  }
  var Ut = null,
    xr = !1;
  function yi(e, t, r) {
    for (r = r.child; r !== null; ) gh(e, t, r), (r = r.sibling);
  }
  function gh(e, t, r) {
    if (on && typeof on.onCommitFiberUnmount == "function")
      try {
        on.onCommitFiberUnmount(Or, r);
      } catch {}
    switch (r.tag) {
      case 5:
        Gt || Wo(r, t);
      case 6:
        var s = Ut,
          a = xr;
        (Ut = null),
          yi(e, t, r),
          (Ut = s),
          (xr = a),
          Ut !== null &&
            (xr
              ? ((e = Ut),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : Ut.removeChild(r.stateNode));
        break;
      case 18:
        Ut !== null &&
          (xr
            ? ((e = Ut),
              (r = r.stateNode),
              e.nodeType === 8
                ? ba(e.parentNode, r)
                : e.nodeType === 1 && ba(e, r),
              xl(e))
            : ba(Ut, r.stateNode));
        break;
      case 4:
        (s = Ut),
          (a = xr),
          (Ut = r.stateNode.containerInfo),
          (xr = !0),
          yi(e, t, r),
          (Ut = s),
          (xr = a);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Gt &&
          ((s = r.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
        ) {
          a = s = s.next;
          do {
            var p = a,
              m = p.destroy;
            (p = p.tag),
              m !== void 0 && (p & 2 || p & 4) && Rc(r, t, m),
              (a = a.next);
          } while (a !== s);
        }
        yi(e, t, r);
        break;
      case 1:
        if (
          !Gt &&
          (Wo(r, t),
          (s = r.stateNode),
          typeof s.componentWillUnmount == "function")
        )
          try {
            (s.props = r.memoizedProps),
              (s.state = r.memoizedState),
              s.componentWillUnmount();
          } catch (w) {
            ft(r, t, w);
          }
        yi(e, t, r);
        break;
      case 21:
        yi(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((Gt = (s = Gt) || r.memoizedState !== null), yi(e, t, r), (Gt = s))
          : yi(e, t, r);
        break;
      default:
        yi(e, t, r);
    }
  }
  function _h(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new T_()),
        t.forEach(function (s) {
          var a = j_.bind(null, e, s);
          r.has(s) || (r.add(s), s.then(a, a));
        });
    }
  }
  function wr(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var s = 0; s < r.length; s++) {
        var a = r[s];
        try {
          var p = e,
            m = t,
            w = m;
          e: for (; w !== null; ) {
            switch (w.tag) {
              case 5:
                (Ut = w.stateNode), (xr = !1);
                break e;
              case 3:
                (Ut = w.stateNode.containerInfo), (xr = !0);
                break e;
              case 4:
                (Ut = w.stateNode.containerInfo), (xr = !0);
                break e;
            }
            w = w.return;
          }
          if (Ut === null) throw Error(i(160));
          gh(p, m, a), (Ut = null), (xr = !1);
          var C = a.alternate;
          C !== null && (C.return = null), (a.return = null);
        } catch (z) {
          ft(a, t, z);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) vh(t, e), (t = t.sibling);
  }
  function vh(e, t) {
    var r = e.alternate,
      s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((wr(t, e), zr(e), s & 4)) {
          try {
            $l(3, e, e.return), du(3, e);
          } catch (ie) {
            ft(e, e.return, ie);
          }
          try {
            $l(5, e, e.return);
          } catch (ie) {
            ft(e, e.return, ie);
          }
        }
        break;
      case 1:
        wr(t, e), zr(e), s & 512 && r !== null && Wo(r, r.return);
        break;
      case 5:
        if (
          (wr(t, e),
          zr(e),
          s & 512 && r !== null && Wo(r, r.return),
          e.flags & 32)
        ) {
          var a = e.stateNode;
          try {
            nn(a, "");
          } catch (ie) {
            ft(e, e.return, ie);
          }
        }
        if (s & 4 && ((a = e.stateNode), a != null)) {
          var p = e.memoizedProps,
            m = r !== null ? r.memoizedProps : p,
            w = e.type,
            C = e.updateQueue;
          if (((e.updateQueue = null), C !== null))
            try {
              w === "input" && p.type === "radio" && p.name != null && Wt(a, p),
                Kn(w, m);
              var z = Kn(w, p);
              for (m = 0; m < C.length; m += 2) {
                var H = C[m],
                  Q = C[m + 1];
                H === "style"
                  ? pr(a, Q)
                  : H === "dangerouslySetInnerHTML"
                  ? tn(a, Q)
                  : H === "children"
                  ? nn(a, Q)
                  : U(a, H, Q, z);
              }
              switch (w) {
                case "input":
                  j(a, p);
                  break;
                case "textarea":
                  Vr(a, p);
                  break;
                case "select":
                  var Y = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!p.multiple;
                  var J = p.value;
                  J != null
                    ? $e(a, !!p.multiple, J, !1)
                    : Y !== !!p.multiple &&
                      (p.defaultValue != null
                        ? $e(a, !!p.multiple, p.defaultValue, !0)
                        : $e(a, !!p.multiple, p.multiple ? [] : "", !1));
              }
              a[Ml] = p;
            } catch (ie) {
              ft(e, e.return, ie);
            }
        }
        break;
      case 6:
        if ((wr(t, e), zr(e), s & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (a = e.stateNode), (p = e.memoizedProps);
          try {
            a.nodeValue = p;
          } catch (ie) {
            ft(e, e.return, ie);
          }
        }
        break;
      case 3:
        if (
          (wr(t, e), zr(e), s & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            xl(t.containerInfo);
          } catch (ie) {
            ft(e, e.return, ie);
          }
        break;
      case 4:
        wr(t, e), zr(e);
        break;
      case 13:
        wr(t, e),
          zr(e),
          (a = e.child),
          a.flags & 8192 &&
            ((p = a.memoizedState !== null),
            (a.stateNode.isHidden = p),
            !p ||
              (a.alternate !== null && a.alternate.memoizedState !== null) ||
              (Ac = Ne())),
          s & 4 && _h(e);
        break;
      case 22:
        if (
          ((H = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((Gt = (z = Gt) || H), wr(t, e), (Gt = z)) : wr(t, e),
          zr(e),
          s & 8192)
        ) {
          if (
            ((z = e.memoizedState !== null),
            (e.stateNode.isHidden = z) && !H && e.mode & 1)
          )
            for (te = e, H = e.child; H !== null; ) {
              for (Q = te = H; te !== null; ) {
                switch (((Y = te), (J = Y.child), Y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    $l(4, Y, Y.return);
                    break;
                  case 1:
                    Wo(Y, Y.return);
                    var re = Y.stateNode;
                    if (typeof re.componentWillUnmount == "function") {
                      (s = Y), (r = Y.return);
                      try {
                        (t = s),
                          (re.props = t.memoizedProps),
                          (re.state = t.memoizedState),
                          re.componentWillUnmount();
                      } catch (ie) {
                        ft(s, r, ie);
                      }
                    }
                    break;
                  case 5:
                    Wo(Y, Y.return);
                    break;
                  case 22:
                    if (Y.memoizedState !== null) {
                      wh(Q);
                      continue;
                    }
                }
                J !== null ? ((J.return = Y), (te = J)) : wh(Q);
              }
              H = H.sibling;
            }
          e: for (H = null, Q = e; ; ) {
            if (Q.tag === 5) {
              if (H === null) {
                H = Q;
                try {
                  (a = Q.stateNode),
                    z
                      ? ((p = a.style),
                        typeof p.setProperty == "function"
                          ? p.setProperty("display", "none", "important")
                          : (p.display = "none"))
                      : ((w = Q.stateNode),
                        (C = Q.memoizedProps.style),
                        (m =
                          C != null && C.hasOwnProperty("display")
                            ? C.display
                            : null),
                        (w.style.display = Bi("display", m)));
                } catch (ie) {
                  ft(e, e.return, ie);
                }
              }
            } else if (Q.tag === 6) {
              if (H === null)
                try {
                  Q.stateNode.nodeValue = z ? "" : Q.memoizedProps;
                } catch (ie) {
                  ft(e, e.return, ie);
                }
            } else if (
              ((Q.tag !== 22 && Q.tag !== 23) ||
                Q.memoizedState === null ||
                Q === e) &&
              Q.child !== null
            ) {
              (Q.child.return = Q), (Q = Q.child);
              continue;
            }
            if (Q === e) break e;
            for (; Q.sibling === null; ) {
              if (Q.return === null || Q.return === e) break e;
              H === Q && (H = null), (Q = Q.return);
            }
            H === Q && (H = null),
              (Q.sibling.return = Q.return),
              (Q = Q.sibling);
          }
        }
        break;
      case 19:
        wr(t, e), zr(e), s & 4 && _h(e);
        break;
      case 21:
        break;
      default:
        wr(t, e), zr(e);
    }
  }
  function zr(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (hh(r)) {
              var s = r;
              break e;
            }
            r = r.return;
          }
          throw Error(i(160));
        }
        switch (s.tag) {
          case 5:
            var a = s.stateNode;
            s.flags & 32 && (nn(a, ""), (s.flags &= -33));
            var p = mh(e);
            Dc(e, p, a);
            break;
          case 3:
          case 4:
            var m = s.stateNode.containerInfo,
              w = mh(e);
            zc(e, w, m);
            break;
          default:
            throw Error(i(161));
        }
      } catch (C) {
        ft(e, e.return, C);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function P_(e, t, r) {
    (te = e), yh(e);
  }
  function yh(e, t, r) {
    for (var s = (e.mode & 1) !== 0; te !== null; ) {
      var a = te,
        p = a.child;
      if (a.tag === 22 && s) {
        var m = a.memoizedState !== null || fu;
        if (!m) {
          var w = a.alternate,
            C = (w !== null && w.memoizedState !== null) || Gt;
          w = fu;
          var z = Gt;
          if (((fu = m), (Gt = C) && !z))
            for (te = a; te !== null; )
              (m = te),
                (C = m.child),
                m.tag === 22 && m.memoizedState !== null
                  ? Sh(a)
                  : C !== null
                  ? ((C.return = m), (te = C))
                  : Sh(a);
          for (; p !== null; ) (te = p), yh(p), (p = p.sibling);
          (te = a), (fu = w), (Gt = z);
        }
        xh(e);
      } else
        a.subtreeFlags & 8772 && p !== null
          ? ((p.return = a), (te = p))
          : xh(e);
    }
  }
  function xh(e) {
    for (; te !== null; ) {
      var t = te;
      if (t.flags & 8772) {
        var r = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Gt || du(5, t);
                break;
              case 1:
                var s = t.stateNode;
                if (t.flags & 4 && !Gt)
                  if (r === null) s.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : yr(t.type, r.memoizedProps);
                    s.componentDidUpdate(
                      a,
                      r.memoizedState,
                      s.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var p = t.updateQueue;
                p !== null && wp(t, p, s);
                break;
              case 3:
                var m = t.updateQueue;
                if (m !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  wp(t, m, r);
                }
                break;
              case 5:
                var w = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = w;
                  var C = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      C.autoFocus && r.focus();
                      break;
                    case "img":
                      C.src && (r.src = C.src);
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
                if (t.memoizedState === null) {
                  var z = t.alternate;
                  if (z !== null) {
                    var H = z.memoizedState;
                    if (H !== null) {
                      var Q = H.dehydrated;
                      Q !== null && xl(Q);
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
                throw Error(i(163));
            }
          Gt || (t.flags & 512 && Mc(t));
        } catch (Y) {
          ft(t, t.return, Y);
        }
      }
      if (t === e) {
        te = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (te = r);
        break;
      }
      te = t.return;
    }
  }
  function wh(e) {
    for (; te !== null; ) {
      var t = te;
      if (t === e) {
        te = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (te = r);
        break;
      }
      te = t.return;
    }
  }
  function Sh(e) {
    for (; te !== null; ) {
      var t = te;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              du(4, t);
            } catch (C) {
              ft(t, r, C);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var a = t.return;
              try {
                s.componentDidMount();
              } catch (C) {
                ft(t, a, C);
              }
            }
            var p = t.return;
            try {
              Mc(t);
            } catch (C) {
              ft(t, p, C);
            }
            break;
          case 5:
            var m = t.return;
            try {
              Mc(t);
            } catch (C) {
              ft(t, m, C);
            }
        }
      } catch (C) {
        ft(t, t.return, C);
      }
      if (t === e) {
        te = null;
        break;
      }
      var w = t.sibling;
      if (w !== null) {
        (w.return = t.return), (te = w);
        break;
      }
      te = t.return;
    }
  }
  var O_ = Math.ceil,
    pu = D.ReactCurrentDispatcher,
    Lc = D.ReactCurrentOwner,
    nr = D.ReactCurrentBatchConfig,
    Fe = 0,
    Dt = null,
    wt = null,
    Vt = 0,
    Un = 0,
    Yo = hi(0),
    Et = 0,
    Wl = null,
    Ki = 0,
    hu = 0,
    jc = 0,
    Yl = null,
    Cn = null,
    Ac = 0,
    Ho = 1 / 0,
    qr = null,
    mu = !1,
    Ic = null,
    xi = null,
    gu = !1,
    wi = null,
    _u = 0,
    Hl = 0,
    Fc = null,
    vu = -1,
    yu = 0;
  function sn() {
    return Fe & 6 ? Ne() : vu !== -1 ? vu : (vu = Ne());
  }
  function Si(e) {
    return e.mode & 1
      ? Fe & 2 && Vt !== 0
        ? Vt & -Vt
        : f_.transition !== null
        ? (yu === 0 && (yu = md()), yu)
        : ((e = Ve),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cd(e.type))),
          e)
      : 1;
  }
  function Sr(e, t, r, s) {
    if (50 < Hl) throw ((Hl = 0), (Fc = null), Error(i(185)));
    ml(e, r, s),
      (!(Fe & 2) || e !== Dt) &&
        (e === Dt && (!(Fe & 2) && (hu |= r), Et === 4 && ki(e, Vt)),
        Tn(e, s),
        r === 1 &&
          Fe === 0 &&
          !(t.mode & 1) &&
          ((Ho = Ne() + 500), Xs && gi()));
  }
  function Tn(e, t) {
    var r = e.callbackNode;
    fg(e, t);
    var s = Os(e, e === Dt ? Vt : 0);
    if (s === 0)
      r !== null && Ct(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = s & -s), e.callbackPriority !== t)) {
      if ((r != null && Ct(r), t === 1))
        e.tag === 0 ? c_(Ch.bind(null, e)) : ap(Ch.bind(null, e)),
          l_(function () {
            !(Fe & 6) && gi();
          }),
          (r = null);
      else {
        switch (gd(s)) {
          case 1:
            r = xn;
            break;
          case 4:
            r = Co;
            break;
          case 16:
            r = Ui;
            break;
          case 536870912:
            r = An;
            break;
          default:
            r = Ui;
        }
        r = zh(r, kh.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function kh(e, t) {
    if (((vu = -1), (yu = 0), Fe & 6)) throw Error(i(327));
    var r = e.callbackNode;
    if (bo() && e.callbackNode !== r) return null;
    var s = Os(e, e === Dt ? Vt : 0);
    if (s === 0) return null;
    if (s & 30 || s & e.expiredLanes || t) t = xu(e, s);
    else {
      t = s;
      var a = Fe;
      Fe |= 2;
      var p = Eh();
      (Dt !== e || Vt !== t) && ((qr = null), (Ho = Ne() + 500), Zi(e, t));
      do
        try {
          M_();
          break;
        } catch (w) {
          Th(e, w);
        }
      while (!0);
      nc(),
        (pu.current = p),
        (Fe = a),
        wt !== null ? (t = 0) : ((Dt = null), (Vt = 0), (t = Et));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((a = va(e)), a !== 0 && ((s = a), (t = Bc(e, a)))),
        t === 1)
      )
        throw ((r = Wl), Zi(e, 0), ki(e, s), Tn(e, Ne()), r);
      if (t === 6) ki(e, s);
      else {
        if (
          ((a = e.current.alternate),
          !(s & 30) &&
            !N_(a) &&
            ((t = xu(e, s)),
            t === 2 && ((p = va(e)), p !== 0 && ((s = p), (t = Bc(e, p)))),
            t === 1))
        )
          throw ((r = Wl), Zi(e, 0), ki(e, s), Tn(e, Ne()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = s), t)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Ji(e, Cn, qr);
            break;
          case 3:
            if (
              (ki(e, s),
              (s & 130023424) === s && ((t = Ac + 500 - Ne()), 10 < t))
            ) {
              if (Os(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & s) !== s)) {
                sn(), (e.pingedLanes |= e.suspendedLanes & a);
                break;
              }
              e.timeoutHandle = Ha(Ji.bind(null, e, Cn, qr), t);
              break;
            }
            Ji(e, Cn, qr);
            break;
          case 4:
            if ((ki(e, s), (s & 4194240) === s)) break;
            for (t = e.eventTimes, a = -1; 0 < s; ) {
              var m = 31 - gr(s);
              (p = 1 << m), (m = t[m]), m > a && (a = m), (s &= ~p);
            }
            if (
              ((s = a),
              (s = Ne() - s),
              (s =
                (120 > s
                  ? 120
                  : 480 > s
                  ? 480
                  : 1080 > s
                  ? 1080
                  : 1920 > s
                  ? 1920
                  : 3e3 > s
                  ? 3e3
                  : 4320 > s
                  ? 4320
                  : 1960 * O_(s / 1960)) - s),
              10 < s)
            ) {
              e.timeoutHandle = Ha(Ji.bind(null, e, Cn, qr), s);
              break;
            }
            Ji(e, Cn, qr);
            break;
          case 5:
            Ji(e, Cn, qr);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return Tn(e, Ne()), e.callbackNode === r ? kh.bind(null, e) : null;
  }
  function Bc(e, t) {
    var r = Yl;
    return (
      e.current.memoizedState.isDehydrated && (Zi(e, t).flags |= 256),
      (e = xu(e, t)),
      e !== 2 && ((t = Cn), (Cn = r), t !== null && Uc(t)),
      e
    );
  }
  function Uc(e) {
    Cn === null ? (Cn = e) : Cn.push.apply(Cn, e);
  }
  function N_(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var s = 0; s < r.length; s++) {
            var a = r[s],
              p = a.getSnapshot;
            a = a.value;
            try {
              if (!_r(p(), a)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ki(e, t) {
    for (
      t &= ~jc,
        t &= ~hu,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - gr(t),
        s = 1 << r;
      (e[r] = -1), (t &= ~s);
    }
  }
  function Ch(e) {
    if (Fe & 6) throw Error(i(327));
    bo();
    var t = Os(e, 0);
    if (!(t & 1)) return Tn(e, Ne()), null;
    var r = xu(e, t);
    if (e.tag !== 0 && r === 2) {
      var s = va(e);
      s !== 0 && ((t = s), (r = Bc(e, s)));
    }
    if (r === 1) throw ((r = Wl), Zi(e, 0), ki(e, t), Tn(e, Ne()), r);
    if (r === 6) throw Error(i(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Ji(e, Cn, qr),
      Tn(e, Ne()),
      null
    );
  }
  function Vc(e, t) {
    var r = Fe;
    Fe |= 1;
    try {
      return e(t);
    } finally {
      (Fe = r), Fe === 0 && ((Ho = Ne() + 500), Xs && gi());
    }
  }
  function qi(e) {
    wi !== null && wi.tag === 0 && !(Fe & 6) && bo();
    var t = Fe;
    Fe |= 1;
    var r = nr.transition,
      s = Ve;
    try {
      if (((nr.transition = null), (Ve = 1), e)) return e();
    } finally {
      (Ve = s), (nr.transition = r), (Fe = t), !(Fe & 6) && gi();
    }
  }
  function $c() {
    (Un = Yo.current), Ze(Yo);
  }
  function Zi(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), o_(r)), wt !== null))
      for (r = wt.return; r !== null; ) {
        var s = r;
        switch ((qa(s), s.tag)) {
          case 1:
            (s = s.type.childContextTypes), s != null && Hs();
            break;
          case 3:
            Vo(), Ze(wn), Ze(bt), cc();
            break;
          case 5:
            uc(s);
            break;
          case 4:
            Vo();
            break;
          case 13:
            Ze(it);
            break;
          case 19:
            Ze(it);
            break;
          case 10:
            rc(s.type._context);
            break;
          case 22:
          case 23:
            $c();
        }
        r = r.return;
      }
    if (
      ((Dt = e),
      (wt = e = Ci(e.current, null)),
      (Vt = Un = t),
      (Et = 0),
      (Wl = null),
      (jc = hu = Ki = 0),
      (Cn = Yl = null),
      Xi !== null)
    ) {
      for (t = 0; t < Xi.length; t++)
        if (((r = Xi[t]), (s = r.interleaved), s !== null)) {
          r.interleaved = null;
          var a = s.next,
            p = r.pending;
          if (p !== null) {
            var m = p.next;
            (p.next = a), (s.next = m);
          }
          r.pending = s;
        }
      Xi = null;
    }
    return e;
  }
  function Th(e, t) {
    do {
      var r = wt;
      try {
        if ((nc(), (ru.current = su), iu)) {
          for (var s = ot.memoizedState; s !== null; ) {
            var a = s.queue;
            a !== null && (a.pending = null), (s = s.next);
          }
          iu = !1;
        }
        if (
          ((Gi = 0),
          (zt = Tt = ot = null),
          (Il = !1),
          (Fl = 0),
          (Lc.current = null),
          r === null || r.return === null)
        ) {
          (Et = 1), (Wl = t), (wt = null);
          break;
        }
        e: {
          var p = e,
            m = r.return,
            w = r,
            C = t;
          if (
            ((t = Vt),
            (w.flags |= 32768),
            C !== null && typeof C == "object" && typeof C.then == "function")
          ) {
            var z = C,
              H = w,
              Q = H.tag;
            if (!(H.mode & 1) && (Q === 0 || Q === 11 || Q === 15)) {
              var Y = H.alternate;
              Y
                ? ((H.updateQueue = Y.updateQueue),
                  (H.memoizedState = Y.memoizedState),
                  (H.lanes = Y.lanes))
                : ((H.updateQueue = null), (H.memoizedState = null));
            }
            var J = Kp(m);
            if (J !== null) {
              (J.flags &= -257),
                qp(J, m, w, p, t),
                J.mode & 1 && Gp(p, z, t),
                (t = J),
                (C = z);
              var re = t.updateQueue;
              if (re === null) {
                var ie = new Set();
                ie.add(C), (t.updateQueue = ie);
              } else re.add(C);
              break e;
            } else {
              if (!(t & 1)) {
                Gp(p, z, t), Wc();
                break e;
              }
              C = Error(i(426));
            }
          } else if (tt && w.mode & 1) {
            var mt = Kp(m);
            if (mt !== null) {
              !(mt.flags & 65536) && (mt.flags |= 256),
                qp(mt, m, w, p, t),
                ec($o(C, w));
              break e;
            }
          }
          (p = C = $o(C, w)),
            Et !== 4 && (Et = 2),
            Yl === null ? (Yl = [p]) : Yl.push(p),
            (p = m);
          do {
            switch (p.tag) {
              case 3:
                (p.flags |= 65536), (t &= -t), (p.lanes |= t);
                var N = Xp(p, C, t);
                xp(p, N);
                break e;
              case 1:
                w = C;
                var P = p.type,
                  R = p.stateNode;
                if (
                  !(p.flags & 128) &&
                  (typeof P.getDerivedStateFromError == "function" ||
                    (R !== null &&
                      typeof R.componentDidCatch == "function" &&
                      (xi === null || !xi.has(R))))
                ) {
                  (p.flags |= 65536), (t &= -t), (p.lanes |= t);
                  var G = Qp(p, w, t);
                  xp(p, G);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        Oh(r);
      } catch (le) {
        (t = le), wt === r && r !== null && (wt = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Eh() {
    var e = pu.current;
    return (pu.current = su), e === null ? su : e;
  }
  function Wc() {
    (Et === 0 || Et === 3 || Et === 2) && (Et = 4),
      Dt === null || (!(Ki & 268435455) && !(hu & 268435455)) || ki(Dt, Vt);
  }
  function xu(e, t) {
    var r = Fe;
    Fe |= 2;
    var s = Eh();
    (Dt !== e || Vt !== t) && ((qr = null), Zi(e, t));
    do
      try {
        R_();
        break;
      } catch (a) {
        Th(e, a);
      }
    while (!0);
    if ((nc(), (Fe = r), (pu.current = s), wt !== null)) throw Error(i(261));
    return (Dt = null), (Vt = 0), Et;
  }
  function R_() {
    for (; wt !== null; ) Ph(wt);
  }
  function M_() {
    for (; wt !== null && !Wr(); ) Ph(wt);
  }
  function Ph(e) {
    var t = Mh(e.alternate, e, Un);
    (e.memoizedProps = e.pendingProps),
      t === null ? Oh(e) : (wt = t),
      (Lc.current = null);
  }
  function Oh(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((r = C_(r, t)), r !== null)) {
          (r.flags &= 32767), (wt = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Et = 6), (wt = null);
          return;
        }
      } else if (((r = k_(r, t, Un)), r !== null)) {
        wt = r;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        wt = t;
        return;
      }
      wt = t = e;
    } while (t !== null);
    Et === 0 && (Et = 5);
  }
  function Ji(e, t, r) {
    var s = Ve,
      a = nr.transition;
    try {
      (nr.transition = null), (Ve = 1), z_(e, t, r, s);
    } finally {
      (nr.transition = a), (Ve = s);
    }
    return null;
  }
  function z_(e, t, r, s) {
    do bo();
    while (wi !== null);
    if (Fe & 6) throw Error(i(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(i(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var p = r.lanes | r.childLanes;
    if (
      (dg(e, p),
      e === Dt && ((wt = Dt = null), (Vt = 0)),
      (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
        gu ||
        ((gu = !0),
        zh(Ui, function () {
          return bo(), null;
        })),
      (p = (r.flags & 15990) !== 0),
      r.subtreeFlags & 15990 || p)
    ) {
      (p = nr.transition), (nr.transition = null);
      var m = Ve;
      Ve = 1;
      var w = Fe;
      (Fe |= 4),
        (Lc.current = null),
        E_(e, r),
        vh(r, e),
        Zg(Wa),
        (Ms = !!$a),
        (Wa = $a = null),
        (e.current = r),
        P_(r),
        ko(),
        (Fe = w),
        (Ve = m),
        (nr.transition = p);
    } else e.current = r;
    if (
      (gu && ((gu = !1), (wi = e), (_u = a)),
      (p = e.pendingLanes),
      p === 0 && (xi = null),
      $i(r.stateNode),
      Tn(e, Ne()),
      t !== null)
    )
      for (s = e.onRecoverableError, r = 0; r < t.length; r++)
        (a = t[r]), s(a.value, { componentStack: a.stack, digest: a.digest });
    if (mu) throw ((mu = !1), (e = Ic), (Ic = null), e);
    return (
      _u & 1 && e.tag !== 0 && bo(),
      (p = e.pendingLanes),
      p & 1 ? (e === Fc ? Hl++ : ((Hl = 0), (Fc = e))) : (Hl = 0),
      gi(),
      null
    );
  }
  function bo() {
    if (wi !== null) {
      var e = gd(_u),
        t = nr.transition,
        r = Ve;
      try {
        if (((nr.transition = null), (Ve = 16 > e ? 16 : e), wi === null))
          var s = !1;
        else {
          if (((e = wi), (wi = null), (_u = 0), Fe & 6)) throw Error(i(331));
          var a = Fe;
          for (Fe |= 4, te = e.current; te !== null; ) {
            var p = te,
              m = p.child;
            if (te.flags & 16) {
              var w = p.deletions;
              if (w !== null) {
                for (var C = 0; C < w.length; C++) {
                  var z = w[C];
                  for (te = z; te !== null; ) {
                    var H = te;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $l(8, H, p);
                    }
                    var Q = H.child;
                    if (Q !== null) (Q.return = H), (te = Q);
                    else
                      for (; te !== null; ) {
                        H = te;
                        var Y = H.sibling,
                          J = H.return;
                        if ((ph(H), H === z)) {
                          te = null;
                          break;
                        }
                        if (Y !== null) {
                          (Y.return = J), (te = Y);
                          break;
                        }
                        te = J;
                      }
                  }
                }
                var re = p.alternate;
                if (re !== null) {
                  var ie = re.child;
                  if (ie !== null) {
                    re.child = null;
                    do {
                      var mt = ie.sibling;
                      (ie.sibling = null), (ie = mt);
                    } while (ie !== null);
                  }
                }
                te = p;
              }
            }
            if (p.subtreeFlags & 2064 && m !== null) (m.return = p), (te = m);
            else
              e: for (; te !== null; ) {
                if (((p = te), p.flags & 2048))
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $l(9, p, p.return);
                  }
                var N = p.sibling;
                if (N !== null) {
                  (N.return = p.return), (te = N);
                  break e;
                }
                te = p.return;
              }
          }
          var P = e.current;
          for (te = P; te !== null; ) {
            m = te;
            var R = m.child;
            if (m.subtreeFlags & 2064 && R !== null) (R.return = m), (te = R);
            else
              e: for (m = P; te !== null; ) {
                if (((w = te), w.flags & 2048))
                  try {
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        du(9, w);
                    }
                  } catch (le) {
                    ft(w, w.return, le);
                  }
                if (w === m) {
                  te = null;
                  break e;
                }
                var G = w.sibling;
                if (G !== null) {
                  (G.return = w.return), (te = G);
                  break e;
                }
                te = w.return;
              }
          }
          if (
            ((Fe = a),
            gi(),
            on && typeof on.onPostCommitFiberRoot == "function")
          )
            try {
              on.onPostCommitFiberRoot(Or, e);
            } catch {}
          s = !0;
        }
        return s;
      } finally {
        (Ve = r), (nr.transition = t);
      }
    }
    return !1;
  }
  function Nh(e, t, r) {
    (t = $o(r, t)),
      (t = Xp(e, t, 1)),
      (e = vi(e, t, 1)),
      (t = sn()),
      e !== null && (ml(e, 1, t), Tn(e, t));
  }
  function ft(e, t, r) {
    if (e.tag === 3) Nh(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Nh(t, e, r);
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof s.componentDidCatch == "function" &&
              (xi === null || !xi.has(s)))
          ) {
            (e = $o(r, e)),
              (e = Qp(t, e, 1)),
              (t = vi(t, e, 1)),
              (e = sn()),
              t !== null && (ml(t, 1, e), Tn(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function D_(e, t, r) {
    var s = e.pingCache;
    s !== null && s.delete(t),
      (t = sn()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Dt === e &&
        (Vt & r) === r &&
        (Et === 4 || (Et === 3 && (Vt & 130023424) === Vt && 500 > Ne() - Ac)
          ? Zi(e, 0)
          : (jc |= r)),
      Tn(e, t);
  }
  function Rh(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Ps), (Ps <<= 1), !(Ps & 130023424) && (Ps = 4194304))
        : (t = 1));
    var r = sn();
    (e = Qr(e, t)), e !== null && (ml(e, t, r), Tn(e, r));
  }
  function L_(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), Rh(e, r);
  }
  function j_(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode,
          a = e.memoizedState;
        a !== null && (r = a.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    s !== null && s.delete(t), Rh(e, r);
  }
  var Mh;
  Mh = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || wn.current) kn = !0;
      else {
        if (!(e.lanes & r) && !(t.flags & 128)) return (kn = !1), S_(e, t, r);
        kn = !!(e.flags & 131072);
      }
    else (kn = !1), tt && t.flags & 1048576 && cp(t, Gs, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var s = t.type;
        cu(e, t), (e = t.pendingProps);
        var a = Lo(t, bt.current);
        Uo(t, r), (a = pc(null, t, s, e, a, r));
        var p = hc();
        return (
          (t.flags |= 1),
          typeof a == "object" &&
          a !== null &&
          typeof a.render == "function" &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Sn(s) ? ((p = !0), bs(t)) : (p = !1),
              (t.memoizedState =
                a.state !== null && a.state !== void 0 ? a.state : null),
              lc(t),
              (a.updater = uu),
              (t.stateNode = a),
              (a._reactInternals = t),
              xc(t, s, e, r),
              (t = Cc(null, t, s, !0, p, r)))
            : ((t.tag = 0), tt && p && Ka(t), ln(null, t, a, r), (t = t.child)),
          t
        );
      case 16:
        s = t.elementType;
        e: {
          switch (
            (cu(e, t),
            (e = t.pendingProps),
            (a = s._init),
            (s = a(s._payload)),
            (t.type = s),
            (a = t.tag = I_(s)),
            (e = yr(s, e)),
            a)
          ) {
            case 0:
              t = kc(null, t, s, e, r);
              break e;
            case 1:
              t = rh(null, t, s, e, r);
              break e;
            case 11:
              t = Zp(null, t, s, e, r);
              break e;
            case 14:
              t = Jp(null, t, s, yr(s.type, e), r);
              break e;
          }
          throw Error(i(306, s, ""));
        }
        return t;
      case 0:
        return (
          (s = t.type),
          (a = t.pendingProps),
          (a = t.elementType === s ? a : yr(s, a)),
          kc(e, t, s, a, r)
        );
      case 1:
        return (
          (s = t.type),
          (a = t.pendingProps),
          (a = t.elementType === s ? a : yr(s, a)),
          rh(e, t, s, a, r)
        );
      case 3:
        e: {
          if ((ih(t), e === null)) throw Error(i(387));
          (s = t.pendingProps),
            (p = t.memoizedState),
            (a = p.element),
            yp(e, t),
            tu(t, s, null, r);
          var m = t.memoizedState;
          if (((s = m.element), p.isDehydrated))
            if (
              ((p = {
                element: s,
                isDehydrated: !1,
                cache: m.cache,
                pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
                transitions: m.transitions,
              }),
              (t.updateQueue.baseState = p),
              (t.memoizedState = p),
              t.flags & 256)
            ) {
              (a = $o(Error(i(423)), t)), (t = oh(e, t, s, r, a));
              break e;
            } else if (s !== a) {
              (a = $o(Error(i(424)), t)), (t = oh(e, t, s, r, a));
              break e;
            } else
              for (
                Bn = pi(t.stateNode.containerInfo.firstChild),
                  Fn = t,
                  tt = !0,
                  vr = null,
                  r = _p(t, null, s, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((Io(), s === a)) {
              t = Kr(e, t, r);
              break e;
            }
            ln(e, t, s, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Sp(t),
          e === null && Ja(t),
          (s = t.type),
          (a = t.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (m = a.children),
          Ya(s, a) ? (m = null) : p !== null && Ya(s, p) && (t.flags |= 32),
          nh(e, t),
          ln(e, t, m, r),
          t.child
        );
      case 6:
        return e === null && Ja(t), null;
      case 13:
        return lh(e, t, r);
      case 4:
        return (
          sc(t, t.stateNode.containerInfo),
          (s = t.pendingProps),
          e === null ? (t.child = Fo(t, null, s, r)) : ln(e, t, s, r),
          t.child
        );
      case 11:
        return (
          (s = t.type),
          (a = t.pendingProps),
          (a = t.elementType === s ? a : yr(s, a)),
          Zp(e, t, s, a, r)
        );
      case 7:
        return ln(e, t, t.pendingProps, r), t.child;
      case 8:
        return ln(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return ln(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((s = t.type._context),
            (a = t.pendingProps),
            (p = t.memoizedProps),
            (m = a.value),
            be(Zs, s._currentValue),
            (s._currentValue = m),
            p !== null)
          )
            if (_r(p.value, m)) {
              if (p.children === a.children && !wn.current) {
                t = Kr(e, t, r);
                break e;
              }
            } else
              for (p = t.child, p !== null && (p.return = t); p !== null; ) {
                var w = p.dependencies;
                if (w !== null) {
                  m = p.child;
                  for (var C = w.firstContext; C !== null; ) {
                    if (C.context === s) {
                      if (p.tag === 1) {
                        (C = Gr(-1, r & -r)), (C.tag = 2);
                        var z = p.updateQueue;
                        if (z !== null) {
                          z = z.shared;
                          var H = z.pending;
                          H === null
                            ? (C.next = C)
                            : ((C.next = H.next), (H.next = C)),
                            (z.pending = C);
                        }
                      }
                      (p.lanes |= r),
                        (C = p.alternate),
                        C !== null && (C.lanes |= r),
                        ic(p.return, r, t),
                        (w.lanes |= r);
                      break;
                    }
                    C = C.next;
                  }
                } else if (p.tag === 10) m = p.type === t.type ? null : p.child;
                else if (p.tag === 18) {
                  if (((m = p.return), m === null)) throw Error(i(341));
                  (m.lanes |= r),
                    (w = m.alternate),
                    w !== null && (w.lanes |= r),
                    ic(m, r, t),
                    (m = p.sibling);
                } else m = p.child;
                if (m !== null) m.return = p;
                else
                  for (m = p; m !== null; ) {
                    if (m === t) {
                      m = null;
                      break;
                    }
                    if (((p = m.sibling), p !== null)) {
                      (p.return = m.return), (m = p);
                      break;
                    }
                    m = m.return;
                  }
                p = m;
              }
          ln(e, t, a.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (s = t.pendingProps.children),
          Uo(t, r),
          (a = er(a)),
          (s = s(a)),
          (t.flags |= 1),
          ln(e, t, s, r),
          t.child
        );
      case 14:
        return (
          (s = t.type),
          (a = yr(s, t.pendingProps)),
          (a = yr(s.type, a)),
          Jp(e, t, s, a, r)
        );
      case 15:
        return eh(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (s = t.type),
          (a = t.pendingProps),
          (a = t.elementType === s ? a : yr(s, a)),
          cu(e, t),
          (t.tag = 1),
          Sn(s) ? ((e = !0), bs(t)) : (e = !1),
          Uo(t, r),
          Hp(t, s, a),
          xc(t, s, a, r),
          Cc(null, t, s, !0, e, r)
        );
      case 19:
        return uh(e, t, r);
      case 22:
        return th(e, t, r);
    }
    throw Error(i(156, t.tag));
  };
  function zh(e, t) {
    return xt(e, t);
  }
  function A_(e, t, r, s) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function rr(e, t, r, s) {
    return new A_(e, t, r, s);
  }
  function Yc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function I_(e) {
    if (typeof e == "function") return Yc(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === K)) return 11;
      if (e === ke) return 14;
    }
    return 2;
  }
  function Ci(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = rr(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function wu(e, t, r, s, a, p) {
    var m = 2;
    if (((s = e), typeof e == "function")) Yc(e) && (m = 1);
    else if (typeof e == "string") m = 5;
    else
      e: switch (e) {
        case L:
          return eo(r.children, a, p, t);
        case b:
          (m = 8), (a |= 8);
          break;
        case $:
          return (
            (e = rr(12, r, t, a | 2)), (e.elementType = $), (e.lanes = p), e
          );
        case he:
          return (e = rr(13, r, t, a)), (e.elementType = he), (e.lanes = p), e;
        case ge:
          return (e = rr(19, r, t, a)), (e.elementType = ge), (e.lanes = p), e;
        case ee:
          return Su(r, a, p, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case X:
                m = 10;
                break e;
              case pe:
                m = 9;
                break e;
              case K:
                m = 11;
                break e;
              case ke:
                m = 14;
                break e;
              case fe:
                (m = 16), (s = null);
                break e;
            }
          throw Error(i(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = rr(m, r, t, a)), (t.elementType = e), (t.type = s), (t.lanes = p), t
    );
  }
  function eo(e, t, r, s) {
    return (e = rr(7, e, s, t)), (e.lanes = r), e;
  }
  function Su(e, t, r, s) {
    return (
      (e = rr(22, e, s, t)),
      (e.elementType = ee),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Hc(e, t, r) {
    return (e = rr(6, e, null, t)), (e.lanes = r), e;
  }
  function bc(e, t, r) {
    return (
      (t = rr(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function F_(e, t, r, s, a) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = ya(0)),
      (this.expirationTimes = ya(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ya(0)),
      (this.identifierPrefix = s),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Xc(e, t, r, s, a, p, m, w, C) {
    return (
      (e = new F_(e, t, r, w, C)),
      t === 1 ? ((t = 1), p === !0 && (t |= 8)) : (t = 0),
      (p = rr(3, null, null, t)),
      (e.current = p),
      (p.stateNode = e),
      (p.memoizedState = {
        element: s,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      lc(p),
      e
    );
  }
  function B_(e, t, r) {
    var s =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: V,
      key: s == null ? null : "" + s,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function Dh(e) {
    if (!e) return mi;
    e = e._reactInternals;
    e: {
      if (je(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Sn(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (Sn(r)) return sp(e, r, t);
    }
    return t;
  }
  function Lh(e, t, r, s, a, p, m, w, C) {
    return (
      (e = Xc(r, s, !0, e, a, p, m, w, C)),
      (e.context = Dh(null)),
      (r = e.current),
      (s = sn()),
      (a = Si(r)),
      (p = Gr(s, a)),
      (p.callback = t ?? null),
      vi(r, p, a),
      (e.current.lanes = a),
      ml(e, a, s),
      Tn(e, s),
      e
    );
  }
  function ku(e, t, r, s) {
    var a = t.current,
      p = sn(),
      m = Si(a);
    return (
      (r = Dh(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Gr(p, m)),
      (t.payload = { element: e }),
      (s = s === void 0 ? null : s),
      s !== null && (t.callback = s),
      (e = vi(a, t, m)),
      e !== null && (Sr(e, a, m, p), eu(e, a, m)),
      m
    );
  }
  function Cu(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function jh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Qc(e, t) {
    jh(e, t), (e = e.alternate) && jh(e, t);
  }
  function U_() {
    return null;
  }
  var Ah =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Gc(e) {
    this._internalRoot = e;
  }
  (Tu.prototype.render = Gc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      ku(e, t, null, null);
    }),
    (Tu.prototype.unmount = Gc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          qi(function () {
            ku(null, e, null, null);
          }),
            (t[Yr] = null);
        }
      });
  function Tu(e) {
    this._internalRoot = e;
  }
  Tu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = yd();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < ci.length && t !== 0 && t < ci[r].priority; r++);
      ci.splice(r, 0, e), r === 0 && Sd(e);
    }
  };
  function Kc(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Eu(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ih() {}
  function V_(e, t, r, s, a) {
    if (a) {
      if (typeof s == "function") {
        var p = s;
        s = function () {
          var z = Cu(m);
          p.call(z);
        };
      }
      var m = Lh(t, s, e, 0, null, !1, !1, "", Ih);
      return (
        (e._reactRootContainer = m),
        (e[Yr] = m.current),
        Nl(e.nodeType === 8 ? e.parentNode : e),
        qi(),
        m
      );
    }
    for (; (a = e.lastChild); ) e.removeChild(a);
    if (typeof s == "function") {
      var w = s;
      s = function () {
        var z = Cu(C);
        w.call(z);
      };
    }
    var C = Xc(e, 0, !1, null, null, !1, !1, "", Ih);
    return (
      (e._reactRootContainer = C),
      (e[Yr] = C.current),
      Nl(e.nodeType === 8 ? e.parentNode : e),
      qi(function () {
        ku(t, C, r, s);
      }),
      C
    );
  }
  function Pu(e, t, r, s, a) {
    var p = r._reactRootContainer;
    if (p) {
      var m = p;
      if (typeof a == "function") {
        var w = a;
        a = function () {
          var C = Cu(m);
          w.call(C);
        };
      }
      ku(t, m, e, a);
    } else m = V_(r, t, e, a, s);
    return Cu(m);
  }
  (_d = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = hl(t.pendingLanes);
          r !== 0 &&
            (xa(t, r | 1), Tn(t, Ne()), !(Fe & 6) && ((Ho = Ne() + 500), gi()));
        }
        break;
      case 13:
        qi(function () {
          var s = Qr(e, 1);
          if (s !== null) {
            var a = sn();
            Sr(s, e, 1, a);
          }
        }),
          Qc(e, 1);
    }
  }),
    (wa = function (e) {
      if (e.tag === 13) {
        var t = Qr(e, 134217728);
        if (t !== null) {
          var r = sn();
          Sr(t, e, 134217728, r);
        }
        Qc(e, 134217728);
      }
    }),
    (vd = function (e) {
      if (e.tag === 13) {
        var t = Si(e),
          r = Qr(e, t);
        if (r !== null) {
          var s = sn();
          Sr(r, e, t, s);
        }
        Qc(e, t);
      }
    }),
    (yd = function () {
      return Ve;
    }),
    (xd = function (e, t) {
      var r = Ve;
      try {
        return (Ve = e), t();
      } finally {
        Ve = r;
      }
    }),
    (mr = function (e, t, r) {
      switch (t) {
        case "input":
          if ((j(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var s = r[t];
              if (s !== e && s.form === e.form) {
                var a = Ys(s);
                if (!a) throw Error(i(90));
                gn(s), j(s, a);
              }
            }
          }
          break;
        case "textarea":
          Vr(e, r);
          break;
        case "select":
          (t = r.value), t != null && $e(e, !!r.multiple, t, !1);
      }
    }),
    (qn = Vc),
    (li = qi);
  var $_ = { usingClientEntryPoint: !1, Events: [zl, zo, Ys, Pr, $r, Vc] },
    bl = {
      findFiberByHostInstance: Wi,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    W_ = {
      bundleType: bl.bundleType,
      version: bl.version,
      rendererPackageName: bl.rendererPackageName,
      rendererConfig: bl.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: D.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = jn(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: bl.findFiberByHostInstance || U_,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ou = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ou.isDisabled && Ou.supportsFiber)
      try {
        (Or = Ou.inject(W_)), (on = Ou);
      } catch {}
  }
  return (
    (En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $_),
    (En.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Kc(t)) throw Error(i(200));
      return B_(e, t, null, r);
    }),
    (En.createRoot = function (e, t) {
      if (!Kc(e)) throw Error(i(299));
      var r = !1,
        s = "",
        a = Ah;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = Xc(e, 1, !1, null, null, r, !1, s, a)),
        (e[Yr] = t.current),
        Nl(e.nodeType === 8 ? e.parentNode : e),
        new Gc(t)
      );
    }),
    (En.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(i(188))
          : ((e = Object.keys(e).join(",")), Error(i(268, e)));
      return (e = jn(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (En.flushSync = function (e) {
      return qi(e);
    }),
    (En.hydrate = function (e, t, r) {
      if (!Eu(t)) throw Error(i(200));
      return Pu(null, e, t, !0, r);
    }),
    (En.hydrateRoot = function (e, t, r) {
      if (!Kc(e)) throw Error(i(405));
      var s = (r != null && r.hydratedSources) || null,
        a = !1,
        p = "",
        m = Ah;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (p = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (m = r.onRecoverableError)),
        (t = Lh(t, null, e, 1, r ?? null, a, !1, p, m)),
        (e[Yr] = t.current),
        Nl(e),
        s)
      )
        for (e = 0; e < s.length; e++)
          (r = s[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a);
      return new Tu(t);
    }),
    (En.render = function (e, t, r) {
      if (!Eu(t)) throw Error(i(200));
      return Pu(null, e, t, !1, r);
    }),
    (En.unmountComponentAtNode = function (e) {
      if (!Eu(e)) throw Error(i(40));
      return e._reactRootContainer
        ? (qi(function () {
            Pu(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Yr] = null);
            });
          }),
          !0)
        : !1;
    }),
    (En.unstable_batchedUpdates = Vc),
    (En.unstable_renderSubtreeIntoContainer = function (e, t, r, s) {
      if (!Eu(r)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return Pu(e, t, r, !1, s);
    }),
    (En.version = "18.3.1-next-f1338f8080-20240426"),
    En
  );
}
var Hh;
function Z_() {
  if (Hh) return Jc.exports;
  Hh = 1;
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (n) {
        console.error(n);
      }
  }
  return f(), (Jc.exports = q_()), Jc.exports;
}
var bh;
function J_() {
  if (bh) return Nu;
  bh = 1;
  var f = Z_();
  return (Nu.createRoot = f.createRoot), (Nu.hydrateRoot = f.hydrateRoot), Nu;
}
var e1 = J_();
const z0 = ({
  title: f,
  id: n,
  rightIcon: i,
  leftIcon: o,
  containerClass: l,
}) =>
  M.jsxs("button", {
    id: n,
    className: `group relative z-10 w-fit
         cursor-pointer overflow-hidden 
         rounded-full bg-violet-50 px-7 
         py-3 text-black ${l}`,
    children: [
      o,
      M.jsx("span", {
        className:
          "relative inline-flex overflow-hidden font-general text-xs uppercase",
        children: M.jsx("div", { children: f }),
      }),
      i,
    ],
  });
var D0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Xh = uo.createContext && uo.createContext(D0),
  t1 = ["attr", "size", "title"];
function n1(f, n) {
  if (f == null) return {};
  var i = r1(f, n),
    o,
    l;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(f);
    for (l = 0; l < u.length; l++)
      (o = u[l]),
        !(n.indexOf(o) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(f, o) &&
          (i[o] = f[o]);
  }
  return i;
}
function r1(f, n) {
  if (f == null) return {};
  var i = {};
  for (var o in f)
    if (Object.prototype.hasOwnProperty.call(f, o)) {
      if (n.indexOf(o) >= 0) continue;
      i[o] = f[o];
    }
  return i;
}
function Ju() {
  return (
    (Ju = Object.assign
      ? Object.assign.bind()
      : function (f) {
          for (var n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            for (var o in i)
              Object.prototype.hasOwnProperty.call(i, o) && (f[o] = i[o]);
          }
          return f;
        }),
    Ju.apply(this, arguments)
  );
}
function Qh(f, n) {
  var i = Object.keys(f);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(f);
    n &&
      (o = o.filter(function (l) {
        return Object.getOwnPropertyDescriptor(f, l).enumerable;
      })),
      i.push.apply(i, o);
  }
  return i;
}
function ea(f) {
  for (var n = 1; n < arguments.length; n++) {
    var i = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? Qh(Object(i), !0).forEach(function (o) {
          i1(f, o, i[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(i))
      : Qh(Object(i)).forEach(function (o) {
          Object.defineProperty(f, o, Object.getOwnPropertyDescriptor(i, o));
        });
  }
  return f;
}
function i1(f, n, i) {
  return (
    (n = o1(n)),
    n in f
      ? Object.defineProperty(f, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (f[n] = i),
    f
  );
}
function o1(f) {
  var n = l1(f, "string");
  return typeof n == "symbol" ? n : n + "";
}
function l1(f, n) {
  if (typeof f != "object" || !f) return f;
  var i = f[Symbol.toPrimitive];
  if (i !== void 0) {
    var o = i.call(f, n || "default");
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(f);
}
function L0(f) {
  return (
    f &&
    f.map((n, i) =>
      uo.createElement(n.tag, ea({ key: i }, n.attr), L0(n.child))
    )
  );
}
function pa(f) {
  return (n) =>
    uo.createElement(s1, Ju({ attr: ea({}, f.attr) }, n), L0(f.child));
}
function s1(f) {
  var n = (i) => {
    var { attr: o, size: l, title: u } = f,
      c = n1(f, t1),
      d = l || i.size || "1em",
      h;
    return (
      i.className && (h = i.className),
      f.className && (h = (h ? h + " " : "") + f.className),
      uo.createElement(
        "svg",
        Ju(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          i.attr,
          o,
          c,
          {
            className: h,
            style: ea(ea({ color: f.color || i.color }, i.style), f.style),
            height: d,
            width: d,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        u && uo.createElement("title", null, u),
        f.children
      )
    );
  };
  return Xh !== void 0
    ? uo.createElement(Xh.Consumer, null, (i) => n(i))
    : n(D0);
}
function u1(f) {
  return pa({
    tag: "svg",
    attr: { version: "1.2", baseProfile: "tiny", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M10.368 19.102c.349 1.049 1.011 1.086 1.478.086l5.309-11.375c.467-1.002.034-1.434-.967-.967l-11.376 5.308c-1.001.467-.963 1.129.085 1.479l4.103 1.367 1.368 4.102z",
        },
        child: [],
      },
    ],
  })(f);
}
function Zr(f) {
  if (f === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return f;
}
function j0(f, n) {
  (f.prototype = Object.create(n.prototype)),
    (f.prototype.constructor = f),
    (f.__proto__ = n);
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Xn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  sl = { duration: 0.5, overwrite: !1, delay: 0 },
  Hf,
  Jt,
  nt,
  sr = 1e8,
  Xe = 1 / sr,
  yf = Math.PI * 2,
  a1 = yf / 4,
  c1 = 0,
  A0 = Math.sqrt,
  f1 = Math.cos,
  d1 = Math.sin,
  Ft = function (n) {
    return typeof n == "string";
  },
  dt = function (n) {
    return typeof n == "function";
  },
  ri = function (n) {
    return typeof n == "number";
  },
  bf = function (n) {
    return typeof n > "u";
  },
  Ur = function (n) {
    return typeof n == "object";
  },
  Nn = function (n) {
    return n !== !1;
  },
  Xf = function () {
    return typeof window < "u";
  },
  Ru = function (n) {
    return dt(n) || Ft(n);
  },
  I0 =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  en = Array.isArray,
  xf = /(?:-?\.?\d|\.)+/gi,
  F0 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Zo = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  nf = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  B0 = /[+-]=-?[.\d]+/,
  U0 = /[^,'"\[\]\s]+/gi,
  p1 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  st,
  Dr,
  wf,
  Qf,
  Qn = {},
  ta = {},
  V0,
  $0 = function (n) {
    return (ta = _o(n, Qn)) && Dn;
  },
  Gf = function (n, i) {
    return console.warn(
      "Invalid property",
      n,
      "set to",
      i,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  gs = function (n, i) {
    return !i && console.warn(n);
  },
  W0 = function (n, i) {
    return (n && (Qn[n] = i) && ta && (ta[n] = i)) || Qn;
  },
  _s = function () {
    return 0;
  },
  h1 = { suppressEvents: !0, isStart: !0, kill: !1 },
  Yu = { suppressEvents: !0, kill: !1 },
  m1 = { suppressEvents: !0 },
  Kf = {},
  zi = [],
  Sf = {},
  Y0,
  Wn = {},
  rf = {},
  Gh = 30,
  Hu = [],
  qf = "",
  Zf = function (n) {
    var i = n[0],
      o,
      l;
    if ((Ur(i) || dt(i) || (n = [n]), !(o = (i._gsap || {}).harness))) {
      for (l = Hu.length; l-- && !Hu[l].targetTest(i); );
      o = Hu[l];
    }
    for (l = n.length; l--; )
      (n[l] && (n[l]._gsap || (n[l]._gsap = new hm(n[l], o)))) ||
        n.splice(l, 1);
    return n;
  },
  ao = function (n) {
    return n._gsap || Zf(ur(n))[0]._gsap;
  },
  H0 = function (n, i, o) {
    return (o = n[i]) && dt(o)
      ? n[i]()
      : (bf(o) && n.getAttribute && n.getAttribute(i)) || o;
  },
  Rn = function (n, i) {
    return (n = n.split(",")).forEach(i) || n;
  },
  gt = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  It = function (n) {
    return Math.round(n * 1e7) / 1e7 || 0;
  },
  tl = function (n, i) {
    var o = i.charAt(0),
      l = parseFloat(i.substr(2));
    return (
      (n = parseFloat(n)),
      o === "+" ? n + l : o === "-" ? n - l : o === "*" ? n * l : n / l
    );
  },
  g1 = function (n, i) {
    for (var o = i.length, l = 0; n.indexOf(i[l]) < 0 && ++l < o; );
    return l < o;
  },
  na = function () {
    var n = zi.length,
      i = zi.slice(0),
      o,
      l;
    for (Sf = {}, zi.length = 0, o = 0; o < n; o++)
      (l = i[o]),
        l && l._lazy && (l.render(l._lazy[0], l._lazy[1], !0)._lazy = 0);
  },
  b0 = function (n, i, o, l) {
    zi.length && !Jt && na(),
      n.render(i, o, Jt && i < 0 && (n._initted || n._startAt)),
      zi.length && !Jt && na();
  },
  X0 = function (n) {
    var i = parseFloat(n);
    return (i || i === 0) && (n + "").match(U0).length < 2
      ? i
      : Ft(n)
      ? n.trim()
      : n;
  },
  Q0 = function (n) {
    return n;
  },
  cr = function (n, i) {
    for (var o in i) o in n || (n[o] = i[o]);
    return n;
  },
  _1 = function (n) {
    return function (i, o) {
      for (var l in o)
        l in i || (l === "duration" && n) || l === "ease" || (i[l] = o[l]);
    };
  },
  _o = function (n, i) {
    for (var o in i) n[o] = i[o];
    return n;
  },
  Kh = function f(n, i) {
    for (var o in i)
      o !== "__proto__" &&
        o !== "constructor" &&
        o !== "prototype" &&
        (n[o] = Ur(i[o]) ? f(n[o] || (n[o] = {}), i[o]) : i[o]);
    return n;
  },
  ra = function (n, i) {
    var o = {},
      l;
    for (l in n) l in i || (o[l] = n[l]);
    return o;
  },
  is = function (n) {
    var i = n.parent || st,
      o = n.keyframes ? _1(en(n.keyframes)) : cr;
    if (Nn(n.inherit))
      for (; i; ) o(n, i.vars.defaults), (i = i.parent || i._dp);
    return n;
  },
  v1 = function (n, i) {
    for (var o = n.length, l = o === i.length; l && o-- && n[o] === i[o]; );
    return o < 0;
  },
  G0 = function (n, i, o, l, u) {
    var c = n[l],
      d;
    if (u) for (d = i[u]; c && c[u] > d; ) c = c._prev;
    return (
      c ? ((i._next = c._next), (c._next = i)) : ((i._next = n[o]), (n[o] = i)),
      i._next ? (i._next._prev = i) : (n[l] = i),
      (i._prev = c),
      (i.parent = i._dp = n),
      i
    );
  },
  ha = function (n, i, o, l) {
    o === void 0 && (o = "_first"), l === void 0 && (l = "_last");
    var u = i._prev,
      c = i._next;
    u ? (u._next = c) : n[o] === i && (n[o] = c),
      c ? (c._prev = u) : n[l] === i && (n[l] = u),
      (i._next = i._prev = i.parent = null);
  },
  ji = function (n, i) {
    n.parent &&
      (!i || n.parent.autoRemoveChildren) &&
      n.parent.remove &&
      n.parent.remove(n),
      (n._act = 0);
  },
  co = function (n, i) {
    if (n && (!i || i._end > n._dur || i._start < 0))
      for (var o = n; o; ) (o._dirty = 1), (o = o.parent);
    return n;
  },
  y1 = function (n) {
    for (var i = n.parent; i && i.parent; )
      (i._dirty = 1), i.totalDuration(), (i = i.parent);
    return n;
  },
  kf = function (n, i, o, l) {
    return (
      n._startAt &&
      (Jt
        ? n._startAt.revert(Yu)
        : (n.vars.immediateRender && !n.vars.autoRevert) ||
          n._startAt.render(i, !0, l))
    );
  },
  x1 = function f(n) {
    return !n || (n._ts && f(n.parent));
  },
  qh = function (n) {
    return n._repeat ? ul(n._tTime, (n = n.duration() + n._rDelay)) * n : 0;
  },
  ul = function (n, i) {
    var o = Math.floor((n /= i));
    return n && o === n ? o - 1 : o;
  },
  ia = function (n, i) {
    return (
      (n - i._start) * i._ts +
      (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur)
    );
  },
  ma = function (n) {
    return (n._end = It(
      n._start + (n._tDur / Math.abs(n._ts || n._rts || Xe) || 0)
    ));
  },
  ga = function (n, i) {
    var o = n._dp;
    return (
      o &&
        o.smoothChildTiming &&
        n._ts &&
        ((n._start = It(
          o._time -
            (n._ts > 0
              ? i / n._ts
              : ((n._dirty ? n.totalDuration() : n._tDur) - i) / -n._ts)
        )),
        ma(n),
        o._dirty || co(o, n)),
      n
    );
  },
  K0 = function (n, i) {
    var o;
    if (
      ((i._time ||
        (!i._dur && i._initted) ||
        (i._start < n._time && (i._dur || !i.add))) &&
        ((o = ia(n.rawTime(), i)),
        (!i._dur || Ts(0, i.totalDuration(), o) - i._tTime > Xe) &&
          i.render(o, !0)),
      co(n, i)._dp && n._initted && n._time >= n._dur && n._ts)
    ) {
      if (n._dur < n.duration())
        for (o = n; o._dp; )
          o.rawTime() >= 0 && o.totalTime(o._tTime), (o = o._dp);
      n._zTime = -Xe;
    }
  },
  jr = function (n, i, o, l) {
    return (
      i.parent && ji(i),
      (i._start = It(
        (ri(o) ? o : o || n !== st ? ir(n, o, i) : n._time) + i._delay
      )),
      (i._end = It(
        i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)
      )),
      G0(n, i, "_first", "_last", n._sort ? "_start" : 0),
      Cf(i) || (n._recent = i),
      l || K0(n, i),
      n._ts < 0 && ga(n, n._tTime),
      n
    );
  },
  q0 = function (n, i) {
    return (
      (Qn.ScrollTrigger || Gf("scrollTrigger", i)) &&
      Qn.ScrollTrigger.create(i, n)
    );
  },
  Z0 = function (n, i, o, l, u) {
    if ((ed(n, i, u), !n._initted)) return 1;
    if (
      !o &&
      n._pt &&
      !Jt &&
      ((n._dur && n.vars.lazy !== !1) || (!n._dur && n.vars.lazy)) &&
      Y0 !== Yn.frame
    )
      return zi.push(n), (n._lazy = [u, l]), 1;
  },
  w1 = function f(n) {
    var i = n.parent;
    return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || f(i));
  },
  Cf = function (n) {
    var i = n.data;
    return i === "isFromStart" || i === "isStart";
  },
  S1 = function (n, i, o, l) {
    var u = n.ratio,
      c =
        i < 0 ||
        (!i &&
          ((!n._start && w1(n) && !(!n._initted && Cf(n))) ||
            ((n._ts < 0 || n._dp._ts < 0) && !Cf(n))))
          ? 0
          : 1,
      d = n._rDelay,
      h = 0,
      g,
      _,
      S;
    if (
      (d &&
        n._repeat &&
        ((h = Ts(0, n._tDur, i)),
        (_ = ul(h, d)),
        n._yoyo && _ & 1 && (c = 1 - c),
        _ !== ul(n._tTime, d) &&
          ((u = 1 - c), n.vars.repeatRefresh && n._initted && n.invalidate())),
      c !== u || Jt || l || n._zTime === Xe || (!i && n._zTime))
    ) {
      if (!n._initted && Z0(n, i, l, o, h)) return;
      for (
        S = n._zTime,
          n._zTime = i || (o ? Xe : 0),
          o || (o = i && !S),
          n.ratio = c,
          n._from && (c = 1 - c),
          n._time = 0,
          n._tTime = h,
          g = n._pt;
        g;

      )
        g.r(c, g.d), (g = g._next);
      i < 0 && kf(n, i, o, !0),
        n._onUpdate && !o && bn(n, "onUpdate"),
        h && n._repeat && !o && n.parent && bn(n, "onRepeat"),
        (i >= n._tDur || i < 0) &&
          n.ratio === c &&
          (c && ji(n, 1),
          !o &&
            !Jt &&
            (bn(n, c ? "onComplete" : "onReverseComplete", !0),
            n._prom && n._prom()));
    } else n._zTime || (n._zTime = i);
  },
  k1 = function (n, i, o) {
    var l;
    if (o > i)
      for (l = n._first; l && l._start <= o; ) {
        if (l.data === "isPause" && l._start > i) return l;
        l = l._next;
      }
    else
      for (l = n._last; l && l._start >= o; ) {
        if (l.data === "isPause" && l._start < i) return l;
        l = l._prev;
      }
  },
  al = function (n, i, o, l) {
    var u = n._repeat,
      c = It(i) || 0,
      d = n._tTime / n._tDur;
    return (
      d && !l && (n._time *= c / n._dur),
      (n._dur = c),
      (n._tDur = u ? (u < 0 ? 1e10 : It(c * (u + 1) + n._rDelay * u)) : c),
      d > 0 && !l && ga(n, (n._tTime = n._tDur * d)),
      n.parent && ma(n),
      o || co(n.parent, n),
      n
    );
  },
  Zh = function (n) {
    return n instanceof pn ? co(n) : al(n, n._dur);
  },
  C1 = { _start: 0, endTime: _s, totalDuration: _s },
  ir = function f(n, i, o) {
    var l = n.labels,
      u = n._recent || C1,
      c = n.duration() >= sr ? u.endTime(!1) : n._dur,
      d,
      h,
      g;
    return Ft(i) && (isNaN(i) || i in l)
      ? ((h = i.charAt(0)),
        (g = i.substr(-1) === "%"),
        (d = i.indexOf("=")),
        h === "<" || h === ">"
          ? (d >= 0 && (i = i.replace(/=/, "")),
            (h === "<" ? u._start : u.endTime(u._repeat >= 0)) +
              (parseFloat(i.substr(1)) || 0) *
                (g ? (d < 0 ? u : o).totalDuration() / 100 : 1))
          : d < 0
          ? (i in l || (l[i] = c), l[i])
          : ((h = parseFloat(i.charAt(d - 1) + i.substr(d + 1))),
            g && o && (h = (h / 100) * (en(o) ? o[0] : o).totalDuration()),
            d > 1 ? f(n, i.substr(0, d - 1), o) + h : c + h))
      : i == null
      ? c
      : +i;
  },
  os = function (n, i, o) {
    var l = ri(i[1]),
      u = (l ? 2 : 1) + (n < 2 ? 0 : 1),
      c = i[u],
      d,
      h;
    if ((l && (c.duration = i[1]), (c.parent = o), n)) {
      for (d = c, h = o; h && !("immediateRender" in d); )
        (d = h.vars.defaults || {}), (h = Nn(h.vars.inherit) && h.parent);
      (c.immediateRender = Nn(d.immediateRender)),
        n < 2 ? (c.runBackwards = 1) : (c.startAt = i[u - 1]);
    }
    return new kt(i[0], c, i[u + 1]);
  },
  Fi = function (n, i) {
    return n || n === 0 ? i(n) : i;
  },
  Ts = function (n, i, o) {
    return o < n ? n : o > i ? i : o;
  },
  Zt = function (n, i) {
    return !Ft(n) || !(i = p1.exec(n)) ? "" : i[1];
  },
  T1 = function (n, i, o) {
    return Fi(o, function (l) {
      return Ts(n, i, l);
    });
  },
  Tf = [].slice,
  J0 = function (n, i) {
    return (
      n &&
      Ur(n) &&
      "length" in n &&
      ((!i && !n.length) || (n.length - 1 in n && Ur(n[0]))) &&
      !n.nodeType &&
      n !== Dr
    );
  },
  E1 = function (n, i, o) {
    return (
      o === void 0 && (o = []),
      n.forEach(function (l) {
        var u;
        return (Ft(l) && !i) || J0(l, 1)
          ? (u = o).push.apply(u, ur(l))
          : o.push(l);
      }) || o
    );
  },
  ur = function (n, i, o) {
    return nt && !i && nt.selector
      ? nt.selector(n)
      : Ft(n) && !o && (wf || !cl())
      ? Tf.call((i || Qf).querySelectorAll(n), 0)
      : en(n)
      ? E1(n, o)
      : J0(n)
      ? Tf.call(n, 0)
      : n
      ? [n]
      : [];
  },
  Ef = function (n) {
    return (
      (n = ur(n)[0] || gs("Invalid scope") || {}),
      function (i) {
        var o = n.current || n.nativeElement || n;
        return ur(
          i,
          o.querySelectorAll
            ? o
            : o === n
            ? gs("Invalid scope") || Qf.createElement("div")
            : n
        );
      }
    );
  },
  em = function (n) {
    return n.sort(function () {
      return 0.5 - Math.random();
    });
  },
  tm = function (n) {
    if (dt(n)) return n;
    var i = Ur(n) ? n : { each: n },
      o = fo(i.ease),
      l = i.from || 0,
      u = parseFloat(i.base) || 0,
      c = {},
      d = l > 0 && l < 1,
      h = isNaN(l) || d,
      g = i.axis,
      _ = l,
      S = l;
    return (
      Ft(l)
        ? (_ = S = { center: 0.5, edges: 0.5, end: 1 }[l] || 0)
        : !d && h && ((_ = l[0]), (S = l[1])),
      function (x, v, E) {
        var y = (E || i).length,
          O = c[y],
          I,
          A,
          U,
          D,
          F,
          V,
          L,
          b,
          $;
        if (!O) {
          if ((($ = i.grid === "auto" ? 0 : (i.grid || [1, sr])[1]), !$)) {
            for (
              L = -sr;
              L < (L = E[$++].getBoundingClientRect().left) && $ < y;

            );
            $ < y && $--;
          }
          for (
            O = c[y] = [],
              I = h ? Math.min($, y) * _ - 0.5 : l % $,
              A = $ === sr ? 0 : h ? (y * S) / $ - 0.5 : (l / $) | 0,
              L = 0,
              b = sr,
              V = 0;
            V < y;
            V++
          )
            (U = (V % $) - I),
              (D = A - ((V / $) | 0)),
              (O[V] = F = g ? Math.abs(g === "y" ? D : U) : A0(U * U + D * D)),
              F > L && (L = F),
              F < b && (b = F);
          l === "random" && em(O),
            (O.max = L - b),
            (O.min = b),
            (O.v = y =
              (parseFloat(i.amount) ||
                parseFloat(i.each) *
                  ($ > y
                    ? y - 1
                    : g
                    ? g === "y"
                      ? y / $
                      : $
                    : Math.max($, y / $)) ||
                0) * (l === "edges" ? -1 : 1)),
            (O.b = y < 0 ? u - y : u),
            (O.u = Zt(i.amount || i.each) || 0),
            (o = o && y < 0 ? fm(o) : o);
        }
        return (
          (y = (O[x] - O.min) / O.max || 0),
          It(O.b + (o ? o(y) : y) * O.v) + O.u
        );
      }
    );
  },
  Pf = function (n) {
    var i = Math.pow(10, ((n + "").split(".")[1] || "").length);
    return function (o) {
      var l = It(Math.round(parseFloat(o) / n) * n * i);
      return (l - (l % 1)) / i + (ri(o) ? 0 : Zt(o));
    };
  },
  nm = function (n, i) {
    var o = en(n),
      l,
      u;
    return (
      !o &&
        Ur(n) &&
        ((l = o = n.radius || sr),
        n.values
          ? ((n = ur(n.values)), (u = !ri(n[0])) && (l *= l))
          : (n = Pf(n.increment))),
      Fi(
        i,
        o
          ? dt(n)
            ? function (c) {
                return (u = n(c)), Math.abs(u - c) <= l ? u : c;
              }
            : function (c) {
                for (
                  var d = parseFloat(u ? c.x : c),
                    h = parseFloat(u ? c.y : 0),
                    g = sr,
                    _ = 0,
                    S = n.length,
                    x,
                    v;
                  S--;

                )
                  u
                    ? ((x = n[S].x - d), (v = n[S].y - h), (x = x * x + v * v))
                    : (x = Math.abs(n[S] - d)),
                    x < g && ((g = x), (_ = S));
                return (
                  (_ = !l || g <= l ? n[_] : c),
                  u || _ === c || ri(c) ? _ : _ + Zt(c)
                );
              }
          : Pf(n)
      )
    );
  },
  rm = function (n, i, o, l) {
    return Fi(en(n) ? !i : o === !0 ? !!(o = 0) : !l, function () {
      return en(n)
        ? n[~~(Math.random() * n.length)]
        : (o = o || 1e-5) &&
            (l = o < 1 ? Math.pow(10, (o + "").length - 2) : 1) &&
            Math.floor(
              Math.round((n - o / 2 + Math.random() * (i - n + o * 0.99)) / o) *
                o *
                l
            ) / l;
    });
  },
  P1 = function () {
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    return function (l) {
      return i.reduce(function (u, c) {
        return c(u);
      }, l);
    };
  },
  O1 = function (n, i) {
    return function (o) {
      return n(parseFloat(o)) + (i || Zt(o));
    };
  },
  N1 = function (n, i, o) {
    return om(n, i, 0, 1, o);
  },
  im = function (n, i, o) {
    return Fi(o, function (l) {
      return n[~~i(l)];
    });
  },
  R1 = function f(n, i, o) {
    var l = i - n;
    return en(n)
      ? im(n, f(0, n.length), i)
      : Fi(o, function (u) {
          return ((l + ((u - n) % l)) % l) + n;
        });
  },
  M1 = function f(n, i, o) {
    var l = i - n,
      u = l * 2;
    return en(n)
      ? im(n, f(0, n.length - 1), i)
      : Fi(o, function (c) {
          return (c = (u + ((c - n) % u)) % u || 0), n + (c > l ? u - c : c);
        });
  },
  vs = function (n) {
    for (var i = 0, o = "", l, u, c, d; ~(l = n.indexOf("random(", i)); )
      (c = n.indexOf(")", l)),
        (d = n.charAt(l + 7) === "["),
        (u = n.substr(l + 7, c - l - 7).match(d ? U0 : xf)),
        (o +=
          n.substr(i, l - i) + rm(d ? u : +u[0], d ? 0 : +u[1], +u[2] || 1e-5)),
        (i = c + 1);
    return o + n.substr(i, n.length - i);
  },
  om = function (n, i, o, l, u) {
    var c = i - n,
      d = l - o;
    return Fi(u, function (h) {
      return o + (((h - n) / c) * d || 0);
    });
  },
  z1 = function f(n, i, o, l) {
    var u = isNaN(n + i)
      ? 0
      : function (v) {
          return (1 - v) * n + v * i;
        };
    if (!u) {
      var c = Ft(n),
        d = {},
        h,
        g,
        _,
        S,
        x;
      if ((o === !0 && (l = 1) && (o = null), c))
        (n = { p: n }), (i = { p: i });
      else if (en(n) && !en(i)) {
        for (_ = [], S = n.length, x = S - 2, g = 1; g < S; g++)
          _.push(f(n[g - 1], n[g]));
        S--,
          (u = function (E) {
            E *= S;
            var y = Math.min(x, ~~E);
            return _[y](E - y);
          }),
          (o = i);
      } else l || (n = _o(en(n) ? [] : {}, n));
      if (!_) {
        for (h in i) Jf.call(d, n, h, "get", i[h]);
        u = function (E) {
          return rd(E, d) || (c ? n.p : n);
        };
      }
    }
    return Fi(o, u);
  },
  Jh = function (n, i, o) {
    var l = n.labels,
      u = sr,
      c,
      d,
      h;
    for (c in l)
      (d = l[c] - i),
        d < 0 == !!o && d && u > (d = Math.abs(d)) && ((h = c), (u = d));
    return h;
  },
  bn = function (n, i, o) {
    var l = n.vars,
      u = l[i],
      c = nt,
      d = n._ctx,
      h,
      g,
      _;
    if (u)
      return (
        (h = l[i + "Params"]),
        (g = l.callbackScope || n),
        o && zi.length && na(),
        d && (nt = d),
        (_ = h ? u.apply(g, h) : u.call(g)),
        (nt = c),
        _
      );
  },
  ql = function (n) {
    return (
      ji(n),
      n.scrollTrigger && n.scrollTrigger.kill(!!Jt),
      n.progress() < 1 && bn(n, "onInterrupt"),
      n
    );
  },
  Jo,
  lm = [],
  sm = function (n) {
    if (n)
      if (((n = (!n.name && n.default) || n), Xf() || n.headless)) {
        var i = n.name,
          o = dt(n),
          l =
            i && !o && n.init
              ? function () {
                  this._props = [];
                }
              : n,
          u = {
            init: _s,
            render: rd,
            add: Jf,
            kill: Q1,
            modifier: X1,
            rawVars: 0,
          },
          c = {
            targetTest: 0,
            get: 0,
            getSetter: nd,
            aliases: {},
            register: 0,
          };
        if ((cl(), n !== l)) {
          if (Wn[i]) return;
          cr(l, cr(ra(n, u), c)),
            _o(l.prototype, _o(u, ra(n, c))),
            (Wn[(l.prop = i)] = l),
            n.targetTest && (Hu.push(l), (Kf[i] = 1)),
            (i =
              (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) +
              "Plugin");
        }
        W0(i, l), n.register && n.register(Dn, l, Mn);
      } else lm.push(n);
  },
  We = 255,
  Zl = {
    aqua: [0, We, We],
    lime: [0, We, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, We],
    navy: [0, 0, 128],
    white: [We, We, We],
    olive: [128, 128, 0],
    yellow: [We, We, 0],
    orange: [We, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [We, 0, 0],
    pink: [We, 192, 203],
    cyan: [0, We, We],
    transparent: [We, We, We, 0],
  },
  of = function (n, i, o) {
    return (
      (n += n < 0 ? 1 : n > 1 ? -1 : 0),
      ((n * 6 < 1
        ? i + (o - i) * n * 6
        : n < 0.5
        ? o
        : n * 3 < 2
        ? i + (o - i) * (2 / 3 - n) * 6
        : i) *
        We +
        0.5) |
        0
    );
  },
  um = function (n, i, o) {
    var l = n ? (ri(n) ? [n >> 16, (n >> 8) & We, n & We] : 0) : Zl.black,
      u,
      c,
      d,
      h,
      g,
      _,
      S,
      x,
      v,
      E;
    if (!l) {
      if ((n.substr(-1) === "," && (n = n.substr(0, n.length - 1)), Zl[n]))
        l = Zl[n];
      else if (n.charAt(0) === "#") {
        if (
          (n.length < 6 &&
            ((u = n.charAt(1)),
            (c = n.charAt(2)),
            (d = n.charAt(3)),
            (n =
              "#" +
              u +
              u +
              c +
              c +
              d +
              d +
              (n.length === 5 ? n.charAt(4) + n.charAt(4) : ""))),
          n.length === 9)
        )
          return (
            (l = parseInt(n.substr(1, 6), 16)),
            [l >> 16, (l >> 8) & We, l & We, parseInt(n.substr(7), 16) / 255]
          );
        (n = parseInt(n.substr(1), 16)), (l = [n >> 16, (n >> 8) & We, n & We]);
      } else if (n.substr(0, 3) === "hsl") {
        if (((l = E = n.match(xf)), !i))
          (h = (+l[0] % 360) / 360),
            (g = +l[1] / 100),
            (_ = +l[2] / 100),
            (c = _ <= 0.5 ? _ * (g + 1) : _ + g - _ * g),
            (u = _ * 2 - c),
            l.length > 3 && (l[3] *= 1),
            (l[0] = of(h + 1 / 3, u, c)),
            (l[1] = of(h, u, c)),
            (l[2] = of(h - 1 / 3, u, c));
        else if (~n.indexOf("="))
          return (l = n.match(F0)), o && l.length < 4 && (l[3] = 1), l;
      } else l = n.match(xf) || Zl.transparent;
      l = l.map(Number);
    }
    return (
      i &&
        !E &&
        ((u = l[0] / We),
        (c = l[1] / We),
        (d = l[2] / We),
        (S = Math.max(u, c, d)),
        (x = Math.min(u, c, d)),
        (_ = (S + x) / 2),
        S === x
          ? (h = g = 0)
          : ((v = S - x),
            (g = _ > 0.5 ? v / (2 - S - x) : v / (S + x)),
            (h =
              S === u
                ? (c - d) / v + (c < d ? 6 : 0)
                : S === c
                ? (d - u) / v + 2
                : (u - c) / v + 4),
            (h *= 60)),
        (l[0] = ~~(h + 0.5)),
        (l[1] = ~~(g * 100 + 0.5)),
        (l[2] = ~~(_ * 100 + 0.5))),
      o && l.length < 4 && (l[3] = 1),
      l
    );
  },
  am = function (n) {
    var i = [],
      o = [],
      l = -1;
    return (
      n.split(Di).forEach(function (u) {
        var c = u.match(Zo) || [];
        i.push.apply(i, c), o.push((l += c.length + 1));
      }),
      (i.c = o),
      i
    );
  },
  e0 = function (n, i, o) {
    var l = "",
      u = (n + l).match(Di),
      c = i ? "hsla(" : "rgba(",
      d = 0,
      h,
      g,
      _,
      S;
    if (!u) return n;
    if (
      ((u = u.map(function (x) {
        return (
          (x = um(x, i, 1)) &&
          c +
            (i ? x[0] + "," + x[1] + "%," + x[2] + "%," + x[3] : x.join(",")) +
            ")"
        );
      })),
      o && ((_ = am(n)), (h = o.c), h.join(l) !== _.c.join(l)))
    )
      for (g = n.replace(Di, "1").split(Zo), S = g.length - 1; d < S; d++)
        l +=
          g[d] +
          (~h.indexOf(d)
            ? u.shift() || c + "0,0,0,0)"
            : (_.length ? _ : u.length ? u : o).shift());
    if (!g)
      for (g = n.split(Di), S = g.length - 1; d < S; d++) l += g[d] + u[d];
    return l + g[S];
  },
  Di = (function () {
    var f =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      n;
    for (n in Zl) f += "|" + n + "\\b";
    return new RegExp(f + ")", "gi");
  })(),
  D1 = /hsl[a]?\(/,
  cm = function (n) {
    var i = n.join(" "),
      o;
    if (((Di.lastIndex = 0), Di.test(i)))
      return (
        (o = D1.test(i)),
        (n[1] = e0(n[1], o)),
        (n[0] = e0(n[0], o, am(n[1]))),
        !0
      );
  },
  ys,
  Yn = (function () {
    var f = Date.now,
      n = 500,
      i = 33,
      o = f(),
      l = o,
      u = 1e3 / 240,
      c = u,
      d = [],
      h,
      g,
      _,
      S,
      x,
      v,
      E = function y(O) {
        var I = f() - l,
          A = O === !0,
          U,
          D,
          F,
          V;
        if (
          ((I > n || I < 0) && (o += I - i),
          (l += I),
          (F = l - o),
          (U = F - c),
          (U > 0 || A) &&
            ((V = ++S.frame),
            (x = F - S.time * 1e3),
            (S.time = F = F / 1e3),
            (c += U + (U >= u ? 4 : u - U)),
            (D = 1)),
          A || (h = g(y)),
          D)
        )
          for (v = 0; v < d.length; v++) d[v](F, x, V, O);
      };
    return (
      (S = {
        time: 0,
        frame: 0,
        tick: function () {
          E(!0);
        },
        deltaRatio: function (O) {
          return x / (1e3 / (O || 60));
        },
        wake: function () {
          V0 &&
            (!wf &&
              Xf() &&
              ((Dr = wf = window),
              (Qf = Dr.document || {}),
              (Qn.gsap = Dn),
              (Dr.gsapVersions || (Dr.gsapVersions = [])).push(Dn.version),
              $0(ta || Dr.GreenSockGlobals || (!Dr.gsap && Dr) || {}),
              lm.forEach(sm)),
            (_ = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            h && S.sleep(),
            (g =
              _ ||
              function (O) {
                return setTimeout(O, (c - S.time * 1e3 + 1) | 0);
              }),
            (ys = 1),
            E(2));
        },
        sleep: function () {
          (_ ? cancelAnimationFrame : clearTimeout)(h), (ys = 0), (g = _s);
        },
        lagSmoothing: function (O, I) {
          (n = O || 1 / 0), (i = Math.min(I || 33, n));
        },
        fps: function (O) {
          (u = 1e3 / (O || 240)), (c = S.time * 1e3 + u);
        },
        add: function (O, I, A) {
          var U = I
            ? function (D, F, V, L) {
                O(D, F, V, L), S.remove(U);
              }
            : O;
          return S.remove(O), d[A ? "unshift" : "push"](U), cl(), U;
        },
        remove: function (O, I) {
          ~(I = d.indexOf(O)) && d.splice(I, 1) && v >= I && v--;
        },
        _listeners: d,
      }),
      S
    );
  })(),
  cl = function () {
    return !ys && Yn.wake();
  },
  Ie = {},
  L1 = /^[\d.\-M][\d.\-,\s]/,
  j1 = /["']/g,
  A1 = function (n) {
    for (
      var i = {},
        o = n.substr(1, n.length - 3).split(":"),
        l = o[0],
        u = 1,
        c = o.length,
        d,
        h,
        g;
      u < c;
      u++
    )
      (h = o[u]),
        (d = u !== c - 1 ? h.lastIndexOf(",") : h.length),
        (g = h.substr(0, d)),
        (i[l] = isNaN(g) ? g.replace(j1, "").trim() : +g),
        (l = h.substr(d + 1).trim());
    return i;
  },
  I1 = function (n) {
    var i = n.indexOf("(") + 1,
      o = n.indexOf(")"),
      l = n.indexOf("(", i);
    return n.substring(i, ~l && l < o ? n.indexOf(")", o + 1) : o);
  },
  F1 = function (n) {
    var i = (n + "").split("("),
      o = Ie[i[0]];
    return o && i.length > 1 && o.config
      ? o.config.apply(
          null,
          ~n.indexOf("{") ? [A1(i[1])] : I1(n).split(",").map(X0)
        )
      : Ie._CE && L1.test(n)
      ? Ie._CE("", n)
      : o;
  },
  fm = function (n) {
    return function (i) {
      return 1 - n(1 - i);
    };
  },
  dm = function f(n, i) {
    for (var o = n._first, l; o; )
      o instanceof pn
        ? f(o, i)
        : o.vars.yoyoEase &&
          (!o._yoyo || !o._repeat) &&
          o._yoyo !== i &&
          (o.timeline
            ? f(o.timeline, i)
            : ((l = o._ease),
              (o._ease = o._yEase),
              (o._yEase = l),
              (o._yoyo = i))),
        (o = o._next);
  },
  fo = function (n, i) {
    return (n && (dt(n) ? n : Ie[n] || F1(n))) || i;
  },
  So = function (n, i, o, l) {
    o === void 0 &&
      (o = function (h) {
        return 1 - i(1 - h);
      }),
      l === void 0 &&
        (l = function (h) {
          return h < 0.5 ? i(h * 2) / 2 : 1 - i((1 - h) * 2) / 2;
        });
    var u = { easeIn: i, easeOut: o, easeInOut: l },
      c;
    return (
      Rn(n, function (d) {
        (Ie[d] = Qn[d] = u), (Ie[(c = d.toLowerCase())] = o);
        for (var h in u)
          Ie[
            c + (h === "easeIn" ? ".in" : h === "easeOut" ? ".out" : ".inOut")
          ] = Ie[d + "." + h] = u[h];
      }),
      u
    );
  },
  pm = function (n) {
    return function (i) {
      return i < 0.5 ? (1 - n(1 - i * 2)) / 2 : 0.5 + n((i - 0.5) * 2) / 2;
    };
  },
  lf = function f(n, i, o) {
    var l = i >= 1 ? i : 1,
      u = (o || (n ? 0.3 : 0.45)) / (i < 1 ? i : 1),
      c = (u / yf) * (Math.asin(1 / l) || 0),
      d = function (_) {
        return _ === 1 ? 1 : l * Math.pow(2, -10 * _) * d1((_ - c) * u) + 1;
      },
      h =
        n === "out"
          ? d
          : n === "in"
          ? function (g) {
              return 1 - d(1 - g);
            }
          : pm(d);
    return (
      (u = yf / u),
      (h.config = function (g, _) {
        return f(n, g, _);
      }),
      h
    );
  },
  sf = function f(n, i) {
    i === void 0 && (i = 1.70158);
    var o = function (c) {
        return c ? --c * c * ((i + 1) * c + i) + 1 : 0;
      },
      l =
        n === "out"
          ? o
          : n === "in"
          ? function (u) {
              return 1 - o(1 - u);
            }
          : pm(o);
    return (
      (l.config = function (u) {
        return f(n, u);
      }),
      l
    );
  };
Rn("Linear,Quad,Cubic,Quart,Quint,Strong", function (f, n) {
  var i = n < 5 ? n + 1 : n;
  So(
    f + ",Power" + (i - 1),
    n
      ? function (o) {
          return Math.pow(o, i);
        }
      : function (o) {
          return o;
        },
    function (o) {
      return 1 - Math.pow(1 - o, i);
    },
    function (o) {
      return o < 0.5
        ? Math.pow(o * 2, i) / 2
        : 1 - Math.pow((1 - o) * 2, i) / 2;
    }
  );
});
Ie.Linear.easeNone = Ie.none = Ie.Linear.easeIn;
So("Elastic", lf("in"), lf("out"), lf());
(function (f, n) {
  var i = 1 / n,
    o = 2 * i,
    l = 2.5 * i,
    u = function (d) {
      return d < i
        ? f * d * d
        : d < o
        ? f * Math.pow(d - 1.5 / n, 2) + 0.75
        : d < l
        ? f * (d -= 2.25 / n) * d + 0.9375
        : f * Math.pow(d - 2.625 / n, 2) + 0.984375;
    };
  So(
    "Bounce",
    function (c) {
      return 1 - u(1 - c);
    },
    u
  );
})(7.5625, 2.75);
So("Expo", function (f) {
  return f ? Math.pow(2, 10 * (f - 1)) : 0;
});
So("Circ", function (f) {
  return -(A0(1 - f * f) - 1);
});
So("Sine", function (f) {
  return f === 1 ? 1 : -f1(f * a1) + 1;
});
So("Back", sf("in"), sf("out"), sf());
Ie.SteppedEase =
  Ie.steps =
  Qn.SteppedEase =
    {
      config: function (n, i) {
        n === void 0 && (n = 1);
        var o = 1 / n,
          l = n + (i ? 0 : 1),
          u = i ? 1 : 0,
          c = 1 - Xe;
        return function (d) {
          return (((l * Ts(0, c, d)) | 0) + u) * o;
        };
      },
    };
sl.ease = Ie["quad.out"];
Rn(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (f) {
    return (qf += f + "," + f + "Params,");
  }
);
var hm = function (n, i) {
    (this.id = c1++),
      (n._gsap = this),
      (this.target = n),
      (this.harness = i),
      (this.get = i ? i.get : H0),
      (this.set = i ? i.getSetter : nd);
  },
  xs = (function () {
    function f(i) {
      (this.vars = i),
        (this._delay = +i.delay || 0),
        (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) &&
          ((this._rDelay = i.repeatDelay || 0),
          (this._yoyo = !!i.yoyo || !!i.yoyoEase)),
        (this._ts = 1),
        al(this, +i.duration, 1, 1),
        (this.data = i.data),
        nt && ((this._ctx = nt), nt.data.push(this)),
        ys || Yn.wake();
    }
    var n = f.prototype;
    return (
      (n.delay = function (o) {
        return o || o === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + o - this._delay),
            (this._delay = o),
            this)
          : this._delay;
      }),
      (n.duration = function (o) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? o + (o + this._rDelay) * this._repeat : o
            )
          : this.totalDuration() && this._dur;
      }),
      (n.totalDuration = function (o) {
        return arguments.length
          ? ((this._dirty = 0),
            al(
              this,
              this._repeat < 0
                ? o
                : (o - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (n.totalTime = function (o, l) {
        if ((cl(), !arguments.length)) return this._tTime;
        var u = this._dp;
        if (u && u.smoothChildTiming && this._ts) {
          for (ga(this, o), !u._dp || u.parent || K0(u, this); u && u.parent; )
            u.parent._time !==
              u._start +
                (u._ts >= 0
                  ? u._tTime / u._ts
                  : (u.totalDuration() - u._tTime) / -u._ts) &&
              u.totalTime(u._tTime, !0),
              (u = u.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && o < this._tDur) ||
              (this._ts < 0 && o > 0) ||
              (!this._tDur && !o)) &&
            jr(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== o ||
            (!this._dur && !l) ||
            (this._initted && Math.abs(this._zTime) === Xe) ||
            (!o && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = o), b0(this, o, l)),
          this
        );
      }),
      (n.time = function (o, l) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), o + qh(this)) %
                (this._dur + this._rDelay) || (o ? this._dur : 0),
              l
            )
          : this._time;
      }),
      (n.totalProgress = function (o, l) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * o, l)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (n.progress = function (o, l) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - o : o) +
                qh(this),
              l
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (n.iteration = function (o, l) {
        var u = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (o - 1) * u, l)
          : this._repeat
          ? ul(this._tTime, u) + 1
          : 1;
      }),
      (n.timeScale = function (o, l) {
        if (!arguments.length) return this._rts === -Xe ? 0 : this._rts;
        if (this._rts === o) return this;
        var u =
          this.parent && this._ts ? ia(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +o || 0),
          (this._ts = this._ps || o === -Xe ? 0 : this._rts),
          this.totalTime(Ts(-Math.abs(this._delay), this._tDur, u), l !== !1),
          ma(this),
          y1(this)
        );
      }),
      (n.paused = function (o) {
        return arguments.length
          ? (this._ps !== o &&
              ((this._ps = o),
              o
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (cl(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== Xe &&
                      (this._tTime -= Xe)
                  ))),
            this)
          : this._ps;
      }),
      (n.startTime = function (o) {
        if (arguments.length) {
          this._start = o;
          var l = this.parent || this._dp;
          return (
            l && (l._sort || !this.parent) && jr(l, this, o - this._delay), this
          );
        }
        return this._start;
      }),
      (n.endTime = function (o) {
        return (
          this._start +
          (Nn(o) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (n.rawTime = function (o) {
        var l = this.parent || this._dp;
        return l
          ? o &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? ia(l.rawTime(o), this)
            : this._tTime
          : this._tTime;
      }),
      (n.revert = function (o) {
        o === void 0 && (o = m1);
        var l = Jt;
        return (
          (Jt = o),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(o),
            this.totalTime(-0.01, o.suppressEvents)),
          this.data !== "nested" && o.kill !== !1 && this.kill(),
          (Jt = l),
          this
        );
      }),
      (n.globalTime = function (o) {
        for (var l = this, u = arguments.length ? o : l.rawTime(); l; )
          (u = l._start + u / (Math.abs(l._ts) || 1)), (l = l._dp);
        return !this.parent && this._sat ? this._sat.globalTime(o) : u;
      }),
      (n.repeat = function (o) {
        return arguments.length
          ? ((this._repeat = o === 1 / 0 ? -2 : o), Zh(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (n.repeatDelay = function (o) {
        if (arguments.length) {
          var l = this._time;
          return (this._rDelay = o), Zh(this), l ? this.time(l) : this;
        }
        return this._rDelay;
      }),
      (n.yoyo = function (o) {
        return arguments.length ? ((this._yoyo = o), this) : this._yoyo;
      }),
      (n.seek = function (o, l) {
        return this.totalTime(ir(this, o), Nn(l));
      }),
      (n.restart = function (o, l) {
        return this.play().totalTime(o ? -this._delay : 0, Nn(l));
      }),
      (n.play = function (o, l) {
        return o != null && this.seek(o, l), this.reversed(!1).paused(!1);
      }),
      (n.reverse = function (o, l) {
        return (
          o != null && this.seek(o || this.totalDuration(), l),
          this.reversed(!0).paused(!1)
        );
      }),
      (n.pause = function (o, l) {
        return o != null && this.seek(o, l), this.paused(!0);
      }),
      (n.resume = function () {
        return this.paused(!1);
      }),
      (n.reversed = function (o) {
        return arguments.length
          ? (!!o !== this.reversed() &&
              this.timeScale(-this._rts || (o ? -Xe : 0)),
            this)
          : this._rts < 0;
      }),
      (n.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -Xe), this;
      }),
      (n.isActive = function () {
        var o = this.parent || this._dp,
          l = this._start,
          u;
        return !!(
          !o ||
          (this._ts &&
            this._initted &&
            o.isActive() &&
            (u = o.rawTime(!0)) >= l &&
            u < this.endTime(!0) - Xe)
        );
      }),
      (n.eventCallback = function (o, l, u) {
        var c = this.vars;
        return arguments.length > 1
          ? (l
              ? ((c[o] = l),
                u && (c[o + "Params"] = u),
                o === "onUpdate" && (this._onUpdate = l))
              : delete c[o],
            this)
          : c[o];
      }),
      (n.then = function (o) {
        var l = this;
        return new Promise(function (u) {
          var c = dt(o) ? o : Q0,
            d = function () {
              var g = l.then;
              (l.then = null),
                dt(c) && (c = c(l)) && (c.then || c === l) && (l.then = g),
                u(c),
                (l.then = g);
            };
          (l._initted && l.totalProgress() === 1 && l._ts >= 0) ||
          (!l._tTime && l._ts < 0)
            ? d()
            : (l._prom = d);
        });
      }),
      (n.kill = function () {
        ql(this);
      }),
      f
    );
  })();
cr(xs.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -Xe,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var pn = (function (f) {
  j0(n, f);
  function n(o, l) {
    var u;
    return (
      o === void 0 && (o = {}),
      (u = f.call(this, o) || this),
      (u.labels = {}),
      (u.smoothChildTiming = !!o.smoothChildTiming),
      (u.autoRemoveChildren = !!o.autoRemoveChildren),
      (u._sort = Nn(o.sortChildren)),
      st && jr(o.parent || st, Zr(u), l),
      o.reversed && u.reverse(),
      o.paused && u.paused(!0),
      o.scrollTrigger && q0(Zr(u), o.scrollTrigger),
      u
    );
  }
  var i = n.prototype;
  return (
    (i.to = function (l, u, c) {
      return os(0, arguments, this), this;
    }),
    (i.from = function (l, u, c) {
      return os(1, arguments, this), this;
    }),
    (i.fromTo = function (l, u, c, d) {
      return os(2, arguments, this), this;
    }),
    (i.set = function (l, u, c) {
      return (
        (u.duration = 0),
        (u.parent = this),
        is(u).repeatDelay || (u.repeat = 0),
        (u.immediateRender = !!u.immediateRender),
        new kt(l, u, ir(this, c), 1),
        this
      );
    }),
    (i.call = function (l, u, c) {
      return jr(this, kt.delayedCall(0, l, u), c);
    }),
    (i.staggerTo = function (l, u, c, d, h, g, _) {
      return (
        (c.duration = u),
        (c.stagger = c.stagger || d),
        (c.onComplete = g),
        (c.onCompleteParams = _),
        (c.parent = this),
        new kt(l, c, ir(this, h)),
        this
      );
    }),
    (i.staggerFrom = function (l, u, c, d, h, g, _) {
      return (
        (c.runBackwards = 1),
        (is(c).immediateRender = Nn(c.immediateRender)),
        this.staggerTo(l, u, c, d, h, g, _)
      );
    }),
    (i.staggerFromTo = function (l, u, c, d, h, g, _, S) {
      return (
        (d.startAt = c),
        (is(d).immediateRender = Nn(d.immediateRender)),
        this.staggerTo(l, u, d, h, g, _, S)
      );
    }),
    (i.render = function (l, u, c) {
      var d = this._time,
        h = this._dirty ? this.totalDuration() : this._tDur,
        g = this._dur,
        _ = l <= 0 ? 0 : It(l),
        S = this._zTime < 0 != l < 0 && (this._initted || !g),
        x,
        v,
        E,
        y,
        O,
        I,
        A,
        U,
        D,
        F,
        V,
        L;
      if (
        (this !== st && _ > h && l >= 0 && (_ = h), _ !== this._tTime || c || S)
      ) {
        if (
          (d !== this._time &&
            g &&
            ((_ += this._time - d), (l += this._time - d)),
          (x = _),
          (D = this._start),
          (U = this._ts),
          (I = !U),
          S && (g || (d = this._zTime), (l || !u) && (this._zTime = l)),
          this._repeat)
        ) {
          if (
            ((V = this._yoyo),
            (O = g + this._rDelay),
            this._repeat < -1 && l < 0)
          )
            return this.totalTime(O * 100 + l, u, c);
          if (
            ((x = It(_ % O)),
            _ === h
              ? ((y = this._repeat), (x = g))
              : ((y = ~~(_ / O)),
                y && y === _ / O && ((x = g), y--),
                x > g && (x = g)),
            (F = ul(this._tTime, O)),
            !d &&
              this._tTime &&
              F !== y &&
              this._tTime - F * O - this._dur <= 0 &&
              (F = y),
            V && y & 1 && ((x = g - x), (L = 1)),
            y !== F && !this._lock)
          ) {
            var b = V && F & 1,
              $ = b === (V && y & 1);
            if (
              (y < F && (b = !b),
              (d = b ? 0 : _ % g ? g : _),
              (this._lock = 1),
              (this.render(d || (L ? 0 : It(y * O)), u, !g)._lock = 0),
              (this._tTime = _),
              !u && this.parent && bn(this, "onRepeat"),
              this.vars.repeatRefresh && !L && (this.invalidate()._lock = 1),
              (d && d !== this._time) ||
                I !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((g = this._dur),
              (h = this._tDur),
              $ &&
                ((this._lock = 2),
                (d = b ? g : -1e-4),
                this.render(d, !0),
                this.vars.repeatRefresh && !L && this.invalidate()),
              (this._lock = 0),
              !this._ts && !I)
            )
              return this;
            dm(this, L);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((A = k1(this, It(d), It(x))), A && (_ -= x - (x = A._start))),
          (this._tTime = _),
          (this._time = x),
          (this._act = !U),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = l),
            (d = 0)),
          !d && x && !u && !y && (bn(this, "onStart"), this._tTime !== _))
        )
          return this;
        if (x >= d && l >= 0)
          for (v = this._first; v; ) {
            if (
              ((E = v._next), (v._act || x >= v._start) && v._ts && A !== v)
            ) {
              if (v.parent !== this) return this.render(l, u, c);
              if (
                (v.render(
                  v._ts > 0
                    ? (x - v._start) * v._ts
                    : (v._dirty ? v.totalDuration() : v._tDur) +
                        (x - v._start) * v._ts,
                  u,
                  c
                ),
                x !== this._time || (!this._ts && !I))
              ) {
                (A = 0), E && (_ += this._zTime = -Xe);
                break;
              }
            }
            v = E;
          }
        else {
          v = this._last;
          for (var X = l < 0 ? l : x; v; ) {
            if (((E = v._prev), (v._act || X <= v._end) && v._ts && A !== v)) {
              if (v.parent !== this) return this.render(l, u, c);
              if (
                (v.render(
                  v._ts > 0
                    ? (X - v._start) * v._ts
                    : (v._dirty ? v.totalDuration() : v._tDur) +
                        (X - v._start) * v._ts,
                  u,
                  c || (Jt && (v._initted || v._startAt))
                ),
                x !== this._time || (!this._ts && !I))
              ) {
                (A = 0), E && (_ += this._zTime = X ? -Xe : Xe);
                break;
              }
            }
            v = E;
          }
        }
        if (
          A &&
          !u &&
          (this.pause(),
          (A.render(x >= d ? 0 : -Xe)._zTime = x >= d ? 1 : -1),
          this._ts)
        )
          return (this._start = D), ma(this), this.render(l, u, c);
        this._onUpdate && !u && bn(this, "onUpdate", !0),
          ((_ === h && this._tTime >= this.totalDuration()) || (!_ && d)) &&
            (D === this._start || Math.abs(U) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((l || !g) &&
                ((_ === h && this._ts > 0) || (!_ && this._ts < 0)) &&
                ji(this, 1),
              !u &&
                !(l < 0 && !d) &&
                (_ || d || !h) &&
                (bn(
                  this,
                  _ === h && l >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(_ < h && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (i.add = function (l, u) {
      var c = this;
      if ((ri(u) || (u = ir(this, u, l)), !(l instanceof xs))) {
        if (en(l))
          return (
            l.forEach(function (d) {
              return c.add(d, u);
            }),
            this
          );
        if (Ft(l)) return this.addLabel(l, u);
        if (dt(l)) l = kt.delayedCall(0, l);
        else return this;
      }
      return this !== l ? jr(this, l, u) : this;
    }),
    (i.getChildren = function (l, u, c, d) {
      l === void 0 && (l = !0),
        u === void 0 && (u = !0),
        c === void 0 && (c = !0),
        d === void 0 && (d = -sr);
      for (var h = [], g = this._first; g; )
        g._start >= d &&
          (g instanceof kt
            ? u && h.push(g)
            : (c && h.push(g), l && h.push.apply(h, g.getChildren(!0, u, c)))),
          (g = g._next);
      return h;
    }),
    (i.getById = function (l) {
      for (var u = this.getChildren(1, 1, 1), c = u.length; c--; )
        if (u[c].vars.id === l) return u[c];
    }),
    (i.remove = function (l) {
      return Ft(l)
        ? this.removeLabel(l)
        : dt(l)
        ? this.killTweensOf(l)
        : (ha(this, l),
          l === this._recent && (this._recent = this._last),
          co(this));
    }),
    (i.totalTime = function (l, u) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = It(
              Yn.time -
                (this._ts > 0
                  ? l / this._ts
                  : (this.totalDuration() - l) / -this._ts)
            )),
          f.prototype.totalTime.call(this, l, u),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (i.addLabel = function (l, u) {
      return (this.labels[l] = ir(this, u)), this;
    }),
    (i.removeLabel = function (l) {
      return delete this.labels[l], this;
    }),
    (i.addPause = function (l, u, c) {
      var d = kt.delayedCall(0, u || _s, c);
      return (
        (d.data = "isPause"), (this._hasPause = 1), jr(this, d, ir(this, l))
      );
    }),
    (i.removePause = function (l) {
      var u = this._first;
      for (l = ir(this, l); u; )
        u._start === l && u.data === "isPause" && ji(u), (u = u._next);
    }),
    (i.killTweensOf = function (l, u, c) {
      for (var d = this.getTweensOf(l, c), h = d.length; h--; )
        Pi !== d[h] && d[h].kill(l, u);
      return this;
    }),
    (i.getTweensOf = function (l, u) {
      for (var c = [], d = ur(l), h = this._first, g = ri(u), _; h; )
        h instanceof kt
          ? g1(h._targets, d) &&
            (g
              ? (!Pi || (h._initted && h._ts)) &&
                h.globalTime(0) <= u &&
                h.globalTime(h.totalDuration()) > u
              : !u || h.isActive()) &&
            c.push(h)
          : (_ = h.getTweensOf(d, u)).length && c.push.apply(c, _),
          (h = h._next);
      return c;
    }),
    (i.tweenTo = function (l, u) {
      u = u || {};
      var c = this,
        d = ir(c, l),
        h = u,
        g = h.startAt,
        _ = h.onStart,
        S = h.onStartParams,
        x = h.immediateRender,
        v,
        E = kt.to(
          c,
          cr(
            {
              ease: u.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: d,
              overwrite: "auto",
              duration:
                u.duration ||
                Math.abs(
                  (d - (g && "time" in g ? g.time : c._time)) / c.timeScale()
                ) ||
                Xe,
              onStart: function () {
                if ((c.pause(), !v)) {
                  var O =
                    u.duration ||
                    Math.abs(
                      (d - (g && "time" in g ? g.time : c._time)) /
                        c.timeScale()
                    );
                  E._dur !== O && al(E, O, 0, 1).render(E._time, !0, !0),
                    (v = 1);
                }
                _ && _.apply(E, S || []);
              },
            },
            u
          )
        );
      return x ? E.render(0) : E;
    }),
    (i.tweenFromTo = function (l, u, c) {
      return this.tweenTo(u, cr({ startAt: { time: ir(this, l) } }, c));
    }),
    (i.recent = function () {
      return this._recent;
    }),
    (i.nextLabel = function (l) {
      return l === void 0 && (l = this._time), Jh(this, ir(this, l));
    }),
    (i.previousLabel = function (l) {
      return l === void 0 && (l = this._time), Jh(this, ir(this, l), 1);
    }),
    (i.currentLabel = function (l) {
      return arguments.length
        ? this.seek(l, !0)
        : this.previousLabel(this._time + Xe);
    }),
    (i.shiftChildren = function (l, u, c) {
      c === void 0 && (c = 0);
      for (var d = this._first, h = this.labels, g; d; )
        d._start >= c && ((d._start += l), (d._end += l)), (d = d._next);
      if (u) for (g in h) h[g] >= c && (h[g] += l);
      return co(this);
    }),
    (i.invalidate = function (l) {
      var u = this._first;
      for (this._lock = 0; u; ) u.invalidate(l), (u = u._next);
      return f.prototype.invalidate.call(this, l);
    }),
    (i.clear = function (l) {
      l === void 0 && (l = !0);
      for (var u = this._first, c; u; ) (c = u._next), this.remove(u), (u = c);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        l && (this.labels = {}),
        co(this)
      );
    }),
    (i.totalDuration = function (l) {
      var u = 0,
        c = this,
        d = c._last,
        h = sr,
        g,
        _,
        S;
      if (arguments.length)
        return c.timeScale(
          (c._repeat < 0 ? c.duration() : c.totalDuration()) /
            (c.reversed() ? -l : l)
        );
      if (c._dirty) {
        for (S = c.parent; d; )
          (g = d._prev),
            d._dirty && d.totalDuration(),
            (_ = d._start),
            _ > h && c._sort && d._ts && !c._lock
              ? ((c._lock = 1), (jr(c, d, _ - d._delay, 1)._lock = 0))
              : (h = _),
            _ < 0 &&
              d._ts &&
              ((u -= _),
              ((!S && !c._dp) || (S && S.smoothChildTiming)) &&
                ((c._start += _ / c._ts), (c._time -= _), (c._tTime -= _)),
              c.shiftChildren(-_, !1, -1 / 0),
              (h = 0)),
            d._end > u && d._ts && (u = d._end),
            (d = g);
        al(c, c === st && c._time > u ? c._time : u, 1, 1), (c._dirty = 0);
      }
      return c._tDur;
    }),
    (n.updateRoot = function (l) {
      if ((st._ts && (b0(st, ia(l, st)), (Y0 = Yn.frame)), Yn.frame >= Gh)) {
        Gh += Xn.autoSleep || 120;
        var u = st._first;
        if ((!u || !u._ts) && Xn.autoSleep && Yn._listeners.length < 2) {
          for (; u && !u._ts; ) u = u._next;
          u || Yn.sleep();
        }
      }
    }),
    n
  );
})(xs);
cr(pn.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var B1 = function (n, i, o, l, u, c, d) {
    var h = new Mn(this._pt, n, i, 0, 1, xm, null, u),
      g = 0,
      _ = 0,
      S,
      x,
      v,
      E,
      y,
      O,
      I,
      A;
    for (
      h.b = o,
        h.e = l,
        o += "",
        l += "",
        (I = ~l.indexOf("random(")) && (l = vs(l)),
        c && ((A = [o, l]), c(A, n, i), (o = A[0]), (l = A[1])),
        x = o.match(nf) || [];
      (S = nf.exec(l));

    )
      (E = S[0]),
        (y = l.substring(g, S.index)),
        v ? (v = (v + 1) % 5) : y.substr(-5) === "rgba(" && (v = 1),
        E !== x[_++] &&
          ((O = parseFloat(x[_ - 1]) || 0),
          (h._pt = {
            _next: h._pt,
            p: y || _ === 1 ? y : ",",
            s: O,
            c: E.charAt(1) === "=" ? tl(O, E) - O : parseFloat(E) - O,
            m: v && v < 4 ? Math.round : 0,
          }),
          (g = nf.lastIndex));
    return (
      (h.c = g < l.length ? l.substring(g, l.length) : ""),
      (h.fp = d),
      (B0.test(l) || I) && (h.e = 0),
      (this._pt = h),
      h
    );
  },
  Jf = function (n, i, o, l, u, c, d, h, g, _) {
    dt(l) && (l = l(u || 0, n, c));
    var S = n[i],
      x =
        o !== "get"
          ? o
          : dt(S)
          ? g
            ? n[
                i.indexOf("set") || !dt(n["get" + i.substr(3)])
                  ? i
                  : "get" + i.substr(3)
              ](g)
            : n[i]()
          : S,
      v = dt(S) ? (g ? Y1 : vm) : td,
      E;
    if (
      (Ft(l) &&
        (~l.indexOf("random(") && (l = vs(l)),
        l.charAt(1) === "=" &&
          ((E = tl(x, l) + (Zt(x) || 0)), (E || E === 0) && (l = E))),
      !_ || x !== l || Of)
    )
      return !isNaN(x * l) && l !== ""
        ? ((E = new Mn(
            this._pt,
            n,
            i,
            +x || 0,
            l - (x || 0),
            typeof S == "boolean" ? b1 : ym,
            0,
            v
          )),
          g && (E.fp = g),
          d && E.modifier(d, this, n),
          (this._pt = E))
        : (!S && !(i in n) && Gf(i, l),
          B1.call(this, n, i, x, l, v, h || Xn.stringFilter, g));
  },
  U1 = function (n, i, o, l, u) {
    if (
      (dt(n) && (n = ls(n, u, i, o, l)),
      !Ur(n) || (n.style && n.nodeType) || en(n) || I0(n))
    )
      return Ft(n) ? ls(n, u, i, o, l) : n;
    var c = {},
      d;
    for (d in n) c[d] = ls(n[d], u, i, o, l);
    return c;
  },
  mm = function (n, i, o, l, u, c) {
    var d, h, g, _;
    if (
      Wn[n] &&
      (d = new Wn[n]()).init(
        u,
        d.rawVars ? i[n] : U1(i[n], l, u, c, o),
        o,
        l,
        c
      ) !== !1 &&
      ((o._pt = h = new Mn(o._pt, u, n, 0, 1, d.render, d, 0, d.priority)),
      o !== Jo)
    )
      for (g = o._ptLookup[o._targets.indexOf(u)], _ = d._props.length; _--; )
        g[d._props[_]] = h;
    return d;
  },
  Pi,
  Of,
  ed = function f(n, i, o) {
    var l = n.vars,
      u = l.ease,
      c = l.startAt,
      d = l.immediateRender,
      h = l.lazy,
      g = l.onUpdate,
      _ = l.runBackwards,
      S = l.yoyoEase,
      x = l.keyframes,
      v = l.autoRevert,
      E = n._dur,
      y = n._startAt,
      O = n._targets,
      I = n.parent,
      A = I && I.data === "nested" ? I.vars.targets : O,
      U = n._overwrite === "auto" && !Hf,
      D = n.timeline,
      F,
      V,
      L,
      b,
      $,
      X,
      pe,
      K,
      he,
      ge,
      ke,
      fe,
      ee;
    if (
      (D && (!x || !u) && (u = "none"),
      (n._ease = fo(u, sl.ease)),
      (n._yEase = S ? fm(fo(S === !0 ? u : S, sl.ease)) : 0),
      S &&
        n._yoyo &&
        !n._repeat &&
        ((S = n._yEase), (n._yEase = n._ease), (n._ease = S)),
      (n._from = !D && !!l.runBackwards),
      !D || (x && !l.stagger))
    ) {
      if (
        ((K = O[0] ? ao(O[0]).harness : 0),
        (fe = K && l[K.prop]),
        (F = ra(l, Kf)),
        y &&
          (y._zTime < 0 && y.progress(1),
          i < 0 && _ && d && !v ? y.render(-1, !0) : y.revert(_ && E ? Yu : h1),
          (y._lazy = 0)),
        c)
      ) {
        if (
          (ji(
            (n._startAt = kt.set(
              O,
              cr(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: I,
                  immediateRender: !0,
                  lazy: !y && Nn(h),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    g &&
                    function () {
                      return bn(n, "onUpdate");
                    },
                  stagger: 0,
                },
                c
              )
            ))
          ),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          i < 0 && (Jt || (!d && !v)) && n._startAt.revert(Yu),
          d && E && i <= 0 && o <= 0)
        ) {
          i && (n._zTime = i);
          return;
        }
      } else if (_ && E && !y) {
        if (
          (i && (d = !1),
          (L = cr(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: d && !y && Nn(h),
              immediateRender: d,
              stagger: 0,
              parent: I,
            },
            F
          )),
          fe && (L[K.prop] = fe),
          ji((n._startAt = kt.set(O, L))),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          i < 0 && (Jt ? n._startAt.revert(Yu) : n._startAt.render(-1, !0)),
          (n._zTime = i),
          !d)
        )
          f(n._startAt, Xe, Xe);
        else if (!i) return;
      }
      for (
        n._pt = n._ptCache = 0, h = (E && Nn(h)) || (h && !E), V = 0;
        V < O.length;
        V++
      ) {
        if (
          (($ = O[V]),
          (pe = $._gsap || Zf(O)[V]._gsap),
          (n._ptLookup[V] = ge = {}),
          Sf[pe.id] && zi.length && na(),
          (ke = A === O ? V : A.indexOf($)),
          K &&
            (he = new K()).init($, fe || F, n, ke, A) !== !1 &&
            ((n._pt = b =
              new Mn(n._pt, $, he.name, 0, 1, he.render, he, 0, he.priority)),
            he._props.forEach(function (W) {
              ge[W] = b;
            }),
            he.priority && (X = 1)),
          !K || fe)
        )
          for (L in F)
            Wn[L] && (he = mm(L, F, n, ke, $, A))
              ? he.priority && (X = 1)
              : (ge[L] = b =
                  Jf.call(n, $, L, "get", F[L], ke, A, 0, l.stringFilter));
        n._op && n._op[V] && n.kill($, n._op[V]),
          U &&
            n._pt &&
            ((Pi = n),
            st.killTweensOf($, ge, n.globalTime(i)),
            (ee = !n.parent),
            (Pi = 0)),
          n._pt && h && (Sf[pe.id] = 1);
      }
      X && wm(n), n._onInit && n._onInit(n);
    }
    (n._onUpdate = g),
      (n._initted = (!n._op || n._pt) && !ee),
      x && i <= 0 && D.render(sr, !0, !0);
  },
  V1 = function (n, i, o, l, u, c, d, h) {
    var g = ((n._pt && n._ptCache) || (n._ptCache = {}))[i],
      _,
      S,
      x,
      v;
    if (!g)
      for (
        g = n._ptCache[i] = [], x = n._ptLookup, v = n._targets.length;
        v--;

      ) {
        if (((_ = x[v][i]), _ && _.d && _.d._pt))
          for (_ = _.d._pt; _ && _.p !== i && _.fp !== i; ) _ = _._next;
        if (!_)
          return (
            (Of = 1),
            (n.vars[i] = "+=0"),
            ed(n, d),
            (Of = 0),
            h ? gs(i + " not eligible for reset") : 1
          );
        g.push(_);
      }
    for (v = g.length; v--; )
      (S = g[v]),
        (_ = S._pt || S),
        (_.s = (l || l === 0) && !u ? l : _.s + (l || 0) + c * _.c),
        (_.c = o - _.s),
        S.e && (S.e = gt(o) + Zt(S.e)),
        S.b && (S.b = _.s + Zt(S.b));
  },
  $1 = function (n, i) {
    var o = n[0] ? ao(n[0]).harness : 0,
      l = o && o.aliases,
      u,
      c,
      d,
      h;
    if (!l) return i;
    u = _o({}, i);
    for (c in l)
      if (c in u) for (h = l[c].split(","), d = h.length; d--; ) u[h[d]] = u[c];
    return u;
  },
  W1 = function (n, i, o, l) {
    var u = i.ease || l || "power1.inOut",
      c,
      d;
    if (en(i))
      (d = o[n] || (o[n] = [])),
        i.forEach(function (h, g) {
          return d.push({ t: (g / (i.length - 1)) * 100, v: h, e: u });
        });
    else
      for (c in i)
        (d = o[c] || (o[c] = [])),
          c === "ease" || d.push({ t: parseFloat(n), v: i[c], e: u });
  },
  ls = function (n, i, o, l, u) {
    return dt(n)
      ? n.call(i, o, l, u)
      : Ft(n) && ~n.indexOf("random(")
      ? vs(n)
      : n;
  },
  gm = qf + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  _m = {};
Rn(gm + ",id,stagger,delay,duration,paused,scrollTrigger", function (f) {
  return (_m[f] = 1);
});
var kt = (function (f) {
  j0(n, f);
  function n(o, l, u, c) {
    var d;
    typeof l == "number" && ((u.duration = l), (l = u), (u = null)),
      (d = f.call(this, c ? l : is(l)) || this);
    var h = d.vars,
      g = h.duration,
      _ = h.delay,
      S = h.immediateRender,
      x = h.stagger,
      v = h.overwrite,
      E = h.keyframes,
      y = h.defaults,
      O = h.scrollTrigger,
      I = h.yoyoEase,
      A = l.parent || st,
      U = (en(o) || I0(o) ? ri(o[0]) : "length" in l) ? [o] : ur(o),
      D,
      F,
      V,
      L,
      b,
      $,
      X,
      pe;
    if (
      ((d._targets = U.length
        ? Zf(U)
        : gs(
            "GSAP target " + o + " not found. https://gsap.com",
            !Xn.nullTargetWarn
          ) || []),
      (d._ptLookup = []),
      (d._overwrite = v),
      E || x || Ru(g) || Ru(_))
    ) {
      if (
        ((l = d.vars),
        (D = d.timeline =
          new pn({
            data: "nested",
            defaults: y || {},
            targets: A && A.data === "nested" ? A.vars.targets : U,
          })),
        D.kill(),
        (D.parent = D._dp = Zr(d)),
        (D._start = 0),
        x || Ru(g) || Ru(_))
      ) {
        if (((L = U.length), (X = x && tm(x)), Ur(x)))
          for (b in x) ~gm.indexOf(b) && (pe || (pe = {}), (pe[b] = x[b]));
        for (F = 0; F < L; F++)
          (V = ra(l, _m)),
            (V.stagger = 0),
            I && (V.yoyoEase = I),
            pe && _o(V, pe),
            ($ = U[F]),
            (V.duration = +ls(g, Zr(d), F, $, U)),
            (V.delay = (+ls(_, Zr(d), F, $, U) || 0) - d._delay),
            !x &&
              L === 1 &&
              V.delay &&
              ((d._delay = _ = V.delay), (d._start += _), (V.delay = 0)),
            D.to($, V, X ? X(F, $, U) : 0),
            (D._ease = Ie.none);
        D.duration() ? (g = _ = 0) : (d.timeline = 0);
      } else if (E) {
        is(cr(D.vars.defaults, { ease: "none" })),
          (D._ease = fo(E.ease || l.ease || "none"));
        var K = 0,
          he,
          ge,
          ke;
        if (en(E))
          E.forEach(function (fe) {
            return D.to(U, fe, ">");
          }),
            D.duration();
        else {
          V = {};
          for (b in E)
            b === "ease" || b === "easeEach" || W1(b, E[b], V, E.easeEach);
          for (b in V)
            for (
              he = V[b].sort(function (fe, ee) {
                return fe.t - ee.t;
              }),
                K = 0,
                F = 0;
              F < he.length;
              F++
            )
              (ge = he[F]),
                (ke = {
                  ease: ge.e,
                  duration: ((ge.t - (F ? he[F - 1].t : 0)) / 100) * g,
                }),
                (ke[b] = ge.v),
                D.to(U, ke, K),
                (K += ke.duration);
          D.duration() < g && D.to({}, { duration: g - D.duration() });
        }
      }
      g || d.duration((g = D.duration()));
    } else d.timeline = 0;
    return (
      v === !0 && !Hf && ((Pi = Zr(d)), st.killTweensOf(U), (Pi = 0)),
      jr(A, Zr(d), u),
      l.reversed && d.reverse(),
      l.paused && d.paused(!0),
      (S ||
        (!g &&
          !E &&
          d._start === It(A._time) &&
          Nn(S) &&
          x1(Zr(d)) &&
          A.data !== "nested")) &&
        ((d._tTime = -Xe), d.render(Math.max(0, -_) || 0)),
      O && q0(Zr(d), O),
      d
    );
  }
  var i = n.prototype;
  return (
    (i.render = function (l, u, c) {
      var d = this._time,
        h = this._tDur,
        g = this._dur,
        _ = l < 0,
        S = l > h - Xe && !_ ? h : l < Xe ? 0 : l,
        x,
        v,
        E,
        y,
        O,
        I,
        A,
        U,
        D;
      if (!g) S1(this, l, u, c);
      else if (
        S !== this._tTime ||
        !l ||
        c ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== _)
      ) {
        if (((x = S), (U = this.timeline), this._repeat)) {
          if (((y = g + this._rDelay), this._repeat < -1 && _))
            return this.totalTime(y * 100 + l, u, c);
          if (
            ((x = It(S % y)),
            S === h
              ? ((E = this._repeat), (x = g))
              : ((E = ~~(S / y)),
                E && E === It(S / y) && ((x = g), E--),
                x > g && (x = g)),
            (I = this._yoyo && E & 1),
            I && ((D = this._yEase), (x = g - x)),
            (O = ul(this._tTime, y)),
            x === d && !c && this._initted && E === O)
          )
            return (this._tTime = S), this;
          E !== O &&
            (U && this._yEase && dm(U, I),
            this.vars.repeatRefresh &&
              !I &&
              !this._lock &&
              this._time !== y &&
              this._initted &&
              ((this._lock = c = 1),
              (this.render(It(y * E), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Z0(this, _ ? l : x, c, u, S)) return (this._tTime = 0), this;
          if (d !== this._time && !(c && this.vars.repeatRefresh && E !== O))
            return this;
          if (g !== this._dur) return this.render(l, u, c);
        }
        if (
          ((this._tTime = S),
          (this._time = x),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = A = (D || this._ease)(x / g)),
          this._from && (this.ratio = A = 1 - A),
          x && !d && !u && !E && (bn(this, "onStart"), this._tTime !== S))
        )
          return this;
        for (v = this._pt; v; ) v.r(A, v.d), (v = v._next);
        (U && U.render(l < 0 ? l : U._dur * U._ease(x / this._dur), u, c)) ||
          (this._startAt && (this._zTime = l)),
          this._onUpdate &&
            !u &&
            (_ && kf(this, l, u, c), bn(this, "onUpdate")),
          this._repeat &&
            E !== O &&
            this.vars.onRepeat &&
            !u &&
            this.parent &&
            bn(this, "onRepeat"),
          (S === this._tDur || !S) &&
            this._tTime === S &&
            (_ && !this._onUpdate && kf(this, l, !0, !0),
            (l || !g) &&
              ((S === this._tDur && this._ts > 0) || (!S && this._ts < 0)) &&
              ji(this, 1),
            !u &&
              !(_ && !d) &&
              (S || d || I) &&
              (bn(this, S === h ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(S < h && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (i.targets = function () {
      return this._targets;
    }),
    (i.invalidate = function (l) {
      return (
        (!l || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(l),
        f.prototype.invalidate.call(this, l)
      );
    }),
    (i.resetTo = function (l, u, c, d, h) {
      ys || Yn.wake(), this._ts || this.play();
      var g = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        _;
      return (
        this._initted || ed(this, g),
        (_ = this._ease(g / this._dur)),
        V1(this, l, u, c, d, _, g, h)
          ? this.resetTo(l, u, c, d, 1)
          : (ga(this, 0),
            this.parent ||
              G0(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (i.kill = function (l, u) {
      if ((u === void 0 && (u = "all"), !l && (!u || u === "all")))
        return (this._lazy = this._pt = 0), this.parent ? ql(this) : this;
      if (this.timeline) {
        var c = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(l, u, Pi && Pi.vars.overwrite !== !0)
            ._first || ql(this),
          this.parent &&
            c !== this.timeline.totalDuration() &&
            al(this, (this._dur * this.timeline._tDur) / c, 0, 1),
          this
        );
      }
      var d = this._targets,
        h = l ? ur(l) : d,
        g = this._ptLookup,
        _ = this._pt,
        S,
        x,
        v,
        E,
        y,
        O,
        I;
      if ((!u || u === "all") && v1(d, h))
        return u === "all" && (this._pt = 0), ql(this);
      for (
        S = this._op = this._op || [],
          u !== "all" &&
            (Ft(u) &&
              ((y = {}),
              Rn(u, function (A) {
                return (y[A] = 1);
              }),
              (u = y)),
            (u = $1(d, u))),
          I = d.length;
        I--;

      )
        if (~h.indexOf(d[I])) {
          (x = g[I]),
            u === "all"
              ? ((S[I] = u), (E = x), (v = {}))
              : ((v = S[I] = S[I] || {}), (E = u));
          for (y in E)
            (O = x && x[y]),
              O &&
                ((!("kill" in O.d) || O.d.kill(y) === !0) && ha(this, O, "_pt"),
                delete x[y]),
              v !== "all" && (v[y] = 1);
        }
      return this._initted && !this._pt && _ && ql(this), this;
    }),
    (n.to = function (l, u) {
      return new n(l, u, arguments[2]);
    }),
    (n.from = function (l, u) {
      return os(1, arguments);
    }),
    (n.delayedCall = function (l, u, c, d) {
      return new n(u, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: l,
        onComplete: u,
        onReverseComplete: u,
        onCompleteParams: c,
        onReverseCompleteParams: c,
        callbackScope: d,
      });
    }),
    (n.fromTo = function (l, u, c) {
      return os(2, arguments);
    }),
    (n.set = function (l, u) {
      return (u.duration = 0), u.repeatDelay || (u.repeat = 0), new n(l, u);
    }),
    (n.killTweensOf = function (l, u, c) {
      return st.killTweensOf(l, u, c);
    }),
    n
  );
})(xs);
cr(kt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Rn("staggerTo,staggerFrom,staggerFromTo", function (f) {
  kt[f] = function () {
    var n = new pn(),
      i = Tf.call(arguments, 0);
    return i.splice(f === "staggerFromTo" ? 5 : 4, 0, 0), n[f].apply(n, i);
  };
});
var td = function (n, i, o) {
    return (n[i] = o);
  },
  vm = function (n, i, o) {
    return n[i](o);
  },
  Y1 = function (n, i, o, l) {
    return n[i](l.fp, o);
  },
  H1 = function (n, i, o) {
    return n.setAttribute(i, o);
  },
  nd = function (n, i) {
    return dt(n[i]) ? vm : bf(n[i]) && n.setAttribute ? H1 : td;
  },
  ym = function (n, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * n) * 1e6) / 1e6, i);
  },
  b1 = function (n, i) {
    return i.set(i.t, i.p, !!(i.s + i.c * n), i);
  },
  xm = function (n, i) {
    var o = i._pt,
      l = "";
    if (!n && i.b) l = i.b;
    else if (n === 1 && i.e) l = i.e;
    else {
      for (; o; )
        (l =
          o.p +
          (o.m ? o.m(o.s + o.c * n) : Math.round((o.s + o.c * n) * 1e4) / 1e4) +
          l),
          (o = o._next);
      l += i.c;
    }
    i.set(i.t, i.p, l, i);
  },
  rd = function (n, i) {
    for (var o = i._pt; o; ) o.r(n, o.d), (o = o._next);
  },
  X1 = function (n, i, o, l) {
    for (var u = this._pt, c; u; )
      (c = u._next), u.p === l && u.modifier(n, i, o), (u = c);
  },
  Q1 = function (n) {
    for (var i = this._pt, o, l; i; )
      (l = i._next),
        (i.p === n && !i.op) || i.op === n
          ? ha(this, i, "_pt")
          : i.dep || (o = 1),
        (i = l);
    return !o;
  },
  G1 = function (n, i, o, l) {
    l.mSet(n, i, l.m.call(l.tween, o, l.mt), l);
  },
  wm = function (n) {
    for (var i = n._pt, o, l, u, c; i; ) {
      for (o = i._next, l = u; l && l.pr > i.pr; ) l = l._next;
      (i._prev = l ? l._prev : c) ? (i._prev._next = i) : (u = i),
        (i._next = l) ? (l._prev = i) : (c = i),
        (i = o);
    }
    n._pt = u;
  },
  Mn = (function () {
    function f(i, o, l, u, c, d, h, g, _) {
      (this.t = o),
        (this.s = u),
        (this.c = c),
        (this.p = l),
        (this.r = d || ym),
        (this.d = h || this),
        (this.set = g || td),
        (this.pr = _ || 0),
        (this._next = i),
        i && (i._prev = this);
    }
    var n = f.prototype;
    return (
      (n.modifier = function (o, l, u) {
        (this.mSet = this.mSet || this.set),
          (this.set = G1),
          (this.m = o),
          (this.mt = u),
          (this.tween = l);
      }),
      f
    );
  })();
Rn(
  qf +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (f) {
    return (Kf[f] = 1);
  }
);
Qn.TweenMax = Qn.TweenLite = kt;
Qn.TimelineLite = Qn.TimelineMax = pn;
st = new pn({
  sortChildren: !1,
  defaults: sl,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Xn.stringFilter = cm;
var po = [],
  bu = {},
  K1 = [],
  t0 = 0,
  q1 = 0,
  uf = function (n) {
    return (bu[n] || K1).map(function (i) {
      return i();
    });
  },
  Nf = function () {
    var n = Date.now(),
      i = [];
    n - t0 > 2 &&
      (uf("matchMediaInit"),
      po.forEach(function (o) {
        var l = o.queries,
          u = o.conditions,
          c,
          d,
          h,
          g;
        for (d in l)
          (c = Dr.matchMedia(l[d]).matches),
            c && (h = 1),
            c !== u[d] && ((u[d] = c), (g = 1));
        g && (o.revert(), h && i.push(o));
      }),
      uf("matchMediaRevert"),
      i.forEach(function (o) {
        return o.onMatch(o, function (l) {
          return o.add(null, l);
        });
      }),
      (t0 = n),
      uf("matchMedia"));
  },
  Sm = (function () {
    function f(i, o) {
      (this.selector = o && Ef(o)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = q1++),
        i && this.add(i);
    }
    var n = f.prototype;
    return (
      (n.add = function (o, l, u) {
        dt(o) && ((u = l), (l = o), (o = dt));
        var c = this,
          d = function () {
            var g = nt,
              _ = c.selector,
              S;
            return (
              g && g !== c && g.data.push(c),
              u && (c.selector = Ef(u)),
              (nt = c),
              (S = l.apply(c, arguments)),
              dt(S) && c._r.push(S),
              (nt = g),
              (c.selector = _),
              (c.isReverted = !1),
              S
            );
          };
        return (
          (c.last = d),
          o === dt
            ? d(c, function (h) {
                return c.add(null, h);
              })
            : o
            ? (c[o] = d)
            : d
        );
      }),
      (n.ignore = function (o) {
        var l = nt;
        (nt = null), o(this), (nt = l);
      }),
      (n.getTweens = function () {
        var o = [];
        return (
          this.data.forEach(function (l) {
            return l instanceof f
              ? o.push.apply(o, l.getTweens())
              : l instanceof kt &&
                  !(l.parent && l.parent.data === "nested") &&
                  o.push(l);
          }),
          o
        );
      }),
      (n.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (n.kill = function (o, l) {
        var u = this;
        if (
          (o
            ? (function () {
                for (var d = u.getTweens(), h = u.data.length, g; h--; )
                  (g = u.data[h]),
                    g.data === "isFlip" &&
                      (g.revert(),
                      g.getChildren(!0, !0, !1).forEach(function (_) {
                        return d.splice(d.indexOf(_), 1);
                      }));
                for (
                  d
                    .map(function (_) {
                      return {
                        g:
                          _._dur ||
                          _._delay ||
                          (_._sat && !_._sat.vars.immediateRender)
                            ? _.globalTime(0)
                            : -1 / 0,
                        t: _,
                      };
                    })
                    .sort(function (_, S) {
                      return S.g - _.g || -1 / 0;
                    })
                    .forEach(function (_) {
                      return _.t.revert(o);
                    }),
                    h = u.data.length;
                  h--;

                )
                  (g = u.data[h]),
                    g instanceof pn
                      ? g.data !== "nested" &&
                        (g.scrollTrigger && g.scrollTrigger.revert(), g.kill())
                      : !(g instanceof kt) && g.revert && g.revert(o);
                u._r.forEach(function (_) {
                  return _(o, u);
                }),
                  (u.isReverted = !0);
              })()
            : this.data.forEach(function (d) {
                return d.kill && d.kill();
              }),
          this.clear(),
          l)
        )
          for (var c = po.length; c--; )
            po[c].id === this.id && po.splice(c, 1);
      }),
      (n.revert = function (o) {
        this.kill(o || {});
      }),
      f
    );
  })(),
  Z1 = (function () {
    function f(i) {
      (this.contexts = []), (this.scope = i), nt && nt.data.push(this);
    }
    var n = f.prototype;
    return (
      (n.add = function (o, l, u) {
        Ur(o) || (o = { matches: o });
        var c = new Sm(0, u || this.scope),
          d = (c.conditions = {}),
          h,
          g,
          _;
        nt && !c.selector && (c.selector = nt.selector),
          this.contexts.push(c),
          (l = c.add("onMatch", l)),
          (c.queries = o);
        for (g in o)
          g === "all"
            ? (_ = 1)
            : ((h = Dr.matchMedia(o[g])),
              h &&
                (po.indexOf(c) < 0 && po.push(c),
                (d[g] = h.matches) && (_ = 1),
                h.addListener
                  ? h.addListener(Nf)
                  : h.addEventListener("change", Nf)));
        return (
          _ &&
            l(c, function (S) {
              return c.add(null, S);
            }),
          this
        );
      }),
      (n.revert = function (o) {
        this.kill(o || {});
      }),
      (n.kill = function (o) {
        this.contexts.forEach(function (l) {
          return l.kill(o, !0);
        });
      }),
      f
    );
  })(),
  oa = {
    registerPlugin: function () {
      for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
        i[o] = arguments[o];
      i.forEach(function (l) {
        return sm(l);
      });
    },
    timeline: function (n) {
      return new pn(n);
    },
    getTweensOf: function (n, i) {
      return st.getTweensOf(n, i);
    },
    getProperty: function (n, i, o, l) {
      Ft(n) && (n = ur(n)[0]);
      var u = ao(n || {}).get,
        c = o ? Q0 : X0;
      return (
        o === "native" && (o = ""),
        n &&
          (i
            ? c(((Wn[i] && Wn[i].get) || u)(n, i, o, l))
            : function (d, h, g) {
                return c(((Wn[d] && Wn[d].get) || u)(n, d, h, g));
              })
      );
    },
    quickSetter: function (n, i, o) {
      if (((n = ur(n)), n.length > 1)) {
        var l = n.map(function (_) {
            return Dn.quickSetter(_, i, o);
          }),
          u = l.length;
        return function (_) {
          for (var S = u; S--; ) l[S](_);
        };
      }
      n = n[0] || {};
      var c = Wn[i],
        d = ao(n),
        h = (d.harness && (d.harness.aliases || {})[i]) || i,
        g = c
          ? function (_) {
              var S = new c();
              (Jo._pt = 0),
                S.init(n, o ? _ + o : _, Jo, 0, [n]),
                S.render(1, S),
                Jo._pt && rd(1, Jo);
            }
          : d.set(n, h);
      return c
        ? g
        : function (_) {
            return g(n, h, o ? _ + o : _, d, 1);
          };
    },
    quickTo: function (n, i, o) {
      var l,
        u = Dn.to(
          n,
          _o(((l = {}), (l[i] = "+=0.1"), (l.paused = !0), l), o || {})
        ),
        c = function (h, g, _) {
          return u.resetTo(i, h, g, _);
        };
      return (c.tween = u), c;
    },
    isTweening: function (n) {
      return st.getTweensOf(n, !0).length > 0;
    },
    defaults: function (n) {
      return n && n.ease && (n.ease = fo(n.ease, sl.ease)), Kh(sl, n || {});
    },
    config: function (n) {
      return Kh(Xn, n || {});
    },
    registerEffect: function (n) {
      var i = n.name,
        o = n.effect,
        l = n.plugins,
        u = n.defaults,
        c = n.extendTimeline;
      (l || "").split(",").forEach(function (d) {
        return (
          d && !Wn[d] && !Qn[d] && gs(i + " effect requires " + d + " plugin.")
        );
      }),
        (rf[i] = function (d, h, g) {
          return o(ur(d), cr(h || {}, u), g);
        }),
        c &&
          (pn.prototype[i] = function (d, h, g) {
            return this.add(rf[i](d, Ur(h) ? h : (g = h) && {}, this), g);
          });
    },
    registerEase: function (n, i) {
      Ie[n] = fo(i);
    },
    parseEase: function (n, i) {
      return arguments.length ? fo(n, i) : Ie;
    },
    getById: function (n) {
      return st.getById(n);
    },
    exportRoot: function (n, i) {
      n === void 0 && (n = {});
      var o = new pn(n),
        l,
        u;
      for (
        o.smoothChildTiming = Nn(n.smoothChildTiming),
          st.remove(o),
          o._dp = 0,
          o._time = o._tTime = st._time,
          l = st._first;
        l;

      )
        (u = l._next),
          (i ||
            !(
              !l._dur &&
              l instanceof kt &&
              l.vars.onComplete === l._targets[0]
            )) &&
            jr(o, l, l._start - l._delay),
          (l = u);
      return jr(st, o, 0), o;
    },
    context: function (n, i) {
      return n ? new Sm(n, i) : nt;
    },
    matchMedia: function (n) {
      return new Z1(n);
    },
    matchMediaRefresh: function () {
      return (
        po.forEach(function (n) {
          var i = n.conditions,
            o,
            l;
          for (l in i) i[l] && ((i[l] = !1), (o = 1));
          o && n.revert();
        }) || Nf()
      );
    },
    addEventListener: function (n, i) {
      var o = bu[n] || (bu[n] = []);
      ~o.indexOf(i) || o.push(i);
    },
    removeEventListener: function (n, i) {
      var o = bu[n],
        l = o && o.indexOf(i);
      l >= 0 && o.splice(l, 1);
    },
    utils: {
      wrap: R1,
      wrapYoyo: M1,
      distribute: tm,
      random: rm,
      snap: nm,
      normalize: N1,
      getUnit: Zt,
      clamp: T1,
      splitColor: um,
      toArray: ur,
      selector: Ef,
      mapRange: om,
      pipe: P1,
      unitize: O1,
      interpolate: z1,
      shuffle: em,
    },
    install: $0,
    effects: rf,
    ticker: Yn,
    updateRoot: pn.updateRoot,
    plugins: Wn,
    globalTimeline: st,
    core: {
      PropTween: Mn,
      globals: W0,
      Tween: kt,
      Timeline: pn,
      Animation: xs,
      getCache: ao,
      _removeLinkedListItem: ha,
      reverting: function () {
        return Jt;
      },
      context: function (n) {
        return n && nt && (nt.data.push(n), (n._ctx = nt)), nt;
      },
      suppressOverwrites: function (n) {
        return (Hf = n);
      },
    },
  };
Rn("to,from,fromTo,delayedCall,set,killTweensOf", function (f) {
  return (oa[f] = kt[f]);
});
Yn.add(pn.updateRoot);
Jo = oa.to({}, { duration: 0 });
var J1 = function (n, i) {
    for (var o = n._pt; o && o.p !== i && o.op !== i && o.fp !== i; )
      o = o._next;
    return o;
  },
  ev = function (n, i) {
    var o = n._targets,
      l,
      u,
      c;
    for (l in i)
      for (u = o.length; u--; )
        (c = n._ptLookup[u][l]),
          c &&
            (c = c.d) &&
            (c._pt && (c = J1(c, l)),
            c && c.modifier && c.modifier(i[l], n, o[u], l));
  },
  af = function (n, i) {
    return {
      name: n,
      rawVars: 1,
      init: function (l, u, c) {
        c._onInit = function (d) {
          var h, g;
          if (
            (Ft(u) &&
              ((h = {}),
              Rn(u, function (_) {
                return (h[_] = 1);
              }),
              (u = h)),
            i)
          ) {
            h = {};
            for (g in u) h[g] = i(u[g]);
            u = h;
          }
          ev(d, u);
        };
      },
    };
  },
  Dn =
    oa.registerPlugin(
      {
        name: "attr",
        init: function (n, i, o, l, u) {
          var c, d, h;
          this.tween = o;
          for (c in i)
            (h = n.getAttribute(c) || ""),
              (d = this.add(
                n,
                "setAttribute",
                (h || 0) + "",
                i[c],
                l,
                u,
                0,
                0,
                c
              )),
              (d.op = c),
              (d.b = h),
              this._props.push(c);
        },
        render: function (n, i) {
          for (var o = i._pt; o; )
            Jt ? o.set(o.t, o.p, o.b, o) : o.r(n, o.d), (o = o._next);
        },
      },
      {
        name: "endArray",
        init: function (n, i) {
          for (var o = i.length; o--; )
            this.add(n, o, n[o] || 0, i[o], 0, 0, 0, 0, 0, 1);
        },
      },
      af("roundProps", Pf),
      af("modifiers"),
      af("snap", nm)
    ) || oa;
kt.version = pn.version = Dn.version = "3.12.5";
V0 = 1;
Xf() && cl();
Ie.Power0;
Ie.Power1;
Ie.Power2;
Ie.Power3;
Ie.Power4;
Ie.Linear;
Ie.Quad;
Ie.Cubic;
Ie.Quart;
Ie.Quint;
Ie.Strong;
Ie.Elastic;
Ie.Back;
Ie.SteppedEase;
Ie.Bounce;
Ie.Sine;
Ie.Expo;
Ie.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var n0,
  Oi,
  nl,
  id,
  lo,
  r0,
  od,
  tv = function () {
    return typeof window < "u";
  },
  ii = {},
  ro = 180 / Math.PI,
  rl = Math.PI / 180,
  Xo = Math.atan2,
  i0 = 1e8,
  ld = /([A-Z])/g,
  nv = /(left|right|width|margin|padding|x)/i,
  rv = /[\s,\(]\S/,
  Ar = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Rf = function (n, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * n) * 1e4) / 1e4 + i.u, i);
  },
  iv = function (n, i) {
    return i.set(
      i.t,
      i.p,
      n === 1 ? i.e : Math.round((i.s + i.c * n) * 1e4) / 1e4 + i.u,
      i
    );
  },
  ov = function (n, i) {
    return i.set(
      i.t,
      i.p,
      n ? Math.round((i.s + i.c * n) * 1e4) / 1e4 + i.u : i.b,
      i
    );
  },
  lv = function (n, i) {
    var o = i.s + i.c * n;
    i.set(i.t, i.p, ~~(o + (o < 0 ? -0.5 : 0.5)) + i.u, i);
  },
  km = function (n, i) {
    return i.set(i.t, i.p, n ? i.e : i.b, i);
  },
  Cm = function (n, i) {
    return i.set(i.t, i.p, n !== 1 ? i.b : i.e, i);
  },
  sv = function (n, i, o) {
    return (n.style[i] = o);
  },
  uv = function (n, i, o) {
    return n.style.setProperty(i, o);
  },
  av = function (n, i, o) {
    return (n._gsap[i] = o);
  },
  cv = function (n, i, o) {
    return (n._gsap.scaleX = n._gsap.scaleY = o);
  },
  fv = function (n, i, o, l, u) {
    var c = n._gsap;
    (c.scaleX = c.scaleY = o), c.renderTransform(u, c);
  },
  dv = function (n, i, o, l, u) {
    var c = n._gsap;
    (c[i] = o), c.renderTransform(u, c);
  },
  ut = "transform",
  zn = ut + "Origin",
  pv = function f(n, i) {
    var o = this,
      l = this.target,
      u = l.style,
      c = l._gsap;
    if (n in ii && u) {
      if (((this.tfm = this.tfm || {}), n !== "transform"))
        (n = Ar[n] || n),
          ~n.indexOf(",")
            ? n.split(",").forEach(function (d) {
                return (o.tfm[d] = Jr(l, d));
              })
            : (this.tfm[n] = c.x ? c[n] : Jr(l, n)),
          n === zn && (this.tfm.zOrigin = c.zOrigin);
      else
        return Ar.transform.split(",").forEach(function (d) {
          return f.call(o, d, i);
        });
      if (this.props.indexOf(ut) >= 0) return;
      c.svg &&
        ((this.svgo = l.getAttribute("data-svg-origin")),
        this.props.push(zn, i, "")),
        (n = ut);
    }
    (u || i) && this.props.push(n, i, u[n]);
  },
  Tm = function (n) {
    n.translate &&
      (n.removeProperty("translate"),
      n.removeProperty("scale"),
      n.removeProperty("rotate"));
  },
  hv = function () {
    var n = this.props,
      i = this.target,
      o = i.style,
      l = i._gsap,
      u,
      c;
    for (u = 0; u < n.length; u += 3)
      n[u + 1]
        ? (i[n[u]] = n[u + 2])
        : n[u + 2]
        ? (o[n[u]] = n[u + 2])
        : o.removeProperty(
            n[u].substr(0, 2) === "--"
              ? n[u]
              : n[u].replace(ld, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (c in this.tfm) l[c] = this.tfm[c];
      l.svg &&
        (l.renderTransform(),
        i.setAttribute("data-svg-origin", this.svgo || "")),
        (u = od()),
        (!u || !u.isStart) &&
          !o[ut] &&
          (Tm(o),
          l.zOrigin &&
            o[zn] &&
            ((o[zn] += " " + l.zOrigin + "px"),
            (l.zOrigin = 0),
            l.renderTransform()),
          (l.uncache = 1));
    }
  },
  Em = function (n, i) {
    var o = { target: n, props: [], revert: hv, save: pv };
    return (
      n._gsap || Dn.core.getCache(n),
      i &&
        i.split(",").forEach(function (l) {
          return o.save(l);
        }),
      o
    );
  },
  Pm,
  Mf = function (n, i) {
    var o = Oi.createElementNS
      ? Oi.createElementNS(
          (i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          n
        )
      : Oi.createElement(n);
    return o && o.style ? o : Oi.createElement(n);
  },
  Fr = function f(n, i, o) {
    var l = getComputedStyle(n);
    return (
      l[i] ||
      l.getPropertyValue(i.replace(ld, "-$1").toLowerCase()) ||
      l.getPropertyValue(i) ||
      (!o && f(n, fl(i) || i, 1)) ||
      ""
    );
  },
  o0 = "O,Moz,ms,Ms,Webkit".split(","),
  fl = function (n, i, o) {
    var l = i || lo,
      u = l.style,
      c = 5;
    if (n in u && !o) return n;
    for (
      n = n.charAt(0).toUpperCase() + n.substr(1);
      c-- && !(o0[c] + n in u);

    );
    return c < 0 ? null : (c === 3 ? "ms" : c >= 0 ? o0[c] : "") + n;
  },
  zf = function () {
    tv() &&
      window.document &&
      ((n0 = window),
      (Oi = n0.document),
      (nl = Oi.documentElement),
      (lo = Mf("div") || { style: {} }),
      Mf("div"),
      (ut = fl(ut)),
      (zn = ut + "Origin"),
      (lo.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Pm = !!fl("perspective")),
      (od = Dn.core.reverting),
      (id = 1));
  },
  cf = function f(n) {
    var i = Mf(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      o = this.parentNode,
      l = this.nextSibling,
      u = this.style.cssText,
      c;
    if (
      (nl.appendChild(i),
      i.appendChild(this),
      (this.style.display = "block"),
      n)
    )
      try {
        (c = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = f);
      } catch {}
    else this._gsapBBox && (c = this._gsapBBox());
    return (
      o && (l ? o.insertBefore(this, l) : o.appendChild(this)),
      nl.removeChild(i),
      (this.style.cssText = u),
      c
    );
  },
  l0 = function (n, i) {
    for (var o = i.length; o--; )
      if (n.hasAttribute(i[o])) return n.getAttribute(i[o]);
  },
  Om = function (n) {
    var i;
    try {
      i = n.getBBox();
    } catch {
      i = cf.call(n, !0);
    }
    return (
      (i && (i.width || i.height)) || n.getBBox === cf || (i = cf.call(n, !0)),
      i && !i.width && !i.x && !i.y
        ? {
            x: +l0(n, ["x", "cx", "x1"]) || 0,
            y: +l0(n, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : i
    );
  },
  Nm = function (n) {
    return !!(n.getCTM && (!n.parentNode || n.ownerSVGElement) && Om(n));
  },
  vo = function (n, i) {
    if (i) {
      var o = n.style,
        l;
      i in ii && i !== zn && (i = ut),
        o.removeProperty
          ? ((l = i.substr(0, 2)),
            (l === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i),
            o.removeProperty(
              l === "--" ? i : i.replace(ld, "-$1").toLowerCase()
            ))
          : o.removeAttribute(i);
    }
  },
  Ni = function (n, i, o, l, u, c) {
    var d = new Mn(n._pt, i, o, 0, 1, c ? Cm : km);
    return (n._pt = d), (d.b = l), (d.e = u), n._props.push(o), d;
  },
  s0 = { deg: 1, rad: 1, turn: 1 },
  mv = { grid: 1, flex: 1 },
  Ai = function f(n, i, o, l) {
    var u = parseFloat(o) || 0,
      c = (o + "").trim().substr((u + "").length) || "px",
      d = lo.style,
      h = nv.test(i),
      g = n.tagName.toLowerCase() === "svg",
      _ = (g ? "client" : "offset") + (h ? "Width" : "Height"),
      S = 100,
      x = l === "px",
      v = l === "%",
      E,
      y,
      O,
      I;
    if (l === c || !u || s0[l] || s0[c]) return u;
    if (
      (c !== "px" && !x && (u = f(n, i, o, "px")),
      (I = n.getCTM && Nm(n)),
      (v || c === "%") && (ii[i] || ~i.indexOf("adius")))
    )
      return (
        (E = I ? n.getBBox()[h ? "width" : "height"] : n[_]),
        gt(v ? (u / E) * S : (u / 100) * E)
      );
    if (
      ((d[h ? "width" : "height"] = S + (x ? c : l)),
      (y =
        ~i.indexOf("adius") || (l === "em" && n.appendChild && !g)
          ? n
          : n.parentNode),
      I && (y = (n.ownerSVGElement || {}).parentNode),
      (!y || y === Oi || !y.appendChild) && (y = Oi.body),
      (O = y._gsap),
      O && v && O.width && h && O.time === Yn.time && !O.uncache)
    )
      return gt((u / O.width) * S);
    if (v && (i === "height" || i === "width")) {
      var A = n.style[i];
      (n.style[i] = S + l), (E = n[_]), A ? (n.style[i] = A) : vo(n, i);
    } else
      (v || c === "%") &&
        !mv[Fr(y, "display")] &&
        (d.position = Fr(n, "position")),
        y === n && (d.position = "static"),
        y.appendChild(lo),
        (E = lo[_]),
        y.removeChild(lo),
        (d.position = "absolute");
    return (
      h && v && ((O = ao(y)), (O.time = Yn.time), (O.width = y[_])),
      gt(x ? (E * u) / S : E && u ? (S / E) * u : 0)
    );
  },
  Jr = function (n, i, o, l) {
    var u;
    return (
      id || zf(),
      i in Ar &&
        i !== "transform" &&
        ((i = Ar[i]), ~i.indexOf(",") && (i = i.split(",")[0])),
      ii[i] && i !== "transform"
        ? ((u = Ss(n, l)),
          (u =
            i !== "transformOrigin"
              ? u[i]
              : u.svg
              ? u.origin
              : sa(Fr(n, zn)) + " " + u.zOrigin + "px"))
        : ((u = n.style[i]),
          (!u || u === "auto" || l || ~(u + "").indexOf("calc(")) &&
            (u =
              (la[i] && la[i](n, i, o)) ||
              Fr(n, i) ||
              H0(n, i) ||
              (i === "opacity" ? 1 : 0))),
      o && !~(u + "").trim().indexOf(" ") ? Ai(n, i, u, o) + o : u
    );
  },
  gv = function (n, i, o, l) {
    if (!o || o === "none") {
      var u = fl(i, n, 1),
        c = u && Fr(n, u, 1);
      c && c !== o
        ? ((i = u), (o = c))
        : i === "borderColor" && (o = Fr(n, "borderTopColor"));
    }
    var d = new Mn(this._pt, n.style, i, 0, 1, xm),
      h = 0,
      g = 0,
      _,
      S,
      x,
      v,
      E,
      y,
      O,
      I,
      A,
      U,
      D,
      F;
    if (
      ((d.b = o),
      (d.e = l),
      (o += ""),
      (l += ""),
      l === "auto" &&
        ((y = n.style[i]),
        (n.style[i] = l),
        (l = Fr(n, i) || l),
        y ? (n.style[i] = y) : vo(n, i)),
      (_ = [o, l]),
      cm(_),
      (o = _[0]),
      (l = _[1]),
      (x = o.match(Zo) || []),
      (F = l.match(Zo) || []),
      F.length)
    ) {
      for (; (S = Zo.exec(l)); )
        (O = S[0]),
          (A = l.substring(h, S.index)),
          E
            ? (E = (E + 1) % 5)
            : (A.substr(-5) === "rgba(" || A.substr(-5) === "hsla(") && (E = 1),
          O !== (y = x[g++] || "") &&
            ((v = parseFloat(y) || 0),
            (D = y.substr((v + "").length)),
            O.charAt(1) === "=" && (O = tl(v, O) + D),
            (I = parseFloat(O)),
            (U = O.substr((I + "").length)),
            (h = Zo.lastIndex - U.length),
            U ||
              ((U = U || Xn.units[i] || D),
              h === l.length && ((l += U), (d.e += U))),
            D !== U && (v = Ai(n, i, y, U) || 0),
            (d._pt = {
              _next: d._pt,
              p: A || g === 1 ? A : ",",
              s: v,
              c: I - v,
              m: (E && E < 4) || i === "zIndex" ? Math.round : 0,
            }));
      d.c = h < l.length ? l.substring(h, l.length) : "";
    } else d.r = i === "display" && l === "none" ? Cm : km;
    return B0.test(l) && (d.e = 0), (this._pt = d), d;
  },
  u0 = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  _v = function (n) {
    var i = n.split(" "),
      o = i[0],
      l = i[1] || "50%";
    return (
      (o === "top" || o === "bottom" || l === "left" || l === "right") &&
        ((n = o), (o = l), (l = n)),
      (i[0] = u0[o] || o),
      (i[1] = u0[l] || l),
      i.join(" ")
    );
  },
  vv = function (n, i) {
    if (i.tween && i.tween._time === i.tween._dur) {
      var o = i.t,
        l = o.style,
        u = i.u,
        c = o._gsap,
        d,
        h,
        g;
      if (u === "all" || u === !0) (l.cssText = ""), (h = 1);
      else
        for (u = u.split(","), g = u.length; --g > -1; )
          (d = u[g]),
            ii[d] && ((h = 1), (d = d === "transformOrigin" ? zn : ut)),
            vo(o, d);
      h &&
        (vo(o, ut),
        c &&
          (c.svg && o.removeAttribute("transform"),
          Ss(o, 1),
          (c.uncache = 1),
          Tm(l)));
    }
  },
  la = {
    clearProps: function (n, i, o, l, u) {
      if (u.data !== "isFromStart") {
        var c = (n._pt = new Mn(n._pt, i, o, 0, 0, vv));
        return (c.u = l), (c.pr = -10), (c.tween = u), n._props.push(o), 1;
      }
    },
  },
  ws = [1, 0, 0, 1, 0, 0],
  Rm = {},
  Mm = function (n) {
    return n === "matrix(1, 0, 0, 1, 0, 0)" || n === "none" || !n;
  },
  a0 = function (n) {
    var i = Fr(n, ut);
    return Mm(i) ? ws : i.substr(7).match(F0).map(gt);
  },
  sd = function (n, i) {
    var o = n._gsap || ao(n),
      l = n.style,
      u = a0(n),
      c,
      d,
      h,
      g;
    return o.svg && n.getAttribute("transform")
      ? ((h = n.transform.baseVal.consolidate().matrix),
        (u = [h.a, h.b, h.c, h.d, h.e, h.f]),
        u.join(",") === "1,0,0,1,0,0" ? ws : u)
      : (u === ws &&
          !n.offsetParent &&
          n !== nl &&
          !o.svg &&
          ((h = l.display),
          (l.display = "block"),
          (c = n.parentNode),
          (!c || !n.offsetParent) &&
            ((g = 1), (d = n.nextElementSibling), nl.appendChild(n)),
          (u = a0(n)),
          h ? (l.display = h) : vo(n, "display"),
          g &&
            (d
              ? c.insertBefore(n, d)
              : c
              ? c.appendChild(n)
              : nl.removeChild(n))),
        i && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  },
  Df = function (n, i, o, l, u, c) {
    var d = n._gsap,
      h = u || sd(n, !0),
      g = d.xOrigin || 0,
      _ = d.yOrigin || 0,
      S = d.xOffset || 0,
      x = d.yOffset || 0,
      v = h[0],
      E = h[1],
      y = h[2],
      O = h[3],
      I = h[4],
      A = h[5],
      U = i.split(" "),
      D = parseFloat(U[0]) || 0,
      F = parseFloat(U[1]) || 0,
      V,
      L,
      b,
      $;
    o
      ? h !== ws &&
        (L = v * O - E * y) &&
        ((b = D * (O / L) + F * (-y / L) + (y * A - O * I) / L),
        ($ = D * (-E / L) + F * (v / L) - (v * A - E * I) / L),
        (D = b),
        (F = $))
      : ((V = Om(n)),
        (D = V.x + (~U[0].indexOf("%") ? (D / 100) * V.width : D)),
        (F = V.y + (~(U[1] || U[0]).indexOf("%") ? (F / 100) * V.height : F))),
      l || (l !== !1 && d.smooth)
        ? ((I = D - g),
          (A = F - _),
          (d.xOffset = S + (I * v + A * y) - I),
          (d.yOffset = x + (I * E + A * O) - A))
        : (d.xOffset = d.yOffset = 0),
      (d.xOrigin = D),
      (d.yOrigin = F),
      (d.smooth = !!l),
      (d.origin = i),
      (d.originIsAbsolute = !!o),
      (n.style[zn] = "0px 0px"),
      c &&
        (Ni(c, d, "xOrigin", g, D),
        Ni(c, d, "yOrigin", _, F),
        Ni(c, d, "xOffset", S, d.xOffset),
        Ni(c, d, "yOffset", x, d.yOffset)),
      n.setAttribute("data-svg-origin", D + " " + F);
  },
  Ss = function (n, i) {
    var o = n._gsap || new hm(n);
    if ("x" in o && !i && !o.uncache) return o;
    var l = n.style,
      u = o.scaleX < 0,
      c = "px",
      d = "deg",
      h = getComputedStyle(n),
      g = Fr(n, zn) || "0",
      _,
      S,
      x,
      v,
      E,
      y,
      O,
      I,
      A,
      U,
      D,
      F,
      V,
      L,
      b,
      $,
      X,
      pe,
      K,
      he,
      ge,
      ke,
      fe,
      ee,
      W,
      Z,
      k,
      T,
      B,
      de,
      oe,
      me;
    return (
      (_ = S = x = y = O = I = A = U = D = 0),
      (v = E = 1),
      (o.svg = !!(n.getCTM && Nm(n))),
      h.translate &&
        ((h.translate !== "none" ||
          h.scale !== "none" ||
          h.rotate !== "none") &&
          (l[ut] =
            (h.translate !== "none"
              ? "translate3d(" +
                (h.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (h.rotate !== "none" ? "rotate(" + h.rotate + ") " : "") +
            (h.scale !== "none"
              ? "scale(" + h.scale.split(" ").join(",") + ") "
              : "") +
            (h[ut] !== "none" ? h[ut] : "")),
        (l.scale = l.rotate = l.translate = "none")),
      (L = sd(n, o.svg)),
      o.svg &&
        (o.uncache
          ? ((W = n.getBBox()),
            (g = o.xOrigin - W.x + "px " + (o.yOrigin - W.y) + "px"),
            (ee = ""))
          : (ee = !i && n.getAttribute("data-svg-origin")),
        Df(n, ee || g, !!ee || o.originIsAbsolute, o.smooth !== !1, L)),
      (F = o.xOrigin || 0),
      (V = o.yOrigin || 0),
      L !== ws &&
        ((pe = L[0]),
        (K = L[1]),
        (he = L[2]),
        (ge = L[3]),
        (_ = ke = L[4]),
        (S = fe = L[5]),
        L.length === 6
          ? ((v = Math.sqrt(pe * pe + K * K)),
            (E = Math.sqrt(ge * ge + he * he)),
            (y = pe || K ? Xo(K, pe) * ro : 0),
            (A = he || ge ? Xo(he, ge) * ro + y : 0),
            A && (E *= Math.abs(Math.cos(A * rl))),
            o.svg &&
              ((_ -= F - (F * pe + V * he)), (S -= V - (F * K + V * ge))))
          : ((me = L[6]),
            (de = L[7]),
            (k = L[8]),
            (T = L[9]),
            (B = L[10]),
            (oe = L[11]),
            (_ = L[12]),
            (S = L[13]),
            (x = L[14]),
            (b = Xo(me, B)),
            (O = b * ro),
            b &&
              (($ = Math.cos(-b)),
              (X = Math.sin(-b)),
              (ee = ke * $ + k * X),
              (W = fe * $ + T * X),
              (Z = me * $ + B * X),
              (k = ke * -X + k * $),
              (T = fe * -X + T * $),
              (B = me * -X + B * $),
              (oe = de * -X + oe * $),
              (ke = ee),
              (fe = W),
              (me = Z)),
            (b = Xo(-he, B)),
            (I = b * ro),
            b &&
              (($ = Math.cos(-b)),
              (X = Math.sin(-b)),
              (ee = pe * $ - k * X),
              (W = K * $ - T * X),
              (Z = he * $ - B * X),
              (oe = ge * X + oe * $),
              (pe = ee),
              (K = W),
              (he = Z)),
            (b = Xo(K, pe)),
            (y = b * ro),
            b &&
              (($ = Math.cos(b)),
              (X = Math.sin(b)),
              (ee = pe * $ + K * X),
              (W = ke * $ + fe * X),
              (K = K * $ - pe * X),
              (fe = fe * $ - ke * X),
              (pe = ee),
              (ke = W)),
            O &&
              Math.abs(O) + Math.abs(y) > 359.9 &&
              ((O = y = 0), (I = 180 - I)),
            (v = gt(Math.sqrt(pe * pe + K * K + he * he))),
            (E = gt(Math.sqrt(fe * fe + me * me))),
            (b = Xo(ke, fe)),
            (A = Math.abs(b) > 2e-4 ? b * ro : 0),
            (D = oe ? 1 / (oe < 0 ? -oe : oe) : 0)),
        o.svg &&
          ((ee = n.getAttribute("transform")),
          (o.forceCSS = n.setAttribute("transform", "") || !Mm(Fr(n, ut))),
          ee && n.setAttribute("transform", ee))),
      Math.abs(A) > 90 &&
        Math.abs(A) < 270 &&
        (u
          ? ((v *= -1), (A += y <= 0 ? 180 : -180), (y += y <= 0 ? 180 : -180))
          : ((E *= -1), (A += A <= 0 ? 180 : -180))),
      (i = i || o.uncache),
      (o.x =
        _ -
        ((o.xPercent =
          _ &&
          ((!i && o.xPercent) ||
            (Math.round(n.offsetWidth / 2) === Math.round(-_) ? -50 : 0)))
          ? (n.offsetWidth * o.xPercent) / 100
          : 0) +
        c),
      (o.y =
        S -
        ((o.yPercent =
          S &&
          ((!i && o.yPercent) ||
            (Math.round(n.offsetHeight / 2) === Math.round(-S) ? -50 : 0)))
          ? (n.offsetHeight * o.yPercent) / 100
          : 0) +
        c),
      (o.z = x + c),
      (o.scaleX = gt(v)),
      (o.scaleY = gt(E)),
      (o.rotation = gt(y) + d),
      (o.rotationX = gt(O) + d),
      (o.rotationY = gt(I) + d),
      (o.skewX = A + d),
      (o.skewY = U + d),
      (o.transformPerspective = D + c),
      (o.zOrigin = parseFloat(g.split(" ")[2]) || (!i && o.zOrigin) || 0) &&
        (l[zn] = sa(g)),
      (o.xOffset = o.yOffset = 0),
      (o.force3D = Xn.force3D),
      (o.renderTransform = o.svg ? xv : Pm ? zm : yv),
      (o.uncache = 0),
      o
    );
  },
  sa = function (n) {
    return (n = n.split(" "))[0] + " " + n[1];
  },
  ff = function (n, i, o) {
    var l = Zt(i);
    return gt(parseFloat(i) + parseFloat(Ai(n, "x", o + "px", l))) + l;
  },
  yv = function (n, i) {
    (i.z = "0px"),
      (i.rotationY = i.rotationX = "0deg"),
      (i.force3D = 0),
      zm(n, i);
  },
  to = "0deg",
  Ql = "0px",
  no = ") ",
  zm = function (n, i) {
    var o = i || this,
      l = o.xPercent,
      u = o.yPercent,
      c = o.x,
      d = o.y,
      h = o.z,
      g = o.rotation,
      _ = o.rotationY,
      S = o.rotationX,
      x = o.skewX,
      v = o.skewY,
      E = o.scaleX,
      y = o.scaleY,
      O = o.transformPerspective,
      I = o.force3D,
      A = o.target,
      U = o.zOrigin,
      D = "",
      F = (I === "auto" && n && n !== 1) || I === !0;
    if (U && (S !== to || _ !== to)) {
      var V = parseFloat(_) * rl,
        L = Math.sin(V),
        b = Math.cos(V),
        $;
      (V = parseFloat(S) * rl),
        ($ = Math.cos(V)),
        (c = ff(A, c, L * $ * -U)),
        (d = ff(A, d, -Math.sin(V) * -U)),
        (h = ff(A, h, b * $ * -U + U));
    }
    O !== Ql && (D += "perspective(" + O + no),
      (l || u) && (D += "translate(" + l + "%, " + u + "%) "),
      (F || c !== Ql || d !== Ql || h !== Ql) &&
        (D +=
          h !== Ql || F
            ? "translate3d(" + c + ", " + d + ", " + h + ") "
            : "translate(" + c + ", " + d + no),
      g !== to && (D += "rotate(" + g + no),
      _ !== to && (D += "rotateY(" + _ + no),
      S !== to && (D += "rotateX(" + S + no),
      (x !== to || v !== to) && (D += "skew(" + x + ", " + v + no),
      (E !== 1 || y !== 1) && (D += "scale(" + E + ", " + y + no),
      (A.style[ut] = D || "translate(0, 0)");
  },
  xv = function (n, i) {
    var o = i || this,
      l = o.xPercent,
      u = o.yPercent,
      c = o.x,
      d = o.y,
      h = o.rotation,
      g = o.skewX,
      _ = o.skewY,
      S = o.scaleX,
      x = o.scaleY,
      v = o.target,
      E = o.xOrigin,
      y = o.yOrigin,
      O = o.xOffset,
      I = o.yOffset,
      A = o.forceCSS,
      U = parseFloat(c),
      D = parseFloat(d),
      F,
      V,
      L,
      b,
      $;
    (h = parseFloat(h)),
      (g = parseFloat(g)),
      (_ = parseFloat(_)),
      _ && ((_ = parseFloat(_)), (g += _), (h += _)),
      h || g
        ? ((h *= rl),
          (g *= rl),
          (F = Math.cos(h) * S),
          (V = Math.sin(h) * S),
          (L = Math.sin(h - g) * -x),
          (b = Math.cos(h - g) * x),
          g &&
            ((_ *= rl),
            ($ = Math.tan(g - _)),
            ($ = Math.sqrt(1 + $ * $)),
            (L *= $),
            (b *= $),
            _ &&
              (($ = Math.tan(_)),
              ($ = Math.sqrt(1 + $ * $)),
              (F *= $),
              (V *= $))),
          (F = gt(F)),
          (V = gt(V)),
          (L = gt(L)),
          (b = gt(b)))
        : ((F = S), (b = x), (V = L = 0)),
      ((U && !~(c + "").indexOf("px")) || (D && !~(d + "").indexOf("px"))) &&
        ((U = Ai(v, "x", c, "px")), (D = Ai(v, "y", d, "px"))),
      (E || y || O || I) &&
        ((U = gt(U + E - (E * F + y * L) + O)),
        (D = gt(D + y - (E * V + y * b) + I))),
      (l || u) &&
        (($ = v.getBBox()),
        (U = gt(U + (l / 100) * $.width)),
        (D = gt(D + (u / 100) * $.height))),
      ($ =
        "matrix(" + F + "," + V + "," + L + "," + b + "," + U + "," + D + ")"),
      v.setAttribute("transform", $),
      A && (v.style[ut] = $);
  },
  wv = function (n, i, o, l, u) {
    var c = 360,
      d = Ft(u),
      h = parseFloat(u) * (d && ~u.indexOf("rad") ? ro : 1),
      g = h - l,
      _ = l + g + "deg",
      S,
      x;
    return (
      d &&
        ((S = u.split("_")[1]),
        S === "short" && ((g %= c), g !== g % (c / 2) && (g += g < 0 ? c : -c)),
        S === "cw" && g < 0
          ? (g = ((g + c * i0) % c) - ~~(g / c) * c)
          : S === "ccw" && g > 0 && (g = ((g - c * i0) % c) - ~~(g / c) * c)),
      (n._pt = x = new Mn(n._pt, i, o, l, g, iv)),
      (x.e = _),
      (x.u = "deg"),
      n._props.push(o),
      x
    );
  },
  c0 = function (n, i) {
    for (var o in i) n[o] = i[o];
    return n;
  },
  Sv = function (n, i, o) {
    var l = c0({}, o._gsap),
      u = "perspective,force3D,transformOrigin,svgOrigin",
      c = o.style,
      d,
      h,
      g,
      _,
      S,
      x,
      v,
      E;
    l.svg
      ? ((g = o.getAttribute("transform")),
        o.setAttribute("transform", ""),
        (c[ut] = i),
        (d = Ss(o, 1)),
        vo(o, ut),
        o.setAttribute("transform", g))
      : ((g = getComputedStyle(o)[ut]),
        (c[ut] = i),
        (d = Ss(o, 1)),
        (c[ut] = g));
    for (h in ii)
      (g = l[h]),
        (_ = d[h]),
        g !== _ &&
          u.indexOf(h) < 0 &&
          ((v = Zt(g)),
          (E = Zt(_)),
          (S = v !== E ? Ai(o, h, g, E) : parseFloat(g)),
          (x = parseFloat(_)),
          (n._pt = new Mn(n._pt, d, h, S, x - S, Rf)),
          (n._pt.u = E || 0),
          n._props.push(h));
    c0(d, l);
  };
Rn("padding,margin,Width,Radius", function (f, n) {
  var i = "Top",
    o = "Right",
    l = "Bottom",
    u = "Left",
    c = (n < 3 ? [i, o, l, u] : [i + u, i + o, l + o, l + u]).map(function (d) {
      return n < 2 ? f + d : "border" + d + f;
    });
  la[n > 1 ? "border" + f : f] = function (d, h, g, _, S) {
    var x, v;
    if (arguments.length < 4)
      return (
        (x = c.map(function (E) {
          return Jr(d, E, g);
        })),
        (v = x.join(" ")),
        v.split(x[0]).length === 5 ? x[0] : v
      );
    (x = (_ + "").split(" ")),
      (v = {}),
      c.forEach(function (E, y) {
        return (v[E] = x[y] = x[y] || x[((y - 1) / 2) | 0]);
      }),
      d.init(h, v, S);
  };
});
var Dm = {
  name: "css",
  register: zf,
  targetTest: function (n) {
    return n.style && n.nodeType;
  },
  init: function (n, i, o, l, u) {
    var c = this._props,
      d = n.style,
      h = o.vars.startAt,
      g,
      _,
      S,
      x,
      v,
      E,
      y,
      O,
      I,
      A,
      U,
      D,
      F,
      V,
      L,
      b;
    id || zf(),
      (this.styles = this.styles || Em(n)),
      (b = this.styles.props),
      (this.tween = o);
    for (y in i)
      if (y !== "autoRound" && ((_ = i[y]), !(Wn[y] && mm(y, i, o, l, n, u)))) {
        if (
          ((v = typeof _),
          (E = la[y]),
          v === "function" && ((_ = _.call(o, l, n, u)), (v = typeof _)),
          v === "string" && ~_.indexOf("random(") && (_ = vs(_)),
          E)
        )
          E(this, n, y, _, o) && (L = 1);
        else if (y.substr(0, 2) === "--")
          (g = (getComputedStyle(n).getPropertyValue(y) + "").trim()),
            (_ += ""),
            (Di.lastIndex = 0),
            Di.test(g) || ((O = Zt(g)), (I = Zt(_))),
            I ? O !== I && (g = Ai(n, y, g, I) + I) : O && (_ += O),
            this.add(d, "setProperty", g, _, l, u, 0, 0, y),
            c.push(y),
            b.push(y, 0, d[y]);
        else if (v !== "undefined") {
          if (
            (h && y in h
              ? ((g = typeof h[y] == "function" ? h[y].call(o, l, n, u) : h[y]),
                Ft(g) && ~g.indexOf("random(") && (g = vs(g)),
                Zt(g + "") ||
                  g === "auto" ||
                  (g += Xn.units[y] || Zt(Jr(n, y)) || ""),
                (g + "").charAt(1) === "=" && (g = Jr(n, y)))
              : (g = Jr(n, y)),
            (x = parseFloat(g)),
            (A = v === "string" && _.charAt(1) === "=" && _.substr(0, 2)),
            A && (_ = _.substr(2)),
            (S = parseFloat(_)),
            y in Ar &&
              (y === "autoAlpha" &&
                (x === 1 && Jr(n, "visibility") === "hidden" && S && (x = 0),
                b.push("visibility", 0, d.visibility),
                Ni(
                  this,
                  d,
                  "visibility",
                  x ? "inherit" : "hidden",
                  S ? "inherit" : "hidden",
                  !S
                )),
              y !== "scale" &&
                y !== "transform" &&
                ((y = Ar[y]), ~y.indexOf(",") && (y = y.split(",")[0]))),
            (U = y in ii),
            U)
          ) {
            if (
              (this.styles.save(y),
              D ||
                ((F = n._gsap),
                (F.renderTransform && !i.parseTransform) ||
                  Ss(n, i.parseTransform),
                (V = i.smoothOrigin !== !1 && F.smooth),
                (D = this._pt =
                  new Mn(this._pt, d, ut, 0, 1, F.renderTransform, F, 0, -1)),
                (D.dep = 1)),
              y === "scale")
            )
              (this._pt = new Mn(
                this._pt,
                F,
                "scaleY",
                F.scaleY,
                (A ? tl(F.scaleY, A + S) : S) - F.scaleY || 0,
                Rf
              )),
                (this._pt.u = 0),
                c.push("scaleY", y),
                (y += "X");
            else if (y === "transformOrigin") {
              b.push(zn, 0, d[zn]),
                (_ = _v(_)),
                F.svg
                  ? Df(n, _, 0, V, 0, this)
                  : ((I = parseFloat(_.split(" ")[2]) || 0),
                    I !== F.zOrigin && Ni(this, F, "zOrigin", F.zOrigin, I),
                    Ni(this, d, y, sa(g), sa(_)));
              continue;
            } else if (y === "svgOrigin") {
              Df(n, _, 1, V, 0, this);
              continue;
            } else if (y in Rm) {
              wv(this, F, y, x, A ? tl(x, A + _) : _);
              continue;
            } else if (y === "smoothOrigin") {
              Ni(this, F, "smooth", F.smooth, _);
              continue;
            } else if (y === "force3D") {
              F[y] = _;
              continue;
            } else if (y === "transform") {
              Sv(this, _, n);
              continue;
            }
          } else y in d || (y = fl(y) || y);
          if (U || ((S || S === 0) && (x || x === 0) && !rv.test(_) && y in d))
            (O = (g + "").substr((x + "").length)),
              S || (S = 0),
              (I = Zt(_) || (y in Xn.units ? Xn.units[y] : O)),
              O !== I && (x = Ai(n, y, g, I)),
              (this._pt = new Mn(
                this._pt,
                U ? F : d,
                y,
                x,
                (A ? tl(x, A + S) : S) - x,
                !U && (I === "px" || y === "zIndex") && i.autoRound !== !1
                  ? lv
                  : Rf
              )),
              (this._pt.u = I || 0),
              O !== I && I !== "%" && ((this._pt.b = g), (this._pt.r = ov));
          else if (y in d) gv.call(this, n, y, g, A ? A + _ : _);
          else if (y in n) this.add(n, y, g || n[y], A ? A + _ : _, l, u);
          else if (y !== "parseTransform") {
            Gf(y, _);
            continue;
          }
          U || (y in d ? b.push(y, 0, d[y]) : b.push(y, 1, g || n[y])),
            c.push(y);
        }
      }
    L && wm(this);
  },
  render: function (n, i) {
    if (i.tween._time || !od())
      for (var o = i._pt; o; ) o.r(n, o.d), (o = o._next);
    else i.styles.revert();
  },
  get: Jr,
  aliases: Ar,
  getSetter: function (n, i, o) {
    var l = Ar[i];
    return (
      l && l.indexOf(",") < 0 && (i = l),
      i in ii && i !== zn && (n._gsap.x || Jr(n, "x"))
        ? o && r0 === o
          ? i === "scale"
            ? cv
            : av
          : (r0 = o || {}) && (i === "scale" ? fv : dv)
        : n.style && !bf(n.style[i])
        ? sv
        : ~i.indexOf("-")
        ? uv
        : nd(n, i)
    );
  },
  core: { _removeProperty: vo, _getMatrix: sd },
};
Dn.utils.checkPrefix = fl;
Dn.core.getStyleSaver = Em;
(function (f, n, i, o) {
  var l = Rn(f + "," + n + "," + i, function (u) {
    ii[u] = 1;
  });
  Rn(n, function (u) {
    (Xn.units[u] = "deg"), (Rm[u] = 1);
  }),
    (Ar[l[13]] = f + "," + n),
    Rn(o, function (u) {
      var c = u.split(":");
      Ar[c[1]] = l[c[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Rn(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (f) {
    Xn.units[f] = "px";
  }
);
Dn.registerPlugin(Dm);
var On = Dn.registerPlugin(Dm) || Dn;
On.core.Tween;
/*!
 * @gsap/react 2.1.1
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ let f0 = typeof window < "u" ? Be.useLayoutEffect : Be.useEffect,
  d0 = (f) => f && !Array.isArray(f) && typeof f == "object",
  Mu = [],
  kv = {},
  Lm = On;
const dl = (f, n = Mu) => {
  let i = kv;
  d0(f)
    ? ((i = f), (f = null), (n = "dependencies" in i ? i.dependencies : Mu))
    : d0(n) && ((i = n), (n = "dependencies" in i ? i.dependencies : Mu)),
    f &&
      typeof f != "function" &&
      console.warn("First parameter must be a function or config object");
  const { scope: o, revertOnUpdate: l } = i,
    u = Be.useRef(!1),
    c = Be.useRef(Lm.context(() => {}, o)),
    d = Be.useRef((g) => c.current.add(null, g)),
    h = n && n.length && !l;
  return (
    f0(() => {
      if ((f && c.current.add(f, o), !h || !u.current))
        return () => c.current.revert();
    }, n),
    h && f0(() => ((u.current = !0), () => c.current.revert()), Mu),
    { context: c.current, contextSafe: d.current }
  );
};
dl.register = (f) => {
  Lm = f;
};
dl.headless = !0;
function Cv(f, n) {
  for (var i = 0; i < n.length; i++) {
    var o = n[i];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      "value" in o && (o.writable = !0),
      Object.defineProperty(f, o.key, o);
  }
}
function Tv(f, n, i) {
  return n && Cv(f.prototype, n), f;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var $t,
  Xu,
  Hn,
  Ri,
  Mi,
  il,
  jm,
  io,
  ss,
  Am,
  ti,
  kr,
  Im,
  Fm = function () {
    return (
      $t ||
      (typeof window < "u" && ($t = window.gsap) && $t.registerPlugin && $t)
    );
  },
  Bm = 1,
  el = [],
  Le = [],
  Br = [],
  us = Date.now,
  Lf = function (n, i) {
    return i;
  },
  Ev = function () {
    var n = ss.core,
      i = n.bridge || {},
      o = n._scrollers,
      l = n._proxies;
    o.push.apply(o, Le),
      l.push.apply(l, Br),
      (Le = o),
      (Br = l),
      (Lf = function (c, d) {
        return i[c](d);
      });
  },
  Li = function (n, i) {
    return ~Br.indexOf(n) && Br[Br.indexOf(n) + 1][i];
  },
  as = function (n) {
    return !!~Am.indexOf(n);
  },
  an = function (n, i, o, l, u) {
    return n.addEventListener(i, o, { passive: l !== !1, capture: !!u });
  },
  un = function (n, i, o, l) {
    return n.removeEventListener(i, o, !!l);
  },
  zu = "scrollLeft",
  Du = "scrollTop",
  jf = function () {
    return (ti && ti.isPressed) || Le.cache++;
  },
  ua = function (n, i) {
    var o = function l(u) {
      if (u || u === 0) {
        Bm && (Hn.history.scrollRestoration = "manual");
        var c = ti && ti.isPressed;
        (u = l.v = Math.round(u) || (ti && ti.iOS ? 1 : 0)),
          n(u),
          (l.cacheID = Le.cache),
          c && Lf("ss", u);
      } else
        (i || Le.cache !== l.cacheID || Lf("ref")) &&
          ((l.cacheID = Le.cache), (l.v = n()));
      return l.v + l.offset;
    };
    return (o.offset = 0), n && o;
  },
  hn = {
    s: zu,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: ua(function (f) {
      return arguments.length
        ? Hn.scrollTo(f, Ot.sc())
        : Hn.pageXOffset || Ri[zu] || Mi[zu] || il[zu] || 0;
    }),
  },
  Ot = {
    s: Du,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: hn,
    sc: ua(function (f) {
      return arguments.length
        ? Hn.scrollTo(hn.sc(), f)
        : Hn.pageYOffset || Ri[Du] || Mi[Du] || il[Du] || 0;
    }),
  },
  Pn = function (n, i) {
    return (
      ((i && i._ctx && i._ctx.selector) || $t.utils.toArray)(n)[0] ||
      (typeof n == "string" && $t.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", n)
        : null)
    );
  },
  Ii = function (n, i) {
    var o = i.s,
      l = i.sc;
    as(n) && (n = Ri.scrollingElement || Mi);
    var u = Le.indexOf(n),
      c = l === Ot.sc ? 1 : 2;
    !~u && (u = Le.push(n) - 1), Le[u + c] || an(n, "scroll", jf);
    var d = Le[u + c],
      h =
        d ||
        (Le[u + c] =
          ua(Li(n, o), !0) ||
          (as(n)
            ? l
            : ua(function (g) {
                return arguments.length ? (n[o] = g) : n[o];
              })));
    return (
      (h.target = n),
      d || (h.smooth = $t.getProperty(n, "scrollBehavior") === "smooth"),
      h
    );
  },
  Af = function (n, i, o) {
    var l = n,
      u = n,
      c = us(),
      d = c,
      h = i || 50,
      g = Math.max(500, h * 3),
      _ = function (E, y) {
        var O = us();
        y || O - c > h
          ? ((u = l), (l = E), (d = c), (c = O))
          : o
          ? (l += E)
          : (l = u + ((E - u) / (O - d)) * (c - d));
      },
      S = function () {
        (u = l = o ? 0 : l), (d = c = 0);
      },
      x = function (E) {
        var y = d,
          O = u,
          I = us();
        return (
          (E || E === 0) && E !== l && _(E),
          c === d || I - d > g
            ? 0
            : ((l + (o ? O : -O)) / ((o ? I : c) - y)) * 1e3
        );
      };
    return { update: _, reset: S, getVelocity: x };
  },
  Gl = function (n, i) {
    return (
      i && !n._gsapAllow && n.preventDefault(),
      n.changedTouches ? n.changedTouches[0] : n
    );
  },
  p0 = function (n) {
    var i = Math.max.apply(Math, n),
      o = Math.min.apply(Math, n);
    return Math.abs(i) >= Math.abs(o) ? i : o;
  },
  Um = function () {
    (ss = $t.core.globals().ScrollTrigger), ss && ss.core && Ev();
  },
  Vm = function (n) {
    return (
      ($t = n || Fm()),
      !Xu &&
        $t &&
        typeof document < "u" &&
        document.body &&
        ((Hn = window),
        (Ri = document),
        (Mi = Ri.documentElement),
        (il = Ri.body),
        (Am = [Hn, Ri, Mi, il]),
        $t.utils.clamp,
        (Im = $t.core.context || function () {}),
        (io = "onpointerenter" in il ? "pointer" : "mouse"),
        (jm = _t.isTouch =
          Hn.matchMedia &&
          Hn.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Hn ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (kr = _t.eventTypes =
          (
            "ontouchstart" in Mi
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Mi
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (Bm = 0);
        }, 500),
        Um(),
        (Xu = 1)),
      Xu
    );
  };
hn.op = Ot;
Le.cache = 0;
var _t = (function () {
  function f(i) {
    this.init(i);
  }
  var n = f.prototype;
  return (
    (n.init = function (o) {
      Xu || Vm($t) || console.warn("Please gsap.registerPlugin(Observer)"),
        ss || Um();
      var l = o.tolerance,
        u = o.dragMinimum,
        c = o.type,
        d = o.target,
        h = o.lineHeight,
        g = o.debounce,
        _ = o.preventDefault,
        S = o.onStop,
        x = o.onStopDelay,
        v = o.ignore,
        E = o.wheelSpeed,
        y = o.event,
        O = o.onDragStart,
        I = o.onDragEnd,
        A = o.onDrag,
        U = o.onPress,
        D = o.onRelease,
        F = o.onRight,
        V = o.onLeft,
        L = o.onUp,
        b = o.onDown,
        $ = o.onChangeX,
        X = o.onChangeY,
        pe = o.onChange,
        K = o.onToggleX,
        he = o.onToggleY,
        ge = o.onHover,
        ke = o.onHoverEnd,
        fe = o.onMove,
        ee = o.ignoreCheck,
        W = o.isNormalizer,
        Z = o.onGestureStart,
        k = o.onGestureEnd,
        T = o.onWheel,
        B = o.onEnable,
        de = o.onDisable,
        oe = o.onClick,
        me = o.scrollSpeed,
        ve = o.capture,
        xe = o.allowClicks,
        Ce = o.lockAxis,
        Te = o.onLockAxis;
      (this.target = d = Pn(d) || Mi),
        (this.vars = o),
        v && (v = $t.utils.toArray(v)),
        (l = l || 1e-9),
        (u = u || 0),
        (E = E || 1),
        (me = me || 1),
        (c = c || "wheel,touch,pointer"),
        (g = g !== !1),
        h || (h = parseFloat(Hn.getComputedStyle(il).lineHeight) || 22);
      var at,
        vt,
        gn,
        ze,
        Qe,
        Bt,
        Wt,
        j = this,
        Yt = 0,
        Ln = 0,
        _n = o.passive || !_,
        $e = Ii(d, hn),
        Gn = Ii(d, Ot),
        Tr = $e(),
        Vr = Gn(),
        pt =
          ~c.indexOf("touch") &&
          !~c.indexOf("pointer") &&
          kr[0] === "pointerdown",
        fr = as(d),
        Ge = d.ownerDocument || Ri,
        Ht = [0, 0, 0],
        tn = [0, 0, 0],
        nn = 0,
        dr = function () {
          return (nn = us());
        },
        ct = function (ue, De) {
          return (
            ((j.event = ue) && v && ~v.indexOf(ue.target)) ||
            (De && pt && ue.pointerType !== "touch") ||
            (ee && ee(ue, De))
          );
        },
        Bi = function () {
          j._vx.reset(), j._vy.reset(), vt.pause(), S && S(j);
        },
        pr = function () {
          var ue = (j.deltaX = p0(Ht)),
            De = (j.deltaY = p0(tn)),
            q = Math.abs(ue) >= l,
            ye = Math.abs(De) >= l;
          pe && (q || ye) && pe(j, ue, De, Ht, tn),
            q &&
              (F && j.deltaX > 0 && F(j),
              V && j.deltaX < 0 && V(j),
              $ && $(j),
              K && j.deltaX < 0 != Yt < 0 && K(j),
              (Yt = j.deltaX),
              (Ht[0] = Ht[1] = Ht[2] = 0)),
            ye &&
              (b && j.deltaY > 0 && b(j),
              L && j.deltaY < 0 && L(j),
              X && X(j),
              he && j.deltaY < 0 != Ln < 0 && he(j),
              (Ln = j.deltaY),
              (tn[0] = tn[1] = tn[2] = 0)),
            (ze || gn) && (fe && fe(j), gn && (A(j), (gn = !1)), (ze = !1)),
            Bt && !(Bt = !1) && Te && Te(j),
            Qe && (T(j), (Qe = !1)),
            (at = 0);
        },
        oi = function (ue, De, q) {
          (Ht[q] += ue),
            (tn[q] += De),
            j._vx.update(ue),
            j._vy.update(De),
            g ? at || (at = requestAnimationFrame(pr)) : pr();
        },
        Er = function (ue, De) {
          Ce &&
            !Wt &&
            ((j.axis = Wt = Math.abs(ue) > Math.abs(De) ? "x" : "y"),
            (Bt = !0)),
            Wt !== "y" && ((Ht[2] += ue), j._vx.update(ue, !0)),
            Wt !== "x" && ((tn[2] += De), j._vy.update(De, !0)),
            g ? at || (at = requestAnimationFrame(pr)) : pr();
        },
        Kn = function (ue) {
          if (!ct(ue, 1)) {
            ue = Gl(ue, _);
            var De = ue.clientX,
              q = ue.clientY,
              ye = De - j.x,
              se = q - j.y,
              _e = j.isDragging;
            (j.x = De),
              (j.y = q),
              (_e ||
                Math.abs(j.startX - De) >= u ||
                Math.abs(j.startY - q) >= u) &&
                (A && (gn = !0),
                _e || (j.isDragging = !0),
                Er(ye, se),
                _e || (O && O(j)));
          }
        },
        hr = (j.onPress = function (Se) {
          ct(Se, 1) ||
            (Se && Se.button) ||
            ((j.axis = Wt = null),
            vt.pause(),
            (j.isPressed = !0),
            (Se = Gl(Se)),
            (Yt = Ln = 0),
            (j.startX = j.x = Se.clientX),
            (j.startY = j.y = Se.clientY),
            j._vx.reset(),
            j._vy.reset(),
            an(W ? d : Ge, kr[1], Kn, _n, !0),
            (j.deltaX = j.deltaY = 0),
            U && U(j));
        }),
        Ee = (j.onRelease = function (Se) {
          if (!ct(Se, 1)) {
            un(W ? d : Ge, kr[1], Kn, !0);
            var ue = !isNaN(j.y - j.startY),
              De = j.isDragging,
              q =
                De &&
                (Math.abs(j.x - j.startX) > 3 || Math.abs(j.y - j.startY) > 3),
              ye = Gl(Se);
            !q &&
              ue &&
              (j._vx.reset(),
              j._vy.reset(),
              _ &&
                xe &&
                $t.delayedCall(0.08, function () {
                  if (us() - nn > 300 && !Se.defaultPrevented) {
                    if (Se.target.click) Se.target.click();
                    else if (Ge.createEvent) {
                      var se = Ge.createEvent("MouseEvents");
                      se.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Hn,
                        1,
                        ye.screenX,
                        ye.screenY,
                        ye.clientX,
                        ye.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        Se.target.dispatchEvent(se);
                    }
                  }
                })),
              (j.isDragging = j.isGesturing = j.isPressed = !1),
              S && De && !W && vt.restart(!0),
              I && De && I(j),
              D && D(j, q);
          }
        }),
        mr = function (ue) {
          return (
            ue.touches &&
            ue.touches.length > 1 &&
            (j.isGesturing = !0) &&
            Z(ue, j.isDragging)
          );
        },
        Nt = function () {
          return (j.isGesturing = !1) || k(j);
        },
        Rt = function (ue) {
          if (!ct(ue)) {
            var De = $e(),
              q = Gn();
            oi((De - Tr) * me, (q - Vr) * me, 1),
              (Tr = De),
              (Vr = q),
              S && vt.restart(!0);
          }
        },
        vn = function (ue) {
          if (!ct(ue)) {
            (ue = Gl(ue, _)), T && (Qe = !0);
            var De =
              (ue.deltaMode === 1
                ? h
                : ue.deltaMode === 2
                ? Hn.innerHeight
                : 1) * E;
            oi(ue.deltaX * De, ue.deltaY * De, 0), S && !W && vt.restart(!0);
          }
        },
        Pr = function (ue) {
          if (!ct(ue)) {
            var De = ue.clientX,
              q = ue.clientY,
              ye = De - j.x,
              se = q - j.y;
            (j.x = De),
              (j.y = q),
              (ze = !0),
              S && vt.restart(!0),
              (ye || se) && Er(ye, se);
          }
        },
        $r = function (ue) {
          (j.event = ue), ge(j);
        },
        qn = function (ue) {
          (j.event = ue), ke(j);
        },
        li = function (ue) {
          return ct(ue) || (Gl(ue, _) && oe(j));
        };
      (vt = j._dc = $t.delayedCall(x || 0.25, Bi).pause()),
        (j.deltaX = j.deltaY = 0),
        (j._vx = Af(0, 50, !0)),
        (j._vy = Af(0, 50, !0)),
        (j.scrollX = $e),
        (j.scrollY = Gn),
        (j.isDragging = j.isGesturing = j.isPressed = !1),
        Im(this),
        (j.enable = function (Se) {
          return (
            j.isEnabled ||
              (an(fr ? Ge : d, "scroll", jf),
              c.indexOf("scroll") >= 0 && an(fr ? Ge : d, "scroll", Rt, _n, ve),
              c.indexOf("wheel") >= 0 && an(d, "wheel", vn, _n, ve),
              ((c.indexOf("touch") >= 0 && jm) || c.indexOf("pointer") >= 0) &&
                (an(d, kr[0], hr, _n, ve),
                an(Ge, kr[2], Ee),
                an(Ge, kr[3], Ee),
                xe && an(d, "click", dr, !0, !0),
                oe && an(d, "click", li),
                Z && an(Ge, "gesturestart", mr),
                k && an(Ge, "gestureend", Nt),
                ge && an(d, io + "enter", $r),
                ke && an(d, io + "leave", qn),
                fe && an(d, io + "move", Pr)),
              (j.isEnabled = !0),
              Se && Se.type && hr(Se),
              B && B(j)),
            j
          );
        }),
        (j.disable = function () {
          j.isEnabled &&
            (el.filter(function (Se) {
              return Se !== j && as(Se.target);
            }).length || un(fr ? Ge : d, "scroll", jf),
            j.isPressed &&
              (j._vx.reset(), j._vy.reset(), un(W ? d : Ge, kr[1], Kn, !0)),
            un(fr ? Ge : d, "scroll", Rt, ve),
            un(d, "wheel", vn, ve),
            un(d, kr[0], hr, ve),
            un(Ge, kr[2], Ee),
            un(Ge, kr[3], Ee),
            un(d, "click", dr, !0),
            un(d, "click", li),
            un(Ge, "gesturestart", mr),
            un(Ge, "gestureend", Nt),
            un(d, io + "enter", $r),
            un(d, io + "leave", qn),
            un(d, io + "move", Pr),
            (j.isEnabled = j.isPressed = j.isDragging = !1),
            de && de(j));
        }),
        (j.kill = j.revert =
          function () {
            j.disable();
            var Se = el.indexOf(j);
            Se >= 0 && el.splice(Se, 1), ti === j && (ti = 0);
          }),
        el.push(j),
        W && as(d) && (ti = j),
        j.enable(y);
    }),
    Tv(f, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    f
  );
})();
_t.version = "3.12.5";
_t.create = function (f) {
  return new _t(f);
};
_t.register = Vm;
_t.getAll = function () {
  return el.slice();
};
_t.getById = function (f) {
  return el.filter(function (n) {
    return n.vars.id === f;
  })[0];
};
Fm() && $t.registerPlugin(_t);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ne,
  Ko,
  Ae,
  lt,
  Cr,
  Je,
  $m,
  aa,
  ks,
  cs,
  Jl,
  Lu,
  Kt,
  _a,
  If,
  fn,
  h0,
  m0,
  qo,
  Wm,
  df,
  Ym,
  cn,
  Ff,
  Hm,
  bm,
  Ei,
  Bf,
  ud,
  ol,
  ad,
  ca,
  Uf,
  pf,
  ju = 1,
  qt = Date.now,
  hf = qt(),
  ar = 0,
  es = 0,
  g0 = function (n, i, o) {
    var l = $n(n) && (n.substr(0, 6) === "clamp(" || n.indexOf("max") > -1);
    return (o["_" + i + "Clamp"] = l), l ? n.substr(6, n.length - 7) : n;
  },
  _0 = function (n, i) {
    return i && (!$n(n) || n.substr(0, 6) !== "clamp(")
      ? "clamp(" + n + ")"
      : n;
  },
  Pv = function f() {
    return es && requestAnimationFrame(f);
  },
  v0 = function () {
    return (_a = 1);
  },
  y0 = function () {
    return (_a = 0);
  },
  Lr = function (n) {
    return n;
  },
  ts = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  Xm = function () {
    return typeof window < "u";
  },
  Qm = function () {
    return ne || (Xm() && (ne = window.gsap) && ne.registerPlugin && ne);
  },
  yo = function (n) {
    return !!~$m.indexOf(n);
  },
  Gm = function (n) {
    return (
      (n === "Height" ? ad : Ae["inner" + n]) ||
      Cr["client" + n] ||
      Je["client" + n]
    );
  },
  Km = function (n) {
    return (
      Li(n, "getBoundingClientRect") ||
      (yo(n)
        ? function () {
            return (Zu.width = Ae.innerWidth), (Zu.height = ad), Zu;
          }
        : function () {
            return ei(n);
          })
    );
  },
  Ov = function (n, i, o) {
    var l = o.d,
      u = o.d2,
      c = o.a;
    return (c = Li(n, "getBoundingClientRect"))
      ? function () {
          return c()[l];
        }
      : function () {
          return (i ? Gm(u) : n["client" + u]) || 0;
        };
  },
  Nv = function (n, i) {
    return !i || ~Br.indexOf(n)
      ? Km(n)
      : function () {
          return Zu;
        };
  },
  Ir = function (n, i) {
    var o = i.s,
      l = i.d2,
      u = i.d,
      c = i.a;
    return Math.max(
      0,
      (o = "scroll" + l) && (c = Li(n, o))
        ? c() - Km(n)()[u]
        : yo(n)
        ? (Cr[o] || Je[o]) - Gm(l)
        : n[o] - n["offset" + l]
    );
  },
  Au = function (n, i) {
    for (var o = 0; o < qo.length; o += 3)
      (!i || ~i.indexOf(qo[o + 1])) && n(qo[o], qo[o + 1], qo[o + 2]);
  },
  $n = function (n) {
    return typeof n == "string";
  },
  mn = function (n) {
    return typeof n == "function";
  },
  ns = function (n) {
    return typeof n == "number";
  },
  oo = function (n) {
    return typeof n == "object";
  },
  Kl = function (n, i, o) {
    return n && n.progress(i ? 0 : 1) && o && n.pause();
  },
  mf = function (n, i) {
    if (n.enabled) {
      var o = n._ctx
        ? n._ctx.add(function () {
            return i(n);
          })
        : i(n);
      o && o.totalTime && (n.callbackAnimation = o);
    }
  },
  Qo = Math.abs,
  qm = "left",
  Zm = "top",
  cd = "right",
  fd = "bottom",
  ho = "width",
  mo = "height",
  fs = "Right",
  ds = "Left",
  ps = "Top",
  hs = "Bottom",
  St = "padding",
  or = "margin",
  pl = "Width",
  dd = "Height",
  Pt = "px",
  lr = function (n) {
    return Ae.getComputedStyle(n);
  },
  Rv = function (n) {
    var i = lr(n).position;
    n.style.position = i === "absolute" || i === "fixed" ? i : "relative";
  },
  x0 = function (n, i) {
    for (var o in i) o in n || (n[o] = i[o]);
    return n;
  },
  ei = function (n, i) {
    var o =
        i &&
        lr(n)[If] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        ne
          .to(n, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      l = n.getBoundingClientRect();
    return o && o.progress(0).kill(), l;
  },
  fa = function (n, i) {
    var o = i.d2;
    return n["offset" + o] || n["client" + o] || 0;
  },
  Jm = function (n) {
    var i = [],
      o = n.labels,
      l = n.duration(),
      u;
    for (u in o) i.push(o[u] / l);
    return i;
  },
  Mv = function (n) {
    return function (i) {
      return ne.utils.snap(Jm(n), i);
    };
  },
  pd = function (n) {
    var i = ne.utils.snap(n),
      o =
        Array.isArray(n) &&
        n.slice(0).sort(function (l, u) {
          return l - u;
        });
    return o
      ? function (l, u, c) {
          c === void 0 && (c = 0.001);
          var d;
          if (!u) return i(l);
          if (u > 0) {
            for (l -= c, d = 0; d < o.length; d++) if (o[d] >= l) return o[d];
            return o[d - 1];
          } else for (d = o.length, l += c; d--; ) if (o[d] <= l) return o[d];
          return o[0];
        }
      : function (l, u, c) {
          c === void 0 && (c = 0.001);
          var d = i(l);
          return !u || Math.abs(d - l) < c || d - l < 0 == u < 0
            ? d
            : i(u < 0 ? l - n : l + n);
        };
  },
  zv = function (n) {
    return function (i, o) {
      return pd(Jm(n))(i, o.direction);
    };
  },
  Iu = function (n, i, o, l) {
    return o.split(",").forEach(function (u) {
      return n(i, u, l);
    });
  },
  At = function (n, i, o, l, u) {
    return n.addEventListener(i, o, { passive: !l, capture: !!u });
  },
  jt = function (n, i, o, l) {
    return n.removeEventListener(i, o, !!l);
  },
  Fu = function (n, i, o) {
    (o = o && o.wheelHandler), o && (n(i, "wheel", o), n(i, "touchmove", o));
  },
  w0 = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Bu = { toggleActions: "play", anticipatePin: 0 },
  da = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Qu = function (n, i) {
    if ($n(n)) {
      var o = n.indexOf("="),
        l = ~o ? +(n.charAt(o - 1) + 1) * parseFloat(n.substr(o + 1)) : 0;
      ~o && (n.indexOf("%") > o && (l *= i / 100), (n = n.substr(0, o - 1))),
        (n =
          l +
          (n in da
            ? da[n] * i
            : ~n.indexOf("%")
            ? (parseFloat(n) * i) / 100
            : parseFloat(n) || 0));
    }
    return n;
  },
  Uu = function (n, i, o, l, u, c, d, h) {
    var g = u.startColor,
      _ = u.endColor,
      S = u.fontSize,
      x = u.indent,
      v = u.fontWeight,
      E = lt.createElement("div"),
      y = yo(o) || Li(o, "pinType") === "fixed",
      O = n.indexOf("scroller") !== -1,
      I = y ? Je : o,
      A = n.indexOf("start") !== -1,
      U = A ? g : _,
      D =
        "border-color:" +
        U +
        ";font-size:" +
        S +
        ";color:" +
        U +
        ";font-weight:" +
        v +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (D += "position:" + ((O || h) && y ? "fixed;" : "absolute;")),
      (O || h || !y) &&
        (D += (l === Ot ? cd : fd) + ":" + (c + parseFloat(x)) + "px;"),
      d &&
        (D +=
          "box-sizing:border-box;text-align:left;width:" +
          d.offsetWidth +
          "px;"),
      (E._isStart = A),
      E.setAttribute("class", "gsap-marker-" + n + (i ? " marker-" + i : "")),
      (E.style.cssText = D),
      (E.innerText = i || i === 0 ? n + "-" + i : n),
      I.children[0] ? I.insertBefore(E, I.children[0]) : I.appendChild(E),
      (E._offset = E["offset" + l.op.d2]),
      Gu(E, 0, l, A),
      E
    );
  },
  Gu = function (n, i, o, l) {
    var u = { display: "block" },
      c = o[l ? "os2" : "p2"],
      d = o[l ? "p2" : "os2"];
    (n._isFlipped = l),
      (u[o.a + "Percent"] = l ? -100 : 0),
      (u[o.a] = l ? "1px" : 0),
      (u["border" + c + pl] = 1),
      (u["border" + d + pl] = 0),
      (u[o.p] = i + "px"),
      ne.set(n, u);
  },
  Me = [],
  Vf = {},
  Cs,
  S0 = function () {
    return qt() - ar > 34 && (Cs || (Cs = requestAnimationFrame(ni)));
  },
  Go = function () {
    (!cn || !cn.isPressed || cn.startX > Je.clientWidth) &&
      (Le.cache++,
      cn ? Cs || (Cs = requestAnimationFrame(ni)) : ni(),
      ar || wo("scrollStart"),
      (ar = qt()));
  },
  gf = function () {
    (bm = Ae.innerWidth), (Hm = Ae.innerHeight);
  },
  rs = function () {
    Le.cache++,
      !Kt &&
        !Ym &&
        !lt.fullscreenElement &&
        !lt.webkitFullscreenElement &&
        (!Ff ||
          bm !== Ae.innerWidth ||
          Math.abs(Ae.innerHeight - Hm) > Ae.innerHeight * 0.25) &&
        aa.restart(!0);
  },
  xo = {},
  Dv = [],
  eg = function f() {
    return jt(Pe, "scrollEnd", f) || so(!0);
  },
  wo = function (n) {
    return (
      (xo[n] &&
        xo[n].map(function (i) {
          return i();
        })) ||
      Dv
    );
  },
  Vn = [],
  tg = function (n) {
    for (var i = 0; i < Vn.length; i += 5)
      (!n || (Vn[i + 4] && Vn[i + 4].query === n)) &&
        ((Vn[i].style.cssText = Vn[i + 1]),
        Vn[i].getBBox && Vn[i].setAttribute("transform", Vn[i + 2] || ""),
        (Vn[i + 3].uncache = 1));
  },
  hd = function (n, i) {
    var o;
    for (fn = 0; fn < Me.length; fn++)
      (o = Me[fn]),
        o && (!i || o._ctx === i) && (n ? o.kill(1) : o.revert(!0, !0));
    (ca = !0), i && tg(i), i || wo("revert");
  },
  ng = function (n, i) {
    Le.cache++,
      (i || !dn) &&
        Le.forEach(function (o) {
          return mn(o) && o.cacheID++ && (o.rec = 0);
        }),
      $n(n) && (Ae.history.scrollRestoration = ud = n);
  },
  dn,
  go = 0,
  k0,
  Lv = function () {
    if (k0 !== go) {
      var n = (k0 = go);
      requestAnimationFrame(function () {
        return n === go && so(!0);
      });
    }
  },
  rg = function () {
    Je.appendChild(ol),
      (ad = (!cn && ol.offsetHeight) || Ae.innerHeight),
      Je.removeChild(ol);
  },
  C0 = function (n) {
    return ks(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (i) {
      return (i.style.display = n ? "none" : "block");
    });
  },
  so = function (n, i) {
    if (ar && !n && !ca) {
      At(Pe, "scrollEnd", eg);
      return;
    }
    rg(),
      (dn = Pe.isRefreshing = !0),
      Le.forEach(function (l) {
        return mn(l) && ++l.cacheID && (l.rec = l());
      });
    var o = wo("refreshInit");
    Wm && Pe.sort(),
      i || hd(),
      Le.forEach(function (l) {
        mn(l) && (l.smooth && (l.target.style.scrollBehavior = "auto"), l(0));
      }),
      Me.slice(0).forEach(function (l) {
        return l.refresh();
      }),
      (ca = !1),
      Me.forEach(function (l) {
        if (l._subPinOffset && l.pin) {
          var u = l.vars.horizontal ? "offsetWidth" : "offsetHeight",
            c = l.pin[u];
          l.revert(!0, 1), l.adjustPinSpacing(l.pin[u] - c), l.refresh();
        }
      }),
      (Uf = 1),
      C0(!0),
      Me.forEach(function (l) {
        var u = Ir(l.scroller, l._dir),
          c = l.vars.end === "max" || (l._endClamp && l.end > u),
          d = l._startClamp && l.start >= u;
        (c || d) &&
          l.setPositions(
            d ? u - 1 : l.start,
            c ? Math.max(d ? u : l.start + 1, u) : l.end,
            !0
          );
      }),
      C0(!1),
      (Uf = 0),
      o.forEach(function (l) {
        return l && l.render && l.render(-1);
      }),
      Le.forEach(function (l) {
        mn(l) &&
          (l.smooth &&
            requestAnimationFrame(function () {
              return (l.target.style.scrollBehavior = "smooth");
            }),
          l.rec && l(l.rec));
      }),
      ng(ud, 1),
      aa.pause(),
      go++,
      (dn = 2),
      ni(2),
      Me.forEach(function (l) {
        return mn(l.vars.onRefresh) && l.vars.onRefresh(l);
      }),
      (dn = Pe.isRefreshing = !1),
      wo("refresh");
  },
  $f = 0,
  Ku = 1,
  ms,
  ni = function (n) {
    if (n === 2 || (!dn && !ca)) {
      (Pe.isUpdating = !0), ms && ms.update(0);
      var i = Me.length,
        o = qt(),
        l = o - hf >= 50,
        u = i && Me[0].scroll();
      if (
        ((Ku = $f > u ? -1 : 1),
        dn || ($f = u),
        l &&
          (ar && !_a && o - ar > 200 && ((ar = 0), wo("scrollEnd")),
          (Jl = hf),
          (hf = o)),
        Ku < 0)
      ) {
        for (fn = i; fn-- > 0; ) Me[fn] && Me[fn].update(0, l);
        Ku = 1;
      } else for (fn = 0; fn < i; fn++) Me[fn] && Me[fn].update(0, l);
      Pe.isUpdating = !1;
    }
    Cs = 0;
  },
  Wf = [
    qm,
    Zm,
    fd,
    cd,
    or + hs,
    or + fs,
    or + ps,
    or + ds,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  qu = Wf.concat([
    ho,
    mo,
    "boxSizing",
    "max" + pl,
    "max" + dd,
    "position",
    or,
    St,
    St + ps,
    St + fs,
    St + hs,
    St + ds,
  ]),
  jv = function (n, i, o) {
    ll(o);
    var l = n._gsap;
    if (l.spacerIsNative) ll(l.spacerState);
    else if (n._gsap.swappedIn) {
      var u = i.parentNode;
      u && (u.insertBefore(n, i), u.removeChild(i));
    }
    n._gsap.swappedIn = !1;
  },
  _f = function (n, i, o, l) {
    if (!n._gsap.swappedIn) {
      for (var u = Wf.length, c = i.style, d = n.style, h; u--; )
        (h = Wf[u]), (c[h] = o[h]);
      (c.position = o.position === "absolute" ? "absolute" : "relative"),
        o.display === "inline" && (c.display = "inline-block"),
        (d[fd] = d[cd] = "auto"),
        (c.flexBasis = o.flexBasis || "auto"),
        (c.overflow = "visible"),
        (c.boxSizing = "border-box"),
        (c[ho] = fa(n, hn) + Pt),
        (c[mo] = fa(n, Ot) + Pt),
        (c[St] = d[or] = d[Zm] = d[qm] = "0"),
        ll(l),
        (d[ho] = d["max" + pl] = o[ho]),
        (d[mo] = d["max" + dd] = o[mo]),
        (d[St] = o[St]),
        n.parentNode !== i &&
          (n.parentNode.insertBefore(i, n), i.appendChild(n)),
        (n._gsap.swappedIn = !0);
    }
  },
  Av = /([A-Z])/g,
  ll = function (n) {
    if (n) {
      var i = n.t.style,
        o = n.length,
        l = 0,
        u,
        c;
      for ((n.t._gsap || ne.core.getCache(n.t)).uncache = 1; l < o; l += 2)
        (c = n[l + 1]),
          (u = n[l]),
          c
            ? (i[u] = c)
            : i[u] && i.removeProperty(u.replace(Av, "-$1").toLowerCase());
    }
  },
  Vu = function (n) {
    for (var i = qu.length, o = n.style, l = [], u = 0; u < i; u++)
      l.push(qu[u], o[qu[u]]);
    return (l.t = n), l;
  },
  Iv = function (n, i, o) {
    for (var l = [], u = n.length, c = o ? 8 : 0, d; c < u; c += 2)
      (d = n[c]), l.push(d, d in i ? i[d] : n[c + 1]);
    return (l.t = n.t), l;
  },
  Zu = { left: 0, top: 0 },
  T0 = function (n, i, o, l, u, c, d, h, g, _, S, x, v, E) {
    mn(n) && (n = n(h)),
      $n(n) &&
        n.substr(0, 3) === "max" &&
        (n = x + (n.charAt(4) === "=" ? Qu("0" + n.substr(3), o) : 0));
    var y = v ? v.time() : 0,
      O,
      I,
      A;
    if ((v && v.seek(0), isNaN(n) || (n = +n), ns(n)))
      v &&
        (n = ne.utils.mapRange(
          v.scrollTrigger.start,
          v.scrollTrigger.end,
          0,
          x,
          n
        )),
        d && Gu(d, o, l, !0);
    else {
      mn(i) && (i = i(h));
      var U = (n || "0").split(" "),
        D,
        F,
        V,
        L;
      (A = Pn(i, h) || Je),
        (D = ei(A) || {}),
        (!D || (!D.left && !D.top)) &&
          lr(A).display === "none" &&
          ((L = A.style.display),
          (A.style.display = "block"),
          (D = ei(A)),
          L ? (A.style.display = L) : A.style.removeProperty("display")),
        (F = Qu(U[0], D[l.d])),
        (V = Qu(U[1] || "0", o)),
        (n = D[l.p] - g[l.p] - _ + F + u - V),
        d && Gu(d, V, l, o - V < 20 || (d._isStart && V > 20)),
        (o -= o - V);
    }
    if ((E && ((h[E] = n || -0.001), n < 0 && (n = 0)), c)) {
      var b = n + o,
        $ = c._isStart;
      (O = "scroll" + l.d2),
        Gu(
          c,
          b,
          l,
          ($ && b > 20) ||
            (!$ && (S ? Math.max(Je[O], Cr[O]) : c.parentNode[O]) <= b + 1)
        ),
        S &&
          ((g = ei(d)),
          S && (c.style[l.op.p] = g[l.op.p] - l.op.m - c._offset + Pt));
    }
    return (
      v &&
        A &&
        ((O = ei(A)),
        v.seek(x),
        (I = ei(A)),
        (v._caScrollDist = O[l.p] - I[l.p]),
        (n = (n / v._caScrollDist) * x)),
      v && v.seek(y),
      v ? n : Math.round(n)
    );
  },
  Fv = /(webkit|moz|length|cssText|inset)/i,
  E0 = function (n, i, o, l) {
    if (n.parentNode !== i) {
      var u = n.style,
        c,
        d;
      if (i === Je) {
        (n._stOrig = u.cssText), (d = lr(n));
        for (c in d)
          !+c &&
            !Fv.test(c) &&
            d[c] &&
            typeof u[c] == "string" &&
            c !== "0" &&
            (u[c] = d[c]);
        (u.top = o), (u.left = l);
      } else u.cssText = n._stOrig;
      (ne.core.getCache(n).uncache = 1), i.appendChild(n);
    }
  },
  ig = function (n, i, o) {
    var l = i,
      u = l;
    return function (c) {
      var d = Math.round(n());
      return (
        d !== l &&
          d !== u &&
          Math.abs(d - l) > 3 &&
          Math.abs(d - u) > 3 &&
          ((c = d), o && o()),
        (u = l),
        (l = c),
        c
      );
    };
  },
  $u = function (n, i, o) {
    var l = {};
    (l[i.p] = "+=" + o), ne.set(n, l);
  },
  P0 = function (n, i) {
    var o = Ii(n, i),
      l = "_scroll" + i.p2,
      u = function c(d, h, g, _, S) {
        var x = c.tween,
          v = h.onComplete,
          E = {};
        g = g || o();
        var y = ig(o, g, function () {
          x.kill(), (c.tween = 0);
        });
        return (
          (S = (_ && S) || 0),
          (_ = _ || d - g),
          x && x.kill(),
          (h[l] = d),
          (h.inherit = !1),
          (h.modifiers = E),
          (E[l] = function () {
            return y(g + _ * x.ratio + S * x.ratio * x.ratio);
          }),
          (h.onUpdate = function () {
            Le.cache++, c.tween && ni();
          }),
          (h.onComplete = function () {
            (c.tween = 0), v && v.call(x);
          }),
          (x = c.tween = ne.to(n, h)),
          x
        );
      };
    return (
      (n[l] = o),
      (o.wheelHandler = function () {
        return u.tween && u.tween.kill() && (u.tween = 0);
      }),
      At(n, "wheel", o.wheelHandler),
      Pe.isTouch && At(n, "touchmove", o.wheelHandler),
      u
    );
  },
  Pe = (function () {
    function f(i, o) {
      Ko ||
        f.register(ne) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Bf(this),
        this.init(i, o);
    }
    var n = f.prototype;
    return (
      (n.init = function (o, l) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !es)
        ) {
          this.update = this.refresh = this.kill = Lr;
          return;
        }
        o = x0($n(o) || ns(o) || o.nodeType ? { trigger: o } : o, Bu);
        var u = o,
          c = u.onUpdate,
          d = u.toggleClass,
          h = u.id,
          g = u.onToggle,
          _ = u.onRefresh,
          S = u.scrub,
          x = u.trigger,
          v = u.pin,
          E = u.pinSpacing,
          y = u.invalidateOnRefresh,
          O = u.anticipatePin,
          I = u.onScrubComplete,
          A = u.onSnapComplete,
          U = u.once,
          D = u.snap,
          F = u.pinReparent,
          V = u.pinSpacer,
          L = u.containerAnimation,
          b = u.fastScrollEnd,
          $ = u.preventOverlaps,
          X =
            o.horizontal || (o.containerAnimation && o.horizontal !== !1)
              ? hn
              : Ot,
          pe = !S && S !== 0,
          K = Pn(o.scroller || Ae),
          he = ne.core.getCache(K),
          ge = yo(K),
          ke =
            ("pinType" in o
              ? o.pinType
              : Li(K, "pinType") || (ge && "fixed")) === "fixed",
          fe = [o.onEnter, o.onLeave, o.onEnterBack, o.onLeaveBack],
          ee = pe && o.toggleActions.split(" "),
          W = "markers" in o ? o.markers : Bu.markers,
          Z = ge ? 0 : parseFloat(lr(K)["border" + X.p2 + pl]) || 0,
          k = this,
          T =
            o.onRefreshInit &&
            function () {
              return o.onRefreshInit(k);
            },
          B = Ov(K, ge, X),
          de = Nv(K, ge),
          oe = 0,
          me = 0,
          ve = 0,
          xe = Ii(K, X),
          Ce,
          Te,
          at,
          vt,
          gn,
          ze,
          Qe,
          Bt,
          Wt,
          j,
          Yt,
          Ln,
          _n,
          $e,
          Gn,
          Tr,
          Vr,
          pt,
          fr,
          Ge,
          Ht,
          tn,
          nn,
          dr,
          ct,
          Bi,
          pr,
          oi,
          Er,
          Kn,
          hr,
          Ee,
          mr,
          Nt,
          Rt,
          vn,
          Pr,
          $r,
          qn;
        if (
          ((k._startClamp = k._endClamp = !1),
          (k._dir = X),
          (O *= 45),
          (k.scroller = K),
          (k.scroll = L ? L.time.bind(L) : xe),
          (vt = xe()),
          (k.vars = o),
          (l = l || o.animation),
          "refreshPriority" in o &&
            ((Wm = 1), o.refreshPriority === -9999 && (ms = k)),
          (he.tweenScroll = he.tweenScroll || {
            top: P0(K, Ot),
            left: P0(K, hn),
          }),
          (k.tweenTo = Ce = he.tweenScroll[X.p]),
          (k.scrubDuration = function (q) {
            (mr = ns(q) && q),
              mr
                ? Ee
                  ? Ee.duration(q)
                  : (Ee = ne.to(l, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: mr,
                      paused: !0,
                      onComplete: function () {
                        return I && I(k);
                      },
                    }))
                : (Ee && Ee.progress(1).kill(), (Ee = 0));
          }),
          l &&
            ((l.vars.lazy = !1),
            (l._initted && !k.isReverted) ||
              (l.vars.immediateRender !== !1 &&
                o.immediateRender !== !1 &&
                l.duration() &&
                l.render(0, !0, !0)),
            (k.animation = l.pause()),
            (l.scrollTrigger = k),
            k.scrubDuration(S),
            (Kn = 0),
            h || (h = l.vars.id)),
          D &&
            ((!oo(D) || D.push) && (D = { snapTo: D }),
            "scrollBehavior" in Je.style &&
              ne.set(ge ? [Je, Cr] : K, { scrollBehavior: "auto" }),
            Le.forEach(function (q) {
              return (
                mn(q) &&
                q.target === (ge ? lt.scrollingElement || Cr : K) &&
                (q.smooth = !1)
              );
            }),
            (at = mn(D.snapTo)
              ? D.snapTo
              : D.snapTo === "labels"
              ? Mv(l)
              : D.snapTo === "labelsDirectional"
              ? zv(l)
              : D.directional !== !1
              ? function (q, ye) {
                  return pd(D.snapTo)(q, qt() - me < 500 ? 0 : ye.direction);
                }
              : ne.utils.snap(D.snapTo)),
            (Nt = D.duration || { min: 0.1, max: 2 }),
            (Nt = oo(Nt) ? cs(Nt.min, Nt.max) : cs(Nt, Nt)),
            (Rt = ne
              .delayedCall(D.delay || mr / 2 || 0.1, function () {
                var q = xe(),
                  ye = qt() - me < 500,
                  se = Ce.tween;
                if (
                  (ye || Math.abs(k.getVelocity()) < 10) &&
                  !se &&
                  !_a &&
                  oe !== q
                ) {
                  var _e = (q - ze) / $e,
                    rt = l && !pe ? l.totalProgress() : _e,
                    Oe = ye ? 0 : ((rt - hr) / (qt() - Jl)) * 1e3 || 0,
                    Ke = ne.utils.clamp(-_e, 1 - _e, (Qo(Oe / 2) * Oe) / 0.185),
                    Mt = _e + (D.inertia === !1 ? 0 : Ke),
                    et,
                    Ye,
                    je = D,
                    yn = je.onStart,
                    He = je.onInterrupt,
                    rn = je.onComplete;
                  if (
                    ((et = at(Mt, k)),
                    ns(et) || (et = Mt),
                    (Ye = Math.round(ze + et * $e)),
                    q <= Qe && q >= ze && Ye !== q)
                  ) {
                    if (se && !se._initted && se.data <= Qo(Ye - q)) return;
                    D.inertia === !1 && (Ke = et - _e),
                      Ce(
                        Ye,
                        {
                          duration: Nt(
                            Qo(
                              (Math.max(Qo(Mt - rt), Qo(et - rt)) * 0.185) /
                                Oe /
                                0.05 || 0
                            )
                          ),
                          ease: D.ease || "power3",
                          data: Qo(Ye - q),
                          onInterrupt: function () {
                            return Rt.restart(!0) && He && He(k);
                          },
                          onComplete: function () {
                            k.update(),
                              (oe = xe()),
                              l &&
                                (Ee
                                  ? Ee.resetTo(
                                      "totalProgress",
                                      et,
                                      l._tTime / l._tDur
                                    )
                                  : l.progress(et)),
                              (Kn = hr =
                                l && !pe ? l.totalProgress() : k.progress),
                              A && A(k),
                              rn && rn(k);
                          },
                        },
                        q,
                        Ke * $e,
                        Ye - q - Ke * $e
                      ),
                      yn && yn(k, Ce.tween);
                  }
                } else k.isActive && oe !== q && Rt.restart(!0);
              })
              .pause())),
          h && (Vf[h] = k),
          (x = k.trigger = Pn(x || (v !== !0 && v))),
          (qn = x && x._gsap && x._gsap.stRevert),
          qn && (qn = qn(k)),
          (v = v === !0 ? x : Pn(v)),
          $n(d) && (d = { targets: x, className: d }),
          v &&
            (E === !1 ||
              E === or ||
              (E =
                !E &&
                v.parentNode &&
                v.parentNode.style &&
                lr(v.parentNode).display === "flex"
                  ? !1
                  : St),
            (k.pin = v),
            (Te = ne.core.getCache(v)),
            Te.spacer
              ? (Gn = Te.pinState)
              : (V &&
                  ((V = Pn(V)),
                  V && !V.nodeType && (V = V.current || V.nativeElement),
                  (Te.spacerIsNative = !!V),
                  V && (Te.spacerState = Vu(V))),
                (Te.spacer = pt = V || lt.createElement("div")),
                pt.classList.add("pin-spacer"),
                h && pt.classList.add("pin-spacer-" + h),
                (Te.pinState = Gn = Vu(v))),
            o.force3D !== !1 && ne.set(v, { force3D: !0 }),
            (k.spacer = pt = Te.spacer),
            (Er = lr(v)),
            (dr = Er[E + X.os2]),
            (Ge = ne.getProperty(v)),
            (Ht = ne.quickSetter(v, X.a, Pt)),
            _f(v, pt, Er),
            (Vr = Vu(v))),
          W)
        ) {
          (Ln = oo(W) ? x0(W, w0) : w0),
            (j = Uu("scroller-start", h, K, X, Ln, 0)),
            (Yt = Uu("scroller-end", h, K, X, Ln, 0, j)),
            (fr = j["offset" + X.op.d2]);
          var li = Pn(Li(K, "content") || K);
          (Bt = this.markerStart = Uu("start", h, li, X, Ln, fr, 0, L)),
            (Wt = this.markerEnd = Uu("end", h, li, X, Ln, fr, 0, L)),
            L && ($r = ne.quickSetter([Bt, Wt], X.a, Pt)),
            !ke &&
              !(Br.length && Li(K, "fixedMarkers") === !0) &&
              (Rv(ge ? Je : K),
              ne.set([j, Yt], { force3D: !0 }),
              (Bi = ne.quickSetter(j, X.a, Pt)),
              (oi = ne.quickSetter(Yt, X.a, Pt)));
        }
        if (L) {
          var Se = L.vars.onUpdate,
            ue = L.vars.onUpdateParams;
          L.eventCallback("onUpdate", function () {
            k.update(0, 0, 1), Se && Se.apply(L, ue || []);
          });
        }
        if (
          ((k.previous = function () {
            return Me[Me.indexOf(k) - 1];
          }),
          (k.next = function () {
            return Me[Me.indexOf(k) + 1];
          }),
          (k.revert = function (q, ye) {
            if (!ye) return k.kill(!0);
            var se = q !== !1 || !k.enabled,
              _e = Kt;
            se !== k.isReverted &&
              (se &&
                ((vn = Math.max(xe(), k.scroll.rec || 0)),
                (ve = k.progress),
                (Pr = l && l.progress())),
              Bt &&
                [Bt, Wt, j, Yt].forEach(function (rt) {
                  return (rt.style.display = se ? "none" : "block");
                }),
              se && ((Kt = k), k.update(se)),
              v &&
                (!F || !k.isActive) &&
                (se ? jv(v, pt, Gn) : _f(v, pt, lr(v), ct)),
              se || k.update(se),
              (Kt = _e),
              (k.isReverted = se));
          }),
          (k.refresh = function (q, ye, se, _e) {
            if (!((Kt || !k.enabled) && !ye)) {
              if (v && q && ar) {
                At(f, "scrollEnd", eg);
                return;
              }
              !dn && T && T(k),
                (Kt = k),
                Ce.tween && !se && (Ce.tween.kill(), (Ce.tween = 0)),
                Ee && Ee.pause(),
                y && l && l.revert({ kill: !1 }).invalidate(),
                k.isReverted || k.revert(!0, !0),
                (k._subPinOffset = !1);
              var rt = B(),
                Oe = de(),
                Ke = L ? L.duration() : Ir(K, X),
                Mt = $e <= 0.01,
                et = 0,
                Ye = _e || 0,
                je = oo(se) ? se.end : o.end,
                yn = o.endTrigger || x,
                He = oo(se)
                  ? se.start
                  : o.start || (o.start === 0 || !x ? 0 : v ? "0 0" : "0 100%"),
                rn = (k.pinnedContainer =
                  o.pinnedContainer && Pn(o.pinnedContainer, k)),
                jn = (x && Math.max(0, Me.indexOf(k))) || 0,
                yt = jn,
                xt,
                Ct,
                Wr,
                ko,
                Ne,
                ht,
                xn,
                Co,
                Ui,
                Vi,
                An,
                Or,
                on;
              for (
                W &&
                oo(se) &&
                ((Or = ne.getProperty(j, X.p)), (on = ne.getProperty(Yt, X.p)));
                yt--;

              )
                (ht = Me[yt]),
                  ht.end || ht.refresh(0, 1) || (Kt = k),
                  (xn = ht.pin),
                  xn &&
                    (xn === x || xn === v || xn === rn) &&
                    !ht.isReverted &&
                    (Vi || (Vi = []), Vi.unshift(ht), ht.revert(!0, !0)),
                  ht !== Me[yt] && (jn--, yt--);
              for (
                mn(He) && (He = He(k)),
                  He = g0(He, "start", k),
                  ze =
                    T0(
                      He,
                      x,
                      rt,
                      X,
                      xe(),
                      Bt,
                      j,
                      k,
                      Oe,
                      Z,
                      ke,
                      Ke,
                      L,
                      k._startClamp && "_startClamp"
                    ) || (v ? -0.001 : 0),
                  mn(je) && (je = je(k)),
                  $n(je) &&
                    !je.indexOf("+=") &&
                    (~je.indexOf(" ")
                      ? (je = ($n(He) ? He.split(" ")[0] : "") + je)
                      : ((et = Qu(je.substr(2), rt)),
                        (je = $n(He)
                          ? He
                          : (L
                              ? ne.utils.mapRange(
                                  0,
                                  L.duration(),
                                  L.scrollTrigger.start,
                                  L.scrollTrigger.end,
                                  ze
                                )
                              : ze) + et),
                        (yn = x))),
                  je = g0(je, "end", k),
                  Qe =
                    Math.max(
                      ze,
                      T0(
                        je || (yn ? "100% 0" : Ke),
                        yn,
                        rt,
                        X,
                        xe() + et,
                        Wt,
                        Yt,
                        k,
                        Oe,
                        Z,
                        ke,
                        Ke,
                        L,
                        k._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  et = 0,
                  yt = jn;
                yt--;

              )
                (ht = Me[yt]),
                  (xn = ht.pin),
                  xn &&
                    ht.start - ht._pinPush <= ze &&
                    !L &&
                    ht.end > 0 &&
                    ((xt =
                      ht.end -
                      (k._startClamp ? Math.max(0, ht.start) : ht.start)),
                    ((xn === x && ht.start - ht._pinPush < ze) || xn === rn) &&
                      isNaN(He) &&
                      (et += xt * (1 - ht.progress)),
                    xn === v && (Ye += xt));
              if (
                ((ze += et),
                (Qe += et),
                k._startClamp && (k._startClamp += et),
                k._endClamp &&
                  !dn &&
                  ((k._endClamp = Qe || -0.001), (Qe = Math.min(Qe, Ir(K, X)))),
                ($e = Qe - ze || ((ze -= 0.01) && 0.001)),
                Mt &&
                  (ve = ne.utils.clamp(0, 1, ne.utils.normalize(ze, Qe, vn))),
                (k._pinPush = Ye),
                Bt &&
                  et &&
                  ((xt = {}),
                  (xt[X.a] = "+=" + et),
                  rn && (xt[X.p] = "-=" + xe()),
                  ne.set([Bt, Wt], xt)),
                v && !(Uf && k.end >= Ir(K, X)))
              )
                (xt = lr(v)),
                  (ko = X === Ot),
                  (Wr = xe()),
                  (tn = parseFloat(Ge(X.a)) + Ye),
                  !Ke &&
                    Qe > 1 &&
                    ((An = (ge ? lt.scrollingElement || Cr : K).style),
                    (An = {
                      style: An,
                      value: An["overflow" + X.a.toUpperCase()],
                    }),
                    ge &&
                      lr(Je)["overflow" + X.a.toUpperCase()] !== "scroll" &&
                      (An.style["overflow" + X.a.toUpperCase()] = "scroll")),
                  _f(v, pt, xt),
                  (Vr = Vu(v)),
                  (Ct = ei(v, !0)),
                  (Co = ke && Ii(K, ko ? hn : Ot)()),
                  E
                    ? ((ct = [E + X.os2, $e + Ye + Pt]),
                      (ct.t = pt),
                      (yt = E === St ? fa(v, X) + $e + Ye : 0),
                      yt &&
                        (ct.push(X.d, yt + Pt),
                        pt.style.flexBasis !== "auto" &&
                          (pt.style.flexBasis = yt + Pt)),
                      ll(ct),
                      rn &&
                        Me.forEach(function ($i) {
                          $i.pin === rn &&
                            $i.vars.pinSpacing !== !1 &&
                            ($i._subPinOffset = !0);
                        }),
                      ke && xe(vn))
                    : ((yt = fa(v, X)),
                      yt &&
                        pt.style.flexBasis !== "auto" &&
                        (pt.style.flexBasis = yt + Pt)),
                  ke &&
                    ((Ne = {
                      top: Ct.top + (ko ? Wr - ze : Co) + Pt,
                      left: Ct.left + (ko ? Co : Wr - ze) + Pt,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (Ne[ho] = Ne["max" + pl] = Math.ceil(Ct.width) + Pt),
                    (Ne[mo] = Ne["max" + dd] = Math.ceil(Ct.height) + Pt),
                    (Ne[or] =
                      Ne[or + ps] =
                      Ne[or + fs] =
                      Ne[or + hs] =
                      Ne[or + ds] =
                        "0"),
                    (Ne[St] = xt[St]),
                    (Ne[St + ps] = xt[St + ps]),
                    (Ne[St + fs] = xt[St + fs]),
                    (Ne[St + hs] = xt[St + hs]),
                    (Ne[St + ds] = xt[St + ds]),
                    (Tr = Iv(Gn, Ne, F)),
                    dn && xe(0)),
                  l
                    ? ((Ui = l._initted),
                      df(1),
                      l.render(l.duration(), !0, !0),
                      (nn = Ge(X.a) - tn + $e + Ye),
                      (pr = Math.abs($e - nn) > 1),
                      ke && pr && Tr.splice(Tr.length - 2, 2),
                      l.render(0, !0, !0),
                      Ui || l.invalidate(!0),
                      l.parent || l.totalTime(l.totalTime()),
                      df(0))
                    : (nn = $e),
                  An &&
                    (An.value
                      ? (An.style["overflow" + X.a.toUpperCase()] = An.value)
                      : An.style.removeProperty("overflow-" + X.a));
              else if (x && xe() && !L)
                for (Ct = x.parentNode; Ct && Ct !== Je; )
                  Ct._pinOffset &&
                    ((ze -= Ct._pinOffset), (Qe -= Ct._pinOffset)),
                    (Ct = Ct.parentNode);
              Vi &&
                Vi.forEach(function ($i) {
                  return $i.revert(!1, !0);
                }),
                (k.start = ze),
                (k.end = Qe),
                (vt = gn = dn ? vn : xe()),
                !L && !dn && (vt < vn && xe(vn), (k.scroll.rec = 0)),
                k.revert(!1, !0),
                (me = qt()),
                Rt && ((oe = -1), Rt.restart(!0)),
                (Kt = 0),
                l &&
                  pe &&
                  (l._initted || Pr) &&
                  l.progress() !== Pr &&
                  l.progress(Pr || 0, !0).render(l.time(), !0, !0),
                (Mt || ve !== k.progress || L || y) &&
                  (l &&
                    !pe &&
                    l.totalProgress(
                      L && ze < -0.001 && !ve
                        ? ne.utils.normalize(ze, Qe, 0)
                        : ve,
                      !0
                    ),
                  (k.progress = Mt || (vt - ze) / $e === ve ? 0 : ve)),
                v && E && (pt._pinOffset = Math.round(k.progress * nn)),
                Ee && Ee.invalidate(),
                isNaN(Or) ||
                  ((Or -= ne.getProperty(j, X.p)),
                  (on -= ne.getProperty(Yt, X.p)),
                  $u(j, X, Or),
                  $u(Bt, X, Or - (_e || 0)),
                  $u(Yt, X, on),
                  $u(Wt, X, on - (_e || 0))),
                Mt && !dn && k.update(),
                _ && !dn && !_n && ((_n = !0), _(k), (_n = !1));
            }
          }),
          (k.getVelocity = function () {
            return ((xe() - gn) / (qt() - Jl)) * 1e3 || 0;
          }),
          (k.endAnimation = function () {
            Kl(k.callbackAnimation),
              l &&
                (Ee
                  ? Ee.progress(1)
                  : l.paused()
                  ? pe || Kl(l, k.direction < 0, 1)
                  : Kl(l, l.reversed()));
          }),
          (k.labelToScroll = function (q) {
            return (
              (l &&
                l.labels &&
                (ze || k.refresh() || ze) +
                  (l.labels[q] / l.duration()) * $e) ||
              0
            );
          }),
          (k.getTrailing = function (q) {
            var ye = Me.indexOf(k),
              se =
                k.direction > 0 ? Me.slice(0, ye).reverse() : Me.slice(ye + 1);
            return (
              $n(q)
                ? se.filter(function (_e) {
                    return _e.vars.preventOverlaps === q;
                  })
                : se
            ).filter(function (_e) {
              return k.direction > 0 ? _e.end <= ze : _e.start >= Qe;
            });
          }),
          (k.update = function (q, ye, se) {
            if (!(L && !se && !q)) {
              var _e = dn === !0 ? vn : k.scroll(),
                rt = q ? 0 : (_e - ze) / $e,
                Oe = rt < 0 ? 0 : rt > 1 ? 1 : rt || 0,
                Ke = k.progress,
                Mt,
                et,
                Ye,
                je,
                yn,
                He,
                rn,
                jn;
              if (
                (ye &&
                  ((gn = vt),
                  (vt = L ? xe() : _e),
                  D && ((hr = Kn), (Kn = l && !pe ? l.totalProgress() : Oe))),
                O &&
                  v &&
                  !Kt &&
                  !ju &&
                  ar &&
                  (!Oe && ze < _e + ((_e - gn) / (qt() - Jl)) * O
                    ? (Oe = 1e-4)
                    : Oe === 1 &&
                      Qe > _e + ((_e - gn) / (qt() - Jl)) * O &&
                      (Oe = 0.9999)),
                Oe !== Ke && k.enabled)
              ) {
                if (
                  ((Mt = k.isActive = !!Oe && Oe < 1),
                  (et = !!Ke && Ke < 1),
                  (He = Mt !== et),
                  (yn = He || !!Oe != !!Ke),
                  (k.direction = Oe > Ke ? 1 : -1),
                  (k.progress = Oe),
                  yn &&
                    !Kt &&
                    ((Ye = Oe && !Ke ? 0 : Oe === 1 ? 1 : Ke === 1 ? 2 : 3),
                    pe &&
                      ((je =
                        (!He && ee[Ye + 1] !== "none" && ee[Ye + 1]) || ee[Ye]),
                      (jn =
                        l &&
                        (je === "complete" || je === "reset" || je in l)))),
                  $ &&
                    (He || jn) &&
                    (jn || S || !l) &&
                    (mn($)
                      ? $(k)
                      : k.getTrailing($).forEach(function (Wr) {
                          return Wr.endAnimation();
                        })),
                  pe ||
                    (Ee && !Kt && !ju
                      ? (Ee._dp._time - Ee._start !== Ee._time &&
                          Ee.render(Ee._dp._time - Ee._start),
                        Ee.resetTo
                          ? Ee.resetTo("totalProgress", Oe, l._tTime / l._tDur)
                          : ((Ee.vars.totalProgress = Oe),
                            Ee.invalidate().restart()))
                      : l && l.totalProgress(Oe, !!(Kt && (me || q)))),
                  v)
                ) {
                  if ((q && E && (pt.style[E + X.os2] = dr), !ke))
                    Ht(ts(tn + nn * Oe));
                  else if (yn) {
                    if (
                      ((rn =
                        !q && Oe > Ke && Qe + 1 > _e && _e + 1 >= Ir(K, X)),
                      F)
                    )
                      if (!q && (Mt || rn)) {
                        var yt = ei(v, !0),
                          xt = _e - ze;
                        E0(
                          v,
                          Je,
                          yt.top + (X === Ot ? xt : 0) + Pt,
                          yt.left + (X === Ot ? 0 : xt) + Pt
                        );
                      } else E0(v, pt);
                    ll(Mt || rn ? Tr : Vr),
                      (pr && Oe < 1 && Mt) ||
                        Ht(tn + (Oe === 1 && !rn ? nn : 0));
                  }
                }
                D && !Ce.tween && !Kt && !ju && Rt.restart(!0),
                  d &&
                    (He || (U && Oe && (Oe < 1 || !pf))) &&
                    ks(d.targets).forEach(function (Wr) {
                      return Wr.classList[Mt || U ? "add" : "remove"](
                        d.className
                      );
                    }),
                  c && !pe && !q && c(k),
                  yn && !Kt
                    ? (pe &&
                        (jn &&
                          (je === "complete"
                            ? l.pause().totalProgress(1)
                            : je === "reset"
                            ? l.restart(!0).pause()
                            : je === "restart"
                            ? l.restart(!0)
                            : l[je]()),
                        c && c(k)),
                      (He || !pf) &&
                        (g && He && mf(k, g),
                        fe[Ye] && mf(k, fe[Ye]),
                        U && (Oe === 1 ? k.kill(!1, 1) : (fe[Ye] = 0)),
                        He ||
                          ((Ye = Oe === 1 ? 1 : 3), fe[Ye] && mf(k, fe[Ye]))),
                      b &&
                        !Mt &&
                        Math.abs(k.getVelocity()) > (ns(b) ? b : 2500) &&
                        (Kl(k.callbackAnimation),
                        Ee
                          ? Ee.progress(1)
                          : Kl(l, je === "reverse" ? 1 : !Oe, 1)))
                    : pe && c && !Kt && c(k);
              }
              if (oi) {
                var Ct = L ? (_e / L.duration()) * (L._caScrollDist || 0) : _e;
                Bi(Ct + (j._isFlipped ? 1 : 0)), oi(Ct);
              }
              $r && $r((-_e / L.duration()) * (L._caScrollDist || 0));
            }
          }),
          (k.enable = function (q, ye) {
            k.enabled ||
              ((k.enabled = !0),
              At(K, "resize", rs),
              ge || At(K, "scroll", Go),
              T && At(f, "refreshInit", T),
              q !== !1 && ((k.progress = ve = 0), (vt = gn = oe = xe())),
              ye !== !1 && k.refresh());
          }),
          (k.getTween = function (q) {
            return q && Ce ? Ce.tween : Ee;
          }),
          (k.setPositions = function (q, ye, se, _e) {
            if (L) {
              var rt = L.scrollTrigger,
                Oe = L.duration(),
                Ke = rt.end - rt.start;
              (q = rt.start + (Ke * q) / Oe), (ye = rt.start + (Ke * ye) / Oe);
            }
            k.refresh(
              !1,
              !1,
              {
                start: _0(q, se && !!k._startClamp),
                end: _0(ye, se && !!k._endClamp),
              },
              _e
            ),
              k.update();
          }),
          (k.adjustPinSpacing = function (q) {
            if (ct && q) {
              var ye = ct.indexOf(X.d) + 1;
              (ct[ye] = parseFloat(ct[ye]) + q + Pt),
                (ct[1] = parseFloat(ct[1]) + q + Pt),
                ll(ct);
            }
          }),
          (k.disable = function (q, ye) {
            if (
              k.enabled &&
              (q !== !1 && k.revert(!0, !0),
              (k.enabled = k.isActive = !1),
              ye || (Ee && Ee.pause()),
              (vn = 0),
              Te && (Te.uncache = 1),
              T && jt(f, "refreshInit", T),
              Rt && (Rt.pause(), Ce.tween && Ce.tween.kill() && (Ce.tween = 0)),
              !ge)
            ) {
              for (var se = Me.length; se--; )
                if (Me[se].scroller === K && Me[se] !== k) return;
              jt(K, "resize", rs), ge || jt(K, "scroll", Go);
            }
          }),
          (k.kill = function (q, ye) {
            k.disable(q, ye), Ee && !ye && Ee.kill(), h && delete Vf[h];
            var se = Me.indexOf(k);
            se >= 0 && Me.splice(se, 1),
              se === fn && Ku > 0 && fn--,
              (se = 0),
              Me.forEach(function (_e) {
                return _e.scroller === k.scroller && (se = 1);
              }),
              se || dn || (k.scroll.rec = 0),
              l &&
                ((l.scrollTrigger = null),
                q && l.revert({ kill: !1 }),
                ye || l.kill()),
              Bt &&
                [Bt, Wt, j, Yt].forEach(function (_e) {
                  return _e.parentNode && _e.parentNode.removeChild(_e);
                }),
              ms === k && (ms = 0),
              v &&
                (Te && (Te.uncache = 1),
                (se = 0),
                Me.forEach(function (_e) {
                  return _e.pin === v && se++;
                }),
                se || (Te.spacer = 0)),
              o.onKill && o.onKill(k);
          }),
          Me.push(k),
          k.enable(!1, !1),
          qn && qn(k),
          l && l.add && !$e)
        ) {
          var De = k.update;
          (k.update = function () {
            (k.update = De), ze || Qe || k.refresh();
          }),
            ne.delayedCall(0.01, k.update),
            ($e = 0.01),
            (ze = Qe = 0);
        } else k.refresh();
        v && Lv();
      }),
      (f.register = function (o) {
        return (
          Ko ||
            ((ne = o || Qm()),
            Xm() && window.document && f.enable(),
            (Ko = es)),
          Ko
        );
      }),
      (f.defaults = function (o) {
        if (o) for (var l in o) Bu[l] = o[l];
        return Bu;
      }),
      (f.disable = function (o, l) {
        (es = 0),
          Me.forEach(function (c) {
            return c[l ? "kill" : "disable"](o);
          }),
          jt(Ae, "wheel", Go),
          jt(lt, "scroll", Go),
          clearInterval(Lu),
          jt(lt, "touchcancel", Lr),
          jt(Je, "touchstart", Lr),
          Iu(jt, lt, "pointerdown,touchstart,mousedown", v0),
          Iu(jt, lt, "pointerup,touchend,mouseup", y0),
          aa.kill(),
          Au(jt);
        for (var u = 0; u < Le.length; u += 3)
          Fu(jt, Le[u], Le[u + 1]), Fu(jt, Le[u], Le[u + 2]);
      }),
      (f.enable = function () {
        if (
          ((Ae = window),
          (lt = document),
          (Cr = lt.documentElement),
          (Je = lt.body),
          ne &&
            ((ks = ne.utils.toArray),
            (cs = ne.utils.clamp),
            (Bf = ne.core.context || Lr),
            (df = ne.core.suppressOverwrites || Lr),
            (ud = Ae.history.scrollRestoration || "auto"),
            ($f = Ae.pageYOffset),
            ne.core.globals("ScrollTrigger", f),
            Je))
        ) {
          (es = 1),
            (ol = document.createElement("div")),
            (ol.style.height = "100vh"),
            (ol.style.position = "absolute"),
            rg(),
            Pv(),
            _t.register(ne),
            (f.isTouch = _t.isTouch),
            (Ei =
              _t.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Ff = _t.isTouch === 1),
            At(Ae, "wheel", Go),
            ($m = [Ae, lt, Cr, Je]),
            ne.matchMedia
              ? ((f.matchMedia = function (h) {
                  var g = ne.matchMedia(),
                    _;
                  for (_ in h) g.add(_, h[_]);
                  return g;
                }),
                ne.addEventListener("matchMediaInit", function () {
                  return hd();
                }),
                ne.addEventListener("matchMediaRevert", function () {
                  return tg();
                }),
                ne.addEventListener("matchMedia", function () {
                  so(0, 1), wo("matchMedia");
                }),
                ne.matchMedia("(orientation: portrait)", function () {
                  return gf(), gf;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            gf(),
            At(lt, "scroll", Go);
          var o = Je.style,
            l = o.borderTopStyle,
            u = ne.core.Animation.prototype,
            c,
            d;
          for (
            u.revert ||
              Object.defineProperty(u, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              o.borderTopStyle = "solid",
              c = ei(Je),
              Ot.m = Math.round(c.top + Ot.sc()) || 0,
              hn.m = Math.round(c.left + hn.sc()) || 0,
              l ? (o.borderTopStyle = l) : o.removeProperty("border-top-style"),
              Lu = setInterval(S0, 250),
              ne.delayedCall(0.5, function () {
                return (ju = 0);
              }),
              At(lt, "touchcancel", Lr),
              At(Je, "touchstart", Lr),
              Iu(At, lt, "pointerdown,touchstart,mousedown", v0),
              Iu(At, lt, "pointerup,touchend,mouseup", y0),
              If = ne.utils.checkPrefix("transform"),
              qu.push(If),
              Ko = qt(),
              aa = ne.delayedCall(0.2, so).pause(),
              qo = [
                lt,
                "visibilitychange",
                function () {
                  var h = Ae.innerWidth,
                    g = Ae.innerHeight;
                  lt.hidden
                    ? ((h0 = h), (m0 = g))
                    : (h0 !== h || m0 !== g) && rs();
                },
                lt,
                "DOMContentLoaded",
                so,
                Ae,
                "load",
                so,
                Ae,
                "resize",
                rs,
              ],
              Au(At),
              Me.forEach(function (h) {
                return h.enable(0, 1);
              }),
              d = 0;
            d < Le.length;
            d += 3
          )
            Fu(jt, Le[d], Le[d + 1]), Fu(jt, Le[d], Le[d + 2]);
        }
      }),
      (f.config = function (o) {
        "limitCallbacks" in o && (pf = !!o.limitCallbacks);
        var l = o.syncInterval;
        (l && clearInterval(Lu)) || ((Lu = l) && setInterval(S0, l)),
          "ignoreMobileResize" in o &&
            (Ff = f.isTouch === 1 && o.ignoreMobileResize),
          "autoRefreshEvents" in o &&
            (Au(jt) || Au(At, o.autoRefreshEvents || "none"),
            (Ym = (o.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (f.scrollerProxy = function (o, l) {
        var u = Pn(o),
          c = Le.indexOf(u),
          d = yo(u);
        ~c && Le.splice(c, d ? 6 : 2),
          l && (d ? Br.unshift(Ae, l, Je, l, Cr, l) : Br.unshift(u, l));
      }),
      (f.clearMatchMedia = function (o) {
        Me.forEach(function (l) {
          return l._ctx && l._ctx.query === o && l._ctx.kill(!0, !0);
        });
      }),
      (f.isInViewport = function (o, l, u) {
        var c = ($n(o) ? Pn(o) : o).getBoundingClientRect(),
          d = c[u ? ho : mo] * l || 0;
        return u
          ? c.right - d > 0 && c.left + d < Ae.innerWidth
          : c.bottom - d > 0 && c.top + d < Ae.innerHeight;
      }),
      (f.positionInViewport = function (o, l, u) {
        $n(o) && (o = Pn(o));
        var c = o.getBoundingClientRect(),
          d = c[u ? ho : mo],
          h =
            l == null
              ? d / 2
              : l in da
              ? da[l] * d
              : ~l.indexOf("%")
              ? (parseFloat(l) * d) / 100
              : parseFloat(l) || 0;
        return u ? (c.left + h) / Ae.innerWidth : (c.top + h) / Ae.innerHeight;
      }),
      (f.killAll = function (o) {
        if (
          (Me.slice(0).forEach(function (u) {
            return u.vars.id !== "ScrollSmoother" && u.kill();
          }),
          o !== !0)
        ) {
          var l = xo.killAll || [];
          (xo = {}),
            l.forEach(function (u) {
              return u();
            });
        }
      }),
      f
    );
  })();
Pe.version = "3.12.5";
Pe.saveStyles = function (f) {
  return f
    ? ks(f).forEach(function (n) {
        if (n && n.style) {
          var i = Vn.indexOf(n);
          i >= 0 && Vn.splice(i, 5),
            Vn.push(
              n,
              n.style.cssText,
              n.getBBox && n.getAttribute("transform"),
              ne.core.getCache(n),
              Bf()
            );
        }
      })
    : Vn;
};
Pe.revert = function (f, n) {
  return hd(!f, n);
};
Pe.create = function (f, n) {
  return new Pe(f, n);
};
Pe.refresh = function (f) {
  return f ? rs() : (Ko || Pe.register()) && so(!0);
};
Pe.update = function (f) {
  return ++Le.cache && ni(f === !0 ? 2 : 0);
};
Pe.clearScrollMemory = ng;
Pe.maxScroll = function (f, n) {
  return Ir(f, n ? hn : Ot);
};
Pe.getScrollFunc = function (f, n) {
  return Ii(Pn(f), n ? hn : Ot);
};
Pe.getById = function (f) {
  return Vf[f];
};
Pe.getAll = function () {
  return Me.filter(function (f) {
    return f.vars.id !== "ScrollSmoother";
  });
};
Pe.isScrolling = function () {
  return !!ar;
};
Pe.snapDirectional = pd;
Pe.addEventListener = function (f, n) {
  var i = xo[f] || (xo[f] = []);
  ~i.indexOf(n) || i.push(n);
};
Pe.removeEventListener = function (f, n) {
  var i = xo[f],
    o = i && i.indexOf(n);
  o >= 0 && i.splice(o, 1);
};
Pe.batch = function (f, n) {
  var i = [],
    o = {},
    l = n.interval || 0.016,
    u = n.batchMax || 1e9,
    c = function (g, _) {
      var S = [],
        x = [],
        v = ne
          .delayedCall(l, function () {
            _(S, x), (S = []), (x = []);
          })
          .pause();
      return function (E) {
        S.length || v.restart(!0),
          S.push(E.trigger),
          x.push(E),
          u <= S.length && v.progress(1);
      };
    },
    d;
  for (d in n)
    o[d] =
      d.substr(0, 2) === "on" && mn(n[d]) && d !== "onRefreshInit"
        ? c(d, n[d])
        : n[d];
  return (
    mn(u) &&
      ((u = u()),
      At(Pe, "refresh", function () {
        return (u = n.batchMax());
      })),
    ks(f).forEach(function (h) {
      var g = {};
      for (d in o) g[d] = o[d];
      (g.trigger = h), i.push(Pe.create(g));
    }),
    i
  );
};
var O0 = function (n, i, o, l) {
    return (
      i > l ? n(l) : i < 0 && n(0),
      o > l ? (l - i) / (o - i) : o < 0 ? i / (i - o) : 1
    );
  },
  vf = function f(n, i) {
    i === !0
      ? n.style.removeProperty("touch-action")
      : (n.style.touchAction =
          i === !0
            ? "auto"
            : i
            ? "pan-" + i + (_t.isTouch ? " pinch-zoom" : "")
            : "none"),
      n === Cr && f(Je, i);
  },
  Wu = { auto: 1, scroll: 1 },
  Bv = function (n) {
    var i = n.event,
      o = n.target,
      l = n.axis,
      u = (i.changedTouches ? i.changedTouches[0] : i).target,
      c = u._gsap || ne.core.getCache(u),
      d = qt(),
      h;
    if (!c._isScrollT || d - c._isScrollT > 2e3) {
      for (
        ;
        u &&
        u !== Je &&
        ((u.scrollHeight <= u.clientHeight && u.scrollWidth <= u.clientWidth) ||
          !(Wu[(h = lr(u)).overflowY] || Wu[h.overflowX]));

      )
        u = u.parentNode;
      (c._isScroll =
        u &&
        u !== o &&
        !yo(u) &&
        (Wu[(h = lr(u)).overflowY] || Wu[h.overflowX])),
        (c._isScrollT = d);
    }
    (c._isScroll || l === "x") && (i.stopPropagation(), (i._gsapAllow = !0));
  },
  og = function (n, i, o, l) {
    return _t.create({
      target: n,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: i,
      onWheel: (l = l && Bv),
      onPress: l,
      onDrag: l,
      onScroll: l,
      onEnable: function () {
        return o && At(lt, _t.eventTypes[0], R0, !1, !0);
      },
      onDisable: function () {
        return jt(lt, _t.eventTypes[0], R0, !0);
      },
    });
  },
  Uv = /(input|label|select|textarea)/i,
  N0,
  R0 = function (n) {
    var i = Uv.test(n.target.tagName);
    (i || N0) && ((n._gsapAllow = !0), (N0 = i));
  },
  Vv = function (n) {
    oo(n) || (n = {}),
      (n.preventDefault = n.isNormalizer = n.allowClicks = !0),
      n.type || (n.type = "wheel,touch"),
      (n.debounce = !!n.debounce),
      (n.id = n.id || "normalizer");
    var i = n,
      o = i.normalizeScrollX,
      l = i.momentum,
      u = i.allowNestedScroll,
      c = i.onRelease,
      d,
      h,
      g = Pn(n.target) || Cr,
      _ = ne.core.globals().ScrollSmoother,
      S = _ && _.get(),
      x =
        Ei &&
        ((n.content && Pn(n.content)) ||
          (S && n.content !== !1 && !S.smooth() && S.content())),
      v = Ii(g, Ot),
      E = Ii(g, hn),
      y = 1,
      O =
        (_t.isTouch && Ae.visualViewport
          ? Ae.visualViewport.scale * Ae.visualViewport.width
          : Ae.outerWidth) / Ae.innerWidth,
      I = 0,
      A = mn(l)
        ? function () {
            return l(d);
          }
        : function () {
            return l || 2.8;
          },
      U,
      D,
      F = og(g, n.type, !0, u),
      V = function () {
        return (D = !1);
      },
      L = Lr,
      b = Lr,
      $ = function () {
        (h = Ir(g, Ot)),
          (b = cs(Ei ? 1 : 0, h)),
          o && (L = cs(0, Ir(g, hn))),
          (U = go);
      },
      X = function () {
        (x._gsap.y = ts(parseFloat(x._gsap.y) + v.offset) + "px"),
          (x.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(x._gsap.y) +
            ", 0, 1)"),
          (v.offset = v.cacheID = 0);
      },
      pe = function () {
        if (D) {
          requestAnimationFrame(V);
          var W = ts(d.deltaY / 2),
            Z = b(v.v - W);
          if (x && Z !== v.v + v.offset) {
            v.offset = Z - v.v;
            var k = ts((parseFloat(x && x._gsap.y) || 0) - v.offset);
            (x.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              k +
              ", 0, 1)"),
              (x._gsap.y = k + "px"),
              (v.cacheID = Le.cache),
              ni();
          }
          return !0;
        }
        v.offset && X(), (D = !0);
      },
      K,
      he,
      ge,
      ke,
      fe = function () {
        $(),
          K.isActive() &&
            K.vars.scrollY > h &&
            (v() > h ? K.progress(1) && v(h) : K.resetTo("scrollY", h));
      };
    return (
      x && ne.set(x, { y: "+=0" }),
      (n.ignoreCheck = function (ee) {
        return (
          (Ei && ee.type === "touchmove" && pe()) ||
          (y > 1.05 && ee.type !== "touchstart") ||
          d.isGesturing ||
          (ee.touches && ee.touches.length > 1)
        );
      }),
      (n.onPress = function () {
        D = !1;
        var ee = y;
        (y = ts(((Ae.visualViewport && Ae.visualViewport.scale) || 1) / O)),
          K.pause(),
          ee !== y && vf(g, y > 1.01 ? !0 : o ? !1 : "x"),
          (he = E()),
          (ge = v()),
          $(),
          (U = go);
      }),
      (n.onRelease = n.onGestureStart =
        function (ee, W) {
          if ((v.offset && X(), !W)) ke.restart(!0);
          else {
            Le.cache++;
            var Z = A(),
              k,
              T;
            o &&
              ((k = E()),
              (T = k + (Z * 0.05 * -ee.velocityX) / 0.227),
              (Z *= O0(E, k, T, Ir(g, hn))),
              (K.vars.scrollX = L(T))),
              (k = v()),
              (T = k + (Z * 0.05 * -ee.velocityY) / 0.227),
              (Z *= O0(v, k, T, Ir(g, Ot))),
              (K.vars.scrollY = b(T)),
              K.invalidate().duration(Z).play(0.01),
              ((Ei && K.vars.scrollY >= h) || k >= h - 1) &&
                ne.to({}, { onUpdate: fe, duration: Z });
          }
          c && c(ee);
        }),
      (n.onWheel = function () {
        K._ts && K.pause(), qt() - I > 1e3 && ((U = 0), (I = qt()));
      }),
      (n.onChange = function (ee, W, Z, k, T) {
        if (
          (go !== U && $(),
          W && o && E(L(k[2] === W ? he + (ee.startX - ee.x) : E() + W - k[1])),
          Z)
        ) {
          v.offset && X();
          var B = T[2] === Z,
            de = B ? ge + ee.startY - ee.y : v() + Z - T[1],
            oe = b(de);
          B && de !== oe && (ge += oe - de), v(oe);
        }
        (Z || W) && ni();
      }),
      (n.onEnable = function () {
        vf(g, o ? !1 : "x"),
          Pe.addEventListener("refresh", fe),
          At(Ae, "resize", fe),
          v.smooth &&
            ((v.target.style.scrollBehavior = "auto"),
            (v.smooth = E.smooth = !1)),
          F.enable();
      }),
      (n.onDisable = function () {
        vf(g, !0),
          jt(Ae, "resize", fe),
          Pe.removeEventListener("refresh", fe),
          F.kill();
      }),
      (n.lockAxis = n.lockAxis !== !1),
      (d = new _t(n)),
      (d.iOS = Ei),
      Ei && !v() && v(1),
      Ei && ne.ticker.add(Lr),
      (ke = d._dc),
      (K = ne.to(d, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: o ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: ig(v, v(), function () {
            return K.pause();
          }),
        },
        onUpdate: ni,
        onComplete: ke.vars.onComplete,
      })),
      d
    );
  };
Pe.sort = function (f) {
  return Me.sort(
    f ||
      function (n, i) {
        return (
          (n.vars.refreshPriority || 0) * -1e6 +
          n.start -
          (i.start + (i.vars.refreshPriority || 0) * -1e6)
        );
      }
  );
};
Pe.observe = function (f) {
  return new _t(f);
};
Pe.normalizeScroll = function (f) {
  if (typeof f > "u") return cn;
  if (f === !0 && cn) return cn.enable();
  if (f === !1) {
    cn && cn.kill(), (cn = f);
    return;
  }
  var n = f instanceof _t ? f : Vv(f);
  return cn && cn.target === n.target && cn.kill(), yo(n.target) && (cn = n), n;
};
Pe.core = {
  _getVelocityProp: Af,
  _inputObserver: og,
  _scrollers: Le,
  _proxies: Br,
  bridge: {
    ss: function () {
      ar || wo("scrollStart"), (ar = qt());
    },
    ref: function () {
      return Kt;
    },
  },
};
Qm() && ne.registerPlugin(Pe);
On.registerPlugin(Pe);
const $v = () => {
    const [f, n] = Be.useState(1),
      [i, o] = Be.useState(!1),
      [l, u] = Be.useState(!0),
      [c, d] = Be.useState(0),
      h = 4,
      g = Be.useRef(null),
      _ = Be.useRef(null),
      S = () => {
        d((y) => y + 1);
      },
      x = (f % h) + 1,
      v = () => {
        o(!0), n(x);
      };
    Be.useEffect(() => {
      c === h - 1 && u(!1);
    }, [c]),
      Be.useEffect(() => {
        const y = (I) => {
            I.stopPropagation();
            const A = window.scrollY + I.deltaY;
            window.scrollTo({ top: A, behavior: "auto" });
          },
          O = _.current;
        return (
          O && O.addEventListener("wheel", y, { passive: !0 }),
          () => {
            O && O.removeEventListener("wheel", y);
          }
        );
      }, []),
      dl(
        () => {
          i &&
            (On.set("#next-video", { visibility: "visible" }),
            On.to("#next-video", {
              transformOrigin: "center center",
              scale: 1,
              width: "100%",
              height: "100%",
              duration: 1,
              ease: "power1.inOut",
              onStart: () => g.current.play(),
            }),
            On.from("#current-video", {
              transformOrigin: "center center",
              scale: 0,
              duration: 1.5,
              ease: "power1.inOut",
            }));
        },
        { dependencies: [f], revertOnUpdate: !0 }
      ),
      dl(() => {
        On.set("#video-frame", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          borderRadius: "0",
        }),
          On.to("#video-frame", {
            clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
            borderRadius: "0 0 40% 10%",
            ease: "none",
            scrollTrigger: {
              trigger: "#hero-section",
              start: "top top",
              end: "bottom center",
              scrub: 1,
              preventOverlaps: !0,
              fastScrollEnd: !0,
            },
          }),
          Pe.refresh();
      }, []);
    const E = (y) => `videos/hero-${y}.mp4`;
    return M.jsxs("section", {
      ref: _,
      id: "hero-section",
      className: "relative h-screen w-full",
      style: { willChange: "transform", transform: "translateZ(0)" },
      children: [
        M.jsxs("div", {
          className: "absolute inset-0",
          style: { height: "100vh" },
          children: [
            l &&
              M.jsx("div", {
                className:
                  "absolute flex-center z-[100] h-full w-full overflow-hidden bg-violet-50",
                children: M.jsxs("div", {
                  className: "three-body",
                  children: [
                    M.jsx("div", { className: "three-body__dot" }),
                    M.jsx("div", { className: "three-body__dot" }),
                    M.jsx("div", { className: "three-body__dot" }),
                  ],
                }),
              }),
            M.jsxs("div", {
              id: "video-frame",
              className: "relative z-10 h-full w-full rounded-lg bg-blue-75",
              children: [
                M.jsxs("div", {
                  children: [
                    M.jsx("div", {
                      className:
                        "mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg",
                      children: M.jsx("div", {
                        onClick: v,
                        className:
                          "origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100",
                        children: M.jsx("video", {
                          ref: g,
                          src: E(x),
                          loop: !0,
                          muted: !0,
                          id: "current-video",
                          className:
                            "size-64 origin-center scale-150 object-cover object-center",
                          onLoadedData: S,
                        }),
                      }),
                    }),
                    M.jsx("video", {
                      ref: g,
                      src: E(f),
                      loop: !0,
                      muted: !0,
                      id: "next-video",
                      className:
                        "absolute-center invisible absolute z-20 size-64 object-cover object-center",
                      onLoadedData: S,
                    }),
                    M.jsx("video", {
                      src: E(f === h - 1 ? 1 : f + 1),
                      autoPlay: !0,
                      loop: !0,
                      muted: !0,
                      className: `absolute left-0 top-0
           size-full object-cover object-center`,
                      onLoadedData: S,
                    }),
                  ],
                }),
                M.jsxs("h1", {
                  className: `special-font hero-heading text-right
          absolute bottom-5 right-5 z-40
           bg-gradient-to-r from-blue-500 to-blue-200 
          text-transparent bg-clip-text`,
                  children: [
                    "N",
                    M.jsx("b", { children: "e" }),
                    "ver",
                    M.jsx("br", {}),
                    M.jsx("b", { children: "S" }),
                    "top",
                    M.jsx("br", {}),
                    "Ta",
                    M.jsx("b", { children: "l" }),
                    "king",
                  ],
                }),
                M.jsx("div", {
                  className: "absolute left-0 top-0 z-40 size-full",
                  children: M.jsxs("div", {
                    className: "mt-24 px-5 sm:px-10",
                    children: [
                      M.jsxs("h1", {
                        className:
                          "special-font hero-heading bg-gradient-to-r from-blue-200 to-blue-500 text-transparent bg-clip-text",
                        children: ["T A L ", M.jsx("b", { children: "K" })],
                      }),
                      M.jsx("p", {
                        className:
                          "mb-5 max-w-128 tracking-widest uppercase font-robert-regular text-blue-200",
                        children: "Totally Amature Linguistic Kommunicator",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
        M.jsxs("h1", {
          className: `special-font hero-heading text-right
      absolute bottom-5 right-5
       text-gray-200`,
          children: [
            "N",
            M.jsx("b", { children: "e" }),
            "ver",
            M.jsx("br", {}),
            M.jsx("b", { children: "S" }),
            "top",
            M.jsx("br", {}),
            "Ta",
            M.jsx("b", { children: "l" }),
            "king",
          ],
        }),
      ],
    });
  },
  lg = ({ title: f, containerClass: n }) => {
    const i = Be.useRef(null);
    Be.useEffect(() => {
      const u = On.context(() => {
        On.set(".animated-word", {
          opacity: 0,
          transform: "translate3d(0,100%,0) rotateY(10deg) rotateX(10deg)",
        }),
          On.timeline({
            scrollTrigger: {
              trigger: i.current,
              start: "100 bottom",
              end: "center bottom",
              toggleActions: "play none none reverse",
            },
          }).to(".animated-word", {
            opacity: 1,
            transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
            duration: 1,
            ease: "power2.out",
            stagger: 0.1,
          });
      }, i);
      return () => u.revert();
    }, []);
    const l = ((u) =>
      u.split("<br />").map((c) =>
        c
          .split(" ")
          .map((d) => (d.includes("<b>") ? d : d.trim()))
          .filter((d) => d.length > 0)
      ))(f);
    return M.jsx("div", {
      ref: i,
      className: `animated-title ${n}`,
      children: l.map((u, c) =>
        M.jsx(
          "div",
          {
            className:
              "flex flex-wrap items-center justify-center gap-2 px-4 md:gap-3",
            children: u.map((d, h) =>
              M.jsx(
                "span",
                {
                  className: "animated-word inline-block",
                  style: {
                    opacity: 0,
                    transform: "translate3d(0,100%,0)",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  },
                  dangerouslySetInnerHTML: { __html: d },
                },
                `${c}-${h}`
              )
            ),
          },
          c
        )
      ),
    });
  };
On.registerPlugin(Pe);
const Wv = () => (
  dl(() => {
    Pe.create({
      trigger: "#about",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (f) => {
        document.documentElement.style.setProperty(
          "--about-scroll",
          f.progress
        );
      },
    });
  }),
  M.jsx("div", {
    id: "about",
    className: "relative min-h-screen w-full overflow-visible",
    children: M.jsxs("div", {
      className: `relative mb-8 mt-36 flex
       flex-col items-center gap-5`,
      children: [
        M.jsx(lg, {
          title:
            "Translate & Upload skeets on the fly",
          containerClass: "mt-5 !text-gray-200 text-center",
        }),
        M.jsxs("div", {
          className:
            " font-general text-gray-200 mt-16 w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20",
          children: [
            M.jsx("img", {
              className:
                "absolute z-[-1] left-0 scale-80 rounded-3xl opacity-60",
              src: "img/googleApi.png",
              alt: "",
            }),
            M.jsxs("div", {
              className: `flex justify-between flex-col col-span-1 lg:col-span-2
           p-8 rounded-3xl bg-white/[0.15] backdrop-blur-[8px] hover:bg-white/[0.2] transition-all`,
              children: [
                M.jsx("h3", {
                  className: "text-2xl mb-4",
                  children: "What & Why ?",
                }),
                M.jsxs("p", {
                  className: "mb-0 text-sm",
                  children: [
                    M.jsx("br", {}),
                    "Little fan tool aiming to speed up post editing and translation to various languages. As a child of curiosity at any point should be considered as a fully professional project.",
                    M.jsx("br", {}),
                    M.jsx("br", {}),
                    M.jsx("p", {
                      className: " text-sm font-bold text-blue-300",
                      children:
                        "For the time installation is possible only through chromium developer mode",
                    }),
                    M.jsx("br", {}),
                    "Current beta release is licensed under the GNU General Public License Version 3 (GPLv3).",
                    M.jsx("br", {}),
                    "You are free to use, modify, and distribute this software, provided that all copies",
                    M.jsx("br", {}),
                    "and substantial portions of the software are licensed under the same terms",
                    M.jsx("br", {}),
                    M.jsx("br", {}),
                    M.jsx("b", {
                      children:
                        "Current version is build for chromium web browsers.",
                    }),
                    M.jsx("br", {}),
                    M.jsx("b", {
                      children:
                        "Utylize Google's GEMINI 1.5 Flash for translation purpose and requires API key",
                    }),
                  ],
                }),
                M.jsxs("div", {
                  className:
                    " space-y-2 my-2  bg-black/[0.35] border-blue-900 border-2 rounded-3xl p-6",
                  children: [
                    M.jsx("h3", {
                      className: "text-xl mb-0 ",
                      children: "Why Gemini-1.5 flash ?",
                    }),
                    M.jsx("br", {}),
                    M.jsx("p", {
                      className: "text-sm",
                      children:
                        "Due to API accessibility, generous free usage terms and good translation capabilities.",
                    }),
                    M.jsxs("p", {
                      className: "text-md mb-3",
                      children: [
                        "Get your API key from",
                        " ",
                        M.jsxs("a", {
                          className: "text-blue-300 hover:underline",
                          href: "https://aistudio.google.com/welcome",
                          children: [" ", "Google API Studio"],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            M.jsxs("div", {
              className: `flex justify-between flex-col bg-white/[0.15] backdrop-blur-[8px] 
          rounded-3xl p-8 hover:bg-white/[0.2] transition-all`,
              children: [
                M.jsx("h3", {
                  className: "text-2xl  mb-4 ",
                  children: "Get Started",
                }),
                M.jsx("div", {
                  children: M.jsx("div", {
                    className: "text-sm",
                    children: M.jsxs("ul", {
                      className: "list-disc pl-6 flex flex-col gap-6",
                      children: [
                        M.jsx("li", {
                          children: "Download T A L K plugin GitHub repository",
                        }),
                        M.jsx("li", { children: "Unpack the files" }),
                        M.jsxs("li", {
                          children: [
                            "Toggle on browser developer mode:",
                            M.jsx("br", {}),
                            "Chrome: chrome://extensions/ Brave: brave://extensions/ ....etc",
                            M.jsx("br", {}),
                            "Toggle is located in top right corner",
                          ],
                        }),
                        M.jsx("li", {
                          children:
                            'From the same screen, click "Load unpacked" in the top left corner and search plugin folder "TALKbeta"',
                        }),
                        M.jsx("li", {
                          children:
                            "(Optionally) Pin the plugin to the browser dashboard for easy access",
                        }),
                      ],
                    }),
                  }),
                }),
                M.jsx("a", {
                  href: "https://bsky.app/profile/snappypairings.bsky.social",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  onClick: (f) => {
                    f.preventDefault(),
                      window.open(
                        "https://bsky.app/profile/snappypairings.bsky.social",
                        "_blank"
                      );
                  },
                  className: "message-btn-wrapper inline-block",
                }),
                M.jsx("a", {
                  href: "https://github.com/blueDevTalk/TALK---bluesky-post-transmiter",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  onClick: (f) => {
                    f.preventDefault(),
                      window.open(
                        "https://github.com/blueDevTalk/TALK---bluesky-post-transmiter",
                        "_blank"
                      );
                  },
                  children: M.jsx(z0, { title: "GIT Repo" }),
                }),
              ],
            }),
            M.jsxs("div", {
              className:
                "bg-white/[0.15] backdrop-blur-[8px] rounded-3xl p-8 hover:bg-white/[0.2] transition-all",
              children: [
                M.jsx("h3", {
                  className: "text-2xl  mb-4",
                  children: "User Manual",
                }),
                M.jsx("p", {
                  className: " mb-6",
                  children:
                    "Complete documentation and important safety guidelines are currently in preparation",
                }),
              ],
            }),
            M.jsxs("div", {
              className:
                "col-span-1 lg:col-span-2 bg-white/[0.15] backdrop-blur-[8px] rounded-3xl p-8 hover:bg-white/[0.2] transition-all",
              children: [
                M.jsx("h3", {
                  className: "text-2xl  mb-4",
                  children: "Fair warning !",
                }),
                M.jsxs("p", {
                  className: " mb-6 text-sm",
                  children: [
                    M.jsx("b", {
                      children: "Current build is in early beta stage",
                    }),
                    ". Please be informed that minor or even major bugs may occur and some of the functions may work poorly or not at all. Plugin is currently given out for free ",
                    M.jsx("b", {
                      children:
                        "without any guarantee of stability and/or performance.",
                    }),
                    " ",
                    "Use at your own risk!",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  })
);
function Yv(f) {
  for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
  f && f.addEventListener && f.addEventListener.apply(f, n);
}
function Hv(f) {
  for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
  f && f.removeEventListener && f.removeEventListener.apply(f, n);
}
var M0 = typeof window < "u",
  bv = function (f) {
    Be.useEffect(f, []);
  },
  Xv = function (f) {
    var n = Be.useRef(f);
    (n.current = f),
      bv(function () {
        return function () {
          return n.current();
        };
      });
  },
  Qv = function (f) {
    var n = Be.useRef(0),
      i = Be.useState(f),
      o = i[0],
      l = i[1],
      u = Be.useCallback(function (c) {
        cancelAnimationFrame(n.current),
          (n.current = requestAnimationFrame(function () {
            l(c);
          }));
      }, []);
    return (
      Xv(function () {
        cancelAnimationFrame(n.current);
      }),
      [o, u]
    );
  },
  Gv = function () {
    var f = Qv(function () {
        return {
          x: M0 ? window.pageXOffset : 0,
          y: M0 ? window.pageYOffset : 0,
        };
      }),
      n = f[0],
      i = f[1];
    return (
      Be.useEffect(function () {
        var o = function () {
          i(function (l) {
            var u = window.pageXOffset,
              c = window.pageYOffset;
            return l.x !== u || l.y !== c ? { x: u, y: c } : l;
          });
        };
        return (
          o(),
          Yv(window, "scroll", o, { capture: !1, passive: !0 }),
          function () {
            Hv(window, "scroll", o);
          }
        );
      }, []),
      n
    );
  };
const Kv = ["About", "FAQ"],
  qv = () => {
    const [f, n] = Be.useState(!1),
      [i, o] = Be.useState(!1),
      [l, u] = Be.useState(0),
      [c, d] = Be.useState(!0),
      h = Be.useRef(null),
      g = Be.useRef(null),
      { y: _ } = Gv();
    Be.useEffect(() => {
      _ === 0
        ? (d(!0), h.current.classList.remove("floating-nav"))
        : _ > l
        ? (d(!1), h.current.classList.add("floating-nav"))
        : _ < l && (d(!0), h.current.classList.add("floating-nav")),
        u(_);
    }, [_, l]),
      Be.useEffect(() => {
        On.to(h.current, {
          y: c ? 0 : -100,
          opacity: c ? 1 : 0,
          duration: 0.2,
        });
      }, [c]);
    const S = () => {
      n((x) => !x), o((x) => !x);
    };
    return (
      Be.useEffect(() => {
        f ? g.current.play() : g.current.pause();
      }, [f]),
      M.jsx("div", {
        ref: h,
        className: `fixed inset-x-0 top-4 z-50 h-16 border-none 
  transition-all duration-700 sm:inset-x-6`,
        children: M.jsx("header", {
          className: `absolute top-1/2 w-full
       -translate-y-1/2`,
          children: M.jsxs("nav", {
            className: `flex size-full items-center
       justify-between p-4`,
            children: [
              M.jsxs("div", {
                className: "flex items-center gap-7",
                children: [
                  M.jsx("img", {
                    src: "./img/logo.png",
                    alt: "logo",
                    className: "w-10 rounded-full",
                  }),
                  M.jsx("a", {
                    href: "https://bsky.app/profile/bluetalkdev.bsky.social",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: (x) => {
                      x.preventDefault(),
                        window.open(
                          "https://bsky.app/profile/bluetalkdev.bsky.social",
                          "_blank"
                        );
                    },
                    className: "message-btn-wrapper inline-block",
                    children: M.jsx(z0, {
                      title: M.jsx("span", {
                        className: "btn-text pl-4",
                        children: "Message Me",
                      }),
                      leftIcon: M.jsx("img", {
                        src: "./img/bsLogo.png",
                        alt: "bsky logo",
                        className: " w-5 h-5",
                      }),
                      rightIcon: M.jsx(u1, { className: "right-icon" }),
                      containerClass:
                        "flex bg-transparent border-gray-100 border-2 items-center",
                    }),
                  }),
                ],
              }),
              M.jsxs("div", {
                className: "flex h-full items-center",
                children: [
                  M.jsx("div", {
                    className: "hidden md:block ",
                    children: Kv.map((x) =>
                      M.jsx(
                        "a",
                        {
                          href: `#${x.toLowerCase()}`,
                          className: "nav-hover-btn",
                          children: x,
                        },
                        x
                      )
                    ),
                  }),
                  M.jsxs("button", {
                    className: `ml-10 flex iutems-center
             space-x-0.5`,
                    onClick: S,
                    children: [
                      M.jsx("audio", {
                        ref: g,
                        className: "hidden",
                        src: "./audio/loop.mp3",
                        loop: !0,
                      }),
                      [1, 2, 3, 4].map((x) =>
                        M.jsx(
                          "div",
                          {
                            className: `indicator-line 
                    ${i ? "active" : ""}`,
                            style: { animationDelay: `${x * 0.1}s` },
                          },
                          x
                        )
                      ),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  };
function Zv(f) {
  return pa({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z",
        },
        child: [],
      },
    ],
  })(f);
}
On.registerPlugin(Pe);
const Jv = ({ question: f, answer: n }) => {
    const [i, o] = Be.useState(!1);
    return M.jsxs("div", {
      className: "border-b border-white/20",
      children: [
        M.jsxs("button", {
          className:
            "w-full py-4 px-6 flex justify-between items-center text-left",
          onClick: () => o(!i),
          children: [
            M.jsx("span", {
              className: "text-gray-200 font-semibold",
              children: f,
            }),
            M.jsx(Zv, {
              className: `text-gray-200 transition-transform ${
                i ? "rotate-180" : ""
              }`,
            }),
          ],
        }),
        M.jsx("div", {
          className: `overflow-hidden transition-all duration-300 ${
            i ? "max-h-96" : "max-h-0"
          }`,
          children: M.jsx("p", {
            className: "px-6 pb-4 text-gray-300 text-sm",
            children: n,
          }),
        }),
      ],
    });
  },
  ey = () => {
    const f = [
      {
        question: "I don't know how to install plugin",
        answer:
          "Either wait for a stable version to appear on chrome market or send me DM on bs",
      },
      {
        question: "Will this gonna work without Gemini API Key ?",
        answer:
          "Yes. Plugin will run and You will still be able to create posts and threads althou it will lack translation features",
      },
      {
        question: "Is it opensource ?",
        answer:
          "Yes. Current beta release is licensed under the GNU General Public License Version 3 (GPLv3). You are free to use, modify, and distribute this software, provided that all copies and substantial portions of the software are licensed under the same terms",
      },
      {
        question: "Why I can not fully controll ?",
        answer:
          "Plugin is developed by me and me only. Support for threads will appear as soon as I will find time for it and if plugin gathers enough community",
      },
      {
        question: "How can I contribute?",
        answer:
          "At this stage of development, I'm not looking for contributions other that a feedback. In time if development will progress, I will open a contribution section",
      },
    ];
    return (
      dl(() => {
        Pe.create({ trigger: "#faq", start: "top top", end: "bottom bottom" });
      }),
      M.jsx("div", {
        id: "faq",
        className: "relative min-h-screen w-full",
        children: M.jsxs("div", {
          className: "relative mb-8 mt-36 flex flex-col items-center",
          children: [
            M.jsx("div", {
              className: "flex justify-center gap-20 mb-16",
              children: M.jsx(lg, {
                title: "FAQ & Future",
                containerClass: "mt-5 !text-gray-200 text-center",
              }),
            }),
            M.jsxs("div", {
              className:
                "flex gap-6 border-l-2 border-gray-800 w-full max-w-7xl px-4 mb-20",
              children: [
                M.jsx("div", {
                  className: "flex-[0.5] font-general font-thin text-gray-200",
                  children: M.jsxs("div", {
                    className:
                      "flex flex-col justify-between  overflow-hidden h-full text-xs",
                    children: [
                      M.jsx("h3", {
                        className: "text-xl font-thin mb-4",
                        children: "Some Q's&A's...More to come",
                      }),
                      f.map((n, i) =>
                        M.jsx(Jv, { question: n.question, answer: n.answer }, i)
                      ),
                    ],
                  }),
                }),
                M.jsx("div", {
                  className:
                    "flex-[0.5] font-general border-l-2 border-gray-800 text-gray-200",
                  children: M.jsxs("div", {
                    className:
                      "flex flex-col justify-between  rounded-3xl py-0 p-8 h-full",
                    children: [
                      M.jsx("h3", {
                        className: "text-xl font-thin mb-4",
                        children: "Development Plans",
                      }),
                      M.jsxs("ul", {
                        className: "list-disc pl-6 space-y-4 text-xs",
                        children: [
                          M.jsx("li", { children: "Threads Support" }),
                          M.jsx("li", {
                            children:
                              "AI features (post shrinking, tagging...)",
                          }),
                          M.jsx("li", {
                            children:
                              "Support for local LLM's/OpenAI based models ",
                          }),
                          M.jsx("li", {
                            children:
                              "Customization options for translation preferences",
                          }),
                          M.jsx("li", {
                            children:
                              "Community-driven feature development and improvements",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      })
    );
  };
function ty(f) {
  return pa({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
        child: [],
      },
    ],
  })(f);
}
function ny(f) {
  return pa({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z",
        },
        child: [],
      },
    ],
  })(f);
}
const ry = () =>
    M.jsx("footer", {
      className:
        "absolute z-0 bottom-0 left-0 w-full border-t border-gray-800 bg-black/30 backdrop-blur-sm",
      children: M.jsx("div", {
        className: "max-w-7xl mx-auto px-4 py-4",
        children: M.jsxs("div", {
          className:
            "flex flex-col md:flex-row justify-between items-center gap-4",
          children: [
            M.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                M.jsx("h3", {
                  className: "text-white font-bold text-xl",
                  children: "T A L K",
                }),
                M.jsxs("span", {
                  className: "text-gray-400 text-sm",
                  children: [
                    "© ",
                    new Date().getFullYear(),
                    " All rights reserved",
                  ],
                }),
              ],
            }),
            M.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                M.jsx("a", {
                  href: "https://bsky.app/profile/bluetalkdev.bsky.social",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-gray-400 hover:text-white transition-colors",
                  children: M.jsx(ny, { className: "w-5 h-5" }),
                }),
                M.jsx("a", {
                  href: "https://github.com/blueDevTalk",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-gray-400 hover:text-white transition-colors",
                  children: M.jsx(ty, { className: "w-5 h-5" }),
                }),
              ],
            }),
            M.jsx("div", {
              className: "text-gray-500 text-xs text-center md:text-right",
              children: M.jsxs("p", {
                children: [
                  "Bluesky™ and GEMINI™ are trademarks of their respective owners.",
                  M.jsx("br", {}),
                  "This is a fan-made project, not affiliated with Bluesky or Google.",
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  iy = () =>
    M.jsxs("main", {
      className: `relative min-h-screen w-screen
     overflow-x-hidden`,
      children: [
        M.jsx(qv, {}),
        M.jsx($v, {}),
        M.jsx(Wv, {}),
        M.jsx(ey, {}),
        M.jsx(ry, {}),
      ],
    });
e1.createRoot(document.getElementById("root")).render(
  M.jsx(Be.StrictMode, { children: M.jsx(iy, {}) })
);

var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_frontend = __commonJS({
  "frontend.js"(exports, module) {
    var _a;
    function _mergeNamespaces(n2, m2) {
      for (var i = 0; i < m2.length; i++) {
        const e2 = m2[i];
        if (typeof e2 !== "string" && !Array.isArray(e2)) {
          for (const k2 in e2) {
            if (k2 !== "default" && !(k2 in n2)) {
              const d2 = Object.getOwnPropertyDescriptor(e2, k2);
              if (d2) {
                Object.defineProperty(n2, k2, d2.get ? d2 : {
                  enumerable: true,
                  get: () => e2[k2]
                });
              }
            }
          }
        }
      }
      return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
    }
    var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    function getDefaultExportFromCjs(x2) {
      return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
    }
    var jsxRuntime = { exports: {} };
    var reactJsxRuntime_production_min = {};
    var react = { exports: {} };
    var react_production_min = {};
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var l$3 = Symbol.for("react.element"), n$4 = Symbol.for("react.portal"), p$5 = Symbol.for("react.fragment"), q$5 = Symbol.for("react.strict_mode"), r$2 = Symbol.for("react.profiler"), t$3 = Symbol.for("react.provider"), u$3 = Symbol.for("react.context"), v$3 = Symbol.for("react.forward_ref"), w$2 = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$2 = Symbol.iterator;
    function A$2(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z$2 && a[z$2] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B$1 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, C$1 = Object.assign, D$1 = {};
    function E$1(a, b2, e2) {
      this.props = a;
      this.context = b2;
      this.refs = D$1;
      this.updater = e2 || B$1;
    }
    E$1.prototype.isReactComponent = {};
    E$1.prototype.setState = function(a, b2) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b2, "setState");
    };
    E$1.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F$1() {
    }
    F$1.prototype = E$1.prototype;
    function G$1(a, b2, e2) {
      this.props = a;
      this.context = b2;
      this.refs = D$1;
      this.updater = e2 || B$1;
    }
    var H$2 = G$1.prototype = new F$1();
    H$2.constructor = G$1;
    C$1(H$2, E$1.prototype);
    H$2.isPureReactComponent = true;
    var I$2 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$2 = { current: null }, L$2 = { key: true, ref: true, __self: true, __source: true };
    function M$1(a, b2, e2) {
      var d2, c2 = {}, k2 = null, h2 = null;
      if (null != b2) for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J$1.call(b2, d2) && !L$2.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
      var g2 = arguments.length - 2;
      if (1 === g2) c2.children = e2;
      else if (1 < g2) {
        for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
        c2.children = f2;
      }
      if (a && a.defaultProps) for (d2 in g2 = a.defaultProps, g2) void 0 === c2[d2] && (c2[d2] = g2[d2]);
      return { $$typeof: l$3, type: a, key: k2, ref: h2, props: c2, _owner: K$2.current };
    }
    function N$2(a, b2) {
      return { $$typeof: l$3, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O$2(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l$3;
    }
    function escape(a) {
      var b2 = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b2[a2];
      });
    }
    var P$1 = /\/+/g;
    function Q$2(a, b2) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b2.toString(36);
    }
    function R$2(a, b2, e2, d2, c2) {
      var k2 = typeof a;
      if ("undefined" === k2 || "boolean" === k2) a = null;
      var h2 = false;
      if (null === a) h2 = true;
      else switch (k2) {
        case "string":
        case "number":
          h2 = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l$3:
            case n$4:
              h2 = true;
          }
      }
      if (h2) return h2 = a, c2 = c2(h2), a = "" === d2 ? "." + Q$2(h2, 0) : d2, I$2(c2) ? (e2 = "", null != a && (e2 = a.replace(P$1, "$&/") + "/"), R$2(c2, b2, e2, "", function(a2) {
        return a2;
      })) : null != c2 && (O$2(c2) && (c2 = N$2(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$1, "$&/") + "/") + a)), b2.push(c2)), 1;
      h2 = 0;
      d2 = "" === d2 ? "." : d2 + ":";
      if (I$2(a)) for (var g2 = 0; g2 < a.length; g2++) {
        k2 = a[g2];
        var f2 = d2 + Q$2(k2, g2);
        h2 += R$2(k2, b2, e2, f2, c2);
      }
      else if (f2 = A$2(a), "function" === typeof f2) for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d2 + Q$2(k2, g2++), h2 += R$2(k2, b2, e2, f2, c2);
      else if ("object" === k2) throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
      return h2;
    }
    function S$1(a, b2, e2) {
      if (null == a) return a;
      var d2 = [], c2 = 0;
      R$2(a, d2, "", "", function(a2) {
        return b2.call(e2, a2, c2++);
      });
      return d2;
    }
    function T$1(a) {
      if (-1 === a._status) {
        var b2 = a._result;
        b2 = b2();
        b2.then(function(b3) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b3;
        }, function(b3) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b3;
        });
        -1 === a._status && (a._status = 0, a._result = b2);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U$2 = { current: null }, V$2 = { transition: null }, W$2 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$2, ReactCurrentOwner: K$2 };
    function X$1() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    react_production_min.Children = { map: S$1, forEach: function(a, b2, e2) {
      S$1(a, function() {
        b2.apply(this, arguments);
      }, e2);
    }, count: function(a) {
      var b2 = 0;
      S$1(a, function() {
        b2++;
      });
      return b2;
    }, toArray: function(a) {
      return S$1(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O$2(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    react_production_min.Component = E$1;
    react_production_min.Fragment = p$5;
    react_production_min.Profiler = r$2;
    react_production_min.PureComponent = G$1;
    react_production_min.StrictMode = q$5;
    react_production_min.Suspense = w$2;
    react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
    react_production_min.act = X$1;
    react_production_min.cloneElement = function(a, b2, e2) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d2 = C$1({}, a.props), c2 = a.key, k2 = a.ref, h2 = a._owner;
      if (null != b2) {
        void 0 !== b2.ref && (k2 = b2.ref, h2 = K$2.current);
        void 0 !== b2.key && (c2 = "" + b2.key);
        if (a.type && a.type.defaultProps) var g2 = a.type.defaultProps;
        for (f2 in b2) J$1.call(b2, f2) && !L$2.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
      }
      var f2 = arguments.length - 2;
      if (1 === f2) d2.children = e2;
      else if (1 < f2) {
        g2 = Array(f2);
        for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
        d2.children = g2;
      }
      return { $$typeof: l$3, type: a.type, key: c2, ref: k2, props: d2, _owner: h2 };
    };
    react_production_min.createContext = function(a) {
      a = { $$typeof: u$3, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t$3, _context: a };
      return a.Consumer = a;
    };
    react_production_min.createElement = M$1;
    react_production_min.createFactory = function(a) {
      var b2 = M$1.bind(null, a);
      b2.type = a;
      return b2;
    };
    react_production_min.createRef = function() {
      return { current: null };
    };
    react_production_min.forwardRef = function(a) {
      return { $$typeof: v$3, render: a };
    };
    react_production_min.isValidElement = O$2;
    react_production_min.lazy = function(a) {
      return { $$typeof: y$1, _payload: { _status: -1, _result: a }, _init: T$1 };
    };
    react_production_min.memo = function(a, b2) {
      return { $$typeof: x, type: a, compare: void 0 === b2 ? null : b2 };
    };
    react_production_min.startTransition = function(a) {
      var b2 = V$2.transition;
      V$2.transition = {};
      try {
        a();
      } finally {
        V$2.transition = b2;
      }
    };
    react_production_min.unstable_act = X$1;
    react_production_min.useCallback = function(a, b2) {
      return U$2.current.useCallback(a, b2);
    };
    react_production_min.useContext = function(a) {
      return U$2.current.useContext(a);
    };
    react_production_min.useDebugValue = function() {
    };
    react_production_min.useDeferredValue = function(a) {
      return U$2.current.useDeferredValue(a);
    };
    react_production_min.useEffect = function(a, b2) {
      return U$2.current.useEffect(a, b2);
    };
    react_production_min.useId = function() {
      return U$2.current.useId();
    };
    react_production_min.useImperativeHandle = function(a, b2, e2) {
      return U$2.current.useImperativeHandle(a, b2, e2);
    };
    react_production_min.useInsertionEffect = function(a, b2) {
      return U$2.current.useInsertionEffect(a, b2);
    };
    react_production_min.useLayoutEffect = function(a, b2) {
      return U$2.current.useLayoutEffect(a, b2);
    };
    react_production_min.useMemo = function(a, b2) {
      return U$2.current.useMemo(a, b2);
    };
    react_production_min.useReducer = function(a, b2, e2) {
      return U$2.current.useReducer(a, b2, e2);
    };
    react_production_min.useRef = function(a) {
      return U$2.current.useRef(a);
    };
    react_production_min.useState = function(a) {
      return U$2.current.useState(a);
    };
    react_production_min.useSyncExternalStore = function(a, b2, e2) {
      return U$2.current.useSyncExternalStore(a, b2, e2);
    };
    react_production_min.useTransition = function() {
      return U$2.current.useTransition();
    };
    react_production_min.version = "18.3.1";
    {
      react.exports = react_production_min;
    }
    var reactExports = react.exports;
    const ReactExports = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
    const React$1 = /* @__PURE__ */ _mergeNamespaces({
      __proto__: null,
      default: ReactExports
    }, [reactExports]);
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var f$1 = reactExports, k$2 = Symbol.for("react.element"), l$2 = Symbol.for("react.fragment"), m$3 = Object.prototype.hasOwnProperty, n$3 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$4 = { key: true, ref: true, __self: true, __source: true };
    function q$4(c2, a, g2) {
      var b2, d2 = {}, e2 = null, h2 = null;
      void 0 !== g2 && (e2 = "" + g2);
      void 0 !== a.key && (e2 = "" + a.key);
      void 0 !== a.ref && (h2 = a.ref);
      for (b2 in a) m$3.call(a, b2) && !p$4.hasOwnProperty(b2) && (d2[b2] = a[b2]);
      if (c2 && c2.defaultProps) for (b2 in a = c2.defaultProps, a) void 0 === d2[b2] && (d2[b2] = a[b2]);
      return { $$typeof: k$2, type: c2, key: e2, ref: h2, props: d2, _owner: n$3.current };
    }
    reactJsxRuntime_production_min.Fragment = l$2;
    reactJsxRuntime_production_min.jsx = q$4;
    reactJsxRuntime_production_min.jsxs = q$4;
    {
      jsxRuntime.exports = reactJsxRuntime_production_min;
    }
    var jsxRuntimeExports = jsxRuntime.exports;
    var reactDom = { exports: {} };
    var reactDom_production_min = {};
    var scheduler = { exports: {} };
    var scheduler_production_min = {};
    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function(exports2) {
      function f2(a, b2) {
        var c2 = a.length;
        a.push(b2);
        a: for (; 0 < c2; ) {
          var d2 = c2 - 1 >>> 1, e2 = a[d2];
          if (0 < g2(e2, b2)) a[d2] = b2, a[c2] = e2, c2 = d2;
          else break a;
        }
      }
      function h2(a) {
        return 0 === a.length ? null : a[0];
      }
      function k2(a) {
        if (0 === a.length) return null;
        var b2 = a[0], c2 = a.pop();
        if (c2 !== b2) {
          a[0] = c2;
          a: for (var d2 = 0, e2 = a.length, w2 = e2 >>> 1; d2 < w2; ) {
            var m2 = 2 * (d2 + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
            if (0 > g2(C2, c2)) n2 < e2 && 0 > g2(x2, C2) ? (a[d2] = x2, a[n2] = c2, d2 = n2) : (a[d2] = C2, a[m2] = c2, d2 = m2);
            else if (n2 < e2 && 0 > g2(x2, c2)) a[d2] = x2, a[n2] = c2, d2 = n2;
            else break a;
          }
        }
        return b2;
      }
      function g2(a, b2) {
        var c2 = a.sortIndex - b2.sortIndex;
        return 0 !== c2 ? c2 : a.id - b2.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        var l2 = performance;
        exports2.unstable_now = function() {
          return l2.now();
        };
      } else {
        var p2 = Date, q2 = p2.now();
        exports2.unstable_now = function() {
          return p2.now() - q2;
        };
      }
      var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a) {
        for (var b2 = h2(t2); null !== b2; ) {
          if (null === b2.callback) k2(t2);
          else if (b2.startTime <= a) k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
          else break;
          b2 = h2(t2);
        }
      }
      function H2(a) {
        B2 = false;
        G2(a);
        if (!A2) if (null !== h2(r2)) A2 = true, I2(J2);
        else {
          var b2 = h2(t2);
          null !== b2 && K2(H2, b2.startTime - a);
        }
      }
      function J2(a, b2) {
        A2 = false;
        B2 && (B2 = false, E2(L2), L2 = -1);
        z2 = true;
        var c2 = y2;
        try {
          G2(b2);
          for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a && !M2()); ) {
            var d2 = v2.callback;
            if ("function" === typeof d2) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e2 = d2(v2.expirationTime <= b2);
              b2 = exports2.unstable_now();
              "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
              G2(b2);
            } else k2(r2);
            v2 = h2(r2);
          }
          if (null !== v2) var w2 = true;
          else {
            var m2 = h2(t2);
            null !== m2 && K2(H2, m2.startTime - b2);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y2 = c2, z2 = false;
        }
      }
      var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
      function M2() {
        return exports2.unstable_now() - Q2 < P2 ? false : true;
      }
      function R2() {
        if (null !== O2) {
          var a = exports2.unstable_now();
          Q2 = a;
          var b2 = true;
          try {
            b2 = O2(true, a);
          } finally {
            b2 ? S2() : (N2 = false, O2 = null);
          }
        } else N2 = false;
      }
      var S2;
      if ("function" === typeof F2) S2 = function() {
        F2(R2);
      };
      else if ("undefined" !== typeof MessageChannel) {
        var T2 = new MessageChannel(), U2 = T2.port2;
        T2.port1.onmessage = R2;
        S2 = function() {
          U2.postMessage(null);
        };
      } else S2 = function() {
        D2(R2, 0);
      };
      function I2(a) {
        O2 = a;
        N2 || (N2 = true, S2());
      }
      function K2(a, b2) {
        L2 = D2(function() {
          a(exports2.unstable_now());
        }, b2);
      }
      exports2.unstable_IdlePriority = 5;
      exports2.unstable_ImmediatePriority = 1;
      exports2.unstable_LowPriority = 4;
      exports2.unstable_NormalPriority = 3;
      exports2.unstable_Profiling = null;
      exports2.unstable_UserBlockingPriority = 2;
      exports2.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports2.unstable_continueExecution = function() {
        A2 || z2 || (A2 = true, I2(J2));
      };
      exports2.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports2.unstable_getCurrentPriorityLevel = function() {
        return y2;
      };
      exports2.unstable_getFirstCallbackNode = function() {
        return h2(r2);
      };
      exports2.unstable_next = function(a) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b2 = 3;
            break;
          default:
            b2 = y2;
        }
        var c2 = y2;
        y2 = b2;
        try {
          return a();
        } finally {
          y2 = c2;
        }
      };
      exports2.unstable_pauseExecution = function() {
      };
      exports2.unstable_requestPaint = function() {
      };
      exports2.unstable_runWithPriority = function(a, b2) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c2 = y2;
        y2 = a;
        try {
          return b2();
        } finally {
          y2 = c2;
        }
      };
      exports2.unstable_scheduleCallback = function(a, b2, c2) {
        var d2 = exports2.unstable_now();
        "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
        switch (a) {
          case 1:
            var e2 = -1;
            break;
          case 2:
            e2 = 250;
            break;
          case 5:
            e2 = 1073741823;
            break;
          case 4:
            e2 = 1e4;
            break;
          default:
            e2 = 5e3;
        }
        e2 = c2 + e2;
        a = { id: u2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e2, sortIndex: -1 };
        c2 > d2 ? (a.sortIndex = c2, f2(t2, a), null === h2(r2) && a === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a.sortIndex = e2, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
        return a;
      };
      exports2.unstable_shouldYield = M2;
      exports2.unstable_wrapCallback = function(a) {
        var b2 = y2;
        return function() {
          var c2 = y2;
          y2 = b2;
          try {
            return a.apply(this, arguments);
          } finally {
            y2 = c2;
          }
        };
      };
    })(scheduler_production_min);
    {
      scheduler.exports = scheduler_production_min;
    }
    var schedulerExports = scheduler.exports;
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var aa = reactExports, ca = schedulerExports;
    function p$3(a) {
      for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
      return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var da = /* @__PURE__ */ new Set(), ea = {};
    function fa(a, b2) {
      ha(a, b2);
      ha(a + "Capture", b2);
    }
    function ha(a, b2) {
      ea[a] = b2;
      for (a = 0; a < b2.length; a++) da.add(b2[a]);
    }
    var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
    function oa(a) {
      if (ja.call(ma, a)) return true;
      if (ja.call(la, a)) return false;
      if (ka.test(a)) return ma[a] = true;
      la[a] = true;
      return false;
    }
    function pa(a, b2, c2, d2) {
      if (null !== c2 && 0 === c2.type) return false;
      switch (typeof b2) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d2) return false;
          if (null !== c2) return !c2.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return "data-" !== a && "aria-" !== a;
        default:
          return false;
      }
    }
    function qa(a, b2, c2, d2) {
      if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c2, d2)) return true;
      if (d2) return false;
      if (null !== c2) switch (c2.type) {
        case 3:
          return !b2;
        case 4:
          return false === b2;
        case 5:
          return isNaN(b2);
        case 6:
          return isNaN(b2) || 1 > b2;
      }
      return false;
    }
    function v$2(a, b2, c2, d2, e2, f2, g2) {
      this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
      this.attributeName = d2;
      this.attributeNamespace = e2;
      this.mustUseProperty = c2;
      this.propertyName = a;
      this.type = b2;
      this.sanitizeURL = f2;
      this.removeEmptyString = g2;
    }
    var z$1 = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      z$1[a] = new v$2(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b2 = a[0];
      z$1[b2] = new v$2(b2, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      z$1[a] = new v$2(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      z$1[a] = new v$2(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      z$1[a] = new v$2(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      z$1[a] = new v$2(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      z$1[a] = new v$2(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      z$1[a] = new v$2(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      z$1[a] = new v$2(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ra = /[\-:]([a-z])/g;
    function sa(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b2 = a.replace(
        ra,
        sa
      );
      z$1[b2] = new v$2(b2, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b2 = a.replace(ra, sa);
      z$1[b2] = new v$2(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b2 = a.replace(ra, sa);
      z$1[b2] = new v$2(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      z$1[a] = new v$2(a, 1, false, a.toLowerCase(), null, false, false);
    });
    z$1.xlinkHref = new v$2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      z$1[a] = new v$2(a, 1, false, a.toLowerCase(), null, true, true);
    });
    function ta(a, b2, c2, d2) {
      var e2 = z$1.hasOwnProperty(b2) ? z$1[b2] : null;
      if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2)));
    }
    var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
    var Ia = Symbol.for("react.offscreen");
    var Ja = Symbol.iterator;
    function Ka(a) {
      if (null === a || "object" !== typeof a) return null;
      a = Ja && a[Ja] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var A$1 = Object.assign, La;
    function Ma(a) {
      if (void 0 === La) try {
        throw Error();
      } catch (c2) {
        var b2 = c2.stack.trim().match(/\n( *(at )?)/);
        La = b2 && b2[1] || "";
      }
      return "\n" + La + a;
    }
    var Na = false;
    function Oa(a, b2) {
      if (!a || Na) return "";
      Na = true;
      var c2 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b2) if (b2 = function() {
          throw Error();
        }, Object.defineProperty(b2.prototype, "props", { set: function() {
          throw Error();
        } }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b2, []);
          } catch (l2) {
            var d2 = l2;
          }
          Reflect.construct(a, [], b2);
        } else {
          try {
            b2.call();
          } catch (l2) {
            d2 = l2;
          }
          a.call(b2.prototype);
        }
        else {
          try {
            throw Error();
          } catch (l2) {
            d2 = l2;
          }
          a();
        }
      } catch (l2) {
        if (l2 && d2 && "string" === typeof l2.stack) {
          for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; ) h2--;
          for (; 1 <= g2 && 0 <= h2; g2--, h2--) if (e2[g2] !== f2[h2]) {
            if (1 !== g2 || 1 !== h2) {
              do
                if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                  var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                  a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                  return k2;
                }
              while (1 <= g2 && 0 <= h2);
            }
            break;
          }
        }
      } finally {
        Na = false, Error.prepareStackTrace = c2;
      }
      return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
    }
    function Pa(a) {
      switch (a.tag) {
        case 5:
          return Ma(a.type);
        case 16:
          return Ma("Lazy");
        case 13:
          return Ma("Suspense");
        case 19:
          return Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a = Oa(a.type, false), a;
        case 11:
          return a = Oa(a.type.render, false), a;
        case 1:
          return a = Oa(a.type, true), a;
        default:
          return "";
      }
    }
    function Qa(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case ya:
          return "Fragment";
        case wa:
          return "Portal";
        case Aa:
          return "Profiler";
        case za:
          return "StrictMode";
        case Ea:
          return "Suspense";
        case Fa:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Ca:
          return (a.displayName || "Context") + ".Consumer";
        case Ba:
          return (a._context.displayName || "Context") + ".Provider";
        case Da:
          var b2 = a.render;
          a = a.displayName;
          a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Ga:
          return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
        case Ha:
          b2 = a._payload;
          a = a._init;
          try {
            return Qa(a(b2));
          } catch (c2) {
          }
      }
      return null;
    }
    function Ra(a) {
      var b2 = a.type;
      switch (a.tag) {
        case 24:
          return "Cache";
        case 9:
          return (b2.displayName || "Context") + ".Consumer";
        case 10:
          return (b2._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return b2;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Qa(b2);
        case 8:
          return b2 === za ? "StrictMode" : "Mode";
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
          if ("function" === typeof b2) return b2.displayName || b2.name || null;
          if ("string" === typeof b2) return b2;
      }
      return null;
    }
    function Sa(a) {
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a;
        case "object":
          return a;
        default:
          return "";
      }
    }
    function Ta(a) {
      var b2 = a.type;
      return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
    }
    function Ua(a) {
      var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
      if (!a.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
        var e2 = c2.get, f2 = c2.set;
        Object.defineProperty(a, b2, { configurable: true, get: function() {
          return e2.call(this);
        }, set: function(a2) {
          d2 = "" + a2;
          f2.call(this, a2);
        } });
        Object.defineProperty(a, b2, { enumerable: c2.enumerable });
        return { getValue: function() {
          return d2;
        }, setValue: function(a2) {
          d2 = "" + a2;
        }, stopTracking: function() {
          a._valueTracker = null;
          delete a[b2];
        } };
      }
    }
    function Va(a) {
      a._valueTracker || (a._valueTracker = Ua(a));
    }
    function Wa(a) {
      if (!a) return false;
      var b2 = a._valueTracker;
      if (!b2) return true;
      var c2 = b2.getValue();
      var d2 = "";
      a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
      a = d2;
      return a !== c2 ? (b2.setValue(a), true) : false;
    }
    function Xa(a) {
      a = a || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof a) return null;
      try {
        return a.activeElement || a.body;
      } catch (b2) {
        return a.body;
      }
    }
    function Ya(a, b2) {
      var c2 = b2.checked;
      return A$1({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a._wrapperState.initialChecked });
    }
    function Za(a, b2) {
      var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
      c2 = Sa(null != b2.value ? b2.value : c2);
      a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
    }
    function ab(a, b2) {
      b2 = b2.checked;
      null != b2 && ta(a, "checked", b2, false);
    }
    function bb(a, b2) {
      ab(a, b2);
      var c2 = Sa(b2.value), d2 = b2.type;
      if (null != c2) if ("number" === d2) {
        if (0 === c2 && "" === a.value || a.value != c2) a.value = "" + c2;
      } else a.value !== "" + c2 && (a.value = "" + c2);
      else if ("submit" === d2 || "reset" === d2) {
        a.removeAttribute("value");
        return;
      }
      b2.hasOwnProperty("value") ? cb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa(b2.defaultValue));
      null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
    }
    function db(a, b2, c2) {
      if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
        var d2 = b2.type;
        if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value)) return;
        b2 = "" + a._wrapperState.initialValue;
        c2 || b2 === a.value || (a.value = b2);
        a.defaultValue = b2;
      }
      c2 = a.name;
      "" !== c2 && (a.name = "");
      a.defaultChecked = !!a._wrapperState.initialChecked;
      "" !== c2 && (a.name = c2);
    }
    function cb(a, b2, c2) {
      if ("number" !== b2 || Xa(a.ownerDocument) !== a) null == c2 ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
    }
    var eb = Array.isArray;
    function fb(a, b2, c2, d2) {
      a = a.options;
      if (b2) {
        b2 = {};
        for (var e2 = 0; e2 < c2.length; e2++) b2["$" + c2[e2]] = true;
        for (c2 = 0; c2 < a.length; c2++) e2 = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e2 && (a[c2].selected = e2), e2 && d2 && (a[c2].defaultSelected = true);
      } else {
        c2 = "" + Sa(c2);
        b2 = null;
        for (e2 = 0; e2 < a.length; e2++) {
          if (a[e2].value === c2) {
            a[e2].selected = true;
            d2 && (a[e2].defaultSelected = true);
            return;
          }
          null !== b2 || a[e2].disabled || (b2 = a[e2]);
        }
        null !== b2 && (b2.selected = true);
      }
    }
    function gb(a, b2) {
      if (null != b2.dangerouslySetInnerHTML) throw Error(p$3(91));
      return A$1({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
    }
    function hb(a, b2) {
      var c2 = b2.value;
      if (null == c2) {
        c2 = b2.children;
        b2 = b2.defaultValue;
        if (null != c2) {
          if (null != b2) throw Error(p$3(92));
          if (eb(c2)) {
            if (1 < c2.length) throw Error(p$3(93));
            c2 = c2[0];
          }
          b2 = c2;
        }
        null == b2 && (b2 = "");
        c2 = b2;
      }
      a._wrapperState = { initialValue: Sa(c2) };
    }
    function ib(a, b2) {
      var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
      null != c2 && (c2 = "" + c2, c2 !== a.value && (a.value = c2), null == b2.defaultValue && a.defaultValue !== c2 && (a.defaultValue = c2));
      null != d2 && (a.defaultValue = "" + d2);
    }
    function jb(a) {
      var b2 = a.textContent;
      b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
    }
    function kb(a) {
      switch (a) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function lb(a, b2) {
      return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
    }
    var mb, nb = function(a) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
        MSApp.execUnsafeLocalFunction(function() {
          return a(b2, c2, d2, e2);
        });
      } : a;
    }(function(a, b2) {
      if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b2;
      else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
        for (b2 = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
        for (; b2.firstChild; ) a.appendChild(b2.firstChild);
      }
    });
    function ob(a, b2) {
      if (b2) {
        var c2 = a.firstChild;
        if (c2 && c2 === a.lastChild && 3 === c2.nodeType) {
          c2.nodeValue = b2;
          return;
        }
      }
      a.textContent = b2;
    }
    var pb = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    }, qb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pb).forEach(function(a) {
      qb.forEach(function(b2) {
        b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
        pb[b2] = pb[a];
      });
    });
    function rb(a, b2, c2) {
      return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
    }
    function sb(a, b2) {
      a = a.style;
      for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
        var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
        "float" === c2 && (c2 = "cssFloat");
        d2 ? a.setProperty(c2, e2) : a[c2] = e2;
      }
    }
    var tb = A$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function ub(a, b2) {
      if (b2) {
        if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p$3(137, a));
        if (null != b2.dangerouslySetInnerHTML) {
          if (null != b2.children) throw Error(p$3(60));
          if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p$3(61));
        }
        if (null != b2.style && "object" !== typeof b2.style) throw Error(p$3(62));
      }
    }
    function vb(a, b2) {
      if (-1 === a.indexOf("-")) return "string" === typeof b2.is;
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var wb = null;
    function xb(a) {
      a = a.target || a.srcElement || window;
      a.correspondingUseElement && (a = a.correspondingUseElement);
      return 3 === a.nodeType ? a.parentNode : a;
    }
    var yb = null, zb = null, Ab = null;
    function Bb(a) {
      if (a = Cb(a)) {
        if ("function" !== typeof yb) throw Error(p$3(280));
        var b2 = a.stateNode;
        b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
      }
    }
    function Eb(a) {
      zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
    }
    function Fb() {
      if (zb) {
        var a = zb, b2 = Ab;
        Ab = zb = null;
        Bb(a);
        if (b2) for (a = 0; a < b2.length; a++) Bb(b2[a]);
      }
    }
    function Gb(a, b2) {
      return a(b2);
    }
    function Hb() {
    }
    var Ib = false;
    function Jb(a, b2, c2) {
      if (Ib) return a(b2, c2);
      Ib = true;
      try {
        return Gb(a, b2, c2);
      } finally {
        if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
      }
    }
    function Kb(a, b2) {
      var c2 = a.stateNode;
      if (null === c2) return null;
      var d2 = Db(c2);
      if (null === d2) return null;
      c2 = d2[b2];
      a: switch (b2) {
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
          (d2 = !d2.disabled) || (a = a.type, d2 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
          a = !d2;
          break a;
        default:
          a = false;
      }
      if (a) return null;
      if (c2 && "function" !== typeof c2) throw Error(p$3(231, b2, typeof c2));
      return c2;
    }
    var Lb = false;
    if (ia) try {
      var Mb = {};
      Object.defineProperty(Mb, "passive", { get: function() {
        Lb = true;
      } });
      window.addEventListener("test", Mb, Mb);
      window.removeEventListener("test", Mb, Mb);
    } catch (a) {
      Lb = false;
    }
    function Nb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      var l2 = Array.prototype.slice.call(arguments, 3);
      try {
        b2.apply(c2, l2);
      } catch (m2) {
        this.onError(m2);
      }
    }
    var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
      Ob = true;
      Pb = a;
    } };
    function Tb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      Ob = false;
      Pb = null;
      Nb.apply(Sb, arguments);
    }
    function Ub(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      Tb.apply(this, arguments);
      if (Ob) {
        if (Ob) {
          var l2 = Pb;
          Ob = false;
          Pb = null;
        } else throw Error(p$3(198));
        Qb || (Qb = true, Rb = l2);
      }
    }
    function Vb(a) {
      var b2 = a, c2 = a;
      if (a.alternate) for (; b2.return; ) b2 = b2.return;
      else {
        a = b2;
        do
          b2 = a, 0 !== (b2.flags & 4098) && (c2 = b2.return), a = b2.return;
        while (a);
      }
      return 3 === b2.tag ? c2 : null;
    }
    function Wb(a) {
      if (13 === a.tag) {
        var b2 = a.memoizedState;
        null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
        if (null !== b2) return b2.dehydrated;
      }
      return null;
    }
    function Xb(a) {
      if (Vb(a) !== a) throw Error(p$3(188));
    }
    function Yb(a) {
      var b2 = a.alternate;
      if (!b2) {
        b2 = Vb(a);
        if (null === b2) throw Error(p$3(188));
        return b2 !== a ? null : a;
      }
      for (var c2 = a, d2 = b2; ; ) {
        var e2 = c2.return;
        if (null === e2) break;
        var f2 = e2.alternate;
        if (null === f2) {
          d2 = e2.return;
          if (null !== d2) {
            c2 = d2;
            continue;
          }
          break;
        }
        if (e2.child === f2.child) {
          for (f2 = e2.child; f2; ) {
            if (f2 === c2) return Xb(e2), a;
            if (f2 === d2) return Xb(e2), b2;
            f2 = f2.sibling;
          }
          throw Error(p$3(188));
        }
        if (c2.return !== d2.return) c2 = e2, d2 = f2;
        else {
          for (var g2 = false, h2 = e2.child; h2; ) {
            if (h2 === c2) {
              g2 = true;
              c2 = e2;
              d2 = f2;
              break;
            }
            if (h2 === d2) {
              g2 = true;
              d2 = e2;
              c2 = f2;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g2) {
            for (h2 = f2.child; h2; ) {
              if (h2 === c2) {
                g2 = true;
                c2 = f2;
                d2 = e2;
                break;
              }
              if (h2 === d2) {
                g2 = true;
                d2 = f2;
                c2 = e2;
                break;
              }
              h2 = h2.sibling;
            }
            if (!g2) throw Error(p$3(189));
          }
        }
        if (c2.alternate !== d2) throw Error(p$3(190));
      }
      if (3 !== c2.tag) throw Error(p$3(188));
      return c2.stateNode.current === c2 ? a : b2;
    }
    function Zb(a) {
      a = Yb(a);
      return null !== a ? $b(a) : null;
    }
    function $b(a) {
      if (5 === a.tag || 6 === a.tag) return a;
      for (a = a.child; null !== a; ) {
        var b2 = $b(a);
        if (null !== b2) return b2;
        a = a.sibling;
      }
      return null;
    }
    var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
    function mc(a) {
      if (lc && "function" === typeof lc.onCommitFiberRoot) try {
        lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
      } catch (b2) {
      }
    }
    var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
    function nc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
    }
    var rc = 64, sc = 4194304;
    function tc(a) {
      switch (a & -a) {
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
          return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return a & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return a;
      }
    }
    function uc(a, b2) {
      var c2 = a.pendingLanes;
      if (0 === c2) return 0;
      var d2 = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g2 = c2 & 268435455;
      if (0 !== g2) {
        var h2 = g2 & ~e2;
        0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
      } else g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
      if (0 === d2) return 0;
      if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b2;
      0 !== (d2 & 4) && (d2 |= c2 & 16);
      b2 = a.entangledLanes;
      if (0 !== b2) for (a = a.entanglements, b2 &= d2; 0 < b2; ) c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a[c2], b2 &= ~e2;
      return d2;
    }
    function vc(a, b2) {
      switch (a) {
        case 1:
        case 2:
        case 4:
          return b2 + 250;
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
          return b2 + 5e3;
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
    function wc(a, b2) {
      for (var c2 = a.suspendedLanes, d2 = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
        var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
        if (-1 === k2) {
          if (0 === (h2 & c2) || 0 !== (h2 & d2)) e2[g2] = vc(h2, b2);
        } else k2 <= b2 && (a.expiredLanes |= h2);
        f2 &= ~h2;
      }
    }
    function xc(a) {
      a = a.pendingLanes & -1073741825;
      return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
    }
    function yc() {
      var a = rc;
      rc <<= 1;
      0 === (rc & 4194240) && (rc = 64);
      return a;
    }
    function zc(a) {
      for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a);
      return b2;
    }
    function Ac(a, b2, c2) {
      a.pendingLanes |= b2;
      536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
      a = a.eventTimes;
      b2 = 31 - oc(b2);
      a[b2] = c2;
    }
    function Bc(a, b2) {
      var c2 = a.pendingLanes & ~b2;
      a.pendingLanes = b2;
      a.suspendedLanes = 0;
      a.pingedLanes = 0;
      a.expiredLanes &= b2;
      a.mutableReadLanes &= b2;
      a.entangledLanes &= b2;
      b2 = a.entanglements;
      var d2 = a.eventTimes;
      for (a = a.expirationTimes; 0 < c2; ) {
        var e2 = 31 - oc(c2), f2 = 1 << e2;
        b2[e2] = 0;
        d2[e2] = -1;
        a[e2] = -1;
        c2 &= ~f2;
      }
    }
    function Cc(a, b2) {
      var c2 = a.entangledLanes |= b2;
      for (a = a.entanglements; c2; ) {
        var d2 = 31 - oc(c2), e2 = 1 << d2;
        e2 & b2 | a[d2] & b2 && (a[d2] |= b2);
        c2 &= ~e2;
      }
    }
    var C = 0;
    function Dc(a) {
      a &= -a;
      return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
    }
    var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Sc(a, b2) {
      switch (a) {
        case "focusin":
        case "focusout":
          Lc = null;
          break;
        case "dragenter":
        case "dragleave":
          Mc = null;
          break;
        case "mouseover":
        case "mouseout":
          Nc = null;
          break;
        case "pointerover":
        case "pointerout":
          Oc.delete(b2.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pc.delete(b2.pointerId);
      }
    }
    function Tc(a, b2, c2, d2, e2, f2) {
      if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
      a.eventSystemFlags |= d2;
      b2 = a.targetContainers;
      null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
      return a;
    }
    function Uc(a, b2, c2, d2, e2) {
      switch (b2) {
        case "focusin":
          return Lc = Tc(Lc, a, b2, c2, d2, e2), true;
        case "dragenter":
          return Mc = Tc(Mc, a, b2, c2, d2, e2), true;
        case "mouseover":
          return Nc = Tc(Nc, a, b2, c2, d2, e2), true;
        case "pointerover":
          var f2 = e2.pointerId;
          Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c2, d2, e2));
          return true;
        case "gotpointercapture":
          return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c2, d2, e2)), true;
      }
      return false;
    }
    function Vc(a) {
      var b2 = Wc(a.target);
      if (null !== b2) {
        var c2 = Vb(b2);
        if (null !== c2) {
          if (b2 = c2.tag, 13 === b2) {
            if (b2 = Wb(c2), null !== b2) {
              a.blockedOn = b2;
              Ic(a.priority, function() {
                Gc(c2);
              });
              return;
            }
          } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
            a.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function Xc(a) {
      if (null !== a.blockedOn) return false;
      for (var b2 = a.targetContainers; 0 < b2.length; ) {
        var c2 = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
        if (null === c2) {
          c2 = a.nativeEvent;
          var d2 = new c2.constructor(c2.type, c2);
          wb = d2;
          c2.target.dispatchEvent(d2);
          wb = null;
        } else return b2 = Cb(c2), null !== b2 && Fc(b2), a.blockedOn = c2, false;
        b2.shift();
      }
      return true;
    }
    function Zc(a, b2, c2) {
      Xc(a) && c2.delete(b2);
    }
    function $c() {
      Jc = false;
      null !== Lc && Xc(Lc) && (Lc = null);
      null !== Mc && Xc(Mc) && (Mc = null);
      null !== Nc && Xc(Nc) && (Nc = null);
      Oc.forEach(Zc);
      Pc.forEach(Zc);
    }
    function ad(a, b2) {
      a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
    }
    function bd(a) {
      function b2(b3) {
        return ad(b3, a);
      }
      if (0 < Kc.length) {
        ad(Kc[0], a);
        for (var c2 = 1; c2 < Kc.length; c2++) {
          var d2 = Kc[c2];
          d2.blockedOn === a && (d2.blockedOn = null);
        }
      }
      null !== Lc && ad(Lc, a);
      null !== Mc && ad(Mc, a);
      null !== Nc && ad(Nc, a);
      Oc.forEach(b2);
      Pc.forEach(b2);
      for (c2 = 0; c2 < Qc.length; c2++) d2 = Qc[c2], d2.blockedOn === a && (d2.blockedOn = null);
      for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
    }
    var cd = ua.ReactCurrentBatchConfig, dd = true;
    function ed(a, b2, c2, d2) {
      var e2 = C, f2 = cd.transition;
      cd.transition = null;
      try {
        C = 1, fd(a, b2, c2, d2);
      } finally {
        C = e2, cd.transition = f2;
      }
    }
    function gd(a, b2, c2, d2) {
      var e2 = C, f2 = cd.transition;
      cd.transition = null;
      try {
        C = 4, fd(a, b2, c2, d2);
      } finally {
        C = e2, cd.transition = f2;
      }
    }
    function fd(a, b2, c2, d2) {
      if (dd) {
        var e2 = Yc(a, b2, c2, d2);
        if (null === e2) hd(a, b2, d2, id, c2), Sc(a, d2);
        else if (Uc(e2, a, b2, c2, d2)) d2.stopPropagation();
        else if (Sc(a, d2), b2 & 4 && -1 < Rc.indexOf(a)) {
          for (; null !== e2; ) {
            var f2 = Cb(e2);
            null !== f2 && Ec(f2);
            f2 = Yc(a, b2, c2, d2);
            null === f2 && hd(a, b2, d2, id, c2);
            if (f2 === e2) break;
            e2 = f2;
          }
          null !== e2 && d2.stopPropagation();
        } else hd(a, b2, d2, null, c2);
      }
    }
    var id = null;
    function Yc(a, b2, c2, d2) {
      id = null;
      a = xb(d2);
      a = Wc(a);
      if (null !== a) if (b2 = Vb(a), null === b2) a = null;
      else if (c2 = b2.tag, 13 === c2) {
        a = Wb(b2);
        if (null !== a) return a;
        a = null;
      } else if (3 === c2) {
        if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
        a = null;
      } else b2 !== a && (a = null);
      id = a;
      return null;
    }
    function jd(a) {
      switch (a) {
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
          switch (ec()) {
            case fc:
              return 1;
            case gc:
              return 4;
            case hc:
            case ic:
              return 16;
            case jc:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var kd = null, ld = null, md = null;
    function nd() {
      if (md) return md;
      var a, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
      for (a = 0; a < c2 && b2[a] === e2[a]; a++) ;
      var g2 = c2 - a;
      for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++) ;
      return md = e2.slice(a, 1 < d2 ? 1 - d2 : void 0);
    }
    function od(a) {
      var b2 = a.keyCode;
      "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
      10 === a && (a = 13);
      return 32 <= a || 13 === a ? a : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a) {
      function b2(b3, d2, e2, f2, g2) {
        this._reactName = b3;
        this._targetInst = e2;
        this.type = d2;
        this.nativeEvent = f2;
        this.target = g2;
        this.currentTarget = null;
        for (var c2 in a) a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
        this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      A$1(b2.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a2 = this.nativeEvent;
        a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
      }, stopPropagation: function() {
        var a2 = this.nativeEvent;
        a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
      }, persist: function() {
      }, isPersistent: pd });
      return b2;
    }
    var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
      return a.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$1({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$1({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    }, movementX: function(a) {
      if ("movementX" in a) return a.movementX;
      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    }, movementY: function(a) {
      return "movementY" in a ? a.movementY : xd;
    } }), Bd = rd(Ad), Cd = A$1({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$1({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$1({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$1({}, sd, { clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    } }), Jd = rd(Id), Kd = A$1({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
    }, Nd = {
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
    }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Pd(a) {
      var b2 = this.nativeEvent;
      return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = A$1({}, ud, { key: function(a) {
      if (a.key) {
        var b2 = Md[a.key] || a.key;
        if ("Unidentified" !== b2) return b2;
      }
      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
      return "keypress" === a.type ? od(a) : 0;
    }, keyCode: function(a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }, which: function(a) {
      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    } }), Rd = rd(Qd), Sd = A$1({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$1({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$1({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$1({}, Ad, {
      deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      },
      deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be$1 = null;
    ia && "documentMode" in document && (be$1 = document.documentMode);
    var ce$1 = ia && "TextEvent" in window && !be$1, de$1 = ia && (!ae || be$1 && 8 < be$1 && 11 >= be$1), ee = String.fromCharCode(32), fe = false;
    function ge(a, b2) {
      switch (a) {
        case "keyup":
          return -1 !== $d.indexOf(b2.keyCode);
        case "keydown":
          return 229 !== b2.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he$1(a) {
      a = a.detail;
      return "object" === typeof a && "data" in a ? a.data : null;
    }
    var ie = false;
    function je$1(a, b2) {
      switch (a) {
        case "compositionend":
          return he$1(b2);
        case "keypress":
          if (32 !== b2.which) return null;
          fe = true;
          return ee;
        case "textInput":
          return a = b2.data, a === ee && fe ? null : a;
        default:
          return null;
      }
    }
    function ke$1(a, b2) {
      if (ie) return "compositionend" === a || !ae && ge(a, b2) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
            if (b2.char && 1 < b2.char.length) return b2.char;
            if (b2.which) return String.fromCharCode(b2.which);
          }
          return null;
        case "compositionend":
          return de$1 && "ko" !== b2.locale ? null : b2.data;
        default:
          return null;
      }
    }
    var le$1 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function me$1(a) {
      var b2 = a && a.nodeName && a.nodeName.toLowerCase();
      return "input" === b2 ? !!le$1[a.type] : "textarea" === b2 ? true : false;
    }
    function ne$1(a, b2, c2, d2) {
      Eb(d2);
      b2 = oe(b2, "onChange");
      0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
    }
    var pe$1 = null, qe$1 = null;
    function re$1(a) {
      se$1(a, 0);
    }
    function te$1(a) {
      var b2 = ue$1(a);
      if (Wa(b2)) return a;
    }
    function ve(a, b2) {
      if ("change" === a) return b2;
    }
    var we = false;
    if (ia) {
      var xe;
      if (ia) {
        var ye$1 = "oninput" in document;
        if (!ye$1) {
          var ze$1 = document.createElement("div");
          ze$1.setAttribute("oninput", "return;");
          ye$1 = "function" === typeof ze$1.oninput;
        }
        xe = ye$1;
      } else xe = false;
      we = xe && (!document.documentMode || 9 < document.documentMode);
    }
    function Ae() {
      pe$1 && (pe$1.detachEvent("onpropertychange", Be$1), qe$1 = pe$1 = null);
    }
    function Be$1(a) {
      if ("value" === a.propertyName && te$1(qe$1)) {
        var b2 = [];
        ne$1(b2, qe$1, a, xb(a));
        Jb(re$1, b2);
      }
    }
    function Ce$1(a, b2, c2) {
      "focusin" === a ? (Ae(), pe$1 = b2, qe$1 = c2, pe$1.attachEvent("onpropertychange", Be$1)) : "focusout" === a && Ae();
    }
    function De$1(a) {
      if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te$1(qe$1);
    }
    function Ee$1(a, b2) {
      if ("click" === a) return te$1(b2);
    }
    function Fe$1(a, b2) {
      if ("input" === a || "change" === a) return te$1(b2);
    }
    function Ge$1(a, b2) {
      return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
    }
    var He = "function" === typeof Object.is ? Object.is : Ge$1;
    function Ie$1(a, b2) {
      if (He(a, b2)) return true;
      if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2) return false;
      var c2 = Object.keys(a), d2 = Object.keys(b2);
      if (c2.length !== d2.length) return false;
      for (d2 = 0; d2 < c2.length; d2++) {
        var e2 = c2[d2];
        if (!ja.call(b2, e2) || !He(a[e2], b2[e2])) return false;
      }
      return true;
    }
    function Je(a) {
      for (; a && a.firstChild; ) a = a.firstChild;
      return a;
    }
    function Ke$1(a, b2) {
      var c2 = Je(a);
      a = 0;
      for (var d2; c2; ) {
        if (3 === c2.nodeType) {
          d2 = a + c2.textContent.length;
          if (a <= b2 && d2 >= b2) return { node: c2, offset: b2 - a };
          a = d2;
        }
        a: {
          for (; c2; ) {
            if (c2.nextSibling) {
              c2 = c2.nextSibling;
              break a;
            }
            c2 = c2.parentNode;
          }
          c2 = void 0;
        }
        c2 = Je(c2);
      }
    }
    function Le$1(a, b2) {
      return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le$1(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
    }
    function Me() {
      for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
        try {
          var c2 = "string" === typeof b2.contentWindow.location.href;
        } catch (d2) {
          c2 = false;
        }
        if (c2) a = b2.contentWindow;
        else break;
        b2 = Xa(a.document);
      }
      return b2;
    }
    function Ne$1(a) {
      var b2 = a && a.nodeName && a.nodeName.toLowerCase();
      return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
    }
    function Oe$1(a) {
      var b2 = Me(), c2 = a.focusedElem, d2 = a.selectionRange;
      if (b2 !== c2 && c2 && c2.ownerDocument && Le$1(c2.ownerDocument.documentElement, c2)) {
        if (null !== d2 && Ne$1(c2)) {
          if (b2 = d2.start, a = d2.end, void 0 === a && (a = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a, c2.value.length);
          else if (a = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
            d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
            !a.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
            e2 = Ke$1(c2, f2);
            var g2 = Ke$1(
              c2,
              d2
            );
            e2 && g2 && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d2 ? (a.addRange(b2), a.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a.addRange(b2)));
          }
        }
        b2 = [];
        for (a = c2; a = a.parentNode; ) 1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
        "function" === typeof c2.focus && c2.focus();
        for (c2 = 0; c2 < b2.length; c2++) a = b2[c2], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }
    var Pe$1 = ia && "documentMode" in document && 11 >= document.documentMode, Qe$1 = null, Re = null, Se = null, Te$1 = false;
    function Ue$1(a, b2, c2) {
      var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
      Te$1 || null == Qe$1 || Qe$1 !== Xa(d2) || (d2 = Qe$1, "selectionStart" in d2 && Ne$1(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Ie$1(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Qe$1)));
    }
    function Ve(a, b2) {
      var c2 = {};
      c2[a.toLowerCase()] = b2.toLowerCase();
      c2["Webkit" + a] = "webkit" + b2;
      c2["Moz" + a] = "moz" + b2;
      return c2;
    }
    var We$1 = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye$1 = {};
    ia && (Ye$1 = document.createElement("div").style, "AnimationEvent" in window || (delete We$1.animationend.animation, delete We$1.animationiteration.animation, delete We$1.animationstart.animation), "TransitionEvent" in window || delete We$1.transitionend.transition);
    function Ze(a) {
      if (Xe[a]) return Xe[a];
      if (!We$1[a]) return a;
      var b2 = We$1[a], c2;
      for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye$1) return Xe[a] = b2[c2];
      return a;
    }
    var $e$1 = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ff(a, b2) {
      df.set(a, b2);
      fa(b2, [a]);
    }
    for (var gf = 0; gf < ef.length; gf++) {
      var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
      ff(jf, "on" + kf);
    }
    ff($e$1, "onAnimationEnd");
    ff(af, "onAnimationIteration");
    ff(bf, "onAnimationStart");
    ff("dblclick", "onDoubleClick");
    ff("focusin", "onFocus");
    ff("focusout", "onBlur");
    ff(cf, "onTransitionEnd");
    ha("onMouseEnter", ["mouseout", "mouseover"]);
    ha("onMouseLeave", ["mouseout", "mouseover"]);
    ha("onPointerEnter", ["pointerout", "pointerover"]);
    ha("onPointerLeave", ["pointerout", "pointerover"]);
    fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
    function nf(a, b2, c2) {
      var d2 = a.type || "unknown-event";
      a.currentTarget = c2;
      Ub(d2, b2, void 0, a);
      a.currentTarget = null;
    }
    function se$1(a, b2) {
      b2 = 0 !== (b2 & 4);
      for (var c2 = 0; c2 < a.length; c2++) {
        var d2 = a[c2], e2 = d2.event;
        d2 = d2.listeners;
        a: {
          var f2 = void 0;
          if (b2) for (var g2 = d2.length - 1; 0 <= g2; g2--) {
            var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
            h2 = h2.listener;
            if (k2 !== f2 && e2.isPropagationStopped()) break a;
            nf(e2, h2, l2);
            f2 = k2;
          }
          else for (g2 = 0; g2 < d2.length; g2++) {
            h2 = d2[g2];
            k2 = h2.instance;
            l2 = h2.currentTarget;
            h2 = h2.listener;
            if (k2 !== f2 && e2.isPropagationStopped()) break a;
            nf(e2, h2, l2);
            f2 = k2;
          }
        }
      }
      if (Qb) throw a = Rb, Qb = false, Rb = null, a;
    }
    function D(a, b2) {
      var c2 = b2[of];
      void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
      var d2 = a + "__bubble";
      c2.has(d2) || (pf(b2, a, 2, false), c2.add(d2));
    }
    function qf(a, b2, c2) {
      var d2 = 0;
      b2 && (d2 |= 4);
      pf(c2, a, d2, b2);
    }
    var rf = "_reactListening" + Math.random().toString(36).slice(2);
    function sf(a) {
      if (!a[rf]) {
        a[rf] = true;
        da.forEach(function(b3) {
          "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
        });
        var b2 = 9 === a.nodeType ? a : a.ownerDocument;
        null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
      }
    }
    function pf(a, b2, c2, d2) {
      switch (jd(b2)) {
        case 1:
          var e2 = ed;
          break;
        case 4:
          e2 = gd;
          break;
        default:
          e2 = fd;
      }
      c2 = e2.bind(null, b2, c2, a);
      e2 = void 0;
      !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
      d2 ? void 0 !== e2 ? a.addEventListener(b2, c2, { capture: true, passive: e2 }) : a.addEventListener(b2, c2, true) : void 0 !== e2 ? a.addEventListener(b2, c2, { passive: e2 }) : a.addEventListener(b2, c2, false);
    }
    function hd(a, b2, c2, d2, e2) {
      var f2 = d2;
      if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2) a: for (; ; ) {
        if (null === d2) return;
        var g2 = d2.tag;
        if (3 === g2 || 4 === g2) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2) break;
          if (4 === g2) for (g2 = d2.return; null !== g2; ) {
            var k2 = g2.tag;
            if (3 === k2 || 4 === k2) {
              if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2) return;
            }
            g2 = g2.return;
          }
          for (; null !== h2; ) {
            g2 = Wc(h2);
            if (null === g2) return;
            k2 = g2.tag;
            if (5 === k2 || 6 === k2) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
      Jb(function() {
        var d3 = f2, e3 = xb(c2), g3 = [];
        a: {
          var h3 = df.get(a);
          if (void 0 !== h3) {
            var k3 = td, n2 = a;
            switch (a) {
              case "keypress":
                if (0 === od(c2)) break a;
              case "keydown":
              case "keyup":
                k3 = Rd;
                break;
              case "focusin":
                n2 = "focus";
                k3 = Fd;
                break;
              case "focusout":
                n2 = "blur";
                k3 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k3 = Fd;
                break;
              case "click":
                if (2 === c2.button) break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k3 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k3 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k3 = Vd;
                break;
              case $e$1:
              case af:
              case bf:
                k3 = Hd;
                break;
              case cf:
                k3 = Xd;
                break;
              case "scroll":
                k3 = vd;
                break;
              case "wheel":
                k3 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k3 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k3 = Td;
            }
            var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
            t2 = [];
            for (var w2 = d3, u2; null !== w2; ) {
              u2 = w2;
              var F2 = u2.stateNode;
              5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
              if (J2) break;
              w2 = w2.return;
            }
            0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
          }
        }
        if (0 === (b2 & 7)) {
          a: {
            h3 = "mouseover" === a || "pointerover" === a;
            k3 = "mouseout" === a || "pointerout" === a;
            if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf])) break a;
            if (k3 || h3) {
              h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
              if (k3) {
                if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
              } else k3 = null, n2 = d3;
              if (k3 !== n2) {
                t2 = Bd;
                F2 = "onMouseLeave";
                x2 = "onMouseEnter";
                w2 = "mouse";
                if ("pointerout" === a || "pointerover" === a) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
                J2 = null == k3 ? h3 : ue$1(k3);
                u2 = null == n2 ? h3 : ue$1(n2);
                h3 = new t2(F2, w2 + "leave", k3, c2, e3);
                h3.target = J2;
                h3.relatedTarget = u2;
                F2 = null;
                Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
                J2 = F2;
                if (k3 && n2) b: {
                  t2 = k3;
                  x2 = n2;
                  w2 = 0;
                  for (u2 = t2; u2; u2 = vf(u2)) w2++;
                  u2 = 0;
                  for (F2 = x2; F2; F2 = vf(F2)) u2++;
                  for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
                  for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
                  for (; w2--; ) {
                    if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                    t2 = vf(t2);
                    x2 = vf(x2);
                  }
                  t2 = null;
                }
                else t2 = null;
                null !== k3 && wf(g3, h3, k3, t2, false);
                null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
              }
            }
          }
          a: {
            h3 = d3 ? ue$1(d3) : window;
            k3 = h3.nodeName && h3.nodeName.toLowerCase();
            if ("select" === k3 || "input" === k3 && "file" === h3.type) var na = ve;
            else if (me$1(h3)) if (we) na = Fe$1;
            else {
              na = De$1;
              var xa = Ce$1;
            }
            else (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee$1);
            if (na && (na = na(a, d3))) {
              ne$1(g3, na, c2, e3);
              break a;
            }
            xa && xa(a, h3, d3);
            "focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
          }
          xa = d3 ? ue$1(d3) : window;
          switch (a) {
            case "focusin":
              if (me$1(xa) || "true" === xa.contentEditable) Qe$1 = xa, Re = d3, Se = null;
              break;
            case "focusout":
              Se = Re = Qe$1 = null;
              break;
            case "mousedown":
              Te$1 = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Te$1 = false;
              Ue$1(g3, c2, e3);
              break;
            case "selectionchange":
              if (Pe$1) break;
            case "keydown":
            case "keyup":
              Ue$1(g3, c2, e3);
          }
          var $a;
          if (ae) b: {
            switch (a) {
              case "compositionstart":
                var ba = "onCompositionStart";
                break b;
              case "compositionend":
                ba = "onCompositionEnd";
                break b;
              case "compositionupdate":
                ba = "onCompositionUpdate";
                break b;
            }
            ba = void 0;
          }
          else ie ? ge(a, c2) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c2.keyCode && (ba = "onCompositionStart");
          ba && (de$1 && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d3, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he$1(c2), null !== $a && (ba.data = $a))));
          if ($a = ce$1 ? je$1(a, c2) : ke$1(a, c2)) d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
        }
        se$1(g3, b2);
      });
    }
    function tf(a, b2, c2) {
      return { instance: a, listener: b2, currentTarget: c2 };
    }
    function oe(a, b2) {
      for (var c2 = b2 + "Capture", d2 = []; null !== a; ) {
        var e2 = a, f2 = e2.stateNode;
        5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c2), null != f2 && d2.unshift(tf(a, f2, e2)), f2 = Kb(a, b2), null != f2 && d2.push(tf(a, f2, e2)));
        a = a.return;
      }
      return d2;
    }
    function vf(a) {
      if (null === a) return null;
      do
        a = a.return;
      while (a && 5 !== a.tag);
      return a ? a : null;
    }
    function wf(a, b2, c2, d2, e2) {
      for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
        var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
        if (null !== k2 && k2 === d2) break;
        5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
        c2 = c2.return;
      }
      0 !== g2.length && a.push({ event: b2, listeners: g2 });
    }
    var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
    function zf(a) {
      return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
    }
    function Af(a, b2, c2) {
      b2 = zf(b2);
      if (zf(a) !== b2 && c2) throw Error(p$3(425));
    }
    function Bf() {
    }
    var Cf = null, Df = null;
    function Ef(a, b2) {
      return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
    }
    var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
      return Hf.resolve(null).then(a).catch(If);
    } : Ff;
    function If(a) {
      setTimeout(function() {
        throw a;
      });
    }
    function Kf(a, b2) {
      var c2 = b2, d2 = 0;
      do {
        var e2 = c2.nextSibling;
        a.removeChild(c2);
        if (e2 && 8 === e2.nodeType) if (c2 = e2.data, "/$" === c2) {
          if (0 === d2) {
            a.removeChild(e2);
            bd(b2);
            return;
          }
          d2--;
        } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
        c2 = e2;
      } while (c2);
      bd(b2);
    }
    function Lf(a) {
      for (; null != a; a = a.nextSibling) {
        var b2 = a.nodeType;
        if (1 === b2 || 3 === b2) break;
        if (8 === b2) {
          b2 = a.data;
          if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
          if ("/$" === b2) return null;
        }
      }
      return a;
    }
    function Mf(a) {
      a = a.previousSibling;
      for (var b2 = 0; a; ) {
        if (8 === a.nodeType) {
          var c2 = a.data;
          if ("$" === c2 || "$!" === c2 || "$?" === c2) {
            if (0 === b2) return a;
            b2--;
          } else "/$" === c2 && b2++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
    function Wc(a) {
      var b2 = a[Of];
      if (b2) return b2;
      for (var c2 = a.parentNode; c2; ) {
        if (b2 = c2[uf] || c2[Of]) {
          c2 = b2.alternate;
          if (null !== b2.child || null !== c2 && null !== c2.child) for (a = Mf(a); null !== a; ) {
            if (c2 = a[Of]) return c2;
            a = Mf(a);
          }
          return b2;
        }
        a = c2;
        c2 = a.parentNode;
      }
      return null;
    }
    function Cb(a) {
      a = a[Of] || a[uf];
      return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
    }
    function ue$1(a) {
      if (5 === a.tag || 6 === a.tag) return a.stateNode;
      throw Error(p$3(33));
    }
    function Db(a) {
      return a[Pf] || null;
    }
    var Sf = [], Tf = -1;
    function Uf(a) {
      return { current: a };
    }
    function E(a) {
      0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
    }
    function G(a, b2) {
      Tf++;
      Sf[Tf] = a.current;
      a.current = b2;
    }
    var Vf = {}, H$1 = Uf(Vf), Wf = Uf(false), Xf = Vf;
    function Yf(a, b2) {
      var c2 = a.type.contextTypes;
      if (!c2) return Vf;
      var d2 = a.stateNode;
      if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2) return d2.__reactInternalMemoizedMaskedChildContext;
      var e2 = {}, f2;
      for (f2 in c2) e2[f2] = b2[f2];
      d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
      return e2;
    }
    function Zf(a) {
      a = a.childContextTypes;
      return null !== a && void 0 !== a;
    }
    function $f() {
      E(Wf);
      E(H$1);
    }
    function ag(a, b2, c2) {
      if (H$1.current !== Vf) throw Error(p$3(168));
      G(H$1, b2);
      G(Wf, c2);
    }
    function bg(a, b2, c2) {
      var d2 = a.stateNode;
      b2 = b2.childContextTypes;
      if ("function" !== typeof d2.getChildContext) return c2;
      d2 = d2.getChildContext();
      for (var e2 in d2) if (!(e2 in b2)) throw Error(p$3(108, Ra(a) || "Unknown", e2));
      return A$1({}, c2, d2);
    }
    function cg(a) {
      a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
      Xf = H$1.current;
      G(H$1, a);
      G(Wf, Wf.current);
      return true;
    }
    function dg(a, b2, c2) {
      var d2 = a.stateNode;
      if (!d2) throw Error(p$3(169));
      c2 ? (a = bg(a, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H$1), G(H$1, a)) : E(Wf);
      G(Wf, c2);
    }
    var eg = null, fg = false, gg = false;
    function hg(a) {
      null === eg ? eg = [a] : eg.push(a);
    }
    function ig(a) {
      fg = true;
      hg(a);
    }
    function jg() {
      if (!gg && null !== eg) {
        gg = true;
        var a = 0, b2 = C;
        try {
          var c2 = eg;
          for (C = 1; a < c2.length; a++) {
            var d2 = c2[a];
            do
              d2 = d2(true);
            while (null !== d2);
          }
          eg = null;
          fg = false;
        } catch (e2) {
          throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
        } finally {
          C = b2, gg = false;
        }
      }
      return null;
    }
    var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
    function tg(a, b2) {
      kg[lg++] = ng;
      kg[lg++] = mg;
      mg = a;
      ng = b2;
    }
    function ug(a, b2, c2) {
      og[pg++] = rg;
      og[pg++] = sg;
      og[pg++] = qg;
      qg = a;
      var d2 = rg;
      a = sg;
      var e2 = 32 - oc(d2) - 1;
      d2 &= ~(1 << e2);
      c2 += 1;
      var f2 = 32 - oc(b2) + e2;
      if (30 < f2) {
        var g2 = e2 - e2 % 5;
        f2 = (d2 & (1 << g2) - 1).toString(32);
        d2 >>= g2;
        e2 -= g2;
        rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
        sg = f2 + a;
      } else rg = 1 << f2 | c2 << e2 | d2, sg = a;
    }
    function vg(a) {
      null !== a.return && (tg(a, 1), ug(a, 1, 0));
    }
    function wg(a) {
      for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
      for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
    }
    var xg = null, yg = null, I$1 = false, zg = null;
    function Ag(a, b2) {
      var c2 = Bg(5, null, null, 0);
      c2.elementType = "DELETED";
      c2.stateNode = b2;
      c2.return = a;
      b2 = a.deletions;
      null === b2 ? (a.deletions = [c2], a.flags |= 16) : b2.push(c2);
    }
    function Cg(a, b2) {
      switch (a.tag) {
        case 5:
          var c2 = a.type;
          b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
          return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
        case 6:
          return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
        case 13:
          return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a, a.child = c2, xg = a, yg = null, true) : false;
        default:
          return false;
      }
    }
    function Dg(a) {
      return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
    }
    function Eg(a) {
      if (I$1) {
        var b2 = yg;
        if (b2) {
          var c2 = b2;
          if (!Cg(a, b2)) {
            if (Dg(a)) throw Error(p$3(418));
            b2 = Lf(c2.nextSibling);
            var d2 = xg;
            b2 && Cg(a, b2) ? Ag(d2, c2) : (a.flags = a.flags & -4097 | 2, I$1 = false, xg = a);
          }
        } else {
          if (Dg(a)) throw Error(p$3(418));
          a.flags = a.flags & -4097 | 2;
          I$1 = false;
          xg = a;
        }
      }
    }
    function Fg(a) {
      for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
      xg = a;
    }
    function Gg(a) {
      if (a !== xg) return false;
      if (!I$1) return Fg(a), I$1 = true, false;
      var b2;
      (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
      if (b2 && (b2 = yg)) {
        if (Dg(a)) throw Hg(), Error(p$3(418));
        for (; b2; ) Ag(a, b2), b2 = Lf(b2.nextSibling);
      }
      Fg(a);
      if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error(p$3(317));
        a: {
          a = a.nextSibling;
          for (b2 = 0; a; ) {
            if (8 === a.nodeType) {
              var c2 = a.data;
              if ("/$" === c2) {
                if (0 === b2) {
                  yg = Lf(a.nextSibling);
                  break a;
                }
                b2--;
              } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
            }
            a = a.nextSibling;
          }
          yg = null;
        }
      } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
      return true;
    }
    function Hg() {
      for (var a = yg; a; ) a = Lf(a.nextSibling);
    }
    function Ig() {
      yg = xg = null;
      I$1 = false;
    }
    function Jg(a) {
      null === zg ? zg = [a] : zg.push(a);
    }
    var Kg = ua.ReactCurrentBatchConfig;
    function Lg(a, b2, c2) {
      a = c2.ref;
      if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c2._owner) {
          c2 = c2._owner;
          if (c2) {
            if (1 !== c2.tag) throw Error(p$3(309));
            var d2 = c2.stateNode;
          }
          if (!d2) throw Error(p$3(147, a));
          var e2 = d2, f2 = "" + a;
          if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
          b2 = function(a2) {
            var b3 = e2.refs;
            null === a2 ? delete b3[f2] : b3[f2] = a2;
          };
          b2._stringRef = f2;
          return b2;
        }
        if ("string" !== typeof a) throw Error(p$3(284));
        if (!c2._owner) throw Error(p$3(290, a));
      }
      return a;
    }
    function Mg(a, b2) {
      a = Object.prototype.toString.call(b2);
      throw Error(p$3(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
    }
    function Ng(a) {
      var b2 = a._init;
      return b2(a._payload);
    }
    function Og(a) {
      function b2(b3, c3) {
        if (a) {
          var d3 = b3.deletions;
          null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
        }
      }
      function c2(c3, d3) {
        if (!a) return null;
        for (; null !== d3; ) b2(c3, d3), d3 = d3.sibling;
        return null;
      }
      function d2(a2, b3) {
        for (a2 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
        return a2;
      }
      function e2(a2, b3) {
        a2 = Pg(a2, b3);
        a2.index = 0;
        a2.sibling = null;
        return a2;
      }
      function f2(b3, c3, d3) {
        b3.index = d3;
        if (!a) return b3.flags |= 1048576, c3;
        d3 = b3.alternate;
        if (null !== d3) return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
        b3.flags |= 2;
        return c3;
      }
      function g2(b3) {
        a && null === b3.alternate && (b3.flags |= 2);
        return b3;
      }
      function h2(a2, b3, c3, d3) {
        if (null === b3 || 6 !== b3.tag) return b3 = Qg(c3, a2.mode, d3), b3.return = a2, b3;
        b3 = e2(b3, c3);
        b3.return = a2;
        return b3;
      }
      function k2(a2, b3, c3, d3) {
        var f3 = c3.type;
        if (f3 === ya) return m2(a2, b3, c3.props.children, d3, c3.key);
        if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b3.type)) return d3 = e2(b3, c3.props), d3.ref = Lg(a2, b3, c3), d3.return = a2, d3;
        d3 = Rg(c3.type, c3.key, c3.props, null, a2.mode, d3);
        d3.ref = Lg(a2, b3, c3);
        d3.return = a2;
        return d3;
      }
      function l2(a2, b3, c3, d3) {
        if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = Sg(c3, a2.mode, d3), b3.return = a2, b3;
        b3 = e2(b3, c3.children || []);
        b3.return = a2;
        return b3;
      }
      function m2(a2, b3, c3, d3, f3) {
        if (null === b3 || 7 !== b3.tag) return b3 = Tg(c3, a2.mode, d3, f3), b3.return = a2, b3;
        b3 = e2(b3, c3);
        b3.return = a2;
        return b3;
      }
      function q2(a2, b3, c3) {
        if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a2.mode, c3), b3.return = a2, b3;
        if ("object" === typeof b3 && null !== b3) {
          switch (b3.$$typeof) {
            case va:
              return c3 = Rg(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = Lg(a2, null, b3), c3.return = a2, c3;
            case wa:
              return b3 = Sg(b3, a2.mode, c3), b3.return = a2, b3;
            case Ha:
              var d3 = b3._init;
              return q2(a2, d3(b3._payload), c3);
          }
          if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a2.mode, c3, null), b3.return = a2, b3;
          Mg(a2, b3);
        }
        return null;
      }
      function r2(a2, b3, c3, d3) {
        var e3 = null !== b3 ? b3.key : null;
        if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e3 ? null : h2(a2, b3, "" + c3, d3);
        if ("object" === typeof c3 && null !== c3) {
          switch (c3.$$typeof) {
            case va:
              return c3.key === e3 ? k2(a2, b3, c3, d3) : null;
            case wa:
              return c3.key === e3 ? l2(a2, b3, c3, d3) : null;
            case Ha:
              return e3 = c3._init, r2(
                a2,
                b3,
                e3(c3._payload),
                d3
              );
          }
          if (eb(c3) || Ka(c3)) return null !== e3 ? null : m2(a2, b3, c3, d3, null);
          Mg(a2, c3);
        }
        return null;
      }
      function y2(a2, b3, c3, d3, e3) {
        if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3) return a2 = a2.get(c3) || null, h2(b3, a2, "" + d3, e3);
        if ("object" === typeof d3 && null !== d3) {
          switch (d3.$$typeof) {
            case va:
              return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a2, d3, e3);
            case wa:
              return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a2, d3, e3);
            case Ha:
              var f3 = d3._init;
              return y2(a2, b3, c3, f3(d3._payload), e3);
          }
          if (eb(d3) || Ka(d3)) return a2 = a2.get(c3) || null, m2(b3, a2, d3, e3, null);
          Mg(b3, d3);
        }
        return null;
      }
      function n2(e3, g3, h3, k3) {
        for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
          u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
          var n3 = r2(e3, u2, h3[w2], k3);
          if (null === n3) {
            null === u2 && (u2 = x2);
            break;
          }
          a && u2 && null === n3.alternate && b2(e3, u2);
          g3 = f2(n3, g3, w2);
          null === m3 ? l3 = n3 : m3.sibling = n3;
          m3 = n3;
          u2 = x2;
        }
        if (w2 === h3.length) return c2(e3, u2), I$1 && tg(e3, w2), l3;
        if (null === u2) {
          for (; w2 < h3.length; w2++) u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
          I$1 && tg(e3, w2);
          return l3;
        }
        for (u2 = d2(e3, u2); w2 < h3.length; w2++) x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
        a && u2.forEach(function(a2) {
          return b2(e3, a2);
        });
        I$1 && tg(e3, w2);
        return l3;
      }
      function t2(e3, g3, h3, k3) {
        var l3 = Ka(h3);
        if ("function" !== typeof l3) throw Error(p$3(150));
        h3 = l3.call(h3);
        if (null == h3) throw Error(p$3(151));
        for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
          m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
          var t3 = r2(e3, m3, n3.value, k3);
          if (null === t3) {
            null === m3 && (m3 = x2);
            break;
          }
          a && m3 && null === t3.alternate && b2(e3, m3);
          g3 = f2(t3, g3, w2);
          null === u2 ? l3 = t3 : u2.sibling = t3;
          u2 = t3;
          m3 = x2;
        }
        if (n3.done) return c2(
          e3,
          m3
        ), I$1 && tg(e3, w2), l3;
        if (null === m3) {
          for (; !n3.done; w2++, n3 = h3.next()) n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
          I$1 && tg(e3, w2);
          return l3;
        }
        for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next()) n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        a && m3.forEach(function(a2) {
          return b2(e3, a2);
        });
        I$1 && tg(e3, w2);
        return l3;
      }
      function J2(a2, d3, f3, h3) {
        "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
        if ("object" === typeof f3 && null !== f3) {
          switch (f3.$$typeof) {
            case va:
              a: {
                for (var k3 = f3.key, l3 = d3; null !== l3; ) {
                  if (l3.key === k3) {
                    k3 = f3.type;
                    if (k3 === ya) {
                      if (7 === l3.tag) {
                        c2(a2, l3.sibling);
                        d3 = e2(l3, f3.props.children);
                        d3.return = a2;
                        a2 = d3;
                        break a;
                      }
                    } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                      c2(a2, l3.sibling);
                      d3 = e2(l3, f3.props);
                      d3.ref = Lg(a2, l3, f3);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    }
                    c2(a2, l3);
                    break;
                  } else b2(a2, l3);
                  l3 = l3.sibling;
                }
                f3.type === ya ? (d3 = Tg(f3.props.children, a2.mode, h3, f3.key), d3.return = a2, a2 = d3) : (h3 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = Lg(a2, d3, f3), h3.return = a2, a2 = h3);
              }
              return g2(a2);
            case wa:
              a: {
                for (l3 = f3.key; null !== d3; ) {
                  if (d3.key === l3) if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                    c2(a2, d3.sibling);
                    d3 = e2(d3, f3.children || []);
                    d3.return = a2;
                    a2 = d3;
                    break a;
                  } else {
                    c2(a2, d3);
                    break;
                  }
                  else b2(a2, d3);
                  d3 = d3.sibling;
                }
                d3 = Sg(f3, a2.mode, h3);
                d3.return = a2;
                a2 = d3;
              }
              return g2(a2);
            case Ha:
              return l3 = f3._init, J2(a2, d3, l3(f3._payload), h3);
          }
          if (eb(f3)) return n2(a2, d3, f3, h3);
          if (Ka(f3)) return t2(a2, d3, f3, h3);
          Mg(a2, f3);
        }
        return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a2, d3.sibling), d3 = e2(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = Qg(f3, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2)) : c2(a2, d3);
      }
      return J2;
    }
    var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
    function $g() {
      Zg = Yg = Xg = null;
    }
    function ah(a) {
      var b2 = Wg.current;
      E(Wg);
      a._currentValue = b2;
    }
    function bh(a, b2, c2) {
      for (; null !== a; ) {
        var d2 = a.alternate;
        (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
        if (a === c2) break;
        a = a.return;
      }
    }
    function ch(a, b2) {
      Xg = a;
      Zg = Yg = null;
      a = a.dependencies;
      null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (dh = true), a.firstContext = null);
    }
    function eh(a) {
      var b2 = a._currentValue;
      if (Zg !== a) if (a = { context: a, memoizedValue: b2, next: null }, null === Yg) {
        if (null === Xg) throw Error(p$3(308));
        Yg = a;
        Xg.dependencies = { lanes: 0, firstContext: a };
      } else Yg = Yg.next = a;
      return b2;
    }
    var fh = null;
    function gh(a) {
      null === fh ? fh = [a] : fh.push(a);
    }
    function hh(a, b2, c2, d2) {
      var e2 = b2.interleaved;
      null === e2 ? (c2.next = c2, gh(b2)) : (c2.next = e2.next, e2.next = c2);
      b2.interleaved = c2;
      return ih(a, d2);
    }
    function ih(a, b2) {
      a.lanes |= b2;
      var c2 = a.alternate;
      null !== c2 && (c2.lanes |= b2);
      c2 = a;
      for (a = a.return; null !== a; ) a.childLanes |= b2, c2 = a.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a, a = a.return;
      return 3 === c2.tag ? c2.stateNode : null;
    }
    var jh = false;
    function kh(a) {
      a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function lh(a, b2) {
      a = a.updateQueue;
      b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
    }
    function mh(a, b2) {
      return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
    }
    function nh(a, b2, c2) {
      var d2 = a.updateQueue;
      if (null === d2) return null;
      d2 = d2.shared;
      if (0 !== (K$1 & 2)) {
        var e2 = d2.pending;
        null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
        d2.pending = b2;
        return ih(a, c2);
      }
      e2 = d2.interleaved;
      null === e2 ? (b2.next = b2, gh(d2)) : (b2.next = e2.next, e2.next = b2);
      d2.interleaved = b2;
      return ih(a, c2);
    }
    function oh(a, b2, c2) {
      b2 = b2.updateQueue;
      if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
        var d2 = b2.lanes;
        d2 &= a.pendingLanes;
        c2 |= d2;
        b2.lanes = c2;
        Cc(a, c2);
      }
    }
    function ph(a, b2) {
      var c2 = a.updateQueue, d2 = a.alternate;
      if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
        var e2 = null, f2 = null;
        c2 = c2.firstBaseUpdate;
        if (null !== c2) {
          do {
            var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
            null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
            c2 = c2.next;
          } while (null !== c2);
          null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
        } else e2 = f2 = b2;
        c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
        a.updateQueue = c2;
        return;
      }
      a = c2.lastBaseUpdate;
      null === a ? c2.firstBaseUpdate = b2 : a.next = b2;
      c2.lastBaseUpdate = b2;
    }
    function qh(a, b2, c2, d2) {
      var e2 = a.updateQueue;
      jh = false;
      var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
      if (null !== h2) {
        e2.shared.pending = null;
        var k2 = h2, l2 = k2.next;
        k2.next = null;
        null === g2 ? f2 = l2 : g2.next = l2;
        g2 = k2;
        var m2 = a.alternate;
        null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
      }
      if (null !== f2) {
        var q2 = e2.baseState;
        g2 = 0;
        m2 = l2 = k2 = null;
        h2 = f2;
        do {
          var r2 = h2.lane, y2 = h2.eventTime;
          if ((d2 & r2) === r2) {
            null !== m2 && (m2 = m2.next = {
              eventTime: y2,
              lane: 0,
              tag: h2.tag,
              payload: h2.payload,
              callback: h2.callback,
              next: null
            });
            a: {
              var n2 = a, t2 = h2;
              r2 = b2;
              y2 = c2;
              switch (t2.tag) {
                case 1:
                  n2 = t2.payload;
                  if ("function" === typeof n2) {
                    q2 = n2.call(y2, q2, r2);
                    break a;
                  }
                  q2 = n2;
                  break a;
                case 3:
                  n2.flags = n2.flags & -65537 | 128;
                case 0:
                  n2 = t2.payload;
                  r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
                  if (null === r2 || void 0 === r2) break a;
                  q2 = A$1({}, q2, r2);
                  break a;
                case 2:
                  jh = true;
              }
            }
            null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
          } else y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
          h2 = h2.next;
          if (null === h2) if (h2 = e2.shared.pending, null === h2) break;
          else r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
        } while (1);
        null === m2 && (k2 = q2);
        e2.baseState = k2;
        e2.firstBaseUpdate = l2;
        e2.lastBaseUpdate = m2;
        b2 = e2.shared.interleaved;
        if (null !== b2) {
          e2 = b2;
          do
            g2 |= e2.lane, e2 = e2.next;
          while (e2 !== b2);
        } else null === f2 && (e2.shared.lanes = 0);
        rh |= g2;
        a.lanes = g2;
        a.memoizedState = q2;
      }
    }
    function sh(a, b2, c2) {
      a = b2.effects;
      b2.effects = null;
      if (null !== a) for (b2 = 0; b2 < a.length; b2++) {
        var d2 = a[b2], e2 = d2.callback;
        if (null !== e2) {
          d2.callback = null;
          d2 = c2;
          if ("function" !== typeof e2) throw Error(p$3(191, e2));
          e2.call(d2);
        }
      }
    }
    var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
    function xh(a) {
      if (a === th) throw Error(p$3(174));
      return a;
    }
    function yh(a, b2) {
      G(wh, b2);
      G(vh, a);
      G(uh, th);
      a = b2.nodeType;
      switch (a) {
        case 9:
        case 11:
          b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
          break;
        default:
          a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
      }
      E(uh);
      G(uh, b2);
    }
    function zh() {
      E(uh);
      E(vh);
      E(wh);
    }
    function Ah(a) {
      xh(wh.current);
      var b2 = xh(uh.current);
      var c2 = lb(b2, a.type);
      b2 !== c2 && (G(vh, a), G(uh, c2));
    }
    function Bh(a) {
      vh.current === a && (E(uh), E(vh));
    }
    var L$1 = Uf(0);
    function Ch(a) {
      for (var b2 = a; null !== b2; ) {
        if (13 === b2.tag) {
          var c2 = b2.memoizedState;
          if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
        } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
          if (0 !== (b2.flags & 128)) return b2;
        } else if (null !== b2.child) {
          b2.child.return = b2;
          b2 = b2.child;
          continue;
        }
        if (b2 === a) break;
        for (; null === b2.sibling; ) {
          if (null === b2.return || b2.return === a) return null;
          b2 = b2.return;
        }
        b2.sibling.return = b2.return;
        b2 = b2.sibling;
      }
      return null;
    }
    var Dh = [];
    function Eh() {
      for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
      Dh.length = 0;
    }
    var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N$1 = null, O$1 = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
    function P() {
      throw Error(p$3(321));
    }
    function Mh(a, b2) {
      if (null === b2) return false;
      for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++) if (!He(a[c2], b2[c2])) return false;
      return true;
    }
    function Nh(a, b2, c2, d2, e2, f2) {
      Hh = f2;
      M = b2;
      b2.memoizedState = null;
      b2.updateQueue = null;
      b2.lanes = 0;
      Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
      a = c2(d2, e2);
      if (Jh) {
        f2 = 0;
        do {
          Jh = false;
          Kh = 0;
          if (25 <= f2) throw Error(p$3(301));
          f2 += 1;
          O$1 = N$1 = null;
          b2.updateQueue = null;
          Fh.current = Qh;
          a = c2(d2, e2);
        } while (Jh);
      }
      Fh.current = Rh;
      b2 = null !== N$1 && null !== N$1.next;
      Hh = 0;
      O$1 = N$1 = M = null;
      Ih = false;
      if (b2) throw Error(p$3(300));
      return a;
    }
    function Sh() {
      var a = 0 !== Kh;
      Kh = 0;
      return a;
    }
    function Th() {
      var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      null === O$1 ? M.memoizedState = O$1 = a : O$1 = O$1.next = a;
      return O$1;
    }
    function Uh() {
      if (null === N$1) {
        var a = M.alternate;
        a = null !== a ? a.memoizedState : null;
      } else a = N$1.next;
      var b2 = null === O$1 ? M.memoizedState : O$1.next;
      if (null !== b2) O$1 = b2, N$1 = a;
      else {
        if (null === a) throw Error(p$3(310));
        N$1 = a;
        a = { memoizedState: N$1.memoizedState, baseState: N$1.baseState, baseQueue: N$1.baseQueue, queue: N$1.queue, next: null };
        null === O$1 ? M.memoizedState = O$1 = a : O$1 = O$1.next = a;
      }
      return O$1;
    }
    function Vh(a, b2) {
      return "function" === typeof b2 ? b2(a) : b2;
    }
    function Wh(a) {
      var b2 = Uh(), c2 = b2.queue;
      if (null === c2) throw Error(p$3(311));
      c2.lastRenderedReducer = a;
      var d2 = N$1, e2 = d2.baseQueue, f2 = c2.pending;
      if (null !== f2) {
        if (null !== e2) {
          var g2 = e2.next;
          e2.next = f2.next;
          f2.next = g2;
        }
        d2.baseQueue = e2 = f2;
        c2.pending = null;
      }
      if (null !== e2) {
        f2 = e2.next;
        d2 = d2.baseState;
        var h2 = g2 = null, k2 = null, l2 = f2;
        do {
          var m2 = l2.lane;
          if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a(d2, l2.action);
          else {
            var q2 = {
              lane: m2,
              action: l2.action,
              hasEagerState: l2.hasEagerState,
              eagerState: l2.eagerState,
              next: null
            };
            null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
            M.lanes |= m2;
            rh |= m2;
          }
          l2 = l2.next;
        } while (null !== l2 && l2 !== f2);
        null === k2 ? g2 = d2 : k2.next = h2;
        He(d2, b2.memoizedState) || (dh = true);
        b2.memoizedState = d2;
        b2.baseState = g2;
        b2.baseQueue = k2;
        c2.lastRenderedState = d2;
      }
      a = c2.interleaved;
      if (null !== a) {
        e2 = a;
        do
          f2 = e2.lane, M.lanes |= f2, rh |= f2, e2 = e2.next;
        while (e2 !== a);
      } else null === e2 && (c2.lanes = 0);
      return [b2.memoizedState, c2.dispatch];
    }
    function Xh(a) {
      var b2 = Uh(), c2 = b2.queue;
      if (null === c2) throw Error(p$3(311));
      c2.lastRenderedReducer = a;
      var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
      if (null !== e2) {
        c2.pending = null;
        var g2 = e2 = e2.next;
        do
          f2 = a(f2, g2.action), g2 = g2.next;
        while (g2 !== e2);
        He(f2, b2.memoizedState) || (dh = true);
        b2.memoizedState = f2;
        null === b2.baseQueue && (b2.baseState = f2);
        c2.lastRenderedState = f2;
      }
      return [f2, d2];
    }
    function Yh() {
    }
    function Zh(a, b2) {
      var c2 = M, d2 = Uh(), e2 = b2(), f2 = !He(d2.memoizedState, e2);
      f2 && (d2.memoizedState = e2, dh = true);
      d2 = d2.queue;
      $h(ai.bind(null, c2, d2, a), [a]);
      if (d2.getSnapshot !== b2 || f2 || null !== O$1 && O$1.memoizedState.tag & 1) {
        c2.flags |= 2048;
        bi$1(9, ci.bind(null, c2, d2, e2, b2), void 0, null);
        if (null === Q$1) throw Error(p$3(349));
        0 !== (Hh & 30) || di$1(c2, b2, e2);
      }
      return e2;
    }
    function di$1(a, b2, c2) {
      a.flags |= 16384;
      a = { getSnapshot: b2, value: c2 };
      b2 = M.updateQueue;
      null === b2 ? (b2 = { lastEffect: null, stores: null }, M.updateQueue = b2, b2.stores = [a]) : (c2 = b2.stores, null === c2 ? b2.stores = [a] : c2.push(a));
    }
    function ci(a, b2, c2, d2) {
      b2.value = c2;
      b2.getSnapshot = d2;
      ei$1(b2) && fi(a);
    }
    function ai(a, b2, c2) {
      return c2(function() {
        ei$1(b2) && fi(a);
      });
    }
    function ei$1(a) {
      var b2 = a.getSnapshot;
      a = a.value;
      try {
        var c2 = b2();
        return !He(a, c2);
      } catch (d2) {
        return true;
      }
    }
    function fi(a) {
      var b2 = ih(a, 1);
      null !== b2 && gi(b2, a, 1, -1);
    }
    function hi$1(a) {
      var b2 = Th();
      "function" === typeof a && (a = a());
      b2.memoizedState = b2.baseState = a;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
      b2.queue = a;
      a = a.dispatch = ii$1.bind(null, M, a);
      return [b2.memoizedState, a];
    }
    function bi$1(a, b2, c2, d2) {
      a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
      b2 = M.updateQueue;
      null === b2 ? (b2 = { lastEffect: null, stores: null }, M.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
      return a;
    }
    function ji$1() {
      return Uh().memoizedState;
    }
    function ki$1(a, b2, c2, d2) {
      var e2 = Th();
      M.flags |= a;
      e2.memoizedState = bi$1(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
    }
    function li(a, b2, c2, d2) {
      var e2 = Uh();
      d2 = void 0 === d2 ? null : d2;
      var f2 = void 0;
      if (null !== N$1) {
        var g2 = N$1.memoizedState;
        f2 = g2.destroy;
        if (null !== d2 && Mh(d2, g2.deps)) {
          e2.memoizedState = bi$1(b2, c2, f2, d2);
          return;
        }
      }
      M.flags |= a;
      e2.memoizedState = bi$1(1 | b2, c2, f2, d2);
    }
    function mi(a, b2) {
      return ki$1(8390656, 8, a, b2);
    }
    function $h(a, b2) {
      return li(2048, 8, a, b2);
    }
    function ni(a, b2) {
      return li(4, 2, a, b2);
    }
    function oi$1(a, b2) {
      return li(4, 4, a, b2);
    }
    function pi(a, b2) {
      if ("function" === typeof b2) return a = a(), b2(a), function() {
        b2(null);
      };
      if (null !== b2 && void 0 !== b2) return a = a(), b2.current = a, function() {
        b2.current = null;
      };
    }
    function qi(a, b2, c2) {
      c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
      return li(4, 4, pi.bind(null, b2, a), c2);
    }
    function ri() {
    }
    function si(a, b2) {
      var c2 = Uh();
      b2 = void 0 === b2 ? null : b2;
      var d2 = c2.memoizedState;
      if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
      c2.memoizedState = [a, b2];
      return a;
    }
    function ti$1(a, b2) {
      var c2 = Uh();
      b2 = void 0 === b2 ? null : b2;
      var d2 = c2.memoizedState;
      if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
      a = a();
      c2.memoizedState = [a, b2];
      return a;
    }
    function ui(a, b2, c2) {
      if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c2;
      He(c2, b2) || (c2 = yc(), M.lanes |= c2, rh |= c2, a.baseState = true);
      return b2;
    }
    function vi$1(a, b2) {
      var c2 = C;
      C = 0 !== c2 && 4 > c2 ? c2 : 4;
      a(true);
      var d2 = Gh.transition;
      Gh.transition = {};
      try {
        a(false), b2();
      } finally {
        C = c2, Gh.transition = d2;
      }
    }
    function wi$1() {
      return Uh().memoizedState;
    }
    function xi$1(a, b2, c2) {
      var d2 = yi$1(a);
      c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
      if (zi$1(a)) Ai$1(b2, c2);
      else if (c2 = hh(a, b2, c2, d2), null !== c2) {
        var e2 = R$1();
        gi(c2, a, d2, e2);
        Bi$1(c2, b2, d2);
      }
    }
    function ii$1(a, b2, c2) {
      var d2 = yi$1(a), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
      if (zi$1(a)) Ai$1(b2, e2);
      else {
        var f2 = a.alternate;
        if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
          var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
          e2.hasEagerState = true;
          e2.eagerState = h2;
          if (He(h2, g2)) {
            var k2 = b2.interleaved;
            null === k2 ? (e2.next = e2, gh(b2)) : (e2.next = k2.next, k2.next = e2);
            b2.interleaved = e2;
            return;
          }
        } catch (l2) {
        } finally {
        }
        c2 = hh(a, b2, e2, d2);
        null !== c2 && (e2 = R$1(), gi(c2, a, d2, e2), Bi$1(c2, b2, d2));
      }
    }
    function zi$1(a) {
      var b2 = a.alternate;
      return a === M || null !== b2 && b2 === M;
    }
    function Ai$1(a, b2) {
      Jh = Ih = true;
      var c2 = a.pending;
      null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
      a.pending = b2;
    }
    function Bi$1(a, b2, c2) {
      if (0 !== (c2 & 4194240)) {
        var d2 = b2.lanes;
        d2 &= a.pendingLanes;
        c2 |= d2;
        b2.lanes = c2;
        Cc(a, c2);
      }
    }
    var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b2) {
      Th().memoizedState = [a, void 0 === b2 ? null : b2];
      return a;
    }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b2, c2) {
      c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
      return ki$1(
        4194308,
        4,
        pi.bind(null, b2, a),
        c2
      );
    }, useLayoutEffect: function(a, b2) {
      return ki$1(4194308, 4, a, b2);
    }, useInsertionEffect: function(a, b2) {
      return ki$1(4, 2, a, b2);
    }, useMemo: function(a, b2) {
      var c2 = Th();
      b2 = void 0 === b2 ? null : b2;
      a = a();
      c2.memoizedState = [a, b2];
      return a;
    }, useReducer: function(a, b2, c2) {
      var d2 = Th();
      b2 = void 0 !== c2 ? c2(b2) : b2;
      d2.memoizedState = d2.baseState = b2;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
      d2.queue = a;
      a = a.dispatch = xi$1.bind(null, M, a);
      return [d2.memoizedState, a];
    }, useRef: function(a) {
      var b2 = Th();
      a = { current: a };
      return b2.memoizedState = a;
    }, useState: hi$1, useDebugValue: ri, useDeferredValue: function(a) {
      return Th().memoizedState = a;
    }, useTransition: function() {
      var a = hi$1(false), b2 = a[0];
      a = vi$1.bind(null, a[1]);
      Th().memoizedState = a;
      return [b2, a];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(a, b2, c2) {
      var d2 = M, e2 = Th();
      if (I$1) {
        if (void 0 === c2) throw Error(p$3(407));
        c2 = c2();
      } else {
        c2 = b2();
        if (null === Q$1) throw Error(p$3(349));
        0 !== (Hh & 30) || di$1(d2, b2, c2);
      }
      e2.memoizedState = c2;
      var f2 = { value: c2, getSnapshot: b2 };
      e2.queue = f2;
      mi(ai.bind(
        null,
        d2,
        f2,
        a
      ), [a]);
      d2.flags |= 2048;
      bi$1(9, ci.bind(null, d2, f2, c2, b2), void 0, null);
      return c2;
    }, useId: function() {
      var a = Th(), b2 = Q$1.identifierPrefix;
      if (I$1) {
        var c2 = sg;
        var d2 = rg;
        c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
        b2 = ":" + b2 + "R" + c2;
        c2 = Kh++;
        0 < c2 && (b2 += "H" + c2.toString(32));
        b2 += ":";
      } else c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
      return a.memoizedState = b2;
    }, unstable_isNewReconciler: false }, Ph = {
      readContext: eh,
      useCallback: si,
      useContext: eh,
      useEffect: $h,
      useImperativeHandle: qi,
      useInsertionEffect: ni,
      useLayoutEffect: oi$1,
      useMemo: ti$1,
      useReducer: Wh,
      useRef: ji$1,
      useState: function() {
        return Wh(Vh);
      },
      useDebugValue: ri,
      useDeferredValue: function(a) {
        var b2 = Uh();
        return ui(b2, N$1.memoizedState, a);
      },
      useTransition: function() {
        var a = Wh(Vh)[0], b2 = Uh().memoizedState;
        return [a, b2];
      },
      useMutableSource: Yh,
      useSyncExternalStore: Zh,
      useId: wi$1,
      unstable_isNewReconciler: false
    }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi$1, useMemo: ti$1, useReducer: Xh, useRef: ji$1, useState: function() {
      return Xh(Vh);
    }, useDebugValue: ri, useDeferredValue: function(a) {
      var b2 = Uh();
      return null === N$1 ? b2.memoizedState = a : ui(b2, N$1.memoizedState, a);
    }, useTransition: function() {
      var a = Xh(Vh)[0], b2 = Uh().memoizedState;
      return [a, b2];
    }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi$1, unstable_isNewReconciler: false };
    function Ci(a, b2) {
      if (a && a.defaultProps) {
        b2 = A$1({}, b2);
        a = a.defaultProps;
        for (var c2 in a) void 0 === b2[c2] && (b2[c2] = a[c2]);
        return b2;
      }
      return b2;
    }
    function Di$1(a, b2, c2, d2) {
      b2 = a.memoizedState;
      c2 = c2(d2, b2);
      c2 = null === c2 || void 0 === c2 ? b2 : A$1({}, b2, c2);
      a.memoizedState = c2;
      0 === a.lanes && (a.updateQueue.baseState = c2);
    }
    var Ei$1 = { isMounted: function(a) {
      return (a = a._reactInternals) ? Vb(a) === a : false;
    }, enqueueSetState: function(a, b2, c2) {
      a = a._reactInternals;
      var d2 = R$1(), e2 = yi$1(a), f2 = mh(d2, e2);
      f2.payload = b2;
      void 0 !== c2 && null !== c2 && (f2.callback = c2);
      b2 = nh(a, f2, e2);
      null !== b2 && (gi(b2, a, e2, d2), oh(b2, a, e2));
    }, enqueueReplaceState: function(a, b2, c2) {
      a = a._reactInternals;
      var d2 = R$1(), e2 = yi$1(a), f2 = mh(d2, e2);
      f2.tag = 1;
      f2.payload = b2;
      void 0 !== c2 && null !== c2 && (f2.callback = c2);
      b2 = nh(a, f2, e2);
      null !== b2 && (gi(b2, a, e2, d2), oh(b2, a, e2));
    }, enqueueForceUpdate: function(a, b2) {
      a = a._reactInternals;
      var c2 = R$1(), d2 = yi$1(a), e2 = mh(c2, d2);
      e2.tag = 2;
      void 0 !== b2 && null !== b2 && (e2.callback = b2);
      b2 = nh(a, e2, d2);
      null !== b2 && (gi(b2, a, d2, c2), oh(b2, a, d2));
    } };
    function Fi$1(a, b2, c2, d2, e2, f2, g2) {
      a = a.stateNode;
      return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie$1(c2, d2) || !Ie$1(e2, f2) : true;
    }
    function Gi(a, b2, c2) {
      var d2 = false, e2 = Vf;
      var f2 = b2.contextType;
      "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b2) ? Xf : H$1.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a, e2) : Vf);
      b2 = new b2(c2, f2);
      a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
      b2.updater = Ei$1;
      a.stateNode = b2;
      b2._reactInternals = a;
      d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
      return b2;
    }
    function Hi$1(a, b2, c2, d2) {
      a = b2.state;
      "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
      "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
      b2.state !== a && Ei$1.enqueueReplaceState(b2, b2.state, null);
    }
    function Ii$1(a, b2, c2, d2) {
      var e2 = a.stateNode;
      e2.props = c2;
      e2.state = a.memoizedState;
      e2.refs = {};
      kh(a);
      var f2 = b2.contextType;
      "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b2) ? Xf : H$1.current, e2.context = Yf(a, f2));
      e2.state = a.memoizedState;
      f2 = b2.getDerivedStateFromProps;
      "function" === typeof f2 && (Di$1(a, b2, f2, c2), e2.state = a.memoizedState);
      "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Ei$1.enqueueReplaceState(e2, e2.state, null), qh(a, c2, e2, d2), e2.state = a.memoizedState);
      "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
    }
    function Ji(a, b2) {
      try {
        var c2 = "", d2 = b2;
        do
          c2 += Pa(d2), d2 = d2.return;
        while (d2);
        var e2 = c2;
      } catch (f2) {
        e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
      }
      return { value: a, source: b2, stack: e2, digest: null };
    }
    function Ki$1(a, b2, c2) {
      return { value: a, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
    }
    function Li$1(a, b2) {
      try {
        console.error(b2.value);
      } catch (c2) {
        setTimeout(function() {
          throw c2;
        });
      }
    }
    var Mi$1 = "function" === typeof WeakMap ? WeakMap : Map;
    function Ni$1(a, b2, c2) {
      c2 = mh(-1, c2);
      c2.tag = 3;
      c2.payload = { element: null };
      var d2 = b2.value;
      c2.callback = function() {
        Oi$1 || (Oi$1 = true, Pi$1 = d2);
        Li$1(a, b2);
      };
      return c2;
    }
    function Qi(a, b2, c2) {
      c2 = mh(-1, c2);
      c2.tag = 3;
      var d2 = a.type.getDerivedStateFromError;
      if ("function" === typeof d2) {
        var e2 = b2.value;
        c2.payload = function() {
          return d2(e2);
        };
        c2.callback = function() {
          Li$1(a, b2);
        };
      }
      var f2 = a.stateNode;
      null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
        Li$1(a, b2);
        "function" !== typeof d2 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
        var c3 = b2.stack;
        this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
      });
      return c2;
    }
    function Si$1(a, b2, c2) {
      var d2 = a.pingCache;
      if (null === d2) {
        d2 = a.pingCache = new Mi$1();
        var e2 = /* @__PURE__ */ new Set();
        d2.set(b2, e2);
      } else e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
      e2.has(c2) || (e2.add(c2), a = Ti.bind(null, a, b2, c2), b2.then(a, a));
    }
    function Ui(a) {
      do {
        var b2;
        if (b2 = 13 === a.tag) b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
        if (b2) return a;
        a = a.return;
      } while (null !== a);
      return null;
    }
    function Vi(a, b2, c2, d2, e2) {
      if (0 === (a.mode & 1)) return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c2, b2, 1))), c2.lanes |= 1), a;
      a.flags |= 65536;
      a.lanes = e2;
      return a;
    }
    var Wi$1 = ua.ReactCurrentOwner, dh = false;
    function Xi(a, b2, c2, d2) {
      b2.child = null === a ? Vg(b2, null, c2, d2) : Ug(b2, a.child, c2, d2);
    }
    function Yi$1(a, b2, c2, d2, e2) {
      c2 = c2.render;
      var f2 = b2.ref;
      ch(b2, e2);
      d2 = Nh(a, b2, c2, d2, f2, e2);
      c2 = Sh();
      if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, Zi(a, b2, e2);
      I$1 && c2 && vg(b2);
      b2.flags |= 1;
      Xi(a, b2, d2, e2);
      return b2.child;
    }
    function $i$1(a, b2, c2, d2, e2) {
      if (null === a) {
        var f2 = c2.type;
        if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, bj(a, b2, f2, d2, e2);
        a = Rg(c2.type, null, d2, b2, b2.mode, e2);
        a.ref = b2.ref;
        a.return = b2;
        return b2.child = a;
      }
      f2 = a.child;
      if (0 === (a.lanes & e2)) {
        var g2 = f2.memoizedProps;
        c2 = c2.compare;
        c2 = null !== c2 ? c2 : Ie$1;
        if (c2(g2, d2) && a.ref === b2.ref) return Zi(a, b2, e2);
      }
      b2.flags |= 1;
      a = Pg(f2, d2);
      a.ref = b2.ref;
      a.return = b2;
      return b2.child = a;
    }
    function bj(a, b2, c2, d2, e2) {
      if (null !== a) {
        var f2 = a.memoizedProps;
        if (Ie$1(f2, d2) && a.ref === b2.ref) if (dh = false, b2.pendingProps = d2 = f2, 0 !== (a.lanes & e2)) 0 !== (a.flags & 131072) && (dh = true);
        else return b2.lanes = a.lanes, Zi(a, b2, e2);
      }
      return cj(a, b2, c2, d2, e2);
    }
    function dj(a, b2, c2) {
      var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a ? a.memoizedState : null;
      if ("hidden" === d2.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c2;
      else {
        if (0 === (c2 & 1073741824)) return a = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G(ej, fj), fj |= a, null;
        b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
        d2 = null !== f2 ? f2.baseLanes : c2;
        G(ej, fj);
        fj |= d2;
      }
      else null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G(ej, fj), fj |= d2;
      Xi(a, b2, e2, c2);
      return b2.child;
    }
    function gj(a, b2) {
      var c2 = b2.ref;
      if (null === a && null !== c2 || null !== a && a.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
    }
    function cj(a, b2, c2, d2, e2) {
      var f2 = Zf(c2) ? Xf : H$1.current;
      f2 = Yf(b2, f2);
      ch(b2, e2);
      c2 = Nh(a, b2, c2, d2, f2, e2);
      d2 = Sh();
      if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, Zi(a, b2, e2);
      I$1 && d2 && vg(b2);
      b2.flags |= 1;
      Xi(a, b2, c2, e2);
      return b2.child;
    }
    function hj(a, b2, c2, d2, e2) {
      if (Zf(c2)) {
        var f2 = true;
        cg(b2);
      } else f2 = false;
      ch(b2, e2);
      if (null === b2.stateNode) ij(a, b2), Gi(b2, c2, d2), Ii$1(b2, c2, d2, e2), d2 = true;
      else if (null === a) {
        var g2 = b2.stateNode, h2 = b2.memoizedProps;
        g2.props = h2;
        var k2 = g2.context, l2 = c2.contextType;
        "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H$1.current, l2 = Yf(b2, l2));
        var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
        q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && Hi$1(b2, g2, d2, l2);
        jh = false;
        var r2 = b2.memoizedState;
        g2.state = r2;
        qh(b2, d2, g2, e2);
        k2 = b2.memoizedState;
        h2 !== d2 || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di$1(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = jh || Fi$1(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
      } else {
        g2 = b2.stateNode;
        lh(a, b2);
        h2 = b2.memoizedProps;
        l2 = b2.type === b2.elementType ? h2 : Ci(b2.type, h2);
        g2.props = l2;
        q2 = b2.pendingProps;
        r2 = g2.context;
        k2 = c2.contextType;
        "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H$1.current, k2 = Yf(b2, k2));
        var y2 = c2.getDerivedStateFromProps;
        (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && Hi$1(b2, g2, d2, k2);
        jh = false;
        r2 = b2.memoizedState;
        g2.state = r2;
        qh(b2, d2, g2, e2);
        var n2 = b2.memoizedState;
        h2 !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di$1(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = jh || Fi$1(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), d2 = false);
      }
      return jj(a, b2, c2, d2, f2, e2);
    }
    function jj(a, b2, c2, d2, e2, f2) {
      gj(a, b2);
      var g2 = 0 !== (b2.flags & 128);
      if (!d2 && !g2) return e2 && dg(b2, c2, false), Zi(a, b2, f2);
      d2 = b2.stateNode;
      Wi$1.current = b2;
      var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
      b2.flags |= 1;
      null !== a && g2 ? (b2.child = Ug(b2, a.child, null, f2), b2.child = Ug(b2, null, h2, f2)) : Xi(a, b2, h2, f2);
      b2.memoizedState = d2.state;
      e2 && dg(b2, c2, true);
      return b2.child;
    }
    function kj(a) {
      var b2 = a.stateNode;
      b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
      yh(a, b2.containerInfo);
    }
    function lj(a, b2, c2, d2, e2) {
      Ig();
      Jg(e2);
      b2.flags |= 256;
      Xi(a, b2, c2, d2);
      return b2.child;
    }
    var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
    function nj(a) {
      return { baseLanes: a, cachePool: null, transitions: null };
    }
    function oj(a, b2, c2) {
      var d2 = b2.pendingProps, e2 = L$1.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
      (h2 = g2) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
      if (h2) f2 = true, b2.flags &= -129;
      else if (null === a || null !== a.memoizedState) e2 |= 1;
      G(L$1, e2 & 1);
      if (null === a) {
        Eg(b2);
        a = b2.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
        g2 = d2.children;
        a = d2.fallback;
        return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = pj(g2, d2, 0, null), a = Tg(a, d2, c2, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = nj(c2), b2.memoizedState = mj, a) : qj(b2, g2);
      }
      e2 = a.memoizedState;
      if (null !== e2 && (h2 = e2.dehydrated, null !== h2)) return rj(a, b2, g2, d2, h2, e2, c2);
      if (f2) {
        f2 = d2.fallback;
        g2 = b2.mode;
        e2 = a.child;
        h2 = e2.sibling;
        var k2 = { mode: "hidden", children: d2.children };
        0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = Pg(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
        null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g2, c2, null), f2.flags |= 2);
        f2.return = b2;
        d2.return = b2;
        d2.sibling = f2;
        b2.child = d2;
        d2 = f2;
        f2 = b2.child;
        g2 = a.child.memoizedState;
        g2 = null === g2 ? nj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
        f2.memoizedState = g2;
        f2.childLanes = a.childLanes & ~c2;
        b2.memoizedState = mj;
        return d2;
      }
      f2 = a.child;
      a = f2.sibling;
      d2 = Pg(f2, { mode: "visible", children: d2.children });
      0 === (b2.mode & 1) && (d2.lanes = c2);
      d2.return = b2;
      d2.sibling = null;
      null !== a && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a], b2.flags |= 16) : c2.push(a));
      b2.child = d2;
      b2.memoizedState = null;
      return d2;
    }
    function qj(a, b2) {
      b2 = pj({ mode: "visible", children: b2 }, a.mode, 0, null);
      b2.return = a;
      return a.child = b2;
    }
    function sj(a, b2, c2, d2) {
      null !== d2 && Jg(d2);
      Ug(b2, a.child, null, c2);
      a = qj(b2, b2.pendingProps.children);
      a.flags |= 2;
      b2.memoizedState = null;
      return a;
    }
    function rj(a, b2, c2, d2, e2, f2, g2) {
      if (c2) {
        if (b2.flags & 256) return b2.flags &= -257, d2 = Ki$1(Error(p$3(422))), sj(a, b2, g2, d2);
        if (null !== b2.memoizedState) return b2.child = a.child, b2.flags |= 128, null;
        f2 = d2.fallback;
        e2 = b2.mode;
        d2 = pj({ mode: "visible", children: d2.children }, e2, 0, null);
        f2 = Tg(f2, e2, g2, null);
        f2.flags |= 2;
        d2.return = b2;
        f2.return = b2;
        d2.sibling = f2;
        b2.child = d2;
        0 !== (b2.mode & 1) && Ug(b2, a.child, null, g2);
        b2.child.memoizedState = nj(g2);
        b2.memoizedState = mj;
        return f2;
      }
      if (0 === (b2.mode & 1)) return sj(a, b2, g2, null);
      if ("$!" === e2.data) {
        d2 = e2.nextSibling && e2.nextSibling.dataset;
        if (d2) var h2 = d2.dgst;
        d2 = h2;
        f2 = Error(p$3(419));
        d2 = Ki$1(f2, d2, void 0);
        return sj(a, b2, g2, d2);
      }
      h2 = 0 !== (g2 & a.childLanes);
      if (dh || h2) {
        d2 = Q$1;
        if (null !== d2) {
          switch (g2 & -g2) {
            case 4:
              e2 = 2;
              break;
            case 16:
              e2 = 8;
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
              e2 = 32;
              break;
            case 536870912:
              e2 = 268435456;
              break;
            default:
              e2 = 0;
          }
          e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
          0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a, e2), gi(d2, a, e2, -1));
        }
        tj();
        d2 = Ki$1(Error(p$3(421)));
        return sj(a, b2, g2, d2);
      }
      if ("$?" === e2.data) return b2.flags |= 128, b2.child = a.child, b2 = uj.bind(null, a), e2._reactRetry = b2, null;
      a = f2.treeContext;
      yg = Lf(e2.nextSibling);
      xg = b2;
      I$1 = true;
      zg = null;
      null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
      b2 = qj(b2, d2.children);
      b2.flags |= 4096;
      return b2;
    }
    function vj(a, b2, c2) {
      a.lanes |= b2;
      var d2 = a.alternate;
      null !== d2 && (d2.lanes |= b2);
      bh(a.return, b2, c2);
    }
    function wj(a, b2, c2, d2, e2) {
      var f2 = a.memoizedState;
      null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
    }
    function xj(a, b2, c2) {
      var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
      Xi(a, b2, d2.children, c2);
      d2 = L$1.current;
      if (0 !== (d2 & 2)) d2 = d2 & 1 | 2, b2.flags |= 128;
      else {
        if (null !== a && 0 !== (a.flags & 128)) a: for (a = b2.child; null !== a; ) {
          if (13 === a.tag) null !== a.memoizedState && vj(a, c2, b2);
          else if (19 === a.tag) vj(a, c2, b2);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b2) break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b2) break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
        d2 &= 1;
      }
      G(L$1, d2);
      if (0 === (b2.mode & 1)) b2.memoizedState = null;
      else switch (e2) {
        case "forwards":
          c2 = b2.child;
          for (e2 = null; null !== c2; ) a = c2.alternate, null !== a && null === Ch(a) && (e2 = c2), c2 = c2.sibling;
          c2 = e2;
          null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
          wj(b2, false, e2, c2, f2);
          break;
        case "backwards":
          c2 = null;
          e2 = b2.child;
          for (b2.child = null; null !== e2; ) {
            a = e2.alternate;
            if (null !== a && null === Ch(a)) {
              b2.child = e2;
              break;
            }
            a = e2.sibling;
            e2.sibling = c2;
            c2 = e2;
            e2 = a;
          }
          wj(b2, true, c2, null, f2);
          break;
        case "together":
          wj(b2, false, null, null, void 0);
          break;
        default:
          b2.memoizedState = null;
      }
      return b2.child;
    }
    function ij(a, b2) {
      0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
    }
    function Zi(a, b2, c2) {
      null !== a && (b2.dependencies = a.dependencies);
      rh |= b2.lanes;
      if (0 === (c2 & b2.childLanes)) return null;
      if (null !== a && b2.child !== a.child) throw Error(p$3(153));
      if (null !== b2.child) {
        a = b2.child;
        c2 = Pg(a, a.pendingProps);
        b2.child = c2;
        for (c2.return = b2; null !== a.sibling; ) a = a.sibling, c2 = c2.sibling = Pg(a, a.pendingProps), c2.return = b2;
        c2.sibling = null;
      }
      return b2.child;
    }
    function yj(a, b2, c2) {
      switch (b2.tag) {
        case 3:
          kj(b2);
          Ig();
          break;
        case 5:
          Ah(b2);
          break;
        case 1:
          Zf(b2.type) && cg(b2);
          break;
        case 4:
          yh(b2, b2.stateNode.containerInfo);
          break;
        case 10:
          var d2 = b2.type._context, e2 = b2.memoizedProps.value;
          G(Wg, d2._currentValue);
          d2._currentValue = e2;
          break;
        case 13:
          d2 = b2.memoizedState;
          if (null !== d2) {
            if (null !== d2.dehydrated) return G(L$1, L$1.current & 1), b2.flags |= 128, null;
            if (0 !== (c2 & b2.child.childLanes)) return oj(a, b2, c2);
            G(L$1, L$1.current & 1);
            a = Zi(a, b2, c2);
            return null !== a ? a.sibling : null;
          }
          G(L$1, L$1.current & 1);
          break;
        case 19:
          d2 = 0 !== (c2 & b2.childLanes);
          if (0 !== (a.flags & 128)) {
            if (d2) return xj(a, b2, c2);
            b2.flags |= 128;
          }
          e2 = b2.memoizedState;
          null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
          G(L$1, L$1.current);
          if (d2) break;
          else return null;
        case 22:
        case 23:
          return b2.lanes = 0, dj(a, b2, c2);
      }
      return Zi(a, b2, c2);
    }
    var zj, Aj, Bj, Cj;
    zj = function(a, b2) {
      for (var c2 = b2.child; null !== c2; ) {
        if (5 === c2.tag || 6 === c2.tag) a.appendChild(c2.stateNode);
        else if (4 !== c2.tag && null !== c2.child) {
          c2.child.return = c2;
          c2 = c2.child;
          continue;
        }
        if (c2 === b2) break;
        for (; null === c2.sibling; ) {
          if (null === c2.return || c2.return === b2) return;
          c2 = c2.return;
        }
        c2.sibling.return = c2.return;
        c2 = c2.sibling;
      }
    };
    Aj = function() {
    };
    Bj = function(a, b2, c2, d2) {
      var e2 = a.memoizedProps;
      if (e2 !== d2) {
        a = b2.stateNode;
        xh(uh.current);
        var f2 = null;
        switch (c2) {
          case "input":
            e2 = Ya(a, e2);
            d2 = Ya(a, d2);
            f2 = [];
            break;
          case "select":
            e2 = A$1({}, e2, { value: void 0 });
            d2 = A$1({}, d2, { value: void 0 });
            f2 = [];
            break;
          case "textarea":
            e2 = gb(a, e2);
            d2 = gb(a, d2);
            f2 = [];
            break;
          default:
            "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a.onclick = Bf);
        }
        ub(c2, d2);
        var g2;
        c2 = null;
        for (l2 in e2) if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
          var h2 = e2[l2];
          for (g2 in h2) h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
        for (l2 in d2) {
          var k2 = d2[l2];
          h2 = null != e2 ? e2[l2] : void 0;
          if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2)) if ("style" === l2) if (h2) {
            for (g2 in h2) !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2) k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else c2 || (f2 || (f2 = []), f2.push(
            l2,
            c2
          )), c2 = k2;
          else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
        }
        c2 && (f2 = f2 || []).push("style", c2);
        var l2 = f2;
        if (b2.updateQueue = l2) b2.flags |= 4;
      }
    };
    Cj = function(a, b2, c2, d2) {
      c2 !== d2 && (b2.flags |= 4);
    };
    function Dj(a, b2) {
      if (!I$1) switch (a.tailMode) {
        case "hidden":
          b2 = a.tail;
          for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
          null === c2 ? a.tail = null : c2.sibling = null;
          break;
        case "collapsed":
          c2 = a.tail;
          for (var d2 = null; null !== c2; ) null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
          null === d2 ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
      }
    }
    function S(a) {
      var b2 = null !== a.alternate && a.alternate.child === a.child, c2 = 0, d2 = 0;
      if (b2) for (var e2 = a.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
      else for (e2 = a.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a, e2 = e2.sibling;
      a.subtreeFlags |= d2;
      a.childLanes = c2;
      return b2;
    }
    function Ej(a, b2, c2) {
      var d2 = b2.pendingProps;
      wg(b2);
      switch (b2.tag) {
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
          return S(b2), null;
        case 1:
          return Zf(b2.type) && $f(), S(b2), null;
        case 3:
          d2 = b2.stateNode;
          zh();
          E(Wf);
          E(H$1);
          Eh();
          d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
          if (null === a || null === a.child) Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
          Aj(a, b2);
          S(b2);
          return null;
        case 5:
          Bh(b2);
          var e2 = xh(wh.current);
          c2 = b2.type;
          if (null !== a && null != b2.stateNode) Bj(a, b2, c2, d2, e2), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
          else {
            if (!d2) {
              if (null === b2.stateNode) throw Error(p$3(166));
              S(b2);
              return null;
            }
            a = xh(uh.current);
            if (Gg(b2)) {
              d2 = b2.stateNode;
              c2 = b2.type;
              var f2 = b2.memoizedProps;
              d2[Of] = b2;
              d2[Pf] = f2;
              a = 0 !== (b2.mode & 1);
              switch (c2) {
                case "dialog":
                  D("cancel", d2);
                  D("close", d2);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", d2);
                  break;
                case "video":
                case "audio":
                  for (e2 = 0; e2 < lf.length; e2++) D(lf[e2], d2);
                  break;
                case "source":
                  D("error", d2);
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    d2
                  );
                  D("load", d2);
                  break;
                case "details":
                  D("toggle", d2);
                  break;
                case "input":
                  Za(d2, f2);
                  D("invalid", d2);
                  break;
                case "select":
                  d2._wrapperState = { wasMultiple: !!f2.multiple };
                  D("invalid", d2);
                  break;
                case "textarea":
                  hb(d2, f2), D("invalid", d2);
              }
              ub(c2, f2);
              e2 = null;
              for (var g2 in f2) if (f2.hasOwnProperty(g2)) {
                var h2 = f2[g2];
                "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                  d2.textContent,
                  h2,
                  a
                ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D("scroll", d2);
              }
              switch (c2) {
                case "input":
                  Va(d2);
                  db(d2, f2, true);
                  break;
                case "textarea":
                  Va(d2);
                  jb(d2);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" === typeof f2.onClick && (d2.onclick = Bf);
              }
              d2 = e2;
              b2.updateQueue = d2;
              null !== d2 && (b2.flags |= 4);
            } else {
              g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
              "http://www.w3.org/1999/xhtml" === a && (a = kb(c2));
              "http://www.w3.org/1999/xhtml" === a ? "script" === c2 ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d2.is ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), "select" === c2 && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
              a[Of] = b2;
              a[Pf] = d2;
              zj(a, b2, false, false);
              b2.stateNode = a;
              a: {
                g2 = vb(c2, d2);
                switch (c2) {
                  case "dialog":
                    D("cancel", a);
                    D("close", a);
                    e2 = d2;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", a);
                    e2 = d2;
                    break;
                  case "video":
                  case "audio":
                    for (e2 = 0; e2 < lf.length; e2++) D(lf[e2], a);
                    e2 = d2;
                    break;
                  case "source":
                    D("error", a);
                    e2 = d2;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      a
                    );
                    D("load", a);
                    e2 = d2;
                    break;
                  case "details":
                    D("toggle", a);
                    e2 = d2;
                    break;
                  case "input":
                    Za(a, d2);
                    e2 = Ya(a, d2);
                    D("invalid", a);
                    break;
                  case "option":
                    e2 = d2;
                    break;
                  case "select":
                    a._wrapperState = { wasMultiple: !!d2.multiple };
                    e2 = A$1({}, d2, { value: void 0 });
                    D("invalid", a);
                    break;
                  case "textarea":
                    hb(a, d2);
                    e2 = gb(a, d2);
                    D("invalid", a);
                    break;
                  default:
                    e2 = d2;
                }
                ub(c2, e2);
                h2 = e2;
                for (f2 in h2) if (h2.hasOwnProperty(f2)) {
                  var k2 = h2[f2];
                  "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g2));
                }
                switch (c2) {
                  case "input":
                    Va(a);
                    db(a, d2, false);
                    break;
                  case "textarea":
                    Va(a);
                    jb(a);
                    break;
                  case "option":
                    null != d2.value && a.setAttribute("value", "" + Sa(d2.value));
                    break;
                  case "select":
                    a.multiple = !!d2.multiple;
                    f2 = d2.value;
                    null != f2 ? fb(a, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                      a,
                      !!d2.multiple,
                      d2.defaultValue,
                      true
                    );
                    break;
                  default:
                    "function" === typeof e2.onClick && (a.onclick = Bf);
                }
                switch (c2) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d2 = !!d2.autoFocus;
                    break a;
                  case "img":
                    d2 = true;
                    break a;
                  default:
                    d2 = false;
                }
              }
              d2 && (b2.flags |= 4);
            }
            null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
          }
          S(b2);
          return null;
        case 6:
          if (a && null != b2.stateNode) Cj(a, b2, a.memoizedProps, d2);
          else {
            if ("string" !== typeof d2 && null === b2.stateNode) throw Error(p$3(166));
            c2 = xh(wh.current);
            xh(uh.current);
            if (Gg(b2)) {
              d2 = b2.stateNode;
              c2 = b2.memoizedProps;
              d2[Of] = b2;
              if (f2 = d2.nodeValue !== c2) {
                if (a = xg, null !== a) switch (a.tag) {
                  case 3:
                    Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
                    break;
                  case 5:
                    true !== a.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
                }
              }
              f2 && (b2.flags |= 4);
            } else d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
          }
          S(b2);
          return null;
        case 13:
          E(L$1);
          d2 = b2.memoizedState;
          if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
            if (I$1 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
            else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
              if (null === a) {
                if (!f2) throw Error(p$3(318));
                f2 = b2.memoizedState;
                f2 = null !== f2 ? f2.dehydrated : null;
                if (!f2) throw Error(p$3(317));
                f2[Of] = b2;
              } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
              S(b2);
              f2 = false;
            } else null !== zg && (Fj(zg), zg = null), f2 = true;
            if (!f2) return b2.flags & 65536 ? b2 : null;
          }
          if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
          d2 = null !== d2;
          d2 !== (null !== a && null !== a.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (L$1.current & 1) ? 0 === T && (T = 3) : tj()));
          null !== b2.updateQueue && (b2.flags |= 4);
          S(b2);
          return null;
        case 4:
          return zh(), Aj(a, b2), null === a && sf(b2.stateNode.containerInfo), S(b2), null;
        case 10:
          return ah(b2.type._context), S(b2), null;
        case 17:
          return Zf(b2.type) && $f(), S(b2), null;
        case 19:
          E(L$1);
          f2 = b2.memoizedState;
          if (null === f2) return S(b2), null;
          d2 = 0 !== (b2.flags & 128);
          g2 = f2.rendering;
          if (null === g2) if (d2) Dj(f2, false);
          else {
            if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b2.child; null !== a; ) {
              g2 = Ch(a);
              if (null !== g2) {
                b2.flags |= 128;
                Dj(f2, false);
                d2 = g2.updateQueue;
                null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d2 = c2;
                for (c2 = b2.child; null !== c2; ) f2 = c2, a = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
                G(L$1, L$1.current & 1 | 2);
                return b2.child;
              }
              a = a.sibling;
            }
            null !== f2.tail && B() > Gj && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
          }
          else {
            if (!d2) if (a = Ch(g2), null !== a) {
              if (b2.flags |= 128, d2 = true, c2 = a.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I$1) return S(b2), null;
            } else 2 * B() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
            f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
          }
          if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c2 = L$1.current, G(L$1, d2 ? c2 & 1 | 2 : c2 & 1), b2;
          S(b2);
          return null;
        case 22:
        case 23:
          return Hj(), d2 = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S(b2), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(p$3(156, b2.tag));
    }
    function Ij(a, b2) {
      wg(b2);
      switch (b2.tag) {
        case 1:
          return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
        case 3:
          return zh(), E(Wf), E(H$1), Eh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
        case 5:
          return Bh(b2), null;
        case 13:
          E(L$1);
          a = b2.memoizedState;
          if (null !== a && null !== a.dehydrated) {
            if (null === b2.alternate) throw Error(p$3(340));
            Ig();
          }
          a = b2.flags;
          return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
        case 19:
          return E(L$1), null;
        case 4:
          return zh(), null;
        case 10:
          return ah(b2.type._context), null;
        case 22:
        case 23:
          return Hj(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Jj = false, U$1 = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V$1 = null;
    function Lj(a, b2) {
      var c2 = a.ref;
      if (null !== c2) if ("function" === typeof c2) try {
        c2(null);
      } catch (d2) {
        W$1(a, b2, d2);
      }
      else c2.current = null;
    }
    function Mj(a, b2, c2) {
      try {
        c2();
      } catch (d2) {
        W$1(a, b2, d2);
      }
    }
    var Nj = false;
    function Oj(a, b2) {
      Cf = dd;
      a = Me();
      if (Ne$1(a)) {
        if ("selectionStart" in a) var c2 = { start: a.selectionStart, end: a.selectionEnd };
        else a: {
          c2 = (c2 = a.ownerDocument) && c2.defaultView || window;
          var d2 = c2.getSelection && c2.getSelection();
          if (d2 && 0 !== d2.rangeCount) {
            c2 = d2.anchorNode;
            var e2 = d2.anchorOffset, f2 = d2.focusNode;
            d2 = d2.focusOffset;
            try {
              c2.nodeType, f2.nodeType;
            } catch (F2) {
              c2 = null;
              break a;
            }
            var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
            b: for (; ; ) {
              for (var y2; ; ) {
                q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
                q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
                3 === q2.nodeType && (g2 += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild)) break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a) break b;
                r2 === c2 && ++l2 === e2 && (h2 = g2);
                r2 === f2 && ++m2 === d2 && (k2 = g2);
                if (null !== (y2 = q2.nextSibling)) break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
            c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
          } else c2 = null;
        }
        c2 = c2 || { start: 0, end: 0 };
      } else c2 = null;
      Df = { focusedElem: a, selectionRange: c2 };
      dd = false;
      for (V$1 = b2; null !== V$1; ) if (b2 = V$1, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a) a.return = b2, V$1 = a;
      else for (; null !== V$1; ) {
        b2 = V$1;
        try {
          var n2 = b2.alternate;
          if (0 !== (b2.flags & 1024)) switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (null !== n2) {
                var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Ci(b2.type, t2), J2);
                x2.__reactInternalSnapshotBeforeUpdate = w2;
              }
              break;
            case 3:
              var u2 = b2.stateNode.containerInfo;
              1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(p$3(163));
          }
        } catch (F2) {
          W$1(b2, b2.return, F2);
        }
        a = b2.sibling;
        if (null !== a) {
          a.return = b2.return;
          V$1 = a;
          break;
        }
        V$1 = b2.return;
      }
      n2 = Nj;
      Nj = false;
      return n2;
    }
    function Pj(a, b2, c2) {
      var d2 = b2.updateQueue;
      d2 = null !== d2 ? d2.lastEffect : null;
      if (null !== d2) {
        var e2 = d2 = d2.next;
        do {
          if ((e2.tag & a) === a) {
            var f2 = e2.destroy;
            e2.destroy = void 0;
            void 0 !== f2 && Mj(b2, c2, f2);
          }
          e2 = e2.next;
        } while (e2 !== d2);
      }
    }
    function Qj(a, b2) {
      b2 = b2.updateQueue;
      b2 = null !== b2 ? b2.lastEffect : null;
      if (null !== b2) {
        var c2 = b2 = b2.next;
        do {
          if ((c2.tag & a) === a) {
            var d2 = c2.create;
            c2.destroy = d2();
          }
          c2 = c2.next;
        } while (c2 !== b2);
      }
    }
    function Rj(a) {
      var b2 = a.ref;
      if (null !== b2) {
        var c2 = a.stateNode;
        switch (a.tag) {
          case 5:
            a = c2;
            break;
          default:
            a = c2;
        }
        "function" === typeof b2 ? b2(a) : b2.current = a;
      }
    }
    function Sj(a) {
      var b2 = a.alternate;
      null !== b2 && (a.alternate = null, Sj(b2));
      a.child = null;
      a.deletions = null;
      a.sibling = null;
      5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
      a.stateNode = null;
      a.return = null;
      a.dependencies = null;
      a.memoizedProps = null;
      a.memoizedState = null;
      a.pendingProps = null;
      a.stateNode = null;
      a.updateQueue = null;
    }
    function Tj(a) {
      return 5 === a.tag || 3 === a.tag || 4 === a.tag;
    }
    function Uj(a) {
      a: for (; ; ) {
        for (; null === a.sibling; ) {
          if (null === a.return || Tj(a.return)) return null;
          a = a.return;
        }
        a.sibling.return = a.return;
        for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
          if (a.flags & 2) continue a;
          if (null === a.child || 4 === a.tag) continue a;
          else a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2)) return a.stateNode;
      }
    }
    function Vj(a, b2, c2) {
      var d2 = a.tag;
      if (5 === d2 || 6 === d2) a = a.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
      else if (4 !== d2 && (a = a.child, null !== a)) for (Vj(a, b2, c2), a = a.sibling; null !== a; ) Vj(a, b2, c2), a = a.sibling;
    }
    function Wj(a, b2, c2) {
      var d2 = a.tag;
      if (5 === d2 || 6 === d2) a = a.stateNode, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
      else if (4 !== d2 && (a = a.child, null !== a)) for (Wj(a, b2, c2), a = a.sibling; null !== a; ) Wj(a, b2, c2), a = a.sibling;
    }
    var X = null, Xj = false;
    function Yj(a, b2, c2) {
      for (c2 = c2.child; null !== c2; ) Zj(a, b2, c2), c2 = c2.sibling;
    }
    function Zj(a, b2, c2) {
      if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
        lc.onCommitFiberUnmount(kc, c2);
      } catch (h2) {
      }
      switch (c2.tag) {
        case 5:
          U$1 || Lj(c2, b2);
        case 6:
          var d2 = X, e2 = Xj;
          X = null;
          Yj(a, b2, c2);
          X = d2;
          Xj = e2;
          null !== X && (Xj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c2) : a.removeChild(c2)) : X.removeChild(c2.stateNode));
          break;
        case 18:
          null !== X && (Xj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c2) : 1 === a.nodeType && Kf(a, c2), bd(a)) : Kf(X, c2.stateNode));
          break;
        case 4:
          d2 = X;
          e2 = Xj;
          X = c2.stateNode.containerInfo;
          Xj = true;
          Yj(a, b2, c2);
          X = d2;
          Xj = e2;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!U$1 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
            e2 = d2 = d2.next;
            do {
              var f2 = e2, g2 = f2.destroy;
              f2 = f2.tag;
              void 0 !== g2 && (0 !== (f2 & 2) ? Mj(c2, b2, g2) : 0 !== (f2 & 4) && Mj(c2, b2, g2));
              e2 = e2.next;
            } while (e2 !== d2);
          }
          Yj(a, b2, c2);
          break;
        case 1:
          if (!U$1 && (Lj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount)) try {
            d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
          } catch (h2) {
            W$1(c2, b2, h2);
          }
          Yj(a, b2, c2);
          break;
        case 21:
          Yj(a, b2, c2);
          break;
        case 22:
          c2.mode & 1 ? (U$1 = (d2 = U$1) || null !== c2.memoizedState, Yj(a, b2, c2), U$1 = d2) : Yj(a, b2, c2);
          break;
        default:
          Yj(a, b2, c2);
      }
    }
    function ak(a) {
      var b2 = a.updateQueue;
      if (null !== b2) {
        a.updateQueue = null;
        var c2 = a.stateNode;
        null === c2 && (c2 = a.stateNode = new Kj());
        b2.forEach(function(b3) {
          var d2 = bk.bind(null, a, b3);
          c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
        });
      }
    }
    function ck(a, b2) {
      var c2 = b2.deletions;
      if (null !== c2) for (var d2 = 0; d2 < c2.length; d2++) {
        var e2 = c2[d2];
        try {
          var f2 = a, g2 = b2, h2 = g2;
          a: for (; null !== h2; ) {
            switch (h2.tag) {
              case 5:
                X = h2.stateNode;
                Xj = false;
                break a;
              case 3:
                X = h2.stateNode.containerInfo;
                Xj = true;
                break a;
              case 4:
                X = h2.stateNode.containerInfo;
                Xj = true;
                break a;
            }
            h2 = h2.return;
          }
          if (null === X) throw Error(p$3(160));
          Zj(f2, g2, e2);
          X = null;
          Xj = false;
          var k2 = e2.alternate;
          null !== k2 && (k2.return = null);
          e2.return = null;
        } catch (l2) {
          W$1(e2, b2, l2);
        }
      }
      if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a), b2 = b2.sibling;
    }
    function dk(a, b2) {
      var c2 = a.alternate, d2 = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ck(b2, a);
          ek(a);
          if (d2 & 4) {
            try {
              Pj(3, a, a.return), Qj(3, a);
            } catch (t2) {
              W$1(a, a.return, t2);
            }
            try {
              Pj(5, a, a.return);
            } catch (t2) {
              W$1(a, a.return, t2);
            }
          }
          break;
        case 1:
          ck(b2, a);
          ek(a);
          d2 & 512 && null !== c2 && Lj(c2, c2.return);
          break;
        case 5:
          ck(b2, a);
          ek(a);
          d2 & 512 && null !== c2 && Lj(c2, c2.return);
          if (a.flags & 32) {
            var e2 = a.stateNode;
            try {
              ob(e2, "");
            } catch (t2) {
              W$1(a, a.return, t2);
            }
          }
          if (d2 & 4 && (e2 = a.stateNode, null != e2)) {
            var f2 = a.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a.type, k2 = a.updateQueue;
            a.updateQueue = null;
            if (null !== k2) try {
              "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
              vb(h2, g2);
              var l2 = vb(h2, f2);
              for (g2 = 0; g2 < k2.length; g2 += 2) {
                var m2 = k2[g2], q2 = k2[g2 + 1];
                "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
              }
              switch (h2) {
                case "input":
                  bb(e2, f2);
                  break;
                case "textarea":
                  ib(e2, f2);
                  break;
                case "select":
                  var r2 = e2._wrapperState.wasMultiple;
                  e2._wrapperState.wasMultiple = !!f2.multiple;
                  var y2 = f2.value;
                  null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                    e2,
                    !!f2.multiple,
                    f2.defaultValue,
                    true
                  ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
              }
              e2[Pf] = f2;
            } catch (t2) {
              W$1(a, a.return, t2);
            }
          }
          break;
        case 6:
          ck(b2, a);
          ek(a);
          if (d2 & 4) {
            if (null === a.stateNode) throw Error(p$3(162));
            e2 = a.stateNode;
            f2 = a.memoizedProps;
            try {
              e2.nodeValue = f2;
            } catch (t2) {
              W$1(a, a.return, t2);
            }
          }
          break;
        case 3:
          ck(b2, a);
          ek(a);
          if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
            bd(b2.containerInfo);
          } catch (t2) {
            W$1(a, a.return, t2);
          }
          break;
        case 4:
          ck(b2, a);
          ek(a);
          break;
        case 13:
          ck(b2, a);
          ek(a);
          e2 = a.child;
          e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B()));
          d2 & 4 && ak(a);
          break;
        case 22:
          m2 = null !== c2 && null !== c2.memoizedState;
          a.mode & 1 ? (U$1 = (l2 = U$1) || m2, ck(b2, a), U$1 = l2) : ck(b2, a);
          ek(a);
          if (d2 & 8192) {
            l2 = null !== a.memoizedState;
            if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1)) for (V$1 = a, m2 = a.child; null !== m2; ) {
              for (q2 = V$1 = m2; null !== V$1; ) {
                r2 = V$1;
                y2 = r2.child;
                switch (r2.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Pj(4, r2, r2.return);
                    break;
                  case 1:
                    Lj(r2, r2.return);
                    var n2 = r2.stateNode;
                    if ("function" === typeof n2.componentWillUnmount) {
                      d2 = r2;
                      c2 = r2.return;
                      try {
                        b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                      } catch (t2) {
                        W$1(d2, c2, t2);
                      }
                    }
                    break;
                  case 5:
                    Lj(r2, r2.return);
                    break;
                  case 22:
                    if (null !== r2.memoizedState) {
                      gk(q2);
                      continue;
                    }
                }
                null !== y2 ? (y2.return = r2, V$1 = y2) : gk(q2);
              }
              m2 = m2.sibling;
            }
            a: for (m2 = null, q2 = a; ; ) {
              if (5 === q2.tag) {
                if (null === m2) {
                  m2 = q2;
                  try {
                    e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                  } catch (t2) {
                    W$1(a, a.return, t2);
                  }
                }
              } else if (6 === q2.tag) {
                if (null === m2) try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W$1(a, a.return, t2);
                }
              } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
                q2.child.return = q2;
                q2 = q2.child;
                continue;
              }
              if (q2 === a) break a;
              for (; null === q2.sibling; ) {
                if (null === q2.return || q2.return === a) break a;
                m2 === q2 && (m2 = null);
                q2 = q2.return;
              }
              m2 === q2 && (m2 = null);
              q2.sibling.return = q2.return;
              q2 = q2.sibling;
            }
          }
          break;
        case 19:
          ck(b2, a);
          ek(a);
          d2 & 4 && ak(a);
          break;
        case 21:
          break;
        default:
          ck(
            b2,
            a
          ), ek(a);
      }
    }
    function ek(a) {
      var b2 = a.flags;
      if (b2 & 2) {
        try {
          a: {
            for (var c2 = a.return; null !== c2; ) {
              if (Tj(c2)) {
                var d2 = c2;
                break a;
              }
              c2 = c2.return;
            }
            throw Error(p$3(160));
          }
          switch (d2.tag) {
            case 5:
              var e2 = d2.stateNode;
              d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
              var f2 = Uj(a);
              Wj(a, f2, e2);
              break;
            case 3:
            case 4:
              var g2 = d2.stateNode.containerInfo, h2 = Uj(a);
              Vj(a, h2, g2);
              break;
            default:
              throw Error(p$3(161));
          }
        } catch (k2) {
          W$1(a, a.return, k2);
        }
        a.flags &= -3;
      }
      b2 & 4096 && (a.flags &= -4097);
    }
    function hk(a, b2, c2) {
      V$1 = a;
      ik(a);
    }
    function ik(a, b2, c2) {
      for (var d2 = 0 !== (a.mode & 1); null !== V$1; ) {
        var e2 = V$1, f2 = e2.child;
        if (22 === e2.tag && d2) {
          var g2 = null !== e2.memoizedState || Jj;
          if (!g2) {
            var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$1;
            h2 = Jj;
            var l2 = U$1;
            Jj = g2;
            if ((U$1 = k2) && !l2) for (V$1 = e2; null !== V$1; ) g2 = V$1, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e2) : null !== k2 ? (k2.return = g2, V$1 = k2) : jk(e2);
            for (; null !== f2; ) V$1 = f2, ik(f2), f2 = f2.sibling;
            V$1 = e2;
            Jj = h2;
            U$1 = l2;
          }
          kk(a);
        } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V$1 = f2) : kk(a);
      }
    }
    function kk(a) {
      for (; null !== V$1; ) {
        var b2 = V$1;
        if (0 !== (b2.flags & 8772)) {
          var c2 = b2.alternate;
          try {
            if (0 !== (b2.flags & 8772)) switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                U$1 || Qj(5, b2);
                break;
              case 1:
                var d2 = b2.stateNode;
                if (b2.flags & 4 && !U$1) if (null === c2) d2.componentDidMount();
                else {
                  var e2 = b2.elementType === b2.type ? c2.memoizedProps : Ci(b2.type, c2.memoizedProps);
                  d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                }
                var f2 = b2.updateQueue;
                null !== f2 && sh(b2, f2, d2);
                break;
              case 3:
                var g2 = b2.updateQueue;
                if (null !== g2) {
                  c2 = null;
                  if (null !== b2.child) switch (b2.child.tag) {
                    case 5:
                      c2 = b2.child.stateNode;
                      break;
                    case 1:
                      c2 = b2.child.stateNode;
                  }
                  sh(b2, g2, c2);
                }
                break;
              case 5:
                var h2 = b2.stateNode;
                if (null === c2 && b2.flags & 4) {
                  c2 = h2;
                  var k2 = b2.memoizedProps;
                  switch (b2.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k2.autoFocus && c2.focus();
                      break;
                    case "img":
                      k2.src && (c2.src = k2.src);
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
                if (null === b2.memoizedState) {
                  var l2 = b2.alternate;
                  if (null !== l2) {
                    var m2 = l2.memoizedState;
                    if (null !== m2) {
                      var q2 = m2.dehydrated;
                      null !== q2 && bd(q2);
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
                throw Error(p$3(163));
            }
            U$1 || b2.flags & 512 && Rj(b2);
          } catch (r2) {
            W$1(b2, b2.return, r2);
          }
        }
        if (b2 === a) {
          V$1 = null;
          break;
        }
        c2 = b2.sibling;
        if (null !== c2) {
          c2.return = b2.return;
          V$1 = c2;
          break;
        }
        V$1 = b2.return;
      }
    }
    function gk(a) {
      for (; null !== V$1; ) {
        var b2 = V$1;
        if (b2 === a) {
          V$1 = null;
          break;
        }
        var c2 = b2.sibling;
        if (null !== c2) {
          c2.return = b2.return;
          V$1 = c2;
          break;
        }
        V$1 = b2.return;
      }
    }
    function jk(a) {
      for (; null !== V$1; ) {
        var b2 = V$1;
        try {
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              var c2 = b2.return;
              try {
                Qj(4, b2);
              } catch (k2) {
                W$1(b2, c2, k2);
              }
              break;
            case 1:
              var d2 = b2.stateNode;
              if ("function" === typeof d2.componentDidMount) {
                var e2 = b2.return;
                try {
                  d2.componentDidMount();
                } catch (k2) {
                  W$1(b2, e2, k2);
                }
              }
              var f2 = b2.return;
              try {
                Rj(b2);
              } catch (k2) {
                W$1(b2, f2, k2);
              }
              break;
            case 5:
              var g2 = b2.return;
              try {
                Rj(b2);
              } catch (k2) {
                W$1(b2, g2, k2);
              }
          }
        } catch (k2) {
          W$1(b2, b2.return, k2);
        }
        if (b2 === a) {
          V$1 = null;
          break;
        }
        var h2 = b2.sibling;
        if (null !== h2) {
          h2.return = b2.return;
          V$1 = h2;
          break;
        }
        V$1 = b2.return;
      }
    }
    var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K$1 = 0, Q$1 = null, Y = null, Z$1 = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi$1 = false, Pi$1 = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
    function R$1() {
      return 0 !== (K$1 & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
    }
    function yi$1(a) {
      if (0 === (a.mode & 1)) return 1;
      if (0 !== (K$1 & 2) && 0 !== Z$1) return Z$1 & -Z$1;
      if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
      a = C;
      if (0 !== a) return a;
      a = window.event;
      a = void 0 === a ? 16 : jd(a.type);
      return a;
    }
    function gi(a, b2, c2, d2) {
      if (50 < yk) throw yk = 0, zk = null, Error(p$3(185));
      Ac(a, c2, d2);
      if (0 === (K$1 & 2) || a !== Q$1) a === Q$1 && (0 === (K$1 & 2) && (qk |= c2), 4 === T && Ck(a, Z$1)), Dk(a, d2), 1 === c2 && 0 === K$1 && 0 === (b2.mode & 1) && (Gj = B() + 500, fg && jg());
    }
    function Dk(a, b2) {
      var c2 = a.callbackNode;
      wc(a, b2);
      var d2 = uc(a, a === Q$1 ? Z$1 : 0);
      if (0 === d2) null !== c2 && bc(c2), a.callbackNode = null, a.callbackPriority = 0;
      else if (b2 = d2 & -d2, a.callbackPriority !== b2) {
        null != c2 && bc(c2);
        if (1 === b2) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
          0 === (K$1 & 6) && jg();
        }), c2 = null;
        else {
          switch (Dc(d2)) {
            case 1:
              c2 = fc;
              break;
            case 4:
              c2 = gc;
              break;
            case 16:
              c2 = hc;
              break;
            case 536870912:
              c2 = jc;
              break;
            default:
              c2 = hc;
          }
          c2 = Fk(c2, Gk.bind(null, a));
        }
        a.callbackPriority = b2;
        a.callbackNode = c2;
      }
    }
    function Gk(a, b2) {
      Ak = -1;
      Bk = 0;
      if (0 !== (K$1 & 6)) throw Error(p$3(327));
      var c2 = a.callbackNode;
      if (Hk() && a.callbackNode !== c2) return null;
      var d2 = uc(a, a === Q$1 ? Z$1 : 0);
      if (0 === d2) return null;
      if (0 !== (d2 & 30) || 0 !== (d2 & a.expiredLanes) || b2) b2 = Ik(a, d2);
      else {
        b2 = d2;
        var e2 = K$1;
        K$1 |= 2;
        var f2 = Jk();
        if (Q$1 !== a || Z$1 !== b2) uk = null, Gj = B() + 500, Kk(a, b2);
        do
          try {
            Lk();
            break;
          } catch (h2) {
            Mk(a, h2);
          }
        while (1);
        $g();
        mk.current = f2;
        K$1 = e2;
        null !== Y ? b2 = 0 : (Q$1 = null, Z$1 = 0, b2 = T);
      }
      if (0 !== b2) {
        2 === b2 && (e2 = xc(a), 0 !== e2 && (d2 = e2, b2 = Nk(a, e2)));
        if (1 === b2) throw c2 = pk, Kk(a, 0), Ck(a, d2), Dk(a, B()), c2;
        if (6 === b2) Ck(a, d2);
        else {
          e2 = a.current.alternate;
          if (0 === (d2 & 30) && !Ok(e2) && (b2 = Ik(a, d2), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d2 = f2, b2 = Nk(a, f2))), 1 === b2)) throw c2 = pk, Kk(a, 0), Ck(a, d2), Dk(a, B()), c2;
          a.finishedWork = e2;
          a.finishedLanes = d2;
          switch (b2) {
            case 0:
            case 1:
              throw Error(p$3(345));
            case 2:
              Pk(a, tk, uk);
              break;
            case 3:
              Ck(a, d2);
              if ((d2 & 130023424) === d2 && (b2 = fk + 500 - B(), 10 < b2)) {
                if (0 !== uc(a, 0)) break;
                e2 = a.suspendedLanes;
                if ((e2 & d2) !== d2) {
                  R$1();
                  a.pingedLanes |= a.suspendedLanes & e2;
                  break;
                }
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b2);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 4:
              Ck(a, d2);
              if ((d2 & 4194240) === d2) break;
              b2 = a.eventTimes;
              for (e2 = -1; 0 < d2; ) {
                var g2 = 31 - oc(d2);
                f2 = 1 << g2;
                g2 = b2[g2];
                g2 > e2 && (e2 = g2);
                d2 &= ~f2;
              }
              d2 = e2;
              d2 = B() - d2;
              d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * lk(d2 / 1960)) - d2;
              if (10 < d2) {
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d2);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 5:
              Pk(a, tk, uk);
              break;
            default:
              throw Error(p$3(329));
          }
        }
      }
      Dk(a, B());
      return a.callbackNode === c2 ? Gk.bind(null, a) : null;
    }
    function Nk(a, b2) {
      var c2 = sk;
      a.current.memoizedState.isDehydrated && (Kk(a, b2).flags |= 256);
      a = Ik(a, b2);
      2 !== a && (b2 = tk, tk = c2, null !== b2 && Fj(b2));
      return a;
    }
    function Fj(a) {
      null === tk ? tk = a : tk.push.apply(tk, a);
    }
    function Ok(a) {
      for (var b2 = a; ; ) {
        if (b2.flags & 16384) {
          var c2 = b2.updateQueue;
          if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d2 = 0; d2 < c2.length; d2++) {
            var e2 = c2[d2], f2 = e2.getSnapshot;
            e2 = e2.value;
            try {
              if (!He(f2(), e2)) return false;
            } catch (g2) {
              return false;
            }
          }
        }
        c2 = b2.child;
        if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
        else {
          if (b2 === a) break;
          for (; null === b2.sibling; ) {
            if (null === b2.return || b2.return === a) return true;
            b2 = b2.return;
          }
          b2.sibling.return = b2.return;
          b2 = b2.sibling;
        }
      }
      return true;
    }
    function Ck(a, b2) {
      b2 &= ~rk;
      b2 &= ~qk;
      a.suspendedLanes |= b2;
      a.pingedLanes &= ~b2;
      for (a = a.expirationTimes; 0 < b2; ) {
        var c2 = 31 - oc(b2), d2 = 1 << c2;
        a[c2] = -1;
        b2 &= ~d2;
      }
    }
    function Ek(a) {
      if (0 !== (K$1 & 6)) throw Error(p$3(327));
      Hk();
      var b2 = uc(a, 0);
      if (0 === (b2 & 1)) return Dk(a, B()), null;
      var c2 = Ik(a, b2);
      if (0 !== a.tag && 2 === c2) {
        var d2 = xc(a);
        0 !== d2 && (b2 = d2, c2 = Nk(a, d2));
      }
      if (1 === c2) throw c2 = pk, Kk(a, 0), Ck(a, b2), Dk(a, B()), c2;
      if (6 === c2) throw Error(p$3(345));
      a.finishedWork = a.current.alternate;
      a.finishedLanes = b2;
      Pk(a, tk, uk);
      Dk(a, B());
      return null;
    }
    function Qk(a, b2) {
      var c2 = K$1;
      K$1 |= 1;
      try {
        return a(b2);
      } finally {
        K$1 = c2, 0 === K$1 && (Gj = B() + 500, fg && jg());
      }
    }
    function Rk(a) {
      null !== wk && 0 === wk.tag && 0 === (K$1 & 6) && Hk();
      var b2 = K$1;
      K$1 |= 1;
      var c2 = ok.transition, d2 = C;
      try {
        if (ok.transition = null, C = 1, a) return a();
      } finally {
        C = d2, ok.transition = c2, K$1 = b2, 0 === (K$1 & 6) && jg();
      }
    }
    function Hj() {
      fj = ej.current;
      E(ej);
    }
    function Kk(a, b2) {
      a.finishedWork = null;
      a.finishedLanes = 0;
      var c2 = a.timeoutHandle;
      -1 !== c2 && (a.timeoutHandle = -1, Gf(c2));
      if (null !== Y) for (c2 = Y.return; null !== c2; ) {
        var d2 = c2;
        wg(d2);
        switch (d2.tag) {
          case 1:
            d2 = d2.type.childContextTypes;
            null !== d2 && void 0 !== d2 && $f();
            break;
          case 3:
            zh();
            E(Wf);
            E(H$1);
            Eh();
            break;
          case 5:
            Bh(d2);
            break;
          case 4:
            zh();
            break;
          case 13:
            E(L$1);
            break;
          case 19:
            E(L$1);
            break;
          case 10:
            ah(d2.type._context);
            break;
          case 22:
          case 23:
            Hj();
        }
        c2 = c2.return;
      }
      Q$1 = a;
      Y = a = Pg(a.current, null);
      Z$1 = fj = b2;
      T = 0;
      pk = null;
      rk = qk = rh = 0;
      tk = sk = null;
      if (null !== fh) {
        for (b2 = 0; b2 < fh.length; b2++) if (c2 = fh[b2], d2 = c2.interleaved, null !== d2) {
          c2.interleaved = null;
          var e2 = d2.next, f2 = c2.pending;
          if (null !== f2) {
            var g2 = f2.next;
            f2.next = e2;
            d2.next = g2;
          }
          c2.pending = d2;
        }
        fh = null;
      }
      return a;
    }
    function Mk(a, b2) {
      do {
        var c2 = Y;
        try {
          $g();
          Fh.current = Rh;
          if (Ih) {
            for (var d2 = M.memoizedState; null !== d2; ) {
              var e2 = d2.queue;
              null !== e2 && (e2.pending = null);
              d2 = d2.next;
            }
            Ih = false;
          }
          Hh = 0;
          O$1 = N$1 = M = null;
          Jh = false;
          Kh = 0;
          nk.current = null;
          if (null === c2 || null === c2.return) {
            T = 1;
            pk = b2;
            Y = null;
            break;
          }
          a: {
            var f2 = a, g2 = c2.return, h2 = c2, k2 = b2;
            b2 = Z$1;
            h2.flags |= 32768;
            if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
              var l2 = k2, m2 = h2, q2 = m2.tag;
              if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
                var r2 = m2.alternate;
                r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
              }
              var y2 = Ui(g2);
              if (null !== y2) {
                y2.flags &= -257;
                Vi(y2, g2, h2, f2, b2);
                y2.mode & 1 && Si$1(f2, l2, b2);
                b2 = y2;
                k2 = l2;
                var n2 = b2.updateQueue;
                if (null === n2) {
                  var t2 = /* @__PURE__ */ new Set();
                  t2.add(k2);
                  b2.updateQueue = t2;
                } else n2.add(k2);
                break a;
              } else {
                if (0 === (b2 & 1)) {
                  Si$1(f2, l2, b2);
                  tj();
                  break a;
                }
                k2 = Error(p$3(426));
              }
            } else if (I$1 && h2.mode & 1) {
              var J2 = Ui(g2);
              if (null !== J2) {
                0 === (J2.flags & 65536) && (J2.flags |= 256);
                Vi(J2, g2, h2, f2, b2);
                Jg(Ji(k2, h2));
                break a;
              }
            }
            f2 = k2 = Ji(k2, h2);
            4 !== T && (T = 2);
            null === sk ? sk = [f2] : sk.push(f2);
            f2 = g2;
            do {
              switch (f2.tag) {
                case 3:
                  f2.flags |= 65536;
                  b2 &= -b2;
                  f2.lanes |= b2;
                  var x2 = Ni$1(f2, k2, b2);
                  ph(f2, x2);
                  break a;
                case 1:
                  h2 = k2;
                  var w2 = f2.type, u2 = f2.stateNode;
                  if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                    f2.flags |= 65536;
                    b2 &= -b2;
                    f2.lanes |= b2;
                    var F2 = Qi(f2, h2, b2);
                    ph(f2, F2);
                    break a;
                  }
              }
              f2 = f2.return;
            } while (null !== f2);
          }
          Sk(c2);
        } catch (na) {
          b2 = na;
          Y === c2 && null !== c2 && (Y = c2 = c2.return);
          continue;
        }
        break;
      } while (1);
    }
    function Jk() {
      var a = mk.current;
      mk.current = Rh;
      return null === a ? Rh : a;
    }
    function tj() {
      if (0 === T || 3 === T || 2 === T) T = 4;
      null === Q$1 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q$1, Z$1);
    }
    function Ik(a, b2) {
      var c2 = K$1;
      K$1 |= 2;
      var d2 = Jk();
      if (Q$1 !== a || Z$1 !== b2) uk = null, Kk(a, b2);
      do
        try {
          Tk();
          break;
        } catch (e2) {
          Mk(a, e2);
        }
      while (1);
      $g();
      K$1 = c2;
      mk.current = d2;
      if (null !== Y) throw Error(p$3(261));
      Q$1 = null;
      Z$1 = 0;
      return T;
    }
    function Tk() {
      for (; null !== Y; ) Uk(Y);
    }
    function Lk() {
      for (; null !== Y && !cc(); ) Uk(Y);
    }
    function Uk(a) {
      var b2 = Vk(a.alternate, a, fj);
      a.memoizedProps = a.pendingProps;
      null === b2 ? Sk(a) : Y = b2;
      nk.current = null;
    }
    function Sk(a) {
      var b2 = a;
      do {
        var c2 = b2.alternate;
        a = b2.return;
        if (0 === (b2.flags & 32768)) {
          if (c2 = Ej(c2, b2, fj), null !== c2) {
            Y = c2;
            return;
          }
        } else {
          c2 = Ij(c2, b2);
          if (null !== c2) {
            c2.flags &= 32767;
            Y = c2;
            return;
          }
          if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
          else {
            T = 6;
            Y = null;
            return;
          }
        }
        b2 = b2.sibling;
        if (null !== b2) {
          Y = b2;
          return;
        }
        Y = b2 = a;
      } while (null !== b2);
      0 === T && (T = 5);
    }
    function Pk(a, b2, c2) {
      var d2 = C, e2 = ok.transition;
      try {
        ok.transition = null, C = 1, Wk(a, b2, c2, d2);
      } finally {
        ok.transition = e2, C = d2;
      }
      return null;
    }
    function Wk(a, b2, c2, d2) {
      do
        Hk();
      while (null !== wk);
      if (0 !== (K$1 & 6)) throw Error(p$3(327));
      c2 = a.finishedWork;
      var e2 = a.finishedLanes;
      if (null === c2) return null;
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c2 === a.current) throw Error(p$3(177));
      a.callbackNode = null;
      a.callbackPriority = 0;
      var f2 = c2.lanes | c2.childLanes;
      Bc(a, f2);
      a === Q$1 && (Y = Q$1 = null, Z$1 = 0);
      0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
        Hk();
        return null;
      }));
      f2 = 0 !== (c2.flags & 15990);
      if (0 !== (c2.subtreeFlags & 15990) || f2) {
        f2 = ok.transition;
        ok.transition = null;
        var g2 = C;
        C = 1;
        var h2 = K$1;
        K$1 |= 4;
        nk.current = null;
        Oj(a, c2);
        dk(c2, a);
        Oe$1(Df);
        dd = !!Cf;
        Df = Cf = null;
        a.current = c2;
        hk(c2);
        dc();
        K$1 = h2;
        C = g2;
        ok.transition = f2;
      } else a.current = c2;
      vk && (vk = false, wk = a, xk = e2);
      f2 = a.pendingLanes;
      0 === f2 && (Ri = null);
      mc(c2.stateNode);
      Dk(a, B());
      if (null !== b2) for (d2 = a.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
      if (Oi$1) throw Oi$1 = false, a = Pi$1, Pi$1 = null, a;
      0 !== (xk & 1) && 0 !== a.tag && Hk();
      f2 = a.pendingLanes;
      0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
      jg();
      return null;
    }
    function Hk() {
      if (null !== wk) {
        var a = Dc(xk), b2 = ok.transition, c2 = C;
        try {
          ok.transition = null;
          C = 16 > a ? 16 : a;
          if (null === wk) var d2 = false;
          else {
            a = wk;
            wk = null;
            xk = 0;
            if (0 !== (K$1 & 6)) throw Error(p$3(331));
            var e2 = K$1;
            K$1 |= 4;
            for (V$1 = a.current; null !== V$1; ) {
              var f2 = V$1, g2 = f2.child;
              if (0 !== (V$1.flags & 16)) {
                var h2 = f2.deletions;
                if (null !== h2) {
                  for (var k2 = 0; k2 < h2.length; k2++) {
                    var l2 = h2[k2];
                    for (V$1 = l2; null !== V$1; ) {
                      var m2 = V$1;
                      switch (m2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Pj(8, m2, f2);
                      }
                      var q2 = m2.child;
                      if (null !== q2) q2.return = m2, V$1 = q2;
                      else for (; null !== V$1; ) {
                        m2 = V$1;
                        var r2 = m2.sibling, y2 = m2.return;
                        Sj(m2);
                        if (m2 === l2) {
                          V$1 = null;
                          break;
                        }
                        if (null !== r2) {
                          r2.return = y2;
                          V$1 = r2;
                          break;
                        }
                        V$1 = y2;
                      }
                    }
                  }
                  var n2 = f2.alternate;
                  if (null !== n2) {
                    var t2 = n2.child;
                    if (null !== t2) {
                      n2.child = null;
                      do {
                        var J2 = t2.sibling;
                        t2.sibling = null;
                        t2 = J2;
                      } while (null !== t2);
                    }
                  }
                  V$1 = f2;
                }
              }
              if (0 !== (f2.subtreeFlags & 2064) && null !== g2) g2.return = f2, V$1 = g2;
              else b: for (; null !== V$1; ) {
                f2 = V$1;
                if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pj(9, f2, f2.return);
                }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V$1 = x2;
                  break b;
                }
                V$1 = f2.return;
              }
            }
            var w2 = a.current;
            for (V$1 = w2; null !== V$1; ) {
              g2 = V$1;
              var u2 = g2.child;
              if (0 !== (g2.subtreeFlags & 2064) && null !== u2) u2.return = g2, V$1 = u2;
              else b: for (g2 = w2; null !== V$1; ) {
                h2 = V$1;
                if (0 !== (h2.flags & 2048)) try {
                  switch (h2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, h2);
                  }
                } catch (na) {
                  W$1(h2, h2.return, na);
                }
                if (h2 === g2) {
                  V$1 = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (null !== F2) {
                  F2.return = h2.return;
                  V$1 = F2;
                  break b;
                }
                V$1 = h2.return;
              }
            }
            K$1 = e2;
            jg();
            if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
              lc.onPostCommitFiberRoot(kc, a);
            } catch (na) {
            }
            d2 = true;
          }
          return d2;
        } finally {
          C = c2, ok.transition = b2;
        }
      }
      return false;
    }
    function Xk(a, b2, c2) {
      b2 = Ji(c2, b2);
      b2 = Ni$1(a, b2, 1);
      a = nh(a, b2, 1);
      b2 = R$1();
      null !== a && (Ac(a, 1, b2), Dk(a, b2));
    }
    function W$1(a, b2, c2) {
      if (3 === a.tag) Xk(a, a, c2);
      else for (; null !== b2; ) {
        if (3 === b2.tag) {
          Xk(b2, a, c2);
          break;
        } else if (1 === b2.tag) {
          var d2 = b2.stateNode;
          if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ri || !Ri.has(d2))) {
            a = Ji(c2, a);
            a = Qi(b2, a, 1);
            b2 = nh(b2, a, 1);
            a = R$1();
            null !== b2 && (Ac(b2, 1, a), Dk(b2, a));
            break;
          }
        }
        b2 = b2.return;
      }
    }
    function Ti(a, b2, c2) {
      var d2 = a.pingCache;
      null !== d2 && d2.delete(b2);
      b2 = R$1();
      a.pingedLanes |= a.suspendedLanes & c2;
      Q$1 === a && (Z$1 & c2) === c2 && (4 === T || 3 === T && (Z$1 & 130023424) === Z$1 && 500 > B() - fk ? Kk(a, 0) : rk |= c2);
      Dk(a, b2);
    }
    function Yk(a, b2) {
      0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
      var c2 = R$1();
      a = ih(a, b2);
      null !== a && (Ac(a, b2, c2), Dk(a, c2));
    }
    function uj(a) {
      var b2 = a.memoizedState, c2 = 0;
      null !== b2 && (c2 = b2.retryLane);
      Yk(a, c2);
    }
    function bk(a, b2) {
      var c2 = 0;
      switch (a.tag) {
        case 13:
          var d2 = a.stateNode;
          var e2 = a.memoizedState;
          null !== e2 && (c2 = e2.retryLane);
          break;
        case 19:
          d2 = a.stateNode;
          break;
        default:
          throw Error(p$3(314));
      }
      null !== d2 && d2.delete(b2);
      Yk(a, c2);
    }
    var Vk;
    Vk = function(a, b2, c2) {
      if (null !== a) if (a.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
      else {
        if (0 === (a.lanes & c2) && 0 === (b2.flags & 128)) return dh = false, yj(a, b2, c2);
        dh = 0 !== (a.flags & 131072) ? true : false;
      }
      else dh = false, I$1 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
      b2.lanes = 0;
      switch (b2.tag) {
        case 2:
          var d2 = b2.type;
          ij(a, b2);
          a = b2.pendingProps;
          var e2 = Yf(b2, H$1.current);
          ch(b2, c2);
          e2 = Nh(null, b2, d2, a, e2, c2);
          var f2 = Sh();
          b2.flags |= 1;
          "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b2), e2.updater = Ei$1, b2.stateNode = e2, e2._reactInternals = b2, Ii$1(b2, d2, a, c2), b2 = jj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$1 && f2 && vg(b2), Xi(null, b2, e2, c2), b2 = b2.child);
          return b2;
        case 16:
          d2 = b2.elementType;
          a: {
            ij(a, b2);
            a = b2.pendingProps;
            e2 = d2._init;
            d2 = e2(d2._payload);
            b2.type = d2;
            e2 = b2.tag = Zk(d2);
            a = Ci(d2, a);
            switch (e2) {
              case 0:
                b2 = cj(null, b2, d2, a, c2);
                break a;
              case 1:
                b2 = hj(null, b2, d2, a, c2);
                break a;
              case 11:
                b2 = Yi$1(null, b2, d2, a, c2);
                break a;
              case 14:
                b2 = $i$1(null, b2, d2, Ci(d2.type, a), c2);
                break a;
            }
            throw Error(p$3(
              306,
              d2,
              ""
            ));
          }
          return b2;
        case 0:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), cj(a, b2, d2, e2, c2);
        case 1:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), hj(a, b2, d2, e2, c2);
        case 3:
          a: {
            kj(b2);
            if (null === a) throw Error(p$3(387));
            d2 = b2.pendingProps;
            f2 = b2.memoizedState;
            e2 = f2.element;
            lh(a, b2);
            qh(b2, d2, null, c2);
            var g2 = b2.memoizedState;
            d2 = g2.element;
            if (f2.isDehydrated) if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
              e2 = Ji(Error(p$3(423)), b2);
              b2 = lj(a, b2, d2, c2, e2);
              break a;
            } else if (d2 !== e2) {
              e2 = Ji(Error(p$3(424)), b2);
              b2 = lj(a, b2, d2, c2, e2);
              break a;
            } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$1 = true, zg = null, c2 = Vg(b2, null, d2, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
            else {
              Ig();
              if (d2 === e2) {
                b2 = Zi(a, b2, c2);
                break a;
              }
              Xi(a, b2, d2, c2);
            }
            b2 = b2.child;
          }
          return b2;
        case 5:
          return Ah(b2), null === a && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), gj(a, b2), Xi(a, b2, g2, c2), b2.child;
        case 6:
          return null === a && Eg(b2), null;
        case 13:
          return oj(a, b2, c2);
        case 4:
          return yh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a ? b2.child = Ug(b2, null, d2, c2) : Xi(a, b2, d2, c2), b2.child;
        case 11:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), Yi$1(a, b2, d2, e2, c2);
        case 7:
          return Xi(a, b2, b2.pendingProps, c2), b2.child;
        case 8:
          return Xi(a, b2, b2.pendingProps.children, c2), b2.child;
        case 12:
          return Xi(a, b2, b2.pendingProps.children, c2), b2.child;
        case 10:
          a: {
            d2 = b2.type._context;
            e2 = b2.pendingProps;
            f2 = b2.memoizedProps;
            g2 = e2.value;
            G(Wg, d2._currentValue);
            d2._currentValue = g2;
            if (null !== f2) if (He(f2.value, g2)) {
              if (f2.children === e2.children && !Wf.current) {
                b2 = Zi(a, b2, c2);
                break a;
              }
            } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
              var h2 = f2.dependencies;
              if (null !== h2) {
                g2 = f2.child;
                for (var k2 = h2.firstContext; null !== k2; ) {
                  if (k2.context === d2) {
                    if (1 === f2.tag) {
                      k2 = mh(-1, c2 & -c2);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c2;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c2);
                    bh(
                      f2.return,
                      c2,
                      b2
                    );
                    h2.lanes |= c2;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag) g2 = f2.type === b2.type ? null : f2.child;
              else if (18 === f2.tag) {
                g2 = f2.return;
                if (null === g2) throw Error(p$3(341));
                g2.lanes |= c2;
                h2 = g2.alternate;
                null !== h2 && (h2.lanes |= c2);
                bh(g2, c2, b2);
                g2 = f2.sibling;
              } else g2 = f2.child;
              if (null !== g2) g2.return = f2;
              else for (g2 = f2; null !== g2; ) {
                if (g2 === b2) {
                  g2 = null;
                  break;
                }
                f2 = g2.sibling;
                if (null !== f2) {
                  f2.return = g2.return;
                  g2 = f2;
                  break;
                }
                g2 = g2.return;
              }
              f2 = g2;
            }
            Xi(a, b2, e2.children, c2);
            b2 = b2.child;
          }
          return b2;
        case 9:
          return e2 = b2.type, d2 = b2.pendingProps.children, ch(b2, c2), e2 = eh(e2), d2 = d2(e2), b2.flags |= 1, Xi(a, b2, d2, c2), b2.child;
        case 14:
          return d2 = b2.type, e2 = Ci(d2, b2.pendingProps), e2 = Ci(d2.type, e2), $i$1(a, b2, d2, e2, c2);
        case 15:
          return bj(a, b2, b2.type, b2.pendingProps, c2);
        case 17:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), ij(a, b2), b2.tag = 1, Zf(d2) ? (a = true, cg(b2)) : a = false, ch(b2, c2), Gi(b2, d2, e2), Ii$1(b2, d2, e2, c2), jj(null, b2, d2, true, a, c2);
        case 19:
          return xj(a, b2, c2);
        case 22:
          return dj(a, b2, c2);
      }
      throw Error(p$3(156, b2.tag));
    };
    function Fk(a, b2) {
      return ac(a, b2);
    }
    function $k(a, b2, c2, d2) {
      this.tag = a;
      this.key = c2;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b2;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d2;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function Bg(a, b2, c2, d2) {
      return new $k(a, b2, c2, d2);
    }
    function aj(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }
    function Zk(a) {
      if ("function" === typeof a) return aj(a) ? 1 : 0;
      if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === Da) return 11;
        if (a === Ga) return 14;
      }
      return 2;
    }
    function Pg(a, b2) {
      var c2 = a.alternate;
      null === c2 ? (c2 = Bg(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
      c2.flags = a.flags & 14680064;
      c2.childLanes = a.childLanes;
      c2.lanes = a.lanes;
      c2.child = a.child;
      c2.memoizedProps = a.memoizedProps;
      c2.memoizedState = a.memoizedState;
      c2.updateQueue = a.updateQueue;
      b2 = a.dependencies;
      c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
      c2.sibling = a.sibling;
      c2.index = a.index;
      c2.ref = a.ref;
      return c2;
    }
    function Rg(a, b2, c2, d2, e2, f2) {
      var g2 = 2;
      d2 = a;
      if ("function" === typeof a) aj(a) && (g2 = 1);
      else if ("string" === typeof a) g2 = 5;
      else a: switch (a) {
        case ya:
          return Tg(c2.children, e2, f2, b2);
        case za:
          g2 = 8;
          e2 |= 8;
          break;
        case Aa:
          return a = Bg(12, c2, b2, e2 | 2), a.elementType = Aa, a.lanes = f2, a;
        case Ea:
          return a = Bg(13, c2, b2, e2), a.elementType = Ea, a.lanes = f2, a;
        case Fa:
          return a = Bg(19, c2, b2, e2), a.elementType = Fa, a.lanes = f2, a;
        case Ia:
          return pj(c2, e2, f2, b2);
        default:
          if ("object" === typeof a && null !== a) switch (a.$$typeof) {
            case Ba:
              g2 = 10;
              break a;
            case Ca:
              g2 = 9;
              break a;
            case Da:
              g2 = 11;
              break a;
            case Ga:
              g2 = 14;
              break a;
            case Ha:
              g2 = 16;
              d2 = null;
              break a;
          }
          throw Error(p$3(130, null == a ? a : typeof a, ""));
      }
      b2 = Bg(g2, c2, b2, e2);
      b2.elementType = a;
      b2.type = d2;
      b2.lanes = f2;
      return b2;
    }
    function Tg(a, b2, c2, d2) {
      a = Bg(7, a, d2, b2);
      a.lanes = c2;
      return a;
    }
    function pj(a, b2, c2, d2) {
      a = Bg(22, a, d2, b2);
      a.elementType = Ia;
      a.lanes = c2;
      a.stateNode = { isHidden: false };
      return a;
    }
    function Qg(a, b2, c2) {
      a = Bg(6, a, null, b2);
      a.lanes = c2;
      return a;
    }
    function Sg(a, b2, c2) {
      b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
      b2.lanes = c2;
      b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
      return b2;
    }
    function al(a, b2, c2, d2, e2) {
      this.tag = b2;
      this.containerInfo = a;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.pendingContext = this.context = null;
      this.callbackPriority = 0;
      this.eventTimes = zc(0);
      this.expirationTimes = zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = zc(0);
      this.identifierPrefix = d2;
      this.onRecoverableError = e2;
      this.mutableSourceEagerHydrationData = null;
    }
    function bl(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      a = new al(a, b2, c2, h2, k2);
      1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
      f2 = Bg(3, null, null, b2);
      a.current = f2;
      f2.stateNode = a;
      f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      kh(f2);
      return a;
    }
    function cl(a, b2, c2) {
      var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
    }
    function dl(a) {
      if (!a) return Vf;
      a = a._reactInternals;
      a: {
        if (Vb(a) !== a || 1 !== a.tag) throw Error(p$3(170));
        var b2 = a;
        do {
          switch (b2.tag) {
            case 3:
              b2 = b2.stateNode.context;
              break a;
            case 1:
              if (Zf(b2.type)) {
                b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          b2 = b2.return;
        } while (null !== b2);
        throw Error(p$3(171));
      }
      if (1 === a.tag) {
        var c2 = a.type;
        if (Zf(c2)) return bg(a, c2, b2);
      }
      return b2;
    }
    function el(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      a = bl(c2, d2, true, a, e2, f2, g2, h2, k2);
      a.context = dl(null);
      c2 = a.current;
      d2 = R$1();
      e2 = yi$1(c2);
      f2 = mh(d2, e2);
      f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
      nh(c2, f2, e2);
      a.current.lanes = e2;
      Ac(a, e2, d2);
      Dk(a, d2);
      return a;
    }
    function fl(a, b2, c2, d2) {
      var e2 = b2.current, f2 = R$1(), g2 = yi$1(e2);
      c2 = dl(c2);
      null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
      b2 = mh(f2, g2);
      b2.payload = { element: a };
      d2 = void 0 === d2 ? null : d2;
      null !== d2 && (b2.callback = d2);
      a = nh(e2, b2, g2);
      null !== a && (gi(a, e2, g2, f2), oh(a, e2, g2));
      return g2;
    }
    function gl(a) {
      a = a.current;
      if (!a.child) return null;
      switch (a.child.tag) {
        case 5:
          return a.child.stateNode;
        default:
          return a.child.stateNode;
      }
    }
    function hl(a, b2) {
      a = a.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        var c2 = a.retryLane;
        a.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
      }
    }
    function il(a, b2) {
      hl(a, b2);
      (a = a.alternate) && hl(a, b2);
    }
    function jl() {
      return null;
    }
    var kl = "function" === typeof reportError ? reportError : function(a) {
      console.error(a);
    };
    function ll(a) {
      this._internalRoot = a;
    }
    ml.prototype.render = ll.prototype.render = function(a) {
      var b2 = this._internalRoot;
      if (null === b2) throw Error(p$3(409));
      fl(a, b2, null, null);
    };
    ml.prototype.unmount = ll.prototype.unmount = function() {
      var a = this._internalRoot;
      if (null !== a) {
        this._internalRoot = null;
        var b2 = a.containerInfo;
        Rk(function() {
          fl(null, a, null, null);
        });
        b2[uf] = null;
      }
    };
    function ml(a) {
      this._internalRoot = a;
    }
    ml.prototype.unstable_scheduleHydration = function(a) {
      if (a) {
        var b2 = Hc();
        a = { blockedOn: null, target: a, priority: b2 };
        for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
        Qc.splice(c2, 0, a);
        0 === c2 && Vc(a);
      }
    };
    function nl(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
    }
    function ol(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
    }
    function pl() {
    }
    function ql(a, b2, c2, d2, e2) {
      if (e2) {
        if ("function" === typeof d2) {
          var f2 = d2;
          d2 = function() {
            var a2 = gl(g2);
            f2.call(a2);
          };
        }
        var g2 = el(b2, d2, a, 0, null, false, false, "", pl);
        a._reactRootContainer = g2;
        a[uf] = g2.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk();
        return g2;
      }
      for (; e2 = a.lastChild; ) a.removeChild(e2);
      if ("function" === typeof d2) {
        var h2 = d2;
        d2 = function() {
          var a2 = gl(k2);
          h2.call(a2);
        };
      }
      var k2 = bl(a, 0, false, null, null, false, false, "", pl);
      a._reactRootContainer = k2;
      a[uf] = k2.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk(function() {
        fl(b2, k2, c2, d2);
      });
      return k2;
    }
    function rl(a, b2, c2, d2, e2) {
      var f2 = c2._reactRootContainer;
      if (f2) {
        var g2 = f2;
        if ("function" === typeof e2) {
          var h2 = e2;
          e2 = function() {
            var a2 = gl(g2);
            h2.call(a2);
          };
        }
        fl(b2, g2, a, e2);
      } else g2 = ql(c2, b2, a, e2, d2);
      return gl(g2);
    }
    Ec = function(a) {
      switch (a.tag) {
        case 3:
          var b2 = a.stateNode;
          if (b2.current.memoizedState.isDehydrated) {
            var c2 = tc(b2.pendingLanes);
            0 !== c2 && (Cc(b2, c2 | 1), Dk(b2, B()), 0 === (K$1 & 6) && (Gj = B() + 500, jg()));
          }
          break;
        case 13:
          Rk(function() {
            var b3 = ih(a, 1);
            if (null !== b3) {
              var c3 = R$1();
              gi(b3, a, 1, c3);
            }
          }), il(a, 1);
      }
    };
    Fc = function(a) {
      if (13 === a.tag) {
        var b2 = ih(a, 134217728);
        if (null !== b2) {
          var c2 = R$1();
          gi(b2, a, 134217728, c2);
        }
        il(a, 134217728);
      }
    };
    Gc = function(a) {
      if (13 === a.tag) {
        var b2 = yi$1(a), c2 = ih(a, b2);
        if (null !== c2) {
          var d2 = R$1();
          gi(c2, a, b2, d2);
        }
        il(a, b2);
      }
    };
    Hc = function() {
      return C;
    };
    Ic = function(a, b2) {
      var c2 = C;
      try {
        return C = a, b2();
      } finally {
        C = c2;
      }
    };
    yb = function(a, b2, c2) {
      switch (b2) {
        case "input":
          bb(a, c2);
          b2 = c2.name;
          if ("radio" === c2.type && null != b2) {
            for (c2 = a; c2.parentNode; ) c2 = c2.parentNode;
            c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
            for (b2 = 0; b2 < c2.length; b2++) {
              var d2 = c2[b2];
              if (d2 !== a && d2.form === a.form) {
                var e2 = Db(d2);
                if (!e2) throw Error(p$3(90));
                Wa(d2);
                bb(d2, e2);
              }
            }
          }
          break;
        case "textarea":
          ib(a, c2);
          break;
        case "select":
          b2 = c2.value, null != b2 && fb(a, !!c2.multiple, b2, false);
      }
    };
    Gb = Qk;
    Hb = Rk;
    var sl = { usingClientEntryPoint: false, Events: [Cb, ue$1, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
    var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
      a = Zb(a);
      return null === a ? null : a.stateNode;
    }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!vl.isDisabled && vl.supportsFiber) try {
        kc = vl.inject(ul), lc = vl;
      } catch (a) {
      }
    }
    reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
    reactDom_production_min.createPortal = function(a, b2) {
      var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!nl(b2)) throw Error(p$3(200));
      return cl(a, b2, null, c2);
    };
    reactDom_production_min.createRoot = function(a, b2) {
      if (!nl(a)) throw Error(p$3(299));
      var c2 = false, d2 = "", e2 = kl;
      null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
      b2 = bl(a, 1, false, null, null, c2, false, d2, e2);
      a[uf] = b2.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      return new ll(b2);
    };
    reactDom_production_min.findDOMNode = function(a) {
      if (null == a) return null;
      if (1 === a.nodeType) return a;
      var b2 = a._reactInternals;
      if (void 0 === b2) {
        if ("function" === typeof a.render) throw Error(p$3(188));
        a = Object.keys(a).join(",");
        throw Error(p$3(268, a));
      }
      a = Zb(b2);
      a = null === a ? null : a.stateNode;
      return a;
    };
    reactDom_production_min.flushSync = function(a) {
      return Rk(a);
    };
    reactDom_production_min.hydrate = function(a, b2, c2) {
      if (!ol(b2)) throw Error(p$3(200));
      return rl(null, a, b2, true, c2);
    };
    reactDom_production_min.hydrateRoot = function(a, b2, c2) {
      if (!nl(a)) throw Error(p$3(405));
      var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = kl;
      null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
      b2 = el(b2, null, a, 1, null != c2 ? c2 : null, e2, false, f2, g2);
      a[uf] = b2.current;
      sf(a);
      if (d2) for (a = 0; a < d2.length; a++) c2 = d2[a], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
        c2,
        e2
      );
      return new ml(b2);
    };
    reactDom_production_min.render = function(a, b2, c2) {
      if (!ol(b2)) throw Error(p$3(200));
      return rl(null, a, b2, false, c2);
    };
    reactDom_production_min.unmountComponentAtNode = function(a) {
      if (!ol(a)) throw Error(p$3(40));
      return a._reactRootContainer ? (Rk(function() {
        rl(null, null, a, false, function() {
          a._reactRootContainer = null;
          a[uf] = null;
        });
      }), true) : false;
    };
    reactDom_production_min.unstable_batchedUpdates = Qk;
    reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
      if (!ol(c2)) throw Error(p$3(200));
      if (null == a || void 0 === a._reactInternals) throw Error(p$3(38));
      return rl(a, b2, c2, false, d2);
    };
    reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    {
      checkDCE();
      reactDom.exports = reactDom_production_min;
    }
    var reactDomExports = reactDom.exports;
    const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(reactDomExports);
    const ReactDOM$1 = /* @__PURE__ */ _mergeNamespaces({
      __proto__: null,
      default: ReactDOM
    }, [reactDomExports]);
    var createRoot$1;
    var m$2 = reactDomExports;
    {
      createRoot$1 = m$2.createRoot;
      m$2.hydrateRoot;
    }
    const scriptRel = "modulepreload";
    const assetsURL = function(dep) {
      return "/" + dep;
    };
    const seen = {};
    const __vitePreload = function preload(baseModule, deps, importerUrl) {
      let promise = Promise.resolve();
      if (deps && deps.length > 0) {
        document.getElementsByTagName("link");
        const cspNonceMeta = document.querySelector(
          "meta[property=csp-nonce]"
        );
        const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
        promise = Promise.allSettled(
          deps.map((dep) => {
            dep = assetsURL(dep);
            if (dep in seen) return;
            seen[dep] = true;
            const isCss = dep.endsWith(".css");
            const cssSelector = isCss ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
              return;
            }
            const link = document.createElement("link");
            link.rel = isCss ? "stylesheet" : scriptRel;
            if (!isCss) {
              link.as = "script";
            }
            link.crossOrigin = "";
            link.href = dep;
            if (cspNonce) {
              link.setAttribute("nonce", cspNonce);
            }
            document.head.appendChild(link);
            if (isCss) {
              return new Promise((res, rej) => {
                link.addEventListener("load", res);
                link.addEventListener(
                  "error",
                  () => rej(new Error(`Unable to preload CSS for ${dep}`))
                );
              });
            }
          })
        );
      }
      function handlePreloadError(err) {
        const e2 = new Event("vite:preloadError", {
          cancelable: true
        });
        e2.payload = err;
        window.dispatchEvent(e2);
        if (!e2.defaultPrevented) {
          throw err;
        }
      }
      return promise.then((res) => {
        for (const item of res || []) {
          if (item.status !== "rejected") continue;
          handlePreloadError(item.reason);
        }
        return baseModule().catch(handlePreloadError);
      });
    };
    const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
      const v2 = glob[path];
      if (v2) {
        return typeof v2 === "function" ? v2() : Promise.resolve(v2);
      }
      return new Promise((_, reject) => {
        (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
          reject.bind(
            null,
            new Error(
              "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
            )
          )
        );
      });
    };
    function Layout({ team_members, settings, layoutType, id: id2, imageUrl, title, subtitle, description, socialIcons, details, animationConfig }) {
      const [Component, setComponent] = reactExports.useState(null);
      reactExports.useEffect(() => {
        if (layoutType) {
          __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./Card/Frontend.jsx": () => __vitePreload(() => Promise.resolve().then(() => Frontend$3), true ? void 0 : void 0), "./HorizontalCard/Frontend.jsx": () => __vitePreload(() => Promise.resolve().then(() => Frontend$2), true ? void 0 : void 0), "./OverlayCard/Frontend.jsx": () => __vitePreload(() => Promise.resolve().then(() => Frontend$1), true ? void 0 : void 0), "./Tiles/Frontend.jsx": () => __vitePreload(() => Promise.resolve().then(() => Frontend), true ? void 0 : void 0) }), `./${layoutType}/Frontend.jsx`, 3).then((module2) => {
            const LoadedComponent = module2.default;
            setComponent(() => LoadedComponent);
          }).catch((error) => {
            console.error("Error loading component:", error);
          });
        }
      }, [layoutType]);
      if (!Component) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Loading..." });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Component,
        {
          team_members,
          settings,
          id: id2,
          imageUrl,
          title,
          subtitle,
          description,
          socialIcons,
          details,
          animationConfig
        }
      ) });
    }
    const getCommonStyles = (settings) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i2, _j, _k, _l, _m;
      return {
        //width: `${settings?.containerSettings?.width?.default?.desktop || '100%'}`,
        //gridTemplateColumns: `repeat(${settings?.columnSettings?.column?.default?.desktop || 1}, 1fr)`,
        //gap: `${settings?.columnSettings?.gap?.default?.desktop}`,
        marginTop: `${((_a2 = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _a2.margin_top) || 0}px`,
        marginRight: `${((_b = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _b.margin_right) || 0}px`,
        marginBottom: `${((_c = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _c.margin_bottom) || 0}px`,
        marginLeft: `${((_d = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _d.margin_left) || 0}px`,
        paddingTop: `${((_e = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _e.padding_top) || 0}px`,
        paddingRight: `${((_f = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _f.padding_right) || 0}px`,
        paddingBottom: `${((_g = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _g.padding_bottom) || 0}px`,
        paddingLeft: `${((_h = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _h.padding_left) || 0}px`,
        borderTopLeftRadius: `${((_i2 = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _i2.borderRadius_top) || 0}px`,
        borderTopRightRadius: `${((_j = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _j.borderRadius_right) || 0}px`,
        borderBottomLeftRadius: `${((_k = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _k.borderRadius_bottom) || 0}px`,
        borderBottomRightRadius: `${((_l = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _l.borderRadius_left) || 0}px`,
        backgroundColor: (_m = settings.containerSettings) == null ? void 0 : _m.backgroundColor,
        animation: "tsteam__entrance-fadeIn 1.5s ease-out"
      };
    };
    const getResponsiveStyles = (settings, viewport, isEditor) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i2, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba;
      let currentColumns, currentWidth, columnGap;
      if (isEditor) {
        switch (viewport) {
          case "mobile":
            currentWidth = (_c = (_b = (_a2 = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _a2.width) == null ? void 0 : _b.default) == null ? void 0 : _c.mobile;
            currentColumns = ((_f = (_e = (_d = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _d.column) == null ? void 0 : _e.default) == null ? void 0 : _f.mobile) || 1;
            columnGap = (_i2 = (_h = (_g = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _g.gap) == null ? void 0 : _h.default) == null ? void 0 : _i2.mobile;
            break;
          case "tablet":
            currentWidth = (_l = (_k = (_j = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _j.width) == null ? void 0 : _k.default) == null ? void 0 : _l.tablet;
            currentColumns = ((_o = (_n = (_m = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _m.column) == null ? void 0 : _n.default) == null ? void 0 : _o.tablet) || 2;
            columnGap = (_r = (_q = (_p = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _p.gap) == null ? void 0 : _q.default) == null ? void 0 : _r.tablet;
            break;
          default:
            currentWidth = (_u = (_t2 = (_s = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _s.width) == null ? void 0 : _t2.default) == null ? void 0 : _u.desktop;
            currentColumns = ((_x = (_w = (_v = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _v.column) == null ? void 0 : _w.default) == null ? void 0 : _x.desktop) || 3;
            columnGap = (_A = (_z = (_y = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _y.gap) == null ? void 0 : _z.default) == null ? void 0 : _A.desktop;
        }
      } else {
        const width = window.innerWidth;
        if (width <= 768) {
          currentWidth = (_D = (_C = (_B = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _B.width) == null ? void 0 : _C.default) == null ? void 0 : _D.mobile;
          currentColumns = ((_G = (_F = (_E = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _E.column) == null ? void 0 : _F.default) == null ? void 0 : _G.mobile) || 1;
          columnGap = (_J = (_I = (_H = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _H.gap) == null ? void 0 : _I.default) == null ? void 0 : _J.mobile;
        } else if (width <= 1024) {
          currentWidth = (_M = (_L = (_K = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _K.width) == null ? void 0 : _L.default) == null ? void 0 : _M.tablet;
          currentColumns = ((_P = (_O = (_N = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _N.column) == null ? void 0 : _O.default) == null ? void 0 : _P.tablet) || 2;
          columnGap = (_S = (_R = (_Q = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _Q.gap) == null ? void 0 : _R.default) == null ? void 0 : _S.tablet;
        } else {
          currentWidth = (_V = (_U = (_T = settings == null ? void 0 : settings.containerSettings) == null ? void 0 : _T.width) == null ? void 0 : _U.default) == null ? void 0 : _V.desktop;
          currentColumns = ((_Y = (_X = (_W = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _W.column) == null ? void 0 : _X.default) == null ? void 0 : _Y.desktop) || 3;
          columnGap = (_$ = (__ = (_Z = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _Z.gap) == null ? void 0 : __.default) == null ? void 0 : _$.desktop;
        }
      }
      if (((_aa = settings == null ? void 0 : settings.selectedView) == null ? void 0 : _aa.value) === "grid") {
        return {
          width: currentWidth,
          gridTemplateColumns: `repeat(${currentColumns}, 1fr)`,
          gap: columnGap
        };
      }
      if (((_ba = settings == null ? void 0 : settings.selectedView) == null ? void 0 : _ba.value) === "filterable") {
        return {
          width: currentWidth,
          gridTemplateColumns: `repeat(${currentColumns}, 1fr)`,
          gap: columnGap
        };
      } else {
        return {
          width: currentWidth
        };
      }
    };
    const formatName = (name) => {
      return name.replace(/([A-Z])/g, " $1").trim();
    };
    function proLayouts(selectedLayout) {
      var _a2, _b;
      const isPro2 = !!tsteam_settings.is_pro;
      const isLicenseInactive2 = !!((_a2 = window.tsTeamPro) == null ? void 0 : _a2.is_licence_inactive);
      if (!isPro2 || isLicenseInactive2) {
        return [];
      }
      const layouts = (_b = window.tsTeamPro) == null ? void 0 : _b.Layouts;
      if (!layouts) {
        console.error("window.tsTeamPro.Layouts is not defined.");
        return [];
      }
      if (selectedLayout) {
        const layout = layouts[selectedLayout];
        if (!layout) {
          console.error(`Layout "${selectedLayout}" not found in window.tsTeamPro.Layouts.`);
          return null;
        }
        if (typeof layout.Frontend !== "function") {
          console.error(`Invalid layout configuration for "${selectedLayout}". Missing Frontend.`);
          return null;
        }
        if (!layout.Editor || typeof layout.Editor !== "function") {
          console.warn(`No Editor or register_controls found for Pro Layout: ${selectedLayout}`);
          layout.Editor = () => ({ controls: [] });
        }
        return layout;
      } else {
        return Object.keys(layouts).map((layoutName) => ({
          label: formatName(layoutName),
          value: layoutName,
          type: "pro",
          category: layouts[layoutName].category
        }));
      }
    }
    function getProLayout(settings) {
      var _a2, _b;
      if (((_a2 = settings == null ? void 0 : settings.selectedLayout) == null ? void 0 : _a2.type) === "pro") {
        const layout = proLayouts((_b = settings.selectedLayout) == null ? void 0 : _b.value);
        return layout.Frontend;
      }
      return null;
    }
    const loadedFonts = /* @__PURE__ */ new Set();
    function loadGoogleFont(fontFamily) {
      if (!fontFamily || typeof document === "undefined") {
        console.warn("Invalid font family or document not available.");
        return;
      }
      if (loadedFonts.has(fontFamily)) {
        return;
      }
      const formattedFont = fontFamily.replace(/\s+/g, "+");
      const href = `https://fonts.googleapis.com/css2?family=${formattedFont}&display=swap`;
      const existingLink = document.querySelector(`link[href*="${formattedFont}"]`);
      if (existingLink) {
        loadedFonts.add(fontFamily);
        return;
      }
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.onload = () => loadedFonts.add(fontFamily);
      document.head.appendChild(link);
    }
    const animations = {
      none: {
        type: "single",
        class: ""
      },
      blur: {
        type: "single",
        class: "blur-animation"
      },
      slideTop: {
        type: "single",
        class: "tsh-slide-top"
      },
      shadowPop: {
        type: "single",
        class: "tsh-shadow-pop-tr"
      },
      shadowDrop: {
        type: "single",
        class: "tsh-shadow-drop-center"
      },
      shadowDrop2: {
        type: "single",
        class: "tsh-shadow-drop-2-tr"
      },
      textPopUp: {
        type: "single",
        class: "text-pop-up-top"
      },
      flipScaleUp: {
        type: "single",
        class: "flip-scale-up-hor"
      },
      gradient: {
        type: "single",
        class: "tsteam__gradient-hover"
      },
      // Wrapper-based animations (need parent + wrapper)
      float3d: {
        type: "wrapper",
        parent: "tsh-3d-float",
        wrapper: "tsh-3d-float__wrapper"
      },
      tilt: {
        type: "wrapper",
        parent: "tsh-tilt",
        wrapper: "tsh-tilt__wrapper"
      }
    };
    const getAnimationClasses = (animationType) => {
      const config = animations[animationType];
      if (!config) return null;
      return config;
    };
    function safeJsonParse(data, fallback = []) {
      try {
        return data ? JSON.parse(data) : fallback;
      } catch (error) {
        return fallback;
      }
    }
    const renderEditorContent = (blocks) => {
      if (!Array.isArray(blocks)) return null;
      return blocks.map((block) => {
        switch (block.type) {
          case "paragraph":
            return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base mb-2", children: block.data.text }, block.id);
          case "header":
            const HeadingTag = `h${block.data.level}`;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(HeadingTag, { className: `text-${block.data.level}xl font-bold mb-2`, children: block.data.text }, block.id);
          case "list":
            if (block.data.style === "unordered") {
              return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc ml-5 mb-2", children: block.data.items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: item }, index)) }, block.id);
            } else if (block.data.style === "ordered") {
              return /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "list-decimal ml-5 mb-2", children: block.data.items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: item }, index)) }, block.id);
            }
            break;
          default:
            return null;
        }
      });
    };
    const SkillsBar = ({ skills }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: skills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: skill.skill }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            skill.rating,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-red-100 rounded-full h-1.5 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "bg-red-500 h-1.5 rounded-full",
            style: { width: `${skill.rating}%` }
          }
        ) })
      ] }, index)) });
    };
    /**
     * @license lucide-react v0.469.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    const mergeClasses = (...classes) => classes.filter((className, index, array) => {
      return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
    /**
     * @license lucide-react v0.469.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    var defaultAttributes = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    };
    /**
     * @license lucide-react v0.469.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const Icon$1 = reactExports.forwardRef(
      ({
        color = "currentColor",
        size = 24,
        strokeWidth = 2,
        absoluteStrokeWidth,
        className = "",
        children,
        iconNode,
        ...rest
      }, ref) => {
        return reactExports.createElement(
          "svg",
          {
            ref,
            ...defaultAttributes,
            width: size,
            height: size,
            stroke: color,
            strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
            className: mergeClasses("lucide", className),
            ...rest
          },
          [
            ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
            ...Array.isArray(children) ? children : [children]
          ]
        );
      }
    );
    /**
     * @license lucide-react v0.469.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const createLucideIcon = (iconName, iconNode) => {
      const Component = reactExports.forwardRef(
        ({ className, ...props }, ref) => reactExports.createElement(Icon$1, {
          ref,
          iconNode,
          className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
          ...props
        })
      );
      Component.displayName = `${iconName}`;
      return Component;
    };
    /**
     * @license lucide-react v0.469.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const Briefcase = createLucideIcon("Briefcase", [
      ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
      ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
    ]);
    /**
     * @license lucide-react v0.469.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const FileText = createLucideIcon("FileText", [
      ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
      ["path", { d: "M10 9H8", key: "b1mrlr" }],
      ["path", { d: "M16 13H8", key: "t4e002" }],
      ["path", { d: "M16 17H8", key: "z1uh3a" }]
    ]);
    /**
     * @license lucide-react v0.469.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const Globe = createLucideIcon("Globe", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
      ["path", { d: "M2 12h20", key: "9i4pu4" }]
    ]);
    /**
     * @license lucide-react v0.469.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const Heart = createLucideIcon("Heart", [
      [
        "path",
        {
          d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
          key: "c3ymky"
        }
      ]
    ]);
    const CTAButton = ({ donationLink, hireLink, website, resume }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
        website && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: website,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm border-none px-3 py-1.5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Website" })
            ]
          }
        ),
        hireLink && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: hireLink,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm border-none px-3 py-1.5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Hire me" })
            ]
          }
        ),
        donationLink && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: donationLink,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm border-none px-3 py-1.5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Donation" })
            ]
          }
        ),
        resume && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: resume,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm border-none px-3 py-1.5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "CV" })
            ]
          }
        )
      ] });
    };
    const getSocialIcon$4 = (channel) => {
      const icons = {
        facebook: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" }) }),
        twitter: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" }) }),
        instagram: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" }) }),
        linkedin: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" }) }),
        youtube: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4 h-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" })
        ] }),
        github: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4 h-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }) })
      };
      return icons[channel.toLowerCase()] || null;
    };
    const SocialLinks = ({ socialLinks }) => {
      let data = socialLinks;
      if (typeof socialLinks === "string") {
        try {
          data = JSON.parse(socialLinks);
        } catch (error) {
          console.error("Error parsing socialLinks:", error);
          return null;
        }
      }
      if (!data || !Array.isArray(data)) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex space-x-2", children: data.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: item.link,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "w-8 h-8 rounded-sm bg-yellow-400 flex items-center justify-center text-white",
          style: {
            backgroundColor: item.socialChannel === "facebook" ? "#4267B2" : item.socialChannel === "twitter" ? "#1DA1F2" : item.socialChannel === "instagram" ? "#E1306C" : item.socialChannel === "linkedin" ? "#0077B5" : item.socialChannel === "youtube" ? "#FF0000" : item.socialChannel === "github" ? "#333333" : "#6B7280"
          },
          children: getSocialIcon$4(item.socialChannel)
        },
        index
      )) });
    };
    function DetailsModal({ member }) {
      reactExports.useState(null);
      const modalId = `${member.title.replace(/\s+/g, "-").toLowerCase()}-${member.post_id}`;
      const editorData = safeJsonParse(member.meta_data.information);
      const skills = safeJsonParse(member.meta_data.skills);
      const socialLinks = member.meta_data.socialLinks;
      const handleImageClick = (e2) => {
        const imageId = e2.target.id;
        const modal = document.getElementById(`${imageId}-details`);
        if (modal) {
          modal.setAttribute("open", "");
        }
      };
      const handleButtonClick = (e2) => {
        const buttonId = e2.target.id;
        const modal = document.getElementById(`${buttonId}-details`);
        if (modal) {
          modal.setAttribute("open", "");
        }
      };
      reactExports.useEffect(() => {
        const imageElements = document.querySelectorAll(".tsteam-member__image");
        const detailsButtonElements = document.querySelectorAll(".tsteam-member-button__details");
        imageElements.forEach((imageElement) => {
          imageElement.addEventListener("click", handleImageClick);
        });
        detailsButtonElements.forEach((detailsButtonElement) => {
          detailsButtonElement.addEventListener("click", handleButtonClick);
        });
        return () => {
          imageElements.forEach((imageElement) => {
            imageElement.removeEventListener("click", handleImageClick);
          });
          detailsButtonElements.forEach((detailsButtonElement) => {
            detailsButtonElement.removeEventListener("click", handleButtonClick);
          });
        };
      }, []);
      const modalContent = /* @__PURE__ */ jsxRuntimeExports.jsx(
        "dialog",
        {
          id: `${modalId}-details`,
          className: "modal",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-box max-w-[80vw] max-h-[80vh] h-[80vh] w-[80vw] overflow-y-auto relative p-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "btn btn-sm btn-circle btn-ghost absolute right-12 top-8 z-50",
                onClick: () => document.getElementById(`${modalId}-details`).close(),
                children: "✕"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 flex relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex flex-col items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: member.meta_data.image,
                  alt: member.title,
                  className: "w-[450px] h-[450px] object-cover max-w-sm mx-auto rounded-lg"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col justify-center md:w-2/3 md:pl-8 mt-6 md:mt-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm uppercase text-gray-600 mb-1", children: member.meta_data.designation }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: member.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium", children: [
                    "Experience: ",
                    member.meta_data.experience
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium", children: [
                    "Location: ",
                    member.meta_data.location
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium", children: [
                    "Email: ",
                    member.meta_data.email
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium", children: [
                    "Phone: ",
                    member.meta_data.phone
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium mb-2", children: "Social Media" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SocialLinks, { socialLinks })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium mb-2", children: "Links" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CTAButton,
                    {
                      donationLink: member.meta_data.donationLink,
                      hireLink: member.meta_data.hireLink,
                      website: member.meta_data.website,
                      resume: member.meta_data.resume
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-indigo-600 text-white flex-grow p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex max-w-6xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-1/2 md:pr-12 mb-8 md:mb-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-6", children: "Overview" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-indigo-100 leading-relaxed", children: member.meta_data.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-1/2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-6", children: "Skills" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsBar, { skills })
              ] })
            ] }) }),
            editorData && editorData.blocks && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-6", children: "Details" }),
              renderEditorContent(editorData.blocks)
            ] }) })
          ] })
        }
      );
      return reactDomExports.createPortal(modalContent, document.body);
    }
    function DetailsDrawer({ member }) {
      const drawerId = `${member.title.replace(/\s+/g, "-").toLowerCase()}-${member.post_id}`;
      const editorData = safeJsonParse(member.meta_data.information);
      const skills = safeJsonParse(member.meta_data.skills);
      const socialLinks = member.meta_data.socialLinks;
      console.log(member);
      const handleImageClick = (e2) => {
        const imageId = e2.target.id;
        const drawer = document.getElementById(`${imageId}-details-toggle`);
        if (drawer) {
          drawer.checked = true;
        }
      };
      const handleButtonClick = (e2) => {
        const buttonId = e2.target.id;
        const drawer = document.getElementById(`${buttonId}-details-toggle`);
        if (drawer) {
          drawer.checked = true;
        }
      };
      reactExports.useEffect(() => {
        const imageElements = document.querySelectorAll(".tsteam-member__image");
        const detailsButtonElements = document.querySelectorAll(".tsteam-member-button__details");
        imageElements.forEach((imageElement) => {
          imageElement.addEventListener("click", handleImageClick);
        });
        detailsButtonElements.forEach((detailsButtonElement) => {
          detailsButtonElement.addEventListener("click", handleButtonClick);
        });
        return () => {
          imageElements.forEach((imageElement) => {
            imageElement.removeEventListener("click", handleImageClick);
          });
          detailsButtonElements.forEach((detailsButtonElement) => {
            detailsButtonElement.removeEventListener("click", handleButtonClick);
          });
        };
      }, []);
      const drawerContent = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "drawer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: `${drawerId}-details-toggle`, type: "checkbox", className: "drawer-toggle" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "drawer-side", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: `${drawerId}-details-toggle`, "aria-label": "close sidebar", className: "drawer-overlay" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white min-h-full w-80 p-0 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-sm overflow-scroll bg-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  className: "w-[250px] h-[250px] object-cover mt-12 ml-4 rounded-xl",
                  src: member.meta_data.image,
                  alt: member.title
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 pt-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: member.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: member.meta_data.designation }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold", children: "Overview" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 mt-1", children: member.meta_data.description })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium mb-2", children: "Social Media" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SocialLinks, { socialLinks })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium mb-2", children: "Links" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CTAButton,
                    {
                      donationLink: member.meta_data.donationLink,
                      hireLink: member.meta_data.hireLink,
                      website: member.meta_data.website,
                      resume: member.meta_data.resume
                    }
                  )
                ] }),
                skills && skills.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold", children: "Experience & Skill" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsBar, { skills })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-6", children: "Details" }),
              editorData && editorData.blocks ? renderEditorContent(editorData.blocks) : null
            ] })
          ] })
        ] })
      ] });
      return reactDomExports.createPortal(drawerContent, document.body);
    }
    const DetailsFullScreen = ({ member }) => {
      const modalId = `${member.title.replace(/\s+/g, "-").toLowerCase()}-${member.post_id}`;
      const editorData = safeJsonParse(member.meta_data.information);
      const [isFullScreen, setIsFullScreen] = reactExports.useState(false);
      const [height, setHeight] = reactExports.useState(0);
      const [transitioning, setTransitioning] = reactExports.useState(false);
      const openFullScreen = () => {
        setTransitioning(true);
        setIsFullScreen(true);
        setTimeout(() => {
          setHeight("100%");
        }, 5);
      };
      const closeFullScreen = () => {
        setTransitioning(true);
        setHeight(0);
        setTimeout(() => {
          setIsFullScreen(false);
        }, 500);
      };
      reactExports.useEffect(() => {
        if (height === 0 && !isFullScreen) {
          setTransitioning(false);
        }
      }, [height, isFullScreen]);
      reactExports.useEffect(() => {
        const handleImageClick = (e2) => {
          const imageId = e2.target.id;
          const targetModalId = `${imageId}-details`;
          if (targetModalId === `${modalId}-details`) {
            openFullScreen();
          }
        };
        const handleButtonClick = (e2) => {
          const buttonId = e2.target.id;
          const targetModalId = `${buttonId}-details`;
          if (targetModalId === `${modalId}-details`) {
            openFullScreen();
          }
        };
        const imageElements = document.querySelectorAll(".tsteam-member__image");
        const detailsButtonElements = document.querySelectorAll(".tsteam-member-button__details");
        imageElements.forEach((imageElement) => {
          imageElement.addEventListener("click", handleImageClick);
        });
        detailsButtonElements.forEach((detailsButtonElement) => {
          detailsButtonElement.addEventListener("click", handleButtonClick);
        });
        return () => {
          imageElements.forEach((imageElement) => {
            imageElement.removeEventListener("click", handleImageClick);
          });
          detailsButtonElements.forEach((detailsButtonElement) => {
            detailsButtonElement.removeEventListener("click", handleButtonClick);
          });
        };
      }, [modalId]);
      const modalContent = isFullScreen && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          id: `${modalId}-details`,
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height,
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            transition: transitioning ? "height 0.5s ease-in-out, background-color 0.5s ease-in-out" : "none",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full flex justify-center items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "absolute top-24 right-32 text-white text-3xl",
                onClick: closeFullScreen,
                children: "×"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-content text-white w-4/6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-4/6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: member.meta_data.image,
                    alt: member.title,
                    className: "w-96 h-96 object-contain mb-4"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: member.meta_data.email }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: member.meta_data.phone }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: "394-268-9576" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: member.meta_data.website })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl text-white", children: member.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: member.meta_data.designation }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-gray-300", children: member.meta_data.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-content mt-4 text-gray-100", children: editorData && editorData.blocks ? renderEditorContent(editorData.blocks) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No content available." }) })
              ] })
            ] }) })
          ] })
        }
      );
      return reactDomExports.createPortal(modalContent, document.body);
    };
    function Details({ settings, member }) {
      var _a2, _b;
      if (((_a2 = settings.selectedDetails) == null ? void 0 : _a2.value) === "none") {
        return null;
      }
      switch ((_b = settings.selectedDetails) == null ? void 0 : _b.value) {
        case "popup":
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            DetailsModal,
            {
              member
            }
          );
        case "drawer":
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            DetailsDrawer,
            {
              member
            }
          );
        case "fullscreen":
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            DetailsFullScreen,
            {
              member
            }
          );
        default:
          return null;
      }
    }
    class CSSGenerator {
      constructor() {
        this.classStyles = [];
      }
      addClassStyles(className, desktopStyles, tabletStyles = {}, mobileStyles = {}) {
        this.classStyles.push({
          className,
          desktopStyles,
          tabletStyles,
          mobileStyles
        });
      }
      generateCSS() {
        const cssString = this.classStyles.map(({ className, desktopStyles, tabletStyles = {}, mobileStyles = {} }) => {
          const desktopCSS = this.minifyCSS(this.generateCSSForMediaQuery(desktopStyles));
          const tabletCSS = this.minifyCSS(this.generateCSSForMediaQuery(tabletStyles));
          const mobileCSS = this.minifyCSS(this.generateCSSForMediaQuery(mobileStyles));
          const selectorWithParent = this.getParentSelector(className);
          const cssBlocks = [];
          if (desktopCSS) cssBlocks.push(`${selectorWithParent} { ${desktopCSS} }`);
          if (tabletCSS) cssBlocks.push(`@media (max-width: 768px) { ${selectorWithParent} { ${tabletCSS} } }`);
          if (mobileCSS) cssBlocks.push(`@media (max-width: 480px) { ${selectorWithParent} { ${mobileCSS} } }`);
          return cssBlocks.join("\n\n");
        }).join("\n\n");
        return cssString.replace(/\s+/g, " ");
      }
      minifyCSS(cssString) {
        return cssString.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").replace(/\s?([:,;{}])\s?/g, "$1");
      }
      generateCSSForMediaQuery(styles) {
        if (Object.keys(styles).length === 0) return "";
        return Object.keys(styles).map((property) => `${property}: ${styles[property]};`).join(" ");
      }
      getParentSelector(className) {
        return this.parentClass ? className.replace(/{{WRAPPER}}/g, this.parentClass) : className;
      }
    }
    const addImportantToStyles = (styleObject) => {
      const importantStyles = {};
      for (const property in styleObject) {
        if (styleObject.hasOwnProperty(property)) {
          const value = styleObject[property];
          if (typeof value === "string" && !value.includes("!important")) {
            importantStyles[property] = value + " !important";
          } else {
            importantStyles[property] = value;
          }
        }
      }
      return importantStyles;
    };
    const getTsTeamMemberNameStyle = (settings) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i2, _j, _k, _l, _m, _n, _o, _p;
      const tsTeamMemberNameCSS = {};
      if ((_b = (_a2 = settings == null ? void 0 : settings.layout) == null ? void 0 : _a2.color) == null ? void 0 : _b.memberName) {
        tsTeamMemberNameCSS["--team-member-name-color"] = (_d = (_c = settings == null ? void 0 : settings.layout) == null ? void 0 : _c.color) == null ? void 0 : _d.memberName;
      }
      if ((_e = settings == null ? void 0 : settings.typography) == null ? void 0 : _e.name) {
        tsTeamMemberNameCSS["--team-member-name-font-family"] = (_f = settings == null ? void 0 : settings.typography) == null ? void 0 : _f.name;
      }
      if ((_g = settings == null ? void 0 : settings.typography) == null ? void 0 : _g.name_fontSize) {
        tsTeamMemberNameCSS["--team-member-name-font-size"] = (_h = settings == null ? void 0 : settings.typography) == null ? void 0 : _h.name_fontSize;
      }
      if ((_i2 = settings == null ? void 0 : settings.typography) == null ? void 0 : _i2.name_fontWeight) {
        tsTeamMemberNameCSS["--team-member-name-font-weight"] = (_j = settings == null ? void 0 : settings.typography) == null ? void 0 : _j.name_fontWeight;
      }
      if ((_k = settings == null ? void 0 : settings.typography) == null ? void 0 : _k.name_textTransform) {
        tsTeamMemberNameCSS["--team-member-name-text-transform"] = (_l = settings == null ? void 0 : settings.typography) == null ? void 0 : _l.name_textTransform;
      }
      if ((_m = settings == null ? void 0 : settings.typography) == null ? void 0 : _m.name_letterSpacing) {
        tsTeamMemberNameCSS["--team-member-name-letter-spacing"] = (_n = settings == null ? void 0 : settings.typography) == null ? void 0 : _n.name_letterSpacing;
      }
      if ((_o = settings == null ? void 0 : settings.typography) == null ? void 0 : _o.name_lineHeight) {
        tsTeamMemberNameCSS["--team-member-name-line-height"] = (_p = settings == null ? void 0 : settings.typography) == null ? void 0 : _p.name_lineHeight;
      }
      return addImportantToStyles(tsTeamMemberNameCSS);
    };
    const getTsTeamMemberDesignationStyle = (settings) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h;
      const tsTeamMemberDesignationCSS = {};
      if ((_b = (_a2 = settings == null ? void 0 : settings.layout) == null ? void 0 : _a2.color) == null ? void 0 : _b.designation) {
        tsTeamMemberDesignationCSS["--team-member-designation-color"] = settings.layout.color.designation;
      }
      if ((_c = settings == null ? void 0 : settings.typography) == null ? void 0 : _c.designation) {
        tsTeamMemberDesignationCSS["--team-member-designation-font-family"] = settings.typography.designation;
      }
      if ((_d = settings == null ? void 0 : settings.typography) == null ? void 0 : _d.designation_fontSize) {
        tsTeamMemberDesignationCSS["--team-member-designation-font-size"] = settings.typography.designation_fontSize;
      }
      if ((_e = settings == null ? void 0 : settings.typography) == null ? void 0 : _e.designation_fontWeight) {
        tsTeamMemberDesignationCSS["--team-member-designation-font-weight"] = settings.typography.designation_fontWeight;
      }
      if ((_f = settings == null ? void 0 : settings.typography) == null ? void 0 : _f.designation_textTransform) {
        tsTeamMemberDesignationCSS["--team-member-designation-text-transform"] = settings.typography.designation_textTransform;
      }
      if ((_g = settings == null ? void 0 : settings.typography) == null ? void 0 : _g.designation_letterSpacing) {
        tsTeamMemberDesignationCSS["--team-member-designation-letter-spacing"] = `${settings.typography.designation_letterSpacing}px`;
      }
      if ((_h = settings == null ? void 0 : settings.typography) == null ? void 0 : _h.designation_lineHeight) {
        tsTeamMemberDesignationCSS["--team-member-designation-line-height"] = settings.typography.designation_lineHeight;
      }
      return addImportantToStyles(tsTeamMemberDesignationCSS);
    };
    const getTsTeamMemberDescriptionStyle = (settings) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h;
      const tsTeamMemberDescriptionCSS = {};
      if ((_b = (_a2 = settings == null ? void 0 : settings.layout) == null ? void 0 : _a2.color) == null ? void 0 : _b.description) {
        tsTeamMemberDescriptionCSS["--team-member-description-color"] = settings.layout.color.description;
      }
      if ((_c = settings == null ? void 0 : settings.typography) == null ? void 0 : _c.description) {
        tsTeamMemberDescriptionCSS["--team-member-description-font-family"] = settings.typography.description;
      }
      if ((_d = settings == null ? void 0 : settings.typography) == null ? void 0 : _d.description_fontSize) {
        tsTeamMemberDescriptionCSS["--team-member-description-font-size"] = settings.typography.description_fontSize;
      }
      if ((_e = settings == null ? void 0 : settings.typography) == null ? void 0 : _e.description_fontWeight) {
        tsTeamMemberDescriptionCSS["--team-member-description-font-weight"] = settings.typography.description_fontWeight;
      }
      if ((_f = settings == null ? void 0 : settings.typography) == null ? void 0 : _f.description_textTransform) {
        tsTeamMemberDescriptionCSS["--team-member-description-text-transform"] = settings.typography.description_textTransform;
      }
      if ((_g = settings == null ? void 0 : settings.typography) == null ? void 0 : _g.description_letterSpacing) {
        tsTeamMemberDescriptionCSS["--team-member-description-letter-spacing"] = `${settings.typography.description_letterSpacing}px`;
      }
      if ((_h = settings == null ? void 0 : settings.typography) == null ? void 0 : _h.description_lineHeight) {
        tsTeamMemberDescriptionCSS["--team-member-description-line-height"] = settings.typography.description_lineHeight;
      }
      return addImportantToStyles(tsTeamMemberDescriptionCSS);
    };
    const getTsTeamMemberAvatarStyle = (settings) => {
      var _a2, _b, _c, _d, _e, _f;
      const tsTeamMemberAvatarCSS = {};
      tsTeamMemberAvatarCSS["--team-member-avatar-border-style"] = "solid";
      if ((_b = (_a2 = settings == null ? void 0 : settings.layout) == null ? void 0 : _a2.borderWidth) == null ? void 0 : _b.image) {
        tsTeamMemberAvatarCSS["--team-member-avatar-border-width"] = settings.layout.borderWidth.image;
      }
      if ((_d = (_c = settings == null ? void 0 : settings.layout) == null ? void 0 : _c.borderRadius) == null ? void 0 : _d.image) {
        tsTeamMemberAvatarCSS["--team-member-avatar-border-radius"] = settings.layout.borderRadius.image;
      }
      if ((_f = (_e = settings == null ? void 0 : settings.layout) == null ? void 0 : _e.color) == null ? void 0 : _f.imageBorder) {
        tsTeamMemberAvatarCSS["--team-member-avatar-border-color"] = settings.layout.color.imageBorder;
      }
      return addImportantToStyles(tsTeamMemberAvatarCSS);
    };
    const GenerateLayoutStyle = ({ settings = {} }) => {
      var _a2, _b;
      const [controls, setControls] = reactExports.useState([]);
      const layoutType = (_a2 = settings == null ? void 0 : settings.selectedLayout) == null ? void 0 : _a2.value;
      const isProLayout = ((_b = settings == null ? void 0 : settings.selectedLayout) == null ? void 0 : _b.type) === "pro";
      reactExports.useEffect(() => {
        var _a3;
        if (isProLayout) {
          const layout = proLayouts((_a3 = settings.selectedLayout) == null ? void 0 : _a3.value);
          if (layout && typeof layout.Editor === "function") {
            const register_controls2 = layout.Editor;
            const controls2 = register_controls2().controls || [];
            setControls(controls2);
          } else {
            setControls([]);
          }
        } else if (layoutType) {
          __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../layouts/Card/Editor.jsx": () => __vitePreload(() => Promise.resolve().then(() => Editor$3), true ? void 0 : void 0), "../layouts/HorizontalCard/Editor.jsx": () => __vitePreload(() => Promise.resolve().then(() => Editor$2), true ? void 0 : void 0), "../layouts/OverlayCard/Editor.jsx": () => __vitePreload(() => Promise.resolve().then(() => Editor$1), true ? void 0 : void 0), "../layouts/Tiles/Editor.jsx": () => __vitePreload(() => Promise.resolve().then(() => Editor), true ? void 0 : void 0) }), `../layouts/${layoutType}/Editor.jsx`, 4).then((module2) => {
            const register_controls2 = module2.register_controls;
            setControls(register_controls2().controls || []);
          }).catch((error) => {
            console.error("Error loading Editor.jsx:", error);
          });
        }
      }, [layoutType, isProLayout]);
      const cssGenerator = new CSSGenerator();
      const getValueFromSettings = (obj, path) => {
        return path.split(".").reduce((acc, key) => acc && acc[key] !== void 0 ? acc[key] : void 0, obj);
      };
      controls.forEach((control) => {
        if (control.name) {
          const cssVariableName = `--${control.name.replace(/\./g, "-")}`;
          const value = getValueFromSettings(settings, control.name) || control.defaultValue;
          if (value) {
            cssGenerator.addClassStyles(":root", {
              [cssVariableName]: value
            });
          } else {
            console.warn(`Missing value for control: ${control.name}`);
          }
        }
      });
      cssGenerator.addClassStyles(".tsteam-member__name", getTsTeamMemberNameStyle(settings));
      cssGenerator.addClassStyles(".tsteam-member__designation", getTsTeamMemberDesignationStyle(settings));
      cssGenerator.addClassStyles(".tsteam-member__description", getTsTeamMemberDescriptionStyle(settings));
      cssGenerator.addClassStyles(".tsteam-member__image", getTsTeamMemberAvatarStyle(settings));
      if (settings == null ? void 0 : settings.typography) {
        const { name, designation, description } = settings.typography;
        if (name) {
          cssGenerator.addClassStyles(":root", {
            "--team-member-name-font-family": name
          });
        }
        if (designation) {
          cssGenerator.addClassStyles(":root", {
            "--team-member-designation-font-family": designation
          });
        }
        if (description) {
          cssGenerator.addClassStyles(":root", {
            "--team-member-description-font-family": description
          });
        }
      }
      const generatedCSS = cssGenerator.generateCSS();
      return ReactExports.createElement("style", null, generatedCSS);
    };
    function StaticView({ team_members, settings, viewport, isEditor }) {
      var _a2, _b;
      const [ProLayoutComponent, setProLayoutComponent] = reactExports.useState(null);
      const commonStyles = getCommonStyles(settings);
      const [responsiveStyles, setResponsiveStyles] = reactExports.useState(
        getResponsiveStyles(settings, viewport, isEditor)
      );
      reactExports.useEffect(() => {
        if (settings == null ? void 0 : settings.typography) {
          const typographyKeys = ["name", "designation", "description"];
          typographyKeys.forEach((key) => {
            const fontFamily = settings.typography[key];
            if (fontFamily) {
              loadGoogleFont(fontFamily);
            }
          });
        }
      }, [settings == null ? void 0 : settings.typography]);
      reactExports.useMemo(() => {
        setProLayoutComponent(() => getProLayout(settings));
      }, [(_a2 = settings == null ? void 0 : settings.selectedLayout) == null ? void 0 : _a2.type, (_b = settings == null ? void 0 : settings.selectedLayout) == null ? void 0 : _b.value]);
      reactExports.useEffect(() => {
        const updateResponsiveStyles = () => {
          setResponsiveStyles(getResponsiveStyles(settings, viewport, isEditor));
        };
        if (isEditor) {
          updateResponsiveStyles();
        } else {
          updateResponsiveStyles();
          window.addEventListener("resize", updateResponsiveStyles);
          return () => {
            window.removeEventListener("resize", updateResponsiveStyles);
          };
        }
      }, [settings, isEditor, viewport]);
      const animationConfig = reactExports.useMemo(() => {
        const hoverAnimation = (settings == null ? void 0 : settings.hoverAnimation) || "none";
        const config = getAnimationClasses(hoverAnimation);
        return config;
      }, [settings == null ? void 0 : settings.hoverAnimation]);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "tsteam-container",
          style: {
            ...commonStyles,
            ...responsiveStyles
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GenerateLayoutStyle, { settings }),
            team_members && team_members.length > 0 ? team_members.map((member, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: ProLayoutComponent ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              ProLayoutComponent,
              {
                settings,
                imageUrl: member.meta_data.image,
                id: member.post_id,
                title: member.title,
                subtitle: member.meta_data.designation,
                description: member.meta_data.description,
                socialIcons: member.meta_data.socialLinks || [],
                details: /* @__PURE__ */ jsxRuntimeExports.jsx(Details, { settings, member }),
                animationConfig
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              Layout,
              {
                settings,
                layoutType: settings.selectedLayout.value,
                id: member.post_id,
                imageUrl: member.meta_data.image,
                title: member.title,
                subtitle: member.meta_data.designation,
                description: member.meta_data.description,
                socialIcons: member.meta_data.socialLinks || [],
                details: /* @__PURE__ */ jsxRuntimeExports.jsx(Details, { settings, member }),
                animationConfig
              }
            ) }, index)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No team members found." })
          ]
        }
      );
    }
    function FlexView({ team_members, settings, viewport, isEditor, Details: Details2 }) {
      var _a2, _b;
      const [ProLayoutComponent, setProLayoutComponent] = reactExports.useState(null);
      const commonStyles = getCommonStyles(settings);
      const [responsiveStyles, setResponsiveStyles] = reactExports.useState(
        getResponsiveStyles(settings, viewport, isEditor)
      );
      reactExports.useMemo(() => {
        setProLayoutComponent(() => getProLayout(settings));
      }, [(_a2 = settings == null ? void 0 : settings.selectedLayout) == null ? void 0 : _a2.type, (_b = settings == null ? void 0 : settings.selectedLayout) == null ? void 0 : _b.value]);
      reactExports.useEffect(() => {
        const updateResponsiveStyles = () => {
          setResponsiveStyles(getResponsiveStyles(settings, viewport, isEditor));
        };
        if (isEditor) {
          updateResponsiveStyles();
        } else {
          updateResponsiveStyles();
          window.addEventListener("resize", updateResponsiveStyles);
          return () => {
            window.removeEventListener("resize", updateResponsiveStyles);
          };
        }
      }, [settings, isEditor, viewport]);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "tsteam-flex-container",
          style: {
            ...commonStyles,
            ...responsiveStyles
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GenerateLayoutStyle, { settings }),
            ProLayoutComponent ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              ProLayoutComponent,
              {
                settings,
                team_members,
                Details: Details2
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              Layout,
              {
                settings,
                layoutType: settings.selectedLayout.value,
                team_members,
                Details: Details2
              }
            )
          ]
        }
      );
    }
    const Carousel = ({
      children,
      slidesToShow = 1,
      slidesToScroll = 1,
      autoplay = false,
      autoplaySpeed = 3e3,
      repeat = true,
      infinite = false,
      transition = "slide",
      transitionDuration = 300,
      centerMode = false,
      gap = 20,
      dotStyle = {
        color: "#703fd6",
        inactiveColor: "#D1D5DB",
        size: "12px",
        gap: "8px"
      },
      navigationStyle = {
        backgroundColor: "#ffffff",
        color: "#703fd6",
        size: "15px"
      },
      responsive = [],
      className = "",
      containerClassName = "",
      slideClassName = "",
      arrowClassName = ""
    }) => {
      const [currentSlide, setCurrentSlide] = reactExports.useState(0);
      const [windowWidth, setWindowWidth] = reactExports.useState(typeof window !== "undefined" ? window.innerWidth : 0);
      const [isAnimating, setIsAnimating] = reactExports.useState(false);
      const [isDragging, setIsDragging] = reactExports.useState(false);
      const [startX, setStartX] = reactExports.useState(0);
      const [scrollLeft, setScrollLeft] = reactExports.useState(0);
      const sliderRef = reactExports.useRef(null);
      const transitionRef = reactExports.useRef(true);
      const getCurrentSettings = () => {
        if (!responsive) return { slidesToShow, slidesToScroll };
        const currentBreakpoint = responsive.find((item) => windowWidth <= item.breakpoint);
        return currentBreakpoint ? currentBreakpoint.settings : { slidesToShow, slidesToScroll };
      };
      const { slidesToShow: currentSlidesToShow, slidesToScroll: currentSlidesToScroll } = getCurrentSettings();
      const childrenArray = ReactExports.Children.toArray(children);
      const totalOriginalSlides = childrenArray.length;
      const createSlidesArray = () => {
        if (!repeat && !infinite) return childrenArray;
        let slides2 = [];
        const numberOfSets = 4;
        for (let i = 0; i < numberOfSets; i++) {
          slides2 = [...slides2, ...childrenArray.map(
            (child, index) => ReactExports.cloneElement(child, { key: `set-${i}-slide-${index}` })
          )];
        }
        return slides2;
      };
      reactExports.useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
      reactExports.useEffect(() => {
        if (!autoplay) return;
        const interval = setInterval(nextSlide, autoplaySpeed);
        return () => clearInterval(interval);
      }, [currentSlide, autoplay, autoplaySpeed]);
      reactExports.useEffect(() => {
        if (!infinite) return;
        const handleTransitionEnd = () => {
          if (currentSlide >= totalOriginalSlides * 3) {
            transitionRef.current = false;
            setCurrentSlide(totalOriginalSlides);
          }
        };
        const slider = sliderRef.current;
        if (slider) {
          slider.addEventListener("transitionend", handleTransitionEnd);
          return () => slider.removeEventListener("transitionend", handleTransitionEnd);
        }
      }, [currentSlide, infinite, totalOriginalSlides]);
      reactExports.useEffect(() => {
        if (!transitionRef.current) {
          setTimeout(() => {
            transitionRef.current = true;
          }, 50);
        }
      }, [currentSlide]);
      const handleMouseDown = (e2) => {
        setIsDragging(true);
        setStartX(e2.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
      };
      const handleMouseMove = (e2) => {
        if (!isDragging) return;
        e2.preventDefault();
        const x2 = e2.pageX - sliderRef.current.offsetLeft;
        const dist2 = x2 - startX;
        if (Math.abs(dist2) > 50) {
          if (dist2 > 0) {
            prevSlide();
          } else {
            nextSlide();
          }
          setIsDragging(false);
        }
      };
      const handleMouseUp = () => {
        setIsDragging(false);
      };
      const nextSlide = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), transitionDuration);
        if (infinite) {
          setCurrentSlide((current) => current + Number(currentSlidesToScroll));
        } else {
          setCurrentSlide((current) => {
            const next2 = current + currentSlidesToScroll;
            if (next2 >= createSlidesArray().length - currentSlidesToShow + 1) {
              return repeat ? 0 : current;
            }
            return next2;
          });
        }
      };
      const prevSlide = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), transitionDuration);
        if (infinite) {
          setCurrentSlide((current) => {
            if (current <= 0) {
              transitionRef.current = false;
              return totalOriginalSlides * 2;
            }
            return current - currentSlidesToScroll;
          });
        } else {
          setCurrentSlide((current) => {
            const prev2 = current - currentSlidesToScroll;
            if (prev2 < 0) {
              return repeat ? createSlidesArray().length - currentSlidesToShow : 0;
            }
            return prev2;
          });
        }
      };
      const goToSlide = (index) => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), transitionDuration);
        setCurrentSlide(index);
      };
      const getTransitionStyles = () => {
        const baseStyles = {
          width: `${100 / currentSlidesToShow}%`,
          flexShrink: 0,
          transition: transitionRef.current ? `all ${transitionDuration}ms ease-in-out` : "none",
          padding: `0 ${gap / 2}px`
        };
        if (centerMode) {
          baseStyles.transform = `scale(${isAnimating ? 0.9 : 1})`;
        }
        switch (transition) {
          case "fade":
            return {
              ...baseStyles,
              opacity: isAnimating ? 0 : 1
            };
          case "zoom":
            return {
              ...baseStyles,
              transform: isAnimating ? "scale(0.9)" : "scale(1)"
            };
          case "flip":
            return {
              ...baseStyles,
              transform: isAnimating ? "rotateY(180deg)" : "rotateY(0)",
              backfaceVisibility: "hidden"
            };
          default:
            return baseStyles;
        }
      };
      const slides = createSlidesArray();
      const slideWidth = 100 / currentSlidesToShow;
      const trackStyles = {
        display: "flex",
        transform: `translateX(-${currentSlide * slideWidth}%)`,
        transition: transitionRef.current ? `transform ${transitionDuration}ms ease-in-out` : "none",
        marginLeft: centerMode ? `-${slideWidth / 2}%` : 0,
        marginRight: centerMode ? `-${slideWidth / 2}%` : 0
      };
      slides.length / (infinite ? 4 : 1);
      const normalizedCurrentSlide = repeat ? currentSlide % totalOriginalSlides : currentSlide;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative w-full ${containerClassName}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: sliderRef,
            className: `flex ${className}`,
            style: trackStyles,
            onMouseDown: handleMouseDown,
            onMouseMove: handleMouseMove,
            onMouseUp: handleMouseUp,
            onMouseLeave: handleMouseUp,
            children: slides.map((child, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `flex-shrink-0 ${slideClassName} ${centerMode && index === currentSlide ? "active scale-100" : ""}`,
                style: getTransitionStyles(),
                children: child
              },
              `slide-${index}`
            ))
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: prevSlide,
              className: `absolute left-[-2rem] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white hover:bg-purple-500 border-none text-purple-500 hover:text-white rounded-full shadow-lg z-10 ${arrowClassName}`,
              style: {
                backgroundColor: navigationStyle.backgroundColor,
                color: navigationStyle.color,
                fontSize: navigationStyle.size
              },
              children: "←"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: nextSlide,
              className: `absolute right-[-2rem] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white hover:bg-purple-500 border-none text-purple-500 hover:text-white rounded-full shadow-lg z-10 ${arrowClassName}`,
              style: {
                backgroundColor: navigationStyle.backgroundColor,
                color: navigationStyle.color,
                fontSize: navigationStyle.size
              },
              children: "→"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "relative mt-6 left-1/2 -translate-x-1/2 flex justify-center",
            style: { gap: dotStyle.gap },
            children: Array.from({ length: totalOriginalSlides }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => goToSlide(index),
                className: "p-0 border-none",
                style: {
                  width: dotStyle.size,
                  height: dotStyle.size,
                  borderRadius: "50%",
                  backgroundColor: index === normalizedCurrentSlide ? dotStyle.color : dotStyle.inactiveColor,
                  transition: "background-color 300ms"
                }
              },
              `dot-${index}`
            ))
          }
        )
      ] });
    };
    function stringToBoolean(str) {
      const input = String(str).trim().toLowerCase();
      const truthyValues = ["true", "yes", "1", "on"];
      const falsyValues = ["false", "no", "0", "off", ""];
      if (truthyValues.includes(input)) {
        return true;
      }
      if (falsyValues.includes(input)) {
        return false;
      }
      console.warn(`Unrecognized input: "${str}". Defaulting to false.`);
      return false;
    }
    function PhotoIcon({
      title,
      titleId,
      ...props
    }, svgRef) {
      return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
      }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
        id: titleId
      }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z",
        clipRule: "evenodd"
      }));
    }
    const ForwardRef$1 = /* @__PURE__ */ reactExports.forwardRef(PhotoIcon);
    function UserCircleIcon({
      title,
      titleId,
      ...props
    }, svgRef) {
      return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
      }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
        id: titleId
      }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
        fillRule: "evenodd",
        d: "M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z",
        clipRule: "evenodd"
      }));
    }
    const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(UserCircleIcon);
    const getTranslations = () => {
      if (!window.tsteam_i18n) {
        console.error("tsteam_i18n is not defined. Ensure translations are passed via wp_localize_script().");
        return {};
      }
      return {
        dashboard: window.tsteam_i18n.dashboard || "Dashboard",
        teamShowcase: window.tsteam_i18n.team_showcase || "Team Showcase",
        teamMember: window.tsteam_i18n.team_member || "Team Member",
        memberCategory: window.tsteam_i18n.member_category || "Member Category",
        tools: window.tsteam_i18n.tools || "Tools",
        account: window.tsteam_i18n.account || "Account",
        supportForum: window.tsteam_i18n.support_forum || "Support Forum",
        getPro: window.tsteam_i18n.get_pro || "Get Pro",
        grabYourDiscount: window.tsteam_i18n.grab_your_discount || "Grab Your Discount",
        upgradeToPro: window.tsteam_i18n.upgrade_to_pro || "Upgrade to Pro",
        documentations: window.tsteam_i18n.documentations || "Documentations",
        helpAndSupport: window.tsteam_i18n.help_and_support || "Help & Support",
        videoGuide: window.tsteam_i18n.video_guide || "Video Guide",
        add: window.tsteam_i18n.add || "Add",
        create: window.tsteam_i18n.create || "Create",
        select: window.tsteam_i18n.select || "Select",
        settings: window.tsteam_i18n.settings || "Settings",
        update: window.tsteam_i18n.update || "Update",
        publish: window.tsteam_i18n.publish || "Publish",
        title: window.tsteam_i18n.title || "Title",
        shortcode: window.tsteam_i18n.shortcode || "Shortcode",
        snippet: window.tsteam_i18n.snippet || "Snippet",
        action: window.tsteam_i18n.action || "Action",
        edit: window.tsteam_i18n.edit || "Edit",
        editDesign: window.tsteam_i18n.edit_design || "Edit Design",
        delete: window.tsteam_i18n.delete || "Delete",
        image: window.tsteam_i18n.image || "Image",
        name: window.tsteam_i18n.name || "Name",
        designation: window.tsteam_i18n.designation || "Designation",
        description: window.tsteam_i18n.description || "Description",
        basicInformation: window.tsteam_i18n.basic_information || "Basic Information",
        memberName: window.tsteam_i18n.member_name || "Member Name",
        memberDesignation: window.tsteam_i18n.member_designation || "Member Designation",
        memberEmail: window.tsteam_i18n.member_email || "Member Email",
        memberMobile: window.tsteam_i18n.member_mobile || "Member Mobile",
        memberDescription: window.tsteam_i18n.member_description || "Member Description",
        memberImage: window.tsteam_i18n.member_image || "Member Image",
        detailsInformation: window.tsteam_i18n.details_information || "Details Information",
        memberTelephone: window.tsteam_i18n.member_telephone || "Member Telephone",
        yearsOfExperience: window.tsteam_i18n.years_of_experience || "Years of Experience",
        company: window.tsteam_i18n.company || "Company",
        location: window.tsteam_i18n.location || "Location",
        profileLinks: window.tsteam_i18n.profile_links || "Profile Links",
        website: window.tsteam_i18n.website || "Website",
        resumeLink: window.tsteam_i18n.resume_link || "Resume Link",
        hireLink: window.tsteam_i18n.hire_link || "Hire Link",
        donationLink: window.tsteam_i18n.donation_link || "Donation Link",
        socialLinks: window.tsteam_i18n.social_links || "Social Links",
        skills: window.tsteam_i18n.skills || "Skills",
        showcaseName: window.tsteam_i18n.showcase_name || "Showcase Name",
        content: window.tsteam_i18n.content || "Content",
        loadingEditor: window.tsteam_i18n.loading_editor || "Loading Editor",
        copyDesign: window.tsteam_i18n.copy_design || "Copy Design",
        pasteDesign: window.tsteam_i18n.paste_design || "Paste Design",
        viewStyle: window.tsteam_i18n.view_style || "View Style",
        layout: window.tsteam_i18n.layout || "Layout",
        detailsStyle: window.tsteam_i18n.details_style || "Details Style",
        containerWidth: window.tsteam_i18n.container_width || "Container Width",
        columns: window.tsteam_i18n.columns || "Columns",
        columnGap: window.tsteam_i18n.column_gap || "Column Gap",
        style: window.tsteam_i18n.style || "Style",
        commonStyles: window.tsteam_i18n.common_styles || "Common Styles",
        backgroundColor: window.tsteam_i18n.background_color || "Background Color",
        memberNameColor: window.tsteam_i18n.member_name_color || "Member Name Color",
        memberDesignationColor: window.tsteam_i18n.member_designation_color || "Member Designation Color",
        memberDescriptionColor: window.tsteam_i18n.member_description_color || "Member Description Color",
        borderColor: window.tsteam_i18n.border_color || "Border Color",
        imageBorderColor: window.tsteam_i18n.image_border_color || "Image Border Color",
        borderWidth: window.tsteam_i18n.border_width || "Border Width",
        borderRadius: window.tsteam_i18n.border_radius || "Border Radius",
        imageBorderWidth: window.tsteam_i18n.image_border_width || "Image Border Width",
        imageBorderRadius: window.tsteam_i18n.image_border_radius || "Image Border Radius",
        font: window.tsteam_i18n.font || "Font",
        nameTypography: window.tsteam_i18n.name_typography || "Name Typography",
        designationTypography: window.tsteam_i18n.designation_typography || "Designation Typography",
        descriptionTypography: window.tsteam_i18n.description_typography || "Description Typography",
        detailsTypography: window.tsteam_i18n.details_typography || "Details Typography",
        social: window.tsteam_i18n.social || "Social",
        socialIconBorderRadius: window.tsteam_i18n.social_icon_border_radius || "Social Icon Border Radius",
        socialIconColor: window.tsteam_i18n.social_icon_color || "Social Icon Color",
        socialIconBackgroundColor: window.tsteam_i18n.social_icon_background_color || "Social Icon Background Color",
        motion: window.tsteam_i18n.motion || "Motion",
        hoverAnimation: window.tsteam_i18n.hover_animation || "Hover Animation",
        global: window.tsteam_i18n.global || "Global",
        containerBackgroundColor: window.tsteam_i18n.container_background_color || "Container Background Color",
        containerMargin: window.tsteam_i18n.container_margin || "Container Margin",
        containerPadding: window.tsteam_i18n.container_padding || "Container Padding",
        containerBorderRadius: window.tsteam_i18n.container_border_radius || "Container Border Radius",
        successfullyUpdated: window.tsteam_i18n.successfully_updated || "Successfully Updated",
        settingsUpdatedMessage: window.tsteam_i18n.settings_updated_message || "The settings have been successfully updated.",
        areYouSure: window.tsteam_i18n.are_you_sure || "Are you sure?",
        deleteConfirmation: window.tsteam_i18n.delete_confirmation || "You're going to delete this",
        noKeepIt: window.tsteam_i18n.no_keep_it || "No, Keep it.",
        yesDelete: window.tsteam_i18n.yes_delete || "Yes, Delete!"
      };
    };
    const isPro$1 = !!tsteam_settings.is_pro;
    const translations = getTranslations();
    ({
      token: {
        colorPrimary: "#703FD6",
        colorBgContainer: "#fff",
        colorText: "#000000"
      },
      components: {
        Table: {
          "headerBg": "#F3EAFB",
          "headerColor": "#111C5C",
          "headerBorderRadius": 15,
          "borderRadius": 15,
          "boxShadowSecondary": 0
        },
        Input: {
          "colorBorder": "#C1DAF8",
          "borderRadius": 12,
          "paddingBlock": 6,
          "paddingBlockLG": 8
        }
      },
      theme: {
        primaryColor: "#703FD6",
        textColor: "#333",
        borderColor: "#ededed",
        borderColorLight: "#DFD5F6"
      },
      navigation: {
        dashboard: {
          link: "?page=tsteam-showcase&path=dashboard",
          label: "Dashboard",
          icon: ForwardRef$1
        },
        teamShowcase: {
          link: "?page=tsteam-showcase",
          label: "Team Showcase",
          icon: ForwardRef$1
        },
        teamMember: {
          link: "?page=tsteam-showcase&path=team-member",
          label: "Team Member",
          icon: ForwardRef
        }
      },
      topbar: {
        menuitems: {
          dashboard: {
            link: "?page=tsteam-showcase&path=dashboard",
            label: translations.dashboard
          },
          teamShowcase: {
            link: "?page=tsteam-showcase",
            label: translations.teamShowcase
          },
          teamMember: {
            link: "?page=tsteam-showcase&path=team-member",
            label: translations.teamMember
          },
          memberCategory: {
            link: "?page=tsteam-showcase&path=member-category",
            label: translations.memberCategory
          },
          tools: {
            link: "?page=tsteam-showcase&path=tools",
            label: translations.tools
          },
          ...isPro$1 && {
            account: {
              link: "admin.php?page=tsteam-admin-account",
              label: translations.account
            }
          },
          supportForum: {
            link: "https://wordpress.org/support/plugin/ts-team-member",
            label: translations.supportForum
          }
        },
        ...isPro$1 ? {} : {
          proLink: {
            link: "https://themespell.com/ts-product/ts-team-member/",
            label: translations.getPro
          }
        },
        version: "1.2.3"
      }
    });
    var classnames = { exports: {} };
    /*!
    	Copyright (c) 2018 Jed Watson.
    	Licensed under the MIT License (MIT), see
    	http://jedwatson.github.io/classnames
    */
    (function(module2) {
      (function() {
        var hasOwn = {}.hasOwnProperty;
        function classNames2() {
          var classes = "";
          for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (arg) {
              classes = appendClass(classes, parseValue(arg));
            }
          }
          return classes;
        }
        function parseValue(arg) {
          if (typeof arg === "string" || typeof arg === "number") {
            return arg;
          }
          if (typeof arg !== "object") {
            return "";
          }
          if (Array.isArray(arg)) {
            return classNames2.apply(null, arg);
          }
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            return arg.toString();
          }
          var classes = "";
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes = appendClass(classes, key);
            }
          }
          return classes;
        }
        function appendClass(value, newClass) {
          if (!newClass) {
            return value;
          }
          if (value) {
            return value + " " + newClass;
          }
          return value + newClass;
        }
        if (module2.exports) {
          classNames2.default = classNames2;
          module2.exports = classNames2;
        } else {
          window.classNames = classNames2;
        }
      })();
    })(classnames);
    var classnamesExports = classnames.exports;
    const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
    function _extends() {
      return _extends = Object.assign ? Object.assign.bind() : function(n2) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var t2 = arguments[e2];
          for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
        }
        return n2;
      }, _extends.apply(null, arguments);
    }
    var reactIs = { exports: {} };
    var reactIs_production_min = {};
    /**
     * @license React
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var b$1 = Symbol.for("react.element"), c = Symbol.for("react.portal"), d$1 = Symbol.for("react.fragment"), e$1 = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h$2 = Symbol.for("react.context"), k$1 = Symbol.for("react.server_context"), l$1 = Symbol.for("react.forward_ref"), m$1 = Symbol.for("react.suspense"), n$2 = Symbol.for("react.suspense_list"), p$2 = Symbol.for("react.memo"), q$3 = Symbol.for("react.lazy"), t$2 = Symbol.for("react.offscreen"), u$2;
    u$2 = Symbol.for("react.module.reference");
    function v$1(a) {
      if ("object" === typeof a && null !== a) {
        var r2 = a.$$typeof;
        switch (r2) {
          case b$1:
            switch (a = a.type, a) {
              case d$1:
              case f:
              case e$1:
              case m$1:
              case n$2:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k$1:
                  case h$2:
                  case l$1:
                  case q$3:
                  case p$2:
                  case g:
                    return a;
                  default:
                    return r2;
                }
            }
          case c:
            return r2;
        }
      }
    }
    reactIs_production_min.ContextConsumer = h$2;
    reactIs_production_min.ContextProvider = g;
    reactIs_production_min.Element = b$1;
    reactIs_production_min.ForwardRef = l$1;
    reactIs_production_min.Fragment = d$1;
    reactIs_production_min.Lazy = q$3;
    reactIs_production_min.Memo = p$2;
    reactIs_production_min.Portal = c;
    reactIs_production_min.Profiler = f;
    reactIs_production_min.StrictMode = e$1;
    reactIs_production_min.Suspense = m$1;
    reactIs_production_min.SuspenseList = n$2;
    reactIs_production_min.isAsyncMode = function() {
      return false;
    };
    reactIs_production_min.isConcurrentMode = function() {
      return false;
    };
    reactIs_production_min.isContextConsumer = function(a) {
      return v$1(a) === h$2;
    };
    reactIs_production_min.isContextProvider = function(a) {
      return v$1(a) === g;
    };
    reactIs_production_min.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === b$1;
    };
    reactIs_production_min.isForwardRef = function(a) {
      return v$1(a) === l$1;
    };
    reactIs_production_min.isFragment = function(a) {
      return v$1(a) === d$1;
    };
    reactIs_production_min.isLazy = function(a) {
      return v$1(a) === q$3;
    };
    reactIs_production_min.isMemo = function(a) {
      return v$1(a) === p$2;
    };
    reactIs_production_min.isPortal = function(a) {
      return v$1(a) === c;
    };
    reactIs_production_min.isProfiler = function(a) {
      return v$1(a) === f;
    };
    reactIs_production_min.isStrictMode = function(a) {
      return v$1(a) === e$1;
    };
    reactIs_production_min.isSuspense = function(a) {
      return v$1(a) === m$1;
    };
    reactIs_production_min.isSuspenseList = function(a) {
      return v$1(a) === n$2;
    };
    reactIs_production_min.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === d$1 || a === f || a === e$1 || a === m$1 || a === n$2 || a === t$2 || "object" === typeof a && null !== a && (a.$$typeof === q$3 || a.$$typeof === p$2 || a.$$typeof === g || a.$$typeof === h$2 || a.$$typeof === l$1 || a.$$typeof === u$2 || void 0 !== a.getModuleId) ? true : false;
    };
    reactIs_production_min.typeOf = v$1;
    {
      reactIs.exports = reactIs_production_min;
    }
    var reactIsExports = reactIs.exports;
    var warned = {};
    var preMessage = function preMessage2(fn) {
    };
    function warning$1(valid, message) {
    }
    function note(valid, message) {
    }
    function resetWarned() {
      warned = {};
    }
    function call(method, valid, message) {
      if (!valid && !warned[message]) {
        method(false, message);
        warned[message] = true;
      }
    }
    function warningOnce(valid, message) {
      call(warning$1, valid, message);
    }
    function noteOnce(valid, message) {
      call(note, valid, message);
    }
    warningOnce.preMessage = preMessage;
    warningOnce.resetWarned = resetWarned;
    warningOnce.noteOnce = noteOnce;
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    function toPrimitive(t2, r2) {
      if ("object" != _typeof(t2) || !t2) return t2;
      var e2 = t2[Symbol.toPrimitive];
      if (void 0 !== e2) {
        var i = e2.call(t2, r2 || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r2 ? String : Number)(t2);
    }
    function toPropertyKey(t2) {
      var i = toPrimitive(t2, "string");
      return "symbol" == _typeof(i) ? i : i + "";
    }
    function _defineProperty(e2, r2, t2) {
      return (r2 = toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
        value: t2,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e2[r2] = t2, e2;
    }
    function ownKeys(e2, r2) {
      var t2 = Object.keys(e2);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e2);
        r2 && (o = o.filter(function(r3) {
          return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
        })), t2.push.apply(t2, o);
      }
      return t2;
    }
    function _objectSpread2(e2) {
      for (var r2 = 1; r2 < arguments.length; r2++) {
        var t2 = null != arguments[r2] ? arguments[r2] : {};
        r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
          _defineProperty(e2, r3, t2[r3]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
          Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
        });
      }
      return e2;
    }
    function isDOM(node2) {
      return node2 instanceof HTMLElement || node2 instanceof SVGElement;
    }
    function getDOM(node2) {
      if (node2 && _typeof(node2) === "object" && isDOM(node2.nativeElement)) {
        return node2.nativeElement;
      }
      if (isDOM(node2)) {
        return node2;
      }
      return null;
    }
    function findDOMNode(node2) {
      var domNode = getDOM(node2);
      if (domNode) {
        return domNode;
      }
      if (node2 instanceof ReactExports.Component) {
        var _ReactDOM$findDOMNode;
        return (_ReactDOM$findDOMNode = ReactDOM.findDOMNode) === null || _ReactDOM$findDOMNode === void 0 ? void 0 : _ReactDOM$findDOMNode.call(ReactDOM, node2);
      }
      return null;
    }
    function useMemo(getValue2, condition, shouldUpdate) {
      var cacheRef = reactExports.useRef({});
      if (!("value" in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
        cacheRef.current.value = getValue2();
        cacheRef.current.condition = condition;
      }
      return cacheRef.current.value;
    }
    var fillRef = function fillRef2(ref, node2) {
      if (typeof ref === "function") {
        ref(node2);
      } else if (_typeof(ref) === "object" && ref && "current" in ref) {
        ref.current = node2;
      }
    };
    var supportRef = function supportRef2(nodeOrComponent) {
      var _type$prototype, _nodeOrComponent$prot;
      var type = reactIsExports.isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
      if (typeof type === "function" && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render) && type.$$typeof !== reactIsExports.ForwardRef) {
        return false;
      }
      if (typeof nodeOrComponent === "function" && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render) && nodeOrComponent.$$typeof !== reactIsExports.ForwardRef) {
        return false;
      }
      return true;
    };
    function isReactElement(node2) {
      return /* @__PURE__ */ reactExports.isValidElement(node2) && !reactIsExports.isFragment(node2);
    }
    Number(reactExports.version.split(".")[0]) >= 19 ? (
      // >= React 19
      function(node2) {
        if (isReactElement(node2)) {
          return node2.props.ref;
        }
        return null;
      }
    ) : (
      // < React 19
      function(node2) {
        if (isReactElement(node2)) {
          return node2.ref;
        }
        return null;
      }
    );
    function _classCallCheck(a, n2) {
      if (!(a instanceof n2)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(e2, r2) {
      for (var t2 = 0; t2 < r2.length; t2++) {
        var o = r2[t2];
        o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e2, toPropertyKey(o.key), o);
      }
    }
    function _createClass(e2, r2, t2) {
      return r2 && _defineProperties(e2.prototype, r2), t2 && _defineProperties(e2, t2), Object.defineProperty(e2, "prototype", {
        writable: false
      }), e2;
    }
    function _setPrototypeOf(t2, e2) {
      return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
        return t3.__proto__ = e3, t3;
      }, _setPrototypeOf(t2, e2);
    }
    function _inherits(t2, e2) {
      if ("function" != typeof e2 && null !== e2) throw new TypeError("Super expression must either be null or a function");
      t2.prototype = Object.create(e2 && e2.prototype, {
        constructor: {
          value: t2,
          writable: true,
          configurable: true
        }
      }), Object.defineProperty(t2, "prototype", {
        writable: false
      }), e2 && _setPrototypeOf(t2, e2);
    }
    function _getPrototypeOf(t2) {
      return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
        return t3.__proto__ || Object.getPrototypeOf(t3);
      }, _getPrototypeOf(t2);
    }
    function _isNativeReflectConstruct() {
      try {
        var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (t3) {
      }
      return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
        return !!t2;
      })();
    }
    function _assertThisInitialized(e2) {
      if (void 0 === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e2;
    }
    function _possibleConstructorReturn(t2, e2) {
      if (e2 && ("object" == _typeof(e2) || "function" == typeof e2)) return e2;
      if (void 0 !== e2) throw new TypeError("Derived constructors may only return object or undefined");
      return _assertThisInitialized(t2);
    }
    function _createSuper(t2) {
      var r2 = _isNativeReflectConstruct();
      return function() {
        var e2, o = _getPrototypeOf(t2);
        if (r2) {
          var s = _getPrototypeOf(this).constructor;
          e2 = Reflect.construct(o, arguments, s);
        } else e2 = o.apply(this, arguments);
        return _possibleConstructorReturn(this, e2);
      };
    }
    function _arrayLikeToArray(r2, a) {
      (null == a || a > r2.length) && (a = r2.length);
      for (var e2 = 0, n2 = Array(a); e2 < a; e2++) n2[e2] = r2[e2];
      return n2;
    }
    function _arrayWithoutHoles(r2) {
      if (Array.isArray(r2)) return _arrayLikeToArray(r2);
    }
    function _iterableToArray(r2) {
      if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
    }
    function _unsupportedIterableToArray(r2, a) {
      if (r2) {
        if ("string" == typeof r2) return _arrayLikeToArray(r2, a);
        var t2 = {}.toString.call(r2).slice(8, -1);
        return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r2, a) : void 0;
      }
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toConsumableArray(r2) {
      return _arrayWithoutHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableSpread();
    }
    var raf = function raf2(callback) {
      return +setTimeout(callback, 16);
    };
    var caf = function caf2(num) {
      return clearTimeout(num);
    };
    if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
      raf = function raf3(callback) {
        return window.requestAnimationFrame(callback);
      };
      caf = function caf3(handle) {
        return window.cancelAnimationFrame(handle);
      };
    }
    var rafUUID = 0;
    var rafIds = /* @__PURE__ */ new Map();
    function cleanup(id2) {
      rafIds.delete(id2);
    }
    var wrapperRaf = function wrapperRaf2(callback) {
      var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      rafUUID += 1;
      var id2 = rafUUID;
      function callRef(leftTimes) {
        if (leftTimes === 0) {
          cleanup(id2);
          callback();
        } else {
          var realId = raf(function() {
            callRef(leftTimes - 1);
          });
          rafIds.set(id2, realId);
        }
      }
      callRef(times);
      return id2;
    };
    wrapperRaf.cancel = function(id2) {
      var realId = rafIds.get(id2);
      cleanup(id2);
      return caf(realId);
    };
    function _arrayWithHoles(r2) {
      if (Array.isArray(r2)) return r2;
    }
    function _iterableToArrayLimit(r2, l2) {
      var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
      if (null != t2) {
        var e2, n2, i, u2, a = [], f2 = true, o = false;
        try {
          if (i = (t2 = t2.call(r2)).next, 0 === l2) {
            if (Object(t2) !== t2) return;
            f2 = false;
          } else for (; !(f2 = (e2 = i.call(t2)).done) && (a.push(e2.value), a.length !== l2); f2 = true) ;
        } catch (r3) {
          o = true, n2 = r3;
        } finally {
          try {
            if (!f2 && null != t2["return"] && (u2 = t2["return"](), Object(u2) !== u2)) return;
          } finally {
            if (o) throw n2;
          }
        }
        return a;
      }
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _slicedToArray(r2, e2) {
      return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e2) || _unsupportedIterableToArray(r2, e2) || _nonIterableRest();
    }
    function murmur2(str) {
      var h2 = 0;
      var k2, i = 0, len = str.length;
      for (; len >= 4; ++i, len -= 4) {
        k2 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
        k2 = /* Math.imul(k, m): */
        (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
        k2 ^= /* k >>> r: */
        k2 >>> 24;
        h2 = /* Math.imul(k, m): */
        (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
        (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
      }
      switch (len) {
        case 3:
          h2 ^= (str.charCodeAt(i + 2) & 255) << 16;
        case 2:
          h2 ^= (str.charCodeAt(i + 1) & 255) << 8;
        case 1:
          h2 ^= str.charCodeAt(i) & 255;
          h2 = /* Math.imul(h, m): */
          (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
      }
      h2 ^= h2 >>> 13;
      h2 = /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
      return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
    }
    function canUseDom() {
      return !!(typeof window !== "undefined" && window.document && window.document.createElement);
    }
    function contains(root2, n2) {
      if (!root2) {
        return false;
      }
      if (root2.contains) {
        return root2.contains(n2);
      }
      var node2 = n2;
      while (node2) {
        if (node2 === root2) {
          return true;
        }
        node2 = node2.parentNode;
      }
      return false;
    }
    var APPEND_ORDER = "data-rc-order";
    var APPEND_PRIORITY = "data-rc-priority";
    var MARK_KEY = "rc-util-key";
    var containerCache = /* @__PURE__ */ new Map();
    function getMark() {
      var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref.mark;
      if (mark) {
        return mark.startsWith("data-") ? mark : "data-".concat(mark);
      }
      return MARK_KEY;
    }
    function getContainer(option) {
      if (option.attachTo) {
        return option.attachTo;
      }
      var head = document.querySelector("head");
      return head || document.body;
    }
    function getOrder(prepend) {
      if (prepend === "queue") {
        return "prependQueue";
      }
      return prepend ? "prepend" : "append";
    }
    function findStyles(container) {
      return Array.from((containerCache.get(container) || container).children).filter(function(node2) {
        return node2.tagName === "STYLE";
      });
    }
    function injectCSS(css) {
      var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!canUseDom()) {
        return null;
      }
      var csp = option.csp, prepend = option.prepend, _option$priority = option.priority, priority = _option$priority === void 0 ? 0 : _option$priority;
      var mergedOrder = getOrder(prepend);
      var isPrependQueue = mergedOrder === "prependQueue";
      var styleNode = document.createElement("style");
      styleNode.setAttribute(APPEND_ORDER, mergedOrder);
      if (isPrependQueue && priority) {
        styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
      }
      if (csp !== null && csp !== void 0 && csp.nonce) {
        styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
      }
      styleNode.innerHTML = css;
      var container = getContainer(option);
      var firstChild = container.firstChild;
      if (prepend) {
        if (isPrependQueue) {
          var existStyle = (option.styles || findStyles(container)).filter(function(node2) {
            if (!["prepend", "prependQueue"].includes(node2.getAttribute(APPEND_ORDER))) {
              return false;
            }
            var nodePriority = Number(node2.getAttribute(APPEND_PRIORITY) || 0);
            return priority >= nodePriority;
          });
          if (existStyle.length) {
            container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
            return styleNode;
          }
        }
        container.insertBefore(styleNode, firstChild);
      } else {
        container.appendChild(styleNode);
      }
      return styleNode;
    }
    function findExistNode(key) {
      var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var container = getContainer(option);
      return (option.styles || findStyles(container)).find(function(node2) {
        return node2.getAttribute(getMark(option)) === key;
      });
    }
    function removeCSS(key) {
      var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var existNode = findExistNode(key, option);
      if (existNode) {
        var container = getContainer(option);
        container.removeChild(existNode);
      }
    }
    function syncRealContainer(container, option) {
      var cachedRealContainer = containerCache.get(container);
      if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
        var placeholderStyle = injectCSS("", option);
        var parentNode = placeholderStyle.parentNode;
        containerCache.set(container, parentNode);
        container.removeChild(placeholderStyle);
      }
    }
    function updateCSS(css, key) {
      var originOption = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var container = getContainer(originOption);
      var styles = findStyles(container);
      var option = _objectSpread2(_objectSpread2({}, originOption), {}, {
        styles
      });
      syncRealContainer(container, option);
      var existNode = findExistNode(key, option);
      if (existNode) {
        var _option$csp, _option$csp2;
        if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
          var _option$csp3;
          existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
        }
        if (existNode.innerHTML !== css) {
          existNode.innerHTML = css;
        }
        return existNode;
      }
      var newNode = injectCSS(css, option);
      newNode.setAttribute(getMark(option), key);
      return newNode;
    }
    function _objectWithoutPropertiesLoose(r2, e2) {
      if (null == r2) return {};
      var t2 = {};
      for (var n2 in r2) if ({}.hasOwnProperty.call(r2, n2)) {
        if (e2.includes(n2)) continue;
        t2[n2] = r2[n2];
      }
      return t2;
    }
    function _objectWithoutProperties(e2, t2) {
      if (null == e2) return {};
      var o, r2, i = _objectWithoutPropertiesLoose(e2, t2);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e2);
        for (r2 = 0; r2 < s.length; r2++) o = s[r2], t2.includes(o) || {}.propertyIsEnumerable.call(e2, o) && (i[o] = e2[o]);
      }
      return i;
    }
    function isEqual(obj1, obj2) {
      var shallow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var refSet = /* @__PURE__ */ new Set();
      function deepEqual(a, b2) {
        var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
        var circular = refSet.has(a);
        warningOnce(!circular, "Warning: There may be circular references");
        if (circular) {
          return false;
        }
        if (a === b2) {
          return true;
        }
        if (shallow && level > 1) {
          return false;
        }
        refSet.add(a);
        var newLevel = level + 1;
        if (Array.isArray(a)) {
          if (!Array.isArray(b2) || a.length !== b2.length) {
            return false;
          }
          for (var i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b2[i], newLevel)) {
              return false;
            }
          }
          return true;
        }
        if (a && b2 && _typeof(a) === "object" && _typeof(b2) === "object") {
          var keys2 = Object.keys(a);
          if (keys2.length !== Object.keys(b2).length) {
            return false;
          }
          return keys2.every(function(key) {
            return deepEqual(a[key], b2[key], newLevel);
          });
        }
        return false;
      }
      return deepEqual(obj1, obj2);
    }
    var SPLIT = "%";
    function pathKey(keys2) {
      return keys2.join(SPLIT);
    }
    var Entity = /* @__PURE__ */ function() {
      function Entity2(instanceId) {
        _classCallCheck(this, Entity2);
        _defineProperty(this, "instanceId", void 0);
        _defineProperty(this, "cache", /* @__PURE__ */ new Map());
        this.instanceId = instanceId;
      }
      _createClass(Entity2, [{
        key: "get",
        value: function get2(keys2) {
          return this.opGet(pathKey(keys2));
        }
        /** A fast get cache with `get` concat. */
      }, {
        key: "opGet",
        value: function opGet(keyPathStr) {
          return this.cache.get(keyPathStr) || null;
        }
      }, {
        key: "update",
        value: function update(keys2, valueFn) {
          return this.opUpdate(pathKey(keys2), valueFn);
        }
        /** A fast get cache with `get` concat. */
      }, {
        key: "opUpdate",
        value: function opUpdate(keyPathStr, valueFn) {
          var prevValue = this.cache.get(keyPathStr);
          var nextValue = valueFn(prevValue);
          if (nextValue === null) {
            this.cache.delete(keyPathStr);
          } else {
            this.cache.set(keyPathStr, nextValue);
          }
        }
      }]);
      return Entity2;
    }();
    var ATTR_TOKEN = "data-token-hash";
    var ATTR_MARK = "data-css-hash";
    var CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
    function createCache() {
      var cssinjsInstanceId = Math.random().toString(12).slice(2);
      if (typeof document !== "undefined" && document.head && document.body) {
        var styles = document.body.querySelectorAll("style[".concat(ATTR_MARK, "]")) || [];
        var firstChild = document.head.firstChild;
        Array.from(styles).forEach(function(style2) {
          style2[CSS_IN_JS_INSTANCE] = style2[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;
          if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
            document.head.insertBefore(style2, firstChild);
          }
        });
        var styleHash = {};
        Array.from(document.querySelectorAll("style[".concat(ATTR_MARK, "]"))).forEach(function(style2) {
          var hash = style2.getAttribute(ATTR_MARK);
          if (styleHash[hash]) {
            if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
              var _style$parentNode;
              (_style$parentNode = style2.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style2);
            }
          } else {
            styleHash[hash] = true;
          }
        });
      }
      return new Entity(cssinjsInstanceId);
    }
    var StyleContext = /* @__PURE__ */ reactExports.createContext({
      hashPriority: "low",
      cache: createCache(),
      defaultCache: true
    });
    function sameDerivativeOption(left, right) {
      if (left.length !== right.length) {
        return false;
      }
      for (var i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) {
          return false;
        }
      }
      return true;
    }
    var ThemeCache = /* @__PURE__ */ function() {
      function ThemeCache2() {
        _classCallCheck(this, ThemeCache2);
        _defineProperty(this, "cache", void 0);
        _defineProperty(this, "keys", void 0);
        _defineProperty(this, "cacheCallTimes", void 0);
        this.cache = /* @__PURE__ */ new Map();
        this.keys = [];
        this.cacheCallTimes = 0;
      }
      _createClass(ThemeCache2, [{
        key: "size",
        value: function size() {
          return this.keys.length;
        }
      }, {
        key: "internalGet",
        value: function internalGet(derivativeOption) {
          var _cache2, _cache3;
          var updateCallTimes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          var cache = {
            map: this.cache
          };
          derivativeOption.forEach(function(derivative2) {
            if (!cache) {
              cache = void 0;
            } else {
              var _cache;
              cache = (_cache = cache) === null || _cache === void 0 || (_cache = _cache.map) === null || _cache === void 0 ? void 0 : _cache.get(derivative2);
            }
          });
          if ((_cache2 = cache) !== null && _cache2 !== void 0 && _cache2.value && updateCallTimes) {
            cache.value[1] = this.cacheCallTimes++;
          }
          return (_cache3 = cache) === null || _cache3 === void 0 ? void 0 : _cache3.value;
        }
      }, {
        key: "get",
        value: function get2(derivativeOption) {
          var _this$internalGet;
          return (_this$internalGet = this.internalGet(derivativeOption, true)) === null || _this$internalGet === void 0 ? void 0 : _this$internalGet[0];
        }
      }, {
        key: "has",
        value: function has(derivativeOption) {
          return !!this.internalGet(derivativeOption);
        }
      }, {
        key: "set",
        value: function set2(derivativeOption, value) {
          var _this = this;
          if (!this.has(derivativeOption)) {
            if (this.size() + 1 > ThemeCache2.MAX_CACHE_SIZE + ThemeCache2.MAX_CACHE_OFFSET) {
              var _this$keys$reduce = this.keys.reduce(function(result, key) {
                var _result = _slicedToArray(result, 2), callTimes = _result[1];
                if (_this.internalGet(key)[1] < callTimes) {
                  return [key, _this.internalGet(key)[1]];
                }
                return result;
              }, [this.keys[0], this.cacheCallTimes]), _this$keys$reduce2 = _slicedToArray(_this$keys$reduce, 1), targetKey = _this$keys$reduce2[0];
              this.delete(targetKey);
            }
            this.keys.push(derivativeOption);
          }
          var cache = this.cache;
          derivativeOption.forEach(function(derivative2, index) {
            if (index === derivativeOption.length - 1) {
              cache.set(derivative2, {
                value: [value, _this.cacheCallTimes++]
              });
            } else {
              var cacheValue = cache.get(derivative2);
              if (!cacheValue) {
                cache.set(derivative2, {
                  map: /* @__PURE__ */ new Map()
                });
              } else if (!cacheValue.map) {
                cacheValue.map = /* @__PURE__ */ new Map();
              }
              cache = cache.get(derivative2).map;
            }
          });
        }
      }, {
        key: "deleteByPath",
        value: function deleteByPath(currentCache, derivatives) {
          var cache = currentCache.get(derivatives[0]);
          if (derivatives.length === 1) {
            var _cache$value;
            if (!cache.map) {
              currentCache.delete(derivatives[0]);
            } else {
              currentCache.set(derivatives[0], {
                map: cache.map
              });
            }
            return (_cache$value = cache.value) === null || _cache$value === void 0 ? void 0 : _cache$value[0];
          }
          var result = this.deleteByPath(cache.map, derivatives.slice(1));
          if ((!cache.map || cache.map.size === 0) && !cache.value) {
            currentCache.delete(derivatives[0]);
          }
          return result;
        }
      }, {
        key: "delete",
        value: function _delete(derivativeOption) {
          if (this.has(derivativeOption)) {
            this.keys = this.keys.filter(function(item) {
              return !sameDerivativeOption(item, derivativeOption);
            });
            return this.deleteByPath(this.cache, derivativeOption);
          }
          return void 0;
        }
      }]);
      return ThemeCache2;
    }();
    _defineProperty(ThemeCache, "MAX_CACHE_SIZE", 20);
    _defineProperty(ThemeCache, "MAX_CACHE_OFFSET", 5);
    var uuid = 0;
    var Theme = /* @__PURE__ */ function() {
      function Theme2(derivatives) {
        _classCallCheck(this, Theme2);
        _defineProperty(this, "derivatives", void 0);
        _defineProperty(this, "id", void 0);
        this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
        this.id = uuid;
        if (derivatives.length === 0) {
          warning$1(derivatives.length > 0);
        }
        uuid += 1;
      }
      _createClass(Theme2, [{
        key: "getDerivativeToken",
        value: function getDerivativeToken(token2) {
          return this.derivatives.reduce(function(result, derivative2) {
            return derivative2(token2, result);
          }, void 0);
        }
      }]);
      return Theme2;
    }();
    var cacheThemes = new ThemeCache();
    function createTheme(derivatives) {
      var derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
      if (!cacheThemes.has(derivativeArr)) {
        cacheThemes.set(derivativeArr, new Theme(derivativeArr));
      }
      return cacheThemes.get(derivativeArr);
    }
    var resultCache = /* @__PURE__ */ new WeakMap();
    var RESULT_VALUE = {};
    function memoResult(callback, deps) {
      var current = resultCache;
      for (var i = 0; i < deps.length; i += 1) {
        var dep = deps[i];
        if (!current.has(dep)) {
          current.set(dep, /* @__PURE__ */ new WeakMap());
        }
        current = current.get(dep);
      }
      if (!current.has(RESULT_VALUE)) {
        current.set(RESULT_VALUE, callback());
      }
      return current.get(RESULT_VALUE);
    }
    var flattenTokenCache = /* @__PURE__ */ new WeakMap();
    function flattenToken(token2) {
      var hashed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var str = flattenTokenCache.get(token2) || "";
      if (!str) {
        Object.keys(token2).forEach(function(key) {
          var value = token2[key];
          str += key;
          if (value instanceof Theme) {
            str += value.id;
          } else if (value && _typeof(value) === "object") {
            str += flattenToken(value, hashed);
          } else {
            str += value;
          }
        });
        if (hashed) {
          str = murmur2(str);
        }
        flattenTokenCache.set(token2, str);
      }
      return str;
    }
    function token2key(token2, salt) {
      return murmur2("".concat(salt, "_").concat(flattenToken(token2, true)));
    }
    var isClientSide = canUseDom();
    function unit$1(num) {
      if (typeof num === "number") {
        return "".concat(num, "px");
      }
      return num;
    }
    function toStyleStr(style2, tokenKey, styleId) {
      var customizeAttrs = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      var plain = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
      if (plain) {
        return style2;
      }
      var attrs = _objectSpread2(_objectSpread2({}, customizeAttrs), {}, _defineProperty(_defineProperty({}, ATTR_TOKEN, tokenKey), ATTR_MARK, styleId));
      var attrStr = Object.keys(attrs).map(function(attr) {
        var val = attrs[attr];
        return val ? "".concat(attr, '="').concat(val, '"') : null;
      }).filter(function(v2) {
        return v2;
      }).join(" ");
      return "<style ".concat(attrStr, ">").concat(style2, "</style>");
    }
    var token2CSSVar = function token2CSSVar2(token2) {
      var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      return "--".concat(prefix ? "".concat(prefix, "-") : "").concat(token2).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
    };
    var serializeCSSVar = function serializeCSSVar2(cssVars, hashId, options) {
      if (!Object.keys(cssVars).length) {
        return "";
      }
      return ".".concat(hashId).concat(options !== null && options !== void 0 && options.scope ? ".".concat(options.scope) : "", "{").concat(Object.entries(cssVars).map(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
        return "".concat(key, ":").concat(value, ";");
      }).join(""), "}");
    };
    var transformToken = function transformToken2(token2, themeKey, config) {
      var cssVars = {};
      var result = {};
      Object.entries(token2).forEach(function(_ref3) {
        var _config$preserve, _config$ignore;
        var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], value = _ref4[1];
        if (config !== null && config !== void 0 && (_config$preserve = config.preserve) !== null && _config$preserve !== void 0 && _config$preserve[key]) {
          result[key] = value;
        } else if ((typeof value === "string" || typeof value === "number") && !(config !== null && config !== void 0 && (_config$ignore = config.ignore) !== null && _config$ignore !== void 0 && _config$ignore[key])) {
          var _config$unitless;
          var cssVar = token2CSSVar(key, config === null || config === void 0 ? void 0 : config.prefix);
          cssVars[cssVar] = typeof value === "number" && !(config !== null && config !== void 0 && (_config$unitless = config.unitless) !== null && _config$unitless !== void 0 && _config$unitless[key]) ? "".concat(value, "px") : String(value);
          result[key] = "var(".concat(cssVar, ")");
        }
      });
      return [result, serializeCSSVar(cssVars, themeKey, {
        scope: config === null || config === void 0 ? void 0 : config.scope
      })];
    };
    var useInternalLayoutEffect = canUseDom() ? reactExports.useLayoutEffect : reactExports.useEffect;
    var useLayoutEffect = function useLayoutEffect2(callback, deps) {
      var firstMountRef = reactExports.useRef(true);
      useInternalLayoutEffect(function() {
        return callback(firstMountRef.current);
      }, deps);
      useInternalLayoutEffect(function() {
        firstMountRef.current = false;
        return function() {
          firstMountRef.current = true;
        };
      }, []);
    };
    var fullClone$3 = _objectSpread2({}, React$1);
    var useInsertionEffect$1 = fullClone$3.useInsertionEffect;
    var useInsertionEffectPolyfill = function useInsertionEffectPolyfill2(renderEffect, effect, deps) {
      reactExports.useMemo(renderEffect, deps);
      useLayoutEffect(function() {
        return effect(true);
      }, deps);
    };
    var useCompatibleInsertionEffect = useInsertionEffect$1 ? function(renderEffect, effect, deps) {
      return useInsertionEffect$1(function() {
        renderEffect();
        return effect();
      }, deps);
    } : useInsertionEffectPolyfill;
    var fullClone$2 = _objectSpread2({}, React$1);
    var useInsertionEffect = fullClone$2.useInsertionEffect;
    var useCleanupRegister = function useCleanupRegister2(deps) {
      var effectCleanups = [];
      var cleanupFlag = false;
      function register(fn) {
        if (cleanupFlag) {
          return;
        }
        effectCleanups.push(fn);
      }
      reactExports.useEffect(function() {
        cleanupFlag = false;
        return function() {
          cleanupFlag = true;
          if (effectCleanups.length) {
            effectCleanups.forEach(function(fn) {
              return fn();
            });
          }
        };
      }, deps);
      return register;
    };
    var useRun = function useRun2() {
      return function(fn) {
        fn();
      };
    };
    var useEffectCleanupRegister = typeof useInsertionEffect !== "undefined" ? useCleanupRegister : useRun;
    function useGlobalCache(prefix, keyPath, cacheFn, onCacheRemove, onCacheEffect) {
      var _React$useContext = reactExports.useContext(StyleContext), globalCache = _React$useContext.cache;
      var fullPath = [prefix].concat(_toConsumableArray(keyPath));
      var fullPathStr = pathKey(fullPath);
      var register = useEffectCleanupRegister([fullPathStr]);
      var buildCache = function buildCache2(updater) {
        globalCache.opUpdate(fullPathStr, function(prevCache) {
          var _ref = prevCache || [void 0, void 0], _ref2 = _slicedToArray(_ref, 2), _ref2$ = _ref2[0], times = _ref2$ === void 0 ? 0 : _ref2$, cache = _ref2[1];
          var tmpCache = cache;
          var mergedCache = tmpCache || cacheFn();
          var data = [times, mergedCache];
          return updater ? updater(data) : data;
        });
      };
      reactExports.useMemo(
        function() {
          buildCache();
        },
        /* eslint-disable react-hooks/exhaustive-deps */
        [fullPathStr]
        /* eslint-enable */
      );
      var cacheEntity = globalCache.opGet(fullPathStr);
      var cacheContent = cacheEntity[1];
      useCompatibleInsertionEffect(function() {
        onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
      }, function(polyfill) {
        buildCache(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), times = _ref4[0], cache = _ref4[1];
          if (polyfill && times === 0) {
            onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
          }
          return [times + 1, cache];
        });
        return function() {
          globalCache.opUpdate(fullPathStr, function(prevCache) {
            var _ref5 = prevCache || [], _ref6 = _slicedToArray(_ref5, 2), _ref6$ = _ref6[0], times = _ref6$ === void 0 ? 0 : _ref6$, cache = _ref6[1];
            var nextCount = times - 1;
            if (nextCount === 0) {
              register(function() {
                if (polyfill || !globalCache.opGet(fullPathStr)) {
                  onCacheRemove === null || onCacheRemove === void 0 || onCacheRemove(cache, false);
                }
              });
              return null;
            }
            return [times - 1, cache];
          });
        };
      }, [fullPathStr]);
      return cacheContent;
    }
    var EMPTY_OVERRIDE = {};
    var hashPrefix = "css";
    var tokenKeys = /* @__PURE__ */ new Map();
    function recordCleanToken(tokenKey) {
      tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
    }
    function removeStyleTags(key, instanceId) {
      if (typeof document !== "undefined") {
        var styles = document.querySelectorAll("style[".concat(ATTR_TOKEN, '="').concat(key, '"]'));
        styles.forEach(function(style2) {
          if (style2[CSS_IN_JS_INSTANCE] === instanceId) {
            var _style$parentNode;
            (_style$parentNode = style2.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style2);
          }
        });
      }
    }
    var TOKEN_THRESHOLD = 0;
    function cleanTokenStyle(tokenKey, instanceId) {
      tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
      var tokenKeyList = Array.from(tokenKeys.keys());
      var cleanableKeyList = tokenKeyList.filter(function(key) {
        var count = tokenKeys.get(key) || 0;
        return count <= 0;
      });
      if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
        cleanableKeyList.forEach(function(key) {
          removeStyleTags(key, instanceId);
          tokenKeys.delete(key);
        });
      }
    }
    var getComputedToken$1 = function getComputedToken2(originToken, overrideToken, theme, format) {
      var derivativeToken = theme.getDerivativeToken(originToken);
      var mergedDerivativeToken = _objectSpread2(_objectSpread2({}, derivativeToken), overrideToken);
      if (format) {
        mergedDerivativeToken = format(mergedDerivativeToken);
      }
      return mergedDerivativeToken;
    };
    var TOKEN_PREFIX = "token";
    function useCacheToken(theme, tokens) {
      var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var _useContext = reactExports.useContext(StyleContext), instanceId = _useContext.cache.instanceId, container = _useContext.container;
      var _option$salt = option.salt, salt = _option$salt === void 0 ? "" : _option$salt, _option$override = option.override, override = _option$override === void 0 ? EMPTY_OVERRIDE : _option$override, formatToken2 = option.formatToken, compute = option.getComputedToken, cssVar = option.cssVar;
      var mergedToken = memoResult(function() {
        return Object.assign.apply(Object, [{}].concat(_toConsumableArray(tokens)));
      }, tokens);
      var tokenStr = flattenToken(mergedToken);
      var overrideTokenStr = flattenToken(override);
      var cssVarStr = cssVar ? flattenToken(cssVar) : "";
      var cachedToken = useGlobalCache(TOKEN_PREFIX, [salt, theme.id, tokenStr, overrideTokenStr, cssVarStr], function() {
        var _cssVar$key;
        var mergedDerivativeToken = compute ? compute(mergedToken, override, theme) : getComputedToken$1(mergedToken, override, theme, formatToken2);
        var actualToken = _objectSpread2({}, mergedDerivativeToken);
        var cssVarsStr = "";
        if (!!cssVar) {
          var _transformToken = transformToken(mergedDerivativeToken, cssVar.key, {
            prefix: cssVar.prefix,
            ignore: cssVar.ignore,
            unitless: cssVar.unitless,
            preserve: cssVar.preserve
          });
          var _transformToken2 = _slicedToArray(_transformToken, 2);
          mergedDerivativeToken = _transformToken2[0];
          cssVarsStr = _transformToken2[1];
        }
        var tokenKey = token2key(mergedDerivativeToken, salt);
        mergedDerivativeToken._tokenKey = tokenKey;
        actualToken._tokenKey = token2key(actualToken, salt);
        var themeKey = (_cssVar$key = cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) !== null && _cssVar$key !== void 0 ? _cssVar$key : tokenKey;
        mergedDerivativeToken._themeKey = themeKey;
        recordCleanToken(themeKey);
        var hashId = "".concat(hashPrefix, "-").concat(murmur2(tokenKey));
        mergedDerivativeToken._hashId = hashId;
        return [mergedDerivativeToken, hashId, actualToken, cssVarsStr, (cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) || ""];
      }, function(cache) {
        cleanTokenStyle(cache[0]._themeKey, instanceId);
      }, function(_ref) {
        var _ref2 = _slicedToArray(_ref, 4), token2 = _ref2[0], cssVarsStr = _ref2[3];
        if (cssVar && cssVarsStr) {
          var style2 = updateCSS(cssVarsStr, murmur2("css-variables-".concat(token2._themeKey)), {
            mark: ATTR_MARK,
            prepend: "queue",
            attachTo: container,
            priority: -999
          });
          style2[CSS_IN_JS_INSTANCE] = instanceId;
          style2.setAttribute(ATTR_TOKEN, token2._themeKey);
        }
      });
      return cachedToken;
    }
    var extract$2 = function extract2(cache, effectStyles, options) {
      var _cache = _slicedToArray(cache, 5), realToken = _cache[2], styleStr = _cache[3], cssVarKey = _cache[4];
      var _ref3 = options || {}, plain = _ref3.plain;
      if (!styleStr) {
        return null;
      }
      var styleId = realToken._tokenKey;
      var order = -999;
      var sharedAttrs = {
        "data-rc-order": "prependQueue",
        "data-rc-priority": "".concat(order)
      };
      var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
      return [order, styleId, styleText];
    };
    var unitlessKeys = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      // SVG-related properties
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1
    };
    var COMMENT = "comm";
    var RULESET = "rule";
    var DECLARATION = "decl";
    var IMPORT = "@import";
    var KEYFRAMES = "@keyframes";
    var LAYER = "@layer";
    var abs = Math.abs;
    var from = String.fromCharCode;
    function trim(value) {
      return value.trim();
    }
    function replace(value, pattern, replacement) {
      return value.replace(pattern, replacement);
    }
    function indexof(value, search, position2) {
      return value.indexOf(search, position2);
    }
    function charat(value, index) {
      return value.charCodeAt(index) | 0;
    }
    function substr(value, begin, end) {
      return value.slice(begin, end);
    }
    function strlen(value) {
      return value.length;
    }
    function sizeof(value) {
      return value.length;
    }
    function append(value, array) {
      return array.push(value), value;
    }
    var line = 1;
    var column = 1;
    var length = 0;
    var position = 0;
    var character = 0;
    var characters = "";
    function node(value, root2, parent, type, props, children, length2, siblings) {
      return { value, root: root2, parent, type, props, children, line, column, length: length2, return: "", siblings };
    }
    function char() {
      return character;
    }
    function prev() {
      character = position > 0 ? charat(characters, --position) : 0;
      if (column--, character === 10)
        column = 1, line--;
      return character;
    }
    function next() {
      character = position < length ? charat(characters, position++) : 0;
      if (column++, character === 10)
        column = 1, line++;
      return character;
    }
    function peek() {
      return charat(characters, position);
    }
    function caret() {
      return position;
    }
    function slice(begin, end) {
      return substr(characters, begin, end);
    }
    function token(type) {
      switch (type) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
          return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
          return 4;
        case 58:
          return 3;
        case 34:
        case 39:
        case 40:
        case 91:
          return 2;
        case 41:
        case 93:
          return 1;
      }
      return 0;
    }
    function alloc(value) {
      return line = column = 1, length = strlen(characters = value), position = 0, [];
    }
    function dealloc(value) {
      return characters = "", value;
    }
    function delimit(type) {
      return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
    }
    function whitespace(type) {
      while (character = peek())
        if (character < 33)
          next();
        else
          break;
      return token(type) > 2 || token(character) > 3 ? "" : " ";
    }
    function escaping(index, count) {
      while (--count && next())
        if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
          break;
      return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
    }
    function delimiter(type) {
      while (next())
        switch (character) {
          case type:
            return position;
          case 34:
          case 39:
            if (type !== 34 && type !== 39)
              delimiter(character);
            break;
          case 40:
            if (type === 41)
              delimiter(type);
            break;
          case 92:
            next();
            break;
        }
      return position;
    }
    function commenter(type, index) {
      while (next())
        if (type + character === 47 + 10)
          break;
        else if (type + character === 42 + 42 && peek() === 47)
          break;
      return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
    }
    function identifier(index) {
      while (!token(peek()))
        next();
      return slice(index, position);
    }
    function compile(value) {
      return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
    }
    function parse(value, root2, parent, rule, rules, rulesets, pseudo, points, declarations) {
      var index = 0;
      var offset = 0;
      var length2 = pseudo;
      var atrule = 0;
      var property = 0;
      var previous = 0;
      var variable = 1;
      var scanning = 1;
      var ampersand = 1;
      var character2 = 0;
      var type = "";
      var props = rules;
      var children = rulesets;
      var reference = rule;
      var characters2 = type;
      while (scanning)
        switch (previous = character2, character2 = next()) {
          case 40:
            if (previous != 108 && charat(characters2, length2 - 1) == 58) {
              if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1)
                ampersand = -1;
              break;
            }
          case 34:
          case 39:
          case 91:
            characters2 += delimit(character2);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            characters2 += whitespace(previous);
            break;
          case 92:
            characters2 += escaping(caret() - 1, 7);
            continue;
          case 47:
            switch (peek()) {
              case 42:
              case 47:
                append(comment(commenter(next(), caret()), root2, parent, declarations), declarations);
                if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters2) && substr(characters2, -1, void 0) !== " ") characters2 += " ";
                break;
              default:
                characters2 += "/";
            }
            break;
          case 123 * variable:
            points[index++] = strlen(characters2) * ampersand;
          case 125 * variable:
          case 59:
          case 0:
            switch (character2) {
              case 0:
              case 125:
                scanning = 0;
              case 59 + offset:
                if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
                if (property > 0 && (strlen(characters2) - length2 || variable === 0 && previous === 47))
                  append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
                break;
              case 59:
                characters2 += ";";
              default:
                append(reference = ruleset(characters2, root2, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
                if (character2 === 123)
                  if (offset === 0)
                    parse(characters2, root2, reference, reference, props, rulesets, length2, points, children);
                  else
                    switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                        parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                        break;
                      default:
                        parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                    }
            }
            index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
            break;
          case 58:
            length2 = 1 + strlen(characters2), property = previous;
          default:
            if (variable < 1) {
              if (character2 == 123)
                --variable;
              else if (character2 == 125 && variable++ == 0 && prev() == 125)
                continue;
            }
            switch (characters2 += from(character2), character2 * variable) {
              case 38:
                ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
                break;
              case 44:
                points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
                break;
              case 64:
                if (peek() === 45)
                  characters2 += delimit(next());
                atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
                break;
              case 45:
                if (previous === 45 && strlen(characters2) == 2)
                  variable = 0;
            }
        }
      return rulesets;
    }
    function ruleset(value, root2, parent, index, offset, rules, points, type, props, children, length2, siblings) {
      var post = offset - 1;
      var rule = offset === 0 ? rules : [""];
      var size = sizeof(rule);
      for (var i = 0, j = 0, k2 = 0; i < index; ++i)
        for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j = points[i])), z2 = value; x2 < size; ++x2)
          if (z2 = trim(j > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
            props[k2++] = z2;
      return node(value, root2, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
    }
    function comment(value, root2, parent, siblings) {
      return node(value, root2, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
    }
    function declaration(value, root2, parent, length2, siblings) {
      return node(value, root2, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
    }
    function serialize(children, callback) {
      var output = "";
      for (var i = 0; i < children.length; i++)
        output += callback(children[i], i, children, callback) || "";
      return output;
    }
    function stringify(element, index, children, callback) {
      switch (element.type) {
        case LAYER:
          if (element.children.length) break;
        case IMPORT:
        case DECLARATION:
          return element.return = element.return || element.value;
        case COMMENT:
          return "";
        case KEYFRAMES:
          return element.return = element.value + "{" + serialize(element.children, callback) + "}";
        case RULESET:
          if (!strlen(element.value = element.props.join(","))) return "";
      }
      return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
    }
    var ATTR_CACHE_MAP = "data-ant-cssinjs-cache-path";
    var CSS_FILE_STYLE = "_FILE_STYLE__";
    var cachePathMap;
    var fromCSSFile = true;
    function prepare() {
      if (!cachePathMap) {
        cachePathMap = {};
        if (canUseDom()) {
          var div = document.createElement("div");
          div.className = ATTR_CACHE_MAP;
          div.style.position = "fixed";
          div.style.visibility = "hidden";
          div.style.top = "-9999px";
          document.body.appendChild(div);
          var content = getComputedStyle(div).content || "";
          content = content.replace(/^"/, "").replace(/"$/, "");
          content.split(";").forEach(function(item) {
            var _item$split = item.split(":"), _item$split2 = _slicedToArray(_item$split, 2), path = _item$split2[0], hash = _item$split2[1];
            cachePathMap[path] = hash;
          });
          var inlineMapStyle = document.querySelector("style[".concat(ATTR_CACHE_MAP, "]"));
          if (inlineMapStyle) {
            var _inlineMapStyle$paren;
            fromCSSFile = false;
            (_inlineMapStyle$paren = inlineMapStyle.parentNode) === null || _inlineMapStyle$paren === void 0 || _inlineMapStyle$paren.removeChild(inlineMapStyle);
          }
          document.body.removeChild(div);
        }
      }
    }
    function existPath(path) {
      prepare();
      return !!cachePathMap[path];
    }
    function getStyleAndHash(path) {
      var hash = cachePathMap[path];
      var styleStr = null;
      if (hash && canUseDom()) {
        if (fromCSSFile) {
          styleStr = CSS_FILE_STYLE;
        } else {
          var _style = document.querySelector("style[".concat(ATTR_MARK, '="').concat(cachePathMap[path], '"]'));
          if (_style) {
            styleStr = _style.innerHTML;
          } else {
            delete cachePathMap[path];
          }
        }
      }
      return [styleStr, hash];
    }
    var SKIP_CHECK = "_skip_check_";
    var MULTI_VALUE = "_multi_value_";
    function normalizeStyle(styleStr) {
      var serialized = serialize(compile(styleStr), stringify);
      return serialized.replace(/\{%%%\:[^;];}/g, ";");
    }
    function isCompoundCSSProperty(value) {
      return _typeof(value) === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
    }
    function injectSelectorHash(key, hashId, hashPriority) {
      if (!hashId) {
        return key;
      }
      var hashClassName = ".".concat(hashId);
      var hashSelector = hashPriority === "low" ? ":where(".concat(hashClassName, ")") : hashClassName;
      var keys2 = key.split(",").map(function(k2) {
        var _firstPath$match;
        var fullPath = k2.trim().split(/\s+/);
        var firstPath = fullPath[0] || "";
        var htmlElement = ((_firstPath$match = firstPath.match(/^\w+/)) === null || _firstPath$match === void 0 ? void 0 : _firstPath$match[0]) || "";
        firstPath = "".concat(htmlElement).concat(hashSelector).concat(firstPath.slice(htmlElement.length));
        return [firstPath].concat(_toConsumableArray(fullPath.slice(1))).join(" ");
      });
      return keys2.join(",");
    }
    var parseStyle = function parseStyle2(interpolation) {
      var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        root: true,
        parentSelectors: []
      }, root2 = _ref.root, injectHash = _ref.injectHash, parentSelectors = _ref.parentSelectors;
      var hashId = config.hashId, layer = config.layer;
      config.path;
      var hashPriority = config.hashPriority, _config$transformers = config.transformers, transformers = _config$transformers === void 0 ? [] : _config$transformers;
      config.linters;
      var styleStr = "";
      var effectStyle = {};
      function parseKeyframes(keyframes) {
        var animationName = keyframes.getName(hashId);
        if (!effectStyle[animationName]) {
          var _parseStyle = parseStyle2(keyframes.style, config, {
            root: false,
            parentSelectors
          }), _parseStyle2 = _slicedToArray(_parseStyle, 1), _parsedStr = _parseStyle2[0];
          effectStyle[animationName] = "@keyframes ".concat(keyframes.getName(hashId)).concat(_parsedStr);
        }
      }
      function flattenList(list) {
        var fullList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        list.forEach(function(item) {
          if (Array.isArray(item)) {
            flattenList(item, fullList);
          } else if (item) {
            fullList.push(item);
          }
        });
        return fullList;
      }
      var flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
      flattenStyleList.forEach(function(originStyle) {
        var style2 = typeof originStyle === "string" && !root2 ? {} : originStyle;
        if (typeof style2 === "string") {
          styleStr += "".concat(style2, "\n");
        } else if (style2._keyframe) {
          parseKeyframes(style2);
        } else {
          var mergedStyle = transformers.reduce(function(prev2, trans) {
            var _trans$visit;
            return (trans === null || trans === void 0 || (_trans$visit = trans.visit) === null || _trans$visit === void 0 ? void 0 : _trans$visit.call(trans, prev2)) || prev2;
          }, style2);
          Object.keys(mergedStyle).forEach(function(key) {
            var value = mergedStyle[key];
            if (_typeof(value) === "object" && value && (key !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
              var subInjectHash = false;
              var mergedKey = key.trim();
              var nextRoot = false;
              if ((root2 || injectHash) && hashId) {
                if (mergedKey.startsWith("@")) {
                  subInjectHash = true;
                } else if (mergedKey === "&") {
                  mergedKey = injectSelectorHash("", hashId, hashPriority);
                } else {
                  mergedKey = injectSelectorHash(key, hashId, hashPriority);
                }
              } else if (root2 && !hashId && (mergedKey === "&" || mergedKey === "")) {
                mergedKey = "";
                nextRoot = true;
              }
              var _parseStyle3 = parseStyle2(value, config, {
                root: nextRoot,
                injectHash: subInjectHash,
                parentSelectors: [].concat(_toConsumableArray(parentSelectors), [mergedKey])
              }), _parseStyle4 = _slicedToArray(_parseStyle3, 2), _parsedStr2 = _parseStyle4[0], childEffectStyle = _parseStyle4[1];
              effectStyle = _objectSpread2(_objectSpread2({}, effectStyle), childEffectStyle);
              styleStr += "".concat(mergedKey).concat(_parsedStr2);
            } else {
              let appendStyle = function(cssKey, cssValue) {
                var styleName = cssKey.replace(/[A-Z]/g, function(match2) {
                  return "-".concat(match2.toLowerCase());
                });
                var formatValue = cssValue;
                if (!unitlessKeys[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
                  formatValue = "".concat(formatValue, "px");
                }
                if (cssKey === "animationName" && cssValue !== null && cssValue !== void 0 && cssValue._keyframe) {
                  parseKeyframes(cssValue);
                  formatValue = cssValue.getName(hashId);
                }
                styleStr += "".concat(styleName, ":").concat(formatValue, ";");
              };
              var _value;
              var actualValue = (_value = value === null || value === void 0 ? void 0 : value.value) !== null && _value !== void 0 ? _value : value;
              if (_typeof(value) === "object" && value !== null && value !== void 0 && value[MULTI_VALUE] && Array.isArray(actualValue)) {
                actualValue.forEach(function(item) {
                  appendStyle(key, item);
                });
              } else {
                appendStyle(key, actualValue);
              }
            }
          });
        }
      });
      if (!root2) {
        styleStr = "{".concat(styleStr, "}");
      } else if (layer) {
        styleStr = "@layer ".concat(layer.name, " {").concat(styleStr, "}");
        if (layer.dependencies) {
          effectStyle["@layer ".concat(layer.name)] = layer.dependencies.map(function(deps) {
            return "@layer ".concat(deps, ", ").concat(layer.name, ";");
          }).join("\n");
        }
      }
      return [styleStr, effectStyle];
    };
    function uniqueHash(path, styleStr) {
      return murmur2("".concat(path.join("%")).concat(styleStr));
    }
    function Empty() {
      return null;
    }
    var STYLE_PREFIX = "style";
    function useStyleRegister(info, styleFn) {
      var token2 = info.token, path = info.path, hashId = info.hashId, layer = info.layer, nonce = info.nonce, clientOnly = info.clientOnly, _info$order = info.order, order = _info$order === void 0 ? 0 : _info$order;
      var _React$useContext = reactExports.useContext(StyleContext), autoClear = _React$useContext.autoClear;
      _React$useContext.mock;
      var defaultCache = _React$useContext.defaultCache, hashPriority = _React$useContext.hashPriority, container = _React$useContext.container, ssrInline = _React$useContext.ssrInline, transformers = _React$useContext.transformers, linters = _React$useContext.linters, cache = _React$useContext.cache, enableLayer = _React$useContext.layer;
      var tokenKey = token2._tokenKey;
      var fullPath = [tokenKey];
      if (enableLayer) {
        fullPath.push("layer");
      }
      fullPath.push.apply(fullPath, _toConsumableArray(path));
      var isMergedClientSide = isClientSide;
      var _useGlobalCache = useGlobalCache(
        STYLE_PREFIX,
        fullPath,
        // Create cache if needed
        function() {
          var cachePath = fullPath.join("|");
          if (existPath(cachePath)) {
            var _getStyleAndHash = getStyleAndHash(cachePath), _getStyleAndHash2 = _slicedToArray(_getStyleAndHash, 2), inlineCacheStyleStr = _getStyleAndHash2[0], styleHash = _getStyleAndHash2[1];
            if (inlineCacheStyleStr) {
              return [inlineCacheStyleStr, tokenKey, styleHash, {}, clientOnly, order];
            }
          }
          var styleObj = styleFn();
          var _parseStyle5 = parseStyle(styleObj, {
            hashId,
            hashPriority,
            layer: enableLayer ? layer : void 0,
            path: path.join("-"),
            transformers,
            linters
          }), _parseStyle6 = _slicedToArray(_parseStyle5, 2), parsedStyle = _parseStyle6[0], effectStyle = _parseStyle6[1];
          var styleStr = normalizeStyle(parsedStyle);
          var styleId = uniqueHash(fullPath, styleStr);
          return [styleStr, tokenKey, styleId, effectStyle, clientOnly, order];
        },
        // Remove cache if no need
        function(_ref2, fromHMR) {
          var _ref3 = _slicedToArray(_ref2, 3), styleId = _ref3[2];
          if ((fromHMR || autoClear) && isClientSide) {
            removeCSS(styleId, {
              mark: ATTR_MARK
            });
          }
        },
        // Effect: Inject style here
        function(_ref4) {
          var _ref5 = _slicedToArray(_ref4, 4), styleStr = _ref5[0];
          _ref5[1];
          var styleId = _ref5[2], effectStyle = _ref5[3];
          if (isMergedClientSide && styleStr !== CSS_FILE_STYLE) {
            var mergedCSSConfig = {
              mark: ATTR_MARK,
              prepend: enableLayer ? false : "queue",
              attachTo: container,
              priority: order
            };
            var nonceStr = typeof nonce === "function" ? nonce() : nonce;
            if (nonceStr) {
              mergedCSSConfig.csp = {
                nonce: nonceStr
              };
            }
            var effectLayerKeys = [];
            var effectRestKeys = [];
            Object.keys(effectStyle).forEach(function(key) {
              if (key.startsWith("@layer")) {
                effectLayerKeys.push(key);
              } else {
                effectRestKeys.push(key);
              }
            });
            effectLayerKeys.forEach(function(effectKey) {
              updateCSS(normalizeStyle(effectStyle[effectKey]), "_layer-".concat(effectKey), _objectSpread2(_objectSpread2({}, mergedCSSConfig), {}, {
                prepend: true
              }));
            });
            var style2 = updateCSS(styleStr, styleId, mergedCSSConfig);
            style2[CSS_IN_JS_INSTANCE] = cache.instanceId;
            style2.setAttribute(ATTR_TOKEN, tokenKey);
            effectRestKeys.forEach(function(effectKey) {
              updateCSS(normalizeStyle(effectStyle[effectKey]), "_effect-".concat(effectKey), mergedCSSConfig);
            });
          }
        }
      ), _useGlobalCache2 = _slicedToArray(_useGlobalCache, 3), cachedStyleStr = _useGlobalCache2[0], cachedTokenKey = _useGlobalCache2[1], cachedStyleId = _useGlobalCache2[2];
      return function(node2) {
        var styleNode;
        if (!ssrInline || isMergedClientSide || !defaultCache) {
          styleNode = /* @__PURE__ */ reactExports.createElement(Empty, null);
        } else {
          styleNode = /* @__PURE__ */ reactExports.createElement("style", _extends({}, _defineProperty(_defineProperty({}, ATTR_TOKEN, cachedTokenKey), ATTR_MARK, cachedStyleId), {
            dangerouslySetInnerHTML: {
              __html: cachedStyleStr
            }
          }));
        }
        return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, styleNode, node2);
      };
    }
    var extract$1 = function extract2(cache, effectStyles, options) {
      var _cache = _slicedToArray(cache, 6), styleStr = _cache[0], tokenKey = _cache[1], styleId = _cache[2], effectStyle = _cache[3], clientOnly = _cache[4], order = _cache[5];
      var _ref7 = options || {}, plain = _ref7.plain;
      if (clientOnly) {
        return null;
      }
      var keyStyleText = styleStr;
      var sharedAttrs = {
        "data-rc-order": "prependQueue",
        "data-rc-priority": "".concat(order)
      };
      keyStyleText = toStyleStr(styleStr, tokenKey, styleId, sharedAttrs, plain);
      if (effectStyle) {
        Object.keys(effectStyle).forEach(function(effectKey) {
          if (!effectStyles[effectKey]) {
            effectStyles[effectKey] = true;
            var effectStyleStr = normalizeStyle(effectStyle[effectKey]);
            var effectStyleHTML = toStyleStr(effectStyleStr, tokenKey, "_effect-".concat(effectKey), sharedAttrs, plain);
            if (effectKey.startsWith("@layer")) {
              keyStyleText = effectStyleHTML + keyStyleText;
            } else {
              keyStyleText += effectStyleHTML;
            }
          }
        });
      }
      return [order, styleId, keyStyleText];
    };
    var CSS_VAR_PREFIX = "cssVar";
    var useCSSVarRegister = function useCSSVarRegister2(config, fn) {
      var key = config.key, prefix = config.prefix, unitless2 = config.unitless, ignore2 = config.ignore, token2 = config.token, _config$scope = config.scope, scope = _config$scope === void 0 ? "" : _config$scope;
      var _useContext = reactExports.useContext(StyleContext), instanceId = _useContext.cache.instanceId, container = _useContext.container;
      var tokenKey = token2._tokenKey;
      var stylePath = [].concat(_toConsumableArray(config.path), [key, scope, tokenKey]);
      var cache = useGlobalCache(CSS_VAR_PREFIX, stylePath, function() {
        var originToken = fn();
        var _transformToken = transformToken(originToken, key, {
          prefix,
          unitless: unitless2,
          ignore: ignore2,
          scope
        }), _transformToken2 = _slicedToArray(_transformToken, 2), mergedToken = _transformToken2[0], cssVarsStr = _transformToken2[1];
        var styleId = uniqueHash(stylePath, cssVarsStr);
        return [mergedToken, cssVarsStr, styleId, key];
      }, function(_ref) {
        var _ref2 = _slicedToArray(_ref, 3), styleId = _ref2[2];
        if (isClientSide) {
          removeCSS(styleId, {
            mark: ATTR_MARK
          });
        }
      }, function(_ref3) {
        var _ref4 = _slicedToArray(_ref3, 3), cssVarsStr = _ref4[1], styleId = _ref4[2];
        if (!cssVarsStr) {
          return;
        }
        var style2 = updateCSS(cssVarsStr, styleId, {
          mark: ATTR_MARK,
          prepend: "queue",
          attachTo: container,
          priority: -999
        });
        style2[CSS_IN_JS_INSTANCE] = instanceId;
        style2.setAttribute(ATTR_TOKEN, key);
      });
      return cache;
    };
    var extract = function extract2(cache, effectStyles, options) {
      var _cache = _slicedToArray(cache, 4), styleStr = _cache[1], styleId = _cache[2], cssVarKey = _cache[3];
      var _ref5 = options || {}, plain = _ref5.plain;
      if (!styleStr) {
        return null;
      }
      var order = -999;
      var sharedAttrs = {
        "data-rc-order": "prependQueue",
        "data-rc-priority": "".concat(order)
      };
      var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
      return [order, styleId, styleText];
    };
    _defineProperty(_defineProperty(_defineProperty({}, STYLE_PREFIX, extract$1), TOKEN_PREFIX, extract$2), CSS_VAR_PREFIX, extract);
    var Keyframe = /* @__PURE__ */ function() {
      function Keyframe2(name, style2) {
        _classCallCheck(this, Keyframe2);
        _defineProperty(this, "name", void 0);
        _defineProperty(this, "style", void 0);
        _defineProperty(this, "_keyframe", true);
        this.name = name;
        this.style = style2;
      }
      _createClass(Keyframe2, [{
        key: "getName",
        value: function getName() {
          var hashId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          return hashId ? "".concat(hashId, "-").concat(this.name) : this.name;
        }
      }]);
      return Keyframe2;
    }();
    function noSplit(list) {
      list.notSplit = true;
      return list;
    }
    ({
      // Inset
      inset: ["top", "right", "bottom", "left"],
      insetBlock: ["top", "bottom"],
      insetBlockStart: ["top"],
      insetBlockEnd: ["bottom"],
      insetInline: ["left", "right"],
      insetInlineStart: ["left"],
      insetInlineEnd: ["right"],
      // Margin
      marginBlock: ["marginTop", "marginBottom"],
      marginBlockStart: ["marginTop"],
      marginBlockEnd: ["marginBottom"],
      marginInline: ["marginLeft", "marginRight"],
      marginInlineStart: ["marginLeft"],
      marginInlineEnd: ["marginRight"],
      // Padding
      paddingBlock: ["paddingTop", "paddingBottom"],
      paddingBlockStart: ["paddingTop"],
      paddingBlockEnd: ["paddingBottom"],
      paddingInline: ["paddingLeft", "paddingRight"],
      paddingInlineStart: ["paddingLeft"],
      paddingInlineEnd: ["paddingRight"],
      // Border
      borderBlock: noSplit(["borderTop", "borderBottom"]),
      borderBlockStart: noSplit(["borderTop"]),
      borderBlockEnd: noSplit(["borderBottom"]),
      borderInline: noSplit(["borderLeft", "borderRight"]),
      borderInlineStart: noSplit(["borderLeft"]),
      borderInlineEnd: noSplit(["borderRight"]),
      // Border width
      borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
      borderBlockStartWidth: ["borderTopWidth"],
      borderBlockEndWidth: ["borderBottomWidth"],
      borderInlineWidth: ["borderLeftWidth", "borderRightWidth"],
      borderInlineStartWidth: ["borderLeftWidth"],
      borderInlineEndWidth: ["borderRightWidth"],
      // Border style
      borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
      borderBlockStartStyle: ["borderTopStyle"],
      borderBlockEndStyle: ["borderBottomStyle"],
      borderInlineStyle: ["borderLeftStyle", "borderRightStyle"],
      borderInlineStartStyle: ["borderLeftStyle"],
      borderInlineEndStyle: ["borderRightStyle"],
      // Border color
      borderBlockColor: ["borderTopColor", "borderBottomColor"],
      borderBlockStartColor: ["borderTopColor"],
      borderBlockEndColor: ["borderBottomColor"],
      borderInlineColor: ["borderLeftColor", "borderRightColor"],
      borderInlineStartColor: ["borderLeftColor"],
      borderInlineEndColor: ["borderRightColor"],
      // Border radius
      borderStartStartRadius: ["borderTopLeftRadius"],
      borderStartEndRadius: ["borderTopRightRadius"],
      borderEndStartRadius: ["borderBottomLeftRadius"],
      borderEndEndRadius: ["borderBottomRightRadius"]
    });
    var IconContext = /* @__PURE__ */ reactExports.createContext({});
    function _toArray(r2) {
      return _arrayWithHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableRest();
    }
    function get(entity, path) {
      var current = entity;
      for (var i = 0; i < path.length; i += 1) {
        if (current === null || current === void 0) {
          return void 0;
        }
        current = current[path[i]];
      }
      return current;
    }
    function internalSet(entity, paths, value, removeIfUndefined) {
      if (!paths.length) {
        return value;
      }
      var _paths = _toArray(paths), path = _paths[0], restPath = _paths.slice(1);
      var clone;
      if (!entity && typeof path === "number") {
        clone = [];
      } else if (Array.isArray(entity)) {
        clone = _toConsumableArray(entity);
      } else {
        clone = _objectSpread2({}, entity);
      }
      if (removeIfUndefined && value === void 0 && restPath.length === 1) {
        delete clone[path][restPath[0]];
      } else {
        clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
      }
      return clone;
    }
    function set(entity, paths, value) {
      var removeIfUndefined = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
      if (paths.length && removeIfUndefined && value === void 0 && !get(entity, paths.slice(0, -1))) {
        return entity;
      }
      return internalSet(entity, paths, value, removeIfUndefined);
    }
    function isObject$3(obj) {
      return _typeof(obj) === "object" && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
    }
    function createEmpty(source) {
      return Array.isArray(source) ? [] : {};
    }
    var keys = typeof Reflect === "undefined" ? Object.keys : Reflect.ownKeys;
    function merge$1() {
      for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }
      var clone = createEmpty(sources[0]);
      sources.forEach(function(src) {
        function internalMerge(path, parentLoopSet) {
          var loopSet = new Set(parentLoopSet);
          var value = get(src, path);
          var isArr = Array.isArray(value);
          if (isArr || isObject$3(value)) {
            if (!loopSet.has(value)) {
              loopSet.add(value);
              var originValue = get(clone, path);
              if (isArr) {
                clone = set(clone, path, []);
              } else if (!originValue || _typeof(originValue) !== "object") {
                clone = set(clone, path, createEmpty(value));
              }
              keys(value).forEach(function(key) {
                internalMerge([].concat(_toConsumableArray(path), [key]), loopSet);
              });
            }
          } else {
            clone = set(clone, path, value);
          }
        }
        internalMerge([]);
      });
      return clone;
    }
    const WarningContext = /* @__PURE__ */ reactExports.createContext({});
    const ValidateMessagesContext = /* @__PURE__ */ reactExports.createContext(void 0);
    var locale$3 = {
      // Options
      items_per_page: "/ page",
      jump_to: "Go to",
      jump_to_confirm: "confirm",
      page: "Page",
      // Pagination
      prev_page: "Previous Page",
      next_page: "Next Page",
      prev_5: "Previous 5 Pages",
      next_5: "Next 5 Pages",
      prev_3: "Previous 3 Pages",
      next_3: "Next 3 Pages",
      page_size: "Page Size"
    };
    var commonLocale = {
      yearFormat: "YYYY",
      dayFormat: "D",
      cellMeridiemFormat: "A",
      monthBeforeYear: true
    };
    var locale$2 = _objectSpread2(_objectSpread2({}, commonLocale), {}, {
      locale: "en_US",
      today: "Today",
      now: "Now",
      backToToday: "Back to today",
      ok: "OK",
      clear: "Clear",
      month: "Month",
      year: "Year",
      timeSelect: "select time",
      dateSelect: "select date",
      weekSelect: "Choose a week",
      monthSelect: "Choose a month",
      yearSelect: "Choose a year",
      decadeSelect: "Choose a decade",
      dateFormat: "M/D/YYYY",
      dateTimeFormat: "M/D/YYYY HH:mm:ss",
      previousMonth: "Previous month (PageUp)",
      nextMonth: "Next month (PageDown)",
      previousYear: "Last year (Control + left)",
      nextYear: "Next year (Control + right)",
      previousDecade: "Last decade",
      nextDecade: "Next decade",
      previousCentury: "Last century",
      nextCentury: "Next century"
    });
    const locale$1 = {
      placeholder: "Select time",
      rangePlaceholder: ["Start time", "End time"]
    };
    const locale = {
      lang: Object.assign({
        placeholder: "Select date",
        yearPlaceholder: "Select year",
        quarterPlaceholder: "Select quarter",
        monthPlaceholder: "Select month",
        weekPlaceholder: "Select week",
        rangePlaceholder: ["Start date", "End date"],
        rangeYearPlaceholder: ["Start year", "End year"],
        rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
        rangeMonthPlaceholder: ["Start month", "End month"],
        rangeWeekPlaceholder: ["Start week", "End week"]
      }, locale$2),
      timePickerLocale: Object.assign({}, locale$1)
    };
    const typeTemplate = "${label} is not a valid ${type}";
    const localeValues = {
      locale: "en",
      Pagination: locale$3,
      DatePicker: locale,
      TimePicker: locale$1,
      Calendar: locale,
      global: {
        placeholder: "Please select"
      },
      Table: {
        filterTitle: "Filter menu",
        filterConfirm: "OK",
        filterReset: "Reset",
        filterEmptyText: "No filters",
        filterCheckall: "Select all items",
        filterSearchPlaceholder: "Search in filters",
        emptyText: "No data",
        selectAll: "Select current page",
        selectInvert: "Invert current page",
        selectNone: "Clear all data",
        selectionAll: "Select all data",
        sortTitle: "Sort",
        expand: "Expand row",
        collapse: "Collapse row",
        triggerDesc: "Click to sort descending",
        triggerAsc: "Click to sort ascending",
        cancelSort: "Click to cancel sorting"
      },
      Tour: {
        Next: "Next",
        Previous: "Previous",
        Finish: "Finish"
      },
      Modal: {
        okText: "OK",
        cancelText: "Cancel",
        justOkText: "OK"
      },
      Popconfirm: {
        okText: "OK",
        cancelText: "Cancel"
      },
      Transfer: {
        titles: ["", ""],
        searchPlaceholder: "Search here",
        itemUnit: "item",
        itemsUnit: "items",
        remove: "Remove",
        selectCurrent: "Select current page",
        removeCurrent: "Remove current page",
        selectAll: "Select all data",
        deselectAll: "Deselect all data",
        removeAll: "Remove all data",
        selectInvert: "Invert current page"
      },
      Upload: {
        uploading: "Uploading...",
        removeFile: "Remove file",
        uploadError: "Upload error",
        previewFile: "Preview file",
        downloadFile: "Download file"
      },
      Empty: {
        description: "No data"
      },
      Icon: {
        icon: "icon"
      },
      Text: {
        edit: "Edit",
        copy: "Copy",
        copied: "Copied",
        expand: "Expand",
        collapse: "Collapse"
      },
      Form: {
        optional: "(optional)",
        defaultValidateMessages: {
          default: "Field validation error for ${label}",
          required: "Please enter ${label}",
          enum: "${label} must be one of [${enum}]",
          whitespace: "${label} cannot be a blank character",
          date: {
            format: "${label} date format is invalid",
            parse: "${label} cannot be converted to a date",
            invalid: "${label} is an invalid date"
          },
          types: {
            string: typeTemplate,
            method: typeTemplate,
            array: typeTemplate,
            object: typeTemplate,
            number: typeTemplate,
            date: typeTemplate,
            boolean: typeTemplate,
            integer: typeTemplate,
            float: typeTemplate,
            regexp: typeTemplate,
            email: typeTemplate,
            url: typeTemplate,
            hex: typeTemplate
          },
          string: {
            len: "${label} must be ${len} characters",
            min: "${label} must be at least ${min} characters",
            max: "${label} must be up to ${max} characters",
            range: "${label} must be between ${min}-${max} characters"
          },
          number: {
            len: "${label} must be equal to ${len}",
            min: "${label} must be minimum ${min}",
            max: "${label} must be maximum ${max}",
            range: "${label} must be between ${min}-${max}"
          },
          array: {
            len: "Must be ${len} ${label}",
            min: "At least ${min} ${label}",
            max: "At most ${max} ${label}",
            range: "The amount of ${label} must be between ${min}-${max}"
          },
          pattern: {
            mismatch: "${label} does not match the pattern ${pattern}"
          }
        }
      },
      Image: {
        preview: "Preview"
      },
      QRCode: {
        expired: "QR code expired",
        refresh: "Refresh",
        scanned: "Scanned"
      },
      ColorPicker: {
        presetEmpty: "Empty",
        transparent: "Transparent",
        singleColor: "Single",
        gradientColor: "Gradient"
      }
    };
    Object.assign({}, localeValues.Modal);
    let localeList = [];
    const generateLocale = () => localeList.reduce((merged, locale2) => Object.assign(Object.assign({}, merged), locale2), localeValues.Modal);
    function changeConfirmLocale(newLocale) {
      if (newLocale) {
        const cloneLocale = Object.assign({}, newLocale);
        localeList.push(cloneLocale);
        generateLocale();
        return () => {
          localeList = localeList.filter((locale2) => locale2 !== cloneLocale);
          generateLocale();
        };
      }
      Object.assign({}, localeValues.Modal);
    }
    const LocaleContext = /* @__PURE__ */ reactExports.createContext(void 0);
    const ANT_MARK = "internalMark";
    const LocaleProvider = (props) => {
      const {
        locale: locale2 = {},
        children,
        _ANT_MARK__
      } = props;
      reactExports.useEffect(() => {
        const clearLocale = changeConfirmLocale(locale2 === null || locale2 === void 0 ? void 0 : locale2.Modal);
        return clearLocale;
      }, [locale2]);
      const getMemoizedContextValue = reactExports.useMemo(() => Object.assign(Object.assign({}, locale2), {
        exist: true
      }), [locale2]);
      return /* @__PURE__ */ reactExports.createElement(LocaleContext.Provider, {
        value: getMemoizedContextValue
      }, children);
    };
    function bound01(n2, max) {
      if (isOnePointZero(n2)) {
        n2 = "100%";
      }
      var isPercent = isPercentage(n2);
      n2 = max === 360 ? n2 : Math.min(max, Math.max(0, parseFloat(n2)));
      if (isPercent) {
        n2 = parseInt(String(n2 * max), 10) / 100;
      }
      if (Math.abs(n2 - max) < 1e-6) {
        return 1;
      }
      if (max === 360) {
        n2 = (n2 < 0 ? n2 % max + max : n2 % max) / parseFloat(String(max));
      } else {
        n2 = n2 % max / parseFloat(String(max));
      }
      return n2;
    }
    function clamp01(val) {
      return Math.min(1, Math.max(0, val));
    }
    function isOnePointZero(n2) {
      return typeof n2 === "string" && n2.indexOf(".") !== -1 && parseFloat(n2) === 1;
    }
    function isPercentage(n2) {
      return typeof n2 === "string" && n2.indexOf("%") !== -1;
    }
    function boundAlpha(a) {
      a = parseFloat(a);
      if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
      }
      return a;
    }
    function convertToPercentage(n2) {
      if (n2 <= 1) {
        return "".concat(Number(n2) * 100, "%");
      }
      return n2;
    }
    function pad2(c2) {
      return c2.length === 1 ? "0" + c2 : String(c2);
    }
    function rgbToRgb(r2, g2, b2) {
      return {
        r: bound01(r2, 255) * 255,
        g: bound01(g2, 255) * 255,
        b: bound01(b2, 255) * 255
      };
    }
    function rgbToHsl(r2, g2, b2) {
      r2 = bound01(r2, 255);
      g2 = bound01(g2, 255);
      b2 = bound01(b2, 255);
      var max = Math.max(r2, g2, b2);
      var min = Math.min(r2, g2, b2);
      var h2 = 0;
      var s = 0;
      var l2 = (max + min) / 2;
      if (max === min) {
        s = 0;
        h2 = 0;
      } else {
        var d2 = max - min;
        s = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
        switch (max) {
          case r2:
            h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
            break;
          case g2:
            h2 = (b2 - r2) / d2 + 2;
            break;
          case b2:
            h2 = (r2 - g2) / d2 + 4;
            break;
        }
        h2 /= 6;
      }
      return { h: h2, s, l: l2 };
    }
    function hue2rgb(p2, q2, t2) {
      if (t2 < 0) {
        t2 += 1;
      }
      if (t2 > 1) {
        t2 -= 1;
      }
      if (t2 < 1 / 6) {
        return p2 + (q2 - p2) * (6 * t2);
      }
      if (t2 < 1 / 2) {
        return q2;
      }
      if (t2 < 2 / 3) {
        return p2 + (q2 - p2) * (2 / 3 - t2) * 6;
      }
      return p2;
    }
    function hslToRgb(h2, s, l2) {
      var r2;
      var g2;
      var b2;
      h2 = bound01(h2, 360);
      s = bound01(s, 100);
      l2 = bound01(l2, 100);
      if (s === 0) {
        g2 = l2;
        b2 = l2;
        r2 = l2;
      } else {
        var q2 = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
        var p2 = 2 * l2 - q2;
        r2 = hue2rgb(p2, q2, h2 + 1 / 3);
        g2 = hue2rgb(p2, q2, h2);
        b2 = hue2rgb(p2, q2, h2 - 1 / 3);
      }
      return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
    }
    function rgbToHsv(r2, g2, b2) {
      r2 = bound01(r2, 255);
      g2 = bound01(g2, 255);
      b2 = bound01(b2, 255);
      var max = Math.max(r2, g2, b2);
      var min = Math.min(r2, g2, b2);
      var h2 = 0;
      var v2 = max;
      var d2 = max - min;
      var s = max === 0 ? 0 : d2 / max;
      if (max === min) {
        h2 = 0;
      } else {
        switch (max) {
          case r2:
            h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
            break;
          case g2:
            h2 = (b2 - r2) / d2 + 2;
            break;
          case b2:
            h2 = (r2 - g2) / d2 + 4;
            break;
        }
        h2 /= 6;
      }
      return { h: h2, s, v: v2 };
    }
    function hsvToRgb(h2, s, v2) {
      h2 = bound01(h2, 360) * 6;
      s = bound01(s, 100);
      v2 = bound01(v2, 100);
      var i = Math.floor(h2);
      var f2 = h2 - i;
      var p2 = v2 * (1 - s);
      var q2 = v2 * (1 - f2 * s);
      var t2 = v2 * (1 - (1 - f2) * s);
      var mod = i % 6;
      var r2 = [v2, q2, p2, p2, t2, v2][mod];
      var g2 = [t2, v2, v2, q2, p2, p2][mod];
      var b2 = [p2, p2, t2, v2, v2, q2][mod];
      return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
    }
    function rgbToHex(r2, g2, b2, allow3Char) {
      var hex = [
        pad2(Math.round(r2).toString(16)),
        pad2(Math.round(g2).toString(16)),
        pad2(Math.round(b2).toString(16))
      ];
      if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
      }
      return hex.join("");
    }
    function rgbaToHex(r2, g2, b2, a, allow4Char) {
      var hex = [
        pad2(Math.round(r2).toString(16)),
        pad2(Math.round(g2).toString(16)),
        pad2(Math.round(b2).toString(16)),
        pad2(convertDecimalToHex(a))
      ];
      if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
      }
      return hex.join("");
    }
    function convertDecimalToHex(d2) {
      return Math.round(parseFloat(d2) * 255).toString(16);
    }
    function convertHexToDecimal(h2) {
      return parseIntFromHex(h2) / 255;
    }
    function parseIntFromHex(val) {
      return parseInt(val, 16);
    }
    function numberInputToObject(color) {
      return {
        r: color >> 16,
        g: (color & 65280) >> 8,
        b: color & 255
      };
    }
    var names = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      goldenrod: "#daa520",
      gold: "#ffd700",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavenderblush: "#fff0f5",
      lavender: "#e6e6fa",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    };
    function inputToRGB(color) {
      var rgb = { r: 0, g: 0, b: 0 };
      var a = 1;
      var s = null;
      var v2 = null;
      var l2 = null;
      var ok2 = false;
      var format = false;
      if (typeof color === "string") {
        color = stringInputToObject(color);
      }
      if (typeof color === "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
          rgb = rgbToRgb(color.r, color.g, color.b);
          ok2 = true;
          format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
          s = convertToPercentage(color.s);
          v2 = convertToPercentage(color.v);
          rgb = hsvToRgb(color.h, s, v2);
          ok2 = true;
          format = "hsv";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
          s = convertToPercentage(color.s);
          l2 = convertToPercentage(color.l);
          rgb = hslToRgb(color.h, s, l2);
          ok2 = true;
          format = "hsl";
        }
        if (Object.prototype.hasOwnProperty.call(color, "a")) {
          a = color.a;
        }
      }
      a = boundAlpha(a);
      return {
        ok: ok2,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a
      };
    }
    var CSS_INTEGER = "[-\\+]?\\d+%?";
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
    var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
    var matchers = {
      CSS_UNIT: new RegExp(CSS_UNIT),
      rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
      rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
      hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
      hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
      hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
      hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
    function stringInputToObject(color) {
      color = color.trim().toLowerCase();
      if (color.length === 0) {
        return false;
      }
      var named = false;
      if (names[color]) {
        color = names[color];
        named = true;
      } else if (color === "transparent") {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
      }
      var match2 = matchers.rgb.exec(color);
      if (match2) {
        return { r: match2[1], g: match2[2], b: match2[3] };
      }
      match2 = matchers.rgba.exec(color);
      if (match2) {
        return { r: match2[1], g: match2[2], b: match2[3], a: match2[4] };
      }
      match2 = matchers.hsl.exec(color);
      if (match2) {
        return { h: match2[1], s: match2[2], l: match2[3] };
      }
      match2 = matchers.hsla.exec(color);
      if (match2) {
        return { h: match2[1], s: match2[2], l: match2[3], a: match2[4] };
      }
      match2 = matchers.hsv.exec(color);
      if (match2) {
        return { h: match2[1], s: match2[2], v: match2[3] };
      }
      match2 = matchers.hsva.exec(color);
      if (match2) {
        return { h: match2[1], s: match2[2], v: match2[3], a: match2[4] };
      }
      match2 = matchers.hex8.exec(color);
      if (match2) {
        return {
          r: parseIntFromHex(match2[1]),
          g: parseIntFromHex(match2[2]),
          b: parseIntFromHex(match2[3]),
          a: convertHexToDecimal(match2[4]),
          format: named ? "name" : "hex8"
        };
      }
      match2 = matchers.hex6.exec(color);
      if (match2) {
        return {
          r: parseIntFromHex(match2[1]),
          g: parseIntFromHex(match2[2]),
          b: parseIntFromHex(match2[3]),
          format: named ? "name" : "hex"
        };
      }
      match2 = matchers.hex4.exec(color);
      if (match2) {
        return {
          r: parseIntFromHex(match2[1] + match2[1]),
          g: parseIntFromHex(match2[2] + match2[2]),
          b: parseIntFromHex(match2[3] + match2[3]),
          a: convertHexToDecimal(match2[4] + match2[4]),
          format: named ? "name" : "hex8"
        };
      }
      match2 = matchers.hex3.exec(color);
      if (match2) {
        return {
          r: parseIntFromHex(match2[1] + match2[1]),
          g: parseIntFromHex(match2[2] + match2[2]),
          b: parseIntFromHex(match2[3] + match2[3]),
          format: named ? "name" : "hex"
        };
      }
      return false;
    }
    function isValidCSSUnit(color) {
      return Boolean(matchers.CSS_UNIT.exec(String(color)));
    }
    var TinyColor = (
      /** @class */
      function() {
        function TinyColor2(color, opts) {
          if (color === void 0) {
            color = "";
          }
          if (opts === void 0) {
            opts = {};
          }
          var _a2;
          if (color instanceof TinyColor2) {
            return color;
          }
          if (typeof color === "number") {
            color = numberInputToObject(color);
          }
          this.originalInput = color;
          var rgb = inputToRGB(color);
          this.originalInput = color;
          this.r = rgb.r;
          this.g = rgb.g;
          this.b = rgb.b;
          this.a = rgb.a;
          this.roundA = Math.round(100 * this.a) / 100;
          this.format = (_a2 = opts.format) !== null && _a2 !== void 0 ? _a2 : rgb.format;
          this.gradientType = opts.gradientType;
          if (this.r < 1) {
            this.r = Math.round(this.r);
          }
          if (this.g < 1) {
            this.g = Math.round(this.g);
          }
          if (this.b < 1) {
            this.b = Math.round(this.b);
          }
          this.isValid = rgb.ok;
        }
        TinyColor2.prototype.isDark = function() {
          return this.getBrightness() < 128;
        };
        TinyColor2.prototype.isLight = function() {
          return !this.isDark();
        };
        TinyColor2.prototype.getBrightness = function() {
          var rgb = this.toRgb();
          return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
        };
        TinyColor2.prototype.getLuminance = function() {
          var rgb = this.toRgb();
          var R2;
          var G2;
          var B2;
          var RsRGB = rgb.r / 255;
          var GsRGB = rgb.g / 255;
          var BsRGB = rgb.b / 255;
          if (RsRGB <= 0.03928) {
            R2 = RsRGB / 12.92;
          } else {
            R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
          }
          if (GsRGB <= 0.03928) {
            G2 = GsRGB / 12.92;
          } else {
            G2 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
          }
          if (BsRGB <= 0.03928) {
            B2 = BsRGB / 12.92;
          } else {
            B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
          }
          return 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B2;
        };
        TinyColor2.prototype.getAlpha = function() {
          return this.a;
        };
        TinyColor2.prototype.setAlpha = function(alpha) {
          this.a = boundAlpha(alpha);
          this.roundA = Math.round(100 * this.a) / 100;
          return this;
        };
        TinyColor2.prototype.isMonochrome = function() {
          var s = this.toHsl().s;
          return s === 0;
        };
        TinyColor2.prototype.toHsv = function() {
          var hsv = rgbToHsv(this.r, this.g, this.b);
          return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
        };
        TinyColor2.prototype.toHsvString = function() {
          var hsv = rgbToHsv(this.r, this.g, this.b);
          var h2 = Math.round(hsv.h * 360);
          var s = Math.round(hsv.s * 100);
          var v2 = Math.round(hsv.v * 100);
          return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s, "%, ").concat(v2, "%)") : "hsva(".concat(h2, ", ").concat(s, "%, ").concat(v2, "%, ").concat(this.roundA, ")");
        };
        TinyColor2.prototype.toHsl = function() {
          var hsl = rgbToHsl(this.r, this.g, this.b);
          return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
        };
        TinyColor2.prototype.toHslString = function() {
          var hsl = rgbToHsl(this.r, this.g, this.b);
          var h2 = Math.round(hsl.h * 360);
          var s = Math.round(hsl.s * 100);
          var l2 = Math.round(hsl.l * 100);
          return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s, "%, ").concat(l2, "%)") : "hsla(".concat(h2, ", ").concat(s, "%, ").concat(l2, "%, ").concat(this.roundA, ")");
        };
        TinyColor2.prototype.toHex = function(allow3Char) {
          if (allow3Char === void 0) {
            allow3Char = false;
          }
          return rgbToHex(this.r, this.g, this.b, allow3Char);
        };
        TinyColor2.prototype.toHexString = function(allow3Char) {
          if (allow3Char === void 0) {
            allow3Char = false;
          }
          return "#" + this.toHex(allow3Char);
        };
        TinyColor2.prototype.toHex8 = function(allow4Char) {
          if (allow4Char === void 0) {
            allow4Char = false;
          }
          return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
        };
        TinyColor2.prototype.toHex8String = function(allow4Char) {
          if (allow4Char === void 0) {
            allow4Char = false;
          }
          return "#" + this.toHex8(allow4Char);
        };
        TinyColor2.prototype.toHexShortString = function(allowShortChar) {
          if (allowShortChar === void 0) {
            allowShortChar = false;
          }
          return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
        };
        TinyColor2.prototype.toRgb = function() {
          return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a
          };
        };
        TinyColor2.prototype.toRgbString = function() {
          var r2 = Math.round(this.r);
          var g2 = Math.round(this.g);
          var b2 = Math.round(this.b);
          return this.a === 1 ? "rgb(".concat(r2, ", ").concat(g2, ", ").concat(b2, ")") : "rgba(".concat(r2, ", ").concat(g2, ", ").concat(b2, ", ").concat(this.roundA, ")");
        };
        TinyColor2.prototype.toPercentageRgb = function() {
          var fmt = function(x2) {
            return "".concat(Math.round(bound01(x2, 255) * 100), "%");
          };
          return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a
          };
        };
        TinyColor2.prototype.toPercentageRgbString = function() {
          var rnd = function(x2) {
            return Math.round(bound01(x2, 255) * 100);
          };
          return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
        };
        TinyColor2.prototype.toName = function() {
          if (this.a === 0) {
            return "transparent";
          }
          if (this.a < 1) {
            return false;
          }
          var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
          for (var _i2 = 0, _a2 = Object.entries(names); _i2 < _a2.length; _i2++) {
            var _b = _a2[_i2], key = _b[0], value = _b[1];
            if (hex === value) {
              return key;
            }
          }
          return false;
        };
        TinyColor2.prototype.toString = function(format) {
          var formatSet = Boolean(format);
          format = format !== null && format !== void 0 ? format : this.format;
          var formattedString = false;
          var hasAlpha = this.a < 1 && this.a >= 0;
          var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
          if (needsAlphaFormat) {
            if (format === "name" && this.a === 0) {
              return this.toName();
            }
            return this.toRgbString();
          }
          if (format === "rgb") {
            formattedString = this.toRgbString();
          }
          if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
          }
          if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
          }
          if (format === "hex3") {
            formattedString = this.toHexString(true);
          }
          if (format === "hex4") {
            formattedString = this.toHex8String(true);
          }
          if (format === "hex8") {
            formattedString = this.toHex8String();
          }
          if (format === "name") {
            formattedString = this.toName();
          }
          if (format === "hsl") {
            formattedString = this.toHslString();
          }
          if (format === "hsv") {
            formattedString = this.toHsvString();
          }
          return formattedString || this.toHexString();
        };
        TinyColor2.prototype.toNumber = function() {
          return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
        };
        TinyColor2.prototype.clone = function() {
          return new TinyColor2(this.toString());
        };
        TinyColor2.prototype.lighten = function(amount) {
          if (amount === void 0) {
            amount = 10;
          }
          var hsl = this.toHsl();
          hsl.l += amount / 100;
          hsl.l = clamp01(hsl.l);
          return new TinyColor2(hsl);
        };
        TinyColor2.prototype.brighten = function(amount) {
          if (amount === void 0) {
            amount = 10;
          }
          var rgb = this.toRgb();
          rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
          rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
          rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
          return new TinyColor2(rgb);
        };
        TinyColor2.prototype.darken = function(amount) {
          if (amount === void 0) {
            amount = 10;
          }
          var hsl = this.toHsl();
          hsl.l -= amount / 100;
          hsl.l = clamp01(hsl.l);
          return new TinyColor2(hsl);
        };
        TinyColor2.prototype.tint = function(amount) {
          if (amount === void 0) {
            amount = 10;
          }
          return this.mix("white", amount);
        };
        TinyColor2.prototype.shade = function(amount) {
          if (amount === void 0) {
            amount = 10;
          }
          return this.mix("black", amount);
        };
        TinyColor2.prototype.desaturate = function(amount) {
          if (amount === void 0) {
            amount = 10;
          }
          var hsl = this.toHsl();
          hsl.s -= amount / 100;
          hsl.s = clamp01(hsl.s);
          return new TinyColor2(hsl);
        };
        TinyColor2.prototype.saturate = function(amount) {
          if (amount === void 0) {
            amount = 10;
          }
          var hsl = this.toHsl();
          hsl.s += amount / 100;
          hsl.s = clamp01(hsl.s);
          return new TinyColor2(hsl);
        };
        TinyColor2.prototype.greyscale = function() {
          return this.desaturate(100);
        };
        TinyColor2.prototype.spin = function(amount) {
          var hsl = this.toHsl();
          var hue = (hsl.h + amount) % 360;
          hsl.h = hue < 0 ? 360 + hue : hue;
          return new TinyColor2(hsl);
        };
        TinyColor2.prototype.mix = function(color, amount) {
          if (amount === void 0) {
            amount = 50;
          }
          var rgb1 = this.toRgb();
          var rgb2 = new TinyColor2(color).toRgb();
          var p2 = amount / 100;
          var rgba = {
            r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
            g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
            b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
            a: (rgb2.a - rgb1.a) * p2 + rgb1.a
          };
          return new TinyColor2(rgba);
        };
        TinyColor2.prototype.analogous = function(results, slices) {
          if (results === void 0) {
            results = 6;
          }
          if (slices === void 0) {
            slices = 30;
          }
          var hsl = this.toHsl();
          var part = 360 / slices;
          var ret = [this];
          for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor2(hsl));
          }
          return ret;
        };
        TinyColor2.prototype.complement = function() {
          var hsl = this.toHsl();
          hsl.h = (hsl.h + 180) % 360;
          return new TinyColor2(hsl);
        };
        TinyColor2.prototype.monochromatic = function(results) {
          if (results === void 0) {
            results = 6;
          }
          var hsv = this.toHsv();
          var h2 = hsv.h;
          var s = hsv.s;
          var v2 = hsv.v;
          var res = [];
          var modification = 1 / results;
          while (results--) {
            res.push(new TinyColor2({ h: h2, s, v: v2 }));
            v2 = (v2 + modification) % 1;
          }
          return res;
        };
        TinyColor2.prototype.splitcomplement = function() {
          var hsl = this.toHsl();
          var h2 = hsl.h;
          return [
            this,
            new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
          ];
        };
        TinyColor2.prototype.onBackground = function(background) {
          var fg2 = this.toRgb();
          var bg2 = new TinyColor2(background).toRgb();
          var alpha = fg2.a + bg2.a * (1 - fg2.a);
          return new TinyColor2({
            r: (fg2.r * fg2.a + bg2.r * bg2.a * (1 - fg2.a)) / alpha,
            g: (fg2.g * fg2.a + bg2.g * bg2.a * (1 - fg2.a)) / alpha,
            b: (fg2.b * fg2.a + bg2.b * bg2.a * (1 - fg2.a)) / alpha,
            a: alpha
          });
        };
        TinyColor2.prototype.triad = function() {
          return this.polyad(3);
        };
        TinyColor2.prototype.tetrad = function() {
          return this.polyad(4);
        };
        TinyColor2.prototype.polyad = function(n2) {
          var hsl = this.toHsl();
          var h2 = hsl.h;
          var result = [this];
          var increment = 360 / n2;
          for (var i = 1; i < n2; i++) {
            result.push(new TinyColor2({ h: (h2 + i * increment) % 360, s: hsl.s, l: hsl.l }));
          }
          return result;
        };
        TinyColor2.prototype.equals = function(color) {
          return this.toRgbString() === new TinyColor2(color).toRgbString();
        };
        return TinyColor2;
      }()
    );
    var hueStep = 2;
    var saturationStep = 0.16;
    var saturationStep2 = 0.05;
    var brightnessStep1 = 0.05;
    var brightnessStep2 = 0.15;
    var lightColorCount = 5;
    var darkColorCount = 4;
    var darkColorMap = [{
      index: 7,
      opacity: 0.15
    }, {
      index: 6,
      opacity: 0.25
    }, {
      index: 5,
      opacity: 0.3
    }, {
      index: 5,
      opacity: 0.45
    }, {
      index: 5,
      opacity: 0.65
    }, {
      index: 5,
      opacity: 0.85
    }, {
      index: 4,
      opacity: 0.9
    }, {
      index: 3,
      opacity: 0.95
    }, {
      index: 2,
      opacity: 0.97
    }, {
      index: 1,
      opacity: 0.98
    }];
    function toHsv(_ref) {
      var r2 = _ref.r, g2 = _ref.g, b2 = _ref.b;
      var hsv = rgbToHsv(r2, g2, b2);
      return {
        h: hsv.h * 360,
        s: hsv.s,
        v: hsv.v
      };
    }
    function toHex(_ref2) {
      var r2 = _ref2.r, g2 = _ref2.g, b2 = _ref2.b;
      return "#".concat(rgbToHex(r2, g2, b2, false));
    }
    function mix(rgb1, rgb2, amount) {
      var p2 = amount / 100;
      var rgb = {
        r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
        g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
        b: (rgb2.b - rgb1.b) * p2 + rgb1.b
      };
      return rgb;
    }
    function getHue(hsv, i, light) {
      var hue;
      if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
        hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
      } else {
        hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
      }
      if (hue < 0) {
        hue += 360;
      } else if (hue >= 360) {
        hue -= 360;
      }
      return hue;
    }
    function getSaturation(hsv, i, light) {
      if (hsv.h === 0 && hsv.s === 0) {
        return hsv.s;
      }
      var saturation;
      if (light) {
        saturation = hsv.s - saturationStep * i;
      } else if (i === darkColorCount) {
        saturation = hsv.s + saturationStep;
      } else {
        saturation = hsv.s + saturationStep2 * i;
      }
      if (saturation > 1) {
        saturation = 1;
      }
      if (light && i === lightColorCount && saturation > 0.1) {
        saturation = 0.1;
      }
      if (saturation < 0.06) {
        saturation = 0.06;
      }
      return Number(saturation.toFixed(2));
    }
    function getValue$2(hsv, i, light) {
      var value;
      if (light) {
        value = hsv.v + brightnessStep1 * i;
      } else {
        value = hsv.v - brightnessStep2 * i;
      }
      if (value > 1) {
        value = 1;
      }
      return Number(value.toFixed(2));
    }
    function generate$1(color) {
      var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var patterns = [];
      var pColor = inputToRGB(color);
      for (var i = lightColorCount; i > 0; i -= 1) {
        var hsv = toHsv(pColor);
        var colorString = toHex(inputToRGB({
          h: getHue(hsv, i, true),
          s: getSaturation(hsv, i, true),
          v: getValue$2(hsv, i, true)
        }));
        patterns.push(colorString);
      }
      patterns.push(toHex(pColor));
      for (var _i2 = 1; _i2 <= darkColorCount; _i2 += 1) {
        var _hsv = toHsv(pColor);
        var _colorString = toHex(inputToRGB({
          h: getHue(_hsv, _i2),
          s: getSaturation(_hsv, _i2),
          v: getValue$2(_hsv, _i2)
        }));
        patterns.push(_colorString);
      }
      if (opts.theme === "dark") {
        return darkColorMap.map(function(_ref3) {
          var index = _ref3.index, opacity = _ref3.opacity;
          var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index]), opacity * 100));
          return darkColorString;
        });
      }
      return patterns;
    }
    var presetPrimaryColors = {
      "red": "#F5222D",
      "volcano": "#FA541C",
      "orange": "#FA8C16",
      "gold": "#FAAD14",
      "yellow": "#FADB14",
      "lime": "#A0D911",
      "green": "#52C41A",
      "cyan": "#13C2C2",
      "blue": "#1677FF",
      "geekblue": "#2F54EB",
      "purple": "#722ED1",
      "magenta": "#EB2F96",
      "grey": "#666666"
    };
    var red = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
    red.primary = red[5];
    var volcano = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
    volcano.primary = volcano[5];
    var orange = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
    orange.primary = orange[5];
    var gold = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
    gold.primary = gold[5];
    var yellow = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
    yellow.primary = yellow[5];
    var lime = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
    lime.primary = lime[5];
    var green = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
    green.primary = green[5];
    var cyan = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
    cyan.primary = cyan[5];
    var blue = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
    blue.primary = blue[5];
    var geekblue = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
    geekblue.primary = geekblue[5];
    var purple = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
    purple.primary = purple[5];
    var magenta = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
    magenta.primary = magenta[5];
    var grey = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
    grey.primary = grey[5];
    var presetPalettes = {
      red,
      volcano,
      orange,
      gold,
      yellow,
      lime,
      green,
      cyan,
      blue,
      geekblue,
      purple,
      magenta,
      grey
    };
    const defaultPresetColors = {
      blue: "#1677FF",
      purple: "#722ED1",
      cyan: "#13C2C2",
      green: "#52C41A",
      magenta: "#EB2F96",
      /**
       * @deprecated Use magenta instead
       */
      pink: "#EB2F96",
      red: "#F5222D",
      orange: "#FA8C16",
      yellow: "#FADB14",
      volcano: "#FA541C",
      geekblue: "#2F54EB",
      gold: "#FAAD14",
      lime: "#A0D911"
    };
    const seedToken = Object.assign(Object.assign({}, defaultPresetColors), {
      // Color
      colorPrimary: "#1677ff",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorInfo: "#1677ff",
      colorLink: "",
      colorTextBase: "",
      colorBgBase: "",
      // Font
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
      fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
      fontSize: 14,
      // Line
      lineWidth: 1,
      lineType: "solid",
      // Motion
      motionUnit: 0.1,
      motionBase: 0,
      motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
      motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
      motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
      motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
      motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
      motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
      // Radius
      borderRadius: 6,
      // Size
      sizeUnit: 4,
      sizeStep: 4,
      sizePopupArrow: 16,
      // Control Base
      controlHeight: 32,
      // zIndex
      zIndexBase: 0,
      zIndexPopupBase: 1e3,
      // Image
      opacityImage: 1,
      // Wireframe
      wireframe: false,
      // Motion
      motion: true
    });
    function genColorMapToken(seed, _ref) {
      let {
        generateColorPalettes: generateColorPalettes2,
        generateNeutralColorPalettes: generateNeutralColorPalettes2
      } = _ref;
      const {
        colorSuccess: colorSuccessBase,
        colorWarning: colorWarningBase,
        colorError: colorErrorBase,
        colorInfo: colorInfoBase,
        colorPrimary: colorPrimaryBase,
        colorBgBase,
        colorTextBase
      } = seed;
      const primaryColors = generateColorPalettes2(colorPrimaryBase);
      const successColors = generateColorPalettes2(colorSuccessBase);
      const warningColors = generateColorPalettes2(colorWarningBase);
      const errorColors = generateColorPalettes2(colorErrorBase);
      const infoColors = generateColorPalettes2(colorInfoBase);
      const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
      const colorLink = seed.colorLink || seed.colorInfo;
      const linkColors = generateColorPalettes2(colorLink);
      const colorErrorBgFilledHover = new TinyColor(errorColors[1]).mix(new TinyColor(errorColors[3]), 50).toHexString();
      return Object.assign(Object.assign({}, neutralColors), {
        colorPrimaryBg: primaryColors[1],
        colorPrimaryBgHover: primaryColors[2],
        colorPrimaryBorder: primaryColors[3],
        colorPrimaryBorderHover: primaryColors[4],
        colorPrimaryHover: primaryColors[5],
        colorPrimary: primaryColors[6],
        colorPrimaryActive: primaryColors[7],
        colorPrimaryTextHover: primaryColors[8],
        colorPrimaryText: primaryColors[9],
        colorPrimaryTextActive: primaryColors[10],
        colorSuccessBg: successColors[1],
        colorSuccessBgHover: successColors[2],
        colorSuccessBorder: successColors[3],
        colorSuccessBorderHover: successColors[4],
        colorSuccessHover: successColors[4],
        colorSuccess: successColors[6],
        colorSuccessActive: successColors[7],
        colorSuccessTextHover: successColors[8],
        colorSuccessText: successColors[9],
        colorSuccessTextActive: successColors[10],
        colorErrorBg: errorColors[1],
        colorErrorBgHover: errorColors[2],
        colorErrorBgFilledHover,
        colorErrorBgActive: errorColors[3],
        colorErrorBorder: errorColors[3],
        colorErrorBorderHover: errorColors[4],
        colorErrorHover: errorColors[5],
        colorError: errorColors[6],
        colorErrorActive: errorColors[7],
        colorErrorTextHover: errorColors[8],
        colorErrorText: errorColors[9],
        colorErrorTextActive: errorColors[10],
        colorWarningBg: warningColors[1],
        colorWarningBgHover: warningColors[2],
        colorWarningBorder: warningColors[3],
        colorWarningBorderHover: warningColors[4],
        colorWarningHover: warningColors[4],
        colorWarning: warningColors[6],
        colorWarningActive: warningColors[7],
        colorWarningTextHover: warningColors[8],
        colorWarningText: warningColors[9],
        colorWarningTextActive: warningColors[10],
        colorInfoBg: infoColors[1],
        colorInfoBgHover: infoColors[2],
        colorInfoBorder: infoColors[3],
        colorInfoBorderHover: infoColors[4],
        colorInfoHover: infoColors[4],
        colorInfo: infoColors[6],
        colorInfoActive: infoColors[7],
        colorInfoTextHover: infoColors[8],
        colorInfoText: infoColors[9],
        colorInfoTextActive: infoColors[10],
        colorLinkHover: linkColors[4],
        colorLink: linkColors[6],
        colorLinkActive: linkColors[7],
        colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
        colorWhite: "#fff"
      });
    }
    const genRadius = (radiusBase) => {
      let radiusLG = radiusBase;
      let radiusSM = radiusBase;
      let radiusXS = radiusBase;
      let radiusOuter = radiusBase;
      if (radiusBase < 6 && radiusBase >= 5) {
        radiusLG = radiusBase + 1;
      } else if (radiusBase < 16 && radiusBase >= 6) {
        radiusLG = radiusBase + 2;
      } else if (radiusBase >= 16) {
        radiusLG = 16;
      }
      if (radiusBase < 7 && radiusBase >= 5) {
        radiusSM = 4;
      } else if (radiusBase < 8 && radiusBase >= 7) {
        radiusSM = 5;
      } else if (radiusBase < 14 && radiusBase >= 8) {
        radiusSM = 6;
      } else if (radiusBase < 16 && radiusBase >= 14) {
        radiusSM = 7;
      } else if (radiusBase >= 16) {
        radiusSM = 8;
      }
      if (radiusBase < 6 && radiusBase >= 2) {
        radiusXS = 1;
      } else if (radiusBase >= 6) {
        radiusXS = 2;
      }
      if (radiusBase > 4 && radiusBase < 8) {
        radiusOuter = 4;
      } else if (radiusBase >= 8) {
        radiusOuter = 6;
      }
      return {
        borderRadius: radiusBase,
        borderRadiusXS: radiusXS,
        borderRadiusSM: radiusSM,
        borderRadiusLG: radiusLG,
        borderRadiusOuter: radiusOuter
      };
    };
    function genCommonMapToken(token2) {
      const {
        motionUnit,
        motionBase,
        borderRadius,
        lineWidth
      } = token2;
      return Object.assign({
        // motion
        motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
        motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
        motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
        // line
        lineWidthBold: lineWidth + 1
      }, genRadius(borderRadius));
    }
    const genControlHeight = (token2) => {
      const {
        controlHeight
      } = token2;
      return {
        controlHeightSM: controlHeight * 0.75,
        controlHeightXS: controlHeight * 0.5,
        controlHeightLG: controlHeight * 1.25
      };
    };
    function getLineHeight(fontSize) {
      return (fontSize + 8) / fontSize;
    }
    function getFontSizes(base) {
      const fontSizes = new Array(10).fill(null).map((_, index) => {
        const i = index - 1;
        const baseSize = base * Math.pow(Math.E, i / 5);
        const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
        return Math.floor(intSize / 2) * 2;
      });
      fontSizes[1] = base;
      return fontSizes.map((size) => ({
        size,
        lineHeight: getLineHeight(size)
      }));
    }
    const genFontMapToken = (fontSize) => {
      const fontSizePairs = getFontSizes(fontSize);
      const fontSizes = fontSizePairs.map((pair) => pair.size);
      const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
      const fontSizeMD = fontSizes[1];
      const fontSizeSM = fontSizes[0];
      const fontSizeLG = fontSizes[2];
      const lineHeight = lineHeights[1];
      const lineHeightSM = lineHeights[0];
      const lineHeightLG = lineHeights[2];
      return {
        fontSizeSM,
        fontSize: fontSizeMD,
        fontSizeLG,
        fontSizeXL: fontSizes[3],
        fontSizeHeading1: fontSizes[6],
        fontSizeHeading2: fontSizes[5],
        fontSizeHeading3: fontSizes[4],
        fontSizeHeading4: fontSizes[3],
        fontSizeHeading5: fontSizes[2],
        lineHeight,
        lineHeightLG,
        lineHeightSM,
        fontHeight: Math.round(lineHeight * fontSizeMD),
        fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
        fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
        lineHeightHeading1: lineHeights[6],
        lineHeightHeading2: lineHeights[5],
        lineHeightHeading3: lineHeights[4],
        lineHeightHeading4: lineHeights[3],
        lineHeightHeading5: lineHeights[2]
      };
    };
    function genSizeMapToken(token2) {
      const {
        sizeUnit,
        sizeStep
      } = token2;
      return {
        sizeXXL: sizeUnit * (sizeStep + 8),
        // 48
        sizeXL: sizeUnit * (sizeStep + 4),
        // 32
        sizeLG: sizeUnit * (sizeStep + 2),
        // 24
        sizeMD: sizeUnit * (sizeStep + 1),
        // 20
        sizeMS: sizeUnit * sizeStep,
        // 16
        size: sizeUnit * sizeStep,
        // 16
        sizeSM: sizeUnit * (sizeStep - 1),
        // 12
        sizeXS: sizeUnit * (sizeStep - 2),
        // 8
        sizeXXS: sizeUnit * (sizeStep - 3)
        // 4
      };
    }
    const getAlphaColor$1 = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
    const getSolidColor = (baseColor, brightness) => {
      const instance = new TinyColor(baseColor);
      return instance.darken(brightness).toHexString();
    };
    const generateColorPalettes = (baseColor) => {
      const colors = generate$1(baseColor);
      return {
        1: colors[0],
        2: colors[1],
        3: colors[2],
        4: colors[3],
        5: colors[4],
        6: colors[5],
        7: colors[6],
        8: colors[4],
        9: colors[5],
        10: colors[6]
        // 8: colors[7],
        // 9: colors[8],
        // 10: colors[9],
      };
    };
    const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
      const colorBgBase = bgBaseColor || "#fff";
      const colorTextBase = textBaseColor || "#000";
      return {
        colorBgBase,
        colorTextBase,
        colorText: getAlphaColor$1(colorTextBase, 0.88),
        colorTextSecondary: getAlphaColor$1(colorTextBase, 0.65),
        colorTextTertiary: getAlphaColor$1(colorTextBase, 0.45),
        colorTextQuaternary: getAlphaColor$1(colorTextBase, 0.25),
        colorFill: getAlphaColor$1(colorTextBase, 0.15),
        colorFillSecondary: getAlphaColor$1(colorTextBase, 0.06),
        colorFillTertiary: getAlphaColor$1(colorTextBase, 0.04),
        colorFillQuaternary: getAlphaColor$1(colorTextBase, 0.02),
        colorBgSolid: getAlphaColor$1(colorTextBase, 1),
        colorBgSolidHover: getAlphaColor$1(colorTextBase, 0.75),
        colorBgSolidActive: getAlphaColor$1(colorTextBase, 0.95),
        colorBgLayout: getSolidColor(colorBgBase, 4),
        colorBgContainer: getSolidColor(colorBgBase, 0),
        colorBgElevated: getSolidColor(colorBgBase, 0),
        colorBgSpotlight: getAlphaColor$1(colorTextBase, 0.85),
        colorBgBlur: "transparent",
        colorBorder: getSolidColor(colorBgBase, 15),
        colorBorderSecondary: getSolidColor(colorBgBase, 6)
      };
    };
    function derivative(token2) {
      presetPrimaryColors.pink = presetPrimaryColors.magenta;
      presetPalettes.pink = presetPalettes.magenta;
      const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
        const colors = token2[colorKey] === presetPrimaryColors[colorKey] ? presetPalettes[colorKey] : generate$1(token2[colorKey]);
        return new Array(10).fill(1).reduce((prev2, _, i) => {
          prev2[`${colorKey}-${i + 1}`] = colors[i];
          prev2[`${colorKey}${i + 1}`] = colors[i];
          return prev2;
        }, {});
      }).reduce((prev2, cur) => {
        prev2 = Object.assign(Object.assign({}, prev2), cur);
        return prev2;
      }, {});
      return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, token2), colorPalettes), genColorMapToken(token2, {
        generateColorPalettes,
        generateNeutralColorPalettes
      })), genFontMapToken(token2.fontSize)), genSizeMapToken(token2)), genControlHeight(token2)), genCommonMapToken(token2));
    }
    const defaultTheme = createTheme(derivative);
    const defaultConfig = {
      token: seedToken,
      override: {
        override: seedToken
      },
      hashed: true
    };
    const DesignTokenContext = /* @__PURE__ */ ReactExports.createContext(defaultConfig);
    const defaultPrefixCls = "ant";
    const defaultIconPrefixCls = "anticon";
    const defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
      if (customizePrefixCls) {
        return customizePrefixCls;
      }
      return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
    };
    const ConfigContext = /* @__PURE__ */ reactExports.createContext({
      // We provide a default function for Context without provider
      getPrefixCls: defaultGetPrefixCls,
      iconPrefixCls: defaultIconPrefixCls
    });
    const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
    function getStyle(globalPrefixCls2, theme) {
      const variables = {};
      const formatColor = (color, updater) => {
        let clone = color.clone();
        clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
        return clone.toRgbString();
      };
      const fillColor = (colorVal, type) => {
        const baseColor = new TinyColor(colorVal);
        const colorPalettes = generate$1(baseColor.toRgbString());
        variables[`${type}-color`] = formatColor(baseColor);
        variables[`${type}-color-disabled`] = colorPalettes[1];
        variables[`${type}-color-hover`] = colorPalettes[4];
        variables[`${type}-color-active`] = colorPalettes[6];
        variables[`${type}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
        variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
        variables[`${type}-color-deprecated-border`] = colorPalettes[2];
      };
      if (theme.primaryColor) {
        fillColor(theme.primaryColor, "primary");
        const primaryColor = new TinyColor(theme.primaryColor);
        const primaryColors = generate$1(primaryColor.toRgbString());
        primaryColors.forEach((color, index) => {
          variables[`primary-${index + 1}`] = color;
        });
        variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, (c2) => c2.lighten(35));
        variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, (c2) => c2.lighten(20));
        variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, (c2) => c2.tint(20));
        variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, (c2) => c2.tint(50));
        variables["primary-color-deprecated-f-12"] = formatColor(primaryColor, (c2) => c2.setAlpha(c2.getAlpha() * 0.12));
        const primaryActiveColor = new TinyColor(primaryColors[0]);
        variables["primary-color-active-deprecated-f-30"] = formatColor(primaryActiveColor, (c2) => c2.setAlpha(c2.getAlpha() * 0.3));
        variables["primary-color-active-deprecated-d-02"] = formatColor(primaryActiveColor, (c2) => c2.darken(2));
      }
      if (theme.successColor) {
        fillColor(theme.successColor, "success");
      }
      if (theme.warningColor) {
        fillColor(theme.warningColor, "warning");
      }
      if (theme.errorColor) {
        fillColor(theme.errorColor, "error");
      }
      if (theme.infoColor) {
        fillColor(theme.infoColor, "info");
      }
      const cssList = Object.keys(variables).map((key) => `--${globalPrefixCls2}-${key}: ${variables[key]};`);
      return `
  :root {
    ${cssList.join("\n")}
  }
  `.trim();
    }
    function registerTheme(globalPrefixCls2, theme) {
      const style2 = getStyle(globalPrefixCls2, theme);
      if (canUseDom()) {
        updateCSS(style2, `${dynamicStyleMark}-dynamic-theme`);
      }
    }
    const DisabledContext = /* @__PURE__ */ reactExports.createContext(false);
    const DisabledContextProvider = (_ref) => {
      let {
        children,
        disabled
      } = _ref;
      const originDisabled = reactExports.useContext(DisabledContext);
      return /* @__PURE__ */ reactExports.createElement(DisabledContext.Provider, {
        value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
      }, children);
    };
    const SizeContext = /* @__PURE__ */ reactExports.createContext(void 0);
    const SizeContextProvider = (_ref) => {
      let {
        children,
        size
      } = _ref;
      const originSize = reactExports.useContext(SizeContext);
      return /* @__PURE__ */ reactExports.createElement(SizeContext.Provider, {
        value: size || originSize
      }, children);
    };
    function useConfig() {
      const componentDisabled = reactExports.useContext(DisabledContext);
      const componentSize = reactExports.useContext(SizeContext);
      return {
        componentDisabled,
        componentSize
      };
    }
    var AbstractCalculator = /* @__PURE__ */ _createClass(function AbstractCalculator2() {
      _classCallCheck(this, AbstractCalculator2);
    });
    var CALC_UNIT = "CALC_UNIT";
    var regexp = new RegExp(CALC_UNIT, "g");
    function unit(value) {
      if (typeof value === "number") {
        return "".concat(value).concat(CALC_UNIT);
      }
      return value;
    }
    var CSSCalculator = /* @__PURE__ */ function(_AbstractCalculator) {
      _inherits(CSSCalculator2, _AbstractCalculator);
      var _super = _createSuper(CSSCalculator2);
      function CSSCalculator2(num, unitlessCssVar) {
        var _this;
        _classCallCheck(this, CSSCalculator2);
        _this = _super.call(this);
        _defineProperty(_assertThisInitialized(_this), "result", "");
        _defineProperty(_assertThisInitialized(_this), "unitlessCssVar", void 0);
        _defineProperty(_assertThisInitialized(_this), "lowPriority", void 0);
        var numType = _typeof(num);
        _this.unitlessCssVar = unitlessCssVar;
        if (num instanceof CSSCalculator2) {
          _this.result = "(".concat(num.result, ")");
        } else if (numType === "number") {
          _this.result = unit(num);
        } else if (numType === "string") {
          _this.result = num;
        }
        return _this;
      }
      _createClass(CSSCalculator2, [{
        key: "add",
        value: function add(num) {
          if (num instanceof CSSCalculator2) {
            this.result = "".concat(this.result, " + ").concat(num.getResult());
          } else if (typeof num === "number" || typeof num === "string") {
            this.result = "".concat(this.result, " + ").concat(unit(num));
          }
          this.lowPriority = true;
          return this;
        }
      }, {
        key: "sub",
        value: function sub(num) {
          if (num instanceof CSSCalculator2) {
            this.result = "".concat(this.result, " - ").concat(num.getResult());
          } else if (typeof num === "number" || typeof num === "string") {
            this.result = "".concat(this.result, " - ").concat(unit(num));
          }
          this.lowPriority = true;
          return this;
        }
      }, {
        key: "mul",
        value: function mul(num) {
          if (this.lowPriority) {
            this.result = "(".concat(this.result, ")");
          }
          if (num instanceof CSSCalculator2) {
            this.result = "".concat(this.result, " * ").concat(num.getResult(true));
          } else if (typeof num === "number" || typeof num === "string") {
            this.result = "".concat(this.result, " * ").concat(num);
          }
          this.lowPriority = false;
          return this;
        }
      }, {
        key: "div",
        value: function div(num) {
          if (this.lowPriority) {
            this.result = "(".concat(this.result, ")");
          }
          if (num instanceof CSSCalculator2) {
            this.result = "".concat(this.result, " / ").concat(num.getResult(true));
          } else if (typeof num === "number" || typeof num === "string") {
            this.result = "".concat(this.result, " / ").concat(num);
          }
          this.lowPriority = false;
          return this;
        }
      }, {
        key: "getResult",
        value: function getResult(force) {
          return this.lowPriority || force ? "(".concat(this.result, ")") : this.result;
        }
      }, {
        key: "equal",
        value: function equal(options) {
          var _this2 = this;
          var _ref = options || {}, cssUnit = _ref.unit;
          var mergedUnit = true;
          if (typeof cssUnit === "boolean") {
            mergedUnit = cssUnit;
          } else if (Array.from(this.unitlessCssVar).some(function(cssVar) {
            return _this2.result.includes(cssVar);
          })) {
            mergedUnit = false;
          }
          this.result = this.result.replace(regexp, mergedUnit ? "px" : "");
          if (typeof this.lowPriority !== "undefined") {
            return "calc(".concat(this.result, ")");
          }
          return this.result;
        }
      }]);
      return CSSCalculator2;
    }(AbstractCalculator);
    var NumCalculator = /* @__PURE__ */ function(_AbstractCalculator) {
      _inherits(NumCalculator2, _AbstractCalculator);
      var _super = _createSuper(NumCalculator2);
      function NumCalculator2(num) {
        var _this;
        _classCallCheck(this, NumCalculator2);
        _this = _super.call(this);
        _defineProperty(_assertThisInitialized(_this), "result", 0);
        if (num instanceof NumCalculator2) {
          _this.result = num.result;
        } else if (typeof num === "number") {
          _this.result = num;
        }
        return _this;
      }
      _createClass(NumCalculator2, [{
        key: "add",
        value: function add(num) {
          if (num instanceof NumCalculator2) {
            this.result += num.result;
          } else if (typeof num === "number") {
            this.result += num;
          }
          return this;
        }
      }, {
        key: "sub",
        value: function sub(num) {
          if (num instanceof NumCalculator2) {
            this.result -= num.result;
          } else if (typeof num === "number") {
            this.result -= num;
          }
          return this;
        }
      }, {
        key: "mul",
        value: function mul(num) {
          if (num instanceof NumCalculator2) {
            this.result *= num.result;
          } else if (typeof num === "number") {
            this.result *= num;
          }
          return this;
        }
      }, {
        key: "div",
        value: function div(num) {
          if (num instanceof NumCalculator2) {
            this.result /= num.result;
          } else if (typeof num === "number") {
            this.result /= num;
          }
          return this;
        }
      }, {
        key: "equal",
        value: function equal() {
          return this.result;
        }
      }]);
      return NumCalculator2;
    }(AbstractCalculator);
    var genCalc = function genCalc2(type, unitlessCssVar) {
      var Calculator = type === "css" ? CSSCalculator : NumCalculator;
      return function(num) {
        return new Calculator(num, unitlessCssVar);
      };
    };
    var getCompVarPrefix = function getCompVarPrefix2(component, prefix) {
      return "".concat([prefix, component.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
    };
    function useEvent(callback) {
      var fnRef = reactExports.useRef();
      fnRef.current = callback;
      var memoFn = reactExports.useCallback(function() {
        var _fnRef$current;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
      }, []);
      return memoFn;
    }
    function useSafeState(defaultValue) {
      var destroyRef = reactExports.useRef(false);
      var _React$useState = reactExports.useState(defaultValue), _React$useState2 = _slicedToArray(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
      reactExports.useEffect(function() {
        destroyRef.current = false;
        return function() {
          destroyRef.current = true;
        };
      }, []);
      function safeSetState(updater, ignoreDestroy) {
        if (ignoreDestroy && destroyRef.current) {
          return;
        }
        setValue(updater);
      }
      return [value, safeSetState];
    }
    function getComponentToken(component, token2, defaultToken, options) {
      var customToken = _objectSpread2({}, token2[component]);
      if (options !== null && options !== void 0 && options.deprecatedTokens) {
        var deprecatedTokens = options.deprecatedTokens;
        deprecatedTokens.forEach(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 2), oldTokenKey = _ref2[0], newTokenKey = _ref2[1];
          if (customToken !== null && customToken !== void 0 && customToken[oldTokenKey] || customToken !== null && customToken !== void 0 && customToken[newTokenKey]) {
            var _customToken$newToken;
            (_customToken$newToken = customToken[newTokenKey]) !== null && _customToken$newToken !== void 0 ? _customToken$newToken : customToken[newTokenKey] = customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey];
          }
        });
      }
      var mergedToken = _objectSpread2(_objectSpread2({}, defaultToken), customToken);
      Object.keys(mergedToken).forEach(function(key) {
        if (mergedToken[key] === token2[key]) {
          delete mergedToken[key];
        }
      });
      return mergedToken;
    }
    var enableStatistic = typeof CSSINJS_STATISTIC !== "undefined";
    var recording = true;
    function merge() {
      for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
        objs[_key] = arguments[_key];
      }
      if (!enableStatistic) {
        return Object.assign.apply(Object, [{}].concat(objs));
      }
      recording = false;
      var ret = {};
      objs.forEach(function(obj) {
        if (_typeof(obj) !== "object") {
          return;
        }
        var keys2 = Object.keys(obj);
        keys2.forEach(function(key) {
          Object.defineProperty(ret, key, {
            configurable: true,
            enumerable: true,
            get: function get2() {
              return obj[key];
            }
          });
        });
      });
      recording = true;
      return ret;
    }
    var statistic = {};
    function noop() {
    }
    var statisticToken = function statisticToken2(token2) {
      var tokenKeys2;
      var proxy = token2;
      var flush = noop;
      if (enableStatistic && typeof Proxy !== "undefined") {
        tokenKeys2 = /* @__PURE__ */ new Set();
        proxy = new Proxy(token2, {
          get: function get2(obj, prop) {
            if (recording) {
              var _tokenKeys;
              (_tokenKeys = tokenKeys2) === null || _tokenKeys === void 0 || _tokenKeys.add(prop);
            }
            return obj[prop];
          }
        });
        flush = function flush2(componentName, componentToken) {
          var _statistic$componentN;
          statistic[componentName] = {
            global: Array.from(tokenKeys2),
            component: _objectSpread2(_objectSpread2({}, (_statistic$componentN = statistic[componentName]) === null || _statistic$componentN === void 0 ? void 0 : _statistic$componentN.component), componentToken)
          };
        };
      }
      return {
        token: proxy,
        keys: tokenKeys2,
        flush
      };
    };
    function getDefaultComponentToken(component, token2, getDefaultToken) {
      if (typeof getDefaultToken === "function") {
        var _token$component;
        return getDefaultToken(merge(token2, (_token$component = token2[component]) !== null && _token$component !== void 0 ? _token$component : {}));
      }
      return getDefaultToken !== null && getDefaultToken !== void 0 ? getDefaultToken : {};
    }
    function genMaxMin(type) {
      if (type === "js") {
        return {
          max: Math.max,
          min: Math.min
        };
      }
      return {
        max: function max() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return "max(".concat(args.map(function(value) {
            return unit$1(value);
          }).join(","), ")");
        },
        min: function min() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return "min(".concat(args.map(function(value) {
            return unit$1(value);
          }).join(","), ")");
        }
      };
    }
    var BEAT_LIMIT = 1e3 * 60 * 10;
    var ArrayKeyMap = /* @__PURE__ */ function() {
      function ArrayKeyMap2() {
        _classCallCheck(this, ArrayKeyMap2);
        _defineProperty(this, "map", /* @__PURE__ */ new Map());
        _defineProperty(this, "objectIDMap", /* @__PURE__ */ new WeakMap());
        _defineProperty(this, "nextID", 0);
        _defineProperty(this, "lastAccessBeat", /* @__PURE__ */ new Map());
        _defineProperty(this, "accessBeat", 0);
      }
      _createClass(ArrayKeyMap2, [{
        key: "set",
        value: function set2(keys2, value) {
          this.clear();
          var compositeKey = this.getCompositeKey(keys2);
          this.map.set(compositeKey, value);
          this.lastAccessBeat.set(compositeKey, Date.now());
        }
      }, {
        key: "get",
        value: function get2(keys2) {
          var compositeKey = this.getCompositeKey(keys2);
          var cache = this.map.get(compositeKey);
          this.lastAccessBeat.set(compositeKey, Date.now());
          this.accessBeat += 1;
          return cache;
        }
      }, {
        key: "getCompositeKey",
        value: function getCompositeKey(keys2) {
          var _this = this;
          var ids = keys2.map(function(key) {
            if (key && _typeof(key) === "object") {
              return "obj_".concat(_this.getObjectID(key));
            }
            return "".concat(_typeof(key), "_").concat(key);
          });
          return ids.join("|");
        }
      }, {
        key: "getObjectID",
        value: function getObjectID(obj) {
          if (this.objectIDMap.has(obj)) {
            return this.objectIDMap.get(obj);
          }
          var id2 = this.nextID;
          this.objectIDMap.set(obj, id2);
          this.nextID += 1;
          return id2;
        }
      }, {
        key: "clear",
        value: function clear() {
          var _this2 = this;
          if (this.accessBeat > 1e4) {
            var now = Date.now();
            this.lastAccessBeat.forEach(function(beat, key) {
              if (now - beat > BEAT_LIMIT) {
                _this2.map.delete(key);
                _this2.lastAccessBeat.delete(key);
              }
            });
            this.accessBeat = 0;
          }
        }
      }]);
      return ArrayKeyMap2;
    }();
    var uniqueMap = new ArrayKeyMap();
    function useUniqueMemo(memoFn, deps) {
      return ReactExports.useMemo(function() {
        var cachedValue = uniqueMap.get(deps);
        if (cachedValue) {
          return cachedValue;
        }
        var newValue = memoFn();
        uniqueMap.set(deps, newValue);
        return newValue;
      }, deps);
    }
    var useDefaultCSP = function useDefaultCSP2() {
      return {};
    };
    function genStyleUtils(config) {
      var _config$useCSP = config.useCSP, useCSP = _config$useCSP === void 0 ? useDefaultCSP : _config$useCSP, useToken2 = config.useToken, usePrefix = config.usePrefix, getResetStyles = config.getResetStyles, getCommonStyle = config.getCommonStyle, getCompUnitless = config.getCompUnitless;
      function genStyleHooks2(component, styleFn, getDefaultToken, options) {
        var componentName = Array.isArray(component) ? component[0] : component;
        function prefixToken(key) {
          return "".concat(String(componentName)).concat(key.slice(0, 1).toUpperCase()).concat(key.slice(1));
        }
        var originUnitless = (options === null || options === void 0 ? void 0 : options.unitless) || {};
        var originCompUnitless = typeof getCompUnitless === "function" ? getCompUnitless(component) : {};
        var compUnitless = _objectSpread2(_objectSpread2({}, originCompUnitless), {}, _defineProperty({}, prefixToken("zIndexPopup"), true));
        Object.keys(originUnitless).forEach(function(key) {
          compUnitless[prefixToken(key)] = originUnitless[key];
        });
        var mergedOptions = _objectSpread2(_objectSpread2({}, options), {}, {
          unitless: compUnitless,
          prefixToken
        });
        var useStyle2 = genComponentStyleHook2(component, styleFn, getDefaultToken, mergedOptions);
        var useCSSVar = genCSSVarRegister(componentName, getDefaultToken, mergedOptions);
        return function(prefixCls) {
          var rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
          var _useStyle = useStyle2(prefixCls, rootCls), _useStyle2 = _slicedToArray(_useStyle, 2), hashId = _useStyle2[1];
          var _useCSSVar = useCSSVar(rootCls), _useCSSVar2 = _slicedToArray(_useCSSVar, 2), wrapCSSVar = _useCSSVar2[0], cssVarCls = _useCSSVar2[1];
          return [wrapCSSVar, hashId, cssVarCls];
        };
      }
      function genCSSVarRegister(component, getDefaultToken, options) {
        var compUnitless = options.unitless, _options$injectStyle = options.injectStyle, injectStyle = _options$injectStyle === void 0 ? true : _options$injectStyle, prefixToken = options.prefixToken, ignore2 = options.ignore;
        var CSSVarRegister = function CSSVarRegister2(_ref) {
          var rootCls = _ref.rootCls, _ref$cssVar = _ref.cssVar, cssVar = _ref$cssVar === void 0 ? {} : _ref$cssVar;
          var _useToken = useToken2(), realToken = _useToken.realToken;
          useCSSVarRegister({
            path: [component],
            prefix: cssVar.prefix,
            key: cssVar.key,
            unitless: compUnitless,
            ignore: ignore2,
            token: realToken,
            scope: rootCls
          }, function() {
            var defaultToken = getDefaultComponentToken(component, realToken, getDefaultToken);
            var componentToken = getComponentToken(component, realToken, defaultToken, {
              deprecatedTokens: options === null || options === void 0 ? void 0 : options.deprecatedTokens
            });
            Object.keys(defaultToken).forEach(function(key) {
              componentToken[prefixToken(key)] = componentToken[key];
              delete componentToken[key];
            });
            return componentToken;
          });
          return null;
        };
        var useCSSVar = function useCSSVar2(rootCls) {
          var _useToken2 = useToken2(), cssVar = _useToken2.cssVar;
          return [function(node2) {
            return injectStyle && cssVar ? /* @__PURE__ */ ReactExports.createElement(ReactExports.Fragment, null, /* @__PURE__ */ ReactExports.createElement(CSSVarRegister, {
              rootCls,
              cssVar,
              component
            }), node2) : node2;
          }, cssVar === null || cssVar === void 0 ? void 0 : cssVar.key];
        };
        return useCSSVar;
      }
      function genComponentStyleHook2(componentName, styleFn, getDefaultToken) {
        var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        var cells = Array.isArray(componentName) ? componentName : [componentName, componentName];
        var _cells = _slicedToArray(cells, 1), component = _cells[0];
        var concatComponent = cells.join("-");
        var mergedLayer = config.layer || {
          name: "antd"
        };
        return function(prefixCls) {
          var rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
          var _useToken3 = useToken2(), theme = _useToken3.theme, realToken = _useToken3.realToken, hashId = _useToken3.hashId, token2 = _useToken3.token, cssVar = _useToken3.cssVar;
          var _usePrefix = usePrefix(), rootPrefixCls = _usePrefix.rootPrefixCls, iconPrefixCls = _usePrefix.iconPrefixCls;
          var csp = useCSP();
          var type = cssVar ? "css" : "js";
          var calc = useUniqueMemo(function() {
            var unitlessCssVar = /* @__PURE__ */ new Set();
            if (cssVar) {
              Object.keys(options.unitless || {}).forEach(function(key) {
                unitlessCssVar.add(token2CSSVar(key, cssVar.prefix));
                unitlessCssVar.add(token2CSSVar(key, getCompVarPrefix(component, cssVar.prefix)));
              });
            }
            return genCalc(type, unitlessCssVar);
          }, [type, component, cssVar === null || cssVar === void 0 ? void 0 : cssVar.prefix]);
          var _genMaxMin = genMaxMin(type), max = _genMaxMin.max, min = _genMaxMin.min;
          var sharedConfig = {
            theme,
            token: token2,
            hashId,
            nonce: function nonce() {
              return csp.nonce;
            },
            clientOnly: options.clientOnly,
            layer: mergedLayer,
            // antd is always at top of styles
            order: options.order || -999
          };
          useStyleRegister(_objectSpread2(_objectSpread2({}, sharedConfig), {}, {
            clientOnly: false,
            path: ["Shared", rootPrefixCls]
          }), function() {
            return typeof getResetStyles === "function" ? getResetStyles(token2) : [];
          });
          var wrapSSR = useStyleRegister(_objectSpread2(_objectSpread2({}, sharedConfig), {}, {
            path: [concatComponent, prefixCls, iconPrefixCls]
          }), function() {
            if (options.injectStyle === false) {
              return [];
            }
            var _statisticToken = statisticToken(token2), proxyToken = _statisticToken.token, flush = _statisticToken.flush;
            var defaultComponentToken = getDefaultComponentToken(component, realToken, getDefaultToken);
            var componentCls = ".".concat(prefixCls);
            var componentToken = getComponentToken(component, realToken, defaultComponentToken, {
              deprecatedTokens: options.deprecatedTokens
            });
            if (cssVar && defaultComponentToken && _typeof(defaultComponentToken) === "object") {
              Object.keys(defaultComponentToken).forEach(function(key) {
                defaultComponentToken[key] = "var(".concat(token2CSSVar(key, getCompVarPrefix(component, cssVar.prefix)), ")");
              });
            }
            var mergedToken = merge(proxyToken, {
              componentCls,
              prefixCls,
              iconCls: ".".concat(iconPrefixCls),
              antCls: ".".concat(rootPrefixCls),
              calc,
              // @ts-ignore
              max,
              // @ts-ignore
              min
            }, cssVar ? defaultComponentToken : componentToken);
            var styleInterpolation = styleFn(mergedToken, {
              hashId,
              prefixCls,
              rootPrefixCls,
              iconPrefixCls
            });
            flush(component, componentToken);
            var commonStyle = typeof getCommonStyle === "function" ? getCommonStyle(mergedToken, prefixCls, rootCls, options.resetFont) : null;
            return [options.resetStyle === false ? null : commonStyle, styleInterpolation];
          });
          return [wrapSSR, hashId];
        };
      }
      function genSubStyleComponent2(componentName, styleFn, getDefaultToken) {
        var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        var useStyle2 = genComponentStyleHook2(componentName, styleFn, getDefaultToken, _objectSpread2({
          resetStyle: false,
          // Sub Style should default after root one
          order: -998
        }, options));
        var StyledComponent = function StyledComponent2(_ref2) {
          var prefixCls = _ref2.prefixCls, _ref2$rootCls = _ref2.rootCls, rootCls = _ref2$rootCls === void 0 ? prefixCls : _ref2$rootCls;
          useStyle2(prefixCls, rootCls);
          return null;
        };
        return StyledComponent;
      }
      return {
        genStyleHooks: genStyleHooks2,
        genSubStyleComponent: genSubStyleComponent2,
        genComponentStyleHook: genComponentStyleHook2
      };
    }
    const version$1 = "5.21.2";
    function isStableColor(color) {
      return color >= 0 && color <= 255;
    }
    function getAlphaColor(frontColor, backgroundColor) {
      const {
        r: fR,
        g: fG,
        b: fB,
        a: originAlpha
      } = new TinyColor(frontColor).toRgb();
      if (originAlpha < 1) {
        return frontColor;
      }
      const {
        r: bR,
        g: bG,
        b: bB
      } = new TinyColor(backgroundColor).toRgb();
      for (let fA = 0.01; fA <= 1; fA += 0.01) {
        const r2 = Math.round((fR - bR * (1 - fA)) / fA);
        const g2 = Math.round((fG - bG * (1 - fA)) / fA);
        const b2 = Math.round((fB - bB * (1 - fA)) / fA);
        if (isStableColor(r2) && isStableColor(g2) && isStableColor(b2)) {
          return new TinyColor({
            r: r2,
            g: g2,
            b: b2,
            a: Math.round(fA * 100) / 100
          }).toRgbString();
        }
      }
      return new TinyColor({
        r: fR,
        g: fG,
        b: fB,
        a: 1
      }).toRgbString();
    }
    var __rest$4 = function(s, e2) {
      var t2 = {};
      for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
      }
      return t2;
    };
    function formatToken(derivativeToken) {
      const {
        override
      } = derivativeToken, restToken = __rest$4(derivativeToken, ["override"]);
      const overrideTokens = Object.assign({}, override);
      Object.keys(seedToken).forEach((token2) => {
        delete overrideTokens[token2];
      });
      const mergedToken = Object.assign(Object.assign({}, restToken), overrideTokens);
      const screenXS = 480;
      const screenSM = 576;
      const screenMD = 768;
      const screenLG = 992;
      const screenXL = 1200;
      const screenXXL = 1600;
      if (mergedToken.motion === false) {
        const fastDuration = "0s";
        mergedToken.motionDurationFast = fastDuration;
        mergedToken.motionDurationMid = fastDuration;
        mergedToken.motionDurationSlow = fastDuration;
      }
      const aliasToken = Object.assign(Object.assign(Object.assign({}, mergedToken), {
        // ============== Background ============== //
        colorFillContent: mergedToken.colorFillSecondary,
        colorFillContentHover: mergedToken.colorFill,
        colorFillAlter: mergedToken.colorFillQuaternary,
        colorBgContainerDisabled: mergedToken.colorFillTertiary,
        // ============== Split ============== //
        colorBorderBg: mergedToken.colorBgContainer,
        colorSplit: getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
        // ============== Text ============== //
        colorTextPlaceholder: mergedToken.colorTextQuaternary,
        colorTextDisabled: mergedToken.colorTextQuaternary,
        colorTextHeading: mergedToken.colorText,
        colorTextLabel: mergedToken.colorTextSecondary,
        colorTextDescription: mergedToken.colorTextTertiary,
        colorTextLightSolid: mergedToken.colorWhite,
        colorHighlight: mergedToken.colorError,
        colorBgTextHover: mergedToken.colorFillSecondary,
        colorBgTextActive: mergedToken.colorFill,
        colorIcon: mergedToken.colorTextTertiary,
        colorIconHover: mergedToken.colorText,
        colorErrorOutline: getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
        colorWarningOutline: getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
        // Font
        fontSizeIcon: mergedToken.fontSizeSM,
        // Line
        lineWidthFocus: mergedToken.lineWidth * 3,
        // Control
        lineWidth: mergedToken.lineWidth,
        controlOutlineWidth: mergedToken.lineWidth * 2,
        // Checkbox size and expand icon size
        controlInteractiveSize: mergedToken.controlHeight / 2,
        controlItemBgHover: mergedToken.colorFillTertiary,
        controlItemBgActive: mergedToken.colorPrimaryBg,
        controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
        controlItemBgActiveDisabled: mergedToken.colorFill,
        controlTmpOutline: mergedToken.colorFillQuaternary,
        controlOutline: getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
        lineType: mergedToken.lineType,
        borderRadius: mergedToken.borderRadius,
        borderRadiusXS: mergedToken.borderRadiusXS,
        borderRadiusSM: mergedToken.borderRadiusSM,
        borderRadiusLG: mergedToken.borderRadiusLG,
        fontWeightStrong: 600,
        opacityLoading: 0.65,
        linkDecoration: "none",
        linkHoverDecoration: "none",
        linkFocusDecoration: "none",
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
        paddingXXS: mergedToken.sizeXXS,
        paddingXS: mergedToken.sizeXS,
        paddingSM: mergedToken.sizeSM,
        padding: mergedToken.size,
        paddingMD: mergedToken.sizeMD,
        paddingLG: mergedToken.sizeLG,
        paddingXL: mergedToken.sizeXL,
        paddingContentHorizontalLG: mergedToken.sizeLG,
        paddingContentVerticalLG: mergedToken.sizeMS,
        paddingContentHorizontal: mergedToken.sizeMS,
        paddingContentVertical: mergedToken.sizeSM,
        paddingContentHorizontalSM: mergedToken.size,
        paddingContentVerticalSM: mergedToken.sizeXS,
        marginXXS: mergedToken.sizeXXS,
        marginXS: mergedToken.sizeXS,
        marginSM: mergedToken.sizeSM,
        margin: mergedToken.size,
        marginMD: mergedToken.sizeMD,
        marginLG: mergedToken.sizeLG,
        marginXL: mergedToken.sizeXL,
        marginXXL: mergedToken.sizeXXL,
        boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
        screenXS,
        screenXSMin: screenXS,
        screenXSMax: screenSM - 1,
        screenSM,
        screenSMMin: screenSM,
        screenSMMax: screenMD - 1,
        screenMD,
        screenMDMin: screenMD,
        screenMDMax: screenLG - 1,
        screenLG,
        screenLGMin: screenLG,
        screenLGMax: screenXL - 1,
        screenXL,
        screenXLMin: screenXL,
        screenXLMax: screenXXL - 1,
        screenXXL,
        screenXXLMin: screenXXL,
        boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
        boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
        boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
      }), overrideTokens);
      return aliasToken;
    }
    var __rest$3 = function(s, e2) {
      var t2 = {};
      for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
      }
      return t2;
    };
    const unitless = {
      lineHeight: true,
      lineHeightSM: true,
      lineHeightLG: true,
      lineHeightHeading1: true,
      lineHeightHeading2: true,
      lineHeightHeading3: true,
      lineHeightHeading4: true,
      lineHeightHeading5: true,
      opacityLoading: true,
      fontWeightStrong: true,
      zIndexPopupBase: true,
      zIndexBase: true,
      opacityImage: true
    };
    const ignore = {
      size: true,
      sizeSM: true,
      sizeLG: true,
      sizeMD: true,
      sizeXS: true,
      sizeXXS: true,
      sizeMS: true,
      sizeXL: true,
      sizeXXL: true,
      sizeUnit: true,
      sizeStep: true,
      motionBase: true,
      motionUnit: true
    };
    const preserve = {
      screenXS: true,
      screenXSMin: true,
      screenXSMax: true,
      screenSM: true,
      screenSMMin: true,
      screenSMMax: true,
      screenMD: true,
      screenMDMin: true,
      screenMDMax: true,
      screenLG: true,
      screenLGMin: true,
      screenLGMax: true,
      screenXL: true,
      screenXLMin: true,
      screenXLMax: true,
      screenXXL: true,
      screenXXLMin: true
    };
    const getComputedToken = (originToken, overrideToken, theme) => {
      const derivativeToken = theme.getDerivativeToken(originToken);
      const {
        override
      } = overrideToken, components = __rest$3(overrideToken, ["override"]);
      let mergedDerivativeToken = Object.assign(Object.assign({}, derivativeToken), {
        override
      });
      mergedDerivativeToken = formatToken(mergedDerivativeToken);
      if (components) {
        Object.entries(components).forEach((_ref) => {
          let [key, value] = _ref;
          const {
            theme: componentTheme
          } = value, componentTokens = __rest$3(value, ["theme"]);
          let mergedComponentToken = componentTokens;
          if (componentTheme) {
            mergedComponentToken = getComputedToken(Object.assign(Object.assign({}, mergedDerivativeToken), componentTokens), {
              override: componentTokens
            }, componentTheme);
          }
          mergedDerivativeToken[key] = mergedComponentToken;
        });
      }
      return mergedDerivativeToken;
    };
    function useToken() {
      const {
        token: rootDesignToken,
        hashed,
        theme,
        override,
        cssVar
      } = ReactExports.useContext(DesignTokenContext);
      const salt = `${version$1}-${hashed || ""}`;
      const mergedTheme = theme || defaultTheme;
      const [token2, hashId, realToken] = useCacheToken(mergedTheme, [seedToken, rootDesignToken], {
        salt,
        override,
        getComputedToken,
        // formatToken will not be consumed after 1.15.0 with getComputedToken.
        // But token will break if @ant-design/cssinjs is under 1.15.0 without it
        formatToken,
        cssVar: cssVar && {
          prefix: cssVar.prefix,
          key: cssVar.key,
          unitless,
          ignore,
          preserve
        }
      });
      return [mergedTheme, realToken, hashed ? hashId : "", token2, cssVar];
    }
    const resetComponent = function(token2) {
      let needInheritFontFamily = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      return {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        color: token2.colorText,
        fontSize: token2.fontSize,
        // font-variant: @font-variant-base;
        lineHeight: token2.lineHeight,
        listStyle: "none",
        // font-feature-settings: @font-feature-settings-base;
        fontFamily: needInheritFontFamily ? "inherit" : token2.fontFamily
      };
    };
    const resetIcon = () => ({
      display: "inline-flex",
      alignItems: "center",
      color: "inherit",
      fontStyle: "normal",
      lineHeight: 0,
      textAlign: "center",
      textTransform: "none",
      // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
      verticalAlign: "-0.125em",
      textRendering: "optimizeLegibility",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      "> *": {
        lineHeight: 1
      },
      svg: {
        display: "inline-block"
      }
    });
    const genLinkStyle = (token2) => ({
      a: {
        color: token2.colorLink,
        textDecoration: token2.linkDecoration,
        backgroundColor: "transparent",
        // remove the gray background on active links in IE 10.
        outline: "none",
        cursor: "pointer",
        transition: `color ${token2.motionDurationSlow}`,
        "-webkit-text-decoration-skip": "objects",
        // remove gaps in links underline in iOS 8+ and Safari 8+.
        "&:hover": {
          color: token2.colorLinkHover
        },
        "&:active": {
          color: token2.colorLinkActive
        },
        "&:active, &:hover": {
          textDecoration: token2.linkHoverDecoration,
          outline: 0
        },
        // https://github.com/ant-design/ant-design/issues/22503
        "&:focus": {
          textDecoration: token2.linkFocusDecoration,
          outline: 0
        },
        "&[disabled]": {
          color: token2.colorTextDisabled,
          cursor: "not-allowed"
        }
      }
    });
    const genCommonStyle = (token2, componentPrefixCls, rootCls, resetFont) => {
      const prefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
      const rootPrefixSelector = rootCls ? `.${rootCls}` : prefixSelector;
      const resetStyle = {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      };
      let resetFontStyle = {};
      if (resetFont !== false) {
        resetFontStyle = {
          fontFamily: token2.fontFamily,
          fontSize: token2.fontSize
        };
      }
      return {
        [rootPrefixSelector]: Object.assign(Object.assign(Object.assign({}, resetFontStyle), resetStyle), {
          [prefixSelector]: resetStyle
        })
      };
    };
    const genFocusOutline = (token2) => ({
      outline: `${unit$1(token2.lineWidthFocus)} solid ${token2.colorPrimaryBorder}`,
      outlineOffset: 1,
      transition: "outline-offset 0s, outline 0s"
    });
    const genFocusStyle = (token2) => ({
      "&:focus-visible": Object.assign({}, genFocusOutline(token2))
    });
    const useResetIconStyle = (iconPrefixCls, csp) => {
      const [theme, token2] = useToken();
      return useStyleRegister({
        theme,
        token: token2,
        hashId: "",
        path: ["ant-design-icons", iconPrefixCls],
        nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce,
        layer: {
          name: "antd"
        }
      }, () => [{
        [`.${iconPrefixCls}`]: Object.assign(Object.assign({}, resetIcon()), {
          [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
            display: "block"
          }
        })
      }]);
    };
    const {
      genStyleHooks,
      genComponentStyleHook,
      genSubStyleComponent
    } = genStyleUtils({
      usePrefix: () => {
        const {
          getPrefixCls,
          iconPrefixCls
        } = reactExports.useContext(ConfigContext);
        const rootPrefixCls = getPrefixCls();
        return {
          rootPrefixCls,
          iconPrefixCls
        };
      },
      useToken: () => {
        const [theme, realToken, hashId, token2, cssVar] = useToken();
        return {
          theme,
          realToken,
          hashId,
          token: token2,
          cssVar
        };
      },
      useCSP: () => {
        const {
          csp,
          iconPrefixCls
        } = reactExports.useContext(ConfigContext);
        useResetIconStyle(iconPrefixCls, csp);
        return csp !== null && csp !== void 0 ? csp : {};
      },
      getResetStyles: (token2) => [{
        "&": genLinkStyle(token2)
      }],
      getCommonStyle: genCommonStyle,
      getCompUnitless: () => unitless
    });
    const fullClone$1 = Object.assign({}, React$1);
    const {
      useId
    } = fullClone$1;
    const useEmptyId = () => "";
    const useThemeKey = typeof useId === "undefined" ? useEmptyId : useId;
    function useTheme(theme, parentTheme, config) {
      var _a2;
      const themeConfig = theme || {};
      const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? Object.assign(Object.assign({}, defaultConfig), {
        hashed: (_a2 = parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.hashed) !== null && _a2 !== void 0 ? _a2 : defaultConfig.hashed,
        cssVar: parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.cssVar
      }) : parentTheme;
      const themeKey = useThemeKey();
      return useMemo(() => {
        var _a22, _b2;
        if (!theme) {
          return parentTheme;
        }
        const mergedComponents = Object.assign({}, parentThemeConfig.components);
        Object.keys(theme.components || {}).forEach((componentName) => {
          mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
        });
        const cssVarKey = `css-var-${themeKey.replace(/:/g, "")}`;
        const mergedCssVar = ((_a22 = themeConfig.cssVar) !== null && _a22 !== void 0 ? _a22 : parentThemeConfig.cssVar) && Object.assign(Object.assign(Object.assign({
          prefix: config === null || config === void 0 ? void 0 : config.prefixCls
        }, typeof parentThemeConfig.cssVar === "object" ? parentThemeConfig.cssVar : {}), typeof themeConfig.cssVar === "object" ? themeConfig.cssVar : {}), {
          key: typeof themeConfig.cssVar === "object" && ((_b2 = themeConfig.cssVar) === null || _b2 === void 0 ? void 0 : _b2.key) || cssVarKey
        });
        return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
          token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
          components: mergedComponents,
          cssVar: mergedCssVar
        });
      }, [themeConfig, parentThemeConfig], (prev2, next2) => prev2.some((prevTheme, index) => {
        const nextTheme = next2[index];
        return !isEqual(prevTheme, nextTheme, true);
      }));
    }
    var _excluded$5 = ["children"];
    var Context = /* @__PURE__ */ reactExports.createContext({});
    function MotionProvider(_ref) {
      var children = _ref.children, props = _objectWithoutProperties(_ref, _excluded$5);
      return /* @__PURE__ */ reactExports.createElement(Context.Provider, {
        value: props
      }, children);
    }
    var DomWrapper = /* @__PURE__ */ function(_React$Component) {
      _inherits(DomWrapper2, _React$Component);
      var _super = _createSuper(DomWrapper2);
      function DomWrapper2() {
        _classCallCheck(this, DomWrapper2);
        return _super.apply(this, arguments);
      }
      _createClass(DomWrapper2, [{
        key: "render",
        value: function render2() {
          return this.props.children;
        }
      }]);
      return DomWrapper2;
    }(reactExports.Component);
    function useSyncState(defaultValue) {
      var _React$useReducer = reactExports.useReducer(function(x2) {
        return x2 + 1;
      }, 0), _React$useReducer2 = _slicedToArray(_React$useReducer, 2), forceUpdate = _React$useReducer2[1];
      var currentValueRef = reactExports.useRef(defaultValue);
      var getValue2 = useEvent(function() {
        return currentValueRef.current;
      });
      var setValue = useEvent(function(updater) {
        currentValueRef.current = typeof updater === "function" ? updater(currentValueRef.current) : updater;
        forceUpdate();
      });
      return [getValue2, setValue];
    }
    var STATUS_NONE = "none";
    var STATUS_APPEAR = "appear";
    var STATUS_ENTER = "enter";
    var STATUS_LEAVE = "leave";
    var STEP_NONE = "none";
    var STEP_PREPARE = "prepare";
    var STEP_START = "start";
    var STEP_ACTIVE = "active";
    var STEP_ACTIVATED = "end";
    var STEP_PREPARED = "prepared";
    function makePrefixMap(styleProp, eventName) {
      var prefixes = {};
      prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
      prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
      prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
      prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
      prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
      return prefixes;
    }
    function getVendorPrefixes(domSupport, win) {
      var prefixes = {
        animationend: makePrefixMap("Animation", "AnimationEnd"),
        transitionend: makePrefixMap("Transition", "TransitionEnd")
      };
      if (domSupport) {
        if (!("AnimationEvent" in win)) {
          delete prefixes.animationend.animation;
        }
        if (!("TransitionEvent" in win)) {
          delete prefixes.transitionend.transition;
        }
      }
      return prefixes;
    }
    var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== "undefined" ? window : {});
    var style = {};
    if (canUseDom()) {
      var _document$createEleme = document.createElement("div");
      style = _document$createEleme.style;
    }
    var prefixedEventNames = {};
    function getVendorPrefixedEventName(eventName) {
      if (prefixedEventNames[eventName]) {
        return prefixedEventNames[eventName];
      }
      var prefixMap = vendorPrefixes[eventName];
      if (prefixMap) {
        var stylePropList = Object.keys(prefixMap);
        var len = stylePropList.length;
        for (var i = 0; i < len; i += 1) {
          var styleProp = stylePropList[i];
          if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
            prefixedEventNames[eventName] = prefixMap[styleProp];
            return prefixedEventNames[eventName];
          }
        }
      }
      return "";
    }
    var internalAnimationEndName = getVendorPrefixedEventName("animationend");
    var internalTransitionEndName = getVendorPrefixedEventName("transitionend");
    var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
    var animationEndName = internalAnimationEndName || "animationend";
    var transitionEndName = internalTransitionEndName || "transitionend";
    function getTransitionName(transitionName, transitionType) {
      if (!transitionName) return null;
      if (_typeof(transitionName) === "object") {
        var type = transitionType.replace(/-\w/g, function(match2) {
          return match2[1].toUpperCase();
        });
        return transitionName[type];
      }
      return "".concat(transitionName, "-").concat(transitionType);
    }
    const useDomMotionEvents = function(onInternalMotionEnd) {
      var cacheElementRef = reactExports.useRef();
      function removeMotionEvents(element) {
        if (element) {
          element.removeEventListener(transitionEndName, onInternalMotionEnd);
          element.removeEventListener(animationEndName, onInternalMotionEnd);
        }
      }
      function patchMotionEvents(element) {
        if (cacheElementRef.current && cacheElementRef.current !== element) {
          removeMotionEvents(cacheElementRef.current);
        }
        if (element && element !== cacheElementRef.current) {
          element.addEventListener(transitionEndName, onInternalMotionEnd);
          element.addEventListener(animationEndName, onInternalMotionEnd);
          cacheElementRef.current = element;
        }
      }
      reactExports.useEffect(function() {
        return function() {
          removeMotionEvents(cacheElementRef.current);
        };
      }, []);
      return [patchMotionEvents, removeMotionEvents];
    };
    var useIsomorphicLayoutEffect = canUseDom() ? reactExports.useLayoutEffect : reactExports.useEffect;
    const useNextFrame = function() {
      var nextFrameRef = reactExports.useRef(null);
      function cancelNextFrame() {
        wrapperRaf.cancel(nextFrameRef.current);
      }
      function nextFrame(callback) {
        var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
        cancelNextFrame();
        var nextFrameId = wrapperRaf(function() {
          if (delay <= 1) {
            callback({
              isCanceled: function isCanceled() {
                return nextFrameId !== nextFrameRef.current;
              }
            });
          } else {
            nextFrame(callback, delay - 1);
          }
        });
        nextFrameRef.current = nextFrameId;
      }
      reactExports.useEffect(function() {
        return function() {
          cancelNextFrame();
        };
      }, []);
      return [nextFrame, cancelNextFrame];
    };
    var FULL_STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
    var SIMPLE_STEP_QUEUE = [STEP_PREPARE, STEP_PREPARED];
    var SkipStep = false;
    var DoStep = true;
    function isActive(step) {
      return step === STEP_ACTIVE || step === STEP_ACTIVATED;
    }
    const useStepQueue = function(status, prepareOnly, callback) {
      var _useState = useSafeState(STEP_NONE), _useState2 = _slicedToArray(_useState, 2), step = _useState2[0], setStep = _useState2[1];
      var _useNextFrame = useNextFrame(), _useNextFrame2 = _slicedToArray(_useNextFrame, 2), nextFrame = _useNextFrame2[0], cancelNextFrame = _useNextFrame2[1];
      function startQueue() {
        setStep(STEP_PREPARE, true);
      }
      var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
      useIsomorphicLayoutEffect(function() {
        if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
          var index = STEP_QUEUE.indexOf(step);
          var nextStep = STEP_QUEUE[index + 1];
          var result = callback(step);
          if (result === SkipStep) {
            setStep(nextStep, true);
          } else if (nextStep) {
            nextFrame(function(info) {
              function doNext() {
                if (info.isCanceled()) return;
                setStep(nextStep, true);
              }
              if (result === true) {
                doNext();
              } else {
                Promise.resolve(result).then(doNext);
              }
            });
          }
        }
      }, [status, step]);
      reactExports.useEffect(function() {
        return function() {
          cancelNextFrame();
        };
      }, []);
      return [startQueue, step];
    };
    function useStatus(supportMotion, visible, getElement, _ref) {
      var _ref$motionEnter = _ref.motionEnter, motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter, _ref$motionAppear = _ref.motionAppear, motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear, _ref$motionLeave = _ref.motionLeave, motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave, motionDeadline = _ref.motionDeadline, motionLeaveImmediately = _ref.motionLeaveImmediately, onAppearPrepare = _ref.onAppearPrepare, onEnterPrepare = _ref.onEnterPrepare, onLeavePrepare = _ref.onLeavePrepare, onAppearStart = _ref.onAppearStart, onEnterStart = _ref.onEnterStart, onLeaveStart = _ref.onLeaveStart, onAppearActive = _ref.onAppearActive, onEnterActive = _ref.onEnterActive, onLeaveActive = _ref.onLeaveActive, onAppearEnd = _ref.onAppearEnd, onEnterEnd = _ref.onEnterEnd, onLeaveEnd = _ref.onLeaveEnd, onVisibleChanged = _ref.onVisibleChanged;
      var _useState = useSafeState(), _useState2 = _slicedToArray(_useState, 2), asyncVisible = _useState2[0], setAsyncVisible = _useState2[1];
      var _useSyncState = useSyncState(STATUS_NONE), _useSyncState2 = _slicedToArray(_useSyncState, 2), getStatus = _useSyncState2[0], setStatus = _useSyncState2[1];
      var _useState3 = useSafeState(null), _useState4 = _slicedToArray(_useState3, 2), style2 = _useState4[0], setStyle = _useState4[1];
      var currentStatus = getStatus();
      var mountedRef = reactExports.useRef(false);
      var deadlineRef = reactExports.useRef(null);
      function getDomElement() {
        return getElement();
      }
      var activeRef = reactExports.useRef(false);
      function updateMotionEndStatus() {
        setStatus(STATUS_NONE);
        setStyle(null, true);
      }
      var onInternalMotionEnd = useEvent(function(event) {
        var status = getStatus();
        if (status === STATUS_NONE) {
          return;
        }
        var element = getDomElement();
        if (event && !event.deadline && event.target !== element) {
          return;
        }
        var currentActive = activeRef.current;
        var canEnd;
        if (status === STATUS_APPEAR && currentActive) {
          canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
        } else if (status === STATUS_ENTER && currentActive) {
          canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
        } else if (status === STATUS_LEAVE && currentActive) {
          canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
        }
        if (currentActive && canEnd !== false) {
          updateMotionEndStatus();
        }
      });
      var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd), _useDomMotionEvents2 = _slicedToArray(_useDomMotionEvents, 1), patchMotionEvents = _useDomMotionEvents2[0];
      var getEventHandlers = function getEventHandlers2(targetStatus) {
        switch (targetStatus) {
          case STATUS_APPEAR:
            return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onAppearPrepare), STEP_START, onAppearStart), STEP_ACTIVE, onAppearActive);
          case STATUS_ENTER:
            return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onEnterPrepare), STEP_START, onEnterStart), STEP_ACTIVE, onEnterActive);
          case STATUS_LEAVE:
            return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onLeavePrepare), STEP_START, onLeaveStart), STEP_ACTIVE, onLeaveActive);
          default:
            return {};
        }
      };
      var eventHandlers = reactExports.useMemo(function() {
        return getEventHandlers(currentStatus);
      }, [currentStatus]);
      var _useStepQueue = useStepQueue(currentStatus, !supportMotion, function(newStep) {
        if (newStep === STEP_PREPARE) {
          var onPrepare = eventHandlers[STEP_PREPARE];
          if (!onPrepare) {
            return SkipStep;
          }
          return onPrepare(getDomElement());
        }
        if (step in eventHandlers) {
          var _eventHandlers$step;
          setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
        }
        if (step === STEP_ACTIVE && currentStatus !== STATUS_NONE) {
          patchMotionEvents(getDomElement());
          if (motionDeadline > 0) {
            clearTimeout(deadlineRef.current);
            deadlineRef.current = setTimeout(function() {
              onInternalMotionEnd({
                deadline: true
              });
            }, motionDeadline);
          }
        }
        if (step === STEP_PREPARED) {
          updateMotionEndStatus();
        }
        return DoStep;
      }), _useStepQueue2 = _slicedToArray(_useStepQueue, 2), startStep = _useStepQueue2[0], step = _useStepQueue2[1];
      var active = isActive(step);
      activeRef.current = active;
      useIsomorphicLayoutEffect(function() {
        setAsyncVisible(visible);
        var isMounted = mountedRef.current;
        mountedRef.current = true;
        var nextStatus;
        if (!isMounted && visible && motionAppear) {
          nextStatus = STATUS_APPEAR;
        }
        if (isMounted && visible && motionEnter) {
          nextStatus = STATUS_ENTER;
        }
        if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
          nextStatus = STATUS_LEAVE;
        }
        var nextEventHandlers = getEventHandlers(nextStatus);
        if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
          setStatus(nextStatus);
          startStep();
        } else {
          setStatus(STATUS_NONE);
        }
      }, [visible]);
      reactExports.useEffect(function() {
        if (
          // Cancel appear
          currentStatus === STATUS_APPEAR && !motionAppear || // Cancel enter
          currentStatus === STATUS_ENTER && !motionEnter || // Cancel leave
          currentStatus === STATUS_LEAVE && !motionLeave
        ) {
          setStatus(STATUS_NONE);
        }
      }, [motionAppear, motionEnter, motionLeave]);
      reactExports.useEffect(function() {
        return function() {
          mountedRef.current = false;
          clearTimeout(deadlineRef.current);
        };
      }, []);
      var firstMountChangeRef = reactExports.useRef(false);
      reactExports.useEffect(function() {
        if (asyncVisible) {
          firstMountChangeRef.current = true;
        }
        if (asyncVisible !== void 0 && currentStatus === STATUS_NONE) {
          if (firstMountChangeRef.current || asyncVisible) {
            onVisibleChanged === null || onVisibleChanged === void 0 || onVisibleChanged(asyncVisible);
          }
          firstMountChangeRef.current = true;
        }
      }, [asyncVisible, currentStatus]);
      var mergedStyle = style2;
      if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
        mergedStyle = _objectSpread2({
          transition: "none"
        }, mergedStyle);
      }
      return [currentStatus, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
    }
    function genCSSMotion(config) {
      var transitionSupport = config;
      if (_typeof(config) === "object") {
        transitionSupport = config.transitionSupport;
      }
      function isSupportTransition(props, contextMotion) {
        return !!(props.motionName && transitionSupport && contextMotion !== false);
      }
      var CSSMotion2 = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
        var _props$visible = props.visible, visible = _props$visible === void 0 ? true : _props$visible, _props$removeOnLeave = props.removeOnLeave, removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave, forceRender = props.forceRender, children = props.children, motionName = props.motionName, leavedClassName = props.leavedClassName, eventProps = props.eventProps;
        var _React$useContext = reactExports.useContext(Context), contextMotion = _React$useContext.motion;
        var supportMotion = isSupportTransition(props, contextMotion);
        var nodeRef = reactExports.useRef();
        var wrapperNodeRef = reactExports.useRef();
        function getDomElement() {
          try {
            return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
          } catch (e2) {
            return null;
          }
        }
        var _useStatus = useStatus(supportMotion, visible, getDomElement, props), _useStatus2 = _slicedToArray(_useStatus, 4), status = _useStatus2[0], statusStep = _useStatus2[1], statusStyle = _useStatus2[2], mergedVisible = _useStatus2[3];
        var renderedRef = reactExports.useRef(mergedVisible);
        if (mergedVisible) {
          renderedRef.current = true;
        }
        var setNodeRef = reactExports.useCallback(function(node2) {
          nodeRef.current = node2;
          fillRef(ref, node2);
        }, [ref]);
        var motionChildren;
        var mergedProps = _objectSpread2(_objectSpread2({}, eventProps), {}, {
          visible
        });
        if (!children) {
          motionChildren = null;
        } else if (status === STATUS_NONE) {
          if (mergedVisible) {
            motionChildren = children(_objectSpread2({}, mergedProps), setNodeRef);
          } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
            motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
              className: leavedClassName
            }), setNodeRef);
          } else if (forceRender || !removeOnLeave && !leavedClassName) {
            motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
              style: {
                display: "none"
              }
            }), setNodeRef);
          } else {
            motionChildren = null;
          }
        } else {
          var statusSuffix;
          if (statusStep === STEP_PREPARE) {
            statusSuffix = "prepare";
          } else if (isActive(statusStep)) {
            statusSuffix = "active";
          } else if (statusStep === STEP_START) {
            statusSuffix = "start";
          }
          var motionCls = getTransitionName(motionName, "".concat(status, "-").concat(statusSuffix));
          motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
            className: classNames(getTransitionName(motionName, status), _defineProperty(_defineProperty({}, motionCls, motionCls && statusSuffix), motionName, typeof motionName === "string")),
            style: statusStyle
          }), setNodeRef);
        }
        if (/* @__PURE__ */ reactExports.isValidElement(motionChildren) && supportRef(motionChildren)) {
          var _ref = motionChildren, originNodeRef = _ref.ref;
          if (!originNodeRef) {
            motionChildren = /* @__PURE__ */ reactExports.cloneElement(motionChildren, {
              ref: setNodeRef
            });
          }
        }
        return /* @__PURE__ */ reactExports.createElement(DomWrapper, {
          ref: wrapperNodeRef
        }, motionChildren);
      });
      CSSMotion2.displayName = "CSSMotion";
      return CSSMotion2;
    }
    const CSSMotion = genCSSMotion(supportTransition);
    var STATUS_ADD = "add";
    var STATUS_KEEP = "keep";
    var STATUS_REMOVE = "remove";
    var STATUS_REMOVED = "removed";
    function wrapKeyToObject(key) {
      var keyObj;
      if (key && _typeof(key) === "object" && "key" in key) {
        keyObj = key;
      } else {
        keyObj = {
          key
        };
      }
      return _objectSpread2(_objectSpread2({}, keyObj), {}, {
        key: String(keyObj.key)
      });
    }
    function parseKeys() {
      var keys2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return keys2.map(wrapKeyToObject);
    }
    function diffKeys() {
      var prevKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var currentKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      var list = [];
      var currentIndex = 0;
      var currentLen = currentKeys.length;
      var prevKeyObjects = parseKeys(prevKeys);
      var currentKeyObjects = parseKeys(currentKeys);
      prevKeyObjects.forEach(function(keyObj) {
        var hit = false;
        for (var i = currentIndex; i < currentLen; i += 1) {
          var currentKeyObj = currentKeyObjects[i];
          if (currentKeyObj.key === keyObj.key) {
            if (currentIndex < i) {
              list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function(obj) {
                return _objectSpread2(_objectSpread2({}, obj), {}, {
                  status: STATUS_ADD
                });
              }));
              currentIndex = i;
            }
            list.push(_objectSpread2(_objectSpread2({}, currentKeyObj), {}, {
              status: STATUS_KEEP
            }));
            currentIndex += 1;
            hit = true;
            break;
          }
        }
        if (!hit) {
          list.push(_objectSpread2(_objectSpread2({}, keyObj), {}, {
            status: STATUS_REMOVE
          }));
        }
      });
      if (currentIndex < currentLen) {
        list = list.concat(currentKeyObjects.slice(currentIndex).map(function(obj) {
          return _objectSpread2(_objectSpread2({}, obj), {}, {
            status: STATUS_ADD
          });
        }));
      }
      var keys2 = {};
      list.forEach(function(_ref) {
        var key = _ref.key;
        keys2[key] = (keys2[key] || 0) + 1;
      });
      var duplicatedKeys = Object.keys(keys2).filter(function(key) {
        return keys2[key] > 1;
      });
      duplicatedKeys.forEach(function(matchKey) {
        list = list.filter(function(_ref2) {
          var key = _ref2.key, status = _ref2.status;
          return key !== matchKey || status !== STATUS_REMOVE;
        });
        list.forEach(function(node2) {
          if (node2.key === matchKey) {
            node2.status = STATUS_KEEP;
          }
        });
      });
      return list;
    }
    var _excluded$4 = ["component", "children", "onVisibleChanged", "onAllRemoved"], _excluded2 = ["status"];
    var MOTION_PROP_NAMES = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
    function genCSSMotionList(transitionSupport) {
      var CSSMotion$1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : CSSMotion;
      var CSSMotionList2 = /* @__PURE__ */ function(_React$Component) {
        _inherits(CSSMotionList3, _React$Component);
        var _super = _createSuper(CSSMotionList3);
        function CSSMotionList3() {
          var _this;
          _classCallCheck(this, CSSMotionList3);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _super.call.apply(_super, [this].concat(args));
          _defineProperty(_assertThisInitialized(_this), "state", {
            keyEntities: []
          });
          _defineProperty(_assertThisInitialized(_this), "removeKey", function(removeKey) {
            _this.setState(function(prevState) {
              var nextKeyEntities = prevState.keyEntities.map(function(entity) {
                if (entity.key !== removeKey) return entity;
                return _objectSpread2(_objectSpread2({}, entity), {}, {
                  status: STATUS_REMOVED
                });
              });
              return {
                keyEntities: nextKeyEntities
              };
            }, function() {
              var keyEntities = _this.state.keyEntities;
              var restKeysCount = keyEntities.filter(function(_ref) {
                var status = _ref.status;
                return status !== STATUS_REMOVED;
              }).length;
              if (restKeysCount === 0 && _this.props.onAllRemoved) {
                _this.props.onAllRemoved();
              }
            });
          });
          return _this;
        }
        _createClass(CSSMotionList3, [{
          key: "render",
          value: function render2() {
            var _this2 = this;
            var keyEntities = this.state.keyEntities;
            var _this$props = this.props, component = _this$props.component, children = _this$props.children, _onVisibleChanged = _this$props.onVisibleChanged;
            _this$props.onAllRemoved;
            var restProps = _objectWithoutProperties(_this$props, _excluded$4);
            var Component = component || reactExports.Fragment;
            var motionProps = {};
            MOTION_PROP_NAMES.forEach(function(prop) {
              motionProps[prop] = restProps[prop];
              delete restProps[prop];
            });
            delete restProps.keys;
            return /* @__PURE__ */ reactExports.createElement(Component, restProps, keyEntities.map(function(_ref2, index) {
              var status = _ref2.status, eventProps = _objectWithoutProperties(_ref2, _excluded2);
              var visible = status === STATUS_ADD || status === STATUS_KEEP;
              return /* @__PURE__ */ reactExports.createElement(CSSMotion$1, _extends({}, motionProps, {
                key: eventProps.key,
                visible,
                eventProps,
                onVisibleChanged: function onVisibleChanged(changedVisible) {
                  _onVisibleChanged === null || _onVisibleChanged === void 0 || _onVisibleChanged(changedVisible, {
                    key: eventProps.key
                  });
                  if (!changedVisible) {
                    _this2.removeKey(eventProps.key);
                  }
                }
              }), function(props, ref) {
                return children(_objectSpread2(_objectSpread2({}, props), {}, {
                  index
                }), ref);
              });
            }));
          }
        }], [{
          key: "getDerivedStateFromProps",
          value: function getDerivedStateFromProps(_ref3, _ref4) {
            var keys2 = _ref3.keys;
            var keyEntities = _ref4.keyEntities;
            var parsedKeyObjects = parseKeys(keys2);
            var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
            return {
              keyEntities: mixedKeyEntities.filter(function(entity) {
                var prevEntity = keyEntities.find(function(_ref5) {
                  var key = _ref5.key;
                  return entity.key === key;
                });
                if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
                  return false;
                }
                return true;
              })
            };
          }
        }]);
        return CSSMotionList3;
      }(reactExports.Component);
      _defineProperty(CSSMotionList2, "defaultProps", {
        component: "div"
      });
      return CSSMotionList2;
    }
    const CSSMotionList = genCSSMotionList(supportTransition);
    function MotionWrapper(props) {
      const {
        children
      } = props;
      const [, token2] = useToken();
      const {
        motion
      } = token2;
      const needWrapMotionProviderRef = reactExports.useRef(false);
      needWrapMotionProviderRef.current = needWrapMotionProviderRef.current || motion === false;
      if (needWrapMotionProviderRef.current) {
        return /* @__PURE__ */ reactExports.createElement(MotionProvider, {
          motion
        }, children);
      }
      return children;
    }
    const PropWarning = () => null;
    var __rest$2 = function(s, e2) {
      var t2 = {};
      for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
      }
      return t2;
    };
    const PASSED_PROPS = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
    let globalPrefixCls;
    let globalIconPrefixCls;
    let globalTheme;
    let globalHolderRender;
    function getGlobalPrefixCls() {
      return globalPrefixCls || defaultPrefixCls;
    }
    function getGlobalIconPrefixCls() {
      return globalIconPrefixCls || defaultIconPrefixCls;
    }
    function isLegacyTheme(theme) {
      return Object.keys(theme).some((key) => key.endsWith("Color"));
    }
    const setGlobalConfig = (props) => {
      const {
        prefixCls,
        iconPrefixCls,
        theme,
        holderRender
      } = props;
      if (prefixCls !== void 0) {
        globalPrefixCls = prefixCls;
      }
      if (iconPrefixCls !== void 0) {
        globalIconPrefixCls = iconPrefixCls;
      }
      if ("holderRender" in props) {
        globalHolderRender = holderRender;
      }
      if (theme) {
        if (isLegacyTheme(theme)) {
          registerTheme(getGlobalPrefixCls(), theme);
        } else {
          globalTheme = theme;
        }
      }
    };
    const globalConfig = () => ({
      getPrefixCls: (suffixCls, customizePrefixCls) => {
        if (customizePrefixCls) {
          return customizePrefixCls;
        }
        return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
      },
      getIconPrefixCls: getGlobalIconPrefixCls,
      getRootPrefixCls: () => {
        if (globalPrefixCls) {
          return globalPrefixCls;
        }
        return getGlobalPrefixCls();
      },
      getTheme: () => globalTheme,
      holderRender: globalHolderRender
    });
    const ProviderChildren = (props) => {
      const {
        children,
        csp: customCsp,
        autoInsertSpaceInButton,
        alert,
        anchor,
        form,
        locale: locale2,
        componentSize,
        direction,
        space,
        splitter,
        virtual,
        dropdownMatchSelectWidth,
        popupMatchSelectWidth,
        popupOverflow,
        legacyLocale,
        parentContext,
        iconPrefixCls: customIconPrefixCls,
        theme,
        componentDisabled,
        segmented,
        statistic: statistic2,
        spin,
        calendar,
        carousel,
        cascader,
        collapse,
        typography,
        checkbox,
        descriptions,
        divider,
        drawer,
        skeleton,
        steps,
        image,
        layout,
        list,
        mentions,
        modal,
        progress,
        result,
        slider,
        breadcrumb,
        menu,
        pagination,
        input,
        textArea,
        empty,
        badge,
        radio,
        rate,
        switch: SWITCH,
        transfer,
        avatar,
        message,
        tag,
        table,
        card,
        tabs,
        timeline,
        timePicker,
        upload,
        notification: notification2,
        tree,
        colorPicker,
        datePicker,
        rangePicker,
        flex,
        wave,
        dropdown,
        warning: warningConfig,
        tour,
        floatButtonGroup,
        variant,
        inputNumber,
        treeSelect
      } = props;
      const getPrefixCls = reactExports.useCallback((suffixCls, customizePrefixCls) => {
        const {
          prefixCls
        } = props;
        if (customizePrefixCls) {
          return customizePrefixCls;
        }
        const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
        return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
      }, [parentContext.getPrefixCls, props.prefixCls]);
      const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || defaultIconPrefixCls;
      const csp = customCsp || parentContext.csp;
      useResetIconStyle(iconPrefixCls, csp);
      const mergedTheme = useTheme(theme, parentContext.theme, {
        prefixCls: getPrefixCls("")
      });
      const baseConfig = {
        csp,
        autoInsertSpaceInButton,
        alert,
        anchor,
        locale: locale2 || legacyLocale,
        direction,
        space,
        splitter,
        virtual,
        popupMatchSelectWidth: popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth,
        popupOverflow,
        getPrefixCls,
        iconPrefixCls,
        theme: mergedTheme,
        segmented,
        statistic: statistic2,
        spin,
        calendar,
        carousel,
        cascader,
        collapse,
        typography,
        checkbox,
        descriptions,
        divider,
        drawer,
        skeleton,
        steps,
        image,
        input,
        textArea,
        layout,
        list,
        mentions,
        modal,
        progress,
        result,
        slider,
        breadcrumb,
        menu,
        pagination,
        empty,
        badge,
        radio,
        rate,
        switch: SWITCH,
        transfer,
        avatar,
        message,
        tag,
        table,
        card,
        tabs,
        timeline,
        timePicker,
        upload,
        notification: notification2,
        tree,
        colorPicker,
        datePicker,
        rangePicker,
        flex,
        wave,
        dropdown,
        warning: warningConfig,
        tour,
        floatButtonGroup,
        variant,
        inputNumber,
        treeSelect
      };
      const config = Object.assign({}, parentContext);
      Object.keys(baseConfig).forEach((key) => {
        if (baseConfig[key] !== void 0) {
          config[key] = baseConfig[key];
        }
      });
      PASSED_PROPS.forEach((propName) => {
        const propValue = props[propName];
        if (propValue) {
          config[propName] = propValue;
        }
      });
      if (typeof autoInsertSpaceInButton !== "undefined") {
        config.button = Object.assign({
          autoInsertSpace: autoInsertSpaceInButton
        }, config.button);
      }
      const memoedConfig = useMemo(() => config, config, (prevConfig, currentConfig) => {
        const prevKeys = Object.keys(prevConfig);
        const currentKeys = Object.keys(currentConfig);
        return prevKeys.length !== currentKeys.length || prevKeys.some((key) => prevConfig[key] !== currentConfig[key]);
      });
      const memoIconContextValue = reactExports.useMemo(() => ({
        prefixCls: iconPrefixCls,
        csp
      }), [iconPrefixCls, csp]);
      let childNode = /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(PropWarning, {
        dropdownMatchSelectWidth
      }), children);
      const validateMessages = reactExports.useMemo(() => {
        var _a2, _b, _c, _d;
        return merge$1(((_a2 = localeValues.Form) === null || _a2 === void 0 ? void 0 : _a2.defaultValidateMessages) || {}, ((_c = (_b = memoedConfig.locale) === null || _b === void 0 ? void 0 : _b.Form) === null || _c === void 0 ? void 0 : _c.defaultValidateMessages) || {}, ((_d = memoedConfig.form) === null || _d === void 0 ? void 0 : _d.validateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
      }, [memoedConfig, form === null || form === void 0 ? void 0 : form.validateMessages]);
      if (Object.keys(validateMessages).length > 0) {
        childNode = /* @__PURE__ */ reactExports.createElement(ValidateMessagesContext.Provider, {
          value: validateMessages
        }, childNode);
      }
      if (locale2) {
        childNode = /* @__PURE__ */ reactExports.createElement(LocaleProvider, {
          locale: locale2,
          _ANT_MARK__: ANT_MARK
        }, childNode);
      }
      if (iconPrefixCls || csp) {
        childNode = /* @__PURE__ */ reactExports.createElement(IconContext.Provider, {
          value: memoIconContextValue
        }, childNode);
      }
      if (componentSize) {
        childNode = /* @__PURE__ */ reactExports.createElement(SizeContextProvider, {
          size: componentSize
        }, childNode);
      }
      childNode = /* @__PURE__ */ reactExports.createElement(MotionWrapper, null, childNode);
      const memoTheme = reactExports.useMemo(() => {
        const _a2 = mergedTheme || {}, {
          algorithm,
          token: token2,
          components,
          cssVar
        } = _a2, rest = __rest$2(_a2, ["algorithm", "token", "components", "cssVar"]);
        const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : defaultTheme;
        const parsedComponents = {};
        Object.entries(components || {}).forEach((_ref) => {
          let [componentName, componentToken] = _ref;
          const parsedToken = Object.assign({}, componentToken);
          if ("algorithm" in parsedToken) {
            if (parsedToken.algorithm === true) {
              parsedToken.theme = themeObj;
            } else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === "function") {
              parsedToken.theme = createTheme(parsedToken.algorithm);
            }
            delete parsedToken.algorithm;
          }
          parsedComponents[componentName] = parsedToken;
        });
        const mergedToken = Object.assign(Object.assign({}, seedToken), token2);
        return Object.assign(Object.assign({}, rest), {
          theme: themeObj,
          token: mergedToken,
          components: parsedComponents,
          override: Object.assign({
            override: mergedToken
          }, parsedComponents),
          cssVar
        });
      }, [mergedTheme]);
      if (theme) {
        childNode = /* @__PURE__ */ reactExports.createElement(DesignTokenContext.Provider, {
          value: memoTheme
        }, childNode);
      }
      if (memoedConfig.warning) {
        childNode = /* @__PURE__ */ reactExports.createElement(WarningContext.Provider, {
          value: memoedConfig.warning
        }, childNode);
      }
      if (componentDisabled !== void 0) {
        childNode = /* @__PURE__ */ reactExports.createElement(DisabledContextProvider, {
          disabled: componentDisabled
        }, childNode);
      }
      return /* @__PURE__ */ reactExports.createElement(ConfigContext.Provider, {
        value: memoedConfig
      }, childNode);
    };
    const ConfigProvider = (props) => {
      const context = reactExports.useContext(ConfigContext);
      const antLocale = reactExports.useContext(LocaleContext);
      return /* @__PURE__ */ reactExports.createElement(ProviderChildren, Object.assign({
        parentContext: context,
        legacyLocale: antLocale
      }, props));
    };
    ConfigProvider.ConfigContext = ConfigContext;
    ConfigProvider.SizeContext = SizeContext;
    ConfigProvider.config = setGlobalConfig;
    ConfigProvider.useConfig = useConfig;
    Object.defineProperty(ConfigProvider, "SizeContext", {
      get: () => {
        return SizeContext;
      }
    });
    var CheckCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, "name": "check-circle", "theme": "filled" };
    function getRoot(ele) {
      var _ele$getRootNode;
      return ele === null || ele === void 0 || (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
    }
    function inShadow(ele) {
      return getRoot(ele) instanceof ShadowRoot;
    }
    function getShadowRoot(ele) {
      return inShadow(ele) ? getRoot(ele) : null;
    }
    function camelCase(input) {
      return input.replace(/-(.)/g, function(match2, g2) {
        return g2.toUpperCase();
      });
    }
    function warning(valid, message) {
      warningOnce(valid, "[@ant-design/icons] ".concat(message));
    }
    function isIconDefinition(target) {
      return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
    }
    function normalizeAttrs() {
      var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Object.keys(attrs).reduce(function(acc, key) {
        var val = attrs[key];
        switch (key) {
          case "class":
            acc.className = val;
            delete acc.class;
            break;
          default:
            delete acc[key];
            acc[camelCase(key)] = val;
        }
        return acc;
      }, {});
    }
    function generate(node2, key, rootProps) {
      if (!rootProps) {
        return /* @__PURE__ */ ReactExports.createElement(node2.tag, _objectSpread2({
          key
        }, normalizeAttrs(node2.attrs)), (node2.children || []).map(function(child, index) {
          return generate(child, "".concat(key, "-").concat(node2.tag, "-").concat(index));
        }));
      }
      return /* @__PURE__ */ ReactExports.createElement(node2.tag, _objectSpread2(_objectSpread2({
        key
      }, normalizeAttrs(node2.attrs)), rootProps), (node2.children || []).map(function(child, index) {
        return generate(child, "".concat(key, "-").concat(node2.tag, "-").concat(index));
      }));
    }
    function getSecondaryColor(primaryColor) {
      return generate$1(primaryColor)[0];
    }
    function normalizeTwoToneColors(twoToneColor) {
      if (!twoToneColor) {
        return [];
      }
      return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
    }
    var iconStyles = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
    var useInsertStyles = function useInsertStyles2(eleRef) {
      var _useContext = reactExports.useContext(IconContext), csp = _useContext.csp, prefixCls = _useContext.prefixCls;
      var mergedStyleStr = iconStyles;
      if (prefixCls) {
        mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
      }
      reactExports.useEffect(function() {
        var ele = eleRef.current;
        var shadowRoot = getShadowRoot(ele);
        updateCSS(mergedStyleStr, "@ant-design-icons", {
          prepend: true,
          csp,
          attachTo: shadowRoot
        });
      }, []);
    };
    var _excluded$3 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
    var twoToneColorPalette = {
      primaryColor: "#333",
      secondaryColor: "#E6E6E6",
      calculated: false
    };
    function setTwoToneColors(_ref) {
      var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
      twoToneColorPalette.primaryColor = primaryColor;
      twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
      twoToneColorPalette.calculated = !!secondaryColor;
    }
    function getTwoToneColors() {
      return _objectSpread2({}, twoToneColorPalette);
    }
    var IconBase = function IconBase2(props) {
      var icon = props.icon, className = props.className, onClick = props.onClick, style2 = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded$3);
      var svgRef = reactExports.useRef();
      var colors = twoToneColorPalette;
      if (primaryColor) {
        colors = {
          primaryColor,
          secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
        };
      }
      useInsertStyles(svgRef);
      warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
      if (!isIconDefinition(icon)) {
        return null;
      }
      var target = icon;
      if (target && typeof target.icon === "function") {
        target = _objectSpread2(_objectSpread2({}, target), {}, {
          icon: target.icon(colors.primaryColor, colors.secondaryColor)
        });
      }
      return generate(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
        className,
        onClick,
        style: style2,
        "data-icon": target.name,
        width: "1em",
        height: "1em",
        fill: "currentColor",
        "aria-hidden": "true"
      }, restProps), {}, {
        ref: svgRef
      }));
    };
    IconBase.displayName = "IconReact";
    IconBase.getTwoToneColors = getTwoToneColors;
    IconBase.setTwoToneColors = setTwoToneColors;
    function setTwoToneColor(twoToneColor) {
      var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
      return IconBase.setTwoToneColors({
        primaryColor,
        secondaryColor
      });
    }
    function getTwoToneColor() {
      var colors = IconBase.getTwoToneColors();
      if (!colors.calculated) {
        return colors.primaryColor;
      }
      return [colors.primaryColor, colors.secondaryColor];
    }
    var _excluded$2 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
    setTwoToneColor(blue.primary);
    var Icon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
      var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded$2);
      var _React$useContext = reactExports.useContext(IconContext), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
      var classString = classNames(rootClassName, prefixCls, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), className);
      var iconTabIndex = tabIndex;
      if (iconTabIndex === void 0 && onClick) {
        iconTabIndex = -1;
      }
      var svgStyle = rotate ? {
        msTransform: "rotate(".concat(rotate, "deg)"),
        transform: "rotate(".concat(rotate, "deg)")
      } : void 0;
      var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
      return /* @__PURE__ */ reactExports.createElement("span", _extends({
        role: "img",
        "aria-label": icon.name
      }, restProps, {
        ref,
        tabIndex: iconTabIndex,
        onClick,
        className: classString
      }), /* @__PURE__ */ reactExports.createElement(IconBase, {
        icon,
        primaryColor,
        secondaryColor,
        style: svgStyle
      }));
    });
    Icon.displayName = "AntdIcon";
    Icon.getTwoToneColor = getTwoToneColor;
    Icon.setTwoToneColor = setTwoToneColor;
    var CheckCircleFilled = function CheckCircleFilled2(props, ref) {
      return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
        ref,
        icon: CheckCircleFilled$1
      }));
    };
    var RefIcon$4 = /* @__PURE__ */ reactExports.forwardRef(CheckCircleFilled);
    var CloseCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, "name": "close-circle", "theme": "filled" };
    var CloseCircleFilled = function CloseCircleFilled2(props, ref) {
      return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
        ref,
        icon: CloseCircleFilled$1
      }));
    };
    var RefIcon$3 = /* @__PURE__ */ reactExports.forwardRef(CloseCircleFilled);
    var CloseOutlined$1 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, "name": "close", "theme": "outlined" };
    var CloseOutlined = function CloseOutlined2(props, ref) {
      return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
        ref,
        icon: CloseOutlined$1
      }));
    };
    var RefIcon$2 = /* @__PURE__ */ reactExports.forwardRef(CloseOutlined);
    var ExclamationCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "exclamation-circle", "theme": "filled" };
    var ExclamationCircleFilled = function ExclamationCircleFilled2(props, ref) {
      return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
        ref,
        icon: ExclamationCircleFilled$1
      }));
    };
    var RefIcon$1 = /* @__PURE__ */ reactExports.forwardRef(ExclamationCircleFilled);
    var InfoCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "info-circle", "theme": "filled" };
    var InfoCircleFilled = function InfoCircleFilled2(props, ref) {
      return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
        ref,
        icon: InfoCircleFilled$1
      }));
    };
    var RefIcon = /* @__PURE__ */ reactExports.forwardRef(InfoCircleFilled);
    var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
    var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
    var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
    var ariaPrefix = "aria-";
    var dataPrefix = "data-";
    function match(key, prefix) {
      return key.indexOf(prefix) === 0;
    }
    function pickAttrs(props) {
      var ariaOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var mergedConfig;
      if (ariaOnly === false) {
        mergedConfig = {
          aria: true,
          data: true,
          attr: true
        };
      } else if (ariaOnly === true) {
        mergedConfig = {
          aria: true
        };
      } else {
        mergedConfig = _objectSpread2({}, ariaOnly);
      }
      var attrs = {};
      Object.keys(props).forEach(function(key) {
        if (
          // Aria
          mergedConfig.aria && (key === "role" || match(key, ariaPrefix)) || // Data
          mergedConfig.data && match(key, dataPrefix) || // Attr
          mergedConfig.attr && propList.includes(key)
        ) {
          attrs[key] = props[key];
        }
      });
      return attrs;
    }
    const useCSSVarCls = (prefixCls) => {
      const [, , , , cssVar] = useToken();
      return cssVar ? `${prefixCls}-css-var` : "";
    };
    var KeyCode = {
      /**
       * MAC_ENTER
       */
      MAC_ENTER: 3,
      /**
       * BACKSPACE
       */
      BACKSPACE: 8,
      /**
       * TAB
       */
      TAB: 9,
      /**
       * NUMLOCK on FF/Safari Mac
       */
      NUM_CENTER: 12,
      // NUMLOCK on FF/Safari Mac
      /**
       * ENTER
       */
      ENTER: 13,
      /**
       * SHIFT
       */
      SHIFT: 16,
      /**
       * CTRL
       */
      CTRL: 17,
      /**
       * ALT
       */
      ALT: 18,
      /**
       * PAUSE
       */
      PAUSE: 19,
      /**
       * CAPS_LOCK
       */
      CAPS_LOCK: 20,
      /**
       * ESC
       */
      ESC: 27,
      /**
       * SPACE
       */
      SPACE: 32,
      /**
       * PAGE_UP
       */
      PAGE_UP: 33,
      // also NUM_NORTH_EAST
      /**
       * PAGE_DOWN
       */
      PAGE_DOWN: 34,
      // also NUM_SOUTH_EAST
      /**
       * END
       */
      END: 35,
      // also NUM_SOUTH_WEST
      /**
       * HOME
       */
      HOME: 36,
      // also NUM_NORTH_WEST
      /**
       * LEFT
       */
      LEFT: 37,
      // also NUM_WEST
      /**
       * UP
       */
      UP: 38,
      // also NUM_NORTH
      /**
       * RIGHT
       */
      RIGHT: 39,
      // also NUM_EAST
      /**
       * DOWN
       */
      DOWN: 40,
      // also NUM_SOUTH
      /**
       * PRINT_SCREEN
       */
      PRINT_SCREEN: 44,
      /**
       * INSERT
       */
      INSERT: 45,
      // also NUM_INSERT
      /**
       * DELETE
       */
      DELETE: 46,
      // also NUM_DELETE
      /**
       * ZERO
       */
      ZERO: 48,
      /**
       * ONE
       */
      ONE: 49,
      /**
       * TWO
       */
      TWO: 50,
      /**
       * THREE
       */
      THREE: 51,
      /**
       * FOUR
       */
      FOUR: 52,
      /**
       * FIVE
       */
      FIVE: 53,
      /**
       * SIX
       */
      SIX: 54,
      /**
       * SEVEN
       */
      SEVEN: 55,
      /**
       * EIGHT
       */
      EIGHT: 56,
      /**
       * NINE
       */
      NINE: 57,
      /**
       * QUESTION_MARK
       */
      QUESTION_MARK: 63,
      // needs localization
      /**
       * A
       */
      A: 65,
      /**
       * B
       */
      B: 66,
      /**
       * C
       */
      C: 67,
      /**
       * D
       */
      D: 68,
      /**
       * E
       */
      E: 69,
      /**
       * F
       */
      F: 70,
      /**
       * G
       */
      G: 71,
      /**
       * H
       */
      H: 72,
      /**
       * I
       */
      I: 73,
      /**
       * J
       */
      J: 74,
      /**
       * K
       */
      K: 75,
      /**
       * L
       */
      L: 76,
      /**
       * M
       */
      M: 77,
      /**
       * N
       */
      N: 78,
      /**
       * O
       */
      O: 79,
      /**
       * P
       */
      P: 80,
      /**
       * Q
       */
      Q: 81,
      /**
       * R
       */
      R: 82,
      /**
       * S
       */
      S: 83,
      /**
       * T
       */
      T: 84,
      /**
       * U
       */
      U: 85,
      /**
       * V
       */
      V: 86,
      /**
       * W
       */
      W: 87,
      /**
       * X
       */
      X: 88,
      /**
       * Y
       */
      Y: 89,
      /**
       * Z
       */
      Z: 90,
      /**
       * META
       */
      META: 91,
      // WIN_KEY_LEFT
      /**
       * WIN_KEY_RIGHT
       */
      WIN_KEY_RIGHT: 92,
      /**
       * CONTEXT_MENU
       */
      CONTEXT_MENU: 93,
      /**
       * NUM_ZERO
       */
      NUM_ZERO: 96,
      /**
       * NUM_ONE
       */
      NUM_ONE: 97,
      /**
       * NUM_TWO
       */
      NUM_TWO: 98,
      /**
       * NUM_THREE
       */
      NUM_THREE: 99,
      /**
       * NUM_FOUR
       */
      NUM_FOUR: 100,
      /**
       * NUM_FIVE
       */
      NUM_FIVE: 101,
      /**
       * NUM_SIX
       */
      NUM_SIX: 102,
      /**
       * NUM_SEVEN
       */
      NUM_SEVEN: 103,
      /**
       * NUM_EIGHT
       */
      NUM_EIGHT: 104,
      /**
       * NUM_NINE
       */
      NUM_NINE: 105,
      /**
       * NUM_MULTIPLY
       */
      NUM_MULTIPLY: 106,
      /**
       * NUM_PLUS
       */
      NUM_PLUS: 107,
      /**
       * NUM_MINUS
       */
      NUM_MINUS: 109,
      /**
       * NUM_PERIOD
       */
      NUM_PERIOD: 110,
      /**
       * NUM_DIVISION
       */
      NUM_DIVISION: 111,
      /**
       * F1
       */
      F1: 112,
      /**
       * F2
       */
      F2: 113,
      /**
       * F3
       */
      F3: 114,
      /**
       * F4
       */
      F4: 115,
      /**
       * F5
       */
      F5: 116,
      /**
       * F6
       */
      F6: 117,
      /**
       * F7
       */
      F7: 118,
      /**
       * F8
       */
      F8: 119,
      /**
       * F9
       */
      F9: 120,
      /**
       * F10
       */
      F10: 121,
      /**
       * F11
       */
      F11: 122,
      /**
       * F12
       */
      F12: 123,
      /**
       * NUMLOCK
       */
      NUMLOCK: 144,
      /**
       * SEMICOLON
       */
      SEMICOLON: 186,
      // needs localization
      /**
       * DASH
       */
      DASH: 189,
      // needs localization
      /**
       * EQUALS
       */
      EQUALS: 187,
      // needs localization
      /**
       * COMMA
       */
      COMMA: 188,
      // needs localization
      /**
       * PERIOD
       */
      PERIOD: 190,
      // needs localization
      /**
       * SLASH
       */
      SLASH: 191,
      // needs localization
      /**
       * APOSTROPHE
       */
      APOSTROPHE: 192,
      // needs localization
      /**
       * SINGLE_QUOTE
       */
      SINGLE_QUOTE: 222,
      // needs localization
      /**
       * OPEN_SQUARE_BRACKET
       */
      OPEN_SQUARE_BRACKET: 219,
      // needs localization
      /**
       * BACKSLASH
       */
      BACKSLASH: 220,
      // needs localization
      /**
       * CLOSE_SQUARE_BRACKET
       */
      CLOSE_SQUARE_BRACKET: 221,
      // needs localization
      /**
       * WIN_KEY
       */
      WIN_KEY: 224,
      /**
       * MAC_FF_META
       */
      MAC_FF_META: 224,
      // Firefox (Gecko) fires this for the meta key instead of 91
      /**
       * WIN_IME
       */
      WIN_IME: 229,
      // ======================== Function ========================
      /**
       * whether text and modified key is entered at the same time.
       */
      isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e2) {
        var keyCode = e2.keyCode;
        if (e2.altKey && !e2.ctrlKey || e2.metaKey || // Function keys don't generate text
        keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
          return false;
        }
        switch (keyCode) {
          case KeyCode.ALT:
          case KeyCode.CAPS_LOCK:
          case KeyCode.CONTEXT_MENU:
          case KeyCode.CTRL:
          case KeyCode.DOWN:
          case KeyCode.END:
          case KeyCode.ESC:
          case KeyCode.HOME:
          case KeyCode.INSERT:
          case KeyCode.LEFT:
          case KeyCode.MAC_FF_META:
          case KeyCode.META:
          case KeyCode.NUMLOCK:
          case KeyCode.NUM_CENTER:
          case KeyCode.PAGE_DOWN:
          case KeyCode.PAGE_UP:
          case KeyCode.PAUSE:
          case KeyCode.PRINT_SCREEN:
          case KeyCode.RIGHT:
          case KeyCode.SHIFT:
          case KeyCode.UP:
          case KeyCode.WIN_KEY:
          case KeyCode.WIN_KEY_RIGHT:
            return false;
          default:
            return true;
        }
      },
      /**
       * whether character is entered.
       */
      isCharacterKey: function isCharacterKey(keyCode) {
        if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
          return true;
        }
        if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
          return true;
        }
        if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
          return true;
        }
        if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
          return true;
        }
        switch (keyCode) {
          case KeyCode.SPACE:
          case KeyCode.QUESTION_MARK:
          case KeyCode.NUM_PLUS:
          case KeyCode.NUM_MINUS:
          case KeyCode.NUM_PERIOD:
          case KeyCode.NUM_DIVISION:
          case KeyCode.SEMICOLON:
          case KeyCode.DASH:
          case KeyCode.EQUALS:
          case KeyCode.COMMA:
          case KeyCode.PERIOD:
          case KeyCode.SLASH:
          case KeyCode.APOSTROPHE:
          case KeyCode.SINGLE_QUOTE:
          case KeyCode.OPEN_SQUARE_BRACKET:
          case KeyCode.BACKSLASH:
          case KeyCode.CLOSE_SQUARE_BRACKET:
            return true;
          default:
            return false;
        }
      }
    };
    var Notify = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
      var prefixCls = props.prefixCls, style2 = props.style, className = props.className, _props$duration = props.duration, duration = _props$duration === void 0 ? 4.5 : _props$duration, showProgress = props.showProgress, _props$pauseOnHover = props.pauseOnHover, pauseOnHover = _props$pauseOnHover === void 0 ? true : _props$pauseOnHover, eventKey = props.eventKey, content = props.content, closable = props.closable, _props$closeIcon = props.closeIcon, closeIcon = _props$closeIcon === void 0 ? "x" : _props$closeIcon, divProps = props.props, onClick = props.onClick, onNoticeClose = props.onNoticeClose, times = props.times, forcedHovering = props.hovering;
      var _React$useState = reactExports.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), hovering = _React$useState2[0], setHovering = _React$useState2[1];
      var _React$useState3 = reactExports.useState(0), _React$useState4 = _slicedToArray(_React$useState3, 2), percent = _React$useState4[0], setPercent = _React$useState4[1];
      var _React$useState5 = reactExports.useState(0), _React$useState6 = _slicedToArray(_React$useState5, 2), spentTime = _React$useState6[0], setSpentTime = _React$useState6[1];
      var mergedHovering = forcedHovering || hovering;
      var mergedShowProgress = duration > 0 && showProgress;
      var onInternalClose = function onInternalClose2() {
        onNoticeClose(eventKey);
      };
      var onCloseKeyDown = function onCloseKeyDown2(e2) {
        if (e2.key === "Enter" || e2.code === "Enter" || e2.keyCode === KeyCode.ENTER) {
          onInternalClose();
        }
      };
      reactExports.useEffect(function() {
        if (!mergedHovering && duration > 0) {
          var start = Date.now() - spentTime;
          var timeout = setTimeout(function() {
            onInternalClose();
          }, duration * 1e3 - spentTime);
          return function() {
            if (pauseOnHover) {
              clearTimeout(timeout);
            }
            setSpentTime(Date.now() - start);
          };
        }
      }, [duration, mergedHovering, times]);
      reactExports.useEffect(function() {
        if (!mergedHovering && mergedShowProgress && (pauseOnHover || spentTime === 0)) {
          var start = performance.now();
          var animationFrame;
          var calculate = function calculate2() {
            cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(function(timestamp) {
              var runtime = timestamp + spentTime - start;
              var progress = Math.min(runtime / (duration * 1e3), 1);
              setPercent(progress * 100);
              if (progress < 1) {
                calculate2();
              }
            });
          };
          calculate();
          return function() {
            if (pauseOnHover) {
              cancelAnimationFrame(animationFrame);
            }
          };
        }
      }, [duration, spentTime, mergedHovering, mergedShowProgress, times]);
      var closableObj = reactExports.useMemo(function() {
        if (_typeof(closable) === "object" && closable !== null) {
          return closable;
        }
        if (closable) {
          return {
            closeIcon
          };
        }
        return {};
      }, [closable, closeIcon]);
      var ariaProps = pickAttrs(closableObj, true);
      var validPercent = 100 - (!percent || percent < 0 ? 0 : percent > 100 ? 100 : percent);
      var noticePrefixCls = "".concat(prefixCls, "-notice");
      return /* @__PURE__ */ reactExports.createElement("div", _extends({}, divProps, {
        ref,
        className: classNames(noticePrefixCls, className, _defineProperty({}, "".concat(noticePrefixCls, "-closable"), closable)),
        style: style2,
        onMouseEnter: function onMouseEnter(e2) {
          var _divProps$onMouseEnte;
          setHovering(true);
          divProps === null || divProps === void 0 || (_divProps$onMouseEnte = divProps.onMouseEnter) === null || _divProps$onMouseEnte === void 0 || _divProps$onMouseEnte.call(divProps, e2);
        },
        onMouseLeave: function onMouseLeave(e2) {
          var _divProps$onMouseLeav;
          setHovering(false);
          divProps === null || divProps === void 0 || (_divProps$onMouseLeav = divProps.onMouseLeave) === null || _divProps$onMouseLeav === void 0 || _divProps$onMouseLeav.call(divProps, e2);
        },
        onClick
      }), /* @__PURE__ */ reactExports.createElement("div", {
        className: "".concat(noticePrefixCls, "-content")
      }, content), closable && /* @__PURE__ */ reactExports.createElement("a", _extends({
        tabIndex: 0,
        className: "".concat(noticePrefixCls, "-close"),
        onKeyDown: onCloseKeyDown,
        "aria-label": "Close"
      }, ariaProps, {
        onClick: function onClick2(e2) {
          e2.preventDefault();
          e2.stopPropagation();
          onInternalClose();
        }
      }), closableObj.closeIcon), mergedShowProgress && /* @__PURE__ */ reactExports.createElement("progress", {
        className: "".concat(noticePrefixCls, "-progress"),
        max: "100",
        value: validPercent
      }, validPercent + "%"));
    });
    var NotificationContext = /* @__PURE__ */ ReactExports.createContext({});
    var NotificationProvider = function NotificationProvider2(_ref) {
      var children = _ref.children, classNames2 = _ref.classNames;
      return /* @__PURE__ */ ReactExports.createElement(NotificationContext.Provider, {
        value: {
          classNames: classNames2
        }
      }, children);
    };
    var DEFAULT_OFFSET$1 = 8;
    var DEFAULT_THRESHOLD = 3;
    var DEFAULT_GAP = 16;
    var useStack = function useStack2(config) {
      var result = {
        offset: DEFAULT_OFFSET$1,
        threshold: DEFAULT_THRESHOLD,
        gap: DEFAULT_GAP
      };
      if (config && _typeof(config) === "object") {
        var _config$offset, _config$threshold, _config$gap;
        result.offset = (_config$offset = config.offset) !== null && _config$offset !== void 0 ? _config$offset : DEFAULT_OFFSET$1;
        result.threshold = (_config$threshold = config.threshold) !== null && _config$threshold !== void 0 ? _config$threshold : DEFAULT_THRESHOLD;
        result.gap = (_config$gap = config.gap) !== null && _config$gap !== void 0 ? _config$gap : DEFAULT_GAP;
      }
      return [!!config, result];
    };
    var _excluded$1 = ["className", "style", "classNames", "styles"];
    var NoticeList = function NoticeList2(props) {
      var configList = props.configList, placement = props.placement, prefixCls = props.prefixCls, className = props.className, style2 = props.style, motion = props.motion, onAllNoticeRemoved = props.onAllNoticeRemoved, onNoticeClose = props.onNoticeClose, stackConfig = props.stack;
      var _useContext = reactExports.useContext(NotificationContext), ctxCls = _useContext.classNames;
      var dictRef = reactExports.useRef({});
      var _useState = reactExports.useState(null), _useState2 = _slicedToArray(_useState, 2), latestNotice = _useState2[0], setLatestNotice = _useState2[1];
      var _useState3 = reactExports.useState([]), _useState4 = _slicedToArray(_useState3, 2), hoverKeys = _useState4[0], setHoverKeys = _useState4[1];
      var keys2 = configList.map(function(config) {
        return {
          config,
          key: String(config.key)
        };
      });
      var _useStack = useStack(stackConfig), _useStack2 = _slicedToArray(_useStack, 2), stack = _useStack2[0], _useStack2$ = _useStack2[1], offset = _useStack2$.offset, threshold = _useStack2$.threshold, gap = _useStack2$.gap;
      var expanded = stack && (hoverKeys.length > 0 || keys2.length <= threshold);
      var placementMotion = typeof motion === "function" ? motion(placement) : motion;
      reactExports.useEffect(function() {
        if (stack && hoverKeys.length > 1) {
          setHoverKeys(function(prev2) {
            return prev2.filter(function(key) {
              return keys2.some(function(_ref) {
                var dataKey = _ref.key;
                return key === dataKey;
              });
            });
          });
        }
      }, [hoverKeys, keys2, stack]);
      reactExports.useEffect(function() {
        var _keys;
        if (stack && dictRef.current[(_keys = keys2[keys2.length - 1]) === null || _keys === void 0 ? void 0 : _keys.key]) {
          var _keys2;
          setLatestNotice(dictRef.current[(_keys2 = keys2[keys2.length - 1]) === null || _keys2 === void 0 ? void 0 : _keys2.key]);
        }
      }, [keys2, stack]);
      return /* @__PURE__ */ ReactExports.createElement(CSSMotionList, _extends({
        key: placement,
        className: classNames(prefixCls, "".concat(prefixCls, "-").concat(placement), ctxCls === null || ctxCls === void 0 ? void 0 : ctxCls.list, className, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-stack"), !!stack), "".concat(prefixCls, "-stack-expanded"), expanded)),
        style: style2,
        keys: keys2,
        motionAppear: true
      }, placementMotion, {
        onAllRemoved: function onAllRemoved() {
          onAllNoticeRemoved(placement);
        }
      }), function(_ref2, nodeRef) {
        var config = _ref2.config, motionClassName = _ref2.className, motionStyle = _ref2.style, motionIndex = _ref2.index;
        var _ref3 = config, key = _ref3.key, times = _ref3.times;
        var strKey = String(key);
        var _ref4 = config, configClassName = _ref4.className, configStyle = _ref4.style, configClassNames = _ref4.classNames, configStyles = _ref4.styles, restConfig = _objectWithoutProperties(_ref4, _excluded$1);
        var dataIndex = keys2.findIndex(function(item) {
          return item.key === strKey;
        });
        var stackStyle = {};
        if (stack) {
          var index = keys2.length - 1 - (dataIndex > -1 ? dataIndex : motionIndex - 1);
          var transformX = placement === "top" || placement === "bottom" ? "-50%" : "0";
          if (index > 0) {
            var _dictRef$current$strK, _dictRef$current$strK2, _dictRef$current$strK3;
            stackStyle.height = expanded ? (_dictRef$current$strK = dictRef.current[strKey]) === null || _dictRef$current$strK === void 0 ? void 0 : _dictRef$current$strK.offsetHeight : latestNotice === null || latestNotice === void 0 ? void 0 : latestNotice.offsetHeight;
            var verticalOffset = 0;
            for (var i = 0; i < index; i++) {
              var _dictRef$current$keys;
              verticalOffset += ((_dictRef$current$keys = dictRef.current[keys2[keys2.length - 1 - i].key]) === null || _dictRef$current$keys === void 0 ? void 0 : _dictRef$current$keys.offsetHeight) + gap;
            }
            var transformY = (expanded ? verticalOffset : index * offset) * (placement.startsWith("top") ? 1 : -1);
            var scaleX = !expanded && latestNotice !== null && latestNotice !== void 0 && latestNotice.offsetWidth && (_dictRef$current$strK2 = dictRef.current[strKey]) !== null && _dictRef$current$strK2 !== void 0 && _dictRef$current$strK2.offsetWidth ? ((latestNotice === null || latestNotice === void 0 ? void 0 : latestNotice.offsetWidth) - offset * 2 * (index < 3 ? index : 3)) / ((_dictRef$current$strK3 = dictRef.current[strKey]) === null || _dictRef$current$strK3 === void 0 ? void 0 : _dictRef$current$strK3.offsetWidth) : 1;
            stackStyle.transform = "translate3d(".concat(transformX, ", ").concat(transformY, "px, 0) scaleX(").concat(scaleX, ")");
          } else {
            stackStyle.transform = "translate3d(".concat(transformX, ", 0, 0)");
          }
        }
        return /* @__PURE__ */ ReactExports.createElement("div", {
          ref: nodeRef,
          className: classNames("".concat(prefixCls, "-notice-wrapper"), motionClassName, configClassNames === null || configClassNames === void 0 ? void 0 : configClassNames.wrapper),
          style: _objectSpread2(_objectSpread2(_objectSpread2({}, motionStyle), stackStyle), configStyles === null || configStyles === void 0 ? void 0 : configStyles.wrapper),
          onMouseEnter: function onMouseEnter() {
            return setHoverKeys(function(prev2) {
              return prev2.includes(strKey) ? prev2 : [].concat(_toConsumableArray(prev2), [strKey]);
            });
          },
          onMouseLeave: function onMouseLeave() {
            return setHoverKeys(function(prev2) {
              return prev2.filter(function(k2) {
                return k2 !== strKey;
              });
            });
          }
        }, /* @__PURE__ */ ReactExports.createElement(Notify, _extends({}, restConfig, {
          ref: function ref(node2) {
            if (dataIndex > -1) {
              dictRef.current[strKey] = node2;
            } else {
              delete dictRef.current[strKey];
            }
          },
          prefixCls,
          classNames: configClassNames,
          styles: configStyles,
          className: classNames(configClassName, ctxCls === null || ctxCls === void 0 ? void 0 : ctxCls.notice),
          style: configStyle,
          times,
          key,
          eventKey: key,
          onNoticeClose,
          hovering: stack && hoverKeys.length > 0
        })));
      });
    };
    var Notifications = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
      var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-notification" : _props$prefixCls, container = props.container, motion = props.motion, maxCount = props.maxCount, className = props.className, style2 = props.style, onAllRemoved = props.onAllRemoved, stack = props.stack, renderNotifications2 = props.renderNotifications;
      var _React$useState = reactExports.useState([]), _React$useState2 = _slicedToArray(_React$useState, 2), configList = _React$useState2[0], setConfigList = _React$useState2[1];
      var onNoticeClose = function onNoticeClose2(key) {
        var _config$onClose;
        var config = configList.find(function(item) {
          return item.key === key;
        });
        config === null || config === void 0 || (_config$onClose = config.onClose) === null || _config$onClose === void 0 || _config$onClose.call(config);
        setConfigList(function(list) {
          return list.filter(function(item) {
            return item.key !== key;
          });
        });
      };
      reactExports.useImperativeHandle(ref, function() {
        return {
          open: function open2(config) {
            setConfigList(function(list) {
              var clone = _toConsumableArray(list);
              var index = clone.findIndex(function(item) {
                return item.key === config.key;
              });
              var innerConfig = _objectSpread2({}, config);
              if (index >= 0) {
                var _list$index;
                innerConfig.times = (((_list$index = list[index]) === null || _list$index === void 0 ? void 0 : _list$index.times) || 0) + 1;
                clone[index] = innerConfig;
              } else {
                innerConfig.times = 0;
                clone.push(innerConfig);
              }
              if (maxCount > 0 && clone.length > maxCount) {
                clone = clone.slice(-maxCount);
              }
              return clone;
            });
          },
          close: function close(key) {
            onNoticeClose(key);
          },
          destroy: function destroy2() {
            setConfigList([]);
          }
        };
      });
      var _React$useState3 = reactExports.useState({}), _React$useState4 = _slicedToArray(_React$useState3, 2), placements = _React$useState4[0], setPlacements = _React$useState4[1];
      reactExports.useEffect(function() {
        var nextPlacements = {};
        configList.forEach(function(config) {
          var _config$placement = config.placement, placement = _config$placement === void 0 ? "topRight" : _config$placement;
          if (placement) {
            nextPlacements[placement] = nextPlacements[placement] || [];
            nextPlacements[placement].push(config);
          }
        });
        Object.keys(placements).forEach(function(placement) {
          nextPlacements[placement] = nextPlacements[placement] || [];
        });
        setPlacements(nextPlacements);
      }, [configList]);
      var onAllNoticeRemoved = function onAllNoticeRemoved2(placement) {
        setPlacements(function(originPlacements) {
          var clone = _objectSpread2({}, originPlacements);
          var list = clone[placement] || [];
          if (!list.length) {
            delete clone[placement];
          }
          return clone;
        });
      };
      var emptyRef = reactExports.useRef(false);
      reactExports.useEffect(function() {
        if (Object.keys(placements).length > 0) {
          emptyRef.current = true;
        } else if (emptyRef.current) {
          onAllRemoved === null || onAllRemoved === void 0 || onAllRemoved();
          emptyRef.current = false;
        }
      }, [placements]);
      if (!container) {
        return null;
      }
      var placementList = Object.keys(placements);
      return /* @__PURE__ */ reactDomExports.createPortal(/* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, placementList.map(function(placement) {
        var placementConfigList = placements[placement];
        var list = /* @__PURE__ */ reactExports.createElement(NoticeList, {
          key: placement,
          configList: placementConfigList,
          placement,
          prefixCls,
          className: className === null || className === void 0 ? void 0 : className(placement),
          style: style2 === null || style2 === void 0 ? void 0 : style2(placement),
          motion,
          onNoticeClose,
          onAllNoticeRemoved,
          stack
        });
        return renderNotifications2 ? renderNotifications2(list, {
          prefixCls,
          key: placement
        }) : list;
      })), container);
    });
    var _excluded = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"];
    var defaultGetContainer = function defaultGetContainer2() {
      return document.body;
    };
    var uniqueKey = 0;
    function mergeConfig() {
      var clone = {};
      for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
        objList[_key] = arguments[_key];
      }
      objList.forEach(function(obj) {
        if (obj) {
          Object.keys(obj).forEach(function(key) {
            var val = obj[key];
            if (val !== void 0) {
              clone[key] = val;
            }
          });
        }
      });
      return clone;
    }
    function useNotification$1() {
      var rootConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var _rootConfig$getContai = rootConfig.getContainer, getContainer2 = _rootConfig$getContai === void 0 ? defaultGetContainer : _rootConfig$getContai, motion = rootConfig.motion, prefixCls = rootConfig.prefixCls, maxCount = rootConfig.maxCount, className = rootConfig.className, style2 = rootConfig.style, onAllRemoved = rootConfig.onAllRemoved, stack = rootConfig.stack, renderNotifications2 = rootConfig.renderNotifications, shareConfig = _objectWithoutProperties(rootConfig, _excluded);
      var _React$useState = reactExports.useState(), _React$useState2 = _slicedToArray(_React$useState, 2), container = _React$useState2[0], setContainer = _React$useState2[1];
      var notificationsRef = reactExports.useRef();
      var contextHolder = /* @__PURE__ */ reactExports.createElement(Notifications, {
        container,
        ref: notificationsRef,
        prefixCls,
        motion,
        maxCount,
        className,
        style: style2,
        onAllRemoved,
        stack,
        renderNotifications: renderNotifications2
      });
      var _React$useState3 = reactExports.useState([]), _React$useState4 = _slicedToArray(_React$useState3, 2), taskQueue2 = _React$useState4[0], setTaskQueue = _React$useState4[1];
      var api = reactExports.useMemo(function() {
        return {
          open: function open2(config) {
            var mergedConfig = mergeConfig(shareConfig, config);
            if (mergedConfig.key === null || mergedConfig.key === void 0) {
              mergedConfig.key = "rc-notification-".concat(uniqueKey);
              uniqueKey += 1;
            }
            setTaskQueue(function(queue) {
              return [].concat(_toConsumableArray(queue), [{
                type: "open",
                config: mergedConfig
              }]);
            });
          },
          close: function close(key) {
            setTaskQueue(function(queue) {
              return [].concat(_toConsumableArray(queue), [{
                type: "close",
                key
              }]);
            });
          },
          destroy: function destroy2() {
            setTaskQueue(function(queue) {
              return [].concat(_toConsumableArray(queue), [{
                type: "destroy"
              }]);
            });
          }
        };
      }, []);
      reactExports.useEffect(function() {
        setContainer(getContainer2());
      });
      reactExports.useEffect(function() {
        if (notificationsRef.current && taskQueue2.length) {
          taskQueue2.forEach(function(task) {
            switch (task.type) {
              case "open":
                notificationsRef.current.open(task.config);
                break;
              case "close":
                notificationsRef.current.close(task.key);
                break;
              case "destroy":
                notificationsRef.current.destroy();
                break;
            }
          });
          setTaskQueue(function(oriQueue) {
            return oriQueue.filter(function(task) {
              return !taskQueue2.includes(task);
            });
          });
        }
      }, [taskQueue2]);
      return [api, contextHolder];
    }
    const CONTAINER_OFFSET = 100;
    const CONTAINER_OFFSET_MAX_COUNT = 10;
    const CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
    var fullClone = _objectSpread2({}, ReactDOM$1);
    var version = fullClone.version, reactRender = fullClone.render;
    fullClone.unmountComponentAtNode;
    var createRoot;
    try {
      var mainVersion = Number((version || "").split(".")[0]);
      if (mainVersion >= 18) {
        createRoot = fullClone.createRoot;
      }
    } catch (e2) {
    }
    function toggleWarning(skip) {
      var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && _typeof(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === "object") {
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
      }
    }
    var MARK = "__rc_react_root__";
    function modernRender(node2, container) {
      toggleWarning(true);
      var root2 = container[MARK] || createRoot(container);
      toggleWarning(false);
      root2.render(node2);
      container[MARK] = root2;
    }
    function legacyRender(node2, container) {
      reactRender(node2, container);
    }
    function render(node2, container) {
      if (createRoot) {
        modernRender(node2, container);
        return;
      }
      legacyRender(node2, container);
    }
    const genNotificationPlacementStyle = (token2) => {
      const {
        componentCls,
        notificationMarginEdge,
        animationMaxHeight
      } = token2;
      const noticeCls = `${componentCls}-notice`;
      const rightFadeIn = new Keyframe("antNotificationFadeIn", {
        "0%": {
          transform: `translate3d(100%, 0, 0)`,
          opacity: 0
        },
        "100%": {
          transform: `translate3d(0, 0, 0)`,
          opacity: 1
        }
      });
      const topFadeIn = new Keyframe("antNotificationTopFadeIn", {
        "0%": {
          top: -animationMaxHeight,
          opacity: 0
        },
        "100%": {
          top: 0,
          opacity: 1
        }
      });
      const bottomFadeIn = new Keyframe("antNotificationBottomFadeIn", {
        "0%": {
          bottom: token2.calc(animationMaxHeight).mul(-1).equal(),
          opacity: 0
        },
        "100%": {
          bottom: 0,
          opacity: 1
        }
      });
      const leftFadeIn = new Keyframe("antNotificationLeftFadeIn", {
        "0%": {
          transform: `translate3d(-100%, 0, 0)`,
          opacity: 0
        },
        "100%": {
          transform: `translate3d(0, 0, 0)`,
          opacity: 1
        }
      });
      return {
        [componentCls]: {
          [`&${componentCls}-top, &${componentCls}-bottom`]: {
            marginInline: 0,
            [noticeCls]: {
              marginInline: "auto auto"
            }
          },
          [`&${componentCls}-top`]: {
            [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
              animationName: topFadeIn
            }
          },
          [`&${componentCls}-bottom`]: {
            [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
              animationName: bottomFadeIn
            }
          },
          [`&${componentCls}-topRight, &${componentCls}-bottomRight`]: {
            [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
              animationName: rightFadeIn
            }
          },
          [`&${componentCls}-topLeft, &${componentCls}-bottomLeft`]: {
            marginRight: {
              value: 0,
              _skip_check_: true
            },
            marginLeft: {
              value: notificationMarginEdge,
              _skip_check_: true
            },
            [noticeCls]: {
              marginInlineEnd: "auto",
              marginInlineStart: 0
            },
            [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
              animationName: leftFadeIn
            }
          }
        }
      };
    };
    const NotificationPlacements = ["top", "topLeft", "topRight", "bottom", "bottomLeft", "bottomRight"];
    const placementAlignProperty = {
      topLeft: "left",
      topRight: "right",
      bottomLeft: "left",
      bottomRight: "right",
      top: "left",
      bottom: "left"
    };
    const genPlacementStackStyle = (token2, placement) => {
      const {
        componentCls
      } = token2;
      return {
        [`${componentCls}-${placement}`]: {
          [`&${componentCls}-stack > ${componentCls}-notice-wrapper`]: {
            [placement.startsWith("top") ? "top" : "bottom"]: 0,
            [placementAlignProperty[placement]]: {
              value: 0,
              _skip_check_: true
            }
          }
        }
      };
    };
    const genStackChildrenStyle = (token2) => {
      const childrenStyle = {};
      for (let i = 1; i < token2.notificationStackLayer; i++) {
        childrenStyle[`&:nth-last-child(${i + 1})`] = {
          overflow: "hidden",
          [`& > ${token2.componentCls}-notice`]: {
            opacity: 0,
            transition: `opacity ${token2.motionDurationMid}`
          }
        };
      }
      return Object.assign({
        [`&:not(:nth-last-child(-n+${token2.notificationStackLayer}))`]: {
          opacity: 0,
          overflow: "hidden",
          color: "transparent",
          pointerEvents: "none"
        }
      }, childrenStyle);
    };
    const genStackedNoticeStyle = (token2) => {
      const childrenStyle = {};
      for (let i = 1; i < token2.notificationStackLayer; i++) {
        childrenStyle[`&:nth-last-child(${i + 1})`] = {
          background: token2.colorBgBlur,
          backdropFilter: "blur(10px)",
          "-webkit-backdrop-filter": "blur(10px)"
        };
      }
      return Object.assign({}, childrenStyle);
    };
    const genStackStyle = (token2) => {
      const {
        componentCls
      } = token2;
      return Object.assign({
        [`${componentCls}-stack`]: {
          [`& > ${componentCls}-notice-wrapper`]: Object.assign({
            transition: `all ${token2.motionDurationSlow}, backdrop-filter 0s`,
            position: "absolute"
          }, genStackChildrenStyle(token2))
        },
        [`${componentCls}-stack:not(${componentCls}-stack-expanded)`]: {
          [`& > ${componentCls}-notice-wrapper`]: Object.assign({}, genStackedNoticeStyle(token2))
        },
        [`${componentCls}-stack${componentCls}-stack-expanded`]: {
          [`& > ${componentCls}-notice-wrapper`]: {
            "&:not(:nth-last-child(-n + 1))": {
              opacity: 1,
              overflow: "unset",
              color: "inherit",
              pointerEvents: "auto",
              [`& > ${token2.componentCls}-notice`]: {
                opacity: 1
              }
            },
            "&:after": {
              content: '""',
              position: "absolute",
              height: token2.margin,
              width: "100%",
              insetInline: 0,
              bottom: token2.calc(token2.margin).mul(-1).equal(),
              background: "transparent",
              pointerEvents: "auto"
            }
          }
        }
      }, NotificationPlacements.map((placement) => genPlacementStackStyle(token2, placement)).reduce((acc, cur) => Object.assign(Object.assign({}, acc), cur), {}));
    };
    const genNoticeStyle = (token2) => {
      const {
        iconCls,
        componentCls,
        // .ant-notification
        boxShadow,
        fontSizeLG,
        notificationMarginBottom,
        borderRadiusLG,
        colorSuccess,
        colorInfo,
        colorWarning,
        colorError,
        colorTextHeading,
        notificationBg,
        notificationPadding,
        notificationMarginEdge,
        notificationProgressBg,
        notificationProgressHeight,
        fontSize,
        lineHeight,
        width,
        notificationIconSize,
        colorText
      } = token2;
      const noticeCls = `${componentCls}-notice`;
      return {
        position: "relative",
        marginBottom: notificationMarginBottom,
        marginInlineStart: "auto",
        background: notificationBg,
        borderRadius: borderRadiusLG,
        boxShadow,
        [noticeCls]: {
          padding: notificationPadding,
          width,
          maxWidth: `calc(100vw - ${unit$1(token2.calc(notificationMarginEdge).mul(2).equal())})`,
          overflow: "hidden",
          lineHeight,
          wordWrap: "break-word"
        },
        [`${noticeCls}-message`]: {
          marginBottom: token2.marginXS,
          color: colorTextHeading,
          fontSize: fontSizeLG,
          lineHeight: token2.lineHeightLG
        },
        [`${noticeCls}-description`]: {
          fontSize,
          color: colorText
        },
        [`${noticeCls}-closable ${noticeCls}-message`]: {
          paddingInlineEnd: token2.paddingLG
        },
        [`${noticeCls}-with-icon ${noticeCls}-message`]: {
          marginBottom: token2.marginXS,
          marginInlineStart: token2.calc(token2.marginSM).add(notificationIconSize).equal(),
          fontSize: fontSizeLG
        },
        [`${noticeCls}-with-icon ${noticeCls}-description`]: {
          marginInlineStart: token2.calc(token2.marginSM).add(notificationIconSize).equal(),
          fontSize
        },
        // Icon & color style in different selector level
        // https://github.com/ant-design/ant-design/issues/16503
        // https://github.com/ant-design/ant-design/issues/15512
        [`${noticeCls}-icon`]: {
          position: "absolute",
          fontSize: notificationIconSize,
          lineHeight: 1,
          // icon-font
          [`&-success${iconCls}`]: {
            color: colorSuccess
          },
          [`&-info${iconCls}`]: {
            color: colorInfo
          },
          [`&-warning${iconCls}`]: {
            color: colorWarning
          },
          [`&-error${iconCls}`]: {
            color: colorError
          }
        },
        [`${noticeCls}-close`]: Object.assign({
          position: "absolute",
          top: token2.notificationPaddingVertical,
          insetInlineEnd: token2.notificationPaddingHorizontal,
          color: token2.colorIcon,
          outline: "none",
          width: token2.notificationCloseButtonSize,
          height: token2.notificationCloseButtonSize,
          borderRadius: token2.borderRadiusSM,
          transition: `background-color ${token2.motionDurationMid}, color ${token2.motionDurationMid}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            color: token2.colorIconHover,
            backgroundColor: token2.colorBgTextHover
          },
          "&:active": {
            backgroundColor: token2.colorBgTextActive
          }
        }, genFocusStyle(token2)),
        [`${noticeCls}-progress`]: {
          position: "absolute",
          display: "block",
          appearance: "none",
          WebkitAppearance: "none",
          inlineSize: `calc(100% - ${unit$1(borderRadiusLG)} * 2)`,
          left: {
            _skip_check_: true,
            value: borderRadiusLG
          },
          right: {
            _skip_check_: true,
            value: borderRadiusLG
          },
          bottom: 0,
          blockSize: notificationProgressHeight,
          border: 0,
          "&, &::-webkit-progress-bar": {
            borderRadius: borderRadiusLG,
            backgroundColor: `rgba(0, 0, 0, 0.04)`
          },
          "&::-moz-progress-bar": {
            background: notificationProgressBg
          },
          "&::-webkit-progress-value": {
            borderRadius: borderRadiusLG,
            background: notificationProgressBg
          }
        },
        [`${noticeCls}-btn`]: {
          float: "right",
          marginTop: token2.marginSM
        }
      };
    };
    const genNotificationStyle = (token2) => {
      const {
        componentCls,
        // .ant-notification
        notificationMarginBottom,
        notificationMarginEdge,
        motionDurationMid,
        motionEaseInOut
      } = token2;
      const noticeCls = `${componentCls}-notice`;
      const fadeOut = new Keyframe("antNotificationFadeOut", {
        "0%": {
          maxHeight: token2.animationMaxHeight,
          marginBottom: notificationMarginBottom
        },
        "100%": {
          maxHeight: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          opacity: 0
        }
      });
      return [
        // ============================ Holder ============================
        {
          [componentCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
            position: "fixed",
            zIndex: token2.zIndexPopup,
            marginRight: {
              value: notificationMarginEdge,
              _skip_check_: true
            },
            [`${componentCls}-hook-holder`]: {
              position: "relative"
            },
            //  animation
            [`${componentCls}-fade-appear-prepare`]: {
              opacity: "0 !important"
            },
            [`${componentCls}-fade-enter, ${componentCls}-fade-appear`]: {
              animationDuration: token2.motionDurationMid,
              animationTimingFunction: motionEaseInOut,
              animationFillMode: "both",
              opacity: 0,
              animationPlayState: "paused"
            },
            [`${componentCls}-fade-leave`]: {
              animationTimingFunction: motionEaseInOut,
              animationFillMode: "both",
              animationDuration: motionDurationMid,
              animationPlayState: "paused"
            },
            [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
              animationPlayState: "running"
            },
            [`${componentCls}-fade-leave${componentCls}-fade-leave-active`]: {
              animationName: fadeOut,
              animationPlayState: "running"
            },
            // RTL
            "&-rtl": {
              direction: "rtl",
              [`${noticeCls}-btn`]: {
                float: "left"
              }
            }
          })
        },
        // ============================ Notice ============================
        {
          [componentCls]: {
            [`${noticeCls}-wrapper`]: Object.assign({}, genNoticeStyle(token2))
          }
        }
      ];
    };
    const prepareComponentToken = (token2) => ({
      zIndexPopup: token2.zIndexPopupBase + CONTAINER_MAX_OFFSET + 50,
      width: 384
    });
    const prepareNotificationToken = (token2) => {
      const notificationPaddingVertical = token2.paddingMD;
      const notificationPaddingHorizontal = token2.paddingLG;
      const notificationToken = merge(token2, {
        notificationBg: token2.colorBgElevated,
        notificationPaddingVertical,
        notificationPaddingHorizontal,
        notificationIconSize: token2.calc(token2.fontSizeLG).mul(token2.lineHeightLG).equal(),
        notificationCloseButtonSize: token2.calc(token2.controlHeightLG).mul(0.55).equal(),
        notificationMarginBottom: token2.margin,
        notificationPadding: `${unit$1(token2.paddingMD)} ${unit$1(token2.paddingContentHorizontalLG)}`,
        notificationMarginEdge: token2.marginLG,
        animationMaxHeight: 150,
        notificationStackLayer: 3,
        notificationProgressHeight: 2,
        notificationProgressBg: `linear-gradient(90deg, ${token2.colorPrimaryBorderHover}, ${token2.colorPrimary})`
      });
      return notificationToken;
    };
    const useStyle = genStyleHooks("Notification", (token2) => {
      const notificationToken = prepareNotificationToken(token2);
      return [genNotificationStyle(notificationToken), genNotificationPlacementStyle(notificationToken), genStackStyle(notificationToken)];
    }, prepareComponentToken);
    const PurePanelStyle = genSubStyleComponent(["Notification", "PurePanel"], (token2) => {
      const noticeCls = `${token2.componentCls}-notice`;
      const notificationToken = prepareNotificationToken(token2);
      return {
        [`${noticeCls}-pure-panel`]: Object.assign(Object.assign({}, genNoticeStyle(notificationToken)), {
          width: notificationToken.width,
          maxWidth: `calc(100vw - ${unit$1(token2.calc(notificationToken.notificationMarginEdge).mul(2).equal())})`,
          margin: 0
        })
      };
    }, prepareComponentToken);
    var __rest$1 = function(s, e2) {
      var t2 = {};
      for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
      }
      return t2;
    };
    function getCloseIcon(prefixCls, closeIcon) {
      if (closeIcon === null || closeIcon === false) {
        return null;
      }
      return closeIcon || /* @__PURE__ */ reactExports.createElement(RefIcon$2, {
        className: `${prefixCls}-close-icon`
      });
    }
    const typeToIcon = {
      success: RefIcon$4,
      info: RefIcon,
      error: RefIcon$3,
      warning: RefIcon$1
    };
    const PureContent = (props) => {
      const {
        prefixCls,
        icon,
        type,
        message,
        description,
        btn,
        role = "alert"
      } = props;
      let iconNode = null;
      if (icon) {
        iconNode = /* @__PURE__ */ reactExports.createElement("span", {
          className: `${prefixCls}-icon`
        }, icon);
      } else if (type) {
        iconNode = /* @__PURE__ */ reactExports.createElement(typeToIcon[type] || null, {
          className: classNames(`${prefixCls}-icon`, `${prefixCls}-icon-${type}`)
        });
      }
      return /* @__PURE__ */ reactExports.createElement("div", {
        className: classNames({
          [`${prefixCls}-with-icon`]: iconNode
        }),
        role
      }, iconNode, /* @__PURE__ */ reactExports.createElement("div", {
        className: `${prefixCls}-message`
      }, message), /* @__PURE__ */ reactExports.createElement("div", {
        className: `${prefixCls}-description`
      }, description), btn && /* @__PURE__ */ reactExports.createElement("div", {
        className: `${prefixCls}-btn`
      }, btn));
    };
    const PurePanel = (props) => {
      const {
        prefixCls: staticPrefixCls,
        className,
        icon,
        type,
        message,
        description,
        btn,
        closable = true,
        closeIcon,
        className: notificationClassName
      } = props, restProps = __rest$1(props, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "closable", "closeIcon", "className"]);
      const {
        getPrefixCls
      } = reactExports.useContext(ConfigContext);
      const prefixCls = staticPrefixCls || getPrefixCls("notification");
      const noticePrefixCls = `${prefixCls}-notice`;
      const rootCls = useCSSVarCls(prefixCls);
      const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls);
      return wrapCSSVar(/* @__PURE__ */ reactExports.createElement("div", {
        className: classNames(`${noticePrefixCls}-pure-panel`, hashId, className, cssVarCls, rootCls)
      }, /* @__PURE__ */ reactExports.createElement(PurePanelStyle, {
        prefixCls
      }), /* @__PURE__ */ reactExports.createElement(Notify, Object.assign({}, restProps, {
        prefixCls,
        eventKey: "pure",
        duration: null,
        closable,
        className: classNames({
          notificationClassName
        }),
        closeIcon: getCloseIcon(prefixCls, closeIcon),
        content: /* @__PURE__ */ reactExports.createElement(PureContent, {
          prefixCls: noticePrefixCls,
          icon,
          type,
          message,
          description,
          btn
        })
      }))));
    };
    function getPlacementStyle(placement, top, bottom) {
      let style2;
      switch (placement) {
        case "top":
          style2 = {
            left: "50%",
            transform: "translateX(-50%)",
            right: "auto",
            top,
            bottom: "auto"
          };
          break;
        case "topLeft":
          style2 = {
            left: 0,
            top,
            bottom: "auto"
          };
          break;
        case "topRight":
          style2 = {
            right: 0,
            top,
            bottom: "auto"
          };
          break;
        case "bottom":
          style2 = {
            left: "50%",
            transform: "translateX(-50%)",
            right: "auto",
            top: "auto",
            bottom
          };
          break;
        case "bottomLeft":
          style2 = {
            left: 0,
            top: "auto",
            bottom
          };
          break;
        default:
          style2 = {
            right: 0,
            top: "auto",
            bottom
          };
          break;
      }
      return style2;
    }
    function getMotion(prefixCls) {
      return {
        motionName: `${prefixCls}-fade`
      };
    }
    var __rest = function(s, e2) {
      var t2 = {};
      for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
      }
      return t2;
    };
    const DEFAULT_OFFSET = 24;
    const DEFAULT_DURATION = 4.5;
    const DEFAULT_PLACEMENT = "topRight";
    const Wrapper = (_ref) => {
      let {
        children,
        prefixCls
      } = _ref;
      const rootCls = useCSSVarCls(prefixCls);
      const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls);
      return wrapCSSVar(/* @__PURE__ */ ReactExports.createElement(NotificationProvider, {
        classNames: {
          list: classNames(hashId, cssVarCls, rootCls)
        }
      }, children));
    };
    const renderNotifications = (node2, _ref2) => {
      let {
        prefixCls,
        key
      } = _ref2;
      return /* @__PURE__ */ ReactExports.createElement(Wrapper, {
        prefixCls,
        key
      }, node2);
    };
    const Holder = /* @__PURE__ */ ReactExports.forwardRef((props, ref) => {
      const {
        top,
        bottom,
        prefixCls: staticPrefixCls,
        getContainer: staticGetContainer,
        maxCount,
        rtl,
        onAllRemoved,
        stack,
        duration,
        pauseOnHover = true,
        showProgress
      } = props;
      const {
        getPrefixCls,
        getPopupContainer,
        notification: notification2,
        direction
      } = reactExports.useContext(ConfigContext);
      const [, token2] = useToken();
      const prefixCls = staticPrefixCls || getPrefixCls("notification");
      const getStyle2 = (placement) => getPlacementStyle(placement, top !== null && top !== void 0 ? top : DEFAULT_OFFSET, bottom !== null && bottom !== void 0 ? bottom : DEFAULT_OFFSET);
      const getClassName = () => classNames({
        [`${prefixCls}-rtl`]: rtl !== null && rtl !== void 0 ? rtl : direction === "rtl"
      });
      const getNotificationMotion = () => getMotion(prefixCls);
      const [api, holder] = useNotification$1({
        prefixCls,
        style: getStyle2,
        className: getClassName,
        motion: getNotificationMotion,
        closable: true,
        closeIcon: getCloseIcon(prefixCls),
        duration: duration !== null && duration !== void 0 ? duration : DEFAULT_DURATION,
        getContainer: () => (staticGetContainer === null || staticGetContainer === void 0 ? void 0 : staticGetContainer()) || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer()) || document.body,
        maxCount,
        pauseOnHover,
        showProgress,
        onAllRemoved,
        renderNotifications,
        stack: stack === false ? false : {
          threshold: typeof stack === "object" ? stack === null || stack === void 0 ? void 0 : stack.threshold : void 0,
          offset: 8,
          gap: token2.margin
        }
      });
      ReactExports.useImperativeHandle(ref, () => Object.assign(Object.assign({}, api), {
        prefixCls,
        notification: notification2
      }));
      return holder;
    });
    function useInternalNotification(notificationConfig) {
      const holderRef = ReactExports.useRef(null);
      const wrapAPI = ReactExports.useMemo(() => {
        const open2 = (config) => {
          var _a2;
          if (!holderRef.current) {
            return;
          }
          const {
            open: originOpen,
            prefixCls,
            notification: notification2
          } = holderRef.current;
          const noticePrefixCls = `${prefixCls}-notice`;
          const {
            message,
            description,
            icon,
            type,
            btn,
            className,
            style: style2,
            role = "alert",
            closeIcon,
            closable
          } = config, restConfig = __rest(config, ["message", "description", "icon", "type", "btn", "className", "style", "role", "closeIcon", "closable"]);
          const realCloseIcon = getCloseIcon(noticePrefixCls, typeof closeIcon !== "undefined" ? closeIcon : notification2 === null || notification2 === void 0 ? void 0 : notification2.closeIcon);
          return originOpen(Object.assign(Object.assign({
            // use placement from props instead of hard-coding "topRight"
            placement: (_a2 = notificationConfig === null || notificationConfig === void 0 ? void 0 : notificationConfig.placement) !== null && _a2 !== void 0 ? _a2 : DEFAULT_PLACEMENT
          }, restConfig), {
            content: /* @__PURE__ */ ReactExports.createElement(PureContent, {
              prefixCls: noticePrefixCls,
              icon,
              type,
              message,
              description,
              btn,
              role
            }),
            className: classNames(type && `${noticePrefixCls}-${type}`, className, notification2 === null || notification2 === void 0 ? void 0 : notification2.className),
            style: Object.assign(Object.assign({}, notification2 === null || notification2 === void 0 ? void 0 : notification2.style), style2),
            closeIcon: realCloseIcon,
            closable: closable !== null && closable !== void 0 ? closable : !!realCloseIcon
          }));
        };
        const destroy2 = (key) => {
          var _a2, _b;
          if (key !== void 0) {
            (_a2 = holderRef.current) === null || _a2 === void 0 ? void 0 : _a2.close(key);
          } else {
            (_b = holderRef.current) === null || _b === void 0 ? void 0 : _b.destroy();
          }
        };
        const clone = {
          open: open2,
          destroy: destroy2
        };
        const keys2 = ["success", "info", "warning", "error"];
        keys2.forEach((type) => {
          clone[type] = (config) => open2(Object.assign(Object.assign({}, config), {
            type
          }));
        });
        return clone;
      }, []);
      return [wrapAPI, /* @__PURE__ */ ReactExports.createElement(Holder, Object.assign({
        key: "notification-holder"
      }, notificationConfig, {
        ref: holderRef
      }))];
    }
    function useNotification(notificationConfig) {
      return useInternalNotification(notificationConfig);
    }
    const AppConfigContext = /* @__PURE__ */ ReactExports.createContext({});
    let notification = null;
    let act = (callback) => callback();
    let taskQueue = [];
    let defaultGlobalConfig = {};
    function getGlobalContext() {
      const {
        getContainer: getContainer2,
        rtl,
        maxCount,
        top,
        bottom,
        showProgress,
        pauseOnHover
      } = defaultGlobalConfig;
      const mergedContainer = (getContainer2 === null || getContainer2 === void 0 ? void 0 : getContainer2()) || document.body;
      return {
        getContainer: () => mergedContainer,
        rtl,
        maxCount,
        top,
        bottom,
        showProgress,
        pauseOnHover
      };
    }
    const GlobalHolder = /* @__PURE__ */ ReactExports.forwardRef((props, ref) => {
      const {
        notificationConfig,
        sync
      } = props;
      const {
        getPrefixCls
      } = reactExports.useContext(ConfigContext);
      const prefixCls = defaultGlobalConfig.prefixCls || getPrefixCls("notification");
      const appConfig = reactExports.useContext(AppConfigContext);
      const [api, holder] = useInternalNotification(Object.assign(Object.assign(Object.assign({}, notificationConfig), {
        prefixCls
      }), appConfig.notification));
      ReactExports.useEffect(sync, []);
      ReactExports.useImperativeHandle(ref, () => {
        const instance = Object.assign({}, api);
        Object.keys(instance).forEach((method) => {
          instance[method] = function() {
            sync();
            return api[method].apply(api, arguments);
          };
        });
        return {
          instance,
          sync
        };
      });
      return holder;
    });
    const GlobalHolderWrapper = /* @__PURE__ */ ReactExports.forwardRef((_, ref) => {
      const [notificationConfig, setNotificationConfig] = ReactExports.useState(getGlobalContext);
      const sync = () => {
        setNotificationConfig(getGlobalContext);
      };
      ReactExports.useEffect(sync, []);
      const global2 = globalConfig();
      const rootPrefixCls = global2.getRootPrefixCls();
      const rootIconPrefixCls = global2.getIconPrefixCls();
      const theme = global2.getTheme();
      const dom = /* @__PURE__ */ ReactExports.createElement(GlobalHolder, {
        ref,
        sync,
        notificationConfig
      });
      return /* @__PURE__ */ ReactExports.createElement(ConfigProvider, {
        prefixCls: rootPrefixCls,
        iconPrefixCls: rootIconPrefixCls,
        theme
      }, global2.holderRender ? global2.holderRender(dom) : dom);
    });
    function flushNotice() {
      if (!notification) {
        const holderFragment = document.createDocumentFragment();
        const newNotification = {
          fragment: holderFragment
        };
        notification = newNotification;
        act(() => {
          render(/* @__PURE__ */ ReactExports.createElement(GlobalHolderWrapper, {
            ref: (node2) => {
              const {
                instance,
                sync
              } = node2 || {};
              Promise.resolve().then(() => {
                if (!newNotification.instance && instance) {
                  newNotification.instance = instance;
                  newNotification.sync = sync;
                  flushNotice();
                }
              });
            }
          }), holderFragment);
        });
        return;
      }
      if (!notification.instance) {
        return;
      }
      taskQueue.forEach((task) => {
        switch (task.type) {
          case "open": {
            act(() => {
              notification.instance.open(Object.assign(Object.assign({}, defaultGlobalConfig), task.config));
            });
            break;
          }
          case "destroy":
            act(() => {
              notification === null || notification === void 0 ? void 0 : notification.instance.destroy(task.key);
            });
            break;
        }
      });
      taskQueue = [];
    }
    function setNotificationGlobalConfig(config) {
      defaultGlobalConfig = Object.assign(Object.assign({}, defaultGlobalConfig), config);
      act(() => {
        var _a2;
        (_a2 = notification === null || notification === void 0 ? void 0 : notification.sync) === null || _a2 === void 0 ? void 0 : _a2.call(notification);
      });
    }
    function open(config) {
      taskQueue.push({
        type: "open",
        config
      });
      flushNotice();
    }
    const destroy = (key) => {
      taskQueue.push({
        type: "destroy",
        key
      });
      flushNotice();
    };
    const methods = ["success", "info", "warning", "error"];
    const baseStaticMethods = {
      open,
      destroy,
      config: setNotificationGlobalConfig,
      useNotification,
      _InternalPanelDoNotUseOrYouWillBeFired: PurePanel
    };
    const staticMethods = baseStaticMethods;
    methods.forEach((type) => {
      staticMethods[type] = (config) => open(Object.assign(Object.assign({}, config), {
        type
      }));
    });
    var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var _freeGlobal = freeGlobal$1;
    var freeGlobal = _freeGlobal;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root$3 = freeGlobal || freeSelf || Function("return this")();
    var _root = root$3;
    var root$2 = _root;
    var Symbol$4 = root$2.Symbol;
    var _Symbol = Symbol$4;
    var Symbol$3 = _Symbol;
    var objectProto$4 = Object.prototype;
    var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
    var nativeObjectToString$1 = objectProto$4.toString;
    var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : void 0;
    function getRawTag$1(value) {
      var isOwn = hasOwnProperty$3.call(value, symToStringTag$1), tag = value[symToStringTag$1];
      try {
        value[symToStringTag$1] = void 0;
        var unmasked = true;
      } catch (e2) {
      }
      var result = nativeObjectToString$1.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag$1] = tag;
        } else {
          delete value[symToStringTag$1];
        }
      }
      return result;
    }
    var _getRawTag = getRawTag$1;
    var objectProto$3 = Object.prototype;
    var nativeObjectToString = objectProto$3.toString;
    function objectToString$1(value) {
      return nativeObjectToString.call(value);
    }
    var _objectToString = objectToString$1;
    var Symbol$2 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
    var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
    function baseGetTag$1(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    var _baseGetTag = baseGetTag$1;
    function isObject$2(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    var isObject_1 = isObject$2;
    var baseGetTag = _baseGetTag, isObject$1 = isObject_1;
    var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
    function isFunction$1(value) {
      if (!isObject$1(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    var isFunction_1 = isFunction$1;
    var root$1 = _root;
    var coreJsData$1 = root$1["__core-js_shared__"];
    var _coreJsData = coreJsData$1;
    var coreJsData = _coreJsData;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked$1(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    var _isMasked = isMasked$1;
    var funcProto$1 = Function.prototype;
    var funcToString$1 = funcProto$1.toString;
    function toSource$1(func) {
      if (func != null) {
        try {
          return funcToString$1.call(func);
        } catch (e2) {
        }
        try {
          return func + "";
        } catch (e2) {
        }
      }
      return "";
    }
    var _toSource = toSource$1;
    var isFunction = isFunction_1, isMasked = _isMasked, isObject = isObject_1, toSource = _toSource;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype, objectProto$2 = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty$2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative$1(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    var _baseIsNative = baseIsNative$1;
    function getValue$1(object, key) {
      return object == null ? void 0 : object[key];
    }
    var _getValue = getValue$1;
    var baseIsNative = _baseIsNative, getValue = _getValue;
    function getNative$2(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    var _getNative = getNative$2;
    var getNative$1 = _getNative;
    var nativeCreate$4 = getNative$1(Object, "create");
    var _nativeCreate = nativeCreate$4;
    var nativeCreate$3 = _nativeCreate;
    function hashClear$1() {
      this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
      this.size = 0;
    }
    var _hashClear = hashClear$1;
    function hashDelete$1(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    var _hashDelete = hashDelete$1;
    var nativeCreate$2 = _nativeCreate;
    var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
    var objectProto$1 = Object.prototype;
    var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
    function hashGet$1(key) {
      var data = this.__data__;
      if (nativeCreate$2) {
        var result = data[key];
        return result === HASH_UNDEFINED$1 ? void 0 : result;
      }
      return hasOwnProperty$1.call(data, key) ? data[key] : void 0;
    }
    var _hashGet = hashGet$1;
    var nativeCreate$1 = _nativeCreate;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas$1(key) {
      var data = this.__data__;
      return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    var _hashHas = hashHas$1;
    var nativeCreate = _nativeCreate;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet$1(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    var _hashSet = hashSet$1;
    var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
    function Hash$1(entries) {
      var index = -1, length2 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length2) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash$1.prototype.clear = hashClear;
    Hash$1.prototype["delete"] = hashDelete;
    Hash$1.prototype.get = hashGet;
    Hash$1.prototype.has = hashHas;
    Hash$1.prototype.set = hashSet;
    var _Hash = Hash$1;
    function listCacheClear$1() {
      this.__data__ = [];
      this.size = 0;
    }
    var _listCacheClear = listCacheClear$1;
    function eq$1(value, other) {
      return value === other || value !== value && other !== other;
    }
    var eq_1 = eq$1;
    var eq = eq_1;
    function assocIndexOf$4(array, key) {
      var length2 = array.length;
      while (length2--) {
        if (eq(array[length2][0], key)) {
          return length2;
        }
      }
      return -1;
    }
    var _assocIndexOf = assocIndexOf$4;
    var assocIndexOf$3 = _assocIndexOf;
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete$1(key) {
      var data = this.__data__, index = assocIndexOf$3(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    var _listCacheDelete = listCacheDelete$1;
    var assocIndexOf$2 = _assocIndexOf;
    function listCacheGet$1(key) {
      var data = this.__data__, index = assocIndexOf$2(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    var _listCacheGet = listCacheGet$1;
    var assocIndexOf$1 = _assocIndexOf;
    function listCacheHas$1(key) {
      return assocIndexOf$1(this.__data__, key) > -1;
    }
    var _listCacheHas = listCacheHas$1;
    var assocIndexOf = _assocIndexOf;
    function listCacheSet$1(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    var _listCacheSet = listCacheSet$1;
    var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
    function ListCache$1(entries) {
      var index = -1, length2 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length2) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache$1.prototype.clear = listCacheClear;
    ListCache$1.prototype["delete"] = listCacheDelete;
    ListCache$1.prototype.get = listCacheGet;
    ListCache$1.prototype.has = listCacheHas;
    ListCache$1.prototype.set = listCacheSet;
    var _ListCache = ListCache$1;
    var getNative = _getNative, root = _root;
    var Map$2 = getNative(root, "Map");
    var _Map = Map$2;
    var Hash = _Hash, ListCache = _ListCache, Map$1 = _Map;
    function mapCacheClear$1() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map$1 || ListCache)(),
        "string": new Hash()
      };
    }
    var _mapCacheClear = mapCacheClear$1;
    function isKeyable$1(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    var _isKeyable = isKeyable$1;
    var isKeyable = _isKeyable;
    function getMapData$4(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    var _getMapData = getMapData$4;
    var getMapData$3 = _getMapData;
    function mapCacheDelete$1(key) {
      var result = getMapData$3(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    var _mapCacheDelete = mapCacheDelete$1;
    var getMapData$2 = _getMapData;
    function mapCacheGet$1(key) {
      return getMapData$2(this, key).get(key);
    }
    var _mapCacheGet = mapCacheGet$1;
    var getMapData$1 = _getMapData;
    function mapCacheHas$1(key) {
      return getMapData$1(this, key).has(key);
    }
    var _mapCacheHas = mapCacheHas$1;
    var getMapData = _getMapData;
    function mapCacheSet$1(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    var _mapCacheSet = mapCacheSet$1;
    var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
    function MapCache$1(entries) {
      var index = -1, length2 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length2) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache$1.prototype.clear = mapCacheClear;
    MapCache$1.prototype["delete"] = mapCacheDelete;
    MapCache$1.prototype.get = mapCacheGet;
    MapCache$1.prototype.has = mapCacheHas;
    MapCache$1.prototype.set = mapCacheSet;
    var _MapCache = MapCache$1;
    var MapCache = _MapCache;
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize$1(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize$1.Cache || MapCache)();
      return memoized;
    }
    memoize$1.Cache = MapCache;
    var memoize_1 = memoize$1;
    var memoize = memoize_1;
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped$1(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    var _memoizeCapped = memoizeCapped$1;
    var memoizeCapped = _memoizeCapped;
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match2, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match2);
      });
      return result;
    });
    var Symbol$1 = _Symbol;
    var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0;
    symbolProto ? symbolProto.toString : void 0;
    const __vite_import_meta_env__$1 = { "BASE_URL": "/", "DEV": false, "MODE": "development-unminified", "PROD": true, "SSR": false };
    const createStoreImpl = (createState) => {
      let state;
      const listeners = /* @__PURE__ */ new Set();
      const setState = (partial, replace2) => {
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
          const previousState = state;
          state = (replace2 != null ? replace2 : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
          listeners.forEach((listener) => listener(state, previousState));
        }
      };
      const getState = () => state;
      const getInitialState = () => initialState;
      const subscribe = (listener) => {
        listeners.add(listener);
        return () => listeners.delete(listener);
      };
      const destroy2 = () => {
        if ((__vite_import_meta_env__$1 ? "development-unminified" : void 0) !== "production") {
          console.warn(
            "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
          );
        }
        listeners.clear();
      };
      const api = { setState, getState, getInitialState, subscribe, destroy: destroy2 };
      const initialState = state = createState(setState, getState, api);
      return api;
    };
    const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
    var withSelector = { exports: {} };
    var withSelector_production_min = {};
    var shim = { exports: {} };
    var useSyncExternalStoreShim_production_min = {};
    /**
     * @license React
     * use-sync-external-store-shim.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var e = reactExports;
    function h$1(a, b2) {
      return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
    }
    var k = "function" === typeof Object.is ? Object.is : h$1, l = e.useState, m = e.useEffect, n$1 = e.useLayoutEffect, p$1 = e.useDebugValue;
    function q$2(a, b2) {
      var d2 = b2(), f2 = l({ inst: { value: d2, getSnapshot: b2 } }), c2 = f2[0].inst, g2 = f2[1];
      n$1(function() {
        c2.value = d2;
        c2.getSnapshot = b2;
        r$1(c2) && g2({ inst: c2 });
      }, [a, d2, b2]);
      m(function() {
        r$1(c2) && g2({ inst: c2 });
        return a(function() {
          r$1(c2) && g2({ inst: c2 });
        });
      }, [a]);
      p$1(d2);
      return d2;
    }
    function r$1(a) {
      var b2 = a.getSnapshot;
      a = a.value;
      try {
        var d2 = b2();
        return !k(a, d2);
      } catch (f2) {
        return true;
      }
    }
    function t$1(a, b2) {
      return b2();
    }
    var u$1 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$1 : q$2;
    useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u$1;
    {
      shim.exports = useSyncExternalStoreShim_production_min;
    }
    var shimExports = shim.exports;
    /**
     * @license React
     * use-sync-external-store-shim/with-selector.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var h = reactExports, n = shimExports;
    function p(a, b2) {
      return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
    }
    var q$1 = "function" === typeof Object.is ? Object.is : p, r = n.useSyncExternalStore, t = h.useRef, u = h.useEffect, v = h.useMemo, w$1 = h.useDebugValue;
    withSelector_production_min.useSyncExternalStoreWithSelector = function(a, b2, e2, l2, g2) {
      var c2 = t(null);
      if (null === c2.current) {
        var f2 = { hasValue: false, value: null };
        c2.current = f2;
      } else f2 = c2.current;
      c2 = v(function() {
        function a2(a3) {
          if (!c3) {
            c3 = true;
            d3 = a3;
            a3 = l2(a3);
            if (void 0 !== g2 && f2.hasValue) {
              var b3 = f2.value;
              if (g2(b3, a3)) return k2 = b3;
            }
            return k2 = a3;
          }
          b3 = k2;
          if (q$1(d3, a3)) return b3;
          var e3 = l2(a3);
          if (void 0 !== g2 && g2(b3, e3)) return b3;
          d3 = a3;
          return k2 = e3;
        }
        var c3 = false, d3, k2, m2 = void 0 === e2 ? null : e2;
        return [function() {
          return a2(b2());
        }, null === m2 ? void 0 : function() {
          return a2(m2());
        }];
      }, [b2, e2, l2, g2]);
      var d2 = r(a, c2[0], c2[1]);
      u(function() {
        f2.hasValue = true;
        f2.value = d2;
      }, [d2]);
      w$1(d2);
      return d2;
    };
    {
      withSelector.exports = withSelector_production_min;
    }
    var withSelectorExports = withSelector.exports;
    const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(withSelectorExports);
    const __vite_import_meta_env__ = { "BASE_URL": "/", "DEV": false, "MODE": "development-unminified", "PROD": true, "SSR": false };
    const { useDebugValue } = ReactExports;
    const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
    let didWarnAboutEqualityFn = false;
    const identity = (arg) => arg;
    function useStore(api, selector = identity, equalityFn) {
      if ((__vite_import_meta_env__ ? "development-unminified" : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
        console.warn(
          "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
        );
        didWarnAboutEqualityFn = true;
      }
      const slice2 = useSyncExternalStoreWithSelector(
        api.subscribe,
        api.getState,
        api.getServerState || api.getInitialState,
        selector,
        equalityFn
      );
      useDebugValue(slice2);
      return slice2;
    }
    const createImpl = (createState) => {
      if ((__vite_import_meta_env__ ? "development-unminified" : void 0) !== "production" && typeof createState !== "function") {
        console.warn(
          "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
        );
      }
      const api = typeof createState === "function" ? createStore(createState) : createState;
      const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
      Object.assign(useBoundStore, api);
      return useBoundStore;
    };
    const create = (createState) => createState ? createImpl(createState) : createImpl;
    const editorStore = create((set2) => ({
      // Post Data
      postID: null,
      postType: null,
      common: {
        range: {
          min: 0,
          max: 2500
        }
      },
      selectedLayout: {
        label: "Card",
        value: "Card",
        type: "free"
      },
      selectedView: {
        label: "Grid",
        value: "grid",
        type: "free"
      },
      showcaseDetails: {
        enable: false,
        type: "modal"
      },
      // Container Tools
      containerSettings: {
        width: {
          range: {
            min: 0,
            max: 2500
          },
          default: {
            desktop: "1200px",
            tablet: "768px",
            mobile: "100%"
          }
        }
      },
      columnSettings: {
        column: {
          range: {
            min: 1,
            max: 12
          },
          default: {
            desktop: 3,
            tablet: 2,
            mobile: 1
          }
        },
        gap: {
          range: {
            min: 1,
            max: 100
          },
          default: {
            desktop: "10px",
            tablet: "15px",
            mobile: "20px"
          }
        }
      },
      carouselSettings: {
        slidesToShow: {
          range: {
            min: 1,
            max: 12
          },
          default: {
            desktop: 3,
            tablet: 2,
            mobile: 1
          }
        },
        slidesToScroll: {
          range: {
            min: 1,
            max: 12
          },
          default: {
            desktop: 1,
            tablet: 1,
            mobile: 1
          }
        },
        slideSpeed: {
          range: {
            min: 100,
            max: 5e3
          },
          default: 3e3
        },
        gap: {
          range: {
            min: 0,
            max: 100
          },
          default: 20
        },
        transition: "slide",
        infinite: true,
        repeat: true,
        centerSlide: false,
        autoPlay: true
      },
      marqueeSettings: {
        marqueeSpeed: {
          range: {
            min: 1,
            max: 1e3
          },
          default: 50
        },
        infinite: true,
        pauseOnClick: false,
        pauseOnHover: true,
        direction: "left",
        delay: 0
      },
      updateState: (key, value) => set2((state) => {
        const keys2 = key.split(".");
        if (keys2.length === 1) {
          return {
            ...state,
            [key]: value
          };
        }
        const deepUpdate = (obj, keys3) => {
          const [firstKey, ...restKeys] = keys3;
          if (restKeys.length === 0) {
            return { ...obj, [firstKey]: value };
          }
          return {
            ...obj,
            [firstKey]: deepUpdate(obj[firstKey] !== void 0 ? obj[firstKey] : {}, restKeys)
          };
        };
        return deepUpdate(state, keys2);
      })
    }));
    const ajax_url$1 = tsteam_settings.ajax_url;
    const updateData = (action, data, post_id) => {
      return new Promise((resolve, reject) => {
        jQuery.post(ajax_url$1, {
          _ajax_nonce: tsteam_settings.nonce,
          action,
          post_id,
          data: { ...data }
        }, function(response) {
          if (response.success) {
            resolve(response);
          } else {
            reject(response);
          }
        });
      });
    };
    const toastNotification = (type, message, description) => {
      staticMethods[type]({
        message,
        description,
        placement: "topRight",
        showProgress: true
      });
    };
    create((set2) => ({
      // saveSettings: (key, value) => {
      //     const updateState = editorStore.getState().updateState;
      //     updateState(key, value);
      // },
      saveSettings: (key, value) => {
        const updateState = editorStore.getState().updateState;
        const keyParts = key.split("[");
        if (keyParts.length > 1) {
          const nestedKey = keyParts.map((part) => part.replace("]", "")).join(".");
          updateState(nestedKey, value);
        } else {
          updateState(key, value);
        }
      },
      updateSettings: (action) => {
        const state = editorStore.getState();
        const { postID, postType, ...restState } = state;
        const data = Object.keys(restState).filter((key) => typeof restState[key] !== "function").reduce((obj, key) => {
          obj[key] = restState[key];
          return obj;
        }, {});
        if (postID) {
          updateData(action, data, postID).then((response) => {
            toastNotification("success", `Successfully Updated`, `The settings have been successfully updated.`);
            console.log("Tools updated successfully on the server:", response);
            Object.keys(data).forEach((key) => {
              editorStore.getState().updateState(key, data[key]);
            });
          }).catch((error) => {
            toastNotification("error", `Update Failed`, `The settings have failed to update. Error: ${error}`);
            console.error("Failed to update settings on the server:", error);
          });
        } else {
          console.log("No postID available. Cannot update settings.");
        }
      }
    }));
    const editorHelper = {
      getViewport: (width) => {
        if (width <= 768) {
          return "mobile";
        } else if (width <= 1024) {
          return "tablet";
        } else {
          return "desktop";
        }
      }
    };
    const isPro = tsteam_settings.is_pro;
    const isLicenseInactive = !!((_a = window.tsTeamPro) == null ? void 0 : _a.is_licence_inactive);
    const pro_layouts = proLayouts();
    const gridLayouts = pro_layouts.filter((layout) => layout.category === "grid");
    const flexLayouts = pro_layouts.filter((layout) => layout.category === "flex");
    const tableLayouts = pro_layouts.filter((layout) => layout.category === "table");
    const proOnlyLayouts = !isPro || isLicenseInactive ? [
      { label: "CircleMask", value: "CircleMask", type: "pro", disabled: true },
      { label: "FancyCard", value: "FancyCard", type: "pro", disabled: true },
      { label: "Glass", value: "Glass", type: "pro", disabled: true },
      { label: "Capsule", value: "Capsule", type: "pro", disabled: true },
      { label: "Arch", value: "Arch", type: "pro", disabled: true },
      { label: "Sleek", value: "Sleek", type: "pro", disabled: true },
      { label: "Blur", value: "Blur", type: "pro", disabled: true },
      { label: "Bio", value: "Bio", type: "pro", disabled: true },
      { label: "Halo", value: "Halo", type: "pro", disabled: true },
      { label: "FancyOverlay", value: "FancyOverlay", type: "pro", disabled: true },
      { label: "Dome", value: "Dome", type: "pro", disabled: true },
      { label: "Geometric", value: "Geometric", type: "pro", disabled: true },
      { label: "Subtle", value: "Subtle", type: "pro", disabled: true },
      { label: "Chromatic", value: "Chromatic", type: "pro", disabled: true },
      { label: "Simplistic", value: "Simplistic", type: "pro", disabled: true },
      { label: "FancyRipple", value: "FancyRipple", type: "pro", disabled: true },
      { label: "Moon", value: "Moon", type: "pro", disabled: true },
      { label: "FancyCoverflow", value: "FancyCoverflow", type: "pro", disabled: true },
      { label: "FancyCoverflow2", value: "FancyCoverflow2", type: "pro", disabled: true },
      { label: "Interactive", value: "Interactive", type: "pro", disabled: true },
      { label: "Glassmorphism", value: "Glassmorphism", type: "pro", disabled: true },
      { label: "Colorful", value: "Colorful", type: "pro", disabled: true }
    ] : [];
    const updatedGridLayouts = gridLayouts.map((layout) => ({
      ...layout,
      disabled: !isPro || isLicenseInactive
    }));
    const updatedFlexLayouts = flexLayouts.map((layout) => ({
      ...layout,
      disabled: !isPro || isLicenseInactive
    }));
    const updatedTableLayouts = tableLayouts.map((layout) => ({
      ...layout,
      disabled: !isPro || isLicenseInactive
    }));
    const pro_views = [
      // { label: 'Vertical Carousel', value: 'vertical_carousel', type: 'pro', disabled: !isPro || isLicenseInactive },
      { label: "Flex", value: "flex", type: "pro", disabled: !isPro || isLicenseInactive },
      { label: "Marquee", value: "marquee", type: "pro", disabled: !isPro || isLicenseInactive },
      { label: "Table", value: "table", type: "pro", disabled: !isPro || isLicenseInactive },
      { label: "Confetti", value: "confetti", type: "pro", disabled: !isPro || isLicenseInactive },
      { label: "Filterable", value: "filterable", type: "pro", disabled: !isPro || isLicenseInactive }
    ];
    const pro_details = [
      { label: "Drawer", value: "drawer", type: "pro", disabled: !isPro || isLicenseInactive }
      // { label: 'Full Screen', value: 'fullscreen', type: 'pro', disabled: !isPro || isLicenseInactive },
    ];
    create((set2) => ({
      isEditor: true,
      viewport: editorHelper.getViewport(window.innerWidth),
      setViewport: (newViewport) => set2({ viewport: newViewport }),
      availableLayouts: [
        { label: "Card", value: "Card", type: "free", disabled: false },
        { label: "Horizontal Card", value: "HorizontalCard", type: "free", disabled: false },
        { label: "Overlay Card", value: "OverlayCard", type: "free", disabled: false },
        { label: "Tiles", value: "Tiles", type: "free", disabled: false },
        ...proOnlyLayouts,
        // These will be empty array when Pro is active
        ...updatedGridLayouts
      ],
      availableFlexLayouts: [
        ...updatedFlexLayouts
      ],
      availableTableLayouts: [
        ...updatedTableLayouts
      ],
      availableViews: [
        { label: "Grid", value: "grid", type: "free", disabled: false },
        { label: "Carousel", value: "carousel", type: "free", disabled: false },
        ...pro_views
      ],
      availableTransition: [
        { label: "Slide", value: "slide", type: "free", disabled: false },
        { label: "Fade", value: "fade", type: "free", disabled: false },
        { label: "Zoom", value: "zoom", type: "free", disabled: false },
        { label: "Flip", value: "flip", type: "free", disabled: false }
      ],
      availableDelay: [
        { label: "Left", value: "left", type: "pro", disabled: !isPro || isLicenseInactive },
        { label: "Right", value: "right", type: "pro", disabled: !isPro || isLicenseInactive }
        // { label: 'Up', value: 'up', type: 'pro', disabled: !isPro || isLicenseInactive },
        // { label: 'Down', value: 'down', type: 'pro', disabled: !isPro || isLicenseInactive },
      ],
      availableDetails: [
        { label: "No Details", value: "none", type: "free", disabled: false },
        { label: "Popup", value: "popup", type: "free", disabled: false },
        ...pro_details
      ],
      availableHoverAnimation: [
        { label: "No Animation", value: "none", type: "free", disabled: false },
        { label: "3D Float", value: "float3d", type: "free", disabled: false },
        { label: "Tilt", value: "tilt", type: "free", disabled: false },
        { label: "Blur", value: "blur", type: "free", disabled: false },
        { label: "Slide Top", value: "slideTop", type: "free", disabled: false },
        { label: "Shadow Top", value: "shadowPop", type: "free", disabled: false },
        { label: "Shadow Drop", value: "shadowDrop", type: "free", disabled: false },
        { label: "Shadow Drop 02", value: "shadowDrop2", type: "free", disabled: false }
        // { label: 'Text', value: 'textPopUp', type: 'free', disabled: false },
        // { label: 'Flip Scale (Up)', value: 'flipScaleUp', type: 'free', disabled: false },
      ]
    }));
    (function() {
      try {
        if (typeof document < "u") {
          var e2 = document.createElement("style");
          e2.appendChild(document.createTextNode(".ce-hint--align-start{text-align:left}.ce-hint--align-center{text-align:center}.ce-hint__description{opacity:.6;margin-top:3px}")), document.head.appendChild(e2);
        }
      } catch (t2) {
        console.error("vite-plugin-css-injected-by-js", t2);
      }
    })();
    var ko = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    function Fe(n2) {
      return n2 && n2.__esModule && Object.prototype.hasOwnProperty.call(n2, "default") ? n2.default : n2;
    }
    function ze() {
    }
    Object.assign(ze, {
      default: ze,
      register: ze,
      revert: function() {
      },
      __esModule: true
    });
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(n2) {
      const e2 = (this.document || this.ownerDocument).querySelectorAll(n2);
      let t2 = e2.length;
      for (; --t2 >= 0 && e2.item(t2) !== this; )
        ;
      return t2 > -1;
    });
    Element.prototype.closest || (Element.prototype.closest = function(n2) {
      let e2 = this;
      if (!document.documentElement.contains(e2))
        return null;
      do {
        if (e2.matches(n2))
          return e2;
        e2 = e2.parentElement || e2.parentNode;
      } while (e2 !== null);
      return null;
    });
    Element.prototype.prepend || (Element.prototype.prepend = function(e2) {
      const t2 = document.createDocumentFragment();
      Array.isArray(e2) || (e2 = [e2]), e2.forEach((o) => {
        const i = o instanceof Node;
        t2.appendChild(i ? o : document.createTextNode(o));
      }), this.insertBefore(t2, this.firstChild);
    });
    Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(n2) {
      n2 = arguments.length === 0 ? true : !!n2;
      const e2 = this.parentNode, t2 = window.getComputedStyle(e2, null), o = parseInt(t2.getPropertyValue("border-top-width")), i = parseInt(t2.getPropertyValue("border-left-width")), s = this.offsetTop - e2.offsetTop < e2.scrollTop, r2 = this.offsetTop - e2.offsetTop + this.clientHeight - o > e2.scrollTop + e2.clientHeight, l2 = this.offsetLeft - e2.offsetLeft < e2.scrollLeft, a = this.offsetLeft - e2.offsetLeft + this.clientWidth - i > e2.scrollLeft + e2.clientWidth, c2 = s && !r2;
      (s || r2) && n2 && (e2.scrollTop = this.offsetTop - e2.offsetTop - e2.clientHeight / 2 - o + this.clientHeight / 2), (l2 || a) && n2 && (e2.scrollLeft = this.offsetLeft - e2.offsetLeft - e2.clientWidth / 2 - i + this.clientWidth / 2), (s || r2 || l2 || a) && !n2 && this.scrollIntoView(c2);
    });
    window.requestIdleCallback = window.requestIdleCallback || function(n2) {
      const e2 = Date.now();
      return setTimeout(function() {
        n2({
          didTimeout: false,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - e2));
          }
        });
      }, 1);
    };
    window.cancelIdleCallback = window.cancelIdleCallback || function(n2) {
      clearTimeout(n2);
    };
    const w = {
      BACKSPACE: 8,
      TAB: 9,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      ESC: 27,
      SPACE: 32,
      LEFT: 37,
      UP: 38,
      DOWN: 40,
      RIGHT: 39,
      DELETE: 46,
      META: 91,
      SLASH: 191
    };
    function Be(n2, e2, t2 = "log", o, i = "color: inherit") {
      if (!("console" in window) || !window.console[t2])
        return;
      const s = ["info", "log", "warn", "error"].includes(t2), r2 = [];
      switch (Be.logLevel) {
        case "ERROR":
          if (t2 !== "error")
            return;
          break;
        case "WARN":
          if (!["error", "warn"].includes(t2))
            return;
          break;
        case "INFO":
          if (!s || n2)
            return;
          break;
      }
      o && r2.push(o);
      const l2 = "Editor.js 2.30.6", a = `line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`;
      n2 && (s ? (r2.unshift(a, i), e2 = `%c${l2}%c ${e2}`) : e2 = `( ${l2} )${e2}`);
      try {
        s ? o ? console[t2](`${e2} %o`, ...r2) : console[t2](e2, ...r2) : console[t2](e2);
      } catch {
      }
    }
    Be.logLevel = "VERBOSE";
    const I = Be.bind(window, false);
    Be.bind(window, true);
    function re(n2) {
      return Object.prototype.toString.call(n2).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }
    function O(n2) {
      return re(n2) === "function" || re(n2) === "asyncfunction";
    }
    function R(n2) {
      return re(n2) === "object";
    }
    function Q(n2) {
      return re(n2) === "string";
    }
    function yo(n2) {
      return re(n2) === "boolean";
    }
    function bt(n2) {
      return re(n2) === "number";
    }
    function kt(n2) {
      return re(n2) === "undefined";
    }
    function V(n2) {
      return n2 ? Object.keys(n2).length === 0 && n2.constructor === Object : true;
    }
    async function Eo(n2, e2 = () => {
    }, t2 = () => {
    }) {
      async function o(i, s, r2) {
        try {
          await i.function(i.data), await s(kt(i.data) ? {} : i.data);
        } catch {
          r2(kt(i.data) ? {} : i.data);
        }
      }
      return n2.reduce(async (i, s) => (await i, o(s, e2, t2)), Promise.resolve());
    }
    function At(n2) {
      return Array.prototype.slice.call(n2);
    }
    function Oe(n2, e2) {
      return function() {
        const t2 = this, o = arguments;
        window.setTimeout(() => n2.apply(t2, o), e2);
      };
    }
    function Bo(n2) {
      return n2.name.split(".").pop();
    }
    function To(n2) {
      return /^[-\w]+\/([-+\w]+|\*)$/.test(n2);
    }
    function Co() {
      const n2 = {
        win: false,
        mac: false,
        x11: false,
        linux: false
      }, e2 = Object.keys(n2).find((t2) => window.navigator.appVersion.toLowerCase().indexOf(t2) !== -1);
      return e2 && (n2[e2] = true), n2;
    }
    function Le(n2) {
      return n2[0].toUpperCase() + n2.slice(1);
    }
    function qe(n2, ...e2) {
      if (!e2.length)
        return n2;
      const t2 = e2.shift();
      if (R(n2) && R(t2))
        for (const o in t2)
          R(t2[o]) ? (n2[o] || Object.assign(n2, { [o]: {} }), qe(n2[o], t2[o])) : Object.assign(n2, { [o]: t2[o] });
      return qe(n2, ...e2);
    }
    function tt(n2) {
      const e2 = Co();
      return n2 = n2.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), e2.mac ? n2 = n2.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : n2 = n2.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), n2;
    }
    function Ao(n2 = "") {
      return `${n2}${Math.floor(Math.random() * 1e8).toString(16)}`;
    }
    function ue(n2, e2, t2) {
      const o = t2.value ? "value" : "get", i = t2[o], s = `#${e2}Cache`;
      if (t2[o] = function(...r2) {
        return this[s] === void 0 && (this[s] = i.apply(this, ...r2)), this[s];
      }, o === "get" && t2.set) {
        const r2 = t2.set;
        t2.set = function(l2) {
          delete n2[s], r2.apply(this, l2);
        };
      }
      return t2;
    }
    const Ot = 650;
    function pe() {
      return window.matchMedia(`(max-width: ${Ot}px)`).matches;
    }
    const Ge = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
    function Oo(n2, e2) {
      const t2 = Array.isArray(n2) || R(n2), o = Array.isArray(e2) || R(e2);
      return t2 || o ? JSON.stringify(n2) === JSON.stringify(e2) : n2 === e2;
    }
    class d {
      /**
       * Check if passed tag has no closed tag
       *
       * @param {HTMLElement} tag - element to check
       * @returns {boolean}
       */
      static isSingleTag(e2) {
        return e2.tagName && [
          "AREA",
          "BASE",
          "BR",
          "COL",
          "COMMAND",
          "EMBED",
          "HR",
          "IMG",
          "INPUT",
          "KEYGEN",
          "LINK",
          "META",
          "PARAM",
          "SOURCE",
          "TRACK",
          "WBR"
        ].includes(e2.tagName);
      }
      /**
       * Check if element is BR or WBR
       *
       * @param {HTMLElement} element - element to check
       * @returns {boolean}
       */
      static isLineBreakTag(e2) {
        return e2 && e2.tagName && [
          "BR",
          "WBR"
        ].includes(e2.tagName);
      }
      /**
       * Helper for making Elements with class name and attributes
       *
       * @param  {string} tagName - new Element tag name
       * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
       * @param  {object} [attributes] - any attributes
       * @returns {HTMLElement}
       */
      static make(e2, t2 = null, o = {}) {
        const i = document.createElement(e2);
        if (Array.isArray(t2)) {
          const s = t2.filter((r2) => r2 !== void 0);
          i.classList.add(...s);
        } else
          t2 && i.classList.add(t2);
        for (const s in o)
          Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
        return i;
      }
      /**
       * Creates Text Node with the passed content
       *
       * @param {string} content - text content
       * @returns {Text}
       */
      static text(e2) {
        return document.createTextNode(e2);
      }
      /**
       * Append one or several elements to the parent
       *
       * @param  {Element|DocumentFragment} parent - where to append
       * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
       */
      static append(e2, t2) {
        Array.isArray(t2) ? t2.forEach((o) => e2.appendChild(o)) : e2.appendChild(t2);
      }
      /**
       * Append element or a couple to the beginning of the parent elements
       *
       * @param {Element} parent - where to append
       * @param {Element|Element[]} elements - element or elements list
       */
      static prepend(e2, t2) {
        Array.isArray(t2) ? (t2 = t2.reverse(), t2.forEach((o) => e2.prepend(o))) : e2.prepend(t2);
      }
      /**
       * Swap two elements in parent
       *
       * @param {HTMLElement} el1 - from
       * @param {HTMLElement} el2 - to
       * @deprecated
       */
      static swap(e2, t2) {
        const o = document.createElement("div"), i = e2.parentNode;
        i.insertBefore(o, e2), i.insertBefore(e2, t2), i.insertBefore(t2, o), i.removeChild(o);
      }
      /**
       * Selector Decorator
       *
       * Returns first match
       *
       * @param {Element} el - element we searching inside. Default - DOM Document
       * @param {string} selector - searching string
       * @returns {Element}
       */
      static find(e2 = document, t2) {
        return e2.querySelector(t2);
      }
      /**
       * Get Element by Id
       *
       * @param {string} id - id to find
       * @returns {HTMLElement | null}
       */
      static get(e2) {
        return document.getElementById(e2);
      }
      /**
       * Selector Decorator.
       *
       * Returns all matches
       *
       * @param {Element|Document} el - element we searching inside. Default - DOM Document
       * @param {string} selector - searching string
       * @returns {NodeList}
       */
      static findAll(e2 = document, t2) {
        return e2.querySelectorAll(t2);
      }
      /**
       * Returns CSS selector for all text inputs
       */
      static get allInputsSelector() {
        return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map((t2) => `input[type="${t2}"]`).join(", ");
      }
      /**
       * Find all contenteditable, textarea and editable input elements passed holder contains
       *
       * @param holder - element where to find inputs
       */
      static findAllInputs(e2) {
        return At(e2.querySelectorAll(d.allInputsSelector)).reduce((t2, o) => d.isNativeInput(o) || d.containsOnlyInlineElements(o) ? [...t2, o] : [...t2, ...d.getDeepestBlockElements(o)], []);
      }
      /**
       * Search for deepest node which is Leaf.
       * Leaf is the vertex that doesn't have any child nodes
       *
       * @description Method recursively goes throw the all Node until it finds the Leaf
       * @param {Node} node - root Node. From this vertex we start Deep-first search
       *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
       * @param {boolean} [atLast] - find last text node
       * @returns - it can be text Node or Element Node, so that caret will able to work with it
       *            Can return null if node is Document or DocumentFragment, or node is not attached to the DOM
       */
      static getDeepestNode(e2, t2 = false) {
        const o = t2 ? "lastChild" : "firstChild", i = t2 ? "previousSibling" : "nextSibling";
        if (e2 && e2.nodeType === Node.ELEMENT_NODE && e2[o]) {
          let s = e2[o];
          if (d.isSingleTag(s) && !d.isNativeInput(s) && !d.isLineBreakTag(s))
            if (s[i])
              s = s[i];
            else if (s.parentNode[i])
              s = s.parentNode[i];
            else
              return s.parentNode;
          return this.getDeepestNode(s, t2);
        }
        return e2;
      }
      /**
       * Check if object is DOM node
       *
       * @param {*} node - object to check
       * @returns {boolean}
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      static isElement(e2) {
        return bt(e2) ? false : e2 && e2.nodeType && e2.nodeType === Node.ELEMENT_NODE;
      }
      /**
       * Check if object is DocumentFragment node
       *
       * @param {object} node - object to check
       * @returns {boolean}
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      static isFragment(e2) {
        return bt(e2) ? false : e2 && e2.nodeType && e2.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
      }
      /**
       * Check if passed element is contenteditable
       *
       * @param {HTMLElement} element - html element to check
       * @returns {boolean}
       */
      static isContentEditable(e2) {
        return e2.contentEditable === "true";
      }
      /**
       * Checks target if it is native input
       *
       * @param {*} target - HTML element or string
       * @returns {boolean}
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      static isNativeInput(e2) {
        const t2 = [
          "INPUT",
          "TEXTAREA"
        ];
        return e2 && e2.tagName ? t2.includes(e2.tagName) : false;
      }
      /**
       * Checks if we can set caret
       *
       * @param {HTMLElement} target - target to check
       * @returns {boolean}
       */
      static canSetCaret(e2) {
        let t2 = true;
        if (d.isNativeInput(e2))
          switch (e2.type) {
            case "file":
            case "checkbox":
            case "radio":
            case "hidden":
            case "submit":
            case "button":
            case "image":
            case "reset":
              t2 = false;
              break;
          }
        else
          t2 = d.isContentEditable(e2);
        return t2;
      }
      /**
       * Checks node if it is empty
       *
       * @description Method checks simple Node without any childs for emptiness
       * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
       * @param {Node} node - node to check
       * @param {string} [ignoreChars] - char or substring to treat as empty
       * @returns {boolean} true if it is empty
       */
      static isNodeEmpty(e2, t2) {
        let o;
        return this.isSingleTag(e2) && !this.isLineBreakTag(e2) ? false : (this.isElement(e2) && this.isNativeInput(e2) ? o = e2.value : o = e2.textContent.replace("​", ""), t2 && (o = o.replace(new RegExp(t2, "g"), "")), o.trim().length === 0);
      }
      /**
       * checks node if it is doesn't have any child nodes
       *
       * @param {Node} node - node to check
       * @returns {boolean}
       */
      static isLeaf(e2) {
        return e2 ? e2.childNodes.length === 0 : false;
      }
      /**
       * breadth-first search (BFS)
       * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
       *
       * @description Pushes to stack all DOM leafs and checks for emptiness
       * @param {Node} node - node to check
       * @param {string} [ignoreChars] - char or substring to treat as empty
       * @returns {boolean}
       */
      static isEmpty(e2, t2) {
        e2.normalize();
        const o = [e2];
        for (; o.length > 0; )
          if (e2 = o.shift(), !!e2) {
            if (this.isLeaf(e2) && !this.isNodeEmpty(e2, t2))
              return false;
            e2.childNodes && o.push(...Array.from(e2.childNodes));
          }
        return true;
      }
      /**
       * Check if string contains html elements
       *
       * @param {string} str - string to check
       * @returns {boolean}
       */
      static isHTMLString(e2) {
        const t2 = d.make("div");
        return t2.innerHTML = e2, t2.childElementCount > 0;
      }
      /**
       * Return length of node`s text content
       *
       * @param {Node} node - node with content
       * @returns {number}
       */
      static getContentLength(e2) {
        return d.isNativeInput(e2) ? e2.value.length : e2.nodeType === Node.TEXT_NODE ? e2.length : e2.textContent.length;
      }
      /**
       * Return array of names of block html elements
       *
       * @returns {string[]}
       */
      static get blockElements() {
        return [
          "address",
          "article",
          "aside",
          "blockquote",
          "canvas",
          "div",
          "dl",
          "dt",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "hgroup",
          "hr",
          "li",
          "main",
          "nav",
          "noscript",
          "ol",
          "output",
          "p",
          "pre",
          "ruby",
          "section",
          "table",
          "tbody",
          "thead",
          "tr",
          "tfoot",
          "ul",
          "video"
        ];
      }
      /**
       * Check if passed content includes only inline elements
       *
       * @param {string|HTMLElement} data - element or html string
       * @returns {boolean}
       */
      static containsOnlyInlineElements(e2) {
        let t2;
        Q(e2) ? (t2 = document.createElement("div"), t2.innerHTML = e2) : t2 = e2;
        const o = (i) => !d.blockElements.includes(i.tagName.toLowerCase()) && Array.from(i.children).every(o);
        return Array.from(t2.children).every(o);
      }
      /**
       * Find and return all block elements in the passed parent (including subtree)
       *
       * @param {HTMLElement} parent - root element
       * @returns {HTMLElement[]}
       */
      static getDeepestBlockElements(e2) {
        return d.containsOnlyInlineElements(e2) ? [e2] : Array.from(e2.children).reduce((t2, o) => [...t2, ...d.getDeepestBlockElements(o)], []);
      }
      /**
       * Helper for get holder from {string} or return HTMLElement
       *
       * @param {string | HTMLElement} element - holder's id or holder's HTML Element
       * @returns {HTMLElement}
       */
      static getHolder(e2) {
        return Q(e2) ? document.getElementById(e2) : e2;
      }
      /**
       * Returns true if element is anchor (is A tag)
       *
       * @param {Element} element - element to check
       * @returns {boolean}
       */
      static isAnchor(e2) {
        return e2.tagName.toLowerCase() === "a";
      }
      /**
       * Return element's offset related to the document
       *
       * @todo handle case when editor initialized in scrollable popup
       * @param el - element to compute offset
       */
      static offset(e2) {
        const t2 = e2.getBoundingClientRect(), o = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop, s = t2.top + i, r2 = t2.left + o;
        return {
          top: s,
          left: r2,
          bottom: s + t2.height,
          right: r2 + t2.width
        };
      }
    }
    const No = {
      blockTunes: {
        toggler: {
          "Click to tune": "",
          "or drag to move": ""
        }
      },
      inlineToolbar: {
        converter: {
          "Convert to": ""
        }
      },
      toolbar: {
        toolbox: {
          Add: ""
        }
      },
      popover: {
        Filter: "",
        "Nothing found": "",
        "Convert to": ""
      }
    }, Po = {
      Text: "",
      Link: "",
      Bold: "",
      Italic: ""
    }, Do = {
      link: {
        "Add a link": ""
      },
      stub: {
        "The block can not be displayed correctly.": ""
      }
    }, Ro = {
      delete: {
        Delete: "",
        "Click to delete": ""
      },
      moveUp: {
        "Move up": ""
      },
      moveDown: {
        "Move down": ""
      }
    }, _t = {
      ui: No,
      toolNames: Po,
      tools: Do,
      blockTunes: Ro
    }, Nt = class ae2 {
      /**
       * Type-safe translation for internal UI texts:
       * Perform translation of the string by namespace and a key
       *
       * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
       * @param internalNamespace - path to translated string in dictionary
       * @param dictKey - dictionary key. Better to use default locale original text
       */
      static ui(e2, t2) {
        return ae2._t(e2, t2);
      }
      /**
       * Translate for external strings that is not presented in default dictionary.
       * For example, for user-specified tool names
       *
       * @param namespace - path to translated string in dictionary
       * @param dictKey - dictionary key. Better to use default locale original text
       */
      static t(e2, t2) {
        return ae2._t(e2, t2);
      }
      /**
       * Adjust module for using external dictionary
       *
       * @param dictionary - new messages list to override default
       */
      static setDictionary(e2) {
        ae2.currentDictionary = e2;
      }
      /**
       * Perform translation both for internal and external namespaces
       * If there is no translation found, returns passed key as a translated message
       *
       * @param namespace - path to translated string in dictionary
       * @param dictKey - dictionary key. Better to use default locale original text
       */
      static _t(e2, t2) {
        const o = ae2.getNamespace(e2);
        return !o || !o[t2] ? t2 : o[t2];
      }
      /**
       * Find messages section by namespace path
       *
       * @param namespace - path to section
       */
      static getNamespace(e2) {
        return e2.split(".").reduce((o, i) => !o || !Object.keys(o).length ? {} : o[i], ae2.currentDictionary);
      }
    };
    Nt.currentDictionary = _t;
    let z = Nt;
    class Te {
      constructor() {
        this.subscribers = {};
      }
      /**
       * Subscribe any event on callback
       *
       * @param eventName - event name
       * @param callback - subscriber
       */
      on(e2, t2) {
        e2 in this.subscribers || (this.subscribers[e2] = []), this.subscribers[e2].push(t2);
      }
      /**
       * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
       *
       * @param eventName - event name
       * @param callback - subscriber
       */
      once(e2, t2) {
        e2 in this.subscribers || (this.subscribers[e2] = []);
        const o = (i) => {
          const s = t2(i), r2 = this.subscribers[e2].indexOf(o);
          return r2 !== -1 && this.subscribers[e2].splice(r2, 1), s;
        };
        this.subscribers[e2].push(o);
      }
      /**
       * Emit callbacks with passed data
       *
       * @param eventName - event name
       * @param data - subscribers get this data when they were fired
       */
      emit(e2, t2) {
        V(this.subscribers) || !this.subscribers[e2] || this.subscribers[e2].reduce((o, i) => {
          const s = i(o);
          return s !== void 0 ? s : o;
        }, t2);
      }
      /**
       * Unsubscribe callback from event
       *
       * @param eventName - event name
       * @param callback - event handler
       */
      off(e2, t2) {
        if (this.subscribers[e2] === void 0) {
          console.warn(`EventDispatcher .off(): there is no subscribers for event "${e2.toString()}". Probably, .off() called before .on()`);
          return;
        }
        for (let o = 0; o < this.subscribers[e2].length; o++)
          if (this.subscribers[e2][o] === t2) {
            delete this.subscribers[e2][o];
            break;
          }
      }
      /**
       * Destroyer
       * clears subscribers list
       */
      destroy() {
        this.subscribers = {};
      }
    }
    class Ce {
      constructor() {
        this.allListeners = [];
      }
      /**
       * Assigns event listener on element and returns unique identifier
       *
       * @param {EventTarget} element - DOM element that needs to be listened
       * @param {string} eventType - event type
       * @param {Function} handler - method that will be fired on event
       * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
       */
      on(e2, t2, o, i = false) {
        const s = Ao("l"), r2 = {
          id: s,
          element: e2,
          eventType: t2,
          handler: o,
          options: i
        };
        if (!this.findOne(e2, t2, o))
          return this.allListeners.push(r2), e2.addEventListener(t2, o, i), s;
      }
      /**
       * Removes event listener from element
       *
       * @param {EventTarget} element - DOM element that we removing listener
       * @param {string} eventType - event type
       * @param {Function} handler - remove handler, if element listens several handlers on the same event type
       * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
       */
      off(e2, t2, o, i) {
        const s = this.findAll(e2, t2, o);
        s.forEach((r2, l2) => {
          const a = this.allListeners.indexOf(s[l2]);
          a > -1 && (this.allListeners.splice(a, 1), r2.element.removeEventListener(r2.eventType, r2.handler, r2.options));
        });
      }
      /**
       * Removes listener by id
       *
       * @param {string} id - listener identifier
       */
      offById(e2) {
        const t2 = this.findById(e2);
        t2 && t2.element.removeEventListener(t2.eventType, t2.handler, t2.options);
      }
      /**
       * Finds and returns first listener by passed params
       *
       * @param {EventTarget} element - event target
       * @param {string} [eventType] - event type
       * @param {Function} [handler] - event handler
       * @returns {ListenerData|null}
       */
      findOne(e2, t2, o) {
        const i = this.findAll(e2, t2, o);
        return i.length > 0 ? i[0] : null;
      }
      /**
       * Return all stored listeners by passed params
       *
       * @param {EventTarget} element - event target
       * @param {string} eventType - event type
       * @param {Function} handler - event handler
       * @returns {ListenerData[]}
       */
      findAll(e2, t2, o) {
        let i;
        const s = e2 ? this.findByEventTarget(e2) : [];
        return e2 && t2 && o ? i = s.filter((r2) => r2.eventType === t2 && r2.handler === o) : e2 && t2 ? i = s.filter((r2) => r2.eventType === t2) : i = s, i;
      }
      /**
       * Removes all listeners
       */
      removeAll() {
        this.allListeners.map((e2) => {
          e2.element.removeEventListener(e2.eventType, e2.handler, e2.options);
        }), this.allListeners = [];
      }
      /**
       * Module cleanup on destruction
       */
      destroy() {
        this.removeAll();
      }
      /**
       * Search method: looks for listener by passed element
       *
       * @param {EventTarget} element - searching element
       * @returns {Array} listeners that found on element
       */
      findByEventTarget(e2) {
        return this.allListeners.filter((t2) => {
          if (t2.element === e2)
            return t2;
        });
      }
      /**
       * Search method: looks for listener by passed event type
       *
       * @param {string} eventType - event type
       * @returns {ListenerData[]} listeners that found on element
       */
      findByType(e2) {
        return this.allListeners.filter((t2) => {
          if (t2.eventType === e2)
            return t2;
        });
      }
      /**
       * Search method: looks for listener by passed handler
       *
       * @param {Function} handler - event handler
       * @returns {ListenerData[]} listeners that found on element
       */
      findByHandler(e2) {
        return this.allListeners.filter((t2) => {
          if (t2.handler === e2)
            return t2;
        });
      }
      /**
       * Returns listener data found by id
       *
       * @param {string} id - listener identifier
       * @returns {ListenerData}
       */
      findById(e2) {
        return this.allListeners.find((t2) => t2.id === e2);
      }
    }
    class y {
      /**
       * @class
       * @param options - Module options
       * @param options.config - Module config
       * @param options.eventsDispatcher - Common event bus
       */
      constructor({ config: e2, eventsDispatcher: t2 }) {
        if (this.nodes = {}, this.listeners = new Ce(), this.readOnlyMutableListeners = {
          /**
           * Assigns event listener on DOM element and pushes into special array that might be removed
           *
           * @param {EventTarget} element - DOM Element
           * @param {string} eventType - Event name
           * @param {Function} handler - Event handler
           * @param {boolean|AddEventListenerOptions} options - Listening options
           */
          on: (o, i, s, r2 = false) => {
            this.mutableListenerIds.push(
              this.listeners.on(o, i, s, r2)
            );
          },
          /**
           * Clears all mutable listeners
           */
          clearAll: () => {
            for (const o of this.mutableListenerIds)
              this.listeners.offById(o);
            this.mutableListenerIds = [];
          }
        }, this.mutableListenerIds = [], new.target === y)
          throw new TypeError("Constructors for abstract class Module are not allowed.");
        this.config = e2, this.eventsDispatcher = t2;
      }
      /**
       * Editor modules setter
       *
       * @param {EditorModules} Editor - Editor's Modules
       */
      set state(e2) {
        this.Editor = e2;
      }
      /**
       * Remove memorized nodes
       */
      removeAllNodes() {
        for (const e2 in this.nodes) {
          const t2 = this.nodes[e2];
          t2 instanceof HTMLElement && t2.remove();
        }
      }
      /**
       * Returns true if current direction is RTL (Right-To-Left)
       */
      get isRtl() {
        return this.config.i18n.direction === "rtl";
      }
    }
    class b {
      constructor() {
        this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = false, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
      }
      /**
       * Editor styles
       *
       * @returns {{editorWrapper: string, editorZone: string}}
       */
      static get CSS() {
        return {
          editorWrapper: "codex-editor",
          editorZone: "codex-editor__redactor"
        };
      }
      /**
       * Returns selected anchor
       * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
       *
       * @returns {Node|null}
       */
      static get anchorNode() {
        const e2 = window.getSelection();
        return e2 ? e2.anchorNode : null;
      }
      /**
       * Returns selected anchor element
       *
       * @returns {Element|null}
       */
      static get anchorElement() {
        const e2 = window.getSelection();
        if (!e2)
          return null;
        const t2 = e2.anchorNode;
        return t2 ? d.isElement(t2) ? t2 : t2.parentElement : null;
      }
      /**
       * Returns selection offset according to the anchor node
       * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
       *
       * @returns {number|null}
       */
      static get anchorOffset() {
        const e2 = window.getSelection();
        return e2 ? e2.anchorOffset : null;
      }
      /**
       * Is current selection range collapsed
       *
       * @returns {boolean|null}
       */
      static get isCollapsed() {
        const e2 = window.getSelection();
        return e2 ? e2.isCollapsed : null;
      }
      /**
       * Check current selection if it is at Editor's zone
       *
       * @returns {boolean}
       */
      static get isAtEditor() {
        return this.isSelectionAtEditor(b.get());
      }
      /**
       * Check if passed selection is at Editor's zone
       *
       * @param selection - Selection object to check
       */
      static isSelectionAtEditor(e2) {
        if (!e2)
          return false;
        let t2 = e2.anchorNode || e2.focusNode;
        t2 && t2.nodeType === Node.TEXT_NODE && (t2 = t2.parentNode);
        let o = null;
        return t2 && t2 instanceof Element && (o = t2.closest(`.${b.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : false;
      }
      /**
       * Check if passed range at Editor zone
       *
       * @param range - range to check
       */
      static isRangeAtEditor(e2) {
        if (!e2)
          return;
        let t2 = e2.startContainer;
        t2 && t2.nodeType === Node.TEXT_NODE && (t2 = t2.parentNode);
        let o = null;
        return t2 && t2 instanceof Element && (o = t2.closest(`.${b.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : false;
      }
      /**
       * Methods return boolean that true if selection exists on the page
       */
      static get isSelectionExists() {
        return !!b.get().anchorNode;
      }
      /**
       * Return first range
       *
       * @returns {Range|null}
       */
      static get range() {
        return this.getRangeFromSelection(this.get());
      }
      /**
       * Returns range from passed Selection object
       *
       * @param selection - Selection object to get Range from
       */
      static getRangeFromSelection(e2) {
        return e2 && e2.rangeCount ? e2.getRangeAt(0) : null;
      }
      /**
       * Calculates position and size of selected text
       *
       * @returns {DOMRect | ClientRect}
       */
      static get rect() {
        let e2 = document.selection, t2, o = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
        if (e2 && e2.type !== "Control")
          return e2 = e2, t2 = e2.createRange(), o.x = t2.boundingLeft, o.y = t2.boundingTop, o.width = t2.boundingWidth, o.height = t2.boundingHeight, o;
        if (!window.getSelection)
          return I("Method window.getSelection is not supported", "warn"), o;
        if (e2 = window.getSelection(), e2.rangeCount === null || isNaN(e2.rangeCount))
          return I("Method SelectionUtils.rangeCount is not supported", "warn"), o;
        if (e2.rangeCount === 0)
          return o;
        if (t2 = e2.getRangeAt(0).cloneRange(), t2.getBoundingClientRect && (o = t2.getBoundingClientRect()), o.x === 0 && o.y === 0) {
          const i = document.createElement("span");
          if (i.getBoundingClientRect) {
            i.appendChild(document.createTextNode("​")), t2.insertNode(i), o = i.getBoundingClientRect();
            const s = i.parentNode;
            s.removeChild(i), s.normalize();
          }
        }
        return o;
      }
      /**
       * Returns selected text as String
       *
       * @returns {string}
       */
      static get text() {
        return window.getSelection ? window.getSelection().toString() : "";
      }
      /**
       * Returns window SelectionUtils
       * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
       *
       * @returns {Selection}
       */
      static get() {
        return window.getSelection();
      }
      /**
       * Set focus to contenteditable or native input element
       *
       * @param element - element where to set focus
       * @param offset - offset of cursor
       */
      static setCursor(e2, t2 = 0) {
        const o = document.createRange(), i = window.getSelection();
        return d.isNativeInput(e2) ? d.canSetCaret(e2) ? (e2.focus(), e2.selectionStart = e2.selectionEnd = t2, e2.getBoundingClientRect()) : void 0 : (o.setStart(e2, t2), o.setEnd(e2, t2), i.removeAllRanges(), i.addRange(o), o.getBoundingClientRect());
      }
      /**
       * Check if current range exists and belongs to container
       *
       * @param container - where range should be
       */
      static isRangeInsideContainer(e2) {
        const t2 = b.range;
        return t2 === null ? false : e2.contains(t2.startContainer);
      }
      /**
       * Adds fake cursor to the current range
       */
      static addFakeCursor() {
        const e2 = b.range;
        if (e2 === null)
          return;
        const t2 = d.make("span", "codex-editor__fake-cursor");
        t2.dataset.mutationFree = "true", e2.collapse(), e2.insertNode(t2);
      }
      /**
       * Check if passed element contains a fake cursor
       *
       * @param el - where to check
       */
      static isFakeCursorInsideContainer(e2) {
        return d.find(e2, ".codex-editor__fake-cursor") !== null;
      }
      /**
       * Removes fake cursor from a container
       *
       * @param container - container to look for
       */
      static removeFakeCursor(e2 = document.body) {
        const t2 = d.find(e2, ".codex-editor__fake-cursor");
        t2 && t2.remove();
      }
      /**
       * Removes fake background
       */
      removeFakeBackground() {
        this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = false, document.execCommand(this.commandRemoveFormat));
      }
      /**
       * Sets fake background
       */
      setFakeBackground() {
        document.execCommand(this.commandBackground, false, "#a8d6ff"), this.isFakeBackgroundEnabled = true;
      }
      /**
       * Save SelectionUtils's range
       */
      save() {
        this.savedSelectionRange = b.range;
      }
      /**
       * Restore saved SelectionUtils's range
       */
      restore() {
        if (!this.savedSelectionRange)
          return;
        const e2 = window.getSelection();
        e2.removeAllRanges(), e2.addRange(this.savedSelectionRange);
      }
      /**
       * Clears saved selection
       */
      clearSaved() {
        this.savedSelectionRange = null;
      }
      /**
       * Collapse current selection
       */
      collapseToEnd() {
        const e2 = window.getSelection(), t2 = document.createRange();
        t2.selectNodeContents(e2.focusNode), t2.collapse(false), e2.removeAllRanges(), e2.addRange(t2);
      }
      /**
       * Looks ahead to find passed tag from current selection
       *
       * @param  {string} tagName       - tag to found
       * @param  {string} [className]   - tag's class name
       * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
       * @returns {HTMLElement|null}
       */
      findParentTag(e2, t2, o = 10) {
        const i = window.getSelection();
        let s = null;
        return !i || !i.anchorNode || !i.focusNode ? null : ([
          /** the Node in which the selection begins */
          i.anchorNode,
          /** the Node in which the selection ends */
          i.focusNode
        ].forEach((l2) => {
          let a = o;
          for (; a > 0 && l2.parentNode && !(l2.tagName === e2 && (s = l2, t2 && l2.classList && !l2.classList.contains(t2) && (s = null), s)); )
            l2 = l2.parentNode, a--;
        }), s);
      }
      /**
       * Expands selection range to the passed parent node
       *
       * @param {HTMLElement} element - element which contents should be selected
       */
      expandToTag(e2) {
        const t2 = window.getSelection();
        t2.removeAllRanges();
        const o = document.createRange();
        o.selectNodeContents(e2), t2.addRange(o);
      }
    }
    const ye = "editor mobile layout toggled";
    function Qe(n2, e2) {
      if (!n2.conversionConfig)
        return false;
      const t2 = n2.conversionConfig[e2];
      return O(t2) || Q(t2);
    }
    function Ht(n2, e2) {
      return Object.entries(n2).some(([t2, o]) => e2[t2] && Oo(e2[t2], o));
    }
    async function zt(n2, e2) {
      const o = (await n2.save()).data, i = e2.find((s) => s.name === n2.name);
      return i !== void 0 && !Qe(i, "export") ? [] : e2.reduce((s, r2) => {
        if (!Qe(r2, "import") || r2.toolbox === void 0)
          return s;
        const l2 = r2.toolbox.filter((a) => {
          if (V(a) || a.icon === void 0)
            return false;
          if (a.data !== void 0) {
            if (Ht(a.data, o))
              return false;
          } else if (r2.name === n2.name)
            return false;
          return true;
        });
        return s.push({
          ...r2,
          toolbox: l2
        }), s;
      }, []);
    }
    var A = /* @__PURE__ */ ((n2) => (n2.Default = "default", n2.Separator = "separator", n2.Html = "html", n2))(A || {}), J = /* @__PURE__ */ ((n2) => (n2.APPEND_CALLBACK = "appendCallback", n2.RENDERED = "rendered", n2.MOVED = "moved", n2.UPDATED = "updated", n2.REMOVED = "removed", n2.ON_PASTE = "onPaste", n2))(J || {});
    var Ut = { exports: {} };
    (function(n2, e2) {
      (function(t2, o) {
        n2.exports = o();
      })(window, function() {
        return function(t2) {
          var o = {};
          function i(s) {
            if (o[s])
              return o[s].exports;
            var r2 = o[s] = { i: s, l: false, exports: {} };
            return t2[s].call(r2.exports, r2, r2.exports, i), r2.l = true, r2.exports;
          }
          return i.m = t2, i.c = o, i.d = function(s, r2, l2) {
            i.o(s, r2) || Object.defineProperty(s, r2, { enumerable: true, get: l2 });
          }, i.r = function(s) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: true });
          }, i.t = function(s, r2) {
            if (1 & r2 && (s = i(s)), 8 & r2 || 4 & r2 && typeof s == "object" && s && s.__esModule)
              return s;
            var l2 = /* @__PURE__ */ Object.create(null);
            if (i.r(l2), Object.defineProperty(l2, "default", { enumerable: true, value: s }), 2 & r2 && typeof s != "string")
              for (var a in s)
                i.d(l2, a, (function(c2) {
                  return s[c2];
                }).bind(null, a));
            return l2;
          }, i.n = function(s) {
            var r2 = s && s.__esModule ? function() {
              return s.default;
            } : function() {
              return s;
            };
            return i.d(r2, "a", r2), r2;
          }, i.o = function(s, r2) {
            return Object.prototype.hasOwnProperty.call(s, r2);
          }, i.p = "/", i(i.s = 0);
        }([function(t2, o, i) {
          i(1), /*!
          * Codex JavaScript Notification module
          * https://github.com/codex-team/js-notifier
          */
          t2.exports = function() {
            var s = i(6), r2 = "cdx-notify--bounce-in", l2 = null;
            return { show: function(a) {
              if (a.message) {
                (function() {
                  if (l2)
                    return true;
                  l2 = s.getWrapper(), document.body.appendChild(l2);
                })();
                var c2 = null, u2 = a.time || 8e3;
                switch (a.type) {
                  case "confirm":
                    c2 = s.confirm(a);
                    break;
                  case "prompt":
                    c2 = s.prompt(a);
                    break;
                  default:
                    c2 = s.alert(a), window.setTimeout(function() {
                      c2.remove();
                    }, u2);
                }
                l2.appendChild(c2), c2.classList.add(r2);
              }
            } };
          }();
        }, function(t2, o, i) {
          var s = i(2);
          typeof s == "string" && (s = [[t2.i, s, ""]]);
          var r2 = { hmr: true, transform: void 0, insertInto: void 0 };
          i(4)(s, r2), s.locals && (t2.exports = s.locals);
        }, function(t2, o, i) {
          (t2.exports = i(3)(false)).push([t2.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
        }, function(t2, o) {
          t2.exports = function(i) {
            var s = [];
            return s.toString = function() {
              return this.map(function(r2) {
                var l2 = function(a, c2) {
                  var u2 = a[1] || "", h2 = a[3];
                  if (!h2)
                    return u2;
                  if (c2 && typeof btoa == "function") {
                    var p2 = (f2 = h2, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(f2)))) + " */"), g2 = h2.sources.map(function(k2) {
                      return "/*# sourceURL=" + h2.sourceRoot + k2 + " */";
                    });
                    return [u2].concat(g2).concat([p2]).join(`
`);
                  }
                  var f2;
                  return [u2].join(`
`);
                }(r2, i);
                return r2[2] ? "@media " + r2[2] + "{" + l2 + "}" : l2;
              }).join("");
            }, s.i = function(r2, l2) {
              typeof r2 == "string" && (r2 = [[null, r2, ""]]);
              for (var a = {}, c2 = 0; c2 < this.length; c2++) {
                var u2 = this[c2][0];
                typeof u2 == "number" && (a[u2] = true);
              }
              for (c2 = 0; c2 < r2.length; c2++) {
                var h2 = r2[c2];
                typeof h2[0] == "number" && a[h2[0]] || (l2 && !h2[2] ? h2[2] = l2 : l2 && (h2[2] = "(" + h2[2] + ") and (" + l2 + ")"), s.push(h2));
              }
            }, s;
          };
        }, function(t2, o, i) {
          var s, r2, l2 = {}, a = (s = function() {
            return window && document && document.all && !window.atob;
          }, function() {
            return r2 === void 0 && (r2 = s.apply(this, arguments)), r2;
          }), c2 = /* @__PURE__ */ function(v2) {
            var m2 = {};
            return function(x2) {
              if (typeof x2 == "function")
                return x2();
              if (m2[x2] === void 0) {
                var E2 = (function(M2) {
                  return document.querySelector(M2);
                }).call(this, x2);
                if (window.HTMLIFrameElement && E2 instanceof window.HTMLIFrameElement)
                  try {
                    E2 = E2.contentDocument.head;
                  } catch {
                    E2 = null;
                  }
                m2[x2] = E2;
              }
              return m2[x2];
            };
          }(), u2 = null, h2 = 0, p2 = [], g2 = i(5);
          function f2(v2, m2) {
            for (var x2 = 0; x2 < v2.length; x2++) {
              var E2 = v2[x2], M2 = l2[E2.id];
              if (M2) {
                M2.refs++;
                for (var T2 = 0; T2 < M2.parts.length; T2++)
                  M2.parts[T2](E2.parts[T2]);
                for (; T2 < E2.parts.length; T2++)
                  M2.parts.push(j(E2.parts[T2], m2));
              } else {
                var P2 = [];
                for (T2 = 0; T2 < E2.parts.length; T2++)
                  P2.push(j(E2.parts[T2], m2));
                l2[E2.id] = { id: E2.id, refs: 1, parts: P2 };
              }
            }
          }
          function k2(v2, m2) {
            for (var x2 = [], E2 = {}, M2 = 0; M2 < v2.length; M2++) {
              var T2 = v2[M2], P2 = m2.base ? T2[0] + m2.base : T2[0], B2 = { css: T2[1], media: T2[2], sourceMap: T2[3] };
              E2[P2] ? E2[P2].parts.push(B2) : x2.push(E2[P2] = { id: P2, parts: [B2] });
            }
            return x2;
          }
          function C2(v2, m2) {
            var x2 = c2(v2.insertInto);
            if (!x2)
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var E2 = p2[p2.length - 1];
            if (v2.insertAt === "top")
              E2 ? E2.nextSibling ? x2.insertBefore(m2, E2.nextSibling) : x2.appendChild(m2) : x2.insertBefore(m2, x2.firstChild), p2.push(m2);
            else if (v2.insertAt === "bottom")
              x2.appendChild(m2);
            else {
              if (typeof v2.insertAt != "object" || !v2.insertAt.before)
                throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
              var M2 = c2(v2.insertInto + " " + v2.insertAt.before);
              x2.insertBefore(m2, M2);
            }
          }
          function S2(v2) {
            if (v2.parentNode === null)
              return false;
            v2.parentNode.removeChild(v2);
            var m2 = p2.indexOf(v2);
            m2 >= 0 && p2.splice(m2, 1);
          }
          function _(v2) {
            var m2 = document.createElement("style");
            return v2.attrs.type === void 0 && (v2.attrs.type = "text/css"), ee2(m2, v2.attrs), C2(v2, m2), m2;
          }
          function ee2(v2, m2) {
            Object.keys(m2).forEach(function(x2) {
              v2.setAttribute(x2, m2[x2]);
            });
          }
          function j(v2, m2) {
            var x2, E2, M2, T2;
            if (m2.transform && v2.css) {
              if (!(T2 = m2.transform(v2.css)))
                return function() {
                };
              v2.css = T2;
            }
            if (m2.singleton) {
              var P2 = h2++;
              x2 = u2 || (u2 = _(m2)), E2 = fe2.bind(null, x2, P2, false), M2 = fe2.bind(null, x2, P2, true);
            } else
              v2.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (x2 = function(B2) {
                var Y2 = document.createElement("link");
                return B2.attrs.type === void 0 && (B2.attrs.type = "text/css"), B2.attrs.rel = "stylesheet", ee2(Y2, B2.attrs), C2(B2, Y2), Y2;
              }(m2), E2 = (function(B2, Y2, ge2) {
                var ie2 = ge2.css, He2 = ge2.sourceMap, mo = Y2.convertToAbsoluteUrls === void 0 && He2;
                (Y2.convertToAbsoluteUrls || mo) && (ie2 = g2(ie2)), He2 && (ie2 += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(He2)))) + " */");
                var bo = new Blob([ie2], { type: "text/css" }), mt = B2.href;
                B2.href = URL.createObjectURL(bo), mt && URL.revokeObjectURL(mt);
              }).bind(null, x2, m2), M2 = function() {
                S2(x2), x2.href && URL.revokeObjectURL(x2.href);
              }) : (x2 = _(m2), E2 = (function(B2, Y2) {
                var ge2 = Y2.css, ie2 = Y2.media;
                if (ie2 && B2.setAttribute("media", ie2), B2.styleSheet)
                  B2.styleSheet.cssText = ge2;
                else {
                  for (; B2.firstChild; )
                    B2.removeChild(B2.firstChild);
                  B2.appendChild(document.createTextNode(ge2));
                }
              }).bind(null, x2), M2 = function() {
                S2(x2);
              });
            return E2(v2), function(B2) {
              if (B2) {
                if (B2.css === v2.css && B2.media === v2.media && B2.sourceMap === v2.sourceMap)
                  return;
                E2(v2 = B2);
              } else
                M2();
            };
          }
          t2.exports = function(v2, m2) {
            if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
              throw new Error("The style-loader cannot be used in a non-browser environment");
            (m2 = m2 || {}).attrs = typeof m2.attrs == "object" ? m2.attrs : {}, m2.singleton || typeof m2.singleton == "boolean" || (m2.singleton = a()), m2.insertInto || (m2.insertInto = "head"), m2.insertAt || (m2.insertAt = "bottom");
            var x2 = k2(v2, m2);
            return f2(x2, m2), function(E2) {
              for (var M2 = [], T2 = 0; T2 < x2.length; T2++) {
                var P2 = x2[T2];
                (B2 = l2[P2.id]).refs--, M2.push(B2);
              }
              for (E2 && f2(k2(E2, m2), m2), T2 = 0; T2 < M2.length; T2++) {
                var B2;
                if ((B2 = M2[T2]).refs === 0) {
                  for (var Y2 = 0; Y2 < B2.parts.length; Y2++)
                    B2.parts[Y2]();
                  delete l2[B2.id];
                }
              }
            };
          };
          var $, oe2 = ($ = [], function(v2, m2) {
            return $[v2] = m2, $.filter(Boolean).join(`
`);
          });
          function fe2(v2, m2, x2, E2) {
            var M2 = x2 ? "" : E2.css;
            if (v2.styleSheet)
              v2.styleSheet.cssText = oe2(m2, M2);
            else {
              var T2 = document.createTextNode(M2), P2 = v2.childNodes;
              P2[m2] && v2.removeChild(P2[m2]), P2.length ? v2.insertBefore(T2, P2[m2]) : v2.appendChild(T2);
            }
          }
        }, function(t2, o) {
          t2.exports = function(i) {
            var s = typeof window < "u" && window.location;
            if (!s)
              throw new Error("fixUrls requires window.location");
            if (!i || typeof i != "string")
              return i;
            var r2 = s.protocol + "//" + s.host, l2 = r2 + s.pathname.replace(/\/[^\/]*$/, "/");
            return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(a, c2) {
              var u2, h2 = c2.trim().replace(/^"(.*)"$/, function(p2, g2) {
                return g2;
              }).replace(/^'(.*)'$/, function(p2, g2) {
                return g2;
              });
              return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(h2) ? a : (u2 = h2.indexOf("//") === 0 ? h2 : h2.indexOf("/") === 0 ? r2 + h2 : l2 + h2.replace(/^\.\//, ""), "url(" + JSON.stringify(u2) + ")");
            });
          };
        }, function(t2, o, i) {
          var s, r2, l2, a, c2, u2, h2, p2, g2;
          t2.exports = (s = "cdx-notifies", r2 = "cdx-notify", l2 = "cdx-notify__cross", a = "cdx-notify__button--confirm", c2 = "cdx-notify__button--cancel", u2 = "cdx-notify__input", h2 = "cdx-notify__button", p2 = "cdx-notify__btns-wrapper", { alert: g2 = function(f2) {
            var k2 = document.createElement("DIV"), C2 = document.createElement("DIV"), S2 = f2.message, _ = f2.style;
            return k2.classList.add(r2), _ && k2.classList.add(r2 + "--" + _), k2.innerHTML = S2, C2.classList.add(l2), C2.addEventListener("click", k2.remove.bind(k2)), k2.appendChild(C2), k2;
          }, confirm: function(f2) {
            var k2 = g2(f2), C2 = document.createElement("div"), S2 = document.createElement("button"), _ = document.createElement("button"), ee2 = k2.querySelector("." + l2), j = f2.cancelHandler, $ = f2.okHandler;
            return C2.classList.add(p2), S2.innerHTML = f2.okText || "Confirm", _.innerHTML = f2.cancelText || "Cancel", S2.classList.add(h2), _.classList.add(h2), S2.classList.add(a), _.classList.add(c2), j && typeof j == "function" && (_.addEventListener("click", j), ee2.addEventListener("click", j)), $ && typeof $ == "function" && S2.addEventListener("click", $), S2.addEventListener("click", k2.remove.bind(k2)), _.addEventListener("click", k2.remove.bind(k2)), C2.appendChild(S2), C2.appendChild(_), k2.appendChild(C2), k2;
          }, prompt: function(f2) {
            var k2 = g2(f2), C2 = document.createElement("div"), S2 = document.createElement("button"), _ = document.createElement("input"), ee2 = k2.querySelector("." + l2), j = f2.cancelHandler, $ = f2.okHandler;
            return C2.classList.add(p2), S2.innerHTML = f2.okText || "Ok", S2.classList.add(h2), S2.classList.add(a), _.classList.add(u2), f2.placeholder && _.setAttribute("placeholder", f2.placeholder), f2.default && (_.value = f2.default), f2.inputType && (_.type = f2.inputType), j && typeof j == "function" && ee2.addEventListener("click", j), $ && typeof $ == "function" && S2.addEventListener("click", function() {
              $(_.value);
            }), S2.addEventListener("click", k2.remove.bind(k2)), C2.appendChild(_), C2.appendChild(S2), k2.appendChild(C2), k2;
          }, getWrapper: function() {
            var f2 = document.createElement("DIV");
            return f2.classList.add(s), f2;
          } });
        }]);
      });
    })(Ut);
    var jt = { exports: {} };
    (function(n2, e2) {
      (function(t2, o) {
        n2.exports = o();
      })(ko, function() {
        function t2(h2) {
          var p2 = h2.tags, g2 = Object.keys(p2), f2 = g2.map(function(k2) {
            return typeof p2[k2];
          }).every(function(k2) {
            return k2 === "object" || k2 === "boolean" || k2 === "function";
          });
          if (!f2)
            throw new Error("The configuration was invalid");
          this.config = h2;
        }
        var o = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
        function i(h2) {
          return o.indexOf(h2.nodeName) !== -1;
        }
        var s = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
        function r2(h2) {
          return s.indexOf(h2.nodeName) !== -1;
        }
        t2.prototype.clean = function(h2) {
          const p2 = document.implementation.createHTMLDocument(), g2 = p2.createElement("div");
          return g2.innerHTML = h2, this._sanitize(p2, g2), g2.innerHTML;
        }, t2.prototype._sanitize = function(h2, p2) {
          var g2 = l2(h2, p2), f2 = g2.firstChild();
          if (f2)
            do {
              if (f2.nodeType === Node.TEXT_NODE)
                if (f2.data.trim() === "" && (f2.previousElementSibling && i(f2.previousElementSibling) || f2.nextElementSibling && i(f2.nextElementSibling))) {
                  p2.removeChild(f2), this._sanitize(h2, p2);
                  break;
                } else
                  continue;
              if (f2.nodeType === Node.COMMENT_NODE) {
                p2.removeChild(f2), this._sanitize(h2, p2);
                break;
              }
              var k2 = r2(f2), C2;
              k2 && (C2 = Array.prototype.some.call(f2.childNodes, i));
              var S2 = !!p2.parentNode, _ = i(p2) && i(f2) && S2, ee2 = f2.nodeName.toLowerCase(), j = a(this.config, ee2, f2), $ = k2 && C2;
              if ($ || c2(f2, j) || !this.config.keepNestedBlockElements && _) {
                if (!(f2.nodeName === "SCRIPT" || f2.nodeName === "STYLE"))
                  for (; f2.childNodes.length > 0; )
                    p2.insertBefore(f2.childNodes[0], f2);
                p2.removeChild(f2), this._sanitize(h2, p2);
                break;
              }
              for (var oe2 = 0; oe2 < f2.attributes.length; oe2 += 1) {
                var fe2 = f2.attributes[oe2];
                u2(fe2, j, f2) && (f2.removeAttribute(fe2.name), oe2 = oe2 - 1);
              }
              this._sanitize(h2, f2);
            } while (f2 = g2.nextSibling());
        };
        function l2(h2, p2) {
          return h2.createTreeWalker(
            p2,
            NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
            null,
            false
          );
        }
        function a(h2, p2, g2) {
          return typeof h2.tags[p2] == "function" ? h2.tags[p2](g2) : h2.tags[p2];
        }
        function c2(h2, p2) {
          return typeof p2 > "u" ? true : typeof p2 == "boolean" ? !p2 : false;
        }
        function u2(h2, p2, g2) {
          var f2 = h2.name.toLowerCase();
          return p2 === true ? false : typeof p2[f2] == "function" ? !p2[f2](h2.value, g2) : typeof p2[f2] > "u" || p2[f2] === false ? true : typeof p2[f2] == "string" ? p2[f2] !== h2.value : false;
        }
        return t2;
      });
    })(jt);
    var Jo = jt.exports;
    const Qo = /* @__PURE__ */ Fe(Jo);
    function it(n2, e2) {
      return n2.map((t2) => {
        const o = O(e2) ? e2(t2.tool) : e2;
        return V(o) || (t2.data = st(t2.data, o)), t2;
      });
    }
    function q(n2, e2 = {}) {
      const t2 = {
        tags: e2
      };
      return new Qo(t2).clean(n2);
    }
    function st(n2, e2) {
      return Array.isArray(n2) ? ei(n2, e2) : R(n2) ? ti(n2, e2) : Q(n2) ? oi(n2, e2) : n2;
    }
    function ei(n2, e2) {
      return n2.map((t2) => st(t2, e2));
    }
    function ti(n2, e2) {
      const t2 = {};
      for (const o in n2) {
        if (!Object.prototype.hasOwnProperty.call(n2, o))
          continue;
        const i = n2[o], s = ii(e2[o]) ? e2[o] : e2;
        t2[o] = st(i, s);
      }
      return t2;
    }
    function oi(n2, e2) {
      return R(e2) ? q(n2, e2) : e2 === false ? q(n2, {}) : n2;
    }
    function ii(n2) {
      return R(n2) || yo(n2) || O(n2);
    }
    var $t = { exports: {} };
    /*!
     * CodeX.Tooltips
     * 
     * @version 1.0.5
     * 
     * @licence MIT
     * @author CodeX <https://codex.so>
     * 
     * 
     */
    (function(n2, e2) {
      (function(t2, o) {
        n2.exports = o();
      })(window, function() {
        return function(t2) {
          var o = {};
          function i(s) {
            if (o[s])
              return o[s].exports;
            var r2 = o[s] = { i: s, l: false, exports: {} };
            return t2[s].call(r2.exports, r2, r2.exports, i), r2.l = true, r2.exports;
          }
          return i.m = t2, i.c = o, i.d = function(s, r2, l2) {
            i.o(s, r2) || Object.defineProperty(s, r2, { enumerable: true, get: l2 });
          }, i.r = function(s) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: true });
          }, i.t = function(s, r2) {
            if (1 & r2 && (s = i(s)), 8 & r2 || 4 & r2 && typeof s == "object" && s && s.__esModule)
              return s;
            var l2 = /* @__PURE__ */ Object.create(null);
            if (i.r(l2), Object.defineProperty(l2, "default", { enumerable: true, value: s }), 2 & r2 && typeof s != "string")
              for (var a in s)
                i.d(l2, a, (function(c2) {
                  return s[c2];
                }).bind(null, a));
            return l2;
          }, i.n = function(s) {
            var r2 = s && s.__esModule ? function() {
              return s.default;
            } : function() {
              return s;
            };
            return i.d(r2, "a", r2), r2;
          }, i.o = function(s, r2) {
            return Object.prototype.hasOwnProperty.call(s, r2);
          }, i.p = "", i(i.s = 0);
        }([function(t2, o, i) {
          t2.exports = i(1);
        }, function(t2, o, i) {
          i.r(o), i.d(o, "default", function() {
            return s;
          });
          class s {
            constructor() {
              this.nodes = { wrapper: null, content: null }, this.showed = false, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
                this.showed && this.hide(true);
              }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: true });
            }
            get CSS() {
              return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
            }
            show(l2, a, c2) {
              this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
              const u2 = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, c2);
              if (u2.hidingDelay && (this.hidingDelay = u2.hidingDelay), this.nodes.content.innerHTML = "", typeof a == "string")
                this.nodes.content.appendChild(document.createTextNode(a));
              else {
                if (!(a instanceof Node))
                  throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + typeof a + " given.");
                this.nodes.content.appendChild(a);
              }
              switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), u2.placement) {
                case "top":
                  this.placeTop(l2, u2);
                  break;
                case "left":
                  this.placeLeft(l2, u2);
                  break;
                case "right":
                  this.placeRight(l2, u2);
                  break;
                case "bottom":
                default:
                  this.placeBottom(l2, u2);
              }
              u2 && u2.delay ? this.showingTimeout = setTimeout(() => {
                this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true;
              }, u2.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true);
            }
            hide(l2 = false) {
              if (this.hidingDelay && !l2)
                return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
                  this.hide(true);
                }, this.hidingDelay));
              this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = false, this.showingTimeout && clearTimeout(this.showingTimeout);
            }
            onHover(l2, a, c2) {
              l2.addEventListener("mouseenter", () => {
                this.show(l2, a, c2);
              }), l2.addEventListener("mouseleave", () => {
                this.hide();
              });
            }
            destroy() {
              this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
            }
            prepare() {
              this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
            }
            loadStyles() {
              const l2 = "codex-tooltips-style";
              if (document.getElementById(l2))
                return;
              const a = i(2), c2 = this.make("style", null, { textContent: a.toString(), id: l2 });
              this.prepend(document.head, c2);
            }
            placeBottom(l2, a) {
              const c2 = l2.getBoundingClientRect(), u2 = c2.left + l2.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h2 = c2.bottom + window.pageYOffset + this.offsetTop + a.marginTop;
              this.applyPlacement("bottom", u2, h2);
            }
            placeTop(l2, a) {
              const c2 = l2.getBoundingClientRect(), u2 = c2.left + l2.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h2 = c2.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
              this.applyPlacement("top", u2, h2);
            }
            placeLeft(l2, a) {
              const c2 = l2.getBoundingClientRect(), u2 = c2.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - a.marginLeft, h2 = c2.top + window.pageYOffset + l2.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
              this.applyPlacement("left", u2, h2);
            }
            placeRight(l2, a) {
              const c2 = l2.getBoundingClientRect(), u2 = c2.right + this.offsetRight + a.marginRight, h2 = c2.top + window.pageYOffset + l2.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
              this.applyPlacement("right", u2, h2);
            }
            applyPlacement(l2, a, c2) {
              this.nodes.wrapper.classList.add(this.CSS.placement[l2]), this.nodes.wrapper.style.left = a + "px", this.nodes.wrapper.style.top = c2 + "px";
            }
            make(l2, a = null, c2 = {}) {
              const u2 = document.createElement(l2);
              Array.isArray(a) ? u2.classList.add(...a) : a && u2.classList.add(a);
              for (const h2 in c2)
                c2.hasOwnProperty(h2) && (u2[h2] = c2[h2]);
              return u2;
            }
            append(l2, a) {
              Array.isArray(a) ? a.forEach((c2) => l2.appendChild(c2)) : l2.appendChild(a);
            }
            prepend(l2, a) {
              Array.isArray(a) ? (a = a.reverse()).forEach((c2) => l2.prepend(c2)) : l2.prepend(a);
            }
          }
        }, function(t2, o) {
          t2.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
        }]).default;
      });
    })($t);
    var di = $t.exports;
    const hi = /* @__PURE__ */ Fe(di);
    let U = null;
    function nt() {
      U || (U = new hi());
    }
    function Ne(n2 = false) {
      nt(), U == null || U.hide(n2);
    }
    function Pe(n2, e2, t2) {
      nt(), U == null || U.onHover(n2, e2, t2);
    }
    function Yt(n2, e2) {
      const t2 = {};
      return Object.entries(n2).forEach(([o, i]) => {
        if (R(i)) {
          const s = e2 ? `${e2}.${o}` : o;
          Object.values(i).every((l2) => Q(l2)) ? t2[o] = s : t2[o] = Yt(i, s);
          return;
        }
        t2[o] = i;
      }), t2;
    }
    const K = Yt(_t);
    const Wt = class ve2 {
      /**
       * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
       * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
       */
      constructor(e2, t2) {
        this.cursor = -1, this.items = [], this.items = e2 || [], this.focusedCssClass = t2;
      }
      /**
       * Returns Focused button Node
       *
       * @returns {HTMLElement}
       */
      get currentItem() {
        return this.cursor === -1 ? null : this.items[this.cursor];
      }
      /**
       * Sets cursor to specified position
       *
       * @param cursorPosition - new cursor position
       */
      setCursor(e2) {
        e2 < this.items.length && e2 >= -1 && (this.dropCursor(), this.cursor = e2, this.items[this.cursor].classList.add(this.focusedCssClass));
      }
      /**
       * Sets items. Can be used when iterable items changed dynamically
       *
       * @param {HTMLElement[]} nodeList - nodes to iterate
       */
      setItems(e2) {
        this.items = e2;
      }
      /**
       * Sets cursor next to the current
       */
      next() {
        this.cursor = this.leafNodesAndReturnIndex(ve2.directions.RIGHT);
      }
      /**
       * Sets cursor before current
       */
      previous() {
        this.cursor = this.leafNodesAndReturnIndex(ve2.directions.LEFT);
      }
      /**
       * Sets cursor to the default position and removes CSS-class from previously focused item
       */
      dropCursor() {
        this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
      }
      /**
       * Leafs nodes inside the target list from active element
       *
       * @param {string} direction - leaf direction. Can be 'left' or 'right'
       * @returns {number} index of focused node
       */
      leafNodesAndReturnIndex(e2) {
        if (this.items.length === 0)
          return this.cursor;
        let t2 = this.cursor;
        return t2 === -1 ? t2 = e2 === ve2.directions.RIGHT ? -1 : 0 : this.items[t2].classList.remove(this.focusedCssClass), e2 === ve2.directions.RIGHT ? t2 = (t2 + 1) % this.items.length : t2 = (this.items.length + t2 - 1) % this.items.length, d.canSetCaret(this.items[t2]) && Oe(() => b.setCursor(this.items[t2]), 50)(), this.items[t2].classList.add(this.focusedCssClass), t2;
      }
    };
    Wt.directions = {
      RIGHT: "right",
      LEFT: "left"
    };
    let me = Wt;
    class le {
      /**
       * @param options - different constructing settings
       */
      constructor(e2) {
        this.iterator = null, this.activated = false, this.flipCallbacks = [], this.onKeyDown = (t2) => {
          if (this.isEventReadyForHandling(t2))
            switch (le.usedKeys.includes(t2.keyCode) && t2.preventDefault(), t2.keyCode) {
              case w.TAB:
                this.handleTabPress(t2);
                break;
              case w.LEFT:
              case w.UP:
                this.flipLeft();
                break;
              case w.RIGHT:
              case w.DOWN:
                this.flipRight();
                break;
              case w.ENTER:
                this.handleEnterPress(t2);
                break;
            }
        }, this.iterator = new me(e2.items, e2.focusedItemClass), this.activateCallback = e2.activateCallback, this.allowedKeys = e2.allowedKeys || le.usedKeys;
      }
      /**
       * True if flipper is currently activated
       */
      get isActivated() {
        return this.activated;
      }
      /**
       * Array of keys (codes) that is handled by Flipper
       * Used to:
       *  - preventDefault only for this keys, not all keydowns (@see constructor)
       *  - to skip external behaviours only for these keys, when filler is activated (@see BlockEvents@arrowRightAndDown)
       */
      static get usedKeys() {
        return [
          w.TAB,
          w.LEFT,
          w.RIGHT,
          w.ENTER,
          w.UP,
          w.DOWN
        ];
      }
      /**
       * Active tab/arrows handling by flipper
       *
       * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
       * @param cursorPosition - index of the item that should be focused once flipper is activated
       */
      activate(e2, t2) {
        this.activated = true, e2 && this.iterator.setItems(e2), t2 !== void 0 && this.iterator.setCursor(t2), document.addEventListener("keydown", this.onKeyDown, true);
      }
      /**
       * Disable tab/arrows handling by flipper
       */
      deactivate() {
        this.activated = false, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
      }
      /**
       * Focus first item
       */
      focusFirst() {
        this.dropCursor(), this.flipRight();
      }
      /**
       * Focuses previous flipper iterator item
       */
      flipLeft() {
        this.iterator.previous(), this.flipCallback();
      }
      /**
       * Focuses next flipper iterator item
       */
      flipRight() {
        this.iterator.next(), this.flipCallback();
      }
      /**
       * Return true if some button is focused
       */
      hasFocus() {
        return !!this.iterator.currentItem;
      }
      /**
       * Registeres function that should be executed on each navigation action
       *
       * @param cb - function to execute
       */
      onFlip(e2) {
        this.flipCallbacks.push(e2);
      }
      /**
       * Unregisteres function that is executed on each navigation action
       *
       * @param cb - function to stop executing
       */
      removeOnFlip(e2) {
        this.flipCallbacks = this.flipCallbacks.filter((t2) => t2 !== e2);
      }
      /**
       * Drops flipper's iterator cursor
       *
       * @see DomIterator#dropCursor
       */
      dropCursor() {
        this.iterator.dropCursor();
      }
      /**
       * This function is fired before handling flipper keycodes
       * The result of this function defines if it is need to be handled or not
       *
       * @param {KeyboardEvent} event - keydown keyboard event
       * @returns {boolean}
       */
      isEventReadyForHandling(e2) {
        return this.activated && this.allowedKeys.includes(e2.keyCode);
      }
      /**
       * When flipper is activated tab press will leaf the items
       *
       * @param {KeyboardEvent} event - tab keydown event
       */
      handleTabPress(e2) {
        switch (e2.shiftKey ? me.directions.LEFT : me.directions.RIGHT) {
          case me.directions.RIGHT:
            this.flipRight();
            break;
          case me.directions.LEFT:
            this.flipLeft();
            break;
        }
      }
      /**
       * Enter press will click current item if flipper is activated
       *
       * @param {KeyboardEvent} event - enter keydown event
       */
      handleEnterPress(e2) {
        this.activated && (this.iterator.currentItem && (e2.stopPropagation(), e2.preventDefault(), this.iterator.currentItem.click()), O(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
      }
      /**
       * Fired after flipping in any direction
       */
      flipCallback() {
        this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e2) => e2());
      }
    }
    const bi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>', ki = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', vi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 17.5L9.64142 12.6414C9.56331 12.5633 9.56331 12.4367 9.64142 12.3586L14.5 7.5"/></svg>', wi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.58284 17.5L14.4414 12.6414C14.5195 12.5633 14.5195 12.4367 14.4414 12.3586L9.58284 7.5"/></svg>', xi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>', yi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', Ei = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', Bi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>', yt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', Kt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11M5 11V15.5M5 11H9.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.5 6.5L19 13M19 13V8.5M19 13H14.5"/></svg>', Si = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', Ii = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', Mi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>', Ai = "__", Oi = "--";
    function te(n2) {
      return (e2, t2) => [[n2, e2].filter((i) => !!i).join(Ai), t2].filter((i) => !!i).join(Oi);
    }
    const be = te("ce-hint"), ke = {
      root: be(),
      alignedStart: be(null, "align-left"),
      alignedCenter: be(null, "align-center"),
      title: be("title"),
      description: be("description")
    };
    class Li {
      /**
       * Constructs the hint content instance
       *
       * @param params - hint content parameters
       */
      constructor(e2) {
        this.nodes = {
          root: d.make("div", [ke.root, e2.alignment === "center" ? ke.alignedCenter : ke.alignedStart]),
          title: d.make("div", ke.title, { textContent: e2.title })
        }, this.nodes.root.appendChild(this.nodes.title), e2.description !== void 0 && (this.nodes.description = d.make("div", ke.description, { textContent: e2.description }), this.nodes.root.appendChild(this.nodes.description));
      }
      /**
       * Returns the root element of the hint content
       */
      getElement() {
        return this.nodes.root;
      }
    }
    class rt {
      /**
       * Constructs the instance
       *
       * @param params - instance parameters
       */
      constructor(e2) {
        this.params = e2;
      }
      /**
       * Item name if exists
       */
      get name() {
        if (this.params !== void 0 && "name" in this.params)
          return this.params.name;
      }
      /**
       * Destroys the instance
       */
      destroy() {
        Ne();
      }
      /**
       * Called when children popover is opened (if exists)
       */
      onChildrenOpen() {
        var e2;
        this.params !== void 0 && "children" in this.params && typeof ((e2 = this.params.children) == null ? void 0 : e2.onOpen) == "function" && this.params.children.onOpen();
      }
      /**
       * Called when children popover is closed (if exists)
       */
      onChildrenClose() {
        var e2;
        this.params !== void 0 && "children" in this.params && typeof ((e2 = this.params.children) == null ? void 0 : e2.onClose) == "function" && this.params.children.onClose();
      }
      /**
       * Called on popover item click
       */
      handleClick() {
        var e2, t2;
        this.params !== void 0 && "onActivate" in this.params && ((t2 = (e2 = this.params).onActivate) == null || t2.call(e2, this.params));
      }
      /**
       * Adds hint to the item element if hint data is provided
       *
       * @param itemElement - popover item root element to add hint to
       * @param hintData - hint data
       */
      addHint(e2, t2) {
        const o = new Li(t2);
        Pe(e2, o.getElement(), {
          placement: t2.position,
          hidingDelay: 100
        });
      }
      /**
       * Returns item children that are represented as popover items
       */
      get children() {
        var e2;
        return this.params !== void 0 && "children" in this.params && ((e2 = this.params.children) == null ? void 0 : e2.items) !== void 0 ? this.params.children.items : [];
      }
      /**
       * Returns true if item has any type of children
       */
      get hasChildren() {
        return this.children.length > 0;
      }
      /**
       * Returns true if item children should be open instantly after popover is opened and not on item click/hover
       */
      get isChildrenOpen() {
        var e2;
        return this.params !== void 0 && "children" in this.params && ((e2 = this.params.children) == null ? void 0 : e2.isOpen) === true;
      }
      /**
       * True if item children items should be navigatable via keyboard
       */
      get isChildrenFlippable() {
        var e2;
        return !(this.params === void 0 || !("children" in this.params) || ((e2 = this.params.children) == null ? void 0 : e2.isFlippable) === false);
      }
      /**
       * Returns true if item has children that should be searchable
       */
      get isChildrenSearchable() {
        var e2;
        return this.params !== void 0 && "children" in this.params && ((e2 = this.params.children) == null ? void 0 : e2.searchable) === true;
      }
      /**
       * True if popover should close once item is activated
       */
      get closeOnActivate() {
        return this.params !== void 0 && "closeOnActivate" in this.params && this.params.closeOnActivate;
      }
      /**
       * True if item is active
       */
      get isActive() {
        return this.params === void 0 || !("isActive" in this.params) ? false : typeof this.params.isActive == "function" ? this.params.isActive() : this.params.isActive === true;
      }
    }
    const W = te("ce-popover-item"), L = {
      container: W(),
      active: W(null, "active"),
      disabled: W(null, "disabled"),
      focused: W(null, "focused"),
      hidden: W(null, "hidden"),
      confirmationState: W(null, "confirmation"),
      noHover: W(null, "no-hover"),
      noFocus: W(null, "no-focus"),
      title: W("title"),
      secondaryTitle: W("secondary-title"),
      icon: W("icon"),
      iconTool: W("icon", "tool"),
      iconChevronRight: W("icon", "chevron-right"),
      wobbleAnimation: te("wobble")()
    };
    class se extends rt {
      /**
       * Constructs popover item instance
       *
       * @param params - popover item construction params
       * @param renderParams - popover item render params.
       * The parameters that are not set by user via popover api but rather depend on technical implementation
       */
      constructor(e2, t2) {
        super(e2), this.params = e2, this.nodes = {
          root: null,
          icon: null
        }, this.confirmationState = null, this.removeSpecialFocusBehavior = () => {
          var o;
          (o = this.nodes.root) == null || o.classList.remove(L.noFocus);
        }, this.removeSpecialHoverBehavior = () => {
          var o;
          (o = this.nodes.root) == null || o.classList.remove(L.noHover);
        }, this.onErrorAnimationEnd = () => {
          var o, i;
          (o = this.nodes.icon) == null || o.classList.remove(L.wobbleAnimation), (i = this.nodes.icon) == null || i.removeEventListener("animationend", this.onErrorAnimationEnd);
        }, this.nodes.root = this.make(e2, t2);
      }
      /**
       * True if item is disabled and hence not clickable
       */
      get isDisabled() {
        return this.params.isDisabled === true;
      }
      /**
       * Exposes popover item toggle parameter
       */
      get toggle() {
        return this.params.toggle;
      }
      /**
       * Item title
       */
      get title() {
        return this.params.title;
      }
      /**
       * True if confirmation state is enabled for popover item
       */
      get isConfirmationStateEnabled() {
        return this.confirmationState !== null;
      }
      /**
       * True if item is focused in keyboard navigation process
       */
      get isFocused() {
        return this.nodes.root === null ? false : this.nodes.root.classList.contains(L.focused);
      }
      /**
       * Returns popover item root element
       */
      getElement() {
        return this.nodes.root;
      }
      /**
       * Called on popover item click
       */
      handleClick() {
        if (this.isConfirmationStateEnabled && this.confirmationState !== null) {
          this.activateOrEnableConfirmationMode(this.confirmationState);
          return;
        }
        this.activateOrEnableConfirmationMode(this.params);
      }
      /**
       * Toggles item active state
       *
       * @param isActive - true if item should strictly should become active
       */
      toggleActive(e2) {
        var t2;
        (t2 = this.nodes.root) == null || t2.classList.toggle(L.active, e2);
      }
      /**
       * Toggles item hidden state
       *
       * @param isHidden - true if item should be hidden
       */
      toggleHidden(e2) {
        var t2;
        (t2 = this.nodes.root) == null || t2.classList.toggle(L.hidden, e2);
      }
      /**
       * Resets popover item to its original state
       */
      reset() {
        this.isConfirmationStateEnabled && this.disableConfirmationMode();
      }
      /**
       * Method called once item becomes focused during keyboard navigation
       */
      onFocus() {
        this.disableSpecialHoverAndFocusBehavior();
      }
      /**
       * Constructs HTML element corresponding to popover item params
       *
       * @param params - item construction params
       * @param renderParams - popover item render params
       */
      make(e2, t2) {
        var s, r2;
        const o = (t2 == null ? void 0 : t2.wrapperTag) || "div", i = d.make(o, L.container, {
          type: o === "button" ? "button" : void 0
        });
        return e2.name && (i.dataset.itemName = e2.name), this.nodes.icon = d.make("div", [L.icon, L.iconTool], {
          innerHTML: e2.icon || Ei
        }), i.appendChild(this.nodes.icon), e2.title !== void 0 && i.appendChild(d.make("div", L.title, {
          innerHTML: e2.title || ""
        })), e2.secondaryLabel && i.appendChild(d.make("div", L.secondaryTitle, {
          textContent: e2.secondaryLabel
        })), this.hasChildren && i.appendChild(d.make("div", [L.icon, L.iconChevronRight], {
          innerHTML: wi
        })), this.isActive && i.classList.add(L.active), e2.isDisabled && i.classList.add(L.disabled), e2.hint !== void 0 && ((s = t2 == null ? void 0 : t2.hint) == null ? void 0 : s.enabled) !== false && this.addHint(i, {
          ...e2.hint,
          position: ((r2 = t2 == null ? void 0 : t2.hint) == null ? void 0 : r2.position) || "right"
        }), i;
      }
      /**
       * Activates confirmation mode for the item.
       *
       * @param newState - new popover item params that should be applied
       */
      enableConfirmationMode(e2) {
        if (this.nodes.root === null)
          return;
        const t2 = {
          ...this.params,
          ...e2,
          confirmation: "confirmation" in e2 ? e2.confirmation : void 0
        }, o = this.make(t2);
        this.nodes.root.innerHTML = o.innerHTML, this.nodes.root.classList.add(L.confirmationState), this.confirmationState = e2, this.enableSpecialHoverAndFocusBehavior();
      }
      /**
       * Returns item to its original state
       */
      disableConfirmationMode() {
        if (this.nodes.root === null)
          return;
        const e2 = this.make(this.params);
        this.nodes.root.innerHTML = e2.innerHTML, this.nodes.root.classList.remove(L.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
      }
      /**
       * Enables special focus and hover behavior for item in confirmation state.
       * This is needed to prevent item from being highlighted as hovered/focused just after click.
       */
      enableSpecialHoverAndFocusBehavior() {
        var e2, t2, o;
        (e2 = this.nodes.root) == null || e2.classList.add(L.noHover), (t2 = this.nodes.root) == null || t2.classList.add(L.noFocus), (o = this.nodes.root) == null || o.addEventListener("mouseleave", this.removeSpecialHoverBehavior, { once: true });
      }
      /**
       * Disables special focus and hover behavior
       */
      disableSpecialHoverAndFocusBehavior() {
        var e2;
        this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), (e2 = this.nodes.root) == null || e2.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
      }
      /**
       * Executes item's onActivate callback if the item has no confirmation configured
       *
       * @param item - item to activate or bring to confirmation mode
       */
      activateOrEnableConfirmationMode(e2) {
        var t2;
        if (!("confirmation" in e2) || e2.confirmation === void 0)
          try {
            (t2 = e2.onActivate) == null || t2.call(e2, e2), this.disableConfirmationMode();
          } catch {
            this.animateError();
          }
        else
          this.enableConfirmationMode(e2.confirmation);
      }
      /**
       * Animates item which symbolizes that error occured while executing 'onActivate()' callback
       */
      animateError() {
        var e2, t2, o;
        (e2 = this.nodes.icon) != null && e2.classList.contains(L.wobbleAnimation) || ((t2 = this.nodes.icon) == null || t2.classList.add(L.wobbleAnimation), (o = this.nodes.icon) == null || o.addEventListener("animationend", this.onErrorAnimationEnd));
      }
    }
    const Ue = te("ce-popover-item-separator"), je = {
      container: Ue(),
      line: Ue("line"),
      hidden: Ue(null, "hidden")
    };
    class Xt extends rt {
      /**
       * Constructs the instance
       */
      constructor() {
        super(), this.nodes = {
          root: d.make("div", je.container),
          line: d.make("div", je.line)
        }, this.nodes.root.appendChild(this.nodes.line);
      }
      /**
       * Returns popover separator root element
       */
      getElement() {
        return this.nodes.root;
      }
      /**
       * Toggles item hidden state
       *
       * @param isHidden - true if item should be hidden
       */
      toggleHidden(e2) {
        var t2;
        (t2 = this.nodes.root) == null || t2.classList.toggle(je.hidden, e2);
      }
    }
    var Z = /* @__PURE__ */ ((n2) => (n2.Closed = "closed", n2.ClosedOnActivate = "closed-on-activate", n2))(Z || {});
    const H = te("ce-popover"), N = {
      popover: H(),
      popoverContainer: H("container"),
      popoverOpenTop: H(null, "open-top"),
      popoverOpenLeft: H(null, "open-left"),
      popoverOpened: H(null, "opened"),
      search: H("search"),
      nothingFoundMessage: H("nothing-found-message"),
      nothingFoundMessageDisplayed: H("nothing-found-message", "displayed"),
      items: H("items"),
      overlay: H("overlay"),
      overlayHidden: H("overlay", "hidden"),
      popoverNested: H(null, "nested"),
      getPopoverNestedClass: (n2) => H(null, `nested-level-${n2.toString()}`),
      popoverInline: H(null, "inline"),
      popoverHeader: H("header")
    };
    var de = /* @__PURE__ */ ((n2) => (n2.NestingLevel = "--nesting-level", n2.PopoverHeight = "--popover-height", n2.InlinePopoverWidth = "--inline-popover-width", n2.TriggerItemLeft = "--trigger-item-left", n2.TriggerItemTop = "--trigger-item-top", n2))(de || {});
    const Et = te("ce-popover-item-html"), Bt = {
      root: Et(),
      hidden: Et(null, "hidden")
    };
    class Ee extends rt {
      /**
       * Constructs the instance
       *
       * @param params – instance parameters
       * @param renderParams – popover item render params.
       * The parameters that are not set by user via popover api but rather depend on technical implementation
       */
      constructor(e2, t2) {
        var o, i;
        super(e2), this.nodes = {
          root: d.make("div", Bt.root)
        }, this.nodes.root.appendChild(e2.element), e2.name && (this.nodes.root.dataset.itemName = e2.name), e2.hint !== void 0 && ((o = t2 == null ? void 0 : t2.hint) == null ? void 0 : o.enabled) !== false && this.addHint(this.nodes.root, {
          ...e2.hint,
          position: ((i = t2 == null ? void 0 : t2.hint) == null ? void 0 : i.position) || "right"
        });
      }
      /**
       * Returns popover item root element
       */
      getElement() {
        return this.nodes.root;
      }
      /**
       * Toggles item hidden state
       *
       * @param isHidden - true if item should be hidden
       */
      toggleHidden(e2) {
        var t2;
        (t2 = this.nodes.root) == null || t2.classList.toggle(Bt.hidden, e2);
      }
      /**
       * Returns list of buttons and inputs inside custom content
       */
      getControls() {
        const e2 = this.nodes.root.querySelectorAll(
          `button, ${d.allInputsSelector}`
        );
        return Array.from(e2);
      }
    }
    class Vt extends Te {
      /**
       * Constructs the instance
       *
       * @param params - popover construction params
       * @param itemsRenderParams - popover item render params.
       * The parameters that are not set by user via popover api but rather depend on technical implementation
       */
      constructor(e2, t2 = {}) {
        super(), this.params = e2, this.itemsRenderParams = t2, this.listeners = new Ce(), this.messages = {
          nothingFound: "Nothing found",
          search: "Search"
        }, this.items = this.buildItems(e2.items), e2.messages && (this.messages = {
          ...this.messages,
          ...e2.messages
        }), this.nodes = {}, this.nodes.popoverContainer = d.make("div", [N.popoverContainer]), this.nodes.nothingFoundMessage = d.make("div", [N.nothingFoundMessage], {
          textContent: this.messages.nothingFound
        }), this.nodes.popoverContainer.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = d.make("div", [N.items]), this.items.forEach((o) => {
          const i = o.getElement();
          i !== null && this.nodes.items.appendChild(i);
        }), this.nodes.popoverContainer.appendChild(this.nodes.items), this.listeners.on(this.nodes.popoverContainer, "click", (o) => this.handleClick(o)), this.nodes.popover = d.make("div", [
          N.popover,
          this.params.class
        ]), this.nodes.popover.appendChild(this.nodes.popoverContainer);
      }
      /**
       * List of default popover items that are searchable and may have confirmation state
       */
      get itemsDefault() {
        return this.items.filter((e2) => e2 instanceof se);
      }
      /**
       * Returns HTML element corresponding to the popover
       */
      getElement() {
        return this.nodes.popover;
      }
      /**
       * Open popover
       */
      show() {
        this.nodes.popover.classList.add(N.popoverOpened), this.search !== void 0 && this.search.focus();
      }
      /**
       * Closes popover
       */
      hide() {
        this.nodes.popover.classList.remove(N.popoverOpened), this.nodes.popover.classList.remove(N.popoverOpenTop), this.itemsDefault.forEach((e2) => e2.reset()), this.search !== void 0 && this.search.clear(), this.emit(Z.Closed);
      }
      /**
       * Clears memory
       */
      destroy() {
        var e2;
        this.items.forEach((t2) => t2.destroy()), this.nodes.popover.remove(), this.listeners.removeAll(), (e2 = this.search) == null || e2.destroy();
      }
      /**
       * Looks for the item by name and imitates click on it
       *
       * @param name - name of the item to activate
       */
      activateItemByName(e2) {
        const t2 = this.items.find((o) => o.name === e2);
        this.handleItemClick(t2);
      }
      /**
       * Factory method for creating popover items
       *
       * @param items - list of items params
       */
      buildItems(e2) {
        return e2.map((t2) => {
          switch (t2.type) {
            case A.Separator:
              return new Xt();
            case A.Html:
              return new Ee(t2, this.itemsRenderParams[A.Html]);
            default:
              return new se(t2, this.itemsRenderParams[A.Default]);
          }
        });
      }
      /**
       * Retrieves popover item that is the target of the specified event
       *
       * @param event - event to retrieve popover item from
       */
      getTargetItem(e2) {
        return this.items.filter((t2) => t2 instanceof se || t2 instanceof Ee).find((t2) => {
          const o = t2.getElement();
          return o === null ? false : e2.composedPath().includes(o);
        });
      }
      /**
       * Handles popover item click
       *
       * @param item - item to handle click of
       */
      handleItemClick(e2) {
        if (!("isDisabled" in e2 && e2.isDisabled)) {
          if (e2.hasChildren) {
            this.showNestedItems(e2), "handleClick" in e2 && typeof e2.handleClick == "function" && e2.handleClick();
            return;
          }
          this.itemsDefault.filter((t2) => t2 !== e2).forEach((t2) => t2.reset()), "handleClick" in e2 && typeof e2.handleClick == "function" && e2.handleClick(), this.toggleItemActivenessIfNeeded(e2), e2.closeOnActivate && (this.hide(), this.emit(Z.ClosedOnActivate));
        }
      }
      /**
       * Handles clicks inside popover
       *
       * @param event - item to handle click of
       */
      handleClick(e2) {
        const t2 = this.getTargetItem(e2);
        t2 !== void 0 && this.handleItemClick(t2);
      }
      /**
       * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
       *
       * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
       * (All the other items with the same key get inactive, and the item gets active)
       *
       * @param clickedItem - popover item that was clicked
       */
      toggleItemActivenessIfNeeded(e2) {
        if (e2 instanceof se && (e2.toggle === true && e2.toggleActive(), typeof e2.toggle == "string")) {
          const t2 = this.itemsDefault.filter((o) => o.toggle === e2.toggle);
          if (t2.length === 1) {
            e2.toggleActive();
            return;
          }
          t2.forEach((o) => {
            o.toggleActive(o === e2);
          });
        }
      }
    }
    var De = /* @__PURE__ */ ((n2) => (n2.Search = "search", n2))(De || {});
    const $e = te("cdx-search-field"), Ye = {
      wrapper: $e(),
      icon: $e("icon"),
      input: $e("input")
    };
    class _i extends Te {
      /**
       * @param options - available config
       * @param options.items - searchable items list
       * @param options.placeholder - input placeholder
       */
      constructor({ items: e2, placeholder: t2 }) {
        super(), this.listeners = new Ce(), this.items = e2, this.wrapper = d.make("div", Ye.wrapper);
        const o = d.make("div", Ye.icon, {
          innerHTML: Si
        });
        this.input = d.make("input", Ye.input, {
          placeholder: t2,
          /**
           * Used to prevent focusing on the input by Tab key
           * (Popover in the Toolbar lays below the blocks,
           * so Tab in the last block will focus this hidden input if this property is not set)
           */
          tabIndex: -1
        }), this.wrapper.appendChild(o), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", () => {
          this.searchQuery = this.input.value, this.emit(De.Search, {
            query: this.searchQuery,
            items: this.foundItems
          });
        });
      }
      /**
       * Returns search field element
       */
      getElement() {
        return this.wrapper;
      }
      /**
       * Sets focus to the input
       */
      focus() {
        this.input.focus();
      }
      /**
       * Clears search query and results
       */
      clear() {
        this.input.value = "", this.searchQuery = "", this.emit(De.Search, {
          query: "",
          items: this.foundItems
        });
      }
      /**
       * Clears memory
       */
      destroy() {
        this.listeners.removeAll();
      }
      /**
       * Returns list of found items for the current search query
       */
      get foundItems() {
        return this.items.filter((e2) => this.checkItem(e2));
      }
      /**
       * Contains logic for checking whether passed item conforms the search query
       *
       * @param item - item to be checked
       */
      checkItem(e2) {
        var i, s;
        const t2 = ((i = e2.title) == null ? void 0 : i.toLowerCase()) || "", o = (s = this.searchQuery) == null ? void 0 : s.toLowerCase();
        return o !== void 0 ? t2.includes(o) : false;
      }
    }
    var Ni = Object.defineProperty, Pi = Object.getOwnPropertyDescriptor, Di = (n2, e2, t2, o) => {
      for (var i = Pi(e2, t2), s = n2.length - 1, r2; s >= 0; s--)
        (r2 = n2[s]) && (i = r2(e2, t2, i) || i);
      return i && Ni(e2, t2, i), i;
    };
    const qt = class Zt extends Vt {
      /**
       * Construct the instance
       *
       * @param params - popover params
       * @param itemsRenderParams – popover item render params.
       * The parameters that are not set by user via popover api but rather depend on technical implementation
       */
      constructor(e2, t2) {
        super(e2, t2), this.nestingLevel = 0, this.nestedPopoverTriggerItem = null, this.previouslyHoveredItem = null, this.scopeElement = document.body, this.hide = () => {
          var o;
          super.hide(), this.destroyNestedPopoverIfExists(), (o = this.flipper) == null || o.deactivate(), this.previouslyHoveredItem = null;
        }, this.onFlip = () => {
          const o = this.itemsDefault.find((i) => i.isFocused);
          o == null || o.onFocus();
        }, this.onSearch = (o) => {
          var l2;
          const i = o.query === "", s = o.items.length === 0;
          this.items.forEach((a) => {
            let c2 = false;
            a instanceof se ? c2 = !o.items.includes(a) : (a instanceof Xt || a instanceof Ee) && (c2 = s || !i), a.toggleHidden(c2);
          }), this.toggleNothingFoundMessage(s);
          const r2 = o.query === "" ? this.flippableElements : o.items.map((a) => a.getElement());
          (l2 = this.flipper) != null && l2.isActivated && (this.flipper.deactivate(), this.flipper.activate(r2));
        }, e2.nestingLevel !== void 0 && (this.nestingLevel = e2.nestingLevel), this.nestingLevel > 0 && this.nodes.popover.classList.add(N.popoverNested), e2.scopeElement !== void 0 && (this.scopeElement = e2.scopeElement), this.nodes.popoverContainer !== null && this.listeners.on(this.nodes.popoverContainer, "mouseover", (o) => this.handleHover(o)), e2.searchable && this.addSearch(), e2.flippable !== false && (this.flipper = new le({
          items: this.flippableElements,
          focusedItemClass: L.focused,
          allowedKeys: [
            w.TAB,
            w.UP,
            w.DOWN,
            w.ENTER
          ]
        }), this.flipper.onFlip(this.onFlip));
      }
      /**
       * Returns true if some item inside popover is focused
       */
      hasFocus() {
        return this.flipper === void 0 ? false : this.flipper.hasFocus();
      }
      /**
       * Scroll position inside items container of the popover
       */
      get scrollTop() {
        return this.nodes.items === null ? 0 : this.nodes.items.scrollTop;
      }
      /**
       * Returns visible element offset top
       */
      get offsetTop() {
        return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetTop;
      }
      /**
       * Open popover
       */
      show() {
        var e2;
        this.nodes.popover.style.setProperty(de.PopoverHeight, this.size.height + "px"), this.shouldOpenBottom || this.nodes.popover.classList.add(N.popoverOpenTop), this.shouldOpenRight || this.nodes.popover.classList.add(N.popoverOpenLeft), super.show(), (e2 = this.flipper) == null || e2.activate(this.flippableElements);
      }
      /**
       * Clears memory
       */
      destroy() {
        this.hide(), super.destroy();
      }
      /**
       * Handles displaying nested items for the item.
       *
       * @param item – item to show nested popover for
       */
      showNestedItems(e2) {
        this.nestedPopover !== null && this.nestedPopover !== void 0 || (this.nestedPopoverTriggerItem = e2, this.showNestedPopoverForItem(e2));
      }
      /**
       * Handles hover events inside popover items container
       *
       * @param event - hover event data
       */
      handleHover(e2) {
        const t2 = this.getTargetItem(e2);
        t2 !== void 0 && this.previouslyHoveredItem !== t2 && (this.destroyNestedPopoverIfExists(), this.previouslyHoveredItem = t2, t2.hasChildren && this.showNestedPopoverForItem(t2));
      }
      /**
       * Sets CSS variable with position of item near which nested popover should be displayed.
       * Is used for correct positioning of the nested popover
       *
       * @param nestedPopoverEl - nested popover element
       * @param item – item near which nested popover should be displayed
       */
      setTriggerItemPosition(e2, t2) {
        const o = t2.getElement(), i = (o ? o.offsetTop : 0) - this.scrollTop, s = this.offsetTop + i;
        e2.style.setProperty(de.TriggerItemTop, s + "px");
      }
      /**
       * Destroys existing nested popover
       */
      destroyNestedPopoverIfExists() {
        var e2, t2;
        this.nestedPopover === void 0 || this.nestedPopover === null || (this.nestedPopover.off(Z.ClosedOnActivate, this.hide), this.nestedPopover.hide(), this.nestedPopover.destroy(), this.nestedPopover.getElement().remove(), this.nestedPopover = null, (e2 = this.flipper) == null || e2.activate(this.flippableElements), (t2 = this.nestedPopoverTriggerItem) == null || t2.onChildrenClose());
      }
      /**
       * Creates and displays nested popover for specified item.
       * Is used only on desktop
       *
       * @param item - item to display nested popover by
       */
      showNestedPopoverForItem(e2) {
        var o;
        this.nestedPopover = new Zt({
          searchable: e2.isChildrenSearchable,
          items: e2.children,
          nestingLevel: this.nestingLevel + 1,
          flippable: e2.isChildrenFlippable,
          messages: this.messages
        }), e2.onChildrenOpen(), this.nestedPopover.on(Z.ClosedOnActivate, this.hide);
        const t2 = this.nestedPopover.getElement();
        return this.nodes.popover.appendChild(t2), this.setTriggerItemPosition(t2, e2), t2.style.setProperty(de.NestingLevel, this.nestedPopover.nestingLevel.toString()), this.nestedPopover.show(), (o = this.flipper) == null || o.deactivate(), this.nestedPopover;
      }
      /**
       * Checks if popover should be opened bottom.
       * It should happen when there is enough space below or not enough space above
       */
      get shouldOpenBottom() {
        if (this.nodes.popover === void 0 || this.nodes.popover === null)
          return false;
        const e2 = this.nodes.popoverContainer.getBoundingClientRect(), t2 = this.scopeElement.getBoundingClientRect(), o = this.size.height, i = e2.top + o, s = e2.top - o, r2 = Math.min(window.innerHeight, t2.bottom);
        return s < t2.top || i <= r2;
      }
      /**
       * Checks if popover should be opened left.
       * It should happen when there is enough space in the right or not enough space in the left
       */
      get shouldOpenRight() {
        if (this.nodes.popover === void 0 || this.nodes.popover === null)
          return false;
        const e2 = this.nodes.popover.getBoundingClientRect(), t2 = this.scopeElement.getBoundingClientRect(), o = this.size.width, i = e2.right + o, s = e2.left - o, r2 = Math.min(window.innerWidth, t2.right);
        return s < t2.left || i <= r2;
      }
      get size() {
        var i;
        const e2 = {
          height: 0,
          width: 0
        };
        if (this.nodes.popover === null)
          return e2;
        const t2 = this.nodes.popover.cloneNode(true);
        t2.style.visibility = "hidden", t2.style.position = "absolute", t2.style.top = "-1000px", t2.classList.add(N.popoverOpened), (i = t2.querySelector("." + N.popoverNested)) == null || i.remove(), document.body.appendChild(t2);
        const o = t2.querySelector("." + N.popoverContainer);
        return e2.height = o.offsetHeight, e2.width = o.offsetWidth, t2.remove(), e2;
      }
      /**
       * Returns list of elements available for keyboard navigation.
       */
      get flippableElements() {
        return this.items.map((t2) => {
          if (t2 instanceof se)
            return t2.getElement();
          if (t2 instanceof Ee)
            return t2.getControls();
        }).flat().filter((t2) => t2 != null);
      }
      /**
       * Adds search to the popover
       */
      addSearch() {
        this.search = new _i({
          items: this.itemsDefault,
          placeholder: this.messages.search
        }), this.search.on(De.Search, this.onSearch);
        const e2 = this.search.getElement();
        e2.classList.add(N.search), this.nodes.popoverContainer.insertBefore(e2, this.nodes.popoverContainer.firstChild);
      }
      /**
       * Toggles nothing found message visibility
       *
       * @param isDisplayed - true if the message should be displayed
       */
      toggleNothingFoundMessage(e2) {
        this.nodes.nothingFoundMessage.classList.toggle(N.nothingFoundMessageDisplayed, e2);
      }
    };
    Di([
      ue
    ], qt.prototype, "size");
    let lt = qt;
    const Gt = class we2 {
      constructor() {
        this.scrollPosition = null;
      }
      /**
       * Locks body element scroll
       */
      lock() {
        Ge ? this.lockHard() : document.body.classList.add(we2.CSS.scrollLocked);
      }
      /**
       * Unlocks body element scroll
       */
      unlock() {
        Ge ? this.unlockHard() : document.body.classList.remove(we2.CSS.scrollLocked);
      }
      /**
       * Locks scroll in a hard way (via setting fixed position to body element)
       */
      lockHard() {
        this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty(
          "--window-scroll-offset",
          `${this.scrollPosition}px`
        ), document.body.classList.add(we2.CSS.scrollLockedHard);
      }
      /**
       * Unlocks hard scroll lock
       */
      unlockHard() {
        document.body.classList.remove(we2.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
      }
    };
    Gt.CSS = {
      scrollLocked: "ce-scroll-locked",
      scrollLockedHard: "ce-scroll-locked--hard"
    };
    let Fi = Gt;
    const We = te("ce-popover-header"), Ke = {
      root: We(),
      text: We("text"),
      backButton: We("back-button")
    };
    class Hi {
      /**
       * Constructs the instance
       *
       * @param params - popover header params
       */
      constructor({ text: e2, onBackButtonClick: t2 }) {
        this.listeners = new Ce(), this.text = e2, this.onBackButtonClick = t2, this.nodes = {
          root: d.make("div", [Ke.root]),
          backButton: d.make("button", [Ke.backButton]),
          text: d.make("div", [Ke.text])
        }, this.nodes.backButton.innerHTML = vi, this.nodes.root.appendChild(this.nodes.backButton), this.listeners.on(this.nodes.backButton, "click", this.onBackButtonClick), this.nodes.text.innerText = this.text, this.nodes.root.appendChild(this.nodes.text);
      }
      /**
       * Returns popover header root html element
       */
      getElement() {
        return this.nodes.root;
      }
      /**
       * Destroys the instance
       */
      destroy() {
        this.nodes.root.remove(), this.listeners.destroy();
      }
    }
    class zi {
      constructor() {
        this.history = [];
      }
      /**
       * Push new popover state
       *
       * @param state - new state
       */
      push(e2) {
        this.history.push(e2);
      }
      /**
       * Pop last popover state
       */
      pop() {
        return this.history.pop();
      }
      /**
       * Title retrieved from the current state
       */
      get currentTitle() {
        return this.history.length === 0 ? "" : this.history[this.history.length - 1].title;
      }
      /**
       * Items list retrieved from the current state
       */
      get currentItems() {
        return this.history.length === 0 ? [] : this.history[this.history.length - 1].items;
      }
      /**
       * Returns history to initial popover state
       */
      reset() {
        for (; this.history.length > 1; )
          this.pop();
      }
    }
    class Jt extends Vt {
      /**
       * Construct the instance
       *
       * @param params - popover params
       */
      constructor(e2) {
        super(e2, {
          [A.Default]: {
            hint: {
              enabled: false
            }
          },
          [A.Html]: {
            hint: {
              enabled: false
            }
          }
        }), this.scrollLocker = new Fi(), this.history = new zi(), this.isHidden = true, this.nodes.overlay = d.make("div", [N.overlay, N.overlayHidden]), this.nodes.popover.insertBefore(this.nodes.overlay, this.nodes.popover.firstChild), this.listeners.on(this.nodes.overlay, "click", () => {
          this.hide();
        }), this.history.push({ items: e2.items });
      }
      /**
       * Open popover
       */
      show() {
        this.nodes.overlay.classList.remove(N.overlayHidden), super.show(), this.scrollLocker.lock(), this.isHidden = false;
      }
      /**
       * Closes popover
       */
      hide() {
        this.isHidden || (super.hide(), this.nodes.overlay.classList.add(N.overlayHidden), this.scrollLocker.unlock(), this.history.reset(), this.isHidden = true);
      }
      /**
       * Clears memory
       */
      destroy() {
        super.destroy(), this.scrollLocker.unlock();
      }
      /**
       * Handles displaying nested items for the item
       *
       * @param item – item to show nested popover for
       */
      showNestedItems(e2) {
        this.updateItemsAndHeader(e2.children, e2.title), this.history.push({
          title: e2.title,
          items: e2.children
        });
      }
      /**
       * Removes rendered popover items and header and displays new ones
       *
       * @param items - new popover items
       * @param title - new popover header text
       */
      updateItemsAndHeader(e2, t2) {
        if (this.header !== null && this.header !== void 0 && (this.header.destroy(), this.header = null), t2 !== void 0) {
          this.header = new Hi({
            text: t2,
            onBackButtonClick: () => {
              this.history.pop(), this.updateItemsAndHeader(this.history.currentItems, this.history.currentTitle);
            }
          });
          const o = this.header.getElement();
          o !== null && this.nodes.popoverContainer.insertBefore(o, this.nodes.popoverContainer.firstChild);
        }
        this.items.forEach((o) => {
          var i;
          return (i = o.getElement()) == null ? void 0 : i.remove();
        }), this.items = this.buildItems(e2), this.items.forEach((o) => {
          var s;
          const i = o.getElement();
          i !== null && ((s = this.nodes.items) == null || s.appendChild(i));
        });
      }
    }
    var Qt = { exports: {} };
    /*!
     * Library for handling keyboard shortcuts
     * @copyright CodeX (https://codex.so)
     * @license MIT
     * @author CodeX (https://codex.so)
     * @version 1.2.0
     */
    (function(n2, e2) {
      (function(t2, o) {
        n2.exports = o();
      })(window, function() {
        return function(t2) {
          var o = {};
          function i(s) {
            if (o[s])
              return o[s].exports;
            var r2 = o[s] = { i: s, l: false, exports: {} };
            return t2[s].call(r2.exports, r2, r2.exports, i), r2.l = true, r2.exports;
          }
          return i.m = t2, i.c = o, i.d = function(s, r2, l2) {
            i.o(s, r2) || Object.defineProperty(s, r2, { enumerable: true, get: l2 });
          }, i.r = function(s) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: true });
          }, i.t = function(s, r2) {
            if (1 & r2 && (s = i(s)), 8 & r2 || 4 & r2 && typeof s == "object" && s && s.__esModule)
              return s;
            var l2 = /* @__PURE__ */ Object.create(null);
            if (i.r(l2), Object.defineProperty(l2, "default", { enumerable: true, value: s }), 2 & r2 && typeof s != "string")
              for (var a in s)
                i.d(l2, a, (function(c2) {
                  return s[c2];
                }).bind(null, a));
            return l2;
          }, i.n = function(s) {
            var r2 = s && s.__esModule ? function() {
              return s.default;
            } : function() {
              return s;
            };
            return i.d(r2, "a", r2), r2;
          }, i.o = function(s, r2) {
            return Object.prototype.hasOwnProperty.call(s, r2);
          }, i.p = "", i(i.s = 0);
        }([function(t2, o, i) {
          function s(a, c2) {
            for (var u2 = 0; u2 < c2.length; u2++) {
              var h2 = c2[u2];
              h2.enumerable = h2.enumerable || false, h2.configurable = true, "value" in h2 && (h2.writable = true), Object.defineProperty(a, h2.key, h2);
            }
          }
          function r2(a, c2, u2) {
            return c2 && s(a.prototype, c2), u2 && s(a, u2), a;
          }
          i.r(o);
          var l2 = function() {
            function a(c2) {
              var u2 = this;
              (function(h2, p2) {
                if (!(h2 instanceof p2))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a), this.commands = {}, this.keys = {}, this.name = c2.name, this.parseShortcutName(c2.name), this.element = c2.on, this.callback = c2.callback, this.executeShortcut = function(h2) {
                u2.execute(h2);
              }, this.element.addEventListener("keydown", this.executeShortcut, false);
            }
            return r2(a, null, [{ key: "supportedCommands", get: function() {
              return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
            } }, { key: "keyCodes", get: function() {
              return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46, ".": 190 };
            } }]), r2(a, [{ key: "parseShortcutName", value: function(c2) {
              c2 = c2.split("+");
              for (var u2 = 0; u2 < c2.length; u2++) {
                c2[u2] = c2[u2].toUpperCase();
                var h2 = false;
                for (var p2 in a.supportedCommands)
                  if (a.supportedCommands[p2].includes(c2[u2])) {
                    h2 = this.commands[p2] = true;
                    break;
                  }
                h2 || (this.keys[c2[u2]] = true);
              }
              for (var g2 in a.supportedCommands)
                this.commands[g2] || (this.commands[g2] = false);
            } }, { key: "execute", value: function(c2) {
              var u2, h2 = { CMD: c2.ctrlKey || c2.metaKey, SHIFT: c2.shiftKey, ALT: c2.altKey }, p2 = true;
              for (u2 in this.commands)
                this.commands[u2] !== h2[u2] && (p2 = false);
              var g2, f2 = true;
              for (g2 in this.keys)
                f2 = f2 && c2.keyCode === a.keyCodes[g2];
              p2 && f2 && this.callback(c2);
            } }, { key: "remove", value: function() {
              this.element.removeEventListener("keydown", this.executeShortcut);
            } }]), a;
          }();
          o.default = l2;
        }]).default;
      });
    })(Qt);
    var ji = Qt.exports;
    const $i = /* @__PURE__ */ Fe(ji);
    class Yi {
      constructor() {
        this.registeredShortcuts = /* @__PURE__ */ new Map();
      }
      /**
       * Register shortcut
       *
       * @param shortcut - shortcut options
       */
      add(e2) {
        if (this.findShortcut(e2.on, e2.name))
          throw Error(
            `Shortcut ${e2.name} is already registered for ${e2.on}. Please remove it before add a new handler.`
          );
        const o = new $i({
          name: e2.name,
          on: e2.on,
          callback: e2.handler
        }), i = this.registeredShortcuts.get(e2.on) || [];
        this.registeredShortcuts.set(e2.on, [...i, o]);
      }
      /**
       * Remove shortcut
       *
       * @param element - Element shortcut is set for
       * @param name - shortcut name
       */
      remove(e2, t2) {
        const o = this.findShortcut(e2, t2);
        if (!o)
          return;
        o.remove();
        const i = this.registeredShortcuts.get(e2);
        this.registeredShortcuts.set(e2, i.filter((s) => s !== o));
      }
      /**
       * Get Shortcut instance if exist
       *
       * @param element - Element shorcut is set for
       * @param shortcut - shortcut name
       * @returns {number} index - shortcut index if exist
       */
      findShortcut(e2, t2) {
        return (this.registeredShortcuts.get(e2) || []).find(({ name: i }) => i === t2);
      }
    }
    const he = new Yi();
    var Wi = Object.defineProperty, Ki = Object.getOwnPropertyDescriptor, eo = (n2, e2, t2, o) => {
      for (var i = Ki(e2, t2), s = n2.length - 1, r2; s >= 0; s--)
        (r2 = n2[s]) && (i = r2(e2, t2, i) || i);
      return i && Wi(e2, t2, i), i;
    };
    const at = class to extends Te {
      /**
       * Toolbox constructor
       *
       * @param options - available parameters
       * @param options.api - Editor API methods
       * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
       */
      constructor({ api: e2, tools: t2, i18nLabels: o }) {
        super(), this.opened = false, this.listeners = new Ce(), this.popover = null, this.handleMobileLayoutToggle = () => {
          this.destroyPopover(), this.initPopover();
        }, this.onPopoverClose = () => {
          this.opened = false, this.emit(
            "toolbox-closed"
            /* Closed */
          );
        }, this.api = e2, this.tools = t2, this.i18nLabels = o, this.enableShortcuts(), this.nodes = {
          toolbox: d.make("div", to.CSS.toolbox)
        }, this.initPopover(), this.api.events.on(ye, this.handleMobileLayoutToggle);
      }
      /**
       * Returns True if Toolbox is Empty and nothing to show
       *
       * @returns {boolean}
       */
      get isEmpty() {
        return this.toolsToBeDisplayed.length === 0;
      }
      /**
       * CSS styles
       */
      static get CSS() {
        return {
          toolbox: "ce-toolbox"
        };
      }
      /**
       * Returns root block settings element
       */
      getElement() {
        return this.nodes.toolbox;
      }
      /**
       * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
       */
      hasFocus() {
        if (this.popover !== null)
          return "hasFocus" in this.popover ? this.popover.hasFocus() : void 0;
      }
      /**
       * Destroy Module
       */
      destroy() {
        var e2;
        super.destroy(), this.nodes && this.nodes.toolbox && this.nodes.toolbox.remove(), this.removeAllShortcuts(), (e2 = this.popover) == null || e2.off(Z.Closed, this.onPopoverClose), this.listeners.destroy(), this.api.events.off(ye, this.handleMobileLayoutToggle);
      }
      /**
       * Toolbox Tool's button click handler
       *
       * @param toolName - tool type to be activated
       * @param blockDataOverrides - Block data predefined by the activated Toolbox item
       */
      toolButtonActivated(e2, t2) {
        this.insertNewBlock(e2, t2);
      }
      /**
       * Open Toolbox with Tools
       */
      open() {
        var e2;
        this.isEmpty || ((e2 = this.popover) == null || e2.show(), this.opened = true, this.emit(
          "toolbox-opened"
          /* Opened */
        ));
      }
      /**
       * Close Toolbox
       */
      close() {
        var e2;
        (e2 = this.popover) == null || e2.hide(), this.opened = false, this.emit(
          "toolbox-closed"
          /* Closed */
        );
      }
      /**
       * Close Toolbox
       */
      toggle() {
        this.opened ? this.close() : this.open();
      }
      /**
       * Creates toolbox popover and appends it inside wrapper element
       */
      initPopover() {
        var t2;
        const e2 = pe() ? Jt : lt;
        this.popover = new e2({
          scopeElement: this.api.ui.nodes.redactor,
          searchable: true,
          messages: {
            nothingFound: this.i18nLabels.nothingFound,
            search: this.i18nLabels.filter
          },
          items: this.toolboxItemsToBeDisplayed
        }), this.popover.on(Z.Closed, this.onPopoverClose), (t2 = this.nodes.toolbox) == null || t2.append(this.popover.getElement());
      }
      /**
       * Destroys popover instance and removes it from DOM
       */
      destroyPopover() {
        this.popover !== null && (this.popover.hide(), this.popover.off(Z.Closed, this.onPopoverClose), this.popover.destroy(), this.popover = null), this.nodes.toolbox !== null && (this.nodes.toolbox.innerHTML = "");
      }
      get toolsToBeDisplayed() {
        const e2 = [];
        return this.tools.forEach((t2) => {
          t2.toolbox && e2.push(t2);
        }), e2;
      }
      get toolboxItemsToBeDisplayed() {
        const e2 = (t2, o) => ({
          icon: t2.icon,
          title: z.t(K.toolNames, t2.title || Le(o.name)),
          name: o.name,
          onActivate: () => {
            this.toolButtonActivated(o.name, t2.data);
          },
          secondaryLabel: o.shortcut ? tt(o.shortcut) : ""
        });
        return this.toolsToBeDisplayed.reduce((t2, o) => (Array.isArray(o.toolbox) ? o.toolbox.forEach((i) => {
          t2.push(e2(i, o));
        }) : o.toolbox !== void 0 && t2.push(e2(o.toolbox, o)), t2), []);
      }
      /**
       * Iterate all tools and enable theirs shortcuts if specified
       */
      enableShortcuts() {
        this.toolsToBeDisplayed.forEach((e2) => {
          const t2 = e2.shortcut;
          t2 && this.enableShortcutForTool(e2.name, t2);
        });
      }
      /**
       * Enable shortcut Block Tool implemented shortcut
       *
       * @param {string} toolName - Tool name
       * @param {string} shortcut - shortcut according to the ShortcutData Module format
       */
      enableShortcutForTool(e2, t2) {
        he.add({
          name: t2,
          on: this.api.ui.nodes.redactor,
          handler: async (o) => {
            o.preventDefault();
            const i = this.api.blocks.getCurrentBlockIndex(), s = this.api.blocks.getBlockByIndex(i);
            if (s)
              try {
                const r2 = await this.api.blocks.convert(s.id, e2);
                this.api.caret.setToBlock(r2, "end");
                return;
              } catch {
              }
            this.insertNewBlock(e2);
          }
        });
      }
      /**
       * Removes all added shortcuts
       * Fired when the Read-Only mode is activated
       */
      removeAllShortcuts() {
        this.toolsToBeDisplayed.forEach((e2) => {
          const t2 = e2.shortcut;
          t2 && he.remove(this.api.ui.nodes.redactor, t2);
        });
      }
      /**
       * Inserts new block
       * Can be called when button clicked on Toolbox or by ShortcutData
       *
       * @param {string} toolName - Tool name
       * @param blockDataOverrides - predefined Block data
       */
      async insertNewBlock(e2, t2) {
        const o = this.api.blocks.getCurrentBlockIndex(), i = this.api.blocks.getBlockByIndex(o);
        if (!i)
          return;
        const s = i.isEmpty ? o : o + 1;
        let r2;
        if (t2) {
          const a = await this.api.blocks.composeBlockData(e2);
          r2 = Object.assign(a, t2);
        }
        const l2 = this.api.blocks.insert(
          e2,
          r2,
          void 0,
          s,
          void 0,
          i.isEmpty
        );
        l2.call(J.APPEND_CALLBACK), this.api.caret.setToBlock(s), this.emit("toolbox-block-added", {
          block: l2
        }), this.api.toolbar.close();
      }
    };
    eo([
      ue
    ], at.prototype, "toolsToBeDisplayed");
    eo([
      ue
    ], at.prototype, "toolboxItemsToBeDisplayed");
    var ne = /* @__PURE__ */ ((n2) => (n2[n2.Block = 0] = "Block", n2[n2.Inline = 1] = "Inline", n2[n2.Tune = 2] = "Tune", n2))(ne || {}), Ie = /* @__PURE__ */ ((n2) => (n2.Shortcut = "shortcut", n2.Toolbox = "toolbox", n2.EnabledInlineTools = "inlineToolbar", n2.EnabledBlockTunes = "tunes", n2.Config = "config", n2))(Ie || {}), ce = /* @__PURE__ */ ((n2) => (n2.IsEnabledLineBreaks = "enableLineBreaks", n2.Toolbox = "toolbox", n2.ConversionConfig = "conversionConfig", n2.IsReadOnlySupported = "isReadOnlySupported", n2.PasteConfig = "pasteConfig", n2))(ce || {}), ct = /* @__PURE__ */ ((n2) => (n2.IsInline = "isInline", n2.Title = "title", n2))(ct || {}), et = /* @__PURE__ */ ((n2) => (n2.IsTune = "isTune", n2))(et || {});
    class dt {
      /**
       * @class
       * @param {ConstructorOptions} options - Constructor options
       */
      constructor({
        name: e2,
        constructable: t2,
        config: o,
        api: i,
        isDefault: s,
        isInternal: r2 = false,
        defaultPlaceholder: l2
      }) {
        this.api = i, this.name = e2, this.constructable = t2, this.config = o, this.isDefault = s, this.isInternal = r2, this.defaultPlaceholder = l2;
      }
      /**
       * Returns Tool user configuration
       */
      get settings() {
        const e2 = this.config.config || {};
        return this.isDefault && !("placeholder" in e2) && this.defaultPlaceholder && (e2.placeholder = this.defaultPlaceholder), e2;
      }
      /**
       * Calls Tool's reset method
       */
      reset() {
        if (O(this.constructable.reset))
          return this.constructable.reset();
      }
      /**
       * Calls Tool's prepare method
       */
      prepare() {
        if (O(this.constructable.prepare))
          return this.constructable.prepare({
            toolName: this.name,
            config: this.settings
          });
      }
      /**
       * Returns shortcut for Tool (internal or specified by user)
       */
      get shortcut() {
        const e2 = this.constructable.shortcut;
        return this.config.shortcut || e2;
      }
      /**
       * Returns Tool's sanitizer configuration
       */
      get sanitizeConfig() {
        return this.constructable.sanitize || {};
      }
      /**
       * Returns true if Tools is inline
       */
      isInline() {
        return this.type === ne.Inline;
      }
      /**
       * Returns true if Tools is block
       */
      isBlock() {
        return this.type === ne.Block;
      }
      /**
       * Returns true if Tools is tune
       */
      isTune() {
        return this.type === ne.Tune;
      }
    }
    const ro = class lo extends y {
      constructor() {
        super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (e2) => {
          try {
            const t2 = e2.create({}, {}, false);
            if (e2.pasteConfig === false) {
              this.exceptionList.push(e2.name);
              return;
            }
            if (!O(t2.onPaste))
              return;
            this.getTagsConfig(e2), this.getFilesConfig(e2), this.getPatternsConfig(e2);
          } catch (t2) {
            I(
              `Paste handling for «${e2.name}» Tool hasn't been set up because of the error`,
              "warn",
              t2
            );
          }
        }, this.handlePasteEvent = async (e2) => {
          const { BlockManager: t2, Toolbar: o } = this.Editor, i = t2.setCurrentBlockByChildNode(e2.target);
          !i || this.isNativeBehaviour(e2.target) && !e2.clipboardData.types.includes("Files") || i && this.exceptionList.includes(i.name) || (e2.preventDefault(), this.processDataTransfer(e2.clipboardData), o.close());
        };
      }
      /**
       * Set onPaste callback and collect tools` paste configurations
       */
      async prepare() {
        this.processTools();
      }
      /**
       * Set read-only state
       *
       * @param {boolean} readOnlyEnabled - read only flag value
       */
      toggleReadOnly(e2) {
        e2 ? this.unsetCallback() : this.setCallback();
      }
      /**
       * Handle pasted or dropped data transfer object
       *
       * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
       * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
       */
      async processDataTransfer(e2, t2 = false) {
        const { Tools: o } = this.Editor, i = e2.types;
        if ((i.includes ? i.includes("Files") : i.contains("Files")) && !V(this.toolsFiles)) {
          await this.processFiles(e2.files);
          return;
        }
        const r2 = e2.getData(this.MIME_TYPE), l2 = e2.getData("text/plain");
        let a = e2.getData("text/html");
        if (r2)
          try {
            this.insertEditorJSData(JSON.parse(r2));
            return;
          } catch {
          }
        t2 && l2.trim() && a.trim() && (a = "<p>" + (a.trim() ? a : l2) + "</p>");
        const c2 = Object.keys(this.toolsTags).reduce((p2, g2) => (p2[g2.toLowerCase()] = this.toolsTags[g2].sanitizationConfig ?? {}, p2), {}), u2 = Object.assign({}, c2, o.getAllInlineToolsSanitizeConfig(), { br: {} }), h2 = q(a, u2);
        !h2.trim() || h2.trim() === l2 || !d.isHTMLString(h2) ? await this.processText(l2) : await this.processText(h2, true);
      }
      /**
       * Process pasted text and divide them into Blocks
       *
       * @param {string} data - text to process. Can be HTML or plain.
       * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
       */
      async processText(e2, t2 = false) {
        const { Caret: o, BlockManager: i } = this.Editor, s = t2 ? this.processHTML(e2) : this.processPlain(e2);
        if (!s.length)
          return;
        if (s.length === 1) {
          s[0].isBlock ? this.processSingleBlock(s.pop()) : this.processInlinePaste(s.pop());
          return;
        }
        const l2 = i.currentBlock && i.currentBlock.tool.isDefault && i.currentBlock.isEmpty;
        s.map(
          async (a, c2) => this.insertBlock(a, c2 === 0 && l2)
        ), i.currentBlock && o.setToBlock(i.currentBlock, o.positions.END);
      }
      /**
       * Set onPaste callback handler
       */
      setCallback() {
        this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
      }
      /**
       * Unset onPaste callback handler
       */
      unsetCallback() {
        this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
      }
      /**
       * Get and process tool`s paste configs
       */
      processTools() {
        const e2 = this.Editor.Tools.blockTools;
        Array.from(e2.values()).forEach(this.processTool);
      }
      /**
       * Get tags name list from either tag name or sanitization config.
       *
       * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
       * @returns {string[]} array of tags.
       */
      collectTagNames(e2) {
        return Q(e2) ? [e2] : R(e2) ? Object.keys(e2) : [];
      }
      /**
       * Get tags to substitute by Tool
       *
       * @param tool - BlockTool object
       */
      getTagsConfig(e2) {
        if (e2.pasteConfig === false)
          return;
        const t2 = e2.pasteConfig.tags || [], o = [];
        t2.forEach((i) => {
          const s = this.collectTagNames(i);
          o.push(...s), s.forEach((r2) => {
            if (Object.prototype.hasOwnProperty.call(this.toolsTags, r2)) {
              I(
                `Paste handler for «${e2.name}» Tool on «${r2}» tag is skipped because it is already used by «${this.toolsTags[r2].tool.name}» Tool.`,
                "warn"
              );
              return;
            }
            const l2 = R(i) ? i[r2] : null;
            this.toolsTags[r2.toUpperCase()] = {
              tool: e2,
              sanitizationConfig: l2
            };
          });
        }), this.tagsByTool[e2.name] = o.map((i) => i.toUpperCase());
      }
      /**
       * Get files` types and extensions to substitute by Tool
       *
       * @param tool - BlockTool object
       */
      getFilesConfig(e2) {
        if (e2.pasteConfig === false)
          return;
        const { files: t2 = {} } = e2.pasteConfig;
        let { extensions: o, mimeTypes: i } = t2;
        !o && !i || (o && !Array.isArray(o) && (I(`«extensions» property of the onDrop config for «${e2.name}» Tool should be an array`), o = []), i && !Array.isArray(i) && (I(`«mimeTypes» property of the onDrop config for «${e2.name}» Tool should be an array`), i = []), i && (i = i.filter((s) => To(s) ? true : (I(`MIME type value «${s}» for the «${e2.name}» Tool is not a valid MIME type`, "warn"), false))), this.toolsFiles[e2.name] = {
          extensions: o || [],
          mimeTypes: i || []
        });
      }
      /**
       * Get RegExp patterns to substitute by Tool
       *
       * @param tool - BlockTool object
       */
      getPatternsConfig(e2) {
        e2.pasteConfig === false || !e2.pasteConfig.patterns || V(e2.pasteConfig.patterns) || Object.entries(e2.pasteConfig.patterns).forEach(([t2, o]) => {
          o instanceof RegExp || I(
            `Pattern ${o} for «${e2.name}» Tool is skipped because it should be a Regexp instance.`,
            "warn"
          ), this.toolsPatterns.push({
            key: t2,
            pattern: o,
            tool: e2
          });
        });
      }
      /**
       * Check if browser behavior suits better
       *
       * @param {EventTarget} element - element where content has been pasted
       * @returns {boolean}
       */
      isNativeBehaviour(e2) {
        return d.isNativeInput(e2);
      }
      /**
       * Get files from data transfer object and insert related Tools
       *
       * @param {FileList} items - pasted or dropped items
       */
      async processFiles(e2) {
        const { BlockManager: t2 } = this.Editor;
        let o;
        o = await Promise.all(
          Array.from(e2).map((r2) => this.processFile(r2))
        ), o = o.filter((r2) => !!r2);
        const s = t2.currentBlock.tool.isDefault && t2.currentBlock.isEmpty;
        o.forEach(
          (r2, l2) => {
            t2.paste(r2.type, r2.event, l2 === 0 && s);
          }
        );
      }
      /**
       * Get information about file and find Tool to handle it
       *
       * @param {File} file - file to process
       */
      async processFile(e2) {
        const t2 = Bo(e2), o = Object.entries(this.toolsFiles).find(([r2, { mimeTypes: l2, extensions: a }]) => {
          const [c2, u2] = e2.type.split("/"), h2 = a.find((g2) => g2.toLowerCase() === t2.toLowerCase()), p2 = l2.find((g2) => {
            const [f2, k2] = g2.split("/");
            return f2 === c2 && (k2 === u2 || k2 === "*");
          });
          return !!h2 || !!p2;
        });
        if (!o)
          return;
        const [i] = o;
        return {
          event: this.composePasteEvent("file", {
            file: e2
          }),
          type: i
        };
      }
      /**
       * Split HTML string to blocks and return it as array of Block data
       *
       * @param {string} innerHTML - html string to process
       * @returns {PasteData[]}
       */
      processHTML(e2) {
        const { Tools: t2 } = this.Editor, o = d.make("DIV");
        return o.innerHTML = e2, this.getNodes(o).map((s) => {
          let r2, l2 = t2.defaultTool, a = false;
          switch (s.nodeType) {
            case Node.DOCUMENT_FRAGMENT_NODE:
              r2 = d.make("div"), r2.appendChild(s);
              break;
            case Node.ELEMENT_NODE:
              r2 = s, a = true, this.toolsTags[r2.tagName] && (l2 = this.toolsTags[r2.tagName].tool);
              break;
          }
          const { tags: c2 } = l2.pasteConfig || { tags: [] }, u2 = c2.reduce((g2, f2) => (this.collectTagNames(f2).forEach((C2) => {
            const S2 = R(f2) ? f2[C2] : null;
            g2[C2.toLowerCase()] = S2 || {};
          }), g2), {}), h2 = Object.assign({}, u2, l2.baseSanitizeConfig);
          if (r2.tagName.toLowerCase() === "table") {
            const g2 = q(r2.outerHTML, h2);
            r2 = d.make("div", void 0, {
              innerHTML: g2
            }).firstChild;
          } else
            r2.innerHTML = q(r2.innerHTML, h2);
          const p2 = this.composePasteEvent("tag", {
            data: r2
          });
          return {
            content: r2,
            isBlock: a,
            tool: l2.name,
            event: p2
          };
        }).filter((s) => {
          const r2 = d.isEmpty(s.content), l2 = d.isSingleTag(s.content);
          return !r2 || l2;
        });
      }
      /**
       * Split plain text by new line symbols and return it as array of Block data
       *
       * @param {string} plain - string to process
       * @returns {PasteData[]}
       */
      processPlain(e2) {
        const { defaultBlock: t2 } = this.config;
        if (!e2)
          return [];
        const o = t2;
        return e2.split(/\r?\n/).filter((i) => i.trim()).map((i) => {
          const s = d.make("div");
          s.textContent = i;
          const r2 = this.composePasteEvent("tag", {
            data: s
          });
          return {
            content: s,
            tool: o,
            isBlock: false,
            event: r2
          };
        });
      }
      /**
       * Process paste of single Block tool content
       *
       * @param {PasteData} dataToInsert - data of Block to insert
       */
      async processSingleBlock(e2) {
        const { Caret: t2, BlockManager: o } = this.Editor, { currentBlock: i } = o;
        if (!i || e2.tool !== i.name || !d.containsOnlyInlineElements(e2.content.innerHTML)) {
          this.insertBlock(e2, (i == null ? void 0 : i.tool.isDefault) && i.isEmpty);
          return;
        }
        t2.insertContentAtCaretPosition(e2.content.innerHTML);
      }
      /**
       * Process paste to single Block:
       * 1. Find patterns` matches
       * 2. Insert new block if it is not the same type as current one
       * 3. Just insert text if there is no substitutions
       *
       * @param {PasteData} dataToInsert - data of Block to insert
       */
      async processInlinePaste(e2) {
        const { BlockManager: t2, Caret: o } = this.Editor, { content: i } = e2;
        if (t2.currentBlock && t2.currentBlock.tool.isDefault && i.textContent.length < lo.PATTERN_PROCESSING_MAX_LENGTH) {
          const r2 = await this.processPattern(i.textContent);
          if (r2) {
            const l2 = t2.currentBlock && t2.currentBlock.tool.isDefault && t2.currentBlock.isEmpty, a = t2.paste(r2.tool, r2.event, l2);
            o.setToBlock(a, o.positions.END);
            return;
          }
        }
        if (t2.currentBlock && t2.currentBlock.currentInput) {
          const r2 = t2.currentBlock.tool.baseSanitizeConfig;
          document.execCommand(
            "insertHTML",
            false,
            q(i.innerHTML, r2)
          );
        } else
          this.insertBlock(e2);
      }
      /**
       * Get patterns` matches
       *
       * @param {string} text - text to process
       * @returns {Promise<{event: PasteEvent, tool: string}>}
       */
      async processPattern(e2) {
        const t2 = this.toolsPatterns.find((i) => {
          const s = i.pattern.exec(e2);
          return s ? e2 === s.shift() : false;
        });
        return t2 ? {
          event: this.composePasteEvent("pattern", {
            key: t2.key,
            data: e2
          }),
          tool: t2.tool.name
        } : void 0;
      }
      /**
       * Insert pasted Block content to Editor
       *
       * @param {PasteData} data - data to insert
       * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
       * @returns {void}
       */
      insertBlock(e2, t2 = false) {
        const { BlockManager: o, Caret: i } = this.Editor, { currentBlock: s } = o;
        let r2;
        if (t2 && s && s.isEmpty) {
          r2 = o.paste(e2.tool, e2.event, true), i.setToBlock(r2, i.positions.END);
          return;
        }
        r2 = o.paste(e2.tool, e2.event), i.setToBlock(r2, i.positions.END);
      }
      /**
       * Insert data passed as application/x-editor-js JSON
       *
       * @param {Array} blocks — Blocks' data to insert
       * @returns {void}
       */
      insertEditorJSData(e2) {
        const { BlockManager: t2, Caret: o, Tools: i } = this.Editor;
        it(
          e2,
          (r2) => i.blockTools.get(r2).sanitizeConfig
        ).forEach(({ tool: r2, data: l2 }, a) => {
          let c2 = false;
          a === 0 && (c2 = t2.currentBlock && t2.currentBlock.tool.isDefault && t2.currentBlock.isEmpty);
          const u2 = t2.insert({
            tool: r2,
            data: l2,
            replace: c2
          });
          o.setToBlock(u2, o.positions.END);
        });
      }
      /**
       * Fetch nodes from Element node
       *
       * @param {Node} node - current node
       * @param {Node[]} nodes - processed nodes
       * @param {Node} destNode - destination node
       */
      processElementNode(e2, t2, o) {
        const i = Object.keys(this.toolsTags), s = e2, { tool: r2 } = this.toolsTags[s.tagName] || {}, l2 = this.tagsByTool[r2 == null ? void 0 : r2.name] || [], a = i.includes(s.tagName), c2 = d.blockElements.includes(s.tagName.toLowerCase()), u2 = Array.from(s.children).some(
          ({ tagName: p2 }) => i.includes(p2) && !l2.includes(p2)
        ), h2 = Array.from(s.children).some(
          ({ tagName: p2 }) => d.blockElements.includes(p2.toLowerCase())
        );
        if (!c2 && !a && !u2)
          return o.appendChild(s), [...t2, o];
        if (a && !u2 || c2 && !h2 && !u2)
          return [...t2, o, s];
      }
      /**
       * Recursively divide HTML string to two types of nodes:
       * 1. Block element
       * 2. Document Fragments contained text and markup tags like a, b, i etc.
       *
       * @param {Node} wrapper - wrapper of paster HTML content
       * @returns {Node[]}
       */
      getNodes(e2) {
        const t2 = Array.from(e2.childNodes);
        let o;
        const i = (s, r2) => {
          if (d.isEmpty(r2) && !d.isSingleTag(r2))
            return s;
          const l2 = s[s.length - 1];
          let a = new DocumentFragment();
          switch (l2 && d.isFragment(l2) && (a = s.pop()), r2.nodeType) {
            case Node.ELEMENT_NODE:
              if (o = this.processElementNode(r2, s, a), o)
                return o;
              break;
            case Node.TEXT_NODE:
              return a.appendChild(r2), [...s, a];
            default:
              return [...s, a];
          }
          return [...s, ...Array.from(r2.childNodes).reduce(i, [])];
        };
        return t2.reduce(i, []);
      }
      /**
       * Compose paste event with passed type and detail
       *
       * @param {string} type - event type
       * @param {PasteEventDetail} detail - event detail
       */
      composePasteEvent(e2, t2) {
        return new CustomEvent(e2, {
          detail: t2
        });
      }
    };
    ro.PATTERN_PROCESSING_MAX_LENGTH = 450;
    (function() {
      try {
        if (typeof document < "u") {
          var n2 = document.createElement("style");
          n2.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(n2);
        }
      } catch (e2) {
        console.error("vite-plugin-css-injected-by-js", e2);
      }
    })();
    const hs = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
    function us(n2) {
      const e2 = document.createElement("div");
      e2.innerHTML = n2.trim();
      const t2 = document.createDocumentFragment();
      return t2.append(...Array.from(e2.childNodes)), t2;
    }
    /**
     * Base Paragraph Block for the Editor.js.
     * Represents a regular text block
     *
     * @author CodeX (team@codex.so)
     * @copyright CodeX 2018
     * @license The MIT License (MIT)
     */
    class ht {
      /**
       * Default placeholder for Paragraph Tool
       *
       * @returns {string}
       * @class
       */
      static get DEFAULT_PLACEHOLDER() {
        return "";
      }
      /**
       * Render plugin`s main Element and fill it with saved data
       *
       * @param {object} params - constructor params
       * @param {ParagraphData} params.data - previously saved data
       * @param {ParagraphConfig} params.config - user config for Tool
       * @param {object} params.api - editor.js api
       * @param {boolean} readOnly - read only mode flag
       */
      constructor({ data: e2, config: t2, api: o, readOnly: i }) {
        this.api = o, this.readOnly = i, this._CSS = {
          block: this.api.styles.block,
          wrapper: "ce-paragraph"
        }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = t2.placeholder ? t2.placeholder : ht.DEFAULT_PLACEHOLDER, this._data = e2 ?? {}, this._element = null, this._preserveBlank = t2.preserveBlank ?? false;
      }
      /**
       * Check if text content is empty and set empty string to inner html.
       * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
       *
       * @param {KeyboardEvent} e - key up event
       */
      onKeyUp(e2) {
        if (e2.code !== "Backspace" && e2.code !== "Delete" || !this._element)
          return;
        const { textContent: t2 } = this._element;
        t2 === "" && (this._element.innerHTML = "");
      }
      /**
       * Create Tool's view
       *
       * @returns {HTMLDivElement}
       * @private
       */
      drawView() {
        const e2 = document.createElement("DIV");
        return e2.classList.add(this._CSS.wrapper, this._CSS.block), e2.contentEditable = "false", e2.dataset.placeholderActive = this.api.i18n.t(this._placeholder), this._data.text && (e2.innerHTML = this._data.text), this.readOnly || (e2.contentEditable = "true", e2.addEventListener("keyup", this.onKeyUp)), e2;
      }
      /**
       * Return Tool's view
       *
       * @returns {HTMLDivElement}
       */
      render() {
        return this._element = this.drawView(), this._element;
      }
      /**
       * Method that specified how to merge two Text blocks.
       * Called by Editor.js by backspace at the beginning of the Block
       *
       * @param {ParagraphData} data
       * @public
       */
      merge(e2) {
        if (!this._element)
          return;
        this._data.text += e2.text;
        const t2 = us(e2.text);
        this._element.appendChild(t2), this._element.normalize();
      }
      /**
       * Validate Paragraph block data:
       * - check for emptiness
       *
       * @param {ParagraphData} savedData — data received after saving
       * @returns {boolean} false if saved data is not correct, otherwise true
       * @public
       */
      validate(e2) {
        return !(e2.text.trim() === "" && !this._preserveBlank);
      }
      /**
       * Extract Tool's data from the view
       *
       * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
       * @returns {ParagraphData} - saved data
       * @public
       */
      save(e2) {
        return {
          text: e2.innerHTML
        };
      }
      /**
       * On paste callback fired from Editor.
       *
       * @param {HTMLPasteEvent} event - event with pasted data
       */
      onPaste(e2) {
        const t2 = {
          text: e2.detail.data.innerHTML
        };
        this._data = t2, window.requestAnimationFrame(() => {
          this._element && (this._element.innerHTML = this._data.text || "");
        });
      }
      /**
       * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
       * @returns {ConversionConfig}
       */
      static get conversionConfig() {
        return {
          export: "text",
          // to convert Paragraph to other block, use 'text' property of saved data
          import: "text"
          // to covert other block's exported string to Paragraph, fill 'text' property of tool data
        };
      }
      /**
       * Sanitizer rules
       * @returns {SanitizerConfig} - Edtior.js sanitizer config
       */
      static get sanitize() {
        return {
          text: {
            br: true
          }
        };
      }
      /**
       * Returns true to notify the core that read-only mode is supported
       *
       * @returns {boolean}
       */
      static get isReadOnlySupported() {
        return true;
      }
      /**
       * Used by Editor paste handling API.
       * Provides configuration to handle P tags.
       *
       * @returns {PasteConfig} - Paragraph Paste Setting
       */
      static get pasteConfig() {
        return {
          tags: ["P"]
        };
      }
      /**
       * Icon and title for displaying at the Toolbox
       *
       * @returns {ToolboxConfig} - Paragraph Toolbox Setting
       */
      static get toolbox() {
        return {
          icon: hs,
          title: "Text"
        };
      }
    }
    class ut {
      constructor() {
        this.commandName = "bold";
      }
      /**
       * Sanitizer Rule
       * Leave <b> tags
       *
       * @returns {object}
       */
      static get sanitize() {
        return {
          b: {}
        };
      }
      /**
       * Create button for Inline Toolbar
       */
      render() {
        return {
          icon: bi,
          name: "bold",
          onActivate: () => {
            document.execCommand(this.commandName);
          },
          isActive: () => document.queryCommandState(this.commandName)
        };
      }
      /**
       * Set a shortcut
       *
       * @returns {boolean}
       */
      get shortcut() {
        return "CMD+B";
      }
    }
    ut.isInline = true;
    ut.title = "Bold";
    class pt {
      constructor() {
        this.commandName = "italic", this.CSS = {
          button: "ce-inline-tool",
          buttonActive: "ce-inline-tool--active",
          buttonModifier: "ce-inline-tool--italic"
        }, this.nodes = {
          button: null
        };
      }
      /**
       * Sanitizer Rule
       * Leave <i> tags
       *
       * @returns {object}
       */
      static get sanitize() {
        return {
          i: {}
        };
      }
      /**
       * Create button for Inline Toolbar
       */
      render() {
        return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Bi, this.nodes.button;
      }
      /**
       * Wrap range with <i> tag
       */
      surround() {
        document.execCommand(this.commandName);
      }
      /**
       * Check selection and set activated state to button if there are <i> tag
       */
      checkState() {
        const e2 = document.queryCommandState(this.commandName);
        return this.nodes.button.classList.toggle(this.CSS.buttonActive, e2), e2;
      }
      /**
       * Set a shortcut
       */
      get shortcut() {
        return "CMD+I";
      }
    }
    pt.isInline = true;
    pt.title = "Italic";
    class ft {
      /**
       * @param api - Editor.js API
       */
      constructor({ api: e2 }) {
        this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
          button: "ce-inline-tool",
          buttonActive: "ce-inline-tool--active",
          buttonModifier: "ce-inline-tool--link",
          buttonUnlink: "ce-inline-tool--unlink",
          input: "ce-inline-tool-input",
          inputShowed: "ce-inline-tool-input--showed"
        }, this.nodes = {
          button: null,
          input: null
        }, this.inputOpened = false, this.toolbar = e2.toolbar, this.inlineToolbar = e2.inlineToolbar, this.notifier = e2.notifier, this.i18n = e2.i18n, this.selection = new b();
      }
      /**
       * Sanitizer Rule
       * Leave <a> tags
       *
       * @returns {object}
       */
      static get sanitize() {
        return {
          a: {
            href: true,
            target: "_blank",
            rel: "nofollow"
          }
        };
      }
      /**
       * Create button for Inline Toolbar
       */
      render() {
        return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = yt, this.nodes.button;
      }
      /**
       * Input for the link
       */
      renderActions() {
        return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.enterKeyHint = "done", this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e2) => {
          e2.keyCode === this.ENTER_KEY && this.enterPressed(e2);
        }), this.nodes.input;
      }
      /**
       * Handle clicks on the Inline Toolbar icon
       *
       * @param {Range} range - range to wrap with link
       */
      surround(e2) {
        if (e2) {
          this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
          const t2 = this.selection.findParentTag("A");
          if (t2) {
            this.selection.expandToTag(t2), this.unlink(), this.closeActions(), this.checkState(), this.toolbar.close();
            return;
          }
        }
        this.toggleActions();
      }
      /**
       * Check selection and set activated state to button if there are <a> tag
       */
      checkState() {
        const e2 = this.selection.findParentTag("A");
        if (e2) {
          this.nodes.button.innerHTML = Ii, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
          const t2 = e2.getAttribute("href");
          this.nodes.input.value = t2 !== "null" ? t2 : "", this.selection.save();
        } else
          this.nodes.button.innerHTML = yt, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
        return !!e2;
      }
      /**
       * Function called with Inline Toolbar closing
       */
      clear() {
        this.closeActions();
      }
      /**
       * Set a shortcut
       */
      get shortcut() {
        return "CMD+K";
      }
      /**
       * Show/close link input
       */
      toggleActions() {
        this.inputOpened ? this.closeActions(false) : this.openActions(true);
      }
      /**
       * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
       */
      openActions(e2 = false) {
        this.nodes.input.classList.add(this.CSS.inputShowed), e2 && this.nodes.input.focus(), this.inputOpened = true;
      }
      /**
       * Close input
       *
       * @param {boolean} clearSavedSelection — we don't need to clear saved selection
       *                                        on toggle-clicks on the icon of opened Toolbar
       */
      closeActions(e2 = true) {
        if (this.selection.isFakeBackgroundEnabled) {
          const t2 = new b();
          t2.save(), this.selection.restore(), this.selection.removeFakeBackground(), t2.restore();
        }
        this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e2 && this.selection.clearSaved(), this.inputOpened = false;
      }
      /**
       * Enter pressed on input
       *
       * @param {KeyboardEvent} event - enter keydown event
       */
      enterPressed(e2) {
        let t2 = this.nodes.input.value || "";
        if (!t2.trim()) {
          this.selection.restore(), this.unlink(), e2.preventDefault(), this.closeActions();
          return;
        }
        if (!this.validateURL(t2)) {
          this.notifier.show({
            message: "Pasted link is not valid.",
            style: "error"
          }), I("Incorrect Link pasted", "warn", t2);
          return;
        }
        t2 = this.prepareLink(t2), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t2), e2.preventDefault(), e2.stopPropagation(), e2.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
      }
      /**
       * Detects if passed string is URL
       *
       * @param {string} str - string to validate
       * @returns {boolean}
       */
      validateURL(e2) {
        return !/\s/.test(e2);
      }
      /**
       * Process link before injection
       * - sanitize
       * - add protocol for links like 'google.com'
       *
       * @param {string} link - raw user input
       */
      prepareLink(e2) {
        return e2 = e2.trim(), e2 = this.addProtocol(e2), e2;
      }
      /**
       * Add 'http' protocol to the links like 'vc.ru', 'google.com'
       *
       * @param {string} link - string to process
       */
      addProtocol(e2) {
        if (/^(\w+):(\/\/)?/.test(e2))
          return e2;
        const t2 = /^\/[^/\s]/.test(e2), o = e2.substring(0, 1) === "#", i = /^\/\/[^/\s]/.test(e2);
        return !t2 && !o && !i && (e2 = "http://" + e2), e2;
      }
      /**
       * Inserts <a> tag with "href"
       *
       * @param {string} link - "href" value
       */
      insertLink(e2) {
        const t2 = this.selection.findParentTag("A");
        t2 && this.selection.expandToTag(t2), document.execCommand(this.commandLink, false, e2);
      }
      /**
       * Removes <a> tag
       */
      unlink() {
        document.execCommand(this.commandUnlink);
      }
    }
    ft.isInline = true;
    ft.title = "Link";
    class ao {
      /**
       * @param api - Editor.js API
       */
      constructor({ api: e2 }) {
        this.i18nAPI = e2.i18n, this.blocksAPI = e2.blocks, this.selectionAPI = e2.selection, this.toolsAPI = e2.tools, this.caretAPI = e2.caret;
      }
      /**
       * Returns tool's UI config
       */
      async render() {
        const e2 = b.get(), t2 = this.blocksAPI.getBlockByElement(e2.anchorNode);
        if (t2 === void 0)
          return [];
        const o = this.toolsAPI.getBlockTools(), i = await zt(t2, o);
        if (i.length === 0)
          return [];
        const s = i.reduce((c2, u2) => {
          var h2;
          return (h2 = u2.toolbox) == null || h2.forEach((p2) => {
            c2.push({
              icon: p2.icon,
              title: z.t(K.toolNames, p2.title),
              name: u2.name,
              closeOnActivate: true,
              onActivate: async () => {
                const g2 = await this.blocksAPI.convert(t2.id, u2.name, p2.data);
                this.caretAPI.setToBlock(g2, "end");
              }
            });
          }), c2;
        }, []), r2 = await t2.getActiveToolboxEntry(), l2 = r2 !== void 0 ? r2.icon : Kt, a = !pe();
        return {
          icon: l2,
          name: "convert-to",
          hint: {
            title: this.i18nAPI.t("Convert to")
          },
          children: {
            searchable: a,
            items: s,
            onOpen: () => {
              a && (this.selectionAPI.setFakeBackground(), this.selectionAPI.save());
            },
            onClose: () => {
              a && (this.selectionAPI.restore(), this.selectionAPI.removeFakeBackground());
            }
          }
        };
      }
    }
    ao.isInline = true;
    class co {
      /**
       * @param options - constructor options
       * @param options.data - stub tool data
       * @param options.api - Editor.js API
       */
      constructor({ data: e2, api: t2 }) {
        this.CSS = {
          wrapper: "ce-stub",
          info: "ce-stub__info",
          title: "ce-stub__title",
          subtitle: "ce-stub__subtitle"
        }, this.api = t2, this.title = e2.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = e2.savedData, this.wrapper = this.make();
      }
      /**
       * Returns stub holder
       *
       * @returns {HTMLElement}
       */
      render() {
        return this.wrapper;
      }
      /**
       * Return original Tool data
       *
       * @returns {BlockToolData}
       */
      save() {
        return this.savedData;
      }
      /**
       * Create Tool html markup
       *
       * @returns {HTMLElement}
       */
      make() {
        const e2 = d.make("div", this.CSS.wrapper), t2 = Mi, o = d.make("div", this.CSS.info), i = d.make("div", this.CSS.title, {
          textContent: this.title
        }), s = d.make("div", this.CSS.subtitle, {
          textContent: this.subtitle
        });
        return e2.innerHTML = t2, o.appendChild(i), o.appendChild(s), e2.appendChild(o), e2;
      }
    }
    co.isReadOnlySupported = true;
    class ps extends dt {
      constructor() {
        super(...arguments), this.type = ne.Inline;
      }
      /**
       * Returns title for Inline Tool if specified by user
       */
      get title() {
        return this.constructable[ct.Title];
      }
      /**
       * Constructs new InlineTool instance from constructable
       */
      create() {
        return new this.constructable({
          api: this.api,
          config: this.settings
        });
      }
    }
    class fs extends dt {
      constructor() {
        super(...arguments), this.type = ne.Tune;
      }
      /**
       * Constructs new BlockTune instance from constructable
       *
       * @param data - Tune data
       * @param block - Block API object
       */
      create(e2, t2) {
        return new this.constructable({
          api: this.api,
          config: this.settings,
          block: t2,
          data: e2
        });
      }
    }
    class F extends Map {
      /**
       * Returns Block Tools collection
       */
      get blockTools() {
        const e2 = Array.from(this.entries()).filter(([, t2]) => t2.isBlock());
        return new F(e2);
      }
      /**
       * Returns Inline Tools collection
       */
      get inlineTools() {
        const e2 = Array.from(this.entries()).filter(([, t2]) => t2.isInline());
        return new F(e2);
      }
      /**
       * Returns Block Tunes collection
       */
      get blockTunes() {
        const e2 = Array.from(this.entries()).filter(([, t2]) => t2.isTune());
        return new F(e2);
      }
      /**
       * Returns internal Tools collection
       */
      get internalTools() {
        const e2 = Array.from(this.entries()).filter(([, t2]) => t2.isInternal);
        return new F(e2);
      }
      /**
       * Returns Tools collection provided by user
       */
      get externalTools() {
        const e2 = Array.from(this.entries()).filter(([, t2]) => !t2.isInternal);
        return new F(e2);
      }
    }
    var gs = Object.defineProperty, ms = Object.getOwnPropertyDescriptor, ho = (n2, e2, t2, o) => {
      for (var i = ms(e2, t2), s = n2.length - 1, r2; s >= 0; s--)
        (r2 = n2[s]) && (i = r2(e2, t2, i) || i);
      return i && gs(e2, t2, i), i;
    };
    class gt extends dt {
      constructor() {
        super(...arguments), this.type = ne.Block, this.inlineTools = new F(), this.tunes = new F();
      }
      /**
       * Creates new Tool instance
       *
       * @param data - Tool data
       * @param block - BlockAPI for current Block
       * @param readOnly - True if Editor is in read-only mode
       */
      create(e2, t2, o) {
        return new this.constructable({
          data: e2,
          block: t2,
          readOnly: o,
          api: this.api,
          config: this.settings
        });
      }
      /**
       * Returns true if read-only mode is supported by Tool
       */
      get isReadOnlySupported() {
        return this.constructable[ce.IsReadOnlySupported] === true;
      }
      /**
       * Returns true if Tool supports linebreaks
       */
      get isLineBreaksEnabled() {
        return this.constructable[ce.IsEnabledLineBreaks];
      }
      /**
       * Returns Tool toolbox configuration (internal or user-specified).
       *
       * Merges internal and user-defined toolbox configs based on the following rules:
       *
       * - If both internal and user-defined toolbox configs are arrays their items are merged.
       * Length of the second one is kept.
       *
       * - If both are objects their properties are merged.
       *
       * - If one is an object and another is an array than internal config is replaced with user-defined
       * config. This is made to allow user to override default tool's toolbox representation (single/multiple entries)
       */
      get toolbox() {
        const e2 = this.constructable[ce.Toolbox], t2 = this.config[Ie.Toolbox];
        if (!V(e2) && t2 !== false)
          return t2 ? Array.isArray(e2) ? Array.isArray(t2) ? t2.map((o, i) => {
            const s = e2[i];
            return s ? {
              ...s,
              ...o
            } : o;
          }) : [t2] : Array.isArray(t2) ? t2 : [
            {
              ...e2,
              ...t2
            }
          ] : Array.isArray(e2) ? e2 : [e2];
      }
      /**
       * Returns Tool conversion configuration
       */
      get conversionConfig() {
        return this.constructable[ce.ConversionConfig];
      }
      /**
       * Returns enabled inline tools for Tool
       */
      get enabledInlineTools() {
        return this.config[Ie.EnabledInlineTools] || false;
      }
      /**
       * Returns enabled tunes for Tool
       */
      get enabledBlockTunes() {
        return this.config[Ie.EnabledBlockTunes];
      }
      /**
       * Returns Tool paste configuration
       */
      get pasteConfig() {
        return this.constructable[ce.PasteConfig] ?? {};
      }
      get sanitizeConfig() {
        const e2 = super.sanitizeConfig, t2 = this.baseSanitizeConfig;
        if (V(e2))
          return t2;
        const o = {};
        for (const i in e2)
          if (Object.prototype.hasOwnProperty.call(e2, i)) {
            const s = e2[i];
            R(s) ? o[i] = Object.assign({}, t2, s) : o[i] = s;
          }
        return o;
      }
      get baseSanitizeConfig() {
        const e2 = {};
        return Array.from(this.inlineTools.values()).forEach((t2) => Object.assign(e2, t2.sanitizeConfig)), Array.from(this.tunes.values()).forEach((t2) => Object.assign(e2, t2.sanitizeConfig)), e2;
      }
    }
    ho([
      ue
    ], gt.prototype, "sanitizeConfig");
    ho([
      ue
    ], gt.prototype, "baseSanitizeConfig");
    class bs {
      /**
       * @class
       * @param config - tools config
       * @param editorConfig - EditorJS config
       * @param api - EditorJS API module
       */
      constructor(e2, t2, o) {
        this.api = o, this.config = e2, this.editorConfig = t2;
      }
      /**
       * Returns Tool object based on it's type
       *
       * @param name - tool name
       */
      get(e2) {
        const { class: t2, isInternal: o = false, ...i } = this.config[e2], s = this.getConstructor(t2), r2 = t2[et.IsTune];
        return new s({
          name: e2,
          constructable: t2,
          config: i,
          api: this.api.getMethodsForTool(e2, r2),
          isDefault: e2 === this.editorConfig.defaultBlock,
          defaultPlaceholder: this.editorConfig.placeholder,
          isInternal: o
        });
      }
      /**
       * Find appropriate Tool object constructor for Tool constructable
       *
       * @param constructable - Tools constructable
       */
      getConstructor(e2) {
        switch (true) {
          case e2[ct.IsInline]:
            return ps;
          case e2[et.IsTune]:
            return fs;
          default:
            return gt;
        }
      }
    }
    class uo {
      /**
       * MoveDownTune constructor
       *
       * @param {API} api — Editor's API
       */
      constructor({ api: e2 }) {
        this.CSS = {
          animation: "wobble"
        }, this.api = e2;
      }
      /**
       * Tune's appearance in block settings menu
       */
      render() {
        return {
          icon: ki,
          title: this.api.i18n.t("Move down"),
          onActivate: () => this.handleClick(),
          name: "move-down"
        };
      }
      /**
       * Handle clicks on 'move down' button
       */
      handleClick() {
        const e2 = this.api.blocks.getCurrentBlockIndex(), t2 = this.api.blocks.getBlockByIndex(e2 + 1);
        if (!t2)
          throw new Error("Unable to move Block down since it is already the last");
        const o = t2.holder, i = o.getBoundingClientRect();
        let s = Math.abs(window.innerHeight - o.offsetHeight);
        i.top < window.innerHeight && (s = window.scrollY + o.offsetHeight), window.scrollTo(0, s), this.api.blocks.move(e2 + 1), this.api.toolbar.toggleBlockSettings(true);
      }
    }
    uo.isTune = true;
    class po {
      /**
       * DeleteTune constructor
       *
       * @param {API} api - Editor's API
       */
      constructor({ api: e2 }) {
        this.api = e2;
      }
      /**
       * Tune's appearance in block settings menu
       */
      render() {
        return {
          icon: yi,
          title: this.api.i18n.t("Delete"),
          name: "delete",
          confirmation: {
            title: this.api.i18n.t("Click to delete"),
            onActivate: () => this.handleClick()
          }
        };
      }
      /**
       * Delete block conditions passed
       */
      handleClick() {
        this.api.blocks.delete();
      }
    }
    po.isTune = true;
    class fo {
      /**
       * MoveUpTune constructor
       *
       * @param {API} api - Editor's API
       */
      constructor({ api: e2 }) {
        this.CSS = {
          animation: "wobble"
        }, this.api = e2;
      }
      /**
       * Tune's appearance in block settings menu
       */
      render() {
        return {
          icon: xi,
          title: this.api.i18n.t("Move up"),
          onActivate: () => this.handleClick(),
          name: "move-up"
        };
      }
      /**
       * Move current block up
       */
      handleClick() {
        const e2 = this.api.blocks.getCurrentBlockIndex(), t2 = this.api.blocks.getBlockByIndex(e2), o = this.api.blocks.getBlockByIndex(e2 - 1);
        if (e2 === 0 || !t2 || !o)
          throw new Error("Unable to move Block up since it is already the first");
        const i = t2.holder, s = o.holder, r2 = i.getBoundingClientRect(), l2 = s.getBoundingClientRect();
        let a;
        l2.top > 0 ? a = Math.abs(r2.top) - Math.abs(l2.top) : a = Math.abs(r2.top) + l2.height, window.scrollBy(0, -1 * a), this.api.blocks.move(e2 - 1), this.api.toolbar.toggleBlockSettings(true);
      }
    }
    fo.isTune = true;
    var ks = Object.defineProperty, vs = Object.getOwnPropertyDescriptor, ws = (n2, e2, t2, o) => {
      for (var i = vs(e2, t2), s = n2.length - 1, r2; s >= 0; s--)
        (r2 = n2[s]) && (i = r2(e2, t2, i) || i);
      return i && ks(e2, t2, i), i;
    };
    class go extends y {
      constructor() {
        super(...arguments), this.stubTool = "stub", this.toolsAvailable = new F(), this.toolsUnavailable = new F();
      }
      /**
       * Returns available Tools
       */
      get available() {
        return this.toolsAvailable;
      }
      /**
       * Returns unavailable Tools
       */
      get unavailable() {
        return this.toolsUnavailable;
      }
      /**
       * Return Tools for the Inline Toolbar
       */
      get inlineTools() {
        return this.available.inlineTools;
      }
      /**
       * Return editor block tools
       */
      get blockTools() {
        return this.available.blockTools;
      }
      /**
       * Return available Block Tunes
       *
       * @returns {object} - object of Inline Tool's classes
       */
      get blockTunes() {
        return this.available.blockTunes;
      }
      /**
       * Returns default Tool object
       */
      get defaultTool() {
        return this.blockTools.get(this.config.defaultBlock);
      }
      /**
       * Returns internal tools
       */
      get internal() {
        return this.available.internalTools;
      }
      /**
       * Creates instances via passed or default configuration
       *
       * @returns {Promise<void>}
       */
      async prepare() {
        if (this.validateTools(), this.config.tools = qe({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0)
          throw Error("Can't start without tools");
        const e2 = this.prepareConfig();
        this.factory = new bs(e2, this.config, this.Editor.API);
        const t2 = this.getListOfPrepareFunctions(e2);
        if (t2.length === 0)
          return Promise.resolve();
        await Eo(t2, (o) => {
          this.toolPrepareMethodSuccess(o);
        }, (o) => {
          this.toolPrepareMethodFallback(o);
        }), this.prepareBlockTools();
      }
      getAllInlineToolsSanitizeConfig() {
        const e2 = {};
        return Array.from(this.inlineTools.values()).forEach((t2) => {
          Object.assign(e2, t2.sanitizeConfig);
        }), e2;
      }
      /**
       * Calls each Tool reset method to clean up anything set by Tool
       */
      destroy() {
        Object.values(this.available).forEach(async (e2) => {
          O(e2.reset) && await e2.reset();
        });
      }
      /**
       * Returns internal tools
       * Includes Bold, Italic, Link and Paragraph
       */
      get internalTools() {
        return {
          convertTo: {
            class: ao,
            isInternal: true
          },
          link: {
            class: ft,
            isInternal: true
          },
          bold: {
            class: ut,
            isInternal: true
          },
          italic: {
            class: pt,
            isInternal: true
          },
          paragraph: {
            class: ht,
            inlineToolbar: true,
            isInternal: true
          },
          stub: {
            class: co,
            isInternal: true
          },
          moveUp: {
            class: fo,
            isInternal: true
          },
          delete: {
            class: po,
            isInternal: true
          },
          moveDown: {
            class: uo,
            isInternal: true
          }
        };
      }
      /**
       * Tool prepare method success callback
       *
       * @param {object} data - append tool to available list
       */
      toolPrepareMethodSuccess(e2) {
        const t2 = this.factory.get(e2.toolName);
        if (t2.isInline()) {
          const i = ["render"].filter((s) => !t2.create()[s]);
          if (i.length) {
            I(
              `Incorrect Inline Tool: ${t2.name}. Some of required methods is not implemented %o`,
              "warn",
              i
            ), this.toolsUnavailable.set(t2.name, t2);
            return;
          }
        }
        this.toolsAvailable.set(t2.name, t2);
      }
      /**
       * Tool prepare method fail callback
       *
       * @param {object} data - append tool to unavailable list
       */
      toolPrepareMethodFallback(e2) {
        this.toolsUnavailable.set(e2.toolName, this.factory.get(e2.toolName));
      }
      /**
       * Binds prepare function of plugins with user or default config
       *
       * @returns {Array} list of functions that needs to be fired sequentially
       * @param config - tools config
       */
      getListOfPrepareFunctions(e2) {
        const t2 = [];
        return Object.entries(e2).forEach(([o, i]) => {
          t2.push({
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            function: O(i.class.prepare) ? i.class.prepare : () => {
            },
            data: {
              toolName: o,
              config: i.config
            }
          });
        }), t2;
      }
      /**
       * Assign enabled Inline Tools and Block Tunes for Block Tool
       */
      prepareBlockTools() {
        Array.from(this.blockTools.values()).forEach((e2) => {
          this.assignInlineToolsToBlockTool(e2), this.assignBlockTunesToBlockTool(e2);
        });
      }
      /**
       * Assign enabled Inline Tools for Block Tool
       *
       * @param tool - Block Tool
       */
      assignInlineToolsToBlockTool(e2) {
        if (this.config.inlineToolbar !== false) {
          if (e2.enabledInlineTools === true) {
            e2.inlineTools = new F(
              Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((t2) => [t2, this.inlineTools.get(t2)]) : Array.from(this.inlineTools.entries())
            );
            return;
          }
          Array.isArray(e2.enabledInlineTools) && (e2.inlineTools = new F(
            /** Prepend ConvertTo Inline Tool */
            ["convertTo", ...e2.enabledInlineTools].map((t2) => [t2, this.inlineTools.get(t2)])
          ));
        }
      }
      /**
       * Assign enabled Block Tunes for Block Tool
       *
       * @param tool — Block Tool
       */
      assignBlockTunesToBlockTool(e2) {
        if (e2.enabledBlockTunes !== false) {
          if (Array.isArray(e2.enabledBlockTunes)) {
            const t2 = new F(
              e2.enabledBlockTunes.map((o) => [o, this.blockTunes.get(o)])
            );
            e2.tunes = new F([...t2, ...this.blockTunes.internalTools]);
            return;
          }
          if (Array.isArray(this.config.tunes)) {
            const t2 = new F(
              this.config.tunes.map((o) => [o, this.blockTunes.get(o)])
            );
            e2.tunes = new F([...t2, ...this.blockTunes.internalTools]);
            return;
          }
          e2.tunes = this.blockTunes.internalTools;
        }
      }
      /**
       * Validate Tools configuration objects and throw Error for user if it is invalid
       */
      validateTools() {
        for (const e2 in this.config.tools)
          if (Object.prototype.hasOwnProperty.call(this.config.tools, e2)) {
            if (e2 in this.internalTools)
              return;
            const t2 = this.config.tools[e2];
            if (!O(t2) && !O(t2.class))
              throw Error(
                `Tool «${e2}» must be a constructor function or an object with function in the «class» property`
              );
          }
      }
      /**
       * Unify tools config
       */
      prepareConfig() {
        const e2 = {};
        for (const t2 in this.config.tools)
          R(this.config.tools[t2]) ? e2[t2] = this.config.tools[t2] : e2[t2] = { class: this.config.tools[t2] };
        return e2;
      }
    }
    ws([
      ue
    ], go.prototype, "getAllInlineToolsSanitizeConfig");
    (function() {
      try {
        if (typeof document < "u") {
          var e2 = document.createElement("style");
          e2.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}")), document.head.appendChild(e2);
        }
      } catch (n2) {
        console.error("vite-plugin-css-injected-by-js", n2);
      }
    })();
    (function() {
      try {
        if (typeof document < "u") {
          var e2 = document.createElement("style");
          e2.appendChild(document.createTextNode(".cdx-list{margin:0;padding-left:40px;outline:none}.cdx-list__item{padding:5.5px 0 5.5px 3px;line-height:1.6em}.cdx-list--unordered{list-style:disc}.cdx-list--ordered{list-style:decimal}.cdx-list-settings{display:flex}.cdx-list-settings .cdx-settings-button{width:50%}")), document.head.appendChild(e2);
        }
      } catch (t2) {
        console.error("vite-plugin-css-injected-by-js", t2);
      }
    })();
    (function() {
      try {
        if (typeof document < "u") {
          var e2 = document.createElement("style");
          e2.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(e2);
        }
      } catch (a) {
        console.error("vite-plugin-css-injected-by-js", a);
      }
    })();
    tsteam_settings.ajax_url;
    const ajax_url = tsteam_settings.ajax_url;
    const fetchData = (action, callback, additionalParams = {}) => {
      const params = {
        _ajax_nonce: tsteam_settings.nonce,
        action,
        ...additionalParams
      };
      jQuery.post(ajax_url, params, function(response) {
        if (typeof callback === "function") {
          callback(response);
        }
      });
    };
    create((set2) => ({
      createModal: false,
      updateModal: false,
      crudModal: false,
      reloadData: null,
      saveSettings: (key, value) => {
        set2((state) => {
          const keys2 = key.split(".");
          if (keys2.length === 1) {
            return {
              ...state,
              [key]: value
            };
          }
          const deepUpdate = (obj, keys3) => {
            const [firstKey, ...restKeys] = keys3;
            if (restKeys.length === 0) {
              return { ...obj, [firstKey]: value };
            }
            return {
              ...obj,
              [firstKey]: deepUpdate(obj[firstKey] !== void 0 ? obj[firstKey] : {}, restKeys)
            };
          };
          return deepUpdate(state, keys2);
        });
      }
    }));
    const getCarouselStyles = (settings, viewport, isEditor) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i2, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R;
      const { carouselSettings } = settings || {};
      let slidesToShow, slidesToScroll, columnGap;
      if (isEditor) {
        switch (viewport) {
          case "mobile":
            slidesToShow = ((_b = (_a2 = carouselSettings == null ? void 0 : carouselSettings.slidesToShow) == null ? void 0 : _a2.default) == null ? void 0 : _b.mobile) || 1;
            slidesToScroll = ((_d = (_c = carouselSettings == null ? void 0 : carouselSettings.slidesToScroll) == null ? void 0 : _c.default) == null ? void 0 : _d.mobile) || 1;
            columnGap = (_g = (_f = (_e = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _e.gap) == null ? void 0 : _f.default) == null ? void 0 : _g.mobile;
            break;
          case "tablet":
            slidesToShow = ((_i2 = (_h = carouselSettings == null ? void 0 : carouselSettings.slidesToShow) == null ? void 0 : _h.default) == null ? void 0 : _i2.tablet) || 2;
            slidesToScroll = ((_k = (_j = carouselSettings == null ? void 0 : carouselSettings.slidesToScroll) == null ? void 0 : _j.default) == null ? void 0 : _k.tablet) || 1;
            columnGap = (_n = (_m = (_l = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _l.gap) == null ? void 0 : _m.default) == null ? void 0 : _n.tablet;
            break;
          case "desktop":
          default:
            slidesToShow = ((_p = (_o = carouselSettings == null ? void 0 : carouselSettings.slidesToShow) == null ? void 0 : _o.default) == null ? void 0 : _p.desktop) || 3;
            slidesToScroll = ((_r = (_q = carouselSettings == null ? void 0 : carouselSettings.slidesToScroll) == null ? void 0 : _q.default) == null ? void 0 : _r.desktop) || 1;
            columnGap = (_u = (_t2 = (_s = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _s.gap) == null ? void 0 : _t2.default) == null ? void 0 : _u.desktop;
            break;
        }
      } else {
        const width = window.innerWidth;
        if (width <= 768) {
          slidesToShow = ((_w = (_v = carouselSettings == null ? void 0 : carouselSettings.slidesToShow) == null ? void 0 : _v.default) == null ? void 0 : _w.mobile) || 1;
          slidesToScroll = ((_y = (_x = carouselSettings == null ? void 0 : carouselSettings.slidesToScroll) == null ? void 0 : _x.default) == null ? void 0 : _y.mobile) || 1;
          columnGap = (_B = (_A = (_z = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _z.gap) == null ? void 0 : _A.default) == null ? void 0 : _B.mobile;
        } else if (width <= 1024) {
          slidesToShow = ((_D = (_C = carouselSettings == null ? void 0 : carouselSettings.slidesToShow) == null ? void 0 : _C.default) == null ? void 0 : _D.tablet) || 2;
          slidesToScroll = ((_F = (_E = carouselSettings == null ? void 0 : carouselSettings.slidesToScroll) == null ? void 0 : _E.default) == null ? void 0 : _F.tablet) || 1;
          columnGap = (_I = (_H = (_G = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _G.gap) == null ? void 0 : _H.default) == null ? void 0 : _I.tablet;
        } else {
          slidesToShow = ((_K = (_J = carouselSettings == null ? void 0 : carouselSettings.slidesToShow) == null ? void 0 : _J.default) == null ? void 0 : _K.desktop) || 3;
          slidesToScroll = ((_M = (_L = carouselSettings == null ? void 0 : carouselSettings.slidesToScroll) == null ? void 0 : _L.default) == null ? void 0 : _M.desktop) || 1;
          columnGap = (_P = (_O = (_N = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _N.gap) == null ? void 0 : _O.default) == null ? void 0 : _P.desktop;
        }
      }
      const slideSpeed = (_Q = carouselSettings == null ? void 0 : carouselSettings.slideSpeed) == null ? void 0 : _Q.default;
      const gap = (_R = carouselSettings == null ? void 0 : carouselSettings.gap) == null ? void 0 : _R.default;
      const transition = carouselSettings == null ? void 0 : carouselSettings.transition;
      const infinite = stringToBoolean(carouselSettings == null ? void 0 : carouselSettings.infinite);
      const repeat = stringToBoolean(carouselSettings == null ? void 0 : carouselSettings.repeat);
      const centerMode = stringToBoolean(carouselSettings == null ? void 0 : carouselSettings.centerSlide);
      const autoplay = stringToBoolean(carouselSettings == null ? void 0 : carouselSettings.autoPlay);
      const dotsColor = carouselSettings.dotsColor || "#703fd6";
      const navBgColor = carouselSettings.navBgColor;
      const navColor = carouselSettings.navColor;
      return {
        slidesToShow,
        slidesToScroll,
        columnGap,
        slideSpeed,
        gap,
        transition,
        infinite,
        repeat,
        centerMode,
        autoplay,
        dotsColor,
        navBgColor,
        navColor
      };
    };
    function CarouselView({ team_members, settings, viewport, isEditor }) {
      var _a2, _b;
      const [ProLayoutComponent, setProLayoutComponent] = reactExports.useState(null);
      const commonStyles = getCommonStyles(settings);
      const [responsiveStyles, setResponsiveStyles] = reactExports.useState(
        getResponsiveStyles(settings, viewport, isEditor)
      );
      const [carouselStyles, setCarouselStyles] = reactExports.useState(
        getCarouselStyles(settings, viewport, isEditor)
      );
      reactExports.useMemo(() => {
        setProLayoutComponent(() => getProLayout(settings));
      }, [(_a2 = settings == null ? void 0 : settings.selectedLayout) == null ? void 0 : _a2.type, (_b = settings == null ? void 0 : settings.selectedLayout) == null ? void 0 : _b.value]);
      reactExports.useEffect(() => {
        const updateStyles = () => {
          setResponsiveStyles(getResponsiveStyles(settings, viewport, isEditor));
          setCarouselStyles(getCarouselStyles(settings, viewport, isEditor));
        };
        if (!isEditor) {
          window.addEventListener("resize", updateStyles);
          return () => {
            window.removeEventListener("resize", updateStyles);
          };
        } else {
          updateStyles();
        }
      }, [settings, viewport, isEditor]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center relative w-full", style: { ...commonStyles, ...responsiveStyles }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GenerateLayoutStyle, { settings }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Carousel,
          {
            slidesToShow: carouselStyles.slidesToShow,
            slidesToScroll: carouselStyles.slidesToScroll,
            infinite: carouselStyles.infinite,
            repeat: carouselStyles.repeat,
            autoplay: carouselStyles.autoplay,
            centerMode: carouselStyles.centerMode,
            transition: carouselStyles.transition,
            autoplaySpeed: carouselStyles.slideSpeed,
            gap: carouselStyles.gap,
            dotStyle: {
              color: carouselStyles.dotsColor,
              inactiveColor: "#9CA3AF",
              size: "14px",
              gap: "12px"
            },
            navigationStyle: {
              backgroundColor: carouselStyles.navBgColor,
              color: carouselStyles.navColor
            },
            children: team_members && team_members.length > 0 ? team_members.map((member, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "tsteam-carousel",
                style: {
                  padding: "1rem",
                  // Add horizontal gap
                  width: "100%",
                  // Ensure width is consistent
                  boxSizing: "border-box"
                  // Include padding in width calculation
                },
                ref: (el2) => {
                  if (el2) el2.style.setProperty("padding", carouselStyles.columnGap, "important");
                },
                children: ProLayoutComponent ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ProLayoutComponent,
                  {
                    settings,
                    imageUrl: member.meta_data.image,
                    id: member.post_id,
                    title: member.title,
                    subtitle: member.meta_data.designation,
                    description: member.description,
                    socialIcons: member.socialIcons || [],
                    details: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Details,
                      {
                        settings,
                        member
                      }
                    )
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Layout,
                  {
                    settings,
                    layoutType: settings.selectedLayout.value,
                    id: member.post_id,
                    imageUrl: member.meta_data.image,
                    title: member.title,
                    subtitle: member.meta_data.designation,
                    description: member.description,
                    socialIcons: member.meta_data.socialLinks || [],
                    details: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Details,
                      {
                        settings,
                        member
                      }
                    )
                  }
                )
              },
              index
            )) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No team members found." })
          }
        )
      ] }) }) });
    }
    var dist = {};
    function ___$insertStyle(css) {
      if (typeof window === "undefined") {
        return;
      }
      const style2 = document.createElement("style");
      style2.setAttribute("type", "text/css");
      style2.innerHTML = css;
      document.head.appendChild(style2);
      return css;
    }
    Object.defineProperty(dist, "__esModule", { value: true });
    var React = reactExports;
    function _interopDefaultLegacy(e2) {
      return e2 && typeof e2 === "object" && "default" in e2 ? e2 : { "default": e2 };
    }
    var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
    ___$insertStyle('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');
    const Marquee = React.forwardRef(function Marquee2({ style: style2 = {}, className = "", autoFill = false, play = true, pauseOnHover = false, pauseOnClick = false, direction = "left", speed = 50, delay = 0, loop = 0, gradient = false, gradientColor = "white", gradientWidth = 200, onFinish, onCycleComplete, onMount, children }, ref) {
      const [containerWidth, setContainerWidth] = React.useState(0);
      const [marqueeWidth, setMarqueeWidth] = React.useState(0);
      const [multiplier, setMultiplier] = React.useState(1);
      const [isMounted, setIsMounted] = React.useState(false);
      const rootRef = React.useRef(null);
      const containerRef = ref || rootRef;
      const marqueeRef = React.useRef(null);
      const calculateWidth = React.useCallback(() => {
        if (marqueeRef.current && containerRef.current) {
          const containerRect = containerRef.current.getBoundingClientRect();
          const marqueeRect = marqueeRef.current.getBoundingClientRect();
          let containerWidth2 = containerRect.width;
          let marqueeWidth2 = marqueeRect.width;
          if (direction === "up" || direction === "down") {
            containerWidth2 = containerRect.height;
            marqueeWidth2 = marqueeRect.height;
          }
          if (autoFill && containerWidth2 && marqueeWidth2) {
            setMultiplier(marqueeWidth2 < containerWidth2 ? Math.ceil(containerWidth2 / marqueeWidth2) : 1);
          } else {
            setMultiplier(1);
          }
          setContainerWidth(containerWidth2);
          setMarqueeWidth(marqueeWidth2);
        }
      }, [autoFill, containerRef, direction]);
      React.useEffect(() => {
        if (!isMounted)
          return;
        calculateWidth();
        if (marqueeRef.current && containerRef.current) {
          const resizeObserver = new ResizeObserver(() => calculateWidth());
          resizeObserver.observe(containerRef.current);
          resizeObserver.observe(marqueeRef.current);
          return () => {
            if (!resizeObserver)
              return;
            resizeObserver.disconnect();
          };
        }
      }, [calculateWidth, containerRef, isMounted]);
      React.useEffect(() => {
        calculateWidth();
      }, [calculateWidth, children]);
      React.useEffect(() => {
        setIsMounted(true);
      }, []);
      React.useEffect(() => {
        if (typeof onMount === "function") {
          onMount();
        }
      }, []);
      const duration = React.useMemo(() => {
        if (autoFill) {
          return marqueeWidth * multiplier / speed;
        } else {
          return marqueeWidth < containerWidth ? containerWidth / speed : marqueeWidth / speed;
        }
      }, [autoFill, containerWidth, marqueeWidth, multiplier, speed]);
      const containerStyle = React.useMemo(() => Object.assign(Object.assign({}, style2), { ["--pause-on-hover"]: !play || pauseOnHover ? "paused" : "running", ["--pause-on-click"]: !play || pauseOnHover && !pauseOnClick || pauseOnClick ? "paused" : "running", ["--width"]: direction === "up" || direction === "down" ? `100vh` : "100%", ["--transform"]: direction === "up" ? "rotate(-90deg)" : direction === "down" ? "rotate(90deg)" : "none" }), [style2, play, pauseOnHover, pauseOnClick, direction]);
      const gradientStyle = React.useMemo(() => ({
        ["--gradient-color"]: gradientColor,
        ["--gradient-width"]: typeof gradientWidth === "number" ? `${gradientWidth}px` : gradientWidth
      }), [gradientColor, gradientWidth]);
      const marqueeStyle = React.useMemo(() => ({
        ["--play"]: play ? "running" : "paused",
        ["--direction"]: direction === "left" ? "normal" : "reverse",
        ["--duration"]: `${duration}s`,
        ["--delay"]: `${delay}s`,
        ["--iteration-count"]: !!loop ? `${loop}` : "infinite",
        ["--min-width"]: autoFill ? `auto` : "100%"
      }), [play, direction, duration, delay, loop, autoFill]);
      const childStyle = React.useMemo(() => ({
        ["--transform"]: direction === "up" ? "rotate(90deg)" : direction === "down" ? "rotate(-90deg)" : "none"
      }), [direction]);
      const multiplyChildren = React.useCallback((multiplier2) => {
        return [
          ...Array(Number.isFinite(multiplier2) && multiplier2 >= 0 ? multiplier2 : 0)
        ].map((_, i) => React__default["default"].createElement(React.Fragment, { key: i }, React.Children.map(children, (child) => {
          return React__default["default"].createElement("div", { style: childStyle, className: "rfm-child" }, child);
        })));
      }, [childStyle, children]);
      return !isMounted ? null : React__default["default"].createElement(
        "div",
        { ref: containerRef, style: containerStyle, className: "rfm-marquee-container " + className },
        gradient && React__default["default"].createElement("div", { style: gradientStyle, className: "rfm-overlay" }),
        React__default["default"].createElement(
          "div",
          { className: "rfm-marquee", style: marqueeStyle, onAnimationIteration: onCycleComplete, onAnimationEnd: onFinish },
          React__default["default"].createElement("div", { className: "rfm-initial-child-container", ref: marqueeRef }, React.Children.map(children, (child) => {
            return React__default["default"].createElement("div", { style: childStyle, className: "rfm-child" }, child);
          })),
          multiplyChildren(multiplier - 1)
        ),
        React__default["default"].createElement("div", { className: "rfm-marquee", style: marqueeStyle }, multiplyChildren(multiplier))
      );
    });
    var _default = dist.default = Marquee;
    const getMarqueeStyles = (settings, viewport, isEditor) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i2, _j, _k, _l, _m, _n, _o, _p, _q, _r;
      const { marqueeSettings } = settings || {};
      let columnGap;
      if (isEditor) {
        switch (viewport) {
          case "mobile":
            columnGap = (_c = (_b = (_a2 = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _a2.gap) == null ? void 0 : _b.default) == null ? void 0 : _c.mobile;
            break;
          case "tablet":
            columnGap = (_f = (_e = (_d = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _d.gap) == null ? void 0 : _e.default) == null ? void 0 : _f.tablet;
            break;
          case "desktop":
          default:
            columnGap = (_i2 = (_h = (_g = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _g.gap) == null ? void 0 : _h.default) == null ? void 0 : _i2.desktop;
            break;
        }
      } else {
        const width = window.innerWidth;
        if (width <= 768) {
          columnGap = (_l = (_k = (_j = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _j.gap) == null ? void 0 : _k.default) == null ? void 0 : _l.mobile;
        } else if (width <= 1024) {
          columnGap = (_o = (_n = (_m = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _m.gap) == null ? void 0 : _n.default) == null ? void 0 : _o.tablet;
        } else {
          columnGap = (_r = (_q = (_p = settings == null ? void 0 : settings.columnSettings) == null ? void 0 : _p.gap) == null ? void 0 : _q.default) == null ? void 0 : _r.desktop;
        }
      }
      const speed = marqueeSettings == null ? void 0 : marqueeSettings.marqueeSpeed.default;
      const direction = marqueeSettings.direction;
      const infinite = stringToBoolean(marqueeSettings.infinite);
      const pauseOnClick = stringToBoolean(marqueeSettings.pauseOnClick);
      const pauseOnHover = stringToBoolean(marqueeSettings.pauseOnHover);
      return {
        speed,
        direction,
        infinite,
        pauseOnClick,
        pauseOnHover,
        columnGap
      };
    };
    function MarqueeView({ team_members, settings, viewport, isEditor }) {
      var _a2, _b;
      const [ProLayoutComponent, setProLayoutComponent] = reactExports.useState(null);
      const commonStyles = getCommonStyles(settings);
      const [responsiveStyles, setResponsiveStyles] = reactExports.useState(
        getResponsiveStyles(settings, viewport, isEditor)
      );
      const [marqueeStyles, setMarqueeStyles] = reactExports.useState(
        getMarqueeStyles(settings, viewport, isEditor)
      );
      reactExports.useMemo(() => {
        setProLayoutComponent(() => getProLayout(settings));
      }, [(_a2 = settings == null ? void 0 : settings.selectedLayout) == null ? void 0 : _a2.type, (_b = settings == null ? void 0 : settings.selectedLayout) == null ? void 0 : _b.value]);
      reactExports.useEffect(() => {
        const updateResponsiveStyles = () => {
          setMarqueeStyles(getMarqueeStyles(settings, viewport, isEditor));
          setResponsiveStyles(getResponsiveStyles(settings, viewport, isEditor));
        };
        if (isEditor) {
          updateResponsiveStyles();
        } else {
          updateResponsiveStyles();
          window.addEventListener("resize", updateResponsiveStyles);
          return () => {
            window.removeEventListener("resize", updateResponsiveStyles);
          };
        }
      }, [settings, isEditor, viewport]);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "",
          style: {
            ...commonStyles,
            ...responsiveStyles
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GenerateLayoutStyle, { settings }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              _default,
              {
                speed: marqueeStyles.speed,
                autoFill: marqueeStyles.infinite,
                pauseOnClick: marqueeStyles.pauseOnClick,
                pauseOnHover: marqueeStyles.pauseOnHover,
                direction: marqueeStyles.direction,
                delay: 0,
                style: {
                  width: "100%"
                },
                children: team_members && team_members.length > 0 ? team_members.map((member, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginRight: marqueeStyles.columnGap }, children: ProLayoutComponent ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ProLayoutComponent,
                  {
                    settings,
                    imageUrl: member.meta_data.image,
                    id: member.post_id,
                    title: member.title,
                    subtitle: member.meta_data.designation,
                    description: member.description,
                    socialIcons: member.socialIcons || [],
                    details: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Details,
                      {
                        settings,
                        member
                      }
                    )
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Layout,
                  {
                    settings,
                    layoutType: settings.selectedLayout.value,
                    id: member.post_id,
                    imageUrl: member.meta_data.image,
                    title: member.title,
                    subtitle: member.meta_data.designation,
                    description: member.meta_data.description,
                    socialIcons: member.meta_data.socialLinks || [],
                    details: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Details,
                      {
                        settings,
                        member
                      }
                    )
                  }
                ) }, index)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No team members found." })
              }
            )
          ]
        }
      );
    }
    function TableView({ team_members, settings, viewport, isEditor }) {
      var _a2, _b;
      const [ProLayoutComponent, setProLayoutComponent] = reactExports.useState(null);
      const commonStyles = getCommonStyles(settings);
      const [responsiveStyles, setResponsiveStyles] = reactExports.useState(
        getResponsiveStyles(settings, viewport, isEditor)
      );
      reactExports.useEffect(() => {
        if (settings == null ? void 0 : settings.typography) {
          const typographyKeys = ["name", "designation", "description"];
          typographyKeys.forEach((key) => {
            const fontFamily = settings.typography[key];
            if (fontFamily) {
              loadGoogleFont(fontFamily);
            }
          });
        }
      }, [settings == null ? void 0 : settings.typography]);
      reactExports.useMemo(() => {
        setProLayoutComponent(() => getProLayout(settings));
      }, [(_a2 = settings == null ? void 0 : settings.selectedLayout) == null ? void 0 : _a2.type, (_b = settings == null ? void 0 : settings.selectedLayout) == null ? void 0 : _b.value]);
      reactExports.useEffect(() => {
        const updateResponsiveStyles = () => {
          setResponsiveStyles(getResponsiveStyles(settings, viewport, isEditor));
        };
        if (isEditor) {
          updateResponsiveStyles();
        } else {
          updateResponsiveStyles();
          window.addEventListener("resize", updateResponsiveStyles);
          return () => {
            window.removeEventListener("resize", updateResponsiveStyles);
          };
        }
      }, [settings, isEditor, viewport]);
      reactExports.useMemo(() => {
        const hoverAnimation = (settings == null ? void 0 : settings.hoverAnimation) || "none";
        const config = getAnimationClasses(hoverAnimation);
        return config;
      }, [settings == null ? void 0 : settings.hoverAnimation]);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "tsteam-table-container",
          style: {
            ...commonStyles,
            ...responsiveStyles
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GenerateLayoutStyle, { settings }),
            team_members && team_members.length > 0 ? ProLayoutComponent ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              ProLayoutComponent,
              {
                settings,
                team_members,
                Details
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              Layout,
              {
                settings,
                layoutType: settings.selectedLayout.value,
                team_members,
                Details
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No team members found." })
          ]
        }
      );
    }
    function FilterableView({ team_members, settings, category, viewport, isEditor }) {
      var _a2, _b;
      const [ProLayoutComponent, setProLayoutComponent] = reactExports.useState(null);
      const [activeCategory, setActiveCategory] = reactExports.useState("all");
      const commonStyles = getCommonStyles(settings);
      const [responsiveStyles, setResponsiveStyles] = reactExports.useState(
        getResponsiveStyles(settings, viewport, isEditor)
      );
      const categories = reactExports.useMemo(() => {
        const categoryMap = /* @__PURE__ */ new Map();
        team_members == null ? void 0 : team_members.forEach((member) => {
          var _a3;
          (_a3 = member.categories) == null ? void 0 : _a3.forEach((cat) => {
            if (!categoryMap.has(cat.slug)) {
              categoryMap.set(cat.slug, cat.name);
            }
          });
        });
        return Array.from(categoryMap, ([slug, name]) => ({ slug, name }));
      }, [team_members]);
      const filteredMembers = reactExports.useMemo(() => {
        if (activeCategory === "all") {
          return team_members;
        }
        return team_members == null ? void 0 : team_members.filter(
          (member) => {
            var _a3;
            return (_a3 = member.categories) == null ? void 0 : _a3.some((cat) => cat.slug === activeCategory);
          }
        );
      }, [team_members, activeCategory]);
      reactExports.useEffect(() => {
        if (settings == null ? void 0 : settings.typography) {
          const typographyKeys = ["name", "designation", "description"];
          typographyKeys.forEach((key) => {
            const fontFamily = settings.typography[key];
            if (fontFamily) {
              loadGoogleFont(fontFamily);
            }
          });
        }
      }, [settings == null ? void 0 : settings.typography]);
      reactExports.useMemo(() => {
        setProLayoutComponent(() => getProLayout(settings));
      }, [(_a2 = settings == null ? void 0 : settings.selectedLayout) == null ? void 0 : _a2.type, (_b = settings == null ? void 0 : settings.selectedLayout) == null ? void 0 : _b.value]);
      reactExports.useEffect(() => {
        const updateResponsiveStyles = () => {
          setResponsiveStyles(getResponsiveStyles(settings, viewport, isEditor));
        };
        if (isEditor) {
          updateResponsiveStyles();
        } else {
          updateResponsiveStyles();
          window.addEventListener("resize", updateResponsiveStyles);
          return () => {
            window.removeEventListener("resize", updateResponsiveStyles);
          };
        }
      }, [settings, isEditor, viewport]);
      const animationConfig = reactExports.useMemo(() => {
        const hoverAnimation = (settings == null ? void 0 : settings.hoverAnimation) || "none";
        const config = getAnimationClasses(hoverAnimation);
        return config;
      }, [settings == null ? void 0 : settings.hoverAnimation]);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tsteam-filterable-wrapper", children: [
        categories.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tsteam-category-tabs", style: {
          display: "flex",
          gap: "10px",
          marginBottom: "30px",
          flexWrap: "wrap",
          justifyContent: "center"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `tsteam-tab ${activeCategory === "all" ? "active" : ""}`,
              onClick: () => setActiveCategory("all"),
              style: {
                padding: "10px 20px",
                border: activeCategory === "all" ? "2px solid #007bff" : "1px solid #ddd",
                background: activeCategory === "all" ? "#007bff" : "#fff",
                color: activeCategory === "all" ? "#fff" : "#333",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: activeCategory === "all" ? "bold" : "normal",
                transition: "all 0.3s ease"
              },
              children: "All"
            }
          ),
          categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `tsteam-tab ${activeCategory === cat.slug ? "active" : ""}`,
              onClick: () => setActiveCategory(cat.slug),
              style: {
                padding: "10px 20px",
                border: activeCategory === cat.slug ? "2px solid #007bff" : "1px solid #ddd",
                background: activeCategory === cat.slug ? "#007bff" : "#fff",
                color: activeCategory === cat.slug ? "#fff" : "#333",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: activeCategory === cat.slug ? "bold" : "normal",
                transition: "all 0.3s ease"
              },
              children: cat.name
            },
            cat.slug
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "tsteam-container items-start",
            style: {
              ...commonStyles,
              ...responsiveStyles
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GenerateLayoutStyle, { settings }),
              filteredMembers && filteredMembers.length > 0 ? filteredMembers.map((member, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: ProLayoutComponent ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                ProLayoutComponent,
                {
                  settings,
                  imageUrl: member.meta_data.image,
                  id: member.post_id,
                  title: member.title,
                  subtitle: member.meta_data.designation,
                  description: member.meta_data.description,
                  socialIcons: member.meta_data.socialLinks || [],
                  details: /* @__PURE__ */ jsxRuntimeExports.jsx(Details, { settings, member }),
                  animationConfig
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                Layout,
                {
                  settings,
                  layoutType: settings.selectedLayout.value,
                  id: member.post_id,
                  imageUrl: member.meta_data.image,
                  title: member.title,
                  subtitle: member.meta_data.designation,
                  description: member.meta_data.description,
                  socialIcons: member.meta_data.socialLinks || [],
                  details: /* @__PURE__ */ jsxRuntimeExports.jsx(Details, { settings, member }),
                  animationConfig
                }
              ) }, member.post_id || index)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { textAlign: "center", padding: "20px", color: "#666" }, children: "No team members found in this category." })
            ]
          }
        )
      ] });
    }
    var module = {};
    (function main(global2, module2, isWorker, workerSize) {
      var canUseWorker = !!(global2.Worker && global2.Blob && global2.Promise && global2.OffscreenCanvas && global2.OffscreenCanvasRenderingContext2D && global2.HTMLCanvasElement && global2.HTMLCanvasElement.prototype.transferControlToOffscreen && global2.URL && global2.URL.createObjectURL);
      var canUsePaths = typeof Path2D === "function" && typeof DOMMatrix === "function";
      var canDrawBitmap = function() {
        if (!global2.OffscreenCanvas) {
          return false;
        }
        var canvas = new OffscreenCanvas(1, 1);
        var ctx = canvas.getContext("2d");
        ctx.fillRect(0, 0, 1, 1);
        var bitmap = canvas.transferToImageBitmap();
        try {
          ctx.createPattern(bitmap, "no-repeat");
        } catch (e2) {
          return false;
        }
        return true;
      }();
      function noop2() {
      }
      function promise(func) {
        var ModulePromise = module2.exports.Promise;
        var Prom = ModulePromise !== void 0 ? ModulePromise : global2.Promise;
        if (typeof Prom === "function") {
          return new Prom(func);
        }
        func(noop2, noop2);
        return null;
      }
      var bitmapMapper = /* @__PURE__ */ function(skipTransform, map) {
        return {
          transform: function(bitmap) {
            if (skipTransform) {
              return bitmap;
            }
            if (map.has(bitmap)) {
              return map.get(bitmap);
            }
            var canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
            var ctx = canvas.getContext("2d");
            ctx.drawImage(bitmap, 0, 0);
            map.set(bitmap, canvas);
            return canvas;
          },
          clear: function() {
            map.clear();
          }
        };
      }(canDrawBitmap, /* @__PURE__ */ new Map());
      var raf2 = function() {
        var TIME = Math.floor(1e3 / 60);
        var frame, cancel;
        var frames = {};
        var lastFrameTime = 0;
        if (typeof requestAnimationFrame === "function" && typeof cancelAnimationFrame === "function") {
          frame = function(cb2) {
            var id2 = Math.random();
            frames[id2] = requestAnimationFrame(function onFrame(time) {
              if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
                lastFrameTime = time;
                delete frames[id2];
                cb2();
              } else {
                frames[id2] = requestAnimationFrame(onFrame);
              }
            });
            return id2;
          };
          cancel = function(id2) {
            if (frames[id2]) {
              cancelAnimationFrame(frames[id2]);
            }
          };
        } else {
          frame = function(cb2) {
            return setTimeout(cb2, TIME);
          };
          cancel = function(timer) {
            return clearTimeout(timer);
          };
        }
        return { frame, cancel };
      }();
      var getWorker = /* @__PURE__ */ function() {
        var worker;
        var prom;
        var resolves = {};
        function decorate(worker2) {
          function execute(options, callback) {
            worker2.postMessage({ options: options || {}, callback });
          }
          worker2.init = function initWorker(canvas) {
            var offscreen = canvas.transferControlToOffscreen();
            worker2.postMessage({ canvas: offscreen }, [offscreen]);
          };
          worker2.fire = function fireWorker(options, size, done) {
            if (prom) {
              execute(options, null);
              return prom;
            }
            var id2 = Math.random().toString(36).slice(2);
            prom = promise(function(resolve) {
              function workerDone(msg) {
                if (msg.data.callback !== id2) {
                  return;
                }
                delete resolves[id2];
                worker2.removeEventListener("message", workerDone);
                prom = null;
                bitmapMapper.clear();
                done();
                resolve();
              }
              worker2.addEventListener("message", workerDone);
              execute(options, id2);
              resolves[id2] = workerDone.bind(null, { data: { callback: id2 } });
            });
            return prom;
          };
          worker2.reset = function resetWorker() {
            worker2.postMessage({ reset: true });
            for (var id2 in resolves) {
              resolves[id2]();
              delete resolves[id2];
            }
          };
        }
        return function() {
          if (worker) {
            return worker;
          }
          if (!isWorker && canUseWorker) {
            var code = [
              "var CONFETTI, SIZE = {}, module = {};",
              "(" + main.toString() + ")(this, module, true, SIZE);",
              "onmessage = function(msg) {",
              "  if (msg.data.options) {",
              "    CONFETTI(msg.data.options).then(function () {",
              "      if (msg.data.callback) {",
              "        postMessage({ callback: msg.data.callback });",
              "      }",
              "    });",
              "  } else if (msg.data.reset) {",
              "    CONFETTI && CONFETTI.reset();",
              "  } else if (msg.data.resize) {",
              "    SIZE.width = msg.data.resize.width;",
              "    SIZE.height = msg.data.resize.height;",
              "  } else if (msg.data.canvas) {",
              "    SIZE.width = msg.data.canvas.width;",
              "    SIZE.height = msg.data.canvas.height;",
              "    CONFETTI = module.exports.create(msg.data.canvas);",
              "  }",
              "}"
            ].join("\n");
            try {
              worker = new Worker(URL.createObjectURL(new Blob([code])));
            } catch (e2) {
              typeof console !== void 0 && typeof console.warn === "function" ? console.warn("🎊 Could not load worker", e2) : null;
              return null;
            }
            decorate(worker);
          }
          return worker;
        };
      }();
      var defaults = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: 0.5,
        y: 0.5,
        shapes: ["square", "circle"],
        zIndex: 100,
        colors: [
          "#26ccff",
          "#a25afd",
          "#ff5e7e",
          "#88ff5a",
          "#fcff42",
          "#ffa62d",
          "#ff36ff"
        ],
        // probably should be true, but back-compat
        disableForReducedMotion: false,
        scalar: 1
      };
      function convert(val, transform) {
        return transform ? transform(val) : val;
      }
      function isOk(val) {
        return !(val === null || val === void 0);
      }
      function prop(options, name, transform) {
        return convert(
          options && isOk(options[name]) ? options[name] : defaults[name],
          transform
        );
      }
      function onlyPositiveInt(number) {
        return number < 0 ? 0 : Math.floor(number);
      }
      function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      function toDecimal(str) {
        return parseInt(str, 16);
      }
      function colorsToRgb(colors) {
        return colors.map(hexToRgb);
      }
      function hexToRgb(str) {
        var val = String(str).replace(/[^0-9a-f]/gi, "");
        if (val.length < 6) {
          val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
        }
        return {
          r: toDecimal(val.substring(0, 2)),
          g: toDecimal(val.substring(2, 4)),
          b: toDecimal(val.substring(4, 6))
        };
      }
      function getOrigin(options) {
        var origin = prop(options, "origin", Object);
        origin.x = prop(origin, "x", Number);
        origin.y = prop(origin, "y", Number);
        return origin;
      }
      function setCanvasWindowSize(canvas) {
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
      }
      function setCanvasRectSize(canvas) {
        var rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
      function getCanvas(zIndex) {
        var canvas = document.createElement("canvas");
        canvas.style.position = "fixed";
        canvas.style.top = "0px";
        canvas.style.left = "0px";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = zIndex;
        return canvas;
      }
      function ellipse(context, x2, y2, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
        context.save();
        context.translate(x2, y2);
        context.rotate(rotation);
        context.scale(radiusX, radiusY);
        context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
        context.restore();
      }
      function randomPhysics(opts) {
        var radAngle = opts.angle * (Math.PI / 180);
        var radSpread = opts.spread * (Math.PI / 180);
        return {
          x: opts.x,
          y: opts.y,
          wobble: Math.random() * 10,
          wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
          velocity: opts.startVelocity * 0.5 + Math.random() * opts.startVelocity,
          angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
          tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
          color: opts.color,
          shape: opts.shape,
          tick: 0,
          totalTicks: opts.ticks,
          decay: opts.decay,
          drift: opts.drift,
          random: Math.random() + 2,
          tiltSin: 0,
          tiltCos: 0,
          wobbleX: 0,
          wobbleY: 0,
          gravity: opts.gravity * 3,
          ovalScalar: 0.6,
          scalar: opts.scalar,
          flat: opts.flat
        };
      }
      function updateFetti(context, fetti) {
        fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
        fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
        fetti.velocity *= fetti.decay;
        if (fetti.flat) {
          fetti.wobble = 0;
          fetti.wobbleX = fetti.x + 10 * fetti.scalar;
          fetti.wobbleY = fetti.y + 10 * fetti.scalar;
          fetti.tiltSin = 0;
          fetti.tiltCos = 0;
          fetti.random = 1;
        } else {
          fetti.wobble += fetti.wobbleSpeed;
          fetti.wobbleX = fetti.x + 10 * fetti.scalar * Math.cos(fetti.wobble);
          fetti.wobbleY = fetti.y + 10 * fetti.scalar * Math.sin(fetti.wobble);
          fetti.tiltAngle += 0.1;
          fetti.tiltSin = Math.sin(fetti.tiltAngle);
          fetti.tiltCos = Math.cos(fetti.tiltAngle);
          fetti.random = Math.random() + 2;
        }
        var progress = fetti.tick++ / fetti.totalTicks;
        var x1 = fetti.x + fetti.random * fetti.tiltCos;
        var y1 = fetti.y + fetti.random * fetti.tiltSin;
        var x2 = fetti.wobbleX + fetti.random * fetti.tiltCos;
        var y2 = fetti.wobbleY + fetti.random * fetti.tiltSin;
        context.fillStyle = "rgba(" + fetti.color.r + ", " + fetti.color.g + ", " + fetti.color.b + ", " + (1 - progress) + ")";
        context.beginPath();
        if (canUsePaths && fetti.shape.type === "path" && typeof fetti.shape.path === "string" && Array.isArray(fetti.shape.matrix)) {
          context.fill(transformPath2D(
            fetti.shape.path,
            fetti.shape.matrix,
            fetti.x,
            fetti.y,
            Math.abs(x2 - x1) * 0.1,
            Math.abs(y2 - y1) * 0.1,
            Math.PI / 10 * fetti.wobble
          ));
        } else if (fetti.shape.type === "bitmap") {
          var rotation = Math.PI / 10 * fetti.wobble;
          var scaleX = Math.abs(x2 - x1) * 0.1;
          var scaleY = Math.abs(y2 - y1) * 0.1;
          var width = fetti.shape.bitmap.width * fetti.scalar;
          var height = fetti.shape.bitmap.height * fetti.scalar;
          var matrix = new DOMMatrix([
            Math.cos(rotation) * scaleX,
            Math.sin(rotation) * scaleX,
            -Math.sin(rotation) * scaleY,
            Math.cos(rotation) * scaleY,
            fetti.x,
            fetti.y
          ]);
          matrix.multiplySelf(new DOMMatrix(fetti.shape.matrix));
          var pattern = context.createPattern(bitmapMapper.transform(fetti.shape.bitmap), "no-repeat");
          pattern.setTransform(matrix);
          context.globalAlpha = 1 - progress;
          context.fillStyle = pattern;
          context.fillRect(
            fetti.x - width / 2,
            fetti.y - height / 2,
            width,
            height
          );
          context.globalAlpha = 1;
        } else if (fetti.shape === "circle") {
          context.ellipse ? context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) : ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
        } else if (fetti.shape === "star") {
          var rot = Math.PI / 2 * 3;
          var innerRadius = 4 * fetti.scalar;
          var outerRadius = 8 * fetti.scalar;
          var x3 = fetti.x;
          var y3 = fetti.y;
          var spikes = 5;
          var step = Math.PI / spikes;
          while (spikes--) {
            x3 = fetti.x + Math.cos(rot) * outerRadius;
            y3 = fetti.y + Math.sin(rot) * outerRadius;
            context.lineTo(x3, y3);
            rot += step;
            x3 = fetti.x + Math.cos(rot) * innerRadius;
            y3 = fetti.y + Math.sin(rot) * innerRadius;
            context.lineTo(x3, y3);
            rot += step;
          }
        } else {
          context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
          context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
          context.lineTo(Math.floor(x2), Math.floor(y2));
          context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
        }
        context.closePath();
        context.fill();
        return fetti.tick < fetti.totalTicks;
      }
      function animate(canvas, fettis, resizer, size, done) {
        var animatingFettis = fettis.slice();
        var context = canvas.getContext("2d");
        var animationFrame;
        var destroy2;
        var prom = promise(function(resolve) {
          function onDone() {
            animationFrame = destroy2 = null;
            context.clearRect(0, 0, size.width, size.height);
            bitmapMapper.clear();
            done();
            resolve();
          }
          function update() {
            if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
              size.width = canvas.width = workerSize.width;
              size.height = canvas.height = workerSize.height;
            }
            if (!size.width && !size.height) {
              resizer(canvas);
              size.width = canvas.width;
              size.height = canvas.height;
            }
            context.clearRect(0, 0, size.width, size.height);
            animatingFettis = animatingFettis.filter(function(fetti) {
              return updateFetti(context, fetti);
            });
            if (animatingFettis.length) {
              animationFrame = raf2.frame(update);
            } else {
              onDone();
            }
          }
          animationFrame = raf2.frame(update);
          destroy2 = onDone;
        });
        return {
          addFettis: function(fettis2) {
            animatingFettis = animatingFettis.concat(fettis2);
            return prom;
          },
          canvas,
          promise: prom,
          reset: function() {
            if (animationFrame) {
              raf2.cancel(animationFrame);
            }
            if (destroy2) {
              destroy2();
            }
          }
        };
      }
      function confettiCannon(canvas, globalOpts) {
        var isLibCanvas = !canvas;
        var allowResize = !!prop(globalOpts || {}, "resize");
        var hasResizeEventRegistered = false;
        var globalDisableForReducedMotion = prop(globalOpts, "disableForReducedMotion", Boolean);
        var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, "useWorker");
        var worker = shouldUseWorker ? getWorker() : null;
        var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
        var initialized = canvas && worker ? !!canvas.__confetti_initialized : false;
        var preferLessMotion = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion)").matches;
        var animationObj;
        function fireLocal(options, size, done) {
          var particleCount = prop(options, "particleCount", onlyPositiveInt);
          var angle = prop(options, "angle", Number);
          var spread = prop(options, "spread", Number);
          var startVelocity = prop(options, "startVelocity", Number);
          var decay = prop(options, "decay", Number);
          var gravity = prop(options, "gravity", Number);
          var drift = prop(options, "drift", Number);
          var colors = prop(options, "colors", colorsToRgb);
          var ticks = prop(options, "ticks", Number);
          var shapes = prop(options, "shapes");
          var scalar = prop(options, "scalar");
          var flat = !!prop(options, "flat");
          var origin = getOrigin(options);
          var temp = particleCount;
          var fettis = [];
          var startX = canvas.width * origin.x;
          var startY = canvas.height * origin.y;
          while (temp--) {
            fettis.push(
              randomPhysics({
                x: startX,
                y: startY,
                angle,
                spread,
                startVelocity,
                color: colors[temp % colors.length],
                shape: shapes[randomInt(0, shapes.length)],
                ticks,
                decay,
                gravity,
                drift,
                scalar,
                flat
              })
            );
          }
          if (animationObj) {
            return animationObj.addFettis(fettis);
          }
          animationObj = animate(canvas, fettis, resizer, size, done);
          return animationObj.promise;
        }
        function fire(options) {
          var disableForReducedMotion = globalDisableForReducedMotion || prop(options, "disableForReducedMotion", Boolean);
          var zIndex = prop(options, "zIndex", Number);
          if (disableForReducedMotion && preferLessMotion) {
            return promise(function(resolve) {
              resolve();
            });
          }
          if (isLibCanvas && animationObj) {
            canvas = animationObj.canvas;
          } else if (isLibCanvas && !canvas) {
            canvas = getCanvas(zIndex);
            document.body.appendChild(canvas);
          }
          if (allowResize && !initialized) {
            resizer(canvas);
          }
          var size = {
            width: canvas.width,
            height: canvas.height
          };
          if (worker && !initialized) {
            worker.init(canvas);
          }
          initialized = true;
          if (worker) {
            canvas.__confetti_initialized = true;
          }
          function onResize() {
            if (worker) {
              var obj = {
                getBoundingClientRect: function() {
                  if (!isLibCanvas) {
                    return canvas.getBoundingClientRect();
                  }
                }
              };
              resizer(obj);
              worker.postMessage({
                resize: {
                  width: obj.width,
                  height: obj.height
                }
              });
              return;
            }
            size.width = size.height = null;
          }
          function done() {
            animationObj = null;
            if (allowResize) {
              hasResizeEventRegistered = false;
              global2.removeEventListener("resize", onResize);
            }
            if (isLibCanvas && canvas) {
              if (document.body.contains(canvas)) {
                document.body.removeChild(canvas);
              }
              canvas = null;
              initialized = false;
            }
          }
          if (allowResize && !hasResizeEventRegistered) {
            hasResizeEventRegistered = true;
            global2.addEventListener("resize", onResize, false);
          }
          if (worker) {
            return worker.fire(options, size, done);
          }
          return fireLocal(options, size, done);
        }
        fire.reset = function() {
          if (worker) {
            worker.reset();
          }
          if (animationObj) {
            animationObj.reset();
          }
        };
        return fire;
      }
      var defaultFire;
      function getDefaultFire() {
        if (!defaultFire) {
          defaultFire = confettiCannon(null, { useWorker: true, resize: true });
        }
        return defaultFire;
      }
      function transformPath2D(pathString, pathMatrix, x2, y2, scaleX, scaleY, rotation) {
        var path2d = new Path2D(pathString);
        var t1 = new Path2D();
        t1.addPath(path2d, new DOMMatrix(pathMatrix));
        var t2 = new Path2D();
        t2.addPath(t1, new DOMMatrix([
          Math.cos(rotation) * scaleX,
          Math.sin(rotation) * scaleX,
          -Math.sin(rotation) * scaleY,
          Math.cos(rotation) * scaleY,
          x2,
          y2
        ]));
        return t2;
      }
      function shapeFromPath(pathData) {
        if (!canUsePaths) {
          throw new Error("path confetti are not supported in this browser");
        }
        var path, matrix;
        if (typeof pathData === "string") {
          path = pathData;
        } else {
          path = pathData.path;
          matrix = pathData.matrix;
        }
        var path2d = new Path2D(path);
        var tempCanvas = document.createElement("canvas");
        var tempCtx = tempCanvas.getContext("2d");
        if (!matrix) {
          var maxSize = 1e3;
          var minX = maxSize;
          var minY = maxSize;
          var maxX = 0;
          var maxY = 0;
          var width, height;
          for (var x2 = 0; x2 < maxSize; x2 += 2) {
            for (var y2 = 0; y2 < maxSize; y2 += 2) {
              if (tempCtx.isPointInPath(path2d, x2, y2, "nonzero")) {
                minX = Math.min(minX, x2);
                minY = Math.min(minY, y2);
                maxX = Math.max(maxX, x2);
                maxY = Math.max(maxY, y2);
              }
            }
          }
          width = maxX - minX;
          height = maxY - minY;
          var maxDesiredSize = 10;
          var scale = Math.min(maxDesiredSize / width, maxDesiredSize / height);
          matrix = [
            scale,
            0,
            0,
            scale,
            -Math.round(width / 2 + minX) * scale,
            -Math.round(height / 2 + minY) * scale
          ];
        }
        return {
          type: "path",
          path,
          matrix
        };
      }
      function shapeFromText(textData) {
        var text, scalar = 1, color = "#000000", fontFamily = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
        if (typeof textData === "string") {
          text = textData;
        } else {
          text = textData.text;
          scalar = "scalar" in textData ? textData.scalar : scalar;
          fontFamily = "fontFamily" in textData ? textData.fontFamily : fontFamily;
          color = "color" in textData ? textData.color : color;
        }
        var fontSize = 10 * scalar;
        var font = "" + fontSize + "px " + fontFamily;
        var canvas = new OffscreenCanvas(fontSize, fontSize);
        var ctx = canvas.getContext("2d");
        ctx.font = font;
        var size = ctx.measureText(text);
        var width = Math.ceil(size.actualBoundingBoxRight + size.actualBoundingBoxLeft);
        var height = Math.ceil(size.actualBoundingBoxAscent + size.actualBoundingBoxDescent);
        var padding = 2;
        var x2 = size.actualBoundingBoxLeft + padding;
        var y2 = size.actualBoundingBoxAscent + padding;
        width += padding + padding;
        height += padding + padding;
        canvas = new OffscreenCanvas(width, height);
        ctx = canvas.getContext("2d");
        ctx.font = font;
        ctx.fillStyle = color;
        ctx.fillText(text, x2, y2);
        var scale = 1 / scalar;
        return {
          type: "bitmap",
          // TODO these probably need to be transfered for workers
          bitmap: canvas.transferToImageBitmap(),
          matrix: [scale, 0, 0, scale, -width * scale / 2, -height * scale / 2]
        };
      }
      module2.exports = function() {
        return getDefaultFire().apply(this, arguments);
      };
      module2.exports.reset = function() {
        getDefaultFire().reset();
      };
      module2.exports.create = confettiCannon;
      module2.exports.shapeFromPath = shapeFromPath;
      module2.exports.shapeFromText = shapeFromText;
    })(function() {
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      return this || {};
    }(), module, false);
    const confettiModule = module.exports;
    module.exports.create;
    function ConfettiView({ team_members, settings, viewport, isEditor }) {
      var _a2, _b;
      const [ProLayoutComponent, setProLayoutComponent] = reactExports.useState(null);
      const commonStyles = getCommonStyles(settings);
      const [responsiveStyles, setResponsiveStyles] = reactExports.useState(
        getResponsiveStyles(settings, viewport, isEditor)
      );
      reactExports.useMemo(() => {
        setProLayoutComponent(() => getProLayout(settings));
      }, [(_a2 = settings == null ? void 0 : settings.selectedLayout) == null ? void 0 : _a2.type, (_b = settings == null ? void 0 : settings.selectedLayout) == null ? void 0 : _b.value]);
      reactExports.useEffect(() => {
        const updateResponsiveStyles = () => {
          setResponsiveStyles(getResponsiveStyles(settings, viewport, isEditor));
        };
        if (isEditor) {
          updateResponsiveStyles();
        } else {
          updateResponsiveStyles();
          window.addEventListener("resize", updateResponsiveStyles);
          return () => {
            window.removeEventListener("resize", updateResponsiveStyles);
          };
        }
      }, [settings, isEditor, viewport]);
      reactExports.useEffect(() => {
        const end = Date.now() + 60 * 1e3;
        const colors = ["#bb0000", "#ffffff"];
        function frame() {
          confettiModule({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors
          });
          confettiModule({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors
          });
          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        }
        frame();
      }, []);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "tsteam-container",
          style: {
            ...commonStyles,
            ...responsiveStyles
          },
          children: team_members && team_members.length > 0 ? team_members.map((member, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: ProLayoutComponent ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            ProLayoutComponent,
            {
              settings,
              id: member.post_id,
              imageUrl: member.meta_data.image,
              title: member.title,
              subtitle: member.meta_data.designation,
              description: member.description,
              socialIcons: member.socialIcons || [],
              details: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Details,
                {
                  settings,
                  member
                }
              )
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Layout,
            {
              settings,
              layoutType: settings.selectedLayout.value,
              id: member.post_id,
              imageUrl: member.meta_data.image,
              title: member.title,
              subtitle: member.meta_data.designation,
              description: member.description,
              socialIcons: member.socialIcons || [],
              details: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Details,
                {
                  settings,
                  member
                }
              )
            }
          ) }, index)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No team members found." })
        }
      );
    }
    function elementorLoader(initializeReact2) {
      if (!window.elementorFrontend || !window.elementorFrontend.isEditMode()) {
        console.log("Not in Elementor editor mode. Skipping Elementor-specific logic.");
        return;
      }
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node2) => {
            if (node2.nodeType === Node.ELEMENT_NODE) {
              const newShowcaseElements = node2.querySelectorAll(".tsteam-showcase");
              newShowcaseElements.forEach((element) => {
                initializeReact2(element);
              });
            }
          });
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });
      jQuery(window).on("elementor/widget/render_content", function(event, widget) {
        const widgetContainer = widget.$el[0];
        if (widgetContainer.classList.contains("tsteam-showcase")) {
          initializeReact2(widgetContainer);
        }
      });
    }
    function gutenbergLoader(initializeReact2) {
      if (window.wp && window.wp.data && window.wp.data.select) {
        const isGutenbergEditor = !!window.wp.data.select("core/edit-post") || !!window.wp.data.select("core/editor");
        if (isGutenbergEditor) {
          const observer = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
              if (mutation.type === "childList") {
                mutation.addedNodes.forEach((node2) => {
                  if (node2.nodeType === Node.ELEMENT_NODE) {
                    const showcaseElements = node2.matches(".tsteam-showcase") ? [node2] : node2.querySelectorAll(".tsteam-showcase");
                    showcaseElements.forEach((element) => {
                      console.log("Initializing React for element:", element);
                      initializeReact2(element);
                    });
                  }
                });
              }
            });
          });
          observer.observe(document.body, { childList: true, subtree: true });
        } else {
          console.error("Not running in Gutenberg editor. Skipping MutationObserver.");
        }
      } else {
        console.error("window.wp or wp.data.select is not available. Skipping MutationObserver.");
      }
    }
    function wpbakeryLoader(initializeReact2) {
      const isWPBakeryEditor = () => {
        if (window.vc_iframe) {
          return true;
        }
        if (typeof window.vc !== "undefined") {
          return true;
        }
        if (document.body.classList.contains("vc_editor")) {
          return true;
        }
        return false;
      };
      if (!isWPBakeryEditor()) {
        console.log("Not in WPBakery editor mode. Skipping WPBakery-specific logic.");
        return;
      }
      console.log("WPBakery editor detected. Initializing...");
      const initializeAllShowcases = () => {
        const showcaseElements = document.querySelectorAll(".tsteam-showcase");
        showcaseElements.forEach((element) => {
          if (!element.hasAttribute("data-tsteam-initialized")) {
            element.setAttribute("data-tsteam-initialized", "true");
            initializeReact2(element);
          }
        });
      };
      setTimeout(() => {
        initializeAllShowcases();
      }, 500);
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node2) => {
            if (node2.nodeType === Node.ELEMENT_NODE) {
              if (node2.classList && node2.classList.contains("tsteam-showcase")) {
                if (!node2.hasAttribute("data-tsteam-initialized")) {
                  node2.setAttribute("data-tsteam-initialized", "true");
                  initializeReact2(node2);
                }
              }
              const newShowcaseElements = node2.querySelectorAll(".tsteam-showcase");
              newShowcaseElements.forEach((element) => {
                if (!element.hasAttribute("data-tsteam-initialized")) {
                  element.setAttribute("data-tsteam-initialized", "true");
                  initializeReact2(element);
                }
              });
            }
          });
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });
      if (window.vc && window.vc.events) {
        window.vc.events.on("shortcodes:add", function(model) {
          console.log("WPBakery element added");
          setTimeout(() => {
            initializeAllShowcases();
          }, 300);
        });
        window.vc.events.on("shortcodes:update", function(model) {
          console.log("WPBakery element updated");
          setTimeout(() => {
            initializeAllShowcases();
          }, 300);
        });
        window.vc.events.on("app.render", function() {
          console.log("WPBakery app rendered");
          setTimeout(() => {
            initializeAllShowcases();
          }, 500);
        });
      }
      if (window.vc_iframe) {
        window.vc_iframe.on("ready", function() {
          console.log("WPBakery iframe ready");
          setTimeout(() => {
            initializeAllShowcases();
          }, 500);
        });
      }
      jQuery(document).on("vc-reload", function() {
        console.log("WPBakery reload triggered");
        setTimeout(() => {
          initializeAllShowcases();
        }, 300);
      });
    }
    function initializeReact(element) {
      const id2 = element.getAttribute("data-id");
      if (!id2) {
        console.error("No data-id found for element:", element);
        return;
      }
      createRoot$1(element).render(
        /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Frontend$4, { id: id2 }) })
      );
    }
    function initializeAllWidgets() {
      const showcaseElements = document.querySelectorAll(".tsteam-showcase");
      showcaseElements.forEach((element) => {
        initializeReact(element);
      });
    }
    document.addEventListener("DOMContentLoaded", () => {
      if (window.elementorFrontend && window.elementorFrontend.isEditMode()) {
        elementorLoader(initializeReact);
      }
      if (window.vc_iframe || typeof window.vc !== "undefined" || document.body.classList.contains("vc_editor")) {
        wpbakeryLoader(initializeReact);
      }
      if (window.wp && window.wp.data && window.wp.data.select) {
        const isGutenbergEditor = !!window.wp.data.select("core/edit-post") || !!window.wp.data.select("core/editor");
        if (isGutenbergEditor) {
          gutenbergLoader(initializeReact);
        }
      }
      if (!(window.elementorFrontend && window.elementorFrontend.isEditMode()) && !(window.wp && window.wp.data && window.wp.data.select)) {
        initializeAllWidgets();
      }
    });
    function Frontend$4({ id: id2 }) {
      const isPro2 = tsteam_settings.is_pro;
      const [teamMembers, setTeamMembers] = reactExports.useState([]);
      const [settings, setSettings] = reactExports.useState({});
      const devMode = Boolean(tsteam_settings.devmode);
      const [isHovering, setIsHovering] = reactExports.useState(false);
      reactExports.useEffect(() => {
        if (id2) {
          fetchData(`tsteam/team_showcase/fetch/single`, (response) => {
            if (response && response.success) {
              setTeamMembers(response.data.meta_data.team_members);
              const showcaseSettings = JSON.parse(response.data.meta_data.showcase_settings);
              setSettings(showcaseSettings);
            } else {
              console.error("Error fetching post data:", response);
            }
          }, { post_id: id2 });
        } else {
          console.error("No post_id found");
        }
      }, [id2]);
      const handleCopySettings = async () => {
        try {
          const { postID, ...settingsToCopy } = settings;
          const serializedSettings = JSON.stringify(settingsToCopy);
          await navigator.clipboard.writeText(serializedSettings);
          toastNotification("success", `Design Copied`, `The design has copied successfully`);
        } catch (error) {
          console.error("Failed to copy settings to clipboard:", error);
        }
      };
      const renderViewComponent = () => {
        var _a2, _b, _c, _d, _e, _f;
        if (((_a2 = settings == null ? void 0 : settings.selectedView) == null ? void 0 : _a2.value) === "flex") {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(FlexView, { team_members: teamMembers, settings });
        } else if (((_b = settings == null ? void 0 : settings.selectedView) == null ? void 0 : _b.value) === "carousel") {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselView, { team_members: teamMembers, settings });
        } else if (((_c = settings == null ? void 0 : settings.selectedView) == null ? void 0 : _c.value) === "marquee" && isPro2) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(MarqueeView, { team_members: teamMembers, settings });
        } else if (((_d = settings == null ? void 0 : settings.selectedView) == null ? void 0 : _d.value) === "table" && isPro2) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(TableView, { team_members: teamMembers, settings });
        } else if (((_e = settings == null ? void 0 : settings.selectedView) == null ? void 0 : _e.value) === "filterable" && isPro2) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(FilterableView, { team_members: teamMembers, settings });
        } else if (((_f = settings == null ? void 0 : settings.selectedView) == null ? void 0 : _f.value) === "confetti" && isPro2) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ConfettiView, { team_members: teamMembers, settings });
        } else {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(StaticView, { team_members: teamMembers, settings });
        }
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: devMode ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => setIsHovering(false),
          children: [
            renderViewComponent(),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                id: "tsteam__copy-design",
                style: {
                  opacity: isHovering ? "1" : "0",
                  visibility: isHovering ? "visible" : "hidden"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    className: "bg-purple-600 text-white px-4 py-2 rounded-full flex items-center shadow-lg z-50",
                    onClick: handleCopySettings,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copy Design" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 ml-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" }) })
                    ]
                  }
                )
              }
            )
          ]
        }
      ) }) : renderViewComponent() });
    }
    const getSocialIcon$3 = (channel) => {
      const icons = {
        facebook: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" }) }),
        twitter: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" }) }),
        instagram: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" }) }),
        linkedin: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" }) }),
        youtube: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4 h-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" })
        ] }),
        github: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4 h-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }) })
      };
      return icons[channel.toLowerCase()] || null;
    };
    const SocialIcons$3 = ({ socialIcons, settings }) => {
      let data = socialIcons;
      if (typeof socialIcons === "string") {
        try {
          data = JSON.parse(socialIcons);
        } catch (error) {
          console.error("Error parsing socialIcons:", error);
          return null;
        }
      }
      if (!data || !Array.isArray(data)) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-4", children: data.map((item, index) => {
        var _a2, _b, _c, _d, _e, _f;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: item.link,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-white hover:text-white text-sm bg-purple-500 hover:bg-purple-600 rounded-full p-2 transition-colors",
            style: {
              backgroundColor: (_b = (_a2 = settings == null ? void 0 : settings.layout) == null ? void 0 : _a2.color) == null ? void 0 : _b.socialIconBg,
              color: (_d = (_c = settings == null ? void 0 : settings.layout) == null ? void 0 : _c.color) == null ? void 0 : _d.socialIcon,
              borderRadius: (_f = (_e = settings == null ? void 0 : settings.layout) == null ? void 0 : _e.borderRadius) == null ? void 0 : _f.socialIcon
            },
            children: getSocialIcon$3(item.socialChannel)
          },
          index
        );
      }) });
    };
    const TsMemberName = ({ children, className = "" }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h3",
        {
          className: `text-[16px] font-semibold mb-0.5 tsteam-member__name ${className} `,
          children
        }
      );
    };
    const TsMemberDesignation = ({ children, className = "" }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: `tsteam-member__designation ${className} `, children: [
        " ",
        children,
        " "
      ] });
    };
    const TsMemberDescription = ({ children, className = "" }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `tsteam-member__description ${className} `, children: [
        " ",
        children,
        " "
      ] });
    };
    const Card = ({
      settings,
      id: id2,
      imageUrl,
      title,
      subtitle,
      description,
      socialIcons,
      details,
      animationConfig
    }) => {
      console.log("Passing animationConfig to Card:", animationConfig);
      const renderContent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            id: `${title == null ? void 0 : title.replace(/\s+/g, "-").toLowerCase()}-${id2}`,
            src: imageUrl,
            alt: title,
            className: `tsteam-member__image w-32 max-h-[8rem] rounded-xl -mb-12 z-10 relative shadow-2xl object-cover ${details ? "cursor-pointer" : ""}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-full max-w-sm bg-white rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] overflow-hidden tsteam-card-container ",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pt-16 pb-5 text-center flex flex-col items-center", children: [
              title && /* @__PURE__ */ jsxRuntimeExports.jsxs(TsMemberName, { children: [
                " ",
                title,
                " "
              ] }),
              subtitle && /* @__PURE__ */ jsxRuntimeExports.jsxs(TsMemberDesignation, { children: [
                " ",
                subtitle,
                " "
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "tscard__separator" }),
              description && /* @__PURE__ */ jsxRuntimeExports.jsxs(TsMemberDescription, { children: [
                " ",
                description,
                " "
              ] }),
              details && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex items-center justify-center", children: details }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SocialIcons$3, { socialIcons, settings })
            ] })
          }
        )
      ] }) });
      if (!animationConfig) {
        return renderContent();
      }
      if (animationConfig.type === "single") {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: animationConfig.class, children: renderContent() });
      }
      if (animationConfig.type === "wrapper") {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: animationConfig.parent, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: animationConfig.wrapper, children: renderContent() }) });
      }
      return renderContent();
    };
    const Frontend$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: Card
    }, Symbol.toStringTag, { value: "Module" }));
    const getSocialIcon$2 = (channel) => {
      const icons = {
        facebook: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" }) }),
        twitter: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" }) }),
        instagram: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" }) }),
        linkedin: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" }) }),
        youtube: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4 h-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" })
        ] }),
        github: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4 h-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }) })
      };
      return icons[channel.toLowerCase()] || null;
    };
    const SocialIcons$2 = ({ socialIcons, settings }) => {
      let data = socialIcons;
      if (typeof socialIcons === "string") {
        try {
          data = JSON.parse(socialIcons);
        } catch (error) {
          console.error("Error parsing socialIcons:", error);
          return null;
        }
      }
      if (!data || !Array.isArray(data)) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-4", children: data.map((item, index) => {
        var _a2, _b, _c, _d, _e, _f;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: item.link,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-white hover:text-white text-sm bg-purple-500 hover:bg-purple-600 rounded-full p-2 transition-colors",
            style: {
              backgroundColor: (_b = (_a2 = settings == null ? void 0 : settings.layout) == null ? void 0 : _a2.color) == null ? void 0 : _b.socialIconBg,
              color: (_d = (_c = settings == null ? void 0 : settings.layout) == null ? void 0 : _c.color) == null ? void 0 : _d.socialIcon,
              borderRadius: (_f = (_e = settings == null ? void 0 : settings.layout) == null ? void 0 : _e.borderRadius) == null ? void 0 : _f.socialIcon
            },
            children: getSocialIcon$2(item.socialChannel)
          },
          index
        );
      }) });
    };
    const HorizontalCard = ({
      settings,
      id: id2,
      imageUrl,
      title,
      subtitle,
      description,
      socialIcons,
      details,
      animationConfig
    }) => {
      const renderContent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tshorizontal__border-color", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-start p-6 gap-6 tsteam-horizontalcard-container",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                id: `${title == null ? void 0 : title.replace(/\s+/g, "-").toLowerCase()}-${id2}`,
                src: imageUrl,
                alt: title,
                className: `tsteam-member__image w-24 h-24 object-cover shadow-lg ${details ? "cursor-pointer" : ""}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  title && /* @__PURE__ */ jsxRuntimeExports.jsx(TsMemberName, { children: title }),
                  subtitle && /* @__PURE__ */ jsxRuntimeExports.jsxs(TsMemberDesignation, { children: [
                    " ",
                    subtitle,
                    " "
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SocialIcons$2, { socialIcons, settings }) })
              ] }),
              description && /* @__PURE__ */ jsxRuntimeExports.jsxs(TsMemberDescription, { children: [
                " ",
                description,
                " "
              ] }),
              details && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: details })
            ] })
          ]
        }
      ) }) }) });
      if (!animationConfig) {
        return renderContent();
      }
      if (animationConfig.type === "single") {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: animationConfig.class, children: renderContent() });
      }
      if (animationConfig.type === "wrapper") {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: animationConfig.parent, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: animationConfig.wrapper, children: renderContent() }) });
      }
      return renderContent();
    };
    const Frontend$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: HorizontalCard
    }, Symbol.toStringTag, { value: "Module" }));
    const getSocialIcon$1 = (channel) => {
      const icons = {
        facebook: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" }) }),
        twitter: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" }) }),
        instagram: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" }) }),
        linkedin: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" }) }),
        youtube: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4 h-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" })
        ] }),
        github: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4 h-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }) })
      };
      return icons[channel.toLowerCase()] || null;
    };
    const SocialIcons$1 = ({ socialIcons, settings }) => {
      let data = socialIcons;
      if (typeof socialIcons === "string") {
        try {
          data = JSON.parse(socialIcons);
        } catch (error) {
          console.error("Error parsing socialIcons:", error);
          return null;
        }
      }
      if (!data || !Array.isArray(data)) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-4", children: data.map((item, index) => {
        var _a2, _b, _c, _d, _e, _f;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: item.link,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "bg-white hover:text-gray-200 text-sm text-purple-500 hover:bg-purple-600 rounded-full p-2 transition-colors",
            style: {
              backgroundColor: (_b = (_a2 = settings == null ? void 0 : settings.layout) == null ? void 0 : _a2.color) == null ? void 0 : _b.socialIconBg,
              color: (_d = (_c = settings == null ? void 0 : settings.layout) == null ? void 0 : _c.color) == null ? void 0 : _d.socialIcon,
              borderRadius: (_f = (_e = settings == null ? void 0 : settings.layout) == null ? void 0 : _e.borderRadius) == null ? void 0 : _f.socialIcon
            },
            children: getSocialIcon$1(item.socialChannel)
          },
          index
        );
      }) });
    };
    const getTsTeamOverlayCardImageStyle = (settings) => {
      var _a2, _b, _c, _d, _e, _f;
      const tsTeamOverlayImageCSS = {};
      if ((_b = (_a2 = settings == null ? void 0 : settings.tsoverlay) == null ? void 0 : _a2.size) == null ? void 0 : _b.image) {
        tsTeamOverlayImageCSS["width"] = (_d = (_c = settings == null ? void 0 : settings.tsoverlay) == null ? void 0 : _c.size) == null ? void 0 : _d.image;
        tsTeamOverlayImageCSS["height"] = (_f = (_e = settings == null ? void 0 : settings.tsoverlay) == null ? void 0 : _e.size) == null ? void 0 : _f.image;
      } else {
        tsTeamOverlayImageCSS["width"] = "400px";
        tsTeamOverlayImageCSS["height"] = "400px";
      }
      return tsTeamOverlayImageCSS;
    };
    const getTsTeamOverlayCardOverlayStyle = (settings) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i2, _j, _k, _l, _m, _n, _o, _p, _q, _r;
      const tsTeamOverlayCardOverlayCSS = {};
      tsTeamOverlayCardOverlayCSS["border-style"] = "solid";
      if ((_a2 = settings == null ? void 0 : settings.tsoverlay) == null ? void 0 : _a2.borderRadius) {
        tsTeamOverlayCardOverlayCSS["border-radius"] = (_b = settings == null ? void 0 : settings.tsoverlay) == null ? void 0 : _b.borderRadius;
      }
      if ((_d = (_c = settings == null ? void 0 : settings.tsoverlay) == null ? void 0 : _c.color) == null ? void 0 : _d.overlay) {
        tsTeamOverlayCardOverlayCSS["background"] = (_f = (_e = settings == null ? void 0 : settings.tsoverlay) == null ? void 0 : _e.color) == null ? void 0 : _f.overlay;
      }
      if ((_g = settings == null ? void 0 : settings.tsoverlay) == null ? void 0 : _g.opacity) {
        tsTeamOverlayCardOverlayCSS["opacity"] = Number((_h = settings == null ? void 0 : settings.tsoverlay) == null ? void 0 : _h.opacity) / 100;
      }
      if ((_i2 = settings == null ? void 0 : settings.tsoverlay) == null ? void 0 : _i2.borderWidth) {
        tsTeamOverlayCardOverlayCSS["border-width"] = (_j = settings == null ? void 0 : settings.tsoverlay) == null ? void 0 : _j.borderWidth;
      }
      if ((_k = settings == null ? void 0 : settings.tsoverlay) == null ? void 0 : _k.borderWidth) {
        tsTeamOverlayCardOverlayCSS["border-color"] = (_l = settings == null ? void 0 : settings.tsoverlay) == null ? void 0 : _l.borderColor;
      }
      if ((_n = (_m = settings == null ? void 0 : settings.tsoverlay) == null ? void 0 : _m.size) == null ? void 0 : _n.image) {
        tsTeamOverlayCardOverlayCSS["width"] = (_p = (_o = settings == null ? void 0 : settings.tsoverlay) == null ? void 0 : _o.size) == null ? void 0 : _p.image;
        tsTeamOverlayCardOverlayCSS["height"] = (_r = (_q = settings == null ? void 0 : settings.tsoverlay) == null ? void 0 : _q.size) == null ? void 0 : _r.image;
      } else {
        tsTeamOverlayCardOverlayCSS["width"] = "400px";
        tsTeamOverlayCardOverlayCSS["height"] = "400px";
      }
      return tsTeamOverlayCardOverlayCSS;
    };
    const GenerateOverlayCardStyle = ({ settings = {} }) => {
      const cssGenerator = new CSSGenerator();
      cssGenerator.addClassStyles(
        ".tsteam-tsoverlaycard .tsteam-member__image",
        getTsTeamOverlayCardImageStyle(settings)
      );
      cssGenerator.addClassStyles(
        ".tsteam-tsoverlaycard:hover .tsteam-tsoverlaycard__overlay",
        getTsTeamOverlayCardOverlayStyle(settings)
      );
      const generatedCSS = cssGenerator.generateCSS();
      return /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: generatedCSS });
    };
    const OverlayCard = ({
      settings,
      id: id2,
      imageUrl,
      title,
      subtitle,
      description,
      socialIcons,
      details,
      animationConfig
    }) => {
      const renderContent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GenerateOverlayCardStyle, { settings }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group w-full aspect-square tsteam-tsoverlaycard", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              id: `${title == null ? void 0 : title.replace(/\s+/g, "-").toLowerCase()}-${id2}`,
              src: imageUrl,
              alt: title,
              className: `tsteam-member__image object-cover rounded-3xl ${details ? "cursor-pointer" : ""}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `tsteam-tsoverlaycard__overlay absolute inset-0 rounded-3xl flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out`,
              children: [
                title && /* @__PURE__ */ jsxRuntimeExports.jsxs(TsMemberName, { children: [
                  " ",
                  title,
                  " "
                ] }),
                subtitle && /* @__PURE__ */ jsxRuntimeExports.jsxs(TsMemberDesignation, { children: [
                  " ",
                  subtitle,
                  " "
                ] }),
                description && /* @__PURE__ */ jsxRuntimeExports.jsxs(TsMemberDescription, { children: [
                  " ",
                  description,
                  " "
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out delay-150", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SocialIcons$1, { socialIcons, settings }) }),
                details && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      id: `${title == null ? void 0 : title.replace(/\s+/g, "-").toLowerCase()}-${id2}`,
                      className: "tsteam-member-button__details bg-white text-black p-3 mt-4 rounded-md border-none",
                      children: "Details"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out delay-200", children: details })
                ] })
              ]
            }
          )
        ] })
      ] });
      if (!animationConfig) {
        return renderContent();
      }
      if (animationConfig.type === "single") {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: animationConfig.class, children: renderContent() });
      }
      if (animationConfig.type === "wrapper") {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: animationConfig.parent, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: animationConfig.wrapper, children: renderContent() }) });
      }
      return renderContent();
    };
    const Frontend$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: OverlayCard
    }, Symbol.toStringTag, { value: "Module" }));
    const getSocialIcon = (channel) => {
      const icons = {
        facebook: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" }) }),
        twitter: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" }) }),
        instagram: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" }) }),
        linkedin: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", className: "w-4 h-4 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" }) }),
        youtube: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4 h-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" })
        ] }),
        github: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4 h-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }) })
      };
      return icons[channel.toLowerCase()] || null;
    };
    const SocialIcons = ({ socialIcons, settings }) => {
      let data = socialIcons;
      if (typeof socialIcons === "string") {
        try {
          data = JSON.parse(socialIcons);
        } catch (error) {
          console.error("Error parsing socialIcons:", error);
          return null;
        }
      }
      if (!data || !Array.isArray(data)) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-4", children: data.map((item, index) => {
        var _a2, _b, _c, _d, _e, _f;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: item.link,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "bg-white hover:text-gray-200 text-sm text-purple-500 hover:bg-white rounded-full p-2 transition-colors",
            style: {
              backgroundColor: (_b = (_a2 = settings == null ? void 0 : settings.layout) == null ? void 0 : _a2.color) == null ? void 0 : _b.socialIconBg,
              color: (_d = (_c = settings == null ? void 0 : settings.layout) == null ? void 0 : _c.color) == null ? void 0 : _d.socialIcon,
              borderRadius: (_f = (_e = settings == null ? void 0 : settings.layout) == null ? void 0 : _e.borderRadius) == null ? void 0 : _f.socialIcon
            },
            children: getSocialIcon(item.socialChannel)
          },
          index
        );
      }) });
    };
    const Tiles = ({
      settings,
      id: id2,
      imageUrl,
      title,
      subtitle,
      socialIcons,
      details,
      animationConfig
    }) => {
      const renderContent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " group tsteam-tiles-container ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            id: `${title == null ? void 0 : title.replace(/\s+/g, "-").toLowerCase()}-${id2}`,
            src: imageUrl,
            alt: title,
            className: ` object-cover w-[216px] h-[216px] block !rounded-full tsteam-member__image mb-5 bg-white ${details ? "cursor-pointer" : ""}`
          }
        ),
        title && /* @__PURE__ */ jsxRuntimeExports.jsx(TsMemberName, { className: "group-hover:text-white text-[22px] ", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(TsMemberDesignation, { className: "group-hover:text-white text-sm", children: subtitle }),
        details && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex items-center justify-center", children: details }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 my-4 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SocialIcons, { socialIcons, settings }) })
      ] });
      if (!animationConfig) {
        return renderContent();
      }
      if (animationConfig.type === "single") {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: animationConfig.class, children: renderContent() });
      }
      if (animationConfig.type === "wrapper") {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: animationConfig.parent, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: animationConfig.wrapper, children: renderContent() }) });
      }
      return renderContent();
    };
    const Frontend = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: Tiles
    }, Symbol.toStringTag, { value: "Module" }));
    const register_controls$3 = () => {
      return {
        controls: [
          {
            type: "divider",
            label: "Card Styles"
          },
          {
            type: "color",
            label: "Separator Color",
            name: "tscard.color.separator"
          }
        ]
      };
    };
    const Editor$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      register_controls: register_controls$3
    }, Symbol.toStringTag, { value: "Module" }));
    const register_controls$2 = () => {
      return {
        controls: [
          {
            type: "divider",
            label: "Horizontal Card Styles"
          },
          {
            type: "color",
            label: "Hover Border Color",
            name: "tshorizontal.borderColor.hover"
          }
        ]
      };
    };
    const Editor$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      register_controls: register_controls$2
    }, Symbol.toStringTag, { value: "Module" }));
    const register_controls$1 = () => {
      return {
        controls: [
          {
            type: "divider",
            label: "Overlay Styles"
          },
          {
            type: "color",
            label: "Overlay Color",
            name: "tsoverlay.color.overlay"
          },
          {
            type: "slider",
            label: "Image Size",
            name: "tsoverlay.size.image",
            range: {
              min: 0,
              max: 450
            },
            unit: "px"
          },
          {
            type: "slider",
            label: "Overlay Opacity",
            name: "tsoverlay.opacity",
            range: "10"
          },
          {
            type: "slider",
            label: "Overlay Border Width",
            name: "tsoverlay.borderWidth",
            range: "100",
            unit: "px"
          },
          {
            type: "slider",
            label: "Overlay Radius",
            name: "tsoverlay.borderRadius",
            range: "100",
            unit: "px"
          },
          {
            type: "color",
            label: "Overlay Border Color",
            name: "tsoverlay.borderColor"
          }
        ]
      };
    };
    const Editor$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      register_controls: register_controls$1
    }, Symbol.toStringTag, { value: "Module" }));
    const register_controls = () => {
      return {
        controls: [
          {
            type: "divider",
            label: "Tiles Styles"
          },
          {
            type: "color",
            label: "Hover Background Color",
            name: "tiles.hover.color.background"
          },
          {
            type: "color",
            label: "Hover Member Name Color",
            name: "tiles.hover.color.memberName"
          },
          {
            type: "color",
            label: "Hover Member Designation Color",
            name: "tiles.hover.color.memberDesignation"
          }
        ]
      };
    };
    const Editor = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      register_controls
    }, Symbol.toStringTag, { value: "Module" }));
  }
});
export default require_frontend();

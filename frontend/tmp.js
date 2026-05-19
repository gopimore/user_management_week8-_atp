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
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports, module) {
      "use strict";
      (function() {
        function defineDeprecationWarning(methodName, info) {
          Object.defineProperty(Component4.prototype, methodName, {
            get: function() {
              console.warn(
                "%s(...) is deprecated in plain JavaScript React classes. %s",
                info[0],
                info[1]
              );
            }
          });
        }
        function getIteratorFn(maybeIterable) {
          if (null === maybeIterable || "object" !== typeof maybeIterable)
            return null;
          maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
          return "function" === typeof maybeIterable ? maybeIterable : null;
        }
        function warnNoop(publicInstance, callerName) {
          publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
          var warningKey = publicInstance + "." + callerName;
          didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
            "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
            callerName,
            publicInstance
          ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
        }
        function Component4(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        function ComponentDummy() {
        }
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        function noop() {
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          try {
            testStringCoercion(value);
            var JSCompiler_inline_result = false;
          } catch (e) {
            JSCompiler_inline_result = true;
          }
          if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(
              JSCompiler_inline_result,
              "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
              JSCompiler_inline_result$jscomp$0
            );
            return testStringCoercion(value);
          }
        }
        function getComponentNameFromType(type) {
          if (null == type) return null;
          if ("function" === typeof type)
            return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
          if ("string" === typeof type) return type;
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
              return "Activity";
          }
          if ("object" === typeof type)
            switch ("number" === typeof type.tag && console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ), type.$$typeof) {
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
              case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
              case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
              case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                  return getComponentNameFromType(type(innerType));
                } catch (x) {
                }
            }
          return null;
        }
        function getTaskName(type) {
          if (type === REACT_FRAGMENT_TYPE) return "<>";
          if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
            return "<...>";
          try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
          } catch (x) {
            return "<...>";
          }
        }
        function getOwner() {
          var dispatcher = ReactSharedInternals.A;
          return null === dispatcher ? null : dispatcher.getOwner();
        }
        function UnknownOwner() {
          return Error("react-stack-top-frame");
        }
        function hasValidKey(config) {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return false;
          }
          return void 0 !== config.key;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
              displayName
            ));
          }
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function elementRefGetterWithDeprecationWarning() {
          var componentName = getComponentNameFromType(this.type);
          didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
            "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
          ));
          componentName = this.props.ref;
          return void 0 !== componentName ? componentName : null;
        }
        function ReactElement(type, key, props, owner, debugStack, debugTask) {
          var refProp = props.ref;
          type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            props,
            _owner: owner
          };
          null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: false,
            get: elementRefGetterWithDeprecationWarning
          }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
          type._store = {};
          Object.defineProperty(type._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: 0
          });
          Object.defineProperty(type, "_debugInfo", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: null
          });
          Object.defineProperty(type, "_debugStack", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: debugStack
          });
          Object.defineProperty(type, "_debugTask", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: debugTask
          });
          Object.freeze && (Object.freeze(type.props), Object.freeze(type));
          return type;
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          newKey = ReactElement(
            oldElement.type,
            newKey,
            oldElement.props,
            oldElement._owner,
            oldElement._debugStack,
            oldElement._debugTask
          );
          oldElement._store && (newKey._store.validated = oldElement._store.validated);
          return newKey;
        }
        function validateChildKeys(node) {
          isValidElement2(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement2(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
        }
        function isValidElement2(object) {
          return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function escape(key) {
          var escaperLookup = { "=": "=0", ":": "=2" };
          return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
          });
        }
        function getElementKey(element, index) {
          return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
        }
        function resolveThenable(thenable) {
          switch (thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
            default:
              switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
                function(fulfilledValue) {
                  "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                },
                function(error) {
                  "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                }
              )), thenable.status) {
                case "fulfilled":
                  return thenable.value;
                case "rejected":
                  throw thenable.reason;
              }
          }
          throw thenable;
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if ("undefined" === type || "boolean" === type) children = null;
          var invokeCallback = false;
          if (null === children) invokeCallback = true;
          else
            switch (type) {
              case "bigint":
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                    break;
                  case REACT_LAZY_TYPE:
                    return invokeCallback = children._init, mapIntoArray(
                      invokeCallback(children._payload),
                      array,
                      escapedPrefix,
                      nameSoFar,
                      callback
                    );
                }
            }
          if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
              return c;
            })) : null != callback && (isValidElement2(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
              callback,
              escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
                userProvidedKeyEscapeRegex,
                "$&/"
              ) + "/") + childKey
            ), "" !== nameSoFar && null != invokeCallback && isValidElement2(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
          }
          invokeCallback = 0;
          childKey = "" === nameSoFar ? "." : nameSoFar + ":";
          if (isArrayImpl(children))
            for (var i = 0; i < children.length; i++)
              nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
                nameSoFar,
                array,
                escapedPrefix,
                type,
                callback
              );
          else if (i = getIteratorFn(children), "function" === typeof i)
            for (i === children.entries && (didWarnAboutMaps || console.warn(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
              nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
                nameSoFar,
                array,
                escapedPrefix,
                type,
                callback
              );
          else if ("object" === type) {
            if ("function" === typeof children.then)
              return mapIntoArray(
                resolveThenable(children),
                array,
                escapedPrefix,
                nameSoFar,
                callback
              );
            array = String(children);
            throw Error(
              "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
            );
          }
          return invokeCallback;
        }
        function mapChildren(children, func, context) {
          if (null == children) return children;
          var result = [], count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function lazyInitializer(payload) {
          if (-1 === payload._status) {
            var ioInfo = payload._ioInfo;
            null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
            ioInfo = payload._result;
            var thenable = ioInfo();
            thenable.then(
              function(moduleObject) {
                if (0 === payload._status || -1 === payload._status) {
                  payload._status = 1;
                  payload._result = moduleObject;
                  var _ioInfo = payload._ioInfo;
                  null != _ioInfo && (_ioInfo.end = performance.now());
                  void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
                }
              },
              function(error) {
                if (0 === payload._status || -1 === payload._status) {
                  payload._status = 2;
                  payload._result = error;
                  var _ioInfo2 = payload._ioInfo;
                  null != _ioInfo2 && (_ioInfo2.end = performance.now());
                  void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                }
              }
            );
            ioInfo = payload._ioInfo;
            if (null != ioInfo) {
              ioInfo.value = thenable;
              var displayName = thenable.displayName;
              "string" === typeof displayName && (ioInfo.name = displayName);
            }
            -1 === payload._status && (payload._status = 0, payload._result = thenable);
          }
          if (1 === payload._status)
            return ioInfo = payload._result, void 0 === ioInfo && console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
              ioInfo
            ), "default" in ioInfo || console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
              ioInfo
            ), ioInfo.default;
          throw payload._result;
        }
        function resolveDispatcher() {
          var dispatcher = ReactSharedInternals.H;
          null === dispatcher && console.error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
          );
          return dispatcher;
        }
        function releaseAsyncTransition() {
          ReactSharedInternals.asyncTransitions--;
        }
        function enqueueTask(task) {
          if (null === enqueueTaskImpl)
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              enqueueTaskImpl = (module && module[requireString]).call(
                module,
                "timers"
              ).setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                ));
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          return enqueueTaskImpl(task);
        }
        function aggregateErrors(errors) {
          return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
        }
        function popActScope(prevActQueue, prevActScopeDepth) {
          prevActScopeDepth !== actScopeDepth - 1 && console.error(
            "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
          );
          actScopeDepth = prevActScopeDepth;
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          var queue = ReactSharedInternals.actQueue;
          if (null !== queue)
            if (0 !== queue.length)
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                });
                return;
              } catch (error) {
                ReactSharedInternals.thrownErrors.push(error);
              }
            else ReactSharedInternals.actQueue = null;
          0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
        }
        function flushActQueue(queue) {
          if (!isFlushing) {
            isFlushing = true;
            var i = 0;
            try {
              for (; i < queue.length; i++) {
                var callback = queue[i];
                do {
                  ReactSharedInternals.didUsePromise = false;
                  var continuation = callback(false);
                  if (null !== continuation) {
                    if (ReactSharedInternals.didUsePromise) {
                      queue[i] = callback;
                      queue.splice(0, i);
                      return;
                    }
                    callback = continuation;
                  } else break;
                } while (1);
              }
              queue.length = 0;
            } catch (error) {
              queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
            } finally {
              isFlushing = false;
            }
          }
        }
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
          isMounted: function() {
            return false;
          },
          enqueueForceUpdate: function(publicInstance) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function(publicInstance) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function(publicInstance) {
            warnNoop(publicInstance, "setState");
          }
        }, assign = Object.assign, emptyObject = {};
        Object.freeze(emptyObject);
        Component4.prototype.isReactComponent = {};
        Component4.prototype.setState = function(partialState, callback) {
          if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
            throw Error(
              "takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component4.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        var deprecatedAPIs = {
          isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
          ],
          replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
          ]
        };
        for (fnName in deprecatedAPIs)
          deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        ComponentDummy.prototype = Component4.prototype;
        deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
        deprecatedAPIs.constructor = PureComponent;
        assign(deprecatedAPIs, Component4.prototype);
        deprecatedAPIs.isPureReactComponent = true;
        var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = {
          H: null,
          A: null,
          T: null,
          S: null,
          actQueue: null,
          asyncTransitions: 0,
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false,
          didUsePromise: false,
          thrownErrors: [],
          getCurrentStack: null,
          recentlyCreatedOwnerStacks: 0
        }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
          return null;
        };
        deprecatedAPIs = {
          react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
          }
        };
        var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
        var didWarnAboutElementRef = {};
        var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
          deprecatedAPIs,
          UnknownOwner
        )();
        var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
        var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
          if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
            var event = new window.ErrorEvent("error", {
              bubbles: true,
              cancelable: true,
              message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
              error
            });
            if (!window.dispatchEvent(event)) return;
          } else if ("object" === typeof process && "function" === typeof process.emit) {
            process.emit("uncaughtException", error);
            return;
          }
          console.error(error);
        }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
          queueMicrotask(function() {
            return queueMicrotask(callback);
          });
        } : enqueueTask;
        deprecatedAPIs = Object.freeze({
          __proto__: null,
          c: function(size) {
            return resolveDispatcher().useMemoCache(size);
          }
        });
        var fnName = {
          map: mapChildren,
          forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(
              children,
              function() {
                forEachFunc.apply(this, arguments);
              },
              forEachContext
            );
          },
          count: function(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          },
          toArray: function(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          },
          only: function(children) {
            if (!isValidElement2(children))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return children;
          }
        };
        exports.Activity = REACT_ACTIVITY_TYPE;
        exports.Children = fnName;
        exports.Component = Component4;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
        exports.__COMPILER_RUNTIME = deprecatedAPIs;
        exports.act = function(callback) {
          var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
          actScopeDepth++;
          var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
          try {
            var result = callback();
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
          if (0 < ReactSharedInternals.thrownErrors.length)
            throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
          if (null !== result && "object" === typeof result && "function" === typeof result.then) {
            var thenable = result;
            queueSeveralMicrotasks(function() {
              didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
                "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
              ));
            });
            return {
              then: function(resolve, reject) {
                didAwaitActCall = true;
                thenable.then(
                  function(returnValue) {
                    popActScope(prevActQueue, prevActScopeDepth);
                    if (0 === prevActScopeDepth) {
                      try {
                        flushActQueue(queue), enqueueTask(function() {
                          return recursivelyFlushAsyncActWork(
                            returnValue,
                            resolve,
                            reject
                          );
                        });
                      } catch (error$0) {
                        ReactSharedInternals.thrownErrors.push(error$0);
                      }
                      if (0 < ReactSharedInternals.thrownErrors.length) {
                        var _thrownError = aggregateErrors(
                          ReactSharedInternals.thrownErrors
                        );
                        ReactSharedInternals.thrownErrors.length = 0;
                        reject(_thrownError);
                      }
                    } else resolve(returnValue);
                  },
                  function(error) {
                    popActScope(prevActQueue, prevActScopeDepth);
                    0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                      ReactSharedInternals.thrownErrors
                    ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                  }
                );
              }
            };
          }
          var returnValue$jscomp$0 = result;
          popActScope(prevActQueue, prevActScopeDepth);
          0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
            ));
          }), ReactSharedInternals.actQueue = null);
          if (0 < ReactSharedInternals.thrownErrors.length)
            throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
                return recursivelyFlushAsyncActWork(
                  returnValue$jscomp$0,
                  resolve,
                  reject
                );
              })) : resolve(returnValue$jscomp$0);
            }
          };
        };
        exports.cache = function(fn) {
          return function() {
            return fn.apply(null, arguments);
          };
        };
        exports.cacheSignal = function() {
          return null;
        };
        exports.captureOwnerStack = function() {
          var getCurrentStack = ReactSharedInternals.getCurrentStack;
          return null === getCurrentStack ? null : getCurrentStack();
        };
        exports.cloneElement = function(element, config, children) {
          if (null === element || void 0 === element)
            throw Error(
              "The argument must be a React element, but you passed " + element + "."
            );
          var props = assign({}, element.props), key = element.key, owner = element._owner;
          if (null != config) {
            var JSCompiler_inline_result;
            a: {
              if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
                config,
                "ref"
              ).get) && JSCompiler_inline_result.isReactWarning) {
                JSCompiler_inline_result = false;
                break a;
              }
              JSCompiler_inline_result = void 0 !== config.ref;
            }
            JSCompiler_inline_result && (owner = getOwner());
            hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
            for (propName in config)
              !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
          }
          var propName = arguments.length - 2;
          if (1 === propName) props.children = children;
          else if (1 < propName) {
            JSCompiler_inline_result = Array(propName);
            for (var i = 0; i < propName; i++)
              JSCompiler_inline_result[i] = arguments[i + 2];
            props.children = JSCompiler_inline_result;
          }
          props = ReactElement(
            element.type,
            key,
            props,
            owner,
            element._debugStack,
            element._debugTask
          );
          for (key = 2; key < arguments.length; key++)
            validateChildKeys(arguments[key]);
          return props;
        };
        exports.createContext = function(defaultValue) {
          defaultValue = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          };
          defaultValue.Provider = defaultValue;
          defaultValue.Consumer = {
            $$typeof: REACT_CONSUMER_TYPE,
            _context: defaultValue
          };
          defaultValue._currentRenderer = null;
          defaultValue._currentRenderer2 = null;
          return defaultValue;
        };
        exports.createElement = function(type, config, children) {
          for (var i = 2; i < arguments.length; i++)
            validateChildKeys(arguments[i]);
          i = {};
          var key = null;
          if (null != config)
            for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
              "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
            )), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)
              hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
          var childrenLength = arguments.length - 2;
          if (1 === childrenLength) i.children = children;
          else if (1 < childrenLength) {
            for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
              childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
          }
          if (type && type.defaultProps)
            for (propName in childrenLength = type.defaultProps, childrenLength)
              void 0 === i[propName] && (i[propName] = childrenLength[propName]);
          key && defineKeyPropWarningGetter(
            i,
            "function" === typeof type ? type.displayName || type.name || "Unknown" : type
          );
          var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
          return ReactElement(
            type,
            key,
            i,
            getOwner(),
            propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
            propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
          );
        };
        exports.createRef = function() {
          var refObject = { current: null };
          Object.seal(refObject);
          return refObject;
        };
        exports.forwardRef = function(render) {
          null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
          ) : "function" !== typeof render ? console.error(
            "forwardRef requires a render function but was given %s.",
            null === render ? "null" : typeof render
          ) : 0 !== render.length && 2 !== render.length && console.error(
            "forwardRef render functions accept exactly two parameters: props and ref. %s",
            1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
          );
          null != render && null != render.defaultProps && console.error(
            "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
          );
          var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
          Object.defineProperty(elementType, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name;
              render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
            }
          });
          return elementType;
        };
        exports.isValidElement = isValidElement2;
        exports.lazy = function(ctor) {
          ctor = { _status: -1, _result: ctor };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: ctor,
            _init: lazyInitializer
          }, ioInfo = {
            name: "lazy",
            start: -1,
            end: -1,
            value: null,
            owner: null,
            debugStack: Error("react-stack-top-frame"),
            debugTask: console.createTask ? console.createTask("lazy()") : null
          };
          ctor._ioInfo = ioInfo;
          lazyType._debugInfo = [{ awaited: ioInfo }];
          return lazyType;
        };
        exports.memo = function(type, compare) {
          null == type && console.error(
            "memo: The first argument must be a component. Instead received: %s",
            null === type ? "null" : typeof type
          );
          compare = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: void 0 === compare ? null : compare
          };
          var ownName;
          Object.defineProperty(compare, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name;
              type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
            }
          });
          return compare;
        };
        exports.startTransition = function(scope) {
          var prevTransition = ReactSharedInternals.T, currentTransition = {};
          currentTransition._updatedFibers = /* @__PURE__ */ new Set();
          ReactSharedInternals.T = currentTransition;
          try {
            var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
          } catch (error) {
            reportGlobalError(error);
          } finally {
            null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            )), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error(
              "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
            ), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
          }
        };
        exports.unstable_useCacheRefresh = function() {
          return resolveDispatcher().useCacheRefresh();
        };
        exports.use = function(usable) {
          return resolveDispatcher().use(usable);
        };
        exports.useActionState = function(action, initialState, permalink) {
          return resolveDispatcher().useActionState(
            action,
            initialState,
            permalink
          );
        };
        exports.useCallback = function(callback, deps) {
          return resolveDispatcher().useCallback(callback, deps);
        };
        exports.useContext = function(Context) {
          var dispatcher = resolveDispatcher();
          Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
            "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
          );
          return dispatcher.useContext(Context);
        };
        exports.useDebugValue = function(value, formatterFn) {
          return resolveDispatcher().useDebugValue(value, formatterFn);
        };
        exports.useDeferredValue = function(value, initialValue) {
          return resolveDispatcher().useDeferredValue(value, initialValue);
        };
        exports.useEffect = function(create, deps) {
          null == create && console.warn(
            "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
          return resolveDispatcher().useEffect(create, deps);
        };
        exports.useEffectEvent = function(callback) {
          return resolveDispatcher().useEffectEvent(callback);
        };
        exports.useId = function() {
          return resolveDispatcher().useId();
        };
        exports.useImperativeHandle = function(ref, create, deps) {
          return resolveDispatcher().useImperativeHandle(ref, create, deps);
        };
        exports.useInsertionEffect = function(create, deps) {
          null == create && console.warn(
            "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
          return resolveDispatcher().useInsertionEffect(create, deps);
        };
        exports.useLayoutEffect = function(create, deps) {
          null == create && console.warn(
            "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
          return resolveDispatcher().useLayoutEffect(create, deps);
        };
        exports.useMemo = function(create, deps) {
          return resolveDispatcher().useMemo(create, deps);
        };
        exports.useOptimistic = function(passthrough, reducer) {
          return resolveDispatcher().useOptimistic(passthrough, reducer);
        };
        exports.useReducer = function(reducer, initialArg, init) {
          return resolveDispatcher().useReducer(reducer, initialArg, init);
        };
        exports.useRef = function(initialValue) {
          return resolveDispatcher().useRef(initialValue);
        };
        exports.useState = function(initialState) {
          return resolveDispatcher().useState(initialState);
        };
        exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
          return resolveDispatcher().useSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          );
        };
        exports.useTransition = function() {
          return resolveDispatcher().useTransition();
        };
        exports.version = "19.2.4";
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
      })();
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // src/components/User.jsx
  var import_react2 = __toESM(require_react(), 1);

  // node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs
  var React2 = __toESM(require_react(), 1);
  var React22 = __toESM(require_react(), 1);
  var React3 = __toESM(require_react(), 1);
  var React4 = __toESM(require_react(), 1);
  var React9 = __toESM(require_react(), 1);
  var React8 = __toESM(require_react(), 1);
  var React7 = __toESM(require_react(), 1);
  var React6 = __toESM(require_react(), 1);
  var React5 = __toESM(require_react(), 1);
  var React10 = __toESM(require_react(), 1);
  var React11 = __toESM(require_react(), 1);
  var import_meta = {};
  function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function warning(cond, message) {
    if (!cond) {
      if (typeof console !== "undefined") console.warn(message);
      try {
        throw new Error(message);
      } catch (e) {
      }
    }
  }
  function createPath({
    pathname = "/",
    search = "",
    hash = ""
  }) {
    if (search && search !== "?")
      pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#")
      pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
  }
  function parsePath(path) {
    let parsedPath = {};
    if (path) {
      let hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        parsedPath.hash = path.substring(hashIndex);
        path = path.substring(0, hashIndex);
      }
      let searchIndex = path.indexOf("?");
      if (searchIndex >= 0) {
        parsedPath.search = path.substring(searchIndex);
        path = path.substring(0, searchIndex);
      }
      if (path) {
        parsedPath.pathname = path;
      }
    }
    return parsedPath;
  }
  var _map;
  _map = /* @__PURE__ */ new WeakMap();
  function matchRoutes(routes, locationArg, basename = "/") {
    return matchRoutesImpl(routes, locationArg, basename, false);
  }
  function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
    let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) {
      return null;
    }
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    let matches = null;
    for (let i = 0; matches == null && i < branches.length; ++i) {
      let decoded = decodePath(pathname);
      matches = matchRouteBranch(
        branches[i],
        decoded,
        allowPartial
      );
    }
    return matches;
  }
  function convertRouteMatchToUiMatch(match, loaderData) {
    let { route, pathname, params } = match;
    return {
      id: route.id,
      pathname,
      params,
      data: loaderData[route.id],
      loaderData: loaderData[route.id],
      handle: route.handle
    };
  }
  function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "", _hasParentOptionalSegments = false) {
    let flattenRoute = (route, index, hasParentOptionalSegments = _hasParentOptionalSegments, relativePath) => {
      let meta = {
        relativePath: relativePath === void 0 ? route.path || "" : relativePath,
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index,
        route
      };
      if (meta.relativePath.startsWith("/")) {
        if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
          return;
        }
        invariant(
          meta.relativePath.startsWith(parentPath),
          `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
        );
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }
      let path = joinPaths([parentPath, meta.relativePath]);
      let routesMeta = parentsMeta.concat(meta);
      if (route.children && route.children.length > 0) {
        invariant(
          // Our types know better, but runtime JS may not!
          // @ts-expect-error
          route.index !== true,
          `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
        );
        flattenRoutes(
          route.children,
          branches,
          routesMeta,
          path,
          hasParentOptionalSegments
        );
      }
      if (route.path == null && !route.index) {
        return;
      }
      branches.push({
        path,
        score: computeScore(path, route.index),
        routesMeta
      });
    };
    routes.forEach((route, index) => {
      if (route.path === "" || !route.path?.includes("?")) {
        flattenRoute(route, index);
      } else {
        for (let exploded of explodeOptionalSegments(route.path)) {
          flattenRoute(route, index, true, exploded);
        }
      }
    });
    return branches;
  }
  function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments;
    let isOptional = first.endsWith("?");
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) {
      return isOptional ? [required, ""] : [required];
    }
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    result.push(
      ...restExploded.map(
        (subpath) => subpath === "" ? required : [required, subpath].join("/")
      )
    );
    if (isOptional) {
      result.push(...restExploded);
    }
    return result.map(
      (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
    );
  }
  function rankRouteBranches(branches) {
    branches.sort(
      (a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(
        a.routesMeta.map((meta) => meta.childrenIndex),
        b.routesMeta.map((meta) => meta.childrenIndex)
      )
    );
  }
  var paramRe = /^:[\w-]+$/;
  var dynamicSegmentValue = 3;
  var indexRouteValue = 2;
  var emptySegmentValue = 1;
  var staticSegmentValue = 10;
  var splatPenalty = -2;
  var isSplat = (s) => s === "*";
  function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }
    if (index) {
      initialScore += indexRouteValue;
    }
    return segments.filter((s) => !isSplat(s)).reduce(
      (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
      initialScore
    );
  }
  function compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
    return siblings ? (
      // If two routes are siblings, we should try to match the earlier sibling
      // first. This allows people to have fine-grained control over the matching
      // behavior by simply putting routes with identical paths in the order they
      // want them tried.
      a[a.length - 1] - b[b.length - 1]
    ) : (
      // Otherwise, it doesn't really make sense to rank non-siblings by index,
      // so they sort equally.
      0
    );
  }
  function matchRouteBranch(branch, pathname, allowPartial = false) {
    let { routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for (let i = 0; i < routesMeta.length; ++i) {
      let meta = routesMeta[i];
      let end = i === routesMeta.length - 1;
      let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      let match = matchPath(
        { path: meta.relativePath, caseSensitive: meta.caseSensitive, end },
        remainingPathname
      );
      let route = meta.route;
      if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
        match = matchPath(
          {
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: false
          },
          remainingPathname
        );
      }
      if (!match) {
        return null;
      }
      Object.assign(matchedParams, match.params);
      matches.push({
        // TODO: Can this as be avoided?
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match.pathname]),
        pathnameBase: normalizePathname(
          joinPaths([matchedPathname, match.pathnameBase])
        ),
        route
      });
      if (match.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
      }
    }
    return matches;
  }
  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = { path: pattern, caseSensitive: false, end: true };
    }
    let [matcher, compiledParams] = compilePath(
      pattern.path,
      pattern.caseSensitive,
      pattern.end
    );
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce(
      (memo2, { paramName, isOptional }, index) => {
        if (paramName === "*") {
          let splatValue = captureGroups[index] || "";
          pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        const value = captureGroups[index];
        if (isOptional && !value) {
          memo2[paramName] = void 0;
        } else {
          memo2[paramName] = (value || "").replace(/%2F/g, "/");
        }
        return memo2;
      },
      {}
    );
    return {
      params,
      pathname: matchedPathname,
      pathnameBase,
      pattern
    };
  }
  function compilePath(path, caseSensitive = false, end = true) {
    warning(
      path === "*" || !path.endsWith("*") || path.endsWith("/*"),
      `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
    );
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
      /\/:([\w-]+)(\?)?/g,
      (match, paramName, isOptional, index, str) => {
        params.push({ paramName, isOptional: isOptional != null });
        if (isOptional) {
          let nextChar = str.charAt(index + match.length);
          if (nextChar && nextChar !== "/") {
            return "/([^\\/]*)";
          }
          return "(?:/([^\\/]*))?";
        }
        return "/([^\\/]+)";
      }
    ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    if (path.endsWith("*")) {
      params.push({ paramName: "*" });
      regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else if (end) {
      regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
      regexpSource += "(?:(?=\\/|$))";
    } else {
    }
    let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
    return [matcher, params];
  }
  function decodePath(value) {
    try {
      return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
    } catch (error) {
      warning(
        false,
        `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
      );
      return value;
    }
  }
  function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
      return null;
    }
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
      return null;
    }
    return pathname.slice(startIndex) || "/";
  }
  var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  function resolvePath(to, fromPathname = "/") {
    let {
      pathname: toPathname,
      search = "",
      hash = ""
    } = typeof to === "string" ? parsePath(to) : to;
    let pathname;
    if (toPathname) {
      toPathname = toPathname.replace(/\/\/+/g, "/");
      if (toPathname.startsWith("/")) {
        pathname = resolvePathname(toPathname.substring(1), "/");
      } else {
        pathname = resolvePathname(toPathname, fromPathname);
      }
    } else {
      pathname = fromPathname;
    }
    return {
      pathname,
      search: normalizeSearch(search),
      hash: normalizeHash(hash)
    };
  }
  function resolvePathname(relativePath, fromPathname) {
    let segments = fromPathname.replace(/\/+$/, "").split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment) => {
      if (segment === "..") {
        if (segments.length > 1) segments.pop();
      } else if (segment !== ".") {
        segments.push(segment);
      }
    });
    return segments.length > 1 ? segments.join("/") : "/";
  }
  function getInvalidPathError(char, field, dest, path) {
    return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
      path
    )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function getPathContributingMatches(matches) {
    return matches.filter(
      (match, index) => index === 0 || match.route.path && match.route.path.length > 0
    );
  }
  function getResolveToMatches(matches) {
    let pathMatches = getPathContributingMatches(matches);
    return pathMatches.map(
      (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
    );
  }
  function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
    let to;
    if (typeof toArg === "string") {
      to = parsePath(toArg);
    } else {
      to = { ...toArg };
      invariant(
        !to.pathname || !to.pathname.includes("?"),
        getInvalidPathError("?", "pathname", "search", to)
      );
      invariant(
        !to.pathname || !to.pathname.includes("#"),
        getInvalidPathError("#", "pathname", "hash", to)
      );
      invariant(
        !to.search || !to.search.includes("#"),
        getInvalidPathError("#", "search", "hash", to)
      );
    }
    let isEmptyPath = toArg === "" || to.pathname === "";
    let toPathname = isEmptyPath ? "/" : to.pathname;
    let from;
    if (toPathname == null) {
      from = locationPathname;
    } else {
      let routePathnameIndex = routePathnames.length - 1;
      if (!isPathRelative && toPathname.startsWith("..")) {
        let toSegments = toPathname.split("/");
        while (toSegments[0] === "..") {
          toSegments.shift();
          routePathnameIndex -= 1;
        }
        to.pathname = toSegments.join("/");
      }
      from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to, from);
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
      path.pathname += "/";
    }
    return path;
  }
  var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
  var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
  var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
  var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
  var ErrorResponseImpl = class {
    constructor(status, statusText, data2, internal = false) {
      this.status = status;
      this.statusText = statusText || "";
      this.internal = internal;
      if (data2 instanceof Error) {
        this.data = data2.toString();
        this.error = data2;
      } else {
        this.data = data2;
      }
    }
  };
  function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
  }
  function getRoutePattern(matches) {
    return matches.map((m) => m.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
  }
  var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  function parseToInfo(_to, basename) {
    let to = _to;
    if (typeof to !== "string" || !ABSOLUTE_URL_REGEX.test(to)) {
      return {
        absoluteURL: void 0,
        isExternal: false,
        to
      };
    }
    let absoluteURL = to;
    let isExternal = false;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
        warning(
          false,
          `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    }
    return {
      absoluteURL,
      isExternal,
      to
    };
  }
  var objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var validMutationMethodsArr = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  var validMutationMethods = new Set(
    validMutationMethodsArr
  );
  var validRequestMethodsArr = [
    "GET",
    ...validMutationMethodsArr
  ];
  var validRequestMethods = new Set(validRequestMethodsArr);
  var DataRouterContext = React2.createContext(null);
  DataRouterContext.displayName = "DataRouter";
  var DataRouterStateContext = React2.createContext(null);
  DataRouterStateContext.displayName = "DataRouterState";
  var RSCRouterContext = React2.createContext(false);
  var ViewTransitionContext = React2.createContext({
    isTransitioning: false
  });
  ViewTransitionContext.displayName = "ViewTransition";
  var FetchersContext = React2.createContext(
    /* @__PURE__ */ new Map()
  );
  FetchersContext.displayName = "Fetchers";
  var AwaitContext = React2.createContext(null);
  AwaitContext.displayName = "Await";
  var NavigationContext = React2.createContext(
    null
  );
  NavigationContext.displayName = "Navigation";
  var LocationContext = React2.createContext(
    null
  );
  LocationContext.displayName = "Location";
  var RouteContext = React2.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  RouteContext.displayName = "Route";
  var RouteErrorContext = React2.createContext(null);
  RouteErrorContext.displayName = "RouteError";
  var ENABLE_DEV_WARNINGS = true;
  var ERROR_DIGEST_BASE = "REACT_ROUTER_ERROR";
  var ERROR_DIGEST_REDIRECT = "REDIRECT";
  var ERROR_DIGEST_ROUTE_ERROR_RESPONSE = "ROUTE_ERROR_RESPONSE";
  function decodeRedirectErrorDigest(digest) {
    if (digest.startsWith(`${ERROR_DIGEST_BASE}:${ERROR_DIGEST_REDIRECT}:{`)) {
      try {
        let parsed = JSON.parse(digest.slice(28));
        if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string" && typeof parsed.location === "string" && typeof parsed.reloadDocument === "boolean" && typeof parsed.replace === "boolean") {
          return parsed;
        }
      } catch {
      }
    }
  }
  function decodeRouteErrorResponseDigest(digest) {
    if (digest.startsWith(
      `${ERROR_DIGEST_BASE}:${ERROR_DIGEST_ROUTE_ERROR_RESPONSE}:{`
    )) {
      try {
        let parsed = JSON.parse(digest.slice(40));
        if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string") {
          return new ErrorResponseImpl(
            parsed.status,
            parsed.statusText,
            parsed.data
          );
        }
      } catch {
      }
    }
  }
  function useHref(to, { relative } = {}) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useHref() may be used only in the context of a <Router> component.`
    );
    let { basename, navigator } = React22.useContext(NavigationContext);
    let { hash, pathname, search } = useResolvedPath(to, { relative });
    let joinedPathname = pathname;
    if (basename !== "/") {
      joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
    }
    return navigator.createHref({ pathname: joinedPathname, search, hash });
  }
  function useInRouterContext() {
    return React22.useContext(LocationContext) != null;
  }
  function useLocation() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useLocation() may be used only in the context of a <Router> component.`
    );
    return React22.useContext(LocationContext).location;
  }
  var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
  function useIsomorphicLayoutEffect(cb) {
    let isStatic = React22.useContext(NavigationContext).static;
    if (!isStatic) {
      React22.useLayoutEffect(cb);
    }
  }
  function useNavigate() {
    let { isDataRoute } = React22.useContext(RouteContext);
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
  }
  function useNavigateUnstable() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useNavigate() may be used only in the context of a <Router> component.`
    );
    let dataRouterContext = React22.useContext(DataRouterContext);
    let { basename, navigator } = React22.useContext(NavigationContext);
    let { matches } = React22.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    let activeRef = React22.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React22.useCallback(
      (to, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to === "number") {
          navigator.go(to);
          return;
        }
        let path = resolveTo(
          to,
          JSON.parse(routePathnamesJson),
          locationPathname,
          options.relative === "path"
        );
        if (dataRouterContext == null && basename !== "/") {
          path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
        }
        (!!options.replace ? navigator.replace : navigator.push)(
          path,
          options.state,
          options
        );
      },
      [
        basename,
        navigator,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
      ]
    );
    return navigate;
  }
  var OutletContext = React22.createContext(null);
  function useResolvedPath(to, { relative } = {}) {
    let { matches } = React22.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    return React22.useMemo(
      () => resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        relative === "path"
      ),
      [to, routePathnamesJson, locationPathname, relative]
    );
  }
  function useRoutesImpl(routes, locationArg, dataRouterOpts) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useRoutes() may be used only in the context of a <Router> component.`
    );
    let { navigator } = React22.useContext(NavigationContext);
    let { matches: parentMatches } = React22.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    if (ENABLE_DEV_WARNINGS) {
      let parentPath = parentRoute && parentRoute.path || "";
      warningOnce(
        parentPathname,
        !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
      );
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
      let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      invariant(
        parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
      );
      location = parsedLocationArg;
    } else {
      location = locationFromContext;
    }
    let pathname = location.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
      let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
      let segments = pathname.replace(/^\//, "").split("/");
      remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = matchRoutes(routes, { pathname: remainingPathname });
    if (ENABLE_DEV_WARNINGS) {
      warning(
        parentRoute || matches != null,
        `No routes matched location "${location.pathname}${location.search}${location.hash}" `
      );
      warning(
        matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
        `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
      );
    }
    let renderedMatches = _renderMatches(
      matches && matches.map(
        (match) => Object.assign({}, match, {
          params: Object.assign({}, parentParams, match.params),
          pathname: joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes.
            // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
            // `new URL()` internally and we need to prevent it from treating
            // them as separators
            navigator.encodeLocation ? navigator.encodeLocation(
              match.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
            ).pathname : match.pathname
          ]),
          pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes
            // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
            // `new URL()` internally and we need to prevent it from treating
            // them as separators
            navigator.encodeLocation ? navigator.encodeLocation(
              match.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
            ).pathname : match.pathnameBase
          ])
        })
      ),
      parentMatches,
      dataRouterOpts
    );
    if (locationArg && renderedMatches) {
      return /* @__PURE__ */ React22.createElement(
        LocationContext.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              unstable_mask: void 0,
              ...location
            },
            navigationType: "POP"
            /* Pop */
          }
        },
        renderedMatches
      );
    }
    return renderedMatches;
  }
  function DefaultErrorComponent() {
    let error = useRouteError();
    let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
    let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
    let devInfo = null;
    if (ENABLE_DEV_WARNINGS) {
      console.error(
        "Error handled by React Router default ErrorBoundary:",
        error
      );
      devInfo = /* @__PURE__ */ React22.createElement(React22.Fragment, null, /* @__PURE__ */ React22.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ React22.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ React22.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ React22.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
    }
    return /* @__PURE__ */ React22.createElement(React22.Fragment, null, /* @__PURE__ */ React22.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React22.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ React22.createElement("pre", { style: preStyles }, stack) : null, devInfo);
  }
  var defaultErrorElement = /* @__PURE__ */ React22.createElement(DefaultErrorComponent, null);
  var RenderErrorBoundary = class extends React22.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: props.location,
        revalidation: props.revalidation,
        error: props.error
      };
    }
    static getDerivedStateFromError(error) {
      return { error };
    }
    static getDerivedStateFromProps(props, state) {
      if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
        return {
          error: props.error,
          location: props.location,
          revalidation: props.revalidation
        };
      }
      return {
        error: props.error !== void 0 ? props.error : state.error,
        location: state.location,
        revalidation: props.revalidation || state.revalidation
      };
    }
    componentDidCatch(error, errorInfo) {
      if (this.props.onError) {
        this.props.onError(error, errorInfo);
      } else {
        console.error(
          "React Router caught the following error during render",
          error
        );
      }
    }
    render() {
      let error = this.state.error;
      if (this.context && typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
        const decoded = decodeRouteErrorResponseDigest(error.digest);
        if (decoded) error = decoded;
      }
      let result = error !== void 0 ? /* @__PURE__ */ React22.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ React22.createElement(
        RouteErrorContext.Provider,
        {
          value: error,
          children: this.props.component
        }
      )) : this.props.children;
      if (this.context) {
        return /* @__PURE__ */ React22.createElement(RSCErrorHandler, { error }, result);
      }
      return result;
    }
  };
  RenderErrorBoundary.contextType = RSCRouterContext;
  var errorRedirectHandledMap = /* @__PURE__ */ new WeakMap();
  function RSCErrorHandler({
    children,
    error
  }) {
    let { basename } = React22.useContext(NavigationContext);
    if (typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
      let redirect2 = decodeRedirectErrorDigest(error.digest);
      if (redirect2) {
        let existingRedirect = errorRedirectHandledMap.get(error);
        if (existingRedirect) throw existingRedirect;
        let parsed = parseToInfo(redirect2.location, basename);
        if (isBrowser && !errorRedirectHandledMap.get(error)) {
          if (parsed.isExternal || redirect2.reloadDocument) {
            window.location.href = parsed.absoluteURL || parsed.to;
          } else {
            const redirectPromise = Promise.resolve().then(
              () => window.__reactRouterDataRouter.navigate(parsed.to, {
                replace: redirect2.replace
              })
            );
            errorRedirectHandledMap.set(error, redirectPromise);
            throw redirectPromise;
          }
        }
        return /* @__PURE__ */ React22.createElement(
          "meta",
          {
            httpEquiv: "refresh",
            content: `0;url=${parsed.absoluteURL || parsed.to}`
          }
        );
      }
    }
    return children;
  }
  function RenderedRoute({ routeContext, match, children }) {
    let dataRouterContext = React22.useContext(DataRouterContext);
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
      dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /* @__PURE__ */ React22.createElement(RouteContext.Provider, { value: routeContext }, children);
  }
  function _renderMatches(matches, parentMatches = [], dataRouterOpts) {
    let dataRouterState = dataRouterOpts?.state;
    if (matches == null) {
      if (!dataRouterState) {
        return null;
      }
      if (dataRouterState.errors) {
        matches = dataRouterState.matches;
      } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
        matches = dataRouterState.matches;
      } else {
        return null;
      }
    }
    let renderedMatches = matches;
    let errors = dataRouterState?.errors;
    if (errors != null) {
      let errorIndex = renderedMatches.findIndex(
        (m) => m.route.id && errors?.[m.route.id] !== void 0
      );
      invariant(
        errorIndex >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(
          errors
        ).join(",")}`
      );
      renderedMatches = renderedMatches.slice(
        0,
        Math.min(renderedMatches.length, errorIndex + 1)
      );
    }
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterOpts && dataRouterState) {
      renderFallback = dataRouterState.renderFallback;
      for (let i = 0; i < renderedMatches.length; i++) {
        let match = renderedMatches[i];
        if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
          fallbackIndex = i;
        }
        if (match.route.id) {
          let { loaderData, errors: errors2 } = dataRouterState;
          let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
          if (match.route.lazy || needsToRunLoader) {
            if (dataRouterOpts.isStatic) {
              renderFallback = true;
            }
            if (fallbackIndex >= 0) {
              renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
            } else {
              renderedMatches = [renderedMatches[0]];
            }
            break;
          }
        }
      }
    }
    let onErrorHandler = dataRouterOpts?.onError;
    let onError = dataRouterState && onErrorHandler ? (error, errorInfo) => {
      onErrorHandler(error, {
        location: dataRouterState.location,
        params: dataRouterState.matches?.[0]?.params ?? {},
        unstable_pattern: getRoutePattern(dataRouterState.matches),
        errorInfo
      });
    } : void 0;
    return renderedMatches.reduceRight(
      (outlet, match, index) => {
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
          error = errors && match.route.id ? errors[match.route.id] : void 0;
          errorElement = match.route.errorElement || defaultErrorElement;
          if (renderFallback) {
            if (fallbackIndex < 0 && index === 0) {
              warningOnce(
                "route-fallback",
                false,
                "No `HydrateFallback` element provided to render during initial hydration"
              );
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = null;
            } else if (fallbackIndex === index) {
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = match.route.hydrateFallbackElement || null;
            }
          }
        }
        let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = () => {
          let children;
          if (error) {
            children = errorElement;
          } else if (shouldRenderHydrateFallback) {
            children = hydrateFallbackElement;
          } else if (match.route.Component) {
            children = /* @__PURE__ */ React22.createElement(match.route.Component, null);
          } else if (match.route.element) {
            children = match.route.element;
          } else {
            children = outlet;
          }
          return /* @__PURE__ */ React22.createElement(
            RenderedRoute,
            {
              match,
              routeContext: {
                outlet,
                matches: matches2,
                isDataRoute: dataRouterState != null
              },
              children
            }
          );
        };
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ React22.createElement(
          RenderErrorBoundary,
          {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error,
            children: getChildren(),
            routeContext: { outlet: null, matches: matches2, isDataRoute: true },
            onError
          }
        ) : getChildren();
      },
      null
    );
  }
  function getDataRouterConsoleError(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext(hookName) {
    let ctx = React22.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError(hookName));
    return ctx;
  }
  function useDataRouterState(hookName) {
    let state = React22.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError(hookName));
    return state;
  }
  function useRouteContext(hookName) {
    let route = React22.useContext(RouteContext);
    invariant(route, getDataRouterConsoleError(hookName));
    return route;
  }
  function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    invariant(
      thisRoute.route.id,
      `${hookName} can only be used on routes that contain a unique "id"`
    );
    return thisRoute.route.id;
  }
  function useRouteId() {
    return useCurrentRouteId(
      "useRouteId"
      /* UseRouteId */
    );
  }
  function useNavigation() {
    let state = useDataRouterState(
      "useNavigation"
      /* UseNavigation */
    );
    return state.navigation;
  }
  function useMatches() {
    let { matches, loaderData } = useDataRouterState(
      "useMatches"
      /* UseMatches */
    );
    return React22.useMemo(
      () => matches.map((m) => convertRouteMatchToUiMatch(m, loaderData)),
      [matches, loaderData]
    );
  }
  function useRouteError() {
    let error = React22.useContext(RouteErrorContext);
    let state = useDataRouterState(
      "useRouteError"
      /* UseRouteError */
    );
    let routeId = useCurrentRouteId(
      "useRouteError"
      /* UseRouteError */
    );
    if (error !== void 0) {
      return error;
    }
    return state.errors?.[routeId];
  }
  function useNavigateStable() {
    let { router } = useDataRouterContext(
      "useNavigate"
      /* UseNavigateStable */
    );
    let id = useCurrentRouteId(
      "useNavigate"
      /* UseNavigateStable */
    );
    let activeRef = React22.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React22.useCallback(
      async (to, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to === "number") {
          await router.navigate(to);
        } else {
          await router.navigate(to, { fromRouteId: id, ...options });
        }
      },
      [router, id]
    );
    return navigate;
  }
  var alreadyWarned = {};
  function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
      alreadyWarned[key] = true;
      warning(false, message);
    }
  }
  var USE_OPTIMISTIC = "useOptimistic";
  var useOptimisticImpl = React3[USE_OPTIMISTIC];
  var MemoizedDataRoutes = React3.memo(DataRoutes);
  function DataRoutes({
    routes,
    future,
    state,
    isStatic,
    onError
  }) {
    return useRoutesImpl(routes, void 0, { state, isStatic, onError, future });
  }
  function Router({
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = "POP",
    navigator,
    static: staticProp = false,
    unstable_useTransitions
  }) {
    invariant(
      !useInRouterContext(),
      `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
    );
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = React3.useMemo(
      () => ({
        basename,
        navigator,
        static: staticProp,
        unstable_useTransitions,
        future: {}
      }),
      [basename, navigator, staticProp, unstable_useTransitions]
    );
    if (typeof locationProp === "string") {
      locationProp = parsePath(locationProp);
    }
    let {
      pathname = "/",
      search = "",
      hash = "",
      state = null,
      key = "default",
      unstable_mask
    } = locationProp;
    let locationContext = React3.useMemo(() => {
      let trailingPathname = stripBasename(pathname, basename);
      if (trailingPathname == null) {
        return null;
      }
      return {
        location: {
          pathname: trailingPathname,
          search,
          hash,
          state,
          key,
          unstable_mask
        },
        navigationType
      };
    }, [
      basename,
      pathname,
      search,
      hash,
      state,
      key,
      navigationType,
      unstable_mask
    ]);
    warning(
      locationContext != null,
      `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
    );
    if (locationContext == null) {
      return null;
    }
    return /* @__PURE__ */ React3.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ React3.createElement(LocationContext.Provider, { children, value: locationContext }));
  }
  var defaultMethod = "get";
  var defaultEncType = "application/x-www-form-urlencoded";
  function isHtmlElement(object) {
    return typeof HTMLElement !== "undefined" && object instanceof HTMLElement;
  }
  function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
  }
  function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
  }
  function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
  }
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  function shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event);
  }
  var _formDataSupportsSubmitter = null;
  function isFormDataSubmitterSupported() {
    if (_formDataSupportsSubmitter === null) {
      try {
        new FormData(
          document.createElement("form"),
          // @ts-expect-error if FormData supports the submitter parameter, this will throw
          0
        );
        _formDataSupportsSubmitter = false;
      } catch (e) {
        _formDataSupportsSubmitter = true;
      }
    }
    return _formDataSupportsSubmitter;
  }
  var supportedFormEncTypes = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function getFormEncType(encType) {
    if (encType != null && !supportedFormEncTypes.has(encType)) {
      warning(
        false,
        `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
      );
      return null;
    }
    return encType;
  }
  function getFormSubmissionInfo(target, basename) {
    let method;
    let action;
    let encType;
    let formData;
    let body;
    if (isFormElement(target)) {
      let attr = target.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(target);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null) {
        throw new Error(
          `Cannot submit a <button> or <input type="submit"> without a <form>`
        );
      }
      let attr = target.getAttribute("formaction") || form.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(form, target);
      if (!isFormDataSubmitterSupported()) {
        let { name, type, value } = target;
        if (type === "image") {
          let prefix = name ? `${name}.` : "";
          formData.append(`${prefix}x`, "0");
          formData.append(`${prefix}y`, "0");
        } else if (name) {
          formData.append(name, value);
        }
      }
    } else if (isHtmlElement(target)) {
      throw new Error(
        `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
      );
    } else {
      method = defaultMethod;
      action = null;
      encType = defaultEncType;
      body = target;
    }
    if (formData && encType === "text/plain") {
      body = formData;
      formData = void 0;
    }
    return { action, method: method.toLowerCase(), encType, formData, body };
  }
  var objectProtoNames2 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var ESCAPE_LOOKUP = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
  function escapeHtml(html) {
    return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
  }
  function invariant2(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function singleFetchUrl(reqUrl, basename, trailingSlashAware, extension) {
    let url = typeof reqUrl === "string" ? new URL(
      reqUrl,
      // This can be called during the SSR flow via PrefetchPageLinksImpl so
      // don't assume window is available
      typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
    ) : reqUrl;
    if (trailingSlashAware) {
      if (url.pathname.endsWith("/")) {
        url.pathname = `${url.pathname}_.${extension}`;
      } else {
        url.pathname = `${url.pathname}.${extension}`;
      }
    } else {
      if (url.pathname === "/") {
        url.pathname = `_root.${extension}`;
      } else if (basename && stripBasename(url.pathname, basename) === "/") {
        url.pathname = `${basename.replace(/\/$/, "")}/_root.${extension}`;
      } else {
        url.pathname = `${url.pathname.replace(/\/$/, "")}.${extension}`;
      }
    }
    return url;
  }
  async function loadRouteModule(route, routeModulesCache) {
    if (route.id in routeModulesCache) {
      return routeModulesCache[route.id];
    }
    try {
      let routeModule = await import(
        /* @vite-ignore */
        /* webpackIgnore: true */
        route.module
      );
      routeModulesCache[route.id] = routeModule;
      return routeModule;
    } catch (error) {
      console.error(
        `Error loading route module \`${route.module}\`, reloading page...`
      );
      console.error(error);
      if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
      import_meta.hot) {
        throw error;
      }
      window.location.reload();
      return new Promise(() => {
      });
    }
  }
  function isPageLinkDescriptor(object) {
    return object != null && typeof object.page === "string";
  }
  function isHtmlLinkDescriptor(object) {
    if (object == null) {
      return false;
    }
    if (object.href == null) {
      return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
    }
    return typeof object.rel === "string" && typeof object.href === "string";
  }
  async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
    let links = await Promise.all(
      matches.map(async (match) => {
        let route = manifest.routes[match.route.id];
        if (route) {
          let mod = await loadRouteModule(route, routeModules);
          return mod.links ? mod.links() : [];
        }
        return [];
      })
    );
    return dedupeLinkDescriptors(
      links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
        (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
      )
    );
  }
  function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
    let isNew = (match, index) => {
      if (!currentMatches[index]) return true;
      return match.route.id !== currentMatches[index].route.id;
    };
    let matchPathChanged = (match, index) => {
      return (
        // param change, /users/123 -> /users/456
        currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
        // e.g. /files/images/avatar.jpg -> files/finances.xls
        currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"]
      );
    };
    if (mode === "assets") {
      return nextMatches.filter(
        (match, index) => isNew(match, index) || matchPathChanged(match, index)
      );
    }
    if (mode === "data") {
      return nextMatches.filter((match, index) => {
        let manifestRoute = manifest.routes[match.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return false;
        }
        if (isNew(match, index) || matchPathChanged(match, index)) {
          return true;
        }
        if (match.route.shouldRevalidate) {
          let routeChoice = match.route.shouldRevalidate({
            currentUrl: new URL(
              location.pathname + location.search + location.hash,
              window.origin
            ),
            currentParams: currentMatches[0]?.params || {},
            nextUrl: new URL(page, window.origin),
            nextParams: match.params,
            defaultShouldRevalidate: true
          });
          if (typeof routeChoice === "boolean") {
            return routeChoice;
          }
        }
        return true;
      });
    }
    return [];
  }
  function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
    return dedupeHrefs(
      matches.map((match) => {
        let route = manifest.routes[match.route.id];
        if (!route) return [];
        let hrefs = [route.module];
        if (route.clientActionModule) {
          hrefs = hrefs.concat(route.clientActionModule);
        }
        if (route.clientLoaderModule) {
          hrefs = hrefs.concat(route.clientLoaderModule);
        }
        if (includeHydrateFallback && route.hydrateFallbackModule) {
          hrefs = hrefs.concat(route.hydrateFallbackModule);
        }
        if (route.imports) {
          hrefs = hrefs.concat(route.imports);
        }
        return hrefs;
      }).flat(1)
    );
  }
  function dedupeHrefs(hrefs) {
    return [...new Set(hrefs)];
  }
  function sortKeys(obj) {
    let sorted = {};
    let keys = Object.keys(obj).sort();
    for (let key of keys) {
      sorted[key] = obj[key];
    }
    return sorted;
  }
  function dedupeLinkDescriptors(descriptors, preloads) {
    let set2 = /* @__PURE__ */ new Set();
    let preloadsSet = new Set(preloads);
    return descriptors.reduce((deduped, descriptor) => {
      let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
      if (alreadyModulePreload) {
        return deduped;
      }
      let key = JSON.stringify(sortKeys(descriptor));
      if (!set2.has(key)) {
        set2.add(key);
        deduped.push({ key, link: descriptor });
      }
      return deduped;
    }, []);
  }
  function useDataRouterContext2() {
    let context = React8.useContext(DataRouterContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterContext.Provider> element"
    );
    return context;
  }
  function useDataRouterStateContext() {
    let context = React8.useContext(DataRouterStateContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    );
    return context;
  }
  var FrameworkContext = React8.createContext(void 0);
  FrameworkContext.displayName = "FrameworkContext";
  function useFrameworkContext() {
    let context = React8.useContext(FrameworkContext);
    invariant2(
      context,
      "You must render this element inside a <HydratedRouter> element"
    );
    return context;
  }
  function usePrefetchBehavior(prefetch, theirElementProps) {
    let frameworkContext = React8.useContext(FrameworkContext);
    let [maybePrefetch, setMaybePrefetch] = React8.useState(false);
    let [shouldPrefetch, setShouldPrefetch] = React8.useState(false);
    let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
    let ref = React8.useRef(null);
    React8.useEffect(() => {
      if (prefetch === "render") {
        setShouldPrefetch(true);
      }
      if (prefetch === "viewport") {
        let callback = (entries) => {
          entries.forEach((entry) => {
            setShouldPrefetch(entry.isIntersecting);
          });
        };
        let observer = new IntersectionObserver(callback, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => {
          observer.disconnect();
        };
      }
    }, [prefetch]);
    React8.useEffect(() => {
      if (maybePrefetch) {
        let id = setTimeout(() => {
          setShouldPrefetch(true);
        }, 100);
        return () => {
          clearTimeout(id);
        };
      }
    }, [maybePrefetch]);
    let setIntent = () => {
      setMaybePrefetch(true);
    };
    let cancelIntent = () => {
      setMaybePrefetch(false);
      setShouldPrefetch(false);
    };
    if (!frameworkContext) {
      return [false, ref, {}];
    }
    if (prefetch !== "intent") {
      return [shouldPrefetch, ref, {}];
    }
    return [
      shouldPrefetch,
      ref,
      {
        onFocus: composeEventHandlers(onFocus, setIntent),
        onBlur: composeEventHandlers(onBlur, cancelIntent),
        onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
        onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
        onTouchStart: composeEventHandlers(onTouchStart, setIntent)
      }
    ];
  }
  function composeEventHandlers(theirHandler, ourHandler) {
    return (event) => {
      theirHandler && theirHandler(event);
      if (!event.defaultPrevented) {
        ourHandler(event);
      }
    };
  }
  function PrefetchPageLinks({ page, ...linkProps }) {
    let { router } = useDataRouterContext2();
    let matches = React8.useMemo(
      () => matchRoutes(router.routes, page, router.basename),
      [router.routes, page, router.basename]
    );
    if (!matches) {
      return null;
    }
    return /* @__PURE__ */ React8.createElement(PrefetchPageLinksImpl, { page, matches, ...linkProps });
  }
  function useKeyedPrefetchLinks(matches) {
    let { manifest, routeModules } = useFrameworkContext();
    let [keyedPrefetchLinks, setKeyedPrefetchLinks] = React8.useState([]);
    React8.useEffect(() => {
      let interrupted = false;
      void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
        (links) => {
          if (!interrupted) {
            setKeyedPrefetchLinks(links);
          }
        }
      );
      return () => {
        interrupted = true;
      };
    }, [matches, manifest, routeModules]);
    return keyedPrefetchLinks;
  }
  function PrefetchPageLinksImpl({
    page,
    matches: nextMatches,
    ...linkProps
  }) {
    let location = useLocation();
    let { future, manifest, routeModules } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let { loaderData, matches } = useDataRouterStateContext();
    let newMatchesForData = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "data"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let newMatchesForAssets = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "assets"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let dataHrefs = React8.useMemo(() => {
      if (page === location.pathname + location.search + location.hash) {
        return [];
      }
      let routesParams = /* @__PURE__ */ new Set();
      let foundOptOutRoute = false;
      nextMatches.forEach((m) => {
        let manifestRoute = manifest.routes[m.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return;
        }
        if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && routeModules[m.route.id]?.shouldRevalidate) {
          foundOptOutRoute = true;
        } else if (manifestRoute.hasClientLoader) {
          foundOptOutRoute = true;
        } else {
          routesParams.add(m.route.id);
        }
      });
      if (routesParams.size === 0) {
        return [];
      }
      let url = singleFetchUrl(
        page,
        basename,
        future.unstable_trailingSlashAwareDataRequests,
        "data"
      );
      if (foundOptOutRoute && routesParams.size > 0) {
        url.searchParams.set(
          "_routes",
          nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
        );
      }
      return [url.pathname + url.search];
    }, [
      basename,
      future.unstable_trailingSlashAwareDataRequests,
      loaderData,
      location,
      manifest,
      newMatchesForData,
      nextMatches,
      page,
      routeModules
    ]);
    let moduleHrefs = React8.useMemo(
      () => getModuleLinkHrefs(newMatchesForAssets, manifest),
      [newMatchesForAssets, manifest]
    );
    let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
      // these don't spread `linkProps` because they are full link descriptors
      // already with their own props
      /* @__PURE__ */ React8.createElement(
        "link",
        {
          key,
          nonce: linkProps.nonce,
          ...link,
          crossOrigin: link.crossOrigin ?? linkProps.crossOrigin
        }
      )
    )));
  }
  function mergeRefs(...refs) {
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }
  var isBrowser2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  try {
    if (isBrowser2) {
      window.__reactRouterVersion = // @ts-expect-error
      "7.13.1";
    }
  } catch (e) {
  }
  function HistoryRouter({
    basename,
    children,
    history,
    unstable_useTransitions
  }) {
    let [state, setStateImpl] = React10.useState({
      action: history.action,
      location: history.location
    });
    let setState = React10.useCallback(
      (newState) => {
        if (unstable_useTransitions === false) {
          setStateImpl(newState);
        } else {
          React10.startTransition(() => setStateImpl(newState));
        }
      },
      [unstable_useTransitions]
    );
    React10.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React10.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        unstable_useTransitions
      }
    );
  }
  HistoryRouter.displayName = "unstable_HistoryRouter";
  var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  var Link = React10.forwardRef(
    function LinkWithRef({
      onClick,
      discover = "render",
      prefetch = "none",
      relative,
      reloadDocument,
      replace: replace2,
      unstable_mask,
      state,
      target,
      to,
      preventScrollReset,
      viewTransition,
      unstable_defaultShouldRevalidate,
      ...rest
    }, forwardedRef) {
      let { basename, navigator, unstable_useTransitions } = React10.useContext(NavigationContext);
      let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
      let parsed = parseToInfo(to, basename);
      to = parsed.to;
      let href = useHref(to, { relative });
      let location = useLocation();
      let maskedHref = null;
      if (unstable_mask) {
        let resolved = resolveTo(
          unstable_mask,
          [],
          location.unstable_mask ? location.unstable_mask.pathname : "/",
          true
        );
        if (basename !== "/") {
          resolved.pathname = resolved.pathname === "/" ? basename : joinPaths([basename, resolved.pathname]);
        }
        maskedHref = navigator.createHref(resolved);
      }
      let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
        prefetch,
        rest
      );
      let internalOnClick = useLinkClickHandler(to, {
        replace: replace2,
        unstable_mask,
        state,
        target,
        preventScrollReset,
        relative,
        viewTransition,
        unstable_defaultShouldRevalidate,
        unstable_useTransitions
      });
      function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) {
          internalOnClick(event);
        }
      }
      let isSpaLink = !(parsed.isExternal || reloadDocument);
      let link = (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        /* @__PURE__ */ React10.createElement(
          "a",
          {
            ...rest,
            ...prefetchHandlers,
            href: (isSpaLink ? maskedHref : void 0) || parsed.absoluteURL || href,
            onClick: isSpaLink ? handleClick : onClick,
            ref: mergeRefs(forwardedRef, prefetchRef),
            target,
            "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
          }
        )
      );
      return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React10.createElement(React10.Fragment, null, link, /* @__PURE__ */ React10.createElement(PrefetchPageLinks, { page: href })) : link;
    }
  );
  Link.displayName = "Link";
  var NavLink = React10.forwardRef(
    function NavLinkWithRef({
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      viewTransition,
      children,
      ...rest
    }, ref) {
      let path = useResolvedPath(to, { relative: rest.relative });
      let location = useLocation();
      let routerState = React10.useContext(DataRouterStateContext);
      let { navigator, basename } = React10.useContext(NavigationContext);
      let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useViewTransitionState(path) && viewTransition === true;
      let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
      let locationPathname = location.pathname;
      let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
      if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
      }
      if (nextLocationPathname && basename) {
        nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
      }
      const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
      let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
      let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
      let renderProps = {
        isActive,
        isPending,
        isTransitioning
      };
      let ariaCurrent = isActive ? ariaCurrentProp : void 0;
      let className;
      if (typeof classNameProp === "function") {
        className = classNameProp(renderProps);
      } else {
        className = [
          classNameProp,
          isActive ? "active" : null,
          isPending ? "pending" : null,
          isTransitioning ? "transitioning" : null
        ].filter(Boolean).join(" ");
      }
      let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
      return /* @__PURE__ */ React10.createElement(
        Link,
        {
          ...rest,
          "aria-current": ariaCurrent,
          className,
          ref,
          style,
          to,
          viewTransition
        },
        typeof children === "function" ? children(renderProps) : children
      );
    }
  );
  NavLink.displayName = "NavLink";
  var Form = React10.forwardRef(
    ({
      discover = "render",
      fetcherKey,
      navigate,
      reloadDocument,
      replace: replace2,
      state,
      method = defaultMethod,
      action,
      onSubmit,
      relative,
      preventScrollReset,
      viewTransition,
      unstable_defaultShouldRevalidate,
      ...props
    }, forwardedRef) => {
      let { unstable_useTransitions } = React10.useContext(NavigationContext);
      let submit = useSubmit();
      let formAction = useFormAction(action, { relative });
      let formMethod = method.toLowerCase() === "get" ? "get" : "post";
      let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX2.test(action);
      let submitHandler = (event) => {
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        let submitter = event.nativeEvent.submitter;
        let submitMethod = submitter?.getAttribute("formmethod") || method;
        let doSubmit = () => submit(submitter || event.currentTarget, {
          fetcherKey,
          method: submitMethod,
          navigate,
          replace: replace2,
          state,
          relative,
          preventScrollReset,
          viewTransition,
          unstable_defaultShouldRevalidate
        });
        if (unstable_useTransitions && navigate !== false) {
          React10.startTransition(() => doSubmit());
        } else {
          doSubmit();
        }
      };
      return /* @__PURE__ */ React10.createElement(
        "form",
        {
          ref: forwardedRef,
          method: formMethod,
          action: formAction,
          onSubmit: reloadDocument ? onSubmit : submitHandler,
          ...props,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      );
    }
  );
  Form.displayName = "Form";
  function ScrollRestoration({
    getKey,
    storageKey,
    ...props
  }) {
    let remixContext = React10.useContext(FrameworkContext);
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    useScrollRestoration({ getKey, storageKey });
    let ssrKey = React10.useMemo(
      () => {
        if (!remixContext || !getKey) return null;
        let userKey = getScrollRestorationKey(
          location,
          matches,
          basename,
          getKey
        );
        return userKey !== location.key ? userKey : null;
      },
      // Nah, we only need this the first time for the SSR render
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    if (!remixContext || remixContext.isSpaMode) {
      return null;
    }
    let restoreScroll = ((storageKey2, restoreKey) => {
      if (!window.history.state || !window.history.state.key) {
        let key = Math.random().toString(32).slice(2);
        window.history.replaceState({ key }, "");
      }
      try {
        let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
        let storedY = positions[restoreKey || window.history.state.key];
        if (typeof storedY === "number") {
          window.scrollTo(0, storedY);
        }
      } catch (error) {
        console.error(error);
        sessionStorage.removeItem(storageKey2);
      }
    }).toString();
    return /* @__PURE__ */ React10.createElement(
      "script",
      {
        ...props,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: {
          __html: `(${restoreScroll})(${escapeHtml(
            JSON.stringify(storageKey || SCROLL_RESTORATION_STORAGE_KEY)
          )}, ${escapeHtml(JSON.stringify(ssrKey))})`
        }
      }
    );
  }
  ScrollRestoration.displayName = "ScrollRestoration";
  function getDataRouterConsoleError2(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext3(hookName) {
    let ctx = React10.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError2(hookName));
    return ctx;
  }
  function useDataRouterState2(hookName) {
    let state = React10.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError2(hookName));
    return state;
  }
  function useLinkClickHandler(to, {
    target,
    replace: replaceProp,
    unstable_mask,
    state,
    preventScrollReset,
    relative,
    viewTransition,
    unstable_defaultShouldRevalidate,
    unstable_useTransitions
  } = {}) {
    let navigate = useNavigate();
    let location = useLocation();
    let path = useResolvedPath(to, { relative });
    return React10.useCallback(
      (event) => {
        if (shouldProcessLinkClick(event, target)) {
          event.preventDefault();
          let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
          let doNavigate = () => navigate(to, {
            replace: replace2,
            unstable_mask,
            state,
            preventScrollReset,
            relative,
            viewTransition,
            unstable_defaultShouldRevalidate
          });
          if (unstable_useTransitions) {
            React10.startTransition(() => doNavigate());
          } else {
            doNavigate();
          }
        }
      },
      [
        location,
        navigate,
        path,
        replaceProp,
        unstable_mask,
        state,
        target,
        to,
        preventScrollReset,
        relative,
        viewTransition,
        unstable_defaultShouldRevalidate,
        unstable_useTransitions
      ]
    );
  }
  var fetcherId = 0;
  var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
  function useSubmit() {
    let { router } = useDataRouterContext3(
      "useSubmit"
      /* UseSubmit */
    );
    let { basename } = React10.useContext(NavigationContext);
    let currentRouteId = useRouteId();
    let routerFetch = router.fetch;
    let routerNavigate = router.navigate;
    return React10.useCallback(
      async (target, options = {}) => {
        let { action, method, encType, formData, body } = getFormSubmissionInfo(
          target,
          basename
        );
        if (options.navigate === false) {
          let key = options.fetcherKey || getUniqueFetcherId();
          await routerFetch(key, currentRouteId, options.action || action, {
            unstable_defaultShouldRevalidate: options.unstable_defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            flushSync: options.flushSync
          });
        } else {
          await routerNavigate(options.action || action, {
            unstable_defaultShouldRevalidate: options.unstable_defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            replace: options.replace,
            state: options.state,
            fromRouteId: currentRouteId,
            flushSync: options.flushSync,
            viewTransition: options.viewTransition
          });
        }
      },
      [routerFetch, routerNavigate, basename, currentRouteId]
    );
  }
  function useFormAction(action, { relative } = {}) {
    let { basename } = React10.useContext(NavigationContext);
    let routeContext = React10.useContext(RouteContext);
    invariant(routeContext, "useFormAction must be used inside a RouteContext");
    let [match] = routeContext.matches.slice(-1);
    let path = { ...useResolvedPath(action ? action : ".", { relative }) };
    let location = useLocation();
    if (action == null) {
      path.search = location.search;
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      let hasNakedIndexParam = indexValues.some((v) => v === "");
      if (hasNakedIndexParam) {
        params.delete("index");
        indexValues.filter((v) => v).forEach((v) => params.append("index", v));
        let qs = params.toString();
        path.search = qs ? `?${qs}` : "";
      }
    }
    if ((!action || action === ".") && match.route.index) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    }
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    return createPath(path);
  }
  var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
  var savedScrollPositions = {};
  function getScrollRestorationKey(location, matches, basename, getKey) {
    let key = null;
    if (getKey) {
      if (basename !== "/") {
        key = getKey(
          {
            ...location,
            pathname: stripBasename(location.pathname, basename) || location.pathname
          },
          matches
        );
      } else {
        key = getKey(location, matches);
      }
    }
    if (key == null) {
      key = location.key;
    }
    return key;
  }
  function useScrollRestoration({
    getKey,
    storageKey
  } = {}) {
    let { router } = useDataRouterContext3(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { restoreScrollPosition, preventScrollReset } = useDataRouterState2(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    let navigation = useNavigation();
    React10.useEffect(() => {
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = "auto";
      };
    }, []);
    usePageHide(
      React10.useCallback(() => {
        if (navigation.state === "idle") {
          let key = getScrollRestorationKey(location, matches, basename, getKey);
          savedScrollPositions[key] = window.scrollY;
        }
        try {
          sessionStorage.setItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY,
            JSON.stringify(savedScrollPositions)
          );
        } catch (error) {
          warning(
            false,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`
          );
        }
        window.history.scrollRestoration = "auto";
      }, [navigation.state, getKey, basename, location, matches, storageKey])
    );
    if (typeof document !== "undefined") {
      React10.useLayoutEffect(() => {
        try {
          let sessionPositions = sessionStorage.getItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY
          );
          if (sessionPositions) {
            savedScrollPositions = JSON.parse(sessionPositions);
          }
        } catch (e) {
        }
      }, [storageKey]);
      React10.useLayoutEffect(() => {
        let disableScrollRestoration = router?.enableScrollRestoration(
          savedScrollPositions,
          () => window.scrollY,
          getKey ? (location2, matches2) => getScrollRestorationKey(location2, matches2, basename, getKey) : void 0
        );
        return () => disableScrollRestoration && disableScrollRestoration();
      }, [router, basename, getKey]);
      React10.useLayoutEffect(() => {
        if (restoreScrollPosition === false) {
          return;
        }
        if (typeof restoreScrollPosition === "number") {
          window.scrollTo(0, restoreScrollPosition);
          return;
        }
        try {
          if (location.hash) {
            let el = document.getElementById(
              decodeURIComponent(location.hash.slice(1))
            );
            if (el) {
              el.scrollIntoView();
              return;
            }
          }
        } catch {
          warning(
            false,
            `"${location.hash.slice(
              1
            )}" is not a decodable element ID. The view will not scroll to it.`
          );
        }
        if (preventScrollReset === true) {
          return;
        }
        window.scrollTo(0, 0);
      }, [location, restoreScrollPosition, preventScrollReset]);
    }
  }
  function usePageHide(callback, options) {
    let { capture } = options || {};
    React10.useEffect(() => {
      let opts = capture != null ? { capture } : void 0;
      window.addEventListener("pagehide", callback, opts);
      return () => {
        window.removeEventListener("pagehide", callback, opts);
      };
    }, [callback, capture]);
  }
  function useViewTransitionState(to, { relative } = {}) {
    let vtContext = React10.useContext(ViewTransitionContext);
    invariant(
      vtContext != null,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let { basename } = useDataRouterContext3(
      "useViewTransitionState"
      /* useViewTransitionState */
    );
    let path = useResolvedPath(to, { relative });
    if (!vtContext.isTransitioning) {
      return false;
    }
    let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
  }

  // node_modules/react-hook-form/dist/index.esm.mjs
  var import_react = __toESM(require_react(), 1);
  var isCheckBoxInput = (element) => element.type === "checkbox";
  var isDateObject = (value) => value instanceof Date;
  var isNullOrUndefined = (value) => value == null;
  var isObjectType = (value) => typeof value === "object";
  var isObject = (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
  var getEventValue = (event) => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
  var isNameInFieldArray = (names, name) => name.split(".").some((part, index, arr) => !isNaN(Number(part)) && names.has(arr.slice(0, index).join(".")));
  var isPlainObject = (tempObject) => {
    const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
    return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
  };
  var isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
  function cloneObject(data2) {
    if (data2 instanceof Date) {
      return new Date(data2);
    }
    const isFileListInstance = typeof FileList !== "undefined" && data2 instanceof FileList;
    if (isWeb && (data2 instanceof Blob || isFileListInstance)) {
      return data2;
    }
    const isArray = Array.isArray(data2);
    if (!isArray && !(isObject(data2) && isPlainObject(data2))) {
      return data2;
    }
    const copy = isArray ? [] : Object.create(Object.getPrototypeOf(data2));
    for (const key in data2) {
      if (Object.prototype.hasOwnProperty.call(data2, key)) {
        copy[key] = cloneObject(data2[key]);
      }
    }
    return copy;
  }
  var isKey = (value) => /^\w*$/.test(value);
  var isUndefined = (val) => val === void 0;
  var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
  var stringToPath = (input) => compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
  var get = (object, path, defaultValue) => {
    if (!path || !isObject(object)) {
      return defaultValue;
    }
    const paths = isKey(path) ? [path] : stringToPath(path);
    const result = paths.reduce((result2, key) => {
      return isNullOrUndefined(result2) ? void 0 : result2[key];
    }, object);
    return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
  };
  var isBoolean = (value) => typeof value === "boolean";
  var isFunction = (value) => typeof value === "function";
  var set = (object, path, value) => {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
      const key = tempPath[index];
      let newValue = value;
      if (index !== lastIndex) {
        const objValue = object[key];
        newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
      }
      if (key === "__proto__" || key === "constructor" || key === "prototype") {
        return;
      }
      object[key] = newValue;
      object = object[key];
    }
  };
  var EVENTS = {
    BLUR: "blur",
    FOCUS_OUT: "focusout",
    CHANGE: "change",
    SUBMIT: "submit",
    TRIGGER: "trigger",
    VALID: "valid"
  };
  var VALIDATION_MODE = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all"
  };
  var INPUT_VALIDATION_RULES = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate"
  };
  var FORM_ERROR_TYPE = "form";
  var ROOT_ERROR_TYPE = "root";
  var HookFormControlContext = import_react.default.createContext(null);
  HookFormControlContext.displayName = "HookFormControlContext";
  var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
    const result = {};
    for (const key in formState) {
      Object.defineProperty(result, key, {
        get: () => {
          const _key = key;
          if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
            control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
          }
          localProxyFormState && (localProxyFormState[_key] = true);
          return formState[_key];
        }
      });
    }
    return result;
  };
  var useIsomorphicLayoutEffect2 = typeof window !== "undefined" ? import_react.default.useLayoutEffect : import_react.default.useEffect;
  var isString = (value) => typeof value === "string";
  var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
    if (isString(names)) {
      isGlobal && _names.watch.add(names);
      return get(formValues, names, defaultValue);
    }
    if (Array.isArray(names)) {
      return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
    }
    isGlobal && (_names.watchAll = true);
    return formValues;
  };
  var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);
  function deepEqual(object1, object2, visited = /* @__PURE__ */ new WeakSet()) {
    if (object1 === object2) {
      return true;
    }
    if (isPrimitive(object1) || isPrimitive(object2)) {
      return Object.is(object1, object2);
    }
    if (isDateObject(object1) && isDateObject(object2)) {
      return Object.is(object1.getTime(), object2.getTime());
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    if (visited.has(object1) || visited.has(object2)) {
      return true;
    }
    visited.add(object1);
    visited.add(object2);
    for (const key of keys1) {
      const val1 = object1[key];
      if (!(key in object2)) {
        return false;
      }
      if (key !== "ref") {
        const val2 = object2[key];
        if (isDateObject(val1) && isDateObject(val2) || (isObject(val1) || Array.isArray(val1)) && (isObject(val2) || Array.isArray(val2)) ? !deepEqual(val1, val2, visited) : !Object.is(val1, val2)) {
          return false;
        }
      }
    }
    return true;
  }
  var HookFormContext = import_react.default.createContext(null);
  HookFormContext.displayName = "HookFormContext";
  var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria ? {
    ...errors[name],
    types: {
      ...errors[name] && errors[name].types ? errors[name].types : {},
      [type]: message || true
    }
  } : {};
  var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];
  var createSubject = () => {
    let _observers = [];
    const next = (value) => {
      for (const observer of _observers) {
        observer.next && observer.next(value);
      }
    };
    const subscribe = (observer) => {
      _observers.push(observer);
      return {
        unsubscribe: () => {
          _observers = _observers.filter((o) => o !== observer);
        }
      };
    };
    const unsubscribe = () => {
      _observers = [];
    };
    return {
      get observers() {
        return _observers;
      },
      next,
      subscribe,
      unsubscribe
    };
  };
  function extractFormValues(fieldsState, formValues) {
    const values = {};
    for (const key in fieldsState) {
      if (fieldsState.hasOwnProperty(key)) {
        const fieldState = fieldsState[key];
        const fieldValue = formValues[key];
        if (fieldState && isObject(fieldState) && fieldValue) {
          const nestedFieldsState = extractFormValues(fieldState, fieldValue);
          if (isObject(nestedFieldsState)) {
            values[key] = nestedFieldsState;
          }
        } else if (fieldsState[key]) {
          values[key] = fieldValue;
        }
      }
    }
    return values;
  }
  var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;
  var isFileInput = (element) => element.type === "file";
  var isHTMLElement = (value) => {
    if (!isWeb) {
      return false;
    }
    const owner = value ? value.ownerDocument : 0;
    return value instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
  };
  var isMultipleSelect = (element) => element.type === `select-multiple`;
  var isRadioInput = (element) => element.type === "radio";
  var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);
  var live = (ref) => isHTMLElement(ref) && ref.isConnected;
  function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
      if (isNullOrUndefined(object)) {
        object = void 0;
        break;
      }
      object = object[updatePath[index]];
      index++;
    }
    return object;
  }
  function isEmptyArray(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
        return false;
      }
    }
    return true;
  }
  function unset(object, path) {
    if (isString(path) && Object.prototype.hasOwnProperty.call(object, path)) {
      delete object[path];
      return object;
    }
    const paths = Array.isArray(path) ? path : isKey(path) ? [path] : stringToPath(path);
    const childObject = paths.length === 1 ? object : baseGet(object, paths);
    const index = paths.length - 1;
    const key = paths[index];
    if (childObject) {
      delete childObject[key];
    }
    if (index !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) {
      unset(object, paths.slice(0, -1));
    }
    return object;
  }
  var objectHasFunction = (data2) => {
    for (const key in data2) {
      if (isFunction(data2[key])) {
        return true;
      }
    }
    return false;
  };
  function isTraversable(value) {
    return Array.isArray(value) || isObject(value) && !objectHasFunction(value);
  }
  function markFieldsDirty(data2, fields = {}) {
    for (const key in data2) {
      const value = data2[key];
      if (isTraversable(value)) {
        fields[key] = Array.isArray(value) ? [] : {};
        markFieldsDirty(value, fields[key]);
      } else if (!isUndefined(value)) {
        fields[key] = true;
      }
    }
    return fields;
  }
  function pruneDirtyFields(value) {
    if (value === false) {
      return void 0;
    }
    if (value === true) {
      return true;
    }
    if (Array.isArray(value)) {
      const result = value.map((value2) => pruneDirtyFields(value2));
      return result.some((value2) => value2 !== void 0) ? result : void 0;
    }
    if (isObject(value)) {
      const result = {};
      for (const key in value) {
        const pruned = pruneDirtyFields(value[key]);
        if (!isUndefined(pruned)) {
          result[key] = pruned;
        }
      }
      return Object.keys(result).length ? result : void 0;
    }
    return void 0;
  }
  function getDirtyFields(data2, formValues, dirtyFieldsFromValues) {
    if (!dirtyFieldsFromValues) {
      dirtyFieldsFromValues = markFieldsDirty(formValues);
    }
    for (const key in data2) {
      const value = data2[key];
      if (isTraversable(value)) {
        if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
          dirtyFieldsFromValues[key] = markFieldsDirty(value, Array.isArray(value) ? [] : {});
        } else {
          getDirtyFields(value, isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
        }
      } else {
        const formValue = formValues[key];
        dirtyFieldsFromValues[key] = !deepEqual(value, formValue);
      }
    }
    return pruneDirtyFields(dirtyFieldsFromValues) || {};
  }
  var defaultResult = {
    value: false,
    isValid: false
  };
  var validResult = { value: true, isValid: true };
  var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
      if (options.length > 1) {
        const values = options.filter((option) => option && option.checked && !option.disabled).map((option) => option.value);
        return { value: values, isValid: !!values.length };
      }
      return options[0].checked && !options[0].disabled ? (
        // @ts-expect-error expected to work in the browser
        options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === "" ? validResult : { value: options[0].value, isValid: true } : validResult
      ) : defaultResult;
    }
    return defaultResult;
  };
  var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value) ? value : valueAsNumber ? value === "" ? NaN : value ? +value : value : valueAsDate && isString(value) ? new Date(value) : setValueAs ? setValueAs(value) : value;
  var defaultReturn = {
    isValid: false,
    value: null
  };
  var getRadioValue = (options) => Array.isArray(options) ? options.reduce((previous, option) => option && option.checked && !option.disabled ? {
    isValid: true,
    value: option.value
  } : previous, defaultReturn) : defaultReturn;
  function getFieldValue(_f) {
    const ref = _f.ref;
    if (isFileInput(ref)) {
      return ref.files;
    }
    if (isRadioInput(ref)) {
      return getRadioValue(_f.refs).value;
    }
    if (isMultipleSelect(ref)) {
      return [...ref.selectedOptions].map(({ value }) => value);
    }
    if (isCheckBoxInput(ref)) {
      return getCheckboxValue(_f.refs).value;
    }
    return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
  }
  var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
    const fields = {};
    for (const name of fieldsNames) {
      const field = get(_fields, name);
      field && set(fields, name, field._f);
    }
    return {
      criteriaMode,
      names: [...fieldsNames],
      fields,
      shouldUseNativeValidation
    };
  };
  var isRegex = (value) => value instanceof RegExp;
  var getRuleValue = (rule) => isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
  var getValidationModes = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched
  });
  var ASYNC_FUNCTION = "AsyncFunction";
  var hasPromiseValidation = (fieldReference) => !!fieldReference && !!fieldReference.validate && !!(isFunction(fieldReference.validate) && fieldReference.validate.constructor.name === ASYNC_FUNCTION || isObject(fieldReference.validate) && Object.values(fieldReference.validate).find((validateFunction) => validateFunction.constructor.name === ASYNC_FUNCTION));
  var hasValidation = (options) => options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
  var isWatched = (name, _names, isBlurEvent) => !isBlurEvent && (_names.watchAll || _names.watch.has(name) || [..._names.watch].some((watchName) => name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
  var iterateFieldsByAction = (fields, action, fieldsNames, abortEarly) => {
    for (const key of fieldsNames || Object.keys(fields)) {
      const field = get(fields, key);
      if (field) {
        const { _f, ...currentField } = field;
        if (_f) {
          if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) {
            return true;
          } else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) {
            return true;
          } else {
            if (iterateFieldsByAction(currentField, action)) {
              break;
            }
          }
        } else if (isObject(currentField)) {
          if (iterateFieldsByAction(currentField, action)) {
            break;
          }
        }
      }
    }
    return;
  };
  function schemaErrorLookup(errors, _fields, name) {
    const error = get(errors, name);
    if (error || isKey(name)) {
      return {
        error,
        name
      };
    }
    const names = name.split(".");
    while (names.length) {
      const fieldName = names.join(".");
      const field = get(_fields, fieldName);
      const foundError = get(errors, fieldName);
      if (field && !Array.isArray(field) && name !== fieldName) {
        return { name };
      }
      if (foundError && foundError.type) {
        return {
          name: fieldName,
          error: foundError
        };
      }
      if (foundError && foundError.root && foundError.root.type) {
        return {
          name: `${fieldName}.root`,
          error: foundError.root
        };
      }
      names.pop();
    }
    return {
      name
    };
  }
  var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
    updateFormState(formStateData);
    const { name, ...formState } = formStateData;
    return isEmptyObject(formState) || isRoot && Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key) => _proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
  };
  var shouldSubscribeByName = (name, signalName, exact) => !name || !signalName || name === signalName || convertToArrayPayload(name).some((currentName) => currentName && (exact ? currentName === signalName : currentName.startsWith(signalName) || signalName.startsWith(currentName)));
  var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
    if (mode.isOnAll) {
      return false;
    } else if (!isSubmitted && mode.isOnTouch) {
      return !(isTouched || isBlurEvent);
    } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
      return !isBlurEvent;
    } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
      return isBlurEvent;
    }
    return true;
  };
  var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);
  var updateFieldArrayRootError = (errors, error, name) => {
    const fieldArrayErrors = convertToArrayPayload(get(errors, name));
    set(fieldArrayErrors, ROOT_ERROR_TYPE, error[name]);
    set(errors, name, fieldArrayErrors);
    return errors;
  };
  function getValidateError(result, ref, type = "validate") {
    if (isString(result) || Array.isArray(result) && result.every(isString) || isBoolean(result) && !result) {
      return {
        type,
        message: isString(result) ? result : "",
        ref
      };
    }
  }
  var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData) ? validationData : {
    value: validationData,
    message: ""
  };
  var validateField = async (field, disabledFieldNames, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
    const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount } = field._f;
    const inputValue = get(formValues, name);
    if (!mount || disabledFieldNames.has(name)) {
      return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidity = (message) => {
      if (shouldUseNativeValidation && inputRef.reportValidity) {
        inputRef.setCustomValidity(isBoolean(message) ? "" : message || "");
        inputRef.reportValidity();
      }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox2 = isRadio || isCheckBox;
    const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === "" || inputValue === "" || Array.isArray(inputValue) && !inputValue.length || valueAsNumber && typeof inputValue === "number" && isNaN(inputValue);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
      const message = exceedMax ? maxLengthMessage : minLengthMessage;
      error[name] = {
        type: exceedMax ? maxType : minType,
        message,
        ref,
        ...appendErrorsCurry(exceedMax ? maxType : minType, message)
      };
    };
    if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox2 && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
      const { value, message } = isString(required) ? { value: !!required, message: required } : getValueAndMessage(required);
      if (value) {
        error[name] = {
          type: INPUT_VALIDATION_RULES.required,
          message,
          ref: inputRef,
          ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
        };
        if (!validateAllFieldCriteria) {
          setCustomValidity(message);
          return error;
        }
      }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
      let exceedMax;
      let exceedMin;
      const maxOutput = getValueAndMessage(max);
      const minOutput = getValueAndMessage(min);
      if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
        const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
        if (!isNullOrUndefined(maxOutput.value)) {
          exceedMax = valueNumber > maxOutput.value;
        }
        if (!isNullOrUndefined(minOutput.value)) {
          exceedMin = valueNumber < minOutput.value;
        }
      } else {
        const valueDate = ref.valueAsDate || new Date(inputValue);
        const convertTimeToDate = (time) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + time);
        const isTime = ref.type == "time";
        const isWeek = ref.type == "week";
        if (isString(maxOutput.value) && inputValue) {
          exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
        }
        if (isString(minOutput.value) && inputValue) {
          exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
        }
      }
      if (exceedMax || exceedMin) {
        getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
        if (!validateAllFieldCriteria) {
          setCustomValidity(error[name].message);
          return error;
        }
      }
    }
    if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
      const maxLengthOutput = getValueAndMessage(maxLength);
      const minLengthOutput = getValueAndMessage(minLength);
      const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
      const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
      if (exceedMax || exceedMin) {
        getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
        if (!validateAllFieldCriteria) {
          setCustomValidity(error[name].message);
          return error;
        }
      }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
      const { value: patternValue, message } = getValueAndMessage(pattern);
      if (isRegex(patternValue) && !inputValue.match(patternValue)) {
        error[name] = {
          type: INPUT_VALIDATION_RULES.pattern,
          message,
          ref,
          ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
        };
        if (!validateAllFieldCriteria) {
          setCustomValidity(message);
          return error;
        }
      }
    }
    if (validate) {
      if (isFunction(validate)) {
        const result = await validate(inputValue, formValues);
        const validateError = getValidateError(result, inputRef);
        if (validateError) {
          error[name] = {
            ...validateError,
            ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
          };
          if (!validateAllFieldCriteria) {
            setCustomValidity(validateError.message);
            return error;
          }
        }
      } else if (isObject(validate)) {
        let validationResult = {};
        for (const key in validate) {
          if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
            break;
          }
          const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
          if (validateError) {
            validationResult = {
              ...validateError,
              ...appendErrorsCurry(key, validateError.message)
            };
            setCustomValidity(validateError.message);
            if (validateAllFieldCriteria) {
              error[name] = validationResult;
            }
          }
        }
        if (!isEmptyObject(validationResult)) {
          error[name] = {
            ref: inputRef,
            ...validationResult
          };
          if (!validateAllFieldCriteria) {
            return error;
          }
        }
      }
    }
    setCustomValidity(true);
    return error;
  };
  var defaultOptions = {
    mode: VALIDATION_MODE.onSubmit,
    reValidateMode: VALIDATION_MODE.onChange,
    shouldFocusError: true
  };
  var DEFAULT_FORM_STATE = {
    submitCount: 0,
    isDirty: false,
    isReady: false,
    isValidating: false,
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {}
  };
  function createFormControl(props = {}) {
    let _options = {
      ...defaultOptions,
      ...props
    };
    let _formState = {
      ...cloneObject(DEFAULT_FORM_STATE),
      isLoading: isFunction(_options.defaultValues),
      errors: _options.errors || {},
      disabled: _options.disabled || false
    };
    let _fields = {};
    let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values) ? cloneObject(_options.defaultValues || _options.values) || {} : {};
    let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
    let _state = {
      action: false,
      mount: false,
      watch: false,
      keepIsValid: false
    };
    let _names = {
      mount: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      registerName: /* @__PURE__ */ new Set()
    };
    let delayErrorCallback;
    let timer = 0;
    const defaultProxyFormState = {
      isDirty: false,
      dirtyFields: false,
      validatingFields: false,
      touchedFields: false,
      isValidating: false,
      isValid: false,
      errors: false
    };
    const _proxyFormState = {
      ...defaultProxyFormState
    };
    let _proxySubscribeFormState = {
      ..._proxyFormState
    };
    const _subjects = {
      array: createSubject(),
      state: createSubject()
    };
    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
    const debounce = (callback) => (wait) => {
      clearTimeout(timer);
      timer = setTimeout(callback, wait);
    };
    const _setValid = async (shouldUpdateValid) => {
      if (_state.keepIsValid) {
        return;
      }
      if (!_options.disabled && (_proxyFormState.isValid || _proxySubscribeFormState.isValid || shouldUpdateValid)) {
        let isValid;
        if (_options.resolver) {
          isValid = isEmptyObject((await _runSchema()).errors);
          _updateIsValidating();
        } else {
          isValid = await executeBuiltInValidation({
            fields: _fields,
            onlyCheckValid: true,
            eventType: EVENTS.VALID
          });
        }
        if (isValid !== _formState.isValid) {
          _subjects.state.next({
            isValid
          });
        }
      }
    };
    const _updateIsValidating = (names, isValidating) => {
      if (!_options.disabled && (_proxyFormState.isValidating || _proxyFormState.validatingFields || _proxySubscribeFormState.isValidating || _proxySubscribeFormState.validatingFields)) {
        (names || Array.from(_names.mount)).forEach((name) => {
          if (name) {
            isValidating ? set(_formState.validatingFields, name, isValidating) : unset(_formState.validatingFields, name);
          }
        });
        _subjects.state.next({
          validatingFields: _formState.validatingFields,
          isValidating: !isEmptyObject(_formState.validatingFields)
        });
      }
    };
    const _updateDirtyFields = () => {
      _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
    };
    const _setFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
      if (args && method && !_options.disabled) {
        _state.action = true;
        if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
          const fieldValues = method(get(_fields, name), args.argA, args.argB);
          shouldSetValues && set(_fields, name, fieldValues);
        }
        if (shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
          const errors = method(get(_formState.errors, name), args.argA, args.argB);
          shouldSetValues && set(_formState.errors, name, errors);
          unsetEmptyArray(_formState.errors, name);
        }
        if ((_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
          const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
          shouldSetValues && set(_formState.touchedFields, name, touchedFields);
        }
        if (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) {
          _updateDirtyFields();
        }
        _subjects.state.next({
          name,
          isDirty: _getDirty(name, values),
          dirtyFields: _formState.dirtyFields,
          errors: _formState.errors,
          isValid: _formState.isValid
        });
      } else {
        set(_formValues, name, values);
      }
    };
    const updateErrors = (name, error) => {
      set(_formState.errors, name, error);
      _subjects.state.next({
        errors: _formState.errors
      });
    };
    const _setErrors = (errors) => {
      _formState.errors = errors;
      _subjects.state.next({
        errors: _formState.errors,
        isValid: false
      });
    };
    const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
      const field = get(_fields, name);
      if (field) {
        const wasUnsetInFormValues = isUndefined(get(_formValues, name));
        const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
        isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
        if (_state.mount && !_state.action) {
          _setValid();
          if (wasUnsetInFormValues && _formState.isDirty && (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty)) {
            const isDirty = _getDirty();
            if (!isDirty) {
              _formState.isDirty = false;
              _subjects.state.next({ ..._formState });
            }
          }
        }
      }
    };
    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
      let shouldUpdateField = false;
      let isPreviousDirty = false;
      const output = {
        name
      };
      if (!_options.disabled) {
        if (!isBlurEvent || shouldDirty) {
          if (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty) {
            isPreviousDirty = _formState.isDirty;
            _formState.isDirty = output.isDirty = _getDirty();
            shouldUpdateField = isPreviousDirty !== output.isDirty;
          }
          const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
          isPreviousDirty = !!get(_formState.dirtyFields, name);
          isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
          output.dirtyFields = _formState.dirtyFields;
          shouldUpdateField = shouldUpdateField || (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) && isPreviousDirty !== !isCurrentFieldPristine;
        }
        if (isBlurEvent) {
          const isPreviousFieldTouched = get(_formState.touchedFields, name);
          if (!isPreviousFieldTouched) {
            set(_formState.touchedFields, name, isBlurEvent);
            output.touchedFields = _formState.touchedFields;
            shouldUpdateField = shouldUpdateField || (_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && isPreviousFieldTouched !== isBlurEvent;
          }
        }
        shouldUpdateField && shouldRender && _subjects.state.next(output);
      }
      return shouldUpdateField ? output : {};
    };
    const shouldRenderByError = (name, isValid, error, fieldState) => {
      const previousFieldError = get(_formState.errors, name);
      const shouldUpdateValid = (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isBoolean(isValid) && _formState.isValid !== isValid;
      if (_options.delayError && error) {
        delayErrorCallback = debounce(() => updateErrors(name, error));
        delayErrorCallback(_options.delayError);
      } else {
        clearTimeout(timer);
        delayErrorCallback = null;
        error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
      }
      if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
        const updatedFormState = {
          ...fieldState,
          ...shouldUpdateValid && isBoolean(isValid) ? { isValid } : {},
          errors: _formState.errors,
          name
        };
        _formState = {
          ..._formState,
          ...updatedFormState
        };
        _subjects.state.next(updatedFormState);
      }
    };
    const _runSchema = async (name) => {
      _updateIsValidating(name, true);
      return await _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
    };
    const executeSchemaAndUpdateState = async (names) => {
      const { errors } = await _runSchema(names);
      _updateIsValidating(names);
      if (names) {
        for (const name of names) {
          const error = get(errors, name);
          error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
        }
      } else {
        _formState.errors = errors;
      }
      return errors;
    };
    const validateForm = async ({ name, eventType }) => {
      if (props.validate) {
        const result = await props.validate({
          formValues: _formValues,
          formState: _formState,
          name,
          eventType
        });
        if (isObject(result)) {
          for (const key in result) {
            const error = result[key];
            if (error) {
              setError(`${FORM_ERROR_TYPE}.${key}`, {
                message: isString(result.message) ? result.message : "",
                type: INPUT_VALIDATION_RULES.validate
              });
            }
          }
        } else if (isString(result) || !result) {
          setError(FORM_ERROR_TYPE, {
            message: result || "",
            type: INPUT_VALIDATION_RULES.validate
          });
        } else {
          clearErrors(FORM_ERROR_TYPE);
        }
        return result;
      }
      return true;
    };
    const executeBuiltInValidation = async ({ fields, onlyCheckValid, name, eventType, context = {
      valid: true,
      runRootValidation: false
    } }) => {
      if (props.validate) {
        context.runRootValidation = true;
        const result = await validateForm({
          name,
          eventType
        });
        if (!result) {
          context.valid = false;
          if (onlyCheckValid) {
            return context.valid;
          }
        }
      }
      for (const name2 in fields) {
        const field = fields[name2];
        if (field) {
          const { _f, ...fieldValue } = field;
          if (_f) {
            const isFieldArrayRoot = _names.array.has(_f.name);
            const isPromiseFunction = field._f && hasPromiseValidation(field._f);
            if (isPromiseFunction && _proxyFormState.validatingFields) {
              _updateIsValidating([_f.name], true);
            }
            const fieldError = await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !onlyCheckValid, isFieldArrayRoot);
            if (isPromiseFunction && _proxyFormState.validatingFields) {
              _updateIsValidating([_f.name]);
            }
            if (fieldError[_f.name]) {
              context.valid = false;
              if (onlyCheckValid) {
                break;
              }
            }
            !onlyCheckValid && (get(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
            if (props.shouldUseNativeValidation && fieldError[_f.name]) {
              break;
            }
          }
          !isEmptyObject(fieldValue) && await executeBuiltInValidation({
            context,
            onlyCheckValid,
            fields: fieldValue,
            name: name2,
            eventType
          });
        }
      }
      return context.valid;
    };
    const _removeUnmounted = () => {
      for (const name of _names.unMount) {
        const field = get(_fields, name);
        field && (field._f.refs ? field._f.refs.every((ref) => !live(ref)) : !live(field._f.ref)) && unregister(name);
      }
      _names.unMount = /* @__PURE__ */ new Set();
    };
    const _getDirty = (name, data2) => !_options.disabled && (name && data2 && set(_formValues, name, data2), !deepEqual(getValues(), _defaultValues));
    const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, {
      ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? { [names]: defaultValue } : defaultValue
    }, isGlobal, defaultValue);
    const _getFieldArray = (name) => compact(get(_state.mount ? _formValues : _defaultValues, name, _options.shouldUnregister ? get(_defaultValues, name, []) : []));
    const setFieldValue = (name, value, options = {}) => {
      const field = get(_fields, name);
      let fieldValue = value;
      if (field) {
        const fieldReference = field._f;
        if (fieldReference) {
          !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value, fieldReference));
          fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value) ? "" : value;
          if (isMultipleSelect(fieldReference.ref)) {
            [...fieldReference.ref.options].forEach((optionRef) => optionRef.selected = fieldValue.includes(optionRef.value));
          } else if (fieldReference.refs) {
            if (isCheckBoxInput(fieldReference.ref)) {
              fieldReference.refs.forEach((checkboxRef) => {
                if (!checkboxRef.defaultChecked || !checkboxRef.disabled) {
                  if (Array.isArray(fieldValue)) {
                    checkboxRef.checked = !!fieldValue.find((data2) => data2 === checkboxRef.value);
                  } else {
                    checkboxRef.checked = fieldValue === checkboxRef.value || !!fieldValue;
                  }
                }
              });
            } else {
              fieldReference.refs.forEach((radioRef) => radioRef.checked = radioRef.value === fieldValue);
            }
          } else if (isFileInput(fieldReference.ref)) {
            fieldReference.ref.value = "";
          } else {
            fieldReference.ref.value = fieldValue;
            if (!fieldReference.ref.type) {
              _subjects.state.next({
                name,
                values: cloneObject(_formValues)
              });
            }
          }
        }
      }
      (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
      options.shouldValidate && trigger(name);
    };
    const setFieldValues = (name, value, options) => {
      for (const fieldKey in value) {
        if (!value.hasOwnProperty(fieldKey)) {
          return;
        }
        const fieldValue = value[fieldKey];
        const fieldName = name + "." + fieldKey;
        const field = get(_fields, fieldName);
        (_names.array.has(name) || isObject(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setFieldValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
      }
    };
    const setValue = (name, value, options = {}) => {
      const field = get(_fields, name);
      const isFieldArray = _names.array.has(name);
      const cloneValue = cloneObject(value);
      const previousValue = get(_formValues, name);
      const isValueUnchanged = deepEqual(previousValue, cloneValue);
      set(_formValues, name, cloneValue);
      if (isFieldArray) {
        _subjects.array.next({
          name,
          values: cloneObject(_formValues)
        });
        if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields || _proxySubscribeFormState.isDirty || _proxySubscribeFormState.dirtyFields) && options.shouldDirty) {
          _updateDirtyFields();
          _subjects.state.next({
            name,
            dirtyFields: _formState.dirtyFields,
            isDirty: _getDirty(name, cloneValue)
          });
        }
      } else {
        const isEmpty = Array.isArray(cloneValue) && !cloneValue.length || isEmptyObject(cloneValue);
        if (!field || field._f || isNullOrUndefined(cloneValue) || isEmpty) {
          setFieldValue(name, cloneValue, options);
        } else {
          setFieldValues(name, cloneValue, options);
        }
      }
      if (!isValueUnchanged) {
        const watched = isWatched(name, _names);
        _subjects.state.next({
          ...watched && _formState,
          name: _state.mount || watched ? name : void 0,
          values: cloneObject(_formValues)
        });
      }
    };
    const setValues = (formValues) => {
      const updatedFormValues = isFunction(formValues) ? formValues(_formValues) : formValues;
      if (!deepEqual(_formValues, updatedFormValues)) {
        _formValues = {
          ..._formValues,
          ...updatedFormValues
        };
        _subjects.state.next({ ..._formState, values: _formValues });
      }
    };
    const onChange = async (event) => {
      _state.mount = true;
      const target = event.target;
      let name = target.name;
      let isFieldValueUpdated = true;
      const field = get(_fields, name);
      const _updateIsFieldValueUpdated = (fieldValue) => {
        isFieldValueUpdated = Number.isNaN(fieldValue) || isDateObject(fieldValue) && isNaN(fieldValue.getTime()) || deepEqual(fieldValue, get(_formValues, name, fieldValue));
      };
      const validationModeBeforeSubmit = getValidationModes(_options.mode);
      const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
      if (field) {
        let error;
        let isValid;
        const fieldValue = target.type ? getFieldValue(field._f) : getEventValue(event);
        const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
        const shouldSkipValidation = !hasValidation(field._f) && !props.validate && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
        const watched = isWatched(name, _names, isBlurEvent);
        set(_formValues, name, fieldValue);
        if (isBlurEvent) {
          if (!target || !target.readOnly) {
            field._f.onBlur && field._f.onBlur(event);
            delayErrorCallback && delayErrorCallback(0);
          }
        } else if (field._f.onChange) {
          field._f.onChange(event);
        }
        const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent);
        const shouldRender = !isEmptyObject(fieldState) || watched;
        !isBlurEvent && _subjects.state.next({
          name,
          type: event.type,
          values: cloneObject(_formValues)
        });
        if (shouldSkipValidation) {
          if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
            if (_options.mode === "onBlur") {
              if (isBlurEvent) {
                _setValid();
              }
            } else if (!isBlurEvent) {
              _setValid();
            }
          }
          return shouldRender && _subjects.state.next({ name, ...watched ? {} : fieldState });
        }
        if (!_options.resolver && props.validate) {
          await validateForm({
            name,
            eventType: event.type
          });
        }
        !isBlurEvent && watched && _subjects.state.next({ ..._formState });
        if (_options.resolver) {
          const { errors } = await _runSchema([name]);
          _updateIsValidating([name]);
          _updateIsFieldValueUpdated(fieldValue);
          if (isFieldValueUpdated) {
            const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
            const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
            error = errorLookupResult.error;
            name = errorLookupResult.name;
            isValid = isEmptyObject(errors);
          }
        } else {
          _updateIsValidating([name], true);
          error = (await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
          _updateIsValidating([name]);
          _updateIsFieldValueUpdated(fieldValue);
          if (isFieldValueUpdated) {
            if (error) {
              isValid = false;
            } else if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
              isValid = await executeBuiltInValidation({
                fields: _fields,
                onlyCheckValid: true,
                name,
                eventType: event.type
              });
            }
          }
        }
        if (isFieldValueUpdated) {
          field._f.deps && (!Array.isArray(field._f.deps) || field._f.deps.length > 0) && trigger(field._f.deps);
          shouldRenderByError(name, isValid, error, fieldState);
        }
      }
    };
    const _focusInput = (ref, key) => {
      if (get(_formState.errors, key) && ref.focus) {
        ref.focus();
        return 1;
      }
      return;
    };
    const trigger = async (name, options = {}) => {
      let isValid;
      let validationResult;
      const fieldNames = convertToArrayPayload(name);
      if (_options.resolver) {
        const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
        isValid = isEmptyObject(errors);
        validationResult = name ? !fieldNames.some((name2) => get(errors, name2)) : isValid;
      } else if (name) {
        validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
          const field = get(_fields, fieldName);
          return await executeBuiltInValidation({
            fields: field && field._f ? { [fieldName]: field } : field,
            eventType: EVENTS.TRIGGER
          });
        }))).every(Boolean);
        !(!validationResult && !_formState.isValid) && _setValid();
      } else {
        validationResult = isValid = await executeBuiltInValidation({
          fields: _fields,
          name,
          eventType: EVENTS.TRIGGER
        });
      }
      _subjects.state.next({
        ...!isString(name) || (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isValid !== _formState.isValid ? {} : { name },
        ..._options.resolver || !name ? { isValid } : {},
        errors: _formState.errors
      });
      options.shouldFocus && !validationResult && iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
      return validationResult;
    };
    const getValues = (fieldNames, config) => {
      let values = {
        ..._state.mount ? _formValues : _defaultValues
      };
      if (config) {
        values = extractFormValues(config.dirtyFields ? _formState.dirtyFields : _formState.touchedFields, values);
      }
      return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name) => get(values, name));
    };
    const getFieldState = (name, formState) => ({
      invalid: !!get((formState || _formState).errors, name),
      isDirty: !!get((formState || _formState).dirtyFields, name),
      error: get((formState || _formState).errors, name),
      isValidating: !!get(_formState.validatingFields, name),
      isTouched: !!get((formState || _formState).touchedFields, name)
    });
    const clearErrors = (name) => {
      const names = name ? convertToArrayPayload(name) : void 0;
      names === null || names === void 0 ? void 0 : names.forEach((inputName) => unset(_formState.errors, inputName));
      if (names) {
        names.forEach((inputName) => {
          _subjects.state.next({
            name: inputName,
            errors: _formState.errors
          });
        });
      } else {
        _subjects.state.next({
          errors: {}
        });
      }
    };
    const setError = (name, error, options) => {
      const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
      const currentError = get(_formState.errors, name) || {};
      const { ref: currentRef, message, type, ...restOfErrorTree } = currentError;
      set(_formState.errors, name, {
        ...restOfErrorTree,
        ...error,
        ref
      });
      _subjects.state.next({
        name,
        errors: _formState.errors,
        isValid: false
      });
      options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (name, defaultValue) => isFunction(name) ? _subjects.state.subscribe({
      next: (payload) => "values" in payload && name(payload.values || _getWatch(void 0, defaultValue), payload)
    }) : _getWatch(name, defaultValue, true);
    const _subscribe = (props2) => _subjects.state.subscribe({
      next: (formState) => {
        if (shouldSubscribeByName(props2.name, formState.name, props2.exact) && shouldRenderFormState(formState, props2.formState || _proxyFormState, _setFormState, props2.reRenderRoot)) {
          const snapshot = { ..._formValues };
          props2.callback({
            values: snapshot,
            ..._formState,
            ...formState,
            defaultValues: _defaultValues
          });
        }
      }
    }).unsubscribe;
    const subscribe = (props2) => {
      _state.mount = true;
      _proxySubscribeFormState = {
        ..._proxySubscribeFormState,
        ...props2.formState
      };
      return _subscribe({
        ...props2,
        formState: {
          ...defaultProxyFormState,
          ...props2.formState
        }
      });
    };
    const unregister = (name, options = {}) => {
      for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
        _names.mount.delete(fieldName);
        _names.array.delete(fieldName);
        if (!options.keepValue) {
          unset(_fields, fieldName);
          unset(_formValues, fieldName);
        }
        !options.keepError && unset(_formState.errors, fieldName);
        !options.keepDirty && unset(_formState.dirtyFields, fieldName);
        !options.keepTouched && unset(_formState.touchedFields, fieldName);
        !options.keepIsValidating && unset(_formState.validatingFields, fieldName);
        !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
      }
      _subjects.state.next({
        values: cloneObject(_formValues)
      });
      _subjects.state.next({
        ..._formState,
        ...!options.keepDirty ? {} : { isDirty: _getDirty() }
      });
      !options.keepIsValid && _setValid();
    };
    const _setDisabledField = ({ disabled, name }) => {
      if (isBoolean(disabled) && _state.mount || !!disabled || _names.disabled.has(name)) {
        const wasDisabled = _names.disabled.has(name);
        const isDisabled = !!disabled;
        const disabledStateChanged = wasDisabled !== isDisabled;
        disabled ? _names.disabled.add(name) : _names.disabled.delete(name);
        disabledStateChanged && _state.mount && !_state.action && _setValid();
      }
    };
    const register = (name, options = {}) => {
      let field = get(_fields, name);
      const disabledIsDefined = isBoolean(options.disabled) || isBoolean(_options.disabled);
      const shouldRevalidateRemount = !_names.registerName.has(name) && field && field._f && !field._f.mount;
      set(_fields, name, {
        ...field || {},
        _f: {
          ...field && field._f ? field._f : { ref: { name } },
          name,
          mount: true,
          ...options
        }
      });
      _names.mount.add(name);
      if (field && !shouldRevalidateRemount) {
        _setDisabledField({
          disabled: isBoolean(options.disabled) ? options.disabled : _options.disabled,
          name
        });
      } else {
        updateValidAndValue(name, true, options.value);
      }
      return {
        ...disabledIsDefined ? { disabled: options.disabled || _options.disabled } : {},
        ..._options.progressive ? {
          required: !!options.required,
          min: getRuleValue(options.min),
          max: getRuleValue(options.max),
          minLength: getRuleValue(options.minLength),
          maxLength: getRuleValue(options.maxLength),
          pattern: getRuleValue(options.pattern)
        } : {},
        name,
        onChange,
        onBlur: onChange,
        ref: (ref) => {
          if (ref) {
            _names.registerName.add(name);
            register(name, options);
            _names.registerName.delete(name);
            field = get(_fields, name);
            const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll("input,select,textarea")[0] || ref : ref : ref;
            const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
            const refs = field._f.refs || [];
            if (radioOrCheckbox ? refs.find((option) => option === fieldRef) : fieldRef === field._f.ref) {
              return;
            }
            set(_fields, name, {
              _f: {
                ...field._f,
                ...radioOrCheckbox ? {
                  refs: [
                    ...refs.filter(live),
                    fieldRef,
                    ...Array.isArray(get(_defaultValues, name)) ? [{}] : []
                  ],
                  ref: { type: fieldRef.type, name }
                } : { ref: fieldRef }
              }
            });
            updateValidAndValue(name, false, void 0, fieldRef);
          } else {
            field = get(_fields, name, {});
            if (field._f) {
              field._f.mount = false;
            }
            (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
          }
        }
      };
    };
    const _focusError = () => _options.shouldFocusError && iterateFieldsByAction(_fields, _focusInput, _names.mount);
    const _disableForm = (disabled) => {
      if (isBoolean(disabled)) {
        _subjects.state.next({ disabled });
        iterateFieldsByAction(_fields, (ref, name) => {
          const currentField = get(_fields, name);
          if (currentField) {
            ref.disabled = currentField._f.disabled || disabled;
            if (Array.isArray(currentField._f.refs)) {
              currentField._f.refs.forEach((inputRef) => {
                inputRef.disabled = currentField._f.disabled || disabled;
              });
            }
          }
        }, 0, false);
      }
    };
    const handleSubmit = (onValid, onInvalid) => async (e) => {
      let onValidError = void 0;
      if (e) {
        e.preventDefault && e.preventDefault();
        e.persist && e.persist();
      }
      let fieldValues = cloneObject(_formValues);
      _subjects.state.next({
        isSubmitting: true
      });
      if (_options.resolver) {
        const { errors, values } = await _runSchema();
        _updateIsValidating();
        _formState.errors = errors;
        fieldValues = cloneObject(values);
      } else {
        await executeBuiltInValidation({
          fields: _fields,
          eventType: EVENTS.SUBMIT
        });
      }
      if (_names.disabled.size) {
        for (const name of _names.disabled) {
          unset(fieldValues, name);
        }
      }
      unset(_formState.errors, ROOT_ERROR_TYPE);
      if (isEmptyObject(_formState.errors)) {
        _subjects.state.next({
          errors: {}
        });
        try {
          await onValid(fieldValues, e);
        } catch (error) {
          onValidError = error;
        }
      } else {
        if (onInvalid) {
          await onInvalid({ ..._formState.errors }, e);
        }
        _focusError();
        setTimeout(_focusError);
      }
      _subjects.state.next({
        isSubmitted: true,
        isSubmitting: false,
        isSubmitSuccessful: isEmptyObject(_formState.errors) && !onValidError,
        submitCount: _formState.submitCount + 1,
        errors: _formState.errors
      });
      if (onValidError) {
        throw onValidError;
      }
    };
    const resetField = (name, options = {}) => {
      if (get(_fields, name)) {
        if (isUndefined(options.defaultValue)) {
          setValue(name, cloneObject(get(_defaultValues, name)));
        } else {
          setValue(name, options.defaultValue);
          set(_defaultValues, name, cloneObject(options.defaultValue));
        }
        if (!options.keepTouched) {
          unset(_formState.touchedFields, name);
        }
        if (!options.keepDirty) {
          unset(_formState.dirtyFields, name);
          _formState.isDirty = options.defaultValue ? _getDirty(name, cloneObject(get(_defaultValues, name))) : _getDirty();
        }
        if (!options.keepError) {
          unset(_formState.errors, name);
          _proxyFormState.isValid && _setValid();
        }
        _subjects.state.next({ ..._formState });
      }
    };
    const _reset = (formValues, keepStateOptions = {}) => {
      const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
      const cloneUpdatedValues = cloneObject(updatedValues);
      const isEmptyResetValues = isEmptyObject(formValues);
      const values = isEmptyResetValues ? _defaultValues : cloneUpdatedValues;
      if (!keepStateOptions.keepDefaultValues) {
        _defaultValues = updatedValues;
      }
      if (!keepStateOptions.keepValues) {
        if (keepStateOptions.keepDirtyValues) {
          const fieldsToCheck = /* @__PURE__ */ new Set([
            ..._names.mount,
            ...Object.keys(getDirtyFields(_defaultValues, _formValues))
          ]);
          for (const fieldName of Array.from(fieldsToCheck)) {
            const isDirty = get(_formState.dirtyFields, fieldName);
            const existingValue = get(_formValues, fieldName);
            const newValue = get(values, fieldName);
            if (isDirty && !isUndefined(existingValue)) {
              set(values, fieldName, existingValue);
            } else if (!isDirty && !isUndefined(newValue)) {
              setValue(fieldName, newValue);
            }
          }
        } else {
          if (isWeb && isUndefined(formValues)) {
            for (const name of _names.mount) {
              const field = get(_fields, name);
              if (field && field._f) {
                const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
                if (isHTMLElement(fieldReference)) {
                  const form = fieldReference.closest("form");
                  if (form) {
                    form.reset();
                    break;
                  }
                }
              }
            }
          }
          if (keepStateOptions.keepFieldsRef) {
            for (const fieldName of _names.mount) {
              setValue(fieldName, get(values, fieldName));
            }
          } else {
            _fields = {};
          }
        }
        _formValues = _options.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneObject(values);
        _subjects.array.next({
          values: { ...values }
        });
        _subjects.state.next({
          values: { ...values }
        });
      }
      _names = {
        mount: keepStateOptions.keepDirtyValues ? _names.mount : /* @__PURE__ */ new Set(),
        unMount: /* @__PURE__ */ new Set(),
        array: /* @__PURE__ */ new Set(),
        registerName: /* @__PURE__ */ new Set(),
        disabled: /* @__PURE__ */ new Set(),
        watch: /* @__PURE__ */ new Set(),
        watchAll: false,
        focus: ""
      };
      _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid || !!keepStateOptions.keepDirtyValues || !_options.shouldUnregister && !isEmptyObject(values);
      _state.watch = !!_options.shouldUnregister;
      _state.keepIsValid = !!keepStateOptions.keepIsValid;
      _state.action = false;
      if (!keepStateOptions.keepErrors) {
        _formState.errors = {};
      }
      _subjects.state.next({
        submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
        isDirty: isEmptyResetValues ? false : keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
        isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
        dirtyFields: isEmptyResetValues ? {} : keepStateOptions.keepDirtyValues ? keepStateOptions.keepDefaultValues && _formValues ? getDirtyFields(_defaultValues, _formValues) : _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : keepStateOptions.keepDirty ? _formState.dirtyFields : {},
        touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
        errors: keepStateOptions.keepErrors ? _formState.errors : {},
        isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful ? _formState.isSubmitSuccessful : false,
        isSubmitting: false,
        defaultValues: _defaultValues
      });
    };
    const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues) ? formValues(_formValues) : formValues, { ..._options.resetOptions, ...keepStateOptions });
    const setFocus = (name, options = {}) => {
      const field = get(_fields, name);
      const fieldReference = field && field._f;
      if (fieldReference) {
        const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
        if (fieldRef.focus) {
          setTimeout(() => {
            fieldRef.focus();
            options.shouldSelect && isFunction(fieldRef.select) && fieldRef.select();
          });
        }
      }
    };
    const _setFormState = (updatedFormState) => {
      _formState = {
        ..._formState,
        ...updatedFormState
      };
    };
    const _resetDefaultValues = () => isFunction(_options.defaultValues) && _options.defaultValues().then((values) => {
      reset(values, _options.resetOptions);
      _subjects.state.next({
        isLoading: false
      });
    });
    const methods = {
      control: {
        register,
        unregister,
        getFieldState,
        handleSubmit,
        setError,
        _subscribe,
        _runSchema,
        _updateIsValidating,
        _focusError,
        _getWatch,
        _getDirty,
        _setValid,
        _setFieldArray,
        _setDisabledField,
        _setErrors,
        _getFieldArray,
        _reset,
        _resetDefaultValues,
        _removeUnmounted,
        _disableForm,
        _subjects,
        _proxyFormState,
        get _fields() {
          return _fields;
        },
        get _formValues() {
          return _formValues;
        },
        get _state() {
          return _state;
        },
        set _state(value) {
          _state = value;
        },
        get _defaultValues() {
          return _defaultValues;
        },
        get _names() {
          return _names;
        },
        set _names(value) {
          _names = value;
        },
        get _formState() {
          return _formState;
        },
        get _options() {
          return _options;
        },
        set _options(value) {
          _options = {
            ..._options,
            ...value
          };
        }
      },
      subscribe,
      trigger,
      register,
      handleSubmit,
      watch,
      setValue,
      setValues,
      getValues,
      reset,
      resetField,
      clearErrors,
      unregister,
      setError,
      setFocus,
      getFieldState
    };
    return {
      ...methods,
      formControl: methods
    };
  }
  function useForm(props = {}) {
    const _formControl = import_react.default.useRef(void 0);
    const _values = import_react.default.useRef(void 0);
    const [formState, updateFormState] = import_react.default.useState(() => ({
      ...cloneObject(DEFAULT_FORM_STATE),
      isLoading: isFunction(props.defaultValues),
      errors: props.errors || {},
      disabled: props.disabled || false,
      defaultValues: isFunction(props.defaultValues) ? void 0 : props.defaultValues
    }));
    if (!_formControl.current) {
      if (props.formControl) {
        _formControl.current = {
          ...props.formControl,
          formState
        };
        if (props.defaultValues && !isFunction(props.defaultValues)) {
          props.formControl.reset(props.defaultValues, props.resetOptions);
        }
      } else {
        const { formControl, ...rest } = createFormControl(props);
        _formControl.current = {
          ...rest,
          formState
        };
      }
    }
    const control = _formControl.current.control;
    control._options = props;
    useIsomorphicLayoutEffect2(() => {
      const sub = control._subscribe({
        formState: control._proxyFormState,
        callback: () => updateFormState({ ...control._formState }),
        reRenderRoot: true
      });
      updateFormState((data2) => ({
        ...data2,
        isReady: true
      }));
      control._formState.isReady = true;
      return sub;
    }, [control]);
    import_react.default.useEffect(() => control._disableForm(props.disabled), [control, props.disabled]);
    import_react.default.useEffect(() => {
      if (props.mode) {
        control._options.mode = props.mode;
      }
      if (props.reValidateMode) {
        control._options.reValidateMode = props.reValidateMode;
      }
    }, [control, props.mode, props.reValidateMode]);
    import_react.default.useEffect(() => {
      if (props.errors) {
        control._setErrors(props.errors);
        control._focusError();
      }
    }, [control, props.errors]);
    import_react.default.useEffect(() => {
      props.shouldUnregister && control._subjects.state.next({
        values: control._getWatch()
      });
    }, [control, props.shouldUnregister]);
    import_react.default.useEffect(() => {
      if (control._proxyFormState.isDirty) {
        const isDirty = control._getDirty();
        if (isDirty !== formState.isDirty) {
          control._subjects.state.next({
            isDirty
          });
        }
      }
    }, [control, formState.isDirty]);
    import_react.default.useEffect(() => {
      var _a;
      if (props.values && !deepEqual(props.values, _values.current)) {
        control._reset(props.values, {
          keepFieldsRef: true,
          ...control._options.resetOptions
        });
        if (!((_a = control._options.resetOptions) === null || _a === void 0 ? void 0 : _a.keepIsValid)) {
          control._setValid();
        }
        _values.current = props.values;
        updateFormState((state) => ({ ...state }));
      } else {
        control._resetDefaultValues();
      }
    }, [control, props.values]);
    import_react.default.useEffect(() => {
      if (!control._state.mount) {
        control._setValid();
        control._state.mount = true;
      }
      if (control._state.watch) {
        control._state.watch = false;
        control._subjects.state.next({ ...control._formState });
      }
      control._removeUnmounted();
    });
    _formControl.current.formState = import_react.default.useMemo(() => getProxyFormState(formState, control), [control, formState]);
    return _formControl.current;
  }

  // src/components/User.jsx
  var import_meta2 = {};
  function User() {
    let { state } = useLocation();
    const user = state?.user;
    const isEdit = state?.isEdit || false;
    const [currentUser, setCurrentUser] = (0, import_react2.useState)(user || null);
    const { register, handleSubmit, reset } = useForm({
      defaultValues: currentUser || {}
    });
    (0, import_react2.useEffect)(() => {
      if (currentUser) {
        reset(currentUser);
      }
    }, [currentUser, reset]);
    const [loading, setLoading] = (0, import_react2.useState)(false);
    const [error, setError] = (0, import_react2.useState)(null);
    const [isEditing, setIsEditing] = (0, import_react2.useState)(isEdit);
    const BASE_URL = import_meta2.env.VITE_API_URL || "http://localhost:4000";
    if (!currentUser) {
      return /* @__PURE__ */ React.createElement("div", { className: "text-center text-red-500 p-8" }, /* @__PURE__ */ React.createElement("p", { className: "text-2xl font-semibold" }, "No user selected."), /* @__PURE__ */ React.createElement("p", { className: "mt-2 text-lg text-gray-600" }, "Open the user details page from the users list to view a profile."));
    }
    const handleEditToggle = () => {
      setIsEditing(!isEditing);
      reset(currentUser);
    };
    const onEditUser = async (updatedUser) => {
      setLoading(true);
      setError(null);
      const userId = currentUser._id || currentUser.id;
      if (!userId) {
        setError(new Error("User ID is missing. Unable to save changes."));
        setLoading(false);
        return;
      }
      try {
        let res = await fetch(`${BASE_URL}/user-api/users/${userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updatedUser)
        });
        if (res.status === 200) {
          const result = await res.json();
          setCurrentUser(result.payload || updatedUser);
          setIsEditing(false);
          alert("User updated successfully");
        } else {
          const errorData = await res.json();
          throw new Error(errorData.message || "Error updating user");
        }
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    if (loading) {
      return /* @__PURE__ */ React.createElement("p", { className: "text-center text-orange-400 text-3xl" }, "Loading...");
    }
    if (!isEditing) {
      return /* @__PURE__ */ React.createElement("div", { className: "max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-lg" }, /* @__PURE__ */ React.createElement("h1", { className: "text-4xl font-bold text-gray-800 mb-6" }, currentUser.name), /* @__PURE__ */ React.createElement("div", { className: "space-y-4 mb-8" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-gray-500 text-sm" }, "Email"), /* @__PURE__ */ React.createElement("p", { className: "text-lg text-gray-800" }, currentUser.email)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-gray-500 text-sm" }, "Date of Birth"), /* @__PURE__ */ React.createElement("p", { className: "text-lg text-gray-800" }, currentUser.dateOfBirth)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-gray-500 text-sm" }, "Mobile Number"), /* @__PURE__ */ React.createElement("p", { className: "text-lg text-gray-800" }, currentUser.mobileNumber))), /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: handleEditToggle,
          className: "bg-blue-500 text-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
        },
        "Edit User"
      ));
    }
    return /* @__PURE__ */ React.createElement("div", { className: "text-center" }, /* @__PURE__ */ React.createElement("h1", { className: "text-5xl text-gray-600" }, "Edit User"), error && /* @__PURE__ */ React.createElement("p", { className: "text-center text-red-500 text-lg mt-4" }, error.message), /* @__PURE__ */ React.createElement(
      "form",
      {
        onSubmit: handleSubmit(onEditUser),
        className: "max-w-96 mx-auto mt-10"
      },
      /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "text",
          ...register("name"),
          className: "mb-5 border w-full text-2xl p-2",
          placeholder: "Name"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "email",
          ...register("email"),
          className: "mb-5 border w-full text-2xl p-2",
          placeholder: "Email"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "date",
          ...register("dateOfBirth"),
          className: "mb-5 border w-full text-2xl p-2",
          placeholder: "Date of birth"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "number",
          ...register("mobileNumber"),
          className: "mb-5 border w-full text-2xl p-2",
          placeholder: "Mobile number"
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "submit",
          className: "flex-1 text-2xl bg-lime-400 text-lime-50 px-8 py-4 rounded-lg font-semibold hover:bg-lime-500 transition"
        },
        "Save Changes"
      ), /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          onClick: handleEditToggle,
          className: "flex-1 text-2xl bg-gray-400 text-gray-50 px-8 py-4 rounded-lg font-semibold hover:bg-gray-500 transition"
        },
        "Cancel"
      ))
    ));
  }
  var User_default = User;
})();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/chunk-LFPYN7LY.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.13.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/

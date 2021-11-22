(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom'), require('@vanhyb/backbone'), require('@dormakaba/vanguard'), require('classnames')) :
    typeof define === 'function' && define.amd ? define(['react', 'react-dom', '@vanhyb/backbone', '@dormakaba/vanguard', 'classnames'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.dormakaba.vendorReact['vendor/react'], global.dormakaba.vendorReact['vendor/react-dom'], global.DormakabaBackbone, global.DormakabaVanguard, global.dormakaba.vendorReact['vendor/classnames']));
}(this, (function (React, reactDom, backbone, vanguard, cx) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

    var AppConfigContext = /*#__PURE__*/React.createContext(null);
    var AppConfigProvider = function AppConfigProvider(_ref) {
      var appId = _ref.appId,
          children = _ref.children,
          _ref$defaultValue = _ref.defaultValue,
          defaultValue = _ref$defaultValue === void 0 ? {} : _ref$defaultValue;
      var value = React.useMemo(function () {
        if (!appId) {
          return defaultValue;
        }

        var selector = "[data-react-app=\"" + appId + "\"]";
        var rootElement = document.querySelector(selector);

        if (!rootElement) {
          throw new Error(selector + " is missing");
        }

        var script = rootElement.querySelector('script');
        return script != null && script.innerHTML ? JSON.parse(script.innerHTML) : defaultValue;
      }, [appId, defaultValue]);
      return /*#__PURE__*/React__default['default'].createElement(AppConfigContext.Provider, {
        value: value
      }, children);
    };

    var useAppConfig = function useAppConfig() {
      var value = React.useContext(AppConfigContext);
      return value;
    };

    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }

      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }

    function _asyncToGenerator(fn) {
      return function () {
        var self = this,
            args = arguments;
        return new Promise(function (resolve, reject) {
          var gen = fn.apply(self, args);

          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }

          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }

          _next(undefined);
        });
      };
    }

    var runtime = {exports: {}};

    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    (function (module) {
      var runtime = function (exports) {

        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined$1; // More compressible than void 0.

        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

        function define(obj, key, value) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return obj[key];
        }

        try {
          // IE 8 has a broken Object.defineProperty that only works on DOM objects.
          define({}, "");
        } catch (err) {
          define = function define(obj, key, value) {
            return obj[key] = value;
          };
        }

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.

          generator._invoke = makeInvokeMethod(innerFn, self, context);
          return generator;
        }

        exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.

        function tryCatch(fn, obj, arg) {
          try {
            return {
              type: "normal",
              arg: fn.call(obj, arg)
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err
            };
          }
        }

        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.

        var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.

        function Generator() {}

        function GeneratorFunction() {}

        function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.


        var IteratorPrototype = {};

        IteratorPrototype[iteratorSymbol] = function () {
          return this;
        };

        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          // This environment has a native %IteratorPrototype%; use it instead
          // of the polyfill.
          IteratorPrototype = NativeIteratorPrototype;
        }

        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.

        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }

        exports.isGeneratorFunction = function (genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };

        exports.mark = function (genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
          }

          genFun.prototype = Object.create(Gp);
          return genFun;
        }; // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.


        exports.awrap = function (arg) {
          return {
            __await: arg
          };
        };

        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);

            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;

              if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                return PromiseImpl.resolve(value.__await).then(function (value) {
                  invoke("next", value, resolve, reject);
                }, function (err) {
                  invoke("throw", err, resolve, reject);
                });
              }

              return PromiseImpl.resolve(value).then(function (unwrapped) {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration.
                result.value = unwrapped;
                resolve(result);
              }, function (error) {
                // If a rejected Promise was yielded, throw the rejection back
                // into the async generator function so it can be handled there.
                return invoke("throw", error, resolve, reject);
              });
            }
          }

          var previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function (resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }

            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          } // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).


          this._invoke = enqueue;
        }

        defineIteratorMethods(AsyncIterator.prototype);

        AsyncIterator.prototype[asyncIteratorSymbol] = function () {
          return this;
        };

        exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.

        exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
          if (PromiseImpl === void 0) PromiseImpl = Promise;
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
          return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
          : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
        };

        function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }

            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              } // Be forgiving, per 25.3.3.3.3 of the spec:
              // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


              return doneResult();
            }

            context.method = method;
            context.arg = arg;

            while (true) {
              var delegate = context.delegate;

              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);

                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }

              if (context.method === "next") {
                // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
              } else if (context.method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }

                context.dispatchException(context.arg);
              } else if (context.method === "return") {
                context.abrupt("return", context.arg);
              }

              state = GenStateExecuting;
              var record = tryCatch(innerFn, self, context);

              if (record.type === "normal") {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                if (record.arg === ContinueSentinel) {
                  continue;
                }

                return {
                  value: record.arg,
                  done: context.done
                };
              } else if (record.type === "throw") {
                state = GenStateCompleted; // Dispatch the exception by looping back around to the
                // context.dispatchException(context.arg) call above.

                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        } // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.


        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];

          if (method === undefined$1) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;

            if (context.method === "throw") {
              // Note: ["return"] must be used for ES3 parsing compatibility.
              if (delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined$1;
                maybeInvokeDelegate(delegate, context);

                if (context.method === "throw") {
                  // If maybeInvokeDelegate(context) changed context.method from
                  // "return" to "throw", let that override the TypeError below.
                  return ContinueSentinel;
                }
              }

              context.method = "throw";
              context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }

            return ContinueSentinel;
          }

          var record = tryCatch(method, delegate.iterator, context.arg);

          if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }

          var info = record.arg;

          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }

          if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

            context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.

            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined$1;
            }
          } else {
            // Re-yield the result returned by the delegate method.
            return info;
          } // The delegate iterator is finished, so forget it and continue with
          // the outer generator.


          context.delegate = null;
          return ContinueSentinel;
        } // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.


        defineIteratorMethods(Gp);
        define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.

        Gp[iteratorSymbol] = function () {
          return this;
        };

        Gp.toString = function () {
          return "[object Generator]";
        };

        function pushTryEntry(locs) {
          var entry = {
            tryLoc: locs[0]
          };

          if (1 in locs) {
            entry.catchLoc = locs[1];
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }

          this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }

        function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [{
            tryLoc: "root"
          }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        exports.keys = function (object) {
          var keys = [];

          for (var key in object) {
            keys.push(key);
          }

          keys.reverse(); // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.

          return function next() {
            while (keys.length) {
              var key = keys.pop();

              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            } // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.


            next.done = true;
            return next;
          };
        };

        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];

            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }

            if (typeof iterable.next === "function") {
              return iterable;
            }

            if (!isNaN(iterable.length)) {
              var i = -1,
                  next = function next() {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next.value = iterable[i];
                    next.done = false;
                    return next;
                  }
                }

                next.value = undefined$1;
                next.done = true;
                return next;
              };

              return next.next = next;
            }
          } // Return an iterator with no values.


          return {
            next: doneResult
          };
        }

        exports.values = values;

        function doneResult() {
          return {
            value: undefined$1,
            done: true
          };
        }

        Context.prototype = {
          constructor: Context,
          reset: function reset(skipTempReset) {
            this.prev = 0;
            this.next = 0; // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.

            this.sent = this._sent = undefined$1;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined$1;
            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (var name in this) {
                // Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                  this[name] = undefined$1;
                }
              }
            }
          },
          stop: function stop() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;

            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }

            return this.rval;
          },
          dispatchException: function dispatchException(exception) {
            if (this.done) {
              throw exception;
            }

            var context = this;

            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;

              if (caught) {
                // If the dispatched exception was caught by a catch block,
                // then let that catch block handle the exception normally.
                context.method = "next";
                context.arg = undefined$1;
              }

              return !!caught;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;

              if (entry.tryLoc === "root") {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
              }

              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },
          abrupt: function abrupt(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }

            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null;
            }

            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;

            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }

            return this.complete(record);
          },
          complete: function complete(record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }

            if (record.type === "break" || record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }

            return ContinueSentinel;
          },
          finish: function finish(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          "catch": function _catch(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;

                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }

                return thrown;
              }
            } // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.


            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            };

            if (this.method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              this.arg = undefined$1;
            }

            return ContinueSentinel;
          }
        }; // Regardless of whether this script is executing as a CommonJS module
        // or not, return the runtime object so that we can declare the variable
        // regeneratorRuntime in the outer scope, which allows this module to be
        // injected easily by `bin/regenerator --include-runtime script.js`.

        return exports;
      }( // If this script is executing as a CommonJS module, use module.exports
      // as the regeneratorRuntime namespace. Otherwise create a new empty
      // object. Either way, the resulting object will be used to initialize
      // the regeneratorRuntime variable at the top of this file.
      module.exports );

      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        // This module should not be running in strict mode, so the above
        // assignment should always work unless something is misconfigured. Just
        // in case runtime.js accidentally runs in strict mode, we can escape
        // strict mode using a global Function call. This could conceivably fail
        // if a Content Security Policy forbids using Function, but in that case
        // the proper solution is to fix the accidental strict mode problem. If
        // you've misconfigured your bundler to force strict mode and applied a
        // CSP to forbid Function, and you're not willing to fix either of those
        // problems, please detail your unique predicament in a GitHub issue.
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    })(runtime);

    var regenerator = runtime.exports;

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }

    //import { addNotification, MessageType } from '@dormakaba/notifications';
    function showErrorMessage(xmlRequest) {
      var errorDetails = extractErrors(xmlRequest);
      errorDetails.errors.forEach(function (error) {
        // Optional Technical MKS Message will be placed on second line to make debugging easier.
        var messages = [error.message, error.technicalMksMessage].filter(Boolean);
        console.log(error.errorId, messages.join('<br>')); //addNotification(MessageType.ERROR, error.errorId, messages.join('<br>'));
      });
    }
    /**
     * Small helper to provide a fallback if the backend error code
     * cannot be parsed properly
     */

    function extractErrors(xmlRequest) {
      var fallback = {
        errors: [{
          errorId: String(xmlRequest.status),
          message: xmlRequest.responseText || xmlRequest.statusText,
          stackTrace: ''
        }]
      }; // Try to overwrite fallback message with backend response

      try {
        var parsedDetails = JSON.parse(xmlRequest.responseText);

        if (!parsedDetails.errors[0].message) {
          return fallback;
        }

        return parsedDetails;
      } catch (e) {
        return fallback;
      }
    }

    var EndpointCache = function EndpointCache() {
      var _this = this;

      this.cache = {};
      this.cacheClearListener = [];
      this.lastCacheClear = new Date();

      this.addEntry = function (entryKey, requestPromise) {
        _this.cache[entryKey] = requestPromise;
      };

      this.hasEntry = function (entryKey) {
        return Object.keys(_this.cache).some(function (key) {
          return key === entryKey;
        });
      };

      this.getEntry = function (entryKey) {
        return _this.cache[entryKey];
      };

      this.clearCache = function () {
        _this.cache = {};
        _this.lastCacheClear = new Date();
        setTimeout(function () {
          _this.cacheClearListener.forEach(function (listener) {
            return listener(_this.lastCacheClear);
          });
        });
      };

      this.subscribeToCacheClear = function (listener) {
        _this.cacheClearListener.push(listener);
      };

      this.unsubscribeFromCacheClear = function (listener) {
        var index = _this.cacheClearListener.indexOf(listener);

        if (index > -1) {
          _this.cacheClearListener.splice(index, 1);
        }
      };
    };

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(_temp) {
        var _ref = _temp === void 0 ? {
          overlayClosable: false
        } : _temp,
            overlayClosable = _ref.overlayClosable;

        this.overlayClosable = void 0;

        this.getApiErrorResponse = function (errorXmlRequest) {
          var errorResponse;

          try {
            errorResponse = JSON.parse(errorXmlRequest.responseText);

            if (!errorResponse && !errorResponse.errors && errorResponse.errors.length <= 0) {
              console.warn(new Error("Could not parse authentication error: " + errorXmlRequest.status + " " + JSON.stringify(errorXmlRequest.responseText)));
            }

            return errorResponse.errors[0];
          } catch (e) {
            console.warn(new Error("Could not parse authentication error: " + errorXmlRequest.status + " " + JSON.stringify(errorXmlRequest.responseText)));
          }

          return undefined;
        };

        this.overlayClosable = overlayClosable;
      }
      /**
       * Returns if request can be handled by this interceptor
       * @param request
       */


      var _proto = ErrorInterceptor.prototype;

      /**
       * Handles the request
       * @param request
       * @param isOverlayClosable
       */
      _proto.handleRequest = function handleRequest(request) {
        // if this ErrorInterceptor supports the request, then the internal handler is being executed and returned
        if (this.supports(request)) {
          return this.handleRequestInternal(request, this.overlayClosable);
        } // return reject promise if this ErrorInterceptor will not handle the request


        return Promise.reject(request);
      }
      /**
       * Returns the api error response if errorXmlRequest is an api error object. Otherwise it returns 'undefined'.
       * @param errorXmlRequest
       */
      ;

      return ErrorInterceptor;
    }();

    var AuthorizationErrorInterceptor = /*#__PURE__*/function (_ErrorInterceptor) {
      _inheritsLoose(AuthorizationErrorInterceptor, _ErrorInterceptor);

      function AuthorizationErrorInterceptor() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _ErrorInterceptor.call.apply(_ErrorInterceptor, [this].concat(args)) || this;
        _this.supportedStatusCodes = [401];
        _this.supportedErrorIds = ['account.error.unauthorized.user'];

        _this.getApiErrorResponse = function (errorXmlRequest) {
          try {
            return JSON.parse(errorXmlRequest.responseText);
          } catch (e) {
            console.warn(new Error("Could not parse authentication error: " + errorXmlRequest.status + " " + JSON.stringify(errorXmlRequest.responseText)));
          }

          return undefined;
        };

        return _this;
      }

      var _proto = AuthorizationErrorInterceptor.prototype;

      _proto.supports = function supports(request) {
        return this.supportedStatusCodes.some(function (statusCode) {
          return request.status === statusCode;
        });
      };

      _proto.handleRequestInternal = function handleRequestInternal(request, isOverlayClosable) {
        var apiError = this.getApiErrorResponse(request);

        if (apiError) {
          var supportsApiErrorId = apiError && this.supportedErrorIds.some(function (errorId) {
            return errorId === apiError.errorId;
          });

          if (supportsApiErrorId) {
            window.location.reload();
            return undefined;
          }
        }

        return Promise.reject(request);
      };

      return AuthorizationErrorInterceptor;
    }(ErrorInterceptor);

    var authorizationErrorInterceptor = new AuthorizationErrorInterceptor();

    var AbstractEndpoint = function AbstractEndpoint(_ref) {
      var _this = this;

      var url = _ref.url,
          _ref$cacheEnabled = _ref.cacheEnabled,
          cacheEnabled = _ref$cacheEnabled === void 0 ? false : _ref$cacheEnabled,
          _options = _ref.options;
      this.cache = void 0;
      this.url = void 0;
      this.cacheEnabled = void 0;
      this.options = void 0;

      this.ajax = function (params) {
        var keys = params.keys,
            body = params.body,
            headerOptions = params.headerOptions,
            errorInterceptors = params.errorInterceptors,
            _params$omitErrorMess = params.omitErrorMessage,
            omitErrorMessage = _params$omitErrorMess === void 0 ? false : _params$omitErrorMess;
        var options = Object.assign({}, _this.getOptions(keys), {
          headerOptions: headerOptions
        });

        var ajaxResult = _this.doRequestInternal(keys, body);

        return ajaxResult.catch(function (err) {
          if (errorInterceptors) {
            return errorInterceptors.reduce(function (prev, errorInterceptor) {
              return prev.catch(function (prevError) {
                var _errorInterceptor$han, _errorInterceptor$han2;

                return errorInterceptor == null ? void 0 : (_errorInterceptor$han = errorInterceptor.handleRequest(prevError)) == null ? void 0 : (_errorInterceptor$han2 = _errorInterceptor$han.then(function () {
                  return _this.ajax(params);
                })) == null ? void 0 : _errorInterceptor$han2.catch(function (prevError) {
                  return Promise.reject(prevError);
                });
              });
            }, Promise.reject(err));
          }

          return ajaxResult;
        }).catch(function (err) {
          return authorizationErrorInterceptor.handleRequest(err) === undefined ? ajaxResult : Promise.reject(err);
        }).catch(function (error) {
          if (!omitErrorMessage) {
            showErrorMessage(error);
          }

          if (options.afterError) {
            options.afterError(error, _this);
          }

          return ajaxResult;
        }).then(function (result) {
          if (options.afterSuccess) {
            options.afterSuccess(result);
          }

          return result;
        });
      };

      this.generateHash = function (str) {
        var hash = 0;

        if (str.length === 0) {
          return hash.toString();
        }

        for (var i = 0; i < str.length; i++) {
          var char = str.charCodeAt(i);
          hash = (hash << 5) - hash + char;
          hash = hash & hash; // Convert to 32bit integer
        }

        return hash.toString();
      };

      this.getCacheEntryKey = function (keys) {
        return _this.generateHash(_this.getHeader(keys) + ' : ' + _this.getUrl(keys));
      };

      this.getUrl = function (keys) {
        return _this.url(keys);
      };

      this.getOptions = function (keys) {
        return _this.options(keys);
      };

      this.getHeader = function (keys) {
        var headers = AbstractEndpoint.createHeaders(_this.getOptions(keys).headerOptions); // all uneven indexed values are keys

        var headerParts = JSON.stringify(headers).split(/\{([^\ "}]+)\}/);

        if (!headers) {
          return headerParts.join('');
        } // Replace all odd pieces of urlParts with the fitting value


        return headerParts.map(function (value, index) {
          return index % 2 ? headers[value] : value;
        }).join('');
      };

      this.onCacheClear = function (listener) {
        if (_this.cache) {
          _this.cache.subscribeToCacheClear(listener);
        }
      };

      this.offCacheClear = function (listener) {
        if (_this.cache) {
          _this.cache.unsubscribeFromCacheClear(listener);
        }
      };

      this.clearCache = function () {
        if (_this.cache) {
          _this.cache.clearCache();
        }
      };

      this.doRequestInternal = function (keys, body) {
        var _this$cache;

        var entryKey = _this.getCacheEntryKey(keys); // return result from cache if enabled and key is present


        if (_this.cacheEnabled && (_this$cache = _this.cache) != null && _this$cache.hasEntry(entryKey)) {
          return _this.cache.getEntry(entryKey);
        } // perform the request


        var result = _this.request(keys, body); // add request to cache if enabled


        if (_this.cacheEnabled) {
          result.then(function (res) {
            var _this$cache2;

            return (_this$cache2 = _this.cache) == null ? void 0 : _this$cache2.addEntry(entryKey, result);
          }).catch(function (error) {
            return console.warn('Omit cache entry', error);
          });
        } // return actual result


        return result;
      };

      this.url = url;
      this.cacheEnabled = cacheEnabled || false;

      this.options = _options || function () {
        return {};
      };

      if (this.cacheEnabled) {
        this.cache = new EndpointCache();
      }
    }
    /**
     * Performs the request and returns a promise as a result
     * @param keys Parameters used to build the request
     * @param body Request body
     * @param retryReasons Reasons for retrying
     */
    ;

    AbstractEndpoint.createHeaders = function (options) {
      // set default values for empty options
      var opts = options || {};
      opts = {
        defaultContentTypeJsonUTF8: opts.defaultContentTypeJsonUTF8 !== undefined ? opts.defaultContentTypeJsonUTF8 : true,
        customHeaders: opts.customHeaders || {},
        authToken: opts.authToken,
        requestedWith: opts.requestedWith || 'XMLHttpRequest'
      };
      return Object.assign({}, opts.defaultContentTypeJsonUTF8 && {
        'Content-Type': 'application/json; charset=UTF-8'
      }, opts.authToken && {
        Authorization: 'Bearer ' + opts.authToken
      }, opts.requestedWith && {
        'X-Requested-With': opts.requestedWith
      }, opts.customHeaders && opts.customHeaders);
    };

    function matchesDateIsoFormat(str) {
      var regexDateISO = /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(\.\d{1,3})?([+-][0-2]\d:[0-5]\d|Z)$/;
      return regexDateISO.test(str);
    }
    /**
     * Parses an object to type TResult considering date conversion
     * @param response Response to be parsed into an object of type TResult
     */

    function parseResponse(response) {
      return JSON.parse(response, function (key, value) {
        if (typeof value === 'string') {
          if (matchesDateIsoFormat(value)) return new Date(value);
        }

        return value;
      });
    }

    var GetEndpoint = /*#__PURE__*/function (_AbstractEndpoint) {
      _inheritsLoose(GetEndpoint, _AbstractEndpoint);

      function GetEndpoint() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _AbstractEndpoint.call.apply(_AbstractEndpoint, [this].concat(args)) || this;

        _this.request = function (keys) {
          var requestPromise = new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open('GET', _this.getUrl(keys), true);
            request.timeout = _this.getOptions(keys).timeout || 180000; // Set request headers from the given header json
            // Parse header e.g. { "Authorization": "Bearer 2302601b87dfd19035d9f89ad79a3682" }

            var headerObject = JSON.parse(_this.getHeader(keys));
            var headerOptions = Object.keys(headerObject);
            headerOptions.forEach(function (headerOption) {
              // headerOption: "Authorization"
              // headerObject[headerOption]: "Bearer 2302601b87dfd19035d9f89ad79a3682"
              request.setRequestHeader(headerOption, headerObject[headerOption]);
            });

            request.onload = function () {
              var contentType = request.getResponseHeader('Content-Type') || '';
              var containsHtml = contentType.indexOf('html') !== -1;

              if (request.status < 200 || request.status >= 400) {
                return reject(request);
              }

              if (containsHtml) {
                return resolve(request.responseText);
              }

              var parsed;

              try {
                parsed = request.responseText ? parseResponse(request.responseText) : undefined;
              } catch (e) {
                return reject(request);
              }

              resolve(parsed);
            };

            request.onerror = function () {
              reject(request);
            };

            request.send();

            var ajaxSignal = _this.getAjaxSignal(keys);

            if (ajaxSignal) {
              ajaxSignal.onabort = function () {
                console.log("GetEndpoint: request aborted by user " + _this.getUrl(keys));
                request.abort();
                resolve(undefined);
              };
            }
          });
          return requestPromise;
        };

        _this.getAjaxSignal = function (keys) {
          return keys.signal;
        };

        return _this;
      }

      return GetEndpoint;
    }(AbstractEndpoint);

    GetEndpoint.create = function (_ref) {
      var url = _ref.url,
          cacheEnabled = _ref.cacheEnabled,
          options = _ref.options;
      return new GetEndpoint({
        url: url,
        cacheEnabled: cacheEnabled,
        options: options
      });
    };

    var getToken = GetEndpoint.create({
      url: function url(_ref) {
        var encodedContextPath = _ref.encodedContextPath;
        return encodedContextPath + "/login/token";
      },
      cacheEnabled: false
    });

    var getConfig = function getConfig() {
      try {
        var _document$querySelect, _document$querySelect2;

        return JSON.parse((_document$querySelect = (_document$querySelect2 = document.querySelector('#terrific-config')) == null ? void 0 : _document$querySelect2.innerHTML) != null ? _document$querySelect : '{}');
      } catch (e) {
        throw new Error('Could not read terrific-config from #terrific-config ' + e);
      }
    };

    var useTerrific = function useTerrific() {
      var _useState = React.useState(getConfig),
          config = _useState[0],
          setConfig = _useState[1];

      var reload = React.useCallback(function () {
        return setConfig(getConfig());
      }, [setConfig]);
      return {
        config: config,
        reload: reload
      };
    };

    var useSessionStorage = function useSessionStorage() {
      var setItem = React.useCallback(function (key, value) {
        var newItem = {
          meta: {
            createdAt: Date.now()
          },
          value: value
        };
        sessionStorage.setItem(key, JSON.stringify(newItem));
        return newItem;
      }, []);
      var getItem = React.useCallback(function (key) {
        return JSON.parse(sessionStorage.getItem(key));
      }, []);
      var removeItem = React.useCallback(function (key) {
        return sessionStorage.removeItem(key);
      }, []);
      var clear = React.useCallback(function () {
        return sessionStorage.clear();
      }, []);
      return {
        clear: clear,
        setItem: setItem,
        getItem: getItem,
        removeItem: removeItem
      };
    };

    var getInfo = function getInfo() {
      var userServiceSiteConfigTag = document.getElementById('user-service-config');

      return JSON.parse((userServiceSiteConfigTag == null ? void 0 : userServiceSiteConfigTag.innerHTML) || '{}');
    };

    var getSiteLanguage = function getSiteLanguage() {
      var language = document.documentElement.getAttribute('lang') || '';

      if (!language) {
        throw new Error('html[lang] is missing');
      }

      return language;
    };

    var useUserInfo = function useUserInfo() {
      var _useTerrific = useTerrific(),
          TerrificConfig = _useTerrific.config;

      var _useState = React.useState(getInfo),
          info = _useState[0],
          setInfo = _useState[1];

      var _useState2 = React.useState(getSiteLanguage),
          language = _useState2[0],
          setLanguage = _useState2[1];

      var _useSessionStorage = useSessionStorage(),
          setItem = _useSessionStorage.setItem,
          getItem = _useSessionStorage.getItem,
          removeItem = _useSessionStorage.removeItem;

      var _useState3 = React.useState(),
          token = _useState3[0],
          setToken = _useState3[1];

      var reload = React.useCallback(function () {
        setInfo(getInfo());
        setLanguage(getSiteLanguage());
      }, [setInfo, setLanguage]);
      var updateToken = React.useCallback(function (responseStatus, token) {
        var loggedIn = responseStatus === 'loggedIn';

        if (loggedIn && token) {
          setToken(setItem(info.currentUserId, token));
        } else {
          removeItem(info.currentUserId);
          setToken(undefined);
        }
      }, [info, removeItem, setItem, setToken]);
      React.useEffect(function () {
        return info.currentUserId && setToken(getItem(info.currentUserId));
      }, [info, getItem, setToken]);
      React.useEffect(function () {
        var _token$meta;

        var tokenTimeout = 60 * 60 * 1000;
        var tokenDelay = Date.now() - (token == null ? void 0 : (_token$meta = token.meta) == null ? void 0 : _token$meta.createdAt);

        if (!(token != null && token.value) || tokenDelay >= tokenTimeout) {
          getToken.ajax({
            keys: {
              encodedContextPath: TerrificConfig.encodedContextPath
            }
          }).then(function (t) {
            return updateToken('loggedIn', t);
          }, function () {
            return updateToken('loggedOut');
          });
        }
      }, [TerrificConfig, token, updateToken]);
      return {
        info: info,
        language: language,
        token: token == null ? void 0 : token.value,
        reload: reload
      };
    };

    var UnresolvedParam = '{undefined}';
    var ParamToInfoMap = {
      baseSiteId: 'hybrisStoreName',
      userId: 'currentUserId'
    };

    var getUriProperties = function getUriProperties(uri) {
      var matchRe = /{([\w\d]+)}/g;
      var replaceRe = /[{}]/g;
      var properties = uri.match(matchRe) || [];
      return properties.map(function (prop) {
        return prop.replace(replaceRe, '');
      });
    };

    var useResource = function useResource(uri, uriParams) {
      if (uri === void 0) {
        uri = '';
      }

      if (uriParams === void 0) {
        uriParams = {};
      }

      var _useState = React.useState({
        get: {
          data: null,
          isLoading: false,
          errors: null
        },
        post: {
          data: null,
          isLoading: false,
          errors: null
        },
        put: {
          data: null,
          isLoading: false,
          errors: null
        },
        patch: {
          data: null,
          isLoading: false,
          errors: null
        }
      }),
          responses = _useState[0],
          setResponses = _useState[1];

      var _useUserInfo = useUserInfo(),
          info = _useUserInfo.info,
          token = _useUserInfo.token;

      var target = React.useMemo(function () {
        var keyValue = Object.assign({}, uriParams, info);
        var updatedTarget = '';
        var uriParamsToUpdate = getUriProperties(uri);
        var unresolvedRe = new RegExp(UnresolvedParam);
        uriParamsToUpdate.forEach(function (param) {
          var _keyValue;

          updatedTarget = updatedTarget || uri;
          var value = (_keyValue = keyValue[ParamToInfoMap[param] || param]) != null ? _keyValue : UnresolvedParam;
          updatedTarget = updatedTarget.replace("{" + param + "}", value);
        });

        if (unresolvedRe.test(updatedTarget)) {
          return '';
        }

        return updatedTarget;
      }, [info, uri, uriParams]);
      var updateIsLoading = React.useCallback(function (method, isLoading) {
        return setResponses(function (prev) {
          var _Object$assign;

          return Object.assign({}, prev, (_Object$assign = {}, _Object$assign[method] = Object.assign({}, prev[method], {
            isLoading: isLoading
          }), _Object$assign));
        });
      }, [setResponses]);
      var handler = React.useCallback(function (method, data, errors) {
        return setResponses(function (prev) {
          var _Object$assign2;

          return Object.assign({}, prev, (_Object$assign2 = {}, _Object$assign2[method] = Object.assign({}, prev[method], {
            data: data,
            errors: errors
          }), _Object$assign2));
        });
      }, [setResponses]);
      var request = React.useCallback(function (method, data) {
        if (data === void 0) {
          data = {};
        }

        if (!target || !token) {
          return Promise.reject().catch(function () {});
        }

        var isGetOptions = /get|options/.test(method);
        var requestData = !isGetOptions ? data : undefined;
        var queryParams = new URLSearchParams();
        Object.keys(data).forEach(function (key) {
          return queryParams.append(key, data[key]);
        });
        var queryParamsString = queryParams.toString();
        var targetToUse = isGetOptions && queryParamsString ? target + "?" + queryParamsString : target;
        var headers = {
          Authorization: "Bearer " + token
        };

        if (!isGetOptions) {
          headers['Content-Type'] = 'application/json';
        }

        updateIsLoading(method, true);
        return fetch(targetToUse, {
          method: method,
          headers: headers,
          body: JSON.stringify(requestData)
        }).then( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(response) {
            var json;
            return regenerator.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return response.json();

                  case 2:
                    json = _context.sent;

                    if (response.ok) {
                      _context.next = 5;
                      break;
                    }

                    throw json;

                  case 5:
                    return _context.abrupt("return", json);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()).then(function (data) {
          handler(method, data, null);
          return data;
        }).catch(function (error) {
          var requestErrors = error.errors || [{
            message: error.message
          }];
          handler(method, null, requestErrors);
          throw requestErrors;
        }).finally(function () {
          return updateIsLoading(method, false);
        });
      }, [target, token, handler, updateIsLoading]);
      var get = React.useCallback(function (params) {
        if (params === void 0) {
          params = {};
        }

        return request('get', params);
      }, [request]);
      var post = React.useCallback(function (params) {
        if (params === void 0) {
          params = {};
        }

        return request('post', params);
      }, [request]);
      var put = React.useCallback(function (params) {
        if (params === void 0) {
          params = {};
        }

        return request('put', params);
      }, [request]);
      var patch = React.useCallback(function (params) {
        if (params === void 0) {
          params = {};
        }

        return request('patch', params);
      }, [request]);
      return {
        responses: responses,
        get: get,
        post: post,
        patch: patch,
        put: put
      };
    };

    var HybrisPlaceholder = '{}';

    var createReplacer = function createReplacer(params) {
      var idx = 0;
      return function (match) {
        return params[idx++] || match;
      };
    };

    var interpolateHybris = function interpolateHybris(subject, params) {
      if (params === void 0) {
        params = [];
      }

      return subject.replaceAll(HybrisPlaceholder, createReplacer(params));
    };

    var occPrefix = '/dormakabacommercewebservices/v2';

    var updateOCC = function updateOCC(url) {
      return "" + occPrefix + url;
    };

    var getRedirectPrefix = function getRedirectPrefix() {
      var pathParts = window.location.pathname.split('/').filter(function (v) {
        return v;
      });
      return "/" + (pathParts == null ? void 0 : pathParts[0]) + "/" + (pathParts == null ? void 0 : pathParts[1]);
    };

    var updateRedirect = function updateRedirect(url) {
      return "" + getRedirectPrefix() + url;
    };

    var updateUrl = function updateUrl(url, type) {
      if (url === void 0) {
        url = '';
      }

      if (type === void 0) {
        type = 'occ';
      }

      var result = '';

      switch (type) {
        case 'occ':
          result = updateOCC(url);
          break;

        case 'redirect':
          result = updateRedirect(url);
          break;
      }

      return result;
    };

    var useTranslations = function useTranslations() {
      var _useAppConfig = useAppConfig(),
          translations = _useAppConfig.translations;

      var t = React.useCallback(function (key) {
        var value = translations == null ? void 0 : translations[key];

        for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          params[_key - 1] = arguments[_key];
        }

        if (value) return params.length ? interpolateHybris(value, params) : value;
        return key;
      }, [translations]);
      return {
        t: t
      };
    };

    var Context$1 = /*#__PURE__*/React.createContext({
      data: {},
      isLoading: false
    });
    var Provider$1 = Context$1.Provider;

    var Context = /*#__PURE__*/React.createContext(undefined);
    var Provider = Context.Provider;

    var useContext = function useContext(component) {
      var value = React.useContext(Context);

      if (!value) {
        throw Error(component + " could not be used outside Address");
      }
    };

    var Action = function Action(_ref) {
      var id = _ref.id,
          testid = _ref.testid,
          className = _ref.className,
          children = _ref.children,
          disabled = _ref.disabled,
          onClick = _ref.onClick;
      useContext('Action');
      return /*#__PURE__*/React__default['default'].createElement(vanguard.Button, {
        id: id,
        testid: testid,
        className: className,
        disabled: disabled,
        isLink: true,
        onClick: onClick
      }, children);
    };

    var Address = function Address(_ref) {
      var id = _ref.id,
          testid = _ref.testid,
          className = _ref.className,
          children = _ref.children,
          company = _ref.company,
          person = _ref.person,
          address = _ref.address,
          region = _ref.region,
          country = _ref.country;
      return /*#__PURE__*/React__default['default'].createElement(Provider, {
        value: "Address"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        id: id,
        testid: testid,
        className: cx__default['default']("flex", "flex-col", className)
      }, company && /*#__PURE__*/React__default['default'].createElement(vanguard.Typography, {
        testid: testid + "-company",
        bold: true,
        color: "gray-500"
      }, company), person && /*#__PURE__*/React__default['default'].createElement(vanguard.Typography, {
        testid: testid + "-person",
        bold: true,
        color: "gray-500"
      }, person), address && /*#__PURE__*/React__default['default'].createElement(vanguard.Typography, {
        testid: testid + "-address",
        color: "gray-500"
      }, address), region && /*#__PURE__*/React__default['default'].createElement(vanguard.Typography, {
        testid: testid + "-region",
        color: "gray-500"
      }, region), country && /*#__PURE__*/React__default['default'].createElement(vanguard.Typography, {
        testid: testid + "-country",
        color: "gray-500"
      }, country), React.Children.count(children) > 0 && /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        testid: testid + "-actions",
        className: "flex flex-row"
      }, React.Children.map(children, function (child, idx) {
        return /*#__PURE__*/React.cloneElement(child, {
          testid: testid + "-actions-" + idx
        });
      }))));
    };
    Address.Action = Action;

    var getDefaultAddress = function getDefaultAddress() {
      return {
        company: undefined,
        person: undefined,
        address: undefined,
        region: undefined,
        country: undefined
      };
    };

    var getAddress = function getAddress(deliveryAddress) {
      var _deliveryAddress$coun;

      if (!deliveryAddress) {
        return getDefaultAddress();
      }

      return {
        company: deliveryAddress.companyName,
        person: deliveryAddress.person,
        address: [deliveryAddress.line1, deliveryAddress.line2].join(' '),
        region: [deliveryAddress.postalCode, deliveryAddress.town].join(' '),
        country: deliveryAddress == null ? void 0 : (_deliveryAddress$coun = deliveryAddress.country) == null ? void 0 : _deliveryAddress$coun.name
      };
    };

    var useDeliveryOptions = function useDeliveryOptions(onChange) {
      var context = React.useContext(Context$1);

      var _useState = React.useState(''),
          selectedType = _useState[0],
          setSelectedType = _useState[1];

      var _useState2 = React.useState(''),
          selectedMethod = _useState2[0],
          setSelectedMethod = _useState2[1];

      var _useState3 = React.useState(''),
          deliveryDate = _useState3[0],
          setDeliveryDate = _useState3[1];

      var _useAppConfig = useAppConfig(),
          cartCode = _useAppConfig.cartCode;

      var deliveryMethodUri = updateUrl('/{baseSiteId}/users/{userId}/checkout/{cartId}/deliveryMethod');
      var deliveryTypeUri = updateUrl('/{baseSiteId}/users/{userId}/checkout/{cartId}/deliveryType');

      var _useResource = useResource(deliveryMethodUri, {
        cartId: cartCode
      }),
          getDeliveryMethod = _useResource.get,
          deliveryMethods = _useResource.responses;

      var _useResource2 = useResource(deliveryTypeUri, {
        cartId: cartCode
      }),
          getDeliveryType = _useResource2.get,
          deliveryTypes = _useResource2.responses;

      var result = React.useMemo(function () {
        var _context$data, _deliveryTypes$get$da;

        var r = {
          selectedMethod: selectedMethod,
          selectedType: selectedType,
          address: getDefaultAddress(),
          deliveryMethods: [],
          deliveryTypes: [],
          deliveryDate: deliveryDate,
          setDeliveryDate: setDeliveryDate,
          setSelectedMethod: setSelectedMethod,
          setSelectedType: setSelectedType
        };
        r.address = getAddress(((_context$data = context.data) == null ? void 0 : _context$data.deliveryAddress) || {});
        r.deliveryMethods = deliveryMethods.get.data || [];
        r.deliveryTypes = ((_deliveryTypes$get$da = deliveryTypes.get.data) == null ? void 0 : _deliveryTypes$get$da.deliveryTypes) || [];
        return r;
      }, [deliveryDate, deliveryMethods, deliveryTypes, selectedMethod, selectedType, context.data]);
      React.useEffect(function () {
        getDeliveryMethod();
        getDeliveryType();
      }, [getDeliveryMethod, getDeliveryType]);
      React.useEffect(function () {
        var _deliveryMethods$get$, _deliveryTypes$get$da2, _deliveryTypes$get$da3;

        if (!selectedMethod && (_deliveryMethods$get$ = deliveryMethods.get.data) != null && _deliveryMethods$get$.length) {
          setSelectedMethod(deliveryMethods.get.data[0].code);
        }

        if (!selectedType && (_deliveryTypes$get$da2 = deliveryTypes.get.data) != null && (_deliveryTypes$get$da3 = _deliveryTypes$get$da2.deliveryTypes) != null && _deliveryTypes$get$da3.length) {
          setSelectedType(deliveryTypes.get.data.deliveryTypes[0]);
        }
      }, [deliveryMethods, deliveryTypes, selectedMethod, selectedType, setSelectedMethod, setSelectedType]);
      React.useEffect(function () {
        onChange == null ? void 0 : onChange({
          date: deliveryDate,
          method: selectedMethod,
          type: selectedType
        });
      }, [deliveryDate, selectedMethod, selectedType, onChange]);
      return result;
    };

    var OneTimeAddressDialog = function OneTimeAddressDialog(_ref) {
      var isOpen = _ref.isOpen,
          onCancel = _ref.onCancel;

      var _useTranslations = useTranslations(),
          t = _useTranslations.t;

      var _useAppConfig = useAppConfig(),
          cartCode = _useAppConfig.cartCode;

      var _useContext = React.useContext(Context$1),
          getCheckoutData = _useContext.getCheckoutData;

      var _useState = React.useState(''),
          companyName = _useState[0],
          setCompanyName = _useState[1];

      var _useState2 = React.useState(''),
          companyName2 = _useState2[0],
          setCompanyName2 = _useState2[1];

      var _useState3 = React.useState(''),
          companyName3 = _useState3[0],
          setCompanyName3 = _useState3[1];

      var _useState4 = React.useState(''),
          companyName4 = _useState4[0],
          setCompanyName4 = _useState4[1];

      var _useState5 = React.useState(''),
          line1 = _useState5[0],
          setLine1 = _useState5[1];

      var _useState6 = React.useState(''),
          line2 = _useState6[0],
          setLine2 = _useState6[1];

      var _useState7 = React.useState(''),
          postalCode = _useState7[0],
          setPostalCode = _useState7[1];

      var _useState8 = React.useState(''),
          town = _useState8[0],
          setTown = _useState8[1];

      var _useState9 = React.useState(''),
          country = _useState9[0],
          setCountry = _useState9[1];

      var _useState10 = React.useState(''),
          region = _useState10[0],
          setRegion = _useState10[1];

      var _useResource = useResource(updateUrl('/{baseSiteId}/users/{userId}/checkout/{cartCode}/setOneTimeAddress'), {
        cartCode: cartCode
      }),
          setOneTimeAddress = _useResource.post;

      var clearForm = function clearForm() {
        setLine1('');
        setLine2('');
        setCompanyName('');
        setTown('');
      };

      var handleCancel = function handleCancel() {
        clearForm();
        onCancel();
      }; //company name / Line 1 / Line 2 / Postal code / Town / Country


      var handleSubmit = React.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return setOneTimeAddress({
                  companyName: [companyName, companyName2, companyName3, companyName4].join(' '),
                  line1: line1,
                  line2: line2,
                  postalCode: postalCode,
                  isoCode: country // country: { isoCode: 'lol', name: country },

                });

              case 3:
                handleCancel();
                getCheckoutData();
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      })), [handleCancel, getCheckoutData]);
      return /*#__PURE__*/React__default['default'].createElement(vanguard.Dialog, {
        header: t('vanguard.address.formTitle'),
        footer: "Buttons?",
        width: "200",
        scrollable: true,
        isOpen: isOpen,
        onClose: onCancel
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "pb-4 border-b space-y-1"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.TextInput, {
        label: t('vanguard.address.name'),
        placeholder: t('vanguard.common.address.name'),
        fullWidth: true,
        className: "flex-grow",
        value: companyName,
        onChange: function onChange(e) {
          return setCompanyName(e.target.value);
        }
      }), /*#__PURE__*/React__default['default'].createElement(vanguard.TextInput, {
        placeholder: t('vanguard.common.address.name'),
        fullWidth: true,
        className: "flex-grow",
        value: companyName2,
        onChange: function onChange(e) {
          return setCompanyName2(e.target.value);
        }
      }), /*#__PURE__*/React__default['default'].createElement(vanguard.TextInput, {
        fullWidth: true,
        className: "flex-grow",
        value: companyName3,
        onChange: function onChange(e) {
          return setCompanyName3(e.target.value);
        }
      }), /*#__PURE__*/React__default['default'].createElement(vanguard.TextInput, {
        fullWidth: true,
        className: "flex-grow",
        value: companyName4,
        onChange: function onChange(e) {
          return setCompanyName4(e.target.value);
        }
      })), /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "space-y-2 pt-2"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.TextInput, {
        label: t('vanguard.address.line1'),
        placeholder: "Kaiser-Friedich-Strase 211",
        fullWidth: true,
        className: "flex-grow",
        value: line1,
        onChange: function onChange(e) {
          return setLine1(e.target.value);
        }
      }), /*#__PURE__*/React__default['default'].createElement(vanguard.TextInput, {
        label: t('vanguard.address.line2'),
        fullWidth: true,
        className: "flex-grow",
        value: line2,
        onChange: function onChange(e) {
          return setLine2(e.target.value);
        }
      }), /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "flex"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.TextInput, {
        label: t('vanguard.address.zipcode'),
        placeholder: "47169",
        className: "flex-grow",
        value: postalCode,
        onChange: function onChange(e) {
          return setPostalCode(e.target.value);
        }
      }), /*#__PURE__*/React__default['default'].createElement(vanguard.TextInput, {
        label: t('vanguard.address.name'),
        placeholder: "Dusiburg",
        fullWidth: true,
        className: "flex-grow",
        value: town,
        onChange: function onChange(e) {
          return setTown(e.target.value);
        }
      })), /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "flex"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.TextInput, {
        label: t('vanguard.address.country'),
        placeholder: "Germany",
        className: "flex-grow",
        value: country,
        onChange: function onChange(e) {
          return setCountry(e.target.value);
        }
      }), /*#__PURE__*/React__default['default'].createElement(vanguard.TextInput, {
        label: t('vanguard.address.region'),
        placeholder: "Nordrhein",
        className: "flex-grow",
        value: region,
        onChange: function onChange(e) {
          return setRegion(e.target.value);
        }
      }))), /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "flex flex-row mt-8 space-x-4 justify-between"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Button, {
        variant: "primaryBorder",
        onClick: handleCancel
      }, t('vanguard.common.wishlist.cancel')), /*#__PURE__*/React__default['default'].createElement(vanguard.Button, {
        onClick: handleSubmit
      }, t('vanguard.common.wishlist.create'))));
    };

    var DeliveryOptions = function DeliveryOptions(_ref) {
      var id = _ref.id,
          testid = _ref.testid,
          className = _ref.className,
          onChange = _ref.onChange;

      var _useTranslations = useTranslations(),
          t = _useTranslations.t;

      var _useDeliveryOptions = useDeliveryOptions(onChange),
          address = _useDeliveryOptions.address,
          deliveryDate = _useDeliveryOptions.deliveryDate,
          deliveryTypes = _useDeliveryOptions.deliveryTypes,
          deliveryMethods = _useDeliveryOptions.deliveryMethods,
          selectedMethod = _useDeliveryOptions.selectedMethod,
          selectedType = _useDeliveryOptions.selectedType,
          setDeliveryDate = _useDeliveryOptions.setDeliveryDate,
          setSelectedMethod = _useDeliveryOptions.setSelectedMethod,
          setSelectedType = _useDeliveryOptions.setSelectedType;

      var _useState = React.useState(false),
          OTADialogOpen = _useState[0],
          setOTADialogOpen = _useState[1];

      return /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        id: id,
        testid: testid,
        className: cx__default['default']('flex', 'flex-col', 'shadow-2xl', className),
        paddingX: "md",
        paddingY: "md",
        marginY: "md"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Typography, {
        bold: true,
        color: "gray-500"
      }, t('vanguard.checkout.delivery.tile')), /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "flex flex-row justify-between"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "flex flex-col"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Box, null, /*#__PURE__*/React__default['default'].createElement(vanguard.Typography, {
        bold: true,
        textsize: "lg"
      }, t('vanguard.checkout.delivery.options'))), /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        marginX: "md"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "flex flex-col",
        marginY: "md"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "flex flex-row"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Typography, {
        bold: true,
        textsize: "sm",
        color: "gray-500"
      }, t('vanguard.checkout.delivery.method') || 'Method'), /*#__PURE__*/React__default['default'].createElement(vanguard.Tooltip, {
        position: "right",
        render: t('vanguard.checkout.delivery.method.TooltipTitle' )
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Icon, {
        type: "question"
      }))), /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "flex flex-row"
      }, deliveryMethods.map(function (_ref2) {
        var code = _ref2.code,
            name = _ref2.name;
        return /*#__PURE__*/React__default['default'].createElement(vanguard.Radio, {
          key: "method-" + code,
          className: "mr-1",
          name: "method",
          value: code,
          label: name,
          size: "sm",
          variant: "tertiary",
          checked: selectedMethod === code,
          onChange: function onChange() {
            return setSelectedMethod(code);
          }
        });
      }))), /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "flex flex-col",
        marginY: "md"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "flex flex-row"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Typography, {
        bold: true,
        textsize: "sm",
        color: "gray-500"
      }, t('vanguard.checkout.delivery.type')), /*#__PURE__*/React__default['default'].createElement(vanguard.Tooltip, {
        position: "right",
        render: t('vanguard.checkout.delivery.type.TooltipTitle')
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Icon, {
        type: "question"
      }))), deliveryTypes.length && /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "flex flex-row"
      }, deliveryTypes.map(function (type) {
        return /*#__PURE__*/React__default['default'].createElement(vanguard.Radio, {
          key: "type-" + type,
          className: "mr-1",
          name: "type",
          value: type,
          label: type,
          checked: selectedType === type,
          size: "sm",
          variant: "tertiary",
          onChange: function onChange() {
            return setSelectedType(type);
          }
        });
      }))), /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "flex flex-col",
        marginY: "md"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Typography, {
        bold: true,
        textsize: "sm",
        color: "gray-500"
      }, t('vanguard.checkout.delivery.shippingDate')), /*#__PURE__*/React__default['default'].createElement(vanguard.TextInput, {
        name: "shipping-date",
        placeholder: new Date().toLocaleDateString(),
        value: deliveryDate,
        onChange: function onChange(e) {
          return setDeliveryDate(e.target.value);
        }
      })))), /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "flex flex-col"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Box, null, /*#__PURE__*/React__default['default'].createElement(vanguard.Typography, {
        bold: true,
        textsize: "lg"
      }, t('vanguard.checkout.delivery.recipient') || 'Recipient details'), /*#__PURE__*/React__default['default'].createElement(vanguard.Typography, {
        bold: true
      }, t('vanguard.checkout.delivery.recipient.subtitle') || 'Send to:')), /*#__PURE__*/React__default['default'].createElement(Address, address, /*#__PURE__*/React__default['default'].createElement(Address.Action, null, t('vanguard.checkout.address.cta.change') || 'Change')), /*#__PURE__*/React__default['default'].createElement(OneTimeAddressDialog, {
        isOpen: OTADialogOpen,
        onCancel: function onCancel() {
          return setOTADialogOpen(false);
        }
      }), /*#__PURE__*/React__default['default'].createElement(vanguard.Button, {
        onClick: function onClick() {
          return setOTADialogOpen(true);
        }
      }))));
    };

    var usePayment = function usePayment() {
      var _billingAddress$data;

      var _useAppConfig = useAppConfig(),
          cartCode = _useAppConfig.cartCode;

      var _useResource = useResource(updateUrl('/{baseSiteId}/users/{userId}/checkout/{cartCode}/getB2BUnit'), {
        cartCode: cartCode
      }),
          billingAddress = _useResource.responses.get,
          fetchBillingAddress = _useResource.get;

      React.useEffect(function () {
        fetchBillingAddress();
      }, [fetchBillingAddress]);
      return {
        // Retun only first one for now, incremental with scrum stories
        billingAddress: ((_billingAddress$data = billingAddress.data) == null ? void 0 : _billingAddress$data.length) > 0 ? [billingAddress.data[0]] : []
      };
    };

    var Payment = function Payment() {
      var _usePayment = usePayment(),
          billingAddress = _usePayment.billingAddress;

      var _useTranslations = useTranslations(),
          t = _useTranslations.t;

      React.useEffect(function () {
        console.log(billingAddress);
      }, [billingAddress]);
      return /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        paddingX: "md",
        paddingY: "md",
        marginY: "md",
        className: "shadow-2xl flex flex-col"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Typography, {
        bold: true,
        color: "gray-500"
      }, t('vanguard.checkout.payment.tile'), "Payment"), /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        paddingX: "md",
        className: "flex"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "flex flex-col"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Typography, {
        bold: true,
        color: "gray-900"
      }, t('vanguard.checkout.payment.method'), "Payment method"), /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "flex"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Radio, {
        label: t('vanguard.checkout.payment.method.invoice') + 'Invoice',
        testid: "vanguard.checkout.payment.method.invoice",
        size: "sm",
        variant: "gray",
        checked: true
      }), /*#__PURE__*/React__default['default'].createElement(vanguard.Radio, {
        label: t('vanguard.checkout.payment.method.card') + 'Card',
        testid: "vanguard.checkout.payment.method.card",
        className: "ml-4 opacity-60",
        size: "sm",
        variant: "tertiary"
      }))), /*#__PURE__*/React__default['default'].createElement(vanguard.Box, {
        className: "flex flex-col ml-8"
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Typography, {
        bold: true,
        color: "gray-900"
      }, t('vanguard.checkout.payment.billing'), "Billing details"), /*#__PURE__*/React__default['default'].createElement(vanguard.Button, {
        testid: "vanguard.address.cta.change",
        disabled: true,
        isLink: true
      }, t('vanguard.address.cta.change'), "CHANGE"))));
    };

    var useCheckout = function useCheckout() {
      var _useAppConfig = useAppConfig(),
          cartCode = _useAppConfig.cartCode;

      var getCheckoutDataUri = updateUrl('/{baseSiteId}/users/{userId}/checkout/{cartId}');

      var _useResource = useResource(getCheckoutDataUri, {
        cartId: cartCode
      }),
          getCheckoutData = _useResource.get,
          checkoutDataResponses = _useResource.responses.get;

      React.useEffect(function () {
        getCheckoutData();
      }, [getCheckoutData]);
      return {
        data: checkoutDataResponses.data,
        isLoading: checkoutDataResponses.isLoading,
        getCheckoutData: getCheckoutData
      };
    };

    var Checkout = function Checkout() {
      var _useTranslations = useTranslations(),
          t = _useTranslations.t;

      var result = useCheckout();
      return /*#__PURE__*/React__default['default'].createElement(Provider$1, {
        value: result
      }, /*#__PURE__*/React__default['default'].createElement(vanguard.Typography, {
        textsize: "xl",
        color: "gray-500"
      }, t('vanguard.checkout.header'), "Checkout"), /*#__PURE__*/React__default['default'].createElement(Payment, null), /*#__PURE__*/React__default['default'].createElement(DeliveryOptions, null));
    };

    var App = function App() {
      return /*#__PURE__*/React__default['default'].createElement(AppConfigProvider, {
        appId: "checkout"
      }, /*#__PURE__*/React__default['default'].createElement(Checkout, null));
    };

    /**
     * Boot the example react app into <div data-react-app="checkout" />
     **/

    var throwError = function throwError(message) {
      throw new Error(message);
    };

    var rootElement = document.querySelector('[data-react-app="checkout"]') || throwError('[data-react-app="checkout"] is missing');
    var appElement = document.createElement('div');
    rootElement.appendChild(appElement);
    reactDom.render( /*#__PURE__*/React.createElement(App), appElement);

})));

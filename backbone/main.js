!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).DormakabaBackbone={})}(this,(function(t){"use strict";function r(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(t,r)};function n(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}function o(t,r,e,n){return new(e||(e=Promise))((function(o,i){function u(t){try{a(n.next(t))}catch(t){i(t)}}function c(t){try{a(n.throw(t))}catch(t){i(t)}}function a(t){var r;t.done?o(t.value):(r=t.value,r instanceof e?r:new e((function(t){t(r)}))).then(u,c)}a((n=n.apply(t,r||[])).next())}))}function i(t,r){var e,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=r.call(t,u)}catch(t){i=[6,t],n=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function u(t){var r="function"==typeof Symbol&&Symbol.iterator,e=r&&t[r],n=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,i=e.call(t),u=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u}function a(t,r){for(var e=0,n=r.length,o=t.length;e<n;e++,o++)t[o]=r[e];return t}function s(t){return this instanceof s?(this.v=t,this):new s(t)}function l(t,r,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=e.apply(t,r||[]),i=[];return n={},u("next"),u("throw"),u("return"),n[Symbol.asyncIterator]=function(){return this},n;function u(t){o[t]&&(n[t]=function(r){return new Promise((function(e,n){i.push([t,r,e,n])>1||c(t,r)}))})}function c(t,r){try{(e=o[t](r)).value instanceof s?Promise.resolve(e.value.v).then(a,l):f(i[0][2],e)}catch(t){f(i[0][3],t)}var e}function a(t){c("next",t)}function l(t){c("throw",t)}function f(t,r){t(r),i.shift(),i.length&&c(i[0][0],i[0][1])}}function f(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,e=t[Symbol.asyncIterator];return e?e.call(t):(t=u(t),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(e){r[e]=t[e]&&function(r){return new Promise((function(n,o){(function(t,r,e,n){Promise.resolve(n).then((function(r){t({value:r,done:e})}),r)})(n,o,(r=t[e](r)).done,r.value)}))}}}function p(t){return"function"==typeof t}function h(t){var r=t((function(t){Error.call(t),t.stack=(new Error).stack}));return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}var b=h((function(t){return function(r){t(this),this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map((function(t,r){return r+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r}}));function y(t,r){if(t){var e=t.indexOf(r);0<=e&&t.splice(e,1)}}var d=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._teardowns=null}var r;return t.prototype.unsubscribe=function(){var t,r,e,n,o;if(!this.closed){this.closed=!0;var i=this._parentage;if(i)if(this._parentage=null,Array.isArray(i))try{for(var s=u(i),l=s.next();!l.done;l=s.next()){l.value.remove(this)}}catch(r){t={error:r}}finally{try{l&&!l.done&&(r=s.return)&&r.call(s)}finally{if(t)throw t.error}}else i.remove(this);var f=this.initialTeardown;if(p(f))try{f()}catch(t){o=t instanceof b?t.errors:[t]}var h=this._teardowns;if(h){this._teardowns=null;try{for(var y=u(h),d=y.next();!d.done;d=y.next()){var v=d.value;try{m(v)}catch(t){o=null!=o?o:[],t instanceof b?o=a(a([],c(o)),c(t.errors)):o.push(t)}}}catch(t){e={error:t}}finally{try{d&&!d.done&&(n=y.return)&&n.call(y)}finally{if(e)throw e.error}}}if(o)throw new b(o)}},t.prototype.add=function(r){var e;if(r&&r!==this)if(this.closed)m(r);else{if(r instanceof t){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._teardowns=null!==(e=this._teardowns)&&void 0!==e?e:[]).push(r)}},t.prototype._hasParent=function(t){var r=this._parentage;return r===t||Array.isArray(r)&&r.includes(t)},t.prototype._addParent=function(t){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(t),r):r?[r,t]:t},t.prototype._removeParent=function(t){var r=this._parentage;r===t?this._parentage=null:Array.isArray(r)&&y(r,t)},t.prototype.remove=function(r){var e=this._teardowns;e&&y(e,r),r instanceof t&&r._removeParent(this)},t.EMPTY=((r=new t).closed=!0,r),t}(),v=d.EMPTY;function w(t){return t instanceof d||t&&"closed"in t&&p(t.remove)&&p(t.add)&&p(t.unsubscribe)}function m(t){p(t)?t():t.unsubscribe()}var g={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},O={setTimeout:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=O.delegate;return((null==e?void 0:e.setTimeout)||setTimeout).apply(void 0,a([],c(t)))},clearTimeout:function(t){var r=O.delegate;return((null==r?void 0:r.clearTimeout)||clearTimeout)(t)},delegate:void 0};function _(t){O.setTimeout((function(){throw t}))}function S(){}var j=null;function x(t){if(g.useDeprecatedSynchronousErrorHandling){var r=!j;if(r&&(j={errorThrown:!1,error:null}),t(),r){var e=j,n=e.errorThrown,o=e.error;if(j=null,n)throw o}}else t()}var P=function(t){function r(r){var e=t.call(this)||this;return e.isStopped=!1,r?(e.destination=r,w(r)&&r.add(e)):e.destination=D,e}return n(r,t),r.create=function(t,r,e){return new E(t,r,e)},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(d),E=function(t){function r(r,e,n){var o,i=t.call(this)||this;if(p(r))o=r;else if(r){var u;o=r.next,e=r.error,n=r.complete,i&&g.useDeprecatedNextContext?(u=Object.create(r)).unsubscribe=function(){return i.unsubscribe()}:u=r,o=null==o?void 0:o.bind(u),e=null==e?void 0:e.bind(u),n=null==n?void 0:n.bind(u)}return i.destination={next:o?T(o):S,error:T(null!=e?e:C),complete:n?T(n):S},i}return n(r,t),r}(P);function T(t,r){return function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];try{t.apply(void 0,a([],c(r)))}catch(t){_(t)}}}function C(t){throw t}var D={closed:!0,next:S,error:C,complete:S},A="function"==typeof Symbol&&Symbol.observable||"@@observable";function I(t){return t}function k(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return N(t)}function N(t){return 0===t.length?I:1===t.length?t[0]:function(r){return t.reduce((function(t,r){return r(t)}),r)}}var R=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(r){var e=new t;return e.source=this,e.operator=r,e},t.prototype.subscribe=function(t,r,e){var n,o=this,i=(n=t)&&n instanceof P||function(t){return t&&p(t.next)&&p(t.error)&&p(t.complete)}(n)&&w(n)?t:new E(t,r,e);return x((function(){var t=o,r=t.operator,e=t.source;i.add(r?r.call(i,e):e?o._subscribe(i):o._trySubscribe(i))})),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){t.error(r)}},t.prototype.forEach=function(t,r){var e=this;return new(r=U(r))((function(r,n){var o;o=e.subscribe((function(r){try{t(r)}catch(t){n(t),null==o||o.unsubscribe()}}),n,r)}))},t.prototype._subscribe=function(t){var r;return null===(r=this.source)||void 0===r?void 0:r.subscribe(t)},t.prototype[A]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return N(t)(this)},t.prototype.toPromise=function(t){var r=this;return new(t=U(t))((function(t,e){var n;r.subscribe((function(t){return n=t}),(function(t){return e(t)}),(function(){return t(n)}))}))},t.create=function(r){return new t(r)},t}();function U(t){var r;return null!==(r=null!=t?t:g.Promise)&&void 0!==r?r:Promise}function F(t){return function(r){if(function(t){return p(null==t?void 0:t.lift)}(r))return r.lift((function(r){try{return t(r,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}var L=function(t){function r(r,e,n,o,i){var u=t.call(this,r)||this;return u.onFinalize=i,u._next=e?function(t){try{e(t)}catch(t){r.error(t)}}:t.prototype._next,u._error=o?function(t){try{o(t)}catch(t){r.error(t)}finally{this.unsubscribe()}}:t.prototype._error,u._complete=n?function(){try{n()}catch(t){r.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,u}return n(r,t),r.prototype.unsubscribe=function(){var r,e=this.closed;t.prototype.unsubscribe.call(this),!e&&(null===(r=this.onFinalize)||void 0===r||r.call(this))},r}(P),M=h((function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),V=function(t){function r(){var r=t.call(this)||this;return r.closed=!1,r.observers=[],r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return n(r,t),r.prototype.lift=function(t){var r=new z(this,this);return r.operator=t,r},r.prototype._throwIfClosed=function(){if(this.closed)throw new M},r.prototype.next=function(t){var r=this;x((function(){var e,n;if(r._throwIfClosed(),!r.isStopped){var o=r.observers.slice();try{for(var i=u(o),c=i.next();!c.done;c=i.next()){c.value.next(t)}}catch(t){e={error:t}}finally{try{c&&!c.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}}}))},r.prototype.error=function(t){var r=this;x((function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=t;for(var e=r.observers;e.length;)e.shift().error(t)}}))},r.prototype.complete=function(){var t=this;x((function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var r=t.observers;r.length;)r.shift().complete()}}))},r.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=null},Object.defineProperty(r.prototype,"observed",{get:function(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0},enumerable:!1,configurable:!0}),r.prototype._trySubscribe=function(r){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,r)},r.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},r.prototype._innerSubscribe=function(t){var r=this,e=r.hasError,n=r.isStopped,o=r.observers;return e||n?v:(o.push(t),new d((function(){return y(o,t)})))},r.prototype._checkFinalizedStatuses=function(t){var r=this,e=r.hasError,n=r.thrownError,o=r.isStopped;e?t.error(n):o&&t.complete()},r.prototype.asObservable=function(){var t=new R;return t.source=this,t},r.create=function(t,r){return new z(t,r)},r}(R),z=function(t){function r(r,e){var n=t.call(this)||this;return n.destination=r,n.source=e,n}return n(r,t),r.prototype.next=function(t){var r,e;null===(e=null===(r=this.destination)||void 0===r?void 0:r.next)||void 0===e||e.call(r,t)},r.prototype.error=function(t){var r,e;null===(e=null===(r=this.destination)||void 0===r?void 0:r.error)||void 0===e||e.call(r,t)},r.prototype.complete=function(){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===r||r.call(t)},r.prototype._subscribe=function(t){var r,e;return null!==(e=null===(r=this.source)||void 0===r?void 0:r.subscribe(t))&&void 0!==e?e:v},r}(V),B=function(t){function r(r){var e=t.call(this)||this;return e._value=r,e}return n(r,t),Object.defineProperty(r.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),r.prototype._subscribe=function(r){var e=t.prototype._subscribe.call(this,r);return!e.closed&&r.next(this._value),e},r.prototype.getValue=function(){var t=this,r=t.hasError,e=t.thrownError,n=t._value;if(r)throw e;return this._throwIfClosed(),n},r.prototype.next=function(r){t.prototype.next.call(this,this._value=r)},r}(V);var H="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function Y(t){if(t instanceof R)return t;if(null!=t){if(function(t){return p(t[A])}(t))return a=t,new R((function(t){var r=a[A]();if(p(r.subscribe))return r.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if((c=t)&&"number"==typeof c.length&&"function"!=typeof c)return o=t,new R((function(t){for(var r=0;r<o.length&&!t.closed;r++)t.next(o[r]);t.complete()}));if(p(null==(n=t)?void 0:n.then))return e=t,new R((function(t){e.then((function(r){t.closed||(t.next(r),t.complete())}),(function(r){return t.error(r)})).then(null,_)}));if(function(t){return Symbol.asyncIterator&&p(null==t?void 0:t[Symbol.asyncIterator])}(t))return J(t);if(function(t){return p(null==t?void 0:t[H])}(t))return r=t,new R((function(t){var e,n;try{for(var o=u(r),i=o.next();!i.done;i=o.next()){var c=i.value;if(t.next(c),t.closed)return}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}t.complete()}));if(function(t){return p(null==t?void 0:t.getReader)}(t))return J(function(t){return l(this,arguments,(function(){var r,e,n;return i(this,(function(o){switch(o.label){case 0:r=t.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,s(r.read())];case 3:return e=o.sent(),n=e.value,e.done?[4,s(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,s(n)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return r.releaseLock(),[7];case 10:return[2]}}))}))}(t))}var r,e,n,o,c,a;throw function(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}(t)}function J(t){return new R((function(r){(function(t,r){var e,n,u,c;return o(this,void 0,void 0,(function(){var o,a;return i(this,(function(i){switch(i.label){case 0:i.trys.push([0,5,6,11]),e=f(t),i.label=1;case 1:return[4,e.next()];case 2:if((n=i.sent()).done)return[3,4];if(o=n.value,r.next(o),r.closed)return[2];i.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=i.sent(),u={error:a},[3,11];case 6:return i.trys.push([6,,9,10]),n&&!n.done&&(c=e.return)?[4,c.call(e)]:[3,8];case 7:i.sent(),i.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return r.complete(),[2]}}))}))})(t,r).catch((function(t){return r.error(t)}))}))}function q(t){return p((r=t)[r.length-1])?t.pop():void 0;var r}function G(t,r){return F((function(e,n){var o=0;e.subscribe(new L(n,(function(e){n.next(t.call(r,e,o++))})))}))}function $(t,r){return F((function(e,n){var o=0;e.subscribe(new L(n,(function(e){return t.call(r,e,o++)&&n.next(e)})))}))}function K(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=q(t);return F((function(r,n){for(var o=t.length,i=new Array(o),u=t.map((function(){return!1})),s=!1,l=function(r){Y(t[r]).subscribe(new L(n,(function(t){i[r]=t,s||u[r]||(u[r]=!0,(s=u.every(I))&&(u=null))}),S))},f=0;f<o;f++)l(f);r.subscribe(new L(n,(function(t){if(s){var r=a([t],c(i));n.next(e?e.apply(void 0,a([],c(r))):r)}})))}))}var Q,W,X,Z="data-react-app",tt=[],rt={characterData:!0,childList:!0,subtree:!0},et=function(){var t=function(){var t=document.querySelectorAll("[data-react-app]"),r={};return t.forEach((function(t){var e=t.getAttribute(Z),n=t.getElementsByTagName("script")[0],o=JSON.parse((null==n?void 0:n.innerHTML)||"{}");r[e]=o})),r}();tt.forEach((function(r){return r(t)}))};W=document.getElementsByTagName("body")[0],(Q=new MutationObserver(et)).observe(W,rt),window.addEventListener("beforeunload",(function(){Q.disconnect(),tt.length=0}));var nt,ot,it=function(t){return X.next(t)},ut=new Uint8Array(16);function ct(){if(!ot&&!(ot="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ot(ut)}var at=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function st(t){return"string"==typeof t&&at.test(t)}for(var lt=[],ft=0;ft<256;++ft)lt.push((ft+256).toString(16).substr(1));function pt(t,r,e){var n=(t=t||{}).random||(t.rng||ct)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,r){e=e||0;for(var o=0;o<16;++o)r[e+o]=n[o];return r}return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(lt[t[r+0]]+lt[t[r+1]]+lt[t[r+2]]+lt[t[r+3]]+"-"+lt[t[r+4]]+lt[t[r+5]]+"-"+lt[t[r+6]]+lt[t[r+7]]+"-"+lt[t[r+8]]+lt[t[r+9]]+"-"+lt[t[r+10]]+lt[t[r+11]]+lt[t[r+12]]+lt[t[r+13]]+lt[t[r+14]]+lt[t[r+15]]).toLowerCase();if(!st(e))throw TypeError("Stringified UUID is invalid");return e}(n)}function ht(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}var bt=function(t){var e=new Date;return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ht(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ht(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}({meta:{uuid:pt(),timestamp:e.toUTCString()}},t)},yt="notification",dt="remove";function vt(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function wt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?vt(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vt(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}var mt,gt,Ot,_t,St,jt,xt=Object.freeze({__proto__:null,addNotification:function(t){return bt({class:yt,type:"add",payload:wt({uuid:pt()},t)})},removeNotification:function(t){return bt({class:yt,type:dt,payload:t})}}),Pt=function(t){return k($((function(r){return r.class===t})))},Et=function(t){return k($((function(r){return r.type===t})))},Tt={next:function(t){return mt.next(t)}},Ct=function(t){gt=t.pipe(Pt(yt),Et("add"),K(mt),G((function(t){var r=t[0].payload,e=t[1];return[].concat(e,[r])}))),Ot=t.pipe(Pt(yt),Et(dt),K(mt),G((function(t){var r=t[0].payload,e=t[1];return Array.isArray(r)?e.filter((function(t){var e=t.uuid;return!r.includes(e)})):e.filter((function(t){return t.uuid!==r}))}))),gt.subscribe(Tt),Ot.subscribe(Tt)},Dt=[],At={childList:!0,subtree:!0},It=function(t){var r=function(t){return JSON.parse(t)}((null==t?void 0:t.textContent)||"{}");Dt.forEach((function(t){return t(r)}))},kt=function(t){var r=t[0];return It(r.target)};St=document.getElementById("user-service-config"),It(St),(_t=new MutationObserver(kt)).observe(St,At),window.addEventListener("beforeunload",(function(){_t.disconnect(),Dt.length=0}));var Nt,Rt=function(t){return jt.next(t)},Ut="cartState",Ft=Object.freeze({__proto__:null,setCartState:function(t){return bt({class:Ut,type:"set",payload:t})}});function Lt(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function Mt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Lt(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Lt(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}var Vt={next:function(t){return Nt.next(t)}},zt=function(t){t.pipe(Pt(Ut),Et("set"),K(Nt),G((function(t){var r=t[0].payload;return Mt(Mt({},t[1]),r)}))).subscribe(Vt)};function Bt(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function Ht(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Bt(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bt(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}var Yt,Jt=Ht(Ht({},xt),Ft),qt=nt||(nt=new V),Gt=(Yt=qt,mt||(mt=new B([]),Ct(Yt)),mt.asObservable()),$t=(X||(X=new B({}),function(t){t instanceof Function&&tt.push(t)}(it)),X.asObservable()),Kt=(jt||(jt=new B({}),function(t){t instanceof Function&&Dt.push(t)}(Rt)),jt.asObservable()),Qt=function(t){return Nt||(Nt=new B({status:"FETCH",shouldRefreshMainCart:!1}),zt(t)),Nt.asObservable()}(qt);t.Actions=Jt,t.ApplicationConfigs=$t,t.CartState=Qt,t.Cord=qt,t.Notification=Gt,t.PlatformConfig=Kt,t.createAction=bt,Object.defineProperty(t,"__esModule",{value:!0})}));

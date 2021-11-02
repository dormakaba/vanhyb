!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("react"),require("react-dom"),require("@vanhyb/backbone"),require("classnames"),require("@dormakaba/vanguard")):"function"==typeof define&&define.amd?define(["react","react-dom","@vanhyb/backbone","classnames","@dormakaba/vanguard"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).dormakaba.vendorReact["vendor/react"],e.dormakaba.vendorReact["vendor/react-dom"],e.DormakabaBackbone,e.dormakaba.vendorReact["vendor/classnames"],e.DormakabaVanguard)}(this,(function(e,t,r,n,o){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=a(e),c=a(n),u=e.createContext(null),s=function(t){var r=t.appId,n=t.children,o=t.defaultValue,a=void 0===o?{}:o,c=e.useMemo((function(){if(!r)return a;var e='[data-react-app="'+r+'"]',t=document.querySelector(e);if(!t)throw new Error(e+" is missing");var n=t.querySelector("script");return null!=n&&n.innerHTML?JSON.parse(n.innerHTML):a}),[r,a]);return i.default.createElement(u.Provider,{value:c},n)};function l(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){l(a,n,o,i,c,"next",e)}function c(e){l(a,n,o,i,c,"throw",e)}i(void 0)}))}}var h={exports:{}};!function(e){var t=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof g?t:g,a=Object.create(o.prototype),i=new T(n||[]);return a._invoke=function(e,t,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function g(){}function m(){}function y(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,C=w&&w(w(I([])));C&&C!==r&&n.call(C,a)&&(b=C);var E=y.prototype=g.prototype=Object.create(b);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(o,a,i,c){var u=l(e[o],e,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(u.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function S(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function I(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:t,done:!0}}return m.prototype=E.constructor=y,y.constructor=m,m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},x(k.prototype),k.prototype[i]=function(){return this},e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(E),u(E,c,"Generator"),E[a]=function(){return this},E.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=I,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}(h);var d=h.exports;function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,p(e,t)}function g(e){(function(e){var t={errors:[{errorId:String(e.status),message:e.responseText||e.statusText,stackTrace:""}]};try{var r=JSON.parse(e.responseText);return r.errors[0].message?r:t}catch(e){return t}})(e).errors.forEach((function(e){var t=[e.message,e.technicalMksMessage].filter(Boolean);console.log(e.errorId,t.join("<br>"))}))}var m=function(){var e=this;this.cache={},this.cacheClearListener=[],this.lastCacheClear=new Date,this.addEntry=function(t,r){e.cache[t]=r},this.hasEntry=function(t){return Object.keys(e.cache).some((function(e){return e===t}))},this.getEntry=function(t){return e.cache[t]},this.clearCache=function(){e.cache={},e.lastCacheClear=new Date,setTimeout((function(){e.cacheClearListener.forEach((function(t){return t(e.lastCacheClear)}))}))},this.subscribeToCacheClear=function(t){e.cacheClearListener.push(t)},this.unsubscribeFromCacheClear=function(t){var r=e.cacheClearListener.indexOf(t);r>-1&&e.cacheClearListener.splice(r,1)}},y=new(function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).supportedStatusCodes=[401],t.supportedErrorIds=["account.error.unauthorized.user"],t.getApiErrorResponse=function(e){try{return JSON.parse(e.responseText)}catch(t){console.warn(new Error("Could not parse authentication error: "+e.status+" "+JSON.stringify(e.responseText)))}},t}v(t,e);var r=t.prototype;return r.supports=function(e){return this.supportedStatusCodes.some((function(t){return e.status===t}))},r.handleRequestInternal=function(e,t){var r=this.getApiErrorResponse(e);if(r&&(r&&this.supportedErrorIds.some((function(e){return e===r.errorId}))))return void window.location.reload();return Promise.reject(e)},t}(function(){function e(e){var t=(void 0===e?{overlayClosable:!1}:e).overlayClosable;this.overlayClosable=void 0,this.getApiErrorResponse=function(e){var t;try{return!(t=JSON.parse(e.responseText))&&!t.errors&&t.errors.length<=0&&console.warn(new Error("Could not parse authentication error: "+e.status+" "+JSON.stringify(e.responseText))),t.errors[0]}catch(t){console.warn(new Error("Could not parse authentication error: "+e.status+" "+JSON.stringify(e.responseText)))}},this.overlayClosable=t}return e.prototype.handleRequest=function(e){return this.supports(e)?this.handleRequestInternal(e,this.overlayClosable):Promise.reject(e)},e}())),b=function e(t){var r=this,n=t.url,o=t.cacheEnabled,a=void 0!==o&&o,i=t.options;this.cache=void 0,this.url=void 0,this.cacheEnabled=void 0,this.options=void 0,this.ajax=function(e){var t=e.keys,n=e.body,o=e.headerOptions,a=e.errorInterceptors,i=e.omitErrorMessage,c=void 0!==i&&i,u=Object.assign({},r.getOptions(t),{headerOptions:o}),s=r.doRequestInternal(t,n);return s.catch((function(t){return a?a.reduce((function(t,n){return t.catch((function(t){var o,a;return null==n||null==(o=n.handleRequest(t))||null==(a=o.then((function(){return r.ajax(e)})))?void 0:a.catch((function(e){return Promise.reject(e)}))}))}),Promise.reject(t)):s})).catch((function(e){return void 0===y.handleRequest(e)?s:Promise.reject(e)})).catch((function(e){return c||g(e),u.afterError&&u.afterError(e,r),s})).then((function(e){return u.afterSuccess&&u.afterSuccess(e),e}))},this.generateHash=function(e){var t=0;if(0===e.length)return t.toString();for(var r=0;r<e.length;r++){t=(t<<5)-t+e.charCodeAt(r),t&=t}return t.toString()},this.getCacheEntryKey=function(e){return r.generateHash(r.getHeader(e)+" : "+r.getUrl(e))},this.getUrl=function(e){return r.url(e)},this.getOptions=function(e){return r.options(e)},this.getHeader=function(t){var n=e.createHeaders(r.getOptions(t).headerOptions),o=JSON.stringify(n).split(/\{([^\ "}]+)\}/);return n?o.map((function(e,t){return t%2?n[e]:e})).join(""):o.join("")},this.onCacheClear=function(e){r.cache&&r.cache.subscribeToCacheClear(e)},this.offCacheClear=function(e){r.cache&&r.cache.unsubscribeFromCacheClear(e)},this.clearCache=function(){r.cache&&r.cache.clearCache()},this.doRequestInternal=function(e,t){var n,o=r.getCacheEntryKey(e);if(r.cacheEnabled&&null!=(n=r.cache)&&n.hasEntry(o))return r.cache.getEntry(o);var a=r.request(e,t);return r.cacheEnabled&&a.then((function(e){var t;return null==(t=r.cache)?void 0:t.addEntry(o,a)})).catch((function(e){return console.warn("Omit cache entry",e)})),a},this.url=n,this.cacheEnabled=a||!1,this.options=i||function(){return{}},this.cacheEnabled&&(this.cache=new m)};function w(e){return JSON.parse(e,(function(e,t){return"string"==typeof t&&/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(\.\d{1,3})?([+-][0-2]\d:[0-5]\d|Z)$/.test(t)?new Date(t):t}))}b.createHeaders=function(e){var t=e||{};return t={defaultContentTypeJsonUTF8:void 0===t.defaultContentTypeJsonUTF8||t.defaultContentTypeJsonUTF8,customHeaders:t.customHeaders||{},authToken:t.authToken,requestedWith:t.requestedWith||"XMLHttpRequest"},Object.assign({},t.defaultContentTypeJsonUTF8&&{"Content-Type":"application/json; charset=UTF-8"},t.authToken&&{Authorization:"Bearer "+t.authToken},t.requestedWith&&{"X-Requested-With":t.requestedWith},t.customHeaders&&t.customHeaders)};var C=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).request=function(e){return new Promise((function(r,n){var o=new XMLHttpRequest;o.open("GET",t.getUrl(e),!0),o.timeout=t.getOptions(e).timeout||18e4;var a=JSON.parse(t.getHeader(e));Object.keys(a).forEach((function(e){o.setRequestHeader(e,a[e])})),o.onload=function(){var e,t=-1!==(o.getResponseHeader("Content-Type")||"").indexOf("html");if(o.status<200||o.status>=400)return n(o);if(t)return r(o.responseText);try{e=o.responseText?w(o.responseText):void 0}catch(e){return n(o)}r(e)},o.onerror=function(){n(o)},o.send();var i=t.getAjaxSignal(e);i&&(i.onabort=function(){console.log("GetEndpoint: request aborted by user "+t.getUrl(e)),o.abort(),r(void 0)})}))},t.getAjaxSignal=function(e){return e.signal},t}return v(t,e),t}(b);C.create=function(e){var t=e.url,r=e.cacheEnabled,n=e.options;return new C({url:t,cacheEnabled:r,options:n})};var E=C.create({url:function(e){return e.encodedContextPath+"/login/token"},cacheEnabled:!1}),x=function(){try{var e,t;return JSON.parse(null!=(e=null==(t=document.querySelector("#terrific-config"))?void 0:t.innerHTML)?e:"{}")}catch(e){throw new Error("Could not read terrific-config from #terrific-config "+e)}},k=function(){var e=document.getElementById("user-service-config");return JSON.parse((null==e?void 0:e.innerHTML)||"{}")},S=function(){var e=document.documentElement.getAttribute("lang")||"";if(!e)throw new Error("html[lang] is missing");return e},O=function(){var t=function(){var t=e.useState(x),r=t[0],n=t[1];return{config:r,reload:e.useCallback((function(){return n(x())}),[n])}}().config,r=e.useState(k),n=r[0],o=r[1],a=e.useState(S),i=a[0],c=a[1],u=function(){var t=e.useCallback((function(e,t){var r={meta:{createdAt:Date.now()},value:t};return sessionStorage.setItem(e,JSON.stringify(r)),r}),[]),r=e.useCallback((function(e){return JSON.parse(sessionStorage.getItem(e))}),[]),n=e.useCallback((function(e){return sessionStorage.removeItem(e)}),[]);return{clear:e.useCallback((function(){return sessionStorage.clear()}),[]),setItem:t,getItem:r,removeItem:n}}(),s=u.setItem,l=u.getItem,f=u.removeItem,h=e.useState(),d=h[0],p=h[1],v=e.useCallback((function(){o(k()),c(S())}),[o,c]),g=e.useCallback((function(e,t){"loggedIn"===e&&t?p(s(n.currentUserId,t)):(f(n.currentUserId),p(void 0))}),[n,f,s,p]);return e.useEffect((function(){return n.currentUserId&&p(l(n.currentUserId))}),[n,l,p]),e.useEffect((function(){var e,r=Date.now()-(null==d||null==(e=d.meta)?void 0:e.createdAt);(null==d||!d.value||r>=36e5)&&E.ajax({keys:{encodedContextPath:t.encodedContextPath}}).then((function(e){return g("loggedIn",e)}),(function(){return g("loggedOut")}))}),[t,d,g]),{info:n,language:i,token:null==d?void 0:d.value,reload:v}},L="{undefined}",T={baseSiteId:"hybrisStoreName",userId:"currentUserId"},I=function(e){return"/"+(null==(t=window.location.pathname.split("/").filter((function(e){return e})))?void 0:t[0])+"/"+(null==t?void 0:t[1])+e;var t},j=function(e,t){void 0===e&&(e=""),void 0===t&&(t="occ");var r="";switch(t){case"occ":r=function(e){return"/dormakabacommercewebservices/v2"+e}(e);break;case"redirect":r=I(e)}return r},N=function(t){void 0===t&&(t=!1);var n=e.useState({isCalculating:!1}),o=n[0],a=n[1],i={dispatch:e.useCallback((function(e){return r.Cord.next(e)}),[])}.dispatch,c=e.useCallback((function(e){return i(r.Actions.setCartState(e))}),[i]);return e.useEffect((function(){if(t){var e=r.CartState.subscribe(a);return function(){return e.unsubscribe()}}}),[t,a]),{cartState:o,setCartState:c}},q=e.memo((function(e){var t=e.isSimulation;return i.default.createElement(o.Box,{className:c.default("transform scale-150")},i.default.createElement(o.Icon,{type:t?"simulateprice":"cart",color:"white"}))})),R=function(e){var t=e.isSimulation,r=e.totalNumber,n=e.maxTotalNumber;return i.default.createElement(o.Link,{href:j("/cart","redirect"),className:"inline-block"},i.default.createElement(o.Box,{paddingY:"lg",paddingX:"lg",background:"primary",className:c.default("relative w-20 h-20 hover:bg-gray-600")},i.default.createElement(q,{isSimulation:t}),!!r&&i.default.createElement(o.Box,{background:"secondary",className:c.default("absolute top-3 right-3 h-5 text-center rounded-full"),style:{minWidth:"20px"}},i.default.createElement(o.TextLayout,{color:"lighter",textsize:"sm"},r>n?"+"+n:r))))},P=function(){var t,r=N(!0).cartState,n=e.useContext(u).cartCode,o=function(t,r){void 0===t&&(t=""),void 0===r&&(r={});var n=e.useState({get:{data:null,isLoading:!1,errors:null},post:{data:null,isLoading:!1,errors:null},put:{data:null,isLoading:!1,errors:null},patch:{data:null,isLoading:!1,errors:null}}),o=n[0],a=n[1],i=O(),c=i.info,u=i.token,s=e.useMemo((function(){var e=Object.assign({},r,c),n="",o=function(e){var t=/[{}]/g;return(e.match(/{([\w\d]+)}/g)||[]).map((function(e){return e.replace(t,"")}))}(t),a=new RegExp(L);return o.forEach((function(r){var o;n=n||t;var a=null!=(o=e[T[r]||r])?o:L;n=n.replace("{"+r+"}",a)})),a.test(n)?"":n}),[c,t,r]),l=e.useCallback((function(e,t){return a((function(r){var n;return Object.assign({},r,((n={})[e]=Object.assign({},r[e],{isLoading:t}),n))}))}),[a]),h=e.useCallback((function(e,t,r){return a((function(n){var o;return Object.assign({},n,((o={})[e]=Object.assign({},n[e],{data:t,errors:r}),o))}))}),[a]),p=e.useCallback((function(e,t){if(void 0===t&&(t={}),!s||!u)return Promise.reject().catch((function(){}));var r=/get|options/.test(e),n=r?void 0:t,o=new URLSearchParams;Object.keys(t).forEach((function(e){return o.append(e,t[e])}));var a=o.toString(),i=r&&a?s+"?"+a:s,c={Authorization:"Bearer "+u};return r||(c["Content-Type"]="application/json"),l(e,!0),fetch(i,{method:e,headers:c,body:JSON.stringify(n)}).then(function(){var e=f(d.mark((function e(t){var r;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(r=e.sent,t.ok){e.next=5;break}throw r;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(t){return h(e,t,null),t})).catch((function(t){var r=t.errors||[{message:t.message}];throw h(e,null,r),r})).finally((function(){return l(e,!1)}))}),[s,u,h,l]),v=e.useCallback((function(e){return void 0===e&&(e={}),p("get",e)}),[p]),g=e.useCallback((function(e){return void 0===e&&(e={}),p("post",e)}),[p]),m=e.useCallback((function(e){return void 0===e&&(e={}),p("put",e)}),[p]);return{responses:o,get:v,post:g,patch:e.useCallback((function(e){return void 0===e&&(e={}),p("patch",e)}),[p]),put:m}}(j("/{baseSiteId}/users/{userId}/cart/{cartCode}?fields=BASIC"),{cartCode:n}),a=o.responses.get,i=o.get,c=e.useCallback(f(d.mark((function e(){return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Fetch cart failed.",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])}))),[i]);return e.useEffect((function(){c()}),[c]),e.useEffect((function(){if(r.isCalculating){var e=setInterval(c,1e3);return function(){return clearInterval(e)}}}),[c,r.isCalculating]),{isCalculating:r.isCalculating,totalNumberItems:(null==a||null==(t=a.data)?void 0:t.totalGroupedItems)||0}},H=function(){var e=P(),t=e.isCalculating,r=e.totalNumberItems;return i.default.createElement(R,{isSimulation:t,totalNumber:r,maxTotalNumber:99})},J=function(){return i.default.createElement(s,{appId:"mini-cart"},i.default.createElement(H,null))},_=document.querySelector('[data-react-app="mini-cart"]')||function(e){throw new Error(e)}('[data-react-app="mini-cart"] is missing'),A=document.createElement("div");_.appendChild(A),t.render(e.createElement(J),A)}));

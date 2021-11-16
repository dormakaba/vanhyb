!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("react"),require("react-dom"),require("@vanhyb/backbone"),require("@dormakaba/vanguard")):"function"==typeof define&&define.amd?define(["react","react-dom","@vanhyb/backbone","@dormakaba/vanguard"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).dormakaba.vendorReact["vendor/react"],t.dormakaba.vendorReact["vendor/react-dom"],t.DormakabaBackbone,t.DormakabaVanguard)}(this,(function(t,e,r,n){"use strict";function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var a=o(t),i=t.createContext(null),c=function(e){var r=e.appId,n=e.children,o=e.defaultValue,c=void 0===o?{}:o,u=t.useMemo((function(){if(!r)return c;var t='[data-react-app="'+r+'"]',e=document.querySelector(t);if(!e)throw new Error(t+" is missing");var n=e.querySelector("script");return null!=n&&n.innerHTML?JSON.parse(n.innerHTML):c}),[r,c]);return a.default.createElement(i.Provider,{value:u},n)},u=function(){return t.useContext(i)};function s(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var l={exports:{}};!function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new T(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return I()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function g(){}function y(){}function m(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(j([])));E&&E!==r&&n.call(E,a)&&(b=E);var C=m.prototype=g.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return y.prototype=C.constructor=m,m.constructor=y,y.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},x(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(C),u(C,c,"Generator"),C[a]=function(){return this},C.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}(l);var f=l.exports;function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,h(t,e)}function p(t){(function(t){var e={errors:[{errorId:String(t.status),message:t.responseText||t.statusText,stackTrace:""}]};try{var r=JSON.parse(t.responseText);return r.errors[0].message?r:e}catch(t){return e}})(t).errors.forEach((function(t){var e=[t.message,t.technicalMksMessage].filter(Boolean);console.log(t.errorId,e.join("<br>"))}))}var v=function(){var t=this;this.cache={},this.cacheClearListener=[],this.lastCacheClear=new Date,this.addEntry=function(e,r){t.cache[e]=r},this.hasEntry=function(e){return Object.keys(t.cache).some((function(t){return t===e}))},this.getEntry=function(e){return t.cache[e]},this.clearCache=function(){t.cache={},t.lastCacheClear=new Date,setTimeout((function(){t.cacheClearListener.forEach((function(e){return e(t.lastCacheClear)}))}))},this.subscribeToCacheClear=function(e){t.cacheClearListener.push(e)},this.unsubscribeFromCacheClear=function(e){var r=t.cacheClearListener.indexOf(e);r>-1&&t.cacheClearListener.splice(r,1)}},g=new(function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).supportedStatusCodes=[401],e.supportedErrorIds=["account.error.unauthorized.user"],e.getApiErrorResponse=function(t){try{return JSON.parse(t.responseText)}catch(e){console.warn(new Error("Could not parse authentication error: "+t.status+" "+JSON.stringify(t.responseText)))}},e}d(e,t);var r=e.prototype;return r.supports=function(t){return this.supportedStatusCodes.some((function(e){return t.status===e}))},r.handleRequestInternal=function(t,e){var r=this.getApiErrorResponse(t);if(r&&(r&&this.supportedErrorIds.some((function(t){return t===r.errorId}))))return void window.location.reload();return Promise.reject(t)},e}(function(){function t(t){var e=(void 0===t?{overlayClosable:!1}:t).overlayClosable;this.overlayClosable=void 0,this.getApiErrorResponse=function(t){var e;try{return!(e=JSON.parse(t.responseText))&&!e.errors&&e.errors.length<=0&&console.warn(new Error("Could not parse authentication error: "+t.status+" "+JSON.stringify(t.responseText))),e.errors[0]}catch(e){console.warn(new Error("Could not parse authentication error: "+t.status+" "+JSON.stringify(t.responseText)))}},this.overlayClosable=e}return t.prototype.handleRequest=function(t){return this.supports(t)?this.handleRequestInternal(t,this.overlayClosable):Promise.reject(t)},t}())),y=function t(e){var r=this,n=e.url,o=e.cacheEnabled,a=void 0!==o&&o,i=e.options;this.cache=void 0,this.url=void 0,this.cacheEnabled=void 0,this.options=void 0,this.ajax=function(t){var e=t.keys,n=t.body,o=t.headerOptions,a=t.errorInterceptors,i=t.omitErrorMessage,c=void 0!==i&&i,u=Object.assign({},r.getOptions(e),{headerOptions:o}),s=r.doRequestInternal(e,n);return s.catch((function(e){return a?a.reduce((function(e,n){return e.catch((function(e){var o,a;return null==n||null==(o=n.handleRequest(e))||null==(a=o.then((function(){return r.ajax(t)})))?void 0:a.catch((function(t){return Promise.reject(t)}))}))}),Promise.reject(e)):s})).catch((function(t){return void 0===g.handleRequest(t)?s:Promise.reject(t)})).catch((function(t){return c||p(t),u.afterError&&u.afterError(t,r),s})).then((function(t){return u.afterSuccess&&u.afterSuccess(t),t}))},this.generateHash=function(t){var e=0;if(0===t.length)return e.toString();for(var r=0;r<t.length;r++){e=(e<<5)-e+t.charCodeAt(r),e&=e}return e.toString()},this.getCacheEntryKey=function(t){return r.generateHash(r.getHeader(t)+" : "+r.getUrl(t))},this.getUrl=function(t){return r.url(t)},this.getOptions=function(t){return r.options(t)},this.getHeader=function(e){var n=t.createHeaders(r.getOptions(e).headerOptions),o=JSON.stringify(n).split(/\{([^\ "}]+)\}/);return n?o.map((function(t,e){return e%2?n[t]:t})).join(""):o.join("")},this.onCacheClear=function(t){r.cache&&r.cache.subscribeToCacheClear(t)},this.offCacheClear=function(t){r.cache&&r.cache.unsubscribeFromCacheClear(t)},this.clearCache=function(){r.cache&&r.cache.clearCache()},this.doRequestInternal=function(t,e){var n,o=r.getCacheEntryKey(t);if(r.cacheEnabled&&null!=(n=r.cache)&&n.hasEntry(o))return r.cache.getEntry(o);var a=r.request(t,e);return r.cacheEnabled&&a.then((function(t){var e;return null==(e=r.cache)?void 0:e.addEntry(o,a)})).catch((function(t){return console.warn("Omit cache entry",t)})),a},this.url=n,this.cacheEnabled=a||!1,this.options=i||function(){return{}},this.cacheEnabled&&(this.cache=new v)};function m(t){return JSON.parse(t,(function(t,e){return"string"==typeof e&&/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(\.\d{1,3})?([+-][0-2]\d:[0-5]\d|Z)$/.test(e)?new Date(e):e}))}y.createHeaders=function(t){var e=t||{};return e={defaultContentTypeJsonUTF8:void 0===e.defaultContentTypeJsonUTF8||e.defaultContentTypeJsonUTF8,customHeaders:e.customHeaders||{},authToken:e.authToken,requestedWith:e.requestedWith||"XMLHttpRequest"},Object.assign({},e.defaultContentTypeJsonUTF8&&{"Content-Type":"application/json; charset=UTF-8"},e.authToken&&{Authorization:"Bearer "+e.authToken},e.requestedWith&&{"X-Requested-With":e.requestedWith},e.customHeaders&&e.customHeaders)};var b=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).request=function(t){return new Promise((function(r,n){var o=new XMLHttpRequest;o.open("GET",e.getUrl(t),!0),o.timeout=e.getOptions(t).timeout||18e4;var a=JSON.parse(e.getHeader(t));Object.keys(a).forEach((function(t){o.setRequestHeader(t,a[t])})),o.onload=function(){var t,e=-1!==(o.getResponseHeader("Content-Type")||"").indexOf("html");if(o.status<200||o.status>=400)return n(o);if(e)return r(o.responseText);try{t=o.responseText?m(o.responseText):void 0}catch(t){return n(o)}r(t)},o.onerror=function(){n(o)},o.send();var i=e.getAjaxSignal(t);i&&(i.onabort=function(){console.log("GetEndpoint: request aborted by user "+e.getUrl(t)),o.abort(),r(void 0)})}))},e.getAjaxSignal=function(t){return t.signal},e}return d(e,t),e}(y);b.create=function(t){var e=t.url,r=t.cacheEnabled,n=t.options;return new b({url:e,cacheEnabled:r,options:n})};var w=b.create({url:function(t){return t.encodedContextPath+"/login/token"},cacheEnabled:!1}),E=function(){try{var t,e;return JSON.parse(null!=(t=null==(e=document.querySelector("#terrific-config"))?void 0:e.innerHTML)?t:"{}")}catch(t){throw new Error("Could not read terrific-config from #terrific-config "+t)}},C=function(){var t=document.getElementById("user-service-config");return JSON.parse((null==t?void 0:t.innerHTML)||"{}")},x=function(){var t=document.documentElement.getAttribute("lang")||"";if(!t)throw new Error("html[lang] is missing");return t},k=function(){var e=function(){var e=t.useState(E),r=e[0],n=e[1];return{config:r,reload:t.useCallback((function(){return n(E())}),[n])}}().config,r=t.useState(C),n=r[0],o=r[1],a=t.useState(x),i=a[0],c=a[1],u=function(){var e=t.useCallback((function(t,e){var r={meta:{createdAt:Date.now()},value:e};return sessionStorage.setItem(t,JSON.stringify(r)),r}),[]),r=t.useCallback((function(t){return JSON.parse(sessionStorage.getItem(t))}),[]),n=t.useCallback((function(t){return sessionStorage.removeItem(t)}),[]);return{clear:t.useCallback((function(){return sessionStorage.clear()}),[]),setItem:e,getItem:r,removeItem:n}}(),s=u.setItem,l=u.getItem,f=u.removeItem,h=t.useState(),d=h[0],p=h[1],v=t.useCallback((function(){o(C()),c(x())}),[o,c]),g=t.useCallback((function(t,e){"loggedIn"===t&&e?p(s(n.currentUserId,e)):(f(n.currentUserId),p(void 0))}),[n,f,s,p]);return t.useEffect((function(){return n.currentUserId&&p(l(n.currentUserId))}),[n,l,p]),t.useEffect((function(){var t,r=Date.now()-(null==d||null==(t=d.meta)?void 0:t.createdAt);(null==d||!d.value||r>=36e5)&&w.ajax({keys:{encodedContextPath:e.encodedContextPath}}).then((function(t){return g("loggedIn",t)}),(function(){return g("loggedOut")}))}),[e,d,g]),{info:n,language:i,token:null==d?void 0:d.value,reload:v}},O="{undefined}",L={baseSiteId:"hybrisStoreName",userId:"currentUserId"},S=function(e,r){void 0===e&&(e=""),void 0===r&&(r={});var n=t.useState({get:{data:null,isLoading:!1,errors:null},post:{data:null,isLoading:!1,errors:null},put:{data:null,isLoading:!1,errors:null},patch:{data:null,isLoading:!1,errors:null}}),o=n[0],a=n[1],i=k(),c=i.info,u=i.token,l=t.useMemo((function(){var t=Object.assign({},r,c),n="",o=function(t){var e=/[{}]/g;return(t.match(/{([\w\d]+)}/g)||[]).map((function(t){return t.replace(e,"")}))}(e),a=new RegExp(O);return o.forEach((function(r){var o;n=n||e;var a=null!=(o=t[L[r]||r])?o:O;n=n.replace("{"+r+"}",a)})),a.test(n)?"":n}),[c,e,r]),h=t.useCallback((function(t,e){return a((function(r){var n;return Object.assign({},r,((n={})[t]=Object.assign({},r[t],{isLoading:e}),n))}))}),[a]),d=t.useCallback((function(t,e,r){return a((function(n){var o;return Object.assign({},n,((o={})[t]=Object.assign({},n[t],{data:e,errors:r}),o))}))}),[a]),p=t.useCallback((function(t,e){if(void 0===e&&(e={}),!l||!u)return Promise.reject(new Error("No target or token!"));var r=/get|options/.test(t),n=r?void 0:e,o=new URLSearchParams;Object.keys(e).forEach((function(t){return o.append(t,e[t])}));var a=o.toString(),i=r&&a?l+"?"+a:l,c={Authorization:"Bearer "+u};return r||(c["Content-Type"]="application/json; charset=utf-8"),h(t,!0),fetch(i,{method:t,headers:c,body:JSON.stringify(n)}).then(function(){var t,e=(t=f.mark((function t(e){var r;return f.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json().catch((function(){return null}));case 2:if(r=t.sent,e.ok){t.next=5;break}throw r;case 5:return t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){s(a,n,o,i,c,"next",t)}function c(t){s(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}()).then((function(e){return d(t,e,null),e})).catch((function(e){var r=e.errors||[{message:e.message}];throw d(t,null,r),r})).finally((function(){return h(t,!1)}))}),[l,u,d,h]),v=t.useCallback((function(t){return void 0===t&&(t={}),p("get",t)}),[p]),g=t.useCallback((function(t){return void 0===t&&(t={}),p("post",t)}),[p]),y=t.useCallback((function(t){return void 0===t&&(t={}),p("put",t)}),[p]);return{responses:o,get:v,post:g,patch:t.useCallback((function(t){return void 0===t&&(t={}),p("patch",t)}),[p]),put:y}},T=function(t,e){return void 0===e&&(e=[]),t.replaceAll("{}",function(t){var e=0;return function(r){return t[e++]||r}}(e))},j=function(t){return"/"+(null==(e=window.location.pathname.split("/").filter((function(t){return t})))?void 0:e[0])+"/"+(null==e?void 0:e[1])+t;var e},I=function(t,e){void 0===t&&(t=""),void 0===e&&(e="occ");var r="";switch(e){case"occ":r=function(t){var e="rootB2BUnit",r=new URL(t,"http://updateQueryParams");return r.searchParams.has(e)&&r.searchParams.delete(e),r.searchParams.append(e,"{rootB2BUnit}"),decodeURI(""+r.pathname+r.search)}(function(t){return"/dormakabacommercewebservices/v2"+t}(t));break;case"redirect":r=j(t)}return r},q=function(){var e,r=u(),n=r.showAvailability,o=r.showResources,a=r.showTechnicalDetails,i=r.technicalDetailsMapping,c=r.productCode,s=(e=u().translations,{t:t.useCallback((function(t){for(var r=null==e?void 0:e[t],n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return r?o.length?T(r,o):r:t}),[e])}).t,l=S(I("/{baseSiteId}/users/{userId}/products/{productCode}/additionalContent"),{productCode:c}),f=l.responses,h=l.get;return t.useEffect((function(){h()}),[h]),Object.assign({showAvailability:n,showResources:o,showTechnicalDetails:a,technicalDetailsMapping:i,isLoading:f.get.isLoading,t:s},f.get.data)},N=function(){var t=q();return a.default.createElement(n.AdditionalContent,t)},P=function(){return a.default.createElement(c,{appId:"additional-content"},a.default.createElement(N,null))},R=document.querySelector('[data-react-app="additional-content"]')||function(t){throw new Error(t)}('[data-react-app="additional-content"] is missing'),A=document.createElement("div");R.appendChild(A),e.render(t.createElement(P),A)}));

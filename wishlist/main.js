!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("react"),require("@vanhyb/backbone"),require("react-dom"),require("@dormakaba/vanguard"),require("classnames")):"function"==typeof define&&define.amd?define(["react","@vanhyb/backbone","react-dom","@dormakaba/vanguard","classnames"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).dormakaba.vendorReact["vendor/react"],t.backbone,t.dormakaba.vendorReact["vendor/react-dom"])}(this,(function(t,e,r){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=n(t),i=t.createContext(null),a=function(e){var r=e.appId,n=e.children,a=e.defaultValue,u=void 0===a?{}:a,s=t.useMemo((function(){if(!r)return u;var t='[data-react-app="'+r+'"]',e=document.querySelector(t);if(!e)throw new Error(t+" is missing");var n=e.querySelector("script");return null!=n&&n.innerHTML?JSON.parse(n.innerHTML):u}),[r,u]);return o.default.createElement(i.Provider,{value:s},n)},u=t.createContext(void 0),s=function(e){var r=e.appId,n=e.children,i=t.useMemo((function(){return{appId:r}}),[r]);return o.default.createElement(u.Provider,{value:i},n)};"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function h(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,c(t,e)}!function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new M(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return D()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=x(a,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=h(t,e,r);if("normal"===s.type){if(n=r.done?p:l,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f="suspendedStart",l="suspendedYield",d="executing",p="completed",v={};function y(){}function g(){}function m(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,$=b&&b(b(L([])));$&&$!==r&&n.call($,i)&&(w=$);var E=m.prototype=y.prototype=Object.create(w);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,u){var s=h(t[o],t,i);if("throw"!==s.type){var c=s.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,u)}))}u(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function L(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:D}}function D(){return{value:e,done:!0}}return g.prototype=E.constructor=m,m.constructor=g,g.displayName=s(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},S(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),s(E,u,"Generator"),E[i]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:L(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}({exports:{}});var f=function(){var t=this;this.cache={},this.cacheClearListener=[],this.lastCacheClear=new Date,this.addEntry=function(e,r){t.cache[e]=r},this.hasEntry=function(e){return Object.keys(t.cache).some((function(t){return t===e}))},this.getEntry=function(e){return t.cache[e]},this.clearCache=function(){t.cache={},t.lastCacheClear=new Date,setTimeout((function(){t.cacheClearListener.forEach((function(e){return e(t.lastCacheClear)}))}))},this.subscribeToCacheClear=function(e){t.cacheClearListener.push(e)},this.unsubscribeFromCacheClear=function(e){var r=t.cacheClearListener.indexOf(e);r>-1&&t.cacheClearListener.splice(r,1)}},l=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).supportedStatusCodes=[401],e.supportedErrorIds=["account.error.unauthorized.user"],e.getApiErrorResponse=function(t){try{return JSON.parse(t.responseText)}catch(e){console.warn(new Error("Could not parse authentication error: "+t.status+" "+JSON.stringify(t.responseText)))}},e}h(e,t);var r=e.prototype;return r.supports=function(t){return this.supportedStatusCodes.some((function(e){return t.status===e}))},r.handleRequestInternal=function(t){var e=this.getApiErrorResponse(t);if(e&&(e&&this.supportedErrorIds.some((function(t){return t===e.errorId}))))return void window.location.reload();return Promise.reject(t)},e}(function(){function t(t){var e=(void 0===t?{overlayClosable:!1}:t).overlayClosable;this.overlayClosable=void 0,this.getApiErrorResponse=function(t){try{var e=JSON.parse(t.responseText);return!e&&!e.errors&&e.errors.length<=0&&console.warn(new Error("Could not parse authentication error: "+t.status+" "+JSON.stringify(t.responseText))),e.errors[0]}catch(e){console.warn(new Error("Could not parse authentication error: "+t.status+" "+JSON.stringify(t.responseText)))}},this.overlayClosable=e}return t.prototype.handleRequest=function(t){return this.supports(t)?this.handleRequestInternal(t,this.overlayClosable):Promise.reject(t)},t}()),d=new l;function p(t){var e=function(t){var e={errors:[{errorId:String(t.status),message:t.responseText||t.statusText,stackTrace:""}]};try{var r=JSON.parse(t.responseText);return r.errors[0].message?r:e}catch(t){return e}}(t);e.errors.forEach((function(t){var e=[t.message,t.technicalMksMessage].filter(Boolean);console.log(t.errorId,e.join("<br>"))}))}var v=function t(e){var r=this,n=e.url,o=e.cacheEnabled,i=void 0!==o&&o,a=e.options;this.cache=void 0,this.url=void 0,this.cacheEnabled=void 0,this.options=void 0,this.ajax=function(t){var e=t.keys,n=t.body,o=t.headerOptions,i=t.errorInterceptors,a=t.omitErrorMessage,u=void 0!==a&&a,s=Object.assign({},r.getOptions(e),{headerOptions:o}),c=r.doRequestInternal(e,n);return c.catch((function(e){return i?i.reduce((function(e,n){return e.catch((function(e){var o,i;return null==n||null==(o=n.handleRequest(e))||null==(i=o.then((function(){return r.ajax(t)})))?void 0:i.catch((function(t){return Promise.reject(t)}))}))}),Promise.reject(e)):c})).catch((function(t){return void 0===d.handleRequest(t)?c:Promise.reject(t)})).catch((function(t){return u||p(t),s.afterError&&s.afterError(t,r),c})).then((function(t){return s.afterSuccess&&t&&s.afterSuccess(t),t}))},this.generateHash=function(t){var e=0;if(0===t.length)return e.toString();for(var r=0;r<t.length;r++){e=(e<<5)-e+t.charCodeAt(r),e&=e}return e.toString()},this.getCacheEntryKey=function(t){return r.generateHash(r.getHeader(t)+" : "+r.getUrl(t))},this.getUrl=function(t){return r.url(t)},this.getOptions=function(t){return r.options(t)},this.getHeader=function(e){var n=t.createHeaders(r.getOptions(e).headerOptions),o=JSON.stringify(n).split(/\{([^\ "}]+)\}/);return n?o.map((function(t,e){return e%2?n[t]:t})).join(""):o.join("")},this.onCacheClear=function(t){r.cache&&r.cache.subscribeToCacheClear(t)},this.offCacheClear=function(t){r.cache&&r.cache.unsubscribeFromCacheClear(t)},this.clearCache=function(){r.cache&&r.cache.clearCache()},this.doRequestInternal=function(t,e){var n,o=r.getCacheEntryKey(t);if(r.cacheEnabled&&null!=(n=r.cache)&&n.hasEntry(o))return r.cache.getEntry(o);var i=r.request(t,e);return r.cacheEnabled&&i.then((function(){var t;return null==(t=r.cache)?void 0:t.addEntry(o,i)})).catch((function(t){return console.warn("Omit cache entry",t)})),i},this.url=n,this.cacheEnabled=i||!1,this.options=a||function(){return{}},this.cacheEnabled&&(this.cache=new f)};function y(t){return JSON.parse(t,(function(t,e){return"string"==typeof e&&/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(\.\d{1,3})?([+-][0-2]\d:[0-5]\d|Z)$/.test(e)?new Date(e):e}))}v.createHeaders=function(t){var e=t||{};return e={defaultContentTypeJsonUTF8:void 0===e.defaultContentTypeJsonUTF8||e.defaultContentTypeJsonUTF8,customHeaders:e.customHeaders||{},authToken:e.authToken,requestedWith:e.requestedWith||"XMLHttpRequest"},Object.assign({},e.defaultContentTypeJsonUTF8&&{"Content-Type":"application/json; charset=UTF-8"},e.authToken&&{Authorization:"Bearer "+e.authToken},e.requestedWith&&{"X-Requested-With":e.requestedWith},e.customHeaders&&e.customHeaders)};var g=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).request=function(t){return new Promise((function(r,n){var o=new XMLHttpRequest;o.open("GET",e.getUrl(t),!0),o.timeout=e.getOptions(t).timeout||18e4;var i=JSON.parse(e.getHeader(t));Object.keys(i).forEach((function(t){o.setRequestHeader(t,i[t])})),o.onload=function(){var t,e=-1!==(o.getResponseHeader("Content-Type")||"").indexOf("html");if(o.status<200||o.status>=400)return n(o);if(e)return r(o.responseText);try{t=o.responseText?y(o.responseText):void 0}catch(t){return n(o)}r(t)},o.onerror=function(){n(o)},o.send();var a=e.getAjaxSignal(t);a&&(a.onabort=function(){console.log("GetEndpoint: request aborted by user "+e.getUrl(t)),o.abort(),r(void 0)})}))},e.getAjaxSignal=function(t){return t.signal},e}return h(e,t),e}(v);g.create=function(t){var e=t.url,r=t.cacheEnabled,n=t.options;return new g({url:e,cacheEnabled:r,options:n})},g.create({url:function(t){return t.encodedContextPath+"/login/token"},cacheEnabled:!1});o.default.createContext(null);!function(t,e){t.exports=function(){var t=1e3,e=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",u="day",s="week",c="month",h="quarter",f="year",l="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},m={s:g,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),o=r%60;return(e<=0?"+":"-")+g(n,2,"0")+":"+g(o,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),o=e.clone().add(n,c),i=r-o<0,a=e.clone().add(n+(i?-1:1),c);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:s,d:u,D:l,h:a,m:i,s:o,ms:n,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",b={};b[w]=y;var $=function(t){return t instanceof x},E=function(t,e,r){var n;if(!t)return w;if("string"==typeof t)b[t]&&(n=t),e&&(b[t]=e,n=t);else{var o=t.name;b[o]=t,n=o}return!r&&n&&(w=n),n||!r&&w},S=function(t,e){if($(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new x(r)},O=m;O.l=E,O.i=$,O.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function y(t){this.$L=E(t.locale,null,!0),this.parse(t)}var g=y.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(p);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return O},g.isValid=function(){return!(this.$d.toString()===d)},g.isSame=function(t,e){var r=S(t);return this.startOf(e)<=r&&r<=this.endOf(e)},g.isAfter=function(t,e){return S(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<S(t)},g.$g=function(t,e,r){return O.u(t)?this[e]:this.set(r,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var r=this,n=!!O.u(e)||e,h=O.p(t),d=function(t,e){var o=O.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?o:o.endOf(u)},p=function(t,e){return O.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},v=this.$W,y=this.$M,g=this.$D,m="set"+(this.$u?"UTC":"");switch(h){case f:return n?d(1,0):d(31,11);case c:return n?d(1,y):d(0,y+1);case s:var w=this.$locale().weekStart||0,b=(v<w?v+7:v)-w;return d(n?g-b:g+(6-b),y);case u:case l:return p(m+"Hours",0);case a:return p(m+"Minutes",1);case i:return p(m+"Seconds",2);case o:return p(m+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var r,s=O.p(t),h="set"+(this.$u?"UTC":""),d=(r={},r[u]=h+"Date",r[l]=h+"Date",r[c]=h+"Month",r[f]=h+"FullYear",r[a]=h+"Hours",r[i]=h+"Minutes",r[o]=h+"Seconds",r[n]=h+"Milliseconds",r)[s],p=s===u?this.$D+(e-this.$W):e;if(s===c||s===f){var v=this.clone().set(l,1);v.$d[d](p),v.init(),this.$d=v.set(l,Math.min(this.$D,v.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[O.p(t)]()},g.add=function(n,h){var l,d=this;n=Number(n);var p=O.p(h),v=function(t){var e=S(d);return O.w(e.date(e.date()+Math.round(t*n)),d)};if(p===c)return this.set(c,this.$M+n);if(p===f)return this.set(f,this.$y+n);if(p===u)return v(1);if(p===s)return v(7);var y=(l={},l[i]=e,l[a]=r,l[o]=t,l)[p]||1,g=this.$d.getTime()+n*y;return O.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var n=t||"YYYY-MM-DDTHH:mm:ssZ",o=O.z(this),i=this.$H,a=this.$m,u=this.$M,s=r.weekdays,c=r.months,h=function(t,r,o,i){return t&&(t[r]||t(e,n))||o[r].substr(0,i)},f=function(t){return O.s(i%12||12,t,"0")},l=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:O.s(u+1,2,"0"),MMM:h(r.monthsShort,u,c,3),MMMM:h(c,u),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(r.weekdaysMin,this.$W,s,2),ddd:h(r.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(i),HH:O.s(i,2,"0"),h:f(1),hh:f(2),a:l(i,a,!0),A:l(i,a,!1),m:String(a),mm:O.s(a,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:o};return n.replace(v,(function(t,e){return e||p[t]||o.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,l,d){var p,v=O.p(l),y=S(n),g=(y.utcOffset()-this.utcOffset())*e,m=this-y,w=O.m(this,y);return w=(p={},p[f]=w/12,p[c]=w,p[h]=w/3,p[s]=(m-g)/6048e5,p[u]=(m-g)/864e5,p[a]=m/r,p[i]=m/e,p[o]=m/t,p)[v]||m,d?w:O.a(w)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return b[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=E(t,e,!0);return n&&(r.$L=n),r},g.clone=function(){return O.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},y}(),C=x.prototype;return S.prototype=C,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",u],["$M",c],["$y",f],["$D",l]].forEach((function(t){C[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,x,S),t.$i=!0),S},S.locale=E,S.isDayjs=$,S.unix=function(t){return S(1e3*t)},S.en=b[w],S.Ls=b,S.p={},S}()}({exports:{}});var m=function(){return o.default.createElement("div",null,"Main component")};!function(t,n){var i='[data-react-app="'+n+'"]',u=document.querySelector(i);if(!u)throw new Error(i+" is missing");var c=document.createElement("div");u.appendChild(c),r.render(function(t,r){return o.default.createElement(e.StoreProvider,null,o.default.createElement(s,{appId:r},o.default.createElement(a,{appId:r},o.default.createElement(t,null))))}(t,n),c)}((function(){return o.default.createElement(m,null)}),"wishlist")}));

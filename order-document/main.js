!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@Apps/backbone"),require("react"),require("react-dom"),require("@dormakaba/vanguard"),require("classnames")):"function"==typeof define&&define.amd?define(["@Apps/backbone","react","react-dom","@dormakaba/vanguard","classnames"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).backbone,e.dormakaba.vendorReact["vendor/react"],e.dormakaba.vendorReact["vendor/react-dom"],e.DormakabaVanguard,e.dormakaba.vendorReact["vendor/classnames"])}(this,(function(e,t,r,n,o){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=i(t),s=i(o),c=function(e,t){return void 0===t&&(t=[]),e.replaceAll("{}",function(e){var t=0;return function(r){return""+e[t++]||r}}(t))},u=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self,{exports:{}}),l={},d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;function p(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var v=a.default,m=60103;if(l.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var y=Symbol.for;m=y("react.element"),l.Fragment=y("react.fragment")}var x=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b=Object.prototype.hasOwnProperty,g={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,o={},i=null,a=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(a=t.ref),t)b.call(t,n)&&!g.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:m,type:e,key:i,ref:a,props:o,_owner:x.current}}l.jsx=w,l.jsxs=w;u.exports=l;var j=t.createContext(null),O=function(e){var r=e.appId,n=e.children,o=e.defaultValue,i=void 0===o?{}:o,a=t.useMemo((function(){if(!r)return i;var e='[data-react-app="'+r+'"]',t=document.querySelector(e);if(!t)throw new Error(e+" is missing");var n=t.querySelector("script");return null!=n&&n.innerHTML?JSON.parse(n.innerHTML):i}),[r,i]);return u.exports.jsx(j.Provider,{value:a,children:n})},$=t.createContext(null),S=function(e){var r=e.children,n=t.useState(new URL(location.href));return u.exports.jsx($.Provider,{value:n,children:r})};var D=function(e){return"/"+(null==(t=window.location.pathname.split("/").filter((function(e){return e})))?void 0:t[0])+"/"+(null==t?void 0:t[1])+e;var t},T=function(e,t){void 0===e&&(e=""),void 0===t&&(t="occ");var r="";switch(t){case"occ":r=function(e){var t="rootB2BUnit",r=new URL(e,"http://updateQueryParams");return r.searchParams.has(t)&&r.searchParams.delete(t),r.searchParams.append(t,"{rootB2BUnit}"),decodeURI(""+r.pathname+r.search)}(function(e){return"/dormakabacommercewebservices/v2"+e}(e));break;case"redirect":r=D(e)}return r};function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=function(){var e=t.useContext(j),r=t.useCallback((function(t){var r,n=null==(r=e.translations)?void 0:r[t];if(n){for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];return i.length?c(n,i):n}return t}),[e]);return M(M({},e),{},{t:r})};function C(e,t,r,n,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}var P={exports:{}},E={exports:{}};!function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(E),function(e){var t=E.exports.default;function r(){e.exports=r=function(){return n},e.exports.__esModule=!0,e.exports.default=e.exports;var n={},o=Object.prototype,i=o.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function d(e,t,r,n){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),a=new D(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=O(a,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=d;var h={};function p(){}function v(){}function m(){}var y={};l(y,s,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(T([])));b&&b!==o&&i.call(b,s)&&(y=b);var g=m.prototype=p.prototype=Object.create(y);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,r){function n(o,a,s,c){var u=f(e[o],e,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==t(d)&&i.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,s,c)}),(function(e){n("throw",e,s,c)})):r.resolve(d).then((function(e){l.value=e,s(l)}),(function(e){return n("throw",e,s,c)}))}c(u.arg)}var o;this._invoke=function(e,t){function i(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(i,i):i()}}function O(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function T(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:_}}function _(){return{value:void 0,done:!0}}return v.prototype=m,l(g,"constructor",m),l(m,"constructor",v),v.displayName=l(m,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,u,"GeneratorFunction")),e.prototype=Object.create(g),e},n.awrap=function(e){return{__await:e}},w(j.prototype),l(j.prototype,c,(function(){return this})),n.AsyncIterator=j,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new j(d(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(g),l(g,u,"Generator"),l(g,s,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},n.values=T,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:T(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},n}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports}(P);var I=P.exports(),N=I;try{regeneratorRuntime=I}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=I:Function("r","regeneratorRuntime = r")(I)}function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var R,U,A=function(e,t,r){return("/dormakabacommercewebservices/v2"+e).replace("{baseSiteId}",t.hybrisStoreName).replace("{userId}",t.currentUserId)+"?"+new URLSearchParams(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({rootB2BUnit:t.rootB2BUnit},r))},F=function(r,n){var o=e.store.hooks.useUser(),i=t.useState(!1),a=i[0],s=i[1],c=function(){var e,t=(e=N.mark((function e(t){var i,a,c,u;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,fetch(A(r,o.service,n),{headers:{Authorization:"Bearer "+o.token,"X-Requested-With":"XMLHttpRequest"}});case 4:if(null!=(i=e.sent)&&i.blob){e.next=7;break}throw new Error("No file was generated");case 7:return e.next=9,i.blob();case 9:a=e.sent,c=URL.createObjectURL(a),(u=document.createElement("a")).href=c,u.download=t,u.click(),URL.revokeObjectURL(c),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.error(e.t0);case 21:return e.prev=21,s(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){C(i,n,o,a,s,"next",e)}function s(e){C(i,n,o,a,s,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return{isLoading:a,download:c}};!function(e,t){e.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",c="week",u="month",l="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},x={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,u),i=r-o<0,a=t.clone().add(n+(i?-1:1),u);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:c,d:s,D:f,h:a,m:i,s:o,ms:n,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",g={};g[b]=m;var w=function(e){return e instanceof S},j=function e(t,r,n){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();g[i]&&(o=i),r&&(g[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;g[s]=t,o=s}return!n&&o&&(b=o),o||!n&&b},O=function(e,t){if(w(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new S(r)},$=x;$.l=j,$.i=w,$.w=function(e,t){return O(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function m(e){this.$L=j(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return $},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var r=O(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return O(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<O(e)},y.$g=function(e,t,r){return $.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!$.u(t)||t,l=$.p(e),h=function(e,t){var o=$.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(s)},p=function(e,t){return $.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},v=this.$W,m=this.$M,y=this.$D,x="set"+(this.$u?"UTC":"");switch(l){case d:return n?h(1,0):h(31,11);case u:return n?h(1,m):h(0,m+1);case c:var b=this.$locale().weekStart||0,g=(v<b?v+7:v)-b;return h(n?y-g:y+(6-g),m);case s:case f:return p(x+"Hours",0);case a:return p(x+"Minutes",1);case i:return p(x+"Seconds",2);case o:return p(x+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,c=$.p(e),l="set"+(this.$u?"UTC":""),h=(r={},r[s]=l+"Date",r[f]=l+"Date",r[u]=l+"Month",r[d]=l+"FullYear",r[a]=l+"Hours",r[i]=l+"Minutes",r[o]=l+"Seconds",r[n]=l+"Milliseconds",r)[c],p=c===s?this.$D+(t-this.$W):t;if(c===u||c===d){var v=this.clone().set(f,1);v.$d[h](p),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[$.p(e)]()},y.add=function(n,l){var f,h=this;n=Number(n);var p=$.p(l),v=function(e){var t=O(h);return $.w(t.date(t.date()+Math.round(e*n)),h)};if(p===u)return this.set(u,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return v(1);if(p===c)return v(7);var m=(f={},f[i]=t,f[a]=r,f[o]=e,f)[p]||1,y=this.$d.getTime()+n*m;return $.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=$.z(this),i=this.$H,a=this.$m,s=this.$M,c=r.weekdays,u=r.months,l=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},d=function(e){return $.s(i%12||12,e,"0")},f=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:$.s(s+1,2,"0"),MMM:l(r.monthsShort,s,u,3),MMMM:l(u,s),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,c,2),ddd:l(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:$.s(i,2,"0"),h:d(1),hh:d(2),a:f(i,a,!0),A:f(i,a,!1),m:String(a),mm:$.s(a,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:o};return n.replace(v,(function(e,t){return t||p[e]||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,f,h){var p,v=$.p(f),m=O(n),y=(m.utcOffset()-this.utcOffset())*t,x=this-m,b=$.m(this,m);return b=(p={},p[d]=b/12,p[u]=b,p[l]=b/3,p[c]=(x-y)/6048e5,p[s]=(x-y)/864e5,p[a]=x/r,p[i]=x/t,p[o]=x/e,p)[v]||x,h?b:$.a(b)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return g[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=j(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return $.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),D=S.prototype;return O.prototype=D,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",u],["$y",d],["$D",f]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),O.extend=function(e,t){return e.$i||(e(t,S,O),e.$i=!0),O},O.locale=j,O.isDayjs=w,O.unix=function(e){return O(1e3*e)},O.en=g[b],O.Ls=g,O.p={},O}()}({exports:{}}),function(e){e.Copy="copy",e.Move="move"}(R||(R={})),function(e){e.private="private",e.public="public"}(U||(U={}));var B=navigator.userAgent.includes("Firefox"),Y=function(t){var r=t.fixed,o=void 0===r||r;return e.store.hooks.useIsFetching()&&u.exports.jsx("div",{className:s.default("w-full h-full flex items-center justify-center top-0 left-0 z-10 backdrop-filter backdrop-blur",{"bg-gray-200 opacity-60":B},o?"fixed":"absolute"),"data-testid":"overlayLoader",children:u.exports.jsx(n.Icon,{size:"xl",type:"loader"})})},q=function(e){var t=e.url,r=e.text,o=e.testid,i=void 0===o?"backButton":o;return u.exports.jsx("div",{className:"mb-6 flex justify-between",children:u.exports.jsxs(n.Link,{href:T(t,"redirect"),className:"flex justify-left","data-testid":i,children:[u.exports.jsx(n.Icon,{type:"arrowl",className:"mr-2"}),r]})})},W="vanguard.order-document.title",G="vanguard.order-document.additionalDocuments",z="vanguard.order-document.description",J="vanguard.order-document.column.documentName",V="vanguard.order-document.column.documentCreationDate",Q="vanguard.order-document.column.attachment",Z="vanguard.order-document.column.documentType",X="vanguard.order-document.column.fileName",K="vanguard.order-document.column.extension",ee="vanguard.order-document.back",te="vanguard.order-document.noFiles",re=function(e){var t=e.url,r=e.queryParams,o=e.name,i=F(t,r),a=i.isLoading,s=i.download;return a?u.exports.jsx(n.Icon,{size:"xs",type:"loader",testid:"loadingIcon"}):u.exports.jsx(n.Button,{variant:"text",iconType:"download",onClick:function(){return s(o)},testid:"downloadButton"})},ne=function(){var t=k(),r=t.t,o=t.orderCode,i=e.store.api.order.useGetAdditionalDocumentsQuery({orderCode:o}).data;return u.exports.jsxs("section",{className:"mb-12 space-y-4","data-testid":"additionalDocuments",children:[u.exports.jsx(n.Text,{type:"h4",bold:!0,color:"primary",size:"lg",testid:"header",children:r(G)}),u.exports.jsxs(n.Table,{children:[u.exports.jsx(n.Table.Header,{children:u.exports.jsxs(n.Table.Row,{children:[u.exports.jsx(n.Table.HeaderCell,{children:"ID"}),u.exports.jsx(n.Table.HeaderCell,{children:r(Z)}),u.exports.jsx(n.Table.HeaderCell,{children:r(X)}),u.exports.jsx(n.Table.HeaderCell,{children:r(K)}),u.exports.jsx(n.Table.HeaderCell,{children:r(V)}),u.exports.jsx(n.Table.HeaderCell,{align:"right",children:r(Q)})]})}),u.exports.jsx(n.Table.Body,{children:null==i?void 0:i.map((function(e,t){return u.exports.jsxs(n.Table.Row,{children:[u.exports.jsx(n.Table.Cell,{children:t+1}),u.exports.jsx(n.Table.Cell,{children:e.typeCode}),u.exports.jsx(n.Table.Cell,{children:e.content.fileName}),u.exports.jsx(n.Table.Cell,{children:e.content.mimeCode}),u.exports.jsx(n.Table.Cell,{children:new Date(e.creationDate).toLocaleDateString("de-DE")}),u.exports.jsx(n.Table.Cell,{align:"right",children:u.exports.jsx(re,{url:"-stateful/{baseSiteId}/users/{userId}/order/downloadAdditional",queryParams:{attachmentId:e.attachmentID},name:e.content.fileName})})]},e.attachmentID)}))})]}),0===(null==i?void 0:i.length)&&u.exports.jsx(n.Text,{children:r(te)})]})},oe=function(){var t,r=k(),o=r.t,i=r.orderCode,a=e.store.api.order.useGetOrderDocumentsQuery({orderCode:i}).data,s=function(e){return new Date(e).toLocaleDateString("de-DE")};return u.exports.jsxs("section",{"data-testid":"documents",className:"mb-12 space-y-4",children:[u.exports.jsxs(n.Table,{children:[u.exports.jsx(n.Table.Header,{children:u.exports.jsxs(n.Table.Row,{children:[u.exports.jsx(n.Table.HeaderCell,{children:"ID"}),u.exports.jsx(n.Table.HeaderCell,{children:o(J)}),u.exports.jsx(n.Table.HeaderCell,{children:o(V)}),u.exports.jsx(n.Table.HeaderCell,{align:"right",children:o(Q)})]})}),u.exports.jsx(n.Table.Body,{children:null==a||null==(t=a.data)?void 0:t.map((function(e,t){return u.exports.jsxs(n.Table.Row,{children:[u.exports.jsx(n.Table.Cell,{children:t+1}),u.exports.jsx(n.Table.Cell,{children:e.document}),u.exports.jsx(n.Table.Cell,{children:s(e.creationDate)}),u.exports.jsx(n.Table.Cell,{align:"right",children:u.exports.jsx(re,{url:"-stateful/{baseSiteId}/users/{userId}/order/"+i+"/"+e.typeCode+"/download",name:e.document+"_"+i+"_"+e.id+"_"+s(e.creationDate)+".pdf"})})]},e.id)}))})]}),(!(null!=a&&a.data)||0===a.data.length)&&u.exports.jsx("div",{className:"mt-4",children:u.exports.jsx(n.Text,{children:o(te)})})]})},ie=function(){var e=k().t;return u.exports.jsxs("div",{"data-testid":"header",children:[u.exports.jsx(q,{url:"/my-account/orders",text:e(ee)}),u.exports.jsxs("section",{className:"text-left mb-12 space-y-6",children:[u.exports.jsx(n.Text,{type:"h3",size:"xl",color:"primary",testid:"title",children:e(W)}),u.exports.jsx(n.Text,{testid:"description",children:e(z)})]})]})},ae=function(){var e=k(),t=e.showSAPDocuments,r=e.showAdditionalDocuments;return u.exports.jsxs("div",{"data-testid":"orderDocument",children:[t&&u.exports.jsxs(u.exports.Fragment,{children:[u.exports.jsx(ie,{}),u.exports.jsx(oe,{})]}),r&&u.exports.jsx(ne,{}),u.exports.jsx(Y,{})]})};!function(t,n){var o='[data-react-app="'+n+'"]',i=document.querySelector(o);if(!i)throw new Error(o+" is missing");var a=document.createElement("div");i.appendChild(a),r.render(function(t,r){return u.exports.jsx(e.StoreProvider,{children:u.exports.jsx(O,{appId:r,children:u.exports.jsx(S,{children:u.exports.jsx(t,{})})})})}(t,n),a)}((function(){return u.exports.jsx(ae,{})}),"order-document")}));

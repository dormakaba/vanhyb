!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@Apps/backbone"),require("react"),require("react-dom"),require("@dormakaba/vanguard"),require("classnames")):"function"==typeof define&&define.amd?define(["@Apps/backbone","react","react-dom","@dormakaba/vanguard","classnames"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).backbone,e.dormakaba.vendorReact["vendor/react"],e.dormakaba.vendorReact["vendor/react-dom"],e.DormakabaVanguard)}(this,(function(e,t,r,n){"use strict";var o,i,a,u=function(e,t){return void 0===t&&(t=[]),e.replaceAll("{}",function(e){var t=0;return function(r){return""+e[t++]||r}}(t))},s=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self,{}),c={};function l(){if(i)return o;i=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}return o=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(o,i){for(var a,u,s=n(o),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))t.call(a,l)&&(s[l]=a[l]);if(e){u=e(a);for(var d=0;d<u.length;d++)r.call(a,u[d])&&(s[u[d]]=a[u[d]])}}return s},o}!function(e){e.exports=function(){if(a)return c;a=1,l();var e=t,r=60103;if(c.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var n=Symbol.for;r=n("react.element"),c.Fragment=n("react.fragment")}var o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var a,s={},c=null,l=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,a)&&!u.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:l,props:s,_owner:o.current}}return c.jsx=s,c.jsxs=s,c}()}({get exports(){return s},set exports(e){s=e}});var d=t.createContext(null),f=function(e){var r=e.appId,n=e.children,o=t.useMemo((function(){var e='[data-react-app="'+r+'"]',t=document.querySelector(e);if(!t)throw new Error(e+" is missing");var n=t.querySelector("script");try{return JSON.parse(n.innerHTML)}catch(e){throw Error("Couldn't load config of #"+r)}}),[r]);return s.jsx(d.Provider,{value:o,children:n})},h=t.createContext(null),p=function(e){var r=e.children,n=t.useState(new URL(location.href));return s.jsx(h.Provider,{value:n,children:r})};var v=function(e){return"/"+(null==(t=window.location.pathname.split("/").filter((function(e){return e})))?void 0:t[0])+"/"+(null==t?void 0:t[1])+e;var t},m=function(e,t){void 0===e&&(e=""),void 0===t&&(t="occ");var r="";switch(t){case"occ":r=function(e){var t="rootB2BUnit",r=new URL(e,"http://updateQueryParams");return r.searchParams.has(t)&&r.searchParams.delete(t),r.searchParams.append(t,"{rootB2BUnit}"),decodeURI(""+r.pathname+r.search)}(function(e){return"/dormakabacommercewebservices/v2"+e}(e));break;case"redirect":r=v(e)}return r},y={};!function(e,t){e.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",u="day",s="week",c="month",l="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},g={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,c),i=r-o<0,a=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:u,D:f,h:a,m:i,s:o,ms:n,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",x={};x[b]=m;var w=function(e){return e instanceof $},j=function e(t,r,n){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var u=t.name;x[u]=t,o=u}return!n&&o&&(b=o),o||!n&&b},O=function(e,t){if(w(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new $(r)},S=g;S.l=j,S.i=w,S.w=function(e,t){return O(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var $=function(){function m(e){this.$L=j(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return S},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var r=O(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return O(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<O(e)},y.$g=function(e,t,r){return S.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!S.u(t)||t,l=S.p(e),h=function(e,t){var o=S.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(u)},p=function(e,t){return S.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},v=this.$W,m=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case d:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case s:var b=this.$locale().weekStart||0,x=(v<b?v+7:v)-b;return h(n?y-x:y+(6-x),m);case u:case f:return p(g+"Hours",0);case a:return p(g+"Minutes",1);case i:return p(g+"Seconds",2);case o:return p(g+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,s=S.p(e),l="set"+(this.$u?"UTC":""),h=(r={},r[u]=l+"Date",r[f]=l+"Date",r[c]=l+"Month",r[d]=l+"FullYear",r[a]=l+"Hours",r[i]=l+"Minutes",r[o]=l+"Seconds",r[n]=l+"Milliseconds",r)[s],p=s===u?this.$D+(t-this.$W):t;if(s===c||s===d){var v=this.clone().set(f,1);v.$d[h](p),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[S.p(e)]()},y.add=function(n,l){var f,h=this;n=Number(n);var p=S.p(l),v=function(e){var t=O(h);return S.w(t.date(t.date()+Math.round(e*n)),h)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===u)return v(1);if(p===s)return v(7);var m=(f={},f[i]=t,f[a]=r,f[o]=e,f)[p]||1,y=this.$d.getTime()+n*m;return S.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=S.z(this),i=this.$H,a=this.$m,u=this.$M,s=r.weekdays,c=r.months,l=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},d=function(e){return S.s(i%12||12,e,"0")},f=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:S.s(u+1,2,"0"),MMM:l(r.monthsShort,u,c,3),MMMM:l(c,u),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,s,2),ddd:l(r.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(i),HH:S.s(i,2,"0"),h:d(1),hh:d(2),a:f(i,a,!0),A:f(i,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:o};return n.replace(v,(function(e,t){return t||p[e]||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,f,h){var p,v=S.p(f),m=O(n),y=(m.utcOffset()-this.utcOffset())*t,g=this-m,b=S.m(this,m);return b=(p={},p[d]=b/12,p[c]=b,p[l]=b/3,p[s]=(g-y)/6048e5,p[u]=(g-y)/864e5,p[a]=g/r,p[i]=g/t,p[o]=g/e,p)[v]||g,h?b:S.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=j(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return S.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),D=$.prototype;return O.prototype=D,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",u],["$M",c],["$y",d],["$D",f]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),O.extend=function(e,t){return e.$i||(e(t,$,O),e.$i=!0),O},O.locale=j,O.isDayjs=w,O.unix=function(e){return O(1e3*e)},O.en=x[b],O.Ls=x,O.p={},O}()}({get exports(){return y},set exports(e){y=e}});var g=y,b={};!function(e,t){e.exports=function(e,t,r){var n=function(e,t){if(!t||!t.length||!t[0]||1===t.length&&!t[0].length)return null;var r;1===t.length&&t[0].length>0&&(t=t[0]),r=t[0];for(var n=1;n<t.length;n+=1)t[n].isValid()&&!t[n][e](r)||(r=t[n]);return r};r.max=function(){var e=[].slice.call(arguments,0);return n("isAfter",e)},r.min=function(){var e=[].slice.call(arguments,0);return n("isBefore",e)}}}({get exports(){return b},set exports(e){b=e}});var x=b;function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function j(e){var t=function(e,t){if("object"!==w(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===w(t)?t:String(t)}function O(e,t,r){return(t=j(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}g.extend(x);var D=function(){var e=t.useContext(d),r=t.useCallback((function(t){var r,n=null==(r=e.translations)?void 0:r[t];if(n){for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];return i.length?u(n,i):n}return t}),[e]);return $($({},e),{},{t:r})};function T(e,t,r,n,o,i,a){try{var u=e[i](a),s=u.value}catch(e){return void r(e)}u.done?t(s):Promise.resolve(s).then(n,o)}var _={},L={get exports(){return _},set exports(e){_=e}},M={};!function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}({get exports(){return M},set exports(e){M=e}}),function(e){var t=M.default;function r(){e.exports=r=function(){return n},e.exports.__esModule=!0,e.exports.default=e.exports;var n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},u="function"==typeof Symbol?Symbol:{},s=u.iterator||"@@iterator",c=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),u=new _(n||[]);return a(i,"_invoke",{value:S(e,r,u)}),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var p={};function v(){}function m(){}function y(){}var g={};d(g,s,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(L([])));x&&x!==o&&i.call(x,s)&&(g=x);var w=y.prototype=v.prototype=Object.create(g);function j(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,r){function n(o,a,u,s){var c=h(e[o],e,a);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==t(d)&&i.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,u,s)}),(function(e){n("throw",e,u,s)})):r.resolve(d).then((function(e){l.value=e,u(l)}),(function(e){return n("throw",e,u,s)}))}s(c.arg)}var o;a(this,"_invoke",{value:function(e,t){function i(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(i,i):i()}})}function S(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return M()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=$(a,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function $(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,$(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function D(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D,this),this.reset(!0)}function L(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:M}}function M(){return{value:void 0,done:!0}}return m.prototype=y,a(w,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:m,configurable:!0}),m.displayName=d(y,l,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,d(e,l,"GeneratorFunction")),e.prototype=Object.create(w),e},n.awrap=function(e){return{__await:e}},j(O.prototype),d(O.prototype,c,(function(){return this})),n.AsyncIterator=O,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new O(f(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},j(w),d(w,l,"Generator"),d(w,s,(function(){return this})),d(w,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=L,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),s=i.call(o,"finallyLoc");if(u&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},n}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports}(L);var k=_(),E=k;try{regeneratorRuntime=k}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=k:Function("r","regeneratorRuntime = r")(k)}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var C=function(e,t,r){return("/dormakabacommercewebservices/v2"+e).replace("{baseSiteId}",t.hybrisStoreName).replace("{userId}",t.currentUserId)+"?"+new URLSearchParams(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({rootB2BUnit:t.rootB2BUnit},r))},N=function(r,n){var o=e.store.hooks.useUser(),i=t.useState(!1),a=i[0],u=i[1],s=function(){var e,t=(e=E.mark((function e(t){var i,a,s,c;return E.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,fetch(C(r,o.service,n),{headers:{Authorization:"Bearer "+o.token,"X-Requested-With":"XMLHttpRequest"}});case 4:if(null!=(i=e.sent)&&i.blob){e.next=7;break}throw new Error("No file was generated");case 7:return e.next=9,i.blob();case 9:a=e.sent,s=URL.createObjectURL(a),(c=document.createElement("a")).href=s,c.download=t,c.click(),URL.revokeObjectURL(s),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.error(e.t0);case 21:return e.prev=21,u(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){T(i,n,o,a,u,"next",e)}function u(e){T(i,n,o,a,u,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return{isLoading:a,download:s}},I=function(){var r=e.store.hooks.useApi().isFetching,o=t.useState(!1),i=o[0],a=o[1];return t.useEffect((function(){var e=function(){return a(!0)};return addEventListener("beforeunload",e),function(){return removeEventListener("beforeunload",e)}}),[]),(r||i)&&s.jsx("div",{className:"w-full h-full flex items-center justify-center top-0 left-0 z-9000 backdrop-filter backdrop-blur fixed","data-testid":"overlayLoader",children:s.jsx(n.Icon,{size:"xl",type:"loader"})})},H=function(e){var t=e.url,r=e.text,o=e.testid,i=void 0===o?"backButton":o;return s.jsx("div",{className:"mb-6 flex justify-between",children:s.jsxs(n.Link,{href:m(t,"redirect"),className:"flex justify-left","data-testid":i,children:[s.jsx(n.Icon,{type:"arrowl",className:"mr-2"}),r]})})},R="vanguard.order-document.title",A="vanguard.order-document.additionalDocuments",U="vanguard.order-document.description",B="vanguard.order-document.column.documentName",F="vanguard.order-document.column.documentCreationDate",Y="vanguard.order-document.column.attachment",q="vanguard.order-document.column.documentType",W="vanguard.order-document.column.fileName",G="vanguard.order-document.column.extension",z="vanguard.order-document.back",J="vanguard.order-document.noFiles",V=function(e){var t=e.url,r=e.queryParams,o=e.name,i=N(t,r),a=i.isLoading,u=i.download;return a?s.jsx(n.Icon,{size:"xs",type:"loader",testid:"loadingIcon"}):s.jsx(n.Button,{variant:"text",iconType:"download",onClick:function(){return u(o)},testid:"downloadButton"})},Q=function(){var t=D(),r=t.t,o=t.orderCode,i=e.store.api.order.useGetAdditionalDocumentsQuery({orderCode:o}).data;return s.jsxs("section",{className:"mb-12 space-y-4","data-testid":"additionalDocuments",children:[s.jsx(n.Text,{type:"h4",bold:!0,size:"lg",testid:"header",children:r(A)}),s.jsxs(n.Table,{children:[s.jsx(n.Table.Header,{children:s.jsxs(n.Table.Row,{children:[s.jsx(n.Table.HeaderCell,{children:"ID"}),s.jsx(n.Table.HeaderCell,{children:r(q)}),s.jsx(n.Table.HeaderCell,{children:r(W)}),s.jsx(n.Table.HeaderCell,{children:r(G)}),s.jsx(n.Table.HeaderCell,{children:r(F)}),s.jsx(n.Table.HeaderCell,{align:"right",children:r(Y)})]})}),s.jsx(n.Table.Body,{children:null==i?void 0:i.map((function(e,t){return s.jsxs(n.Table.Row,{children:[s.jsx(n.Table.Cell,{children:t+1}),s.jsx(n.Table.Cell,{children:e.typeCode}),s.jsx(n.Table.Cell,{children:e.content.fileName}),s.jsx(n.Table.Cell,{children:e.content.mimeCode}),s.jsx(n.Table.Cell,{children:new Date(e.creationDate).toLocaleDateString("de-DE")}),s.jsx(n.Table.Cell,{align:"right",children:s.jsx(V,{url:"-stateful/{baseSiteId}/users/{userId}/order/downloadAdditional",queryParams:{attachmentId:e.attachmentID},name:e.content.fileName})})]},e.attachmentID)}))})]}),0===(null==i?void 0:i.length)&&s.jsx(n.Text,{children:r(J)})]})},Z=function(){var t,r=D(),o=r.t,i=r.orderCode,a=e.store.api.order.useGetOrderDocumentsQuery({orderCode:i}).data,u=function(e){return new Date(e).toLocaleDateString("de-DE")};return s.jsxs("section",{"data-testid":"documents",className:"mb-12 space-y-4",children:[s.jsxs(n.Table,{children:[s.jsx(n.Table.Header,{children:s.jsxs(n.Table.Row,{children:[s.jsx(n.Table.HeaderCell,{children:"ID"}),s.jsx(n.Table.HeaderCell,{children:o(B)}),s.jsx(n.Table.HeaderCell,{children:o(F)}),s.jsx(n.Table.HeaderCell,{align:"right",children:o(Y)})]})}),s.jsx(n.Table.Body,{children:null==a||null==(t=a.data)?void 0:t.map((function(e,t){return s.jsxs(n.Table.Row,{children:[s.jsx(n.Table.Cell,{children:t+1}),s.jsx(n.Table.Cell,{children:e.document}),s.jsx(n.Table.Cell,{children:u(e.creationDate)}),s.jsx(n.Table.Cell,{align:"right",children:s.jsx(V,{url:"-stateful/{baseSiteId}/users/{userId}/order/"+i+"/"+e.typeCode+"/download",name:e.document+"_"+i+"_"+e.id+"_"+u(e.creationDate)+".pdf"})})]},e.id)}))})]}),(!(null!=a&&a.data)||0===a.data.length)&&s.jsx("div",{className:"mt-4",children:s.jsx(n.Text,{children:o(J)})})]})},X=function(){var e=D().t;return s.jsxs("div",{"data-testid":"header",children:[s.jsx(H,{url:"/my-account/orders",text:e(z)}),s.jsxs("section",{className:"text-left space-y-2 mb-4",children:[s.jsx(n.Text,{type:"h3",bold:!0,size:"lg",testid:"title",children:e(R)}),s.jsx(n.Text,{testid:"description",children:e(U)})]})]})},K=function(){var e=D(),t=e.showSAPDocuments,r=e.showAdditionalDocuments;return s.jsxs("div",{"data-testid":"orderDocument",children:[t&&s.jsxs(s.Fragment,{children:[s.jsx(X,{}),s.jsx(Z,{})]}),r&&s.jsx(Q,{}),s.jsx(I,{})]})};!function(t,n){var o='[data-react-app="'+n+'"]:not([data-rendered])',i=document.querySelector(o);if(!i)throw new Error(o+" is missing");var a=document.createElement("div");i.appendChild(a),i.setAttribute("data-rendered","true"),r.render(function(t,r){return s.jsx(e.StoreProvider,{children:s.jsx(f,{appId:r,children:s.jsx(p,{children:s.jsx(t,{})})})})}(t,n),a)}((function(){return s.jsx(K,{})}),"order-document")}));

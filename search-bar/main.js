!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@Apps/backbone"),require("react"),require("react-dom"),require("@dormakaba/vanguard")):"function"==typeof define&&define.amd?define(["@Apps/backbone","react","react-dom","@dormakaba/vanguard"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).backbone,t.dormakaba.vendorReact["vendor/react"],t.dormakaba.vendorReact["vendor/react-dom"],t.DormakabaVanguard)}(this,(function(t,e,r,n){"use strict";var o,i,a,u=function(t,e){return void 0===e&&(e=[]),t.replaceAll("{}",function(t){var e=0;return function(r){return""+t[e++]||r}}(e))},s=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self,{}),c={};function l(){if(i)return o;i=1;var t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function n(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}return o=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(o,i){for(var a,u,s=n(o),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))e.call(a,l)&&(s[l]=a[l]);if(t){u=t(a);for(var f=0;f<u.length;f++)r.call(a,u[f])&&(s[u[f]]=a[u[f]])}}return s},o}!function(t){t.exports=function(){if(a)return c;a=1,l();var t=e,r=60103;if(c.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var n=Symbol.for;r=n("react.element"),c.Fragment=n("react.fragment")}var o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(t,e,n){var a,s={},c=null,l=null;for(a in void 0!==n&&(c=""+n),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(l=e.ref),e)i.call(e,a)&&!u.hasOwnProperty(a)&&(s[a]=e[a]);if(t&&t.defaultProps)for(a in e=t.defaultProps)void 0===s[a]&&(s[a]=e[a]);return{$$typeof:r,type:t,key:c,ref:l,props:s,_owner:o.current}}return c.jsx=s,c.jsxs=s,c}()}({get exports(){return s},set exports(t){s=t}});var f=e.createContext(null),h=function(t){var r=t.appId,n=t.children,o=e.useMemo((function(){var t='[data-react-app="'+r+'"]',e=document.querySelector(t);if(!e)throw new Error(t+" is missing");var n=e.querySelector("script");try{return JSON.parse(n.innerHTML)}catch(t){throw Error("Couldn't load config of #"+r)}}),[r]);return s.jsx(f.Provider,{value:o,children:n})},d=e.createContext(null),p=function(t){var r=t.children,n=e.useState(new URL(location.href));return s.jsx(d.Provider,{value:n,children:r})};var v=function(t){return"/"+(null==(e=window.location.pathname.split("/").filter((function(t){return t})))?void 0:e[0])+"/"+(null==e?void 0:e[1])+t;var e},y=function(t,e){void 0===t&&(t=""),void 0===e&&(e="occ");var r="";switch(e){case"occ":r=function(t){var e="rootB2BUnit",r=new URL(t,"http://updateQueryParams");return r.searchParams.has(e)&&r.searchParams.delete(e),r.searchParams.append(e,"{rootB2BUnit}"),decodeURI(""+r.pathname+r.search)}(function(t){return"/dormakabacommercewebservices/v2"+t}(t));break;case"redirect":r=v(t)}return r},m=function(t,e,r){return void 0===t&&(t=""),void 0===r&&(r=!0),t.length<=e?t:r?t.substring(0,e)+"…":t.substring(0,t.substring(0,e+1).search(/\s+\S*$/))+"…"},g={};!function(t,e){t.exports=function(){var t=1e3,e=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",u="day",s="week",c="month",l="quarter",f="year",h="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},m=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},g={s:m,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),o=r%60;return(e<=0?"+":"-")+m(n,2,"0")+":"+m(o,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),o=e.clone().add(n,c),i=r-o<0,a=e.clone().add(n+(i?-1:1),c);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:s,d:u,D:h,h:a,m:i,s:o,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},x="en",b={};b[x]=y;var w=function(t){return t instanceof O},j=function t(e,r,n){var o;if(!e)return x;if("string"==typeof e){var i=e.toLowerCase();b[i]&&(o=i),r&&(b[i]=r,o=i);var a=e.split("-");if(!o&&a.length>1)return t(a[0])}else{var u=e.name;b[u]=e,o=u}return!n&&o&&(x=o),o||!n&&x},S=function(t,e){if(w(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new O(r)},$=g;$.l=j,$.i=w,$.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function y(t){this.$L=j(t.locale,null,!0),this.parse(t)}var m=y.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(p);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return $},m.isValid=function(){return!(this.$d.toString()===d)},m.isSame=function(t,e){var r=S(t);return this.startOf(e)<=r&&r<=this.endOf(e)},m.isAfter=function(t,e){return S(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<S(t)},m.$g=function(t,e,r){return $.u(t)?this[e]:this.set(r,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var r=this,n=!!$.u(e)||e,l=$.p(t),d=function(t,e){var o=$.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?o:o.endOf(u)},p=function(t,e){return $.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},v=this.$W,y=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case f:return n?d(1,0):d(31,11);case c:return n?d(1,y):d(0,y+1);case s:var x=this.$locale().weekStart||0,b=(v<x?v+7:v)-x;return d(n?m-b:m+(6-b),y);case u:case h:return p(g+"Hours",0);case a:return p(g+"Minutes",1);case i:return p(g+"Seconds",2);case o:return p(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var r,s=$.p(t),l="set"+(this.$u?"UTC":""),d=(r={},r[u]=l+"Date",r[h]=l+"Date",r[c]=l+"Month",r[f]=l+"FullYear",r[a]=l+"Hours",r[i]=l+"Minutes",r[o]=l+"Seconds",r[n]=l+"Milliseconds",r)[s],p=s===u?this.$D+(e-this.$W):e;if(s===c||s===f){var v=this.clone().set(h,1);v.$d[d](p),v.init(),this.$d=v.set(h,Math.min(this.$D,v.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[$.p(t)]()},m.add=function(n,l){var h,d=this;n=Number(n);var p=$.p(l),v=function(t){var e=S(d);return $.w(e.date(e.date()+Math.round(t*n)),d)};if(p===c)return this.set(c,this.$M+n);if(p===f)return this.set(f,this.$y+n);if(p===u)return v(1);if(p===s)return v(7);var y=(h={},h[i]=e,h[a]=r,h[o]=t,h)[p]||1,m=this.$d.getTime()+n*y;return $.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var n=t||"YYYY-MM-DDTHH:mm:ssZ",o=$.z(this),i=this.$H,a=this.$m,u=this.$M,s=r.weekdays,c=r.months,l=function(t,r,o,i){return t&&(t[r]||t(e,n))||o[r].slice(0,i)},f=function(t){return $.s(i%12||12,t,"0")},h=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:$.s(u+1,2,"0"),MMM:l(r.monthsShort,u,c,3),MMMM:l(c,u),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,s,2),ddd:l(r.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(i),HH:$.s(i,2,"0"),h:f(1),hh:f(2),a:h(i,a,!0),A:h(i,a,!1),m:String(a),mm:$.s(a,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:o};return n.replace(v,(function(t,e){return e||p[t]||o.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,h,d){var p,v=$.p(h),y=S(n),m=(y.utcOffset()-this.utcOffset())*e,g=this-y,x=$.m(this,y);return x=(p={},p[f]=x/12,p[c]=x,p[l]=x/3,p[s]=(g-m)/6048e5,p[u]=(g-m)/864e5,p[a]=g/r,p[i]=g/e,p[o]=g/t,p)[v]||g,d?x:$.a(x)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return b[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=j(t,e,!0);return n&&(r.$L=n),r},m.clone=function(){return $.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},y}(),_=O.prototype;return S.prototype=_,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",u],["$M",c],["$y",f],["$D",h]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,O,S),t.$i=!0),S},S.locale=j,S.isDayjs=w,S.unix=function(t){return S(1e3*t)},S.en=b[x],S.Ls=b,S.p={},S}()}({get exports(){return g},set exports(t){g=t}});var x=g,b={};!function(t,e){t.exports=function(t,e,r){var n=function(t,e){if(!e||!e.length||!e[0]||1===e.length&&!e[0].length)return null;var r;1===e.length&&e[0].length>0&&(e=e[0]),r=e[0];for(var n=1;n<e.length;n+=1)e[n].isValid()&&!e[n][t](r)||(r=e[n]);return r};r.max=function(){var t=[].slice.call(arguments,0);return n("isAfter",t)},r.min=function(){var t=[].slice.call(arguments,0);return n("isBefore",t)}}}({get exports(){return b},set exports(t){b=t}});var w=b;function j(t,e,r,n,o,i,a){try{var u=t[i](a),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,o)}x.extend(w);var S={},$={get exports(){return S},set exports(t){S=t}},O={};!function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}({get exports(){return O},set exports(t){O=t}}),function(t){var e=O.default;function r(){t.exports=r=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},s=u.iterator||"@@iterator",c=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),u=new L(n||[]);return a(i,"_invoke",{value:$(t,r,u)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var p={};function v(){}function y(){}function m(){}var g={};f(g,s,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(E([])));b&&b!==o&&i.call(b,s)&&(g=b);var w=m.prototype=v.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,r){function n(o,a,u,s){var c=d(t[o],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==e(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,u,s)}),(function(t){n("throw",t,u,s)})):r.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,s)}))}s(c.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function $(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=d(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function E(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return y.prototype=m,a(w,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:y,configurable:!0}),y.displayName=f(m,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},n.awrap=function(t){return{__await:t}},j(S.prototype),f(S.prototype,c,(function(){return this})),n.AsyncIterator=S,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new S(h(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(w),f(w,l,"Generator"),f(w,s,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),s=i.call(o,"finallyLoc");if(u&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),M(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;M(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},n}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports}($);var _=S(),M=_;try{regeneratorRuntime=_}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=_:Function("r","regeneratorRuntime = r")(_)}function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function E(t){var e=function(t,e){if("object"!==L(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===L(e)?e:String(e)}function k(t,e,r){return(e=E(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(Object(r),!0).forEach((function(e){k(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var T=function(){var t=e.useContext(f),r=e.useCallback((function(e){var r,n=null==(r=t.translations)?void 0:r[e];if(n){for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];return i.length?u(n,i):n}return e}),[t]);return P(P({},t),{},{t:r})};var N="vanguard.search",C={searchHint:N+".hint",ean:N+".ean",noSuggestions:N+".noSuggestions"},I=function(t){var e,r,o,i,a=t.product,u=t.text,c=T().t;return s.jsxs("a",{className:"grid grid-cols-12 border-b gap-4 w-full rounded bg-lighter relative p-2 hover:bg-primarypalette-200 shadow",href:y(null==a?void 0:a.url,"redirect"),"data-testid":"product",children:[s.jsx("div",{className:"col-span-full xl:col-span-8",children:s.jsxs("div",{className:"flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2",children:[s.jsx(n.Image,{src:null==a||null==(e=a.thumbnails)||null==(r=e[0])?void 0:r.url,alt:null==a||null==(o=a.thumbnails)||null==(i=o[0])?void 0:i.altText,fullWidth:!1,className:"w-20 h-20 overflow-hidden flex-shrink-0"}),s.jsxs("div",{className:"space-y-1 break-all",children:[s.jsx(n.Text,{color:"primary",testid:"name",highlight:u,children:(null==a?void 0:a.name)||""}),s.jsxs("div",{className:"flex space-x-2 items-center",children:[s.jsx(n.Chip,{testid:"materialNumber",background:"error",label:a.code.replace(/^0+/,"")}),a.ean&&s.jsx(n.Text,{size:"sm",testid:"ean",children:c(C.ean)+": "+a.ean})]})]})]})}),s.jsx("div",{className:"col-span-full xl:col-span-4 overflow-hidden hidden 2xl:block",children:s.jsx(n.Text,{size:"sm",testid:"description",highlight:u,children:m(a.description,75,!1)})})]})},R=function(t){var e,r,o=t.results,i=t.term,a=t.handleSearch,u=T().t;return s.jsxs("div",{className:"shadow-3xl bg-white absolute flex flex-col 2xl:flex-row justify-between z-20 2xl:divide-x max-w-3xl w-full max-h-96 sm:max-h-screen overflow-y-auto",children:[s.jsxs("div",{className:"w-full 2xl:w-2/6 p-2",children:[null==o||null==(e=o.suggestions)?void 0:e.map((function(t,e){return s.jsxs("div",{className:"p-2 hover:bg-primarypalette-200 hover:text-primary flex space-x-1 items-top inline-block",onClick:function(){return a(t.term)},children:[s.jsx(n.Icon,{size:"xs",type:"search",color:"tertiary",className:"hover:text-primary"}),s.jsx(n.Text,{highlight:i,children:t.term||""})]},e)})),0===(null==o?void 0:o.suggestions.length)&&s.jsx(n.Text,{color:"gray",children:u(C.noSuggestions)})]}),(null==o||null==(r=o.products)?void 0:r.length)>0&&s.jsx("div",{className:"w-full 2xl:w-4/6 space-y-2 p-2",children:null==o?void 0:o.products.map((function(t){return s.jsx(I,{text:i,product:t},t.code)}))})]})},A=function(){var r,o,i,a,u,c,l,f=T(),h=f.t,p=f.displaySuggestions,v=f.displayProducts,m=f.maxProducts,g=f.maxSuggestions,x=(r=e.useContext(d),o=r[0],i=r[1],a=e.useCallback((function(t,e){void 0===e&&(e=!1);var r=new URL(location.href);Object.entries(t).forEach((function(t){var e=t[0],n=t[1];r.searchParams.set(e,n)})),i(r),e?location.replace(r):history.replaceState(null,null,r)}),[i]),{params:Object.fromEntries(o.searchParams),updateParams:a}).params,b=e.useState(x.searchText||""),w=b[0],S=b[1],$=e.useState(!1),O=$[0],_=$[1],L=e.useRef(null),E=t.store.api.search.useLazyGetSuggestionsQuery(),k=E[0],D=E[1],P=D.data,N=D.isSuccess,I=function(t,r){void 0===r&&(r=500);var n=e.useRef();return e.useEffect((function(){return function(){return clearTimeout(null==n?void 0:n.current)}}),[]),function(){for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];clearTimeout(n.current),n.current=setTimeout((function(){return t.apply(void 0,o)}),r)}}(function(){var t,e=(t=M.mark((function t(e){return M.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k({term:e,displaySuggestions:p,displayProducts:v,maxSuggestions:g,maxProducts:m},!0).unwrap();case 3:_(!0),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),_(!1);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){j(i,n,o,a,u,"next",t)}function u(t){j(i,n,o,a,u,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}()),A=function(t){_(!1),S(t),function(t,e){void 0===e&&(e={});var r=new URL(""+location.origin+y(t,"redirect"));Object.entries(e).forEach((function(t){var e=t[0],n=t[1];r.searchParams.set(e,n)})),location.href=r.href}("/search",{searchText:t})};return u=L,c=function(){return _(!1)},l=e.useRef(c),e.useEffect((function(){l.current=c})),e.useEffect((function(){if(u.current){var t=function(t){var e;null!=u&&null!=(e=u.current)&&e.contains(t.target)||!l.current||null==l||l.current()};return document.addEventListener("click",t),function(){return document.removeEventListener("click",t)}}}),[u,c]),s.jsxs("div",{ref:L,className:"relative my-1.5",children:[s.jsxs("form",{className:"flex border border-gray-400","data-testid":"searchBar",children:[s.jsx(n.TextInput,{placeholder:h(C.searchHint),value:w,name:"productSearchBar",onChange:function(t){var e=t.target.value;S(e),e.length>=3?I(e):_(!1)},autoComplete:"off","aria-autocomplete":"none",background:"transparent",className:"w-full",onFocus:function(){w.length>=3&&_(!0)}}),s.jsx("span",{className:"inline-flex w-16 filter grayscale",children:s.jsx(n.Button,{iconType:"search",onClick:function(t){t.preventDefault(),A(w)},"data-testid":"search",variant:"text",isFullWidth:!0})})]}),O&&N&&s.jsx(R,{results:P,term:w,handleSearch:A})]})};!function(e,n){var o='[data-react-app="'+n+'"]:not([data-rendered])',i=document.querySelector(o);if(!i)throw new Error(o+" is missing");var a=document.createElement("div");i.appendChild(a),i.setAttribute("data-rendered","true"),r.render(function(e,r){return s.jsx(t.StoreProvider,{children:s.jsx(h,{appId:r,children:s.jsx(p,{children:s.jsx(e,{})})})})}(e,n),a)}((function(){return s.jsx(A,{})}),"search-bar")}));

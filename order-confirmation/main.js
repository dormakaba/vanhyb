!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@Apps/backbone"),require("react"),require("react-dom"),require("@dormakaba/vanguard"),require("classnames")):"function"==typeof define&&define.amd?define(["@Apps/backbone","react","react-dom","@dormakaba/vanguard","classnames"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).backbone,e.dormakaba.vendorReact["vendor/react"],e.dormakaba.vendorReact["vendor/react-dom"],e.DormakabaVanguard,e.dormakaba.vendorReact["vendor/classnames"])}(this,(function(e,t,r,n,i){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=o(t),a=o(i),l=function(e,t){return void 0===t&&(t=[]),e.replaceAll("{}",function(e){var t=0;return function(r){return""+e[t++]||r}}(t))},d=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self,{exports:{}}),c={},u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;function f(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}})()&&Object.assign;var h=s.default,m=60103;if(c.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var v=Symbol.for;m=v("react.element"),c.Fragment=v("react.fragment")}var y=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,i={},o=null,s=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(s=t.ref),t)g.call(t,n)&&!j.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:m,type:e,key:o,ref:s,props:i,_owner:y.current}}c.jsx=w,c.jsxs=w;d.exports=c;var b=t.createContext(null),T=function(e){var r=e.appId,n=e.children,i=e.defaultValue,o=void 0===i?{}:i,s=t.useMemo((function(){if(!r)return o;var e='[data-react-app="'+r+'"]',t=document.querySelector(e);if(!t)throw new Error(e+" is missing");var n=t.querySelector("script");return null!=n&&n.innerHTML?JSON.parse(n.innerHTML):o}),[r,o]);return d.exports.jsx(b.Provider,{value:s,children:n})},k=t.createContext(null),N=function(e){var r=e.children,n=t.useState(new URL(location.href));return d.exports.jsx(k.Provider,{value:n,children:r})};var S=function(e){return"/"+(null==(t=window.location.pathname.split("/").filter((function(e){return e})))?void 0:t[0])+"/"+(null==t?void 0:t[1])+e;var t},$=function(e,t){void 0===e&&(e=""),void 0===t&&(t="occ");var r="";switch(t){case"occ":r=function(e){var t="rootB2BUnit",r=new URL(e,"http://updateQueryParams");return r.searchParams.has(t)&&r.searchParams.delete(t),r.searchParams.append(t,"{rootB2BUnit}"),decodeURI(""+r.pathname+r.search)}(function(e){return"/dormakabacommercewebservices/v2"+e}(e));break;case"redirect":r=S(e)}return r},P=function(){return t.useContext(b)},O=function(){var e=P().translations,r=t.useCallback((function(t){var r=null==e?void 0:e[t];if(r){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return i.length?l(r,i):r}return t}),[e]);return{t:r}},C={exports:{}},_={exports:{}};!function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(_),function(e){var t=_.exports.default;function r(){e.exports=r=function(){return n},e.exports.__esModule=!0,e.exports.default=e.exports;var n={},i=Object.prototype,o=i.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},a=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",d=s.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var i=t&&t.prototype instanceof f?t:f,o=Object.create(i.prototype),s=new S(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return P()}for(r.method=i,r.arg=o;;){var s=r.delegate;if(s){var a=T(s,r);if(a){if(a===x)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=p(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===x)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,s),o}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=u;var x={};function f(){}function h(){}function m(){}var v={};c(v,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y($([])));g&&g!==i&&o.call(g,a)&&(v=g);var j=m.prototype=f.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,r){function n(i,s,a,l){var d=p(e[i],e,s);if("throw"!==d.type){var c=d.arg,u=c.value;return u&&"object"==t(u)&&o.call(u,"__await")?r.resolve(u.__await).then((function(e){n("next",e,a,l)}),(function(e){n("throw",e,a,l)})):r.resolve(u).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,l)}))}l(d.arg)}var i;this._invoke=function(e,t){function o(){return new r((function(r,i){n(e,t,r,i)}))}return i=i?i.then(o,o):o()}}function T(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,T(e,t),"throw"===t.method))return x;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return x}var n=p(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,x;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,x):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,x)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function $(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return h.prototype=m,c(j,"constructor",m),c(m,"constructor",h),h.displayName=c(m,d,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,d,"GeneratorFunction")),e.prototype=Object.create(j),e},n.awrap=function(e){return{__await:e}},w(b.prototype),c(b.prototype,l,(function(){return this})),n.AsyncIterator=b,n.async=function(e,t,r,i,o){void 0===o&&(o=Promise);var s=new b(u(e,t,r,i),o);return n.isGeneratorFunction(t)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},w(j),c(j,d,"Generator"),c(j,a,(function(){return this})),c(j,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},n.values=$,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return s.type="throw",s.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(a&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,x):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),x},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),x}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;N(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:$(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),x}},n}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports}(C);var M=C.exports();try{regeneratorRuntime=M}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=M:Function("r","regeneratorRuntime = r")(M)}var D="vanguard.cart.totalPrice",E="vanguard.cart.product.notAvailable",L="vanguard.cart.reduction",I="vanguard.checkout.item.sales.totalPrice",z="vanguard.checkout.item.sales.totalPrice.tooltip",A="vanguard.checkout.item.sales.quantity",Y="vanguard.checkout.ean",R="vanguard.checkout.item.sales.listPrice",F="vanguard.checkout.item.sales.userPrice",B="vanguard.checkout.item.sales.discount",H="vanguard.checkout.entry.sales.netPricePerUnit",U="vanguard.checkout.committedDelivery",q="vanguard.cart.quantity",G="vanguard.cart.items",W="vanguard.cart.lockPosition",Q="vanguard.cart.configurationData",V=function(e){var r=e.address,i=t.useMemo((function(){var e;return{company:null==r?void 0:r.companyName,imprint:[null==r?void 0:r.line1,null==r?void 0:r.line2].join(" "),region:[null==r?void 0:r.postalCode,null==r?void 0:r.town].join(" "),country:null==r||null==(e=r.country)?void 0:e.name,first_name:null==r?void 0:r.first_name,last_name:null==r?void 0:r.last_name}}),[r]);return d.exports.jsxs("div",{"data-testid":"addressPreview",children:[(null==i?void 0:i.company)&&d.exports.jsx(n.Text,{testid:"company",children:null==i?void 0:i.company}),((null==i?void 0:i.first_name)||(null==i?void 0:i.last_name))&&d.exports.jsxs(n.Text,{testid:"name",children:[null==i?void 0:i.first_name," ",null==i?void 0:i.last_name]}),(null==i?void 0:i.imprint)&&d.exports.jsx(n.Text,{testid:"imprint",children:null==i?void 0:i.imprint}),(null==i?void 0:i.region)&&d.exports.jsx(n.Text,{testid:"region",children:null==i?void 0:i.region}),(null==i?void 0:i.country)&&d.exports.jsx(n.Text,{testid:"country",children:null==i?void 0:i.country})]})},J={NEW_KEY_SYSTEM:"vanguard.cart.emks.new_key_system",EXTENSION:"vanguard.cart.emks.extension",REORDER:"vanguard.cart.emks.reorder",NEW_SERIES:"vanguard.cart.emks.new_series"},Z={exports:{}};!function(e,t){e.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",p="date",x="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:v,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+v(n,2,"0")+":"+v(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,d),o=r-i<0,s=t.clone().add(n+(o?-1:1),d);return+(-(n+(r-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:p,h:s,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},g="en",j={};j[g]=m;var w=function(e){return e instanceof N},b=function e(t,r,n){var i;if(!t)return g;if("string"==typeof t){var o=t.toLowerCase();j[o]&&(i=o),r&&(j[o]=r,i=o);var s=t.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=t.name;j[a]=t,i=a}return!n&&i&&(g=i),i||!n&&g},T=function(e,t){if(w(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new N(r)},k=y;k.l=b,k.i=w,k.w=function(e,t){return T(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var N=function(){function m(e){this.$L=b(e.locale,null,!0),this.parse(e)}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(f);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return k},v.isValid=function(){return!(this.$d.toString()===x)},v.isSame=function(e,t){var r=T(e);return this.startOf(t)<=r&&r<=this.endOf(t)},v.isAfter=function(e,t){return T(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<T(e)},v.$g=function(e,t,r){return k.u(e)?this[t]:this.set(r,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var r=this,n=!!k.u(t)||t,c=k.p(e),x=function(e,t){var i=k.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(a)},f=function(e,t){return k.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},h=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?x(1,0):x(31,11);case d:return n?x(1,m):x(0,m+1);case l:var g=this.$locale().weekStart||0,j=(h<g?h+7:h)-g;return x(n?v-j:v+(6-j),m);case a:case p:return f(y+"Hours",0);case s:return f(y+"Minutes",1);case o:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var r,l=k.p(e),c="set"+(this.$u?"UTC":""),x=(r={},r[a]=c+"Date",r[p]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[s]=c+"Hours",r[o]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],f=l===a?this.$D+(t-this.$W):t;if(l===d||l===u){var h=this.clone().set(p,1);h.$d[x](f),h.init(),this.$d=h.set(p,Math.min(this.$D,h.daysInMonth())).$d}else x&&this.$d[x](f);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[k.p(e)]()},v.add=function(n,c){var p,x=this;n=Number(n);var f=k.p(c),h=function(e){var t=T(x);return k.w(t.date(t.date()+Math.round(e*n)),x)};if(f===d)return this.set(d,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===a)return h(1);if(f===l)return h(7);var m=(p={},p[o]=t,p[s]=r,p[i]=e,p)[f]||1,v=this.$d.getTime()+n*m;return k.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||x;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=k.z(this),o=this.$H,s=this.$m,a=this.$M,l=r.weekdays,d=r.months,c=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},u=function(e){return k.s(o%12||12,e,"0")},p=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:k.s(a+1,2,"0"),MMM:c(r.monthsShort,a,d,3),MMMM:c(d,a),D:this.$D,DD:k.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,l,2),ddd:c(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:k.s(o,2,"0"),h:u(1),hh:u(2),a:p(o,s,!0),A:p(o,s,!1),m:String(s),mm:k.s(s,2,"0"),s:String(this.$s),ss:k.s(this.$s,2,"0"),SSS:k.s(this.$ms,3,"0"),Z:i};return n.replace(h,(function(e,t){return t||f[e]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,p,x){var f,h=k.p(p),m=T(n),v=(m.utcOffset()-this.utcOffset())*t,y=this-m,g=k.m(this,m);return g=(f={},f[u]=g/12,f[d]=g,f[c]=g/3,f[l]=(y-v)/6048e5,f[a]=(y-v)/864e5,f[s]=y/r,f[o]=y/t,f[i]=y/e,f)[h]||y,x?g:k.a(g)},v.daysInMonth=function(){return this.endOf(d).$D},v.$locale=function(){return j[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=b(e,t,!0);return n&&(r.$L=n),r},v.clone=function(){return k.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),S=N.prototype;return T.prototype=S,[["$ms",n],["$s",i],["$m",o],["$H",s],["$W",a],["$M",d],["$y",u],["$D",p]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),T.extend=function(e,t){return e.$i||(e(t,N,T),e.$i=!0),T},T.locale=b,T.isDayjs=w,T.unix=function(e){return T(1e3*e)},T.en=j[g],T.Ls=j,T.p={},T}()}(Z);var K,X,ee=Z.exports,te=function(e){var t=e.deliveryInfos,r=void 0===t?[]:t,i=O().t,o=r.filter((function(e){return e.receiptDate})).map((function(e){return e.receiptDate})).sort().map((function(e){return ee(e).format("DD.MM.YYYY")})),s=o[0],a=o[o.length-1];return d.exports.jsxs("div",{className:"w-1/2 md:w-36 lg:w-40 xl:w-48 flex-none md:text-right","data-testid":"committedDelivery",children:[d.exports.jsx(n.Text,{bold:!0,size:"sm",testid:"label",children:i(U)}),d.exports.jsx("div",{className:"flex md:justify-end space-x-2","data-testid":"value",children:o.length>0?d.exports.jsxs(d.exports.Fragment,{children:[d.exports.jsx(n.Icon,{type:"greenTick"}),d.exports.jsx(n.Text,{size:"sm",type:"span",children:s===a?s:s+" - "+a})]}):d.exports.jsx(n.Text,{type:"span",children:"-"})})]})},re=function(e){var t=e.imageSrc,r=e.imageAlt,i=e.productName,o=e.configName,s=e.marketSystemName,a=e.ean,l=e.badgeType,c=e.badgeText,u=e.positionText,p=e.medias,x=O().t;return d.exports.jsxs("div",{className:"flex-grow flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-2",children:[d.exports.jsx(n.Image,{src:t,alt:r,fullWidth:!1,className:"w-20 h-20"}),d.exports.jsxs("div",{className:"space-y-1",children:[d.exports.jsxs("div",{children:[d.exports.jsx(n.Text,{color:"primary",type:"span",bold:!0,testid:"name",children:i}),s&&d.exports.jsx(n.Text,{color:"primary",size:"sm",type:"span",bold:!0,testid:"masterMarketSystem",children:s})]}),d.exports.jsxs("div",{className:"flex lg:flex-col xl:flex-row space-x-2 xl:items-center",children:[d.exports.jsx(n.Chip,{testid:"masterBadge",background:l,label:c}),a&&d.exports.jsx(n.Text,{size:"sm",testid:"ean",children:x(Y)+": "+a})]}),o&&d.exports.jsx(n.Text,{size:"sm",testid:"configName",children:o}),p&&d.exports.jsx("div",{className:"flex flex-wrap","data-testid":"uploadedFiles",children:p.map((function(e){return d.exports.jsx(n.Chip,{label:e.realFileName,onClick:function(){return window.open(e.url,"_blank")},className:"mr-1 mt-1"},e.code)}))}),u&&d.exports.jsx(n.Text,{color:"green",type:"span",size:"sm",testid:"positionText",children:u})]})]})},ne=function(e){var t=e.amount,r=e.unitName,i=O().t;return d.exports.jsxs("div",{className:"w-1/2 md:w-20 lg:w-28 flex-none md:text-right","data-testid":"quantity",children:[d.exports.jsx(n.Text,{bold:!0,size:"sm",testid:"label",children:i(A)}),d.exports.jsxs(n.Text,{size:"sm",testid:"value",children:[t," ",r]})]})},ie=function(e){var t=e.totalPrice,r=O().t;return d.exports.jsxs("div",{className:"w-1/2 md:w-36 lg:w-40 xl:w-48 flex-none md:text-right","data-testid":"totalPrice",children:[d.exports.jsxs("div",{className:"flex md:justify-end",children:[d.exports.jsx(n.Text,{bold:!0,size:"sm",testid:"label",children:r(I)}),d.exports.jsx(n.Tooltip,{position:"right",render:r(z),children:d.exports.jsx(n.Icon,{type:"info",className:"px-1",size:"xs"})})]}),d.exports.jsx(n.Text,{size:"sm","data-testid":"value",children:d.exports.jsx(n.Price,{price:t})})]})},oe=function(e){var t=e.gross,r=e.net,i=e.discount,o=O().t;return d.exports.jsxs("div",{className:"w-1/2 md:w-40 lg:w-48 xl:w-64 flex-none md:text-right","data-testid":"unitPrice",children:[d.exports.jsx(n.Text,{bold:!0,size:"sm",testid:"header",children:o(H)}),d.exports.jsxs(n.Text,{size:"sm",testid:"grossPrice",children:[o(R)+": ",d.exports.jsx(n.Price,{price:t})]}),d.exports.jsxs(n.Text,{size:"sm",testid:"netPrice",children:[o(F)+": ",d.exports.jsx(n.Price,{price:r})]}),!!i&&d.exports.jsxs(n.Text,{color:"green",size:"sm",testid:"discount",children:[o(B)," ",i,"%"]})]})},se=function(e){var r=e.lockingPositions,i=t.useState(!1),o=i[0],s=i[1];return d.exports.jsx("div",{onClick:function(){"Range"!=window.getSelection().type&&s(!o)},className:"pr-6 space-y-3",children:d.exports.jsx(n.Text,{size:"sm",type:"span",testid:"lockingPosition",children:!o&&r.length>12?r.slice(0,12).join(", ")+" ...":r.join(", ")})})},ae=function(e){var t=e.name,r=e.infos,i=void 0===r?[]:r;return d.exports.jsxs("div",{className:"pr-6 space-y-3","data-testid":"configuration",children:[t&&d.exports.jsx(n.Text,{size:"sm",testid:"name",children:t}),i.length>0&&d.exports.jsx(n.List,{isCompressed:!0,children:i.map((function(e,t){return d.exports.jsx(n.List.Item,{name:e.configurationLabel,value:e.configurationValue},t)}))})]})},le=function(e){var t=e.name,r=e.isEntryAvailable,i=e.type,o=O().t;return d.exports.jsxs("div",{className:"flex items-center",children:[!r&&d.exports.jsx(n.Tooltip,{render:o(E),position:"right",children:d.exports.jsx(n.Icon,{type:"warning",className:"pr-2"})}),d.exports.jsx(n.Icon,{type:{KEY:"locked",CYLINDER:"cylinder",SECURITYCARD:"card"}[i],className:"pr-2"}),d.exports.jsx(n.Text,{size:"sm",type:"span",testid:"name",children:t})]})},de=function(e){var t=e.userPrice,r=e.listPrice,i=e.discount,o=O().t;return d.exports.jsxs("div",{className:"justify-center space-y-1",children:[d.exports.jsx(n.Text,{bold:!0,align:"right",size:"sm",color:"primary",testid:"userPrice",children:d.exports.jsx(n.Price,{price:t||r})}),!!i&&d.exports.jsxs("div",{className:"flex justify-end space-x-2",children:[d.exports.jsx(n.Text,{type:"span",size:"sm",color:"gray",transform:["line-through"],testid:"listPrice",children:d.exports.jsx(n.Price,{price:r})}),d.exports.jsx(n.Text,{type:"span",size:"sm",color:"green",testid:"discount",children:o(L,""+i)})]})]})},ce=function(e){var r=e.subpositions,i=e.isExpanded,o=void 0!==i&&i,s=e.showPrice,a=O().t,l=t.useState(o),c=l[0],u=l[1],p=t.useState(1),x=p[0],f=p[1],h=t.useMemo((function(){return e=r,t=10,Array.from({length:Math.ceil(e.length/t)},(function(r,n){return e.slice(n*t,n*t+t)}));var e,t}),[r]);return d.exports.jsxs("div",{"data-testid":"subpositions",children:[c&&d.exports.jsxs(d.exports.Fragment,{children:[d.exports.jsx("div",{className:"overflow-x-auto",children:d.exports.jsx("div",{className:"px-2 min-w-200",children:d.exports.jsxs(n.Table,{children:[d.exports.jsx(n.Table.Header,{children:d.exports.jsxs(n.Table.Row,{children:[d.exports.jsx(n.Table.HeaderCell,{width:"250px",children:d.exports.jsx(n.Text,{size:"sm",color:"primary",children:a(G)})}),d.exports.jsx(n.Table.HeaderCell,{width:"350px",children:d.exports.jsx(n.Text,{size:"sm",color:"primary",children:a(W)})}),d.exports.jsx(n.Table.HeaderCell,{children:d.exports.jsx(n.Text,{size:"sm",color:"primary",children:a(Q)})}),d.exports.jsx(n.Table.HeaderCell,{width:"250px",align:"right",children:d.exports.jsx(n.Text,{size:"sm",color:"primary",children:a(q)})}),s&&d.exports.jsx(n.Table.HeaderCell,{width:"300px",align:"right",children:d.exports.jsx(n.Text,{size:"sm",color:"primary",children:a(D)})})]})}),d.exports.jsx(n.Table.Body,{children:h[x-1].map((function(e,t){var r,i,o,a,l;return d.exports.jsxs(n.Table.Row,{children:[d.exports.jsx(n.Table.Cell,{children:d.exports.jsx(le,{name:null==(r=e.product)?void 0:r.name,isEntryAvailable:!(null!=(i=e.product)&&i.sapBlocked)&&(null==(o=e.product)?void 0:o.purchasable)&&(null==(a=e.product)?void 0:a.ecommerceEligible),type:null==(l=e.product)?void 0:l.materialType})}),d.exports.jsx(n.Table.Cell,{children:d.exports.jsx(se,{lockingPositions:e.lockingPositions})}),d.exports.jsx(n.Table.Cell,{children:d.exports.jsx(ae,{name:e.configurationName,infos:e.configurationInfos})}),d.exports.jsx(n.Table.Cell,{align:"right",children:d.exports.jsxs(n.Text,{size:"sm",type:"span",testid:"name",children:[e.quantity,"x"]})}),s&&d.exports.jsx(n.Table.Cell,{align:"right",children:d.exports.jsx(de,{userPrice:e.userPrice,listPrice:e.totalListPrice,discount:e.discountInPercentage})})]},t)}))})]})})}),h.length>1&&d.exports.jsx("div",{className:"px-4",children:d.exports.jsx(n.Pagination,{current:x,total:h.length,onChange:function(e){return f(e)}})})]}),r.length>0&&d.exports.jsxs("button",{"data-testid":"expandButton",className:"flex bg-gray-100 w-full text-xs space-x-1 justify-center",onClick:function(){return u(!c)},children:[d.exports.jsx(n.Icon,{type:c?"arrowup":"arrowdown",size:"xs",className:"self-center"}),d.exports.jsx(n.Text,{color:"primary",size:"sm",bold:!0,children:r.length+" "+a(G)})]})]})},ue=function(e){var r=e.groupedEntries,n=O().t,i=P().showPrice,o=t.useMemo((function(){return r.filter((function(e){return"headPosition"===Object.keys(e)[0]})).map((function(e){var t,r,o,s,a=e.headPosition;return d.exports.jsx("li",{children:d.exports.jsxs("div",{className:"shadow rounded",children:[d.exports.jsxs("div",{className:"flex flex-col md:flex-row w-full relative p-2 mb-4 space-y-6 md:space-y-0",children:[d.exports.jsx(re,{imageSrc:null==a||null==(t=a.thumbnail)?void 0:t.url,imageAlt:null==a||null==(r=a.thumbnail)?void 0:r.altText,productName:(null==a?void 0:a.marketSystemName)&&""+(null==a?void 0:a.marketSystemName),badgeType:"success",badgeText:n((s=null==a?void 0:a.businessCase,J[s])),positionText:null==a||null==(o=a.positionText)?void 0:o.textContent}),d.exports.jsxs("div",{className:"flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap space-y-2 md:space-y-0",children:[d.exports.jsx(ne,{amount:null==a?void 0:a.quantity}),i&&d.exports.jsx(ie,{totalPrice:null==a?void 0:a.price})]})]}),(null==a?void 0:a.entries)&&d.exports.jsx(ce,{subpositions:a.entries,showPrice:i})]})},null==a?void 0:a.code)}))}),[r,i,n]),s=t.useMemo((function(){return r.filter((function(e){return"singleEntry"===Object.keys(e)[0]})).map((function(e){var t,r,n,o,s,a,l,c,u,p,x,f,h=e.singleEntry;return d.exports.jsx("li",{children:d.exports.jsxs("div",{className:"flex flex-col md:flex-row md: w-full shadow rounded relative p-2 mb-4 space-y-6 md:space-y-0",children:[d.exports.jsx(re,{imageSrc:null==h||null==(r=h.product)||null==(n=r.thumbnails)||null==(o=n[0])?void 0:o.url,imageAlt:null==h||null==(s=h.product)||null==(a=s.thumbnails)||null==(l=a[0])?void 0:l.altText,productName:null==h||null==(c=h.product)?void 0:c.name,badgeText:null==h||null==(u=h.product)?void 0:u.code.replace(/^0+/,""),badgeType:"error",ean:null==h||null==(p=h.product)?void 0:p.ean,positionText:null==h||null==(x=h.positionText)?void 0:x.textContent,medias:null==h?void 0:h.medias,configName:null==h?void 0:h.configurationName}),d.exports.jsxs("div",{className:"flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap space-y-2 md:space-y-0",children:[i&&d.exports.jsx(oe,{gross:null==h?void 0:h.listPricePerUnit,net:null==h?void 0:h.netPricePerUnit,discount:null==h?void 0:h.discountInPercentage}),d.exports.jsx(ne,{amount:null==h?void 0:h.quantity,unitName:null==h||null==(f=h.displayUnit)?void 0:f.name}),i&&d.exports.jsx(ie,{totalPrice:null==h?void 0:h.userPrice}),d.exports.jsx(te,{deliveryInfos:null==h?void 0:h.committedDeliveryInfos})]})]})},null==h||null==(t=h.product)?void 0:t.code)}))}),[r,i]);return d.exports.jsxs("ul",{className:"space-y-4 py-2 lg:px-8","data-testid":"finalReview",children:[o,s]})};!function(e){e.Copy="copy",e.Move="move"}(K||(K={})),function(e){e.private="private",e.public="public"}(X||(X={}));var pe=navigator.userAgent.includes("Firefox"),xe=function(t){var r=t.fixed,i=void 0===r||r;return e.store.hooks.useIsFetching()&&d.exports.jsx("div",{className:a.default("w-full h-full flex items-center justify-center top-0 left-0 z-10 backdrop-filter backdrop-blur",{"bg-gray-200 opacity-60":pe},i?"fixed":"absolute"),"data-testid":"overlayLoader",children:d.exports.jsx(n.Icon,{size:"xl",type:"loader"})})},fe="vanguard.checkout.items",he="vanguard.checkout.cta.continueShopping",me="vanguard.orderConfirmation.downloadPDF",ve="vanguard.orderConfirmation.myOrders",ye="vanguard.checkout.confirmation.thx",ge="vanguard.checkout.confirmation.info",je="vanguard.checkout.delivery.method",we="vanguard.checkout.delivery.cost",be="vanguard.checkout.delivery.recipient",Te="vanguard.checkout.paymentterm.default",ke="vanguard.checkout.payment.billing",Ne="vanguard.checkout.payment.tile",Se="vanguard.checkout.delivery.tile",$e="vanguard.checkout.confirmation.orderSummary",Pe="vanguard.checkout.confirmation.orderSummary.orderedBy",Oe="vanguard.checkout.confirmation.orderSummary.customerOrderNumber",Ce="vanguard.checkout.total.price",_e="vanguard.checkout.confirmation.orderSummary.date",Me="vanguard.checkout.payment.termsOfPayment",De="vanguard.checkout.endUserInformation.tile",Ee=function(){var t=P(),r=t.showOrderConfirmationPDF,i=t.orderCode,o=e.store.api.checkout.useGetOrderConfirmationQuery({orderCode:i}).data,s=O().t;return d.exports.jsxs("div",{className:"flex flex-col md:flex-row justify-end pt-4 space-y-2 md:space-x-2 md:space-y-0",children:[d.exports.jsx(n.Button,{onClick:function(){return window.location.href=$("/my-account/orders","redirect")},testid:"myOrdersButton",variant:"outlined",iconType:"history",children:s(ve)}),r&&d.exports.jsx(n.Button,{onClick:function(){return window.open($("/checkout/orderConfirmation/"+(null==o?void 0:o.orderNumber)+"/download","redirect"),"_blank")},testid:"downloadPDFButton",variant:"outlined",iconType:"download",children:s(me)}),d.exports.jsx(n.Button,{onClick:function(){return window.location.href=$("","redirect")},iconType:"arrow",testid:"continueShoppingButton",children:s(he)})]})},Le=function(){var e=O().t;return d.exports.jsx("div",{className:"pb-4","data-testid":"header",children:d.exports.jsx("div",{className:"flex",children:d.exports.jsxs("div",{className:"items-center",children:[d.exports.jsxs(n.Text,{type:"h3",size:"xl",testid:"thanks",children:[e(ye),"!🎉"]}),d.exports.jsx(n.Text,{testid:"info",children:e(ge)})]})})})},Ie=function(){var t=P().orderCode,r=e.store.api.checkout.useGetOrderConfirmationQuery({orderCode:t}).data,i=e.store.api.checkout.useGetAdditionalAddressTypesQuery({orderCode:t}).data;return d.exports.jsx("div",{className:"flex flex-wrap pl-6",children:((null==r?void 0:r.additionalAddresses)||[]).map((function(e){var t;return d.exports.jsxs("div",{className:"pt-4 pr-16","data-testid":e.additionalAddressTypeCode,children:[d.exports.jsx(n.Text,{bold:!0,testid:"label",children:null==(t=(i||[]).find((function(t){return t.code===e.additionalAddressTypeCode})))?void 0:t.name}),d.exports.jsx(V,{address:e})]},e.additionalAddressTypeCode)}))})},ze=function(){var t,r,i=O().t,o=P().orderCode,s=e.store.api.checkout.useGetOrderConfirmationQuery({orderCode:o}).data;return d.exports.jsxs("div",{className:"flex flex-col space-y-3 md:flex-row justify-around",children:[d.exports.jsxs("div",{className:"w-1/2 pl-4","data-testid":"deliveryDetails",children:[d.exports.jsx(n.Text,{bold:!0,testid:"modeLabel",children:i(je)}),d.exports.jsx(n.Text,{testid:"modeName",children:null==s||null==(t=s.deliveryMode)?void 0:t.name}),d.exports.jsx(n.Text,{testid:"modeDescription",size:"sm",children:null==s||null==(r=s.deliveryMode)?void 0:r.description}),(null==s?void 0:s.deliveryCost)&&d.exports.jsxs(d.exports.Fragment,{children:[d.exports.jsx(n.Text,{bold:!0,testid:"costLabel",children:i(we)}),d.exports.jsx(n.Text,{testid:"costAmount",children:d.exports.jsx(n.Price,{price:null==s?void 0:s.deliveryCost})})]})]}),d.exports.jsxs("div",{className:"w-1/2 pl-4","data-testid":"deliveryAddress",children:[d.exports.jsx(n.Text,{bold:!0,testid:"addressLabel",children:i(be)}),d.exports.jsx(V,{address:null==s?void 0:s.deliveryAddress})]})]})},Ae=function(){var t,r,i,o=O().t,s=P().orderCode,l=e.store.api.checkout.useGetOrderConfirmationQuery({orderCode:s}).data,c=e.store.api.checkout.useGetB2BUnitQuery().data;return d.exports.jsxs("div",{className:"flex flex-col space-y-3 md:flex-row justify-around",children:[d.exports.jsx("div",{className:"w-1/2 pl-4",children:d.exports.jsxs("div",{className:"mt-4","data-testid":"terms",children:[d.exports.jsx(n.Text,{bold:!0,testid:"label",children:o(Me)}),d.exports.jsx(n.Text,{color:a.default({green:null==c||null==(t=c.defaultPaymentTerm)?void 0:t.description}),testid:"value",children:null!=(r=null==c||null==(i=c.defaultPaymentTerm)?void 0:i.description)?r:o(Te)})]})}),d.exports.jsxs("div",{className:"w-1/2 pl-4","data-testid":"billing",children:[d.exports.jsx(n.Text,{bold:!0,testid:"label",children:o(ke)}),d.exports.jsx(V,{address:null==l?void 0:l.billingAddress})]})]})},Ye=function(){var t,r=O().t,i=P().orderCode,o=e.store.api.checkout.useGetOrderConfirmationQuery({orderCode:i}).data,s=[{id:"001",isOpen:!1,title:r(Ne),content:d.exports.jsx(Ae,{}),testid:"payment"},{id:"002",isOpen:!1,title:r(Se),content:d.exports.jsx(ze,{}),testid:"delivery"},(null==o||null==(t=o.additionalAddresses)?void 0:t.length)>0&&{id:"003",isOpen:!1,title:r(De),content:d.exports.jsx(Ie,{}),testid:"additionalAddress"},{id:"004",isOpen:!1,title:r(fe),content:d.exports.jsx(ue,{groupedEntries:(null==o?void 0:o.groupedEntries)||[]}),testid:"orderReview"}];return d.exports.jsx(n.Accordion,{data:s})},Re=function(e){var t=e.title,r=e.testid,i=e.children;return d.exports.jsxs("div",{"data-testid":r,children:[d.exports.jsx(n.Text,{size:"sm",testid:"label",children:""+t.toUpperCase()}),d.exports.jsx("div",{"data-testid":"value",children:i})]})},Fe=function(){var t=P(),r=t.showPrice,i=t.orderCode,o=O().t,s=e.store.api.checkout.useGetOrderConfirmationQuery({orderCode:i}).data;return d.exports.jsxs("div",{className:"w-full bg-lighter p-4 shadow rounded","data-testid":"orderSummary",children:[d.exports.jsx(n.Text,{type:"strong",bold:!0,testid:"header",children:o($e)}),d.exports.jsxs("div",{className:"container justify-between flex flex-col space-y-3 md:space-y-0 md:flex-row mt-3 px-4",children:[d.exports.jsx(Re,{title:o(Pe),testid:"orderedBy",children:d.exports.jsx(n.Text,{bold:!0,children:null==s?void 0:s.orderedBy})}),d.exports.jsx(Re,{title:o(_e),testid:"orderDate",children:d.exports.jsx(n.Text,{bold:!0,children:ee(null==s?void 0:s.orderDate).format("DD.MM.YYYY")})}),d.exports.jsx(Re,{title:o(Oe),testid:"customerReferenceId",children:d.exports.jsx(n.Text,{bold:!0,children:null==s?void 0:s.customerReferenceId})}),r&&d.exports.jsx(Re,{title:o(Ce),testid:"totalPrice",children:d.exports.jsx(n.Text,{bold:!0,children:d.exports.jsx(n.Price,{price:null==s?void 0:s.simulatedTotalPrice})})})]})]})},Be=function(){return d.exports.jsxs("div",{"data-testid":"orderConfirmation",children:[d.exports.jsx(Le,{}),d.exports.jsx(Fe,{}),d.exports.jsx(Ye,{}),d.exports.jsx(Ee,{}),d.exports.jsx(xe,{})]})};!function(t,n){var i='[data-react-app="'+n+'"]',o=document.querySelector(i);if(!o)throw new Error(i+" is missing");var s=document.createElement("div");o.appendChild(s),r.render(function(t,r){return d.exports.jsx(e.StoreProvider,{children:d.exports.jsx(T,{appId:r,children:d.exports.jsx(N,{children:d.exports.jsx(t,{})})})})}(t,n),s)}((function(){return d.exports.jsx(Be,{})}),"order-confirmation")}));

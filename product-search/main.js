!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@Apps/backbone"),require("react"),require("react-dom"),require("@dormakaba/vanguard"),require("classnames")):"function"==typeof define&&define.amd?define(["@Apps/backbone","react","react-dom","@dormakaba/vanguard","classnames"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).backbone,e.dormakaba.vendorReact["vendor/react"],e.dormakaba.vendorReact["vendor/react-dom"],e.DormakabaVanguard,e.dormakaba.vendorReact["vendor/classnames"])}(this,(function(e,t,r,n,o){"use strict";var a,i,s,u=function(e,t){return void 0===t&&(t=[]),e.replaceAll("{}",function(e){var t=0;return function(r){return""+e[t++]||r}}(t))},c=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self,{}),l={};function d(){if(i)return a;i=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}return a=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(o,a){for(var i,s,u=n(o),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))t.call(i,l)&&(u[l]=i[l]);if(e){s=e(i);for(var d=0;d<s.length;d++)r.call(i,s[d])&&(u[s[d]]=i[s[d]])}}return u},a}!function(e){e.exports=function(){if(s)return l;s=1,d();var e=t,r=60103;if(l.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var n=Symbol.for;r=n("react.element"),l.Fragment=n("react.fragment")}var o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var s,u={},c=null,l=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,s)&&!i.hasOwnProperty(s)&&(u[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===u[s]&&(u[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:l,props:u,_owner:o.current}}return l.jsx=u,l.jsxs=u,l}()}({get exports(){return c},set exports(e){c=e}});var f=t.createContext(null),h=function(e){var r=e.appId,n=e.children,o=t.useMemo((function(){var e='[data-react-app="'+r+'"]',t=document.querySelector(e);if(!t)throw new Error(e+" is missing");var n=t.querySelector("script");try{return JSON.parse(n.innerHTML)}catch(e){throw Error("Couldn't load config of #"+r)}}),[r]);return c.jsx(f.Provider,{value:o,children:n})},p=t.createContext(null),v=function(e){var r=e.children,n=t.useState(new URL(location.href));return c.jsx(p.Provider,{value:n,children:r})};var m=function(e){return"/"+(null==(t=window.location.pathname.split("/").filter((function(e){return e})))?void 0:t[0])+"/"+(null==t?void 0:t[1])+e;var t},y=function(e,t){void 0===e&&(e=""),void 0===t&&(t="occ");var r="";switch(t){case"occ":r=function(e){var t="rootB2BUnit",r=new URL(e,"http://updateQueryParams");return r.searchParams.has(t)&&r.searchParams.delete(t),r.searchParams.append(t,"{rootB2BUnit}"),decodeURI(""+r.pathname+r.search)}(function(e){return"/dormakabacommercewebservices/v2"+e}(e));break;case"redirect":r=m(e)}return r},g=function e(t,r,n,o,a){if(void 0===a&&(a=[]),!t)return a;if(t[r]===o)return[t].concat(a);for(var i=t[n],s=0;s<(null==i?void 0:i.length);s++){var u=e(i[s],r,n,o);if((null==u?void 0:u.length)>0)return[t].concat(u)}};function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function b(e){var t=function(e,t){if("object"!==x(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===x(t)?t:String(t)}function j(e,t,r){return(t=b(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(){var e=t.useContext(f),r=t.useCallback((function(t){var r,n=null==(r=e.translations)?void 0:r[t];if(n){for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];return a.length?u(n,a):n}return t}),[e]);return S(S({},e),{},{t:r})};function $(e,t,r,n,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}var C={},T={get exports(){return C},set exports(e){C=e}},P={};!function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}({get exports(){return P},set exports(e){P=e}}),function(e){var t=P.default;function r(){e.exports=r=function(){return n},e.exports.__esModule=!0,e.exports.default=e.exports;var n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),s=new P(n||[]);return i(a,"_invoke",{value:O(e,r,s)}),a}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var p={};function v(){}function m(){}function y(){}var g={};d(g,u,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(L([])));b&&b!==o&&a.call(b,u)&&(g=b);var j=y.prototype=v.prototype=Object.create(g);function w(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,r){function n(o,i,s,u){var c=h(e[o],e,i);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==t(d)&&a.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,s,u)}),(function(e){n("throw",e,s,u)})):r.resolve(d).then((function(e){l.value=e,s(l)}),(function(e){return n("throw",e,s,u)}))}u(c.arg)}var o;i(this,"_invoke",{value:function(e,t){function a(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(a,a):a()}})}function O(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=$(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function $(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,$(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function L(e){if(e){var t=e[u];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:N}}function N(){return{value:void 0,done:!0}}return m.prototype=y,i(j,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=d(y,l,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,d(e,l,"GeneratorFunction")),e.prototype=Object.create(j),e},n.awrap=function(e){return{__await:e}},w(S.prototype),d(S.prototype,c,(function(){return this})),n.AsyncIterator=S,n.async=function(e,t,r,o,a){void 0===a&&(a=Promise);var i=new S(f(e,t,r,o),a);return n.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(j),d(j,l,"Generator"),d(j,u,(function(){return this})),d(j,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=L,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),u=a.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},n}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports}(T);var L=C(),N=L;try{regeneratorRuntime=L}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=L:Function("r","regeneratorRuntime = r")(L)}var k=function(){var e=t.useContext(p),r=e[0],n=e[1],o=t.useCallback((function(e,t){void 0===t&&(t=!1);var r=new URL(location.href);Object.entries(e).forEach((function(e){var t=e[0],n=e[1];r.searchParams.set(t,n)})),n(r),t?location.replace(r):history.replaceState(null,null,r)}),[n]);return{params:Object.fromEntries(r.searchParams),updateParams:o}},_=function(e){var t=e.categoryChain,r=k().updateParams;return c.jsxs("button",{className:"flex text-sm hover:opacity-75 space-x-1 items-center",onClick:function(){return r({categoryId:t.at(-2).code,currentPage:"0"})},children:[c.jsx(n.Icon,{type:"arrowl",color:"tertiary",size:"xs"}),c.jsx(n.Text,{children:t.at(-2).name})]})},M="vanguard.search",D={search:M,numberOfResults:M+".results",noResults:M+".noResults",addToCart:M+".addToCart",addToCartSuccess:M+".addToCartSuccess",addToCartError:M+".addToCartError",addToCartNotAvailable:M+".addToCartNotAvailable",configure:M+".configure",categories:M+".categories",resultsPerPage:M+".resultsPerPage",notAvailable:M+".result.notAvailable",ean:M+".ean",filters:M+".filters",showMore:M+".showMore",showLess:M+".showLess",clearAll:M+".clearAll"},E=function(e){var t=e.subcategory,r=k().updateParams;return c.jsx("div",{className:"ml-6",children:c.jsxs("button",{onClick:function(){return r({categoryId:t.code,currentPage:"0"})},className:"text-sm hover:opacity-75 text-tertiary text-left space-x-0.5","data-testid":"subcategory",children:[c.jsx(n.Text,{type:"span",children:t.name}),c.jsx(n.Text,{type:"span",color:"gray",children:"("+t.count+")"})]})})},I=function(e){var t,r=e.category,a=e.categoryChain,i=e.expanded,s=k().updateParams;return c.jsxs("div",{className:o({"mb-2":i}),children:[c.jsxs("button",{onClick:function(){var e=2===(null==a?void 0:a.length)&&a.includes(r);s({categoryId:e?"PRO":r.code,currentPage:"0",queryKey:""})},className:"text-sm text-tertiary text-left hover:opacity-75 space-x-0.5","data-testid":"category",children:[c.jsx(n.Text,{type:"span",bold:i,children:r.name}),c.jsx(n.Text,{type:"span",color:"gray",children:"("+r.count+")"})]}),i&&(null==(t=r.subCategories)?void 0:t.map((function(e){return c.jsx(E,{subcategory:e},e.code)})))]})},R=function(){var t,r=k().params,o=O().t,a=e.store.api.search.useGetSearchResultsQuery(r),i=a.data,s=a.isSuccess,u=g(null==i?void 0:i.categorySearchTree,"code","subCategories",r.categoryId);return s&&c.jsxs("div",{className:"p-4",children:[c.jsx(n.Text,{size:"lg",color:"primary",type:"h4",testid:"categoriesLabel",children:o(D.categories)}),c.jsx("div",{className:"p-2","data-testid":"categories",children:(null==u?void 0:u.length)>2?c.jsxs("div",{children:[c.jsx(_,{categoryChain:u}),c.jsx(I,{category:u.at(-1),expanded:!0,categoryChain:u})]}):null==i||null==(t=i.categorySearchTree)?void 0:t.subCategories.map((function(e){return c.jsx(I,{category:e,expanded:null==u?void 0:u.some((function(t){return t.code===e.code})),categoryChain:u},e.code)}))})]})},A=function(e){var r=e.filter,o=k().updateParams,a=t.useState(!0),i=a[0],s=a[1];return c.jsxs("div",{className:"space-y-2","data-testid":"filter",children:[c.jsxs("button",{className:"flex justify-between items-center mb-2 w-full hover:opacity-50",onClick:function(){return s((function(e){return!e}))},"data-testid":"expander",children:[c.jsx(n.Text,{type:"span",size:"sm",bold:!0,align:"left",children:r.name}),c.jsx(n.Icon,{size:"xs",type:i?"arrowup":"arrowdown",color:"tertiary"})]}),i&&r.values.map((function(e){return c.jsx("div",{className:"flex space-x-2","data-testid":"value",children:c.jsx(n.Checkbox,{size:"sm",checked:e.selected,onChange:function(){return o({queryKey:e.query.query.value,currentPage:"0"})},label:c.jsxs("div",{className:"space-x-0.5",children:[c.jsx(n.Text,{type:"span",children:e.name}),c.jsx(n.Text,{type:"span",color:"gray",children:"("+e.count+")"})]})})},e.code)}))]})},z=function(){var r,o,a=k(),i=a.params,s=a.updateParams,u=e.store.api.search.useGetSearchResultsQuery(i).data,l=O().t,d=t.useState(!1),f=d[0],h=d[1],p=f?null==u?void 0:u.facets:null==u||null==(r=u.facets)?void 0:r.slice(0,10);return(null==p?void 0:p.length)>0&&c.jsxs("div",{className:"p-4 space-y-4","data-testid":"filters",children:[c.jsxs("div",{className:"flex justify-between",children:[c.jsx(n.Text,{size:"lg",color:"primary",type:"h4",testid:"filtersLabel",children:l(D.filters)}),c.jsx(n.Button,{size:"sm",isDisabled:!i.queryKey,variant:"text",onClick:function(){return s({queryKey:""})},testid:"clearAll",children:l(D.clearAll)})]}),c.jsx("div",{className:"space-y-5",children:null==p?void 0:p.filter((function(e){return!e.category})).map((function(e){return c.jsx(A,{filter:e},e.priority)}))}),(null==u||null==(o=u.facets)?void 0:o.length)>10&&c.jsx("div",{className:"justify-center flex",children:c.jsx(n.Button,{onClick:function(){return h(!f)},size:"sm",iconType:f?"minus":"plus",variant:"text",testid:"showMore",children:l(f?D.showLess:D.showMore)})})]})},q=function(){var t=k().params,r=e.store.api.search.useGetSearchResultsQuery(t).data,o=g(null==r?void 0:r.categorySearchTree,"code","subCategories",t.categoryId);return(null==o?void 0:o.length)>0&&c.jsx(n.Breadcrumbs,{items:null==o?void 0:o.map((function(e){return{label:e.name,url:(t=e.code,r=new URL(window.location.href),r.searchParams.set("categoryId",t),r.href)};var t,r}))})},F=function(){var t,r,o=k().params,a=e.store.api.search.useGetSearchResultsQuery(o),i=a.data,s=a.isSuccess,u=a.originalArgs,l=O().t;return c.jsx("div",{className:"mb-2",children:s&&c.jsx(n.Text,{size:"sm",testid:"numberOfResults",children:(null==i||null==(t=i.products)?void 0:t.length)>0?l(D.numberOfResults,""+(null==i||null==(r=i.pagination)?void 0:r.totalResults),'"'+(null==u?void 0:u.searchText)+'"'):l(D.noResults,'"'+(null==u?void 0:u.searchText)+'"')})})},B="vanguard.cart.summary.close",Y="vanguard.cart.summary.open",G={};!function(e,t){e.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",a="minute",i="hour",s="day",u="week",c="month",l="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},g={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,c),a=r-o<0,i=t.clone().add(n+(a?-1:1),c);return+(-(n+(r-o)/(a?o-i:i-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:u,d:s,D:f,h:i,m:a,s:o,ms:n,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",b={};b[x]=m;var j=function(e){return e instanceof $},w=function e(t,r,n){var o;if(!t)return x;if("string"==typeof t){var a=t.toLowerCase();b[a]&&(o=a),r&&(b[a]=r,o=a);var i=t.split("-");if(!o&&i.length>1)return e(i[0])}else{var s=t.name;b[s]=t,o=s}return!n&&o&&(x=o),o||!n&&x},S=function(e,t){if(j(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new $(r)},O=g;O.l=w,O.i=j,O.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var $=function(){function m(e){this.$L=w(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var o=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return O},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,r){return O.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!O.u(t)||t,l=O.p(e),h=function(e,t){var o=O.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(s)},p=function(e,t){return O.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},v=this.$W,m=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case d:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case u:var x=this.$locale().weekStart||0,b=(v<x?v+7:v)-x;return h(n?y-b:y+(6-b),m);case s:case f:return p(g+"Hours",0);case i:return p(g+"Minutes",1);case a:return p(g+"Seconds",2);case o:return p(g+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,u=O.p(e),l="set"+(this.$u?"UTC":""),h=(r={},r[s]=l+"Date",r[f]=l+"Date",r[c]=l+"Month",r[d]=l+"FullYear",r[i]=l+"Hours",r[a]=l+"Minutes",r[o]=l+"Seconds",r[n]=l+"Milliseconds",r)[u],p=u===s?this.$D+(t-this.$W):t;if(u===c||u===d){var v=this.clone().set(f,1);v.$d[h](p),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[O.p(e)]()},y.add=function(n,l){var f,h=this;n=Number(n);var p=O.p(l),v=function(e){var t=S(h);return O.w(t.date(t.date()+Math.round(e*n)),h)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return v(1);if(p===u)return v(7);var m=(f={},f[a]=t,f[i]=r,f[o]=e,f)[p]||1,y=this.$d.getTime()+n*m;return O.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=O.z(this),a=this.$H,i=this.$m,s=this.$M,u=r.weekdays,c=r.months,l=function(e,r,o,a){return e&&(e[r]||e(t,n))||o[r].slice(0,a)},d=function(e){return O.s(a%12||12,e,"0")},f=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:O.s(s+1,2,"0"),MMM:l(r.monthsShort,s,c,3),MMMM:l(c,s),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,u,2),ddd:l(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(a),HH:O.s(a,2,"0"),h:d(1),hh:d(2),a:f(a,i,!0),A:f(a,i,!1),m:String(i),mm:O.s(i,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:o};return n.replace(v,(function(e,t){return t||p[e]||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,f,h){var p,v=O.p(f),m=S(n),y=(m.utcOffset()-this.utcOffset())*t,g=this-m,x=O.m(this,m);return x=(p={},p[d]=x/12,p[c]=x,p[l]=x/3,p[u]=(g-y)/6048e5,p[s]=(g-y)/864e5,p[i]=g/r,p[a]=g/t,p[o]=g/e,p)[v]||g,h?x:O.a(x)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return b[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=w(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return O.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),C=$.prototype;return S.prototype=C,[["$ms",n],["$s",o],["$m",a],["$H",i],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){C[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,$,S),e.$i=!0),S},S.locale=w,S.isDayjs=j,S.unix=function(e){return S(1e3*e)},S.en=b[x],S.Ls=b,S.p={},S}()}({get exports(){return G},set exports(e){G=e}});var Q,U,H=function(r){var o,a=r.configurationName,i=r.productCode,s=r.headPositionCode,u=r.itemInfoId,l=O().t,d=t.useState(!1),f=d[0],h=d[1],p=e.store.api.product.useGetConfigurationQuery({productCode:i},{skip:!f||!i}),v=p.data,m=p.isLoading,y=e.store.api.product.useGetConfigurationSummaryQuery({headPositionEntryConfigurationParameter:s&&{headPositionCode:s,itemInfoId:u},cpqConfigurationParameter:i&&{productCode:i,configId:null==v?void 0:v.configId}},{skip:!f||i&&!v}),g=y.data,x=y.isLoading,b=y.isSuccess;return c.jsxs("div",{className:"space-y-1","data-testid":"configuration",children:[a&&c.jsx(n.Text,{size:"sm",testid:"name",children:a}),c.jsx(n.Button,{variant:"text",iconType:f?"arrowup":"arrowdown",size:"sm",onClick:function(){return h(!f)},testid:"expandButton",isLoading:x||m,children:l(f?B:Y)}),b&&c.jsx(n.List,{isCompressed:!0,size:"sm",testid:"details",children:null==g||null==(o=g.configurationInfos)?void 0:o.map((function(e,t){return c.jsx(n.List.Item,{name:e.configurationLabel,value:e.configurationValue},t)}))})]})},W=function(e){var t,r,o,a,i=e.product,s=e.files,u=e.eanLabel,l=e.configuration,d=e.onFileDelete,f=!(null==i||!i.ean||null!=i&&i.configurable);return c.jsxs("div",{className:"flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-2",children:[c.jsx(n.Image,{src:null==i||null==(t=i.thumbnails)||null==(r=t[0])?void 0:r.url,alt:null==i||null==(o=i.thumbnails)||null==(a=o[0])?void 0:a.altText,fullWidth:!1,className:"w-20 h-20 overflow-hidden flex-shrink-0"}),c.jsxs("div",{className:"space-y-1",children:[c.jsx(n.Link,{href:y(null==i?void 0:i.url,"redirect"),testid:"name",children:i.name}),c.jsxs("div",{className:"flex space-x-2 items-center",children:[c.jsx(n.Chip,{testid:"materialNumber",background:"error",label:i.code.replace(/^0+/,"")}),f&&c.jsx(n.Text,{size:"sm",testid:"ean",children:u+": "+i.ean})]}),c.jsx("div",{className:"flex flex-wrap","data-testid":"uploadedFiles",children:null==s?void 0:s.map((function(e){return c.jsx(n.Chip,{label:e.realFileName,onDelete:function(){return d(e.code)},onClick:function(){return window.open(e.url,"_blank")},className:"mr-1 mt-1"},e.code)}))}),l&&c.jsx(H,{configurationName:null==l?void 0:l.name,productCode:null==i?void 0:i.code})]})]})};!function(e){e.Copy="copy",e.Move="move"}(Q||(Q={})),function(e){e.private="private",e.public="public"}(U||(U={}));var J,K,V=function(r){var a=r.fixed,i=void 0===a||a,s=e.store.hooks.useIsFetching(),u=t.useState(!1),l=u[0],d=u[1];return t.useEffect((function(){var e=function(){return d(!0)};return addEventListener("beforeunload",e),function(){return removeEventListener("beforeunload",e)}}),[]),(s||l)&&c.jsx("div",{className:o("w-full h-full flex items-center justify-center top-0 left-0 z-10 backdrop-filter backdrop-blur",i?"fixed":"absolute"),"data-testid":"overlayLoader",children:c.jsx(n.Icon,{size:"xl",type:"loader"})})},Z=function(t,r){var n=O(),o=n.t,a=n.cartCode,i=e.store.hooks.useNotifications().notify,s=e.store.api.cart.useAddToCartMutation(),u=s[0],c=s[1].isLoading,l=function(){var e,n=(e=N.mark((function e(){return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u({cartCode:a,productCode:t.code,quantity:r}).unwrap();case 3:i("success",o(D.addToCartSuccess,t.code),"search.addToCartSuccess"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),i("error",o(D.addToCartError,t.code),"search.addToCartError");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){$(a,n,o,i,s,"next",e)}function s(e){$(a,n,o,i,s,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}();return{handleAddToCart:l,isLoading:c,isDisabled:!0===t.sapBlocked||!1===t.purchasable||null!==t.minOrderQuantity&&r<t.minOrderQuantity||null!==t.maxOrderQuantity&&r<t.maxOrderQuantity||c}},X=function(e){var t=e.product,r=e.quantity,o=O().t,a=Z(t,r),i=a.handleAddToCart,s=a.isLoading,u=a.isDisabled;return c.jsx(n.Button,{testid:"addToCartButton",onClick:i,iconType:"cart",variant:"outlined",isDisabled:u,isLoading:s,children:o(D.addToCart)})},ee=function(e){var t=e.product,r=O().t;return c.jsx(n.Button,{testid:"configureButton",variant:"outlined",iconType:"filter",onClick:function(){return window.location.href=y("/configure/default/product/"+t.code,"redirect")},children:r(D.configure)})},te=function(e){var r,o,a,i,s=e.product,u=O(),l=u.t,d=u.showAddToCart,f=t.useState((null==s?void 0:s.minOrderQuantity)||1),h=f[0],p=f[1],v=!1!==s.purchasable&&!0!==s.sapBlocked;return c.jsxs("li",{className:"grid grid-cols-12 gap-4 shadow rounded w-full bg-lighter relative p-2 mb-4","data-testid":"product",children:[c.jsx("div",{className:"col-span-full xl:col-span-4",children:c.jsx(W,{product:s,eanLabel:l(D.ean)})}),c.jsx("div",{className:"col-span-full xl:col-span-4",children:c.jsx(n.Text,{size:"sm",testid:"description",children:(o=s.description,a=100,i=!1,void 0===o&&(o=""),void 0===i&&(i=!0),o.length<=a?o:i?o.substring(0,a)+"…":o.substring(0,o.substring(0,a+1).search(/\s+\S*$/))+"…")})}),c.jsx("div",{className:"col-span-6 xl:col-span-2",children:!s.configurable&&c.jsxs("div",{className:"inline-block text-center",children:[c.jsx(n.NumberInput,{value:h,onChange:p,onBlur:p,min:s.minOrderQuantity||1,testid:"quantity"}),c.jsx(n.Text,{size:"sm",testid:"unitName",children:null==s||null==(r=s.unit)?void 0:r.name})]})}),d&&c.jsx("div",{className:"col-span-6 xl:col-span-2 text-center",children:v?s.configurable?c.jsx(ee,{product:s}):c.jsx(X,{product:s,quantity:h}):c.jsx(n.Text,{bold:!0,testid:"notAvailable",children:l(D.notAvailable)})})]})},re=function(){var t,r,o,a=k(),i=a.params,s=a.updateParams,u=e.store.api.search.useGetSearchResultsQuery(i).data,l=O().t;return c.jsx("div",{className:"w-full h-full space-y-2","data-testid":"searchResults",children:(null==u||null==(t=u.products)?void 0:t.length)>0&&c.jsxs(c.Fragment,{children:[c.jsxs("ul",{className:"relative","data-testid":"results",children:[null==u||null==(r=u.products)?void 0:r.map((function(e){return c.jsx(te,{product:e},null==e?void 0:e.code)})),c.jsx(V,{fixed:!1})]}),c.jsx("div",{className:"px-4",children:c.jsx(n.Pagination,{range:1,current:+i.currentPage+1,total:null==u||null==(o=u.pagination)?void 0:o.totalPages,onChange:function(e){return s({currentPage:""+(e-1)})},pageSize:+i.pageSize,pageSizeLabel:l(D.resultsPerPage),onPageSizeChange:function(e){return s({currentPage:"0",pageSize:""+e})}})})]})})};J={searchText:"",categoryId:"PRO",currentPage:"0",pageSize:"20",queryKey:""},K=new URL(location.href),Object.entries(J).forEach((function(e){var t=e[0],r=e[1];K.searchParams.has(t)||K.searchParams.set(t,r)})),history.replaceState(null,null,K);var ne=function(){return c.jsxs(c.Fragment,{children:[c.jsx(q,{}),c.jsx(F,{}),c.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[c.jsxs("div",{className:"shadow w-full md:w-96 divide-y self-start grow-0",children:[c.jsx(R,{}),c.jsx(z,{})]}),c.jsx("div",{className:"w-full",children:c.jsx(re,{})})]})]})};!function(t,n){var o='[data-react-app="'+n+'"]:not([data-rendered])',a=document.querySelector(o);if(!a)throw new Error(o+" is missing");var i=document.createElement("div");a.appendChild(i),a.setAttribute("data-rendered","true"),r.render(function(t,r){return c.jsx(e.StoreProvider,{children:c.jsx(h,{appId:r,children:c.jsx(v,{children:c.jsx(t,{})})})})}(t,n),i)}((function(){return c.jsx(ne,{})}),"product-search")}));

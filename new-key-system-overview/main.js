!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@Apps/backbone"),require("react"),require("react-dom"),require("@dormakaba/vanguard")):"function"==typeof define&&define.amd?define(["@Apps/backbone","react","react-dom","@dormakaba/vanguard"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).backbone,e.dormakaba.vendorReact["vendor/react"],e.dormakaba.vendorReact["vendor/react-dom"],e.DormakabaVanguard)}(this,(function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(t),a=function(e,t){return void 0===t&&(t=[]),e.replaceAll("{}",function(e){var t=0;return function(r){return""+e[t++]||r}}(t))},s={exports:{}},c={},u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;function d(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var p=i.default,h=60103;if(c.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var v=Symbol.for;h=v("react.element"),c.Fragment=v("react.fragment")}var y=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function g(e,t,r){var n,o={},i=null,a=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(a=t.ref),t)m.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:h,type:e,key:i,ref:a,props:o,_owner:y.current}}c.jsx=g,c.jsxs=g;s.exports=c;var w=t.createContext(null),b=function(e){var r=e.appId,n=e.children,o=e.defaultValue,i=void 0===o?{}:o,a=t.useMemo((function(){if(!r)return i;var e='[data-react-app="'+r+'"]',t=document.querySelector(e);if(!t)throw new Error(e+" is missing");var n=t.querySelector("script");return null!=n&&n.innerHTML?JSON.parse(n.innerHTML):i}),[r,i]);return s.exports.jsx(w.Provider,{value:a,children:n})},j=t.createContext(null),_=function(e){var r=e.children,n=t.useState(new URL(location.href));return s.exports.jsx(j.Provider,{value:n,children:r})};var E=function(e){return"/"+(null==(t=window.location.pathname.split("/").filter((function(e){return e})))?void 0:t[0])+"/"+(null==t?void 0:t[1])+e;var t},k=function(e,t){void 0===e&&(e=""),void 0===t&&(t="occ");var r="";switch(t){case"occ":r=function(e){var t="rootB2BUnit",r=new URL(e,"http://updateQueryParams");return r.searchParams.has(t)&&r.searchParams.delete(t),r.searchParams.append(t,"{rootB2BUnit}"),decodeURI(""+r.pathname+r.search)}(function(e){return"/dormakabacommercewebservices/v2"+e}(e));break;case"redirect":r=E(e)}return r},O=function(){return t.useContext(w)},L=function(){var e=O().translations,r=t.useCallback((function(t){var r=null==e?void 0:e[t];if(r){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return o.length?a(r,o):r}return t}),[e]);return{t:r}},S={exports:{}},P={exports:{}};!function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(P),function(e){var t=P.exports.default;function r(){e.exports=r=function(){return n},e.exports.__esModule=!0,e.exports.default=e.exports;var n={},o=Object.prototype,i=o.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=_(a,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var p={};function h(){}function v(){}function y(){}var m={};l(m,s,(function(){return this}));var x=Object.getPrototypeOf,g=x&&x(x(L([])));g&&g!==o&&i.call(g,s)&&(m=g);var w=y.prototype=h.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,r){function n(o,a,s,c){var u=d(e[o],e,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(e){n("next",e,s,c)}),(function(e){n("throw",e,s,c)})):r.resolve(f).then((function(e){l.value=e,s(l)}),(function(e){return n("throw",e,s,c)}))}c(u.arg)}var o;this._invoke=function(e,t){function i(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(i,i):i()}}function _(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=d(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function L(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=y,l(w,"constructor",y),l(y,"constructor",v),v.displayName=l(y,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},n.awrap=function(e){return{__await:e}},b(j.prototype),l(j.prototype,c,(function(){return this})),n.AsyncIterator=j,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new j(f(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(w),l(w,u,"Generator"),l(w,s,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},n.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},n}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports}(S);var N=S.exports();try{regeneratorRuntime=N}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=N:Function("r","regeneratorRuntime = r")(N)}var T="vanguard.keysystem.existing.overview",A="vanguard.keysystem.existing.overview.welcome",R="vanguard.keysystem.existing.export",I="vanguard.keysystem.existing.extension",M="vanguard.keysystem.existing.reorder",C="vanguard.keysystem.existing.byFile",F=function(){var t,r,o=L().t,i=(t=e.store.api.keysystem.useGetPermissionsQuery().data,{isExportPermissionAllowed:null==(r=null==t?void 0:t.map((function(e){return e.identifier})))?void 0:r.includes("eMKS_ExportKeySystem"),isExtensionPermissionAllowed:null==r?void 0:r.includes("eMKS_Extension"),isReorderPermissionAllowed:null==r?void 0:r.includes("eMKS_Reorder")}),a=i.isExportPermissionAllowed,c=i.isExtensionPermissionAllowed,u=i.isReorderPermissionAllowed;return s.exports.jsxs("div",{className:"flex justify-end items-center h-16 pl-4 pr-4 bg-white border-gray-300 border-2 space-x-4",children:[a&&s.exports.jsx(n.Button,{variant:"text",iconType:"plus",testid:"exportButton",children:o(R)}),c&&s.exports.jsx(n.Button,{variant:"text",iconType:"plus",testid:"extensionButton",children:o(I)}),u&&s.exports.jsx("div",{children:s.exports.jsxs(n.ActionsMenu,{icon:"sortable",title:o(M),testid:"reorderMenu",children:[s.exports.jsx(n.ActionsMenu.ActionItem,{label:o(M),testid:"reorder",onClick:function(){}}),s.exports.jsx(n.ActionsMenu.ActionItem,{label:o(M)+" "+o(C),testid:"reorderByFile",onClick:function(){}})]})})]})},B=function(){var e=L().t,t=O().systemCode;return s.exports.jsxs("div",{className:"flex justify-between items-center h-16 pl-4 pr-4 bg-white border-gray-300 border-2","data-testid":"caption",children:[s.exports.jsx("div",{className:"flex w-full justify-center items-center",children:s.exports.jsx(n.Text,{type:"h3",color:"primary",size:"xl",children:e(T)+" - "+t})}),s.exports.jsx("a",{href:k("","redirect"),"data-testid":"link",children:s.exports.jsx("div",{className:"flex justify-center items-center h-5 w-5",children:s.exports.jsx(n.Icon,{type:"close",color:"red-500",testid:"closeIcon"})})})]})},q=function(){var e=L().t;return s.exports.jsx("div",{className:"px-10 py-5 ","data-testid":"overviewTile",children:s.exports.jsx("div",{className:"shadow-md bg-lighter p-6",children:s.exports.jsx(n.Text,{children:e(A)})})})};!function(t,n){var o='[data-react-app="'+n+'"]',i=document.querySelector(o);if(!i)throw new Error(o+" is missing");var a=document.createElement("div");i.appendChild(a),r.render(function(t,r){return s.exports.jsx(e.StoreProvider,{children:s.exports.jsx(b,{appId:r,children:s.exports.jsx(_,{children:s.exports.jsx(t,{})})})})}(t,n),a)}((function(){return s.exports.jsxs("div",{"data-testid":"newKeySystemOverview",children:[s.exports.jsx(B,{}),s.exports.jsx(q,{}),s.exports.jsx(F,{})]})}),"new-key-system-overview")}));

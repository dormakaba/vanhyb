!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(require("@Apps/backbone"),require("react"),require("react-dom"),require("@dormakaba/vanguard")):"function"==typeof define&&define.amd?define(["@Apps/backbone","react","react-dom","@dormakaba/vanguard"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).backbone,t.dormakaba.vendorReact["vendor/react"],t.dormakaba.vendorReact["vendor/react-dom"],t.DormakabaVanguard)}(this,(function(t,r,e,n){"use strict";function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=o(r),a={exports:{}},u={},c=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;function l(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var r={},e=0;e<10;e++)r["_"+String.fromCharCode(e)]=e;var n=Object.getOwnPropertyNames(r).map((function(t){return r[t]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(t){o[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}})()&&Object.assign;var p=i.default,d=60103;if(u.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;d=h("react.element"),u.Fragment=h("react.fragment")}var y=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v=Object.prototype.hasOwnProperty,m={key:!0,ref:!0,__self:!0,__source:!0};function g(t,r,e){var n,o={},i=null,a=null;for(n in void 0!==e&&(i=""+e),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(a=r.ref),r)v.call(r,n)&&!m.hasOwnProperty(n)&&(o[n]=r[n]);if(t&&t.defaultProps)for(n in r=t.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:d,type:t,key:i,ref:a,props:o,_owner:y.current}}u.jsx=g,u.jsxs=g;a.exports=u;var b=r.createContext(null),x=function(t){var e=t.appId,n=t.children,o=t.defaultValue,i=void 0===o?{}:o,u=r.useMemo((function(){if(!e)return i;var t='[data-react-app="'+e+'"]',r=document.querySelector(t);if(!r)throw new Error(t+" is missing");var n=r.querySelector("script");return null!=n&&n.innerHTML?JSON.parse(n.innerHTML):i}),[e,i]);return a.exports.jsx(b.Provider,{value:u,children:n})};function w(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var O={exports:{}},j={exports:{}};!function(t){function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports}(j),function(t){var r=j.exports.default;function e(){t.exports=e=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var n={},o=Object.prototype,i=o.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof h?r:h,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=j(a,e);if(u){if(u===d)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=p(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var d={};function h(){}function y(){}function v(){}var m={};s(m,u,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(S([])));b&&b!==o&&i.call(b,u)&&(m=b);var x=v.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function O(t,e){function n(o,a,u,c){var f=p(t[o],t,a);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"==r(l)&&i.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(l).then((function(t){s.value=t,u(s)}),(function(t){return n("throw",t,u,c)}))}c(f.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,j(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=p(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,d;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(i.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=v,s(x,"constructor",v),s(v,"constructor",y),y.displayName=s(v,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,f,"GeneratorFunction")),t.prototype=Object.create(x),t},n.awrap=function(t){return{__await:t}},w(O.prototype),s(O.prototype,c,(function(){return this})),n.AsyncIterator=O,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new O(l(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),s(x,f,"Generator"),s(x,u,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:S(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},n}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}(O);var _=O.exports();try{regeneratorRuntime=_}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=_:Function("r","regeneratorRuntime = r")(_)}function E(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}var L=window.devicePixelRatio>1,S=function(t){return t+(L?"Retina":"")},P=function(t){var r=void 0===t?{altText:"",format:"",galleryIndex:0,imageType:"",url:""}:t;return{alt:r.altText,src:r.url}},k=function(t){void 0===t&&(t=[]);var r=/\/medias\/(.*?)(-\d*Wx\d*H|\.)/i,e=t.reduce((function(t,e){var n=function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?E(Object(e),!0).forEach((function(r){w(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):E(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}({},t),o=e.url.match(r);if(o){var i=o[1];return n[i]=n[i]||[],n[i].push(e),n}}),{});return Object.values(e)},T=function(){var e=r.useContext(b).productCode,n=t.store.api.product.useGetGalleryImagesQuery({productCode:e}).data;return{data:r.useMemo((function(){return k(null==n?void 0:n.images).reduce((function(t,r){var e,n,o,i,a=(e=r,n=S("thumbnail"),o=S("product"),i=S("zoom"),{thumbnail:P(e.find((function(t){return t.format===n}))),product:P(e.find((function(t){return t.format===o}))),zoom:P(e.find((function(t){return t.format===i})))}),u=a.thumbnail,c=a.product,f=a.zoom;return{thumbnail:[].concat(t.thumbnail,[u]),product:[].concat(t.product,[c]),zoom:[].concat(t.zoom,[f])}}),{thumbnail:[],product:[],zoom:[]})}),[n])}},N=function(){var t=T().data,r=t.product,e=t.thumbnail,o=t.zoom;return a.exports.jsx(n.ImageGallery,{images:r,thumbnails:e,zooms:o})};!function(r,n){var o='[data-react-app="'+n+'"]',i=document.querySelector(o);if(!i)throw new Error(o+" is missing");var u=document.createElement("div");i.appendChild(u),e.render(function(r,e){return a.exports.jsx(t.StoreProvider,{children:a.exports.jsx(x,{appId:e,children:a.exports.jsx(r,{})})})}(r,n),u)}((function(){return a.exports.jsx(N,{})}),"image-gallery")}));

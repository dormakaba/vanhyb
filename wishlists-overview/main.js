!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@Apps/backbone"),require("react"),require("react-dom"),require("@dormakaba/vanguard"),require("classnames")):"function"==typeof define&&define.amd?define(["@Apps/backbone","react","react-dom","@dormakaba/vanguard","classnames"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).backbone,e.dormakaba.vendorReact["vendor/react"],e.dormakaba.vendorReact["vendor/react-dom"],e.DormakabaVanguard,e.dormakaba.vendorReact["vendor/classnames"])}(this,(function(e,t,r,n,i){"use strict";var a,s,o,c=function(e,t){return void 0===t&&(t=[]),e.replaceAll("{}",function(e){var t=0;return function(r){return""+e[t++]||r}}(t))},u=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self,{}),l={};function d(){if(s)return a;s=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}return a=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(i,a){for(var s,o,c=n(i),u=1;u<arguments.length;u++){for(var l in s=Object(arguments[u]))t.call(s,l)&&(c[l]=s[l]);if(e){o=e(s);for(var d=0;d<o.length;d++)r.call(s,o[d])&&(c[o[d]]=s[o[d]])}}return c},a}!function(e){e.exports=function(){if(o)return l;o=1,d();var e=t,r=60103;if(l.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var n=Symbol.for;r=n("react.element"),l.Fragment=n("react.fragment")}var i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,c={},u=null,l=null;for(o in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,o)&&!s.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{$$typeof:r,type:e,key:u,ref:l,props:c,_owner:i.current}}return l.jsx=c,l.jsxs=c,l}()}({get exports(){return u},set exports(e){u=e}});var h=t.createContext(null),f=function(e){var r=e.appId,n=e.children,i=t.useMemo((function(){var e='[data-react-app="'+r+'"]',t=document.querySelector(e);if(!t)throw new Error(e+" is missing");var n=t.querySelector("script");try{return JSON.parse(n.innerHTML)}catch(e){throw Error("Couldn't load config of #"+r)}}),[r]);return u.jsx(h.Provider,{value:i,children:n})},p=t.createContext(null),v=function(e){var r=e.children,n=t.useState(new URL(location.href));return u.jsx(p.Provider,{value:n,children:r})};var m=function(e){return"/"+(null==(t=window.location.pathname.split("/").filter((function(e){return e})))?void 0:t[0])+"/"+(null==t?void 0:t[1])+e;var t},g=function(e,t){void 0===e&&(e=""),void 0===t&&(t="occ");var r="";switch(t){case"occ":r=function(e){var t="rootB2BUnit",r=new URL(e,"http://updateQueryParams");return r.searchParams.has(t)&&r.searchParams.delete(t),r.searchParams.append(t,"{rootB2BUnit}"),decodeURI(""+r.pathname+r.search)}(function(e){return"/dormakabacommercewebservices/v2"+e}(e));break;case"redirect":r=m(e)}return r};function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function w(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===y(t)?t:String(t)}function b(e,t,r){return(t=w(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=function(){var e=t.useContext(h),r=t.useCallback((function(t){var r,n=null==(r=e.translations)?void 0:r[t];if(n){for(var i=arguments.length,a=new Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];return a.length?c(n,a):n}return t}),[e]);return k(k({},e),{},{t:r})};function C(e,t,r,n,i,a,s){try{var o=e[a](s),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,i)}function j(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function s(e){C(a,n,i,s,o,"next",e)}function o(e){C(a,n,i,s,o,"throw",e)}s(void 0)}))}}var O={},D={get exports(){return O},set exports(e){O=e}},N={};!function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}({get exports(){return N},set exports(e){N=e}}),function(e){var t=N.default;function r(){e.exports=r=function(){return n},e.exports.__esModule=!0,e.exports.default=e.exports;var n={},i=Object.prototype,a=i.hasOwnProperty,s=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var i=t&&t.prototype instanceof v?t:v,a=Object.create(i.prototype),o=new N(n||[]);return s(a,"_invoke",{value:C(e,r,o)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=h;var p={};function v(){}function m(){}function g(){}var y={};d(y,c,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(T([])));b&&b!==i&&a.call(b,c)&&(y=b);var x=g.prototype=v.prototype=Object.create(y);function k(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,r){function n(i,s,o,c){var u=f(e[i],e,s);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==t(d)&&a.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):r.resolve(d).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,c)}))}c(u.arg)}var i;s(this,"_invoke",{value:function(e,t){function a(){return new r((function(r,i){n(e,t,r,i)}))}return i=i?i.then(a,a):a()}})}function C(e,t,r){var n="suspendedStart";return function(i,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw a;return $()}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var o=j(s,r);if(o){if(o===p)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var i=f(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,p;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function D(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function T(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:$}}function $(){return{value:void 0,done:!0}}return m.prototype=g,s(x,"constructor",{value:g,configurable:!0}),s(g,"constructor",{value:m,configurable:!0}),m.displayName=d(g,l,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,d(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},n.awrap=function(e){return{__await:e}},k(S.prototype),d(S.prototype,u,(function(){return this})),n.AsyncIterator=S,n.async=function(e,t,r,i,a){void 0===a&&(a=Promise);var s=new S(h(e,t,r,i),a);return n.isGeneratorFunction(t)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},k(x),d(x,l,"Generator"),d(x,c,(function(){return this})),d(x,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(D),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return s.type="throw",s.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var o=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(o&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),D(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;D(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:T(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},n}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports}(D);var T=O(),$=T;try{regeneratorRuntime=T}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=T:Function("r","regeneratorRuntime = r")(T)}var L={addressChange:"vanguard.checkout.address.cta.change",addressAdd:"vanguard.checkout.address.cta.add",addressFormTitle:"vanguard.checkout.address.formTitle",addressName:"vanguard.checkout.address.name",addressRequired:"vanguard.checkout.address.required",addressLineFirst:"vanguard.checkout.address.line1",addressLineSecond:"vanguard.checkout.address.line2",addressZipCode:"vanguard.checkout.address.zipcode",addressCityTown:"vanguard.checkout.address.cityTown",addressCountry:"vanguard.checkout.address.country",addressCancel:"vanguard.checkout.address.cta.cancel",addressConfirm:"vanguard.checkout.address.cta.confirm",addressSearch:"vanguard.checkout.address.search",addressAddNew:"vanguard.checkout.address.addNew",addressRemove:"vanguard.cart.overlay.delete",addressTitle:"vanguard.common.nameTitle",addressAdditionalNames:"vanguard.common.name.optionalNames",addressRemoveConfirm:"vanguard.confirmationDialog.message",btnCancel:"vanguard.checkout.address.cancel",btnConfirm:"vanguard.checkout.address.confirm",delete:"vanguard.cart.delete",totalPrice:"vanguard.cart.totalPrice",totalExpressCostDescription:"vanguard.cart.total.expressCostDescription",totalGeneral:"vanguard.cart.total.general",cartEmpty:"vanguard.cart.empty",productNotAvailable:"vanguard.cart.product.notAvailable",configurationNotValid:"vanguard.cart.configuration.notValid",addToWishlist:"vanguard.cart.addToWishlist",uploadFile:"vanguard.cart.uploadFile",edit:"vanguard.cart.edit",duplicate:"vanguard.cart.duplicate",copySuccess:"vanguard.cart.copy.success",copyError:"vanguard.cart.copy.error",overlayMessage:"vanguard.cart.overlay.message",overlayCancel:"vanguard.cart.overlay.cancel",overlayDelete:"vanguard.cart.overlay.delete",positionText:"vanguard.cart.positionText",positionTextToolTip:"vanguard.cart.positionText.toolTip",salesTextToolTip:"vanguard.cart.salesText.toolTip",positionTextError:"vanguard.cart.positionText.error",quantityLimitExceeded:"vanguard.cart.notifications.quantityLimitExceeded",reduction:"vanguard.cart.reduction",summaryClose:"vanguard.cart.summary.close",summaryOpen:"vanguard.cart.summary.open",salesCommentLabel:"vanguard.cart.salesCommentLabel",salesText:"vanguard.cart.salesText",salesTextError:"vanguard.cart.salesText.error",fileUploaded:"vanguard.cart.fileUploaded",fileUploadFailed:"vanguard.cart.notifications.FileUploadFailed",fileDeleted:"vanguard.cart.fileDeleted",fileDeleteFailed:"vanguard.cart.notifications.FileDeleteFailed",emksNewKeySystem:"vanguard.cart.emks.new_key_system",emksExtension:"vanguard.cart.emks.extension",emksReorder:"vanguard.cart.emks.reorder",emksNewSeries:"vanguard.cart.emks.new_series",itemsSalesTotalPrice:"vanguard.checkout.item.sales.totalPrice",totalPriceTooltip:"vanguard.checkout.item.sales.totalPrice.tooltip",itmesSalesQuantity:"vanguard.checkout.item.sales.quantity",masterEANGTIN:"vanguard.checkout.ean",listPrice:"vanguard.checkout.item.sales.listPrice",userPrice:"vanguard.checkout.item.sales.userPrice",discount:"vanguard.checkout.item.sales.discount",netPrice:"vanguard.checkout.entry.sales.netPricePerUnit",committedDelivery:"vanguard.checkout.committedDelivery",ean:"vanguard.cart.ean",quantity:"vanguard.cart.quantity",amountOfSets:"vanguard.cart.emks.newSeries.setAmount",quantityPerSet:"vanguard.cart.quantityPerSet",quantityPerItem:"vanguard.cart.quantityPerItem",items:"vanguard.cart.items",lockPosition:"vanguard.cart.lockPosition",configurationData:"vanguard.cart.configurationData",createWishlistConfirmation:"vanguard.common.notifications.createWishlist.confirmation",createWishlistError:"vanguard.common.notifications.createWishlist.error",editWishlistSuccess:"vanguard.wishlist.edit.success",editWishlistError:"vanguard.wishlist.edit.error",wishlistCreateTitle:"vanguard.common.wishlist.create.title",wishlistName:"vanguard.common.wishlist.name",wishlistPublic:"vanguard.common.wishlist.public",wishlistPrivate:"vanguard.common.wishlist.private",wishlistOptions:"vanguard.common.wishlist.options",wishlistDescription:"vanguard.common.wishlist.description",wishlistCancel:"vanguard.common.wishlist.cancel",wishlistCreate:"vanguard.common.wishlist.create",wishlistNew:"vanguard.common.wishlist.new",wishlistConfirm:"vanguard.common.wishlist.confirm",wishlistPublicGeneric:"vanguard.{packageName}.wishlist.public",wishlistPrivateGeneric:"vanguard.{packageName}.wishlist.private",wishlistNameGeneric:"vanguard.{packageName}.wishlist.name",wishlistDescriptionGeneric:"vanguard.{packageName}.wishlist.description",wishlistCancelGeneric:"vanguard.{packageName}.wishlist.cancel",wishlistSubmitGeneric:"vanguard.{packageName}.wishlist.{mode}",wishlistCopyGeneric:"vanguard.{packageName}.copy",wishlistMoveGeneric:"vanguard.{packageName}.move",wishlistUpdateSuccessGeneric:"vanguard.{packageName}.{mode}ToWishlist.success",wishlistUpdateErrorGeneric:"vanguard.{packageName}.{mode}ToWishlist.error",namePlaceholderPerson:"vanguard.common.name.person",namePlaceholderCompany:"vanguard.common.name.company"},M={};!function(e,t){e.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",s="hour",o="day",c="week",u="month",l="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},g=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:g,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+g(n,2,"0")+":"+g(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,u),a=r-i<0,s=t.clone().add(n+(a?-1:1),u);return+(-(n+(r-i)/(a?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:c,d:o,D:h,h:s,m:a,s:i,ms:n,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},w="en",b={};b[w]=m;var x=function(e){return e instanceof j},k=function e(t,r,n){var i;if(!t)return w;if("string"==typeof t){var a=t.toLowerCase();b[a]&&(i=a),r&&(b[a]=r,i=a);var s=t.split("-");if(!i&&s.length>1)return e(s[0])}else{var o=t.name;b[o]=t,i=o}return!n&&i&&(w=i),i||!n&&w},S=function(e,t){if(x(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new j(r)},C=y;C.l=k,C.i=x,C.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var j=function(){function m(e){this.$L=k(e.locale,null,!0),this.parse(e)}var g=m.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(C.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return C},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},g.isAfter=function(e,t){return S(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<S(e)},g.$g=function(e,t,r){return C.u(e)?this[t]:this.set(r,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var r=this,n=!!C.u(t)||t,l=C.p(e),f=function(e,t){var i=C.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(o)},p=function(e,t){return C.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},v=this.$W,m=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case d:return n?f(1,0):f(31,11);case u:return n?f(1,m):f(0,m+1);case c:var w=this.$locale().weekStart||0,b=(v<w?v+7:v)-w;return f(n?g-b:g+(6-b),m);case o:case h:return p(y+"Hours",0);case s:return p(y+"Minutes",1);case a:return p(y+"Seconds",2);case i:return p(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var r,c=C.p(e),l="set"+(this.$u?"UTC":""),f=(r={},r[o]=l+"Date",r[h]=l+"Date",r[u]=l+"Month",r[d]=l+"FullYear",r[s]=l+"Hours",r[a]=l+"Minutes",r[i]=l+"Seconds",r[n]=l+"Milliseconds",r)[c],p=c===o?this.$D+(t-this.$W):t;if(c===u||c===d){var v=this.clone().set(h,1);v.$d[f](p),v.init(),this.$d=v.set(h,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[C.p(e)]()},g.add=function(n,l){var h,f=this;n=Number(n);var p=C.p(l),v=function(e){var t=S(f);return C.w(t.date(t.date()+Math.round(e*n)),f)};if(p===u)return this.set(u,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===o)return v(1);if(p===c)return v(7);var m=(h={},h[a]=t,h[s]=r,h[i]=e,h)[p]||1,g=this.$d.getTime()+n*m;return C.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=C.z(this),a=this.$H,s=this.$m,o=this.$M,c=r.weekdays,u=r.months,l=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},d=function(e){return C.s(a%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:C.s(o+1,2,"0"),MMM:l(r.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:C.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,c,2),ddd:l(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:C.s(a,2,"0"),h:d(1),hh:d(2),a:h(a,s,!0),A:h(a,s,!1),m:String(s),mm:C.s(s,2,"0"),s:String(this.$s),ss:C.s(this.$s,2,"0"),SSS:C.s(this.$ms,3,"0"),Z:i};return n.replace(v,(function(e,t){return t||p[e]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,h,f){var p,v=C.p(h),m=S(n),g=(m.utcOffset()-this.utcOffset())*t,y=this-m,w=C.m(this,m);return w=(p={},p[d]=w/12,p[u]=w,p[l]=w/3,p[c]=(y-g)/6048e5,p[o]=(y-g)/864e5,p[s]=y/r,p[a]=y/t,p[i]=y/e,p)[v]||y,f?w:C.a(w)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return b[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=k(e,t,!0);return n&&(r.$L=n),r},g.clone=function(){return C.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},m}(),O=j.prototype;return S.prototype=O,[["$ms",n],["$s",i],["$m",a],["$H",s],["$W",o],["$M",u],["$y",d],["$D",h]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,j,S),e.$i=!0),S},S.locale=k,S.isDayjs=x,S.unix=function(e){return S(1e3*e)},S.en=b[w],S.Ls=b,S.p={},S}()}({get exports(){return M},set exports(e){M=e}});var E,P,W=M;!function(e){e.Copy="copy",e.Move="move"}(E||(E={})),function(e){e.private="private",e.public="public"}(P||(P={}));var _=function(e){var r=e.privacy,i=e.isLoading,a=e.packageName,s=void 0===a?"common":a,o=e.privacySwitchDisabled,c=e.mode,l=void 0===c?"create":c,d=e.wishlist,h=e.setPrivacy,f=e.onClose,p=e.onSubmit,v=S().t,m=t.useState(null==d?void 0:d.name),g=m[0],y=m[1],w=t.useState(null==d?void 0:d.description),b=w[0],x=w[1];return u.jsxs("div",{"data-testid":"createWishlist",children:[u.jsxs("div",{className:"space-y-1",children:[u.jsx(n.ToggleSwitch,{testid:"optionsSwitch",disabled:o,leftOption:{key:P.private,title:v(L.wishlistPrivateGeneric.replace("{packageName}",s))},rightOption:{key:P.public,title:v(L.wishlistPublicGeneric.replace("{packageName}",s))},selectedKey:r,onChange:h}),u.jsx(n.TextInput,{label:v(L.wishlistNameGeneric.replace("{packageName}",s)),placeholder:v(L.wishlistNameGeneric.replace("{packageName}",s)),className:"flex-grow",name:"vgWTitle",value:g,onChange:function(e){return y(e.target.value)},testid:"nameInput"}),u.jsx(n.TextInput,{label:v(L.wishlistDescriptionGeneric.replace("{packageName}",s)),rows:5,name:"vgWDesc",testid:"descriptionInput",multiline:!0,placeholder:v(L.wishlistDescriptionGeneric.replace("{packageName}",s)),value:b,onChange:function(e){return x(e.target.value)}})]}),u.jsxs("div",{className:"flex flex-row mt-8 space-x-4 justify-end",children:[u.jsx(n.Button,{variant:"outlined",isDisabled:i,onClick:f,testid:"cancelButton",children:v(L.wishlistCancelGeneric.replace("{packageName}",s))}),u.jsx(n.Button,{isLoading:i,onClick:function(){return p(g,b)},testid:"submitButton",children:v(L.wishlistSubmitGeneric.replace("{packageName}",s).replace("{mode}",l))})]})]})},A=function(e){var r=e.packageName,i=e.mode,a=e.wishlists,s=e.isLoading,o=e.onChangeMode,c=e.onCreateWishlist,l=e.onClose,d=e.onAddToWishlist,h=S().t,f=t.useState(""),p=f[0],v=f[1];return u.jsxs("div",{"data-testid":"selectWishlist",children:[u.jsxs("div",{className:"space-y-5",children:[u.jsx(n.ToggleSwitch,{testid:"actionModeSwitch",leftOption:{key:E.Copy,title:h(L.wishlistCopyGeneric.replace("{packageName}",r))},rightOption:{key:E.Move,title:h(L.wishlistMoveGeneric.replace("{packageName}",r))},selectedKey:i,onChange:o}),u.jsx(n.Select,{options:a,placeholder:h(L.wishlistOptions),value:p,onChange:function(e){return v(e.target.value)},disabled:s,children:u.jsx(n.Button,{onClick:c,"data-testid":"addButton",variant:"text",isFullWidth:!0,iconType:"plus",testid:"addButton",children:h(L.wishlistNew)})})]}),u.jsxs("div",{className:"flex flex-row mt-8 space-x-4 justify-end",children:[u.jsx(n.Button,{isDisabled:s,isLoading:s,variant:"outlined",onClick:l,testid:"cancelButton",children:h(L.wishlistCancel)}),u.jsx(n.Button,{isLoading:s,isDisabled:!p,onClick:function(){return d(p)},testid:"confirmButton",children:h(L.wishlistConfirm)})]})]})},I=function(r){var i=r.isOpen,a=r.onClose,s=r.packageName,o=r.isCreateWishlist,c=r.copyDisabled,l=r.populateData,d=r.wishlist,h=r.mode,f=void 0===h?"create":h,p=t.useState(P.private),v=p[0],m=p[1];t.useEffect((function(){m(null!=d&&d.publicAccess?P.public:P.private)}),[null==d?void 0:d.publicAccess]);var g=S(),y=g.t,w=g.cartCode,b=g.savedItemListCode,x=function(r){var n=r.packageName,i=r.itemsListCode,a=r.populateData,s=r.onClose,o=r.copyDisabled,c=S().t,u=e.store.hooks.useNotifications().notify,l=t.useState(!1),d=l[0],h=l[1],f=t.useState(o?E.Move:E.Copy),p=f[0],v=f[1],m=e.store.api.wishlist.useGetWishlistsQuery({ekitSavedItemListOption:"BASIC"}).data,g=e.store.api.wishlist.useCreateWishlistMutation(),y=g[0],w=g[1].isLoading,b=e.store.api.wishlist.useUpdateWishlistItemMutation(),x=b[0],k=b[1].isLoading,C=e.store.api.cart.useCopyEntriesToWishlistMutation(),O=C[0],D=C[1].isLoading,N=e.store.api.cart.useMoveEntriesToWishlistMutation(),T=N[0],M=N[1].isLoading,P=e.store.api.wishlist.useCopyEntriesMutation()[0],W=t.useCallback((function(e,t){var r=e?O:T,s=a(),o=s.entryNumbers,c=s.headPositions;return"cart"===n?r({code:t,entryNumbers:o,headPositions:c,itemsListCode:i}):"wishlist"===n?P({deleteFromSource:!e,targetCode:t,sourceCode:i,entryNumbers:o,headPositions:c}):void 0}),[O,i,T,a,n,P]),_=t.useCallback(function(){var e=j($.mark((function e(t){var r;return $.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p===E.Copy,e.prev=1,e.next=4,W(r,t).unwrap();case 4:u("success",c(L.wishlistUpdateSuccessGeneric.replace("{packageName}",n).replace("{mode}",p)),r?n+".copyToWishlistSuccess":n+".moveToWishlistSuccess"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),u("error",c(L.wishlistUpdateErrorGeneric.replace("{packageName}",n).replace("{mode}",p)),r?n+".copyToWishlistError":n+".moveToWishlistError");case 10:return e.prev=10,h(!1),s(),e.finish(10);case 14:case"end":return e.stop()}}),e,null,[[1,7,10,14]])})));return function(t){return e.apply(this,arguments)}}(),[u,W,s,n,c,p]),A=t.useCallback(function(){var e=j($.mark((function e(t,r){var i,a;return $.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y(t).unwrap();case 3:if(i=e.sent,a=i.code,u("success",c(L.createWishlistConfirmation),n+".createWishlistSuccess"),!r){e.next=9;break}return e.next=9,_(a);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),u("error",c(L.createWishlistError),n+".createWishlistError");case 14:return e.prev=14,h(!1),s(),e.finish(14);case 18:case"end":return e.stop()}}),e,null,[[0,11,14,18]])})));return function(t,r){return e.apply(this,arguments)}}(),[u,_,y,s,c,n]),I=function(){var e=j($.mark((function e(t,r,n,i){return $.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x({savedItemListCode:t,name:r,description:n,publicAccess:i}).unwrap();case 3:u("success",c(L.editWishlistSuccess),"wishlistDetails.editSuccess"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),u("error",c(L.editWishlistError),"wishlistDetails.editError");case 9:return e.prev=9,s(),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t,r,n,i){return e.apply(this,arguments)}}();return{isLoading:w||k||D||M,isCreating:d,addMode:p,setAddMode:v,addToWishlist:_,createWishlist:A,editWishlist:I,wishlists:((null==m?void 0:m.results)||[]).map((function(e){var t=e.code;return{label:e.name,value:t,icon:e.publicAccess?"openedLock":"closedLock"}})),onCreateWishlist:function(){return h(!0)},onCancelCreateWishlist:function(){return h(!1)}}}({packageName:s,itemsListCode:null!=b?b:w,populateData:l,onClose:a,copyDisabled:c}),k=x.createWishlist,C=x.editWishlist,O=x.addToWishlist,D=x.onCancelCreateWishlist,N=x.isCreating,T=x.onCreateWishlist,M=x.wishlists,W=x.isLoading,I=x.setAddMode,F=x.addMode,G=function(){D(),a()};return u.jsx(n.Dialog,{title:y(N?"vanguard.common.wishlist.create.title":"vanguard.common.wishlist.header"),isOpen:i,onClose:G,testid:"wishlistDialog",children:o||N?u.jsx(_,{wishlist:d,mode:f,privacySwitchDisabled:null==d?void 0:d.publicAccess,privacy:v,isLoading:W,setPrivacy:m,onClose:G,onSubmit:function(e,t){return"create"===f?k({name:e,description:t,publicAccess:v===P.public},!o):C(d.code,e,t,v===P.public)}}):u.jsx(A,{packageName:s,mode:F,wishlists:M,isLoading:W,onChangeMode:I,onCreateWishlist:T,onClose:G,onAddToWishlist:function(e){return O(e)}})})},F=function(r){var a=r.fixed,s=void 0===a||a,o=e.store.hooks.useIsFetching(),c=t.useState(!1),l=c[0],d=c[1];return t.useEffect((function(){var e=function(){return d(!0)};return addEventListener("beforeunload",e),function(){return removeEventListener("beforeunload",e)}}),[]),(o||l)&&u.jsx("div",{className:i("w-full h-full flex items-center justify-center top-0 left-0 z-10 backdrop-filter backdrop-blur",s?"fixed":"absolute"),"data-testid":"overlayLoader",children:u.jsx(n.Icon,{size:"xl",type:"loader"})})},G="vanguard.keysystem.keyplan.pagination.gotoPage",U="vanguard.keysystem.keyplan.pagination.pageOf",B="vanguard.keysystem.keyplan.pagination.show",q="vanguard.keysystem.keyplan.filters.all",H="vanguard.keysystem.keyplan.filters.searchNRecords",R="vanguard.wishlist.delete",Y="vanguard.wishlist.delete.confirmation",V="vanguard.wishlist.delete.confirm",z="vanguard.wishlist.delete.cancel",J="vanguard.wishlist.delete.success",Q="vanguard.commons.delete.error",Z="vanguard.wishlist.edit",K="vanguard.wishlists.privacy",X="vanguard.wishlists.privacy.private",ee="vanguard.wishlists.privacy.shared",te="vanguard.wishlistOverview.noWishlistMessage",re="vanguard.wishlist.createNewWishlist",ne="vanguard.wishlist.overviewPageHeader",ie=function(e){var t=e.isVisible,r=e.onClose,i=e.onConfirm,a=S().t;return u.jsxs(n.Dialog,{title:a(R),isOpen:t,onClose:r,children:[u.jsx(n.Text,{children:a(Y)}),u.jsxs("div",{className:"flex flex-row mt-8 space-x-4 justify-end",children:[u.jsx(n.Button,{variant:"outlined",onClick:r,children:a(z)}),u.jsx(n.Button,{onClick:i,children:a(V)})]})]})},ae=function(r){var i=r.showDelete,a=r.wishlistCode,s=r.onEdit,o=S().t,c=function(){var r=S().t,n=e.store.hooks.useNotifications().notify,i=t.useState(!1),a=i[0],s=i[1],o=e.store.api.wishlist.useDeleteWishlistMutation()[0],c=function(){var e=j($.mark((function e(t){return $.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!1),e.prev=1,e.next=4,o({savedItemListCode:t}).unwrap();case 4:n("success",r(J),"wishlistsOverview.deleteSuccess"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n("error",r(Q),"wishlistsOverview.deleteError");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return{isDeleteConfirmVisible:a,setDeleteConfirmVisible:s,dispatchWishlistDelete:c}}(),l=c.isDeleteConfirmVisible,d=c.setDeleteConfirmVisible,h=c.dispatchWishlistDelete;return u.jsxs(u.Fragment,{children:[u.jsxs(n.ActionsMenu,{transparent:!0,children:[u.jsx(n.ActionsMenu.ActionItem,{label:o(Z),icon:"edit",onClick:s,testid:"edit"}),i&&u.jsx(n.ActionsMenu.ActionItem,{label:o(R),icon:"trash",color:"secondary",onClick:function(){return d(!0)},testid:"delete"})]}),u.jsx(ie,{isVisible:l,onClose:function(){return d(!1)},onConfirm:function(){return h(a)}})]})},se=function(){var r,i=t.useState(!1),a=i[0],s=i[1],o=t.useState(!1),c=o[0],l=o[1],d=t.useState("create"),h=d[0],f=d[1],p=t.useState(),v=p[0],m=p[1],y=function(r){var i,a,s=S().t,o=e.store.hooks.useUser(),c=e.store.api.wishlist.useGetWishlistsQuery({ekitSavedItemListOption:"FULL"}),l=c.data,d=c.isFetching;return{table:{data:null==l||null==(i=l.results)?void 0:i.map((function(e){var t=e.name,r=e.description,n=e.totalItems,i=e.modifiedTime,a=e.savedBy,o=e.code,c=e.publicAccess;return{name:t,description:r,totalItems:n,updated:W(new Date(i)).format("DD.MM.YYYY"),by:null==a?void 0:a.name,code:o,creatorId:null==a?void 0:a.uid,publicAccess:c,privacy:s(c?ee:X)}})),columns:t.useMemo((function(){return[{Header:s(K),accessor:"privacy",isSelectFilter:!0,width:100,cellElement:function(e){var t=e.row.original.publicAccess;return u.jsx(n.Icon,{type:t?"openedLock":"closedLock",color:"black",className:"pl-2"})}},{Header:"Name",accessor:"name",isSelectFilter:!0,width:200,cellElement:function(e){var t=e.row.original,r=t.code,i=t.name;return u.jsx(n.Link,{href:g("/saved-item-list/"+r,"redirect"),testid:"openWishlistLink",size:"sm",children:i})}},{Header:"Description",accessor:"description",width:300,isSelectFilter:!0},{Header:"Items",accessor:"totalItems",isSelectFilter:!0,disableFilter:!0,width:50},{Header:"Updated",accessor:"updated",disableFilter:!0,width:80},{Header:"By",accessor:"by",disableFilter:!0},{Header:"",accessor:"actions",disableFilter:!0,disableSorting:!0,width:50,cellElement:function(e){var t=e.row.original,n=t.code,i=t.creatorId,a=t.name,s=t.description,c=t.publicAccess;return u.jsx("div",{className:"flex items-center justify-center h-full w-full",children:u.jsx(ae,{showDelete:o.service.currentUserId===i,wishlistCode:n,onEdit:function(){return r({code:n,name:a,description:s,publicAccess:c})}})})}}]}),[r,s,o.service.currentUserId])},isEmpty:!(d||null!=l&&null!=(a=l.results)&&a.length),isFetching:d}}((function(e){l(!0),f("edit"),m(e)})),w=y.table,b=y.isEmpty,x=y.isFetching,k=S().t,C=t.useMemo((function(){return{gotoPage:k(G),pageOf:k(U),show:k(B),all:k(q),searchNRecords:k(H)}}),[k]);return t.useEffect((function(){s(!1)}),[w.data]),u.jsxs("div",{className:"space-y-5","data-testid":"wishlistsOverview",children:[u.jsx(n.Text,{type:"h3",size:"xl",color:"primary",testid:"header",children:k(ne)}),u.jsx("div",{className:"text-right",children:u.jsx(n.Button,{onClick:function(){l(!0),f("create"),m(null)},children:k(re)})}),!x&&b&&u.jsx(n.Text,{align:"center",children:k(te)}),(null==(r=w.data)?void 0:r.length)>0&&u.jsx(n.DataTable,{data:w.data,columns:w.columns,skipPageReset:a,translations:C,updateData:function(){}}),u.jsx(I,{onClose:function(){return l(!1)},wishlist:v,packageName:"wishlist",mode:h,isCreateWishlist:!0,isOpen:c}),u.jsx(F,{})]})};!function(t,n){var i='[data-react-app="'+n+'"]:not([data-rendered])',a=document.querySelector(i);if(!a)throw new Error(i+" is missing");var s=document.createElement("div");a.appendChild(s),a.setAttribute("data-rendered","true"),r.render(function(t,r){return u.jsx(e.StoreProvider,{children:u.jsx(f,{appId:r,children:u.jsx(v,{children:u.jsx(t,{})})})})}(t,n),s)}((function(){return u.jsx(se,{})}),"wishlists-overview")}));

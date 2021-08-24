!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("react"),require("react-dom"),require("@dormakaba/vanguard"),require("classnames")):"function"==typeof define&&define.amd?define(["react","react-dom","@dormakaba/vanguard","classnames"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).dormakaba.vendorReact["vendor/react"],e.dormakaba.vendorReact["vendor/react-dom"],e.DormakabaVanguard,e.dormakaba.vendorReact["vendor/classnames"])}(this,(function(e,t,n,r){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(e),u=o(r),c=e.createContext(null),i=function(t){var n=t.appId,r=t.children,o=t.defaultValue,u=void 0===o?{}:o,i=e.useMemo((function(){if(!n)return u;var e='[data-react-app="'+n+'"]',t=document.querySelector(e);if(!t)throw new Error(e+" is missing");var r=t.querySelector("script");return null!=r&&r.innerHTML?JSON.parse(r.innerHTML):u}),[n,u]);return a.default.createElement(c.Provider,{value:i},r)},s=function(){return e.useContext(c)};function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){(function(e){var t={errors:[{errorId:String(e.status),message:e.responseText||e.statusText,stackTrace:""}]};try{var n=JSON.parse(e.responseText);return n.errors[0].message?n:t}catch(e){return t}})(e).errors.forEach((function(e){var t=[e.message,e.technicalMksMessage].filter(Boolean);console.log(e.errorId,t.join("<br>"))}))}var h=function(){var e=this;this.cache={},this.cacheClearListener=[],this.lastCacheClear=new Date,this.addEntry=function(t,n){e.cache[t]=n},this.hasEntry=function(t){return Object.keys(e.cache).some((function(e){return e===t}))},this.getEntry=function(t){return e.cache[t]},this.clearCache=function(){e.cache={},e.lastCacheClear=new Date,setTimeout((function(){e.cacheClearListener.forEach((function(t){return t(e.lastCacheClear)}))}))},this.subscribeToCacheClear=function(t){e.cacheClearListener.push(t)},this.unsubscribeFromCacheClear=function(t){var n=e.cacheClearListener.indexOf(t);n>-1&&e.cacheClearListener.splice(n,1)}},p=new(function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).supportedStatusCodes=[401],t.supportedErrorIds=["account.error.unauthorized.user"],t.getApiErrorResponse=function(e){try{return JSON.parse(e.responseText)}catch(t){console.warn(new Error("Could not parse authentication error: "+e.status+" "+JSON.stringify(e.responseText)))}},t}l(t,e);var n=t.prototype;return n.supports=function(e){return this.supportedStatusCodes.some((function(t){return e.status===t}))},n.handleRequestInternal=function(e,t){var n=this.getApiErrorResponse(e);if(n&&(n&&this.supportedErrorIds.some((function(e){return e===n.errorId}))))return void window.location.reload();return Promise.reject(e)},t}(function(){function e(e){var t=(void 0===e?{overlayClosable:!1}:e).overlayClosable;this.overlayClosable=void 0,this.getApiErrorResponse=function(e){var t;try{return!(t=JSON.parse(e.responseText))&&!t.errors&&t.errors.length<=0&&console.warn(new Error("Could not parse authentication error: "+e.status+" "+JSON.stringify(e.responseText))),t.errors[0]}catch(t){console.warn(new Error("Could not parse authentication error: "+e.status+" "+JSON.stringify(e.responseText)))}},this.overlayClosable=t}return e.prototype.handleRequest=function(e){return this.supports(e)?this.handleRequestInternal(e,this.overlayClosable):Promise.reject(e)},e}())),g=function e(t){var n=this,r=t.url,o=t.cacheEnabled,a=void 0!==o&&o,u=t.options;this.cache=void 0,this.url=void 0,this.cacheEnabled=void 0,this.options=void 0,this.ajax=function(e){var t=e.keys,r=e.body,o=e.headerOptions,a=e.errorInterceptors,u=e.omitErrorMessage,c=void 0!==u&&u,i=Object.assign({},n.getOptions(t),{headerOptions:o}),s=n.doRequestInternal(t,r);return s.catch((function(t){return a?a.reduce((function(t,r){return t.catch((function(t){var o,a;return null==r||null==(o=r.handleRequest(t))||null==(a=o.then((function(){return n.ajax(e)})))?void 0:a.catch((function(e){return Promise.reject(e)}))}))}),Promise.reject(t)):s})).catch((function(e){return void 0===p.handleRequest(e)?s:Promise.reject(e)})).catch((function(e){return c||f(e),i.afterError&&i.afterError(e,n),s})).then((function(e){return i.afterSuccess&&i.afterSuccess(e),e}))},this.generateHash=function(e){var t=0;if(0===e.length)return t.toString();for(var n=0;n<e.length;n++){t=(t<<5)-t+e.charCodeAt(n),t&=t}return t.toString()},this.getCacheEntryKey=function(e){return n.generateHash(n.getHeader(e)+" : "+n.getUrl(e))},this.getUrl=function(e){return n.url(e)},this.getOptions=function(e){return n.options(e)},this.getHeader=function(t){var r=e.createHeaders(n.getOptions(t).headerOptions),o=JSON.stringify(r).split(/\{([^\ "}]+)\}/);return r?o.map((function(e,t){return t%2?r[e]:e})).join(""):o.join("")},this.onCacheClear=function(e){n.cache&&n.cache.subscribeToCacheClear(e)},this.offCacheClear=function(e){n.cache&&n.cache.unsubscribeFromCacheClear(e)},this.clearCache=function(){n.cache&&n.cache.clearCache()},this.doRequestInternal=function(e,t){var r,o=n.getCacheEntryKey(e);if(n.cacheEnabled&&null!=(r=n.cache)&&r.hasEntry(o))return n.cache.getEntry(o);var a=n.request(e,t);return n.cacheEnabled&&a.then((function(e){var t;return null==(t=n.cache)?void 0:t.addEntry(o,a)})).catch((function(e){return console.warn("Omit cache entry",e)})),a},this.url=r,this.cacheEnabled=a||!1,this.options=u||function(){return{}},this.cacheEnabled&&(this.cache=new h)};function v(e){return JSON.parse(e,(function(e,t){return"string"==typeof t&&/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(\.\d{1,3})?([+-][0-2]\d:[0-5]\d|Z)$/.test(t)?new Date(t):t}))}g.createHeaders=function(e){var t=e||{};return t={defaultContentTypeJsonUTF8:void 0===t.defaultContentTypeJsonUTF8||t.defaultContentTypeJsonUTF8,customHeaders:t.customHeaders||{},authToken:t.authToken,requestedWith:t.requestedWith||"XMLHttpRequest"},Object.assign({},t.defaultContentTypeJsonUTF8&&{"Content-Type":"application/json; charset=UTF-8"},t.authToken&&{Authorization:"Bearer "+t.authToken},t.requestedWith&&{"X-Requested-With":t.requestedWith},t.customHeaders&&t.customHeaders)};var m=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).request=function(e){return new Promise((function(n,r){var o=new XMLHttpRequest;o.open("GET",t.getUrl(e),!0),o.timeout=t.getOptions(e).timeout||18e4;var a=JSON.parse(t.getHeader(e));Object.keys(a).forEach((function(e){o.setRequestHeader(e,a[e])})),o.onload=function(){var e,t=-1!==(o.getResponseHeader("Content-Type")||"").indexOf("html");if(o.status<200||o.status>=400)return r(o);if(t)return n(o.responseText);try{e=o.responseText?v(o.responseText):void 0}catch(e){return r(o)}n(e)},o.onerror=function(){r(o)},o.send();var u=t.getAjaxSignal(e);u&&(u.onabort=function(){console.log("GetEndpoint: request aborted by user "+t.getUrl(e)),o.abort(),n(void 0)})}))},t.getAjaxSignal=function(e){return e.signal},t}return l(t,e),t}(g);m.create=function(e){var t=e.url,n=e.cacheEnabled,r=e.options;return new m({url:t,cacheEnabled:n,options:r})};var b=m.create({url:function(e){return e.encodedContextPath+"/login/token"},cacheEnabled:!1}),C=function(){try{var e,t;return JSON.parse(null!=(e=null==(t=document.querySelector("#terrific-config"))?void 0:t.innerHTML)?e:"{}")}catch(e){throw new Error("Could not read terrific-config from #terrific-config "+e)}},y=function(){var e=document.getElementById("user-service-config");return JSON.parse((null==e?void 0:e.innerHTML)||"{}")},E=function(){var e=document.documentElement.getAttribute("lang")||"";if(!e)throw new Error("html[lang] is missing");return e},S=function(){var t=function(){var t=e.useState(C),n=t[0],r=t[1];return{config:n,reload:e.useCallback((function(){return r(C())}),[r])}}().config,n=e.useState(y),r=n[0],o=n[1],a=e.useState(E),u=a[0],c=a[1],i=function(){var t=e.useCallback((function(e,t){var n={meta:{createdAt:Date.now()},value:t};return sessionStorage.setItem(e,JSON.stringify(n)),n}),[]),n=e.useCallback((function(e){return JSON.parse(sessionStorage.getItem(e))}),[]),r=e.useCallback((function(e){return sessionStorage.removeItem(e)}),[]);return{clear:e.useCallback((function(){return sessionStorage.clear()}),[]),setItem:t,getItem:n,removeItem:r}}(),s=i.setItem,l=i.getItem,d=i.removeItem,f=e.useState(),h=f[0],p=f[1],g=e.useCallback((function(){o(y()),c(E())}),[o,c]),v=e.useCallback((function(e,t){"loggedIn"===e&&t?p(s(r.currentUserId,t)):(d(r.currentUserId),p(void 0))}),[r,d,s,p]);return e.useEffect((function(){return r.currentUserId&&p(l(r.currentUserId))}),[r,l,p]),e.useEffect((function(){var e,n=Date.now()-(null==h||null==(e=h.meta)?void 0:e.createdAt);(null==h||!h.value||n>=36e5)&&b.ajax({keys:{encodedContextPath:t.encodedContextPath}}).then((function(e){return v("loggedIn",e)}),(function(){return v("loggedOut")}))}),[t,h,v]),{info:r,language:u,token:null==h?void 0:h.value,reload:g}},k="{undefined}",w={baseSiteId:"hybrisStoreName",userId:"currentUserId"},O=function(e,t){return void 0===t&&(t=[]),e.replaceAll("{}",function(e){var t=0;return function(n){return e[t++]||n}}(t))},T=function(){try{var e,t;return JSON.parse(null!=(e=null==(t=document.querySelector("#terrific-config"))?void 0:t.innerHTML)?e:"{}")}catch(e){throw new Error("Could not read terrific-config from #terrific-config "+e)}},q=m.create({url:function(e){return e.encodedContextPath+"/login/token"},cacheEnabled:!1}),I="token",x=function(){var e=document.getElementById("user-service-config");return JSON.parse((null==e?void 0:e.innerHTML)||"{}")},j=function(){var e=document.documentElement.getAttribute("lang")||"";if(!e)throw new Error("html[lang] is missing");return e},N=function(){var t=function(){var t=e.useState(T),n=t[0],r=t[1];return{config:n,reload:e.useCallback((function(){return r(T())}),[r])}}().config,n=e.useState(x),r=n[0],o=n[1],a=e.useState(j),u=a[0],c=a[1],i=e.useState(sessionStorage.getItem(I)||void 0),s=i[0],l=i[1],d=e.useCallback((function(){o(x()),c(j())}),[o,c]),f=e.useCallback((function(e,t){"loggedIn"===e&&t?(l(t),sessionStorage.setItem(I,t)):(l(void 0),sessionStorage.removeItem(I))}),[l]);return e.useEffect((function(){s||q.ajax({keys:{encodedContextPath:t.encodedContextPath}}).then((function(e){return f("loggedIn",e)}),(function(){return f("loggedOut")}))}),[t,s,f]),{info:r,language:u,token:s,reload:d}},H=function(){var t=N(),n=t.info,r=t.token,o=s(),a=o.productCode,u=o.redirectionURL,c=function(t,n){void 0===t&&(t=""),void 0===n&&(n={});var r=e.useState({get:{data:void 0,isLoading:!1},post:{data:void 0,isLoading:!1},put:{data:void 0,isLoading:!1},patch:{data:void 0,isLoading:!1}}),o=r[0],a=r[1],u=S(),c=u.info,i=u.token,s=e.useMemo((function(){var e=Object.assign({},n,c),r="",o=function(e){var t=/[{}]/g;return(e.match(/{([\w\d]+)}/g)||[]).map((function(e){return e.replace(t,"")}))}(t),a=new RegExp(k);return o.forEach((function(n){var o;r=r||t;var a=null!=(o=e[w[n]||n])?o:k;r=r.replace("{"+n+"}",a)})),a.test(r)?"":r}),[c,t,n]),l=e.useCallback((function(e,t){return a((function(n){var r;return Object.assign({},n,((r={})[e]=Object.assign({},n[e],{isLoading:t}),r))}))}),[a]),d=e.useCallback((function(e,t){return a((function(n){var r;return Object.assign({},n,((r={})[e]=Object.assign({},n[e],{data:t}),r))}))}),[a]),f=e.useCallback((function(e,t){if(void 0===t&&(t={}),!s||!i)return Promise.reject().catch((function(){}));var n=/get|options/.test(e),r=n?void 0:t,o=new URLSearchParams;Object.keys(t).forEach((function(e){return o.append(e,t[e])}));var a=o.toString(),u=n&&a?s+"?"+a:s,c={Authorization:"Bearer "+i};return n||(c["Content-Type"]="application/json"),l(e,!0),fetch(u,{method:e,headers:c,body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(t){return d(e,t)})).catch((function(t){return d(e,t)})).finally((function(){return l(e,!1)}))}),[s,i,d,l]),h=e.useCallback((function(e){return f("get",e)}),[f]),p=e.useCallback((function(e){return f("post",e)}),[f]),g=e.useCallback((function(e){return f("put",e)}),[f]);return{responses:o,get:h,post:p,patch:e.useCallback((function(e){return f("patch",e)}),[f]),put:g}}("/dormakabacommercewebservices/v2-stateful/{baseSiteId}/users/{userId}/my-account/product-questions/{productCode}?rootB2BUnit={rootB2BUnit}",e.useMemo((function(){return{productCode:a,rootB2Bunit:n.rootB2BUnit}}),[r,n])).post;return{postProductQuestionEvent:e.useCallback((function(e){return c(e).then((function(){window.location.href=u}))}),[c])}},J=["label","value","multiline","rows","onChange","placeholder"],R=function(e){var t=e.label,r=e.value,o=e.multiline,c=e.rows,i=e.onChange,s=e.placeholder;return function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n])}(e,J),a.default.createElement(n.Box,{className:u.default("pb-1","mb-4")},a.default.createElement(n.TextInput,{fullWidth:!0,label:t,value:r,multiline:o,rows:c,onChange:i,placeholder:s}))},L=function(t){var r,o=(r=s().translations,{t:e.useCallback((function(e,t){void 0===t&&(t="");for(var n=r[e]||t,o=arguments.length,a=new Array(o>2?o-2:0),u=2;u<o;u++)a[u-2]=arguments[u];return a.length&&(n=O(n,a)),n}),[r])}).t,u=s(),c=u.unit,i=u.customer,l=u.productCode,d=u.productName,f=u.emailAddress,h=H().postProductQuestionEvent,p=e.useState(!1),g=p[0],v=p[1],m=e.useState(""),b=m[0],C=m[1],y={unit:c,customer:i,productCode:l,productName:d,emailAddress:f,queryField:b};return a.default.createElement("form",null,a.default.createElement(R,{label:o("vanguard.product-questions.customer"),value:i}),a.default.createElement(R,{label:o("vanguard.product-questions.productCode"),value:l}),a.default.createElement(R,{label:o("vanguard.product-questions.productName"),value:d}),a.default.createElement(R,{label:o("vanguard.product-questions.queryField"),multiline:!0,rows:5,onChange:function(e){return function(e){C(e.target.value),v(!!e.target.value)}(e)},placeholder:o("vanguard.product-questions.queryField.placeholder")}),a.default.createElement(n.Box,{className:"flex flex-row mt-8 mb-8 justify-between"},a.default.createElement(n.Button,{onClick:function(){return h(y)},disabled:!g},o("vanguard.product-questions.submit"))))},U=function(){return a.default.createElement(L,null)},A=function(){return a.default.createElement(i,{appId:"product-questions"},a.default.createElement(U,null))},P=document.querySelector('[data-react-app="product-questions"]')||function(e){throw new Error(e)}('[data-react-app="product-questions"] is missing'),B=document.createElement("div");P.appendChild(B),t.render(e.createElement(A),B)}));

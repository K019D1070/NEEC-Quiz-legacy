(()=>{var t={553:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),a=new O(n||[]);return o._invoke=function(t,e,r){var n=f;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return _()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function g(){}function m(){}function y(){}var w={};u(w,o,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(N([])));x&&x!==r&&n.call(x,o)&&(w=x);var E=y.prototype=g.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function r(i,o,a,c){var u=l(t[i],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:_}}function _(){return{value:e,done:!0}}return m.prototype=y,u(E,"constructor",y),u(y,"constructor",m),m.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},L(T.prototype),u(T.prototype,a,(function(){return this})),t.AsyncIterator=T,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new T(s(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),u(E,c,"Generator"),u(E,o,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},757:(t,e,r)=>{t.exports=r(553)},958:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(645),i=r.n(n)()((function(t){return t[1]}));i.push([t.id,"header{\n  padding: 1em;\n  background-color: #404849;\n  color:#ffffff;\n}\n  .title{\n    max-width: 80%;\n    width: fit-content;\n    margin: 0 auto 0 auto;\n    font-size: xxx-large;\n  }\n  .by{\n    width: fit-content;\n    text-align: right;\n    margin: 0 1em 0 auto;\n    font-size: x-large;\n  }\nmain{\n  text-align: center;\n  width: 100%;\n  margin: 0 auto 0 auto;\n}\nfooter{\n  max-width: 80%;\n  margin: auto 10% auto 10%;\n  padding: 1em;\n  border: solid 2px #cccccc;\n  border-radius: 1em;\n  border-collapse: initial;\n}\n  .author{\n    font-weight: bolder;\n  }",""]);const o=i},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(n)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);n&&i[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),e.push(u))}},e}},379:t=>{"use strict";var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var o={},a=[],c=0;c<t.length;c++){var u=t[c],s=n.base?u[0]+n.base:u[0],l=o[s]||0,f="".concat(s," ").concat(l);o[s]=l+1;var h=r(f),p={css:u[1],media:u[2],sourceMap:u[3]};-1!==h?(e[h].references++,e[h].updater(p)):e.push({identifier:f,updater:i(p,n),references:1}),a.push(f)}return a}function i(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r.update(t=e)}else r.remove()}}t.exports=function(t,i){var o=n(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var c=r(o[a]);e[c].references--}for(var u=n(t,i),s=0;s<o.length;s++){var l=r(o[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=u}}},569:t=>{"use strict";var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,r)=>{"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n=r.css,i=r.media,o=r.sourceMap;i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(n,t)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},822:(t,e,r)=>{"use strict";t.exports=r.p+"resource/SIK.gif"}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={id:n,exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{"use strict";function t(t,e,r,n,i,o,a){try{var c=t[o](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,i)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a=r(757),c=r.n(a),u=function(){function t(){e(this,t)}return i(t,null,[{key:"imagen",value:function(t){var e=new Image;return e.src=t,new Promise((function(t,r){e.addEventListener("load",(function(){t(e)}))}))}}]),t}(),s=r(822),l=function(){function r(t){var n=this;e(this,r),o(this,"onLoading",!1),o(this,"img",null),o(this,"imgSize",{height:0,width:0}),this.imgSize.height=t.height,this.imgSize.width=t.width,t.style.position="absolute",this.img=document.body.appendChild(t),this.loading(),window.addEventListener("resize",(function(){n.refresh()}))}var n,a;return i(r,[{key:"loading",value:function(){this.img.style.display="inline-block",this.img.style.left="".concat(document.getElementsByTagName("main")[0].offsetLeft+(document.getElementsByTagName("main")[0].clientWidth-this.imgSize.width)/2,"px"),this.img.style.top="".concat(document.getElementsByTagName("main")[0].offsetTop+(document.getElementsByTagName("main")[0].clientHeight-this.imgSize.height)/2,"px"),this.onLoading=!0}},{key:"finish",value:function(){this.img.style.display="none"}},{key:"refresh",value:function(){this.onLoading?this.loading():this.finish()}}],[{key:"init",value:(n=c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.imagen(s);case 2:return e=t.sent,n=new r(e),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})),a=function(){var e=this,r=arguments;return new Promise((function(i,o){var a=n.apply(e,r);function c(e){t(a,i,o,c,u,"next",e)}function u(e){t(a,i,o,c,u,"throw",e)}c(void 0)}))},function(){return a.apply(this,arguments)})}]),r}(),f=r(379),h=r.n(f),p=r(795),d=r.n(p),v=r(569),g=r.n(v),m=r(565),y=r.n(m),w=r(216),b=r.n(w),x=r(589),E=r.n(x),L=r(958),T={};T.styleTagTransform=E(),T.setAttributes=y(),T.insert=g().bind(null,"head"),T.domAPI=d(),T.insertStyleElement=b(),h()(L.Z,T),L.Z&&L.Z.locals&&L.Z.locals,l.init(),"serviceWorker"in navigator||alert("Service Worker機能をサポートしたブラウザでなら,オフラインでもこのアプリを利用できます。")})()})();
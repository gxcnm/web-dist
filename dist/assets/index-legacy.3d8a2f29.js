!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(E){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(E){return{type:"throw",arg:E}}}r.wrap=s;var h={};function p(){}function d(){}function g(){}var v={};l(v,a,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y($([])));m&&m!==n&&o.call(m,a)&&(v=m);var w=g.prototype=p.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(i,a,c,u){var l=f(e[i],e,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function $(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=g,l(w,"constructor",g),l(g,"constructor",d),d.displayName=l(g,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,c,(function(){return this})),r.AsyncIterator=x,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new x(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,u,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=$,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.220945f9.js","./useTitle-legacy.29c28231.js","./webauthn-json.browser-ponyfill-legacy.8ddd819a.js"],(function(t){"use strict";var r,i,a,c,u,l,s,f,h,p,d,g,v,y,m,w,b,x,_,k,C,S,$,L,E,I,j,G,O,P,N,T,A,U,z,F,R,M,D,J,K,X,Y,Z,Q,W,q;return{setters:[function(t){r=t.c8,i=t.E,a=t.c9,c=t.ca,u=t.ai,l=t.X,s=t.h,f=t.a7,h=t.aJ,p=t.U,d=t.b,g=t.c4,v=t.cb,y=t.e,m=t.ax,w=t.b9,b=t.bX,x=t.cc,_=t.cd,k=t.ce,C=t.cf,S=t.a,$=t.k,L=t.m,E=t.cg,I=t.aW,j=t.a4,G=t.bQ,O=t.au,P=t.bP,N=t.S,T=t.I,A=t.ch,U=t.b5,z=t.ae,F=t.C,R=t.bk,M=t.bl,D=t.ci,J=t.aC,K=t.bG,X=t.n,Y=t.ba},function(t){Z=t.a},function(t){Q=t.s,W=t.g,q=t.a}],execute:function(){var B=u('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="896" width="967.8852157128662"><defs><path id="path-2" opacity="1" fill-rule="evenodd" d="M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"></path><linearGradient id="linearGradient-3" x1="0.5" y1="0" x2="0.5" y2="1"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-2" fill="url(#linearGradient-3)" fill-opacity="1"></use></g></svg>'),H=function(t){var e,r,n,o=i({startColor:"#28aff0",endColor:"#120fc4"},t);return e=B.cloneNode(!0),r=e.firstChild.firstChild.nextSibling.firstChild,n=r.nextSibling,a((function(t){var e=o.startColor,i=o.endColor;return e!==t._v$&&c(r,"stop-color",t._v$=e),i!==t._v$2&&c(n,"stop-color",t._v$2=i),t}),{_v$:void 0,_v$2:void 0}),e},V=u('<svg height="1337" width="1337"><defs><path id="path-1" opacity="1" fill-rule="evenodd" d="M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"></path><linearGradient id="linearGradient-2" x1="0.79" y1="0.62" x2="0.21" y2="0.86"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-1" fill="url(#linearGradient-2)" fill-opacity="1"></use></g></svg>'),tt=function(t){var e,r,n,o=i({startColor:"#28aff0",endColor:"#120fc4"},t);return e=V.cloneNode(!0),r=e.firstChild.firstChild.nextSibling.firstChild,n=r.nextSibling,a((function(t){var e=o.startColor,i=o.endColor;return e!==t._v$&&c(r,"stop-color",t._v$=e),i!==t._v$2&&c(n,"stop-color",t._v$2=i),t}),{_v$:void 0,_v$2:void 0}),e},et=function(){var t=l("#a9c6ff","#062b74");return s(f,{get bgColor(){return t()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh",get children(){return[s(f,{pos:"absolute",right:{"@initial":"-100px","@sm":"-300px"},top:{"@initial":"-1170px","@sm":"-900px"},get children(){return s(tt,{})}}),s(f,{pos:"absolute",left:{"@initial":"-100px","@sm":"-200px"},bottom:{"@initial":"-760px","@sm":"-400px"},get children(){return s(H,{})}})]}})},rt=function(){var t=h("sso_login_enabled"),e=p("sso_login_platform"),r=h("sso_compatibility_mode"),n=d(),o=n.searchParams,i=n.to,a=o.token;function c(t){var e=t.data;e.token&&(g(e.token),i(decodeURIComponent(o.redirect||v||"/"),!0))}if(null!=a&&""!=a&&(g(a),i(decodeURIComponent(o.redirect||v||"/"),!0)),window.addEventListener("message",c),y((function(){window.removeEventListener("message",c)})),t){var u;switch(e){case"Github":u=C;break;case"Microsoft":u=k;break;case"Google":u=_;break;case"Dingtalk":u=x;break;default:u=b}return s(m,{cursor:"pointer",boxSize:"$8",as:u,p:"$0_5",onclick:function(){var t=w.getUri()+"/auth/sso?method=sso_get_token";r?window.location.href=t:window.open(t,"authPopup","width=500,height=600")}})}};t("default",(function(){var t=p("logo").split("\n"),i=l(t[0],t.pop()),a=S(),c=$((function(){return"".concat(a("login.login_to")," ").concat(p("site_title"))}));Z(c);var u=l("white","$neutral1"),f=o(L(localStorage.getItem("username")||""),2),y=f[0],b=f[1],x=o(L(localStorage.getItem("password")||""),2),_=x[0],k=x[1],C=o(L(""),2),B=C[0],H=C[1],V=o(L(!1),2),tt=V[0],nt=V[1],ot=o(E("remember-pwd","false"),2),it=ot[0],at=ot[1],ct=o(L(!1),2),ut=ct[0],lt=ct[1],st=o(I(n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ut()){t.next=4;break}return t.abrupt("return",w.post("/auth/login/ldap",{username:y(),password:_(),otp_code:B()}));case 4:return t.abrupt("return",w.post("/auth/login/hash",{username:y(),password:(e=_(),r("".concat(e,"-").concat("https://github.com/alist-org/alist"))),otp_code:B()}));case 5:case"end":return t.stop()}var e}),t)})))),2),ft=st[0],ht=st[1],pt=I((function(t,e,r){return w.post("/authn/webauthn_finish_login?username="+r,JSON.stringify(e),{headers:{session:t}})})),dt=o(pt,2)[1],gt=I((function(t){return w.get("/authn/webauthn_begin_login?username="+t)})),vt=o(gt,2)[1],yt=d(),mt=yt.searchParams,wt=yt.to,bt=h("webauthn_login_enabled"),xt=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:nt(!tt());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_t=function(){var t=n(e().mark((function t(){var r,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(tt()){t.next=8;break}return"true"===it()?(localStorage.setItem("username",y()),localStorage.setItem("password",_())):(localStorage.removeItem("username"),localStorage.removeItem("password")),t.next=4,ht();case 4:r=t.sent,K(r,(function(t){X.success(a("login.success")),g(t.token),wt(decodeURIComponent(mt.redirect||v||"/"),!0)}),(function(t,e){Ct()||402!==e?X.error(t):St(!0)})),t.next=17;break;case 8:if(Q()){t.next=11;break}return X.error(a("users.webauthn_not_supported")),t.abrupt("return");case 11:return g(),"true"===it()?localStorage.setItem("username",y()):localStorage.removeItem("username"),t.next=15,vt(y());case 15:o=t.sent,Y(o,function(){var t=n(e().mark((function t(r){var n,o,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=W(r.options),t.next=4,q(n);case 4:return o=t.sent,t.next=7,dt(r.session,o,y());case 7:i=t.sent,K(i,(function(t){X.success(a("login.success")),g(t.token),wt(decodeURIComponent(mt.redirect||v||"/"),!0)})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),t.t0 instanceof Error&&X.error(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}());case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),kt=o(L(!1),2),Ct=kt[0],St=kt[1],$t=h("ldap_login_enabled"),Lt=p("ldap_login_tips");return $t&&lt(!0),s(J,{zIndex:"1",w:"$full",h:"100vh",get children(){return[s(j,{get bgColor(){return u()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[s(G,{alignItems:"center",justifyContent:"space-around",get children(){return[s(O,{mr:"$2",boxSize:"$12",get src(){return i()}}),s(P,{color:"$info9",fontSize:"$2xl",get children(){return c()}})]}}),s(N,{get when(){return!Ct()},get fallback(){return s(T,{id:"totp",name:"otp",get placeholder(){return a("login.otp-tips")},get value(){return B()},onInput:function(t){return H(t.currentTarget.value)},onKeyDown:function(t){"Enter"===t.key&&_t()}})},get children(){return[s(T,{name:"username",get placeholder(){return a("login.username-tips")},get value(){return y()},onInput:function(t){return b(t.currentTarget.value)}}),s(N,{get when(){return!tt()},get children(){return s(T,{name:"password",get placeholder(){return a("login.password-tips")},type:"password",get value(){return _()},onInput:function(t){return k(t.currentTarget.value)},onKeyDown:function(t){"Enter"===t.key&&_t()}})}}),s(G,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return[s(A,{get checked(){return"true"===it()},onChange:function(){return at("true"===it()?"false":"true")},get children(){return a("login.remember")}}),s(U,{as:"a",target:"_blank",get href(){return a("login.forget_url")},get children(){return a("login.forget")}})]}})]}}),s(z,{w:"$full",spacing:"$2",get children(){return[s(N,{get when(){return!tt()},get children(){return s(F,{colorScheme:"primary",w:"$full",onClick:function(){Ct()?H(""):(b(""),k(""))},get children(){return a("login.clear")}})}}),s(F,{w:"$full",get loading(){return ft()},onClick:_t,get children(){return a("login.login")}})]}}),s(N,{when:$t,get children(){return s(A,{w:"$full",get checked(){return!0===ut()},onChange:function(){return lt(!ut())},children:Lt})}}),s(F,{w:"$full",colorScheme:"accent",onClick:function(){g(),wt(decodeURIComponent(mt.redirect||v||"/"),!0)},get children(){return a("login.use_guest")}}),s(G,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[s(R,{}),s(M,{}),s(rt,{}),s(N,{when:bt,get children(){return s(m,{cursor:"pointer",boxSize:"$8",as:D,p:"$0_5",onclick:xt})}})]}})]}}),s(et,{})]}})}))}}}))}();
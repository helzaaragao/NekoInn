const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/browser-ponyfill-CzY5Bvx0.js","assets/react-Csw2ODfV.js"])))=>i.map(i=>d[i]);
import{R as h,r as R,j as d,S as E6,a as j6,b as O6,c as rf,A as C6,d as z6,e as D6,f as T6,g as H6,h as a1,i as Z6,C as N6,I as R6,k as _6,l as L6,m as U6}from"./chakra-D6EZD1uR.js";import{r as q6,a as V6,g as qd}from"./react-Csw2ODfV.js";import{u as ha,i as Br,a as B6}from"./i18n-CgW5GbLl.js";import{P as k6,A as Y6,a as X6}from"./icons-DVvB9ZFu.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const g of s)if(g.type==="childList")for(const y of g.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function u(s){const g={};return s.integrity&&(g.integrity=s.integrity),s.referrerPolicy&&(g.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?g.credentials="include":s.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function o(s){if(s.ep)return;s.ep=!0;const g=u(s);fetch(s.href,g)}})();var Mc={exports:{}},mi={},Ec={exports:{}},jc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf;function $6(){return uf||(uf=1,function(n){function i(T,L){var P=T.length;T.push(L);e:for(;0<P;){var ie=P-1>>>1,de=T[ie];if(0<s(de,L))T[ie]=L,T[P]=de,P=ie;else break e}}function u(T){return T.length===0?null:T[0]}function o(T){if(T.length===0)return null;var L=T[0],P=T.pop();if(P!==L){T[0]=P;e:for(var ie=0,de=T.length,ze=de>>>1;ie<ze;){var ue=2*(ie+1)-1,oe=T[ue],Ee=ue+1,Ie=T[Ee];if(0>s(oe,P))Ee<de&&0>s(Ie,oe)?(T[ie]=Ie,T[Ee]=P,ie=Ee):(T[ie]=oe,T[ue]=P,ie=ue);else if(Ee<de&&0>s(Ie,P))T[ie]=Ie,T[Ee]=P,ie=Ee;else break e}}return L}function s(T,L){var P=T.sortIndex-L.sortIndex;return P!==0?P:T.id-L.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;n.unstable_now=function(){return g.now()}}else{var y=Date,S=y.now();n.unstable_now=function(){return y.now()-S}}var w=[],O=[],b=1,C=null,z=3,N=!1,U=!1,q=!1,K=!1,J=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function $(T){for(var L=u(O);L!==null;){if(L.callback===null)o(O);else if(L.startTime<=T)o(O),L.sortIndex=L.expirationTime,i(w,L);else break;L=u(O)}}function W(T){if(q=!1,$(T),!U)if(u(w)!==null)U=!0,Y||(Y=!0,Ke());else{var L=u(O);L!==null&&Ht(W,L.startTime-T)}}var Y=!1,X=-1,Ce=5,Ye=-1;function Kt(){return K?!0:!(n.unstable_now()-Ye<Ce)}function We(){if(K=!1,Y){var T=n.unstable_now();Ye=T;var L=!0;try{e:{U=!1,q&&(q=!1,k(X),X=-1),N=!0;var P=z;try{t:{for($(T),C=u(w);C!==null&&!(C.expirationTime>T&&Kt());){var ie=C.callback;if(typeof ie=="function"){C.callback=null,z=C.priorityLevel;var de=ie(C.expirationTime<=T);if(T=n.unstable_now(),typeof de=="function"){C.callback=de,$(T),L=!0;break t}C===u(w)&&o(w),$(T)}else o(w);C=u(w)}if(C!==null)L=!0;else{var ze=u(O);ze!==null&&Ht(W,ze.startTime-T),L=!1}}break e}finally{C=null,z=P,N=!1}L=void 0}}finally{L?Ke():Y=!1}}}var Ke;if(typeof _=="function")Ke=function(){_(We)};else if(typeof MessageChannel<"u"){var yn=new MessageChannel,Xa=yn.port2;yn.port1.onmessage=We,Ke=function(){Xa.postMessage(null)}}else Ke=function(){J(We,0)};function Ht(T,L){X=J(function(){T(n.unstable_now())},L)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(T){T.callback=null},n.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ce=0<T?Math.floor(1e3/T):5},n.unstable_getCurrentPriorityLevel=function(){return z},n.unstable_next=function(T){switch(z){case 1:case 2:case 3:var L=3;break;default:L=z}var P=z;z=L;try{return T()}finally{z=P}},n.unstable_requestPaint=function(){K=!0},n.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var P=z;z=T;try{return L()}finally{z=P}},n.unstable_scheduleCallback=function(T,L,P){var ie=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ie+P:ie):P=ie,T){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=P+de,T={id:b++,callback:L,priorityLevel:T,startTime:P,expirationTime:de,sortIndex:-1},P>ie?(T.sortIndex=P,i(O,T),u(w)===null&&T===u(O)&&(q?(k(X),X=-1):q=!0,Ht(W,P-ie))):(T.sortIndex=de,i(w,T),U||N||(U=!0,Y||(Y=!0,Ke()))),T},n.unstable_shouldYield=Kt,n.unstable_wrapCallback=function(T){var L=z;return function(){var P=z;z=L;try{return T.apply(this,arguments)}finally{z=P}}}}(jc)),jc}var cf;function Q6(){return cf||(cf=1,Ec.exports=$6()),Ec.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of;function G6(){if(of)return mi;of=1;var n=Q6(),i=q6(),u=V6();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(g(e)!==e)throw Error(o(188))}function w(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var r=a.return;if(r===null)break;var c=r.alternate;if(c===null){if(l=r.return,l!==null){a=l;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===a)return S(r),e;if(c===l)return S(r),t;c=c.sibling}throw Error(o(188))}if(a.return!==l.return)a=r,l=c;else{for(var f=!1,m=r.child;m;){if(m===a){f=!0,a=r,l=c;break}if(m===l){f=!0,l=r,a=c;break}m=m.sibling}if(!f){for(m=c.child;m;){if(m===a){f=!0,a=c,l=r;break}if(m===l){f=!0,l=c,a=r;break}m=m.sibling}if(!f)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function O(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=O(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,C=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),k=Symbol.for("react.consumer"),_=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),Ye=Symbol.for("react.activity"),Kt=Symbol.for("react.memo_cache_sentinel"),We=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=We&&e[We]||e["@@iterator"],typeof e=="function"?e:null)}var yn=Symbol.for("react.client.reference");function Xa(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===yn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case K:return"Profiler";case q:return"StrictMode";case W:return"Suspense";case Y:return"SuspenseList";case Ye:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case N:return"Portal";case _:return(e.displayName||"Context")+".Provider";case k:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:Xa(e.type)||"Memo";case Ce:t=e._payload,e=e._init;try{return Xa(e(t))}catch{}}return null}var Ht=Array.isArray,T=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ie=[],de=-1;function ze(e){return{current:e}}function ue(e){0>de||(e.current=ie[de],ie[de]=null,de--)}function oe(e,t){de++,ie[de]=e.current,e.current=t}var Ee=ze(null),Ie=ze(null),lt=ze(null),Pt=ze(null);function Lt(e,t){switch(oe(lt,t),oe(Ie,e),oe(Ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Zs(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Zs(t),e=Ns(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ue(Ee),oe(Ee,e)}function it(){ue(Ee),ue(Ie),ue(lt)}function $a(e){e.memoizedState!==null&&oe(Pt,e);var t=Ee.current,a=Ns(t,e.type);t!==a&&(oe(Ie,e),oe(Ee,a))}function Ft(e){Ie.current===e&&(ue(Ee),ue(Ie)),Pt.current===e&&(ue(Pt),ci._currentValue=P)}var St=Object.prototype.hasOwnProperty,f0=n.unstable_scheduleCallback,d0=n.unstable_cancelCallback,nm=n.unstable_shouldYield,lm=n.unstable_requestPaint,Ut=n.unstable_now,im=n.unstable_getCurrentPriorityLevel,d1=n.unstable_ImmediatePriority,m1=n.unstable_UserBlockingPriority,Ai=n.unstable_NormalPriority,rm=n.unstable_LowPriority,h1=n.unstable_IdlePriority,um=n.log,cm=n.unstable_setDisableYieldValue,pl=null,ft=null;function ga(e){if(typeof um=="function"&&cm(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(pl,e)}catch{}}var dt=Math.clz32?Math.clz32:fm,om=Math.log,sm=Math.LN2;function fm(e){return e>>>=0,e===0?32:31-(om(e)/sm|0)|0}var Mi=256,Ei=4194304;function Qa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ji(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var r=0,c=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var m=l&134217727;return m!==0?(l=m&~c,l!==0?r=Qa(l):(f&=m,f!==0?r=Qa(f):a||(a=m&~e,a!==0&&(r=Qa(a))))):(m=l&~c,m!==0?r=Qa(m):f!==0?r=Qa(f):a||(a=l&~e,a!==0&&(r=Qa(a)))),r===0?0:t!==0&&t!==r&&(t&c)===0&&(c=r&-r,a=t&-t,c>=a||c===32&&(a&4194048)!==0)?t:r}function yl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function dm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g1(){var e=Mi;return Mi<<=1,(Mi&4194048)===0&&(Mi=256),e}function p1(){var e=Ei;return Ei<<=1,(Ei&62914560)===0&&(Ei=4194304),e}function m0(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function vl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mm(e,t,a,l,r,c){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,p=e.expirationTimes,M=e.hiddenUpdates;for(a=f&~a;0<a;){var D=31-dt(a),Z=1<<D;m[D]=0,p[D]=-1;var E=M[D];if(E!==null)for(M[D]=null,D=0;D<E.length;D++){var j=E[D];j!==null&&(j.lane&=-536870913)}a&=~Z}l!==0&&y1(e,l,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(f&~t))}function y1(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-dt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function v1(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-dt(a),r=1<<l;r&t|e[l]&t&&(e[l]|=t),a&=~r}}function h0(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function g0(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function b1(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:Is(e.type))}function hm(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}var pa=Math.random().toString(36).slice(2),Pe="__reactFiber$"+pa,rt="__reactProps$"+pa,vn="__reactContainer$"+pa,p0="__reactEvents$"+pa,gm="__reactListeners$"+pa,pm="__reactHandles$"+pa,x1="__reactResources$"+pa,bl="__reactMarker$"+pa;function y0(e){delete e[Pe],delete e[rt],delete e[p0],delete e[gm],delete e[pm]}function bn(e){var t=e[Pe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[vn]||a[Pe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Us(e);e!==null;){if(a=e[Pe])return a;e=Us(e)}return t}e=a,a=e.parentNode}return null}function xn(e){if(e=e[Pe]||e[vn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Sn(e){var t=e[x1];return t||(t=e[x1]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Le(e){e[bl]=!0}var S1=new Set,w1={};function Ga(e,t){wn(e,t),wn(e+"Capture",t)}function wn(e,t){for(w1[e]=t,e=0;e<t.length;e++)S1.add(t[e])}var ym=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),A1={},M1={};function vm(e){return St.call(M1,e)?!0:St.call(A1,e)?!1:ym.test(e)?M1[e]=!0:(A1[e]=!0,!1)}function Oi(e,t,a){if(vm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ci(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Jt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var v0,E1;function An(e){if(v0===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);v0=t&&t[1]||"",E1=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+v0+e+E1}var b0=!1;function x0(e,t){if(!e||b0)return"";b0=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(j){var E=j}Reflect.construct(e,[],Z)}else{try{Z.call()}catch(j){E=j}e.call(Z.prototype)}}else{try{throw Error()}catch(j){E=j}(Z=e())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(j){if(j&&E&&typeof j.stack=="string")return[j.stack,E.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),f=c[0],m=c[1];if(f&&m){var p=f.split(`
`),M=m.split(`
`);for(r=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;r<M.length&&!M[r].includes("DetermineComponentFrameRoot");)r++;if(l===p.length||r===M.length)for(l=p.length-1,r=M.length-1;1<=l&&0<=r&&p[l]!==M[r];)r--;for(;1<=l&&0<=r;l--,r--)if(p[l]!==M[r]){if(l!==1||r!==1)do if(l--,r--,0>r||p[l]!==M[r]){var D=`
`+p[l].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=l&&0<=r);break}}}finally{b0=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?An(a):""}function bm(e){switch(e.tag){case 26:case 27:case 5:return An(e.type);case 16:return An("Lazy");case 13:return An("Suspense");case 19:return An("SuspenseList");case 0:case 15:return x0(e.type,!1);case 11:return x0(e.type.render,!1);case 1:return x0(e.type,!0);case 31:return An("Activity");default:return""}}function j1(e){try{var t="";do t+=bm(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function O1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xm(e){var t=O1(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,c=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(f){l=""+f,c.call(this,f)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(f){l=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zi(e){e._valueTracker||(e._valueTracker=xm(e))}function C1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=O1(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sm=/[\n"\\]/g;function At(e){return e.replace(Sm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function S0(e,t,a,l,r,c,f,m){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?w0(e,f,wt(t)):a!=null?w0(e,f,wt(a)):l!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+wt(m):e.removeAttribute("name")}function z1(e,t,a,l,r,c,f,m){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||t!=null))return;a=a!=null?""+wt(a):"",t=t!=null?""+wt(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=m?e.checked:!!l,e.defaultChecked=!!l,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function w0(e,t,a){t==="number"&&Di(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Mn(e,t,a,l){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&l&&(e[a].defaultSelected=!0)}else{for(a=""+wt(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function D1(e,t,a){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+wt(a):""}function T1(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(Ht(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=wt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function En(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var wm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function H1(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||wm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Z1(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in t)l=t[r],t.hasOwnProperty(r)&&a[r]!==l&&H1(e,r,l)}else for(var c in t)t.hasOwnProperty(c)&&H1(e,c,t[c])}function A0(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Am=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ti(e){return Mm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var M0=null;function E0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jn=null,On=null;function N1(e){var t=xn(e);if(t&&(e=t.stateNode)){var a=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(S0(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+At(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var r=l[rt]||null;if(!r)throw Error(o(90));S0(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&C1(l)}break e;case"textarea":D1(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Mn(e,!!a.multiple,t,!1)}}}var j0=!1;function R1(e,t,a){if(j0)return e(t,a);j0=!0;try{var l=e(t);return l}finally{if(j0=!1,(jn!==null||On!==null)&&(pr(),jn&&(t=jn,e=On,On=jn=null,N1(t),e)))for(t=0;t<e.length;t++)N1(e[t])}}function Sl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[rt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),O0=!1;if(Wt)try{var wl={};Object.defineProperty(wl,"passive",{get:function(){O0=!0}}),window.addEventListener("test",wl,wl),window.removeEventListener("test",wl,wl)}catch{O0=!1}var ya=null,C0=null,Hi=null;function _1(){if(Hi)return Hi;var e,t=C0,a=t.length,l,r="value"in ya?ya.value:ya.textContent,c=r.length;for(e=0;e<a&&t[e]===r[e];e++);var f=a-e;for(l=1;l<=f&&t[a-l]===r[c-l];l++);return Hi=r.slice(e,1<l?1-l:void 0)}function Zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function L1(){return!1}function ut(e){function t(a,l,r,c,f){this._reactName=a,this._targetInst=r,this.type=l,this.nativeEvent=c,this.target=f,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(c):c[m]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ni:L1,this.isPropagationStopped=L1,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ri=ut(Ka),Al=b({},Ka,{view:0,detail:0}),Em=ut(Al),z0,D0,Ml,_i=b({},Al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:H0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ml&&(Ml&&e.type==="mousemove"?(z0=e.screenX-Ml.screenX,D0=e.screenY-Ml.screenY):D0=z0=0,Ml=e),z0)},movementY:function(e){return"movementY"in e?e.movementY:D0}}),U1=ut(_i),jm=b({},_i,{dataTransfer:0}),Om=ut(jm),Cm=b({},Al,{relatedTarget:0}),T0=ut(Cm),zm=b({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Dm=ut(zm),Tm=b({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hm=ut(Tm),Zm=b({},Ka,{data:0}),q1=ut(Zm),Nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_m={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_m[e])?!!t[e]:!1}function H0(){return Lm}var Um=b({},Al,{key:function(e){if(e.key){var t=Nm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:H0,charCode:function(e){return e.type==="keypress"?Zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qm=ut(Um),Vm=b({},_i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),V1=ut(Vm),Bm=b({},Al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:H0}),km=ut(Bm),Ym=b({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xm=ut(Ym),$m=b({},_i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qm=ut($m),Gm=b({},Ka,{newState:0,oldState:0}),Km=ut(Gm),Pm=[9,13,27,32],Z0=Wt&&"CompositionEvent"in window,El=null;Wt&&"documentMode"in document&&(El=document.documentMode);var Fm=Wt&&"TextEvent"in window&&!El,B1=Wt&&(!Z0||El&&8<El&&11>=El),k1=" ",Y1=!1;function X1(e,t){switch(e){case"keyup":return Pm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function Jm(e,t){switch(e){case"compositionend":return $1(t);case"keypress":return t.which!==32?null:(Y1=!0,k1);case"textInput":return e=t.data,e===k1&&Y1?null:e;default:return null}}function Wm(e,t){if(Cn)return e==="compositionend"||!Z0&&X1(e,t)?(e=_1(),Hi=C0=ya=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return B1&&t.locale!=="ko"?null:t.data;default:return null}}var Im={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Q1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Im[e.type]:t==="textarea"}function G1(e,t,a,l){jn?On?On.push(l):On=[l]:jn=l,t=wr(t,"onChange"),0<t.length&&(a=new Ri("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var jl=null,Ol=null;function e8(e){Cs(e,0)}function Li(e){var t=xl(e);if(C1(t))return e}function K1(e,t){if(e==="change")return t}var P1=!1;if(Wt){var N0;if(Wt){var R0="oninput"in document;if(!R0){var F1=document.createElement("div");F1.setAttribute("oninput","return;"),R0=typeof F1.oninput=="function"}N0=R0}else N0=!1;P1=N0&&(!document.documentMode||9<document.documentMode)}function J1(){jl&&(jl.detachEvent("onpropertychange",W1),Ol=jl=null)}function W1(e){if(e.propertyName==="value"&&Li(Ol)){var t=[];G1(t,Ol,e,E0(e)),R1(e8,t)}}function t8(e,t,a){e==="focusin"?(J1(),jl=t,Ol=a,jl.attachEvent("onpropertychange",W1)):e==="focusout"&&J1()}function a8(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Li(Ol)}function n8(e,t){if(e==="click")return Li(t)}function l8(e,t){if(e==="input"||e==="change")return Li(t)}function i8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:i8;function Cl(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var r=a[l];if(!St.call(t,r)||!mt(e[r],t[r]))return!1}return!0}function I1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eo(e,t){var a=I1(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=I1(a)}}function to(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?to(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ao(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Di(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Di(e.document)}return t}function _0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var r8=Wt&&"documentMode"in document&&11>=document.documentMode,zn=null,L0=null,zl=null,U0=!1;function no(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;U0||zn==null||zn!==Di(l)||(l=zn,"selectionStart"in l&&_0(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),zl&&Cl(zl,l)||(zl=l,l=wr(L0,"onSelect"),0<l.length&&(t=new Ri("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=zn)))}function Pa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Dn={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionrun:Pa("Transition","TransitionRun"),transitionstart:Pa("Transition","TransitionStart"),transitioncancel:Pa("Transition","TransitionCancel"),transitionend:Pa("Transition","TransitionEnd")},q0={},lo={};Wt&&(lo=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function Fa(e){if(q0[e])return q0[e];if(!Dn[e])return e;var t=Dn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in lo)return q0[e]=t[a];return e}var io=Fa("animationend"),ro=Fa("animationiteration"),uo=Fa("animationstart"),u8=Fa("transitionrun"),c8=Fa("transitionstart"),o8=Fa("transitioncancel"),co=Fa("transitionend"),oo=new Map,V0="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");V0.push("scrollEnd");function Zt(e,t){oo.set(e,t),Ga(t,[e])}var so=new WeakMap;function Mt(e,t){if(typeof e=="object"&&e!==null){var a=so.get(e);return a!==void 0?a:(t={value:e,source:t,stack:j1(t)},so.set(e,t),t)}return{value:e,source:t,stack:j1(t)}}var Et=[],Tn=0,B0=0;function Ui(){for(var e=Tn,t=B0=Tn=0;t<e;){var a=Et[t];Et[t++]=null;var l=Et[t];Et[t++]=null;var r=Et[t];Et[t++]=null;var c=Et[t];if(Et[t++]=null,l!==null&&r!==null){var f=l.pending;f===null?r.next=r:(r.next=f.next,f.next=r),l.pending=r}c!==0&&fo(a,r,c)}}function qi(e,t,a,l){Et[Tn++]=e,Et[Tn++]=t,Et[Tn++]=a,Et[Tn++]=l,B0|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function k0(e,t,a,l){return qi(e,t,a,l),Vi(e)}function Hn(e,t){return qi(e,null,null,t),Vi(e)}function fo(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var r=!1,c=e.return;c!==null;)c.childLanes|=a,l=c.alternate,l!==null&&(l.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&t!==null&&(r=31-dt(a),e=c.hiddenUpdates,l=e[r],l===null?e[r]=[t]:l.push(t),t.lane=a|536870912),c):null}function Vi(e){if(50<ei)throw ei=0,Ku=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Zn={};function s8(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,a,l){return new s8(e,t,a,l)}function Y0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function It(e,t){var a=e.alternate;return a===null?(a=ht(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function mo(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Bi(e,t,a,l,r,c){var f=0;if(l=e,typeof e=="function")Y0(e)&&(f=1);else if(typeof e=="string")f=d6(e,a,Ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ye:return e=ht(31,a,t,r),e.elementType=Ye,e.lanes=c,e;case U:return Ja(a.children,r,c,t);case q:f=8,r|=24;break;case K:return e=ht(12,a,t,r|2),e.elementType=K,e.lanes=c,e;case W:return e=ht(13,a,t,r),e.elementType=W,e.lanes=c,e;case Y:return e=ht(19,a,t,r),e.elementType=Y,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:case _:f=10;break e;case k:f=9;break e;case $:f=11;break e;case X:f=14;break e;case Ce:f=16,l=null;break e}f=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=ht(f,a,t,r),t.elementType=e,t.type=l,t.lanes=c,t}function Ja(e,t,a,l){return e=ht(7,e,l,t),e.lanes=a,e}function X0(e,t,a){return e=ht(6,e,null,t),e.lanes=a,e}function $0(e,t,a){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Nn=[],Rn=0,ki=null,Yi=0,jt=[],Ot=0,Wa=null,ea=1,ta="";function Ia(e,t){Nn[Rn++]=Yi,Nn[Rn++]=ki,ki=e,Yi=t}function ho(e,t,a){jt[Ot++]=ea,jt[Ot++]=ta,jt[Ot++]=Wa,Wa=e;var l=ea;e=ta;var r=32-dt(l)-1;l&=~(1<<r),a+=1;var c=32-dt(t)+r;if(30<c){var f=r-r%5;c=(l&(1<<f)-1).toString(32),l>>=f,r-=f,ea=1<<32-dt(t)+r|a<<r|l,ta=c+e}else ea=1<<c|a<<r|l,ta=e}function Q0(e){e.return!==null&&(Ia(e,1),ho(e,1,0))}function G0(e){for(;e===ki;)ki=Nn[--Rn],Nn[Rn]=null,Yi=Nn[--Rn],Nn[Rn]=null;for(;e===Wa;)Wa=jt[--Ot],jt[Ot]=null,ta=jt[--Ot],jt[Ot]=null,ea=jt[--Ot],jt[Ot]=null}var et=null,je=null,se=!1,en=null,qt=!1,K0=Error(o(519));function tn(e){var t=Error(o(418,""));throw Hl(Mt(t,e)),K0}function go(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Pe]=e,t[rt]=l,a){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(a=0;a<ai.length;a++)le(ai[a],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":le("invalid",t),z1(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),zi(t);break;case"select":le("invalid",t);break;case"textarea":le("invalid",t),T1(t,l.value,l.defaultValue,l.children),zi(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Hs(t.textContent,a)?(l.popover!=null&&(le("beforetoggle",t),le("toggle",t)),l.onScroll!=null&&le("scroll",t),l.onScrollEnd!=null&&le("scrollend",t),l.onClick!=null&&(t.onclick=Ar),t=!0):t=!1,t||tn(e)}function po(e){for(et=e.return;et;)switch(et.tag){case 5:case 13:qt=!1;return;case 27:case 3:qt=!0;return;default:et=et.return}}function Dl(e){if(e!==et)return!1;if(!se)return po(e),se=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||sc(e.type,e.memoizedProps)),a=!a),a&&je&&tn(e),po(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){je=Rt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}je=null}}else t===27?(t=je,Za(e.type)?(e=hc,hc=null,je=e):je=t):je=et?Rt(e.stateNode.nextSibling):null;return!0}function Tl(){je=et=null,se=!1}function yo(){var e=en;return e!==null&&(st===null?st=e:st.push.apply(st,e),en=null),e}function Hl(e){en===null?en=[e]:en.push(e)}var P0=ze(null),an=null,aa=null;function va(e,t,a){oe(P0,t._currentValue),t._currentValue=a}function na(e){e._currentValue=P0.current,ue(P0)}function F0(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function J0(e,t,a,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var f=r.child;c=c.firstContext;e:for(;c!==null;){var m=c;c=r;for(var p=0;p<t.length;p++)if(m.context===t[p]){c.lanes|=a,m=c.alternate,m!==null&&(m.lanes|=a),F0(c.return,a,e),l||(f=null);break e}c=m.next}}else if(r.tag===18){if(f=r.return,f===null)throw Error(o(341));f.lanes|=a,c=f.alternate,c!==null&&(c.lanes|=a),F0(f,a,e),f=null}else f=r.child;if(f!==null)f.return=r;else for(f=r;f!==null;){if(f===e){f=null;break}if(r=f.sibling,r!==null){r.return=f.return,f=r;break}f=f.return}r=f}}function Zl(e,t,a,l){e=null;for(var r=t,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var f=r.alternate;if(f===null)throw Error(o(387));if(f=f.memoizedProps,f!==null){var m=r.type;mt(r.pendingProps.value,f.value)||(e!==null?e.push(m):e=[m])}}else if(r===Pt.current){if(f=r.alternate,f===null)throw Error(o(387));f.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(ci):e=[ci])}r=r.return}e!==null&&J0(t,e,a,l),t.flags|=262144}function Xi(e){for(e=e.firstContext;e!==null;){if(!mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nn(e){an=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return vo(an,e)}function $i(e,t){return an===null&&nn(e),vo(e,t)}function vo(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},aa===null){if(e===null)throw Error(o(308));aa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else aa=aa.next=t;return a}var f8=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},d8=n.unstable_scheduleCallback,m8=n.unstable_NormalPriority,Re={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function W0(){return{controller:new f8,data:new Map,refCount:0}}function Nl(e){e.refCount--,e.refCount===0&&d8(m8,function(){e.controller.abort()})}var Rl=null,I0=0,_n=0,Ln=null;function h8(e,t){if(Rl===null){var a=Rl=[];I0=0,_n=tc(),Ln={status:"pending",value:void 0,then:function(l){a.push(l)}}}return I0++,t.then(bo,bo),t}function bo(){if(--I0===0&&Rl!==null){Ln!==null&&(Ln.status="fulfilled");var e=Rl;Rl=null,_n=0,Ln=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function g8(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var r=0;r<a.length;r++)(0,a[r])(t)},function(r){for(l.status="rejected",l.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),l}var xo=T.S;T.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&h8(e,t),xo!==null&&xo(e,t)};var ln=ze(null);function eu(){var e=ln.current;return e!==null?e:Se.pooledCache}function Qi(e,t){t===null?oe(ln,ln.current):oe(ln,t.pool)}function So(){var e=eu();return e===null?null:{parent:Re._currentValue,pool:e}}var _l=Error(o(460)),wo=Error(o(474)),Gi=Error(o(542)),tu={then:function(){}};function Ao(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ki(){}function Mo(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ki,Ki),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jo(e),e;default:if(typeof t.status=="string")t.then(Ki,Ki);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=l}},function(l){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jo(e),e}throw Ll=t,_l}}var Ll=null;function Eo(){if(Ll===null)throw Error(o(459));var e=Ll;return Ll=null,e}function jo(e){if(e===_l||e===Gi)throw Error(o(483))}var ba=!1;function au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(he&2)!==0){var r=l.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),l.pending=t,t=Vi(e),fo(e,null,a),t}return qi(e,l,t,a),Vi(e)}function Ul(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,v1(e,a)}}function lu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var r=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?r=c=f:c=c.next=f,a=a.next}while(a!==null);c===null?r=c=t:c=c.next=t}else r=c=t;a={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var iu=!1;function ql(){if(iu){var e=Ln;if(e!==null)throw e}}function Vl(e,t,a,l){iu=!1;var r=e.updateQueue;ba=!1;var c=r.firstBaseUpdate,f=r.lastBaseUpdate,m=r.shared.pending;if(m!==null){r.shared.pending=null;var p=m,M=p.next;p.next=null,f===null?c=M:f.next=M,f=p;var D=e.alternate;D!==null&&(D=D.updateQueue,m=D.lastBaseUpdate,m!==f&&(m===null?D.firstBaseUpdate=M:m.next=M,D.lastBaseUpdate=p))}if(c!==null){var Z=r.baseState;f=0,D=M=p=null,m=c;do{var E=m.lane&-536870913,j=E!==m.lane;if(j?(re&E)===E:(l&E)===E){E!==0&&E===_n&&(iu=!0),D!==null&&(D=D.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var F=e,Q=m;E=t;var be=a;switch(Q.tag){case 1:if(F=Q.payload,typeof F=="function"){Z=F.call(be,Z,E);break e}Z=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=Q.payload,E=typeof F=="function"?F.call(be,Z,E):F,E==null)break e;Z=b({},Z,E);break e;case 2:ba=!0}}E=m.callback,E!==null&&(e.flags|=64,j&&(e.flags|=8192),j=r.callbacks,j===null?r.callbacks=[E]:j.push(E))}else j={lane:E,tag:m.tag,payload:m.payload,callback:m.callback,next:null},D===null?(M=D=j,p=Z):D=D.next=j,f|=E;if(m=m.next,m===null){if(m=r.shared.pending,m===null)break;j=m,m=j.next,j.next=null,r.lastBaseUpdate=j,r.shared.pending=null}}while(!0);D===null&&(p=Z),r.baseState=p,r.firstBaseUpdate=M,r.lastBaseUpdate=D,c===null&&(r.shared.lanes=0),za|=f,e.lanes=f,e.memoizedState=Z}}function Oo(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Co(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Oo(a[e],t)}var Un=ze(null),Pi=ze(0);function zo(e,t){e=sa,oe(Pi,e),oe(Un,t),sa=e|t.baseLanes}function ru(){oe(Pi,sa),oe(Un,Un.current)}function uu(){sa=Pi.current,ue(Un),ue(Pi)}var wa=0,te=null,ye=null,He=null,Fi=!1,qn=!1,rn=!1,Ji=0,Bl=0,Vn=null,p8=0;function De(){throw Error(o(321))}function cu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!mt(e[a],t[a]))return!1;return!0}function ou(e,t,a,l,r,c){return wa=c,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?d2:m2,rn=!1,c=a(l,r),rn=!1,qn&&(c=To(t,a,l,r)),Do(e),c}function Do(e){T.H=nr;var t=ye!==null&&ye.next!==null;if(wa=0,He=ye=te=null,Fi=!1,Bl=0,Vn=null,t)throw Error(o(300));e===null||Ue||(e=e.dependencies,e!==null&&Xi(e)&&(Ue=!0))}function To(e,t,a,l){te=e;var r=0;do{if(qn&&(Vn=null),Bl=0,qn=!1,25<=r)throw Error(o(301));if(r+=1,He=ye=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}T.H=A8,c=t(a,l)}while(qn);return c}function y8(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?kl(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(te.flags|=1024),t}function su(){var e=Ji!==0;return Ji=0,e}function fu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function du(e){if(Fi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Fi=!1}wa=0,He=ye=te=null,qn=!1,Bl=Ji=0,Vn=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?te.memoizedState=He=e:He=He.next=e,He}function Ze(){if(ye===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=He===null?te.memoizedState:He.next;if(t!==null)He=t,ye=e;else{if(e===null)throw te.alternate===null?Error(o(467)):Error(o(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},He===null?te.memoizedState=He=e:He=He.next=e}return He}function mu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function kl(e){var t=Bl;return Bl+=1,Vn===null&&(Vn=[]),e=Mo(Vn,e,t),t=te,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?d2:m2),e}function Wi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return kl(e);if(e.$$typeof===_)return Fe(e)}throw Error(o(438,String(e)))}function hu(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=mu(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Kt;return t.index++,a}function la(e,t){return typeof t=="function"?t(e):t}function Ii(e){var t=Ze();return gu(t,ye,e)}function gu(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var r=e.baseQueue,c=l.pending;if(c!==null){if(r!==null){var f=r.next;r.next=c.next,c.next=f}t.baseQueue=r=c,l.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{t=r.next;var m=f=null,p=null,M=t,D=!1;do{var Z=M.lane&-536870913;if(Z!==M.lane?(re&Z)===Z:(wa&Z)===Z){var E=M.revertLane;if(E===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),Z===_n&&(D=!0);else if((wa&E)===E){M=M.next,E===_n&&(D=!0);continue}else Z={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},p===null?(m=p=Z,f=c):p=p.next=Z,te.lanes|=E,za|=E;Z=M.action,rn&&a(c,Z),c=M.hasEagerState?M.eagerState:a(c,Z)}else E={lane:Z,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},p===null?(m=p=E,f=c):p=p.next=E,te.lanes|=Z,za|=Z;M=M.next}while(M!==null&&M!==t);if(p===null?f=c:p.next=m,!mt(c,e.memoizedState)&&(Ue=!0,D&&(a=Ln,a!==null)))throw a;e.memoizedState=c,e.baseState=f,e.baseQueue=p,l.lastRenderedState=c}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function pu(e){var t=Ze(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,r=a.pending,c=t.memoizedState;if(r!==null){a.pending=null;var f=r=r.next;do c=e(c,f.action),f=f.next;while(f!==r);mt(c,t.memoizedState)||(Ue=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),a.lastRenderedState=c}return[c,l]}function Ho(e,t,a){var l=te,r=Ze(),c=se;if(c){if(a===void 0)throw Error(o(407));a=a()}else a=t();var f=!mt((ye||r).memoizedState,a);f&&(r.memoizedState=a,Ue=!0),r=r.queue;var m=Ro.bind(null,l,r,e);if(Yl(2048,8,m,[e]),r.getSnapshot!==t||f||He!==null&&He.memoizedState.tag&1){if(l.flags|=2048,Bn(9,er(),No.bind(null,l,r,a,t),null),Se===null)throw Error(o(349));c||(wa&124)!==0||Zo(l,t,a)}return a}function Zo(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=mu(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function No(e,t,a,l){t.value=a,t.getSnapshot=l,_o(t)&&Lo(e)}function Ro(e,t,a){return a(function(){_o(t)&&Lo(e)})}function _o(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!mt(e,a)}catch{return!0}}function Lo(e){var t=Hn(e,2);t!==null&&bt(t,e,2)}function yu(e){var t=ct();if(typeof e=="function"){var a=e;if(e=a(),rn){ga(!0);try{a()}finally{ga(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},t}function Uo(e,t,a,l){return e.baseState=a,gu(e,ye,typeof l=="function"?l:la)}function v8(e,t,a,l,r){if(ar(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){c.listeners.push(f)}};T.T!==null?a(!0):c.isTransition=!1,l(c),a=t.pending,a===null?(c.next=t.pending=c,qo(t,c)):(c.next=a.next,t.pending=a.next=c)}}function qo(e,t){var a=t.action,l=t.payload,r=e.state;if(t.isTransition){var c=T.T,f={};T.T=f;try{var m=a(r,l),p=T.S;p!==null&&p(f,m),Vo(e,t,m)}catch(M){vu(e,t,M)}finally{T.T=c}}else try{c=a(r,l),Vo(e,t,c)}catch(M){vu(e,t,M)}}function Vo(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Bo(e,t,l)},function(l){return vu(e,t,l)}):Bo(e,t,a)}function Bo(e,t,a){t.status="fulfilled",t.value=a,ko(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,qo(e,a)))}function vu(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,ko(t),t=t.next;while(t!==l)}e.action=null}function ko(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Yo(e,t){return t}function Xo(e,t){if(se){var a=Se.formState;if(a!==null){e:{var l=te;if(se){if(je){t:{for(var r=je,c=qt;r.nodeType!==8;){if(!c){r=null;break t}if(r=Rt(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){je=Rt(r.nextSibling),l=r.data==="F!";break e}}tn(l)}l=!1}l&&(t=a[0])}}return a=ct(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:t},a.queue=l,a=o2.bind(null,te,l),l.dispatch=a,l=yu(!1),c=Au.bind(null,te,!1,l.queue),l=ct(),r={state:t,dispatch:null,action:e,pending:null},l.queue=r,a=v8.bind(null,te,r,c,a),r.dispatch=a,l.memoizedState=e,[t,a,!1]}function $o(e){var t=Ze();return Qo(t,ye,e)}function Qo(e,t,a){if(t=gu(e,t,Yo)[0],e=Ii(la)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=kl(t)}catch(f){throw f===_l?Gi:f}else l=t;t=Ze();var r=t.queue,c=r.dispatch;return a!==t.memoizedState&&(te.flags|=2048,Bn(9,er(),b8.bind(null,r,a),null)),[l,c,e]}function b8(e,t){e.action=t}function Go(e){var t=Ze(),a=ye;if(a!==null)return Qo(t,a,e);Ze(),t=t.memoizedState,a=Ze();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Bn(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=mu(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function er(){return{destroy:void 0,resource:void 0}}function Ko(){return Ze().memoizedState}function tr(e,t,a,l){var r=ct();l=l===void 0?null:l,te.flags|=e,r.memoizedState=Bn(1|t,er(),a,l)}function Yl(e,t,a,l){var r=Ze();l=l===void 0?null:l;var c=r.memoizedState.inst;ye!==null&&l!==null&&cu(l,ye.memoizedState.deps)?r.memoizedState=Bn(t,c,a,l):(te.flags|=e,r.memoizedState=Bn(1|t,c,a,l))}function Po(e,t){tr(8390656,8,e,t)}function Fo(e,t){Yl(2048,8,e,t)}function Jo(e,t){return Yl(4,2,e,t)}function Wo(e,t){return Yl(4,4,e,t)}function Io(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function e2(e,t,a){a=a!=null?a.concat([e]):null,Yl(4,4,Io.bind(null,t,e),a)}function bu(){}function t2(e,t){var a=Ze();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&cu(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function a2(e,t){var a=Ze();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&cu(t,l[1]))return l[0];if(l=e(),rn){ga(!0);try{e()}finally{ga(!1)}}return a.memoizedState=[l,t],l}function xu(e,t,a){return a===void 0||(wa&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=is(),te.lanes|=e,za|=e,a)}function n2(e,t,a,l){return mt(a,t)?a:Un.current!==null?(e=xu(e,a,l),mt(e,t)||(Ue=!0),e):(wa&42)===0?(Ue=!0,e.memoizedState=a):(e=is(),te.lanes|=e,za|=e,t)}function l2(e,t,a,l,r){var c=L.p;L.p=c!==0&&8>c?c:8;var f=T.T,m={};T.T=m,Au(e,!1,t,a);try{var p=r(),M=T.S;if(M!==null&&M(m,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var D=g8(p,l);Xl(e,t,D,vt(e))}else Xl(e,t,l,vt(e))}catch(Z){Xl(e,t,{then:function(){},status:"rejected",reason:Z},vt())}finally{L.p=c,T.T=f}}function x8(){}function Su(e,t,a,l){if(e.tag!==5)throw Error(o(476));var r=i2(e).queue;l2(e,r,t,P,a===null?x8:function(){return r2(e),a(l)})}function i2(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:P},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function r2(e){var t=i2(e).next.queue;Xl(e,t,{},vt())}function wu(){return Fe(ci)}function u2(){return Ze().memoizedState}function c2(){return Ze().memoizedState}function S8(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=vt();e=xa(a);var l=Sa(t,e,a);l!==null&&(bt(l,t,a),Ul(l,t,a)),t={cache:W0()},e.payload=t;return}t=t.return}}function w8(e,t,a){var l=vt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ar(e)?s2(t,a):(a=k0(e,t,a,l),a!==null&&(bt(a,e,l),f2(a,t,l)))}function o2(e,t,a){var l=vt();Xl(e,t,a,l)}function Xl(e,t,a,l){var r={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ar(e))s2(t,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var f=t.lastRenderedState,m=c(f,a);if(r.hasEagerState=!0,r.eagerState=m,mt(m,f))return qi(e,t,r,0),Se===null&&Ui(),!1}catch{}finally{}if(a=k0(e,t,r,l),a!==null)return bt(a,e,l),f2(a,t,l),!0}return!1}function Au(e,t,a,l){if(l={lane:2,revertLane:tc(),action:l,hasEagerState:!1,eagerState:null,next:null},ar(e)){if(t)throw Error(o(479))}else t=k0(e,a,l,2),t!==null&&bt(t,e,2)}function ar(e){var t=e.alternate;return e===te||t!==null&&t===te}function s2(e,t){qn=Fi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function f2(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,v1(e,a)}}var nr={readContext:Fe,use:Wi,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De},d2={readContext:Fe,use:Wi,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Po,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,tr(4194308,4,Io.bind(null,t,e),a)},useLayoutEffect:function(e,t){return tr(4194308,4,e,t)},useInsertionEffect:function(e,t){tr(4,2,e,t)},useMemo:function(e,t){var a=ct();t=t===void 0?null:t;var l=e();if(rn){ga(!0);try{e()}finally{ga(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=ct();if(a!==void 0){var r=a(t);if(rn){ga(!0);try{a(t)}finally{ga(!1)}}}else r=t;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=w8.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:function(e){e=yu(e);var t=e.queue,a=o2.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:bu,useDeferredValue:function(e,t){var a=ct();return xu(a,e,t)},useTransition:function(){var e=yu(!1);return e=l2.bind(null,te,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,r=ct();if(se){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Se===null)throw Error(o(349));(re&124)!==0||Zo(l,t,a)}r.memoizedState=a;var c={value:a,getSnapshot:t};return r.queue=c,Po(Ro.bind(null,l,c,e),[e]),l.flags|=2048,Bn(9,er(),No.bind(null,l,c,a,t),null),a},useId:function(){var e=ct(),t=Se.identifierPrefix;if(se){var a=ta,l=ea;a=(l&~(1<<32-dt(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=Ji++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=p8++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:wu,useFormState:Xo,useActionState:Xo,useOptimistic:function(e){var t=ct();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Au.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:hu,useCacheRefresh:function(){return ct().memoizedState=S8.bind(null,te)}},m2={readContext:Fe,use:Wi,useCallback:t2,useContext:Fe,useEffect:Fo,useImperativeHandle:e2,useInsertionEffect:Jo,useLayoutEffect:Wo,useMemo:a2,useReducer:Ii,useRef:Ko,useState:function(){return Ii(la)},useDebugValue:bu,useDeferredValue:function(e,t){var a=Ze();return n2(a,ye.memoizedState,e,t)},useTransition:function(){var e=Ii(la)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:kl(e),t]},useSyncExternalStore:Ho,useId:u2,useHostTransitionStatus:wu,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){var a=Ze();return Uo(a,ye,e,t)},useMemoCache:hu,useCacheRefresh:c2},A8={readContext:Fe,use:Wi,useCallback:t2,useContext:Fe,useEffect:Fo,useImperativeHandle:e2,useInsertionEffect:Jo,useLayoutEffect:Wo,useMemo:a2,useReducer:pu,useRef:Ko,useState:function(){return pu(la)},useDebugValue:bu,useDeferredValue:function(e,t){var a=Ze();return ye===null?xu(a,e,t):n2(a,ye.memoizedState,e,t)},useTransition:function(){var e=pu(la)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:kl(e),t]},useSyncExternalStore:Ho,useId:u2,useHostTransitionStatus:wu,useFormState:Go,useActionState:Go,useOptimistic:function(e,t){var a=Ze();return ye!==null?Uo(a,ye,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:hu,useCacheRefresh:c2},kn=null,$l=0;function lr(e){var t=$l;return $l+=1,kn===null&&(kn=[]),Mo(kn,e,t)}function Ql(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ir(e,t){throw t.$$typeof===C?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function h2(e){var t=e._init;return t(e._payload)}function g2(e){function t(x,v){if(e){var A=x.deletions;A===null?(x.deletions=[v],x.flags|=16):A.push(v)}}function a(x,v){if(!e)return null;for(;v!==null;)t(x,v),v=v.sibling;return null}function l(x){for(var v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function r(x,v){return x=It(x,v),x.index=0,x.sibling=null,x}function c(x,v,A){return x.index=A,e?(A=x.alternate,A!==null?(A=A.index,A<v?(x.flags|=67108866,v):A):(x.flags|=67108866,v)):(x.flags|=1048576,v)}function f(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function m(x,v,A,H){return v===null||v.tag!==6?(v=X0(A,x.mode,H),v.return=x,v):(v=r(v,A),v.return=x,v)}function p(x,v,A,H){var V=A.type;return V===U?D(x,v,A.props.children,H,A.key):v!==null&&(v.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ce&&h2(V)===v.type)?(v=r(v,A.props),Ql(v,A),v.return=x,v):(v=Bi(A.type,A.key,A.props,null,x.mode,H),Ql(v,A),v.return=x,v)}function M(x,v,A,H){return v===null||v.tag!==4||v.stateNode.containerInfo!==A.containerInfo||v.stateNode.implementation!==A.implementation?(v=$0(A,x.mode,H),v.return=x,v):(v=r(v,A.children||[]),v.return=x,v)}function D(x,v,A,H,V){return v===null||v.tag!==7?(v=Ja(A,x.mode,H,V),v.return=x,v):(v=r(v,A),v.return=x,v)}function Z(x,v,A){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=X0(""+v,x.mode,A),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case z:return A=Bi(v.type,v.key,v.props,null,x.mode,A),Ql(A,v),A.return=x,A;case N:return v=$0(v,x.mode,A),v.return=x,v;case Ce:var H=v._init;return v=H(v._payload),Z(x,v,A)}if(Ht(v)||Ke(v))return v=Ja(v,x.mode,A,null),v.return=x,v;if(typeof v.then=="function")return Z(x,lr(v),A);if(v.$$typeof===_)return Z(x,$i(x,v),A);ir(x,v)}return null}function E(x,v,A,H){var V=v!==null?v.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return V!==null?null:m(x,v,""+A,H);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case z:return A.key===V?p(x,v,A,H):null;case N:return A.key===V?M(x,v,A,H):null;case Ce:return V=A._init,A=V(A._payload),E(x,v,A,H)}if(Ht(A)||Ke(A))return V!==null?null:D(x,v,A,H,null);if(typeof A.then=="function")return E(x,v,lr(A),H);if(A.$$typeof===_)return E(x,v,$i(x,A),H);ir(x,A)}return null}function j(x,v,A,H,V){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return x=x.get(A)||null,m(v,x,""+H,V);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case z:return x=x.get(H.key===null?A:H.key)||null,p(v,x,H,V);case N:return x=x.get(H.key===null?A:H.key)||null,M(v,x,H,V);case Ce:var ae=H._init;return H=ae(H._payload),j(x,v,A,H,V)}if(Ht(H)||Ke(H))return x=x.get(A)||null,D(v,x,H,V,null);if(typeof H.then=="function")return j(x,v,A,lr(H),V);if(H.$$typeof===_)return j(x,v,A,$i(v,H),V);ir(v,H)}return null}function F(x,v,A,H){for(var V=null,ae=null,B=v,G=v=0,Ve=null;B!==null&&G<A.length;G++){B.index>G?(Ve=B,B=null):Ve=B.sibling;var ce=E(x,B,A[G],H);if(ce===null){B===null&&(B=Ve);break}e&&B&&ce.alternate===null&&t(x,B),v=c(ce,v,G),ae===null?V=ce:ae.sibling=ce,ae=ce,B=Ve}if(G===A.length)return a(x,B),se&&Ia(x,G),V;if(B===null){for(;G<A.length;G++)B=Z(x,A[G],H),B!==null&&(v=c(B,v,G),ae===null?V=B:ae.sibling=B,ae=B);return se&&Ia(x,G),V}for(B=l(B);G<A.length;G++)Ve=j(B,x,G,A[G],H),Ve!==null&&(e&&Ve.alternate!==null&&B.delete(Ve.key===null?G:Ve.key),v=c(Ve,v,G),ae===null?V=Ve:ae.sibling=Ve,ae=Ve);return e&&B.forEach(function(Ua){return t(x,Ua)}),se&&Ia(x,G),V}function Q(x,v,A,H){if(A==null)throw Error(o(151));for(var V=null,ae=null,B=v,G=v=0,Ve=null,ce=A.next();B!==null&&!ce.done;G++,ce=A.next()){B.index>G?(Ve=B,B=null):Ve=B.sibling;var Ua=E(x,B,ce.value,H);if(Ua===null){B===null&&(B=Ve);break}e&&B&&Ua.alternate===null&&t(x,B),v=c(Ua,v,G),ae===null?V=Ua:ae.sibling=Ua,ae=Ua,B=Ve}if(ce.done)return a(x,B),se&&Ia(x,G),V;if(B===null){for(;!ce.done;G++,ce=A.next())ce=Z(x,ce.value,H),ce!==null&&(v=c(ce,v,G),ae===null?V=ce:ae.sibling=ce,ae=ce);return se&&Ia(x,G),V}for(B=l(B);!ce.done;G++,ce=A.next())ce=j(B,x,G,ce.value,H),ce!==null&&(e&&ce.alternate!==null&&B.delete(ce.key===null?G:ce.key),v=c(ce,v,G),ae===null?V=ce:ae.sibling=ce,ae=ce);return e&&B.forEach(function(M6){return t(x,M6)}),se&&Ia(x,G),V}function be(x,v,A,H){if(typeof A=="object"&&A!==null&&A.type===U&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case z:e:{for(var V=A.key;v!==null;){if(v.key===V){if(V=A.type,V===U){if(v.tag===7){a(x,v.sibling),H=r(v,A.props.children),H.return=x,x=H;break e}}else if(v.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ce&&h2(V)===v.type){a(x,v.sibling),H=r(v,A.props),Ql(H,A),H.return=x,x=H;break e}a(x,v);break}else t(x,v);v=v.sibling}A.type===U?(H=Ja(A.props.children,x.mode,H,A.key),H.return=x,x=H):(H=Bi(A.type,A.key,A.props,null,x.mode,H),Ql(H,A),H.return=x,x=H)}return f(x);case N:e:{for(V=A.key;v!==null;){if(v.key===V)if(v.tag===4&&v.stateNode.containerInfo===A.containerInfo&&v.stateNode.implementation===A.implementation){a(x,v.sibling),H=r(v,A.children||[]),H.return=x,x=H;break e}else{a(x,v);break}else t(x,v);v=v.sibling}H=$0(A,x.mode,H),H.return=x,x=H}return f(x);case Ce:return V=A._init,A=V(A._payload),be(x,v,A,H)}if(Ht(A))return F(x,v,A,H);if(Ke(A)){if(V=Ke(A),typeof V!="function")throw Error(o(150));return A=V.call(A),Q(x,v,A,H)}if(typeof A.then=="function")return be(x,v,lr(A),H);if(A.$$typeof===_)return be(x,v,$i(x,A),H);ir(x,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,v!==null&&v.tag===6?(a(x,v.sibling),H=r(v,A),H.return=x,x=H):(a(x,v),H=X0(A,x.mode,H),H.return=x,x=H),f(x)):a(x,v)}return function(x,v,A,H){try{$l=0;var V=be(x,v,A,H);return kn=null,V}catch(B){if(B===_l||B===Gi)throw B;var ae=ht(29,B,null,x.mode);return ae.lanes=H,ae.return=x,ae}finally{}}}var Yn=g2(!0),p2=g2(!1),Ct=ze(null),Vt=null;function Aa(e){var t=e.alternate;oe(_e,_e.current&1),oe(Ct,e),Vt===null&&(t===null||Un.current!==null||t.memoizedState!==null)&&(Vt=e)}function y2(e){if(e.tag===22){if(oe(_e,_e.current),oe(Ct,e),Vt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Vt=e)}}else Ma()}function Ma(){oe(_e,_e.current),oe(Ct,Ct.current)}function ia(e){ue(Ct),Vt===e&&(Vt=null),ue(_e)}var _e=ze(0);function rr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||mc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Mu(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:b({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Eu={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=vt(),r=xa(l);r.payload=t,a!=null&&(r.callback=a),t=Sa(e,r,l),t!==null&&(bt(t,e,l),Ul(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=vt(),r=xa(l);r.tag=1,r.payload=t,a!=null&&(r.callback=a),t=Sa(e,r,l),t!==null&&(bt(t,e,l),Ul(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=vt(),l=xa(a);l.tag=2,t!=null&&(l.callback=t),t=Sa(e,l,a),t!==null&&(bt(t,e,a),Ul(t,e,a))}};function v2(e,t,a,l,r,c,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,f):t.prototype&&t.prototype.isPureReactComponent?!Cl(a,l)||!Cl(r,c):!0}function b2(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Eu.enqueueReplaceState(t,t.state,null)}function un(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=b({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}var ur=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function x2(e){ur(e)}function S2(e){console.error(e)}function w2(e){ur(e)}function cr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function A2(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ju(e,t,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){cr(e,t)},a}function M2(e){return e=xa(e),e.tag=3,e}function E2(e,t,a,l){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var c=l.value;e.payload=function(){return r(c)},e.callback=function(){A2(t,a,l)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){A2(t,a,l),typeof r!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function M8(e,t,a,l,r){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Zl(t,a,r,!0),a=Ct.current,a!==null){switch(a.tag){case 13:return Vt===null?Fu():a.alternate===null&&Oe===0&&(Oe=3),a.flags&=-257,a.flags|=65536,a.lanes=r,l===tu?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Wu(e,l,r)),!1;case 22:return a.flags|=65536,l===tu?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Wu(e,l,r)),!1}throw Error(o(435,a.tag))}return Wu(e,l,r),Fu(),!1}if(se)return t=Ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,l!==K0&&(e=Error(o(422),{cause:l}),Hl(Mt(e,a)))):(l!==K0&&(t=Error(o(423),{cause:l}),Hl(Mt(t,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Mt(l,a),r=ju(e.stateNode,l,r),lu(e,r),Oe!==4&&(Oe=2)),!1;var c=Error(o(520),{cause:l});if(c=Mt(c,a),Il===null?Il=[c]:Il.push(c),Oe!==4&&(Oe=2),t===null)return!0;l=Mt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=ju(a.stateNode,l,e),lu(a,e),!1;case 1:if(t=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Da===null||!Da.has(c))))return a.flags|=65536,r&=-r,a.lanes|=r,r=M2(r),E2(r,e,a,l),lu(a,r),!1}a=a.return}while(a!==null);return!1}var j2=Error(o(461)),Ue=!1;function Xe(e,t,a,l){t.child=e===null?p2(t,null,a,l):Yn(t,e.child,a,l)}function O2(e,t,a,l,r){a=a.render;var c=t.ref;if("ref"in l){var f={};for(var m in l)m!=="ref"&&(f[m]=l[m])}else f=l;return nn(t),l=ou(e,t,a,f,c,r),m=su(),e!==null&&!Ue?(fu(e,t,r),ra(e,t,r)):(se&&m&&Q0(t),t.flags|=1,Xe(e,t,l,r),t.child)}function C2(e,t,a,l,r){if(e===null){var c=a.type;return typeof c=="function"&&!Y0(c)&&c.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=c,z2(e,t,c,l,r)):(e=Bi(a.type,null,l,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Nu(e,r)){var f=c.memoizedProps;if(a=a.compare,a=a!==null?a:Cl,a(f,l)&&e.ref===t.ref)return ra(e,t,r)}return t.flags|=1,e=It(c,l),e.ref=t.ref,e.return=t,t.child=e}function z2(e,t,a,l,r){if(e!==null){var c=e.memoizedProps;if(Cl(c,l)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=l=c,Nu(e,r))(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,ra(e,t,r)}return Ou(e,t,a,l,r)}function D2(e,t,a){var l=t.pendingProps,r=l.children,c=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=c!==null?c.baseLanes|a:a,e!==null){for(r=t.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;t.childLanes=c&~l}else t.childLanes=0,t.child=null;return T2(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qi(t,c!==null?c.cachePool:null),c!==null?zo(t,c):ru(),y2(t);else return t.lanes=t.childLanes=536870912,T2(e,t,c!==null?c.baseLanes|a:a,a)}else c!==null?(Qi(t,c.cachePool),zo(t,c),Ma(),t.memoizedState=null):(e!==null&&Qi(t,null),ru(),Ma());return Xe(e,t,r,a),t.child}function T2(e,t,a,l){var r=eu();return r=r===null?null:{parent:Re._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Qi(t,null),ru(),y2(t),e!==null&&Zl(e,t,l,!0),null}function or(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ou(e,t,a,l,r){return nn(t),a=ou(e,t,a,l,void 0,r),l=su(),e!==null&&!Ue?(fu(e,t,r),ra(e,t,r)):(se&&l&&Q0(t),t.flags|=1,Xe(e,t,a,r),t.child)}function H2(e,t,a,l,r,c){return nn(t),t.updateQueue=null,a=To(t,l,a,r),Do(e),l=su(),e!==null&&!Ue?(fu(e,t,c),ra(e,t,c)):(se&&l&&Q0(t),t.flags|=1,Xe(e,t,a,c),t.child)}function Z2(e,t,a,l,r){if(nn(t),t.stateNode===null){var c=Zn,f=a.contextType;typeof f=="object"&&f!==null&&(c=Fe(f)),c=new a(l,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Eu,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=l,c.state=t.memoizedState,c.refs={},au(t),f=a.contextType,c.context=typeof f=="object"&&f!==null?Fe(f):Zn,c.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(Mu(t,a,f,l),c.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(f=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),f!==c.state&&Eu.enqueueReplaceState(c,c.state,null),Vl(t,l,c,r),ql(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){c=t.stateNode;var m=t.memoizedProps,p=un(a,m);c.props=p;var M=c.context,D=a.contextType;f=Zn,typeof D=="object"&&D!==null&&(f=Fe(D));var Z=a.getDerivedStateFromProps;D=typeof Z=="function"||typeof c.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,D||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m||M!==f)&&b2(t,c,l,f),ba=!1;var E=t.memoizedState;c.state=E,Vl(t,l,c,r),ql(),M=t.memoizedState,m||E!==M||ba?(typeof Z=="function"&&(Mu(t,a,Z,l),M=t.memoizedState),(p=ba||v2(t,a,p,l,E,M,f))?(D||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=M),c.props=l,c.state=M,c.context=f,l=p):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{c=t.stateNode,nu(e,t),f=t.memoizedProps,D=un(a,f),c.props=D,Z=t.pendingProps,E=c.context,M=a.contextType,p=Zn,typeof M=="object"&&M!==null&&(p=Fe(M)),m=a.getDerivedStateFromProps,(M=typeof m=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==Z||E!==p)&&b2(t,c,l,p),ba=!1,E=t.memoizedState,c.state=E,Vl(t,l,c,r),ql();var j=t.memoizedState;f!==Z||E!==j||ba||e!==null&&e.dependencies!==null&&Xi(e.dependencies)?(typeof m=="function"&&(Mu(t,a,m,l),j=t.memoizedState),(D=ba||v2(t,a,D,l,E,j,p)||e!==null&&e.dependencies!==null&&Xi(e.dependencies))?(M||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,j,p),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,j,p)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=j),c.props=l,c.state=j,c.context=p,l=D):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),l=!1)}return c=l,or(e,t),l=(t.flags&128)!==0,c||l?(c=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&l?(t.child=Yn(t,e.child,null,r),t.child=Yn(t,null,a,r)):Xe(e,t,a,r),t.memoizedState=c.state,e=t.child):e=ra(e,t,r),e}function N2(e,t,a,l){return Tl(),t.flags|=256,Xe(e,t,a,l),t.child}var Cu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zu(e){return{baseLanes:e,cachePool:So()}}function Du(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=zt),e}function R2(e,t,a){var l=t.pendingProps,r=!1,c=(t.flags&128)!==0,f;if((f=c)||(f=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),f&&(r=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(r?Aa(t):Ma(),se){var m=je,p;if(p=m){e:{for(p=m,m=qt;p.nodeType!==8;){if(!m){m=null;break e}if(p=Rt(p.nextSibling),p===null){m=null;break e}}m=p}m!==null?(t.memoizedState={dehydrated:m,treeContext:Wa!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},p=ht(18,null,null,0),p.stateNode=m,p.return=t,t.child=p,et=t,je=null,p=!0):p=!1}p||tn(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return mc(m)?t.lanes=32:t.lanes=536870912,null;ia(t)}return m=l.children,l=l.fallback,r?(Ma(),r=t.mode,m=sr({mode:"hidden",children:m},r),l=Ja(l,r,a,null),m.return=t,l.return=t,m.sibling=l,t.child=m,r=t.child,r.memoizedState=zu(a),r.childLanes=Du(e,f,a),t.memoizedState=Cu,l):(Aa(t),Tu(t,m))}if(p=e.memoizedState,p!==null&&(m=p.dehydrated,m!==null)){if(c)t.flags&256?(Aa(t),t.flags&=-257,t=Hu(e,t,a)):t.memoizedState!==null?(Ma(),t.child=e.child,t.flags|=128,t=null):(Ma(),r=l.fallback,m=t.mode,l=sr({mode:"visible",children:l.children},m),r=Ja(r,m,a,null),r.flags|=2,l.return=t,r.return=t,l.sibling=r,t.child=l,Yn(t,e.child,null,a),l=t.child,l.memoizedState=zu(a),l.childLanes=Du(e,f,a),t.memoizedState=Cu,t=r);else if(Aa(t),mc(m)){if(f=m.nextSibling&&m.nextSibling.dataset,f)var M=f.dgst;f=M,l=Error(o(419)),l.stack="",l.digest=f,Hl({value:l,source:null,stack:null}),t=Hu(e,t,a)}else if(Ue||Zl(e,t,a,!1),f=(a&e.childLanes)!==0,Ue||f){if(f=Se,f!==null&&(l=a&-a,l=(l&42)!==0?1:h0(l),l=(l&(f.suspendedLanes|a))!==0?0:l,l!==0&&l!==p.retryLane))throw p.retryLane=l,Hn(e,l),bt(f,e,l),j2;m.data==="$?"||Fu(),t=Hu(e,t,a)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,je=Rt(m.nextSibling),et=t,se=!0,en=null,qt=!1,e!==null&&(jt[Ot++]=ea,jt[Ot++]=ta,jt[Ot++]=Wa,ea=e.id,ta=e.overflow,Wa=t),t=Tu(t,l.children),t.flags|=4096);return t}return r?(Ma(),r=l.fallback,m=t.mode,p=e.child,M=p.sibling,l=It(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,M!==null?r=It(M,r):(r=Ja(r,m,a,null),r.flags|=2),r.return=t,l.return=t,l.sibling=r,t.child=l,l=r,r=t.child,m=e.child.memoizedState,m===null?m=zu(a):(p=m.cachePool,p!==null?(M=Re._currentValue,p=p.parent!==M?{parent:M,pool:M}:p):p=So(),m={baseLanes:m.baseLanes|a,cachePool:p}),r.memoizedState=m,r.childLanes=Du(e,f,a),t.memoizedState=Cu,l):(Aa(t),a=e.child,e=a.sibling,a=It(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=a,t.memoizedState=null,a)}function Tu(e,t){return t=sr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function sr(e,t){return e=ht(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Hu(e,t,a){return Yn(t,e.child,null,a),e=Tu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _2(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),F0(e.return,t,a)}function Zu(e,t,a,l,r){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:r}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=r)}function L2(e,t,a){var l=t.pendingProps,r=l.revealOrder,c=l.tail;if(Xe(e,t,l.children,a),l=_e.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_2(e,a,t);else if(e.tag===19)_2(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(oe(_e,l),r){case"forwards":for(a=t.child,r=null;a!==null;)e=a.alternate,e!==null&&rr(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),Zu(t,!1,r,a,c);break;case"backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&rr(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}Zu(t,!0,a,null,c);break;case"together":Zu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ra(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),za|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Zl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=It(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=It(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Nu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xi(e)))}function E8(e,t,a){switch(t.tag){case 3:Lt(t,t.stateNode.containerInfo),va(t,Re,e.memoizedState.cache),Tl();break;case 27:case 5:$a(t);break;case 4:Lt(t,t.stateNode.containerInfo);break;case 10:va(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Aa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?R2(e,t,a):(Aa(t),e=ra(e,t,a),e!==null?e.sibling:null);Aa(t);break;case 19:var r=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Zl(e,t,a,!1),l=(a&t.childLanes)!==0),r){if(l)return L2(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),oe(_e,_e.current),l)break;return null;case 22:case 23:return t.lanes=0,D2(e,t,a);case 24:va(t,Re,e.memoizedState.cache)}return ra(e,t,a)}function U2(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ue=!0;else{if(!Nu(e,a)&&(t.flags&128)===0)return Ue=!1,E8(e,t,a);Ue=(e.flags&131072)!==0}else Ue=!1,se&&(t.flags&1048576)!==0&&ho(t,Yi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,r=l._init;if(l=r(l._payload),t.type=l,typeof l=="function")Y0(l)?(e=un(l,e),t.tag=1,t=Z2(null,t,l,e,a)):(t.tag=0,t=Ou(null,t,l,e,a));else{if(l!=null){if(r=l.$$typeof,r===$){t.tag=11,t=O2(null,t,l,e,a);break e}else if(r===X){t.tag=14,t=C2(null,t,l,e,a);break e}}throw t=Xa(l)||l,Error(o(306,t,""))}}return t;case 0:return Ou(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,r=un(l,t.pendingProps),Z2(e,t,l,r,a);case 3:e:{if(Lt(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var c=t.memoizedState;r=c.element,nu(e,t),Vl(t,l,null,a);var f=t.memoizedState;if(l=f.cache,va(t,Re,l),l!==c.cache&&J0(t,[Re],a,!0),ql(),l=f.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=N2(e,t,l,a);break e}else if(l!==r){r=Mt(Error(o(424)),t),Hl(r),t=N2(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=Rt(e.firstChild),et=t,se=!0,en=null,qt=!0,a=p2(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Tl(),l===r){t=ra(e,t,a);break e}Xe(e,t,l,a)}t=t.child}return t;case 26:return or(e,t),e===null?(a=ks(t.type,null,t.pendingProps,null))?t.memoizedState=a:se||(a=t.type,e=t.pendingProps,l=Mr(lt.current).createElement(a),l[Pe]=t,l[rt]=e,Qe(l,a,e),Le(l),t.stateNode=l):t.memoizedState=ks(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return $a(t),e===null&&se&&(l=t.stateNode=qs(t.type,t.pendingProps,lt.current),et=t,qt=!0,r=je,Za(t.type)?(hc=r,je=Rt(l.firstChild)):je=r),Xe(e,t,t.pendingProps.children,a),or(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((r=l=je)&&(l=I8(l,t.type,t.pendingProps,qt),l!==null?(t.stateNode=l,et=t,je=Rt(l.firstChild),qt=!1,r=!0):r=!1),r||tn(t)),$a(t),r=t.type,c=t.pendingProps,f=e!==null?e.memoizedProps:null,l=c.children,sc(r,c)?l=null:f!==null&&sc(r,f)&&(t.flags|=32),t.memoizedState!==null&&(r=ou(e,t,y8,null,null,a),ci._currentValue=r),or(e,t),Xe(e,t,l,a),t.child;case 6:return e===null&&se&&((e=a=je)&&(a=e6(a,t.pendingProps,qt),a!==null?(t.stateNode=a,et=t,je=null,e=!0):e=!1),e||tn(t)),null;case 13:return R2(e,t,a);case 4:return Lt(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Yn(t,null,l,a):Xe(e,t,l,a),t.child;case 11:return O2(e,t,t.type,t.pendingProps,a);case 7:return Xe(e,t,t.pendingProps,a),t.child;case 8:return Xe(e,t,t.pendingProps.children,a),t.child;case 12:return Xe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,va(t,t.type,l.value),Xe(e,t,l.children,a),t.child;case 9:return r=t.type._context,l=t.pendingProps.children,nn(t),r=Fe(r),l=l(r),t.flags|=1,Xe(e,t,l,a),t.child;case 14:return C2(e,t,t.type,t.pendingProps,a);case 15:return z2(e,t,t.type,t.pendingProps,a);case 19:return L2(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=sr(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=It(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return D2(e,t,a);case 24:return nn(t),l=Fe(Re),e===null?(r=eu(),r===null&&(r=Se,c=W0(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=a),r=c),t.memoizedState={parent:l,cache:r},au(t),va(t,Re,r)):((e.lanes&a)!==0&&(nu(e,t),Vl(t,null,null,a),ql()),r=e.memoizedState,c=t.memoizedState,r.parent!==l?(r={parent:l,cache:l},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),va(t,Re,l)):(l=c.cache,va(t,Re,l),l!==r.cache&&J0(t,[Re],a,!0))),Xe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function ua(e){e.flags|=4}function q2(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gs(t)){if(t=Ct.current,t!==null&&((re&4194048)===re?Vt!==null:(re&62914560)!==re&&(re&536870912)===0||t!==Vt))throw Ll=tu,wo;e.flags|=8192}}function fr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?p1():536870912,e.lanes|=t,Gn|=t)}function Gl(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function j8(e,t,a){var l=t.pendingProps;switch(G0(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),na(Re),it(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Dl(t)?ua(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yo())),Me(t),null;case 26:return a=t.memoizedState,e===null?(ua(t),a!==null?(Me(t),q2(t,a)):(Me(t),t.flags&=-16777217)):a?a!==e.memoizedState?(ua(t),Me(t),q2(t,a)):(Me(t),t.flags&=-16777217):(e.memoizedProps!==l&&ua(t),Me(t),t.flags&=-16777217),null;case 27:Ft(t),a=lt.current;var r=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ua(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Me(t),null}e=Ee.current,Dl(t)?go(t):(e=qs(r,l,a),t.stateNode=e,ua(t))}return Me(t),null;case 5:if(Ft(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ua(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Me(t),null}if(e=Ee.current,Dl(t))go(t);else{switch(r=Mr(lt.current),e){case 1:e=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?r.createElement(a,{is:l.is}):r.createElement(a)}}e[Pe]=t,e[rt]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=e;e:switch(Qe(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ua(t)}}return Me(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ua(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=lt.current,Dl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,r=et,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[Pe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Hs(e.nodeValue,a)),e||tn(t)}else e=Mr(e).createTextNode(l),e[Pe]=t,t.stateNode=e}return Me(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Dl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[Pe]=t}else Tl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),r=!1}else r=yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(ia(t),t):(ia(t),null)}if(ia(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool);var c=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==r&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),fr(t,t.updateQueue),Me(t),null;case 4:return it(),e===null&&ic(t.stateNode.containerInfo),Me(t),null;case 10:return na(t.type),Me(t),null;case 19:if(ue(_e),r=t.memoizedState,r===null)return Me(t),null;if(l=(t.flags&128)!==0,c=r.rendering,c===null)if(l)Gl(r,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=rr(e),c!==null){for(t.flags|=128,Gl(r,!1),e=c.updateQueue,t.updateQueue=e,fr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)mo(a,e),a=a.sibling;return oe(_e,_e.current&1|2),t.child}e=e.sibling}r.tail!==null&&Ut()>hr&&(t.flags|=128,l=!0,Gl(r,!1),t.lanes=4194304)}else{if(!l)if(e=rr(c),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,fr(t,e),Gl(r,!0),r.tail===null&&r.tailMode==="hidden"&&!c.alternate&&!se)return Me(t),null}else 2*Ut()-r.renderingStartTime>hr&&a!==536870912&&(t.flags|=128,l=!0,Gl(r,!1),t.lanes=4194304);r.isBackwards?(c.sibling=t.child,t.child=c):(e=r.last,e!==null?e.sibling=c:t.child=c,r.last=c)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Ut(),t.sibling=null,e=_e.current,oe(_e,l?e&1|2:e&1),t):(Me(t),null);case 22:case 23:return ia(t),uu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),a=t.updateQueue,a!==null&&fr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&ue(ln),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),na(Re),Me(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function O8(e,t){switch(G0(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(Re),it(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ft(t),null;case 13:if(ia(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Tl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(_e),null;case 4:return it(),null;case 10:return na(t.type),null;case 22:case 23:return ia(t),uu(),e!==null&&ue(ln),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(Re),null;case 25:return null;default:return null}}function V2(e,t){switch(G0(t),t.tag){case 3:na(Re),it();break;case 26:case 27:case 5:Ft(t);break;case 4:it();break;case 13:ia(t);break;case 19:ue(_e);break;case 10:na(t.type);break;case 22:case 23:ia(t),uu(),e!==null&&ue(ln);break;case 24:na(Re)}}function Kl(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){l=void 0;var c=a.create,f=a.inst;l=c(),f.destroy=l}a=a.next}while(a!==r)}}catch(m){xe(t,t.return,m)}}function Ea(e,t,a){try{var l=t.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var c=r.next;l=c;do{if((l.tag&e)===e){var f=l.inst,m=f.destroy;if(m!==void 0){f.destroy=void 0,r=t;var p=a,M=m;try{M()}catch(D){xe(r,p,D)}}}l=l.next}while(l!==c)}}catch(D){xe(t,t.return,D)}}function B2(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Co(t,a)}catch(l){xe(e,e.return,l)}}}function k2(e,t,a){a.props=un(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){xe(e,t,l)}}function Pl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(r){xe(e,t,r)}}function Bt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(r){xe(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){xe(e,t,r)}else a.current=null}function Y2(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(r){xe(e,e.return,r)}}function Ru(e,t,a){try{var l=e.stateNode;K8(l,e.type,a,t),l[rt]=t}catch(r){xe(e,e.return,r)}}function X2(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function _u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||X2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lu(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ar));else if(l!==4&&(l===27&&Za(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Lu(e,t,a),e=e.sibling;e!==null;)Lu(e,t,a),e=e.sibling}function dr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(dr(e,t,a),e=e.sibling;e!==null;)dr(e,t,a),e=e.sibling}function $2(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Qe(t,l,a),t[Pe]=e,t[rt]=a}catch(c){xe(e,e.return,c)}}var ca=!1,Te=!1,Uu=!1,Q2=typeof WeakSet=="function"?WeakSet:Set,qe=null;function C8(e,t){if(e=e.containerInfo,cc=Dr,e=ao(e),_0(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var r=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var f=0,m=-1,p=-1,M=0,D=0,Z=e,E=null;t:for(;;){for(var j;Z!==a||r!==0&&Z.nodeType!==3||(m=f+r),Z!==c||l!==0&&Z.nodeType!==3||(p=f+l),Z.nodeType===3&&(f+=Z.nodeValue.length),(j=Z.firstChild)!==null;)E=Z,Z=j;for(;;){if(Z===e)break t;if(E===a&&++M===r&&(m=f),E===c&&++D===l&&(p=f),(j=Z.nextSibling)!==null)break;Z=E,E=Z.parentNode}Z=j}a=m===-1||p===-1?null:{start:m,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(oc={focusedElem:e,selectionRange:a},Dr=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,c=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=t,r=c.memoizedProps,c=c.memoizedState,l=a.stateNode;try{var F=un(a.type,r,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(F,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(Q){xe(a,a.return,Q)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)dc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":dc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function G2(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ja(e,a),l&4&&Kl(5,a);break;case 1:if(ja(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(f){xe(a,a.return,f)}else{var r=un(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){xe(a,a.return,f)}}l&64&&B2(a),l&512&&Pl(a,a.return);break;case 3:if(ja(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Co(e,t)}catch(f){xe(a,a.return,f)}}break;case 27:t===null&&l&4&&$2(a);case 26:case 5:ja(e,a),t===null&&l&4&&Y2(a),l&512&&Pl(a,a.return);break;case 12:ja(e,a);break;case 13:ja(e,a),l&4&&F2(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=L8.bind(null,a),t6(e,a))));break;case 22:if(l=a.memoizedState!==null||ca,!l){t=t!==null&&t.memoizedState!==null||Te,r=ca;var c=Te;ca=l,(Te=t)&&!c?Oa(e,a,(a.subtreeFlags&8772)!==0):ja(e,a),ca=r,Te=c}break;case 30:break;default:ja(e,a)}}function K2(e){var t=e.alternate;t!==null&&(e.alternate=null,K2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&y0(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,ot=!1;function oa(e,t,a){for(a=a.child;a!==null;)P2(e,t,a),a=a.sibling}function P2(e,t,a){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(pl,a)}catch{}switch(a.tag){case 26:Te||Bt(a,t),oa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Te||Bt(a,t);var l=Ae,r=ot;Za(a.type)&&(Ae=a.stateNode,ot=!1),oa(e,t,a),li(a.stateNode),Ae=l,ot=r;break;case 5:Te||Bt(a,t);case 6:if(l=Ae,r=ot,Ae=null,oa(e,t,a),Ae=l,ot=r,Ae!==null)if(ot)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(a.stateNode)}catch(c){xe(a,t,c)}else try{Ae.removeChild(a.stateNode)}catch(c){xe(a,t,c)}break;case 18:Ae!==null&&(ot?(e=Ae,Ls(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),di(e)):Ls(Ae,a.stateNode));break;case 4:l=Ae,r=ot,Ae=a.stateNode.containerInfo,ot=!0,oa(e,t,a),Ae=l,ot=r;break;case 0:case 11:case 14:case 15:Te||Ea(2,a,t),Te||Ea(4,a,t),oa(e,t,a);break;case 1:Te||(Bt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&k2(a,t,l)),oa(e,t,a);break;case 21:oa(e,t,a);break;case 22:Te=(l=Te)||a.memoizedState!==null,oa(e,t,a),Te=l;break;default:oa(e,t,a)}}function F2(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{di(e)}catch(a){xe(t,t.return,a)}}function z8(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Q2),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Q2),t;default:throw Error(o(435,e.tag))}}function qu(e,t){var a=z8(e);t.forEach(function(l){var r=U8.bind(null,e,l);a.has(l)||(a.add(l),l.then(r,r))})}function gt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var r=a[l],c=e,f=t,m=f;e:for(;m!==null;){switch(m.tag){case 27:if(Za(m.type)){Ae=m.stateNode,ot=!1;break e}break;case 5:Ae=m.stateNode,ot=!1;break e;case 3:case 4:Ae=m.stateNode.containerInfo,ot=!0;break e}m=m.return}if(Ae===null)throw Error(o(160));P2(c,f,r),Ae=null,ot=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)J2(t,e),t=t.sibling}var Nt=null;function J2(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gt(t,e),pt(e),l&4&&(Ea(3,e,e.return),Kl(3,e),Ea(5,e,e.return));break;case 1:gt(t,e),pt(e),l&512&&(Te||a===null||Bt(a,a.return)),l&64&&ca&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var r=Nt;if(gt(t,e),pt(e),l&512&&(Te||a===null||Bt(a,a.return)),l&4){var c=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":c=r.getElementsByTagName("title")[0],(!c||c[bl]||c[Pe]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(l),r.head.insertBefore(c,r.querySelector("head > title"))),Qe(c,l,a),c[Pe]=e,Le(c),l=c;break e;case"link":var f=$s("link","href",r).get(l+(a.href||""));if(f){for(var m=0;m<f.length;m++)if(c=f[m],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(m,1);break t}}c=r.createElement(l),Qe(c,l,a),r.head.appendChild(c);break;case"meta":if(f=$s("meta","content",r).get(l+(a.content||""))){for(m=0;m<f.length;m++)if(c=f[m],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(m,1);break t}}c=r.createElement(l),Qe(c,l,a),r.head.appendChild(c);break;default:throw Error(o(468,l))}c[Pe]=e,Le(c),l=c}e.stateNode=l}else Qs(r,e.type,e.stateNode);else e.stateNode=Xs(r,l,e.memoizedProps);else c!==l?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,l===null?Qs(r,e.type,e.stateNode):Xs(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ru(e,e.memoizedProps,a.memoizedProps)}break;case 27:gt(t,e),pt(e),l&512&&(Te||a===null||Bt(a,a.return)),a!==null&&l&4&&Ru(e,e.memoizedProps,a.memoizedProps);break;case 5:if(gt(t,e),pt(e),l&512&&(Te||a===null||Bt(a,a.return)),e.flags&32){r=e.stateNode;try{En(r,"")}catch(j){xe(e,e.return,j)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,Ru(e,r,a!==null?a.memoizedProps:r)),l&1024&&(Uu=!0);break;case 6:if(gt(t,e),pt(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(j){xe(e,e.return,j)}}break;case 3:if(Or=null,r=Nt,Nt=Er(t.containerInfo),gt(t,e),Nt=r,pt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{di(t.containerInfo)}catch(j){xe(e,e.return,j)}Uu&&(Uu=!1,W2(e));break;case 4:l=Nt,Nt=Er(e.stateNode.containerInfo),gt(t,e),pt(e),Nt=l;break;case 12:gt(t,e),pt(e);break;case 13:gt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($u=Ut()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,qu(e,l)));break;case 22:r=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,M=ca,D=Te;if(ca=M||r,Te=D||p,gt(t,e),Te=D,ca=M,pt(e),l&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(a===null||p||ca||Te||cn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(c=p.stateNode,r)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{m=p.stateNode;var Z=p.memoizedProps.style,E=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;m.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(j){xe(p,p.return,j)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=r?"":p.memoizedProps}catch(j){xe(p,p.return,j)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,qu(e,a))));break;case 19:gt(t,e),pt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,qu(e,l)));break;case 30:break;case 21:break;default:gt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(X2(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var r=a.stateNode,c=_u(e);dr(e,c,r);break;case 5:var f=a.stateNode;a.flags&32&&(En(f,""),a.flags&=-33);var m=_u(e);dr(e,m,f);break;case 3:case 4:var p=a.stateNode.containerInfo,M=_u(e);Lu(e,M,p);break;default:throw Error(o(161))}}catch(D){xe(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function W2(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;W2(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ja(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)G2(e,t.alternate,t),t=t.sibling}function cn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ea(4,t,t.return),cn(t);break;case 1:Bt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&k2(t,t.return,a),cn(t);break;case 27:li(t.stateNode);case 26:case 5:Bt(t,t.return),cn(t);break;case 22:t.memoizedState===null&&cn(t);break;case 30:cn(t);break;default:cn(t)}e=e.sibling}}function Oa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,r=e,c=t,f=c.flags;switch(c.tag){case 0:case 11:case 15:Oa(r,c,a),Kl(4,c);break;case 1:if(Oa(r,c,a),l=c,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(M){xe(l,l.return,M)}if(l=c,r=l.updateQueue,r!==null){var m=l.stateNode;try{var p=r.shared.hiddenCallbacks;if(p!==null)for(r.shared.hiddenCallbacks=null,r=0;r<p.length;r++)Oo(p[r],m)}catch(M){xe(l,l.return,M)}}a&&f&64&&B2(c),Pl(c,c.return);break;case 27:$2(c);case 26:case 5:Oa(r,c,a),a&&l===null&&f&4&&Y2(c),Pl(c,c.return);break;case 12:Oa(r,c,a);break;case 13:Oa(r,c,a),a&&f&4&&F2(r,c);break;case 22:c.memoizedState===null&&Oa(r,c,a),Pl(c,c.return);break;case 30:break;default:Oa(r,c,a)}t=t.sibling}}function Vu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Nl(a))}function Bu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Nl(e))}function kt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)I2(e,t,a,l),t=t.sibling}function I2(e,t,a,l){var r=t.flags;switch(t.tag){case 0:case 11:case 15:kt(e,t,a,l),r&2048&&Kl(9,t);break;case 1:kt(e,t,a,l);break;case 3:kt(e,t,a,l),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Nl(e)));break;case 12:if(r&2048){kt(e,t,a,l),e=t.stateNode;try{var c=t.memoizedProps,f=c.id,m=c.onPostCommit;typeof m=="function"&&m(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){xe(t,t.return,p)}}else kt(e,t,a,l);break;case 13:kt(e,t,a,l);break;case 23:break;case 22:c=t.stateNode,f=t.alternate,t.memoizedState!==null?c._visibility&2?kt(e,t,a,l):Fl(e,t):c._visibility&2?kt(e,t,a,l):(c._visibility|=2,Xn(e,t,a,l,(t.subtreeFlags&10256)!==0)),r&2048&&Vu(f,t);break;case 24:kt(e,t,a,l),r&2048&&Bu(t.alternate,t);break;default:kt(e,t,a,l)}}function Xn(e,t,a,l,r){for(r=r&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var c=e,f=t,m=a,p=l,M=f.flags;switch(f.tag){case 0:case 11:case 15:Xn(c,f,m,p,r),Kl(8,f);break;case 23:break;case 22:var D=f.stateNode;f.memoizedState!==null?D._visibility&2?Xn(c,f,m,p,r):Fl(c,f):(D._visibility|=2,Xn(c,f,m,p,r)),r&&M&2048&&Vu(f.alternate,f);break;case 24:Xn(c,f,m,p,r),r&&M&2048&&Bu(f.alternate,f);break;default:Xn(c,f,m,p,r)}t=t.sibling}}function Fl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,r=l.flags;switch(l.tag){case 22:Fl(a,l),r&2048&&Vu(l.alternate,l);break;case 24:Fl(a,l),r&2048&&Bu(l.alternate,l);break;default:Fl(a,l)}t=t.sibling}}var Jl=8192;function $n(e){if(e.subtreeFlags&Jl)for(e=e.child;e!==null;)es(e),e=e.sibling}function es(e){switch(e.tag){case 26:$n(e),e.flags&Jl&&e.memoizedState!==null&&h6(Nt,e.memoizedState,e.memoizedProps);break;case 5:$n(e);break;case 3:case 4:var t=Nt;Nt=Er(e.stateNode.containerInfo),$n(e),Nt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Jl,Jl=16777216,$n(e),Jl=t):$n(e));break;default:$n(e)}}function ts(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Wl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,ns(l,e)}ts(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)as(e),e=e.sibling}function as(e){switch(e.tag){case 0:case 11:case 15:Wl(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:Wl(e);break;case 12:Wl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mr(e)):Wl(e);break;default:Wl(e)}}function mr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,ns(l,e)}ts(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ea(8,t,t.return),mr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,mr(t));break;default:mr(t)}e=e.sibling}}function ns(e,t){for(;qe!==null;){var a=qe;switch(a.tag){case 0:case 11:case 15:Ea(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Nl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,qe=l;else e:for(a=e;qe!==null;){l=qe;var r=l.sibling,c=l.return;if(K2(l),l===a){qe=null;break e}if(r!==null){r.return=c,qe=r;break e}qe=c}}}var D8={getCacheForType:function(e){var t=Fe(Re),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},T8=typeof WeakMap=="function"?WeakMap:Map,he=0,Se=null,ne=null,re=0,ge=0,yt=null,Ca=!1,Qn=!1,ku=!1,sa=0,Oe=0,za=0,on=0,Yu=0,zt=0,Gn=0,Il=null,st=null,Xu=!1,$u=0,hr=1/0,gr=null,Da=null,$e=0,Ta=null,Kn=null,Pn=0,Qu=0,Gu=null,ls=null,ei=0,Ku=null;function vt(){if((he&2)!==0&&re!==0)return re&-re;if(T.T!==null){var e=_n;return e!==0?e:tc()}return b1()}function is(){zt===0&&(zt=(re&536870912)===0||se?g1():536870912);var e=Ct.current;return e!==null&&(e.flags|=32),zt}function bt(e,t,a){(e===Se&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(Fn(e,0),Ha(e,re,zt,!1)),vl(e,a),((he&2)===0||e!==Se)&&(e===Se&&((he&2)===0&&(on|=a),Oe===4&&Ha(e,re,zt,!1)),Yt(e))}function rs(e,t,a){if((he&6)!==0)throw Error(o(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||yl(e,t),r=l?N8(e,t):Ju(e,t,!0),c=l;do{if(r===0){Qn&&!l&&Ha(e,t,0,!1);break}else{if(a=e.current.alternate,c&&!H8(a)){r=Ju(e,t,!1),c=!1;continue}if(r===2){if(c=t,e.errorRecoveryDisabledLanes&c)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var m=e;r=Il;var p=m.current.memoizedState.isDehydrated;if(p&&(Fn(m,f).flags|=256),f=Ju(m,f,!1),f!==2){if(ku&&!p){m.errorRecoveryDisabledLanes|=c,on|=c,r=4;break e}c=st,st=r,c!==null&&(st===null?st=c:st.push.apply(st,c))}r=f}if(c=!1,r!==2)continue}}if(r===1){Fn(e,0),Ha(e,t,0,!0);break}e:{switch(l=e,c=r,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Ha(l,t,zt,!Ca);break e;case 2:st=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=$u+300-Ut(),10<r)){if(Ha(l,t,zt,!Ca),ji(l,0,!0)!==0)break e;l.timeoutHandle=Rs(us.bind(null,l,a,st,gr,Xu,t,zt,on,Gn,Ca,c,2,-0,0),r);break e}us(l,a,st,gr,Xu,t,zt,on,Gn,Ca,c,0,-0,0)}}break}while(!0);Yt(e)}function us(e,t,a,l,r,c,f,m,p,M,D,Z,E,j){if(e.timeoutHandle=-1,Z=t.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(ui={stylesheets:null,count:0,unsuspend:m6},es(t),Z=g6(),Z!==null)){e.cancelPendingCommit=Z(hs.bind(null,e,t,c,a,l,r,f,m,p,D,1,E,j)),Ha(e,c,f,!M);return}hs(e,t,c,a,l,r,f,m,p)}function H8(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var r=a[l],c=r.getSnapshot;r=r.value;try{if(!mt(c(),r))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ha(e,t,a,l){t&=~Yu,t&=~on,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var r=t;0<r;){var c=31-dt(r),f=1<<c;l[c]=-1,r&=~f}a!==0&&y1(e,a,t)}function pr(){return(he&6)===0?(ti(0),!1):!0}function Pu(){if(ne!==null){if(ge===0)var e=ne.return;else e=ne,aa=an=null,du(e),kn=null,$l=0,e=ne;for(;e!==null;)V2(e.alternate,e),e=e.return;ne=null}}function Fn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,F8(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Pu(),Se=e,ne=a=It(e.current,null),re=t,ge=0,yt=null,Ca=!1,Qn=yl(e,t),ku=!1,Gn=zt=Yu=on=za=Oe=0,st=Il=null,Xu=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var r=31-dt(l),c=1<<r;t|=e[r],l&=~c}return sa=t,Ui(),a}function cs(e,t){te=null,T.H=nr,t===_l||t===Gi?(t=Eo(),ge=3):t===wo?(t=Eo(),ge=4):ge=t===j2?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,ne===null&&(Oe=1,cr(e,Mt(t,e.current)))}function os(){var e=T.H;return T.H=nr,e===null?nr:e}function ss(){var e=T.A;return T.A=D8,e}function Fu(){Oe=4,Ca||(re&4194048)!==re&&Ct.current!==null||(Qn=!0),(za&134217727)===0&&(on&134217727)===0||Se===null||Ha(Se,re,zt,!1)}function Ju(e,t,a){var l=he;he|=2;var r=os(),c=ss();(Se!==e||re!==t)&&(gr=null,Fn(e,t)),t=!1;var f=Oe;e:do try{if(ge!==0&&ne!==null){var m=ne,p=yt;switch(ge){case 8:Pu(),f=6;break e;case 3:case 2:case 9:case 6:Ct.current===null&&(t=!0);var M=ge;if(ge=0,yt=null,Jn(e,m,p,M),a&&Qn){f=0;break e}break;default:M=ge,ge=0,yt=null,Jn(e,m,p,M)}}Z8(),f=Oe;break}catch(D){cs(e,D)}while(!0);return t&&e.shellSuspendCounter++,aa=an=null,he=l,T.H=r,T.A=c,ne===null&&(Se=null,re=0,Ui()),f}function Z8(){for(;ne!==null;)fs(ne)}function N8(e,t){var a=he;he|=2;var l=os(),r=ss();Se!==e||re!==t?(gr=null,hr=Ut()+500,Fn(e,t)):Qn=yl(e,t);e:do try{if(ge!==0&&ne!==null){t=ne;var c=yt;t:switch(ge){case 1:ge=0,yt=null,Jn(e,t,c,1);break;case 2:case 9:if(Ao(c)){ge=0,yt=null,ds(t);break}t=function(){ge!==2&&ge!==9||Se!==e||(ge=7),Yt(e)},c.then(t,t);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:Ao(c)?(ge=0,yt=null,ds(t)):(ge=0,yt=null,Jn(e,t,c,7));break;case 5:var f=null;switch(ne.tag){case 26:f=ne.memoizedState;case 5:case 27:var m=ne;if(!f||Gs(f)){ge=0,yt=null;var p=m.sibling;if(p!==null)ne=p;else{var M=m.return;M!==null?(ne=M,yr(M)):ne=null}break t}}ge=0,yt=null,Jn(e,t,c,5);break;case 6:ge=0,yt=null,Jn(e,t,c,6);break;case 8:Pu(),Oe=6;break e;default:throw Error(o(462))}}R8();break}catch(D){cs(e,D)}while(!0);return aa=an=null,T.H=l,T.A=r,he=a,ne!==null?0:(Se=null,re=0,Ui(),Oe)}function R8(){for(;ne!==null&&!nm();)fs(ne)}function fs(e){var t=U2(e.alternate,e,sa);e.memoizedProps=e.pendingProps,t===null?yr(e):ne=t}function ds(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=H2(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=H2(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:du(t);default:V2(a,t),t=ne=mo(t,sa),t=U2(a,t,sa)}e.memoizedProps=e.pendingProps,t===null?yr(e):ne=t}function Jn(e,t,a,l){aa=an=null,du(t),kn=null,$l=0;var r=t.return;try{if(M8(e,r,t,a,re)){Oe=1,cr(e,Mt(a,e.current)),ne=null;return}}catch(c){if(r!==null)throw ne=r,c;Oe=1,cr(e,Mt(a,e.current)),ne=null;return}t.flags&32768?(se||l===1?e=!0:Qn||(re&536870912)!==0?e=!1:(Ca=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ct.current,l!==null&&l.tag===13&&(l.flags|=16384))),ms(t,e)):yr(t)}function yr(e){var t=e;do{if((t.flags&32768)!==0){ms(t,Ca);return}e=t.return;var a=j8(t.alternate,t,sa);if(a!==null){ne=a;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Oe===0&&(Oe=5)}function ms(e,t){do{var a=O8(e.alternate,e);if(a!==null){a.flags&=32767,ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=a}while(e!==null);Oe=6,ne=null}function hs(e,t,a,l,r,c,f,m,p){e.cancelPendingCommit=null;do vr();while($e!==0);if((he&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=B0,mm(e,a,c,f,m,p),e===Se&&(ne=Se=null,re=0),Kn=t,Ta=e,Pn=a,Qu=c,Gu=r,ls=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,q8(Ai,function(){return bs(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=T.T,T.T=null,r=L.p,L.p=2,f=he,he|=4;try{C8(e,t,a)}finally{he=f,L.p=r,T.T=l}}$e=1,gs(),ps(),ys()}}function gs(){if($e===1){$e=0;var e=Ta,t=Kn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=T.T,T.T=null;var l=L.p;L.p=2;var r=he;he|=4;try{J2(t,e);var c=oc,f=ao(e.containerInfo),m=c.focusedElem,p=c.selectionRange;if(f!==m&&m&&m.ownerDocument&&to(m.ownerDocument.documentElement,m)){if(p!==null&&_0(m)){var M=p.start,D=p.end;if(D===void 0&&(D=M),"selectionStart"in m)m.selectionStart=M,m.selectionEnd=Math.min(D,m.value.length);else{var Z=m.ownerDocument||document,E=Z&&Z.defaultView||window;if(E.getSelection){var j=E.getSelection(),F=m.textContent.length,Q=Math.min(p.start,F),be=p.end===void 0?Q:Math.min(p.end,F);!j.extend&&Q>be&&(f=be,be=Q,Q=f);var x=eo(m,Q),v=eo(m,be);if(x&&v&&(j.rangeCount!==1||j.anchorNode!==x.node||j.anchorOffset!==x.offset||j.focusNode!==v.node||j.focusOffset!==v.offset)){var A=Z.createRange();A.setStart(x.node,x.offset),j.removeAllRanges(),Q>be?(j.addRange(A),j.extend(v.node,v.offset)):(A.setEnd(v.node,v.offset),j.addRange(A))}}}}for(Z=[],j=m;j=j.parentNode;)j.nodeType===1&&Z.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<Z.length;m++){var H=Z[m];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}Dr=!!cc,oc=cc=null}finally{he=r,L.p=l,T.T=a}}e.current=t,$e=2}}function ps(){if($e===2){$e=0;var e=Ta,t=Kn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=T.T,T.T=null;var l=L.p;L.p=2;var r=he;he|=4;try{G2(e,t.alternate,t)}finally{he=r,L.p=l,T.T=a}}$e=3}}function ys(){if($e===4||$e===3){$e=0,lm();var e=Ta,t=Kn,a=Pn,l=ls;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$e=5:($e=0,Kn=Ta=null,vs(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Da=null),g0(a),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(pl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=T.T,r=L.p,L.p=2,T.T=null;try{for(var c=e.onRecoverableError,f=0;f<l.length;f++){var m=l[f];c(m.value,{componentStack:m.stack})}}finally{T.T=t,L.p=r}}(Pn&3)!==0&&vr(),Yt(e),r=e.pendingLanes,(a&4194090)!==0&&(r&42)!==0?e===Ku?ei++:(ei=0,Ku=e):ei=0,ti(0)}}function vs(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Nl(t)))}function vr(e){return gs(),ps(),ys(),bs()}function bs(){if($e!==5)return!1;var e=Ta,t=Qu;Qu=0;var a=g0(Pn),l=T.T,r=L.p;try{L.p=32>a?32:a,T.T=null,a=Gu,Gu=null;var c=Ta,f=Pn;if($e=0,Kn=Ta=null,Pn=0,(he&6)!==0)throw Error(o(331));var m=he;if(he|=4,as(c.current),I2(c,c.current,f,a),he=m,ti(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(pl,c)}catch{}return!0}finally{L.p=r,T.T=l,vs(e,t)}}function xs(e,t,a){t=Mt(a,t),t=ju(e.stateNode,t,2),e=Sa(e,t,2),e!==null&&(vl(e,2),Yt(e))}function xe(e,t,a){if(e.tag===3)xs(e,e,a);else for(;t!==null;){if(t.tag===3){xs(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Da===null||!Da.has(l))){e=Mt(a,e),a=M2(2),l=Sa(t,a,2),l!==null&&(E2(a,l,t,e),vl(l,2),Yt(l));break}}t=t.return}}function Wu(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new T8;var r=new Set;l.set(t,r)}else r=l.get(t),r===void 0&&(r=new Set,l.set(t,r));r.has(a)||(ku=!0,r.add(a),e=_8.bind(null,e,t,a),t.then(e,e))}function _8(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Se===e&&(re&a)===a&&(Oe===4||Oe===3&&(re&62914560)===re&&300>Ut()-$u?(he&2)===0&&Fn(e,0):Yu|=a,Gn===re&&(Gn=0)),Yt(e)}function Ss(e,t){t===0&&(t=p1()),e=Hn(e,t),e!==null&&(vl(e,t),Yt(e))}function L8(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Ss(e,a)}function U8(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Ss(e,a)}function q8(e,t){return f0(e,t)}var br=null,Wn=null,Iu=!1,xr=!1,ec=!1,sn=0;function Yt(e){e!==Wn&&e.next===null&&(Wn===null?br=Wn=e:Wn=Wn.next=e),xr=!0,Iu||(Iu=!0,B8())}function ti(e,t){if(!ec&&xr){ec=!0;do for(var a=!1,l=br;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var c=0;else{var f=l.suspendedLanes,m=l.pingedLanes;c=(1<<31-dt(42|e)+1)-1,c&=r&~(f&~m),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Es(l,c))}else c=re,c=ji(l,l===Se?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||yl(l,c)||(a=!0,Es(l,c));l=l.next}while(a);ec=!1}}function V8(){ws()}function ws(){xr=Iu=!1;var e=0;sn!==0&&(P8()&&(e=sn),sn=0);for(var t=Ut(),a=null,l=br;l!==null;){var r=l.next,c=As(l,t);c===0?(l.next=null,a===null?br=r:a.next=r,r===null&&(Wn=a)):(a=l,(e!==0||(c&3)!==0)&&(xr=!0)),l=r}ti(e)}function As(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var f=31-dt(c),m=1<<f,p=r[f];p===-1?((m&a)===0||(m&l)!==0)&&(r[f]=dm(m,t)):p<=t&&(e.expiredLanes|=m),c&=~m}if(t=Se,a=re,a=ji(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&d0(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||yl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&d0(l),g0(a)){case 2:case 8:a=m1;break;case 32:a=Ai;break;case 268435456:a=h1;break;default:a=Ai}return l=Ms.bind(null,e),a=f0(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&d0(l),e.callbackPriority=2,e.callbackNode=null,2}function Ms(e,t){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(vr()&&e.callbackNode!==a)return null;var l=re;return l=ji(e,e===Se?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(rs(e,l,t),As(e,Ut()),e.callbackNode!=null&&e.callbackNode===a?Ms.bind(null,e):null)}function Es(e,t){if(vr())return null;rs(e,t,!0)}function B8(){J8(function(){(he&6)!==0?f0(d1,V8):ws()})}function tc(){return sn===0&&(sn=g1()),sn}function js(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ti(""+e)}function Os(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function k8(e,t,a,l,r){if(t==="submit"&&a&&a.stateNode===r){var c=js((r[rt]||null).action),f=l.submitter;f&&(t=(t=f[rt]||null)?js(t.formAction):f.getAttribute("formAction"),t!==null&&(c=t,f=null));var m=new Ri("action","action",null,l,r);e.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(sn!==0){var p=f?Os(r,f):new FormData(r);Su(a,{pending:!0,data:p,method:r.method,action:c},null,p)}}else typeof c=="function"&&(m.preventDefault(),p=f?Os(r,f):new FormData(r),Su(a,{pending:!0,data:p,method:r.method,action:c},c,p))},currentTarget:r}]})}}for(var ac=0;ac<V0.length;ac++){var nc=V0[ac],Y8=nc.toLowerCase(),X8=nc[0].toUpperCase()+nc.slice(1);Zt(Y8,"on"+X8)}Zt(io,"onAnimationEnd"),Zt(ro,"onAnimationIteration"),Zt(uo,"onAnimationStart"),Zt("dblclick","onDoubleClick"),Zt("focusin","onFocus"),Zt("focusout","onBlur"),Zt(u8,"onTransitionRun"),Zt(c8,"onTransitionStart"),Zt(o8,"onTransitionCancel"),Zt(co,"onTransitionEnd"),wn("onMouseEnter",["mouseout","mouseover"]),wn("onMouseLeave",["mouseout","mouseover"]),wn("onPointerEnter",["pointerout","pointerover"]),wn("onPointerLeave",["pointerout","pointerover"]),Ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$8=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ai));function Cs(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],r=l.event;l=l.listeners;e:{var c=void 0;if(t)for(var f=l.length-1;0<=f;f--){var m=l[f],p=m.instance,M=m.currentTarget;if(m=m.listener,p!==c&&r.isPropagationStopped())break e;c=m,r.currentTarget=M;try{c(r)}catch(D){ur(D)}r.currentTarget=null,c=p}else for(f=0;f<l.length;f++){if(m=l[f],p=m.instance,M=m.currentTarget,m=m.listener,p!==c&&r.isPropagationStopped())break e;c=m,r.currentTarget=M;try{c(r)}catch(D){ur(D)}r.currentTarget=null,c=p}}}}function le(e,t){var a=t[p0];a===void 0&&(a=t[p0]=new Set);var l=e+"__bubble";a.has(l)||(zs(t,e,2,!1),a.add(l))}function lc(e,t,a){var l=0;t&&(l|=4),zs(a,e,l,t)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function ic(e){if(!e[Sr]){e[Sr]=!0,S1.forEach(function(a){a!=="selectionchange"&&($8.has(a)||lc(a,!1,e),lc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sr]||(t[Sr]=!0,lc("selectionchange",!1,t))}}function zs(e,t,a,l){switch(Is(t)){case 2:var r=v6;break;case 8:r=b6;break;default:r=bc}a=r.bind(null,t,a,e),r=void 0,!O0||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function rc(e,t,a,l,r){var c=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var f=l.tag;if(f===3||f===4){var m=l.stateNode.containerInfo;if(m===r)break;if(f===4)for(f=l.return;f!==null;){var p=f.tag;if((p===3||p===4)&&f.stateNode.containerInfo===r)return;f=f.return}for(;m!==null;){if(f=bn(m),f===null)return;if(p=f.tag,p===5||p===6||p===26||p===27){l=c=f;continue e}m=m.parentNode}}l=l.return}R1(function(){var M=c,D=E0(a),Z=[];e:{var E=oo.get(e);if(E!==void 0){var j=Ri,F=e;switch(e){case"keypress":if(Zi(a)===0)break e;case"keydown":case"keyup":j=qm;break;case"focusin":F="focus",j=T0;break;case"focusout":F="blur",j=T0;break;case"beforeblur":case"afterblur":j=T0;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=U1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=km;break;case io:case ro:case uo:j=Dm;break;case co:j=Xm;break;case"scroll":case"scrollend":j=Em;break;case"wheel":j=Qm;break;case"copy":case"cut":case"paste":j=Hm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=V1;break;case"toggle":case"beforetoggle":j=Km}var Q=(t&4)!==0,be=!Q&&(e==="scroll"||e==="scrollend"),x=Q?E!==null?E+"Capture":null:E;Q=[];for(var v=M,A;v!==null;){var H=v;if(A=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||A===null||x===null||(H=Sl(v,x),H!=null&&Q.push(ni(v,H,A))),be)break;v=v.return}0<Q.length&&(E=new j(E,F,null,a,D),Z.push({event:E,listeners:Q}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",E&&a!==M0&&(F=a.relatedTarget||a.fromElement)&&(bn(F)||F[vn]))break e;if((j||E)&&(E=D.window===D?D:(E=D.ownerDocument)?E.defaultView||E.parentWindow:window,j?(F=a.relatedTarget||a.toElement,j=M,F=F?bn(F):null,F!==null&&(be=g(F),Q=F.tag,F!==be||Q!==5&&Q!==27&&Q!==6)&&(F=null)):(j=null,F=M),j!==F)){if(Q=U1,H="onMouseLeave",x="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(Q=V1,H="onPointerLeave",x="onPointerEnter",v="pointer"),be=j==null?E:xl(j),A=F==null?E:xl(F),E=new Q(H,v+"leave",j,a,D),E.target=be,E.relatedTarget=A,H=null,bn(D)===M&&(Q=new Q(x,v+"enter",F,a,D),Q.target=A,Q.relatedTarget=be,H=Q),be=H,j&&F)t:{for(Q=j,x=F,v=0,A=Q;A;A=In(A))v++;for(A=0,H=x;H;H=In(H))A++;for(;0<v-A;)Q=In(Q),v--;for(;0<A-v;)x=In(x),A--;for(;v--;){if(Q===x||x!==null&&Q===x.alternate)break t;Q=In(Q),x=In(x)}Q=null}else Q=null;j!==null&&Ds(Z,E,j,Q,!1),F!==null&&be!==null&&Ds(Z,be,F,Q,!0)}}e:{if(E=M?xl(M):window,j=E.nodeName&&E.nodeName.toLowerCase(),j==="select"||j==="input"&&E.type==="file")var V=K1;else if(Q1(E))if(P1)V=l8;else{V=a8;var ae=t8}else j=E.nodeName,!j||j.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?M&&A0(M.elementType)&&(V=K1):V=n8;if(V&&(V=V(e,M))){G1(Z,V,a,D);break e}ae&&ae(e,E,M),e==="focusout"&&M&&E.type==="number"&&M.memoizedProps.value!=null&&w0(E,"number",E.value)}switch(ae=M?xl(M):window,e){case"focusin":(Q1(ae)||ae.contentEditable==="true")&&(zn=ae,L0=M,zl=null);break;case"focusout":zl=L0=zn=null;break;case"mousedown":U0=!0;break;case"contextmenu":case"mouseup":case"dragend":U0=!1,no(Z,a,D);break;case"selectionchange":if(r8)break;case"keydown":case"keyup":no(Z,a,D)}var B;if(Z0)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Cn?X1(e,a)&&(G="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(G="onCompositionStart");G&&(B1&&a.locale!=="ko"&&(Cn||G!=="onCompositionStart"?G==="onCompositionEnd"&&Cn&&(B=_1()):(ya=D,C0="value"in ya?ya.value:ya.textContent,Cn=!0)),ae=wr(M,G),0<ae.length&&(G=new q1(G,e,null,a,D),Z.push({event:G,listeners:ae}),B?G.data=B:(B=$1(a),B!==null&&(G.data=B)))),(B=Fm?Jm(e,a):Wm(e,a))&&(G=wr(M,"onBeforeInput"),0<G.length&&(ae=new q1("onBeforeInput","beforeinput",null,a,D),Z.push({event:ae,listeners:G}),ae.data=B)),k8(Z,e,M,a,D)}Cs(Z,t)})}function ni(e,t,a){return{instance:e,listener:t,currentTarget:a}}function wr(e,t){for(var a=t+"Capture",l=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=Sl(e,a),r!=null&&l.unshift(ni(e,r,c)),r=Sl(e,t),r!=null&&l.push(ni(e,r,c))),e.tag===3)return l;e=e.return}return[]}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ds(e,t,a,l,r){for(var c=t._reactName,f=[];a!==null&&a!==l;){var m=a,p=m.alternate,M=m.stateNode;if(m=m.tag,p!==null&&p===l)break;m!==5&&m!==26&&m!==27||M===null||(p=M,r?(M=Sl(a,c),M!=null&&f.unshift(ni(a,M,p))):r||(M=Sl(a,c),M!=null&&f.push(ni(a,M,p)))),a=a.return}f.length!==0&&e.push({event:t,listeners:f})}var Q8=/\r\n?/g,G8=/\u0000|\uFFFD/g;function Ts(e){return(typeof e=="string"?e:""+e).replace(Q8,`
`).replace(G8,"")}function Hs(e,t){return t=Ts(t),Ts(e)===t}function Ar(){}function ve(e,t,a,l,r,c){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||En(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&En(e,""+l);break;case"className":Ci(e,"class",l);break;case"tabIndex":Ci(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ci(e,a,l);break;case"style":Z1(e,l,c);break;case"data":if(t!=="object"){Ci(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ti(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(t!=="input"&&ve(e,t,"name",r.name,r,null),ve(e,t,"formEncType",r.formEncType,r,null),ve(e,t,"formMethod",r.formMethod,r,null),ve(e,t,"formTarget",r.formTarget,r,null)):(ve(e,t,"encType",r.encType,r,null),ve(e,t,"method",r.method,r,null),ve(e,t,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ti(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Ar);break;case"onScroll":l!=null&&le("scroll",e);break;case"onScrollEnd":l!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Ti(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":le("beforetoggle",e),le("toggle",e),Oi(e,"popover",l);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Oi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Am.get(a)||a,Oi(e,a,l))}}function uc(e,t,a,l,r,c){switch(a){case"style":Z1(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?En(e,l):(typeof l=="number"||typeof l=="bigint")&&En(e,""+l);break;case"onScroll":l!=null&&le("scroll",e);break;case"onScrollEnd":l!=null&&le("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ar);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w1.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),t=a.slice(2,r?a.length-7:void 0),c=e[rt]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(t,c,r),typeof l=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,r);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Oi(e,a,l)}}}function Qe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var l=!1,r=!1,c;for(c in a)if(a.hasOwnProperty(c)){var f=a[c];if(f!=null)switch(c){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ve(e,t,c,f,a,null)}}r&&ve(e,t,"srcSet",a.srcSet,a,null),l&&ve(e,t,"src",a.src,a,null);return;case"input":le("invalid",e);var m=c=f=r=null,p=null,M=null;for(l in a)if(a.hasOwnProperty(l)){var D=a[l];if(D!=null)switch(l){case"name":r=D;break;case"type":f=D;break;case"checked":p=D;break;case"defaultChecked":M=D;break;case"value":c=D;break;case"defaultValue":m=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,t));break;default:ve(e,t,l,D,a,null)}}z1(e,c,m,p,M,f,r,!1),zi(e);return;case"select":le("invalid",e),l=f=c=null;for(r in a)if(a.hasOwnProperty(r)&&(m=a[r],m!=null))switch(r){case"value":c=m;break;case"defaultValue":f=m;break;case"multiple":l=m;default:ve(e,t,r,m,a,null)}t=c,a=f,e.multiple=!!l,t!=null?Mn(e,!!l,t,!1):a!=null&&Mn(e,!!l,a,!0);return;case"textarea":le("invalid",e),c=r=l=null;for(f in a)if(a.hasOwnProperty(f)&&(m=a[f],m!=null))switch(f){case"value":l=m;break;case"defaultValue":r=m;break;case"children":c=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(o(91));break;default:ve(e,t,f,m,a,null)}T1(e,l,r,c),zi(e);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ve(e,t,p,l,a,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(l=0;l<ai.length;l++)le(ai[l],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in a)if(a.hasOwnProperty(M)&&(l=a[M],l!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ve(e,t,M,l,a,null)}return;default:if(A0(t)){for(D in a)a.hasOwnProperty(D)&&(l=a[D],l!==void 0&&uc(e,t,D,l,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(l=a[m],l!=null&&ve(e,t,m,l,a,null))}function K8(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,f=null,m=null,p=null,M=null,D=null;for(j in a){var Z=a[j];if(a.hasOwnProperty(j)&&Z!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":p=Z;default:l.hasOwnProperty(j)||ve(e,t,j,null,l,Z)}}for(var E in l){var j=l[E];if(Z=a[E],l.hasOwnProperty(E)&&(j!=null||Z!=null))switch(E){case"type":c=j;break;case"name":r=j;break;case"checked":M=j;break;case"defaultChecked":D=j;break;case"value":f=j;break;case"defaultValue":m=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(o(137,t));break;default:j!==Z&&ve(e,t,E,j,l,Z)}}S0(e,f,m,p,M,D,c,r);return;case"select":j=f=m=E=null;for(c in a)if(p=a[c],a.hasOwnProperty(c)&&p!=null)switch(c){case"value":break;case"multiple":j=p;default:l.hasOwnProperty(c)||ve(e,t,c,null,l,p)}for(r in l)if(c=l[r],p=a[r],l.hasOwnProperty(r)&&(c!=null||p!=null))switch(r){case"value":E=c;break;case"defaultValue":m=c;break;case"multiple":f=c;default:c!==p&&ve(e,t,r,c,l,p)}t=m,a=f,l=j,E!=null?Mn(e,!!a,E,!1):!!l!=!!a&&(t!=null?Mn(e,!!a,t,!0):Mn(e,!!a,a?[]:"",!1));return;case"textarea":j=E=null;for(m in a)if(r=a[m],a.hasOwnProperty(m)&&r!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:ve(e,t,m,null,l,r)}for(f in l)if(r=l[f],c=a[f],l.hasOwnProperty(f)&&(r!=null||c!=null))switch(f){case"value":E=r;break;case"defaultValue":j=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==c&&ve(e,t,f,r,l,c)}D1(e,E,j);return;case"option":for(var F in a)if(E=a[F],a.hasOwnProperty(F)&&E!=null&&!l.hasOwnProperty(F))switch(F){case"selected":e.selected=!1;break;default:ve(e,t,F,null,l,E)}for(p in l)if(E=l[p],j=a[p],l.hasOwnProperty(p)&&E!==j&&(E!=null||j!=null))switch(p){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:ve(e,t,p,E,l,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in a)E=a[Q],a.hasOwnProperty(Q)&&E!=null&&!l.hasOwnProperty(Q)&&ve(e,t,Q,null,l,E);for(M in l)if(E=l[M],j=a[M],l.hasOwnProperty(M)&&E!==j&&(E!=null||j!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(137,t));break;default:ve(e,t,M,E,l,j)}return;default:if(A0(t)){for(var be in a)E=a[be],a.hasOwnProperty(be)&&E!==void 0&&!l.hasOwnProperty(be)&&uc(e,t,be,void 0,l,E);for(D in l)E=l[D],j=a[D],!l.hasOwnProperty(D)||E===j||E===void 0&&j===void 0||uc(e,t,D,E,l,j);return}}for(var x in a)E=a[x],a.hasOwnProperty(x)&&E!=null&&!l.hasOwnProperty(x)&&ve(e,t,x,null,l,E);for(Z in l)E=l[Z],j=a[Z],!l.hasOwnProperty(Z)||E===j||E==null&&j==null||ve(e,t,Z,E,l,j)}var cc=null,oc=null;function Mr(e){return e.nodeType===9?e:e.ownerDocument}function Zs(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ns(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function sc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fc=null;function P8(){var e=window.event;return e&&e.type==="popstate"?e===fc?!1:(fc=e,!0):(fc=null,!1)}var Rs=typeof setTimeout=="function"?setTimeout:void 0,F8=typeof clearTimeout=="function"?clearTimeout:void 0,_s=typeof Promise=="function"?Promise:void 0,J8=typeof queueMicrotask=="function"?queueMicrotask:typeof _s<"u"?function(e){return _s.resolve(null).then(e).catch(W8)}:Rs;function W8(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function Ls(e,t){var a=t,l=0,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(0<l&&8>l){a=l;var f=e.ownerDocument;if(a&1&&li(f.documentElement),a&2&&li(f.body),a&4)for(a=f.head,li(a),f=a.firstChild;f;){var m=f.nextSibling,p=f.nodeName;f[bl]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=m}}if(r===0){e.removeChild(c),di(t);return}r--}else a==="$"||a==="$?"||a==="$!"?r++:l=a.charCodeAt(0)-48;else l=0;a=c}while(a);di(t)}function dc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":dc(a),y0(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function I8(e,t,a,l){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[bl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function e6(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Rt(e.nextSibling),e===null))return null;return e}function mc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function t6(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var hc=null;function Us(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function qs(e,t,a){switch(t=Mr(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function li(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);y0(e)}var Dt=new Map,Vs=new Set;function Er(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=L.d;L.d={f:a6,r:n6,D:l6,C:i6,L:r6,m:u6,X:o6,S:c6,M:s6};function a6(){var e=fa.f(),t=pr();return e||t}function n6(e){var t=xn(e);t!==null&&t.tag===5&&t.type==="form"?r2(t):fa.r(e)}var el=typeof document>"u"?null:document;function Bs(e,t,a){var l=el;if(l&&typeof t=="string"&&t){var r=At(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),Vs.has(r)||(Vs.add(r),e={rel:e,crossOrigin:a,href:t},l.querySelector(r)===null&&(t=l.createElement("link"),Qe(t,"link",e),Le(t),l.head.appendChild(t)))}}function l6(e){fa.D(e),Bs("dns-prefetch",e,null)}function i6(e,t){fa.C(e,t),Bs("preconnect",e,t)}function r6(e,t,a){fa.L(e,t,a);var l=el;if(l&&e&&t){var r='link[rel="preload"][as="'+At(t)+'"]';t==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+At(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+At(a.imageSizes)+'"]')):r+='[href="'+At(e)+'"]';var c=r;switch(t){case"style":c=tl(e);break;case"script":c=al(e)}Dt.has(c)||(e=b({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Dt.set(c,e),l.querySelector(r)!==null||t==="style"&&l.querySelector(ii(c))||t==="script"&&l.querySelector(ri(c))||(t=l.createElement("link"),Qe(t,"link",e),Le(t),l.head.appendChild(t)))}}function u6(e,t){fa.m(e,t);var a=el;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+At(l)+'"][href="'+At(e)+'"]',c=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=al(e)}if(!Dt.has(c)&&(e=b({rel:"modulepreload",href:e},t),Dt.set(c,e),a.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ri(c)))return}l=a.createElement("link"),Qe(l,"link",e),Le(l),a.head.appendChild(l)}}}function c6(e,t,a){fa.S(e,t,a);var l=el;if(l&&e){var r=Sn(l).hoistableStyles,c=tl(e);t=t||"default";var f=r.get(c);if(!f){var m={loading:0,preload:null};if(f=l.querySelector(ii(c)))m.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Dt.get(c))&&gc(e,a);var p=f=l.createElement("link");Le(p),Qe(p,"link",e),p._p=new Promise(function(M,D){p.onload=M,p.onerror=D}),p.addEventListener("load",function(){m.loading|=1}),p.addEventListener("error",function(){m.loading|=2}),m.loading|=4,jr(f,t,l)}f={type:"stylesheet",instance:f,count:1,state:m},r.set(c,f)}}}function o6(e,t){fa.X(e,t);var a=el;if(a&&e){var l=Sn(a).hoistableScripts,r=al(e),c=l.get(r);c||(c=a.querySelector(ri(r)),c||(e=b({src:e,async:!0},t),(t=Dt.get(r))&&pc(e,t),c=a.createElement("script"),Le(c),Qe(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function s6(e,t){fa.M(e,t);var a=el;if(a&&e){var l=Sn(a).hoistableScripts,r=al(e),c=l.get(r);c||(c=a.querySelector(ri(r)),c||(e=b({src:e,async:!0,type:"module"},t),(t=Dt.get(r))&&pc(e,t),c=a.createElement("script"),Le(c),Qe(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function ks(e,t,a,l){var r=(r=lt.current)?Er(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=tl(a.href),a=Sn(r).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=tl(a.href);var c=Sn(r).hoistableStyles,f=c.get(e);if(f||(r=r.ownerDocument||r,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,f),(c=r.querySelector(ii(e)))&&!c._p&&(f.instance=c,f.state.loading=5),Dt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Dt.set(e,a),c||f6(r,e,a,f.state))),t&&l===null)throw Error(o(528,""));return f}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=al(a),a=Sn(r).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function tl(e){return'href="'+At(e)+'"'}function ii(e){return'link[rel="stylesheet"]['+e+"]"}function Ys(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function f6(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Qe(t,"link",a),Le(t),e.head.appendChild(t))}function al(e){return'[src="'+At(e)+'"]'}function ri(e){return"script[async]"+e}function Xs(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+At(a.href)+'"]');if(l)return t.instance=l,Le(l),l;var r=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Le(l),Qe(l,"style",r),jr(l,a.precedence,e),t.instance=l;case"stylesheet":r=tl(a.href);var c=e.querySelector(ii(r));if(c)return t.state.loading|=4,t.instance=c,Le(c),c;l=Ys(a),(r=Dt.get(r))&&gc(l,r),c=(e.ownerDocument||e).createElement("link"),Le(c);var f=c;return f._p=new Promise(function(m,p){f.onload=m,f.onerror=p}),Qe(c,"link",l),t.state.loading|=4,jr(c,a.precedence,e),t.instance=c;case"script":return c=al(a.src),(r=e.querySelector(ri(c)))?(t.instance=r,Le(r),r):(l=a,(r=Dt.get(c))&&(l=b({},a),pc(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),Le(r),Qe(r,"link",l),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,jr(l,a.precedence,e));return t.instance}function jr(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,c=r,f=0;f<l.length;f++){var m=l[f];if(m.dataset.precedence===t)c=m;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function gc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function pc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Or=null;function $s(e,t,a){if(Or===null){var l=new Map,r=Or=new Map;r.set(a,l)}else r=Or,l=r.get(a),l||(l=new Map,r.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var c=a[r];if(!(c[bl]||c[Pe]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var f=c.getAttribute(t)||"";f=e+f;var m=l.get(f);m?m.push(c):l.set(f,[c])}}return l}function Qs(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function d6(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Gs(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ui=null;function m6(){}function h6(e,t,a){if(ui===null)throw Error(o(475));var l=ui;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=tl(a.href),c=e.querySelector(ii(r));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Cr.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=c,Le(c);return}c=e.ownerDocument||e,a=Ys(a),(r=Dt.get(r))&&gc(a,r),c=c.createElement("link"),Le(c);var f=c;f._p=new Promise(function(m,p){f.onload=m,f.onerror=p}),Qe(c,"link",a),t.instance=c}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Cr.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function g6(){if(ui===null)throw Error(o(475));var e=ui;return e.stylesheets&&e.count===0&&yc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&yc(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Cr(){if(this.count--,this.count===0){if(this.stylesheets)yc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zr=null;function yc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zr=new Map,t.forEach(p6,e),zr=null,Cr.call(e))}function p6(e,t){if(!(t.state.loading&4)){var a=zr.get(e);if(a)var l=a.get(null);else{a=new Map,zr.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var f=r[c];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),l=f)}l&&a.set(null,l)}r=t.instance,f=r.getAttribute("data-precedence"),c=a.get(f)||l,c===l&&a.set(null,r),a.set(f,r),this.count++,l=Cr.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var ci={$$typeof:_,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function y6(e,t,a,l,r,c,f,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=m0(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=m0(0),this.hiddenUpdates=m0(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Ks(e,t,a,l,r,c,f,m,p,M,D,Z){return e=new y6(e,t,a,f,m,p,M,Z),t=1,c===!0&&(t|=24),c=ht(3,null,null,t),e.current=c,c.stateNode=e,t=W0(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:l,isDehydrated:a,cache:t},au(c),e}function Ps(e){return e?(e=Zn,e):Zn}function Fs(e,t,a,l,r,c){r=Ps(r),l.context===null?l.context=r:l.pendingContext=r,l=xa(t),l.payload={element:a},c=c===void 0?null:c,c!==null&&(l.callback=c),a=Sa(e,l,t),a!==null&&(bt(a,e,t),Ul(a,e,t))}function Js(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function vc(e,t){Js(e,t),(e=e.alternate)&&Js(e,t)}function Ws(e){if(e.tag===13){var t=Hn(e,67108864);t!==null&&bt(t,e,67108864),vc(e,67108864)}}var Dr=!0;function v6(e,t,a,l){var r=T.T;T.T=null;var c=L.p;try{L.p=2,bc(e,t,a,l)}finally{L.p=c,T.T=r}}function b6(e,t,a,l){var r=T.T;T.T=null;var c=L.p;try{L.p=8,bc(e,t,a,l)}finally{L.p=c,T.T=r}}function bc(e,t,a,l){if(Dr){var r=xc(l);if(r===null)rc(e,t,l,Tr,a),ef(e,l);else if(S6(r,e,t,a,l))l.stopPropagation();else if(ef(e,l),t&4&&-1<x6.indexOf(e)){for(;r!==null;){var c=xn(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var f=Qa(c.pendingLanes);if(f!==0){var m=c;for(m.pendingLanes|=2,m.entangledLanes|=2;f;){var p=1<<31-dt(f);m.entanglements[1]|=p,f&=~p}Yt(c),(he&6)===0&&(hr=Ut()+500,ti(0))}}break;case 13:m=Hn(c,2),m!==null&&bt(m,c,2),pr(),vc(c,2)}if(c=xc(l),c===null&&rc(e,t,l,Tr,a),c===r)break;r=c}r!==null&&l.stopPropagation()}else rc(e,t,l,null,a)}}function xc(e){return e=E0(e),Sc(e)}var Tr=null;function Sc(e){if(Tr=null,e=bn(e),e!==null){var t=g(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Tr=e,null}function Is(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(im()){case d1:return 2;case m1:return 8;case Ai:case rm:return 32;case h1:return 268435456;default:return 32}default:return 32}}var wc=!1,Na=null,Ra=null,_a=null,oi=new Map,si=new Map,La=[],x6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ef(e,t){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":_a=null;break;case"pointerover":case"pointerout":oi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(t.pointerId)}}function fi(e,t,a,l,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:c,targetContainers:[r]},t!==null&&(t=xn(t),t!==null&&Ws(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function S6(e,t,a,l,r){switch(t){case"focusin":return Na=fi(Na,e,t,a,l,r),!0;case"dragenter":return Ra=fi(Ra,e,t,a,l,r),!0;case"mouseover":return _a=fi(_a,e,t,a,l,r),!0;case"pointerover":var c=r.pointerId;return oi.set(c,fi(oi.get(c)||null,e,t,a,l,r)),!0;case"gotpointercapture":return c=r.pointerId,si.set(c,fi(si.get(c)||null,e,t,a,l,r)),!0}return!1}function tf(e){var t=bn(e.target);if(t!==null){var a=g(t);if(a!==null){if(t=a.tag,t===13){if(t=y(a),t!==null){e.blockedOn=t,hm(e.priority,function(){if(a.tag===13){var l=vt();l=h0(l);var r=Hn(a,l);r!==null&&bt(r,a,l),vc(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=xc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);M0=l,a.target.dispatchEvent(l),M0=null}else return t=xn(a),t!==null&&Ws(t),e.blockedOn=a,!1;t.shift()}return!0}function af(e,t,a){Hr(e)&&a.delete(t)}function w6(){wc=!1,Na!==null&&Hr(Na)&&(Na=null),Ra!==null&&Hr(Ra)&&(Ra=null),_a!==null&&Hr(_a)&&(_a=null),oi.forEach(af),si.forEach(af)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,wc||(wc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,w6)))}var Nr=null;function nf(e){Nr!==e&&(Nr=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Nr===e&&(Nr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],r=e[t+2];if(typeof l!="function"){if(Sc(l||a)===null)continue;break}var c=xn(a);c!==null&&(e.splice(t,3),t-=3,Su(c,{pending:!0,data:r,method:a.method,action:l},l,r))}}))}function di(e){function t(p){return Zr(p,e)}Na!==null&&Zr(Na,e),Ra!==null&&Zr(Ra,e),_a!==null&&Zr(_a,e),oi.forEach(t),si.forEach(t);for(var a=0;a<La.length;a++){var l=La[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)tf(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var r=a[l],c=a[l+1],f=r[rt]||null;if(typeof c=="function")f||nf(a);else if(f){var m=null;if(c&&c.hasAttribute("formAction")){if(r=c,f=c[rt]||null)m=f.formAction;else if(Sc(r)!==null)continue}else m=f.action;typeof m=="function"?a[l+1]=m:(a.splice(l,3),l-=3),nf(a)}}}function Ac(e){this._internalRoot=e}Rr.prototype.render=Ac.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=vt();Fs(a,l,e,t,null,null)},Rr.prototype.unmount=Ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fs(e.current,2,null,e,null,null),pr(),t[vn]=null}};function Rr(e){this._internalRoot=e}Rr.prototype.unstable_scheduleHydration=function(e){if(e){var t=b1();e={blockedOn:null,target:e,priority:t};for(var a=0;a<La.length&&t!==0&&t<La[a].priority;a++);La.splice(a,0,e),a===0&&tf(e)}};var lf=i.version;if(lf!=="19.1.0")throw Error(o(527,lf,"19.1.0"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=w(t),e=e!==null?O(e):null,e=e===null?null:e.stateNode,e};var A6={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_r.isDisabled&&_r.supportsFiber)try{pl=_r.inject(A6),ft=_r}catch{}}return mi.createRoot=function(e,t){if(!s(e))throw Error(o(299));var a=!1,l="",r=x2,c=S2,f=w2,m=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=Ks(e,1,!1,null,null,a,l,r,c,f,m,null),e[vn]=t.current,ic(e),new Ac(t)},mi.hydrateRoot=function(e,t,a){if(!s(e))throw Error(o(299));var l=!1,r="",c=x2,f=S2,m=w2,p=null,M=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(p=a.unstable_transitionCallbacks),a.formState!==void 0&&(M=a.formState)),t=Ks(e,1,!0,t,a??null,l,r,c,f,m,p,M),t.context=Ps(null),a=t.current,l=vt(),l=h0(l),r=xa(l),r.callback=null,Sa(a,r,l),a=l,t.current.lanes=a,vl(t,a),Yt(t),e[vn]=t.current,ic(e),new Rr(t)},mi.version="19.1.0",mi}var sf;function K6(){if(sf)return Mc.exports;sf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Mc.exports=G6(),Mc.exports}var P6=K6(),ke=function(){return ke=Object.assign||function(i){for(var u,o=1,s=arguments.length;o<s;o++){u=arguments[o];for(var g in u)Object.prototype.hasOwnProperty.call(u,g)&&(i[g]=u[g])}return i},ke.apply(this,arguments)};function yi(n,i,u){if(u||arguments.length===2)for(var o=0,s=i.length,g;o<s;o++)(g||!(o in i))&&(g||(g=Array.prototype.slice.call(i,0,o)),g[o]=i[o]);return n.concat(g||Array.prototype.slice.call(i))}var we="-ms-",pi="-moz-",me="-webkit-",Vd="comm",l0="rule",n1="decl",F6="@import",Bd="@keyframes",J6="@layer",kd=Math.abs,l1=String.fromCharCode,kc=Object.assign;function W6(n,i){return Be(n,0)^45?(((i<<2^Be(n,0))<<2^Be(n,1))<<2^Be(n,2))<<2^Be(n,3):0}function Yd(n){return n.trim()}function da(n,i){return(n=i.exec(n))?n[0]:n}function I(n,i,u){return n.replace(i,u)}function kr(n,i,u){return n.indexOf(i,u)}function Be(n,i){return n.charCodeAt(i)|0}function sl(n,i,u){return n.slice(i,u)}function $t(n){return n.length}function Xd(n){return n.length}function gi(n,i){return i.push(n),n}function I6(n,i){return n.map(i).join("")}function ff(n,i){return n.filter(function(u){return!da(u,i)})}var i0=1,fl=1,$d=0,Tt=0,Ne=0,gl="";function r0(n,i,u,o,s,g,y,S){return{value:n,root:i,parent:u,type:o,props:s,children:g,line:i0,column:fl,length:y,return:"",siblings:S}}function Ba(n,i){return kc(r0("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},i)}function nl(n){for(;n.root;)n=Ba(n.root,{children:[n]});gi(n,n.siblings)}function eh(){return Ne}function th(){return Ne=Tt>0?Be(gl,--Tt):0,fl--,Ne===10&&(fl=1,i0--),Ne}function _t(){return Ne=Tt<$d?Be(gl,Tt++):0,fl++,Ne===10&&(fl=1,i0++),Ne}function mn(){return Be(gl,Tt)}function Yr(){return Tt}function u0(n,i){return sl(gl,n,i)}function Yc(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ah(n){return i0=fl=1,$d=$t(gl=n),Tt=0,[]}function nh(n){return gl="",n}function Oc(n){return Yd(u0(Tt-1,Xc(n===91?n+2:n===40?n+1:n)))}function lh(n){for(;(Ne=mn())&&Ne<33;)_t();return Yc(n)>2||Yc(Ne)>3?"":" "}function ih(n,i){for(;--i&&_t()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return u0(n,Yr()+(i<6&&mn()==32&&_t()==32))}function Xc(n){for(;_t();)switch(Ne){case n:return Tt;case 34:case 39:n!==34&&n!==39&&Xc(Ne);break;case 40:n===41&&Xc(n);break;case 92:_t();break}return Tt}function rh(n,i){for(;_t()&&n+Ne!==57;)if(n+Ne===84&&mn()===47)break;return"/*"+u0(i,Tt-1)+"*"+l1(n===47?n:_t())}function uh(n){for(;!Yc(mn());)_t();return u0(n,Tt)}function ch(n){return nh(Xr("",null,null,null,[""],n=ah(n),0,[0],n))}function Xr(n,i,u,o,s,g,y,S,w){for(var O=0,b=0,C=y,z=0,N=0,U=0,q=1,K=1,J=1,k=0,_="",$=s,W=g,Y=o,X=_;K;)switch(U=k,k=_t()){case 40:if(U!=108&&Be(X,C-1)==58){kr(X+=I(Oc(k),"&","&\f"),"&\f",kd(O?S[O-1]:0))!=-1&&(J=-1);break}case 34:case 39:case 91:X+=Oc(k);break;case 9:case 10:case 13:case 32:X+=lh(U);break;case 92:X+=ih(Yr()-1,7);continue;case 47:switch(mn()){case 42:case 47:gi(oh(rh(_t(),Yr()),i,u,w),w);break;default:X+="/"}break;case 123*q:S[O++]=$t(X)*J;case 125*q:case 59:case 0:switch(k){case 0:case 125:K=0;case 59+b:J==-1&&(X=I(X,/\f/g,"")),N>0&&$t(X)-C&&gi(N>32?mf(X+";",o,u,C-1,w):mf(I(X," ","")+";",o,u,C-2,w),w);break;case 59:X+=";";default:if(gi(Y=df(X,i,u,O,b,s,S,_,$=[],W=[],C,g),g),k===123)if(b===0)Xr(X,i,Y,Y,$,g,C,S,W);else switch(z===99&&Be(X,3)===110?100:z){case 100:case 108:case 109:case 115:Xr(n,Y,Y,o&&gi(df(n,Y,Y,0,0,s,S,_,s,$=[],C,W),W),s,W,C,S,o?$:W);break;default:Xr(X,Y,Y,Y,[""],W,0,S,W)}}O=b=N=0,q=J=1,_=X="",C=y;break;case 58:C=1+$t(X),N=U;default:if(q<1){if(k==123)--q;else if(k==125&&q++==0&&th()==125)continue}switch(X+=l1(k),k*q){case 38:J=b>0?1:(X+="\f",-1);break;case 44:S[O++]=($t(X)-1)*J,J=1;break;case 64:mn()===45&&(X+=Oc(_t())),z=mn(),b=C=$t(_=X+=uh(Yr())),k++;break;case 45:U===45&&$t(X)==2&&(q=0)}}return g}function df(n,i,u,o,s,g,y,S,w,O,b,C){for(var z=s-1,N=s===0?g:[""],U=Xd(N),q=0,K=0,J=0;q<o;++q)for(var k=0,_=sl(n,z+1,z=kd(K=y[q])),$=n;k<U;++k)($=Yd(K>0?N[k]+" "+_:I(_,/&\f/g,N[k])))&&(w[J++]=$);return r0(n,i,u,s===0?l0:S,w,O,b,C)}function oh(n,i,u,o){return r0(n,i,u,Vd,l1(eh()),sl(n,2,-2),0,o)}function mf(n,i,u,o,s){return r0(n,i,u,n1,sl(n,0,o),sl(n,o+1,-1),o,s)}function Qd(n,i,u){switch(W6(n,i)){case 5103:return me+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+n+n;case 4789:return pi+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return me+n+pi+n+we+n+n;case 5936:switch(Be(n,i+11)){case 114:return me+n+we+I(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return me+n+we+I(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return me+n+we+I(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return me+n+we+n+n;case 6165:return me+n+we+"flex-"+n+n;case 5187:return me+n+I(n,/(\w+).+(:[^]+)/,me+"box-$1$2"+we+"flex-$1$2")+n;case 5443:return me+n+we+"flex-item-"+I(n,/flex-|-self/g,"")+(da(n,/flex-|baseline/)?"":we+"grid-row-"+I(n,/flex-|-self/g,""))+n;case 4675:return me+n+we+"flex-line-pack"+I(n,/align-content|flex-|-self/g,"")+n;case 5548:return me+n+we+I(n,"shrink","negative")+n;case 5292:return me+n+we+I(n,"basis","preferred-size")+n;case 6060:return me+"box-"+I(n,"-grow","")+me+n+we+I(n,"grow","positive")+n;case 4554:return me+I(n,/([^-])(transform)/g,"$1"+me+"$2")+n;case 6187:return I(I(I(n,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),n,"")+n;case 5495:case 3959:return I(n,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return I(I(n,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+n+n;case 4200:if(!da(n,/flex-|baseline/))return we+"grid-column-align"+sl(n,i)+n;break;case 2592:case 3360:return we+I(n,"template-","")+n;case 4384:case 3616:return u&&u.some(function(o,s){return i=s,da(o.props,/grid-\w+-end/)})?~kr(n+(u=u[i].value),"span",0)?n:we+I(n,"-start","")+n+we+"grid-row-span:"+(~kr(u,"span",0)?da(u,/\d+/):+da(u,/\d+/)-+da(n,/\d+/))+";":we+I(n,"-start","")+n;case 4896:case 4128:return u&&u.some(function(o){return da(o.props,/grid-\w+-start/)})?n:we+I(I(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return I(n,/(.+)-inline(.+)/,me+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($t(n)-1-i>6)switch(Be(n,i+1)){case 109:if(Be(n,i+4)!==45)break;case 102:return I(n,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+pi+(Be(n,i+3)==108?"$3":"$2-$3"))+n;case 115:return~kr(n,"stretch",0)?Qd(I(n,"stretch","fill-available"),i,u)+n:n}break;case 5152:case 5920:return I(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,s,g,y,S,w,O){return we+s+":"+g+O+(y?we+s+"-span:"+(S?w:+w-+g)+O:"")+n});case 4949:if(Be(n,i+6)===121)return I(n,":",":"+me)+n;break;case 6444:switch(Be(n,Be(n,14)===45?18:11)){case 120:return I(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(Be(n,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+we+"$2box$3")+n;case 100:return I(n,":",":"+we)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(n,"scroll-","scroll-snap-")+n}return n}function Kr(n,i){for(var u="",o=0;o<n.length;o++)u+=i(n[o],o,n,i)||"";return u}function sh(n,i,u,o){switch(n.type){case J6:if(n.children.length)break;case F6:case n1:return n.return=n.return||n.value;case Vd:return"";case Bd:return n.return=n.value+"{"+Kr(n.children,o)+"}";case l0:if(!$t(n.value=n.props.join(",")))return""}return $t(u=Kr(n.children,o))?n.return=n.value+"{"+u+"}":""}function fh(n){var i=Xd(n);return function(u,o,s,g){for(var y="",S=0;S<i;S++)y+=n[S](u,o,s,g)||"";return y}}function dh(n){return function(i){i.root||(i=i.return)&&n(i)}}function mh(n,i,u,o){if(n.length>-1&&!n.return)switch(n.type){case n1:n.return=Qd(n.value,n.length,u);return;case Bd:return Kr([Ba(n,{value:I(n.value,"@","@"+me)})],o);case l0:if(n.length)return I6(u=n.props,function(s){switch(da(s,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":nl(Ba(n,{props:[I(s,/:(read-\w+)/,":"+pi+"$1")]})),nl(Ba(n,{props:[s]})),kc(n,{props:ff(u,o)});break;case"::placeholder":nl(Ba(n,{props:[I(s,/:(plac\w+)/,":"+me+"input-$1")]})),nl(Ba(n,{props:[I(s,/:(plac\w+)/,":"+pi+"$1")]})),nl(Ba(n,{props:[I(s,/:(plac\w+)/,we+"input-$1")]})),nl(Ba(n,{props:[s]})),kc(n,{props:ff(u,o)});break}return""})}}var hh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xt={},dl=typeof process<"u"&&xt!==void 0&&(xt.REACT_APP_SC_ATTR||xt.SC_ATTR)||"data-styled",Gd="active",Kd="data-styled-version",c0="6.1.17",i1=`/*!sc*/
`,Pr=typeof window<"u"&&"HTMLElement"in window,gh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==""?xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.SC_DISABLE_SPEEDY!==void 0&&xt.SC_DISABLE_SPEEDY!==""&&xt.SC_DISABLE_SPEEDY!=="false"&&xt.SC_DISABLE_SPEEDY),ph={},o0=Object.freeze([]),ml=Object.freeze({});function Pd(n,i,u){return u===void 0&&(u=ml),n.theme!==u.theme&&n.theme||i||u.theme}var Fd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),yh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vh=/(^-|-$)/g;function hf(n){return n.replace(yh,"-").replace(vh,"")}var bh=/(a)(d)/gi,Lr=52,gf=function(n){return String.fromCharCode(n+(n>25?39:97))};function $c(n){var i,u="";for(i=Math.abs(n);i>Lr;i=i/Lr|0)u=gf(i%Lr)+u;return(gf(i%Lr)+u).replace(bh,"$1-$2")}var Cc,Jd=5381,cl=function(n,i){for(var u=i.length;u;)n=33*n^i.charCodeAt(--u);return n},Wd=function(n){return cl(Jd,n)};function Id(n){return $c(Wd(n)>>>0)}function xh(n){return n.displayName||n.name||"Component"}function zc(n){return typeof n=="string"&&!0}var e4=typeof Symbol=="function"&&Symbol.for,t4=e4?Symbol.for("react.memo"):60115,Sh=e4?Symbol.for("react.forward_ref"):60112,wh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ah={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a4={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mh=((Cc={})[Sh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Cc[t4]=a4,Cc);function pf(n){return("type"in(i=n)&&i.type.$$typeof)===t4?a4:"$$typeof"in n?Mh[n.$$typeof]:wh;var i}var Eh=Object.defineProperty,jh=Object.getOwnPropertyNames,yf=Object.getOwnPropertySymbols,Oh=Object.getOwnPropertyDescriptor,Ch=Object.getPrototypeOf,vf=Object.prototype;function n4(n,i,u){if(typeof i!="string"){if(vf){var o=Ch(i);o&&o!==vf&&n4(n,o,u)}var s=jh(i);yf&&(s=s.concat(yf(i)));for(var g=pf(n),y=pf(i),S=0;S<s.length;++S){var w=s[S];if(!(w in Ah||u&&u[w]||y&&w in y||g&&w in g)){var O=Oh(i,w);try{Eh(n,w,O)}catch{}}}}return n}function hn(n){return typeof n=="function"}function r1(n){return typeof n=="object"&&"styledComponentId"in n}function dn(n,i){return n&&i?"".concat(n," ").concat(i):n||i||""}function Qc(n,i){if(n.length===0)return"";for(var u=n[0],o=1;o<n.length;o++)u+=n[o];return u}function vi(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Gc(n,i,u){if(u===void 0&&(u=!1),!u&&!vi(n)&&!Array.isArray(n))return i;if(Array.isArray(i))for(var o=0;o<i.length;o++)n[o]=Gc(n[o],i[o]);else if(vi(i))for(var o in i)n[o]=Gc(n[o],i[o]);return n}function u1(n,i){Object.defineProperty(n,"toString",{value:i})}function gn(n){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var zh=function(){function n(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return n.prototype.indexOfGroup=function(i){for(var u=0,o=0;o<i;o++)u+=this.groupSizes[o];return u},n.prototype.insertRules=function(i,u){if(i>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,g=s;i>=g;)if((g<<=1)<0)throw gn(16,"".concat(i));this.groupSizes=new Uint32Array(g),this.groupSizes.set(o),this.length=g;for(var y=s;y<g;y++)this.groupSizes[y]=0}for(var S=this.indexOfGroup(i+1),w=(y=0,u.length);y<w;y++)this.tag.insertRule(S,u[y])&&(this.groupSizes[i]++,S++)},n.prototype.clearGroup=function(i){if(i<this.length){var u=this.groupSizes[i],o=this.indexOfGroup(i),s=o+u;this.groupSizes[i]=0;for(var g=o;g<s;g++)this.tag.deleteRule(o)}},n.prototype.getGroup=function(i){var u="";if(i>=this.length||this.groupSizes[i]===0)return u;for(var o=this.groupSizes[i],s=this.indexOfGroup(i),g=s+o,y=s;y<g;y++)u+="".concat(this.tag.getRule(y)).concat(i1);return u},n}(),$r=new Map,Fr=new Map,Qr=1,Ur=function(n){if($r.has(n))return $r.get(n);for(;Fr.has(Qr);)Qr++;var i=Qr++;return $r.set(n,i),Fr.set(i,n),i},Dh=function(n,i){Qr=i+1,$r.set(n,i),Fr.set(i,n)},Th="style[".concat(dl,"][").concat(Kd,'="').concat(c0,'"]'),Hh=new RegExp("^".concat(dl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Zh=function(n,i,u){for(var o,s=u.split(","),g=0,y=s.length;g<y;g++)(o=s[g])&&n.registerName(i,o)},Nh=function(n,i){for(var u,o=((u=i.textContent)!==null&&u!==void 0?u:"").split(i1),s=[],g=0,y=o.length;g<y;g++){var S=o[g].trim();if(S){var w=S.match(Hh);if(w){var O=0|parseInt(w[1],10),b=w[2];O!==0&&(Dh(b,O),Zh(n,b,w[3]),n.getTag().insertRules(O,s)),s.length=0}else s.push(S)}}},bf=function(n){for(var i=document.querySelectorAll(Th),u=0,o=i.length;u<o;u++){var s=i[u];s&&s.getAttribute(dl)!==Gd&&(Nh(n,s),s.parentNode&&s.parentNode.removeChild(s))}};function Rh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var l4=function(n){var i=document.head,u=n||i,o=document.createElement("style"),s=function(S){var w=Array.from(S.querySelectorAll("style[".concat(dl,"]")));return w[w.length-1]}(u),g=s!==void 0?s.nextSibling:null;o.setAttribute(dl,Gd),o.setAttribute(Kd,c0);var y=Rh();return y&&o.setAttribute("nonce",y),u.insertBefore(o,g),o},_h=function(){function n(i){this.element=l4(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var o=document.styleSheets,s=0,g=o.length;s<g;s++){var y=o[s];if(y.ownerNode===u)return y}throw gn(17)}(this.element),this.length=0}return n.prototype.insertRule=function(i,u){try{return this.sheet.insertRule(u,i),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},n.prototype.getRule=function(i){var u=this.sheet.cssRules[i];return u&&u.cssText?u.cssText:""},n}(),Lh=function(){function n(i){this.element=l4(i),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(i,u){if(i<=this.length&&i>=0){var o=document.createTextNode(u);return this.element.insertBefore(o,this.nodes[i]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},n.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},n}(),Uh=function(){function n(i){this.rules=[],this.length=0}return n.prototype.insertRule=function(i,u){return i<=this.length&&(this.rules.splice(i,0,u),this.length++,!0)},n.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},n.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},n}(),xf=Pr,qh={isServer:!Pr,useCSSOMInjection:!gh},Jr=function(){function n(i,u,o){i===void 0&&(i=ml),u===void 0&&(u={});var s=this;this.options=ke(ke({},qh),i),this.gs=u,this.names=new Map(o),this.server=!!i.isServer,!this.server&&Pr&&xf&&(xf=!1,bf(this)),u1(this,function(){return function(g){for(var y=g.getTag(),S=y.length,w="",O=function(C){var z=function(J){return Fr.get(J)}(C);if(z===void 0)return"continue";var N=g.names.get(z),U=y.getGroup(C);if(N===void 0||!N.size||U.length===0)return"continue";var q="".concat(dl,".g").concat(C,'[id="').concat(z,'"]'),K="";N!==void 0&&N.forEach(function(J){J.length>0&&(K+="".concat(J,","))}),w+="".concat(U).concat(q,'{content:"').concat(K,'"}').concat(i1)},b=0;b<S;b++)O(b);return w}(s)})}return n.registerId=function(i){return Ur(i)},n.prototype.rehydrate=function(){!this.server&&Pr&&bf(this)},n.prototype.reconstructWithOptions=function(i,u){return u===void 0&&(u=!0),new n(ke(ke({},this.options),i),this.gs,u&&this.names||void 0)},n.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(i=function(u){var o=u.useCSSOMInjection,s=u.target;return u.isServer?new Uh(s):o?new _h(s):new Lh(s)}(this.options),new zh(i)));var i},n.prototype.hasNameForId=function(i,u){return this.names.has(i)&&this.names.get(i).has(u)},n.prototype.registerName=function(i,u){if(Ur(i),this.names.has(i))this.names.get(i).add(u);else{var o=new Set;o.add(u),this.names.set(i,o)}},n.prototype.insertRules=function(i,u,o){this.registerName(i,u),this.getTag().insertRules(Ur(i),o)},n.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},n.prototype.clearRules=function(i){this.getTag().clearGroup(Ur(i)),this.clearNames(i)},n.prototype.clearTag=function(){this.tag=void 0},n}(),Vh=/&/g,Bh=/^\s*\/\/.*$/gm;function i4(n,i){return n.map(function(u){return u.type==="rule"&&(u.value="".concat(i," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(i," ")),u.props=u.props.map(function(o){return"".concat(i," ").concat(o)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=i4(u.children,i)),u})}function kh(n){var i,u,o,s=ml,g=s.options,y=g===void 0?ml:g,S=s.plugins,w=S===void 0?o0:S,O=function(z,N,U){return U.startsWith(u)&&U.endsWith(u)&&U.replaceAll(u,"").length>0?".".concat(i):z},b=w.slice();b.push(function(z){z.type===l0&&z.value.includes("&")&&(z.props[0]=z.props[0].replace(Vh,u).replace(o,O))}),y.prefix&&b.push(mh),b.push(sh);var C=function(z,N,U,q){N===void 0&&(N=""),U===void 0&&(U=""),q===void 0&&(q="&"),i=q,u=N,o=new RegExp("\\".concat(u,"\\b"),"g");var K=z.replace(Bh,""),J=ch(U||N?"".concat(U," ").concat(N," { ").concat(K," }"):K);y.namespace&&(J=i4(J,y.namespace));var k=[];return Kr(J,fh(b.concat(dh(function(_){return k.push(_)})))),k};return C.hash=w.length?w.reduce(function(z,N){return N.name||gn(15),cl(z,N.name)},Jd).toString():"",C}var Yh=new Jr,Kc=kh(),r4=h.createContext({shouldForwardProp:void 0,styleSheet:Yh,stylis:Kc});r4.Consumer;h.createContext(void 0);function Pc(){return R.useContext(r4)}var Xh=function(){function n(i,u){var o=this;this.inject=function(s,g){g===void 0&&(g=Kc);var y=o.name+g.hash;s.hasNameForId(o.id,y)||s.insertRules(o.id,y,g(o.rules,y,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=u,u1(this,function(){throw gn(12,String(o.name))})}return n.prototype.getName=function(i){return i===void 0&&(i=Kc),this.name+i.hash},n}(),$h=function(n){return n>="A"&&n<="Z"};function Sf(n){for(var i="",u=0;u<n.length;u++){var o=n[u];if(u===1&&o==="-"&&n[0]==="-")return n;$h(o)?i+="-"+o.toLowerCase():i+=o}return i.startsWith("ms-")?"-"+i:i}var u4=function(n){return n==null||n===!1||n===""},c4=function(n){var i,u,o=[];for(var s in n){var g=n[s];n.hasOwnProperty(s)&&!u4(g)&&(Array.isArray(g)&&g.isCss||hn(g)?o.push("".concat(Sf(s),":"),g,";"):vi(g)?o.push.apply(o,yi(yi(["".concat(s," {")],c4(g),!1),["}"],!1)):o.push("".concat(Sf(s),": ").concat((i=s,(u=g)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||i in hh||i.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return o};function ka(n,i,u,o){if(u4(n))return[];if(r1(n))return[".".concat(n.styledComponentId)];if(hn(n)){if(!hn(g=n)||g.prototype&&g.prototype.isReactComponent||!i)return[n];var s=n(i);return ka(s,i,u,o)}var g;return n instanceof Xh?u?(n.inject(u,o),[n.getName(o)]):[n]:vi(n)?c4(n):Array.isArray(n)?Array.prototype.concat.apply(o0,n.map(function(y){return ka(y,i,u,o)})):[n.toString()]}function o4(n){for(var i=0;i<n.length;i+=1){var u=n[i];if(hn(u)&&!r1(u))return!1}return!0}var Qh=Wd(c0),Gh=function(){function n(i,u,o){this.rules=i,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&o4(i),this.componentId=u,this.baseHash=cl(Qh,u),this.baseStyle=o,Jr.registerId(u)}return n.prototype.generateAndInjectStyles=function(i,u,o){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,u,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))s=dn(s,this.staticRulesId);else{var g=Qc(ka(this.rules,i,u,o)),y=$c(cl(this.baseHash,g)>>>0);if(!u.hasNameForId(this.componentId,y)){var S=o(g,".".concat(y),void 0,this.componentId);u.insertRules(this.componentId,y,S)}s=dn(s,y),this.staticRulesId=y}else{for(var w=cl(this.baseHash,o.hash),O="",b=0;b<this.rules.length;b++){var C=this.rules[b];if(typeof C=="string")O+=C;else if(C){var z=Qc(ka(C,i,u,o));w=cl(w,z+b),O+=z}}if(O){var N=$c(w>>>0);u.hasNameForId(this.componentId,N)||u.insertRules(this.componentId,N,o(O,".".concat(N),void 0,this.componentId)),s=dn(s,N)}}return s},n}(),bi=h.createContext(void 0);bi.Consumer;function Kh(n){var i=h.useContext(bi),u=R.useMemo(function(){return function(o,s){if(!o)throw gn(14);if(hn(o)){var g=o(s);return g}if(Array.isArray(o)||typeof o!="object")throw gn(8);return s?ke(ke({},s),o):o}(n.theme,i)},[n.theme,i]);return n.children?h.createElement(bi.Provider,{value:u},n.children):null}var Dc={};function Ph(n,i,u){var o=r1(n),s=n,g=!zc(n),y=i.attrs,S=y===void 0?o0:y,w=i.componentId,O=w===void 0?function($,W){var Y=typeof $!="string"?"sc":hf($);Dc[Y]=(Dc[Y]||0)+1;var X="".concat(Y,"-").concat(Id(c0+Y+Dc[Y]));return W?"".concat(W,"-").concat(X):X}(i.displayName,i.parentComponentId):w,b=i.displayName,C=b===void 0?function($){return zc($)?"styled.".concat($):"Styled(".concat(xh($),")")}(n):b,z=i.displayName&&i.componentId?"".concat(hf(i.displayName),"-").concat(i.componentId):i.componentId||O,N=o&&s.attrs?s.attrs.concat(S).filter(Boolean):S,U=i.shouldForwardProp;if(o&&s.shouldForwardProp){var q=s.shouldForwardProp;if(i.shouldForwardProp){var K=i.shouldForwardProp;U=function($,W){return q($,W)&&K($,W)}}else U=q}var J=new Gh(u,z,o?s.componentStyle:void 0);function k($,W){return function(Y,X,Ce){var Ye=Y.attrs,Kt=Y.componentStyle,We=Y.defaultProps,Ke=Y.foldedComponentIds,yn=Y.styledComponentId,Xa=Y.target,Ht=h.useContext(bi),T=Pc(),L=Y.shouldForwardProp||T.shouldForwardProp,P=Pd(X,Ht,We)||ml,ie=function(Ie,lt,Pt){for(var Lt,it=ke(ke({},lt),{className:void 0,theme:Pt}),$a=0;$a<Ie.length;$a+=1){var Ft=hn(Lt=Ie[$a])?Lt(it):Lt;for(var St in Ft)it[St]=St==="className"?dn(it[St],Ft[St]):St==="style"?ke(ke({},it[St]),Ft[St]):Ft[St]}return lt.className&&(it.className=dn(it.className,lt.className)),it}(Ye,X,P),de=ie.as||Xa,ze={};for(var ue in ie)ie[ue]===void 0||ue[0]==="$"||ue==="as"||ue==="theme"&&ie.theme===P||(ue==="forwardedAs"?ze.as=ie.forwardedAs:L&&!L(ue,de)||(ze[ue]=ie[ue]));var oe=function(Ie,lt){var Pt=Pc(),Lt=Ie.generateAndInjectStyles(lt,Pt.styleSheet,Pt.stylis);return Lt}(Kt,ie),Ee=dn(Ke,yn);return oe&&(Ee+=" "+oe),ie.className&&(Ee+=" "+ie.className),ze[zc(de)&&!Fd.has(de)?"class":"className"]=Ee,Ce&&(ze.ref=Ce),R.createElement(de,ze)}(_,$,W)}k.displayName=C;var _=h.forwardRef(k);return _.attrs=N,_.componentStyle=J,_.displayName=C,_.shouldForwardProp=U,_.foldedComponentIds=o?dn(s.foldedComponentIds,s.styledComponentId):"",_.styledComponentId=z,_.target=o?s.target:n,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=o?function(W){for(var Y=[],X=1;X<arguments.length;X++)Y[X-1]=arguments[X];for(var Ce=0,Ye=Y;Ce<Ye.length;Ce++)Gc(W,Ye[Ce],!0);return W}({},s.defaultProps,$):$}}),u1(_,function(){return".".concat(_.styledComponentId)}),g&&n4(_,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function wf(n,i){for(var u=[n[0]],o=0,s=i.length;o<s;o+=1)u.push(i[o],n[o+1]);return u}var Af=function(n){return Object.assign(n,{isCss:!0})};function s4(n){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];if(hn(n)||vi(n))return Af(ka(wf(o0,yi([n],i,!0))));var o=n;return i.length===0&&o.length===1&&typeof o[0]=="string"?ka(o):Af(ka(wf(o,i)))}function Fc(n,i,u){if(u===void 0&&(u=ml),!i)throw gn(1,i);var o=function(s){for(var g=[],y=1;y<arguments.length;y++)g[y-1]=arguments[y];return n(i,u,s4.apply(void 0,yi([s],g,!1)))};return o.attrs=function(s){return Fc(n,i,ke(ke({},u),{attrs:Array.prototype.concat(u.attrs,s).filter(Boolean)}))},o.withConfig=function(s){return Fc(n,i,ke(ke({},u),s))},o}var f4=function(n){return Fc(Ph,n)},ee=f4;Fd.forEach(function(n){ee[n]=f4(n)});var Fh=function(){function n(i,u){this.rules=i,this.componentId=u,this.isStatic=o4(i),Jr.registerId(this.componentId+1)}return n.prototype.createStyles=function(i,u,o,s){var g=s(Qc(ka(this.rules,u,o,s)),""),y=this.componentId+i;o.insertRules(y,y,g)},n.prototype.removeStyles=function(i,u){u.clearRules(this.componentId+i)},n.prototype.renderStyles=function(i,u,o,s){i>2&&Jr.registerId(this.componentId+i),this.removeStyles(i,o),this.createStyles(i,u,o,s)},n}();function Jh(n){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];var o=s4.apply(void 0,yi([n],i,!1)),s="sc-global-".concat(Id(JSON.stringify(o))),g=new Fh(o,s),y=function(w){var O=Pc(),b=h.useContext(bi),C=h.useRef(O.styleSheet.allocateGSInstance(s)).current;return O.styleSheet.server&&S(C,w,O.styleSheet,b,O.stylis),h.useLayoutEffect(function(){if(!O.styleSheet.server)return S(C,w,O.styleSheet,b,O.stylis),function(){return g.removeStyles(C,O.styleSheet)}},[C,w,O.styleSheet,b,O.stylis]),null};function S(w,O,b,C,z){if(g.isStatic)g.renderStyles(w,ph,b,z);else{var N=ke(ke({},O),{theme:Pd(O,C,y.defaultProps)});g.renderStyles(w,N,b,z)}}return h.memo(y)}const Wh=Jh`
    *{
        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }

    body, input, textarea, button{
        font-family: 'Poppins', serif;
        font-style: normal;
        font-weight: 400;
    }

    body{
        -webkit-font-smoothing: antialiased; 
        color: ${({theme:n})=>n.colors.text};
        background-color: ${({theme:n})=>n.colors.fillBackground};  
    }

    button{
        border: none;
        cursor: pointer;
    }
`,Ih=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M112,56V200L40,128Z",opacity:"0.2"}),h.createElement("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"}))]]),e3=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),h.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),t3=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),h.createElement("path",{d:"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]),a3=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44Zm-96,83.72L62.85,68h130.3ZM92.79,128,44,172.72V83.28Zm17.76,16.28,9.34,8.57a12,12,0,0,0,16.22,0l9.34-8.57L193.15,188H62.85ZM163.21,128,212,83.28v89.44Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,56l-96,88L32,56Z",opacity:"0.2"}),h.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50Zm-96,85.86L47.42,62H208.58ZM101.67,128,38,186.36V69.64Zm8.88,8.14L124,148.42a6,6,0,0,0,8.1,0l13.4-12.28L208.58,194H47.43ZM154.33,128,218,69.64V186.36Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-96,86.57L42.28,60H213.72ZM104.63,128,36,190.91V65.09Zm5.92,5.43L125.3,147a4,4,0,0,0,5.4,0l14.75-13.52L213.72,196H42.28ZM151.37,128,220,65.09V190.91Z"}))]]),n3=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,191.13V156h20a12,12,0,0,0,0-24H140V112a12,12,0,0,1,12-12h16a12,12,0,0,0,0-24H152a36,36,0,0,0-36,36v20H96a12,12,0,0,0,0,24h20v55.13a84,84,0,1,1,24,0Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),h.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V150h26a6,6,0,0,0,0-12H134V112a18,18,0,0,1,18-18h16a6,6,0,0,0,0-12H152a30,30,0,0,0-30,30v26H96a6,6,0,0,0,0,12h26v67.8a90,90,0,1,1,12,0Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,191.91V148h28a4,4,0,0,0,0-8H132V112a20,20,0,0,1,20-20h16a4,4,0,0,0,0-8H152a28,28,0,0,0-28,28v28H96a4,4,0,0,0,0,8h28v71.91a92,92,0,1,1,8,0Z"}))]]),l3=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),h.createElement("path",{d:"M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164ZM176,28H80A52.06,52.06,0,0,0,28,80v96a52.06,52.06,0,0,0,52,52h96a52.06,52.06,0,0,0,52-52V80A52.06,52.06,0,0,0,176,28Zm44,148a44.05,44.05,0,0,1-44,44H80a44.05,44.05,0,0,1-44-44V80A44.05,44.05,0,0,1,80,36h96a44.05,44.05,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8,8,0,0,1,188,76Z"}))]]),i3=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V120a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,148v28a12,12,0,0,1-24,0V148a16,16,0,0,0-32,0v28a12,12,0,0,1-24,0ZM96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z",opacity:"0.2"}),h.createElement("path",{d:"M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,28H40A12,12,0,0,0,28,40V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Zm4,188a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM92,112v64a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm88,28v36a4,4,0,0,1-8,0V140a24,24,0,0,0-48,0v36a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0v6.87A32,32,0,0,1,180,140ZM96,84a8,8,0,1,1-8-8A8,8,0,0,1,96,84Z"}))]]),r3=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M108,80a20,20,0,1,1,20,20A20,20,0,0,1,108,80ZM60,80a68,68,0,0,1,136,0c0,62.25-59.51,97-62.05,98.42a12,12,0,0,1-11.9,0C119.51,177,60,142.25,60,80Zm24,0c0,38.2,30.71,64.2,44,73.64C141.21,144.15,172,118,172,80a44,44,0,0,0-88,0Zm124.57,65.6a12,12,0,1,0-9.14,22.19C213.56,173.61,220,180.27,220,184c0,4-7.13,11.07-22.77,17.08-18.3,7-42.89,10.92-69.23,10.92s-50.93-3.88-69.23-10.92C43.12,195.07,36,188,36,184c0-3.73,6.44-10.39,20.57-16.21a12,12,0,1,0-9.14-22.19C31.27,152.25,12,164.31,12,184c0,34.14,58.36,52,116,52,29.22,0,56.86-4.44,77.85-12.52C220.1,218,244,205.59,244,184,244,164.31,224.73,152.25,208.57,145.6Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z",opacity:"0.2"}),h.createElement("path",{d:"M112,80a16,16,0,1,1,16,16A16,16,0,0,1,112,80ZM64,80a64,64,0,0,1,128,0c0,59.95-57.58,93.54-60,94.95a8,8,0,0,1-7.94,0C121.58,173.54,64,140,64,80Zm16,0c0,42.2,35.84,70.21,48,78.5,12.15-8.28,48-36.3,48-78.5a48,48,0,0,0-96,0Zm122.77,67.63a8,8,0,0,0-5.54,15C213.74,168.74,224,176.92,224,184c0,13.36-36.52,32-96,32s-96-18.64-96-32c0-7.08,10.26-15.26,26.77-21.36a8,8,0,0,0-5.54-15C29.22,156.49,16,169.41,16,184c0,31.18,57.71,48,112,48s112-16.82,112-48C240,169.41,226.78,156.49,202.77,147.63Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M124,175a8,8,0,0,0,7.94,0c2.45-1.41,60-35,60-94.95A64,64,0,0,0,64,80C64,140,121.58,173.54,124,175ZM128,56a24,24,0,1,1-24,24A24,24,0,0,1,128,56ZM240,184c0,31.18-57.71,48-112,48S16,215.18,16,184c0-14.59,13.22-27.51,37.23-36.37a8,8,0,0,1,5.54,15C42.26,168.74,32,176.92,32,184c0,13.36,36.52,32,96,32s96-18.64,96-32c0-7.08-10.26-15.26-26.77-21.36a8,8,0,0,1,5.54-15C226.78,156.49,240,169.41,240,184Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M114,80a14,14,0,1,1,14,14A14,14,0,0,1,114,80ZM66,80a62,62,0,0,1,124,0c0,58.81-56.61,91.83-59,93.21a6,6,0,0,1-6,0C122.61,171.83,66,138.81,66,80Zm12,0c0,44.52,38.81,73.49,50,80.91,11.18-7.42,50-36.38,50-80.91A50,50,0,0,0,78,80Zm124.08,69.51a6,6,0,1,0-4.16,11.25C215.5,167.25,226,175.94,226,184c0,16.08-40.25,34-98,34s-98-17.92-98-34c0-8.06,10.5-16.75,28.08-23.24a6,6,0,1,0-4.16-11.25C30.76,158.06,18,170.31,18,184c0,13.34,12.18,25.38,34.31,33.88C72.62,225.7,99.5,230,128,230s55.38-4.3,75.69-12.12C225.82,209.38,238,197.34,238,184,238,170.31,225.24,158.06,202.08,149.51Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M112,80a16,16,0,1,1,16,16A16,16,0,0,1,112,80ZM64,80a64,64,0,0,1,128,0c0,59.95-57.58,93.54-60,94.95a8,8,0,0,1-7.94,0C121.58,173.54,64,140,64,80Zm16,0c0,42.2,35.84,70.21,48,78.5,12.15-8.28,48-36.3,48-78.5a48,48,0,0,0-96,0Zm122.77,67.63a8,8,0,0,0-5.54,15C213.74,168.74,224,176.92,224,184c0,13.36-36.52,32-96,32s-96-18.64-96-32c0-7.08,10.26-15.26,26.77-21.36a8,8,0,0,0-5.54-15C29.22,156.49,16,169.41,16,184c0,31.18,57.71,48,112,48s112-16.82,112-48C240,169.41,226.78,156.49,202.77,147.63Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M116,80a12,12,0,1,1,12,12A12,12,0,0,1,116,80ZM97.08,147.73C78.05,127.35,68,103.93,68,80a60,60,0,0,1,120,0c0,23.93-10.05,47.35-29.08,67.73A136.54,136.54,0,0,1,130,171.47a4,4,0,0,1-4,0A136.54,136.54,0,0,1,97.08,147.73ZM76,80c0,47.09,42.25,77,52,83.3,9.75-6.28,52-36.21,52-83.3A52,52,0,0,0,76,80Zm125.38,71.38a4,4,0,0,0-2.76,7.51c18.67,6.89,29.38,16,29.38,25.11,0,17.39-40.18,36-100,36S28,201.39,28,184c0-9.07,10.71-18.22,29.38-25.11a4,4,0,0,0-2.76-7.51C32.29,159.62,20,171.21,20,184c0,12.46,11.73,23.83,33,32,20.09,7.73,46.72,12,75,12s54.89-4.25,75-12c21.29-8.19,33-19.56,33-32C236,171.21,223.71,159.62,201.38,151.38Z"}))]]),u3=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M236.37,139.4a12,12,0,0,0-12-3A84.07,84.07,0,0,1,119.6,31.59a12,12,0,0,0-15-15A108.86,108.86,0,0,0,49.69,55.07,108,108,0,0,0,136,228a107.09,107.09,0,0,0,64.93-21.69,108.86,108.86,0,0,0,38.44-54.94A12,12,0,0,0,236.37,139.4Zm-49.88,47.74A84,84,0,0,1,68.86,69.51,84.93,84.93,0,0,1,92.27,48.29Q92,52.13,92,56A108.12,108.12,0,0,0,200,164q3.87,0,7.71-.27A84.79,84.79,0,0,1,186.49,187.14Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z",opacity:"0.2"}),h.createElement("path",{d:"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232.13,143.64a6,6,0,0,0-6-1.49A90.07,90.07,0,0,1,113.86,29.85a6,6,0,0,0-7.49-7.48A102.88,102.88,0,0,0,54.48,58.68,102,102,0,0,0,197.32,201.52a102.88,102.88,0,0,0,36.31-51.89A6,6,0,0,0,232.13,143.64Zm-42,48.29a90,90,0,0,1-126-126A90.9,90.9,0,0,1,99.65,37.66,102.06,102.06,0,0,0,218.34,156.35,90.9,90.9,0,0,1,190.1,191.93Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M230.72,145.06a4,4,0,0,0-4-1A92.08,92.08,0,0,1,111.94,29.27a4,4,0,0,0-5-5A100.78,100.78,0,0,0,56.08,59.88a100,100,0,0,0,140,140,100.78,100.78,0,0,0,35.59-50.87A4,4,0,0,0,230.72,145.06ZM191.3,193.53A92,92,0,0,1,62.47,64.7a93,93,0,0,1,39.88-30.35,100.09,100.09,0,0,0,119.3,119.3A93,93,0,0,1,191.3,193.53Z"}))]]),c3=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M223.94,174.08A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,223.94,174.08Z",opacity:"0.2"}),h.createElement("path",{d:"M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M221.59,160.3l-47.24-21.17a14,14,0,0,0-13.28,1.22,4.81,4.81,0,0,0-.56.42l-24.69,21a1.88,1.88,0,0,1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91,1.91,0,0,1,0-1.68l21.07-25a6.13,6.13,0,0,0,.42-.58,14,14,0,0,0,1.12-13.27L95.73,34.49a14,14,0,0,0-14.56-8.38A54.24,54.24,0,0,0,34,80c0,78.3,63.7,142,142,142a54.25,54.25,0,0,0,53.89-47.17A14,14,0,0,0,221.59,160.3ZM176,210C104.32,210,46,151.68,46,80A42.23,42.23,0,0,1,82.67,38h.23a2,2,0,0,1,1.84,1.31l21.1,47.11a2,2,0,0,1,0,1.67L84.73,113.15a4.73,4.73,0,0,0-.43.57,14,14,0,0,0-.91,13.73c8.87,18.16,27.17,36.32,45.53,45.19a14,14,0,0,0,13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92,1.92,0,0,1,1.6-.1l47.25,21.17a2,2,0,0,1,1.21,2A42.24,42.24,0,0,1,176,210Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M220.78,162.13,173.56,141A12,12,0,0,0,162.18,142a3.37,3.37,0,0,0-.38.28L137,163.42a3.93,3.93,0,0,1-3.7.21c-16.24-7.84-33.05-24.52-40.89-40.57a3.9,3.9,0,0,1,.18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12,12,0,0,0,1-11.36L93.9,35.28a12,12,0,0,0-12.48-7.19A52.25,52.25,0,0,0,36,80c0,77.2,62.8,140,140,140a52.25,52.25,0,0,0,51.91-45.42A12,12,0,0,0,220.78,162.13ZM220,173.58A44.23,44.23,0,0,1,176,212C103.22,212,44,152.78,44,80A44.23,44.23,0,0,1,82.42,36a3.87,3.87,0,0,1,.48,0,4,4,0,0,1,3.67,2.49l21.11,47.14a4,4,0,0,1-.23,3.6l-21.19,25.2c-.1.13-.2.25-.29.39a12,12,0,0,0-.78,11.75c8.69,17.79,26.61,35.58,44.6,44.27a12,12,0,0,0,11.79-.87l.37-.28,24.83-21.12a3.93,3.93,0,0,1,3.57-.27l47.21,21.16A4,4,0,0,1,220,173.58Z"}))]]),o3=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z",opacity:"0.2"}),h.createElement("path",{d:"M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M231.36,116.19,87.28,28.06a14,14,0,0,0-14.18-.27A13.69,13.69,0,0,0,66,39.87V216.13a13.69,13.69,0,0,0,7.1,12.08,14,14,0,0,0,14.18-.27l144.08-88.13a13.82,13.82,0,0,0,0-23.62Zm-6.26,13.38L81,217.7a2,2,0,0,1-2.06,0,1.78,1.78,0,0,1-1-1.61V39.87a1.78,1.78,0,0,1,1-1.61A2.06,2.06,0,0,1,80,38a2,2,0,0,1,1,.31L225.1,126.43a1.82,1.82,0,0,1,0,3.14Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z"}))]]),s3=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M100,52H40A20,20,0,0,0,20,72v64a20,20,0,0,0,20,20H96v4a28,28,0,0,1-28,28,12,12,0,0,0,0,24,52.06,52.06,0,0,0,52-52V72A20,20,0,0,0,100,52Zm-4,80H44V76H96ZM216,52H156a20,20,0,0,0-20,20v64a20,20,0,0,0,20,20h56v4a28,28,0,0,1-28,28,12,12,0,0,0,0,24,52.06,52.06,0,0,0,52-52V72A20,20,0,0,0,216,52Zm-4,80H160V76h52Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M108,72v72H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60A8,8,0,0,1,108,72Zm108-8H156a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h68V72A8,8,0,0,0,216,64Z",opacity:"0.2"}),h.createElement("path",{d:"M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M100,58H40A14,14,0,0,0,26,72v64a14,14,0,0,0,14,14h62v10a34,34,0,0,1-34,34,6,6,0,0,0,0,12,46.06,46.06,0,0,0,46-46V72A14,14,0,0,0,100,58Zm2,80H40a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2h60a2,2,0,0,1,2,2ZM216,58H156a14,14,0,0,0-14,14v64a14,14,0,0,0,14,14h62v10a34,34,0,0,1-34,34,6,6,0,0,0,0,12,46.06,46.06,0,0,0,46-46V72A14,14,0,0,0,216,58Zm2,80H156a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2h60a2,2,0,0,1,2,2Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M100,60H40A12,12,0,0,0,28,72v64a12,12,0,0,0,12,12h64v12a36,36,0,0,1-36,36,4,4,0,0,0,0,8,44.05,44.05,0,0,0,44-44V72A12,12,0,0,0,100,60Zm4,80H40a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4h60a4,4,0,0,1,4,4ZM216,60H156a12,12,0,0,0-12,12v64a12,12,0,0,0,12,12h64v12a36,36,0,0,1-36,36,4,4,0,0,0,0,8,44.05,44.05,0,0,0,44-44V72A12,12,0,0,0,216,60Zm4,80H156a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4h60a4,4,0,0,1,4,4Z"}))]]),f3=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M116,36V20a12,12,0,0,1,24,0V36a12,12,0,0,1-24,0Zm80,92a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM48,128a12,12,0,0,0-12-12H20a12,12,0,0,0,0,24H36A12,12,0,0,0,48,128Zm80,80a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V220A12,12,0,0,0,128,208Zm108-92H220a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z",opacity:"0.2"}),h.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M122,40V16a6,6,0,0,1,12,0V40a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-16-16a6,6,0,0,0-8.48,8.48Zm0,119.52-16,16a6,6,0,1,0,8.48,8.48l16-16a6,6,0,1,0-8.48-8.48ZM192,70a6,6,0,0,0,4.24-1.76l16-16a6,6,0,0,0-8.48-8.48l-16,16A6,6,0,0,0,192,70Zm4.24,117.76a6,6,0,0,0-8.48,8.48l16,16a6,6,0,0,0,8.48-8.48ZM46,128a6,6,0,0,0-6-6H16a6,6,0,0,0,0,12H40A6,6,0,0,0,46,128Zm82,82a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V216A6,6,0,0,0,128,210Zm112-88H216a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M124,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-16-16a4,4,0,0,0-5.66,5.66Zm0,122.34-16,16a4,4,0,0,0,5.66,5.66l16-16a4,4,0,0,0-5.66-5.66ZM192,68a4,4,0,0,0,2.83-1.17l16-16a4,4,0,1,0-5.66-5.66l-16,16A4,4,0,0,0,192,68Zm2.83,121.17a4,4,0,0,0-5.66,5.66l16,16a4,4,0,0,0,5.66-5.66ZM40,124H16a4,4,0,0,0,0,8H40a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v24a4,4,0,0,0,8,0V216A4,4,0,0,0,128,212Zm112-88H216a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Z"}))]]),d3=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M251.09,67.41A12,12,0,0,0,240,60H211.82a52.73,52.73,0,0,0-43.67-24,50.85,50.85,0,0,0-36.6,14.85A51.87,51.87,0,0,0,116,88v.78c-36.83-11.57-66.38-40.9-66.7-41.23a12,12,0,0,0-20.47,7.38C22.52,125.1,53.48,162.72,70.89,178.05,56.4,192.83,36,200.68,35.8,200.76A12,12,0,0,0,30,218.66C32,221.55,43.44,236,80,236c72.25,0,132.7-55.26,139.6-126.63l28.88-28.88A12,12,0,0,0,251.09,67.41ZM199.52,95.52a11.93,11.93,0,0,0-3.49,7.72C192.14,164.23,141.18,212,80,212a90.78,90.78,0,0,1-12.49-.79C78,204.55,89.72,195.07,98,182.66a12,12,0,0,0-3.9-17c-.12-.07-12.33-7.49-23.43-24.42s-17.26-37-18.46-59.78C69.37,94.4,96,110.79,126,115.84A12,12,0,0,0,140,104V88a28,28,0,0,1,8.41-20.07A27.07,27.07,0,0,1,167.86,60a28.83,28.83,0,0,1,25.82,16.81,12,12,0,0,0,11,7.19H211Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M240,72l-32,32c-4.26,66.84-60.08,120-128,120-32,0-40-12-40-12s32-12,48-36c0,0-55.15-32-47.22-120,0,0,39.66,40,87.22,48V88c0-22,18-40.27,40-40a40.74,40.74,0,0,1,36.67,24Z",opacity:"0.2"}),h.createElement("path",{d:"M247.39,68.94A8,8,0,0,0,240,64H209.57A48.65,48.65,0,0,0,168.1,40a46.87,46.87,0,0,0-33.74,13.7A47.87,47.87,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.3,47.79,9.57,79.77,22,98.18a110.92,110.92,0,0,0,21.89,24.2C61.43,195.2,37.45,204.41,37.2,204.51a8,8,0,0,0-3.85,11.93c.74,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.68,0,129.72-54.42,135.76-124.44l29.9-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.52-6.25,27.56-17,37.88-32.48a8,8,0,0,0-2.61-11.34c-.13-.08-12.86-7.74-24.48-25.29C54.54,124.11,48,100.38,48,73.09c16,13,45.25,33.18,78.69,38.8A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.89,30.89,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M245.54,69.71A6,6,0,0,0,240,66H208.4a46.6,46.6,0,0,0-40.33-24,44.93,44.93,0,0,0-32.31,13.12A45.92,45.92,0,0,0,122,88v8.66c-42-10-76.6-44.52-77-44.88A6,6,0,0,0,34.8,55.46c-4.25,47.22,9.42,78.75,21.64,96.89a107.71,107.71,0,0,0,23.07,25c-15.49,19-41.34,28.89-41.62,29a6,6,0,0,0-2.88,9C36,216.83,45.78,230,80,230c69.88,0,128.23-54,133.82-123.34l30.42-30.41A6,6,0,0,0,245.54,69.71ZM203.76,99.76a6,6,0,0,0-1.75,3.86C197.93,167.76,144.33,218,80,218c-14,0-22.76-2.41-28.06-4.8,11.3-5.68,29.72-16.88,41.05-33.87a6,6,0,0,0,.85-4.67A6,6,0,0,0,91,170.82c-.13-.08-13.13-7.86-25-25.72C52,124,45.31,98.43,46,68.88c14.88,12.6,45.57,35.09,81,41a6,6,0,0,0,7-5.92V88a34,34,0,0,1,10.19-24.34A33.05,33.05,0,0,1,167.93,54c13.43.17,26,8.37,31.24,20.4a6,6,0,0,0,5.5,3.6h20.84Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M243.7,70.47A4,4,0,0,0,240,68H207.2a44.57,44.57,0,0,0-39.15-24,42.76,42.76,0,0,0-30.88,12.55A43.85,43.85,0,0,0,124,88V99.16c-43.65-9.39-80-45.6-80.39-46a4,4,0,0,0-4.19-.95,4,4,0,0,0-2.63,3.41c-4.2,46.62,9.27,77.71,21.31,95.59A103.68,103.68,0,0,0,82.35,177c-15.68,20.49-43.46,31.13-43.75,31.24a4,4,0,0,0-1.93,6c.27.4,2.79,4,9.54,7.36C54.73,225.84,66.1,228,80,228c69.09,0,126.73-53.56,131.89-122.23l30.94-30.94A4,4,0,0,0,243.7,70.47Zm-38.53,30.7a4,4,0,0,0-1.16,2.58C199.85,168.94,145.38,220,80,220c-17.85,0-27.63-3.89-32.5-6.87,10.37-4.82,31.45-16.34,43.83-34.91a4,4,0,0,0,.56-3.12A3.93,3.93,0,0,0,90,172.55c-.13-.08-13.39-8-25.52-26.15C54,130.71,42.39,104.11,44.19,64.65c13.17,11.62,45.48,37,83.15,43.3a4,4,0,0,0,4.66-4V88a36,36,0,0,1,10.79-25.76A35,35,0,0,1,168,52c14.2.18,27.49,8.86,33.06,21.61A4,4,0,0,0,204.67,76h25.67Z"}))]]),m3=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M170.49,117.91l-56-36A12,12,0,0,0,96,92v72a12,12,0,0,0,18.49,10.09l56-36a12,12,0,0,0,0-20.18ZM120,142V114l21.81,14Zm118.21-73.5a28.05,28.05,0,0,0-16.93-19.14C186.4,35.91,131.29,36,128,36s-58.4-.09-93.28,13.38A28.05,28.05,0,0,0,17.79,68.52C15.15,78.72,12,97.32,12,128s3.15,49.28,5.79,59.48a28.05,28.05,0,0,0,16.93,19.14C68.21,219.55,120.36,220,127.37,220h1.26c7,0,59.16-.45,92.65-13.38a28.05,28.05,0,0,0,16.93-19.14c2.64-10.2,5.79-28.8,5.79-59.48S240.85,78.72,238.21,68.52ZM215,181.46a4,4,0,0,1-2.34,2.77C182.78,195.76,132.27,196,128.32,196h-.39c-.53,0-53.64.17-84.56-11.77A4,4,0,0,1,41,181.46c-1.88-7.24-5-23.82-5-53.46s3.15-46.22,5-53.46a4,4,0,0,1,2.34-2.77C74.29,59.83,127.39,60,127.92,60h.15c.54,0,53.64-.17,84.56,11.77A4,4,0,0,1,215,74.54c1.88,7.24,5,23.82,5,53.46S216.85,174.22,215,181.46Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M226.59,71.53a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128s3.07,47.46,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47S228.93,80.54,226.59,71.53ZM112,160V96l48,32Z",opacity:"0.2"}),h.createElement("path",{d:"M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86.12,12s-54.37.18-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68C73.58,55.82,127.4,56,128.05,56s54.37-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-73.74,65-40,28A8,8,0,0,1,108,156V100a8,8,0,0,1,12.59-6.55l40,28a8,8,0,0,1,0,13.1Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M163.33,123l-48-32A6,6,0,0,0,106,96v64a6,6,0,0,0,9.33,5l48-32a6,6,0,0,0,0-10ZM118,148.79V107.21L149.18,128ZM232.4,70a22,22,0,0,0-13.28-15C185,41.79,130.27,42,128,42s-57-.21-91.16,13A22,22,0,0,0,23.6,70C21.05,79.89,18,98,18,128s3.05,48.11,5.6,58a22,22,0,0,0,13.28,15C71,214.21,125.72,214,128,214h.71c6.91,0,58-.44,90.45-13a22,22,0,0,0,13.28-15c2.55-9.87,5.6-27.93,5.6-58S235,79.89,232.4,70ZM220.78,183a10,10,0,0,1-6,6.86C182.78,202.19,128.58,202,128,202s-54.71.2-86.75-12.17a10,10,0,0,1-6-6.86C32.84,173.78,30,156.78,30,128s2.84-45.78,5.22-55a10,10,0,0,1,6-6.86C72.06,54.26,123.53,54,127.76,54H128c.54,0,54.71-.2,86.75,12.17a10,10,0,0,1,6,6.86c2.38,9.19,5.22,26.19,5.22,55S223.16,173.78,220.78,183Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M162.22,124.67l-48-32A4,4,0,0,0,108,96v64a4,4,0,0,0,2.11,3.53,4,4,0,0,0,4.11-.2l48-32a4,4,0,0,0,0-6.66ZM116,152.53V103.47L152.79,128Zm114.46-82A20,20,0,0,0,218.4,56.85C184.6,43.79,130.27,44,128,44S71.4,43.79,37.6,56.85A20,20,0,0,0,25.54,70.52C23,80.27,20,98.16,20,128s3,47.73,5.54,57.48A20,20,0,0,0,37.6,199.15C71.4,212.21,125.73,212,128,212h.71c6.89,0,57.58-.43,89.72-12.85a20,20,0,0,0,12.06-13.67C233,175.72,236,157.84,236,128S233,80.27,230.46,70.52Zm-7.74,113a12,12,0,0,1-7.21,8.22C183.14,204.19,128.57,204,128,204s-55.11.19-87.48-12.31a12,12,0,0,1-7.21-8.22C30.87,174.17,28,157,28,128s2.87-46.17,5.28-55.47a12,12,0,0,1,7.21-8.22C72.86,51.81,127.43,52,128,52s55.11-.2,87.48,12.31a12,12,0,0,1,7.21,8.22C225.13,81.83,228,99,228,128S225.13,174.17,222.72,183.47Z"}))]]),h3=R.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var g3=Object.defineProperty,Wr=Object.getOwnPropertySymbols,d4=Object.prototype.hasOwnProperty,m4=Object.prototype.propertyIsEnumerable,Mf=(n,i,u)=>i in n?g3(n,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[i]=u,Ef=(n,i)=>{for(var u in i||(i={}))d4.call(i,u)&&Mf(n,u,i[u]);if(Wr)for(var u of Wr(i))m4.call(i,u)&&Mf(n,u,i[u]);return n},jf=(n,i)=>{var u={};for(var o in n)d4.call(n,o)&&i.indexOf(o)<0&&(u[o]=n[o]);if(n!=null&&Wr)for(var o of Wr(n))i.indexOf(o)<0&&m4.call(n,o)&&(u[o]=n[o]);return u};const h4=R.forwardRef((n,i)=>{const u=n,{alt:o,color:s,size:g,weight:y,mirrored:S,children:w,weights:O}=u,b=jf(u,["alt","color","size","weight","mirrored","children","weights"]),C=R.useContext(h3),{color:z="currentColor",size:N,weight:U="regular",mirrored:q=!1}=C,K=jf(C,["color","size","weight","mirrored"]);return h.createElement("svg",Ef(Ef({ref:i,xmlns:"http://www.w3.org/2000/svg",width:g??N,height:g??N,fill:s??z,viewBox:"0 0 256 256",transform:S||q?"scale(-1, 1)":void 0},K),b),!!o&&h.createElement("title",null,o),w,O.get(y??U))});h4.displayName="IconBase";const nt=h4;var p3=Object.defineProperty,y3=Object.defineProperties,v3=Object.getOwnPropertyDescriptors,Of=Object.getOwnPropertySymbols,b3=Object.prototype.hasOwnProperty,x3=Object.prototype.propertyIsEnumerable,Cf=(n,i,u)=>i in n?p3(n,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[i]=u,S3=(n,i)=>{for(var u in i||(i={}))b3.call(i,u)&&Cf(n,u,i[u]);if(Of)for(var u of Of(i))x3.call(i,u)&&Cf(n,u,i[u]);return n},w3=(n,i)=>y3(n,v3(i));const g4=R.forwardRef((n,i)=>h.createElement(nt,w3(S3({ref:i},n),{weights:Ih})));g4.displayName="ArrowLeft";var A3=Object.defineProperty,M3=Object.defineProperties,E3=Object.getOwnPropertyDescriptors,zf=Object.getOwnPropertySymbols,j3=Object.prototype.hasOwnProperty,O3=Object.prototype.propertyIsEnumerable,Df=(n,i,u)=>i in n?A3(n,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[i]=u,C3=(n,i)=>{for(var u in i||(i={}))j3.call(i,u)&&Df(n,u,i[u]);if(zf)for(var u of zf(i))O3.call(i,u)&&Df(n,u,i[u]);return n},z3=(n,i)=>M3(n,E3(i));const c1=R.forwardRef((n,i)=>h.createElement(nt,z3(C3({ref:i},n),{weights:e3})));c1.displayName="ArrowRight";var D3=Object.defineProperty,T3=Object.defineProperties,H3=Object.getOwnPropertyDescriptors,Tf=Object.getOwnPropertySymbols,Z3=Object.prototype.hasOwnProperty,N3=Object.prototype.propertyIsEnumerable,Hf=(n,i,u)=>i in n?D3(n,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[i]=u,R3=(n,i)=>{for(var u in i||(i={}))Z3.call(i,u)&&Hf(n,u,i[u]);if(Tf)for(var u of Tf(i))N3.call(i,u)&&Hf(n,u,i[u]);return n},_3=(n,i)=>T3(n,H3(i));const Je=R.forwardRef((n,i)=>h.createElement(nt,_3(R3({ref:i},n),{weights:t3})));Je.displayName="CheckCircle";var L3=Object.defineProperty,U3=Object.defineProperties,q3=Object.getOwnPropertyDescriptors,Zf=Object.getOwnPropertySymbols,V3=Object.prototype.hasOwnProperty,B3=Object.prototype.propertyIsEnumerable,Nf=(n,i,u)=>i in n?L3(n,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[i]=u,k3=(n,i)=>{for(var u in i||(i={}))V3.call(i,u)&&Nf(n,u,i[u]);if(Zf)for(var u of Zf(i))B3.call(i,u)&&Nf(n,u,i[u]);return n},Y3=(n,i)=>U3(n,q3(i));const Ir=R.forwardRef((n,i)=>h.createElement(nt,Y3(k3({ref:i},n),{weights:a3})));Ir.displayName="Envelope";var X3=Object.defineProperty,$3=Object.defineProperties,Q3=Object.getOwnPropertyDescriptors,Rf=Object.getOwnPropertySymbols,G3=Object.prototype.hasOwnProperty,K3=Object.prototype.propertyIsEnumerable,_f=(n,i,u)=>i in n?X3(n,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[i]=u,P3=(n,i)=>{for(var u in i||(i={}))G3.call(i,u)&&_f(n,u,i[u]);if(Rf)for(var u of Rf(i))K3.call(i,u)&&_f(n,u,i[u]);return n},F3=(n,i)=>$3(n,Q3(i));const p4=R.forwardRef((n,i)=>h.createElement(nt,F3(P3({ref:i},n),{weights:n3})));p4.displayName="FacebookLogo";var J3=Object.defineProperty,W3=Object.defineProperties,I3=Object.getOwnPropertyDescriptors,Lf=Object.getOwnPropertySymbols,e5=Object.prototype.hasOwnProperty,t5=Object.prototype.propertyIsEnumerable,Uf=(n,i,u)=>i in n?J3(n,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[i]=u,a5=(n,i)=>{for(var u in i||(i={}))e5.call(i,u)&&Uf(n,u,i[u]);if(Lf)for(var u of Lf(i))t5.call(i,u)&&Uf(n,u,i[u]);return n},n5=(n,i)=>W3(n,I3(i));const y4=R.forwardRef((n,i)=>h.createElement(nt,n5(a5({ref:i},n),{weights:l3})));y4.displayName="InstagramLogo";var l5=Object.defineProperty,i5=Object.defineProperties,r5=Object.getOwnPropertyDescriptors,qf=Object.getOwnPropertySymbols,u5=Object.prototype.hasOwnProperty,c5=Object.prototype.propertyIsEnumerable,Vf=(n,i,u)=>i in n?l5(n,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[i]=u,o5=(n,i)=>{for(var u in i||(i={}))u5.call(i,u)&&Vf(n,u,i[u]);if(qf)for(var u of qf(i))c5.call(i,u)&&Vf(n,u,i[u]);return n},s5=(n,i)=>i5(n,r5(i));const v4=R.forwardRef((n,i)=>h.createElement(nt,s5(o5({ref:i},n),{weights:i3})));v4.displayName="LinkedinLogo";var f5=Object.defineProperty,d5=Object.defineProperties,m5=Object.getOwnPropertyDescriptors,Bf=Object.getOwnPropertySymbols,h5=Object.prototype.hasOwnProperty,g5=Object.prototype.propertyIsEnumerable,kf=(n,i,u)=>i in n?f5(n,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[i]=u,p5=(n,i)=>{for(var u in i||(i={}))h5.call(i,u)&&kf(n,u,i[u]);if(Bf)for(var u of Bf(i))g5.call(i,u)&&kf(n,u,i[u]);return n},y5=(n,i)=>d5(n,m5(i));const o1=R.forwardRef((n,i)=>h.createElement(nt,y5(p5({ref:i},n),{weights:r3})));o1.displayName="MapPinArea";var v5=Object.defineProperty,b5=Object.defineProperties,x5=Object.getOwnPropertyDescriptors,Yf=Object.getOwnPropertySymbols,S5=Object.prototype.hasOwnProperty,w5=Object.prototype.propertyIsEnumerable,Xf=(n,i,u)=>i in n?v5(n,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[i]=u,A5=(n,i)=>{for(var u in i||(i={}))S5.call(i,u)&&Xf(n,u,i[u]);if(Yf)for(var u of Yf(i))w5.call(i,u)&&Xf(n,u,i[u]);return n},M5=(n,i)=>b5(n,x5(i));const Jc=R.forwardRef((n,i)=>h.createElement(nt,M5(A5({ref:i},n),{weights:u3})));Jc.displayName="Moon";var E5=Object.defineProperty,j5=Object.defineProperties,O5=Object.getOwnPropertyDescriptors,$f=Object.getOwnPropertySymbols,C5=Object.prototype.hasOwnProperty,z5=Object.prototype.propertyIsEnumerable,Qf=(n,i,u)=>i in n?E5(n,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[i]=u,D5=(n,i)=>{for(var u in i||(i={}))C5.call(i,u)&&Qf(n,u,i[u]);if($f)for(var u of $f(i))z5.call(i,u)&&Qf(n,u,i[u]);return n},T5=(n,i)=>j5(n,O5(i));const b4=R.forwardRef((n,i)=>h.createElement(nt,T5(D5({ref:i},n),{weights:c3})));b4.displayName="Phone";var H5=Object.defineProperty,Z5=Object.defineProperties,N5=Object.getOwnPropertyDescriptors,Gf=Object.getOwnPropertySymbols,R5=Object.prototype.hasOwnProperty,_5=Object.prototype.propertyIsEnumerable,Kf=(n,i,u)=>i in n?H5(n,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[i]=u,L5=(n,i)=>{for(var u in i||(i={}))R5.call(i,u)&&Kf(n,u,i[u]);if(Gf)for(var u of Gf(i))_5.call(i,u)&&Kf(n,u,i[u]);return n},U5=(n,i)=>Z5(n,N5(i));const x4=R.forwardRef((n,i)=>h.createElement(nt,U5(L5({ref:i},n),{weights:o3})));x4.displayName="Play";var q5=Object.defineProperty,V5=Object.defineProperties,B5=Object.getOwnPropertyDescriptors,Pf=Object.getOwnPropertySymbols,k5=Object.prototype.hasOwnProperty,Y5=Object.prototype.propertyIsEnumerable,Ff=(n,i,u)=>i in n?q5(n,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[i]=u,X5=(n,i)=>{for(var u in i||(i={}))k5.call(i,u)&&Ff(n,u,i[u]);if(Pf)for(var u of Pf(i))Y5.call(i,u)&&Ff(n,u,i[u]);return n},$5=(n,i)=>V5(n,B5(i));const Gr=R.forwardRef((n,i)=>h.createElement(nt,$5(X5({ref:i},n),{weights:s3})));Gr.displayName="Quotes";var Q5=Object.defineProperty,G5=Object.defineProperties,K5=Object.getOwnPropertyDescriptors,Jf=Object.getOwnPropertySymbols,P5=Object.prototype.hasOwnProperty,F5=Object.prototype.propertyIsEnumerable,Wf=(n,i,u)=>i in n?Q5(n,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[i]=u,J5=(n,i)=>{for(var u in i||(i={}))P5.call(i,u)&&Wf(n,u,i[u]);if(Jf)for(var u of Jf(i))F5.call(i,u)&&Wf(n,u,i[u]);return n},W5=(n,i)=>G5(n,K5(i));const Wc=R.forwardRef((n,i)=>h.createElement(nt,W5(J5({ref:i},n),{weights:f3})));Wc.displayName="Sun";var I5=Object.defineProperty,eg=Object.defineProperties,tg=Object.getOwnPropertyDescriptors,If=Object.getOwnPropertySymbols,ag=Object.prototype.hasOwnProperty,ng=Object.prototype.propertyIsEnumerable,ed=(n,i,u)=>i in n?I5(n,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[i]=u,lg=(n,i)=>{for(var u in i||(i={}))ag.call(i,u)&&ed(n,u,i[u]);if(If)for(var u of If(i))ng.call(i,u)&&ed(n,u,i[u]);return n},ig=(n,i)=>eg(n,tg(i));const S4=R.forwardRef((n,i)=>h.createElement(nt,ig(lg({ref:i},n),{weights:d3})));S4.displayName="TwitterLogo";var rg=Object.defineProperty,ug=Object.defineProperties,cg=Object.getOwnPropertyDescriptors,td=Object.getOwnPropertySymbols,og=Object.prototype.hasOwnProperty,sg=Object.prototype.propertyIsEnumerable,ad=(n,i,u)=>i in n?rg(n,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[i]=u,fg=(n,i)=>{for(var u in i||(i={}))og.call(i,u)&&ad(n,u,i[u]);if(td)for(var u of td(i))sg.call(i,u)&&ad(n,u,i[u]);return n},dg=(n,i)=>ug(n,cg(i));const w4=R.forwardRef((n,i)=>h.createElement(nt,dg(fg({ref:i},n),{weights:m3})));w4.displayName="YoutubeLogo";const mg=ee.div`
  width: 100%;
  padding: 0 1rem; 
 
  button{ 
    width: 100%;
    height: 4.063rem;
    background-color: ${({theme:n,$bgColor:i})=>i||n.colors["main-color"]};
    color: ${({theme:n})=>n.colors["day-background"]};
    font-weight: bold;
    font-size: 0.7rem;
    border-radius: 220px;
    margin: 0 auto;
    display: block;

    @media (min-width: 768px) {
    button {
      max-width: 100%;
      border-radius: 0; 
    }
  }
  }
     @media (min-width: 1440px) {
      padding: 0;
      margin: 0;
     }
`;function Ic({bgColor:n}){const{t:i}=ha("components");return d.jsx(mg,{$bgColor:n,children:d.jsx("button",{type:"submit",children:i("Header.button")})})}const hg=ee.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  align-items: center;

  > img:first-child {
    width: 11.125rem;
    height: 4.313rem;
  }
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 2.5rem;

  }
  @media (min-width: 1440px){
    gap: 0;
  }
  
`,gg=ee.button`
    display: flex;
    top: 2rem;      
    right: 1rem; 
    z-index: 1001; 
    cursor: pointer;
    position: absolute;
    background-color: transparent;
    width: 3.188rem;
    height: 2.688rem;
   
    @media (min-width: 1024px) {
    display: none;
  }
`,pg=ee.div`
    position: fixed;
    top:0;
    right:0;
    width: 80%;
    height: 100vh;
    z-index: 1000;
    border-top-left-radius: 2.5rem;
    border-bottom-left-radius: 2.5rem;
    
    transform: translateX(${({$isOpen:n})=>n?"0":"100%"});
    transition: transform 0.3s ease-in-out;
    background-color: ${({theme:n})=>n.colors["main-color"]};

    @media (min-width: 768px) {
      width: 60%;
  }
`,nd=ee(E6)`
  position: relative;
  width: 6rem;
  height: 3rem; 
  margin-top: 1rem;
  margin-left: 2rem;
 
  @media (min-width: 1024px) {
    width: 5rem;
    margin: 0 auto;
  } 
   @media (min-width: 1440px) {
    width: 6.813rem;
    height: 2.813rem;
   }
  
`,ld=ee(j6)`
  width: 100%;
  height: 100%;
  background-color:${({theme:n})=>n.colors.switchBackground};
  color: ${({theme:n})=>n.colors["background/text"]};
  position: relative;
  overflow: hidden;
`,id=ee(O6)`
  width: 100%;
  height: 100%;
  svg{
    width: 2rem;
    height: 100%;
  }
  &[data-checked]{
    background-color: ${({theme:n})=>n.colors["main-color"]};
    color: ${({theme:n})=>n.colors["day-background"]};
    svg{
      margin-right: 1.5rem;
    }
  }

   @media (min-width: 1024px) {
      svg{
        width: 1.7rem;
      }
   }
`,qa=ee.a`
  font-size: 1.1rem;
  margin-bottom: 1.8rem;
  padding-left: 2.5rem;
  font-weight: bold;
  text-decoration: none;
  @media (min-width: 1024px) {
    font-size: 0.875rem;
    padding-left: 0; 
  }
`,yg=ee.nav`
    display: flex;
    flex-direction: column;
    color:  ${({theme:n})=>n.colors["day-background"]};
    margin-top: 5rem;
    padding-left: 0;
    Button:last-child{
      margin-top: 2rem;
      background-color: ${({theme:n})=>n.colors["secundary/hover"]};
    }
`,vg=ee.nav`
    display: none;

    @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
    ul{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 25rem;
      margin-top: 2rem;
      a{ 
        font-size: 0.8rem;
      }
    }
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto; 
      Button:first-child{
        width: 8rem;
        height: 3rem;
        margin: 0;
        padding: 0;
      }
    }
  }
   @media (min-width: 1440px){
    gap: 12rem;
     ul{
      width: 28rem;
      justify-content: space-between;
      a{
        font-size: 0.875rem;
      }
    }
    div{
      width: auto; 
      gap: 1rem; 
      button:first-child{
          width: 10.313rem;
          height: 2.813rem;
            margin: 0; 
            padding: 0;
        }
  }}
`,bg="/NekoInn/assets/logo-dark-BFRGjeoa.svg",xg={colors:{fillBackground:"#232323",componentBackground:"#161616",spanText:"#696969",text:"#FFFFFF",switchBackground:"#C75E90",firstAddressBackground:"#C75E90",othersAddressBackground:"#8E345F",firstIconAddressBackground:"#8E345F",iconAddressBackground:"#C75E90","main-color":"#C75E90","secundary/hover":"#8E345F","day-background":"#FBF5F8",white:"#FFFFFF","input/subtitles":"#D9D9D9","background/text":"#232323","black-off":"#696969",black:"#181818","border-gray":"#B7B7B7","night-background":"#1D1D1D"},images:{logo:bg}},Sg="/NekoInn/assets/logo-TxQQ3r3X.svg",A4={colors:{fillBackground:"#FBF5F8",componentBackground:"#FFFFFF",text:"#232323",spanText:"#696969",switchBackground:"#FBF5F8",firstAddressBackground:"#232323",othersAddressBackground:"#C75E90",firstIconAddressBackground:"#C75E90",iconAddressBackground:"#232323","main-color":"#C75E90","secundary/hover":"#8E345F","day-background":"#FBF5F8",white:"#FFFFFF","input/subtitles":"#D9D9D9","background/text":"#232323","black-off":"#696969",black:"#181818","border-gray":"#B7B7B7","night-background":"#1D1D1D"},images:{logo:Sg}};var M4=(n=>(n.light="light",n.dark="dark",n))(M4||{});const rd={light:A4,dark:xg},E4=R.createContext({theme:"light",themeData:A4,toggleTheme:()=>{}}),wg=({children:n})=>{const[i,u]=R.useState(null);R.useEffect(()=>{const s=localStorage.getItem("theme"),g=window.matchMedia("(prefers-color-scheme: dark)").matches,y=s==="light"||s==="dark"?s:g?"dark":"light";u(y),document.documentElement.setAttribute("data-theme",y)},[]),R.useEffect(()=>{i&&(localStorage.setItem("theme",i),document.documentElement.setAttribute("data-theme",i))},[i]);function o(){u(s=>s==="light"?"dark":"light")}return i===null?null:d.jsx(E4.Provider,{value:{theme:i,themeData:rd[i],toggleTheme:o},children:d.jsx(Kh,{theme:rd[i],children:n})})},Ag="data:image/svg+xml,%3csvg%20width='51'%20height='43'%20viewBox='0%200%2051%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%204.5C0%202.01472%202.01472%200%204.5%200H51V9H4.5C2.01472%209%200%206.98528%200%204.5Z'%20fill='%23C75E90'/%3e%3cpath%20d='M0%2021.5C0%2019.0147%202.01472%2017%204.5%2017H51V26H4.5C2.01472%2026%200%2023.9853%200%2021.5Z'%20fill='%23C75E90'/%3e%3cpath%20d='M0%2038.5C0%2036.0147%202.01472%2034%204.5%2034H51V43H4.5C2.01472%2043%200%2040.9853%200%2038.5Z'%20fill='%23C75E90'/%3e%3c/svg%3e",Mg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEGSURBVHgBzdndDYMwDATgjJKR2KDdjFEYgREY5RpaI/FQwAH/nKVISFS+jxISJAqA2sbUxtzGUAiqOd5tLOKqRQ729SqJJcB9TUXEYID+Aa41H50Ih544hqsfhEDV+VnQ7txo6O28KOjjHG+oWX8vqHlf64ZeF27WGN5z/WkAolaNu0GIXn97A5G0QaiD04BaQDpQAR0pgAooB7ADmgvc6uQWj4Wh6P9JsM9JsD/dYF8nwb7jgH3vBvtbENjfJ60C3KDWjc2hXldu1hfOc+hxfwQ9jbdzELyudechaYdQ52YB1fntYMgEqqD4fXVIBV5Al/XExAA8gX6/PlSBLtnArWQKzuKqH+Q1zwBhhaiOAAAAAElFTkSuQmCC",Eg=ee.button`
  display: flex;
  width: 8rem;
  height: 2.813rem;
  margin-left: 2.5rem;
  background-color: ${({theme:n})=>n.colors["main-color"]};
  border: 2px solid;
  font-size: 0.8rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 220px;
  color:${({theme:n})=>n.colors["day-background"]};

   @media (min-width: 1024px) {
    width: 4rem;
    margin-left: 0rem;
    border: none;
   }
  @media (min-width: 1440px){
    width: 5rem;
    padding: 0; 
    border: none;
    margin-left: 0;
    margin-right: 0;
  }

`,ud=()=>{const{i18n:n}=ha(),i=n.language==="pt-BR";return d.jsx(Eg,{onClick:()=>n.changeLanguage(i?"en":"pt-BR"),children:i?"EN":"pt-BR"})};function jg(){const[n,i]=R.useState(!1),[u,o]=R.useState(!1),{theme:s,themeData:g,toggleTheme:y}=R.useContext(E4),S=s===M4.dark,{t:w}=ha("components");R.useEffect(()=>{const b=()=>{o(window.innerWidth<1024)};return b(),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[]),R.useEffect(()=>(n?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[n]);const O=()=>{i(b=>!b)};return d.jsxs(hg,{children:[d.jsx("img",{src:g.images.logo,alt:""}),u&&d.jsxs(d.Fragment,{children:[d.jsx(gg,{onClick:O,$isOpen:n,children:n?d.jsx("img",{src:Mg,alt:"Close menu"}):d.jsx("img",{src:Ag,alt:"Open menu"})}),n&&d.jsxs(pg,{$isOpen:n,children:[d.jsxs(nd,{size:"lg",checked:S,onCheckedChange:y,children:[d.jsx(rf,{}),d.jsx(ld,{children:d.jsx(id,{fallback:d.jsx(Wc,{size:32,"data-icon":"sun"}),children:d.jsx(Jc,{size:32,"data-icon":"moon"})})})]}),d.jsxs(yg,{children:[d.jsx(qa,{href:"#",children:w("Header.about-us")}),d.jsx(qa,{href:"#",children:w("Header.our-rooms")}),d.jsx(qa,{href:"#",children:w("Header.purrCare")}),d.jsx(qa,{href:"#",children:w("Header.testimonial")}),d.jsx(ud,{}),d.jsx(Ic,{bgColor:"secundary/hover"})]})]})]}),!u&&d.jsxs(vg,{children:[d.jsxs("ul",{children:[d.jsx(qa,{href:"#",children:w("Header.about-us")}),d.jsx(qa,{href:"#",children:w("Header.our-rooms")}),d.jsx(qa,{href:"#",children:w("Header.purrCare")}),d.jsx(qa,{href:"#",children:w("Header.testimonial")})]}),d.jsxs("div",{children:[d.jsxs(nd,{size:"lg",checked:S,onCheckedChange:y,children:[d.jsx(rf,{}),d.jsx(ld,{children:d.jsx(id,{fallback:d.jsx(Wc,{size:32,"data-icon":"sun"}),children:d.jsx(Jc,{size:32,"data-icon":"moon"})})})]}),d.jsx(Ic,{}),d.jsx(ud,{})]})]})]})}const Og="/NekoInn/assets/mainHero-HZmoqx8n.png",Tc="data:image/svg+xml,%3csvg%20width='290'%20height='290'%20viewBox='0%200%20290%20290'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M36.5229%20240.795C33.4942%20237.366%2030.6305%20233.796%2027.9415%20230.1L79.6596%20274.129C75.5818%20272.064%2071.6006%20269.81%2067.7372%20267.37L36.5229%20240.795ZM4.47691%20179.608C4.13071%20178.209%203.8078%20176.802%203.50591%20175.393L137.56%20289.526C136.121%20289.453%20134.683%20289.358%20133.244%20289.24L4.47691%20179.608ZM0.308578%20142.155C0.329077%20141.056%200.361058%20139.954%200.40748%20138.853L174.126%20286.756C173.046%20286.979%20171.964%20287.186%20170.881%20287.386L0.308578%20142.155ZM4.19247%20111.567C4.41398%20110.631%204.64738%20109.699%204.88922%20108.764L203.114%20277.538C202.235%20277.921%20201.347%20278.301%20200.459%20278.669L4.19247%20111.567ZM13.1628%2085.3021C13.5307%2084.4868%2013.9097%2083.6772%2014.2921%2082.8722L227.176%20264.121C226.441%20264.628%20225.703%20265.131%20224.956%20265.624L13.1628%2085.3021ZM26.1328%2062.4453C26.6288%2061.7362%2027.1249%2061.03%2027.6332%2060.3315L247.304%20247.356C246.691%20247.97%20246.073%20248.572%20245.453%20249.175L26.1328%2062.4453ZM42.6908%2042.6415C43.3044%2042.0307%2043.9213%2041.4245%2044.5436%2040.8257L263.863%20227.551C263.366%20228.264%20262.87%20228.971%20262.362%20229.669L42.6908%2042.6415ZM62.8191%2025.8756C63.5538%2025.3688%2064.2956%2024.8691%2065.0391%2024.377L276.832%20204.695C276.464%20205.51%20276.089%20206.319%20275.707%20207.125L62.8191%2025.8756ZM86.8811%2012.4624C87.7602%2012.076%2088.644%2011.7008%2089.5322%2011.3318L285.803%20178.433C285.581%20179.369%20285.348%20180.303%20285.106%20181.232L86.8811%2012.4624ZM115.868%203.24027C116.949%203.01761%20118.031%202.81056%20119.114%202.61463L289.691%20147.841C289.666%20148.942%20289.634%20150.042%20289.587%20151.145L115.868%203.24027ZM152.431%200.471211C153.874%200.543281%20155.316%200.642343%20156.751%200.756336L285.519%20110.39C285.864%20111.788%20286.188%20113.195%20286.489%20114.608L152.431%200.471211ZM210.339%2015.871C214.414%2017.9334%20218.39%2020.1838%20222.25%2022.6235L253.48%2049.213C256.505%2052.6386%20259.365%2056.2046%20262.054%2059.9018L210.339%2015.871Z'%20fill='%23C75E90'%20fill-opacity='0.23'/%3e%3c/svg%3e",Cg="/NekoInn/assets/Group%202-PBTU0Cvp.png",zg="/NekoInn/assets/Group%205-D6bqGGk5.png",Dg="/NekoInn/assets/Group%204-gikbulbn.png",Tg="/NekoInn/assets/Group%203-CuEcGpqP.png",Hg="/NekoInn/assets/about-9UhiDkHL.png",Zg="/NekoInn/assets/rooms-B-Xj2u20.png",Ng="/NekoInn/assets/groomingSpa-BlaTG8-7.png",Rg="/NekoInn/assets/playtimeParadise-hPlvWAxO.png",_g="/NekoInn/assets/gourmetDining-7d5oF4Jg.png",Lg="data:image/svg+xml,%3csvg%20width='57'%20height='57'%20viewBox='0%200%2057%2057'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_517)'%3e%3cpath%20d='M51.362%2015.3964C48.2547%2015.3964%2045.7294%2017.922%2045.7294%2021.0294C45.7294%2023.1125%2046.8814%2024.914%2048.5689%2025.8871L41.5986%2028.3957L30.8269%2015.5784C32.789%2014.7%2034.1656%2012.7355%2034.1656%2010.4488C34.1656%207.34141%2031.64%204.81616%2028.533%204.81616C25.4294%204.81616%2022.9038%207.34175%2022.9038%2010.4488C22.9038%2012.7112%2024.253%2014.6581%2026.189%2015.55L15.3957%2028.3886L8.42132%2025.8816C10.1094%2024.9102%2011.2618%2023.1054%2011.2618%2021.0256C11.2618%2017.9183%208.73621%2015.393%205.62921%2015.393C2.52558%2015.393%200%2017.9186%200%2021.0256C0%2023.6665%201.84066%2025.8745%204.29928%2026.4773V42.5291V42.7611C4.29928%2042.8004%204.31822%2042.8291%204.31991%2042.8667C4.32363%2042.9076%204.3101%2042.956%204.31991%2042.9969C4.33073%2043.0612%204.36354%2043.1112%204.38147%2043.1735C4.40548%2043.236%204.42172%2043.2999%204.45114%2043.3642C4.4968%2043.4566%204.56276%2043.5425%204.625%2043.6209C4.65544%2043.6581%204.66863%2043.7065%204.70177%2043.7332C7.63121%2048.0339%2026.2188%2048.1729%2028.4998%2048.1729C30.7812%2048.1729%2049.3695%2048.0406%2052.2999%2043.7332C52.3321%2043.7011%2052.3446%2043.6551%2052.375%2043.6209C52.4376%2043.5428%2052.5015%2043.4569%2052.5499%2043.3642C52.5786%2043.3033%2052.5945%2043.2394%2052.6175%2043.1735C52.6354%2043.1163%2052.6693%2043.0612%2052.6818%2042.9969C52.6889%2042.956%2052.6764%2042.9076%2052.6818%2042.8667C52.6818%2042.8295%2052.6997%2042.8024%2052.6997%2042.7611V42.5291V26.4773C55.1648%2025.8745%2057%2023.6662%2057%2021.0256C56.9912%2017.922%2054.4656%2015.3964%2051.362%2015.3964ZM28.491%2045.4332C21.2708%2045.4332%2015.8449%2044.8464%2012.2393%2044.1344C9.53817%2043.603%207.8514%2043.0037%207.21315%2042.5328C7.66977%2042.1977%208.66485%2041.7945%2010.1849%2041.395C11.7793%2040.9776%2013.9545%2040.5674%2016.7101%2040.2498C19.8796%2039.8824%2023.8082%2039.6328%2028.491%2039.6328C33.1742%2039.6328%2037.1035%2039.8824%2040.2714%2040.2498C43.0286%2040.567%2045.2031%2040.9773%2046.8013%2041.395C48.3172%2041.7948%2049.3126%2042.1977%2049.7693%2042.5328C49.1324%2043.004%2047.4487%2043.603%2044.7462%2044.1344C41.1379%2044.8464%2035.712%2045.4332%2028.491%2045.4332ZM40.9918%2037.5957L32.541%2034.5563L40.7242%2031.6184L46.5388%2038.5356C44.8355%2038.1274%2042.92%2037.824%2040.9918%2037.5957ZM31.0389%2036.9307C29.802%2036.9002%2028.8942%2036.8931%2028.491%2036.8931C28.0872%2036.8931%2027.1794%2036.9002%2025.9431%2036.9307L28.491%2036.0175L31.0389%2036.9307ZM15.9903%2037.5957C14.057%2037.824%2012.1456%2038.127%2010.4423%2038.5356L16.2568%2031.6184L24.439%2034.5563L15.9903%2037.5957ZM49.9529%2028.303V38.336L43.4748%2030.6308L49.9529%2028.303ZM25.638%2010.4521C25.638%208.85737%2026.9365%207.55889%2028.5313%207.55889C30.1257%207.55889%2031.4208%208.85737%2031.4208%2010.4521C31.4208%2012.0432%2030.1257%2013.3417%2028.5313%2013.3417C26.9365%2013.3417%2025.638%2012.0432%2025.638%2010.4521ZM28.491%2017.0659L38.8443%2029.3837L28.491%2033.1046L18.1371%2029.3837L28.491%2017.0659ZM13.5083%2030.6308L7.03017%2038.336V28.303L13.5083%2030.6308ZM2.73258%2021.0294C2.73258%2019.4346%204.02768%2018.1361%205.62211%2018.1361C7.21687%2018.1361%208.51535%2019.4346%208.51535%2021.0294C8.51535%2022.6238%207.21687%2023.9189%205.62211%2023.9189C4.02734%2023.9189%202.73258%2022.6238%202.73258%2021.0294ZM51.362%2023.9189C49.7672%2023.9189%2048.4688%2022.6238%2048.4688%2021.0294C48.4688%2019.4346%2049.7672%2018.1361%2051.362%2018.1361C52.9564%2018.1361%2054.2515%2019.4346%2054.2515%2021.0294C54.2515%2022.6238%2052.9564%2023.9189%2051.362%2023.9189ZM52.4109%2047.6645C52.7423%2048.346%2052.4572%2049.1646%2051.7794%2049.4981C49.0397%2050.8341%2040.778%2052.184%2028.491%2052.184C16.3874%2052.184%207.8355%2050.5608%205.293%2049.539C4.59219%2049.261%204.25226%2048.4563%204.533%2047.7538C4.81846%2047.0547%205.62177%2046.7208%206.31751%2046.9938C8.30632%2047.7947%2016.3373%2049.4446%2028.4944%2049.4446C41.079%2049.4446%2048.5973%2048.0034%2050.5807%2047.0388C51.2585%2046.7012%2052.0753%2046.983%2052.4109%2047.6645Z'%20fill='%23C75E90'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_517'%3e%3crect%20width='57'%20height='57'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Ug="/NekoInn/assets/royal-crown-of-elegant-vintage-design-svgrepo-com%201-CzuB_H3h.svg",qg="data:image/svg+xml,%3csvg%20width='57'%20height='57'%20viewBox='0%200%2057%2057'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_520)'%3e%3cpath%20d='M31.6664%2029.0056C31.6664%2027.2612%2030.2468%2025.845%2028.504%2025.845C26.7605%2025.845%2025.3434%2027.2612%2025.3434%2029.0056C25.3434%2030.7465%2026.7605%2032.1661%2028.504%2032.1661C30.2471%2032.1661%2031.6664%2030.7465%2031.6664%2029.0056ZM28.5027%2029.5951C28.1786%2029.5951%2027.9135%2029.3306%2027.9135%2029.0059C27.9135%2028.6811%2028.177%2028.4167%2028.5027%2028.4167C28.8281%2028.4167%2029.0925%2028.6811%2029.0925%2029.0059C29.0925%2029.3306%2028.8265%2029.5951%2028.5027%2029.5951ZM53.841%2015.6266C52.0966%2015.6266%2050.6805%2017.0421%2050.6805%2018.7871C50.6805%2019.4646%2050.8983%2020.0865%2051.2595%2020.603L38.4799%2030.5293L29.8084%2010.9426C30.8998%2010.4404%2031.6598%209.34866%2031.6598%208.07314C31.6598%206.32811%2030.2436%204.9126%2028.5008%204.9126C26.7573%204.9126%2025.3396%206.32811%2025.3396%208.07314C25.3396%209.34898%2026.1031%2010.4404%2027.1926%2010.9426L18.5528%2030.4586L5.7427%2020.6026C6.10427%2020.0861%206.32205%2019.4643%206.32205%2018.7868C6.32205%2017.0418%204.90431%2015.6263%203.16055%2015.6263C1.41774%2015.6266%200%2017.0421%200%2018.7871C0%2020.529%201.41774%2021.948%203.16055%2021.948C3.22912%2021.948%203.29451%2021.9312%203.36149%2021.928L12.4558%2045.4185C12.6476%2045.914%2013.1238%2046.2387%2013.6536%2046.2387H43.3464C43.8804%2046.2387%2044.354%2045.9172%2044.5435%2045.4185L53.6385%2021.928C53.7055%2021.9312%2053.7706%2021.948%2053.8375%2021.948C55.5839%2021.948%2057%2020.5293%2057%2018.7871C57.0035%2017.0421%2055.5839%2015.6266%2053.841%2015.6266ZM28.5027%207.48395C28.8268%207.48395%2029.0925%207.74776%2029.0925%208.07314C29.0925%208.39885%2028.8281%208.66233%2028.5027%208.66233C28.177%208.66233%2027.9135%208.39885%2027.9135%208.07314C27.9132%207.74744%2028.1786%207.48395%2028.5027%207.48395ZM28.5027%2014.3368L36.3911%2032.1563L28.6119%2038.1961L20.6512%2032.0725L28.5027%2014.3368ZM2.57453%2018.7871C2.57453%2018.4633%202.83833%2018.1979%203.16467%2018.1979C3.49038%2018.1979%203.75386%2018.4617%203.75386%2018.7871C3.75386%2019.1128%203.49006%2019.3763%203.16467%2019.3763C2.83833%2019.3763%202.57453%2019.1109%202.57453%2018.7871ZM17.484%2032.8794L13.6828%2041.464L7.33821%2025.073L17.484%2032.8794ZM15.5186%2043.6671L19.5814%2034.4934L26.5135%2039.8272L21.5702%2043.6674H15.5186V43.6671ZM25.7612%2043.6671L28.6189%2041.4475L31.5077%2043.6671H25.7612ZM35.393%2043.4125L30.7188%2039.8167L37.4621%2034.5768L41.4884%2043.6671H35.646C35.5755%2043.5734%2035.4917%2043.4896%2035.393%2043.4125ZM43.3213%2041.464L39.5548%2032.9528L49.651%2025.1073L43.3213%2041.464ZM53.841%2019.3763C53.5195%2019.3763%2053.2519%2019.1128%2053.2519%2018.7871C53.2519%2018.4617%2053.5131%2018.1979%2053.841%2018.1979C54.1693%2018.1979%2054.4318%2018.4617%2054.4318%2018.7871C54.4318%2019.1128%2054.1693%2019.3763%2053.841%2019.3763ZM44.5016%2050.8018C44.5016%2051.5116%2043.9258%2052.0875%2043.2156%2052.0875H13.7876C13.0777%2052.0875%2012.5019%2051.5119%2012.5019%2050.8018C12.5019%2050.0917%2013.0777%2049.5161%2013.7876%2049.5161H43.2156C43.9289%2049.5161%2044.5016%2050.092%2044.5016%2050.8018Z'%20fill='%23C75E90'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_520'%3e%3crect%20width='57'%20height='57'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Vg=ee.section`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media (min-width: 768px) {
        align-items: center;
    }
`,Bg=ee.header`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span{
        font-size: 0.625rem;
        color: ${({theme:n})=>n.colors["black-off"]};
        font-weight: bold;
        letter-spacing: 3px;
    }
    h2{
        font-size: 2rem;
        font-weight: 700;
    }
    p{
        font-size: 0.75rem;
    }
    @media (min-width: 768px) {
         p{
        font-size: 0.85rem;
    }
    }
     @media (min-width: 1024px) {
       padding: 1rem;
     }
     @media (min-width: 1440px) {
            span{
                font-size: 0.75rem;
            }
            h2{
                font-size: 2.5rem;
            }
            p{
                font-size: 0.875rem;
            }
    }
`,kg=ee.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    article:first-child{
        background-color: ${({theme:n})=>n.colors.componentBackground};
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-radius: 40px;
        padding: 2rem;
        div{
            position: relative;
            span{
                color:  ${({theme:n})=>n.colors["main-color"]};
                font-weight: bold;
                letter-spacing: 3px;
            }

            img{
                position: absolute;
                top: 1%;
                right: 5%;
            }
            h4{
                margin-top: 2rem;
                font-size: 2.5rem;
                font-weight: 800;
                small{
                    font-size: 0.7rem;
                }
            }
        }
        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li{
                display: flex;
                align-items: center;
                gap: 0.8rem;
                font-size: 0.875rem;
            }
       
         
        }
        button{ 
                width: 100%;
                height: 3.5rem;
                background-color: ${({theme:n})=>n.colors["main-color"]};
                color:  ${({theme:n})=>n.colors["day-background"]};
                border-radius: 220px;
                font-size: 0.7rem;
                font-weight: bold;
            }
    }
    article:nth-child(2){
        background-color: ${({theme:n})=>n.colors["main-color"]};
        color: ${({theme:n})=>n.colors["day-background"]};
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-radius: 40px;
        padding: 2rem;
        div{
            position: relative;
            span{
                font-size: 0.8rem;
                font-weight: bold;
                letter-spacing: 3px;
            }

            img{
                position: absolute;
                top: 1%;
                right: 5%;
            }
            h4{
                margin-top: 2rem;
                font-size: 2.5rem;
                font-weight: 800;
                small{
                    font-size: 0.7rem;
                }
            }
        }
        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li{
                display: flex;
                align-items: center;
                gap: 0.8rem;
                font-size: 0.875rem;
            }
       
         
        }
        button{ 
                width: 100%;
                height: 3.5rem;
                background-color: ${({theme:n})=>n.colors["secundary/hover"]};
               
                border-radius: 220px;
                font-size: 0.7rem;
                font-weight: bold;
            }
    
    }
    article:nth-child(3){
         background-color: ${({theme:n})=>n.colors.componentBackground};
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-radius: 40px;
        padding: 2rem;
        div{
            position: relative;
            span{
                color:  ${({theme:n})=>n.colors["main-color"]};
                font-weight: bold;
                letter-spacing: 3px;
            }

            img{
                position: absolute;
                top: 1%;
                right: 5%;
            }
            h4{
                margin-top: 2rem;
                font-size: 2.5rem;
                font-weight: 800;
                small{
                    font-size: 0.7rem;
                }
            }
        }
        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li{
                display: flex;
                align-items: center;
                gap: 0.8rem;
                font-size: 0.875rem;
            }
       
         
        }
        button{ 
                width: 100%;
                height: 3.5rem;
                background-color: ${({theme:n})=>n.colors["main-color"]};
                color:  ${({theme:n})=>n.colors["day-background"]};
                border-radius: 220px;
                font-size: 0.7rem;
                font-weight: bold;
            }
    }
    @media (min-width: 768px) {
        gap: 2rem;
    }
    @media (min-width: 1024px) {
        flex-direction: row;
        article:first-child{
            div{
                h4{
                     font-size: 2rem;
                }
            }
        }
          article:nth-child(2){
            div{
                h4{
                     font-size: 2.3rem;
                }
            }
          }
          article:nth-child(3){
                 div{
                h4{
                     font-size: 2rem;
                }
            }
          }
     }
      @media (min-width: 1440px) {
        position: relative;
        article:first-child{
            width: 29rem;
            height: 36.063rem;
            position: absolute;
            right: 100%;
            margin-top:3rem;
            padding-top: 3rem;
            z-index: 1;
            div{
                 h4{
                     font-size: 2.5rem;
                }
            }
            ul{
                gap: 1.2rem;
                li{
                    gap: 1rem;
                }
            }
            button{
                width: 70%;
                 height: 2.813rem;
                 margin-top: 1rem;
            }
            
        }
        article:nth-child(2){
            width: 27rem;
            height: 40.25rem;
            position: relative;
            z-index: 2;
                padding-top: 5rem;
                div{
                    span{
                        font-size: 1rem;
                    }
                    h4{
                        font-size: 2.25rem;
                    }
                }
             button{
                width: 70%;
                 height: 2.813rem;
                  margin-top: 3rem;
            }
              ul{
                gap: 1.2rem;
                li{
                    gap: 1rem;
                }
            }
        }
           article:nth-child(3){
             width: 29rem;
            height: 36.063rem;
             position: absolute;
             left: 100%;
             margin-top:3rem;
              padding-top: 3rem;
                z-index: 1;
                div{ 
                       h4{
                        font-size: 2.25rem;
                    }
                }
                 button{
                width: 70%;
                height: 2.813rem;
                margin-top: 1rem;
            }
              ul{
                gap: 1.2rem;
                li{
                    gap: 1rem;
                }
            }
           }
      }
`;function Yg(){const{t:n}=ha("components");return d.jsxs(Vg,{children:[d.jsxs(Bg,{children:[d.jsx("span",{children:n("PlanPrices.header-span")}),d.jsx("h2",{children:n("PlanPrices.header-title")}),d.jsx("p",{children:n("PlanPrices.header-description")})]}),d.jsxs(kg,{children:[d.jsxs("article",{children:[d.jsxs("div",{children:[d.jsx("span",{children:"PURR DUCAL"}),d.jsx("img",{src:Lg,alt:""}),d.jsxs("h4",{children:[n("PlanPrices.section-firstDiv-title")," ",d.jsxs("small",{children:[n("PlanPrices.titleSmall")," "]})]})]}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx(Je,{size:32}),n("PlanPrices.section-firstDiv-li1")]}),d.jsxs("li",{children:[d.jsx(Je,{size:32}),n("PlanPrices.section-firstDiv-li2")]}),d.jsxs("li",{children:[d.jsx(Je,{size:32}),n("PlanPrices.section-firstDiv-li3")]}),d.jsxs("li",{children:[d.jsx(Je,{size:32}),n("PlanPrices.section-firstDiv-li4")]}),d.jsxs("li",{children:[d.jsx(Je,{size:32}),n("PlanPrices.section-firstDiv-li5")]})]}),d.jsx("button",{children:n("PlanPrices.button")})]}),d.jsxs("article",{children:[d.jsxs("div",{children:[d.jsx("span",{children:"PURR IMPERIAL"}),d.jsx("img",{src:Ug,alt:""}),d.jsxs("h4",{children:[n("PlanPrices.section-secondDiv-title")," ",d.jsxs("small",{children:["  ",n("PlanPrices.titleSmall")]})]})]}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx(Je,{size:32}),n("PlanPrices.section-secondDiv-li1")]}),d.jsxs("li",{children:[d.jsx(Je,{size:32}),n("PlanPrices.section-secondDiv-li2")]}),d.jsxs("li",{children:[d.jsx(Je,{size:32}),n("PlanPrices.section-secondDiv-li3")]}),d.jsxs("li",{children:[d.jsx(Je,{size:32}),n("PlanPrices.section-secondDiv-li4")]}),d.jsxs("li",{children:[d.jsx(Je,{size:32}),n("PlanPrices.section-secondDiv-li5")]})]}),d.jsx("button",{children:n("PlanPrices.button")})]}),d.jsxs("article",{children:[d.jsxs("div",{children:[d.jsx("span",{children:"PURR ROYAL"}),d.jsx("img",{src:qg,alt:""}),d.jsxs("h4",{children:[n("PlanPrices.section-thirdDiv-title")," ",d.jsxs("small",{children:[" ",n("PlanPrices.titleSmall")]})]})]}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx(Je,{size:32}),n("PlanPrices.section-thirdDiv-li1")]}),d.jsxs("li",{children:[d.jsx(Je,{size:32}),n("PlanPrices.section-thirdDiv-li2")]}),d.jsxs("li",{children:[d.jsx(Je,{size:32}),n("PlanPrices.section-thirdDiv-li3")]}),d.jsxs("li",{children:[d.jsx(Je,{size:32}),n("PlanPrices.section-thirdDiv-li4")]}),d.jsxs("li",{children:[d.jsx(Je,{size:32}),n("PlanPrices.section-thirdDiv-li5")]})]}),d.jsx("button",{children:n("PlanPrices.button")})]})]})]})}const Xg=ee.div`
    header{ 
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      span{
        font-size: 0.7rem;
        color: ${({theme:n})=>n.colors["black-off"]};
        font-weight: bold;
        letter-spacing: 3px;
      }
      h2{
        font-size: 2rem;
        font-weight: 700;
      }
     p{
      font-size: 0.75rem;
     }
    }
      @media (min-width: 768px) {
       header{
        p{
           font-size: 0.85rem;
        }
       }
      }
       @media (min-width: 1024px) {
        header{
          padding: 2rem;
        }
     }
      @media (min-width: 1440px) {
        header{
          span{
            font-size: 0.75rem;
          }
          h2{
            font-size: 2.5rem;
          }
          p{
            font-size: 0.875rem;
          }
        }
      }
`,$g=ee.div`
  display: flex;
  align-items: center;
  position: relative;

  > button:first-child{
    position: absolute;
        top: 40%;
        left: -4%;
        background-color: ${({theme:n})=>n.colors["main-color"]};
        color: ${({theme:n})=>n.colors["day-background"]};
        border-radius: 99px;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
  }


  button:nth-child(3){
    position: absolute;
        top: 40%;
        right: -4%;
        background-color: ${({theme:n})=>n.colors["main-color"]};
        color: ${({theme:n})=>n.colors["day-background"]};
        border-radius: 99px;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
  }
   @media (min-width: 768px) {
     > button:first-child{
      width: 3rem;
      height: 3rem;
      left: 1%;
      svg{
        width: 2.5rem;
        height: 2.5rem;
      }
     }
     button:nth-child(3){
      width: 3rem;
      height: 3rem;
      right: 1%;
       svg{
        width: 2.5rem;
        height: 2.5rem;
      }
     }
   }
    @media (min-width: 1024px) {
        > button:first-child{
          left: -1%;
        }
     button:nth-child(3){
      right: -1%;
    }
    }
    @media (min-width: 1440px) {
       > button:first-child{
        left: 0%;
       }
            button:nth-child(3){
              right: 0%;
            }
  }
`,Qg=ee.section`
   display: ${({$isDesktop:n})=>n?"flex":"block"};
   //mudei de grid para flex
   padding: 2rem;
    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 0.5rem;
     }
      @media (min-width: 1440px) {
        gap: 1rem;
      }
     
`,Hc=ee.section`
   display: ${({$isDesktop:n,$isActive:i})=>n||i?"block":"none"};
   height: 28.313rem;
   background-color:  ${({theme:n})=>n.colors.componentBackground};
    border-radius: 20px;
    padding: 1rem;
   > svg{
    color: ${({theme:n})=>n.colors["main-color"]};
    font-size: 4.625rem;
    margin-bottom: 0.2rem;
   }
   p{
    font-size: 0.875rem;
    padding: 0.5rem;
   }

   div{
    display: flex;
    align-items: center;
    margin-top: 1rem;
    gap: 0.5rem;
    
      figure{
        background-color: ${({theme:n})=>n.colors["main-color"]};
        border-radius: 70%;
        width: 5rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      p{
        font-size: 1rem;
        font-weight: bold;
      }
   }

  
   @media (min-width: 768px) {
    padding: 2rem;
    height: 20rem;
    margin-bottom: 2rem;
   }
    @media (min-width: 1024px) {
      margin-bottom: 3rem;
      height: auto;
       > svg{
        margin-bottom: 1rem;
       }
       p{
        margin-bottom: 1rem;
       }
       figure{
        margin-bottom: 2rem;
       }
    }
     @media (min-width: 1440px) {
      border-radius: 40px;
     }
    
`,Gg="/NekoInn/assets/testimonial%20(2)-Bg0aYrgX.png",Kg="/NekoInn/assets/testimonial-BzJnSPUZ.png",Pg="/NekoInn/assets/fernandaS-DT0jcmS6.png";function Fg(){const[n,i]=R.useState(0),[u,o]=R.useState(!1),{t:s}=ha("components");R.useEffect(()=>{const S=()=>{o(window.innerWidth>=1024)};return S(),window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]),R.useEffect(()=>{if(u)return;const S=setInterval(()=>{y()},5e3);return()=>clearInterval(S)},[n,u]);const g=()=>{i(S=>S===0?2:S-1)},y=()=>{i(S=>S===2?0:S+1)};return d.jsxs(Xg,{children:[d.jsxs("header",{children:[d.jsx("span",{children:s("Feedbacks.header-span")}),d.jsx("h2",{children:s("Feedbacks.header-title")}),d.jsx("p",{children:s("Feedbacks.header-description")})]}),d.jsxs($g,{children:[d.jsx("button",{onClick:g,children:d.jsx(g4,{size:30})}),d.jsxs(Qg,{$isDesktop:u,children:[d.jsxs(Hc,{$isDesktop:u,$isActive:u||n===0,children:[d.jsx(Gr,{}),d.jsx("p",{children:s("Feedbacks.firstQuotes-description")}),d.jsxs("div",{children:[d.jsx("figure",{children:d.jsx("img",{src:Gg,alt:""})}),d.jsx("p",{children:"Emily S"})]})]}),d.jsxs(Hc,{$isDesktop:u,$isActive:u||n===1,children:[d.jsx(Gr,{}),d.jsx("p",{children:s("Feedbacks.secondQuotes-description")}),d.jsxs("div",{children:[d.jsx("figure",{children:d.jsx("img",{src:Kg,alt:""})}),d.jsx("p",{children:"Mark T"})]})]}),d.jsxs(Hc,{$isDesktop:u,$isActive:u||n===2,children:[d.jsx(Gr,{}),d.jsx("p",{children:s("Feedbacks.thirdQuotes-description")}),d.jsxs("div",{children:[d.jsx("figure",{children:d.jsx("img",{src:Pg,alt:""})}),d.jsx("p",{children:"Fernanda S"})]})]})]}),d.jsx("button",{onClick:y,children:d.jsx(c1,{size:30})})]})]})}const cd=ee.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
      background-color: ${({theme:n})=>n.colors.componentBackground};
      padding: 2rem;
      border-radius: 40px;
    header{
        text-align: center;
        margin-top: 2rem; 
        display: flex;
        flex-direction: column;
        gap: 1rem;
        span{
            font-size: 0.7rem;
            color: ${({theme:n})=>n.colors["black-off"]};
            font-weight: bold;
            letter-spacing: 3px;
        }
        h2{
            font-size: 2rem;
            font-weight: 700;
        }
        p{
            font-size: 0.7rem;
        }
    }
    @media (min-width: 768px) {
        header{
            p{
                font-size: 0.85rem;
            }
        }
    }
      @media (min-width: 1440px) {
        padding: 4rem;
      
        margin-left: 1rem;
        margin-right: 1rem;
        border-radius: 40px;
        header{
            span{
                font-size: 0.75rem;
            }
            h2{
                font-size: 2.25rem;
            }
            p{
                font-size: 0.875rem;
            }
        }
      }
`,Jg=ee.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
    div{
        border: 1px solid;
        height: 4rem;
        border-radius: 40px;
        padding-left: 2rem;
        padding-top: 0.6rem;
        gap: 0.2rem;
        display: flex;
        flex-direction: column;
        border-color: ${({theme:n})=>n.colors["border-gray"]};
     

        label{
            font-size: 0.6rem;
            color: ${({theme:n})=>n.colors["black-off"]};
            letter-spacing: 1.5px;
            font-weight: bold;
        }
        input{
            border: none;
            outline: none;
            font-size: 1rem;
        }
       
       input, select{
        background-color:${({theme:n})=>n.colors.componentBackground};
        width: 90%;
      
       }

       input[type='date']{
            &::-webkit-calendar-picker-indicator {
                background-color: ${({theme:n})=>n.colors["main-color"]};
            border-radius: 5px;
                
            }
       }

      
    }
    button{
        background-color: ${({theme:n})=>n.colors["main-color"]};
        color: ${({theme:n})=>n.colors["day-background"]};
        height: 3.5rem;
        border-radius: 999px;
        font-size: 0.75rem;
        font-weight: bold;
        margin-top: 1rem;
       }

           @media (min-width: 1024px) {
            display: grid;
            grid-template-columns: 1fr 1fr; 
            gap: 1rem;
            padding: 2rem;
                & > div:nth-child(1),
                & > div:nth-child(2) {
                    grid-column: span 1; 
                    margin-bottom: 1rem;
                }
                 & > div:nth-child(n + 5):nth-child(-n + 7) {
                grid-column: 1 / -1; 
                  margin-top: 1rem;
                   margin-bottom: 1rem;
                    }
                    & > button:last-child {
                    grid-column: 1 / -1;
                    text-align: center;
                    justify-self: center;
                    width: 30%; 
                    margin-top: 1rem; 
                }

           }
             @media (min-width: 1440px) {
                div{
                    input, select{
                       background-color:${({theme:n})=>n.colors.componentBackground};
                    }
                }
             }
`;class wi{constructor(i=0,u="Network Error"){this.status=i,this.text=u}}const Wg=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,i)=>Promise.resolve(localStorage.setItem(n,i)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},Ge={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Wg()},s1=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},Ig=(n,i="https://api.emailjs.com")=>{if(!n)return;const u=s1(n);Ge.publicKey=u.publicKey,Ge.blockHeadless=u.blockHeadless,Ge.storageProvider=u.storageProvider,Ge.blockList=u.blockList,Ge.limitRate=u.limitRate,Ge.origin=u.origin||i},j4=async(n,i,u={})=>{const o=await fetch(Ge.origin+n,{method:"POST",headers:u,body:i}),s=await o.text(),g=new wi(o.status,s);if(o.ok)return g;throw g},O4=(n,i,u)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!i||typeof i!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!u||typeof u!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},e7=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},C4=n=>n.webdriver||!n.languages||n.languages.length===0,z4=()=>new wi(451,"Unavailable For Headless Browser"),t7=(n,i)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof i!="string")throw"The BlockList watchVariable has to be a string"},a7=n=>{var i;return!((i=n.list)!=null&&i.length)||!n.watchVariable},n7=(n,i)=>n instanceof FormData?n.get(i):n[i],D4=(n,i)=>{if(a7(n))return!1;t7(n.list,n.watchVariable);const u=n7(i,n.watchVariable);return typeof u!="string"?!1:n.list.includes(u)},T4=()=>new wi(403,"Forbidden"),l7=(n,i)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(i&&typeof i!="string")throw"The LimitRate ID has to be a non-empty string"},i7=async(n,i,u)=>{const o=Number(await u.get(n)||0);return i-Date.now()+o},H4=async(n,i,u)=>{if(!i.throttle||!u)return!1;l7(i.throttle,i.id);const o=i.id||n;return await i7(o,i.throttle,u)>0?!0:(await u.set(o,Date.now().toString()),!1)},Z4=()=>new wi(429,"Too Many Requests"),r7=async(n,i,u,o)=>{const s=s1(o),g=s.publicKey||Ge.publicKey,y=s.blockHeadless||Ge.blockHeadless,S=s.storageProvider||Ge.storageProvider,w={...Ge.blockList,...s.blockList},O={...Ge.limitRate,...s.limitRate};return y&&C4(navigator)?Promise.reject(z4()):(O4(g,n,i),e7(u),u&&D4(w,u)?Promise.reject(T4()):await H4(location.pathname,O,S)?Promise.reject(Z4()):j4("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:g,service_id:n,template_id:i,template_params:u}),{"Content-type":"application/json"}))},u7=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},c7=n=>typeof n=="string"?document.querySelector(n):n,o7=async(n,i,u,o)=>{const s=s1(o),g=s.publicKey||Ge.publicKey,y=s.blockHeadless||Ge.blockHeadless,S=Ge.storageProvider||s.storageProvider,w={...Ge.blockList,...s.blockList},O={...Ge.limitRate,...s.limitRate};if(y&&C4(navigator))return Promise.reject(z4());const b=c7(u);O4(g,n,i),u7(b);const C=new FormData(b);return D4(w,C)?Promise.reject(T4()):await H4(location.pathname,O,S)?Promise.reject(Z4()):(C.append("lib_version","4.4.1"),C.append("service_id",n),C.append("template_id",i),C.append("user_id",g),j4("/api/v1.0/email/send-form",C))},od={init:Ig,send:r7,sendForm:o7,EmailJSResponseStatus:wi},N4=6048e5,s7=864e5,R4=6e4,_4=36e5,sd=Symbol.for("constructDateFrom");function ma(n,i){return typeof n=="function"?n(i):n&&typeof n=="object"&&sd in n?n[sd](i):n instanceof Date?new n.constructor(i):new Date(i)}function at(n,i){return ma(i||n,n)}let f7={};function s0(){return f7}function xi(n,i){var S,w,O,b;const u=s0(),o=(i==null?void 0:i.weekStartsOn)??((w=(S=i==null?void 0:i.locale)==null?void 0:S.options)==null?void 0:w.weekStartsOn)??u.weekStartsOn??((b=(O=u.locale)==null?void 0:O.options)==null?void 0:b.weekStartsOn)??0,s=at(n,i==null?void 0:i.in),g=s.getDay(),y=(g<o?7:0)+g-o;return s.setDate(s.getDate()-y),s.setHours(0,0,0,0),s}function e0(n,i){return xi(n,{...i,weekStartsOn:1})}function L4(n,i){const u=at(n,i==null?void 0:i.in),o=u.getFullYear(),s=ma(u,0);s.setFullYear(o+1,0,4),s.setHours(0,0,0,0);const g=e0(s),y=ma(u,0);y.setFullYear(o,0,4),y.setHours(0,0,0,0);const S=e0(y);return u.getTime()>=g.getTime()?o+1:u.getTime()>=S.getTime()?o:o-1}function fd(n){const i=at(n),u=new Date(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()));return u.setUTCFullYear(i.getFullYear()),+n-+u}function d7(n,...i){const u=ma.bind(null,i.find(o=>typeof o=="object"));return i.map(u)}function dd(n,i){const u=at(n,i==null?void 0:i.in);return u.setHours(0,0,0,0),u}function m7(n,i,u){const[o,s]=d7(u==null?void 0:u.in,n,i),g=dd(o),y=dd(s),S=+g-fd(g),w=+y-fd(y);return Math.round((S-w)/s7)}function h7(n,i){const u=L4(n,i),o=ma(n,0);return o.setFullYear(u,0,4),o.setHours(0,0,0,0),e0(o)}function g7(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function p7(n){return!(!g7(n)&&typeof n!="number"||isNaN(+at(n)))}function y7(n,i){const u=at(n,i==null?void 0:i.in);return u.setFullYear(u.getFullYear(),0,1),u.setHours(0,0,0,0),u}const v7={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},b7=(n,i,u)=>{let o;const s=v7[n];return typeof s=="string"?o=s:i===1?o=s.one:o=s.other.replace("{{count}}",i.toString()),u!=null&&u.addSuffix?u.comparison&&u.comparison>0?"in "+o:o+" ago":o};function ol(n){return(i={})=>{const u=i.width?String(i.width):n.defaultWidth;return n.formats[u]||n.formats[n.defaultWidth]}}const x7={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},S7={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},w7={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},A7={date:ol({formats:x7,defaultWidth:"full"}),time:ol({formats:S7,defaultWidth:"full"}),dateTime:ol({formats:w7,defaultWidth:"full"})},M7={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},E7=(n,i,u,o)=>M7[n];function Qt(n){return(i,u)=>{const o=u!=null&&u.context?String(u.context):"standalone";let s;if(o==="formatting"&&n.formattingValues){const y=n.defaultFormattingWidth||n.defaultWidth,S=u!=null&&u.width?String(u.width):y;s=n.formattingValues[S]||n.formattingValues[y]}else{const y=n.defaultWidth,S=u!=null&&u.width?String(u.width):n.defaultWidth;s=n.values[S]||n.values[y]}const g=n.argumentCallback?n.argumentCallback(i):i;return s[g]}}const j7={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},O7={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},C7={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},z7={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},D7={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},T7={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},H7=(n,i)=>{const u=Number(n),o=u%100;if(o>20||o<10)switch(o%10){case 1:return u+"st";case 2:return u+"nd";case 3:return u+"rd"}return u+"th"},Z7={ordinalNumber:H7,era:Qt({values:j7,defaultWidth:"wide"}),quarter:Qt({values:O7,defaultWidth:"wide",argumentCallback:n=>n-1}),month:Qt({values:C7,defaultWidth:"wide"}),day:Qt({values:z7,defaultWidth:"wide"}),dayPeriod:Qt({values:D7,defaultWidth:"wide",formattingValues:T7,defaultFormattingWidth:"wide"})};function Gt(n){return(i,u={})=>{const o=u.width,s=o&&n.matchPatterns[o]||n.matchPatterns[n.defaultMatchWidth],g=i.match(s);if(!g)return null;const y=g[0],S=o&&n.parsePatterns[o]||n.parsePatterns[n.defaultParseWidth],w=Array.isArray(S)?R7(S,C=>C.test(y)):N7(S,C=>C.test(y));let O;O=n.valueCallback?n.valueCallback(w):w,O=u.valueCallback?u.valueCallback(O):O;const b=i.slice(y.length);return{value:O,rest:b}}}function N7(n,i){for(const u in n)if(Object.prototype.hasOwnProperty.call(n,u)&&i(n[u]))return u}function R7(n,i){for(let u=0;u<n.length;u++)if(i(n[u]))return u}function U4(n){return(i,u={})=>{const o=i.match(n.matchPattern);if(!o)return null;const s=o[0],g=i.match(n.parsePattern);if(!g)return null;let y=n.valueCallback?n.valueCallback(g[0]):g[0];y=u.valueCallback?u.valueCallback(y):y;const S=i.slice(s.length);return{value:y,rest:S}}}const _7=/^(\d+)(th|st|nd|rd)?/i,L7=/\d+/i,U7={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},q7={any:[/^b/i,/^(a|c)/i]},V7={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},B7={any:[/1/i,/2/i,/3/i,/4/i]},k7={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Y7={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},X7={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},$7={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Q7={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},G7={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},K7={ordinalNumber:U4({matchPattern:_7,parsePattern:L7,valueCallback:n=>parseInt(n,10)}),era:Gt({matchPatterns:U7,defaultMatchWidth:"wide",parsePatterns:q7,defaultParseWidth:"any"}),quarter:Gt({matchPatterns:V7,defaultMatchWidth:"wide",parsePatterns:B7,defaultParseWidth:"any",valueCallback:n=>n+1}),month:Gt({matchPatterns:k7,defaultMatchWidth:"wide",parsePatterns:Y7,defaultParseWidth:"any"}),day:Gt({matchPatterns:X7,defaultMatchWidth:"wide",parsePatterns:$7,defaultParseWidth:"any"}),dayPeriod:Gt({matchPatterns:Q7,defaultMatchWidth:"any",parsePatterns:G7,defaultParseWidth:"any"})},P7={code:"en-US",formatDistance:b7,formatLong:A7,formatRelative:E7,localize:Z7,match:K7,options:{weekStartsOn:0,firstWeekContainsDate:1}};function F7(n,i){const u=at(n,i==null?void 0:i.in);return m7(u,y7(u))+1}function J7(n,i){const u=at(n,i==null?void 0:i.in),o=+e0(u)-+h7(u);return Math.round(o/N4)+1}function q4(n,i){var b,C,z,N;const u=at(n,i==null?void 0:i.in),o=u.getFullYear(),s=s0(),g=(i==null?void 0:i.firstWeekContainsDate)??((C=(b=i==null?void 0:i.locale)==null?void 0:b.options)==null?void 0:C.firstWeekContainsDate)??s.firstWeekContainsDate??((N=(z=s.locale)==null?void 0:z.options)==null?void 0:N.firstWeekContainsDate)??1,y=ma((i==null?void 0:i.in)||n,0);y.setFullYear(o+1,0,g),y.setHours(0,0,0,0);const S=xi(y,i),w=ma((i==null?void 0:i.in)||n,0);w.setFullYear(o,0,g),w.setHours(0,0,0,0);const O=xi(w,i);return+u>=+S?o+1:+u>=+O?o:o-1}function W7(n,i){var S,w,O,b;const u=s0(),o=(i==null?void 0:i.firstWeekContainsDate)??((w=(S=i==null?void 0:i.locale)==null?void 0:S.options)==null?void 0:w.firstWeekContainsDate)??u.firstWeekContainsDate??((b=(O=u.locale)==null?void 0:O.options)==null?void 0:b.firstWeekContainsDate)??1,s=q4(n,i),g=ma((i==null?void 0:i.in)||n,0);return g.setFullYear(s,0,o),g.setHours(0,0,0,0),xi(g,i)}function I7(n,i){const u=at(n,i==null?void 0:i.in),o=+xi(u,i)-+W7(u,i);return Math.round(o/N4)+1}function pe(n,i){const u=n<0?"-":"",o=Math.abs(n).toString().padStart(i,"0");return u+o}const Va={y(n,i){const u=n.getFullYear(),o=u>0?u:1-u;return pe(i==="yy"?o%100:o,i.length)},M(n,i){const u=n.getMonth();return i==="M"?String(u+1):pe(u+1,2)},d(n,i){return pe(n.getDate(),i.length)},a(n,i){const u=n.getHours()/12>=1?"pm":"am";switch(i){case"a":case"aa":return u.toUpperCase();case"aaa":return u;case"aaaaa":return u[0];case"aaaa":default:return u==="am"?"a.m.":"p.m."}},h(n,i){return pe(n.getHours()%12||12,i.length)},H(n,i){return pe(n.getHours(),i.length)},m(n,i){return pe(n.getMinutes(),i.length)},s(n,i){return pe(n.getSeconds(),i.length)},S(n,i){const u=i.length,o=n.getMilliseconds(),s=Math.trunc(o*Math.pow(10,u-3));return pe(s,i.length)}},ll={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},md={G:function(n,i,u){const o=n.getFullYear()>0?1:0;switch(i){case"G":case"GG":case"GGG":return u.era(o,{width:"abbreviated"});case"GGGGG":return u.era(o,{width:"narrow"});case"GGGG":default:return u.era(o,{width:"wide"})}},y:function(n,i,u){if(i==="yo"){const o=n.getFullYear(),s=o>0?o:1-o;return u.ordinalNumber(s,{unit:"year"})}return Va.y(n,i)},Y:function(n,i,u,o){const s=q4(n,o),g=s>0?s:1-s;if(i==="YY"){const y=g%100;return pe(y,2)}return i==="Yo"?u.ordinalNumber(g,{unit:"year"}):pe(g,i.length)},R:function(n,i){const u=L4(n);return pe(u,i.length)},u:function(n,i){const u=n.getFullYear();return pe(u,i.length)},Q:function(n,i,u){const o=Math.ceil((n.getMonth()+1)/3);switch(i){case"Q":return String(o);case"QQ":return pe(o,2);case"Qo":return u.ordinalNumber(o,{unit:"quarter"});case"QQQ":return u.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return u.quarter(o,{width:"narrow",context:"formatting"});case"QQQQ":default:return u.quarter(o,{width:"wide",context:"formatting"})}},q:function(n,i,u){const o=Math.ceil((n.getMonth()+1)/3);switch(i){case"q":return String(o);case"qq":return pe(o,2);case"qo":return u.ordinalNumber(o,{unit:"quarter"});case"qqq":return u.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return u.quarter(o,{width:"narrow",context:"standalone"});case"qqqq":default:return u.quarter(o,{width:"wide",context:"standalone"})}},M:function(n,i,u){const o=n.getMonth();switch(i){case"M":case"MM":return Va.M(n,i);case"Mo":return u.ordinalNumber(o+1,{unit:"month"});case"MMM":return u.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return u.month(o,{width:"narrow",context:"formatting"});case"MMMM":default:return u.month(o,{width:"wide",context:"formatting"})}},L:function(n,i,u){const o=n.getMonth();switch(i){case"L":return String(o+1);case"LL":return pe(o+1,2);case"Lo":return u.ordinalNumber(o+1,{unit:"month"});case"LLL":return u.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return u.month(o,{width:"narrow",context:"standalone"});case"LLLL":default:return u.month(o,{width:"wide",context:"standalone"})}},w:function(n,i,u,o){const s=I7(n,o);return i==="wo"?u.ordinalNumber(s,{unit:"week"}):pe(s,i.length)},I:function(n,i,u){const o=J7(n);return i==="Io"?u.ordinalNumber(o,{unit:"week"}):pe(o,i.length)},d:function(n,i,u){return i==="do"?u.ordinalNumber(n.getDate(),{unit:"date"}):Va.d(n,i)},D:function(n,i,u){const o=F7(n);return i==="Do"?u.ordinalNumber(o,{unit:"dayOfYear"}):pe(o,i.length)},E:function(n,i,u){const o=n.getDay();switch(i){case"E":case"EE":case"EEE":return u.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return u.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return u.day(o,{width:"short",context:"formatting"});case"EEEE":default:return u.day(o,{width:"wide",context:"formatting"})}},e:function(n,i,u,o){const s=n.getDay(),g=(s-o.weekStartsOn+8)%7||7;switch(i){case"e":return String(g);case"ee":return pe(g,2);case"eo":return u.ordinalNumber(g,{unit:"day"});case"eee":return u.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return u.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return u.day(s,{width:"short",context:"formatting"});case"eeee":default:return u.day(s,{width:"wide",context:"formatting"})}},c:function(n,i,u,o){const s=n.getDay(),g=(s-o.weekStartsOn+8)%7||7;switch(i){case"c":return String(g);case"cc":return pe(g,i.length);case"co":return u.ordinalNumber(g,{unit:"day"});case"ccc":return u.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return u.day(s,{width:"narrow",context:"standalone"});case"cccccc":return u.day(s,{width:"short",context:"standalone"});case"cccc":default:return u.day(s,{width:"wide",context:"standalone"})}},i:function(n,i,u){const o=n.getDay(),s=o===0?7:o;switch(i){case"i":return String(s);case"ii":return pe(s,i.length);case"io":return u.ordinalNumber(s,{unit:"day"});case"iii":return u.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return u.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return u.day(o,{width:"short",context:"formatting"});case"iiii":default:return u.day(o,{width:"wide",context:"formatting"})}},a:function(n,i,u){const s=n.getHours()/12>=1?"pm":"am";switch(i){case"a":case"aa":return u.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return u.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return u.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return u.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(n,i,u){const o=n.getHours();let s;switch(o===12?s=ll.noon:o===0?s=ll.midnight:s=o/12>=1?"pm":"am",i){case"b":case"bb":return u.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return u.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return u.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return u.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(n,i,u){const o=n.getHours();let s;switch(o>=17?s=ll.evening:o>=12?s=ll.afternoon:o>=4?s=ll.morning:s=ll.night,i){case"B":case"BB":case"BBB":return u.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return u.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return u.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(n,i,u){if(i==="ho"){let o=n.getHours()%12;return o===0&&(o=12),u.ordinalNumber(o,{unit:"hour"})}return Va.h(n,i)},H:function(n,i,u){return i==="Ho"?u.ordinalNumber(n.getHours(),{unit:"hour"}):Va.H(n,i)},K:function(n,i,u){const o=n.getHours()%12;return i==="Ko"?u.ordinalNumber(o,{unit:"hour"}):pe(o,i.length)},k:function(n,i,u){let o=n.getHours();return o===0&&(o=24),i==="ko"?u.ordinalNumber(o,{unit:"hour"}):pe(o,i.length)},m:function(n,i,u){return i==="mo"?u.ordinalNumber(n.getMinutes(),{unit:"minute"}):Va.m(n,i)},s:function(n,i,u){return i==="so"?u.ordinalNumber(n.getSeconds(),{unit:"second"}):Va.s(n,i)},S:function(n,i){return Va.S(n,i)},X:function(n,i,u){const o=n.getTimezoneOffset();if(o===0)return"Z";switch(i){case"X":return gd(o);case"XXXX":case"XX":return fn(o);case"XXXXX":case"XXX":default:return fn(o,":")}},x:function(n,i,u){const o=n.getTimezoneOffset();switch(i){case"x":return gd(o);case"xxxx":case"xx":return fn(o);case"xxxxx":case"xxx":default:return fn(o,":")}},O:function(n,i,u){const o=n.getTimezoneOffset();switch(i){case"O":case"OO":case"OOO":return"GMT"+hd(o,":");case"OOOO":default:return"GMT"+fn(o,":")}},z:function(n,i,u){const o=n.getTimezoneOffset();switch(i){case"z":case"zz":case"zzz":return"GMT"+hd(o,":");case"zzzz":default:return"GMT"+fn(o,":")}},t:function(n,i,u){const o=Math.trunc(+n/1e3);return pe(o,i.length)},T:function(n,i,u){return pe(+n,i.length)}};function hd(n,i=""){const u=n>0?"-":"+",o=Math.abs(n),s=Math.trunc(o/60),g=o%60;return g===0?u+String(s):u+String(s)+i+pe(g,2)}function gd(n,i){return n%60===0?(n>0?"-":"+")+pe(Math.abs(n)/60,2):fn(n,i)}function fn(n,i=""){const u=n>0?"-":"+",o=Math.abs(n),s=pe(Math.trunc(o/60),2),g=pe(o%60,2);return u+s+i+g}const pd=(n,i)=>{switch(n){case"P":return i.date({width:"short"});case"PP":return i.date({width:"medium"});case"PPP":return i.date({width:"long"});case"PPPP":default:return i.date({width:"full"})}},V4=(n,i)=>{switch(n){case"p":return i.time({width:"short"});case"pp":return i.time({width:"medium"});case"ppp":return i.time({width:"long"});case"pppp":default:return i.time({width:"full"})}},ep=(n,i)=>{const u=n.match(/(P+)(p+)?/)||[],o=u[1],s=u[2];if(!s)return pd(n,i);let g;switch(o){case"P":g=i.dateTime({width:"short"});break;case"PP":g=i.dateTime({width:"medium"});break;case"PPP":g=i.dateTime({width:"long"});break;case"PPPP":default:g=i.dateTime({width:"full"});break}return g.replace("{{date}}",pd(o,i)).replace("{{time}}",V4(s,i))},tp={p:V4,P:ep},ap=/^D+$/,np=/^Y+$/,lp=["D","DD","YY","YYYY"];function ip(n){return ap.test(n)}function rp(n){return np.test(n)}function up(n,i,u){const o=cp(n,i,u);if(console.warn(o),lp.includes(n))throw new RangeError(o)}function cp(n,i,u){const o=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${i}\`) for formatting ${o} to the input \`${u}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const op=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,sp=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,fp=/^'([^]*?)'?$/,dp=/''/g,mp=/[a-zA-Z]/;function Zc(n,i,u){var b,C,z,N,U,q,K,J;const o=s0(),s=(u==null?void 0:u.locale)??o.locale??P7,g=(u==null?void 0:u.firstWeekContainsDate)??((C=(b=u==null?void 0:u.locale)==null?void 0:b.options)==null?void 0:C.firstWeekContainsDate)??o.firstWeekContainsDate??((N=(z=o.locale)==null?void 0:z.options)==null?void 0:N.firstWeekContainsDate)??1,y=(u==null?void 0:u.weekStartsOn)??((q=(U=u==null?void 0:u.locale)==null?void 0:U.options)==null?void 0:q.weekStartsOn)??o.weekStartsOn??((J=(K=o.locale)==null?void 0:K.options)==null?void 0:J.weekStartsOn)??0,S=at(n,u==null?void 0:u.in);if(!p7(S))throw new RangeError("Invalid time value");let w=i.match(sp).map(k=>{const _=k[0];if(_==="p"||_==="P"){const $=tp[_];return $(k,s.formatLong)}return k}).join("").match(op).map(k=>{if(k==="''")return{isToken:!1,value:"'"};const _=k[0];if(_==="'")return{isToken:!1,value:hp(k)};if(md[_])return{isToken:!0,value:k};if(_.match(mp))throw new RangeError("Format string contains an unescaped latin alphabet character `"+_+"`");return{isToken:!1,value:k}});s.localize.preprocessor&&(w=s.localize.preprocessor(S,w));const O={firstWeekContainsDate:g,weekStartsOn:y,locale:s};return w.map(k=>{if(!k.isToken)return k.value;const _=k.value;(!(u!=null&&u.useAdditionalWeekYearTokens)&&rp(_)||!(u!=null&&u.useAdditionalDayOfYearTokens)&&ip(_))&&up(_,i,String(n));const $=md[_[0]];return $(S,_,s.localize,O)}).join("")}function hp(n){const i=n.match(fp);return i?i[1].replace(dp,"'"):n}function gp(n,i){return+at(n)<+at(i)}function pp(n,i){const u=()=>ma(i==null?void 0:i.in,NaN),s=xp(n);let g;if(s.date){const O=Sp(s.date,2);g=wp(O.restDateString,O.year)}if(!g||isNaN(+g))return u();const y=+g;let S=0,w;if(s.time&&(S=Ap(s.time),isNaN(S)))return u();if(s.timezone){if(w=Mp(s.timezone),isNaN(w))return u()}else{const O=new Date(y+S),b=at(0,i==null?void 0:i.in);return b.setFullYear(O.getUTCFullYear(),O.getUTCMonth(),O.getUTCDate()),b.setHours(O.getUTCHours(),O.getUTCMinutes(),O.getUTCSeconds(),O.getUTCMilliseconds()),b}return at(y+S+w,i==null?void 0:i.in)}const qr={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},yp=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,vp=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,bp=/^([+-])(\d{2})(?::?(\d{2}))?$/;function xp(n){const i={},u=n.split(qr.dateTimeDelimiter);let o;if(u.length>2)return i;if(/:/.test(u[0])?o=u[0]:(i.date=u[0],o=u[1],qr.timeZoneDelimiter.test(i.date)&&(i.date=n.split(qr.timeZoneDelimiter)[0],o=n.substr(i.date.length,n.length))),o){const s=qr.timezone.exec(o);s?(i.time=o.replace(s[1],""),i.timezone=s[1]):i.time=o}return i}function Sp(n,i){const u=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+i)+"})|(\\d{2}|[+-]\\d{"+(2+i)+"})$)"),o=n.match(u);if(!o)return{year:NaN,restDateString:""};const s=o[1]?parseInt(o[1]):null,g=o[2]?parseInt(o[2]):null;return{year:g===null?s:g*100,restDateString:n.slice((o[1]||o[2]).length)}}function wp(n,i){if(i===null)return new Date(NaN);const u=n.match(yp);if(!u)return new Date(NaN);const o=!!u[4],s=hi(u[1]),g=hi(u[2])-1,y=hi(u[3]),S=hi(u[4]),w=hi(u[5])-1;if(o)return zp(i,S,w)?Ep(i,S,w):new Date(NaN);{const O=new Date(0);return!Op(i,g,y)||!Cp(i,s)?new Date(NaN):(O.setUTCFullYear(i,g,Math.max(s,y)),O)}}function hi(n){return n?parseInt(n):1}function Ap(n){const i=n.match(vp);if(!i)return NaN;const u=Nc(i[1]),o=Nc(i[2]),s=Nc(i[3]);return Dp(u,o,s)?u*_4+o*R4+s*1e3:NaN}function Nc(n){return n&&parseFloat(n.replace(",","."))||0}function Mp(n){if(n==="Z")return 0;const i=n.match(bp);if(!i)return 0;const u=i[1]==="+"?-1:1,o=parseInt(i[2]),s=i[3]&&parseInt(i[3])||0;return Tp(o,s)?u*(o*_4+s*R4):NaN}function Ep(n,i,u){const o=new Date(0);o.setUTCFullYear(n,0,4);const s=o.getUTCDay()||7,g=(i-1)*7+u+1-s;return o.setUTCDate(o.getUTCDate()+g),o}const jp=[31,null,31,30,31,30,31,31,30,31,30,31];function B4(n){return n%400===0||n%4===0&&n%100!==0}function Op(n,i,u){return i>=0&&i<=11&&u>=1&&u<=(jp[i]||(B4(n)?29:28))}function Cp(n,i){return i>=1&&i<=(B4(n)?366:365)}function zp(n,i,u){return i>=1&&i<=53&&u>=0&&u<=6}function Dp(n,i,u){return n===24?i===0&&u===0:u>=0&&u<60&&i>=0&&i<60&&n>=0&&n<25}function Tp(n,i){return i>=0&&i<=59}const Hp={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 mês",other:"cerca de {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}},Zp=(n,i,u)=>{let o;const s=Hp[n];return typeof s=="string"?o=s:i===1?o=s.one:o=s.other.replace("{{count}}",String(i)),u!=null&&u.addSuffix?u.comparison&&u.comparison>0?"em "+o:"há "+o:o},Np={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},Rp={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},_p={full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Lp={date:ol({formats:Np,defaultWidth:"full"}),time:ol({formats:Rp,defaultWidth:"full"}),dateTime:ol({formats:_p,defaultWidth:"full"})},Up={lastWeek:n=>{const i=n.getDay();return"'"+(i===0||i===6?"último":"última")+"' eeee 'às' p"},yesterday:"'ontem às' p",today:"'hoje às' p",tomorrow:"'amanhã às' p",nextWeek:"eeee 'às' p",other:"P"},qp=(n,i,u,o)=>{const s=Up[n];return typeof s=="function"?s(i):s},Vp={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},Bp={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},kp={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},Yp={narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","terça","quarta","quinta","sexta","sábado"],wide:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},Xp={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"}},$p={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},Qp=(n,i)=>{const u=Number(n);return(i==null?void 0:i.unit)==="week"?u+"ª":u+"º"},Gp={ordinalNumber:Qp,era:Qt({values:Vp,defaultWidth:"wide"}),quarter:Qt({values:Bp,defaultWidth:"wide",argumentCallback:n=>n-1}),month:Qt({values:kp,defaultWidth:"wide"}),day:Qt({values:Yp,defaultWidth:"wide"}),dayPeriod:Qt({values:Xp,defaultWidth:"wide",formattingValues:$p,defaultFormattingWidth:"wide"})},Kp=/^(\d+)[ºªo]?/i,Pp=/\d+/i,Fp={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},Jp={any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},Wp={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},Ip={any:[/1/i,/2/i,/3/i,/4/i]},e9={narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},t9={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},a9={narrow:/^(dom|[23456]ª?|s[aá]b)/i,short:/^(dom|[23456]ª?|s[aá]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,wide:/^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i},n9={short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[aá]b/i]},l9={narrow:/^(a|p|mn|md|(da) (manhã|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i},i9={any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manhã/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},r9={ordinalNumber:U4({matchPattern:Kp,parsePattern:Pp,valueCallback:n=>parseInt(n,10)}),era:Gt({matchPatterns:Fp,defaultMatchWidth:"wide",parsePatterns:Jp,defaultParseWidth:"any"}),quarter:Gt({matchPatterns:Wp,defaultMatchWidth:"wide",parsePatterns:Ip,defaultParseWidth:"any",valueCallback:n=>n+1}),month:Gt({matchPatterns:e9,defaultMatchWidth:"wide",parsePatterns:t9,defaultParseWidth:"any"}),day:Gt({matchPatterns:a9,defaultMatchWidth:"wide",parsePatterns:n9,defaultParseWidth:"any"}),dayPeriod:Gt({matchPatterns:l9,defaultMatchWidth:"any",parsePatterns:i9,defaultParseWidth:"any"})},u9={code:"pt-BR",formatDistance:Zp,formatLong:Lp,formatRelative:qp,localize:Gp,match:r9,options:{weekStartsOn:0,firstWeekContainsDate:1}},il={serviceId:"service_8xecsk9",templateIdAdm:"template_yooclzn",templateIdUser:"template_8rblqom",userId:"99qCZYCqNeIdb6Y5n"},yd=new Date(2025,4,1);function c9(){const[n,i]=R.useState({name:"",email:"",phone:"",catName:"",scredullingDate:null,numberPets:1,purrPlan:""}),[u,o]=R.useState(!1),[s,g]=R.useState(!1),[y,S]=R.useState(""),[w,O]=R.useState(!1),{t:b}=ha("components"),C=n.scredullingDate?Zc(n.scredullingDate,"dd 'de' MMM 'de' yyyy",{locale:u9}):"",z=U=>{const{name:q,value:K}=U.target;i(J=>{if(q==="numberPets")return{...J,[q]:Number(K)};if(q==="scredullingDate"){const k=K?pp(K):null;return{...J,[q]:k}}return{...J,[q]:K}})},N=async U=>{if(U.preventDefault(),!(u||w)){if(n.scredullingDate&&gp(n.scredullingDate,yd)){S("Por favor, selecione uma data a partir de maio de 2025");return}o(!0),S("");try{const q={...n,scredullingDate:C,numberPets:n.numberPets.toString()};await od.send(il.serviceId,il.templateIdAdm,{...q,to_email:"helza.batista.aragao@gmail.com",subject:`Novo agendamento no Neko Inn - ${n.name}`},il.userId),await od.send(il.serviceId,il.templateIdUser,{...q,to_email:n.email,subject:"Auto-reply: Agendamento concluído! | Neko Inn"},il.userId),O(!0),g(!0)}catch(q){console.error("Erro ao enviar email:",q),S("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente."),O(!1)}finally{o(!1)}}};return s?d.jsx(cd,{children:d.jsxs("header",{children:[d.jsx("span",{children:b("Contact.confirmation-span")}),d.jsx("h2",{children:b("Contact.confirmation-title")}),d.jsxs("p",{children:[b("Contact.confirmation-descriptionEmail")," ",d.jsx("strong",{children:n.email})," ",b("Contact.confirmation-descriptionPlan")," ",d.jsx("strong",{children:n.purrPlan})," ",b("Contact.confirmation-descriptionDate")," ",d.jsx("strong",{children:C}),"."]})]})}):d.jsxs(cd,{children:[d.jsxs("header",{children:[d.jsx("span",{children:b("Contact.header-span")}),d.jsx("h2",{children:b("Contact.header-title")}),d.jsx("p",{children:b("Contact.header-description")}),y&&d.jsx("p",{className:"error-message",children:y})]}),d.jsxs(Jg,{onSubmit:N,children:[d.jsxs("div",{children:[d.jsx("label",{htmlFor:"name",children:b("Contact.label-name")}),d.jsx("input",{type:"text",id:"name",name:"name",autoComplete:"name",value:n.name,onChange:z,required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"email",children:b("Contact.label-email")}),d.jsx("input",{type:"email",id:"email",name:"email",autoComplete:"email",value:n.email,onChange:z,required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"phone",children:b("Contact.label-phone")}),d.jsx("input",{type:"tel",id:"phone",name:"phone",autoComplete:"tel",value:n.phone,onChange:z,required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"catName",children:b("Contact.label-catName")}),d.jsx("input",{type:"text",id:"catName",name:"catName",value:n.catName,onChange:z,required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"scredullingDate",children:b("Contact.label-date")}),d.jsx("input",{type:"date",id:"scredullingDate",name:"scredullingDate",value:n.scredullingDate?Zc(n.scredullingDate,"yyyy-MM-dd"):"",onChange:z,min:Zc(yd,"yyyy-MM-dd"),required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"numberPets",children:b("Contact.label-numberPets")}),d.jsx("input",{type:"number",id:"numberPets",name:"numberPets",value:n.numberPets,onChange:z,min:"1",required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"purrPlan",children:b("Contact.label-purrPlan")}),d.jsxs("select",{name:"purrPlan",id:"purrPlan",value:n.purrPlan,onChange:z,required:!0,children:[d.jsx("option",{defaultValue:"selecione",children:b("Contact.label-pick")}),d.jsx("option",{value:"Purr Ducal",children:"Purr Ducal"}),d.jsx("option",{value:"Purr Imperial",children:"Purr Imperial"}),d.jsx("option",{value:"Purr Royal",children:"Purr Royal"})]})]}),d.jsxs("button",{type:"submit",disabled:u||w,children:[" ",u?b("Contact.form-sending","Sending..."):b("Contact.form-bookNow","Book Now")]})]})]})}const o9="data:image/svg+xml,%3csvg%20width='108'%20height='108'%20viewBox='0%200%20108%20108'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M54%200C24.1754%200%200%2024.1754%200%2054C0%2083.8246%2024.1754%20108%2054%20108C83.8246%20108%20108%2083.8246%20108%2054C108%2024.1754%2083.8246%200%2054%200ZM86.265%2039.2383C85.7458%2039.5862%2081.9658%2042.1563%2080.4912%2045.5054C80.4912%2045.5054%2076.7942%2055.6979%2069.956%2066.4356C68.4554%2071.2852%2076.1348%2084.9721%2076.1348%2084.9721H76.0777C77.3758%2084.9721%2078.4142%2086.0417%2078.4142%2087.3087C78.4142%2088.5756%2077.3446%2089.6452%2076.0777%2089.6452H73.2479C73.1025%2089.6452%2072.9883%2089.5881%2072.8429%2089.5569C72.8117%2089.5258%2072.7858%2089.5258%2072.7546%2089.5258C71.9446%2089.3544%2071.3112%2088.7729%2071.0515%2087.994C71.0515%2087.9629%2071.0204%2087.9629%2071.0204%2087.9369C70.0702%2085.86%2060.5112%2071.2229%2060.5112%2071.2229C58.2006%2066.9496%2053.7248%2064.2963%2048.8752%2064.2963C46.7983%2064.2963%2044.8356%2064.7585%2042.9871%2065.6827L43.8231%2067.3546C45.4119%2066.5758%2047.0838%2066.1708%2048.8752%2066.1708C52.946%2066.1708%2056.6429%2068.336%2058.6887%2071.8304C59.1819%2072.926%2059.4675%2074.1669%2059.4675%2075.4702L56.726%2084.5048H62.3856C63.7979%2084.5048%2064.9558%2085.6575%2064.9558%2087.075C64.9558%2088.4925%2063.8031%2089.6452%2062.3856%2089.6452H36.6058C31.0915%2089.6452%2026.4133%2087.6825%2023.0954%2083.9596C20.1773%2080.6677%2018.5625%2076.2802%2018.5625%2071.6019C18.5625%2067.3598%2019.1388%2063.1437%2019.6321%2059.4208C20.2396%2055.0021%2020.9042%2048.1638%2019.8035%2046.8917C19.601%2046.6633%2019.196%2046.5438%2018.5625%2046.5438C17.1502%2046.5438%2015.9923%2045.3912%2015.9923%2043.9737C15.9923%2042.5562%2017.145%2041.4035%2018.5625%2041.4035C20.7277%2041.4035%2022.4619%2042.1252%2023.6717%2043.5115C26.3302%2046.5438%2025.6344%2053.5846%2024.7413%2060.1425C24.2481%2063.72%2023.7288%2067.7337%2023.7029%2071.659C23.6458%2076.6229%2027.4569%2079.8006%2028.1787%2080.2887V71.4825C28.1787%2050.8431%2043.0754%2047.0008%2052.0529%2043.2779L64.9558%2037.3587C64.9558%2037.3587%2068.2477%2028.2358%2070.0962%2026.216C76.6229%2019.17%2083.6065%2018.2458%2083.6065%2018.2458C82.5369%2021.9687%2080.7508%2025.8681%2081.4985%2024.7985C81.4985%2024.7985%2085.1383%2026.8183%2086.2338%2028.2929C87.101%2029.4456%2087.7344%2033.2308%2087.7344%2033.2308C88.1083%2033.8642%2089.209%2035.3077%2089.1467%2035.9723C89.0014%2037.4729%2087.4125%2038.4542%2086.2598%2039.2331L86.265%2039.2383Z'%20fill='%23C75E90'/%3e%3c/svg%3e",s9=ee.footer`
    background-color: ${({theme:n})=>n.colors.black};
    color: ${({theme:n})=>n.colors["day-background"]};  
    border-top-right-radius: 60px;
    border-top-left-radius: 60px;
    padding: 1.2rem;
     @media (min-width: 1024px) {
        border-top-right-radius: 120px;
        border-top-left-radius: 120px;
     }
     @media (min-width: 1440px) {
        padding: 2rem;
     }
`,f9=ee.section`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
    > div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
       
       
        margin-top: 3rem;
            img{
            width: 5.313rem;
            height: 5.313rem; 
        }
        div{
            span{
                font-size: 0.625rem;
                color: ${({theme:n})=>n.colors["black-off"]};
                font-weight: bold;
                letter-spacing: 3px;
            }
            h4{
                font-size: 2rem;
                font-weight: 700;
            }
        }
    }
     @media (min-width: 768px) {
        align-items: center;
     }
         @media (min-width: 1024px) {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 2rem;
           
             > div{
                  margin-top: 0;
             }
            hr{
                display: none;
            }
         }
            @media (min-width: 1440px) {
                > div{
                    div{
                        span{
                            font-size: 0.75rem;
                        }
                        h4{
                            font-size: 2.25rem;
                        }
                    }
                }
            }
`,d9=ee.form`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid ;
    height: 4rem;
    border-radius: 40px;
    margin: 1rem;
    padding: 1rem;
    border-color: ${({theme:n})=>n.colors["border-gray"]};
   
    > div{
        display: flex;
        flex-direction: column;
        label{
            font-size: 0.6rem;
            color: ${({theme:n})=>n.colors["black-off"]};
            letter-spacing: 1.5px;
            font-weight: bold;
        }
        input{
            border: none;
            outline: none;
            font-size: 1rem;
            background-color:  ${({theme:n})=>n.colors.black};
        }
       
    }
    div:last-child{
            background-color: ${({theme:n})=>n.colors["main-color"]};
            width: 3rem;
            height: 3rem;
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

         @media (min-width: 768px) {
            width: 70%;
         }
          @media (min-width: 1024px) {
            width: 50%;
            justify-content: space-between;
            padding-left: 2rem;
            padding-right: 1rem;
          }

`,m9=ee.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        section{
            display: flex;
            gap: 1rem;
                div{
                background-color: ${({theme:n})=>n.colors["main-color"]};
                width: 3rem;
                height: 3rem;
                border-radius: 99px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            article{
                h5{
                    font-size: 1.25rem;
                    font-weight: bold;
                }
                p{
                    font-size: 0.875rem;
                }
            }
        }

        section:first-child{
            article{
                width: 60%;
            }
        }
        section:last-child{
            a{
                display: flex;
                gap: 1rem;
            }
        }
       
       
    }
    div:nth-child(2){
        h5{
            font-size: 1.25rem;
            font-weight: 700;
        }
        p{
            font-size: 0.875rem;
        }
        
    }

    div:nth-child(3){
        h5{
            font-size: 1.25rem;
            font-weight: 700;
        }
        figure{
            display: flex;
            gap: 1rem;
            div{
            background-color: ${({theme:n})=>n.colors["main-color"]};
                width: 3rem;
                height: 3rem;
                border-radius: 99px;
                display: flex;
                align-items: center;
                justify-content: center;
                svg{
                    color: ${({theme:n})=>n.colors["background/text"]};
                }
        }
        }
      
    }
    div:last-child{
       margin-bottom: 2rem;
        p{
            font-size:0.75rem;
            font-weight: bold;
        }
   
    }
     @media (min-width: 768px) {
       
    
     }
       @media (min-width: 1024px) {
         display: grid;
         grid-template-columns: 1fr 1fr 1fr;
         padding: 1.5rem;
         div:last-child{
            grid-column: 2 / 4;
            letter-spacing: 3px; 
         }
       }
       @media (min-width: 1440px) {
        > div {
            gap: 2rem;
            section{
                article{
                    h5{
                        margin-bottom: 0.5rem;
                    }
                }
            }
        }
       }
`;function h9(){const{t:n}=ha("components");return d.jsxs(s9,{children:[d.jsxs(f9,{children:[d.jsxs("div",{children:[d.jsx("img",{src:o9,alt:""}),d.jsxs("div",{children:[d.jsx("span",{children:n("Footer.newsletter-span")}),d.jsx("h4",{children:n("Footer.newsletter-title")})]})]}),d.jsxs(d9,{children:[d.jsxs("div",{children:[d.jsx("label",{htmlFor:"email",children:n("Footer.newsletter-email")}),d.jsx("input",{type:"email",id:"e-mail",name:"e-mail"})]}),d.jsx("div",{children:d.jsx(Ir,{size:32})})]}),d.jsx("hr",{})]}),d.jsxs(m9,{children:[d.jsxs("div",{children:[d.jsxs("section",{children:[d.jsx("div",{children:d.jsx(o1,{size:32})}),d.jsxs("article",{children:[d.jsx("h5",{children:n("Footer.info-title_1")}),d.jsx("p",{children:"123 Meow Avenue. Kittyville, CA 90210 United States"})]})]}),d.jsxs("section",{children:[d.jsx("div",{children:d.jsx(k6,{size:32})}),d.jsxs("article",{children:[d.jsx("h5",{children:n("Footer.info-title_2")}),d.jsx("p",{children:"(555) 555-5555"})]})]}),d.jsx("section",{children:d.jsxs("a",{href:"mailto:info@neko-inn.com",children:[d.jsx("div",{children:d.jsx(Ir,{size:32})}),d.jsxs("article",{children:[d.jsx("h5",{children:n("Footer.info-title_3")}),d.jsx("p",{children:"info@neko-inn.com"})]})]})})]}),d.jsxs("div",{children:[d.jsx("h5",{children:"NekoInn Plans"}),d.jsx("p",{children:"Purr Ducal"}),d.jsx("p",{children:"Purr Royal"}),d.jsx("p",{children:"Purr Imperial"})]}),d.jsxs("div",{children:[d.jsx("h5",{children:n("Footer.info-socialmedia-title")}),d.jsxs("figure",{children:[d.jsx("div",{children:d.jsx(p4,{size:32,weight:"bold"})}),d.jsx("div",{children:d.jsx(S4,{size:32,weight:"bold"})}),d.jsx("div",{children:d.jsx(v4,{size:32,weight:"bold"})}),d.jsx("div",{children:d.jsx(w4,{size:32,weight:"bold"})}),d.jsx("div",{children:d.jsx(y4,{size:32,weight:"bold"})})]})]}),d.jsx("div",{children:d.jsx("p",{children:n("Footer.info-socialmedia-description")})})]})]})}const g9="/NekoInn/assets/pexels-tomas-ryant-2870510%201-D3Yl_5gF.png",p9=ee.main`
    padding: 1rem;
    overflow-x: hidden; 
    @media (min-width: 768px) {
      padding: 2rem;
  }
`,y9=ee.div`
   display: flex;
   flex-direction: column;
   text-align: center;

  > section:first-child{
    article {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        span{
            font-size: 0.625rem;
            color: ${({theme:n})=>n.colors["black-off"]};
            font-weight: bold;
            letter-spacing: 3px;
        }
        h1{
            font-size: 1.9rem;
            font-weight: bold;
        }
        p{
            font-size: 0.75rem;
        }

        button{
            background-color: ${({theme:n})=>n.colors["main-color"]};
            color:  ${({theme:n})=>n.colors["day-background"]};
            width: 100%;
            font-weight: bold;
            font-size: 0.75rem;
            height: 3rem;
            border-radius: 220px;
        }
        
    }
    aside{
        width: 100%;
        height: 7.625rem;
        margin-top: 3rem;
        color: ${({theme:n})=>n.colors["day-background"]};
        background-image: url(${g9});
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        padding: 1.6rem;
       

        span{
            letter-spacing: 0.4rem;
            font-weight: 600;
        }
        p {
            font-size: 1rem;
            font-weight: 700;
        }

        figure{
            width: 4rem;
            height: 4rem;
            background-color:  ${({theme:n})=>n.colors["main-color"]};
            border-radius: 99px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: 0;
            
            
        }
        
    }
   }

   > section:nth-child(2){
    margin-top: 5rem;
    margin-bottom: 5rem;
     figure{
        width: 100%;
       position: relative;
       > div:first-child{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

         img:last-child{
            position: relative;
            z-index: 2;
            border-bottom-left-radius: 225px;
         }
        }
     }
   }

   @media (min-width: 768px) {
    > section:first-child{
      display: flex;
      flex-direction: column;
      align-items: center;
      article{
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
          font-size: 0.85rem;
        }
        button{
          width: 50%;
        }
      }
      aside{
        width: 60%;
        figure{
          right: 19%;
        }
      
      }
    }
   > section:nth-child(2){
    figure{
      > div:first-child{
        img:last-child{
            border-bottom-left-radius: 300px;
         }
      }
     }
   }
   }

   @media (min-width: 1024px) {
     display: flex;
     flex-direction: row;
     width: 100%;
     text-align: start;
     align-items: center;
     gap: 5rem;
   

     > section:first-child{
      width: 45%;
      align-items: start;
      article{
        display: flex;
        flex-direction: column;
        align-items: start;
        button{
          width: 12.5rem;
          font-size: 0.65rem;
        }
      }
      aside{
        width: 21.063rem;
        figure{
          right: 61%;

        }
      }
     }
     > section:nth-child(2){
      width: 50%;
      margin-top: 2rem;
     figure{
      > div:first-child{
        img:last-child{
            border-bottom-left-radius: 0px;
         }
      }
     }

     }
  }

  @media (min-width: 1440px) {
    margin-top: 3rem;
    margin-bottom: 2.5rem;
    > section:first-child{
      article{
        gap: 2rem;
        span{
          font-size: 0.875rem;
        }
        h1{
          font-size: 2.875rem;
        }
        p{
          font-size: 0.875rem;
        }
        button{
          margin-top: 1rem;
             font-size: 0.657rem;
        }
      }
      aside{
        margin-top: 5rem;
        figure{
          right: 73%;
        }
      }
    }
  }

  
     @media (min-width: 1600px) {
         > section:first-child{
          aside{
        figure{
          right: 79%;
        }
      }
    }
      }

   @media (min-width: 1920px) {
     > section:first-child{
      aside{
         figure{
          right: 80%;
        }
      }
     }
   }
`,vd=ee.img`
   max-width: 100%;
   height: auto;
   position: absolute;
   z-index: 1;
   display: block;
  
 ${n=>n.$variant==="primary"&&`
    width: 200px;
    // right: 40%;
    left: 45%;
    top: 62%;
    transform: scaleX(-1);
  `}
 
 ${n=>n.$variant==="secundary"&&`
    width: 200px;
    right: 50%;
    bottom: 50%;
  `} 

@media (min-width: 768px) { 
  ${n=>n.$variant==="primary"&&`
    width: 250px;
    left: 60%;
    top: 65%;
  `}
 
 ${n=>n.$variant==="secundary"&&`
    width: 250px;
    right: 60%;
    bottom: 65%;
  `} 
}

@media (min-width: 1024px) {
  ${n=>n.$variant==="primary"&&`
    left: 50%;
    top: 60%;
    transform: scaleX(-1);
  `}
 
 ${n=>n.$variant==="secundary"&&`
   
    right: 55%;
    bottom: 55%;
  `}
}
@media (min-width: 1440px) {
  ${n=>n.$variant==="primary"&&`
    width: 300px;
    left: 55%;
    top: 60%;
    transform: scaleX(-1);
  `}
 
 ${n=>n.$variant==="secundary"&&`
    width: 300px;
    right: 60%;
    bottom: 55%;
  `}
}
 
`,v9=ee.div`
    position: absolute;
    top: 50%;  
    left: 50%; 
    transform: translate(-50%, -50%);
    z-index: 3;
    width: 200px;  
    height: 100px; 
  
  img {
    position: absolute;
    width: 4.125rem;
  }

  img:nth-child(1) {
    bottom: 90%;
    left: 0;
    transform: translateX(-130%);
  }

  img:nth-child(2) {
    top: 50%;
    left: 5%;
    transform: translateX(-130%);
  }

  img:nth-child(3) {
    top: 100%;
    left: 30%;
    transform: translateY(40%) translateX(-120%);
    
  }

  img:nth-child(4) {
    top: 70%;
    left: 50%;
    transform:  translateY(160%) translateX(-30%);
  }

  @media (min-width: 768px) { 
    img {
      width: 6.5rem;
    }
    img:nth-child(1) {
      transform: translateX(-225%) translateY(-50%);
    }
    img:nth-child(2) {
      transform: translateX(-215%);
    }
    img:nth-child(3) {
      transform: translateY(90%) translateX(-190%);
    }
    img:nth-child(4) {
      transform:  translateY(200%) translateX(-40%);
    }
  }
  @media (min-width: 1024px) {
    img:nth-child(1) {
      transform: translateX(-170%) translateY(-20%);
    }
     img:nth-child(2) {
      transform: translateX(-190%);
    }
    img:nth-child(3) {
      transform: translateY(100%) translateX(-160%);
    }
      img:nth-child(4) {
      transform:  translateY(140%);
    }
  }
  @media (min-width: 1440px) {
    img {
      width: 8.125rem;
    }
       img:nth-child(1) {
          transform: translateX(-190%) translateY(-5%);
       }
        img:nth-child(2) {
             transform: translateX(-200%) translateY(20%);
           }
        img:nth-child(3) {
      transform: translateY(110%) translateX(-160%);
    }
     img:nth-child(4) {
      transform:  translateY(140%) translateX(-20%);
    }
  }
`,b9=ee.address`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 25rem;
    color: ${({theme:n})=>n.colors["day-background"]};
    

   > section:first-child{
        height: 40%;
        background-color: ${({theme:n})=>n.colors.firstAddressBackground};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        div{
          width: 4rem;
          height: 4rem;
          border-radius: 50%; 
          flex-shrink: 0;
          background-color: ${({theme:n})=>n.colors.firstIconAddressBackground};
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 1rem;
          svg {
            width: 2rem;  
            height: 2rem;
          }
         
        }
        
        p{
            font-size: 1.2rem;
            font-weight: 600;
        }

    }
    > section:nth-child(2){
        height: 30%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.8rem;
        padding-left: 1.1rem;
        background-color: ${({theme:n})=>n.colors.othersAddressBackground};
        div{
          width: 4rem;
          height: 4rem;
          border-radius: 50%; 
          flex-shrink: 0;
          background-color: ${({theme:n})=>n.colors.iconAddressBackground};
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            width: 2.5rem;  
            height: 2.5rem;
          }
        }
        
        p{
            font-size: 1.2rem;
            font-weight: 600;
        }
    }
    >section:nth-child(3){
        height: 30%;
        background-color: ${({theme:n})=>n.colors.othersAddressBackground};
        display: flex;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;
        a{
          display: flex;
          align-items: center;
          gap: 1.8rem;
          padding-left: 1.1rem;

            div{
              width: 4rem;
              height: 4rem;
              border-radius: 50%; 
              flex-shrink: 0;
            background-color: ${({theme:n})=>n.colors.iconAddressBackground};
           
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
            width: 2.5rem;  
            height: 2.5rem;
          }
          }
          
          p{
              font-size: 1.2rem;
              font-weight: 600;
          }
        }
    }
    @media (min-width: 768px) { 
      width: 75%;
      margin: 0 auto; 
    }
     @media (min-width: 1024px) {
      flex-direction: row;
      width: 100%;
      height: 10rem;
      position: relative;

      > section:first-child{
        border-top-left-radius: 40px;
        border-top-right-radius: 0px;
        border-bottom-left-radius: 40px;
        width: 45%;
        height: 100%;
        position: absolute;
        padding-right: 5rem;

      
        
      }
         > section:nth-child(2){
           width: 30%;
           height: 100%;
           position: relative;
           left: 37%;
           border-top-left-radius: 90px;
           border-bottom-left-radius: 90px;
         }

      >section:nth-child(3){
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 40px;
        border-top-right-radius: 40px;
        
         width: 30%;
        height: 100%;
        position: relative;
        left: 37%;
       
         
      }
     }
     @media (min-width: 1440px) {
         > section:first-child{
            padding-right: 10rem;
         }
     }
`,x9=ee.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({theme:n})=>n.colors.componentBackground};
  margin-top: 2rem;
  border-radius: 40px;
  article{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 2.5rem;
    span{
      font-size: 0.625rem;
      color: ${({theme:n})=>n.colors["black-off"]};
      margin-bottom: 0.5rem;
      font-weight: bold;
      letter-spacing: 3px;
    }
    h2{
      font-size: 2rem;
      font-weight: 700;
    }
    p{
      font-size: 0.7rem;
      text-align: start;
      padding: 2rem;
    }
    Button{
      color: ${({theme:n})=>n.colors["day-background"]};
      background-color: ${({theme:n})=>n.colors["main-color"]};
      width: 50%;
    }
  }
  figure{
    img:first-child{
      position: absolute;
      width: 12.5rem;
      right: 17%; 
    }
    img:last-child{
      position: relative;
    }
  }
   @media (min-width: 768px) { 
    margin-top: 3.5rem;
      article{
        p{
           font-size: 0.85rem;
        }
      }
      figure{
         img:first-child{
          width: 14.063rem;
          right: 28%;
          top: 20%;
          bottom: 1%;
        
         }
      }
   }
   @media (min-width: 1024px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    article{
      width: 50%;
      text-align: start;
      align-items: flex-start;
      justify-content: start;
      padding: 2rem;
      gap: 1rem;
      p{
        padding: 0rem;
        font-size: 0.875rem;
      }
      Button{
        width: 45%;
        height: 2.813rem;
        margin-left: 0;
        margin-top: 2rem;
      }
    }
    figure{
      width: 50%;
      position: relative;
      img:first-child{
         width: 15.625rem;
         right: 10%;
         
      }
      img:last-child{
        width: 100%;
        height: 100%;
      }
    }
   }
   @media (min-width: 1440px) {
    article{
      span{
        font-size: 0.75rem;
      }
      h2{
        font-size: 2.25rem;
      }
      p{
        font-size: 0.875rem;
      }
      Button{
        width: 25%;
        font-size: 0.75rem;
        margin-top: 3rem;
      }
    }
    figure{
      img:first-child{
        right: 20%;
         top: 15%;
      }
    }
   }
`,S9=ee.section`
figure{
  margin-top: 4rem;
}
  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    text-align: center;
    > span{
      font-size: 0.7rem;
      color: ${({theme:n})=>n.colors["black-off"]};
      letter-spacing: 3px;
      font-weight: bold;
      margin-top: 2rem;
    }
    h2{
      font-size: 2rem;
      font-weight: 700;
    }
  }
  @media (min-width: 768px) { 
    display: flex;
    flex-direction: column;
    align-items: center;
  }
   @media (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    figure{
      width: 50%;
      padding: 1rem;
    }
    article{
      width: 50%;
      padding: 2rem;
      align-items: start;
    }
   }
    @media (min-width: 1440px) {
      justify-content: center;
      gap: 2.5rem;
      padding: 1rem;
      figure{
        width: 40%;
      }
      article{
        width: 60%;
        gap: 2rem;
          > span{
             font-size: 0.75rem;
         }
          h2{
            font-size: 2.25rem;
          }
      }
    }
`,w9=ee.section`
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  article{
    width: 100%;
    padding: 5rem 5rem 3rem 2rem;
    background-color: ${({theme:n})=>n.colors["main-color"]};
    border-radius: 40px;
   
    span{
      font-size: 0.7rem;
      color: ${({theme:n})=>n.colors.black};
      letter-spacing: 3px;
      font-weight: bold;
    }
    h2{
      font-size: 2rem;
      font-weight: 700;
      color: ${({theme:n})=>n.colors["day-background"]};
      margin-top: 1rem;
    }
    p{
      margin-top: 1rem;
      color: ${({theme:n})=>n.colors["day-background"]};
      font-size: 0.875rem;
    }
    button{
      display: flex; 
      align-items: center;
      padding-left: 1rem;
      gap: 3rem;
      width:  14rem;
      height: 3rem;
      background-color: ${({theme:n})=>n.colors["secundary/hover"]};
      color:${({theme:n})=>n.colors["day-background"]};
      font-size: 0.75rem;
      border-radius: 220px;
      margin-top: 2rem;
      font-weight: bold;
    }
  }
 > div{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: ${({theme:n})=>n.colors.componentBackground};
    border-radius: 40px;

    div{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.5rem;
      h4{
        font-size: 1.5rem;
        font-weight: bold;
      }
      p{
       font-size: 0.875rem;
       width: 80%;
      }
    }
    
  }
  @media (min-width: 768px) { 
    width: 80%;
    margin: 3rem auto; 
    > div{
      div{
        p{
          width: 100%;
}
      }
    
    }
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    margin: 0;
    width: 100%;
    align-items: center;
     gap: 1rem;
    article{
      width: 18rem;
      height: 35rem;
      span{
            font-size: 0.6rem;
      }
      h2{
        font-size: 1.5rem;
      }
      p{
         font-size: 0.85rem;
      }
     
    }
     > div{
       gap: 1rem;
      flex-direction: row;
      width: 100%;
    
      div {
        width: 33.3%;
          h4{
        font-size: 1rem;
      }
      p{
           font-size: 0.8rem;
      }
      }
     }
  }
   @media (min-width: 1440px) {
    padding: 2rem;
     article{
      width: 25rem;
      height: 31rem;
          span{
      font-size: 0.7rem;
    }
       h2{
      font-size: 2rem;
    }
    p{
      font-size: 0.8rem;
    }
    }
     > div{
       div{
        h4{
          font-size: 1.5rem;
        }
          p{
           font-size: 0.875rem;
      }
       }
     }
   }
`,A9=ee(C6)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`,M9=ee(z6)`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
     @media (min-width: 1440px) {
        font-size: 1.25rem;
     }
`,E9=ee(D6)`
    background-color: ${({theme:n})=>n.colors["main-color"]};
    color: ${({theme:n})=>n.colors["day-background"]};
    border-radius: 999px;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

`,j9=ee(T6)`
    font-size: 0.875rem;
    text-align: start;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    padding-left: 3rem;
`,O9=[{value:"a",titleKey:"accordion.cozyCorners.title",textKey:"accordion.cozyCorners.text"},{value:"b",titleKey:"accordion.palatialPurrfections.title",textKey:"accordion.palatialPurrfections.text"},{value:"c",titleKey:"accordion.tailoredTranquility.title",textKey:"accordion.tailoredTranquility.text"}],C9=()=>{const{t:n}=ha("components");return d.jsx(A9,{collapsible:!0,defaultValue:["a"],variant:"outline",children:O9.map((i,u)=>d.jsxs(H6,{value:i.value,children:[d.jsxs(M9,{children:[d.jsx(E9,{}),d.jsx(a1,{flex:"1",children:n(i.titleKey)})]}),d.jsx(j9,{children:d.jsx(Z6,{children:n(i.textKey)})})]},u))})},z9="/NekoInn/assets/carousel-mXzKXexq.png",D9="/NekoInn/assets/carousel2-87t4ZVTD.png",T9="/NekoInn/assets/carousel3-BMqHr0fu.png",H9="/NekoInn/assets/carousel4-CrSRADvA.png",Z9="/NekoInn/assets/carousel5-BaKUSvqj.png",N9="/NekoInn/assets/carousel6-ziXn828F.png";var Vr={},bd;function R9(){if(bd)return Vr;bd=1,Vr.match=g,Vr.parse=y;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,i=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,u=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,s=/(dpi|dpcm|dppx)?$/;function g(b,C){return y(b).some(function(z){var N=z.inverse,U=z.type==="all"||C.type===z.type;if(U&&N||!(U||N))return!1;var q=z.expressions.every(function(K){var J=K.feature,k=K.modifier,_=K.value,$=C[J];if(!$)return!1;switch(J){case"orientation":case"scan":return $.toLowerCase()===_.toLowerCase();case"width":case"height":case"device-width":case"device-height":_=O(_),$=O($);break;case"resolution":_=w(_),$=w($);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":_=S(_),$=S($);break;case"grid":case"color":case"color-index":case"monochrome":_=parseInt(_,10)||1,$=parseInt($,10)||0;break}switch(k){case"min":return $>=_;case"max":return $<=_;default:return $===_}});return q&&!N||!q&&N})}function y(b){return b.split(",").map(function(C){C=C.trim();var z=C.match(n),N=z[1],U=z[2],q=z[3]||"",K={};return K.inverse=!!N&&N.toLowerCase()==="not",K.type=U?U.toLowerCase():"all",q=q.match(/\([^\)]+\)/g)||[],K.expressions=q.map(function(J){var k=J.match(i),_=k[1].toLowerCase().match(u);return{modifier:_[1],feature:_[2],value:k[2]}}),K})}function S(b){var C=Number(b),z;return C||(z=b.match(/^(\d+)\s*\/\s*(\d+)$/),C=z[1]/z[2]),C}function w(b){var C=parseFloat(b),z=String(b).match(s)[1];switch(z){case"dpcm":return C/2.54;case"dppx":return C*96;default:return C}}function O(b){var C=parseFloat(b),z=String(b).match(o)[1];switch(z){case"em":return C*16;case"rem":return C*16;case"cm":return C*96/2.54;case"mm":return C*96/2.54/10;case"in":return C*96;case"pt":return C*72;case"pc":return C*72/12;default:return C}}return Vr}var Rc,xd;function _9(){if(xd)return Rc;xd=1;var n=R9().match,i=typeof window<"u"?window.matchMedia:null;function u(s,g,y){var S=this,w;i&&!y&&(w=i.call(window,s)),w?(this.matches=w.matches,this.media=w.media,w.addListener(C)):(this.matches=n(s,g),this.media=s),this.addListener=O,this.removeListener=b,this.dispose=z;function O(N){w&&w.addListener(N)}function b(N){w&&w.removeListener(N)}function C(N){S.matches=N.matches,S.media=N.media}function z(){w&&w.removeListener(C)}}function o(s,g,y){return new u(s,g,y)}return Rc=o,Rc}var L9=_9();const U9=qd(L9);var q9=/[A-Z]/g,V9=/^ms-/,_c={};function B9(n){return"-"+n.toLowerCase()}function k4(n){if(_c.hasOwnProperty(n))return _c[n];var i=n.replace(q9,B9);return _c[n]=V9.test(i)?"-"+i:i}function k9(n,i){if(n===i)return!0;if(!n||!i)return!1;const u=Object.keys(n),o=Object.keys(i),s=u.length;if(o.length!==s)return!1;for(let g=0;g<s;g++){const y=u[g];if(n[y]!==i[y]||!Object.prototype.hasOwnProperty.call(i,y))return!1}return!0}var Lc={exports:{}},Uc,Sd;function Y9(){if(Sd)return Uc;Sd=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Uc=n,Uc}var qc,wd;function X9(){if(wd)return qc;wd=1;var n=Y9();function i(){}function u(){}return u.resetWarningCache=i,qc=function(){function o(y,S,w,O,b,C){if(C!==n){var z=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw z.name="Invariant Violation",z}}o.isRequired=o;function s(){return o}var g={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:s,element:o,elementType:o,instanceOf:s,node:o,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:u,resetWarningCache:i};return g.PropTypes=g,g},qc}var Ad;function $9(){return Ad||(Ad=1,Lc.exports=X9()()),Lc.exports}var Q9=$9();const fe=qd(Q9),tt=fe.oneOfType([fe.string,fe.number]),Y4={all:fe.bool,grid:fe.bool,aural:fe.bool,braille:fe.bool,handheld:fe.bool,print:fe.bool,projection:fe.bool,screen:fe.bool,tty:fe.bool,tv:fe.bool,embossed:fe.bool},G9={orientation:fe.oneOf(["portrait","landscape"]),scan:fe.oneOf(["progressive","interlace"]),aspectRatio:fe.string,deviceAspectRatio:fe.string,height:tt,deviceHeight:tt,width:tt,deviceWidth:tt,color:fe.bool,colorIndex:fe.bool,monochrome:fe.bool,resolution:tt,type:Object.keys(Y4)},{type:yv,...K9}=G9,P9={minAspectRatio:fe.string,maxAspectRatio:fe.string,minDeviceAspectRatio:fe.string,maxDeviceAspectRatio:fe.string,minHeight:tt,maxHeight:tt,minDeviceHeight:tt,maxDeviceHeight:tt,minWidth:tt,maxWidth:tt,minDeviceWidth:tt,maxDeviceWidth:tt,minColor:fe.number,maxColor:fe.number,minColorIndex:fe.number,maxColorIndex:fe.number,minMonochrome:fe.number,maxMonochrome:fe.number,minResolution:tt,maxResolution:tt,...K9},F9={...Y4,...P9};var J9={all:F9};const W9=n=>`not ${n}`,I9=(n,i)=>{const u=k4(n);return typeof i=="number"&&(i=`${i}px`),i===!0?u:i===!1?W9(u):`(${u}: ${i})`},ey=n=>n.join(" and "),ty=n=>{const i=[];return Object.keys(J9.all).forEach(u=>{const o=n[u];o!=null&&i.push(I9(u,o))}),ey(i)},ay=R.createContext(void 0),ny=n=>n.query||ty(n),Md=n=>n?Object.keys(n).reduce((u,o)=>(u[k4(o)]=n[o],u),{}):void 0,X4=()=>{const n=R.useRef(!1);return R.useEffect(()=>{n.current=!0},[]),n.current},ly=n=>{const i=R.useContext(ay),u=()=>Md(n)||Md(i),[o,s]=R.useState(u);return R.useEffect(()=>{const g=u();k9(o,g)||s(g)},[n,i]),o},iy=n=>{const i=()=>ny(n),[u,o]=R.useState(i);return R.useEffect(()=>{const s=i();u!==s&&o(s)},[n]),u},ry=(n,i)=>{const u=()=>U9(n,i||{},!!i),[o,s]=R.useState(u),g=X4();return R.useEffect(()=>{if(g){const y=u();return s(y),()=>{y&&y.dispose()}}},[n,i]),o},uy=n=>{const[i,u]=R.useState(n.matches);return R.useEffect(()=>{const o=s=>{u(s.matches)};return n.addListener(o),u(n.matches),()=>{n.removeListener(o)}},[n]),i},cy=(n,i,u)=>{const o=ly(i),s=iy(n);if(!s)throw new Error("Invalid or missing MediaQuery!");const g=ry(s,o),y=uy(g);return X4(),R.useEffect(()=>{},[y]),R.useEffect(()=>()=>{g&&g.dispose()},[]),y},oy=ee.section`
    width: 100%;
`,sy=ee.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 5rem;

   > button {
        background-color: ${({theme:n})=>n.colors["main-color"]};
        color: ${({theme:n})=>n.colors["day-background"]};
        width: 3rem;
        height: 3rem;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button:first-child{
        position: absolute;
        top: 40%;
        left: -4%;

        
       
    }

    div:nth-child(2){
        overflow: hidden;
        img{
            width: 100%;
            height: 25rem;
               transition: transform 0.3s ease;
        }
     
    }

    div:nth-child(3){
        position: absolute;
        background-color: ${({theme:n})=>n.colors["main-color"]};
        width: 7rem;
        height: 7rem;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 4.438rem;
            height: 4.438rem;
        }
        top: 80%;
        right: 15%;
    }

    button:nth-child(4){
        position: absolute;
        top: 40%;
        right: -4%;
    }
    @media (min-width: 768px) {
    button:first-child{
        width: 4rem;
        height: 4rem;
        svg{
            width: 2.5rem;
            height: 2.5rem;
        }
        left: 4%;
    }
        div:nth-child(2){
            img{
                height: 40rem; 
            }
        }
        div:nth-child(3){
            width: 8rem;
            height: 8rem;
                img{
                width: 5rem;
                height: 5rem;
                }
                top: 90%;
                right: 15%;
        }
    button:nth-child(4){
        width: 4rem;
        height: 4rem;
        svg{
            width: 2.5rem;
            height: 2.5rem;
        }
        right: 5%;
    }
     > div:last-child { 
    position: absolute;
    bottom: -50px; 
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    z-index: 20; 
    gap: 8px; 
  }
    }
    

   
`,fy=ee.div`
 @media (min-width: 1024px) {
    display: flex;
    margin-top: 3rem;
    margin-bottom: 5rem;
    gap: 1rem;
    > div{
    position: relative;
    width: 100%;
    figure{
        position: relative;
        display: inline-block;
        img:first-child{
          display: block;
          width: 100%;
          height: auto;
        }
        div:last-child{
          position: absolute;
          top: 75%;
          right: 10%;
          width: 4rem; 
          height: 4rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          background-color: ${({theme:n})=>n.colors["main-color"]};
          img{
            width: 80%;
          }
        }
    }

    }
}
@media (min-width: 1440px) {
    padding: 2rem;
    > div{
        figure{
              div:last-child{
                 top: 85%;
              }
        }
    }
}
`,Ed="data:image/svg+xml,%3csvg%20width='52'%20height='52'%20viewBox='0%200%2052%2052'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.6667%2026.0003L30.3333%2032.5003L21.6667%2037.9169L27.0833%2045.5003M41.1667%2021.1861V35.1003C41.1667%2038.7405%2041.1667%2040.5607%2040.4582%2041.951C39.835%2043.1741%2038.8408%2044.1686%2037.6177%2044.7918C36.2271%2045.5003%2034.4071%2045.5003%2030.7667%2045.5003H21.2333C17.593%2045.5003%2015.7728%2045.5003%2014.3824%2044.7918C13.1593%2044.1686%2012.165%2043.1741%2011.5418%2041.951C10.8333%2040.5607%2010.8333%2038.7405%2010.8333%2035.1003V21.1847M45.5%2026.0003L33.7281%2012.9221C31.0507%209.94784%2029.7122%208.46066%2028.1355%207.91165C26.751%207.42941%2025.2438%207.42952%2023.8591%207.91195C22.2827%208.46122%2020.9443%209.94857%2018.2675%2012.9233L6.5%2026.0003'%20stroke='white'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Xt=[z9,D9,T9,H9,Z9,N9];function dy(){const[n,i]=R.useState(0),[u,o]=R.useState(!0),s=cy({maxWidth:1023});R.useEffect(()=>{if(!u||!s)return;const O=setInterval(()=>{i(b=>(b+1)%Xt.length)},3e3);return()=>clearInterval(O)},[u,s,Xt.length]);const g=R.useCallback(()=>{o(!1);const O=setTimeout(()=>o(!0),1e4);return()=>clearTimeout(O)},[]),y=R.useCallback(O=>{i(O),g()},[g]),S=R.useCallback(()=>{y((n+1)%Xt.length)},[n,y,Xt.length]),w=R.useCallback(()=>{y((n-1+Xt.length)%Xt.length)},[n,y,Xt.length]);return R.useEffect(()=>{i(0)},[s]),d.jsx(oy,{children:s?d.jsxs(sy,{children:[d.jsx("button",{onClick:w,children:d.jsx(Y6,{size:32})}),d.jsx("div",{children:d.jsx("img",{src:Xt[n],draggable:"false"})}),d.jsx("div",{children:d.jsx("img",{src:Ed,alt:""})}),d.jsx("button",{onClick:S,children:d.jsx(X6,{size:32})}),d.jsx("div",{children:Xt.map((O,b)=>d.jsx("button",{onClick:()=>y(b),className:`dot ${b===n?"active":""}`,"aria-label":`Ir para slide ${b+1}`},b))})]}):d.jsx(fy,{children:Xt.map((O,b)=>d.jsx("div",{className:`desktop-slide ${b===n?"active":""}`,children:d.jsxs("figure",{children:[d.jsx("img",{src:O,alt:`Slide ${b+1}`,className:"carousel-image",draggable:"false"}),d.jsx("div",{children:d.jsx("img",{src:Ed,alt:""})})]})},b))})})}const{slice:my,forEach:hy}=[];function gy(n){return hy.call(my.call(arguments,1),i=>{if(i)for(const u in i)n[u]===void 0&&(n[u]=i[u])}),n}function py(n){return typeof n!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(u=>u.test(n))}const jd=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,yy=function(n,i){const o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},s=encodeURIComponent(i);let g=`${n}=${s}`;if(o.maxAge>0){const y=o.maxAge-0;if(Number.isNaN(y))throw new Error("maxAge should be a Number");g+=`; Max-Age=${Math.floor(y)}`}if(o.domain){if(!jd.test(o.domain))throw new TypeError("option domain is invalid");g+=`; Domain=${o.domain}`}if(o.path){if(!jd.test(o.path))throw new TypeError("option path is invalid");g+=`; Path=${o.path}`}if(o.expires){if(typeof o.expires.toUTCString!="function")throw new TypeError("option expires is invalid");g+=`; Expires=${o.expires.toUTCString()}`}if(o.httpOnly&&(g+="; HttpOnly"),o.secure&&(g+="; Secure"),o.sameSite)switch(typeof o.sameSite=="string"?o.sameSite.toLowerCase():o.sameSite){case!0:g+="; SameSite=Strict";break;case"lax":g+="; SameSite=Lax";break;case"strict":g+="; SameSite=Strict";break;case"none":g+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o.partitioned&&(g+="; Partitioned"),g},Od={create(n,i,u,o){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};u&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+u*60*1e3)),o&&(s.domain=o),document.cookie=yy(n,encodeURIComponent(i),s)},read(n){const i=`${n}=`,u=document.cookie.split(";");for(let o=0;o<u.length;o++){let s=u[o];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(i)===0)return s.substring(i.length,s.length)}return null},remove(n){this.create(n,"",-1)}};var vy={name:"cookie",lookup(n){let{lookupCookie:i}=n;if(i&&typeof document<"u")return Od.read(i)||void 0},cacheUserLanguage(n,i){let{lookupCookie:u,cookieMinutes:o,cookieDomain:s,cookieOptions:g}=i;u&&typeof document<"u"&&Od.create(u,n,o,s,g)}},by={name:"querystring",lookup(n){var o;let{lookupQuerystring:i}=n,u;if(typeof window<"u"){let{search:s}=window.location;!window.location.search&&((o=window.location.hash)==null?void 0:o.indexOf("?"))>-1&&(s=window.location.hash.substring(window.location.hash.indexOf("?")));const y=s.substring(1).split("&");for(let S=0;S<y.length;S++){const w=y[S].indexOf("=");w>0&&y[S].substring(0,w)===i&&(u=y[S].substring(w+1))}}return u}};let rl=null;const Cd=()=>{if(rl!==null)return rl;try{if(rl=typeof window<"u"&&window.localStorage!==null,!rl)return!1;const n="i18next.translate.boo";window.localStorage.setItem(n,"foo"),window.localStorage.removeItem(n)}catch{rl=!1}return rl};var xy={name:"localStorage",lookup(n){let{lookupLocalStorage:i}=n;if(i&&Cd())return window.localStorage.getItem(i)||void 0},cacheUserLanguage(n,i){let{lookupLocalStorage:u}=i;u&&Cd()&&window.localStorage.setItem(u,n)}};let ul=null;const zd=()=>{if(ul!==null)return ul;try{if(ul=typeof window<"u"&&window.sessionStorage!==null,!ul)return!1;const n="i18next.translate.boo";window.sessionStorage.setItem(n,"foo"),window.sessionStorage.removeItem(n)}catch{ul=!1}return ul};var Sy={name:"sessionStorage",lookup(n){let{lookupSessionStorage:i}=n;if(i&&zd())return window.sessionStorage.getItem(i)||void 0},cacheUserLanguage(n,i){let{lookupSessionStorage:u}=i;u&&zd()&&window.sessionStorage.setItem(u,n)}},wy={name:"navigator",lookup(n){const i=[];if(typeof navigator<"u"){const{languages:u,userLanguage:o,language:s}=navigator;if(u)for(let g=0;g<u.length;g++)i.push(u[g]);o&&i.push(o),s&&i.push(s)}return i.length>0?i:void 0}},Ay={name:"htmlTag",lookup(n){let{htmlTag:i}=n,u;const o=i||(typeof document<"u"?document.documentElement:null);return o&&typeof o.getAttribute=="function"&&(u=o.getAttribute("lang")),u}},My={name:"path",lookup(n){var s;let{lookupFromPathIndex:i}=n;if(typeof window>"u")return;const u=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(u)?(s=u[typeof i=="number"?i:0])==null?void 0:s.replace("/",""):void 0}},Ey={name:"subdomain",lookup(n){var s,g;let{lookupFromSubdomainIndex:i}=n;const u=typeof i=="number"?i+1:1,o=typeof window<"u"&&((g=(s=window.location)==null?void 0:s.hostname)==null?void 0:g.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(o)return o[u]}};let $4=!1;try{document.cookie,$4=!0}catch{}const Q4=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];$4||Q4.splice(1,1);const jy=()=>({order:Q4,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:n=>n});class G4{constructor(i){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(i,u)}init(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=i,this.options=gy(u,this.options||{},jy()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=s=>s.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=o,this.addDetector(vy),this.addDetector(by),this.addDetector(xy),this.addDetector(Sy),this.addDetector(wy),this.addDetector(Ay),this.addDetector(My),this.addDetector(Ey)}addDetector(i){return this.detectors[i.name]=i,this}detect(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,u=[];return i.forEach(o=>{if(this.detectors[o]){let s=this.detectors[o].lookup(this.options);s&&typeof s=="string"&&(s=[s]),s&&(u=u.concat(s))}}),u=u.filter(o=>o!=null&&!py(o)).map(o=>this.options.convertDetectedLanguage(o)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?u:u.length>0?u[0]:null}cacheUserLanguage(i){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;u&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(i)>-1||u.forEach(o=>{this.detectors[o]&&this.detectors[o].cacheUserLanguage(i,this.options)}))}}G4.type="languageDetector";function e1(n){"@babel/helpers - typeof";return e1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},e1(n)}function K4(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":e1(XMLHttpRequest))==="object"}function Oy(n){return!!n&&typeof n.then=="function"}function Cy(n){return Oy(n)?n:Promise.resolve(n)}const zy="modulepreload",Dy=function(n){return"/NekoInn/"+n},Dd={},Ty=function(i,u,o){let s=Promise.resolve();if(u&&u.length>0){let y=function(O){return Promise.all(O.map(b=>Promise.resolve(b).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};document.getElementsByTagName("link");const S=document.querySelector("meta[property=csp-nonce]"),w=(S==null?void 0:S.nonce)||(S==null?void 0:S.getAttribute("nonce"));s=y(u.map(O=>{if(O=Dy(O),O in Dd)return;Dd[O]=!0;const b=O.endsWith(".css"),C=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${O}"]${C}`))return;const z=document.createElement("link");if(z.rel=b?"stylesheet":zy,b||(z.as="script"),z.crossOrigin="",z.href=O,w&&z.setAttribute("nonce",w),document.head.appendChild(z),b)return new Promise((N,U)=>{z.addEventListener("load",N),z.addEventListener("error",()=>U(new Error(`Unable to preload CSS for ${O}`)))})}))}function g(y){const S=new Event("vite:preloadError",{cancelable:!0});if(S.payload=y,window.dispatchEvent(S),!S.defaultPrevented)throw y}return s.then(y=>{for(const S of y||[])S.status==="rejected"&&g(S.reason);return i().catch(g)})};function Td(n,i){var u=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);i&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),u.push.apply(u,o)}return u}function Hd(n){for(var i=1;i<arguments.length;i++){var u=arguments[i]!=null?arguments[i]:{};i%2?Td(Object(u),!0).forEach(function(o){Hy(n,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(u)):Td(Object(u)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(u,o))})}return n}function Hy(n,i,u){return(i=Zy(i))in n?Object.defineProperty(n,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):n[i]=u,n}function Zy(n){var i=Ny(n,"string");return pn(i)=="symbol"?i:i+""}function Ny(n,i){if(pn(n)!="object"||!n)return n;var u=n[Symbol.toPrimitive];if(u!==void 0){var o=u.call(n,i);if(pn(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function pn(n){"@babel/helpers - typeof";return pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},pn(n)}var Ya=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?Ya=global.fetch:typeof window<"u"&&window.fetch&&(Ya=window.fetch);var Si;K4()&&(typeof global<"u"&&global.XMLHttpRequest?Si=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(Si=window.XMLHttpRequest));var t0;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?t0=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(t0=window.ActiveXObject));typeof Ya!="function"&&(Ya=void 0);if(!Ya&&!Si&&!t0)try{Ty(()=>import("./browser-ponyfill-CzY5Bvx0.js").then(n=>n.b),__vite__mapDeps([0,1])).then(function(n){Ya=n.default}).catch(function(){})}catch{}var t1=function(i,u){if(u&&pn(u)==="object"){var o="";for(var s in u)o+="&"+encodeURIComponent(s)+"="+encodeURIComponent(u[s]);if(!o)return i;i=i+(i.indexOf("?")!==-1?"&":"?")+o.slice(1)}return i},Zd=function(i,u,o,s){var g=function(w){if(!w.ok)return o(w.statusText||"Error",{status:w.status});w.text().then(function(O){o(null,{status:w.status,data:O})}).catch(o)};if(s){var y=s(i,u);if(y instanceof Promise){y.then(g).catch(o);return}}typeof fetch=="function"?fetch(i,u).then(g).catch(o):Ya(i,u).then(g).catch(o)},Nd=!1,Ry=function(i,u,o,s){i.queryStringParams&&(u=t1(u,i.queryStringParams));var g=Hd({},typeof i.customHeaders=="function"?i.customHeaders():i.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(g["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),o&&(g["Content-Type"]="application/json");var y=typeof i.requestOptions=="function"?i.requestOptions(o):i.requestOptions,S=Hd({method:o?"POST":"GET",body:o?i.stringify(o):void 0,headers:g},Nd?{}:y),w=typeof i.alternateFetch=="function"&&i.alternateFetch.length>=1?i.alternateFetch:void 0;try{Zd(u,S,s,w)}catch(O){if(!y||Object.keys(y).length===0||!O.message||O.message.indexOf("not implemented")<0)return s(O);try{Object.keys(y).forEach(function(b){delete S[b]}),Zd(u,S,s,w),Nd=!0}catch(b){s(b)}}},_y=function(i,u,o,s){o&&pn(o)==="object"&&(o=t1("",o).slice(1)),i.queryStringParams&&(u=t1(u,i.queryStringParams));try{var g=Si?new Si:new t0("MSXML2.XMLHTTP.3.0");g.open(o?"POST":"GET",u,1),i.crossDomain||g.setRequestHeader("X-Requested-With","XMLHttpRequest"),g.withCredentials=!!i.withCredentials,o&&g.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),g.overrideMimeType&&g.overrideMimeType("application/json");var y=i.customHeaders;if(y=typeof y=="function"?y():y,y)for(var S in y)g.setRequestHeader(S,y[S]);g.onreadystatechange=function(){g.readyState>3&&s(g.status>=400?g.statusText:null,{status:g.status,data:g.responseText})},g.send(o)}catch(w){console&&console.log(w)}},Ly=function(i,u,o,s){if(typeof o=="function"&&(s=o,o=void 0),s=s||function(){},Ya&&u.indexOf("file:")!==0)return Ry(i,u,o,s);if(K4()||typeof ActiveXObject=="function")return _y(i,u,o,s);s(new Error("No fetch and no xhr implementation found!"))};function hl(n){"@babel/helpers - typeof";return hl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},hl(n)}function Rd(n,i){var u=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);i&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),u.push.apply(u,o)}return u}function Vc(n){for(var i=1;i<arguments.length;i++){var u=arguments[i]!=null?arguments[i]:{};i%2?Rd(Object(u),!0).forEach(function(o){P4(n,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(u)):Rd(Object(u)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(u,o))})}return n}function Uy(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function qy(n,i){for(var u=0;u<i.length;u++){var o=i[u];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,F4(o.key),o)}}function Vy(n,i,u){return i&&qy(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function P4(n,i,u){return(i=F4(i))in n?Object.defineProperty(n,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):n[i]=u,n}function F4(n){var i=By(n,"string");return hl(i)=="symbol"?i:i+""}function By(n,i){if(hl(n)!="object"||!n)return n;var u=n[Symbol.toPrimitive];if(u!==void 0){var o=u.call(n,i);if(hl(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var ky=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(u){return JSON.parse(u)},stringify:JSON.stringify,parsePayload:function(u,o,s){return P4({},o,s||"")},parseLoadPayload:function(u,o){},request:Ly,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},J4=function(){function n(i){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Uy(this,n),this.services=i,this.options=u,this.allOptions=o,this.type="backend",this.init(i,u,o)}return Vy(n,[{key:"init",value:function(u){var o=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=u,this.options=Vc(Vc(Vc({},ky()),this.options||{}),s),this.allOptions=g,this.services&&this.options.reloadInterval){var y=setInterval(function(){return o.reload()},this.options.reloadInterval);hl(y)==="object"&&typeof y.unref=="function"&&y.unref()}}},{key:"readMulti",value:function(u,o,s){this._readAny(u,u,o,o,s)}},{key:"read",value:function(u,o,s){this._readAny([u],u,[o],o,s)}},{key:"_readAny",value:function(u,o,s,g,y){var S=this,w=this.options.loadPath;typeof this.options.loadPath=="function"&&(w=this.options.loadPath(u,s)),w=Cy(w),w.then(function(O){if(!O)return y(null,{});var b=S.services.interpolator.interpolate(O,{lng:u.join("+"),ns:s.join("+")});S.loadUrl(b,y,o,g)})}},{key:"loadUrl",value:function(u,o,s,g){var y=this,S=typeof s=="string"?[s]:s,w=typeof g=="string"?[g]:g,O=this.options.parseLoadPayload(S,w);this.options.request(this.options,u,O,function(b,C){if(C&&(C.status>=500&&C.status<600||!C.status))return o("failed loading "+u+"; status code: "+C.status,!0);if(C&&C.status>=400&&C.status<500)return o("failed loading "+u+"; status code: "+C.status,!1);if(!C&&b&&b.message){var z=b.message.toLowerCase(),N=["failed","fetch","network","load"].find(function(K){return z.indexOf(K)>-1});if(N)return o("failed loading "+u+": "+b.message,!0)}if(b)return o(b,!1);var U,q;try{typeof C.data=="string"?U=y.options.parse(C.data,s,g):U=C.data}catch{q="failed parsing "+u+" to json"}if(q)return o(q,!1);o(null,U)})}},{key:"create",value:function(u,o,s,g,y){var S=this;if(this.options.addPath){typeof u=="string"&&(u=[u]);var w=this.options.parsePayload(o,s,g),O=0,b=[],C=[];u.forEach(function(z){var N=S.options.addPath;typeof S.options.addPath=="function"&&(N=S.options.addPath(z,o));var U=S.services.interpolator.interpolate(N,{lng:z,ns:o});S.options.request(S.options,U,w,function(q,K){O+=1,b.push(q),C.push(K),O===u.length&&typeof y=="function"&&y(b,C)})})}}},{key:"reload",value:function(){var u=this,o=this.services,s=o.backendConnector,g=o.languageUtils,y=o.logger,S=s.language;if(!(S&&S.toLowerCase()==="cimode")){var w=[],O=function(C){var z=g.toResolveHierarchy(C);z.forEach(function(N){w.indexOf(N)<0&&w.push(N)})};O(S),this.allOptions.preload&&this.allOptions.preload.forEach(function(b){return O(b)}),w.forEach(function(b){u.allOptions.ns.forEach(function(C){s.read(b,C,"read",null,null,function(z,N){z&&y.warn("loading namespace ".concat(C," for language ").concat(b," failed"),z),!z&&N&&y.log("loaded namespace ".concat(C," for language ").concat(b),N),s.loaded("".concat(b,"|").concat(C),z,N)})})})}}}])}();J4.type="backend";Br.use(J4).use(G4).use(B6).init({fallbackLng:{pt:["pt-BR","en"],default:["en"]},supportedLngs:["en","pt","pt-BR"],nonExplicitSupportedLngs:!0,load:"currentOnly",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:"/NekoInn/locales/{{lng}}/{{ns}}.json"},ns:["home","components"],defaultNS:"home",detection:{order:["navigator","cookie","localStorage","htmlTag","path","subdomain"],caches:["cookie","localStorage"],lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",convertDetectedLanguage:n=>n.startsWith("pt")?"pt-BR":["en","pt-BR"].includes(n)?n:"en"}});function Yy(){const{t:n}=ha("home");return d.jsxs(d.Fragment,{children:[d.jsxs(p9,{children:[d.jsx(jg,{}),d.jsxs(y9,{children:[d.jsxs("section",{children:[d.jsxs("article",{children:[d.jsx("span",{children:n("MainHome.hero.article-span")}),d.jsx("h1",{children:n("MainHome.hero.article-title")}),d.jsx("p",{children:n("MainHome.hero.article-description")}),d.jsx("button",{children:n("MainHome.hero.bookButton")})]}),d.jsxs("aside",{children:[d.jsx("span",{children:n("MainHome.hero.aside-span")}),d.jsx("p",{children:n("MainHome.hero.aside-title")}),d.jsx("figure",{children:d.jsx(x4,{size:32})})]})]}),d.jsx("section",{children:d.jsxs("figure",{children:[d.jsxs("div",{children:[d.jsx(vd,{src:Tc,alt:"",$variant:"primary"}),d.jsx(vd,{src:Tc,alt:"",$variant:"secundary"}),d.jsx("img",{src:Og,alt:""})]}),d.jsxs(v9,{children:[d.jsx("img",{src:zg,alt:""}),d.jsx("img",{src:Dg,alt:""}),d.jsx("img",{src:Tg,alt:""}),d.jsx("img",{src:Cg,alt:""})]})]})})]}),d.jsxs(b9,{children:[d.jsxs("section",{children:[d.jsx("div",{children:d.jsx(o1,{size:32,weight:"bold"})}),d.jsx("p",{children:"123 Meow Avenue. Kittyville, CA 90210 United States"})]}),d.jsxs("section",{children:[d.jsx("div",{children:d.jsx(b4,{size:32})}),d.jsx("p",{children:"(555) 555-5555"})]}),d.jsx("section",{children:d.jsxs("a",{href:"mailto:info@neko-inn.com",children:[d.jsx("div",{children:d.jsx(Ir,{size:32})}),d.jsx("p",{children:"info@neko-inn.com"})]})})]}),d.jsxs(x9,{children:[d.jsxs("article",{children:[d.jsx("span",{children:n("MainHome.about.span")}),d.jsx("h2",{children:n("MainHome.about.title")}),d.jsx("p",{children:n("MainHome.about.description")}),d.jsx(Ic,{})]}),d.jsxs("figure",{children:[d.jsx("img",{src:Tc}),d.jsx("img",{src:Hg})]})]}),d.jsxs(S9,{children:[d.jsx("figure",{children:d.jsx("img",{src:Zg,alt:""})}),d.jsxs("article",{children:[d.jsx("span",{children:n("MainHome.rooms.span")}),d.jsx("h2",{children:n("MainHome.rooms.title")}),d.jsx(C9,{})]})]}),d.jsxs(w9,{children:[d.jsxs("article",{children:[d.jsx("span",{children:n("MainHome.purrCare.article-span")}),d.jsx("h2",{children:n("MainHome.purrCare.article-title")}),d.jsx("p",{children:n("MainHome.purrCare.article-description")}),d.jsxs("button",{children:[d.jsx(c1,{size:20}),n("MainHome.purrCare.article-button")]})]}),d.jsxs("div",{children:[d.jsxs("div",{children:[d.jsx("img",{src:Ng,alt:""}),d.jsx("h4",{children:n("MainHome.purrCare.firstDiv-title")}),d.jsx("p",{children:n("MainHome.purrCare.firstDiv-description")})]}),d.jsxs("div",{children:[d.jsx("img",{src:Rg,alt:""}),d.jsx("h4",{children:n("MainHome.purrCare.secondDiv-title")}),d.jsx("p",{children:n("MainHome.purrCare.secondDiv-description")})]}),d.jsxs("div",{children:[d.jsx("img",{src:_g,alt:""}),d.jsx("h4",{children:n("MainHome.purrCare.thirdDiv-title")}),d.jsx("p",{children:n("MainHome.purrCare.thirdDiv-description")})]})]})]}),d.jsx(dy,{}),d.jsx(Yg,{}),d.jsx(Fg,{}),d.jsx(c9,{})]}),d.jsx(h9,{})]})}function Xy(){return R.useEffect(()=>{(!Br.hasLoadedNamespace("home")||!Br.hasLoadedNamespace("components"))&&Br.loadNamespaces(["home","components"])},[]),d.jsxs(wg,{children:[d.jsx(Wh,{}),d.jsx(Yy,{})]})}var $y=(n,i,u,o,s,g,y,S)=>{let w=document.documentElement,O=["light","dark"];function b(N){(Array.isArray(n)?n:[n]).forEach(U=>{let q=U==="class",K=q&&g?s.map(J=>g[J]||J):s;q?(w.classList.remove(...K),w.classList.add(g&&g[N]?g[N]:N)):w.setAttribute(U,N)}),C(N)}function C(N){S&&O.includes(N)&&(w.style.colorScheme=N)}function z(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(o)b(o);else try{let N=localStorage.getItem(i)||u,U=y&&N==="system"?z():N;b(U)}catch{}},_d=["light","dark"],W4="(prefers-color-scheme: dark)",Qy=typeof window>"u",f1=R.createContext(void 0),Gy={setTheme:n=>{},themes:[]},Ky=()=>{var n;return(n=R.useContext(f1))!=null?n:Gy},Py=n=>R.useContext(f1)?R.createElement(R.Fragment,null,n.children):R.createElement(Jy,{...n}),Fy=["light","dark"],Jy=({forcedTheme:n,disableTransitionOnChange:i=!1,enableSystem:u=!0,enableColorScheme:o=!0,storageKey:s="theme",themes:g=Fy,defaultTheme:y=u?"system":"light",attribute:S="data-theme",value:w,children:O,nonce:b,scriptProps:C})=>{let[z,N]=R.useState(()=>Iy(s,y)),[U,q]=R.useState(()=>z==="system"?Bc():z),K=w?Object.values(w):g,J=R.useCallback(W=>{let Y=W;if(!Y)return;W==="system"&&u&&(Y=Bc());let X=w?w[Y]:Y,Ce=i?ev(b):null,Ye=document.documentElement,Kt=We=>{We==="class"?(Ye.classList.remove(...K),X&&Ye.classList.add(X)):We.startsWith("data-")&&(X?Ye.setAttribute(We,X):Ye.removeAttribute(We))};if(Array.isArray(S)?S.forEach(Kt):Kt(S),o){let We=_d.includes(y)?y:null,Ke=_d.includes(Y)?Y:We;Ye.style.colorScheme=Ke}Ce==null||Ce()},[b]),k=R.useCallback(W=>{let Y=typeof W=="function"?W(z):W;N(Y);try{localStorage.setItem(s,Y)}catch{}},[z]),_=R.useCallback(W=>{let Y=Bc(W);q(Y),z==="system"&&u&&!n&&J("system")},[z,n]);R.useEffect(()=>{let W=window.matchMedia(W4);return W.addListener(_),_(W),()=>W.removeListener(_)},[_]),R.useEffect(()=>{let W=Y=>{Y.key===s&&(Y.newValue?N(Y.newValue):k(y))};return window.addEventListener("storage",W),()=>window.removeEventListener("storage",W)},[k]),R.useEffect(()=>{J(n??z)},[n,z]);let $=R.useMemo(()=>({theme:z,setTheme:k,forcedTheme:n,resolvedTheme:z==="system"?U:z,themes:u?[...g,"system"]:g,systemTheme:u?U:void 0}),[z,k,n,U,u,g]);return R.createElement(f1.Provider,{value:$},R.createElement(Wy,{forcedTheme:n,storageKey:s,attribute:S,enableSystem:u,enableColorScheme:o,defaultTheme:y,value:w,themes:g,nonce:b,scriptProps:C}),O)},Wy=R.memo(({forcedTheme:n,storageKey:i,attribute:u,enableSystem:o,enableColorScheme:s,defaultTheme:g,value:y,themes:S,nonce:w,scriptProps:O})=>{let b=JSON.stringify([u,i,g,n,S,y,o,s]).slice(1,-1);return R.createElement("script",{...O,suppressHydrationWarning:!0,nonce:typeof window>"u"?w:"",dangerouslySetInnerHTML:{__html:`(${$y.toString()})(${b})`}})}),Iy=(n,i)=>{if(Qy)return;let u;try{u=localStorage.getItem(n)||void 0}catch{}return u||i},ev=n=>{let i=document.createElement("style");return n&&i.setAttribute("nonce",n),i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(i),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(i)},1)}},Bc=n=>(n||(n=window.matchMedia(W4)),n.matches?"dark":"light"),I4={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ld=h.createContext&&h.createContext(I4),tv=["attr","size","title"];function av(n,i){if(n==null)return{};var u=nv(n,i),o,s;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(n);for(s=0;s<g.length;s++)o=g[s],!(i.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(u[o]=n[o])}return u}function nv(n,i){if(n==null)return{};var u={};for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){if(i.indexOf(o)>=0)continue;u[o]=n[o]}return u}function a0(){return a0=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(n[o]=u[o])}return n},a0.apply(this,arguments)}function Ud(n,i){var u=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);i&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),u.push.apply(u,o)}return u}function n0(n){for(var i=1;i<arguments.length;i++){var u=arguments[i]!=null?arguments[i]:{};i%2?Ud(Object(u),!0).forEach(function(o){lv(n,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(u)):Ud(Object(u)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(u,o))})}return n}function lv(n,i,u){return i=iv(i),i in n?Object.defineProperty(n,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):n[i]=u,n}function iv(n){var i=rv(n,"string");return typeof i=="symbol"?i:i+""}function rv(n,i){if(typeof n!="object"||!n)return n;var u=n[Symbol.toPrimitive];if(u!==void 0){var o=u.call(n,i);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function em(n){return n&&n.map((i,u)=>h.createElement(i.tag,n0({key:u},i.attr),em(i.child)))}function tm(n){return i=>h.createElement(uv,a0({attr:n0({},n.attr)},i),em(n.child))}function uv(n){var i=u=>{var{attr:o,size:s,title:g}=n,y=av(n,tv),S=s||u.size||"1em",w;return u.className&&(w=u.className),n.className&&(w=(w?w+" ":"")+n.className),h.createElement("svg",a0({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,o,y,{className:w,style:n0(n0({color:n.color||u.color},u.style),n.style),height:S,width:S,xmlns:"http://www.w3.org/2000/svg"}),g&&h.createElement("title",null,g),n.children)};return Ld!==void 0?h.createElement(Ld.Consumer,null,u=>i(u)):i(I4)}function cv(n){return tm({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"},child:[]}]})(n)}function ov(n){return tm({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"4"},child:[]},{tag:"path",attr:{d:"M12 2v2"},child:[]},{tag:"path",attr:{d:"M12 20v2"},child:[]},{tag:"path",attr:{d:"m4.93 4.93 1.41 1.41"},child:[]},{tag:"path",attr:{d:"m17.66 17.66 1.41 1.41"},child:[]},{tag:"path",attr:{d:"M2 12h2"},child:[]},{tag:"path",attr:{d:"M20 12h2"},child:[]},{tag:"path",attr:{d:"m6.34 17.66-1.41 1.41"},child:[]},{tag:"path",attr:{d:"m19.07 4.93-1.41 1.41"},child:[]}]})(n)}function sv(n){return d.jsx(Py,{attribute:"class",disableTransitionOnChange:!0,...n})}function am(){const{resolvedTheme:n,setTheme:i}=Ky();return{colorMode:n,setColorMode:i,toggleColorMode:()=>{i(n==="dark"?"light":"dark")}}}function fv(){const{colorMode:n}=am();return n==="dark"?d.jsx(cv,{}):d.jsx(ov,{})}R.forwardRef(function(i,u){const{toggleColorMode:o}=am();return d.jsx(N6,{fallback:d.jsx(_6,{boxSize:"8"}),children:d.jsx(R6,{onClick:o,variant:"ghost","aria-label":"Toggle color mode",size:"sm",ref:u,...i,css:{_icon:{width:"5",height:"5"}},children:d.jsx(fv,{})})})});R.forwardRef(function(i,u){return d.jsx(a1,{color:"fg",display:"contents",className:"chakra-theme light",colorPalette:"gray",colorScheme:"light",ref:u,...i})});R.forwardRef(function(i,u){return d.jsx(a1,{color:"fg",display:"contents",className:"chakra-theme dark",colorPalette:"gray",colorScheme:"dark",ref:u,...i})});function dv(n){return d.jsx(L6,{value:U6,children:d.jsx(sv,{...n})})}P6.createRoot(document.getElementById("root")).render(d.jsx(R.StrictMode,{children:d.jsx(dv,{children:d.jsx(Xy,{})})}));

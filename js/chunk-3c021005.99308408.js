(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c021005"],{"109e":function(e,t,n){
/*!
  * Bootstrap manipulator.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";function e(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function t(e){return e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}const n={setDataAttribute(e,n,s){e.setAttribute("data-bs-"+t(n),s)},removeDataAttribute(e,n){e.removeAttribute("data-bs-"+t(n))},getDataAttributes(t){if(!t)return{};const n={};return Object.keys(t.dataset).filter(e=>e.startsWith("bs")).forEach(s=>{let o=s.replace(/^bs/,"");o=o.charAt(0).toLowerCase()+o.slice(1,o.length),n[o]=e(t.dataset[s])}),n},getDataAttribute(n,s){return e(n.getAttribute("data-bs-"+t(s)))},offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}};return n}))},1134:function(e,t,n){e.exports=n.p+"img/sideMenu.f8b3d7af.svg"},"302d":function(e,t,n){
/*!
  * Bootstrap base-component.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,s){e.exports=s(n("6ee1"),n("6a95"))})(0,(function(e,t){"use strict";const n=e=>e&&"object"===typeof e&&"default"in e?e:{default:e},s=n(e),o=n(t),i=1e3,r="transitionend",a=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const s=Number.parseFloat(t),o=Number.parseFloat(n);return s||o?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*i):0},c=e=>{e.dispatchEvent(new Event(r))},u=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),l=e=>u(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(e):null,f=e=>{"function"===typeof e&&e()},d=(e,t,n=!0)=>{if(!n)return void f(e);const s=5,o=a(t)+s;let i=!1;const u=({target:n})=>{n===t&&(i=!0,t.removeEventListener(r,u),f(e))};t.addEventListener(r,u),setTimeout(()=>{i||c(t)},o)},h="5.1.3";class b{constructor(e){e=l(e),e&&(this._element=e,s.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.default.remove(this._element,this.constructor.DATA_KEY),o.default.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(e=>{this[e]=null})}_queueCallback(e,t,n=!0){d(e,t,n)}static getInstance(e){return s.default.get(l(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return h}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}return b}))},"6a95":function(e,t,n){
/*!
  * Bootstrap event-handler.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";const e=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},t=/[^.]*(?=\..*)\.|.*/,n=/\..*/,s=/::\d+$/,o={};let i=1;const r={mouseenter:"mouseover",mouseleave:"mouseout"},a=/^(mouseenter|mouseleave)/i,c=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function u(e,t){return t&&`${t}::${i++}`||e.uidEvent||i++}function l(e){const t=u(e);return e.uidEvent=t,o[t]=o[t]||{},o[t]}function f(e,t){return function n(s){return s.delegateTarget=e,n.oneOff&&O.off(e,s.type,t),t.apply(e,[s])}}function d(e,t,n){return function s(o){const i=e.querySelectorAll(t);for(let{target:r}=o;r&&r!==this;r=r.parentNode)for(let a=i.length;a--;)if(i[a]===r)return o.delegateTarget=r,s.oneOff&&O.off(e,o.type,t,n),n.apply(r,[o]);return null}}function h(e,t,n=null){const s=Object.keys(e);for(let o=0,i=s.length;o<i;o++){const i=e[s[o]];if(i.originalHandler===t&&i.delegationSelector===n)return i}return null}function b(e,t,n){const s="string"===typeof t,o=s?n:t;let i=j(e);const r=c.has(i);return r||(i=e),[s,o,i]}function m(e,n,s,o,i){if("string"!==typeof n||!e)return;if(s||(s=o,o=null),a.test(n)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o?o=e(o):s=e(s)}const[r,c,m]=b(n,s,o),g=l(e),p=g[m]||(g[m]={}),j=h(p,c,r?s:null);if(j)return void(j.oneOff=j.oneOff&&i);const O=u(c,n.replace(t,"")),v=r?d(e,s,o):f(e,s);v.delegationSelector=r?s:null,v.originalHandler=c,v.oneOff=i,v.uidEvent=O,p[O]=v,e.addEventListener(m,v,r)}function g(e,t,n,s,o){const i=h(t[n],s,o);i&&(e.removeEventListener(n,i,Boolean(o)),delete t[n][i.uidEvent])}function p(e,t,n,s){const o=t[n]||{};Object.keys(o).forEach(i=>{if(i.includes(s)){const s=o[i];g(e,t,n,s.originalHandler,s.delegationSelector)}})}function j(e){return e=e.replace(n,""),r[e]||e}const O={on(e,t,n,s){m(e,t,n,s,!1)},one(e,t,n,s){m(e,t,n,s,!0)},off(e,t,n,o){if("string"!==typeof t||!e)return;const[i,r,a]=b(t,n,o),c=a!==t,u=l(e),f=t.startsWith(".");if("undefined"!==typeof r){if(!u||!u[a])return;return void g(e,u,a,r,i?n:null)}f&&Object.keys(u).forEach(n=>{p(e,u,n,t.slice(1))});const d=u[a]||{};Object.keys(d).forEach(n=>{const o=n.replace(s,"");if(!c||t.includes(o)){const t=d[n];g(e,u,a,t.originalHandler,t.delegationSelector)}})},trigger(t,n,s){if("string"!==typeof n||!t)return null;const o=e(),i=j(n),r=n!==i,a=c.has(i);let u,l=!0,f=!0,d=!1,h=null;return r&&o&&(u=o.Event(n,s),o(t).trigger(u),l=!u.isPropagationStopped(),f=!u.isImmediatePropagationStopped(),d=u.isDefaultPrevented()),a?(h=document.createEvent("HTMLEvents"),h.initEvent(i,l,!0)):h=new CustomEvent(n,{bubbles:l,cancelable:!0}),"undefined"!==typeof s&&Object.keys(s).forEach(e=>{Object.defineProperty(h,e,{get(){return s[e]}})}),d&&h.preventDefault(),f&&t.dispatchEvent(h),h.defaultPrevented&&"undefined"!==typeof u&&u.preventDefault(),h}};return O}))},"6ea1":function(e,t,n){
/*!
  * Bootstrap toast.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,s){e.exports=s(n("6a95"),n("109e"),n("302d"))})(0,(function(e,t,n){"use strict";const s=e=>e&&"object"===typeof e&&"default"in e?e:{default:e},o=s(e),i=s(t),r=s(n),a=e=>null===e||void 0===e?""+e:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),c=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),t=n&&"#"!==n?n.trim():null}return t},u=e=>{const t=c(e);return t?document.querySelector(t):null},l=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),f=(e,t,n)=>{Object.keys(n).forEach(s=>{const o=n[s],i=t[s],r=i&&l(i)?"element":a(i);if(!new RegExp(o).test(r))throw new TypeError(`${e.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${o}".`)})},d=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),h=e=>{e.offsetHeight},b=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},m=[],g=e=>{"loading"===document.readyState?(m.length||document.addEventListener("DOMContentLoaded",()=>{m.forEach(e=>e())}),m.push(e)):e()},p=e=>{g(()=>{const t=b();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},j=(e,t="hide")=>{const n="click.dismiss"+e.EVENT_KEY,s=e.NAME;o.default.on(document,n,`[data-bs-dismiss="${s}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),d(this))return;const o=u(this)||this.closest("."+s),i=e.getOrCreateInstance(o);i[t]()}))},O="toast",v="bs.toast",y="."+v,_="mouseover"+y,w="mouseout"+y,E="focusin"+y,k="focusout"+y,T="hide"+y,A="hidden"+y,L="show"+y,S="shown"+y,x="fade",D="hide",M="show",N="showing",C={animation:"boolean",autohide:"boolean",delay:"number"},I={animation:!0,autohide:!0,delay:5e3};class q extends r.default{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return C}static get Default(){return I}static get NAME(){return O}show(){const e=o.default.trigger(this._element,L);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(x);const t=()=>{this._element.classList.remove(N),o.default.trigger(this._element,S),this._maybeScheduleHide()};this._element.classList.remove(D),h(this._element),this._element.classList.add(M),this._element.classList.add(N),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(M))return;const e=o.default.trigger(this._element,T);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(D),this._element.classList.remove(N),this._element.classList.remove(M),o.default.trigger(this._element,A)};this._element.classList.add(N),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(M)&&this._element.classList.remove(M),super.dispose()}_getConfig(e){return e={...I,...i.default.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},f(O,e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){o.default.on(this._element,_,e=>this._onInteraction(e,!0)),o.default.on(this._element,w,e=>this._onInteraction(e,!1)),o.default.on(this._element,E,e=>this._onInteraction(e,!0)),o.default.on(this._element,k,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=q.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}return j(q),p(q),q}))},"6ee1":function(e,t,n){
/*!
  * Bootstrap data.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";const e=new Map,t={set(t,n,s){e.has(t)||e.set(t,new Map);const o=e.get(t);o.has(n)||0===o.size?o.set(n,s):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get(t,n){return e.has(t)&&e.get(t).get(n)||null},remove(t,n){if(!e.has(t))return;const s=e.get(t);s.delete(n),0===s.size&&e.delete(t)}};return t}))},"88e9":function(e,t,n){"use strict";n.r(t);var s=n("7a23"),o={class:"full-high"};function i(e,t,n,i,r,a){var c=Object(s["D"])("TopBar"),u=Object(s["D"])("router-view"),l=Object(s["D"])("Footer"),f=Object(s["D"])("ToastMessages");return Object(s["w"])(),Object(s["g"])("div",o,[Object(s["k"])(c),Object(s["k"])(u),Object(s["k"])(l),Object(s["k"])(f)])}n("b0c0");var r=n("fbae"),a=n.n(r),c=n("1134"),u=n.n(c),l={class:"navbar navbar-light navbar-padding bg-white"},f={class:"container-fluid px-0"},d=Object(s["h"])("a",{class:"navbar-brand",href:"#"},[Object(s["h"])("img",{src:a.a,alt:"LOGO",height:"40"})],-1),h={class:"cus_nav-link m-auto d-md-flex d-none"},b=Object(s["j"])("附近站牌"),m=Object(s["j"])("站點查詢"),g=Object(s["j"])("收藏站牌"),p=Object(s["h"])("div",{class:"d-block d-md-none"},[Object(s["h"])("a",{"data-bs-toggle":"offcanvas",href:"#offcanvasExample"},[Object(s["h"])("img",{src:u.a,height:"24",alt:"menu"})])],-1),j={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasExample"},O=Object(s["h"])("div",{class:"offcanvas-header"},[Object(s["h"])("a",{href:"#"},[Object(s["h"])("img",{src:a.a,alt:"LOGO",height:"42"})]),Object(s["h"])("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),v={class:"offcanvas-body p-0"},y={class:"d-flex flex-column p-0"},_=Object(s["j"])("附近站牌"),w=Object(s["j"])("站點查詢"),E=Object(s["j"])("收藏站牌");function k(e,t){var n=Object(s["D"])("router-link");return Object(s["w"])(),Object(s["g"])(s["a"],null,[Object(s["h"])("nav",l,[Object(s["h"])("div",f,[d,Object(s["h"])("ul",h,[Object(s["h"])("li",{class:Object(s["q"])(["cus_nav-link-item",{active:"nearStation"===e.$route.name}])},[Object(s["k"])(n,{to:"/NearbyStation"},{default:Object(s["M"])((function(){return[b]})),_:1})],2),Object(s["h"])("li",{class:Object(s["q"])(["cus_nav-link-item",{active:"stopSearch"===e.$route.name}])},[Object(s["k"])(n,{to:"/StopSearch"},{default:Object(s["M"])((function(){return[m]})),_:1})],2),Object(s["h"])("li",{class:Object(s["q"])(["cus_nav-link-item",{active:"likeBus"===e.$route.name}])},[Object(s["k"])(n,{to:"/LikeBus"},{default:Object(s["M"])((function(){return[g]})),_:1})],2)]),p])]),Object(s["h"])("div",j,[O,Object(s["h"])("div",v,[Object(s["h"])("ul",y,[Object(s["h"])("li",{class:Object(s["q"])(["canvas-link",{active:"nearStation"===e.$route.name}])},[Object(s["k"])(n,{to:"/NearbyStation"},{default:Object(s["M"])((function(){return[_]})),_:1})],2),Object(s["h"])("li",{class:Object(s["q"])(["canvas-link",{active:"stopSearch"===e.$route.name}])},[Object(s["k"])(n,{to:"/StopSearch"},{default:Object(s["M"])((function(){return[w]})),_:1})],2),Object(s["h"])("li",{class:Object(s["q"])(["canvas-link",{active:"likeBus"===e.$route.name}])},[Object(s["k"])(n,{to:"/LikeBus"},{default:Object(s["M"])((function(){return[E]})),_:1})],2)])])])],64)}var T=n("6b0d"),A=n.n(T);const L={},S=A()(L,[["render",k]]);var x=S,D=Object(s["h"])("div",{class:"container-fluid footer"},[Object(s["h"])("span",null,"Copyright © 2021 台灣公車 e 點通 All rights reserved.")],-1),M=[D];function N(e,t){return Object(s["w"])(),Object(s["g"])("footer",null,M)}const C={},I=A()(C,[["render",N]]);var q=I,$={class:"toast-container position-fixed pe-2 end-0 toast-position"};function B(e,t,n,o,i,r){var a=Object(s["D"])("Toast");return Object(s["w"])(),Object(s["g"])("div",$,[(Object(s["w"])(!0),Object(s["g"])(s["a"],null,Object(s["B"])(i.messages,(function(e,t){return Object(s["w"])(),Object(s["e"])(a,{key:t,msg:e},null,8,["msg"])})),128))])}var K={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},Y={class:"row justify-conent-between align-items-center g-0"},H={class:"col-1 text-center"},P={key:0,class:"bi bi-exclamation-triangle-fill fs-6 text-danger"},F={key:1,class:"bi bi-check-circle-fill fs-6 text-success"},G={class:"col-10"},Q={class:"d-flex flex-column px-2 toast-content"},z={class:"title"},R={class:"content"},V=Object(s["h"])("div",{class:"col-1 text-center"},[Object(s["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})],-1);function W(e,t,n,o,i,r){return Object(s["w"])(),Object(s["g"])("div",K,[Object(s["h"])("div",{class:Object(s["q"])(["toast-body toast-border px-0","border-".concat(n.msg.style)])},[Object(s["h"])("div",Y,[Object(s["h"])("div",H,["danger"===n.msg.style?(Object(s["w"])(),Object(s["g"])("i",P)):(Object(s["w"])(),Object(s["g"])("i",F))]),Object(s["h"])("div",G,[Object(s["h"])("div",Q,[Object(s["h"])("strong",z,Object(s["G"])(n.msg.title),1),Object(s["h"])("span",R,Object(s["G"])(n.msg.content),1)])]),V])],2)],512)}var J=n("6ea1"),X=n.n(J),U={name:"Toast",props:["msg"],mounted:function(){var e=this.$refs.toast,t=new X.a(e,{delay:1e3});t.show()}};const Z=A()(U,[["render",W]]);var ee=Z,te={components:{Toast:ee},data:function(){return{messages:[]}},inject:["emitter"],unmounted:function(){this.emitter.off("push-message")},mounted:function(){var e=this;this.emitter.on("push-message",(function(t){var n=t.style,s=void 0===n?"success":n,o=t.title,i=t.content;e.messages.push({style:s,title:o,content:i})}))}};const ne=A()(te,[["render",B]]);var se=ne,oe=n("cfb9"),ie={components:{TopBar:x,Footer:q,ToastMessages:se},provide:function(){return{emitter:oe["a"]}},data:function(){return{}},methods:{},created:function(){}};const re=A()(ie,[["render",i]]);t["default"]=re},b0c0:function(e,t,n){var s=n("83ab"),o=n("5e77").EXISTS,i=n("e330"),r=n("9bf2").f,a=Function.prototype,c=i(a.toString),u=/^\s*function ([^ (]*)/,l=i(u.exec),f="name";s&&!o&&r(a,f,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},fbae:function(e,t,n){e.exports=n.p+"img/LOGO.39493157.png"}}]);
//# sourceMappingURL=chunk-3c021005.99308408.js.map
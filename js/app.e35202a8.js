(function(e){function n(n){for(var r,a,c=n[0],i=n[1],f=n[2],l=0,s=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(s.length)s.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(r=!1)}r&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},u=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0320321f":"36006e72","chunk-2d224941":"180fce37","chunk-32468ba0":"a293f390","chunk-4a68619f":"7271fbd8","chunk-1adb5b64":"2899fb7a","chunk-c9e281fa":"d7ed9ba3"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=a(e);var f=new Error;u=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",f.name="ChunkLoadError",f.type=r,f.request=u,t[1](f)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/taiwan_bus_demo/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var d=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),o=Object(r["f"])("div",{id:"nav"},null,-1);function u(e,n){var t=Object(r["y"])("router-view");return Object(r["t"])(),Object(r["e"])(r["a"],null,[o,Object(r["i"])(t)],64)}t("6877");var a=t("6b0d"),c=t.n(a);const i={},f=c()(i,[["render",u]]);var l=f,d=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),s=[{path:"/",component:function(){return t.e("chunk-c9e281fa").then(t.bind(null,"88e9"))},children:[{path:"/",name:"Home",component:function(){return t.e("chunk-1adb5b64").then(t.bind(null,"d504"))}},{path:"BusSearch/:queryString",component:function(){return Promise.all([t.e("chunk-0320321f"),t.e("chunk-32468ba0")]).then(t.bind(null,"8fb6"))}},{path:"NearbyStation/",component:function(){return Promise.all([t.e("chunk-0320321f"),t.e("chunk-4a68619f")]).then(t.bind(null,"414c"))}},{path:"StopSearch/",component:function(){return Promise.all([t.e("chunk-0320321f"),t.e("chunk-2d224941")]).then(t.bind(null,"e176"))}}]}],p=Object(d["a"])({history:Object(d["b"])(),routes:s}),h=p,b=t("bc3a"),m=t.n(b),v=t("130e"),g=(t("cd74"),t("7b17"),t("6c2d")),y="0614cbff829f4c189593b90236ef7578",k="CItZnkpy_c3YQbXXAZ2i21rrcxM";function j(e){var n=(new Date).toGMTString(),t=new g["a"]("SHA-1","TEXT");t.setHMACKey(k,"TEXT"),t.update("x-date: "+n);var r=t.getHMAC("B64"),o='hmac username="'+y+'", algorithm="hmac-sha1", headers="x-date", signature="'+r+'"';return{Authorization:o,"X-Date":n}}function O(e){return Math.floor(e/60)}var w=Object(r["c"])(l);w.use(v["a"],m.a),w.use(h),w.config.globalProperties.$getAuthorizationHeader=j,w.config.globalProperties.$filters={toMinute:O},w.mount("#app")},6877:function(e,n,t){"use strict";t("f4ed")},f4ed:function(e,n,t){}});
//# sourceMappingURL=app.e35202a8.js.map
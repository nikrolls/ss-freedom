var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function s(e){try{f(n.next(e))}catch(e){i(e)}}function o(e){try{f(n["throw"](e))}catch(e){i(e)}}function f(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(s,o)}f((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return f([e,t])}}function f(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n="ss-freedom";var a=window;var i=document;var s={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var o=!!i.documentElement.attachShadow;var f=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var l=new WeakMap;var u=function(e){return l.get(e)};var c=e("r",function(e,t){return l.set(t.$lazyInstance$=e,t)});var $=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return l.set(e,t)}};var v=function(e,t){return t in e};var h=function(e){return console.error(e)};var d=new Map;var m=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=d.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then(function(e){{d.set(i,e)}return e[a]},h)};var p=new Map;var g=a.__stencil_cssshim;var y=0;var w=false;var b=[];var _=[];var S=[];var x=function(e,t){return function(r){e.push(r);if(!w){w=true;if(t&&s.$flags$&4){j(E)}else{s.raf(E)}}}};var k=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){h(e)}}e.length=0};var R=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){h(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var E=function(){y++;k(b);var e=(s.$flags$&6)===2?performance.now()+10*Math.ceil(y*(1/22)):Infinity;R(_,e);R(S,e);if(_.length>0){S.push.apply(S,_);_.length=0}if(w=b.length+_.length+S.length>0){s.raf(E)}else{y=0}};var j=function(e){return Promise.resolve().then(e)};var C=x(_,true);var L={};var N=function(e){return e!=null};var P=function(e){return e.toLowerCase()};var O=function(e){return["object","function"].includes(typeof e)};var A=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var U=e("a",function(){if(!(a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)"))){return t.import("./p-aaf72d6b.system.js")}return Promise.resolve()});var M=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,s;return __generator(this,function(o){switch(o.label){case 0:e=t.meta.url;if(!(e!==""))return[3,1];return[2,Promise.resolve(new URL(".",e).href)];case 1:r=Array.from(i.querySelectorAll("script")).find(function(e){return e.src.includes("/"+n+".esm.js")||e.getAttribute("data-namespace")===n});s=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,a.location.href));B(s.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-9725f31b.system.js")];case 2:o.sent();o.label=3;case 3:return[2,s.href]}})})});var B=function(e){var t=A(n);try{a[t]=new Function("w","return import(w);")}catch(n){var r=new Map;a[t]=function(n){var s=new URL(n,e).href;var o=r.get(s);if(!o){var f=i.createElement("script");f.type="module";f.src=URL.createObjectURL(new Blob(["import * as m from '"+s+"'; window."+t+".m = m;"],{type:"application/javascript"}));o=new Promise(function(e){f.onload=function(){e(a[t].m);f.remove()}});r.set(s,o);i.head.appendChild(f)}return o}}};var I="hydrated";var T=new WeakMap;var z=function(e,t,r){var n=p.get(e);if(f&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}p.set(e,n)};var H=function(e,t,r,n){var a=V(t.$tagName$);var s=p.get(a);e=e.nodeType===11?e:i;if(s){if(typeof s==="string"){e=e.head||e;var o=T.get(e);var f=void 0;if(!o){T.set(e,o=new Set)}if(!o.has(a)){{if(g){f=g.createHostStyle(n,a,s,!!(t.$flags$&10));var l=f["s-sc"];if(l){a=l;o=null}}else{f=i.createElement("style");f.innerHTML=s}e.insertBefore(f,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(s)){e.adoptedStyleSheets=e.adoptedStyleSheets.concat([s])}}return a};var q=function(e,t,r){var n=H(o&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var V=function(e,t){return"sc-"+e};var W=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o;var f=[];var l=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!O(a)){a=String(a)}if(i&&s){f[f.length-1].$text$+=a}else{f.push(i?{$flags$:0,$text$:a}:a)}s=i}}};l(r);if(t){{o=t.key||undefined}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter(function(e){return u[e]}).join(" ")}}}if(typeof e==="function"){return e(t,f,Q)}var c={$flags$:0,$tag$:e,$children$:f.length>0?f:null,$elm$:undefined,$attrs$:t};{c.$key$=o}return c});var F=e("H",{});var G=function(e){return e&&e.$tag$===F};var Q={forEach:function(e,t){return e.map(D).forEach(t)},map:function(e,t){return e.map(D).map(t).map(J)}};var D=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var J=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var K=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"&&!a){{var o=X(r);var f=X(e.className).filter(function(e){return!o.includes(e)});e.className=f.concat(X(n).filter(function(e){return!f.includes(e)})).join(" ")}}else if(t==="style"){{for(var l in r){if(!n||n[l]==null){if(l.includes("-")){e.style.removeProperty(l)}else{e.style[l]=""}}}}for(var l in n){if(!r||n[l]!==r[l]){if(l.includes("-")){e.style.setProperty(l,n[l])}else{e.style[l]=n[l]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!v(e,t)){if(v(e,P(t))){t=P(t.substring(2))}else{t=P(t[2])+t.substring(3)}if(r){s.rel(e,t,r,false)}if(n){s.ael(e,t,n,false)}}else{var u=v(e,t);var c=O(n);if((u||c&&n!==null)&&!a){try{e[t]=n==null&&e.tagName.indexOf("-")===-1?"":n}catch(e){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!u||i&4||a)&&!c){n=n===true?"":n.toString();{e.setAttribute(t,n)}}}};var X=function(e){return!e?[]:e.split(" ")};var Y=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||L;var s=t.$attrs$||L;{for(n in i){if(s[n]==null&&i[n]!=null){K(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){K(a,n,i[n],s[n],r,t.$flags$)}};var Z;var ee;var te=false;var re=function(e,t,r,n){var a=t.$children$[r];var s=0;var o;var f;if(N(a.$text$)){a.$elm$=i.createTextNode(a.$text$)}else{o=a.$elm$=i.createElement(a.$tag$);{Y(null,a,te)}if(N(Z)&&o["s-si"]!==Z){o.classList.add(o["s-si"]=Z)}if(a.$children$){for(s=0;s<a.$children$.length;++s){f=re(e,a,s);if(f){o.appendChild(f)}}}}return a.$elm$};var ne=function(e,t,r,n,a,i){var s=e;var o;if(s.shadowRoot&&P(s.tagName)===ee){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){o=re(null,r,a);if(o){n[a].$elm$=o;s.insertBefore(o,t)}}}};var ae=function(e,t,r,n){for(;t<=r;++t){if(N(e[t])){n=e[t].$elm$;fe(e[t],true);n.remove()}}};var ie=function(e,t,r,n){var a=0;var i=0;var s=0;var o=0;var f=t.length-1;var l=t[0];var u=t[f];var c=n.length-1;var $=n[0];var v=n[c];var h;var d;while(a<=f&&i<=c){if(l==null){l=t[++a]}else if(u==null){u=t[--f]}else if($==null){$=n[++i]}else if(v==null){v=n[--c]}else if(se(l,$)){oe(l,$);l=t[++a];$=n[++i]}else if(se(u,v)){oe(u,v);u=t[--f];v=n[--c]}else if(se(l,v)){oe(l,v);e.insertBefore(l.$elm$,u.$elm$.nextSibling);l=t[++a];v=n[--c]}else if(se(u,$)){oe(u,$);e.insertBefore(u.$elm$,l.$elm$);u=t[--f];$=n[++i]}else{s=-1;{for(o=a;o<=f;++o){if(t[o]&&N(t[o].$key$)&&t[o].$key$===$.$key$){s=o;break}}}if(s>=0){d=t[s];if(d.$tag$!==$.$tag$){h=re(t&&t[i],r,s)}else{oe(d,$);t[s]=undefined;h=d.$elm$}$=n[++i]}else{h=re(t&&t[i],r,i);$=n[++i]}if(h){{l.$elm$.parentNode.insertBefore(h,l.$elm$)}}}}if(a>f){ne(e,n[c+1]==null?null:n[c+1].$elm$,r,n,i,c)}else if(i>c){ae(t,a,f)}};var se=function(e,t){if(e.$tag$===t.$tag$){{return e.$key$===t.$key$}return true}return false};var oe=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;if(!N(t.$text$)){{{Y(e,t,te)}}if(N(n)&&N(a)){ie(r,n,t,a)}else if(N(a)){if(N(e.$text$)){r.textContent=""}ne(r,null,t,a,0,a.length-1)}else if(N(n)){ae(n,0,n.length-1)}}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var fe=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){fe(e,t)})}};var le=function(e,t,r,n){ee=P(e.tagName);var a=t.$vnode$||{$flags$:0};var i=G(n)?n:W(null,null,n);i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{Z=e["s-sc"]}oe(a,i)};var ue=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(e){h(e)}}return undefined};var ce=function(e,t){return e&&e.then?e.then(t):t()};var $e=function(e,t,r,n){{t.$flags$|=16}var a=t.$lazyInstance$;var i;if(n){{i=ue(a,"componentWillLoad")}}var s=function(){return ve(e,t,r,a,n)};return ce(i,function(){return C(s)})};var ve=function(e,t,r,n,a){{t.$flags$&=~16}{e["s-lr"]=false}if(a){q(e,r,t.$modeName$)}{{t.$flags$|=4;try{le(e,t,r,n.render())}catch(e){h(e)}t.$flags$&=~4}}if(g){g.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach(function(e){return e()});e["s-rc"].length=0}he(e,t)};var he=function(e,t,r){if(!e["s-al"]){var n=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(I)}{t.$onReadyResolve$(e)}if(!n){i.documentElement.classList.add(I);{setTimeout(function(){return s.$flags$|=2},999)}}}if(n){if(r=n["s-al"]){r.delete(e);if(r.size===0){n["s-al"]=undefined;n["s-init"]()}}t.$ancestorComponent$=undefined}}};var de=function(e,t){{var r=u(e);if(r.$flags$&2){$e(e,r,t,false)}}};var me=function(e){if((s.$flags$&1)===0){var t=u(e);if(g){g.removeHost(e)}}};var pe=function(e,t){if(e!=null&&!O(e)){if(t&1){return String(e)}return e}return e};var ge=function(e,t){return u(e).$instanceValues$.get(t)};var ye=function(e,t,r,n){var a=u(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var o=a.$flags$;r=pe(r,n.$members$[t][0]);if(r!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if((o&(4|2|16))===2){$e(i,a,n,false)}}}};var we=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return ge(this,n)},set:function(e){ye(this,n,e,t)},configurable:true,enumerable:true})}});if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;s.jmp(function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r})};e.observedAttributes=n.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var t=e[0],r=e[1];var n=r[1]||t;i.set(n,t);return n})}}return e};var be=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,function(){var r,i,o,f;return __generator(this,function(l){switch(l.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=m(a);if(!s.then)return[3,2];return[4,s];case 1:s=l.sent();l.label=2;case 2:if(!s.isProxied){we(s,a,2);s.isProxied=true}{n.$flags$|=8}try{new s(n)}catch(e){h(e)}{n.$flags$&=~8}if(!(!s.isStyleRegistered&&s.style))return[3,5];r=s.style;i=V(a.$tagName$);if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-1563a874.system.js").then(function(e){return e.scopeCss(r,i,false)})];case 3:r=l.sent();l.label=4;case 4:z(i,r,!!(a.$flags$&1));s.isStyleRegistered=true;l.label=5;case 5:o=n.$ancestorComponent$;f=function(){return $e(e,n,a,true)};if(o&&o["s-lr"]===false&&o["s-rc"]){o["s-rc"].push(f)}else{f()}return[2]}})})};var _e=function(e,t){if((s.$flags$&1)===0){var r=u(e);if(!(r.$flags$&1)){r.$flags$|=1;{var n=e;while(n=n.parentNode||n.host){if(n["s-init"]&&n["s-lr"]===false){r.$ancestorComponent$=n;(n["s-al"]=n["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{j(function(){return be(e,r,t)})}}}};var Se=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var f=i.head;var l=a.customElements;var c=f.querySelector("meta[charset]");var v=i.createElement("style");Object.assign(s,t);s.$resourcesUrl$=new URL(t.resourcesUrl||"./",i.baseURI).href;if(t.syncQueue){s.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};if(!o&&a.$flags$&1){a.$flags$|=8}var i=a.$tagName$;var f=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}$(t);if(a.$flags$&1){if(o){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){var e=this;s.jmp(function(){return _e(e,a)})};t.prototype.disconnectedCallback=function(){var e=this;s.jmp(function(){return me(e)})};t.prototype["s-init"]=function(){var e=u(this);if(e.$lazyInstance$){he(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){de(this,a)};t.prototype.componentOnReady=function(){return u(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(i)&&!l.get(i)){r.push(i);l.define(i,we(f,a,1))}})});v.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";v.setAttribute("data-styles","");f.insertBefore(v,c?c.nextSibling:f.firstChild)});var xe=e("g",function(e){return u(e).$hostElement$})}}});
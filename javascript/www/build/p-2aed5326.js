const e=window,t=document,s={t:0,s:"",raf:e=>requestAnimationFrame(e),ael:(e,t,s,a)=>e.addEventListener(t,s,a),rel:(e,t,s,a)=>e.removeEventListener(t,s,a)},a=!!t.documentElement.attachShadow,n=new WeakMap,o=e=>n.get(e),r=(e,t)=>n.set(t.o=e,t),c=e=>console.error(e),i=e.__stencil_cssshim;let m=0,d=!1;const l=[],f=[],p=[],w=e=>t=>{e.push(t),d||(d=!0,s.raf($))},h=(e,t)=>{let s=0,a=0;for(;s<e.length&&(a=performance.now())<t;)try{e[s++](a)}catch(e){c(e)}s===e.length?e.length=0:0!==s&&e.splice(0,s)},$=()=>{m++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){c(e)}e.length=0})(l);const e=2==(6&s.t)?performance.now()+7*Math.ceil(m*(1/22)):1/0;h(f,e),h(p,e),f.length>0&&(p.push(...f),f.length=0),(d=l.length+f.length+p.length>0)?s.raf($):m=0},_=w(f),y=()=>e.CSS&&e.CSS.supports&&e.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_ss_freedom("./p-229ebf7a.js"),u=async()=>{{const s=Array.from(t.querySelectorAll("script")).find(e=>e.src.includes("/ss-freedom.esm.js")||"ss-freedom"===e.getAttribute("data-namespace")),a=new URL(".",new URL(s.getAttribute("data-resources-url")||s.src,e.location.href));return b(a.href),window.customElements||await __sc_import_ss_freedom("./p-a0c82e31.js"),a.href}},b=s=>{const a=`__sc_import_${"ss-freedom".replace(/\s|-/g,"_")}`;try{e[a]=new Function("w","return import(w);")}catch(n){const o=new Map;e[a]=n=>{const r=new URL(n,s).href;let c=o.get(r);if(!c){const s=t.createElement("script");s.type="module",s.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.${a}.m = m;`],{type:"application/javascript"})),c=new Promise(t=>{s.onload=()=>{t(e[a].m),s.remove()}}),o.set(r,c),t.head.appendChild(s)}return c}}},j=(e,a,n)=>{if(!e["s-al"]){const o=a.i;512&a.t||(a.t|=512,e.classList.add("hydrated"),a.l(e),o||(t.documentElement.classList.add("hydrated"),setTimeout(()=>s.t|=2,999))),o&&((n=o["s-al"])&&(n.delete(e),0===n.size&&(o["s-al"]=void 0,o["s-init"]())),a.i=void 0)}},R=(e,t)=>(t.p&&Object.entries(t.p).forEach(([e,[t]])=>{}),e),U=async(e,t,s,a,n)=>{if(0==(256&t.t)){t.t|=256,(n=await(e=>__sc_import_ss_freedom(`./${e.h}.entry.js`).then(t=>t[e.$.replace(/-/g,"_")],c))(s)).isProxied||(R(n,s),n.isProxied=!0),t.t|=8;try{new n(t)}catch(e){c(e)}t.t&=-9,g(t.o)}const o=t.i;o&&!o["s-lr"]&&o["s-rc"]?o["s-rc"].push(()=>U(e,t,s)):(async(e,t)=>{const s=t.o;await(async e=>{if(e&&e.componentWillLoad)try{await e.componentWillLoad()}catch(e){c(e)}})(s),_(()=>((e,t,s,a)=>{e["s-lr"]=!1,e.textContent=a.render(),i&&i.updateHost(e),e["s-lr"]=!0,t.t|=2,e["s-rc"].length>0&&(e["s-rc"].forEach(e=>e()),e["s-rc"].length=0),j(e,t)})(e,t,0,s))})(e,t)},g=()=>{},v=(r,c={})=>{const m=[],d=c.exclude||[],l=t.head,f=e.customElements,p=l.querySelector("meta[charset]"),w=t.createElement("style");Object.assign(s,c),s.s=new URL(c.resourcesUrl||"/",e.location.href).href,c.syncQueue&&(s.t|=4),r.forEach(e=>e[1].forEach(t=>{const r={t:t[0],$:t[1],p:t[2],_:t[3]};!a&&1&r.t&&(r.t|=8);const c=r.$;r.h=e[0],d.includes(c)||f.get(c)||(m.push(c),f.define(c,R(class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,u:e,j:new Map};t.R=new Promise(e=>t.l=e),n.set(e,t)}})(e),1&r.t&&(a?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){((e,t)=>{if(0==(1&s.t)){const s=o(e);if(!(1&s.t)){s.t|=1;{let t=e;for(;t=t.parentNode||t.host;)if(t["s-init"]&&!t["s-lr"]){s.i=t,(t["s-al"]=t["s-al"]||new Set).add(e);break}}U(e,s,t)}g(s.o)}})(this,r)}disconnectedCallback(){0==(1&s.t)&&i&&i.removeHost(this)}"s-init"(){const e=o(this);e.o&&j(this,e)}"s-hmr"(e){}forceUpdate(){}componentOnReady(){return o(this).R}},r)))})),w.innerHTML=m+"{visibility:hidden}.hydrated{visibility:inherit}",w.setAttribute("data-styles",""),l.insertBefore(w,p?p.nextSibling:l.firstChild)};export{u as a,v as b,y as c,r as d};
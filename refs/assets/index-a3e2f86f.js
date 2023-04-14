(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const Je="modulepreload",Ye=function(e,t){return new URL(e,t).href},Ce={},Qe=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Ye(o,r),o in Ce)return;Ce[o]=!0;const l=o.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const a=s[f];if(a.href===o&&(!l||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${i}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":Je,l||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),l)return new Promise((f,a)=>{c.addEventListener("load",f),c.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},S={context:void 0,registry:void 0};function J(e){S.context=e}const Ze=(e,t)=>e===t,Z=Symbol("solid-proxy"),ee={equals:Ze};let et=qe;const j=1,te=2,Ne={owned:null,cleanups:null,context:null,owner:null},ce={};var p=null;let ue=null,y=null,E=null,q=null,se=0;const[tt,mn]=v(!1);function Te(e,t){const n=y,r=p,s=e.length===0,o=s?Ne:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},l=s?e:()=>e(()=>L(()=>oe(o)));p=o,y=null;try{return R(l,!0)}finally{y=n,p=r}}function v(e,t){t=t?Object.assign({},ee,t):ee;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),Ue(n,s));return[Ie.bind(n),r]}function Le(e,t,n){const r=pe(e,t,!0,j);z(r)}function k(e,t,n){const r=pe(e,t,!1,j);z(r)}function P(e,t,n){n=n?Object.assign({},ee,n):ee;const r=pe(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,z(r),Ie.bind(r)}function nt(e,t,n){let r,s,o;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,s=e,o=t||{}):(r=e,s=t,o=n||{});let l=null,i=ce,u=null,c=!1,f="initialValue"in o,a=typeof r=="function"&&P(r);const g=new Set,[w,m]=(o.storage||v)(o.initialValue),[$,_]=v(void 0),[D,N]=v(void 0,{equals:!1}),[T,F]=v(f?"ready":"unresolved");if(S.context){u=`${S.context.id}${S.context.count++}`;let d;o.ssrLoadFrom==="initial"?i=o.initialValue:S.load&&(d=S.load(u))&&(i=d[0])}function I(d,h,A,O){return l===d&&(l=null,f=!0,(d===i||h===i)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(O,{value:h})),i=ce,le(h,A)),h}function le(d,h){R(()=>{h===void 0&&m(()=>d),F(h!==void 0?"errored":"ready"),_(h);for(const A of g.keys())A.decrement();g.clear()},!1)}function b(){const d=lt,h=w(),A=$();if(A!==void 0&&!l)throw A;return y&&!y.user&&d&&Le(()=>{D(),l&&(d.resolved||g.has(d)||(d.increment(),g.add(d)))}),h}function x(d=!0){if(d!==!1&&c)return;c=!1;const h=a?a():r;if(h==null||h===!1){I(l,L(w));return}const A=i!==ce?i:L(()=>s(h,{value:w(),refetching:d}));return typeof A!="object"||!(A&&"then"in A)?(I(l,A,void 0,h),A):(l=A,c=!0,queueMicrotask(()=>c=!1),R(()=>{F(f?"refreshing":"pending"),N()},!1),A.then(O=>I(A,O,void 0,h),O=>I(A,void 0,at(O),h)))}return Object.defineProperties(b,{state:{get:()=>T()},error:{get:()=>$()},loading:{get(){const d=T();return d==="pending"||d==="refreshing"}},latest:{get(){if(!f)return b();const d=$();if(d&&!l)throw d;return w()}}}),a?Le(()=>x(!1)):x(!1),[b,{refetch:x,mutate:m}]}function pn(e){return R(e,!1)}function L(e){if(y===null)return e();const t=y;y=null;try{return e()}finally{y=t}}function ke(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let c=0;c<e.length;c++)i[c]=e[c]()}else i=e();if(o){o=!1;return}const u=L(()=>t(i,s,l));return s=i,u}}function je(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function rt(){return p}function st(e,t){const n=p,r=y;p=e,y=null;try{return R(t,!0)}catch(s){we(s)}finally{p=n,y=r}}function ot(e){const t=y,n=p;return Promise.resolve().then(()=>{y=t,p=n;let r;return R(e,!1),y=p=null,r?r.done:void 0})}function it(){return[tt,ot]}function _e(e,t){const n=Symbol("context");return{id:n,Provider:ft(n),defaultValue:e}}function ye(e){let t;return(t=Me(p,e.id))!==void 0?t:e.defaultValue}function me(e){const t=P(e),n=P(()=>fe(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let lt;function Ie(){if(this.sources&&this.state)if(this.state===j)z(this);else{const e=E;E=null,R(()=>ne(this),!1),E=e}if(y){const e=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(e)):(y.sources=[this],y.sourceSlots=[e]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return this.value}function Ue(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&R(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],l=ue&&ue.running;l&&ue.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?E.push(o):q.push(o),o.observers&&De(o)),l||(o.state=j)}if(E.length>1e6)throw E=[],new Error},!1)),t}function z(e){if(!e.fn)return;oe(e);const t=p,n=y,r=se;y=p=e,ct(e,e.value,r),y=n,p=t}function ct(e,t,n){let r;try{r=e.fn(t)}catch(s){return e.pure&&(e.state=j,e.owned&&e.owned.forEach(oe),e.owned=null),e.updatedAt=n+1,we(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ue(e,r):e.value=r,e.updatedAt=n)}function pe(e,t,n,r=j,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};return p===null||p!==Ne&&(p.owned?p.owned.push(o):p.owned=[o]),o}function Be(e){if(e.state===0)return;if(e.state===te)return ne(e);if(e.suspense&&L(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<se);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===j)z(e);else if(e.state===te){const r=E;E=null,R(()=>ne(e,t[0]),!1),E=r}}function R(e,t){if(E)return e();let n=!1;t||(E=[]),q?n=!0:q=[],se++;try{const r=e();return ut(n),r}catch(r){n||(q=null),E=null,we(r)}}function ut(e){if(E&&(qe(E),E=null),e)return;const t=q;q=null,t.length&&R(()=>et(t),!1)}function qe(e){for(let t=0;t<e.length;t++)Be(e[t])}function ne(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===j?r!==t&&(!r.updatedAt||r.updatedAt<se)&&Be(r):s===te&&ne(r,t)}}}function De(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=te,n.pure?E.push(n):q.push(n),n.observers&&De(n))}}function oe(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();r<s.length&&(o.sourceSlots[l]=r,s[r]=o,n.observerSlots[r]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)oe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function at(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function we(e){throw e}function Me(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Me(e.owner,t):void 0}function fe(e){if(typeof e=="function"&&!e.length)return fe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=fe(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function ft(e,t){return function(r){let s;return k(()=>s=L(()=>(p.context={[e]:r.value},me(()=>r.children))),void 0),s}}function C(e,t){return L(()=>e(t||{}))}function Y(){return!0}const de={get(e,t,n){return t===Z?n:e.get(t)},has(e,t){return t===Z?!0:e.has(t)},set:Y,deleteProperty:Y,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Y,deleteProperty:Y}},ownKeys(e){return e.keys()}};function ae(e){return(e=typeof e=="function"?e():e)?e:{}}function be(...e){let t=!1;for(let r=0;r<e.length;r++){const s=e[r];t=t||!!s&&Z in s,e[r]=typeof s=="function"?(t=!0,P(s)):s}if(t)return new Proxy({get(r){for(let s=e.length-1;s>=0;s--){const o=ae(e[s])[r];if(o!==void 0)return o}},has(r){for(let s=e.length-1;s>=0;s--)if(r in ae(e[s]))return!0;return!1},keys(){const r=[];for(let s=0;s<e.length;s++)r.push(...Object.keys(ae(e[s])));return[...new Set(r)]}},de);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const s=Object.getOwnPropertyDescriptors(e[r]);for(const o in s)o in n||Object.defineProperty(n,o,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const i=(e[l]||{})[o];if(i!==void 0)return i}}})}return n}function dt(e,...t){const n=new Set(t.flat());if(Z in e){const s=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},de));return s.push(new Proxy({get(o){return n.has(o)?void 0:e[o]},has(o){return n.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!n.has(o))}},de)),s}const r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter(s=>!n.has(s))),t.map(s=>{const o={};for(let l=0;l<s.length;l++){const i=s[l];i in e&&Object.defineProperty(o,i,r[i]?r[i]:{get(){return e[i]},set(){return!0},enumerable:!0})}return o})}function ht(e){let t,n;const r=s=>{const o=S.context;if(o){const[i,u]=v();(n||(n=e())).then(c=>{J(o),u(()=>c.default),J()}),t=i}else if(!t){const[i]=nt(()=>(n||(n=e())).then(u=>u.default));t=i}let l;return P(()=>(l=t())&&L(()=>{if(!o)return l(s);const i=S.context;J(o);const u=l(s);return J(i),u}))};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}const gt=e=>`Stale read from <${e}>.`;function Ve(e){const t=e.keyed,n=P(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return P(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?L(()=>s(t?r:()=>{if(!L(n))throw gt("Show");return e.when})):s}return e.fallback},void 0,void 0)}const yt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],mt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...yt]),pt=new Set(["innerHTML","textContent","innerText","children"]),wt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),bt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function xt(e,t){const n=bt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const At=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Pt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function St(e,t,n){let r=n.length,s=t.length,o=r,l=0,i=0,u=t[s-1].nextSibling,c=null;for(;l<s||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const f=o<r?i?n[i-1].nextSibling:n[o-i]:u;for(;i<o;)e.insertBefore(n[i++],f)}else if(o===i)for(;l<s;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[s-1]){const f=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],f),t[s]=n[o]}else{if(!c){c=new Map;let a=i;for(;a<o;)c.set(n[a],a++)}const f=c.get(t[l]);if(f!=null)if(i<f&&f<o){let a=l,g=1,w;for(;++a<s&&a<o&&!((w=c.get(t[a]))==null||w!==f+g);)g++;if(g>f-i){const m=t[l];for(;i<f;)e.insertBefore(n[i++],m)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const Oe="_$DX_DELEGATE";function Et(e,t,n,r={}){let s;return Te(o=>{s=o,t===document?e():re(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function xe(e,t,n){let r;const s=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},o=t?()=>(r||(r=s())).cloneNode(!0):()=>L(()=>document.importNode(r||(r=s()),!0));return o.cloneNode=o,o}function Ct(e,t=window.document){const n=t[Oe]||(t[Oe]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,jt))}}function he(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Lt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function Ot(e,t){t==null?e.removeAttribute("class"):e.className=t}function vt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n)}function Rt(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let o,l;for(o=0,l=s.length;o<l;o++){const i=s[o];!i||i==="undefined"||t[i]||(ve(e,i,!1),delete n[i])}for(o=0,l=r.length;o<l;o++){const i=r[o],u=!!t[i];!i||i==="undefined"||n[i]===u||!u||(ve(e,i,!0),n[i]=u)}return n}function $t(e,t,n){if(!t)return n?he(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,o;for(o in n)t[o]==null&&r.removeProperty(o),delete n[o];for(o in t)s=t[o],s!==n[o]&&(r.setProperty(o,s),n[o]=s);return n}function Nt(e,t={},n,r){const s={};return r||k(()=>s.children=K(e,t.children,s.children)),k(()=>t.ref&&t.ref(e)),k(()=>Tt(e,t,n,!0,s,!0)),s}function re(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return K(e,t,r,n);k(s=>K(e,t(),s,n),r)}function Tt(e,t,n,r,s={},o=!1){t||(t={});for(const l in s)if(!(l in t)){if(l==="children")continue;s[l]=Re(e,l,null,s[l],n,o)}for(const l in t){if(l==="children"){r||K(e,t.children);continue}const i=t[l];s[l]=Re(e,l,i,s[l],n,o)}}function kt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ve(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,o=r.length;s<o;s++)e.classList.toggle(r[s],n)}function Re(e,t,n,r,s,o){let l,i,u,c,f;if(t==="style")return $t(e,n,r);if(t==="classList")return Rt(e,n,r);if(n===r)return r;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const a=t.slice(3);r&&e.removeEventListener(a,r),n&&e.addEventListener(a,n)}else if(t.slice(0,10)==="oncapture:"){const a=t.slice(10);r&&e.removeEventListener(a,r,!0),n&&e.addEventListener(a,n,!0)}else if(t.slice(0,2)==="on"){const a=t.slice(2).toLowerCase(),g=At.has(a);if(!g&&r){const w=Array.isArray(r)?r[0]:r;e.removeEventListener(a,w)}(g||n)&&(vt(e,a,n,g),g&&Ct([a]))}else if(t.slice(0,5)==="attr:")he(e,t.slice(5),n);else if((f=t.slice(0,5)==="prop:")||(u=pt.has(t))||!s&&((c=xt(t,e.tagName))||(i=mt.has(t)))||(l=e.nodeName.includes("-")))f&&(t=t.slice(5),i=!0),t==="class"||t==="className"?Ot(e,n):l&&!i&&!u?e[kt(t)]=n:e[c||t]=n;else{const a=s&&t.indexOf(":")>-1&&Pt[t.split(":")[0]];a?Lt(e,a,t,n):he(e,wt[t]||t,n)}return n}function jt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),S.registry&&!S.done&&(S.done=_$HY.done=!0);n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function K(e,t,n,r,s){if(S.context){!n&&(n=[...e.childNodes]);let i=[];for(let u=0;u<n.length;u++){const c=n[u];c.nodeType===8&&c.data.slice(0,2)==="!$"?c.remove():i.push(c)}n=i}for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(S.context)return n;if(o==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=M(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(S.context)return n;n=M(e,n,r)}else{if(o==="function")return k(()=>{let i=t();for(;typeof i=="function";)i=i();n=K(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],u=n&&Array.isArray(n);if(ge(i,t,n,s))return k(()=>n=K(e,i,n,r,!0)),()=>n;if(S.context){if(!i.length)return n;for(let c=0;c<i.length;c++)if(i[c].parentNode)return n=i}if(i.length===0){if(n=M(e,n,r),l)return n}else u?n.length===0?$e(e,i,r):St(e,n,i):(n&&M(e),$e(e,i));n=i}else if(t instanceof Node){if(S.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=M(e,n,r,t);M(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function ge(e,t,n,r){let s=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],u=n&&n[o];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))s=ge(e,i,u)||s;else if(typeof i=="function")if(r){for(;typeof i=="function";)i=i();s=ge(e,Array.isArray(i)?i:[i],Array.isArray(u)?u:[u])||s}else e.push(i),s=!0;else{const c=String(i);u&&u.nodeType===3?(u.data=c,e.push(u)):e.push(document.createTextNode(c))}}return s}function $e(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function M(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(s!==i){const u=i.parentNode===e;!o&&!l?u?e.replaceChild(s,i):e.insertBefore(s,n):u&&i.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const _t=!1;function It(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Ut([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function Bt(e){try{return document.querySelector(e)}catch{return null}}function qt(e,t){const n=Bt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Dt(e,t,n,r){let s=!1;const o=i=>typeof i=="string"?{value:i}:i,l=Ut(v(o(e()),{equals:(i,u)=>i.value===u.value}),void 0,i=>(!s&&t(i),i));return n&&je(n((i=e())=>{s=!0,l[1](o(i)),s=!1})),{signal:l,utils:r}}function Mt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:v({value:""})};return e}function Vt(){return Dt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),qt(window.location.hash.slice(1),n)},e=>It(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const Kt=/^(?:[a-z0-9]+:)?\/\//i,Ft=/^\/+|\/+$/g;function W(e,t=!1){const n=e.replace(Ft,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Q(e,t,n){if(Kt.test(t))return;const r=W(e),s=n&&W(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+W(t,!o)}function Ht(e,t){if(e==null)throw new Error(t);return e}function Ke(e,t){return W(e).replace(/\/*(\*.*)?$/g,"")+W(t)}function Wt(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function V(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function Xt(e,t){const[n,r]=e.split("/*",2),s=n.split("/").filter(Boolean),o=s.length;return l=>{const i=l.split("/").filter(Boolean),u=i.length-o;if(u<0||u>0&&r===void 0&&!t)return null;const c={path:o?"":"/",params:{}};for(let f=0;f<o;f++){const a=s[f],g=i[f];if(a[0]===":")c.params[a.slice(1)]=g;else if(a.localeCompare(g,void 0,{sensitivity:"base"})!==0)return null;c.path+=`/${g}`}return r&&(c.params[r]=u?i.slice(-u).join("/"):""),c}}function zt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Fe(e){const t=new Map,n=rt();return new Proxy({},{get(r,s){return t.has(s)||st(n,()=>t.set(s,P(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function He(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return He(r).reduce((o,l)=>[...o,...s.map(i=>i+l)],[])}const Gt=100,We=_e(),ie=_e(),Ae=()=>Ht(ye(We),"Make sure your app is wrapped in a <Router />");let X;const Pe=()=>X||ye(ie)||Ae().base,Jt=e=>{const t=Pe();return P(()=>t.resolvePath(e()))},Yt=e=>{const t=Ae();return P(()=>{const n=e();return n!==void 0?t.renderPath(n):n})};function Qt(e,t="",n){const{component:r,data:s,children:o}=e,l=!o||Array.isArray(o)&&!o.length,i={key:e,element:r?()=>C(r,{}):()=>{const{element:u}=e;return u===void 0&&n?C(n,{}):u},preload:e.component?r.preload:e.preload,data:s};return Xe(e.path).reduce((u,c)=>{for(const f of He(c)){const a=Ke(t,f),g=l?a:a.split("/*",1)[0];u.push({...i,originalPath:f,pattern:g,matcher:Xt(g,!l)})}return u},[])}function Zt(e,t=0){return{routes:e,score:zt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],l=o.matcher(n);if(!l)return null;r.unshift({...l,route:o})}return r}}}function Xe(e){return Array.isArray(e)?e:[e]}function ze(e,t="",n,r=[],s=[]){const o=Xe(e);for(let l=0,i=o.length;l<i;l++){const u=o[l];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const c=Qt(u,t,n);for(const f of c){if(r.push(f),u.children)ze(u.children,f.pattern,n,r,s);else{const a=Zt([...r],s.length);s.push(a)}r.pop()}}}return r.length?s:s.sort((l,i)=>i.score-l.score)}function en(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function tn(e,t){const n=new URL("http://sar"),r=P(u=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),u}},n,{equals:(u,c)=>u.href===c.href}),s=P(()=>V(r().pathname)),o=P(()=>V(r().search,!0)),l=P(()=>V(r().hash)),i=P(()=>"");return{get pathname(){return s()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return i()},query:Fe(ke(o,()=>Wt(r())))}}function nn(e,t="",n,r){const{signal:[s,o],utils:l={}}=Mt(e),i=l.parsePath||(b=>b),u=l.renderPath||(b=>b),c=Q("",t),f=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!s().value&&o({value:c,replace:!0,scroll:!1});const[a,g]=it(),[w,m]=v(s().value),[$,_]=v(s().state),D=tn(w,$),N=[],T={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(b){return Q(c,b)}};if(n)try{X=T,T.data=n({data:void 0,params:{},location:D,navigate:I(T)})}finally{X=void 0}function F(b,x,d){L(()=>{if(typeof x=="number"){x&&(l.go?l.go(x):console.warn("Router integration does not support relative routing"));return}const{replace:h,resolve:A,scroll:O,state:G}={replace:!1,resolve:!0,scroll:!0,...d},U=A?b.resolvePath(x):Q("",x);if(U===void 0)throw new Error(`Path '${x}' is not a routable path`);if(N.length>=Gt)throw new Error("Too many redirects");const B=w();if((U!==B||G!==$())&&!_t){const H=N.push({value:B,replace:h,scroll:O,state:$()});g(()=>{m(U),_(G)}).then(()=>{N.length===H&&le({value:U,state:G})})}})}function I(b){return b=b||ye(ie)||T,(x,d)=>F(b,x,d)}function le(b){const x=N[0];x&&((b.value!==x.value||b.state!==x.state)&&o({...b,replace:x.replace,scroll:x.scroll}),N.length=0)}k(()=>{const{value:b,state:x}=s();L(()=>{b!==w()&&g(()=>{m(b),_(x)})})});{let b=function(d){return d.namespaceURI==="http://www.w3.org/2000/svg"},x=function(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const h=d.composedPath().find(Ee=>Ee instanceof Node&&Ee.nodeName.toUpperCase()==="A");if(!h)return;const A=b(h),O=A?h.href.baseVal:h.href;if((A?h.target.baseVal:h.target)||!O&&!h.hasAttribute("state"))return;const U=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||U&&U.includes("external"))return;const B=A?new URL(O,document.baseURI):new URL(O),H=V(B.pathname);if(B.origin!==window.location.origin||c&&H&&!H.toLowerCase().startsWith(c.toLowerCase()))return;const Ge=i(H+V(B.search,!0)+V(B.hash)),Se=h.getAttribute("state");d.preventDefault(),F(T,Ge,{resolve:!1,replace:h.hasAttribute("replace"),scroll:!h.hasAttribute("noscroll"),state:Se&&JSON.parse(Se)})};document.addEventListener("click",x),je(()=>document.removeEventListener("click",x))}return{base:T,out:f,location:D,isRouting:a,renderPath:u,parsePath:i,navigatorFactory:I}}function rn(e,t,n,r){const{base:s,location:o,navigatorFactory:l}=e,{pattern:i,element:u,preload:c,data:f}=r().route,a=P(()=>r().path),g=Fe(()=>r().params);c&&c();const w={parent:t,pattern:i,get child(){return n()},path:a,params:g,data:t.data,outlet:u,resolvePath(m){return Q(s.path(),m,a())}};if(f)try{X=w,w.data=f({data:t.data,params:g,location:o,navigate:l(w)})}finally{X=void 0}return w}const sn=xe("<a>"),on=e=>{const{source:t,url:n,base:r,data:s,out:o}=e,l=t||Vt(),i=nn(l,r,s);return C(We.Provider,{value:i,get children(){return e.children}})},ln=e=>{const t=Ae(),n=Pe(),r=me(()=>e.children),s=P(()=>ze(r(),Ke(n.pattern,e.base||""),un)),o=P(()=>en(s(),t.location.pathname));t.out&&t.out.matches.push(o().map(({route:c,path:f,params:a})=>({originalPath:c.originalPath,pattern:c.pattern,path:f,params:a})));const l=[];let i;const u=P(ke(o,(c,f,a)=>{let g=f&&c.length===f.length;const w=[];for(let m=0,$=c.length;m<$;m++){const _=f&&f[m],D=c[m];a&&_&&D.route.key===_.route.key?w[m]=a[m]:(g=!1,l[m]&&l[m](),Te(N=>{l[m]=N,w[m]=rn(t,w[m-1]||n,()=>u()[m+1],()=>o()[m])}))}return l.splice(c.length).forEach(m=>m()),a&&g?a:(i=w[0],w)}));return C(Ve,{get when(){return u()&&i},children:c=>C(ie.Provider,{value:c,get children(){return c.outlet()}})})},cn=e=>{const t=me(()=>e.children);return be(e,{get children(){return t()}})},un=()=>{const e=Pe();return C(Ve,{get when(){return e.child},children:t=>C(ie.Provider,{value:t,get children(){return t.outlet()}})})};function an(e){const[,t]=dt(e,["children","to","href","state"]),n=Yt(()=>e.to);return(()=>{const r=sn();return Nt(r,be(t,{get href(){return n()||e.href},get state(){return JSON.stringify(e.state)}}),!1,!0),re(r,()=>e.children),r})()}function fn(e){const t=Jt(()=>e.href);return C(an,be(e,{get to(){return t()}}))}const dn=xe('<nav class="fixed left-2 top-2 flex space-x-4"><a class="text-yellow-400" href="/">reload'),hn=xe('<div class="box-border min-h-screen w-full space-y-4 bg-gray-800 p-24 text-white">'),gn=ht(()=>Qe(()=>import("./key-891915cc.js"),[],import.meta.url)),yn=()=>C(on,{get children(){return[(()=>{const e=dn();return e.firstChild,re(e,C(fn,{class:"text-yellow-400",href:"/key",children:"/key"}),null),e})(),(()=>{const e=hn();return re(e,C(ln,{get children(){return C(cn,{path:"/key",get element(){return C(gn,{})}})}})),e})()]}});Et(()=>C(yn,{}),document.getElementById("root"));export{v as a,Le as b,P as c,pn as d,it as e,C as f,Ct as g,re as i,ke as o,xe as t,L as u};
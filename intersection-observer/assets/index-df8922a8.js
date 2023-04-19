(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();const re=(e,n)=>e===n,$={equals:re};let Z=ne;const m=1,L=2,Y={owned:null,cleanups:null,context:null,owner:null};var p=null;let V=null,a=null,g=null,w=null,B=0;function C(e,n){const t=a,s=p,i=e.length===0,l=i?Y:{owned:null,cleanups:null,context:null,owner:n===void 0?s:n},r=i?e:()=>e(()=>y(()=>I(l)));p=l,a=null;try{return A(r,!0)}finally{a=t,p=s}}function D(e,n){n=n?Object.assign({},$,n):$;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.value)),te(t,i));return[ee.bind(t),s]}function _(e,n,t){const s=R(e,n,!1,m);x(s)}function ce(e,n,t){Z=ae;const s=R(e,n,!1,m);(!t||!t.render)&&(s.user=!0),w?w.push(s):x(s)}function z(e,n,t){t=t?Object.assign({},$,t):$;const s=R(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,x(s),ee.bind(s)}function y(e){if(a===null)return e();const n=a;a=null;try{return e()}finally{a=n}}function j(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function ee(){if(this.sources&&this.state)if(this.state===m)x(this);else{const e=g;g=null,A(()=>O(this),!1),g=e}if(a){const e=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(e)):(a.sources=[this],a.sourceSlots=[e]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function te(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&A(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=V&&V.running;r&&V.disposed.has(l),(r?!l.tState:!l.state)&&(l.pure?g.push(l):w.push(l),l.observers&&se(l)),r||(l.state=m)}if(g.length>1e6)throw g=[],new Error},!1)),n}function x(e){if(!e.fn)return;I(e);const n=p,t=a,s=B;a=p=e,fe(e,e.value,s),a=t,p=n}function fe(e,n,t){let s;try{s=e.fn(n)}catch(i){return e.pure&&(e.state=m,e.owned&&e.owned.forEach(I),e.owned=null),e.updatedAt=t+1,ie(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?te(e,s):e.value=s,e.updatedAt=t)}function R(e,n,t,s=m,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:p,context:null,pure:t};return p===null||p!==Y&&(p.owned?p.owned.push(l):p.owned=[l]),l}function N(e){if(e.state===0)return;if(e.state===L)return O(e);if(e.suspense&&y(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<B);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===m)x(e);else if(e.state===L){const s=g;g=null,A(()=>O(e,n[0]),!1),g=s}}function A(e,n){if(g)return e();let t=!1;n||(g=[]),w?t=!0:w=[],B++;try{const s=e();return ue(t),s}catch(s){t||(w=null),g=null,ie(s)}}function ue(e){if(g&&(ne(g),g=null),e)return;const n=w;w=null,n.length&&A(()=>Z(n),!1)}function ne(e){for(let n=0;n<e.length;n++)N(e[n])}function ae(e){let n,t=0;for(n=0;n<e.length;n++){const s=e[n];s.user?e[t++]=s:N(s)}for(n=0;n<t;n++)N(e[n])}function O(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const s=e.sources[t];if(s.sources){const i=s.state;i===m?s!==n&&(!s.updatedAt||s.updatedAt<B)&&N(s):i===L&&O(s,n)}}}function se(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=L,t.pure?g.push(t):w.push(t),t.observers&&se(t))}}function I(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),r=t.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,t.observerSlots[s]=r)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)I(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function ie(e){throw e}function M(e,n){return y(()=>e(n||{}))}function de(e,n,t){let s=t.length,i=n.length,l=s,r=0,o=0,f=n[i-1].nextSibling,c=null;for(;r<i||o<l;){if(n[r]===t[o]){r++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===r){const u=l<s?o?t[o-1].nextSibling:t[l-o]:f;for(;o<l;)e.insertBefore(t[o++],u)}else if(l===o)for(;r<i;)(!c||!c.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[l-1]&&t[o]===n[i-1]){const u=n[--i].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--l],u),n[i]=t[l]}else{if(!c){c=new Map;let d=o;for(;d<l;)c.set(t[d],d++)}const u=c.get(n[r]);if(u!=null)if(o<u&&u<l){let d=r,h=1,b;for(;++d<i&&d<l&&!((b=c.get(n[d]))==null||b!==u+h);)h++;if(h>u-o){const k=n[r];for(;o<u;)e.insertBefore(t[o++],k)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const H="_$DX_DELEGATE";function he(e,n,t,s={}){let i;return C(l=>{i=l,n===document?e():S(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function F(e,n,t){let s;const i=()=>{const r=document.createElement("template");return r.innerHTML=e,t?r.content.firstChild.firstChild:r.content.firstChild},l=n?()=>(s||(s=i())).cloneNode(!0):()=>y(()=>document.importNode(s||(s=i()),!0));return l.cloneNode=l,l}function pe(e,n=window.document){const t=n[H]||(n[H]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];t.has(l)||(t.add(l),n.addEventListener(l,we))}}function ge(e,n,t={}){const s=Object.keys(n||{}),i=Object.keys(t);let l,r;for(l=0,r=i.length;l<r;l++){const o=i[l];!o||o==="undefined"||n[o]||(W(e,o,!1),delete t[o])}for(l=0,r=s.length;l<r;l++){const o=s[l],f=!!n[o];!o||o==="undefined"||t[o]===f||!f||(W(e,o,!0),t[o]=f)}return t}function be(e,n,t){return y(()=>e(n,t))}function S(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return T(e,n,s,t);_(i=>T(e,n(),i,t),s)}function W(e,n,t){const s=n.trim().split(/\s+/);for(let i=0,l=s.length;i<l;i++)e.classList.toggle(s[i],t)}function we(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}});t;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function T(e,n,t,s,i){for(;typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=E(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n;else if(n==null||l==="boolean")t=E(e,t,s);else{if(l==="function")return _(()=>{let o=n();for(;typeof o=="function";)o=o();t=T(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],f=t&&Array.isArray(t);if(U(o,n,t,i))return _(()=>t=T(e,o,t,s,!0)),()=>t;if(o.length===0){if(t=E(e,t,s),r)return t}else f?t.length===0?Q(e,o,s):de(e,t,o):(t&&E(e),Q(e,o));t=o}else if(n instanceof Node){if(Array.isArray(t)){if(r)return t=E(e,t,s,n);E(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}else console.warn("Unrecognized value. Skipped inserting",n)}return t}function U(e,n,t,s){let i=!1;for(let l=0,r=n.length;l<r;l++){let o=n[l],f=t&&t[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=U(e,o,f)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=U(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const c=String(o);f&&f.nodeType===3?(f.data=c,e.push(f)):e.push(document.createTextNode(c))}}return i}function Q(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function E(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(i!==o){const f=o.parentNode===e;!l&&!r?f?e.replaceChild(i,o):e.insertBefore(i,t):f&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}var me=e=>(...n)=>{const t=e();return typeof t=="function"?t(...n):t};function ye(e,n,t={}){let s=[],i=[],l=0;j(()=>s.forEach(c=>c()));const r=c=>{if(c===0)return s.forEach(u=>u()),t.fallback?C(u=>(s=[u],i=[t.fallback()])):(s=[],i=[]);if(l===0){s[0]&&s[0]();for(let u=0;u<c;u++)i[u]=C(o.bind(void 0,u));return i}{const u=l-c;if(u>0){for(let d=l-1;d>=c;d--)s[d]();return i.splice(c,u),s.splice(c,u),i}}for(let u=l;u<c;u++)i[u]=C(o.bind(void 0,u));return i},o=(c,u)=>(s[c]=u,n(c)),f=z(()=>Math.floor(Math.max(e(),0)));return()=>{const c=f();return y(()=>{const u=r(c);return l=c,u})}}function J(e){return z(ye(()=>e.times,me(()=>e.children),"fallback"in e?{fallback:()=>e.fallback}:void 0))}var K=e=>typeof e=="function"&&!e.length?e():e;function ve(e,n,t){const s=new IntersectionObserver(n,t),i=c=>{s.observe(c)},l=c=>s.unobserve(c),r=()=>e.forEach(i),o=()=>s.disconnect(),f=()=>s.takeRecords().forEach(c=>l(c.target));return r(),j(o),{add:i,remove:l,start:r,stop:o,reset:f,instance:s}}function Ee(e,n){const t=new WeakMap,{add:s,remove:i}=ve([],(f,c)=>{f.forEach(u=>t.get(u.target)?.(u,c))},e);function l(f){i(f),t.delete(f)}function r(f,c){s(f),t.set(f,c)}const o=n?(f,c)=>{const u=K(n);return d=>c(u(d,{visible:y(f)}))}:(f,c)=>u=>c(u.isIntersecting);return f=>{const[c,u]=D(e?.initialValue??!1),d=o(c,u);let h;return f instanceof Element?r(f,d):ce(()=>{const b=f();b!==h&&(h&&l(h),b&&r(b,d),h=b)}),j(()=>h&&l(h)),c}}function Se(e,n){return e?n?"Inside":"Entering":n===!0?"Leaving":"Outside"}function xe(e){return()=>{let n;const t=K(e);return(s,i)=>{const{isIntersecting:l}=s,r=Se(l,n);return n=l,t(s,{...i,occurrence:r})}}}var le=(e=>(e.Top="Top",e.Bottom="Bottom",e.None="None",e))(le||{});function Ae(e,n,t){let s="None",i="None";return n?(e.top<n.top?i=t?"Bottom":"Top":e.top>n.top&&(i=t?"Top":"Bottom"),e.left>n.left?s=t?"Left":"Right":e.left<n.left&&(s=t?"Right":"Left"),{directionX:s,directionY:i}):{directionX:s,directionY:i}}function Ce(e){return()=>{let n;const t=K(e);return(s,i)=>{const{boundingClientRect:l}=s,r=Ae(l,n,s.isIntersecting);return n=l,t(s,{...i,...r})}}}const $e=F('<div class="center-child box-border h-screen w-full overflow-hidden bg-gray-900"><div class="flex flex-col items-center"><div class="flex"><button class="btn"></button><button class="btn">Add</button><button class="btn">Remove</button></div><div class="h-100 w-100 overflow-y-scroll rounded-lg bg-white shadow-lg">'),Le=F('<div class="flex">'),_e=F('<div class="w-90 center-child duration-1500 m-5 h-20 flex-shrink-0 rounded-lg text-white transition">Item_<!>_'),Ne=()=>{const e=Ee({},xe(Ce((l,{occurrence:r,directionY:o,directionX:f,visible:c})=>!l.isIntersecting&&o===le.Top&&c?!0:l.isIntersecting))),[n,t]=D(!0),[s,i]=D(20);return(()=>{const l=$e(),r=l.firstChild,o=r.firstChild,f=o.firstChild,c=f.nextSibling,u=c.nextSibling,d=o.nextSibling;return f.$$click=()=>t(h=>!h),S(f,()=>n()?"Disable":"Enable"),c.$$click=()=>i(h=>h+1),u.$$click=()=>i(h=>h-1),S(d,M(J,{get times(){return s()},children:h=>(()=>{const b=Le();return S(b,M(J,{get times(){return s()},children:k=>{let X;const q=e(()=>n()&&X);return(()=>{const v=_e(),oe=v.firstChild,G=oe.nextSibling;return G.nextSibling,be(P=>X=P,v),S(v,h,G),S(v,k,null),_(P=>ge(v,{"bg-slate-500 scale-x-75":!q(),"bg-blue-900":q()},P)),v})()}})),b})()})),l})()};he(()=>M(Ne,{}),document.getElementById("root"));pe(["click"]);

import{h,o as b,c as d,u as f,k as y,l as p,m as v,n as M,r as j,a as O}from"./index-382bdd5f.js";var w=(e,t)=>{let c;const n=()=>clearTimeout(c);return h()&&b(n),Object.assign((...s)=>{c!==void 0&&n(),c=setTimeout(()=>e(...s),t)},{clear:n})},T=(e,t)=>{let c=!1,n,r;const s=(...o)=>{r=o,!c&&(c=!0,n=setTimeout(()=>{e(...r),c=!1},t))},a=()=>{clearTimeout(n),c=!1};return h()&&b(a),Object.assign(s,{clear:a})},x=()=>{};function C(e){return e!==null&&(typeof e=="object"||typeof e=="function")}function S(e,...t){return typeof e=="function"?e(...t):e}var P=b,R=()=>{let e=[];const t=()=>e=[];return{push:(...c)=>e.push(...c),execute(c,n,r,s){e.forEach(a=>a(c,n,r,s)),t()},clear:t}};function k(e){const t={...e},c={...e},n=new Map,r=o=>{const i=n.get(o);if(i)return i[0]();const u=d(t[o],{internal:!0});return n.set(o,u),delete t[o],u[0]()},s=(o,i)=>{const u=n.get(o);if(u)return u[1](i);o in t&&(t[o]=S(i,[t[o]]))};for(const o in e)Object.defineProperty(c,o,{get:r.bind(void 0,o)});return[c,(o,i)=>{if(C(o)){const u=f(()=>Object.entries(S(o,c)));y(()=>{for(const[l,m]of u)s(l,()=>m)})}else s(o,i);return c}]}const z=(e,t)=>e.length>0?()=>e(f(t)):e;function A(e,t){const c=h(),n=new Set;let r=0,s=!1;return b(()=>{for(const a of n)a();n.clear(),s=!0}),a=>{if(s){f(a);return}r++,O(o=>{n.add(o);let i=!0;v(()=>{if(i)return i=!1,a();--r===0&&f(e),o(),n.delete(o)},t)},c)}}function L(e,t){let c=0;const n=e.map((r,s)=>p(()=>(c=s,r())));return p(()=>n.map(r=>r())[c],void 0,t)}function I(e,t,c){let n=()=>t;const[r,s]=d(t),a=p(z(e,()=>n()),t);return[n=L([r,a],c),o=>s(()=>typeof o=="function"?o(f(n)):o)]}function V(e,t,c,n,r){let s=!0;const[a,o]=d((()=>{let u;return v(M(e,(l,m)=>{s?(u=t(l,m,n),s=!1):i(l,m)})),u})(),r),i=w((u,l)=>{o(()=>t(u,l,a()))},c);return a}function q(e,t,c,n){let r=x;const s=A(()=>r()),[a,o]=d((()=>{let i;return s(()=>i=e(c)),i})(),n);return r=T(()=>s(()=>o(e)),t),a}function D(e,t={}){const[c,n]=d(t.value,t),r=[];return v(async()=>{const s=e(f(c));s instanceof Promise?(r.push(s),s.then(a=>r.includes(s)&&n(()=>a)),s.finally(()=>{const a=r.indexOf(s);r.splice(0,a+1)})):n(()=>s)},void 0),c}const g={equals:!1};function W(e,t,c){let n=!1,r=!0;const[s,a]=d(void 0,g),o=p(i=>n?e(i):(r=!s(),i),t,g);return()=>{n=!0,r&&(r=a());const i=o();return n=!1,i}}function Q(...e){const t=new Map,c=h(),n=typeof e[1]=="function"?e[0]:void 0,r=typeof e[1]=="function"?e[1]:e[0],s=typeof e[1]=="object"?e[1]:typeof e[2]=="object"?e[2]:{},a=o=>{if(t.has(o))return t.get(o)();const i=j(c,()=>W(u=>r(o,u),void 0));return(s.size===void 0||t.size<s.size)&&t.set(o,i),i()};return n?()=>a(n()):a}export{D as a,R as b,W as c,k as d,V as e,q as f,Q as g,I as h,P as t};

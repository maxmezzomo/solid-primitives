import{c as l,a as $,i as c,b as r,S as u,d,t as o,e as h}from"./index-93d111ba.js";import{c as _}from"./index-d773cba7.js";const g=o('<div class="p-4 bg-orange-200 text-gray-800 select-none">in component: </div>',2),b=o('<button class="btn">component: </button>',2),C=o('<button class="btn">effect: </button>',2),N=o('<button class="btn">increase</button>',2),w=o("<p>count: <!>;</p>",3),S=o("<p>calc ran times: </p>",2),E=o("<p>count in effect: </p>",2),[f,k]=l(0),[x,F]=l(0),[O,v]=l(0),i=$(()=>_(()=>(F(e=>e+1),f()))),y=()=>(()=>{const e=g.cloneNode(!0);return e.firstChild,c(e,i,null),e})(),z=()=>(h(()=>{console.log("in effect",i()),v(i())}),[]),T=()=>{const[e,p]=l(!1),[s,m]=l(!1);return[(()=>{const t=b.cloneNode(!0);return t.firstChild,t.$$click=()=>p(n=>!n),c(t,()=>e()?"ON":"OFF",null),t})(),(()=>{const t=C.cloneNode(!0);return t.firstChild,t.$$click=()=>m(n=>!n),c(t,()=>s()?"ON":"OFF",null),t})(),(()=>{const t=N.cloneNode(!0);return t.$$click=()=>k(n=>n+1),t})(),(()=>{const t=w.cloneNode(!0),n=t.firstChild,a=n.nextSibling;return a.nextSibling,c(t,f,a),t})(),(()=>{const t=S.cloneNode(!0);return t.firstChild,c(t,x,null),t})(),r(u,{get when(){return e()},get children(){return r(y,{})}}),r(u,{get when(){return s()},get children(){const t=E.cloneNode(!0);return t.firstChild,c(t,O,null),t}}),r(u,{get when(){return s()},get children(){return r(z,{})}})]};d(["click"]);export{T as default};
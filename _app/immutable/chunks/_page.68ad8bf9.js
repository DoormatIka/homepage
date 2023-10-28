import{j as pe,s as U,o as he,b as ge,u as ve,g as $e,d as ye,z,h as D,n as be}from"./scheduler.2863309a.js";import{S as se,i as re,n as Y,g as V,l as S,q as le,m as I,o as ae,d as m,u as oe,v as ne,w as ie,x as ce,e as h,s as E,t as ue,c as g,a as w,f as x,y as fe,b as de,k as f,h as _,j as _e,z as H,A as we,B as Se}from"./index.2a424306.js";import{d as je,w as W,b as N}from"./paths.2a38858b.js";function k(r,{delay:t=0,duration:l=400,easing:e=pe}={}){const s=+getComputedStyle(r).opacity;return{delay:t,duration:l,easing:e,css:a=>`opacity: ${a*s}`}}const ke=W(900),Ie=W(900);je([ke,Ie],([r,t])=>r<t);const Te=(r,t)=>{const l=typeof globalThis.window<"u";let e=t;const{set:s,...a}=W(t,()=>{if(l){i();const o=n=>{n.key===r&&i()};return window.addEventListener("storage",o),()=>window.removeEventListener("storage",o)}else return()=>{}}),c=o=>{e=o,s(o);try{localStorage.setItem(r,JSON.stringify(o))}catch(n){console.error(`the \`${r}\` store's new value \`${o}\` could not be persisted to localStorage because of ${n}`)}},i=()=>{let o=null;try{o=localStorage.getItem(r)}catch(n){console.error(`the \`${r}\` store's value could not be restored from localStorage because of ${n}`)}if(o===null)c(t);else try{const n=JSON.parse(o);s(n),e=n}catch(n){console.error(`localStorage's value for \`${r}\` (\`${o}\`) could not be parsed as JSON because of ${n}`)}};return{...a,set:c,update:o=>{c(o(e))}}};const Me=typeof window<"u"&&globalThis.localStorage&&"theme"in localStorage?localStorage.getItem("theme"):"dark";Te("theme",Me);function Z(r){let t;const l=r[2].default,e=ge(l,r,r[1],null);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,a){e&&e.m(s,a),t=!0},p(s,a){e&&e.p&&(!t||a&2)&&ve(e,l,s,s[1],t?ye(l,s[1],a,null):$e(s[1]),null)},i(s){t||(S(e,s),t=!0)},o(s){I(e,s),t=!1},d(s){e&&e.d(s)}}}function Ee(r){let t,l,e=r[0]&&Z(r);return{c(){e&&e.c(),t=Y()},l(s){e&&e.l(s),t=Y()},m(s,a){e&&e.m(s,a),V(s,t,a),l=!0},p(s,[a]){s[0]?e?(e.p(s,a),a&1&&S(e,1)):(e=Z(s),e.c(),S(e,1),e.m(t.parentNode,t)):e&&(le(),I(e,1,1,()=>{e=null}),ae())},i(s){l||(S(e),l=!0)},o(s){I(e),l=!1},d(s){s&&m(t),e&&e.d(s)}}}function xe(r,t,l){let{$$slots:e={},$$scope:s}=t,a=!1;return he(()=>{l(0,a=!0)}),r.$$set=c=>{"$$scope"in c&&l(1,s=c.$$scope)},[a,s,e]}class me extends se{constructor(t){super(),re(this,t,xe,Ee,U,{})}}function ee(r){let t,l,e,s,a,c;return{c(){t=h("div"),l=h("p"),e=ue(r[0]),this.h()},l(i){t=g(i,"DIV",{class:!0});var p=w(t);l=g(p,"P",{});var o=w(l);e=de(o,r[0]),o.forEach(m),p.forEach(m),this.h()},h(){f(t,"class","absolute bottom-0 w-60 left-1/2 -translate-x-1/2")},m(i,p){V(i,t,p),_(t,l),_(l,e),c=!0},p(i,p){(!c||p&1)&&_e(e,i[0])},i(i){c||(i&&D(()=>{c&&(a&&a.end(1),s=H(t,k,{duration:300,delay:100}),s.start())}),c=!0)},o(i){s&&s.invalidate(),i&&(a=Se(t,k,{duration:100})),c=!1},d(i){i&&m(t),i&&a&&a.end()}}}function De(r){let t,l=r[0],e,s,a='<p class="text-sm half-opacity svelte-143isj7">- Allice</p>',c,i,p,o=ee(r);return{c(){t=h("button"),o.c(),e=E(),s=h("div"),s.innerHTML=a,this.h()},l(n){t=g(n,"BUTTON",{class:!0});var u=w(t);o.l(u),u.forEach(m),e=x(n),s=g(n,"DIV",{"data-svelte-h":!0}),fe(s)!=="svelte-jh7m6x"&&(s.innerHTML=a),this.h()},h(){f(t,"class","relative")},m(n,u){V(n,t,u),o.m(t,null),V(n,e,u),V(n,s,u),i||(p=we(t,"click",r[3]),i=!0)},p(n,u){u&1&&U(l,l=n[0])?(le(),I(o,1,1,be),ae(),o=ee(n),o.c(),S(o,1),o.m(t,null)):o.p(n,u)},i(n){S(o),n&&(c||D(()=>{c=H(s,k,{duration:300,delay:1100}),c.start()}))},o(n){I(o)},d(n){n&&(m(t),m(e),m(s)),o.d(n),i=!1,p()}}}function He(r){let t,l,e,s,a,c,i,p,o,n,u,K,O,A,y,j,Q=`<img class="icon hover:-translate-y-3 transition-transform ease-in duration-300 svelte-143isj7" src="${N}/images/tenshihat.png" alt="Tenshi Hinanawi&#39;s Hat"/>`,G,T,q,J,M,b,P,L;return b=new me({props:{$$slots:{default:[De]},$$scope:{ctx:r}}}),{c(){t=h("div"),l=h("div"),e=h("img"),c=E(),i=h("img"),n=E(),u=h("img"),A=E(),y=h("div"),j=h("a"),j.innerHTML=Q,G=E(),T=h("h1"),q=ue(r[1]),J=E(),M=h("div"),oe(b.$$.fragment),this.h()},l(d){t=g(d,"DIV",{class:!0});var v=w(t);l=g(v,"DIV",{class:!0});var $=w(l);e=g($,"IMG",{class:!0,src:!0,alt:!0}),c=x($),i=g($,"IMG",{class:!0,src:!0,alt:!0}),n=x($),u=g($,"IMG",{class:!0,src:!0,alt:!0}),$.forEach(m),A=x(v),y=g(v,"DIV",{class:!0});var C=w(y);j=g(C,"A",{href:!0,"data-svelte-h":!0}),fe(j)!=="svelte-q1ad61"&&(j.innerHTML=Q),G=x(C),T=g(C,"H1",{class:!0});var R=w(T);q=de(R,r[1]),R.forEach(m),C.forEach(m),J=x(v),M=g(v,"DIV",{class:!0});var X=w(M);ne(b.$$.fragment,X),X.forEach(m),v.forEach(m),this.h()},h(){f(e,"class","h-1/3 w-auto object-cover alice-filter svelte-143isj7"),z(e.src,s=N+"/images/comfort.jpg")||f(e,"src",s),f(e,"alt",""),f(i,"class","h-1/3 w-auto object-cover alice-filter svelte-143isj7"),z(i.src,p=N+"/images/shrineinwinter.jpg")||f(i,"src",p),f(i,"alt",""),f(u,"class","h-1/3 w-auto object-cover alice-filter svelte-143isj7"),z(u.src,K=N+"/images/cherryblossoms.jpg")||f(u,"src",K),f(u,"alt",""),f(l,"class","flex flex-col justify-center dyn-border text-center p-5 my-5 gap-3 mx-2 w-96 svelte-143isj7"),f(j,"href","https://github.com/DoormatIka"),f(T,"class","svelte-143isj7"),f(y,"class","flex flex-col justify-center text-center py-5 px-3"),f(M,"class","flex flex-col justify-center text-center dyn-border w-72 my-5 mx-2 p-2 svelte-143isj7"),f(t,"class","flex flex-row my-10 gap-10 h-full justify-center dark:text-neutral-200")},m(d,v){V(d,t,v),_(t,l),_(l,e),_(l,c),_(l,i),_(l,n),_(l,u),_(t,A),_(t,y),_(y,j),_(y,G),_(y,T),_(T,q),_(t,J),_(t,M),ie(b,M,null),L=!0},p(d,v){(!L||v&2)&&_e(q,d[1]);const $={};v&17&&($.$$scope={dirty:v,ctx:d}),b.$set($)},i(d){L||(d&&(a||D(()=>{a=H(e,k,{delay:300}),a.start()})),d&&(o||D(()=>{o=H(i,k,{delay:500}),o.start()})),d&&(O||D(()=>{O=H(u,k,{delay:700}),O.start()})),S(b.$$.fragment,d),d&&(P||D(()=>{P=H(t,k,{delay:100}),P.start()})),L=!0)},o(d){I(b.$$.fragment,d),L=!1},d(d){d&&m(t),ce(b)}}}function Ve(r){let t,l;return t=new me({props:{$$slots:{default:[He]},$$scope:{ctx:r}}}),{c(){oe(t.$$.fragment)},l(e){ne(t.$$.fragment,e)},m(e,s){ie(t,e,s),l=!0},p(e,[s]){const a={};s&19&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){l||(S(t.$$.fragment,e),l=!0)},o(e){I(t.$$.fragment,e),l=!1},d(e){ce(t,e)}}}function B(r,t){return Math.floor(Math.random()*(t-r)+r)}function te(){const r=new Date;return`${F(r.getHours())}:${F(r.getMinutes())}:${F(r.getSeconds())}`}function F(r){return r<10?`0${r}`:r}function Le(r,t,l){const e=["Have you taken your meds yet?","I hope you a very nice day.","Do not drink alcohol!"];let s=e[B(0,e.length)],a=te();return setInterval(()=>{l(1,a=te())},1e3),setInterval(()=>{l(0,s=e[B(0,e.length)])},5e3),[s,a,e,()=>{l(0,s=e[B(0,e.length)])}]}class Oe extends se{constructor(t){super(),re(this,t,Le,Ve,U,{})}}export{Oe as P};

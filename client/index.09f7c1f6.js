import{S as e,i as t,s,e as n,t as a,a as o,c as r,b as c,d as l,f as m,g as i,h,j as p,k as d,l as u,n as f,o as g,m as y,q as $,p as v,r as w,u as E,v as T,w as b}from"./client.72070952.js";import{C as A}from"./card_list.22416d29.js";function M(e){let t,s,g,y,$,v,w,E,T;return{c(){t=n("div"),s=n("h1"),g=a("Shiryel's Blog"),y=o(),$=n("p"),v=a(e[0]),w=o(),E=n("span"),T=a("This is just a place where I put some reminders for myself, but maybe you find something useful"),this.h()},l(n){t=r(n,"DIV",{class:!0});var a=c(t);s=r(a,"H1",{class:!0});var o=c(s);g=l(o,"Shiryel's Blog"),o.forEach(m),y=i(a),$=r(a,"P",{class:!0});var h=c($);v=l(h,e[0]),h.forEach(m),w=i(a),E=r(a,"SPAN",{class:!0});var p=c(E);T=l(p,"This is just a place where I put some reminders for myself, but maybe you find something useful"),p.forEach(m),a.forEach(m),this.h()},h(){h(s,"class","svelte-7c6v9z"),h($,"class","info_text svelte-7c6v9z"),h(E,"class","svelte-7c6v9z"),h(t,"class","svelte-7c6v9z")},m(e,n){p(e,t,n),d(t,s),d(s,g),d(t,y),d(t,$),d($,v),d(t,w),d(t,E),d(E,T)},p(e,[t]){1&t&&u(v,e[0])},i:f,o:f,d(e){e&&m(t)}}}function _(e,t,s){let{info_text:n=""}=t;return g((()=>{const e=setInterval((()=>{welcome=welcome_list[Math.floor(Math.random()*welcome_list.length)]}),3e3);return()=>{clearInterval(e)}})),e.$$set=e=>{"info_text"in e&&s(0,n=e.info_text)},[n]}class x extends e{constructor(e){super(),t(this,e,_,M,s,{info_text:0})}}function S(e){let t,s,a,l,u,f,g,M,_,S,j,I,B,z,k,P,q,C;return B=new x({}),k=new A({props:{name:"Featured",cards:e[0]}}),q=new A({props:{name:"Last Posts",cards:e[0]}}),{c(){t=n("meta"),s=n("meta"),a=n("meta"),l=n("meta"),u=n("meta"),f=n("meta"),g=n("meta"),M=n("meta"),_=n("meta"),S=n("meta"),j=o(),I=n("section"),y(B.$$.fragment),z=o(),y(k.$$.fragment),P=o(),y(q.$$.fragment),this.h()},l(e){const n=$('[data-svelte="svelte-5pab1h"]',document.head);t=r(n,"META",{name:!0,content:!0}),s=r(n,"META",{name:!0,content:!0}),a=r(n,"META",{property:!0,content:!0}),l=r(n,"META",{property:!0,content:!0}),u=r(n,"META",{property:!0,content:!0}),f=r(n,"META",{property:!0,content:!0}),g=r(n,"META",{property:!0,content:!0}),M=r(n,"META",{name:!0,content:!0}),_=r(n,"META",{name:!0,content:!0}),S=r(n,"META",{name:!0,content:!0}),n.forEach(m),j=i(e),I=r(e,"SECTION",{class:!0});var o=c(I);v(B.$$.fragment,o),z=i(o),v(k.$$.fragment,o),P=i(o),v(q.$$.fragment,o),o.forEach(m),this.h()},h(){document.title="Shiryel's Blog - The tech space of the fennec",h(t,"name","description"),h(t,"content","Shiryel blog with tips on how to work with not so trivial things\n    and others"),h(s,"name","keywords"),h(s,"content","shiryel, blog, elixir, aws, svelte"),h(a,"property","og:title"),h(a,"content","Shiryel's Blog"),h(l,"property","og:description"),h(l,"content","A Fennec Tech Blog, a place where I put some reminders for myself"),h(u,"property","og:type"),h(u,"content","website"),h(f,"property","og:url"),h(f,"content","https://blog.shiryel.com/"),h(g,"property","og:image"),h(g,"content","https://blog.shiryel.com/images/logo-512.png"),h(M,"name","twitter:card"),h(M,"content","summary"),h(_,"name","twitter:site"),h(_,"content","@shiryel_"),h(S,"name","twitter:creator"),h(S,"content","@shiryel_"),h(I,"class","svelte-1pe86ne")},m(e,n){d(document.head,t),d(document.head,s),d(document.head,a),d(document.head,l),d(document.head,u),d(document.head,f),d(document.head,g),d(document.head,M),d(document.head,_),d(document.head,S),p(e,j,n),p(e,I,n),w(B,I,null),d(I,z),w(k,I,null),d(I,P),w(q,I,null),C=!0},p(e,[t]){const s={};1&t&&(s.cards=e[0]),k.$set(s);const n={};1&t&&(n.cards=e[0]),q.$set(n)},i(e){C||(E(B.$$.fragment,e),E(k.$$.fragment,e),E(q.$$.fragment,e),C=!0)},o(e){T(B.$$.fragment,e),T(k.$$.fragment,e),T(q.$$.fragment,e),C=!1},d(e){m(t),m(s),m(a),m(l),m(u),m(f),m(g),m(M),m(_),m(S),e&&m(j),e&&m(I),b(B),b(k),b(q)}}}function j({params:e,query:t}){return this.fetch("blog.json").then((e=>e.json())).then((e=>({posts:e})))}function I(e,t,s){let{posts:n}=t;return e.$$set=e=>{"posts"in e&&s(0,n=e.posts)},[n]}class B extends e{constructor(e){super(),t(this,e,I,S,s,{posts:0})}}export{B as default,j as preload};
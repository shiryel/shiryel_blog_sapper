function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function l(t,e,n,r,s,o,a){const i=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(i){const s=c(e,n,r,a);t.p(s,i)}}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function v(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return Array.from(t.childNodes)}function w(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function _(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function E(t){return _(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let A;function j(t){A=t}function R(){if(!A)throw new Error("Function called outside component initialization");return A}function P(t){R().$$.on_mount.push(t)}const L=[],k=[],C=[],I=[],D=Promise.resolve();let O=!1;function N(t){C.push(t)}let q=!1;const U=new Set;function V(){if(!q){q=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];j(e),T(e.$$)}for(L.length=0;k.length;)k.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];U.has(e)||(U.add(e),e())}C.length=0}while(L.length);for(;I.length;)I.pop()();O=!1,q=!1,U.clear()}}function T(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const z=new Set;let H;function M(){H={r:0,c:[],p:H}}function B(){H.r||s(H.c),H=H.p}function F(t,e){t&&t.i&&(z.delete(t),t.i(e))}function G(t,e,n,r){if(t&&t.o){if(z.has(t))return;z.add(t),H.c.push(()=>{z.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function J(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(r[t]=1);for(const t in i)s[t]||(n[t]=i[t],s[t]=1);t[o]=i}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function K(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function W(t,e){t&&t.l(e)}function X(t,e,r){const{fragment:a,on_mount:i,on_destroy:c,after_update:l}=t.$$;a&&a.m(e,r),N(()=>{const e=i.map(n).filter(o);c?c.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(N)}function Q(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(L.push(t),O||(O=!0,D.then(V)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,o,a,i,c,l=[-1]){const u=A;j(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let d=!1;if(h.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&i(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),d&&Z(e,t)),n}):[],h.update(),d=!0,s(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=b(n.target);h.fragment&&h.fragment.l(t),t.forEach(p)}else h.fragment&&h.fragment.c();n.intro&&F(e.$$.fragment),X(e,n.target,n.anchor),V()}j(u)}class et{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const nt=[];function rt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!nt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),nt.push(n,e)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return s.push(c),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(c);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const st={};function ot(e){let n,r,s,o="See on Github";return{c(){n=d("footer"),r=d("a"),s=m(o),this.h()},l(t){n=w(t,"FOOTER",{});var e=b(n);r=w(e,"A",{href:!0,rel:!0,target:!0,class:!0});var a=b(r);s=_(a,o),a.forEach(p),e.forEach(p),this.h()},h(){y(r,"href","https://github.com/shiryel/shiryel_blog"),y(r,"rel","noopener"),y(r,"target","_blank"),y(r,"class","svelte-1spf4py")},m(t,e){f(t,n,e),u(n,r),u(r,s)},p:t,i:t,o:t,d(t){t&&p(n)}}}class at extends et{constructor(t){super(),tt(this,t,null,ot,a,{})}}function it(e){let n,r,s,o,a,i,c,l,h,$,v,x,S,A;return{c(){n=d("div"),r=d("a"),s=m("Shiryel's Den"),o=g(),a=d("div"),i=d("a"),c=m("Follow @shiryel_"),l=g(),h=d("div"),$=d("a"),v=m("Tweets by shiryel_"),x=g(),S=d("script"),this.h()},l(t){n=w(t,"DIV",{class:!0});var e=b(n);r=w(e,"A",{href:!0,rel:!0,target:!0,class:!0});var u=b(r);s=_(u,"Shiryel's Den"),u.forEach(p),e.forEach(p),o=E(t),a=w(t,"DIV",{class:!0});var f=b(a);i=w(f,"A",{href:!0,rel:!0,class:!0,"data-show-count":!0,"data-size":!0});var d=b(i);c=_(d,"Follow @shiryel_"),d.forEach(p),f.forEach(p),l=E(t),h=w(t,"DIV",{class:!0});var m=b(h);$=w(m,"A",{class:!0,href:!0,rel:!0,"data-width":!0,"data-height":!0,"data-chrome":!0,"data-dnt":!0});var g=b($);v=_(g,"Tweets by shiryel_"),g.forEach(p),x=E(m),S=w(m,"SCRIPT",{src:!0}),b(S).forEach(p),m.forEach(p),this.h()},h(){y(r,"href","https://www.shiryel.com/"),y(r,"rel","noopener"),y(r,"target","_blank"),y(r,"class","svelte-1ey4nwp"),y(n,"class","left svelte-1ey4nwp"),y(i,"href","https://twitter.com/shiryel_?ref_src=twsrc%5Etfw"),y(i,"rel","noopener"),y(i,"class","twitter-follow-button svelte-1ey4nwp"),y(i,"data-show-count","false"),y(i,"data-size","large"),y(a,"class","right svelte-1ey4nwp"),y($,"class","twitter-timeline svelte-1ey4nwp"),y($,"href","https://twitter.com/shiryel_?ref_src=twsrc%5Etfw"),y($,"rel","noopener"),y($,"data-width","300"),y($,"data-height","90vh"),y($,"data-chrome","noheader nofooter noborders transparent"),y($,"data-dnt","true"),S.src!==(A="https://platform.twitter.com/widgets.js")&&y(S,"src","https://platform.twitter.com/widgets.js"),y(h,"class","social svelte-1ey4nwp")},m(t,e){f(t,n,e),u(n,r),u(r,s),f(t,o,e),f(t,a,e),u(a,i),u(i,c),f(t,l,e),f(t,h,e),u(h,$),u($,v),u(h,x),u(h,S)},p:t,i:t,o:t,d(t){t&&p(n),t&&p(o),t&&p(a),t&&p(l),t&&p(h)}}}class ct extends et{constructor(t){super(),tt(this,t,null,it,a,{})}}function lt(t){let e,n,r;const s=t[10].default,o=i(s,t,t[9],null);return{c(){e=d("div"),o&&o.c(),this.h()},l(t){e=w(t,"DIV",{style:!0});var n=b(e);o&&o.l(n),n.forEach(p),this.h()},h(){y(e,"style",n="animation: "+t[1]+"; "+t[3])},m(t,n){f(t,e,n),o&&o.m(e,null),r=!0},p(t,a){o&&o.p&&512&a&&l(o,s,t,t[9],a,null,null),(!r||10&a&&n!==(n="animation: "+t[1]+"; "+t[3]))&&y(e,"style",n)},i(t){r||(F(o,t),r=!0)},o(t){G(o,t),r=!1},d(t){t&&p(e),o&&o.d(t)}}}function ut(t){let e,n,r;const s=t[10].default,o=i(s,t,t[9],null);return{c(){e=d("div"),o&&o.c(),this.h()},l(t){e=w(t,"DIV",{style:!0});var n=b(e);o&&o.l(n),n.forEach(p),this.h()},h(){y(e,"style",n="animation: "+t[0]+"; "+t[3])},m(t,n){f(t,e,n),o&&o.m(e,null),r=!0},p(t,a){o&&o.p&&512&a&&l(o,s,t,t[9],a,null,null),(!r||9&a&&n!==(n="animation: "+t[0]+"; "+t[3]))&&y(e,"style",n)},i(t){r||(F(o,t),r=!0)},o(t){G(o,t),r=!1},d(t){t&&p(e),o&&o.d(t)}}}function ft(t){let e,n,r,s;const o=[ut,lt],a=[];function i(t,e){return t[4]?0:1}return n=i(t),r=a[n]=o[n](t),{c(){e=d("div"),r.c(),this.h()},l(t){e=w(t,"DIV",{id:!0,style:!0});var n=b(e);r.l(n),n.forEach(p),this.h()},h(){y(e,"id",t[5]),y(e,"style",t[2])},m(t,r){f(t,e,r),a[n].m(e,null),s=!0},p(t,[c]){let l=n;n=i(t),n===l?a[n].p(t,c):(M(),G(a[l],1,1,()=>{a[l]=null}),B(),r=a[n],r||(r=a[n]=o[n](t),r.c()),F(r,1),r.m(e,null)),(!s||4&c)&&y(e,"style",t[2])},i(t){s||(F(r),s=!0)},o(t){G(r),s=!1},d(t){t&&p(e),a[n].d()}}}function pt(t,e,n){let{animation:r="none"}=e,{animation_out:s="none; opacity: 0"}=e,{once:o=!1}=e,{top:a=0}=e,{bottom:i=0}=e,{css_observer:c=""}=e,{css_animation:l=""}=e,u=!0;const f=`__saos-${Math.random()}__`;function p(t){const e=t.getBoundingClientRect();return n(4,u=e.top+a<window.innerHeight&&e.bottom-i>0),u&&o&&window.removeEventListener("scroll",verify),window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)}P(()=>{const t=document.getElementById(f);return IntersectionObserver?function(t){const e=new IntersectionObserver(r=>{n(4,u=r[0].isIntersecting),u&&o&&e.unobserve(t)},{rootMargin:`${-i}px 0px ${-a}px 0px`});return e.observe(t),()=>e.unobserve(t)}(t):p(t)});let{$$slots:h={},$$scope:d}=e;return t.$$set=t=>{"animation"in t&&n(0,r=t.animation),"animation_out"in t&&n(1,s=t.animation_out),"once"in t&&n(6,o=t.once),"top"in t&&n(7,a=t.top),"bottom"in t&&n(8,i=t.bottom),"css_observer"in t&&n(2,c=t.css_observer),"css_animation"in t&&n(3,l=t.css_animation),"$$scope"in t&&n(9,d=t.$$scope)},[r,s,c,l,u,f,o,a,i,d,h]}class ht extends et{constructor(t){super(),tt(this,t,pt,ft,a,{animation:0,animation_out:1,once:6,top:7,bottom:8,css_observer:2,css_animation:3})}}function dt(t){let e,n;return{c(){e=d("img"),this.h()},l(t){e=w(t,"IMG",{class:!0,alt:!0,src:!0}),this.h()},h(){y(e,"class","left svelte-fg83id"),y(e,"alt","a fennec saying bounjour, part 1"),e.src!==(n="images/bounjour-1.png")&&y(e,"src","images/bounjour-1.png")},m(t,n){f(t,e,n)},d(t){t&&p(e)}}}function mt(t){let e,n;return{c(){e=d("img"),this.h()},l(t){e=w(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){y(e,"alt","a fennec saying bounjour, part 2"),e.src!==(n="images/bounjour-2.png")&&y(e,"src","images/bounjour-2.png"),y(e,"class","svelte-fg83id")},m(t,n){f(t,e,n)},d(t){t&&p(e)}}}function gt(t){let e,n,r,s,o;return n=new ht({props:{animation:"from-top 5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both",css_observer:"z-index: 10; justify-self: end;",once:"true",$$slots:{default:[dt]},$$scope:{ctx:t}}}),s=new ht({props:{animation:"from-top 5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both",css_observer:"z-index: 10;",once:"true",$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){e=d("div"),Y(n.$$.fragment),r=g(),Y(s.$$.fragment),this.h()},l(t){e=w(t,"DIV",{class:!0});var o=b(e);W(n.$$.fragment,o),r=E(o),W(s.$$.fragment,o),o.forEach(p),this.h()},h(){y(e,"class","svelte-fg83id")},m(t,a){f(t,e,a),X(n,e,null),u(e,r),X(s,e,null),o=!0},p(t,[e]){const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o)},i(t){o||(F(n.$$.fragment,t),F(s.$$.fragment,t),o=!0)},o(t){G(n.$$.fragment,t),G(s.$$.fragment,t),o=!1},d(t){t&&p(e),Q(n),Q(s)}}}class $t extends et{constructor(t){super(),tt(this,t,null,gt,a,{})}}function vt(t){let e,n,r,s,o,a,c,h,$,v,x,S,A,j,R,P,L,k,C,I;o=new $t({}),c=new ct({}),$=new at({});const D=t[1].default,O=i(D,t,t[0],null);return{c(){e=d("div"),n=d("a"),r=m("sitemap"),s=g(),Y(o.$$.fragment),a=g(),Y(c.$$.fragment),h=g(),Y($.$$.fragment),v=g(),x=d("img"),A=g(),j=d("main"),R=d("aside"),P=g(),L=d("div"),O&&O.c(),k=g(),C=d("aside"),this.h()},l(t){e=w(t,"DIV",{class:!0});var i=b(e);n=w(i,"A",{href:!0});var l=b(n);r=_(l,"sitemap"),l.forEach(p),i.forEach(p),s=E(t),W(o.$$.fragment,t),a=E(t),W(c.$$.fragment,t),h=E(t),W($.$$.fragment,t),v=E(t),x=w(t,"IMG",{src:!0,alt:!0,class:!0}),A=E(t),j=w(t,"MAIN",{class:!0});var u=b(j);R=w(u,"ASIDE",{class:!0}),b(R).forEach(p),P=E(u),L=w(u,"DIV",{class:!0});var f=b(L);O&&O.l(f),f.forEach(p),k=E(u),C=w(u,"ASIDE",{class:!0}),b(C).forEach(p),u.forEach(p),this.h()},h(){y(n,"href","sitemap.xml"),y(e,"class","sitemap svelte-1eiuix0"),x.src!==(S="images/background.jpg")&&y(x,"src","images/background.jpg"),y(x,"alt","A mountain background"),y(x,"class","background-1 svelte-1eiuix0"),y(R,"class","svelte-1eiuix0"),y(L,"class","background-2 svelte-1eiuix0"),y(C,"class","svelte-1eiuix0"),y(j,"class","svelte-1eiuix0")},m(t,i){f(t,e,i),u(e,n),u(n,r),f(t,s,i),X(o,t,i),f(t,a,i),X(c,t,i),f(t,h,i),X($,t,i),f(t,v,i),f(t,x,i),f(t,A,i),f(t,j,i),u(j,R),u(j,P),u(j,L),O&&O.m(L,null),u(j,k),u(j,C),I=!0},p(t,[e]){O&&O.p&&1&e&&l(O,D,t,t[0],e,null,null)},i(t){I||(F(o.$$.fragment,t),F(c.$$.fragment,t),F($.$$.fragment,t),F(O,t),I=!0)},o(t){G(o.$$.fragment,t),G(c.$$.fragment,t),G($.$$.fragment,t),G(O,t),I=!1},d(t){t&&p(e),t&&p(s),Q(o,t),t&&p(a),Q(c,t),t&&p(h),Q($,t),t&&p(v),t&&p(x),t&&p(A),t&&p(j),O&&O.d(t)}}}function yt(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,r]}class bt extends et{constructor(t){super(),tt(this,t,yt,vt,a,{})}}function wt(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=m(r)},l(t){e=w(t,"PRE",{});var s=b(e);n=_(s,r),s.forEach(p)},m(t,r){f(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&p(e)}}}function _t(e){let n,r,s,o,a,i,c,l,h,v=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&wt(e);return{c(){r=g(),s=d("h1"),o=m(e[0]),a=g(),i=d("p"),c=m(v),l=g(),A&&A.c(),h=$(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(p),r=E(t),s=w(t,"H1",{class:!0});var n=b(s);o=_(n,e[0]),n.forEach(p),a=E(t),i=w(t,"P",{class:!0});var u=b(i);c=_(u,v),u.forEach(p),l=E(t),A&&A.l(t),h=$(),this.h()},h(){y(s,"class","svelte-8od9u6"),y(i,"class","svelte-8od9u6")},m(t,e){f(t,r,e),f(t,s,e),u(s,o),f(t,a,e),f(t,i,e),u(i,c),f(t,l,e),A&&A.m(t,e),f(t,h,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&x(o,t[0]),2&e&&v!==(v=t[1].message+"")&&x(c,v),t[2]&&t[1].stack?A?A.p(t,e):(A=wt(t),A.c(),A.m(h.parentNode,h)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&p(r),t&&p(s),t&&p(a),t&&p(i),t&&p(l),A&&A.d(t),t&&p(h)}}}function Et(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class xt extends et{constructor(t){super(),tt(this,t,Et,_t,a,{status:0,error:1})}}function St(t){let n,r,s;const o=[{segment:t[2][1]},t[4].props];var a=t[4].component;function i(t){let n={$$slots:{default:[Rt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i(t))),{c(){n&&Y(n.$$.fragment),r=$()},l(t){n&&W(n.$$.fragment,t),r=$()},m(t,e){n&&X(n,t,e),f(t,r,e),s=!0},p(t,e){const s=20&e?J(o,[4&e&&{segment:t[2][1]},16&e&&K(t[4].props)]):{};if(288&e&&(s.$$scope={dirty:e,ctx:t}),a!==(a=t[4].component)){if(n){M();const t=n;G(t.$$.fragment,1,0,()=>{Q(t,1)}),B()}a?(n=new a(i(t)),Y(n.$$.fragment),F(n.$$.fragment,1),X(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(t){s||(n&&F(n.$$.fragment,t),s=!0)},o(t){n&&G(n.$$.fragment,t),s=!1},d(t){t&&p(r),n&&Q(n,t)}}}function At(t){let e,n;return e=new xt({props:{error:t[0],status:t[1]}}),{c(){Y(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function jt(t){let n,r,s;const o=[t[5].props];var a=t[5].component;function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i())),{c(){n&&Y(n.$$.fragment),r=$()},l(t){n&&W(n.$$.fragment,t),r=$()},m(t,e){n&&X(n,t,e),f(t,r,e),s=!0},p(t,e){const s=32&e?J(o,[K(t[5].props)]):{};if(a!==(a=t[5].component)){if(n){M();const t=n;G(t.$$.fragment,1,0,()=>{Q(t,1)}),B()}a?(n=new a(i()),Y(n.$$.fragment),F(n.$$.fragment,1),X(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(t){s||(n&&F(n.$$.fragment,t),s=!0)},o(t){n&&G(n.$$.fragment,t),s=!1},d(t){t&&p(r),n&&Q(n,t)}}}function Rt(t){let e,n,r=t[5]&&jt(t);return{c(){r&&r.c(),e=$()},l(t){r&&r.l(t),e=$()},m(t,s){r&&r.m(t,s),f(t,e,s),n=!0},p(t,n){t[5]?r?(r.p(t,n),32&n&&F(r,1)):(r=jt(t),r.c(),F(r,1),r.m(e.parentNode,e)):r&&(M(),G(r,1,1,()=>{r=null}),B())},i(t){n||(F(r),n=!0)},o(t){G(r),n=!1},d(t){r&&r.d(t),t&&p(e)}}}function Pt(t){let e,n,r,s;const o=[At,St],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){a[e].m(t,n),f(t,r,n),s=!0},p(t,s){let c=e;e=i(t),e===c?a[e].p(t,s):(M(),G(a[c],1,1,()=>{a[c]=null}),B(),n=a[e],n||(n=a[e]=o[e](t),n.c()),F(n,1),n.m(r.parentNode,r))},i(t){s||(F(n),s=!0)},o(t){G(n),s=!1},d(t){a[e].d(t),t&&p(r)}}}function Lt(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Pt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new bt({props:o}),{c(){Y(n.$$.fragment)},l(t){W(n.$$.fragment,t)},m(t,e){X(n,t,e),r=!0},p(t,[e]){const r=12&e?J(s,[4&e&&{segment:t[2][0]},8&e&&K(t[3].props)]):{};311&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(F(n.$$.fragment,t),r=!0)},o(t){G(n.$$.fragment,t),r=!1},d(t){Q(n,t)}}}function kt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{level2:l=null}=e,{notify:u}=e;var f,p,h;return f=u,R().$$.after_update.push(f),p=st,h=r,R().$$.context.set(p,h),t.$$set=t=>{"stores"in t&&n(6,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"level2"in t&&n(5,l=t.level2),"notify"in t&&n(7,u=t.notify)},[s,o,a,i,c,l,r,u]}class Ct extends et{constructor(t){super(),tt(this,t,kt,Lt,a,{stores:6,error:0,status:1,segments:2,level0:3,level1:4,level2:5,notify:7})}}const It=[/^\/sitemap\.xml$/,/^\/blog\.json$/],Dt=[{js:()=>import("./index.5b675ef8.js"),css:["index.5b675ef8.css","client.4494866b.css","card_list.5dae2bd3.css"]},{js:()=>import("./_layout.af1c2213.js"),css:["_layout.af1c2213.css","client.4494866b.css","card_list.5dae2bd3.css"]},{js:()=>import("./how-to-push-a-static-website-to-aws-using-github-actions.af5f3081.js"),css:["client.4494866b.css"]},{js:()=>import("./how-to-use-only-one-certificate-with-certbot-and-nginx.47e99dee.js"),css:["client.4494866b.css"]},{js:()=>import("./how-to-add-svelte-on-elixir-phoenix-framework.cd2aa288.js"),css:["client.4494866b.css"]},{js:()=>import("./testing-phoenix-channels-on-browser-console.1ee84788.js"),css:["client.4494866b.css"]}],Ot=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/post\/how-to-push-a-static-website-to-aws-using-github-actions\/?$/,parts:[{i:1},{i:2}]},{pattern:/^\/post\/how-to-use-only-one-certificate-with-certbot-and-nginx\/?$/,parts:[{i:1},{i:3}]},{pattern:/^\/post\/how-to-add-svelte-on-elixir-phoenix-framework\/?$/,parts:[{i:1},{i:4}]},{pattern:/^\/post\/testing-phoenix-channels-on-browser-console\/?$/,parts:[{i:1},{i:5}]}];const Nt="undefined"!=typeof __SAPPER__&&__SAPPER__;let qt,Ut,Vt,Tt=!1,zt=[],Ht="{}";const Mt={page:function(t){const e=rt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:rt(null),session:rt(Nt&&Nt.session)};let Bt,Ft;Mt.session.subscribe(async t=>{if(Bt=t,!Tt)return;Ft=!0;const e=Zt(new URL(location.href)),n=Ut={},{redirect:r,props:s,branch:o}=await re(e);n===Ut&&await ne(r,o,s,e.page)});let Gt,Jt=null;let Kt,Yt=1;const Wt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Xt={};function Qt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Zt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Nt.baseUrl))return null;let e=t.pathname.slice(Nt.baseUrl.length);if(""===e&&(e="/"),!It.some(t=>t.test(e)))for(let n=0;n<Ot.length;n+=1){const r=Ot[n],s=r.pattern.exec(e);if(s){const n=Qt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:i}}}}function te(){return{x:pageXOffset,y:pageYOffset}}async function ee(t,e,n,r){if(e)Kt=e;else{const t=te();Xt[Kt]=t,e=Kt=++Yt,Xt[Kt]=n?t:{x:0,y:0}}Kt=e,qt&&Mt.preloading.set(!0);const s=Jt&&Jt.href===t.href?Jt.promise:re(t);Jt=null;const o=Ut={},{redirect:a,props:i,branch:c}=await s;if(o===Ut&&(await ne(a,c,i,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Xt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Xt[Kt]=t,t&&scrollTo(t.x,t.y)}}async function ne(t,e,n,r){if(t)return function(t,e={noscroll:!1,replaceState:!1}){const n=Zt(new URL(t,document.baseURI));return n?(Wt[e.replaceState?"replaceState":"pushState"]({id:Kt},"",t),ee(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});Mt.page.set(r),Mt.preloading.set(!1),qt?qt.$set(n):(n.stores={page:{subscribe:Mt.page.subscribe},preloading:{subscribe:Mt.preloading.subscribe},session:Mt.session},n.level0={props:await Vt},n.notify=Mt.page.notify,qt=new Ct({target:Gt,props:n,hydrate:!0})),zt=e,Ht=JSON.stringify(r.query),Tt=!0,Ft=!1}async function re(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Vt){const t=()=>{};Vt=Nt.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Bt)}let i,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=await Promise.all(e.parts.map(async(e,i)=>{const f=r[i];if(function(t,e,n,r){if(r!==Ht)return!0;const s=zt[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,f,l,s)&&(u=!0),o.segments[c]=r[i+1],!e)return{segment:f};const p=c++;if(!Ft&&!u&&zt[i]&&zt[i].part===e.i)return zt[i];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(se);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Dt[e.i]);let m;return m=Tt||!Nt.preloaded[i+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Bt):{}:Nt.preloaded[i+1],o["level"+p]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:s,props:o,branch:i}}function se(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function oe(t){const e=Zt(new URL(t,document.baseURI));if(e)return Jt&&t===Jt.href||function(t,e){Jt={href:t,promise:e}}(t,re(e)),Jt.promise}let ae;function ie(t){clearTimeout(ae),ae=setTimeout(()=>{ce(t)},20)}function ce(t){const e=ue(t.target);e&&"prefetch"===e.rel&&oe(e.href)}function le(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ue(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Zt(s);if(o){ee(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),Wt.pushState({id:Kt},"",s.href)}}function ue(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function fe(t){if(Xt[Kt]=te(),t.state){const e=Zt(new URL(location.href));e?ee(e,t.state.id):location.href=location.href}else Yt=Yt+1,function(t){Kt=t}(Yt),Wt.replaceState({id:Kt},"",location.href)}var pe;pe={target:document.querySelector("#sapper")},"scrollRestoration"in Wt&&(Wt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Wt.scrollRestoration="auto"}),addEventListener("load",()=>{Wt.scrollRestoration="manual"}),function(t){Gt=t}(pe.target),addEventListener("click",le),addEventListener("popstate",fe),addEventListener("touchstart",ce),addEventListener("mousemove",ie),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Wt.replaceState({id:Yt},"",e);const n=new URL(location.href);if(Nt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:i}=Nt;Vt||(Vt=o&&o[0]),ne(null,[],{error:i,status:a,session:s,level0:{props:Vt},level1:{props:{status:a,error:i},component:xt},segments:o},{host:e,path:n,query:Qt(r),params:{}})}();const r=Zt(n);return r?ee(r,Yt,!0,t):void 0});export{B as A,i as B,v as C,l as D,s as E,k as F,et as S,g as a,b,w as c,_ as d,d as e,p as f,E as g,y as h,tt as i,f as j,u as k,x as l,Y as m,t as n,P as o,W as p,S as q,X as r,a as s,m as t,F as u,G as v,Q as w,ht as x,h as y,M as z};

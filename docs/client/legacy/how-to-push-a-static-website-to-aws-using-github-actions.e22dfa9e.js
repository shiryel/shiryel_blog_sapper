import{S as n,i as s,s as a,e as t,f as e,t as p,w as o,g as c,k as u,l,h as i,j as r,m as k,o as h,n as y,r as m}from"./client.73147225.js";function d(n){let s,a,d,f,g,E,w,S,v,P,A,M,b,H,W,_,T,x,j,C,I,L,N,R,$,F,K,D,q,O,Y,z,B,G,J,Q,U,V,X,Z,nn,sn,an,tn,en,pn,on,cn,un,ln,rn,kn,hn,yn,mn,dn,fn,gn,En,wn,Sn,vn,Pn,An,Mn,bn,Hn,Wn,_n,Tn,xn,jn,Cn,In,Ln,Nn,Rn,$n,Fn,Kn;return{c(){s=t("meta"),a=t("meta"),d=t("meta"),f=t("meta"),g=e(),E=t("h1"),w=p("How to push a static website to AWS using github actions"),S=e(),v=t("p"),P=p("This is my personal default template for npm projects:"),A=e(),M=t("pre"),b=e(),H=t("p"),W=p("So lets see what hapens here"),_=e(),T=t("h2"),x=p("First, the scope"),j=e(),C=t("pre"),I=e(),L=t("p"),N=p("This says to run this script when a push is made on the master branch"),R=e(),$=t("h2"),F=p("Then the machine pre-config"),K=e(),D=t("pre"),q=e(),O=t("p"),Y=p("This says to run a countainer on ubuntu (latest version), get the code with checkout, and setup a node version 14"),z=e(),B=t("h2"),G=p("NPM need to make the NPM things"),J=e(),Q=t("pre"),U=e(),V=t("p"),X=p("Yes"),Z=e(),nn=t("h2"),sn=p("AWS time, first the PEM"),an=e(),tn=t("p"),en=p("With the PEM on hands, you add it on your github secrets (keep in mind that this aproach is for very small projects, you may want another aproach)\nAnd create a PEM file on your machine"),pn=e(),on=t("pre"),cn=e(),un=t("h2"),ln=p("Then I delete the current static files on AWS if it exists"),rn=e(),kn=t("p"),hn=p("In my case I like to put the SSH connection (that who you get for connecting on the AWS with your PEM) as a secret (the AWS_SSH)"),yn=e(),mn=t("pre"),dn=e(),fn=t("p"),gn=p("And yes, make the path modifications for your own files"),En=e(),wn=t("h2"),Sn=p("Finally I send the files to the server"),vn=e(),Pn=t("pre"),An=e(),Mn=t("p"),bn=p("Modify the "),Hn=t("code"),Wn=p("__sapper__/export"),_n=p(" and "),Tn=t("code"),xn=p("/www/shiryel_blog"),jn=p(" for your needs :)"),Cn=e(),In=t("h2"),Ln=p("And even if it fails… remove the PEM"),Nn=e(),Rn=t("pre"),$n=e(),Fn=t("p"),Kn=p("That is all folks, have a grat day :)"),this.h()},l(n){const t=o('[data-svelte="svelte-jrtd9a"]',document.head);s=c(t,"META",{name:!0,content:!0}),a=c(t,"META",{name:!0,content:!0}),d=c(t,"META",{property:!0,content:!0}),f=c(t,"META",{property:!0,content:!0}),t.forEach(u),g=l(n),E=c(n,"H1",{itemprop:!0});var e=i(E);w=r(e,"How to push a static website to AWS using github actions"),e.forEach(u),S=l(n),v=c(n,"P",{});var p=i(v);P=r(p,"This is my personal default template for npm projects:"),p.forEach(u),A=l(n),M=c(n,"PRE",{class:!0}),i(M).forEach(u),b=l(n),H=c(n,"P",{});var k=i(H);W=r(k,"So lets see what hapens here"),k.forEach(u),_=l(n),T=c(n,"H2",{});var h=i(T);x=r(h,"First, the scope"),h.forEach(u),j=l(n),C=c(n,"PRE",{class:!0}),i(C).forEach(u),I=l(n),L=c(n,"P",{});var y=i(L);N=r(y,"This says to run this script when a push is made on the master branch"),y.forEach(u),R=l(n),$=c(n,"H2",{});var m=i($);F=r(m,"Then the machine pre-config"),m.forEach(u),K=l(n),D=c(n,"PRE",{class:!0}),i(D).forEach(u),q=l(n),O=c(n,"P",{});var Dn=i(O);Y=r(Dn,"This says to run a countainer on ubuntu (latest version), get the code with checkout, and setup a node version 14"),Dn.forEach(u),z=l(n),B=c(n,"H2",{});var qn=i(B);G=r(qn,"NPM need to make the NPM things"),qn.forEach(u),J=l(n),Q=c(n,"PRE",{class:!0}),i(Q).forEach(u),U=l(n),V=c(n,"P",{});var On=i(V);X=r(On,"Yes"),On.forEach(u),Z=l(n),nn=c(n,"H2",{});var Yn=i(nn);sn=r(Yn,"AWS time, first the PEM"),Yn.forEach(u),an=l(n),tn=c(n,"P",{});var zn=i(tn);en=r(zn,"With the PEM on hands, you add it on your github secrets (keep in mind that this aproach is for very small projects, you may want another aproach)\nAnd create a PEM file on your machine"),zn.forEach(u),pn=l(n),on=c(n,"PRE",{class:!0}),i(on).forEach(u),cn=l(n),un=c(n,"H2",{});var Bn=i(un);ln=r(Bn,"Then I delete the current static files on AWS if it exists"),Bn.forEach(u),rn=l(n),kn=c(n,"P",{});var Gn=i(kn);hn=r(Gn,"In my case I like to put the SSH connection (that who you get for connecting on the AWS with your PEM) as a secret (the AWS_SSH)"),Gn.forEach(u),yn=l(n),mn=c(n,"PRE",{class:!0}),i(mn).forEach(u),dn=l(n),fn=c(n,"P",{});var Jn=i(fn);gn=r(Jn,"And yes, make the path modifications for your own files"),Jn.forEach(u),En=l(n),wn=c(n,"H2",{});var Qn=i(wn);Sn=r(Qn,"Finally I send the files to the server"),Qn.forEach(u),vn=l(n),Pn=c(n,"PRE",{class:!0}),i(Pn).forEach(u),An=l(n),Mn=c(n,"P",{});var Un=i(Mn);bn=r(Un,"Modify the "),Hn=c(Un,"CODE",{});var Vn=i(Hn);Wn=r(Vn,"__sapper__/export"),Vn.forEach(u),_n=r(Un," and "),Tn=c(Un,"CODE",{});var Xn=i(Tn);xn=r(Xn,"/www/shiryel_blog"),Xn.forEach(u),jn=r(Un," for your needs :)"),Un.forEach(u),Cn=l(n),In=c(n,"H2",{});var Zn=i(In);Ln=r(Zn,"And even if it fails… remove the PEM"),Zn.forEach(u),Nn=l(n),Rn=c(n,"PRE",{class:!0}),i(Rn).forEach(u),$n=l(n),Fn=c(n,"P",{});var ns=i(Fn);Kn=r(ns,"That is all folks, have a grat day :)"),ns.forEach(u),this.h()},h(){document.title="How to push a static website to AWS using github actions",k(s,"name","description"),k(s,"content","A blog post as a reminder on how to work with static websites on AWS using github actions"),k(a,"name","keywords"),k(a,"content","aws, github actions, static website"),k(d,"property","og:title"),k(d,"content","Push a static website to AWS using github actions"),k(f,"property","og:description"),k(f,"content","A reminder on how to push a static website to AWS using github actions with the minimum of enfort"),k(E,"itemprop","name"),k(M,"class","language-yml"),k(C,"class","language-yml"),k(D,"class","language-yml"),k(Q,"class","language-yml"),k(on,"class","language-yml"),k(mn,"class","language-yml"),k(Pn,"class","language-yml"),k(Rn,"class","language-yml")},m(n,t){h(document.head,s),h(document.head,a),h(document.head,d),h(document.head,f),y(n,g,t),y(n,E,t),h(E,w),y(n,S,t),y(n,v,t),h(v,P),y(n,A,t),y(n,M,t),M.innerHTML='<code class="language-yml"><span class="token key atrule">name</span><span class="token punctuation">:</span> Push to AWS <span class="token punctuation">[</span>CD<span class="token punctuation">]</span>\n\n<span class="token key atrule">on</span><span class="token punctuation">:</span>\n  <span class="token key atrule">push</span><span class="token punctuation">:</span>\n    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span>\n\n<span class="token key atrule">jobs</span><span class="token punctuation">:</span>\n  <span class="token key atrule">build</span><span class="token punctuation">:</span>\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest\n\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2\n    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1\n      <span class="token key atrule">with</span><span class="token punctuation">:</span>\n        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> 14.x \n    \n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NPM <span class="token punctuation">-</span> install\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm i\n    \n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NPM <span class="token punctuation">-</span> export\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run export\n\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> AWS <span class="token punctuation">-</span> Set PEM\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n        echo "$&#123;&#123; secrets.AWS_PEM &#125;&#125;" > temp.pem\n        chmod 400 temp.pem</span>\n\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> AWS <span class="token punctuation">-</span> Exclude last files if exists\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n           ssh -q -o "StrictHostKeyChecking no" -i temp.pem $&#123;&#123; secrets.AWS_SSH &#125;&#125; \\\n             rm -r /www/shiryel_blog/*</span>\n\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> AWS <span class="token punctuation">-</span> Send new files to server\n      <span class="token key atrule">if</span><span class="token punctuation">:</span> success() <span class="token punctuation">|</span><span class="token punctuation">|</span> failure()\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n        scp -o "StrictHostKeyChecking no" -i temp.pem  -r \\\n          __sapper__/export/* $&#123;&#123; secrets.AWS_SSH &#125;&#125;:/www/shiryel_blog/</span>\n\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> AWS <span class="token punctuation">-</span> Clear PEM\n      <span class="token key atrule">if</span><span class="token punctuation">:</span> always()\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> rm <span class="token punctuation">-</span>f temp.pem</code>',y(n,b,t),y(n,H,t),h(H,W),y(n,_,t),y(n,T,t),h(T,x),y(n,j,t),y(n,C,t),C.innerHTML='<code class="language-yml"><span class="token key atrule">on</span><span class="token punctuation">:</span>\n  <span class="token key atrule">push</span><span class="token punctuation">:</span>\n    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span></code>',y(n,I,t),y(n,L,t),h(L,N),y(n,R,t),y(n,$,t),h($,F),y(n,K,t),y(n,D,t),D.innerHTML='<code class="language-yml"><span class="token key atrule">jobs</span><span class="token punctuation">:</span>\n  <span class="token key atrule">build</span><span class="token punctuation">:</span>\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest\n\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2\n    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1\n      <span class="token key atrule">with</span><span class="token punctuation">:</span>\n        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> 14.x </code>',y(n,q,t),y(n,O,t),h(O,Y),y(n,z,t),y(n,B,t),h(B,G),y(n,J,t),y(n,Q,t),Q.innerHTML='<code class="language-yml">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NPM <span class="token punctuation">-</span> install\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm i\n    \n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NPM <span class="token punctuation">-</span> export\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run export</code>',y(n,U,t),y(n,V,t),h(V,X),y(n,Z,t),y(n,nn,t),h(nn,sn),y(n,an,t),y(n,tn,t),h(tn,en),y(n,pn,t),y(n,on,t),on.innerHTML='<code class="language-yml">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> AWS <span class="token punctuation">-</span> Set PEM\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n        echo "$&#123;&#123; secrets.AWS_PEM &#125;&#125;" > temp.pem\n        chmod 400 temp.pem</span></code>',y(n,cn,t),y(n,un,t),h(un,ln),y(n,rn,t),y(n,kn,t),h(kn,hn),y(n,yn,t),y(n,mn,t),mn.innerHTML='<code class="language-yml">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> AWS <span class="token punctuation">-</span> Exclude last files if exists\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n           ssh -q -o "StrictHostKeyChecking no" -i temp.pem $&#123;&#123; secrets.AWS_SSH &#125;&#125; \\\n             rm -r /www/shiryel_blog/*</span></code>',y(n,dn,t),y(n,fn,t),h(fn,gn),y(n,En,t),y(n,wn,t),h(wn,Sn),y(n,vn,t),y(n,Pn,t),Pn.innerHTML='<code class="language-yml">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> AWS <span class="token punctuation">-</span> Send new files to server\n      <span class="token key atrule">if</span><span class="token punctuation">:</span> success() <span class="token punctuation">|</span><span class="token punctuation">|</span> failure()\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n        scp -o "StrictHostKeyChecking no" -i temp.pem  -r \\\n          __sapper__/export/* $&#123;&#123; secrets.AWS_SSH &#125;&#125;:/www/shiryel_blog/</span></code>',y(n,An,t),y(n,Mn,t),h(Mn,bn),h(Mn,Hn),h(Hn,Wn),h(Mn,_n),h(Mn,Tn),h(Tn,xn),h(Mn,jn),y(n,Cn,t),y(n,In,t),h(In,Ln),y(n,Nn,t),y(n,Rn,t),Rn.innerHTML='<code class="language-yml">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> AWS <span class="token punctuation">-</span> Clear PEM\n      <span class="token key atrule">if</span><span class="token punctuation">:</span> always()\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> rm <span class="token punctuation">-</span>f temp.pem</code>',y(n,$n,t),y(n,Fn,t),h(Fn,Kn)},p:m,i:m,o:m,d(n){u(s),u(a),u(d),u(f),n&&u(g),n&&u(E),n&&u(S),n&&u(v),n&&u(A),n&&u(M),n&&u(b),n&&u(H),n&&u(_),n&&u(T),n&&u(j),n&&u(C),n&&u(I),n&&u(L),n&&u(R),n&&u($),n&&u(K),n&&u(D),n&&u(q),n&&u(O),n&&u(z),n&&u(B),n&&u(J),n&&u(Q),n&&u(U),n&&u(V),n&&u(Z),n&&u(nn),n&&u(an),n&&u(tn),n&&u(pn),n&&u(on),n&&u(cn),n&&u(un),n&&u(rn),n&&u(kn),n&&u(yn),n&&u(mn),n&&u(dn),n&&u(fn),n&&u(En),n&&u(wn),n&&u(vn),n&&u(Pn),n&&u(An),n&&u(Mn),n&&u(Cn),n&&u(In),n&&u(Nn),n&&u(Rn),n&&u($n),n&&u(Fn)}}}export default class extends n{constructor(n){super(),s(this,n,null,d,a,{})}}

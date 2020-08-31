import{S as n,i as s,s as a,e as t,f as p,t as e,w as o,g as c,k as r,l,h as k,j as u,m as i,o as d,n as w,r as y}from"./client.73147225.js";function m(n){let s,a,m,h,b,_,g,v,f,x,$,E,T,H,F,A,P,R,M,W,C,O,S;return{c(){s=t("meta"),a=t("meta"),m=t("meta"),h=t("meta"),b=p(),_=t("h1"),g=e("How to use only one certificate with certbot and nginx"),v=p(),f=t("p"),x=e("This is more a reminder for myself but anyway"),$=p(),E=t("p"),T=e("First, you need to generate the certificate with the certbot on the AWS, you need to put both the www and non-www url, otherwise the redirect will be invalid or the website will display a invalid certificate"),H=p(),F=t("pre"),A=p(),P=t("p"),R=e("Then, you need a Nginx like this:"),M=p(),W=t("pre"),C=p(),O=t("p"),S=e("Yes, good luck with the nginx file, I alread have a bad time learning all this shit :)"),this.h()},l(n){const t=o('[data-svelte="svelte-96n0k5"]',document.head);s=c(t,"META",{name:!0,content:!0}),a=c(t,"META",{name:!0,content:!0}),m=c(t,"META",{property:!0,content:!0}),h=c(t,"META",{property:!0,content:!0}),t.forEach(r),b=l(n),_=c(n,"H1",{itemprop:!0});var p=k(_);g=u(p,"How to use only one certificate with certbot and nginx"),p.forEach(r),v=l(n),f=c(n,"P",{});var e=k(f);x=u(e,"This is more a reminder for myself but anyway"),e.forEach(r),$=l(n),E=c(n,"P",{});var i=k(E);T=u(i,"First, you need to generate the certificate with the certbot on the AWS, you need to put both the www and non-www url, otherwise the redirect will be invalid or the website will display a invalid certificate"),i.forEach(r),H=l(n),F=c(n,"PRE",{class:!0}),k(F).forEach(r),A=l(n),P=c(n,"P",{});var d=k(P);R=u(d,"Then, you need a Nginx like this:"),d.forEach(r),M=l(n),W=c(n,"PRE",{class:!0}),k(W).forEach(r),C=l(n),O=c(n,"P",{});var w=k(O);S=u(w,"Yes, good luck with the nginx file, I alread have a bad time learning all this shit :)"),w.forEach(r),this.h()},h(){document.title="How to use only one certificate with certbot and nginx",i(s,"name","description"),i(s,"content","A blog post as a reminder on how to use only one certificate with certbot and nginx"),i(a,"name","keywords"),i(a,"content","aws, certbot, nginx"),i(m,"property","og:title"),i(m,"content","Use only one certificate with certbot and nginx"),i(h,"property","og:description"),i(h,"content","A reminder on how to use only one certificate with certbot and nginx with the minimum of enfort"),i(_,"itemprop","name"),i(F,"class","language-bash"),i(W,"class","language-nginx")},m(n,t){d(document.head,s),d(document.head,a),d(document.head,m),d(document.head,h),w(n,b,t),w(n,_,t),d(_,g),w(n,v,t),w(n,f,t),d(f,x),w(n,$,t),w(n,E,t),d(E,T),w(n,H,t),w(n,F,t),F.innerHTML='<code class="language-bash">  <span class="token function">sudo</span> certbot  -d shiryel.com -d www.shiryel.com -d blog.shiryel.com -d www.blog.shiryel.com -d webrtc.shiryel.com -d www.webrtc.shiryel.com</code>',w(n,A,t),w(n,P,t),d(P,R),w(n,M,t),w(n,W,t),W.innerHTML='<code class="language-nginx"><span class="token comment"># For more information on configuration, see:</span>\n<span class="token comment">#   * Official English Documentation: http://nginx.org/en/docs/</span>\n<span class="token comment">#   * Official Russian Documentation: http://nginx.org/ru/docs/</span>\n\n<span class="token keyword">user</span> nginx<span class="token punctuation">;</span>\n<span class="token keyword">worker_processes</span> auto<span class="token punctuation">;</span>\n<span class="token keyword">error_log</span> <span class="token operator">/</span>var<span class="token operator">/</span>log<span class="token operator">/</span>nginx<span class="token operator">/</span>error<span class="token punctuation">.</span>log<span class="token punctuation">;</span>\n<span class="token keyword">pid</span> <span class="token operator">/</span>run<span class="token operator">/</span>nginx<span class="token punctuation">.</span><span class="token keyword">pid</span><span class="token punctuation">;</span>\n\n<span class="token keyword">events</span> <span class="token punctuation">&#123;</span>\n\t<span class="token keyword">worker_connections</span> <span class="token number">1024</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span>\n\n<span class="token keyword">http</span> <span class="token punctuation">&#123;</span>\n\t<span class="token keyword">log_format</span> main <span class="token string">\'$remote_addr - $remote_user [$time_local] "$request" \'</span>\n\t\t<span class="token string">\'$status $body_bytes_sent "$http_referer" \'</span>\n\t\t<span class="token string">\'"$http_user_agent" "$http_x_forwarded_for"\'</span><span class="token punctuation">;</span>\n\t<span class="token keyword">access_log</span> <span class="token operator">/</span>var<span class="token operator">/</span>log<span class="token operator">/</span>nginx<span class="token operator">/</span>access<span class="token punctuation">.</span>log main<span class="token punctuation">;</span>\n\n\t<span class="token keyword">sendfile</span> on<span class="token punctuation">;</span>\n\t<span class="token keyword">tcp_nopush</span> on<span class="token punctuation">;</span>\n\t<span class="token keyword">tcp_nodelay</span> on<span class="token punctuation">;</span>\n\t<span class="token keyword">keepalive_timeout</span> <span class="token number">65</span><span class="token punctuation">;</span>\n\t<span class="token keyword">types_hash_max_size</span> <span class="token number">2048</span><span class="token punctuation">;</span>\n\n\t<span class="token keyword">include</span> <span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>mime<span class="token punctuation">.</span><span class="token keyword">types</span><span class="token punctuation">;</span>\n\t<span class="token keyword">default_type</span> text<span class="token operator">/</span>plain<span class="token punctuation">;</span>\n\n\t<span class="token comment">###########</span>\n\t<span class="token comment"># CERTBOT #</span>\n\t<span class="token comment">###########</span>\n\n  <span class="token keyword">ssl_certificate</span> <span class="token operator">/</span>etc<span class="token operator">/</span>letsencrypt<span class="token operator">/</span>live<span class="token operator">/</span>shiryel<span class="token punctuation">.</span>com<span class="token operator">/</span>fullchain<span class="token punctuation">.</span>pem<span class="token punctuation">;</span> <span class="token comment"># managed by Certbot</span>\n  <span class="token keyword">ssl_certificate_key</span> <span class="token operator">/</span>etc<span class="token operator">/</span>letsencrypt<span class="token operator">/</span>live<span class="token operator">/</span>shiryel<span class="token punctuation">.</span>com<span class="token operator">/</span>privkey<span class="token punctuation">.</span>pem<span class="token punctuation">;</span> <span class="token comment"># managed by Certbot</span>\n\t<span class="token keyword">ssl_dhparam</span> <span class="token operator">/</span>etc<span class="token operator">/</span>letsencrypt<span class="token operator">/</span><span class="token keyword">ssl</span><span class="token operator">-</span>dhparams<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>\n\t<span class="token comment"># Automatic important security parameters (provided by certbot)</span>\n\t<span class="token keyword">include</span> <span class="token operator">/</span>etc<span class="token operator">/</span>letsencrypt<span class="token operator">/</span>options<span class="token operator">-</span><span class="token keyword">ssl</span><span class="token operator">-</span>nginx<span class="token punctuation">.</span>conf<span class="token punctuation">;</span>\n\n\t<span class="token comment">#################</span>\n\t<span class="token comment"># ENFORCE HTTPS #</span>\n\t<span class="token comment">#################</span>\n\n\t<span class="token keyword">server</span> <span class="token punctuation">&#123;</span>\n\t\t<span class="token keyword">listen</span> <span class="token number">80</span> default_server<span class="token punctuation">;</span>\n\t\t<span class="token keyword">server_name</span> _<span class="token punctuation">;</span>\n\t\n\t\t<span class="token keyword">return</span> <span class="token number">301</span> <span class="token keyword">https</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token variable">$host</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">&#125;</span>\n\n\t<span class="token comment">########</span>\n\t<span class="token comment"># HOME #</span>\n\t<span class="token comment">########</span>\n\n\t<span class="token comment"># Dont have non-www because the DNS redirect to WWW</span>\n\t<span class="token keyword">server</span> <span class="token punctuation">&#123;</span>\n\t\t<span class="token keyword">server_name</span> www<span class="token punctuation">.</span>shiryel<span class="token punctuation">.</span>com<span class="token punctuation">;</span>\n\t\t<span class="token keyword">listen</span> <span class="token number">443</span> <span class="token keyword">ssl</span> http2<span class="token punctuation">;</span>\n\t\t<span class="token keyword">listen</span> <span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">:</span><span class="token number">443</span> <span class="token keyword">ssl</span> http2<span class="token punctuation">;</span>\n\n\t\t<span class="token keyword">location</span> <span class="token operator">/</span> <span class="token punctuation">&#123;</span>\n\t\t\t<span class="token keyword">root</span> <span class="token operator">/</span>www<span class="token operator">/</span>shiryel<span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">index</span> shiryel<span class="token punctuation">.</span>html<span class="token punctuation">;</span>\n\t\t<span class="token punctuation">&#125;</span>\n\t<span class="token punctuation">&#125;</span>\n\n\t<span class="token comment">##########</span>\n\t<span class="token comment"># WEBRTC #</span>\n\t<span class="token comment">##########</span>\n\n\t<span class="token keyword">upstream</span> docker<span class="token operator">-</span>webrtc <span class="token punctuation">&#123;</span>\n\t\t<span class="token keyword">server</span> <span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token punctuation">:</span><span class="token number">5001</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">&#125;</span>\n\n\t<span class="token keyword">upstream</span> docker<span class="token operator">-</span>webrtc<span class="token operator">-</span><span class="token keyword">server</span> <span class="token punctuation">&#123;</span>\n\t\t<span class="token keyword">server</span> <span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token punctuation">:</span><span class="token number">4001</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">&#125;</span>\n\n\t<span class="token keyword">map</span> <span class="token variable">$http_upgrade</span> <span class="token variable">$connection_upgrade</span> <span class="token punctuation">&#123;</span>\n\t\tdefault upgrade<span class="token punctuation">;</span>\n\t\t<span class="token string">\'\'</span>      close<span class="token punctuation">;</span>\n\t<span class="token punctuation">&#125;</span>\n\n\t<span class="token keyword">server</span> <span class="token punctuation">&#123;</span>\n\t\t<span class="token keyword">server_name</span> www<span class="token punctuation">.</span>webrtc<span class="token punctuation">.</span>shiryel<span class="token punctuation">.</span>com<span class="token punctuation">;</span>\n\t\t<span class="token keyword">listen</span> <span class="token number">443</span> <span class="token keyword">ssl</span> http2<span class="token punctuation">;</span>\n\t\t<span class="token keyword">listen</span> <span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">:</span><span class="token number">443</span> <span class="token keyword">ssl</span> http2<span class="token punctuation">;</span>\n\n\t\t<span class="token keyword">return</span> <span class="token number">301</span> <span class="token variable">$scheme</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>webrtc<span class="token punctuation">.</span>shiryel<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">&#125;</span>\n\n\t<span class="token keyword">server</span> <span class="token punctuation">&#123;</span>\n\t\t<span class="token keyword">server_name</span> webrtc<span class="token punctuation">.</span>shiryel<span class="token punctuation">.</span>com<span class="token punctuation">;</span>\n\t\t<span class="token keyword">listen</span> <span class="token number">443</span> <span class="token keyword">ssl</span> http2<span class="token punctuation">;</span>\n\t\t<span class="token keyword">listen</span> <span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">:</span><span class="token number">443</span> <span class="token keyword">ssl</span> http2<span class="token punctuation">;</span>\n\n\t\t<span class="token keyword">location</span> <span class="token operator">/</span> <span class="token punctuation">&#123;</span>\n\t\t\t<span class="token keyword">proxy_pass</span>         <span class="token keyword">http</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>docker<span class="token operator">-</span>webrtc<span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">proxy_redirect</span>     off<span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">proxy_set_header</span>   Host <span class="token variable">$host</span><span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">proxy_set_header</span>   X<span class="token operator">-</span>Real<span class="token operator">-</span>IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">proxy_set_header</span>   X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">proxy_set_header</span>   X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>Host <span class="token variable">$server_name</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">&#125;</span>\n\t<span class="token punctuation">&#125;</span>\n\n\t<span class="token keyword">server</span> <span class="token punctuation">&#123;</span>\n\t\t<span class="token keyword">server_name</span> webrtc<span class="token operator">-</span><span class="token keyword">server</span><span class="token punctuation">.</span>shiryel<span class="token punctuation">.</span>com www<span class="token punctuation">.</span>webrtc<span class="token operator">-</span><span class="token keyword">server</span><span class="token punctuation">.</span>shiryel<span class="token punctuation">.</span>com<span class="token punctuation">;</span>\n\t\t<span class="token keyword">listen</span> <span class="token number">443</span> <span class="token keyword">ssl</span> http2<span class="token punctuation">;</span>\n\t\t<span class="token keyword">listen</span> <span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">:</span><span class="token number">443</span> <span class="token keyword">ssl</span> http2<span class="token punctuation">;</span>\n\n\t\t<span class="token keyword">location</span> <span class="token operator">/</span> <span class="token punctuation">&#123;</span>\n\t\t\t<span class="token keyword">proxy_pass</span>         <span class="token keyword">http</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>docker<span class="token operator">-</span>webrtc<span class="token operator">-</span><span class="token keyword">server</span><span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">proxy_set_header</span>   Host <span class="token variable">$host</span><span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">proxy_set_header</span>   X<span class="token operator">-</span>Real<span class="token operator">-</span>IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">proxy_set_header</span>   X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">proxy_set_header</span>   X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>Host <span class="token variable">$server_name</span><span class="token punctuation">;</span>\n\n\t\t\t<span class="token comment"># WebSocket support</span>\n\t\t\t<span class="token keyword">proxy_http_version</span> <span class="token number">1.1</span><span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">proxy_set_header</span>   Upgrade <span class="token variable">$http_upgrade</span><span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">proxy_set_header</span>   Connection <span class="token variable">$connection_upgrade</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">&#125;</span>\n\t<span class="token punctuation">&#125;</span>\n\n\t<span class="token comment">########</span>\n\t<span class="token comment"># BLOG #</span>\n\t<span class="token comment">########</span>\n\n\t<span class="token keyword">server</span> <span class="token punctuation">&#123;</span>\n\t\t<span class="token keyword">server_name</span> www<span class="token punctuation">.</span>blog<span class="token punctuation">.</span>shiryel<span class="token punctuation">.</span>com<span class="token punctuation">;</span>\n\t\t<span class="token keyword">listen</span> <span class="token number">443</span> <span class="token keyword">ssl</span> http2<span class="token punctuation">;</span>\n\t\t<span class="token keyword">listen</span> <span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">:</span><span class="token number">443</span> <span class="token keyword">ssl</span> http2<span class="token punctuation">;</span>\n\n\t\t<span class="token keyword">return</span> <span class="token number">301</span> <span class="token variable">$scheme</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>blog<span class="token punctuation">.</span>shiryel<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">&#125;</span>\n\n\t<span class="token keyword">server</span> <span class="token punctuation">&#123;</span>\n\t\t<span class="token keyword">server_name</span> blog<span class="token punctuation">.</span>shiryel<span class="token punctuation">.</span>com<span class="token punctuation">;</span>\n\t\t<span class="token keyword">listen</span> <span class="token number">443</span> <span class="token keyword">ssl</span> http2<span class="token punctuation">;</span>\n\t\t<span class="token keyword">listen</span> <span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">:</span><span class="token number">443</span> <span class="token keyword">ssl</span> http2<span class="token punctuation">;</span>\n\n\t\t<span class="token keyword">location</span> <span class="token operator">/</span> <span class="token punctuation">&#123;</span>\n\t\t\t<span class="token keyword">root</span> <span class="token operator">/</span>www<span class="token operator">/</span>shiryel_blog<span class="token punctuation">;</span>\n\t\t<span class="token punctuation">&#125;</span>\n\t<span class="token punctuation">&#125;</span>\n<span class="token punctuation">&#125;</span></code>',w(n,C,t),w(n,O,t),d(O,S)},p:y,i:y,o:y,d(n){r(s),r(a),r(m),r(h),n&&r(b),n&&r(_),n&&r(v),n&&r(f),n&&r($),n&&r(E),n&&r(H),n&&r(F),n&&r(A),n&&r(P),n&&r(M),n&&r(W),n&&r(C),n&&r(O)}}}export default class extends n{constructor(n){super(),s(this,n,null,m,a,{})}}

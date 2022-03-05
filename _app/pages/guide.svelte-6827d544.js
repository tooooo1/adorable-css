import{S as L,i as P,s as T,e as r,t as E,j as w,c as i,a as u,g as R,d as a,l as v,b as A,f as p,F as S,G as C,v as Q,w as U,x as z,p as J,n as N,A as X}from"../chunks/vendor-e0ae2598.js";function Y($){let n,o,c,t,l,M,g,d,D,y,k,j='<code class="language-sh">npm i -D adorable-css</code>',h,m,B=`<code class="language-ts"><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>adorableCSS<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"adorable-css/vite-plugin-adorable-css"</span> <span class="token comment">// &lt;-</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">adorableCSS</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span> <span class="token comment">// &lt;-</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span></code>`,x,f,I=`<code class="language-tsx"><span class="token comment">// main.tsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom"</span>
<span class="token keyword">import</span> <span class="token string">"./index.css"</span>
<span class="token keyword">import</span> <span class="token string">"@adorable.css"</span> <span class="token comment">// &lt;-</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>App<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"./App"</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span></code>`,b,_,H;return{c(){n=r("h1"),o=E("AdorableCSS"),c=w(),t=r("blockquote"),l=r("p"),M=E("\u26A1\uFE0F Rapid On-Demand Atomic CSS framework"),g=w(),d=r("h2"),D=E("Getting Started"),y=w(),k=r("pre"),h=w(),m=r("pre"),x=w(),f=r("pre"),b=w(),_=r("h4"),H=E("React, Svelte, Vue \u2026 Almost Web framework support with Vite."),this.h()},l(s){n=i(s,"H1",{});var e=u(n);o=R(e,"AdorableCSS"),e.forEach(a),c=v(s),t=i(s,"BLOCKQUOTE",{});var O=u(t);l=i(O,"P",{});var G=u(l);M=R(G,"\u26A1\uFE0F Rapid On-Demand Atomic CSS framework"),G.forEach(a),O.forEach(a),g=v(s),d=i(s,"H2",{});var V=u(d);D=R(V,"Getting Started"),V.forEach(a),y=v(s),k=i(s,"PRE",{class:!0});var W=u(k);W.forEach(a),h=v(s),m=i(s,"PRE",{class:!0});var F=u(m);F.forEach(a),x=v(s),f=i(s,"PRE",{class:!0});var K=u(f);K.forEach(a),b=v(s),_=i(s,"H4",{});var q=u(_);H=R(q,"React, Svelte, Vue \u2026 Almost Web framework support with Vite."),q.forEach(a),this.h()},h(){A(k,"class","language-sh"),A(m,"class","language-ts"),A(f,"class","language-tsx")},m(s,e){p(s,n,e),S(n,o),p(s,c,e),p(s,t,e),S(t,l),S(l,M),p(s,g,e),p(s,d,e),S(d,D),p(s,y,e),p(s,k,e),k.innerHTML=j,p(s,h,e),p(s,m,e),m.innerHTML=B,p(s,x,e),p(s,f,e),f.innerHTML=I,p(s,b,e),p(s,_,e),S(_,H)},p:C,i:C,o:C,d(s){s&&a(n),s&&a(c),s&&a(t),s&&a(g),s&&a(d),s&&a(y),s&&a(k),s&&a(h),s&&a(m),s&&a(x),s&&a(f),s&&a(b),s&&a(_)}}}class Z extends L{constructor(n){super();P(this,n,null,Y,T,{})}}function ss($){let n,o,c;return o=new Z({}),{c(){n=r("div"),Q(o.$$.fragment),this.h()},l(t){n=i(t,"DIV",{class:!0});var l=u(n);U(o.$$.fragment,l),l.forEach(a),this.h()},h(){A(n,"class","markdown p(20)")},m(t,l){p(t,n,l),z(o,n,null),c=!0},p:C,i(t){c||(J(o.$$.fragment,t),c=!0)},o(t){N(o.$$.fragment,t),c=!1},d(t){t&&a(n),X(o)}}}class ns extends L{constructor(n){super();P(this,n,null,ss,T,{})}}export{ns as default};
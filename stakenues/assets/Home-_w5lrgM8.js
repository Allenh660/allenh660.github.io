import{i as e,a as t,r as a,f as n,b as o,c as i,u as l,d as s,e as r,g as u,_ as c,h as d,w as v,j as p}from"./MsStake-_l0BMAMR.js";import{E as m,B as f,_ as h,O as y}from"./BaseNav-1QkAdVUP.js";/* empty css               */import{s as g,l as A,m as b,q as w,r as I,v as E,u as C,w as k,x,o as S,y as V,z as B,d as T,a as U,c as Q,f as j,k as M,e as R,n as W,A as J,b as N,B as F,C as q,T as D,g as K,D as H,E as O,F as L,G as Y,t as z,H as G,I as P,J as X,K as Z,L as _,M as $,p as ee,h as te,_ as ae}from"./index-NPrZcBDP.js";import{u as ne}from"./ERC20-eMS7FcOG.js";import"./index-MQgnl2Gt.js";import"./MetaMask-8E0tWPSn.js";var oe=/\s/;var ie=/^\s+/;function le(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&oe.test(e.charAt(t)););return t}(e)+1).replace(ie,""):e}var se=NaN,re=/^[-+]0x[0-9a-f]+$/i,ue=/^0b[01]+$/i,ce=/^0o[0-7]+$/i,de=parseInt;function ve(a){if("number"==typeof a)return a;if(e(a))return se;if(t(a)){var n="function"==typeof a.valueOf?a.valueOf():a;a=t(n)?n+"":n}if("string"!=typeof a)return 0===a?a:+a;a=le(a);var o=ue.test(a);return o||ce.test(a)?de(a.slice(2),o?2:8):re.test(a)?se:+a}const pe=function(){return a.Date.now()};var me="Expected a function",fe=Math.max,he=Math.min;function ye(e,a,n){var o,i,l,s,r,u,c=0,d=!1,v=!1,p=!0;if("function"!=typeof e)throw new TypeError(me);function m(t){var a=o,n=i;return o=i=void 0,c=t,s=e.apply(n,a)}function f(e){var t=e-u;return void 0===u||t>=a||t<0||v&&e-c>=l}function h(){var e=pe();if(f(e))return y(e);r=setTimeout(h,function(e){var t=a-(e-u);return v?he(t,l-(e-c)):t}(e))}function y(e){return r=void 0,p&&o?m(e):(o=i=void 0,s)}function g(){var e=pe(),t=f(e);if(o=arguments,i=this,u=e,t){if(void 0===r)return function(e){return c=e,r=setTimeout(h,a),d?m(e):s}(u);if(v)return clearTimeout(r),r=setTimeout(h,a),m(u)}return void 0===r&&(r=setTimeout(h,a)),s}return a=ve(a)||0,t(n)&&(d=!!n.leading,l=(v="maxWait"in n)?fe(ve(n.maxWait)||0,a):l,p="trailing"in n?!!n.trailing:p),g.cancel=function(){void 0!==r&&clearTimeout(r),c=0,o=u=i=r=void 0},g.flush=function(){return void 0===r?s:y(pe())},g}function ge(e,a,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return t(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),ye(e,a,{leading:o,maxWait:a,trailing:i})}const Ae=(e,t)=>{const a={},o=g([]);return{children:o,addChild:i=>{a[i.uid]=i,o.value=((e,t,a)=>n(e.subTree).filter((e=>{var a;return A(e)&&(null==(a=e.type)?void 0:a.name)===t&&!!e.component})).map((e=>e.component.uid)).map((e=>a[e])).filter((e=>!!e)))(e,t,a)},removeChild:e=>{delete a[e],o.value=o.value.filter((t=>t.uid!==e))}}},be=o({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),we={change:(e,t)=>[e,t].every(i)},Ie=Symbol("carouselContextKey"),Ee=(e,t,a)=>{const{children:o,addChild:i,removeChild:l}=Ae(b(),"ElCarouselItem"),s=w(),r=I(-1),u=I(null),c=I(!1),d=I(),v=I(0),p=I(!0),m=E((()=>"never"!==e.arrow&&!C(y))),f=E((()=>o.value.some((e=>e.props.label.toString().length>0)))),h=E((()=>"card"===e.type)),y=E((()=>"vertical"===e.direction)),T=E((()=>"auto"!==e.height?{height:e.height}:{height:`${v.value}px`,overflow:"hidden"})),U=ge((e=>{W(e)}),300,{trailing:!0}),Q=ge((t=>{!function(t){"hover"===e.trigger&&t!==r.value&&(r.value=t)}(t)}),300);function j(){u.value&&(clearInterval(u.value),u.value=null)}function M(){e.interval<=0||!e.autoplay||u.value||(u.value=setInterval((()=>R()),e.interval))}const R=()=>{r.value<o.value.length-1?r.value=r.value+1:e.loop&&(r.value=0)};function W(t){if(B(t)){const e=o.value.filter((e=>e.props.name===t));e.length>0&&(t=o.value.indexOf(e[0]))}if(t=Number(t),Number.isNaN(t)||t!==Math.floor(t))return;const a=o.value.length,n=r.value;r.value=t<0?e.loop?a-1:0:t>=a?e.loop?0:a-1:t,n===r.value&&J(n),N()}function J(e){o.value.forEach(((t,a)=>{t.translateItem(a,r.value,e)}))}function N(){j(),e.pauseOnHover||M()}k((()=>r.value),((e,a)=>{J(a),p.value&&(e%=2,a%=2),a>-1&&t("change",e,a)})),k((()=>e.autoplay),(e=>{e?M():j()})),k((()=>e.loop),(()=>{W(r.value)})),k((()=>e.interval),(()=>{N()}));const F=g();return x((()=>{k((()=>o.value),(()=>{o.value.length>0&&W(e.initialIndex)}),{immediate:!0}),F.value=ne(d.value,(()=>{J()})),M()})),S((()=>{j(),d.value&&F.value&&F.value.stop()})),V(Ie,{root:d,isCardType:h,isVertical:y,items:o,loop:e.loop,addItem:i,removeItem:l,setActiveItem:W,setContainerHeight:function(t){"auto"===e.height&&(v.value=t)}}),{root:d,activeIndex:r,arrowDisplay:m,hasLabel:f,hover:c,isCardType:h,items:o,isVertical:y,containerStyle:T,isItemsTwoLength:p,handleButtonEnter:function(e){C(y)||o.value.forEach(((t,a)=>{e===function(e,t){var a,n,i,l;const s=C(o),r=s.length;if(0===r||!e.states.inStage)return!1;const u=t+1,c=t-1,d=r-1,v=s[d].states.active,p=s[0].states.active,m=null==(n=null==(a=s[u])?void 0:a.states)?void 0:n.active,f=null==(l=null==(i=s[c])?void 0:i.states)?void 0:l.active;return t===d&&p||m?"left":!!(0===t&&v||f)&&"right"}(t,a)&&(t.states.hover=!0)}))},handleButtonLeave:function(){C(y)||o.value.forEach((e=>{e.states.hover=!1}))},handleIndicatorClick:function(e){r.value=e},handleMouseEnter:function(){c.value=!0,e.pauseOnHover&&j()},handleMouseLeave:function(){c.value=!1,M()},setActiveItem:W,prev:function(){W(r.value-1)},next:function(){W(r.value+1)},PlaceholderItem:function(){var t;const a=null==(t=s.default)?void 0:t.call(s);if(!a)return null;const o=n(a).filter((e=>A(e)&&"ElCarouselItem"===e.type.name));return 2===(null==o?void 0:o.length)&&e.loop&&!h.value?(p.value=!0,o):(p.value=!1,null)},isTwoLengthShow:e=>!p.value||(r.value<=1?e<=1:e>1),throttledArrowClick:U,throttledIndicatorHover:Q}},Ce=["onMouseenter","onClick"],ke={key:0},xe=T({name:"ElCarousel"});var Se=c(T({...xe,props:be,emits:we,setup(e,{expose:t,emit:a}){const n=e,{root:o,activeIndex:i,arrowDisplay:c,hasLabel:d,hover:v,isCardType:p,items:m,isVertical:f,containerStyle:h,handleButtonEnter:y,handleButtonLeave:g,handleIndicatorClick:A,handleMouseEnter:b,handleMouseLeave:w,setActiveItem:I,prev:k,next:x,PlaceholderItem:S,isTwoLengthShow:V,throttledArrowClick:B,throttledIndicatorHover:T}=Ee(n,a),G=l("carousel"),P=E((()=>{const e=[G.b(),G.m(n.direction)];return C(p)&&e.push(G.m("card")),e})),X=E((()=>{const e=[G.e("indicators"),G.em("indicators",n.direction)];return C(d)&&e.push(G.em("indicators","labels")),"outside"===n.indicatorPosition&&e.push(G.em("indicators","outside")),C(f)&&e.push(G.em("indicators","right")),e}));return t({setActiveItem:I,prev:k,next:x}),(e,t)=>(U(),Q("div",{ref_key:"root",ref:o,class:W(C(P)),onMouseenter:t[6]||(t[6]=J(((...e)=>C(b)&&C(b)(...e)),["stop"])),onMouseleave:t[7]||(t[7]=J(((...e)=>C(w)&&C(w)(...e)),["stop"]))},[j("div",{class:W(C(G).e("container")),style:O(C(h))},[C(c)?(U(),M(D,{key:0,name:"carousel-arrow-left",persisted:""},{default:R((()=>[q(j("button",{type:"button",class:W([C(G).e("arrow"),C(G).em("arrow","left")]),onMouseenter:t[0]||(t[0]=e=>C(y)("left")),onMouseleave:t[1]||(t[1]=(...e)=>C(g)&&C(g)(...e)),onClick:t[2]||(t[2]=J((e=>C(B)(C(i)-1)),["stop"]))},[N(C(s),null,{default:R((()=>[N(C(r))])),_:1})],34),[[F,("always"===e.arrow||C(v))&&(n.loop||C(i)>0)]])])),_:1})):K("v-if",!0),C(c)?(U(),M(D,{key:1,name:"carousel-arrow-right",persisted:""},{default:R((()=>[q(j("button",{type:"button",class:W([C(G).e("arrow"),C(G).em("arrow","right")]),onMouseenter:t[3]||(t[3]=e=>C(y)("right")),onMouseleave:t[4]||(t[4]=(...e)=>C(g)&&C(g)(...e)),onClick:t[5]||(t[5]=J((e=>C(B)(C(i)+1)),["stop"]))},[N(C(s),null,{default:R((()=>[N(C(u))])),_:1})],34),[[F,("always"===e.arrow||C(v))&&(n.loop||C(i)<C(m).length-1)]])])),_:1})):K("v-if",!0),N(C(S)),H(e.$slots,"default")],6),"none"!==e.indicatorPosition?(U(),Q("ul",{key:0,class:W(C(X))},[(U(!0),Q(L,null,Y(C(m),((t,a)=>q((U(),Q("li",{key:a,class:W([C(G).e("indicator"),C(G).em("indicator",e.direction),C(G).is("active",a===C(i))]),onMouseenter:e=>C(T)(a),onClick:J((e=>C(A)(a)),["stop"])},[j("button",{class:W(C(G).e("button"))},[C(d)?(U(),Q("span",ke,z(t.props.label),1)):K("v-if",!0)],2)],42,Ce)),[[F,C(V)(a)]]))),128))],2)):K("v-if",!0)],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const Ve=o({name:{type:String,default:""},label:{type:[String,Number],default:""}}),Be=(e,t)=>{const a=G(Ie),n=b(),o=.83,i=I(),l=I(!1),s=I(0),r=I(1),u=I(!1),c=I(!1),v=I(!1),p=I(!1),{isCardType:m,isVertical:f}=a;const h=(e,t,n)=>{var l;const h=C(m),y=null!=(l=a.items.value.length)?l:Number.NaN,g=e===t;h||d(n)||(p.value=g||e===n),!g&&y>2&&a.loop&&(e=function(e,t,a){const n=a-1,o=a/2;return 0===t&&e===n?-1:t===n&&0===e?a:e<t-1&&t-e>=o?a+1:e>t+1&&e-t>=o?-2:e}(e,t,y));const A=C(f);u.value=g,h?(v.value=Math.round(Math.abs(e-t))<=1,s.value=function(e,t){var n,o;const i=C(f)?(null==(n=a.root.value)?void 0:n.offsetHeight)||0:(null==(o=a.root.value)?void 0:o.offsetWidth)||0;return v.value?i*(1.17*(e-t)+1)/4:e<t?-1.83*i/4:3.83*i/4}(e,t),r.value=C(u)?1:o):s.value=function(e,t,n){const o=a.root.value;return o?((n?o.offsetHeight:o.offsetWidth)||0)*(e-t):0}(e,t,A),c.value=!0,g&&i.value&&a.setContainerHeight(i.value.offsetHeight)};return x((()=>{a.addItem({props:e,states:P({hover:l,translate:s,scale:r,active:u,ready:c,inStage:v,animating:p}),uid:n.uid,translateItem:h})})),X((()=>{a.removeItem(n.uid)})),{carouselItemRef:i,active:u,animating:p,hover:l,inStage:v,isVertical:f,translate:s,isCardType:m,scale:r,ready:c,handleItemClick:function(){if(a&&C(m)){const e=a.items.value.findIndex((({uid:e})=>e===n.uid));a.setActiveItem(e)}}}},Te=T({name:"ElCarouselItem"});var Ue=c(T({...Te,props:Ve,setup(e){const t=e,a=l("carousel"),{carouselItemRef:n,active:o,animating:i,hover:s,inStage:r,isVertical:u,translate:c,isCardType:d,scale:v,ready:p,handleItemClick:m}=Be(t),f=E((()=>({transform:[`${"translate"+(C(u)?"Y":"X")}(${C(c)}px)`,`scale(${C(v)})`].join(" ")})));return(e,t)=>q((U(),Q("div",{ref_key:"carouselItemRef",ref:n,class:W([C(a).e("item"),C(a).is("active",C(o)),C(a).is("in-stage",C(r)),C(a).is("hover",C(s)),C(a).is("animating",C(i)),{[C(a).em("item","card")]:C(d),[C(a).em("item","card-vertical")]:C(d)&&C(u)}]),style:O(C(f)),onClick:t[0]||(t[0]=(...e)=>C(m)&&C(m)(...e))},[C(d)?q((U(),Q("div",{key:0,class:W(C(a).e("mask"))},null,2)),[[F,!C(o)]]):K("v-if",!0),H(e.$slots,"default")],6)),[[F,C(p)]])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const Qe=v(Se,{CarouselItem:Ue}),je=p(Ue),Me=""+new URL("top-twV5p6WQ.png",import.meta.url).href,Re=""+new URL("bottom-_lyvEhA_.png",import.meta.url).href,We="data:image/png;base64,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",Je=e=>(ee("data-v-ca3b147c"),e=e(),te(),e),Ne={class:"home"},Fe={class:"deposit"},qe={class:"content"},De=Je((()=>j("div",{class:"img_box"},[j("img",{src:Me,style:{width:"200px"}})],-1))),Ke={class:"carousel"},He={class:"text",style:{"font-size":"12px"}},Oe={key:0},Le={key:1},Ye={style:{color:"#c6d6ea"}},ze=Je((()=>j("span",{style:{"font-size":"14px"}}," RUNES ",-1))),Ge={key:2},Pe=Je((()=>j("div",{class:"img_box"},[j("img",{src:Re,style:{width:"200px"}})],-1))),Xe=Je((()=>j("div",{class:"deposit-logo",style:{"margin-top":"30px","margin-bottom":"-30px"}},[j("img",{class:"img",src:"data:image/png;base64,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",style:{width:"50px",margin:"10px 0 30px 0"}})],-1))),Ze={class:"mpu_box"},_e=Je((()=>j("div",{class:"apr-text"},[j("text",null,"RUNEs Staking")],-1))),$e={class:"apr",style:{"font-size":"60px !important"}},et=Je((()=>j("text",{style:{"font-size":"50px"}},"%",-1))),tt=Je((()=>j("div",{class:"content-popover"},[j("div",{class:"title"}," The APR is calculated based on the quantity of pledged RUNEs tokens and the amount of rewards already distributed. The APR currently displayed reflects the APR value at the time of the latest reward distribution. APR values are dynamic and subject to change over time. "),j("div",{class:"text",style:{"margin-top":"-10px"}},[$(" APR = (R / S) / T * 365 * 100%"),j("br"),$(" R: Total amount of RUNEs rewards distributed"),j("br"),$(" S: Total amount of RUNEs staked"),j("br"),$(" T: Number of days staked"),j("br")])],-1))),at=Je((()=>j("div",{class:"mpu_text"},"Estimated APR",-1))),nt={class:"item-popover"},ot=Je((()=>j("img",{class:"img",src:We,style:{width:"24px !important"}},null,-1))),it=Je((()=>j("div",{class:"content-popover"},[j("div",{class:"title"},[j("p",null,"RUNEs Staking Rewards"),j("p",null,[$(" 1. The timing and amount of rewards are dynamically deposited."),j("br"),$(" 2. When rewards are deposited into the reward pool, a snapshot of all staking users is taken, and rewards are distributed to each user based on their staked amount."),j("br"),$(" 3. Rewards can be claimed at any time."),j("br")])])],-1))),lt=ae(T({__name:"Home",setup(e){const t=Z(),a=_(),n=E((()=>a.isMobile)),o=I("0xF09FD56e72933f4dC6817006660E6f0d13eB4E75"),i=()=>{""!==o.valueOf()&&(a.accounts?l("/claim"):a.SetConnectWalletDialog(!0))},l=e=>{t.push({path:e})};x((()=>{window.addEventListener("scroll",u)}));const s=I(0),r=I(null),u=()=>{s.value=window.scrollY,window.scrollY<1200?r.value.style.opacity=0:r.value.style.opacity=1};return X((()=>{window.removeEventListener("scroll",u)})),(e,t)=>{const s=je,r=Qe,u=m;return U(),Q(L,null,[j("div",Ne,[N(f),K("",!0),j("div",Fe,[j("div",qe,[De,j("div",Ke,[N(r,{class:"data-carousel","pause-on-hover":!1,height:"40px"},{default:R((()=>[(U(!0),Q(L,null,Y(C(a).DepositList,(e=>(U(),M(s,{key:e},{default:R((()=>[j("div",He,[j("span",null,z(C(y)(e.address)),1),C(a).isMobile?(U(),Q("span",Oe,"staked")):(U(),Q("span",Le,"has staked")),j("span",Ye,z(parseFloat(e.amount)),1),ze,n.value?K("",!0):(U(),Q("span",Ge,"just now."))])])),_:2},1024)))),128))])),_:1})]),Pe,Xe,j("div",{class:W(n.value?"content-btn":"content-btn2")},[j("div",Ze,[j("div",null,[_e,j("div",$e,[$(z(Number(C(a).Apr).toFixed(2)),1),et,N(u,{width:300,"show-arrow":!1,placement:"bottom-start",trigger:"click","popper-class":"home-apr-popover"},{reference:R((()=>[j("img",{class:"img",src:We,style:O(n.value?"margin-top: -20px;margin-left:5px;":"margin-top: -40px;margin-left: 5px;")},null,4)])),default:R((()=>[tt])),_:1})])])]),at,j("div",{class:W(n.value?"btns":"btns2")},[j("div",{class:"item-btn mousein",onClick:t[0]||(t[0]=e=>(async()=>{""!==o.valueOf()&&(a.accounts?l("/deposit"):a.SetConnectWalletDialog(!0))})()),style:{"font-weight":"bolder"}}," Stake "),j("div",nt,[j("div",{class:"item-btn mousein",onClick:i,style:{"font-weight":"bolder"}}," Reward "),N(u,{width:300,"show-arrow":!1,placement:"bottom-start",trigger:"click","popper-class":"home-apr-popover"},{reference:R((()=>[ot])),default:R((()=>[it])),_:1})]),j("div",{class:"item-btn mousein",onClick:t[1]||(t[1]=e=>(async()=>{""!==o.valueOf()&&(a.accounts?l("/unstake"):a.SetConnectWalletDialog(!0))})()),style:{"font-weight":"bolder"}}," Unstake ")],2)],2)])])]),N(h)],64)}}}),[["__scopeId","data-v-ca3b147c"]]);export{lt as default};

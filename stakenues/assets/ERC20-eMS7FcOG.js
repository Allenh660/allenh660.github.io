import{t as e,ah as t,m as a,ai as n,aj as s,ak as o,al as i,am as r}from"./MsStake-_l0BMAMR.js";import{w as u,r as p}from"./index-NPrZcBDP.js";function l(e){var a;const n=t(e);return null!=(a=null==n?void 0:n.$el)?a:n}const y=a?window:void 0;function c(...a){let o,i,r,p;if(n(a[0])||Array.isArray(a[0])?([i,r,p]=a,o=y):[o,i,r,p]=a,!o)return s;Array.isArray(i)||(i=[i]),Array.isArray(r)||(r=[r]);const c=[],d=()=>{c.forEach((e=>e())),c.length=0},m=u((()=>[l(o),t(p)]),(([e,t])=>{d(),e&&c.push(...i.flatMap((a=>r.map((n=>((e,t,a,n)=>(e.addEventListener(t,a,n),()=>e.removeEventListener(t,a,n)))(e,a,n,t))))))}),{immediate:!0,flush:"post"}),f=()=>{m(),d()};return e(f),f}let d=!1;function m(e,t,a={}){const{window:n=y,ignore:o=[],capture:i=!0,detectIframe:u=!1}=a;if(!n)return;r&&!d&&(d=!0,Array.from(n.document.body.children).forEach((e=>e.addEventListener("click",s))));let p=!0;const m=e=>o.some((t=>{if("string"==typeof t)return Array.from(n.document.querySelectorAll(t)).some((t=>t===e.target||e.composedPath().includes(t)));{const a=l(t);return a&&(e.target===a||e.composedPath().includes(a))}})),f=[c(n,"click",(a=>{const n=l(e);n&&n!==a.target&&!a.composedPath().includes(n)&&(0===a.detail&&(p=!m(a)),p?t(a):p=!0)}),{passive:!0,capture:i}),c(n,"pointerdown",(t=>{const a=l(e);a&&(p=!t.composedPath().includes(a)&&!m(t))}),{passive:!0}),u&&c(n,"blur",(a=>{var s;const o=l(e);"IFRAME"!==(null==(s=n.document.activeElement)?void 0:s.tagName)||(null==o?void 0:o.contains(n.document.activeElement))||t(a)}))].filter(Boolean);return()=>f.forEach((e=>e()))}const f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},b="__vueuse_ssr_handlers__";f[b]=f[b]||{};var v,O,w=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;function h(t,a,n={}){const s=n,{window:i=y}=s,r=((e,t)=>{var a={};for(var n in e)I.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&w)for(var n of w(e))t.indexOf(n)<0&&E.call(e,n)&&(a[n]=e[n]);return a})(s,["window"]);let c;const d=function(e,t=!1){const a=p(),n=()=>a.value=Boolean(e());return n(),o(n,t),a}((()=>i&&"ResizeObserver"in i)),m=()=>{c&&(c.disconnect(),c=void 0)},f=u((()=>l(t)),(e=>{m(),d.value&&i&&e&&(c=new ResizeObserver(a),c.observe(e,r))}),{immediate:!0,flush:"post"}),b=()=>{m(),f()};return e(b),{isSupported:d,stop:b}}(O=v||(v={})).UP="UP",O.RIGHT="RIGHT",O.DOWN="DOWN",O.LEFT="LEFT",O.NONE="NONE";var g=Object.defineProperty,_=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,A=(e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;((e,t)=>{for(var a in t||(t={}))x.call(t,a)&&A(e,a,t[a]);if(_)for(var a of _(t))M.call(t,a)&&A(e,a,t[a])})({linear:i},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const P=e=>e,S=Symbol("formContextKey"),j=Symbol("formItemContextKey"),Q={abi:[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}]};export{Q as E,l as a,c as b,S as c,j as f,P as m,m as o,h as u};

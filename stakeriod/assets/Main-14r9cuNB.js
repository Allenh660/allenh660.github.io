import{B as t}from"./BaseNav-gEMimc-t.js";import{E as a}from"./MsStake-XXQrYsOj.js";import{u as s,b as e,C as p}from"./custompopups-GfQchbWB.js";/* empty css               */import{d as o,r as n,w as c,o as i,a as l,c as u,b as r,e as A,f as d,u as m,g,n as y,t as k,_ as w,p as h,h as D,i as f,j as z,k as v}from"./index-HmN8oWZL.js";import"./MetaMask-8E0tWPSn.js";import"./ERC20-wN4H9J0h.js";import"./index-WsM8dx5w.js";const Z=""+new URL("success-A-WwABL2.png",import.meta.url).href,B={class:"hint-content"},I={key:0,class:"title"},W=["src"],C=["src"],F=["src"],Y=["src"],j={key:1,class:"hint-name"},q={key:2,class:"hint-name success"},M=o({__name:"BaseCustomPopUps",setup(t){const o=s(),w=async()=>{h.value&&clearTimeout(h.value),o.$state.popupsdata.popupsstate=!1},h=n();c((()=>o.$state.popupsdata),(t=>{t&&1!=t.type&&5!=t.type&&(h.value&&clearTimeout(h.value),h.value=setTimeout((()=>{o.$state.popupsdata.popupsstate=!1}),3e3))}));const D=t=>{switch(t){case 1:return"Confirm this transaction in your wallet";case 2:return"Success";case 3:return"Transaction signature rejected by user";case 4:return"Transaction failed";case 5:return"Confirm approve transaction in your wallet";case 6:return o.$state.popupsdata.text}};return i((()=>{h.value&&clearTimeout(h.value)})),(t,s)=>{const n=a;return l(),u("div",null,[r(n,{modelValue:m(o).$state.popupsdata.popupsstate,"onUpdate:modelValue":s[0]||(s[0]=t=>m(o).$state.popupsdata.popupsstate=t),width:"30%",onClose:w,"show-close":1!=m(o).$state.popupsdata.type&&5!=m(o).$state.popupsdata.type,"align-center":"",class:"popups-signdialog","close-on-click-modal":!1,"close-on-press-escape":!1},{default:A((()=>[d("div",B,[m(o).$state.popupsdata.type<=5?(l(),u("div",I,"Sign transaction")):g("",!0),d("div",{class:y(["hint-icon",{noimg:m(o).$state.popupsdata.type>5,padding_bg:1==m(o).$state.popupsdata.type||5==m(o).$state.popupsdata.type}])},[1==m(o).$state.popupsdata.type||5==m(o).$state.popupsdata.type?(l(),u("img",{key:0,class:"hint-paddimg-icon",src:m(e),alt:""},null,8,W)):g("",!0),1==m(o).$state.popupsdata.type||5==m(o).$state.popupsdata.type?(l(),u("img",{key:1,class:y(["img",{paddimg:1==m(o).$state.popupsdata.type||5==m(o).$state.popupsdata.type}]),src:m(p),alt:""},null,10,C)):g("",!0),2==m(o).$state.popupsdata.type?(l(),u("img",{key:2,class:"img",src:m(Z),alt:""},null,8,F)):g("",!0),3==m(o).$state.popupsdata.type||4==m(o).$state.popupsdata.type?(l(),u("img",{key:3,class:"img",src:m("data:image/png;base64,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"),alt:""},null,8,Y)):g("",!0)],2),2!=m(o).$state.popupsdata.type?(l(),u("div",j,k(D(m(o).$state.popupsdata.type)),1)):(l(),u("div",q,k(D(m(o).$state.popupsdata.type)),1))])])),_:1},8,["modelValue","show-close"])])}}}),Q={},K={class:"footer"},J=[(t=>(h("data-v-21439632"),t=t(),D(),t))((()=>d("div",{class:"footer-text"},"Stakeriod (STRIO)© 2024",-1)))];const E=w(Q,[["render",function(t,a){return l(),u("div",K,J)}],["__scopeId","data-v-21439632"]]),S={class:"main"},V=w(o({__name:"Main",setup(a){const s=f();return(a,e)=>{const p=z("router-view");return l(),u("div",S,["/"!=m(s).path?(l(),v(t,{key:0})):g("",!0),r(p),r(E),r(M)])}}}),[["__scopeId","data-v-c66be574"]]);export{V as default};

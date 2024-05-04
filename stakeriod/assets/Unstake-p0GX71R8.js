import{W as e,R as a,U as s,S as t,V as i,E as l}from"./MsStake-XXQrYsOj.js";import{E as n}from"./el-input-YakXQcco.js";import{_ as u}from"./MetaMask-8E0tWPSn.js";import{u as o,C as d,b as r}from"./custompopups-GfQchbWB.js";/* empty css               */import{E as c}from"./ERC20-wN4H9J0h.js";import{d as v,L as m,r as p,x as w,o as f,c as x,b as g,f as h,E as O,u as S,M as k,t as y,n as E,e as b,F as C,a as F,g as A,p as N,h as _,_ as j}from"./index-HmN8oWZL.js";import{P as D}from"./planet-IJmQEfjB.js";const U=e=>(N("data-v-22ec8969"),e=e(),_(),e),V={class:"deposit unstake"},M={class:"list"},T={class:"item-row"},I=U((()=>h("div",{class:"name"},"Wallet address",-1))),R={class:"parameter wrap-text"},B=U((()=>h("img",{class:"img",src:u,alt:""},null,-1))),W={class:"item-row staked-row"},J=U((()=>h("div",{class:"name"},"Your staked",-1))),L={class:"parameter wrap-text"},z={class:"item-row"},q=U((()=>h("div",{class:"name"},"Unstake",-1))),P=U((()=>h("div",{class:"min-amont"},"STRIO",-1))),Y={class:"hint-content"},$={key:0,class:"title"},G=["src"],H=["src"],K={key:1,class:"hint-name"},Q={key:2,class:"hint-name success"},X=j(v({__name:"Unstake",setup(u){const v=m(),N=o(),_=p(),j=p(!1),U=p(1),X=p(!1);w((async()=>{await te(),await ie(),await ee(),X.value=window.innerWidth<=750,window.addEventListener("resize",le)}));const Z=async()=>{if(+_.value)if(+_.value>+v.StakedAmount)N.Setpopupsdata(!0,6,"Cannot exceed the staked amount");else try{N.Setpopupsdata(!0,1);let e=await se(_.value);await e.wait();N.Setpopupsdata(!0,2),ae(),ee()}catch(e){(JSON.parse(JSON.stringify(e)).code="ACTION_REJECTED")?N.Setpopupsdata(!0,3):N.Setpopupsdata(!0,4)}},ee=async()=>{const i=new e(window.ethereum),l=new a("0xF09FD56e72933f4dC6817006660E6f0d13eB4E75",s.abi,i),n=(await l.userTotalStakeMap(v.accounts)).userTotalStakeAmount;let u=t(n.toString());return v.SetStakedAmount(u),u},ae=async()=>{_.value="",await te(),await ie(),await ee()},se=async t=>{const l=new e(window.ethereum).getSigner(),n=new a("0xF09FD56e72933f4dC6817006660E6f0d13eB4E75",s.abi,l);return await n.Unstake(i(t))},te=async()=>{const s=new e(window.ethereum),i=new a("0x7265b91dAEE8aeFdCAc7DCd263D2624065352308",c.abi,s),l=await i.balanceOf(v.accounts);let n=t(l.toString());return v.SetBalance(n),n},ie=async()=>{const s=new e(window.ethereum),i=new a("0x7265b91dAEE8aeFdCAc7DCd263D2624065352308",c.abi,s),l=await i.allowance(v.accounts,"0xF09FD56e72933f4dC6817006660E6f0d13eB4E75");let n=t(l.toString());return v.SetAllowance(n),n},le=()=>{X.value=window.innerWidth<=750},ne=p(!1),ue=()=>{ne.value=!/^[1-9]\d*(\.\d+)?$/.test(_.value)},oe=p({img:d,text:"Confirm this transaction in your wallet"});return f((()=>{window.removeEventListener("resize",le)})),(e,a)=>{const s=n,t=l;return F(),x(C,null,[g(D),h("div",V,[h("div",{class:"deposit-con_1",style:O(S(v).isMobile?"margin-top:150px":"")},[h("div",M,[h("div",T,[I,h("div",R,[B,k(" "+y(S(v).accounts),1)])]),h("div",W,[J,h("div",L,y((i=S(v).StakedAmount,(0==parseFloat(i)?"0":parseFloat(i))||"0"))+" STRIO",1)]),h("div",z,[q,h("div",{class:E(["parameter amont",{"limit-hov":ne.value}])},[g(s,{type:"number",oninput:"\r\n                if(isNaN(value) || value < 0){value = 0}\r\n                if(value.indexOf('.') >= 6) {value= Number(value.slice(0,value.indexOf('.'))) +value.slice(value.indexOf('.'),value.indexOf('.')+7)}\r\n                if(value.indexOf('.') > -1 && value.indexOf('.') <= 6) { value=Number(value.slice(0,value.indexOf('.'))) + value.slice(value.indexOf('.'),value.indexOf('.')+7)}\r\n                // if(value.indexOf('.') >= 6) {value= Number(value.slice(0,value.indexOf('.'))) +value.slice(value.indexOf('.'), value.indexOf('.')+7)}\r\n                // if(value.indexOf('.') > -1 && value.indexOf('.') <= 6) { value=Number(value.slice(0,value.indexOf('.'))) + value.slice(value.indexOf('.'), value.indexOf('.')+7)} \r\n                ",placeholder:"please enter the unstake quantity",modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=e=>_.value=e),onInput:ue,class:"amont-inp",name:"",id:"",style:{height:"40px"}},null,8,["modelValue"]),P],2)])]),h("div",{class:"item-row deposit-btn"},[h("div",{class:"send mousein",onClick:Z,style:{height:"50px","font-weight":"bolder"}},"Unstake")])],4)]),g(t,{modelValue:j.value,"onUpdate:modelValue":a[1]||(a[1]=e=>j.value=e),width:"30%",onClose:ae,"show-close":1!=U.value,"align-center":"",class:"signdialog"},{default:b((()=>[h("div",Y,[U.value<=2?(F(),x("div",$,"Sign transaction")):A("",!0),h("div",{class:E(["hint-icon",{noimg:U.value>2}])},[1==U.value?(F(),x("img",{key:0,class:"hint-paddimg-icon",src:S(r),alt:""},null,8,G)):A("",!0),oe.value.img?(F(),x("img",{key:1,class:E(["img",{paddimg:1==U.value}]),src:oe.value.img,alt:""},null,10,H)):A("",!0)],2),2!=U.value?(F(),x("div",K,y(oe.value.text),1)):(F(),x("div",Q,y(oe.value.text),1))])])),_:1},8,["modelValue","show-close"])],64);var i}}}),[["__scopeId","data-v-22ec8969"]]);export{X as default};

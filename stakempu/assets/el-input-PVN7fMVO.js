import{v as e,m as a,r as t,s as o,w as l,N as n,H as s,u as r,x as i,X as u,J as d,z as p,d as c,a3 as v,q as f,a4 as m,C as y,B as x,a as b,c as g,g as h,F as w,n as I,D as S,f as z,k,e as C,a1 as F,V as B,b as E,A as $,P,t as M,E as R,R as V}from"./index-lRGnzVmH.js";import{b as _,c as j,f as A,m as N,u as H}from"./ERC20-52pCtVWV.js";import{m as T,o as O,a9 as K,B as L,c as W,b as D,aa as q,ab as G,l as J,C as X,u as Y,ac as Z,ad as Q,ae as U,v as ee,af as ae,d as te,ag as oe,_ as le,w as ne}from"./MsStake-iw_DxEVZ.js";const se=["class","style"],re=/^on[A-Z]/,ie=t=>{const o=a();return e((()=>{var e,a;return null==(a=null==(e=null==o?void 0:o.proxy)?void 0:e.$props)?void 0:a[t]}))};let ue;const de=`\n  height:0 !important;\n  visibility:hidden !important;\n  ${T&&/firefox/i.test(window.navigator.userAgent)?"":"overflow:hidden !important;"}\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n`,pe=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function ce(e,a=1,t){var o;ue||(ue=document.createElement("textarea"),document.body.appendChild(ue));const{paddingSize:l,borderSize:n,boxSizing:s,contextStyle:r}=function(e){const a=window.getComputedStyle(e),t=a.getPropertyValue("box-sizing"),o=Number.parseFloat(a.getPropertyValue("padding-bottom"))+Number.parseFloat(a.getPropertyValue("padding-top")),l=Number.parseFloat(a.getPropertyValue("border-bottom-width"))+Number.parseFloat(a.getPropertyValue("border-top-width"));return{contextStyle:pe.map((e=>`${e}:${a.getPropertyValue(e)}`)).join(";"),paddingSize:o,borderSize:l,boxSizing:t}}(e);ue.setAttribute("style",`${r};${de}`),ue.value=e.value||e.placeholder||"";let i=ue.scrollHeight;const u={};"border-box"===s?i+=n:"content-box"===s&&(i-=l),ue.value="";const d=ue.scrollHeight-l;if(W(a)){let e=d*a;"border-box"===s&&(e=e+l+n),i=Math.max(e,i),u.minHeight=`${e}px`}if(W(t)){let e=d*t;"border-box"===s&&(e=e+l+n),i=Math.min(e,i)}return u.height=`${i}px`,null==(o=ue.parentNode)||o.removeChild(ue),ue=void 0,u}const ve=D({id:{type:String,default:void 0},size:G,disabled:Boolean,modelValue:{type:J([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:J([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:X},prefixIcon:{type:X},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:J([Object,Array,String]),default:()=>N({})},autofocus:{type:Boolean,default:!1}}),fe={[q]:e=>p(e),input:e=>p(e),change:e=>p(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},me=["role"],ye=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],xe=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],be=c({name:"ElInput",inheritAttrs:!1});const ge=ne(le(c({...be,props:ve,emits:fe,setup(p,{expose:c,emit:N}){const W=p,D=v(),G=f(),J=e((()=>{const e={};return"combobox"===W.containerRole&&(e["aria-haspopup"]=D["aria-haspopup"],e["aria-owns"]=D["aria-owns"],e["aria-expanded"]=D["aria-expanded"]),e})),X=e((()=>["textarea"===W.type?ge.b():be.b(),be.m(ve.value),be.is("disabled",fe.value),be.is("exceed",Le.value),{[be.b("group")]:G.prepend||G.append,[be.bm("group","append")]:G.append,[be.bm("group","prepend")]:G.prepend,[be.m("prefix")]:G.prefix||W.prefixIcon,[be.m("suffix")]:G.suffix||W.suffixIcon||W.clearable||W.showPassword,[be.bm("suffix","password-clear")]:He.value&&Te.value},D.class])),le=e((()=>[be.e("wrapper"),be.is("focus",Ee.value)])),ne=((t={})=>{const{excludeListeners:o=!1,excludeKeys:l}=t,n=e((()=>((null==l?void 0:l.value)||[]).concat(se))),s=a();return e(s?()=>{var e;return O(Object.entries(null==(e=s.proxy)?void 0:e.$attrs).filter((([e])=>!(n.value.includes(e)||o&&re.test(e)))))}:()=>({}))})({excludeKeys:e((()=>Object.keys(J.value)))}),{form:ue,formItem:de}={form:s(j,void 0),formItem:s(A,void 0)},{inputId:pe}=((a,{formItemContext:o,disableIdGeneration:n,disableIdManagement:s})=>{n||(n=t(!1)),s||(s=t(!1));const r=t();let p;const c=e((()=>{var e;return!!(!a.label&&o&&o.inputIds&&(null==(e=o.inputIds)?void 0:e.length)<=1)}));return i((()=>{p=l([u(a,"id"),n],(([e,a])=>{const t=null!=e?e:a?void 0:L().value;t!==r.value&&((null==o?void 0:o.removeInputId)&&(r.value&&o.removeInputId(r.value),(null==s?void 0:s.value)||a||!t||o.addInputId(t)),r.value=t)}),{immediate:!0})})),d((()=>{p&&p(),(null==o?void 0:o.removeInputId)&&r.value&&o.removeInputId(r.value)})),{isLabeledByFormItem:c,inputId:r}})(W,{formItemContext:de}),ve=((a,o={})=>{const l=t(void 0),n=o.prop?l:ie("size"),i=o.global?l:K(),u=o.form?{size:void 0}:s(j,void 0),d=o.formItem?{size:void 0}:s(A,void 0);return e((()=>n.value||r(a)||(null==d?void 0:d.size)||(null==u?void 0:u.size)||i.value||""))})(),fe=(a=>{const t=ie("disabled"),o=s(j,void 0);return e((()=>t.value||r(a)||(null==o?void 0:o.disabled)||!1))})(),be=Y("input"),ge=Y("textarea"),he=o(),we=o(),Ie=t(!1),Se=t(!1),ze=t(!1),ke=t(),Ce=o(W.inputStyle),Fe=e((()=>he.value||we.value)),{wrapperRef:Be,isFocused:Ee,handleFocus:$e,handleBlur:Pe}=function(e,{afterFocus:s,beforeBlur:r,afterBlur:i}={}){const u=a(),{emit:d}=u,p=o(),c=t(!1);return l(p,(e=>{e&&e.setAttribute("tabindex","-1")})),_(p,"click",(()=>{var a;null==(a=e.value)||a.focus()})),{wrapperRef:p,isFocused:c,handleFocus:e=>{c.value||(c.value=!0,d("focus",e),null==s||s())},handleBlur:e=>{var a;n(r)&&r(e)||e.relatedTarget&&(null==(a=p.value)?void 0:a.contains(e.relatedTarget))||(c.value=!1,d("blur",e),null==i||i())}}}(Fe,{afterBlur(){var e;W.validateEvent&&(null==(e=null==de?void 0:de.validate)||e.call(de,"blur").catch((e=>ae())))}}),Me=e((()=>{var e;return null!=(e=null==ue?void 0:ue.statusIcon)&&e})),Re=e((()=>(null==de?void 0:de.validateState)||"")),Ve=e((()=>Re.value&&Z[Re.value])),_e=e((()=>ze.value?Q:U)),je=e((()=>[D.style,W.inputStyle])),Ae=e((()=>[W.inputStyle,Ce.value,{resize:W.resize}])),Ne=e((()=>ee(W.modelValue)?"":String(W.modelValue))),He=e((()=>W.clearable&&!fe.value&&!W.readonly&&!!Ne.value&&(Ee.value||Ie.value))),Te=e((()=>W.showPassword&&!fe.value&&!W.readonly&&!!Ne.value&&(!!Ne.value||Ee.value))),Oe=e((()=>W.showWordLimit&&!!ne.value.maxlength&&("text"===W.type||"textarea"===W.type)&&!fe.value&&!W.readonly&&!W.showPassword)),Ke=e((()=>Ne.value.length)),Le=e((()=>!!Oe.value&&Ke.value>Number(ne.value.maxlength))),We=e((()=>!!G.suffix||!!W.suffixIcon||He.value||W.showPassword||Oe.value||!!Re.value&&Me.value)),[De,qe]=function(e){const a=t();return[function(){if(null==e.value)return;const{selectionStart:t,selectionEnd:o,value:l}=e.value;if(null==t||null==o)return;const n=l.slice(0,Math.max(0,t)),s=l.slice(Math.max(0,o));a.value={selectionStart:t,selectionEnd:o,value:l,beforeTxt:n,afterTxt:s}},function(){if(null==e.value||null==a.value)return;const{value:t}=e.value,{beforeTxt:o,afterTxt:l,selectionStart:n}=a.value;if(null==o||null==l||null==n)return;let s=t.length;if(t.endsWith(l))s=t.length-l.length;else if(t.startsWith(o))s=o.length;else{const e=o[n-1],a=t.indexOf(e,n-1);-1!==a&&(s=a+1)}e.value.setSelectionRange(s,s)}]}(he);H(we,(e=>{if(Je(),!Oe.value||"both"!==W.resize)return;const a=e[0],{width:t}=a.contentRect;ke.value={right:`calc(100% - ${t+15+6}px)`}}));const Ge=()=>{const{type:e,autosize:a}=W;if(T&&"textarea"===e&&we.value)if(a){const e=V(a)?a.minRows:void 0,t=V(a)?a.maxRows:void 0,o=ce(we.value,e,t);Ce.value={overflowY:"hidden",...o},m((()=>{we.value.offsetHeight,Ce.value=o}))}else Ce.value={minHeight:ce(we.value).minHeight}},Je=(e=>{let a=!1;return()=>{var t;if(a||!W.autosize)return;null===(null==(t=we.value)?void 0:t.offsetParent)||(e(),a=!0)}})(Ge),Xe=()=>{const e=Fe.value,a=W.formatter?W.formatter(Ne.value):Ne.value;e&&e.value!==a&&(e.value=a)},Ye=async e=>{De();let{value:a}=e.target;W.formatter&&(a=W.parser?W.parser(a):a),Se.value||(a!==Ne.value?(N(q,a),N("input",a),await m(),Xe(),qe()):Xe())},Ze=e=>{N("change",e.target.value)},Qe=e=>{N("compositionstart",e),Se.value=!0},Ue=e=>{var a;N("compositionupdate",e);const t=null==(a=e.target)?void 0:a.value,o=t[t.length-1]||"";Se.value=!(e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e))(o)},ea=e=>{N("compositionend",e),Se.value&&(Se.value=!1,Ye(e))},aa=()=>{ze.value=!ze.value,ta()},ta=async()=>{var e;await m(),null==(e=Fe.value)||e.focus()},oa=e=>{Ie.value=!1,N("mouseleave",e)},la=e=>{Ie.value=!0,N("mouseenter",e)},na=e=>{N("keydown",e)},sa=()=>{N(q,""),N("change",""),N("clear"),N("input","")};return l((()=>W.modelValue),(()=>{var e;m((()=>Ge())),W.validateEvent&&(null==(e=null==de?void 0:de.validate)||e.call(de,"change").catch((e=>ae())))})),l(Ne,(()=>Xe())),l((()=>W.type),(async()=>{await m(),Xe(),Ge()})),i((()=>{!W.formatter&&W.parser,Xe(),m(Ge)})),c({input:he,textarea:we,ref:Fe,textareaStyle:Ae,autosize:u(W,"autosize"),focus:ta,blur:()=>{var e;return null==(e=Fe.value)?void 0:e.blur()},select:()=>{var e;null==(e=Fe.value)||e.select()},clear:sa,resizeTextarea:Ge}),(e,a)=>y((b(),g("div",B(r(J),{class:r(X),style:r(je),role:e.containerRole,onMouseenter:la,onMouseleave:oa}),[h(" input "),"textarea"!==e.type?(b(),g(w,{key:0},[h(" prepend slot "),e.$slots.prepend?(b(),g("div",{key:0,class:I(r(be).be("group","prepend"))},[S(e.$slots,"prepend")],2)):h("v-if",!0),z("div",{ref_key:"wrapperRef",ref:Be,class:I(r(le))},[h(" prefix slot "),e.$slots.prefix||e.prefixIcon?(b(),g("span",{key:0,class:I(r(be).e("prefix"))},[z("span",{class:I(r(be).e("prefix-inner"))},[S(e.$slots,"prefix"),e.prefixIcon?(b(),k(r(te),{key:0,class:I(r(be).e("icon"))},{default:C((()=>[(b(),k(F(e.prefixIcon)))])),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0),z("input",B({id:r(pe),ref_key:"input",ref:he,class:r(be).e("inner")},r(ne),{type:e.showPassword?ze.value?"text":"password":e.type,disabled:r(fe),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:W.form,autofocus:W.autofocus,onCompositionstart:Qe,onCompositionupdate:Ue,onCompositionend:ea,onInput:Ye,onFocus:a[0]||(a[0]=(...e)=>r($e)&&r($e)(...e)),onBlur:a[1]||(a[1]=(...e)=>r(Pe)&&r(Pe)(...e)),onChange:Ze,onKeydown:na}),null,16,ye),h(" suffix slot "),r(We)?(b(),g("span",{key:1,class:I(r(be).e("suffix"))},[z("span",{class:I(r(be).e("suffix-inner"))},[r(He)&&r(Te)&&r(Oe)?h("v-if",!0):(b(),g(w,{key:0},[S(e.$slots,"suffix"),e.suffixIcon?(b(),k(r(te),{key:0,class:I(r(be).e("icon"))},{default:C((()=>[(b(),k(F(e.suffixIcon)))])),_:1},8,["class"])):h("v-if",!0)],64)),r(He)?(b(),k(r(te),{key:1,class:I([r(be).e("icon"),r(be).e("clear")]),onMousedown:$(r(P),["prevent"]),onClick:sa},{default:C((()=>[E(r(oe))])),_:1},8,["class","onMousedown"])):h("v-if",!0),r(Te)?(b(),k(r(te),{key:2,class:I([r(be).e("icon"),r(be).e("password")]),onClick:aa},{default:C((()=>[(b(),k(F(r(_e))))])),_:1},8,["class"])):h("v-if",!0),r(Oe)?(b(),g("span",{key:3,class:I(r(be).e("count"))},[z("span",{class:I(r(be).e("count-inner"))},M(r(Ke))+" / "+M(r(ne).maxlength),3)],2)):h("v-if",!0),r(Re)&&r(Ve)&&r(Me)?(b(),k(r(te),{key:4,class:I([r(be).e("icon"),r(be).e("validateIcon"),r(be).is("loading","validating"===r(Re))])},{default:C((()=>[(b(),k(F(r(Ve))))])),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0)],2),h(" append slot "),e.$slots.append?(b(),g("div",{key:1,class:I(r(be).be("group","append"))},[S(e.$slots,"append")],2)):h("v-if",!0)],64)):(b(),g(w,{key:1},[h(" textarea "),z("textarea",B({id:r(pe),ref_key:"textarea",ref:we,class:r(ge).e("inner")},r(ne),{tabindex:e.tabindex,disabled:r(fe),readonly:e.readonly,autocomplete:e.autocomplete,style:r(Ae),"aria-label":e.label,placeholder:e.placeholder,form:W.form,autofocus:W.autofocus,onCompositionstart:Qe,onCompositionupdate:Ue,onCompositionend:ea,onInput:Ye,onFocus:a[2]||(a[2]=(...e)=>r($e)&&r($e)(...e)),onBlur:a[3]||(a[3]=(...e)=>r(Pe)&&r(Pe)(...e)),onChange:Ze,onKeydown:na}),null,16,xe),r(Oe)?(b(),g("span",{key:0,style:R(ke.value),class:I(r(be).e("count"))},M(r(Ke))+" / "+M(r(ne).maxlength),7)):h("v-if",!0)],64))],16,me)),[[x,"hidden"!==e.type]])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]));export{ge as E};

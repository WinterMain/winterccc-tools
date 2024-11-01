import{bQ as Be,q as be,av as Me,aL as he,bR as ae,W as F,ae as Te,ac as Se,M as ke,bS as Le,bT as Ie,E as Ae,bU as Oe,bV as Ve,n as M,r as O,m as $e,N as le,bL as ie,bW as re,bX as ue,V as ce,bY as ze,bB as Re,bC as V,o as f,c as h,w as v,a8 as _,b as T,a as g,Y as r,Z as de,$ as j,j as x,a5 as W,D as $,t as N,aU as G,aa as Pe,e as ee,a9 as ne,X as De,bZ as Ue,G as Ne,am as ye,b_ as Ce,by as Ee,bv as fe,bA as Fe,aS as He,aO as me,al as pe}from"./mr6caFf0.js";import{E as Xe}from"./DezUpo8g.js";import{E as Ke}from"./Cds85Zfm.js";const Ye='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',qe=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,ve=e=>Array.from(e.querySelectorAll(Ye)).filter(o=>je(o)&&qe(o)),je=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},We=e=>["",...Be].includes(e),Ge=(e,o,a,i)=>{let s={offsetX:0,offsetY:0};const t=n=>{const R=n.clientX,P=n.clientY,{offsetX:u,offsetY:D}=s,k=e.value.getBoundingClientRect(),p=k.left,U=k.top,C=k.width,L=k.height,X=document.documentElement.clientWidth,Z=document.documentElement.clientHeight,Q=-p+u,J=-U+D,E=X-p-C+u,K=Z-U-L+D,Y=w=>{let B=u+w.clientX-R,I=D+w.clientY-P;i!=null&&i.value||(B=Math.min(Math.max(B,Q),E),I=Math.min(Math.max(I,J),K)),s={offsetX:B,offsetY:I},e.value&&(e.value.style.transform="translate(".concat(ae(B),", ").concat(ae(I),")"))},q=()=>{document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",q)};document.addEventListener("mousemove",Y),document.addEventListener("mouseup",q)},c=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",t)},d=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",t)},m=()=>{s={offsetX:0,offsetY:0},e.value&&(e.value.style.transform="none")};return be(()=>{Me(()=>{a.value?c():d()})}),he(()=>{d()}),{resetPosition:m}},oe="_trap-focus-children",S=[],ge=e=>{if(S.length===0)return;const o=S[S.length-1][oe];if(o.length>0&&e.code===Te.tab){if(o.length===1){e.preventDefault(),document.activeElement!==o[0]&&o[0].focus();return}const a=e.shiftKey,i=e.target===o[0],s=e.target===o[o.length-1];i&&a&&(e.preventDefault(),o[o.length-1].focus()),s&&!a&&(e.preventDefault(),o[0].focus())}},Ze={beforeMount(e){e[oe]=ve(e),S.push(e),S.length<=1&&document.addEventListener("keydown",ge)},updated(e){F(()=>{e[oe]=ve(e)})},unmounted(){S.shift(),S.length===0&&document.removeEventListener("keydown",ge)}},Qe=ke({name:"ElMessageBox",directives:{TrapFocus:Ze},components:{ElButton:Xe,ElFocusTrap:Le,ElInput:Ke,ElOverlay:Ie,ElIcon:Ae,...Oe},inheritAttrs:!1,props:{buttonSize:{type:String,validator:We},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,overflow:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:o}){const{locale:a,zIndex:i,ns:s,size:t}=Ve("message-box",M(()=>e.buttonSize)),{t:c}=a,{nextZIndex:d}=i,m=O(!1),n=$e({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonLoadingIcon:le(ie),cancelButtonLoadingIcon:le(ie),confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:d()}),R=M(()=>{const l=n.type;return{[s.bm("icon",l)]:l&&re[l]}}),P=ue(),u=ue(),D=M(()=>n.icon||re[n.type]||""),k=M(()=>!!n.message),p=O(),U=O(),C=O(),L=O(),X=O(),Z=M(()=>n.confirmButtonClass);ce(()=>n.inputValue,async l=>{await F(),e.boxType==="prompt"&&l!==null&&B()},{immediate:!0}),ce(()=>m.value,l=>{var b,A;l&&(e.boxType!=="prompt"&&(n.autofocus?C.value=(A=(b=X.value)==null?void 0:b.$el)!=null?A:p.value:C.value=p.value),n.zIndex=d()),e.boxType==="prompt"&&(l?F().then(()=>{var se;L.value&&L.value.$el&&(n.autofocus?C.value=(se=I())!=null?se:p.value:C.value=p.value)}):(n.editorErrorMessage="",n.validateError=!1))});const Q=M(()=>e.draggable),J=M(()=>e.overflow);Ge(p,U,Q,J),be(async()=>{await F(),e.closeOnHashChange&&window.addEventListener("hashchange",E)}),he(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",E)});function E(){m.value&&(m.value=!1,F(()=>{n.action&&o("action",n.action)}))}const K=()=>{e.closeOnClickModal&&w(n.distinguishCancelAndClose?"close":"cancel")},Y=Ue(K),q=l=>{if(n.inputType!=="textarea")return l.preventDefault(),w("confirm")},w=l=>{var b;e.boxType==="prompt"&&l==="confirm"&&!B()||(n.action=l,n.beforeClose?(b=n.beforeClose)==null||b.call(n,l,n,E):E())},B=()=>{if(e.boxType==="prompt"){const l=n.inputPattern;if(l&&!l.test(n.inputValue||""))return n.editorErrorMessage=n.inputErrorMessage||c("el.messagebox.error"),n.validateError=!0,!1;const b=n.inputValidator;if(typeof b=="function"){const A=b(n.inputValue);if(A===!1)return n.editorErrorMessage=n.inputErrorMessage||c("el.messagebox.error"),n.validateError=!0,!1;if(typeof A=="string")return n.editorErrorMessage=A,n.validateError=!0,!1}}return n.editorErrorMessage="",n.validateError=!1,!0},I=()=>{const l=L.value.$refs;return l.input||l.textarea},te=()=>{w("close")},we=()=>{e.closeOnPressEscape&&te()};return e.lockScroll&&ze(m),{...Re(n),ns:s,overlayEvent:Y,visible:m,hasMessage:k,typeClass:R,contentId:P,inputId:u,btnSize:t,iconComponent:D,confirmButtonClasses:Z,rootRef:p,focusStartRef:C,headerRef:U,inputRef:L,confirmRef:X,doClose:E,handleClose:te,onCloseRequested:we,handleWrapperClick:K,handleInputEnter:q,handleAction:w,t:c}}});function Je(e,o,a,i,s,t){const c=V("el-icon"),d=V("close"),m=V("el-input"),n=V("el-button"),R=V("el-focus-trap"),P=V("el-overlay");return f(),h(De,{name:"fade-in-linear",onAfterLeave:u=>e.$emit("vanish"),persisted:""},{default:v(()=>[_(T(P,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:v(()=>[g("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:r("".concat(e.ns.namespace.value,"-overlay-message-box")),onClick:e.overlayEvent.onClick,onMousedown:e.overlayEvent.onMousedown,onMouseup:e.overlayEvent.onMouseup},[T(R,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:v(()=>[g("div",{ref:"rootRef",class:r([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:de(e.customStyle),tabindex:"-1",onClick:j(()=>{},["stop"])},[e.title!==null&&e.title!==void 0?(f(),x("div",{key:0,ref:"headerRef",class:r([e.ns.e("header"),{"show-close":e.showClose}])},[g("div",{class:r(e.ns.e("title"))},[e.iconComponent&&e.center?(f(),h(c,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:v(()=>[(f(),h(W(e.iconComponent)))]),_:1},8,["class"])):$("v-if",!0),g("span",null,N(e.title),1)],2),e.showClose?(f(),x("button",{key:0,type:"button",class:r(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),onKeydown:G(j(u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"])},[T(c,{class:r(e.ns.e("close"))},{default:v(()=>[T(d)]),_:1},8,["class"])],42,["aria-label","onClick","onKeydown"])):$("v-if",!0)],2)):$("v-if",!0),g("div",{id:e.contentId,class:r(e.ns.e("content"))},[g("div",{class:r(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(f(),h(c,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:v(()=>[(f(),h(W(e.iconComponent)))]),_:1},8,["class"])):$("v-if",!0),e.hasMessage?(f(),x("div",{key:1,class:r(e.ns.e("message"))},[Pe(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(f(),h(W(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(f(),h(W(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:v(()=>[ee(N(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):$("v-if",!0)],2),_(g("div",{class:r(e.ns.e("input"))},[T(m,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":u=>e.inputValue=u,type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:r({invalid:e.validateError}),onKeydown:G(e.handleInputEnter,["enter"])},null,8,["id","modelValue","onUpdate:modelValue","type","placeholder","aria-invalid","class","onKeydown"]),g("div",{class:r(e.ns.e("errormsg")),style:de({visibility:e.editorErrorMessage?"visible":"hidden"})},N(e.editorErrorMessage),7)],2),[[ne,e.showInput]])],10,["id"]),g("div",{class:r(e.ns.e("btns"))},[e.showCancelButton?(f(),h(n,{key:0,loading:e.cancelButtonLoading,"loading-icon":e.cancelButtonLoadingIcon,class:r([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:u=>e.handleAction("cancel"),onKeydown:G(j(u=>e.handleAction("cancel"),["prevent"]),["enter"])},{default:v(()=>[ee(N(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","loading-icon","class","round","size","onClick","onKeydown"])):$("v-if",!0),_(T(n,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,"loading-icon":e.confirmButtonLoadingIcon,class:r([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:u=>e.handleAction("confirm"),onKeydown:G(j(u=>e.handleAction("confirm"),["prevent"]),["enter"])},{default:v(()=>[ee(N(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","loading-icon","class","round","disabled","size","onClick","onKeydown"]),[[ne,e.showConfirmButton]])],2)],14,["onClick"])]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,["aria-label","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["z-index","overlay-class","mask"]),[[ne,e.visible]])]),_:3},8,["onAfterLeave"])}var _e=Se(Qe,[["render",Je],["__file","index.vue"]]);const H=new Map,xe=e=>{let o=document.body;return e.appendTo&&(ye(e.appendTo)&&(o=document.querySelector(e.appendTo)),pe(e.appendTo)&&(o=e.appendTo),pe(o)||(o=document.body)),o},en=(e,o,a=null)=>{const i=T(_e,e,me(e.message)||Ce(e.message)?{default:me(e.message)?e.message:()=>e.message}:null);return i.appContext=a,Ee(i,o),xe(e).appendChild(o.firstElementChild),i.component},nn=()=>document.createElement("div"),on=(e,o)=>{const a=nn();e.onVanish=()=>{Ee(null,a),H.delete(s)},e.onAction=t=>{const c=H.get(s);let d;e.showInput?d={value:s.inputValue,action:t}:d=t,e.callback?e.callback(d,i.proxy):t==="cancel"||t==="close"?e.distinguishCancelAndClose&&t!=="cancel"?c.reject("close"):c.reject("cancel"):c.resolve(d)};const i=en(e,a,o),s=i.proxy;for(const t in e)fe(e,t)&&!fe(s.$props,t)&&(s[t]=e[t]);return s.visible=!0,s};function z(e,o=null){if(!Ne)return Promise.reject();let a;return ye(e)||Ce(e)?e={message:e}:a=e.callback,new Promise((i,s)=>{const t=on(e,o!=null?o:z._context);H.set(t,{options:e,callback:a,resolve:i,reject:s})})}const tn=["alert","confirm","prompt"],sn={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};tn.forEach(e=>{z[e]=an(e)});function an(e){return(o,a,i,s)=>{let t="";return Fe(a)?(i=a,t=""):He(a)?t="":t=a,z(Object.assign({title:t,message:o,type:"",...sn[e]},i,{boxType:e}),s)}}z.close=()=>{H.forEach((e,o)=>{o.doClose()}),H.clear()};z._context=null;const y=z;y.install=e=>{y._context=e._context,e.config.globalProperties.$msgbox=y,e.config.globalProperties.$messageBox=y,e.config.globalProperties.$alert=y.alert,e.config.globalProperties.$confirm=y.confirm,e.config.globalProperties.$prompt=y.prompt};const cn=y;export{cn as E};
import{c9 as Be,o as he,aT as Me,C as be,ca as ae,A as H,Q as Te,H as Se,n as ke,cb as Le,cc as Ie,E as Ae,cd as $e,ce as Ve,L as M,r as $,$ as Oe,as as le,a6 as ie,cf as re,cg as ue,z as ce,ch as ze,b_ as Pe,b$ as V,a as f,c as b,w as v,a1 as _,d as T,b as g,F as r,G as de,az as j,D as x,aC as W,a3 as O,t as F,bc as G,S as Re,f as ee,a2 as ne,ay as De,ci as Ue,aq as Fe,W as ye,j as Ce,bX as Ee,bV as fe,bZ as He,V as Ne,b7 as me,aL as pe}from"./BT5G2MOW.js";import{E as Xe}from"./gLNgPL-R.js";import{E as Ke}from"./BZJptKwx.js";const Ye='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',qe=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,ve=e=>Array.from(e.querySelectorAll(Ye)).filter(o=>je(o)&&qe(o)),je=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},We=e=>["",...Be].includes(e),Ge=(e,o,a,i)=>{let s={offsetX:0,offsetY:0};const t=n=>{const P=n.clientX,R=n.clientY,{offsetX:u,offsetY:D}=s,k=e.value.getBoundingClientRect(),p=k.left,U=k.top,C=k.width,L=k.height,X=document.documentElement.clientWidth,Z=document.documentElement.clientHeight,Q=-p+u,J=-U+D,E=X-p-C+u,K=Z-U-L+D,Y=w=>{let B=u+w.clientX-P,I=D+w.clientY-R;i!=null&&i.value||(B=Math.min(Math.max(B,Q),E),I=Math.min(Math.max(I,J),K)),s={offsetX:B,offsetY:I},e.value&&(e.value.style.transform="translate(".concat(ae(B),", ").concat(ae(I),")"))},q=()=>{document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",q)};document.addEventListener("mousemove",Y),document.addEventListener("mouseup",q)},c=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",t)},d=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",t)},m=()=>{s={offsetX:0,offsetY:0},e.value&&(e.value.style.transform="none")};return he(()=>{Me(()=>{a.value?c():d()})}),be(()=>{d()}),{resetPosition:m}},oe="_trap-focus-children",S=[],ge=e=>{if(S.length===0)return;const o=S[S.length-1][oe];if(o.length>0&&e.code===Te.tab){if(o.length===1){e.preventDefault(),document.activeElement!==o[0]&&o[0].focus();return}const a=e.shiftKey,i=e.target===o[0],s=e.target===o[o.length-1];i&&a&&(e.preventDefault(),o[o.length-1].focus()),s&&!a&&(e.preventDefault(),o[0].focus())}},Ze={beforeMount(e){e[oe]=ve(e),S.push(e),S.length<=1&&document.addEventListener("keydown",ge)},updated(e){H(()=>{e[oe]=ve(e)})},unmounted(){S.shift(),S.length===0&&document.removeEventListener("keydown",ge)}},Qe=ke({name:"ElMessageBox",directives:{TrapFocus:Ze},components:{ElButton:Xe,ElFocusTrap:Le,ElInput:Ke,ElOverlay:Ie,ElIcon:Ae,...$e},inheritAttrs:!1,props:{buttonSize:{type:String,validator:We},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,overflow:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:o}){const{locale:a,zIndex:i,ns:s,size:t}=Ve("message-box",M(()=>e.buttonSize)),{t:c}=a,{nextZIndex:d}=i,m=$(!1),n=Oe({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonLoadingIcon:le(ie),cancelButtonLoadingIcon:le(ie),confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:d()}),P=M(()=>{const l=n.type;return{[s.bm("icon",l)]:l&&re[l]}}),R=ue(),u=ue(),D=M(()=>n.icon||re[n.type]||""),k=M(()=>!!n.message),p=$(),U=$(),C=$(),L=$(),X=$(),Z=M(()=>n.confirmButtonClass);ce(()=>n.inputValue,async l=>{await H(),e.boxType==="prompt"&&l!==null&&B()},{immediate:!0}),ce(()=>m.value,l=>{var h,A;l&&(e.boxType!=="prompt"&&(n.autofocus?C.value=(A=(h=X.value)==null?void 0:h.$el)!=null?A:p.value:C.value=p.value),n.zIndex=d()),e.boxType==="prompt"&&(l?H().then(()=>{var se;L.value&&L.value.$el&&(n.autofocus?C.value=(se=I())!=null?se:p.value:C.value=p.value)}):(n.editorErrorMessage="",n.validateError=!1))});const Q=M(()=>e.draggable),J=M(()=>e.overflow);Ge(p,U,Q,J),he(async()=>{await H(),e.closeOnHashChange&&window.addEventListener("hashchange",E)}),be(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",E)});function E(){m.value&&(m.value=!1,H(()=>{n.action&&o("action",n.action)}))}const K=()=>{e.closeOnClickModal&&w(n.distinguishCancelAndClose?"close":"cancel")},Y=Ue(K),q=l=>{if(n.inputType!=="textarea")return l.preventDefault(),w("confirm")},w=l=>{var h;e.boxType==="prompt"&&l==="confirm"&&!B()||(n.action=l,n.beforeClose?(h=n.beforeClose)==null||h.call(n,l,n,E):E())},B=()=>{if(e.boxType==="prompt"){const l=n.inputPattern;if(l&&!l.test(n.inputValue||""))return n.editorErrorMessage=n.inputErrorMessage||c("el.messagebox.error"),n.validateError=!0,!1;const h=n.inputValidator;if(typeof h=="function"){const A=h(n.inputValue);if(A===!1)return n.editorErrorMessage=n.inputErrorMessage||c("el.messagebox.error"),n.validateError=!0,!1;if(typeof A=="string")return n.editorErrorMessage=A,n.validateError=!0,!1}}return n.editorErrorMessage="",n.validateError=!1,!0},I=()=>{const l=L.value.$refs;return l.input||l.textarea},te=()=>{w("close")},we=()=>{e.closeOnPressEscape&&te()};return e.lockScroll&&ze(m),{...Pe(n),ns:s,overlayEvent:Y,visible:m,hasMessage:k,typeClass:P,contentId:R,inputId:u,btnSize:t,iconComponent:D,confirmButtonClasses:Z,rootRef:p,focusStartRef:C,headerRef:U,inputRef:L,confirmRef:X,doClose:E,handleClose:te,onCloseRequested:we,handleWrapperClick:K,handleInputEnter:q,handleAction:w,t:c}}});function Je(e,o,a,i,s,t){const c=V("el-icon"),d=V("close"),m=V("el-input"),n=V("el-button"),P=V("el-focus-trap"),R=V("el-overlay");return f(),b(De,{name:"fade-in-linear",onAfterLeave:u=>e.$emit("vanish"),persisted:""},{default:v(()=>[_(T(R,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:v(()=>[g("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:r("".concat(e.ns.namespace.value,"-overlay-message-box")),onClick:e.overlayEvent.onClick,onMousedown:e.overlayEvent.onMousedown,onMouseup:e.overlayEvent.onMouseup},[T(P,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:v(()=>[g("div",{ref:"rootRef",class:r([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:de(e.customStyle),tabindex:"-1",onClick:j(()=>{},["stop"])},[e.title!==null&&e.title!==void 0?(f(),x("div",{key:0,ref:"headerRef",class:r([e.ns.e("header"),{"show-close":e.showClose}])},[g("div",{class:r(e.ns.e("title"))},[e.iconComponent&&e.center?(f(),b(c,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:v(()=>[(f(),b(W(e.iconComponent)))]),_:1},8,["class"])):O("v-if",!0),g("span",null,F(e.title),1)],2),e.showClose?(f(),x("button",{key:0,type:"button",class:r(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),onKeydown:G(j(u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"])},[T(c,{class:r(e.ns.e("close"))},{default:v(()=>[T(d)]),_:1},8,["class"])],42,["aria-label","onClick","onKeydown"])):O("v-if",!0)],2)):O("v-if",!0),g("div",{id:e.contentId,class:r(e.ns.e("content"))},[g("div",{class:r(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(f(),b(c,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:v(()=>[(f(),b(W(e.iconComponent)))]),_:1},8,["class"])):O("v-if",!0),e.hasMessage?(f(),x("div",{key:1,class:r(e.ns.e("message"))},[Re(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(f(),b(W(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(f(),b(W(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:v(()=>[ee(F(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):O("v-if",!0)],2),_(g("div",{class:r(e.ns.e("input"))},[T(m,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":u=>e.inputValue=u,type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:r({invalid:e.validateError}),onKeydown:G(e.handleInputEnter,["enter"])},null,8,["id","modelValue","onUpdate:modelValue","type","placeholder","aria-invalid","class","onKeydown"]),g("div",{class:r(e.ns.e("errormsg")),style:de({visibility:e.editorErrorMessage?"visible":"hidden"})},F(e.editorErrorMessage),7)],2),[[ne,e.showInput]])],10,["id"]),g("div",{class:r(e.ns.e("btns"))},[e.showCancelButton?(f(),b(n,{key:0,loading:e.cancelButtonLoading,"loading-icon":e.cancelButtonLoadingIcon,class:r([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:u=>e.handleAction("cancel"),onKeydown:G(j(u=>e.handleAction("cancel"),["prevent"]),["enter"])},{default:v(()=>[ee(F(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","loading-icon","class","round","size","onClick","onKeydown"])):O("v-if",!0),_(T(n,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,"loading-icon":e.confirmButtonLoadingIcon,class:r([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:u=>e.handleAction("confirm"),onKeydown:G(j(u=>e.handleAction("confirm"),["prevent"]),["enter"])},{default:v(()=>[ee(F(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","loading-icon","class","round","disabled","size","onClick","onKeydown"]),[[ne,e.showConfirmButton]])],2)],14,["onClick"])]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,["aria-label","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["z-index","overlay-class","mask"]),[[ne,e.visible]])]),_:3},8,["onAfterLeave"])}var _e=Se(Qe,[["render",Je],["__file","index.vue"]]);const N=new Map,xe=e=>{let o=document.body;return e.appendTo&&(ye(e.appendTo)&&(o=document.querySelector(e.appendTo)),pe(e.appendTo)&&(o=e.appendTo),pe(o)||(o=document.body)),o},en=(e,o,a=null)=>{const i=T(_e,e,me(e.message)||Ce(e.message)?{default:me(e.message)?e.message:()=>e.message}:null);return i.appContext=a,Ee(i,o),xe(e).appendChild(o.firstElementChild),i.component},nn=()=>document.createElement("div"),on=(e,o)=>{const a=nn();e.onVanish=()=>{Ee(null,a),N.delete(s)},e.onAction=t=>{const c=N.get(s);let d;e.showInput?d={value:s.inputValue,action:t}:d=t,e.callback?e.callback(d,i.proxy):t==="cancel"||t==="close"?e.distinguishCancelAndClose&&t!=="cancel"?c.reject("close"):c.reject("cancel"):c.resolve(d)};const i=en(e,a,o),s=i.proxy;for(const t in e)fe(e,t)&&!fe(s.$props,t)&&(s[t]=e[t]);return s.visible=!0,s};function z(e,o=null){if(!Fe)return Promise.reject();let a;return ye(e)||Ce(e)?e={message:e}:a=e.callback,new Promise((i,s)=>{const t=on(e,o!=null?o:z._context);N.set(t,{options:e,callback:a,resolve:i,reject:s})})}const tn=["alert","confirm","prompt"],sn={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};tn.forEach(e=>{z[e]=an(e)});function an(e){return(o,a,i,s)=>{let t="";return He(a)?(i=a,t=""):Ne(a)?t="":t=a,z(Object.assign({title:t,message:o,type:"",...sn[e]},i,{boxType:e}),s)}}z.close=()=>{N.forEach((e,o)=>{o.doClose()}),N.clear()};z._context=null;const y=z;y.install=e=>{y._context=e._context,e.config.globalProperties.$msgbox=y,e.config.globalProperties.$messageBox=y,e.config.globalProperties.$alert=y.alert,e.config.globalProperties.$confirm=y.confirm,e.config.globalProperties.$prompt=y.prompt};const cn=y;export{cn as E};

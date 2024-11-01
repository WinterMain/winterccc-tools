import{bO as Be,S as be,as as Me,aI as he,bP as ae,R as F,aa as Te,a8 as Se,G as ke,bQ as Ie,bR as Le,E as Ae,bS as Oe,bT as Ve,P as M,r as O,ar as $e,H as le,bI as ie,bU as re,bV as ue,Q as ce,bW as Pe,by as Re,bz as V,o as f,c as h,w as v,a4 as x,b as T,a as g,U as r,V as de,W as q,j as _,a1 as W,x as $,t as H,aR as G,a6 as ze,e as ee,a5 as ne,T as Ue,bX as De,y as He,ai as ye,bY as Ce,bv as Ee,bs as fe,bx as Fe,aP as Ne,aL as me,ah as pe}from"./L3kcE7qW.js";import{E as Xe}from"./ClbjwA0C.js";import{E as Ke}from"./Dd8xN0Fr.js";const Ye='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',je=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,ve=e=>Array.from(e.querySelectorAll(Ye)).filter(o=>qe(o)&&je(o)),qe=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},We=e=>["",...Be].includes(e),Ge=(e,o,a,i)=>{let s={offsetX:0,offsetY:0};const t=n=>{const R=n.clientX,z=n.clientY,{offsetX:u,offsetY:U}=s,k=e.value.getBoundingClientRect(),p=k.left,D=k.top,C=k.width,I=k.height,X=document.documentElement.clientWidth,Q=document.documentElement.clientHeight,Z=-p+u,J=-D+U,E=X-p-C+u,K=Q-D-I+U,Y=w=>{let B=u+w.clientX-R,L=U+w.clientY-z;i!=null&&i.value||(B=Math.min(Math.max(B,Z),E),L=Math.min(Math.max(L,J),K)),s={offsetX:B,offsetY:L},e.value&&(e.value.style.transform="translate(".concat(ae(B),", ").concat(ae(L),")"))},j=()=>{document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",j)};document.addEventListener("mousemove",Y),document.addEventListener("mouseup",j)},c=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",t)},d=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",t)},m=()=>{s={offsetX:0,offsetY:0},e.value&&(e.value.style.transform="none")};return be(()=>{Me(()=>{a.value?c():d()})}),he(()=>{d()}),{resetPosition:m}},oe="_trap-focus-children",S=[],ge=e=>{if(S.length===0)return;const o=S[S.length-1][oe];if(o.length>0&&e.code===Te.tab){if(o.length===1){e.preventDefault(),document.activeElement!==o[0]&&o[0].focus();return}const a=e.shiftKey,i=e.target===o[0],s=e.target===o[o.length-1];i&&a&&(e.preventDefault(),o[o.length-1].focus()),s&&!a&&(e.preventDefault(),o[0].focus())}},Qe={beforeMount(e){e[oe]=ve(e),S.push(e),S.length<=1&&document.addEventListener("keydown",ge)},updated(e){F(()=>{e[oe]=ve(e)})},unmounted(){S.shift(),S.length===0&&document.removeEventListener("keydown",ge)}},Ze=ke({name:"ElMessageBox",directives:{TrapFocus:Qe},components:{ElButton:Xe,ElFocusTrap:Ie,ElInput:Ke,ElOverlay:Le,ElIcon:Ae,...Oe},inheritAttrs:!1,props:{buttonSize:{type:String,validator:We},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,overflow:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:o}){const{locale:a,zIndex:i,ns:s,size:t}=Ve("message-box",M(()=>e.buttonSize)),{t:c}=a,{nextZIndex:d}=i,m=O(!1),n=$e({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonLoadingIcon:le(ie),cancelButtonLoadingIcon:le(ie),confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:d()}),R=M(()=>{const l=n.type;return{[s.bm("icon",l)]:l&&re[l]}}),z=ue(),u=ue(),U=M(()=>n.icon||re[n.type]||""),k=M(()=>!!n.message),p=O(),D=O(),C=O(),I=O(),X=O(),Q=M(()=>n.confirmButtonClass);ce(()=>n.inputValue,async l=>{await F(),e.boxType==="prompt"&&l!==null&&B()},{immediate:!0}),ce(()=>m.value,l=>{var b,A;l&&(e.boxType!=="prompt"&&(n.autofocus?C.value=(A=(b=X.value)==null?void 0:b.$el)!=null?A:p.value:C.value=p.value),n.zIndex=d()),e.boxType==="prompt"&&(l?F().then(()=>{var se;I.value&&I.value.$el&&(n.autofocus?C.value=(se=L())!=null?se:p.value:C.value=p.value)}):(n.editorErrorMessage="",n.validateError=!1))});const Z=M(()=>e.draggable),J=M(()=>e.overflow);Ge(p,D,Z,J),be(async()=>{await F(),e.closeOnHashChange&&window.addEventListener("hashchange",E)}),he(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",E)});function E(){m.value&&(m.value=!1,F(()=>{n.action&&o("action",n.action)}))}const K=()=>{e.closeOnClickModal&&w(n.distinguishCancelAndClose?"close":"cancel")},Y=De(K),j=l=>{if(n.inputType!=="textarea")return l.preventDefault(),w("confirm")},w=l=>{var b;e.boxType==="prompt"&&l==="confirm"&&!B()||(n.action=l,n.beforeClose?(b=n.beforeClose)==null||b.call(n,l,n,E):E())},B=()=>{if(e.boxType==="prompt"){const l=n.inputPattern;if(l&&!l.test(n.inputValue||""))return n.editorErrorMessage=n.inputErrorMessage||c("el.messagebox.error"),n.validateError=!0,!1;const b=n.inputValidator;if(typeof b=="function"){const A=b(n.inputValue);if(A===!1)return n.editorErrorMessage=n.inputErrorMessage||c("el.messagebox.error"),n.validateError=!0,!1;if(typeof A=="string")return n.editorErrorMessage=A,n.validateError=!0,!1}}return n.editorErrorMessage="",n.validateError=!1,!0},L=()=>{const l=I.value.$refs;return l.input||l.textarea},te=()=>{w("close")},we=()=>{e.closeOnPressEscape&&te()};return e.lockScroll&&Pe(m),{...Re(n),ns:s,overlayEvent:Y,visible:m,hasMessage:k,typeClass:R,contentId:z,inputId:u,btnSize:t,iconComponent:U,confirmButtonClasses:Q,rootRef:p,focusStartRef:C,headerRef:D,inputRef:I,confirmRef:X,doClose:E,handleClose:te,onCloseRequested:we,handleWrapperClick:K,handleInputEnter:j,handleAction:w,t:c}}});function Je(e,o,a,i,s,t){const c=V("el-icon"),d=V("close"),m=V("el-input"),n=V("el-button"),R=V("el-focus-trap"),z=V("el-overlay");return f(),h(Ue,{name:"fade-in-linear",onAfterLeave:u=>e.$emit("vanish"),persisted:""},{default:v(()=>[x(T(z,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:v(()=>[g("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:r("".concat(e.ns.namespace.value,"-overlay-message-box")),onClick:e.overlayEvent.onClick,onMousedown:e.overlayEvent.onMousedown,onMouseup:e.overlayEvent.onMouseup},[T(R,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:v(()=>[g("div",{ref:"rootRef",class:r([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:de(e.customStyle),tabindex:"-1",onClick:q(()=>{},["stop"])},[e.title!==null&&e.title!==void 0?(f(),_("div",{key:0,ref:"headerRef",class:r([e.ns.e("header"),{"show-close":e.showClose}])},[g("div",{class:r(e.ns.e("title"))},[e.iconComponent&&e.center?(f(),h(c,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:v(()=>[(f(),h(W(e.iconComponent)))]),_:1},8,["class"])):$("v-if",!0),g("span",null,H(e.title),1)],2),e.showClose?(f(),_("button",{key:0,type:"button",class:r(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),onKeydown:G(q(u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"])},[T(c,{class:r(e.ns.e("close"))},{default:v(()=>[T(d)]),_:1},8,["class"])],42,["aria-label","onClick","onKeydown"])):$("v-if",!0)],2)):$("v-if",!0),g("div",{id:e.contentId,class:r(e.ns.e("content"))},[g("div",{class:r(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(f(),h(c,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:v(()=>[(f(),h(W(e.iconComponent)))]),_:1},8,["class"])):$("v-if",!0),e.hasMessage?(f(),_("div",{key:1,class:r(e.ns.e("message"))},[ze(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(f(),h(W(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(f(),h(W(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:v(()=>[ee(H(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):$("v-if",!0)],2),x(g("div",{class:r(e.ns.e("input"))},[T(m,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":u=>e.inputValue=u,type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:r({invalid:e.validateError}),onKeydown:G(e.handleInputEnter,["enter"])},null,8,["id","modelValue","onUpdate:modelValue","type","placeholder","aria-invalid","class","onKeydown"]),g("div",{class:r(e.ns.e("errormsg")),style:de({visibility:e.editorErrorMessage?"visible":"hidden"})},H(e.editorErrorMessage),7)],2),[[ne,e.showInput]])],10,["id"]),g("div",{class:r(e.ns.e("btns"))},[e.showCancelButton?(f(),h(n,{key:0,loading:e.cancelButtonLoading,"loading-icon":e.cancelButtonLoadingIcon,class:r([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:u=>e.handleAction("cancel"),onKeydown:G(q(u=>e.handleAction("cancel"),["prevent"]),["enter"])},{default:v(()=>[ee(H(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","loading-icon","class","round","size","onClick","onKeydown"])):$("v-if",!0),x(T(n,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,"loading-icon":e.confirmButtonLoadingIcon,class:r([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:u=>e.handleAction("confirm"),onKeydown:G(q(u=>e.handleAction("confirm"),["prevent"]),["enter"])},{default:v(()=>[ee(H(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","loading-icon","class","round","disabled","size","onClick","onKeydown"]),[[ne,e.showConfirmButton]])],2)],14,["onClick"])]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,["aria-label","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["z-index","overlay-class","mask"]),[[ne,e.visible]])]),_:3},8,["onAfterLeave"])}var xe=Se(Ze,[["render",Je],["__file","index.vue"]]);const N=new Map,_e=e=>{let o=document.body;return e.appendTo&&(ye(e.appendTo)&&(o=document.querySelector(e.appendTo)),pe(e.appendTo)&&(o=e.appendTo),pe(o)||(o=document.body)),o},en=(e,o,a=null)=>{const i=T(xe,e,me(e.message)||Ce(e.message)?{default:me(e.message)?e.message:()=>e.message}:null);return i.appContext=a,Ee(i,o),_e(e).appendChild(o.firstElementChild),i.component},nn=()=>document.createElement("div"),on=(e,o)=>{const a=nn();e.onVanish=()=>{Ee(null,a),N.delete(s)},e.onAction=t=>{const c=N.get(s);let d;e.showInput?d={value:s.inputValue,action:t}:d=t,e.callback?e.callback(d,i.proxy):t==="cancel"||t==="close"?e.distinguishCancelAndClose&&t!=="cancel"?c.reject("close"):c.reject("cancel"):c.resolve(d)};const i=en(e,a,o),s=i.proxy;for(const t in e)fe(e,t)&&!fe(s.$props,t)&&(s[t]=e[t]);return s.visible=!0,s};function P(e,o=null){if(!He)return Promise.reject();let a;return ye(e)||Ce(e)?e={message:e}:a=e.callback,new Promise((i,s)=>{const t=on(e,o!=null?o:P._context);N.set(t,{options:e,callback:a,resolve:i,reject:s})})}const tn=["alert","confirm","prompt"],sn={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};tn.forEach(e=>{P[e]=an(e)});function an(e){return(o,a,i,s)=>{let t="";return Fe(a)?(i=a,t=""):Ne(a)?t="":t=a,P(Object.assign({title:t,message:o,type:"",...sn[e]},i,{boxType:e}),s)}}P.close=()=>{N.forEach((e,o)=>{o.doClose()}),N.clear()};P._context=null;const y=P;y.install=e=>{y._context=e._context,e.config.globalProperties.$msgbox=y,e.config.globalProperties.$messageBox=y,e.config.globalProperties.$alert=y.alert,e.config.globalProperties.$confirm=y.confirm,e.config.globalProperties.$prompt=y.prompt};const cn=y;export{cn as E};
import{bo as Re,M as Te,ag as Ne,au as we,bp as ue,i as De,D as Me,J as g,l as Se,aC as de,K as se,ax as $e,be as ze,bq as Ve,bf as He,br as x,L as U,a3 as Ye,n as Ue,q as ce,y as Be,b as h,a0 as ae,bg as Ke,a1 as Xe,E as Pe,bs as Ge,bt as qe,r as R,af as We,z as fe,bj as me,bu as pe,bv as ve,b9 as je,ba as N,o as m,e as E,w as v,Z as ee,a as b,N as d,O as be,P as W,c as ne,W as j,k as D,t as Y,aB as Z,d as oe,$ as te,T as Ze,ab as Le,bw as ke,b6 as Ae,b4 as ye,b8 as Je,aA as Qe,aw as Ee,aa as ge}from"./IrXStpLt.js";import{E as Fe}from"./BE55QiSu.js";import{t as _e,E as xe}from"./DMFmV0Em.js";import{b as en}from"./APwvv6vg.js";import{a as nn}from"./CLiT2uNb.js";const on='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',tn=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,Ce=e=>Array.from(e.querySelectorAll(on)).filter(n=>sn(n)&&tn(n)),sn=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},an=e=>["",...Re].includes(e);var J=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(J||{});const ln=(e,n,s,l)=>{let a={offsetX:0,offsetY:0};const t=o=>{const T=o.clientX,z=o.clientY,{offsetX:c,offsetY:V}=a,k=e.value.getBoundingClientRect(),p=k.left,H=k.top,w=k.width,A=k.height,X=document.documentElement.clientWidth,Q=document.documentElement.clientHeight,F=-p+c,_=-H+V,M=X-p-w+c,P=Q-H-A+V,G=S=>{let B=c+S.clientX-T,I=V+S.clientY-z;l!=null&&l.value||(B=Math.min(Math.max(B,F),M),I=Math.min(Math.max(I,_),P)),a={offsetX:B,offsetY:I},e.value&&(e.value.style.transform="translate(".concat(ue(B),", ").concat(ue(I),")"))},q=()=>{document.removeEventListener("mousemove",G),document.removeEventListener("mouseup",q)};document.addEventListener("mousemove",G),document.addEventListener("mouseup",q)},r=()=>{n.value&&e.value&&n.value.addEventListener("mousedown",t)},u=()=>{n.value&&e.value&&n.value.removeEventListener("mousedown",t)},f=()=>{a={offsetX:0,offsetY:0},e.value&&(e.value.style.transform="none")};return Te(()=>{Ne(()=>{s.value?r():u()})}),we(()=>{u()}),{resetPosition:f}},rn=(e,n={})=>{De(e)||_e("[useLockscreen]","You need to pass a ref param to this function");const s=n.ns||Me("popup"),l=g(()=>s.bm("parent","hidden"));if(!Se||de(document.body,l.value))return;let a=0,t=!1,r="0";const u=()=>{setTimeout(()=>{He(document==null?void 0:document.body,l.value),t&&document&&(document.body.style.width=r)},200)};se(e,f=>{if(!f){u();return}t=!de(document.body,l.value),t&&(r=document.body.style.width),a=nn(s.namespace.value);const o=document.documentElement.clientHeight<document.body.scrollHeight,T=$e(document.body,"overflowY");a>0&&(o||T==="scroll")&&t&&(document.body.style.width="calc(100% - ".concat(a,"px)")),ze(document.body,l.value)}),Ve(()=>u())},Ie=e=>{if(!e)return{onClick:x,onMousedown:x,onMouseup:x};let n=!1,s=!1;return{onClick:r=>{n&&s&&e(r),n=s=!1},onMousedown:r=>{n=r.target===r.currentTarget},onMouseup:r=>{s=r.target===r.currentTarget}}},le="_trap-focus-children",L=[],he=e=>{if(L.length===0)return;const n=L[L.length-1][le];if(n.length>0&&e.code===Ye.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const s=e.shiftKey,l=e.target===n[0],a=e.target===n[n.length-1];l&&s&&(e.preventDefault(),n[n.length-1].focus()),a&&!s&&(e.preventDefault(),n[0].focus())}},un={beforeMount(e){e[le]=Ce(e),L.push(e),L.length<=1&&document.addEventListener("keydown",he)},updated(e){U(()=>{e[le]=Ce(e)})},unmounted(){L.shift(),L.length===0&&document.removeEventListener("keydown",he)}},dn=Ue({mask:{type:Boolean,default:!0},customMaskEvent:Boolean,overlayClass:{type:ce([String,Array,Object])},zIndex:{type:ce([String,Number])}}),cn={click:e=>e instanceof MouseEvent},fn="overlay";var mn=Be({name:"ElOverlay",props:dn,emits:cn,setup(e,{slots:n,emit:s}){const l=Me(fn),a=f=>{s("click",f)},{onClick:t,onMousedown:r,onMouseup:u}=Ie(e.customMaskEvent?void 0:a);return()=>e.mask?h("div",{class:[l.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:t,onMousedown:r,onMouseup:u},[ae(n,"default")],J.STYLE|J.CLASS|J.PROPS,["onClick","onMouseup","onMousedown"]):Ke("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[ae(n,"default")])}});const pn=mn,vn=Be({name:"ElMessageBox",directives:{TrapFocus:un},components:{ElButton:Fe,ElFocusTrap:en,ElInput:xe,ElOverlay:pn,ElIcon:Pe,...Ge},inheritAttrs:!1,props:{buttonSize:{type:String,validator:an},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,overflow:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:s,zIndex:l,ns:a,size:t}=qe("message-box",g(()=>e.buttonSize)),{t:r}=s,{nextZIndex:u}=l,f=R(!1),o=We({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonLoadingIcon:fe(me),cancelButtonLoadingIcon:fe(me),confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:u()}),T=g(()=>{const i=o.type;return{[a.bm("icon",i)]:i&&pe[i]}}),z=ve(),c=ve(),V=g(()=>o.icon||pe[o.type]||""),k=g(()=>!!o.message),p=R(),H=R(),w=R(),A=R(),X=R(),Q=g(()=>o.confirmButtonClass);se(()=>o.inputValue,async i=>{await U(),e.boxType==="prompt"&&i!==null&&B()},{immediate:!0}),se(()=>f.value,i=>{var y,O;i&&(e.boxType!=="prompt"&&(o.autofocus?w.value=(O=(y=X.value)==null?void 0:y.$el)!=null?O:p.value:w.value=p.value),o.zIndex=u()),e.boxType==="prompt"&&(i?U().then(()=>{var ie;A.value&&A.value.$el&&(o.autofocus?w.value=(ie=I())!=null?ie:p.value:w.value=p.value)}):(o.editorErrorMessage="",o.validateError=!1))});const F=g(()=>e.draggable),_=g(()=>e.overflow);ln(p,H,F,_),Te(async()=>{await U(),e.closeOnHashChange&&window.addEventListener("hashchange",M)}),we(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",M)});function M(){f.value&&(f.value=!1,U(()=>{o.action&&n("action",o.action)}))}const P=()=>{e.closeOnClickModal&&S(o.distinguishCancelAndClose?"close":"cancel")},G=Ie(P),q=i=>{if(o.inputType!=="textarea")return i.preventDefault(),S("confirm")},S=i=>{var y;e.boxType==="prompt"&&i==="confirm"&&!B()||(o.action=i,o.beforeClose?(y=o.beforeClose)==null||y.call(o,i,o,M):M())},B=()=>{if(e.boxType==="prompt"){const i=o.inputPattern;if(i&&!i.test(o.inputValue||""))return o.editorErrorMessage=o.inputErrorMessage||r("el.messagebox.error"),o.validateError=!0,!1;const y=o.inputValidator;if(typeof y=="function"){const O=y(o.inputValue);if(O===!1)return o.editorErrorMessage=o.inputErrorMessage||r("el.messagebox.error"),o.validateError=!0,!1;if(typeof O=="string")return o.editorErrorMessage=O,o.validateError=!0,!1}}return o.editorErrorMessage="",o.validateError=!1,!0},I=()=>{const i=A.value.$refs;return i.input||i.textarea},re=()=>{S("close")},Oe=()=>{e.closeOnPressEscape&&re()};return e.lockScroll&&rn(f),{...je(o),ns:a,overlayEvent:G,visible:f,hasMessage:k,typeClass:T,contentId:z,inputId:c,btnSize:t,iconComponent:V,confirmButtonClasses:Q,rootRef:p,focusStartRef:w,headerRef:H,inputRef:A,confirmRef:X,doClose:M,handleClose:re,onCloseRequested:Oe,handleWrapperClick:P,handleInputEnter:q,handleAction:S,t:r}}});function bn(e,n,s,l,a,t){const r=N("el-icon"),u=N("close"),f=N("el-input"),o=N("el-button"),T=N("el-focus-trap"),z=N("el-overlay");return m(),E(Ze,{name:"fade-in-linear",onAfterLeave:c=>e.$emit("vanish"),persisted:""},{default:v(()=>[ee(h(z,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:v(()=>[b("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:d("".concat(e.ns.namespace.value,"-overlay-message-box")),onClick:e.overlayEvent.onClick,onMousedown:e.overlayEvent.onMousedown,onMouseup:e.overlayEvent.onMouseup},[h(T,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:v(()=>[b("div",{ref:"rootRef",class:d([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:be(e.customStyle),tabindex:"-1",onClick:W(()=>{},["stop"])},[e.title!==null&&e.title!==void 0?(m(),ne("div",{key:0,ref:"headerRef",class:d([e.ns.e("header"),{"show-close":e.showClose}])},[b("div",{class:d(e.ns.e("title"))},[e.iconComponent&&e.center?(m(),E(r,{key:0,class:d([e.ns.e("status"),e.typeClass])},{default:v(()=>[(m(),E(j(e.iconComponent)))]),_:1},8,["class"])):D("v-if",!0),b("span",null,Y(e.title),1)],2),e.showClose?(m(),ne("button",{key:0,type:"button",class:d(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:c=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),onKeydown:Z(W(c=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"])},[h(r,{class:d(e.ns.e("close"))},{default:v(()=>[h(u)]),_:1},8,["class"])],42,["aria-label","onClick","onKeydown"])):D("v-if",!0)],2)):D("v-if",!0),b("div",{id:e.contentId,class:d(e.ns.e("content"))},[b("div",{class:d(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(m(),E(r,{key:0,class:d([e.ns.e("status"),e.typeClass])},{default:v(()=>[(m(),E(j(e.iconComponent)))]),_:1},8,["class"])):D("v-if",!0),e.hasMessage?(m(),ne("div",{key:1,class:d(e.ns.e("message"))},[ae(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(m(),E(j(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(m(),E(j(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:v(()=>[oe(Y(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):D("v-if",!0)],2),ee(b("div",{class:d(e.ns.e("input"))},[h(f,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":c=>e.inputValue=c,type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:d({invalid:e.validateError}),onKeydown:Z(e.handleInputEnter,["enter"])},null,8,["id","modelValue","onUpdate:modelValue","type","placeholder","aria-invalid","class","onKeydown"]),b("div",{class:d(e.ns.e("errormsg")),style:be({visibility:e.editorErrorMessage?"visible":"hidden"})},Y(e.editorErrorMessage),7)],2),[[te,e.showInput]])],10,["id"]),b("div",{class:d(e.ns.e("btns"))},[e.showCancelButton?(m(),E(o,{key:0,loading:e.cancelButtonLoading,"loading-icon":e.cancelButtonLoadingIcon,class:d([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:c=>e.handleAction("cancel"),onKeydown:Z(W(c=>e.handleAction("cancel"),["prevent"]),["enter"])},{default:v(()=>[oe(Y(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","loading-icon","class","round","size","onClick","onKeydown"])):D("v-if",!0),ee(h(o,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,"loading-icon":e.confirmButtonLoadingIcon,class:d([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:c=>e.handleAction("confirm"),onKeydown:Z(W(c=>e.handleAction("confirm"),["prevent"]),["enter"])},{default:v(()=>[oe(Y(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","loading-icon","class","round","disabled","size","onClick","onKeydown"]),[[te,e.showConfirmButton]])],2)],14,["onClick"])]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,["aria-label","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["z-index","overlay-class","mask"]),[[te,e.visible]])]),_:3},8,["onAfterLeave"])}var yn=Xe(vn,[["render",bn],["__file","index.vue"]]);const K=new Map,En=e=>{let n=document.body;return e.appendTo&&(Le(e.appendTo)&&(n=document.querySelector(e.appendTo)),ge(e.appendTo)&&(n=e.appendTo),ge(n)||(n=document.body)),n},gn=(e,n,s=null)=>{const l=h(yn,e,Ee(e.message)||ke(e.message)?{default:Ee(e.message)?e.message:()=>e.message}:null);return l.appContext=s,Ae(l,n),En(e).appendChild(n.firstElementChild),l.component},Cn=()=>document.createElement("div"),hn=(e,n)=>{const s=Cn();e.onVanish=()=>{Ae(null,s),K.delete(a)},e.onAction=t=>{const r=K.get(a);let u;e.showInput?u={value:a.inputValue,action:t}:u=t,e.callback?e.callback(u,l.proxy):t==="cancel"||t==="close"?e.distinguishCancelAndClose&&t!=="cancel"?r.reject("close"):r.reject("cancel"):r.resolve(u)};const l=gn(e,s,n),a=l.proxy;for(const t in e)ye(e,t)&&!ye(a.$props,t)&&(a[t]=e[t]);return a.visible=!0,a};function $(e,n=null){if(!Se)return Promise.reject();let s;return Le(e)||ke(e)?e={message:e}:s=e.callback,new Promise((l,a)=>{const t=hn(e,n!=null?n:$._context);K.set(t,{options:e,callback:s,resolve:l,reject:a})})}const Tn=["alert","confirm","prompt"],wn={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};Tn.forEach(e=>{$[e]=Mn(e)});function Mn(e){return(n,s,l,a)=>{let t="";return Je(s)?(l=s,t=""):Qe(s)?t="":t=s,$(Object.assign({title:t,message:n,type:"",...wn[e]},l,{boxType:e}),a)}}$.close=()=>{K.forEach((e,n)=>{n.doClose()}),K.clear()};$._context=null;const C=$;C.install=e=>{C._context=e._context,e.config.globalProperties.$msgbox=C,e.config.globalProperties.$messageBox=C,e.config.globalProperties.$alert=C.alert,e.config.globalProperties.$confirm=C.confirm,e.config.globalProperties.$prompt=C.prompt};const In=C;export{In as E};

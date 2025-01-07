import{an as H,h as Ie,j as Z,m as Le,T as _e,k as ue,ao as be,ap as Re,aq as Be,ar as $e,q as ze,as as Ve,r as x,at as Fe,au as He,I as w,s as he,x as Se,o as ye,a as l,c as V,w as I,d as g,av as Pe,b as o,B as y,e,C as re,aw as De,a0 as S,E as O,M as Ye,A as f,a9 as R,K as Xe,L as Ke,ax as je,ay as Ue,az as xe,aA as We,aa as Ze,a8 as q,Z as qe,$ as Ge,P as ie,aB as Je,D as Ne,N as F,aC as P,aD as Qe,a1 as Ee,aE as et,aF as tt,aG as st,t as M,aH as ce,aI as nt,S as at,aJ as ot,ak as de,a6 as me,aK as lt,aL as it,aM as rt,aN as ct,aO as Ae,u as Te,al as ut,aP as dt}from"./DLp33f98.js";import{t as ge}from"./BxoBQEw4.js";import{u as mt}from"./DudcxyFt.js";import{u as Me}from"./BmBf4EAu.js";import{_ as ft}from"./ScZoHvk5.js";import{u as vt,_ as pt}from"./NNivXemo.js";import"./CrLWZQdS.js";const gt=(s,u)=>{if(!H||!s||!u)return!1;const i=s.getBoundingClientRect();let _;return u instanceof Element?_=u.getBoundingClientRect():_={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},i.top<_.bottom&&i.bottom>_.top&&i.right>_.left&&i.left<_.right},_t=Ie({urlList:{type:Z(Array),default:()=>Le([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:Z(String)}}),ht={close:()=>!0,switch:s=>_e(s),rotate:s=>_e(s)},yt=ue({name:"ElImageViewer"}),kt=ue({...yt,props:_t,emits:ht,setup(s,{expose:u,emit:i}){var _;const v=s,p={CONTAIN:{name:"contain",icon:be(Re)},ORIGINAL:{name:"original",icon:be(Be)}},{t:N}=$e(),a=ze("image-viewer"),{nextZIndex:d}=Ve(),m=x(),c=x([]),r=Fe(),z=x(!0),L=x(v.initialIndex),$=He(p.CONTAIN),k=x({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),D=x((_=v.zIndex)!=null?_:d()),Y=w(()=>{const{urlList:n}=v;return n.length<=1}),G=w(()=>L.value===0),J=w(()=>L.value===v.urlList.length-1),X=w(()=>v.urlList[L.value]),fe=w(()=>[a.e("btn"),a.e("prev"),a.is("disabled",!v.infinite&&G.value)]),Q=w(()=>[a.e("btn"),a.e("next"),a.is("disabled",!v.infinite&&J.value)]),K=w(()=>{const{scale:n,deg:C,offsetX:h,offsetY:E,enableTransition:A}=k.value;let T=h/n,B=E/n;const W=C*Math.PI/180,ke=Math.cos(W),we=Math.sin(W);T=T*ke+B*we,B=B*ke-h/n*we;const pe={transform:"scale(".concat(n,") rotate(").concat(C,"deg) translate(").concat(T,"px, ").concat(B,"px)"),transition:A?"transform .3s":""};return $.value.name===p.CONTAIN.name&&(pe.maxWidth=pe.maxHeight="100%"),pe});function j(){ee(),i("close")}function ve(){const n=ge(h=>{switch(h.code){case F.esc:v.closeOnPressEscape&&j();break;case F.space:oe();break;case F.left:le();break;case F.up:b("zoomIn");break;case F.right:t();break;case F.down:b("zoomOut");break}}),C=ge(h=>{const E=h.deltaY||h.deltaX;b(E<0?"zoomIn":"zoomOut",{zoomRate:v.zoomRate,enableTransition:!1})});r.run(()=>{P(document,"keydown",n),P(document,"wheel",C)})}function ee(){r.stop()}function te(){z.value=!1}function se(n){z.value=!1,n.target.alt=N("el.image.error")}function ne(n){if(z.value||n.button!==0||!m.value)return;k.value.enableTransition=!1;const{offsetX:C,offsetY:h}=k.value,E=n.pageX,A=n.pageY,T=ge(W=>{k.value={...k.value,offsetX:C+W.pageX-E,offsetY:h+W.pageY-A}}),B=P(document,"mousemove",T);P(document,"mouseup",()=>{B()}),n.preventDefault()}function ae(){k.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function oe(){if(z.value)return;const n=Qe(p),C=Object.values(p),h=$.value.name,A=(C.findIndex(T=>T.name===h)+1)%n.length;$.value=p[n[A]],ae()}function U(n){const C=v.urlList.length;L.value=(n+C)%C}function le(){G.value&&!v.infinite||U(L.value-1)}function t(){J.value&&!v.infinite||U(L.value+1)}function b(n,C={}){if(z.value)return;const{minScale:h,maxScale:E}=v,{zoomRate:A,rotateDeg:T,enableTransition:B}={zoomRate:v.zoomRate,rotateDeg:90,enableTransition:!0,...C};switch(n){case"zoomOut":k.value.scale>h&&(k.value.scale=Number.parseFloat((k.value.scale/A).toFixed(3)));break;case"zoomIn":k.value.scale<E&&(k.value.scale=Number.parseFloat((k.value.scale*A).toFixed(3)));break;case"clockwise":k.value.deg+=T,i("rotate",k.value.deg);break;case"anticlockwise":k.value.deg-=T,i("rotate",k.value.deg);break}k.value.enableTransition=B}return he(X,()=>{Se(()=>{const n=c.value[0];n!=null&&n.complete||(z.value=!0)})}),he(L,n=>{ae(),i("switch",n)}),ye(()=>{var n,C;ve(),(C=(n=m.value)==null?void 0:n.focus)==null||C.call(n)}),u({setActiveItem:U}),(n,C)=>(l(),V(e(Je),{to:"body",disabled:!n.teleported},{default:I(()=>[g(Pe,{name:"viewer-fade",appear:""},{default:I(()=>[o("div",{ref_key:"wrapper",ref:m,tabindex:-1,class:y(e(a).e("wrapper")),style:re({zIndex:D.value})},[o("div",{class:y(e(a).e("mask")),onClick:De(h=>n.hideOnClickModal&&j(),["self"])},null,10,["onClick"]),S(" CLOSE "),o("span",{class:y([e(a).e("btn"),e(a).e("close")]),onClick:j},[g(e(O),null,{default:I(()=>[g(e(Ye))]),_:1})],2),S(" ARROW "),e(Y)?S("v-if",!0):(l(),f(R,{key:0},[o("span",{class:y(e(fe)),onClick:le},[g(e(O),null,{default:I(()=>[g(e(Xe))]),_:1})],2),o("span",{class:y(e(Q)),onClick:t},[g(e(O),null,{default:I(()=>[g(e(Ke))]),_:1})],2)],64)),S(" ACTIONS "),o("div",{class:y([e(a).e("btn"),e(a).e("actions")])},[o("div",{class:y(e(a).e("actions__inner"))},[g(e(O),{onClick:h=>b("zoomOut")},{default:I(()=>[g(e(je))]),_:1},8,["onClick"]),g(e(O),{onClick:h=>b("zoomIn")},{default:I(()=>[g(e(Ue))]),_:1},8,["onClick"]),o("i",{class:y(e(a).e("actions__divider"))},null,2),g(e(O),{onClick:oe},{default:I(()=>[(l(),V(xe(e($).icon)))]),_:1}),o("i",{class:y(e(a).e("actions__divider"))},null,2),g(e(O),{onClick:h=>b("anticlockwise")},{default:I(()=>[g(e(We))]),_:1},8,["onClick"]),g(e(O),{onClick:h=>b("clockwise")},{default:I(()=>[g(e(Ze))]),_:1},8,["onClick"])],2)],2),S(" CANVAS "),o("div",{class:y(e(a).e("canvas"))},[(l(!0),f(R,null,q(n.urlList,(h,E)=>qe((l(),f("img",{ref_for:!0,ref:A=>c.value[E]=A,key:h,src:h,style:re(e(K)),class:y(e(a).e("img")),crossorigin:n.crossorigin,onLoad:te,onError:se,onMousedown:ne},null,46,["src","crossorigin"])),[[Ge,E===L.value]])),128))],2),ie(n.$slots,"default")],6)]),_:3})]),_:3},8,["disabled"]))}});var wt=Ne(kt,[["__file","image-viewer.vue"]]);const bt=Ee(wt),Ct=Ie({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:Z([String,Object])},previewSrcList:{type:Z(Array),default:()=>Le([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:Z(String)}}),It={load:s=>s instanceof Event,error:s=>s instanceof Event,switch:s=>_e(s),close:()=>!0,show:()=>!0},Lt=ue({name:"ElImage",inheritAttrs:!1}),$t=ue({...Lt,props:Ct,emits:It,setup(s,{emit:u}){const i=s;let _="";const{t:v}=$e(),p=ze("image"),N=et(),a=w(()=>tt(Object.entries(N).filter(([t])=>/^(data-|on[A-Z])/i.test(t)||["id","style"].includes(t)))),d=mt({excludeListeners:!0,excludeKeys:w(()=>Object.keys(a.value))}),m=x(),c=x(!1),r=x(!0),z=x(!1),L=x(),$=x(),k=H&&"loading"in HTMLImageElement.prototype;let D,Y;const G=w(()=>[p.e("inner"),X.value&&p.e("preview"),r.value&&p.is("loading")]),J=w(()=>{const{fit:t}=i;return H&&t?{objectFit:t}:{}}),X=w(()=>{const{previewSrcList:t}=i;return Array.isArray(t)&&t.length>0}),fe=w(()=>{const{previewSrcList:t,initialIndex:b}=i;let n=b;return b>t.length-1&&(n=0),n}),Q=w(()=>i.loading==="eager"?!1:!k&&i.loading==="lazy"||i.lazy),K=()=>{H&&(r.value=!0,c.value=!1,m.value=i.src)};function j(t){r.value=!1,c.value=!1,u("load",t)}function ve(t){r.value=!1,c.value=!0,u("error",t)}function ee(){gt(L.value,$.value)&&(K(),ne())}const te=st(ee,200,!0);async function se(){var t;if(!H)return;await Se();const{scrollContainer:b}=i;nt(b)?$.value=b:at(b)&&b!==""?$.value=(t=document.querySelector(b))!=null?t:void 0:L.value&&($.value=ot(L.value)),$.value&&(D=P($,"scroll",te),setTimeout(()=>ee(),100))}function ne(){!H||!$.value||!te||(D==null||D(),$.value=void 0)}function ae(t){if(t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function oe(){X.value&&(Y=P("wheel",ae,{passive:!1}),_=document.body.style.overflow,document.body.style.overflow="hidden",z.value=!0,u("show"))}function U(){Y==null||Y(),document.body.style.overflow=_,z.value=!1,u("close")}function le(t){u("switch",t)}return he(()=>i.src,()=>{Q.value?(r.value=!0,c.value=!1,ne(),se()):K()}),ye(()=>{Q.value?se():K()}),(t,b)=>(l(),f("div",ce({ref_key:"container",ref:L},e(a),{class:[e(p).b(),t.$attrs.class]}),[c.value?ie(t.$slots,"error",{key:0},()=>[o("div",{class:y(e(p).e("error"))},M(e(v)("el.image.error")),3)]):(l(),f(R,{key:1},[m.value!==void 0?(l(),f("img",ce({key:0},e(d),{src:m.value,loading:t.loading,style:e(J),class:e(G),crossorigin:t.crossorigin,onClick:oe,onLoad:j,onError:ve}),null,16,["src","loading","crossorigin"])):S("v-if",!0),r.value?(l(),f("div",{key:1,class:y(e(p).e("wrapper"))},[ie(t.$slots,"placeholder",{},()=>[o("div",{class:y(e(p).e("placeholder"))},null,2)])],2)):S("v-if",!0)],64)),e(X)?(l(),f(R,{key:2},[z.value?(l(),V(e(bt),{key:0,"z-index":t.zIndex,"initial-index":e(fe),infinite:t.infinite,"zoom-rate":t.zoomRate,"min-scale":t.minScale,"max-scale":t.maxScale,"url-list":t.previewSrcList,crossorigin:t.crossorigin,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:U,onSwitch:le},{default:I(()=>[t.$slots.viewer?(l(),f("div",{key:0},[ie(t.$slots,"viewer")])):S("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","crossorigin","hide-on-click-modal","teleported","close-on-press-escape"])):S("v-if",!0)],64)):S("v-if",!0)],16))}});var zt=Ne($t,[["__file","image.vue"]]);const St=Ee(zt),xt={class:"item-title"},Nt=["src"],Et={key:1},At={class:"text-title"},Tt={class:"image-slot"},Mt={key:1,class:"text-tertiary d-text"},Ot={class:"item-title"},Rt=["src"],Bt={key:1},Vt={class:"text-title"},Ft={class:"item-des"},Oe={__name:"FuncItem",props:{item:{type:Object,default:()=>{}},isTheme:{type:Boolean,default:!1}},setup(s){const u=s,i=de(),{likes:_}=me(i),v=w(()=>u.item.href?{is:"a",props:{href:u.item.href,target:"_blank",rel:"noopener noreferrer"}}:{is:lt,props:{to:it(u.item)}}),p=w(()=>{const a=u.item.name||u.item.title;return _.value.includes(a)}),N=a=>{a.stopPropagation(),a.preventDefault();const d=u.item.name||u.item.title,m=_.value.findIndex(r=>r===d),c=_.value.concat();m>=0?c.splice(m,1):c.push(d),i.setLikes(c)};return(a,d)=>{const m=O,c=St,r=ct;return l(),V(xe(e(v).is),ce(e(v).props,{class:["c-func-item",{"is-theme":s.isTheme}]}),{default:I(()=>[g(r,{placement:"bottom",width:320,offset:25,trigger:"hover",disabled:!s.item.image,persistent:!1,"popper-class":"popper-func-item","popper-style":a.$attrs},{reference:I(()=>[o("div",null,[o("div",Ot,[o("div",{class:y(["item-logo",{"has-icon":s.item.logo}])},[s.item.logo?(l(),f("img",{key:0,src:s.item.logo},null,8,Rt)):(l(),f("span",Bt,M(s.item.title[0].toUpperCase()),1))],2),o("span",Vt,M(s.item.title),1)]),o("p",Ft,M(s.item.description),1),o("i",{class:y(["iconfont for-store",e(p)?"icon-store":"icon-unstore"]),onClick:N},null,2)])]),default:I(()=>[o("div",ce(a.$attrs,{class:["popper-func-item-main",{"is-theme":s.isTheme}]}),[o("div",xt,[o("div",{class:y(["item-logo",{"has-icon":s.item.logo}])},[s.item.logo?(l(),f("img",{key:0,src:s.item.logo},null,8,Nt)):(l(),f("span",Et,M(s.item.title[0].toUpperCase()),1))],2),o("span",At,M(s.item.title),1)]),o("div",{class:y(["description-area",{"col-view":s.item.colView}])},[s.item.image?(l(),V(c,{key:0,src:s.item.image,class:"w-full"},{error:I(()=>[o("div",Tt,[g(m,null,{default:I(()=>[g(e(rt))]),_:1})])]),_:1},8,["src"])):S("",!0),s.item.description?(l(),f("p",Mt,M(s.item.description),1)):S("",!0)],2)],16)]),_:1},8,["disabled","popper-style"])]),_:1},16,["class"])}}},Ht={"还没有收藏，快去_e17e":"There is no favorite yet, go and add it now"},Pt={"还没有收藏，快去_e17e":"还没有收藏，快去添加吧"},Dt={"还没有收藏，快去_e17e":"還沒有收藏，快去添加吧"},Ce={en_US:Ht,zh_Hans_CN:Pt,zh_Hant_HK:Dt},Yt={class:"c-common-like-func"},Xt={key:0,class:"empty"},Kt=["id"],jt={class:"sub-items"},Ut={__name:"LikeFunc",setup(s){const u=d=>{const c=Te().$lang.value||"zh_Hans_CN",r=Ce[c]||Ce.zh_Hans_CN||{};return r[d]===void 0?d:r[d]},{menus:i}=Me(),_=de(),{category:v,likes:p}=me(_);Ae();const N=w(()=>p.value.reduce((d,m)=>(d[m]=!0,d),{})),a=w(()=>{const d=[];for(let m=0;m<i.length;m++){const c=[];i[m].subMenus.forEach(r=>{const z=r.name||r.title;N.value[z]&&c.push(r)}),c.length>0&&d.push({...i[m],subMenus:c})}return d});return(d,m)=>{const c=Oe;return l(),f("div",Yt,[e(a).length===0?(l(),f("div",Xt,[m[0]||(m[0]=o("img",{src:ft},null,-1)),o("p",null,M(u("还没有收藏，快去_e17e")),1)])):S("",!0),(l(!0),f(R,null,q(e(a),(r,z)=>(l(),f("div",{key:z,class:"category"},[o("p",{id:r.name,class:y(["title",{active:r.name===e(v)}])},M(r.title),11,Kt),o("div",jt,[(l(!0),f(R,null,q(r.subMenus,(L,$)=>(l(),V(c,{key:$,item:L,style:re({"--bg-color":r.color,"--logo-color":r.logoColor}),"is-theme":r.isTheme},null,8,["item","style","is-theme"]))),128))])]))),128))])}}},Wt={class:"c-common-all-func"},Zt=["id"],qt={class:"sub-items"},Gt={__name:"AllFunc",setup(s){const{menus:u}=Me(),i=de(),{category:_}=me(i),v=Ae();return ye(()=>{const p=v.hash.slice(1).toLowerCase();if(p){const N=document.getElementById(p);N&&N.scrollIntoView()}else i.setCategory("")}),(p,N)=>{const a=Oe;return l(),f("div",Wt,[(l(!0),f(R,null,q(e(u),(d,m)=>(l(),f("div",{key:m,class:"category"},[o("div",{id:d.name,class:"anchor"},null,8,Zt),o("p",{class:y(["title",{active:d.name===e(_)}])},M(d.title),3),o("div",qt,[(l(!0),f(R,null,q(d.subMenus,(c,r)=>(l(),f(R,{key:r},[!c.brand||c.brand.includes(p.$brandName)?(l(),V(a,{key:0,item:c,class:y({"small-size":c.title.length>18}),style:re({"--bg-color":d.color,"--logo-color":d.logoColor}),"is-theme":d.isTheme},null,8,["item","class","style","is-theme"])):S("",!0)],64))),128))])]))),128))])}}},Jt={class:"p-index"},Qt={key:0,class:"page-stage pb-60"},es={class:"left-content"},ts={class:"fixed-area"},ss={class:"right-content"},us={__name:"index",setup(s){const u=Te(),i=x();vt(i),ut({title:u.$brand.name,ogTitle:u.$brand.name,description:u.$brand.description,ogDescription:u.$brand.description});const _=de(),{nav:v}=me(_);return(p,N)=>{const a=Ut,d=pt,m=dt,c=Gt;return l(),f("div",Jt,[e(v)==="like"?(l(),f("div",Qt,[g(a)])):(l(),f("div",{key:1,ref_key:"container",ref:i,class:"page-container pt-30 pb-60"},[o("div",es,[o("div",ts,[g(d),g(m)])]),o("div",ss,[g(c)])],512))])}}};export{us as default};

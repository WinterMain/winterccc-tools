import{_ as Re}from"./Btf0uayG.js";import{n as B,q as Fe,v as Ie,x as Z,y as Le,z as _e,A as ue,B as be,C as Ve,D as He,G as xe,H as ze,I as Be,r as E,J as Pe,K as De,k as w,L as he,M as $e,N as ye,o as i,e as V,w as I,b as g,T as Ye,a as l,O as y,f as e,P as re,Q as Xe,m as S,E as M,R as je,c as p,F,S as Ke,U as Ue,V as We,W as Ze,X as Se,Y as qe,Z as Ge,j as q,$ as Je,a0 as Qe,a1 as ie,a2 as Ee,a3 as P,a4 as H,a5 as et,a6 as Ne,a7 as tt,a8 as nt,a9 as st,t as T,aa as ce,ab as ot,ac as at,ad as de,ae as lt,af as Ae,u as Oe}from"./Ctw7jcTU.js";import{E as it}from"./YLBtPbiA.js";import{d as rt}from"./DZlNjEhq.js";import{u as ct}from"./BiGne5o9.js";import{g as ut}from"./CNf_QBNp.js";import{E as dt}from"./DxHDXnlI.js";import{u as me,g as mt,a as ft}from"./DSgyw9eH.js";import{u as Te}from"./LlGhdKy4.js";import{_ as pt,a as vt}from"./B-pDqjmn.js";import{_ as gt}from"./CyRHbAOP.js";import"./f2Rur42T.js";import"./JAUZZBS7.js";import"./CfxhqFBJ.js";const _t=(n,r)=>{if(!B||!n||!r)return!1;const o=n.getBoundingClientRect();let f;return r instanceof Element?f=r.getBoundingClientRect():f={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},o.top<f.bottom&&o.bottom>f.top&&o.right>f.left&&o.left<f.right};var ht="Expected a function";function ge(n,r,o){var f=!0,u=!0;if(typeof n!="function")throw new TypeError(ht);return Fe(o)&&(f="leading"in o?!!o.leading:f,u="trailing"in o?!!o.trailing:u),rt(n,r,{leading:f,maxWait:r,trailing:u})}const yt=Ie({urlList:{type:Z(Array),default:()=>Le([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:Z(String)}}),kt={close:()=>!0,switch:n=>_e(n),rotate:n=>_e(n)},wt=ue({name:"ElImageViewer"}),bt=ue({...wt,props:yt,emits:kt,setup(n,{expose:r,emit:o}){var f;const u=n,_={CONTAIN:{name:"contain",icon:be(Ve)},ORIGINAL:{name:"original",icon:be(He)}},{t:$}=xe(),a=ze("image-viewer"),{nextZIndex:d}=Be(),m=E(),v=E([]),c=Pe(),z=E(!0),L=E(u.initialIndex),x=De(_.CONTAIN),k=E({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),D=E((f=u.zIndex)!=null?f:d()),Y=w(()=>{const{urlList:s}=u;return s.length<=1}),G=w(()=>L.value===0),J=w(()=>L.value===u.urlList.length-1),X=w(()=>u.urlList[L.value]),fe=w(()=>[a.e("btn"),a.e("prev"),a.is("disabled",!u.infinite&&G.value)]),Q=w(()=>[a.e("btn"),a.e("next"),a.is("disabled",!u.infinite&&J.value)]),j=w(()=>{const{scale:s,deg:C,offsetX:h,offsetY:N,enableTransition:A}=k.value;let O=h/s,R=N/s;const W=C*Math.PI/180,ke=Math.cos(W),we=Math.sin(W);O=O*ke+R*we,R=R*ke-h/s*we;const ve={transform:"scale(".concat(s,") rotate(").concat(C,"deg) translate(").concat(O,"px, ").concat(R,"px)"),transition:A?"transform .3s":""};return x.value.name===_.CONTAIN.name&&(ve.maxWidth=ve.maxHeight="100%"),ve});function K(){ee(),o("close")}function pe(){const s=ge(h=>{switch(h.code){case H.esc:u.closeOnPressEscape&&K();break;case H.space:ae();break;case H.left:le();break;case H.up:b("zoomIn");break;case H.right:t();break;case H.down:b("zoomOut");break}}),C=ge(h=>{const N=h.deltaY||h.deltaX;b(N<0?"zoomIn":"zoomOut",{zoomRate:u.zoomRate,enableTransition:!1})});c.run(()=>{P(document,"keydown",s),P(document,"wheel",C)})}function ee(){c.stop()}function te(){z.value=!1}function ne(s){z.value=!1,s.target.alt=$("el.image.error")}function se(s){if(z.value||s.button!==0||!m.value)return;k.value.enableTransition=!1;const{offsetX:C,offsetY:h}=k.value,N=s.pageX,A=s.pageY,O=ge(W=>{k.value={...k.value,offsetX:C+W.pageX-N,offsetY:h+W.pageY-A}}),R=P(document,"mousemove",O);P(document,"mouseup",()=>{R()}),s.preventDefault()}function oe(){k.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ae(){if(z.value)return;const s=et(_),C=Object.values(_),h=x.value.name,A=(C.findIndex(O=>O.name===h)+1)%s.length;x.value=_[s[A]],oe()}function U(s){const C=u.urlList.length;L.value=(s+C)%C}function le(){G.value&&!u.infinite||U(L.value-1)}function t(){J.value&&!u.infinite||U(L.value+1)}function b(s,C={}){if(z.value)return;const{minScale:h,maxScale:N}=u,{zoomRate:A,rotateDeg:O,enableTransition:R}={zoomRate:u.zoomRate,rotateDeg:90,enableTransition:!0,...C};switch(s){case"zoomOut":k.value.scale>h&&(k.value.scale=Number.parseFloat((k.value.scale/A).toFixed(3)));break;case"zoomIn":k.value.scale<N&&(k.value.scale=Number.parseFloat((k.value.scale*A).toFixed(3)));break;case"clockwise":k.value.deg+=O,o("rotate",k.value.deg);break;case"anticlockwise":k.value.deg-=O,o("rotate",k.value.deg);break}k.value.enableTransition=R}return he(X,()=>{$e(()=>{const s=v.value[0];s!=null&&s.complete||(z.value=!0)})}),he(L,s=>{oe(),o("switch",s)}),ye(()=>{var s,C;pe(),(C=(s=m.value)==null?void 0:s.focus)==null||C.call(s)}),r({setActiveItem:U}),(s,C)=>(i(),V(e(it),{to:"body",disabled:!s.teleported},{default:I(()=>[g(Ye,{name:"viewer-fade",appear:""},{default:I(()=>[l("div",{ref_key:"wrapper",ref:m,tabindex:-1,class:y(e(a).e("wrapper")),style:re({zIndex:D.value})},[l("div",{class:y(e(a).e("mask")),onClick:Xe(h=>s.hideOnClickModal&&K(),["self"])},null,10,["onClick"]),S(" CLOSE "),l("span",{class:y([e(a).e("btn"),e(a).e("close")]),onClick:K},[g(e(M),null,{default:I(()=>[g(e(je))]),_:1})],2),S(" ARROW "),e(Y)?S("v-if",!0):(i(),p(F,{key:0},[l("span",{class:y(e(fe)),onClick:le},[g(e(M),null,{default:I(()=>[g(e(Ke))]),_:1})],2),l("span",{class:y(e(Q)),onClick:t},[g(e(M),null,{default:I(()=>[g(e(Ue))]),_:1})],2)],64)),S(" ACTIONS "),l("div",{class:y([e(a).e("btn"),e(a).e("actions")])},[l("div",{class:y(e(a).e("actions__inner"))},[g(e(M),{onClick:h=>b("zoomOut")},{default:I(()=>[g(e(We))]),_:1},8,["onClick"]),g(e(M),{onClick:h=>b("zoomIn")},{default:I(()=>[g(e(Ze))]),_:1},8,["onClick"]),l("i",{class:y(e(a).e("actions__divider"))},null,2),g(e(M),{onClick:ae},{default:I(()=>[(i(),V(Se(e(x).icon)))]),_:1}),l("i",{class:y(e(a).e("actions__divider"))},null,2),g(e(M),{onClick:h=>b("anticlockwise")},{default:I(()=>[g(e(qe))]),_:1},8,["onClick"]),g(e(M),{onClick:h=>b("clockwise")},{default:I(()=>[g(e(Ge))]),_:1},8,["onClick"])],2)],2),S(" CANVAS "),l("div",{class:y(e(a).e("canvas"))},[(i(!0),p(F,null,q(s.urlList,(h,N)=>Je((i(),p("img",{ref_for:!0,ref:A=>v.value[N]=A,key:h,src:h,style:re(e(j)),class:y(e(a).e("img")),crossorigin:s.crossorigin,onLoad:te,onError:ne,onMousedown:se},null,46,["src","crossorigin"])),[[Qe,N===L.value]])),128))],2),ie(s.$slots,"default")],6)]),_:3})]),_:3},8,["disabled"]))}});var Ct=Ee(bt,[["__file","image-viewer.vue"]]);const It=Ne(Ct),Lt=Ie({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:Z([String,Object])},previewSrcList:{type:Z(Array),default:()=>Le([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:Z(String)}}),xt={load:n=>n instanceof Event,error:n=>n instanceof Event,switch:n=>_e(n),close:()=>!0,show:()=>!0},zt=ue({name:"ElImage",inheritAttrs:!1}),$t=ue({...zt,props:Lt,emits:xt,setup(n,{emit:r}){const o=n;let f="";const{t:u}=xe(),_=ze("image"),$=tt(),a=w(()=>nt(Object.entries($).filter(([t])=>/^(data-|on[A-Z])/i.test(t)||["id","style"].includes(t)))),d=ct({excludeListeners:!0,excludeKeys:w(()=>Object.keys(a.value))}),m=E(),v=E(!1),c=E(!0),z=E(!1),L=E(),x=E(),k=B&&"loading"in HTMLImageElement.prototype;let D,Y;const G=w(()=>[_.e("inner"),X.value&&_.e("preview"),c.value&&_.is("loading")]),J=w(()=>{const{fit:t}=o;return B&&t?{objectFit:t}:{}}),X=w(()=>{const{previewSrcList:t}=o;return Array.isArray(t)&&t.length>0}),fe=w(()=>{const{previewSrcList:t,initialIndex:b}=o;let s=b;return b>t.length-1&&(s=0),s}),Q=w(()=>o.loading==="eager"?!1:!k&&o.loading==="lazy"||o.lazy),j=()=>{B&&(c.value=!0,v.value=!1,m.value=o.src)};function K(t){c.value=!1,v.value=!1,r("load",t)}function pe(t){c.value=!1,v.value=!0,r("error",t)}function ee(){_t(L.value,x.value)&&(j(),se())}const te=st(ee,200,!0);async function ne(){var t;if(!B)return;await $e();const{scrollContainer:b}=o;ot(b)?x.value=b:at(b)&&b!==""?x.value=(t=document.querySelector(b))!=null?t:void 0:L.value&&(x.value=ut(L.value)),x.value&&(D=P(x,"scroll",te),setTimeout(()=>ee(),100))}function se(){!B||!x.value||!te||(D==null||D(),x.value=void 0)}function oe(t){if(t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function ae(){X.value&&(Y=P("wheel",oe,{passive:!1}),f=document.body.style.overflow,document.body.style.overflow="hidden",z.value=!0,r("show"))}function U(){Y==null||Y(),document.body.style.overflow=f,z.value=!1,r("close")}function le(t){r("switch",t)}return he(()=>o.src,()=>{Q.value?(c.value=!0,v.value=!1,se(),ne()):j()}),ye(()=>{Q.value?ne():j()}),(t,b)=>(i(),p("div",ce({ref_key:"container",ref:L},e(a),{class:[e(_).b(),t.$attrs.class]}),[v.value?ie(t.$slots,"error",{key:0},()=>[l("div",{class:y(e(_).e("error"))},T(e(u)("el.image.error")),3)]):(i(),p(F,{key:1},[m.value!==void 0?(i(),p("img",ce({key:0},e(d),{src:m.value,loading:t.loading,style:e(J),class:e(G),crossorigin:t.crossorigin,onClick:ae,onLoad:K,onError:pe}),null,16,["src","loading","crossorigin"])):S("v-if",!0),c.value?(i(),p("div",{key:1,class:y(e(_).e("wrapper"))},[ie(t.$slots,"placeholder",{},()=>[l("div",{class:y(e(_).e("placeholder"))},null,2)])],2)):S("v-if",!0)],64)),e(X)?(i(),p(F,{key:2},[z.value?(i(),V(e(It),{key:0,"z-index":t.zIndex,"initial-index":e(fe),infinite:t.infinite,"zoom-rate":t.zoomRate,"min-scale":t.minScale,"max-scale":t.maxScale,"url-list":t.previewSrcList,crossorigin:t.crossorigin,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:U,onSwitch:le},{default:I(()=>[t.$slots.viewer?(i(),p("div",{key:0},[ie(t.$slots,"viewer")])):S("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","crossorigin","hide-on-click-modal","teleported","close-on-press-escape"])):S("v-if",!0)],64)):S("v-if",!0)],16))}});var St=Ee($t,[["__file","image.vue"]]);const Et=Ne(St),Nt={class:"item-title"},At=["src"],Ot={key:1},Tt={class:"text-title"},Mt={class:"image-slot"},Rt={key:1,class:"text-tertiary d-text"},Ft={class:"item-title"},Vt=["src"],Ht={key:1},Bt={class:"text-title"},Pt={class:"item-des"},Me={__name:"FuncItem",props:{item:{type:Object,default:()=>{}}},setup(n){const r=n,o=me(),{likes:f}=de(o),u=w(()=>r.item.href?{is:"a",props:{href:r.item.href,target:"_blank",rel:"noopener noreferrer"}}:{is:Re,props:{to:mt(r.item)}}),_=w(()=>{const a=r.item.name||r.item.title;return f.value.includes(a)}),$=a=>{a.stopPropagation(),a.preventDefault();const d=r.item.name||r.item.title,m=f.value.findIndex(c=>c===d),v=f.value.concat();m>=0?v.splice(m,1):v.push(d),o.setLikes(v)};return(a,d)=>{const m=M,v=Et,c=dt;return i(),V(Se(e(u).is),ce(e(u).props,{class:"c-func-item"}),{default:I(()=>[g(c,{placement:"bottom",width:320,offset:25,trigger:"hover",persistent:!1,"popper-class":"popper-func-item","popper-style":a.$attrs},{reference:I(()=>[l("div",null,[l("div",Ft,[l("div",{class:y(["item-logo",{"has-icon":n.item.logo}])},[n.item.logo?(i(),p("img",{key:0,src:n.item.logo},null,8,Vt)):(i(),p("span",Ht,T(n.item.title[0].toUpperCase()),1))],2),l("span",Bt,T(n.item.title),1)]),l("p",Pt,T(n.item.description),1),l("i",{class:y(["iconfont for-store",e(_)?"icon-store":"icon-unstore"]),onClick:$},null,2)])]),default:I(()=>[l("div",ce(a.$attrs,{class:"popper-func-item-main"}),[l("div",Nt,[l("div",{class:y(["item-logo",{"has-icon":n.item.logo}])},[n.item.logo?(i(),p("img",{key:0,src:n.item.logo},null,8,At)):(i(),p("span",Ot,T(n.item.title[0].toUpperCase()),1))],2),l("span",Tt,T(n.item.title),1)]),l("div",{class:y(["description-area",{"col-view":n.item.colView}])},[n.item.image?(i(),V(v,{key:0,src:n.item.image,class:"w-full"},{error:I(()=>[l("div",Mt,[g(m,null,{default:I(()=>[g(e(lt))]),_:1})])]),_:1},8,["src"])):S("",!0),n.item.description?(i(),p("p",Rt,T(n.item.description),1)):S("",!0)],2)],16)]),_:1},8,["popper-style"])]),_:1},16)}}},Dt={"还没有收藏，快去_e17e":"There is no favorite yet, go and add it now"},Yt={"还没有收藏，快去_e17e":"还没有收藏，快去添加吧"},Xt={"还没有收藏，快去_e17e":"還沒有收藏，快去添加吧"},Ce={en_US:Dt,zh_Hans_CN:Yt,zh_Hant_HK:Xt},jt={class:"c-common-like-func"},Kt={key:0,class:"empty"},Ut=["id"],Wt={class:"sub-items"},Zt={__name:"LikeFunc",setup(n){const r=d=>{const v=Oe().$lang.value||"zh_Hans_CN",c=Ce[v]||Ce.zh_Hans_CN||{};return c[d]===void 0?d:c[d]},{menus:o}=Te(),f=me(),{category:u,likes:_}=de(f);Ae();const $=w(()=>_.value.reduce((d,m)=>(d[m]=!0,d),{})),a=w(()=>{const d=[];for(let m=0;m<o.length;m++){const v=[];o[m].subMenus.forEach(c=>{const z=c.name||c.title;$.value[z]&&v.push(c)}),v.length>0&&d.push({...o[m],subMenus:v})}return d});return(d,m)=>{const v=Me;return i(),p("div",jt,[e(a).length===0?(i(),p("div",Kt,[m[0]||(m[0]=l("img",{src:pt},null,-1)),l("p",null,T(r("还没有收藏，快去_e17e")),1)])):S("",!0),(i(!0),p(F,null,q(e(a),(c,z)=>(i(),p("div",{key:z,class:"category"},[l("p",{id:c.name,class:y(["title",{active:c.name===e(u)}])},T(c.title),11,Ut),l("div",Wt,[(i(!0),p(F,null,q(c.subMenus,(L,x)=>(i(),V(v,{key:x,item:L,style:re({"--bg-color":c.color,"--logo-color":c.logoColor})},null,8,["item","style"]))),128))])]))),128))])}}},qt={class:"c-common-all-func"},Gt=["id"],Jt={class:"sub-items"},Qt={__name:"AllFunc",setup(n){const{menus:r}=Te(),o=me(),{category:f}=de(o),u=Ae();return ye(()=>{const _=u.hash.slice(1).toLowerCase();if(_){const $=document.getElementById(_);$&&$.scrollIntoView()}else o.setCategory("")}),(_,$)=>{const a=Me;return i(),p("div",qt,[(i(!0),p(F,null,q(e(r),(d,m)=>(i(),p("div",{key:m,class:"category"},[l("div",{id:d.name,class:"anchor"},null,8,Gt),l("p",{class:y(["title",{active:d.name===e(f)}])},T(d.title),3),l("div",Jt,[(i(!0),p(F,null,q(d.subMenus,(v,c)=>(i(),V(a,{key:c,item:v,class:y({"small-size":v.title.length>18}),style:re({"--bg-color":d.color,"--logo-color":d.logoColor})},null,8,["item","class","style"]))),128))])]))),128))])}}},en={class:"p-index"},tn={key:0,class:"page-stage pb-60"},nn={key:1,class:"page-container pt-30 pb-60"},sn={class:"left-content"},on={class:"right-content"},kn={__name:"index",setup(n){const r=Oe();ft({title:r.$brand.name,ogTitle:r.$brand.name,description:r.$brand.description,ogDescription:r.$brand.description});const o=me(),{nav:f}=de(o);return(u,_)=>{const $=Zt,a=gt,d=vt,m=Qt;return i(),p("div",en,[e(f)==="like"?(i(),p("div",tn,[g($)])):(i(),p("div",nn,[l("div",sn,[g(a),g(d)]),l("div",on,[g(m)])]))])}}};export{kn as default};

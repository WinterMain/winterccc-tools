import{bh as He,bi as re,bj as $e,bk as qe,bl as Ke,bm as ze,n as se,aV as Ee,bn as Ce,h as M,j as b,m as ee,bo as j,k as R,ar as Ve,q as N,r as q,I as te,a as h,c as L,w as $,A as F,a9 as Ge,a8 as Xe,B as v,e as n,b9 as je,P as S,a0 as _,b as P,aw as D,d as C,E as O,bp as We,t as K,C as Ye,bq as Je,br as Qe,M as Ze,ay as xe,ac as et,bs as tt,D as G,l as at,au as ae,bt as le,bu as st,b4 as nt,bv as ot,s as ie,a$ as rt,z as lt,O as it,bc as ut,bw as ue,aH as ce,a1 as ct,bx as dt,i as pt,u as ft,_ as gt}from"./CGqMbvwJ.js";import{_ as mt}from"./DeOKBfge.js";import{E as yt}from"./BvPEVsNX.js";import{b as X}from"./fVGb_Eos.js";import{k as Se,g as we,s as bt,b as vt,a as ne,n as z,c as ke,d as ht,S as _t,e as Tt,i as $t}from"./HCnweC23.js";import{c as W,k as oe,g as Et,a as Ae,b as Ct,d as jt,e as St,i as wt}from"./DE6qH-Ey.js";import{E as kt}from"./TVo827VU.js";import{_ as At}from"./DwUGZUwc.js";import"./BfXNeC-b.js";import"./CksdB5nZ.js";import"./BN-IElrq.js";function Ft(e,s){for(var a=-1,u=e==null?0:e.length;++a<u&&s(e[a],a,e)!==!1;);return e}function Lt(e,s){return e&&W(s,Se(s),e)}function Pt(e,s){return e&&W(s,oe(s),e)}function Ut(e,s){return W(e,we(e),s)}var Rt=Object.getOwnPropertySymbols,Fe=Rt?function(e){for(var s=[];e;)He(s,we(e)),e=Et(e);return s}:bt;function Ot(e,s){return W(e,Fe(e),s)}function Bt(e){return vt(e,oe,Fe)}var Dt=Object.prototype,It=Dt.hasOwnProperty;function Nt(e){var s=e.length,a=new e.constructor(s);return s&&typeof e[0]=="string"&&It.call(e,"index")&&(a.index=e.index,a.input=e.input),a}function Mt(e,s){var a=s?Ae(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}var Ht=/\w*$/;function qt(e){var s=new e.constructor(e.source,Ht.exec(e));return s.lastIndex=e.lastIndex,s}var de=re?re.prototype:void 0,pe=de?de.valueOf:void 0;function Kt(e){return pe?Object(pe.call(e)):{}}var zt="[object Boolean]",Vt="[object Date]",Gt="[object Map]",Xt="[object Number]",Wt="[object RegExp]",Yt="[object Set]",Jt="[object String]",Qt="[object Symbol]",Zt="[object ArrayBuffer]",xt="[object DataView]",ea="[object Float32Array]",ta="[object Float64Array]",aa="[object Int8Array]",sa="[object Int16Array]",na="[object Int32Array]",oa="[object Uint8Array]",ra="[object Uint8ClampedArray]",la="[object Uint16Array]",ia="[object Uint32Array]";function ua(e,s,a){var u=e.constructor;switch(s){case Zt:return Ae(e);case zt:case Vt:return new u(+e);case xt:return Mt(e,a);case ea:case ta:case aa:case sa:case na:case oa:case ra:case la:case ia:return Ct(e,a);case Gt:return new u;case Xt:case Jt:return new u(e);case Wt:return qt(e);case Yt:return new u;case Qt:return Kt(e)}}var ca="[object Map]";function da(e){return $e(e)&&ne(e)==ca}var fe=z&&z.isMap,pa=fe?ke(fe):da,fa="[object Set]";function ga(e){return $e(e)&&ne(e)==fa}var ge=z&&z.isSet,ma=ge?ke(ge):ga,ya=1,ba=2,va=4,Le="[object Arguments]",ha="[object Array]",_a="[object Boolean]",Ta="[object Date]",$a="[object Error]",Pe="[object Function]",Ea="[object GeneratorFunction]",Ca="[object Map]",ja="[object Number]",Ue="[object Object]",Sa="[object RegExp]",wa="[object Set]",ka="[object String]",Aa="[object Symbol]",Fa="[object WeakMap]",La="[object ArrayBuffer]",Pa="[object DataView]",Ua="[object Float32Array]",Ra="[object Float64Array]",Oa="[object Int8Array]",Ba="[object Int16Array]",Da="[object Int32Array]",Ia="[object Uint8Array]",Na="[object Uint8ClampedArray]",Ma="[object Uint16Array]",Ha="[object Uint32Array]",y={};y[Le]=y[ha]=y[La]=y[Pa]=y[_a]=y[Ta]=y[Ua]=y[Ra]=y[Oa]=y[Ba]=y[Da]=y[Ca]=y[ja]=y[Ue]=y[Sa]=y[wa]=y[ka]=y[Aa]=y[Ia]=y[Na]=y[Ma]=y[Ha]=!0;y[$a]=y[Pe]=y[Fa]=!1;function H(e,s,a,u,d,c){var l,g=s&ya,m=s&ba,T=s&va;if(l!==void 0)return l;if(!qe(e))return e;var E=Ke(e);if(E){if(l=Nt(e),!g)return jt(e,l)}else{var f=ne(e),w=f==Pe||f==Ea;if(ht(e))return St(e,g);if(f==Ue||f==Le||w&&!d){if(l=m||w?{}:wt(e),!g)return m?Ot(e,Pt(l,e)):Ut(e,Lt(l,e))}else{if(!y[f])return d?e:{};l=ua(e,f,g)}}c||(c=new _t);var o=c.get(e);if(o)return o;c.set(e,l),ma(e)?e.forEach(function(p){l.add(H(p,s,a,p,e,c))}):pa(e)&&e.forEach(function(p,r){l.set(r,H(p,s,a,r,e,c))});var i=T?m?Bt:Tt:m?oe:Se,t=E?void 0:i(e);return Ft(t||e,function(p,r){t&&(r=p,p=e[r]),ze(l,r,H(p,s,a,r,e,c))}),l}var qa=1,Ka=4;function me(e){return H(e,qa|Ka)}const Re=Symbol("uploadContextKey"),za="ElUpload";class Va extends Error{constructor(s,a,u,d){super(s),this.name="UploadAjaxError",this.status=a,this.method=u,this.url=d}}function ye(e,s,a){let u;return a.response?u="".concat(a.response.error||a.response):a.responseText?u="".concat(a.responseText):u="fail to ".concat(s.method," ").concat(e," ").concat(a.status),new Va(u,a.status,s.method,e)}function Ga(e){const s=e.responseText||e.response;if(!s)return s;try{return JSON.parse(s)}catch(a){return s}}const Xa=e=>{typeof XMLHttpRequest>"u"&&se(za,"XMLHttpRequest is undefined");const s=new XMLHttpRequest,a=e.action;s.upload&&s.upload.addEventListener("progress",c=>{const l=c;l.percent=c.total>0?c.loaded/c.total*100:0,e.onProgress(l)});const u=new FormData;if(e.data)for(const[c,l]of Object.entries(e.data))Ee(l)&&l.length?u.append(c,...l):u.append(c,l);u.append(e.filename,e.file,e.file.name),s.addEventListener("error",()=>{e.onError(ye(a,e,s))}),s.addEventListener("load",()=>{if(s.status<200||s.status>=300)return e.onError(ye(a,e,s));e.onSuccess(Ga(s))}),s.open(e.method,a,!0),e.withCredentials&&"withCredentials"in s&&(s.withCredentials=!0);const d=e.headers||{};if(d instanceof Headers)d.forEach((c,l)=>s.setRequestHeader(l,c));else for(const[c,l]of Object.entries(d))Ce(l)||s.setRequestHeader(c,String(l));return s.send(u),s},Oe=["text","picture","picture-card"];let Wa=1;const V=()=>Date.now()+Wa++,Be=M({action:{type:String,default:"#"},headers:{type:b(Object)},method:{type:String,default:"post"},data:{type:b([Object,Function,Promise]),default:()=>ee({})},multiple:Boolean,name:{type:String,default:"file"},drag:Boolean,withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},fileList:{type:b(Array),default:()=>ee([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:Oe,default:"text"},httpRequest:{type:b(Function),default:Xa},disabled:Boolean,limit:Number}),Ya=M({...Be,beforeUpload:{type:b(Function),default:j},beforeRemove:{type:b(Function)},onRemove:{type:b(Function),default:j},onChange:{type:b(Function),default:j},onPreview:{type:b(Function),default:j},onSuccess:{type:b(Function),default:j},onProgress:{type:b(Function),default:j},onError:{type:b(Function),default:j},onExceed:{type:b(Function),default:j},crossorigin:{type:b(String)}}),Ja=M({files:{type:b(Array),default:()=>ee([])},disabled:{type:Boolean,default:!1},handlePreview:{type:b(Function),default:j},listType:{type:String,values:Oe,default:"text"},crossorigin:{type:b(String)}}),Qa={remove:e=>!!e},Za=R({name:"ElUploadList"}),xa=R({...Za,props:Ja,emits:Qa,setup(e,{emit:s}){const a=e,{t:u}=Ve(),d=N("upload"),c=N("icon"),l=N("list"),g=X(),m=q(!1),T=te(()=>[d.b("list"),d.bm("list",a.listType),d.is("disabled",a.disabled)]),E=f=>{s("remove",f)};return(f,w)=>(h(),L(tt,{tag:"ul",class:v(n(T)),name:n(l).b()},{default:$(()=>[(h(!0),F(Ge,null,Xe(f.files,(o,i)=>(h(),F("li",{key:o.uid||o.name,class:v([n(d).be("list","item"),n(d).is(o.status),{focusing:m.value}]),tabindex:"0",onKeydown:je(t=>!n(g)&&E(o),["delete"]),onFocus:t=>m.value=!0,onBlur:t=>m.value=!1,onClick:t=>m.value=!1},[S(f.$slots,"default",{file:o,index:i},()=>[f.listType==="picture"||o.status!=="uploading"&&f.listType==="picture-card"?(h(),F("img",{key:0,class:v(n(d).be("list","item-thumbnail")),src:o.url,crossorigin:f.crossorigin,alt:""},null,10,["src","crossorigin"])):_("v-if",!0),o.status==="uploading"||f.listType!=="picture-card"?(h(),F("div",{key:1,class:v(n(d).be("list","item-info"))},[P("a",{class:v(n(d).be("list","item-name")),onClick:D(t=>f.handlePreview(o),["prevent"])},[C(n(O),{class:v(n(c).m("document"))},{default:$(()=>[C(n(We))]),_:1},8,["class"]),P("span",{class:v(n(d).be("list","item-file-name")),title:o.name},K(o.name),11,["title"])],10,["onClick"]),o.status==="uploading"?(h(),L(n(yt),{key:0,type:f.listType==="picture-card"?"circle":"line","stroke-width":f.listType==="picture-card"?6:2,percentage:Number(o.percentage),style:Ye(f.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):_("v-if",!0)],2)):_("v-if",!0),P("label",{class:v(n(d).be("list","item-status-label"))},[f.listType==="text"?(h(),L(n(O),{key:0,class:v([n(c).m("upload-success"),n(c).m("circle-check")])},{default:$(()=>[C(n(Je))]),_:1},8,["class"])):["picture-card","picture"].includes(f.listType)?(h(),L(n(O),{key:1,class:v([n(c).m("upload-success"),n(c).m("check")])},{default:$(()=>[C(n(Qe))]),_:1},8,["class"])):_("v-if",!0)],2),n(g)?_("v-if",!0):(h(),L(n(O),{key:2,class:v(n(c).m("close")),onClick:t=>E(o)},{default:$(()=>[C(n(Ze))]),_:2},1032,["class","onClick"])),_(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),_(" This is a bug which needs to be fixed "),_(" TODO: Fix the incorrect navigation interaction "),n(g)?_("v-if",!0):(h(),F("i",{key:3,class:v(n(c).m("close-tip"))},K(n(u)("el.upload.deleteTip")),3)),f.listType==="picture-card"?(h(),F("span",{key:4,class:v(n(d).be("list","item-actions"))},[P("span",{class:v(n(d).be("list","item-preview")),onClick:t=>f.handlePreview(o)},[C(n(O),{class:v(n(c).m("zoom-in"))},{default:$(()=>[C(n(xe))]),_:1},8,["class"])],10,["onClick"]),n(g)?_("v-if",!0):(h(),F("span",{key:0,class:v(n(d).be("list","item-delete")),onClick:t=>E(o)},[C(n(O),{class:v(n(c).m("delete"))},{default:$(()=>[C(n(et))]),_:1},8,["class"])],10,["onClick"]))],2)):_("v-if",!0)])],42,["onKeydown","onFocus","onBlur","onClick"]))),128)),S(f.$slots,"append")]),_:3},8,["class","name"]))}});var be=G(xa,[["__file","upload-list.vue"]]);const es=M({disabled:{type:Boolean,default:!1}}),ts={file:e=>Ee(e)},De="ElUploadDrag",as=R({name:De}),ss=R({...as,props:es,emits:ts,setup(e,{emit:s}){at(Re)||se(De,"usage: <el-upload><el-upload-dragger /></el-upload>");const u=N("upload"),d=q(!1),c=X(),l=m=>{if(c.value)return;d.value=!1,m.stopPropagation();const T=Array.from(m.dataTransfer.files);s("file",T)},g=()=>{c.value||(d.value=!0)};return(m,T)=>(h(),F("div",{class:v([n(u).b("dragger"),n(u).is("dragover",d.value)]),onDrop:D(l,["prevent"]),onDragover:D(g,["prevent"]),onDragleave:D(E=>d.value=!1,["prevent"])},[S(m.$slots,"default")],42,["onDrop","onDragover","onDragleave"]))}});var ns=G(ss,[["__file","upload-dragger.vue"]]);const os=M({...Be,beforeUpload:{type:b(Function),default:j},onRemove:{type:b(Function),default:j},onStart:{type:b(Function),default:j},onSuccess:{type:b(Function),default:j},onProgress:{type:b(Function),default:j},onError:{type:b(Function),default:j},onExceed:{type:b(Function),default:j}}),rs=R({name:"ElUploadContent",inheritAttrs:!1}),ls=R({...rs,props:os,setup(e,{expose:s}){const a=e,u=N("upload"),d=X(),c=ae({}),l=ae(),g=t=>{if(t.length===0)return;const{autoUpload:p,limit:r,fileList:k,multiple:A,onStart:U,onExceed:Y}=a;if(r&&k.length+t.length>r){Y(t,k);return}A||(t=t.slice(0,1));for(const J of t){const I=J;I.uid=V(),U(I),p&&m(I)}},m=async t=>{if(l.value.value="",!a.beforeUpload)return E(t);let p,r={};try{const A=a.data,U=a.beforeUpload(t);r=le(a.data)?me(a.data):a.data,p=await U,le(a.data)&&$t(A,r)&&(r=me(a.data))}catch(A){p=!1}if(p===!1){a.onRemove(t);return}let k=t;p instanceof Blob&&(p instanceof File?k=p:k=new File([p],t.name,{type:t.type})),E(Object.assign(k,{uid:t.uid}),r)},T=async(t,p)=>nt(t)?t(p):t,E=async(t,p)=>{const{headers:r,data:k,method:A,withCredentials:U,name:Y,action:J,onProgress:I,onSuccess:Ie,onError:Ne,httpRequest:Me}=a;try{p=await T(p!=null?p:k,t)}catch(B){a.onRemove(t);return}const{uid:Q}=t,Z={headers:r||{},withCredentials:U,file:t,data:p,method:A,filename:Y,action:J,onProgress:B=>{I(B,t)},onSuccess:B=>{Ie(B,t),delete c.value[Q]},onError:B=>{Ne(B,t),delete c.value[Q]}},x=Me(Z);c.value[Q]=x,x instanceof Promise&&x.then(Z.onSuccess,Z.onError)},f=t=>{const p=t.target.files;p&&g(Array.from(p))},w=()=>{d.value||(l.value.value="",l.value.click())},o=()=>{w()};return s({abort:t=>{st(c.value).filter(t?([r])=>String(t.uid)===r:()=>!0).forEach(([r,k])=>{k instanceof XMLHttpRequest&&k.abort(),delete c.value[r]})},upload:m}),(t,p)=>(h(),F("div",{class:v([n(u).b(),n(u).m(t.listType),n(u).is("drag",t.drag),n(u).is("disabled",n(d))]),tabindex:n(d)?"-1":"0",onClick:w,onKeydown:je(D(o,["self"]),["enter","space"])},[t.drag?(h(),L(ns,{key:0,disabled:n(d),onFile:g},{default:$(()=>[S(t.$slots,"default")]),_:3},8,["disabled"])):S(t.$slots,"default",{key:1}),P("input",{ref_key:"inputRef",ref:l,class:v(n(u).e("input")),name:t.name,disabled:n(d),multiple:t.multiple,accept:t.accept,type:"file",onChange:f,onClick:D(()=>{},["stop"])},null,42,["name","disabled","multiple","accept","onClick"])],42,["tabindex","onKeydown"]))}});var ve=G(ls,[["__file","upload-content.vue"]]);const he="ElUpload",_e=e=>{var s;(s=e.url)!=null&&s.startsWith("blob:")&&URL.revokeObjectURL(e.url)},is=(e,s)=>{const a=ot(e,"fileList",void 0,{passive:!0}),u=o=>a.value.find(i=>i.uid===o.uid);function d(o){var i;(i=s.value)==null||i.abort(o)}function c(o=["ready","uploading","success","fail"]){a.value=a.value.filter(i=>!o.includes(i.status))}function l(o){a.value=a.value.filter(i=>i!==o)}const g=(o,i)=>{const t=u(i);t&&(console.error(o),t.status="fail",l(t),e.onError(o,t,a.value),e.onChange(t,a.value))},m=(o,i)=>{const t=u(i);t&&(e.onProgress(o,t,a.value),t.status="uploading",t.percentage=Math.round(o.percent))},T=(o,i)=>{const t=u(i);t&&(t.status="success",t.response=o,e.onSuccess(o,t,a.value),e.onChange(t,a.value))},E=o=>{Ce(o.uid)&&(o.uid=V());const i={name:o.name,percentage:0,status:"ready",size:o.size,raw:o,uid:o.uid};if(e.listType==="picture-card"||e.listType==="picture")try{i.url=URL.createObjectURL(o)}catch(t){rt(he,t.message),e.onError(t,i,a.value)}a.value=[...a.value,i],e.onChange(i,a.value)},f=async o=>{const i=o instanceof File?u(o):o;i||se(he,"file to be removed not found");const t=p=>{d(p),l(p),e.onRemove(p,a.value),_e(p)};e.beforeRemove?await e.beforeRemove(i,a.value)!==!1&&t(i):t(i)};function w(){a.value.filter(({status:o})=>o==="ready").forEach(({raw:o})=>{var i;return o&&((i=s.value)==null?void 0:i.upload(o))})}return ie(()=>e.listType,o=>{o!=="picture-card"&&o!=="picture"||(a.value=a.value.map(i=>{const{raw:t,url:p}=i;if(!p&&t)try{i.url=URL.createObjectURL(t)}catch(r){e.onError(r,i,a.value)}return i}))}),ie(a,o=>{for(const i of o)i.uid||(i.uid=V()),i.status||(i.status="success")},{immediate:!0,deep:!0}),{uploadFiles:a,abort:d,clearFiles:c,handleError:g,handleProgress:m,handleStart:E,handleSuccess:T,handleRemove:f,submit:w,revokeFileObjectURL:_e}},us=R({name:"ElUpload"}),cs=R({...us,props:Ya,setup(e,{expose:s}){const a=e,u=X(),d=ae(),{abort:c,submit:l,clearFiles:g,uploadFiles:m,handleStart:T,handleError:E,handleRemove:f,handleSuccess:w,handleProgress:o,revokeFileObjectURL:i}=is(a,d),t=te(()=>a.listType==="picture-card"),p=te(()=>({...a,fileList:m.value,onStart:T,onProgress:o,onSuccess:w,onError:E,onRemove:f}));return lt(()=>{m.value.forEach(i)}),it(Re,{accept:ut(a,"accept")}),s({abort:c,submit:l,clearFiles:g,handleStart:T,handleRemove:f}),(r,k)=>(h(),F("div",null,[n(t)&&r.showFileList?(h(),L(be,{key:0,disabled:n(u),"list-type":r.listType,files:n(m),crossorigin:r.crossorigin,"handle-preview":r.onPreview,onRemove:n(f)},ue({append:$(()=>[C(ve,ce({ref_key:"uploadRef",ref:d},n(p)),{default:$(()=>[r.$slots.trigger?S(r.$slots,"trigger",{key:0}):_("v-if",!0),!r.$slots.trigger&&r.$slots.default?S(r.$slots,"default",{key:1}):_("v-if",!0)]),_:3},16)]),_:2},[r.$slots.file?{name:"default",fn:$(({file:A,index:U})=>[S(r.$slots,"file",{file:A,index:U})])}:void 0]),1032,["disabled","list-type","files","crossorigin","handle-preview","onRemove"])):_("v-if",!0),!n(t)||n(t)&&!r.showFileList?(h(),L(ve,ce({key:1,ref_key:"uploadRef",ref:d},n(p)),{default:$(()=>[r.$slots.trigger?S(r.$slots,"trigger",{key:0}):_("v-if",!0),!r.$slots.trigger&&r.$slots.default?S(r.$slots,"default",{key:1}):_("v-if",!0)]),_:3},16)):_("v-if",!0),r.$slots.trigger?S(r.$slots,"default",{key:2}):_("v-if",!0),S(r.$slots,"tip"),!n(t)&&r.showFileList?(h(),L(be,{key:3,disabled:n(u),"list-type":r.listType,files:n(m),crossorigin:r.crossorigin,"handle-preview":r.onPreview,onRemove:n(f)},ue({_:2},[r.$slots.file?{name:"default",fn:$(({file:A,index:U})=>[S(r.$slots,"file",{file:A,index:U})])}:void 0]),1032,["disabled","list-type","files","crossorigin","handle-preview","onRemove"])):_("v-if",!0)]))}});var ds=G(cs,[["__file","upload.vue"]]);const ps=ct(ds),fs={Base64结果:"Base64 string result"},gs={Base64结果:"Base64结果"},ms={Base64结果:"Base64結果"},Te={en_US:fs,zh_Hans_CN:gs,zh_Hant_HK:ms},ys={class:"el-upload__text"},bs={class:"label mt-20 flex space-x-20 items-center justify-start"},As={__name:"pic2base64",setup(e){const s=l=>{const m=ft().$lang.value||"zh_Hans_CN",T=Te[m]||Te.zh_Hans_CN||{};return T[l]===void 0?l:T[l]},a=q(),u=q(""),d=l=>{a.value.clearFiles();const g=l[0];g.uid=V(),a.value.handleStart(g)},c=l=>{const g=new FileReader;g.onload=function(m){u.value=m.target.result.toString()},g.readAsDataURL(l.raw)};return(l,g)=>{const m=O,T=mt,E=ps,f=gt,w=kt,o=At;return h(),L(o,{class:"p-pic2base64"},{default:$(()=>[g[2]||(g[2]=P("p",{class:"label"},"Upload image",-1)),C(E,{ref_key:"upload",ref:a,limit:1,"on-exceed":d,"auto-upload":!1,"list-type":"picture",drag:"","on-change":c},{default:$(()=>[C(m,{class:"el-icon--upload"},{default:$(()=>[C(n(dt))]),_:1}),P("div",ys,[C(T,{text:"Drag file here or [a]click to upload[/a]"},{a:$(()=>g[1]||(g[1]=[P("em",null,K("click to upload"),-1)])),_:1})])]),_:1},512),P("div",bs,[P("span",null,K(s("Base64结果")),1),C(f,{msg:n(u)},null,8,["msg"])]),C(w,{modelValue:n(u),"onUpdate:modelValue":g[0]||(g[0]=i=>pt(u)?u.value=i:null),type:"textarea",rows:7,resize:"none",class:"text-primary"},null,8,["modelValue"])]),_:1})}}};export{As as default};

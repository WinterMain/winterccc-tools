import{S as I,f as S,k as z}from"./CABNSEfg.js";import{q as L,bK as v,bL as P,b6 as N,bM as D,b0 as F,v as G,bm as $,A as R,H as K,k as q,o as m,c as U,a as g,a1 as h,O as l,f as o,e as b,w as y,b as k,R as C,Q as E,E as _,m as A,P as M,T as H,a2 as Q,a6 as V}from"./ClYNjL7Q.js";import{h as J,i as W}from"./DkEpBz5Z.js";import{a as X}from"./D6O19e1y.js";var Y=1,Z=2;function x(e,n,t,i){var s=t.length,c=s;if(e==null)return!c;for(e=Object(e);s--;){var a=t[s];if(a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++s<c;){a=t[s];var u=a[0],f=e[u],r=a[1];if(a[2]){if(f===void 0&&!(u in e))return!1}else{var p=new I,d;if(!(d===void 0?S(r,f,Y|Z,i,p):d))return!1}}return!0}function O(e){return e===e&&!L(e)}function j(e){for(var n=z(e),t=n.length;t--;){var i=n[t],s=e[i];n[t]=[i,s,O(s)]}return n}function T(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}function ee(e){var n=j(e);return n.length==1&&n[0][2]?T(n[0][0],n[0][1]):function(t){return t===e||x(t,e,n)}}var ne=1,se=2;function te(e,n){return v(e)&&O(n)?T(P(e),n):function(t){var i=N(t,e);return i===void 0&&i===n?J(t,e):S(n,i,ne|se)}}function re(e){return function(n){return n==null?void 0:n[e]}}function ae(e){return function(n){return D(n,e)}}function oe(e){return v(e)?re(P(e)):ae(e)}function be(e){return typeof e=="function"?e:e==null?W:typeof e=="object"?F(e)?te(e[0],e[1]):ee(e):oe(e)}const ie=G({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:$},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),le={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},ce=R({name:"ElTag"}),ue=R({...ce,props:ie,emits:le,setup(e,{emit:n}){const t=e,i=X(),s=K("tag"),c=q(()=>{const{type:r,hit:p,effect:d,closable:w,round:B}=t;return[s.b(),s.is("closable",w),s.m(r||"primary"),s.m(i.value),s.m(d),s.is("hit",p),s.is("round",B)]}),a=r=>{n("close",r)},u=r=>{n("click",r)},f=r=>{r.component.subTree.component.bum=null};return(r,p)=>r.disableTransitions?(m(),U("span",{key:0,class:l(o(c)),style:M({backgroundColor:r.color}),onClick:u},[g("span",{class:l(o(s).e("content"))},[h(r.$slots,"default")],2),r.closable?(m(),b(o(_),{key:0,class:l(o(s).e("close")),onClick:E(a,["stop"])},{default:y(()=>[k(o(C))]),_:1},8,["class","onClick"])):A("v-if",!0)],6)):(m(),b(H,{key:1,name:"".concat(o(s).namespace.value,"-zoom-in-center"),appear:"",onVnodeMounted:f},{default:y(()=>[g("span",{class:l(o(c)),style:M({backgroundColor:r.color}),onClick:u},[g("span",{class:l(o(s).e("content"))},[h(r.$slots,"default")],2),r.closable?(m(),b(o(_),{key:0,class:l(o(s).e("close")),onClick:E(a,["stop"])},{default:y(()=>[k(o(C))]),_:1},8,["class","onClick"])):A("v-if",!0)],6)]),_:3},8,["name"]))}});var fe=Q(ue,[["__file","tag.vue"]]);const ye=V(fe);export{ye as E,be as b,ie as t};

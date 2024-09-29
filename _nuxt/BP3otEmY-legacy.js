System.register(["./BPjrCEAQ-legacy.js"],(function(e,t){"use strict";var r,a,n,l,o,u,i,s,c,v,f,d,p,h,g,b,y,m,x,S,q;return{setters:[e=>{r=e.aM,a=e.A,n=e.r,l=e.u,o=e.N,u=e.bS,i=e.bT,s=e.av,c=e.bU,v=e.l,f=e.b5,d=e.bV,p=e.bW,h=e.k,g=e.bX,b=e.bY,y=e.bZ,m=e.b_,x=e.bP,S=e.b$,q=e.c0}],execute:function(){async function t(e,a=r()){const{path:n,matched:l}=a.resolve(e);if(!l.length)return;if(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(n))return;const o=a._preloadPromises=a._preloadPromises||[];if(o.length>4)return Promise.all(o).then((()=>t(e,a)));a._routePreloaded.add(n);const u=l.map((e=>e.components?.default)).filter((e=>"function"==typeof e));for(const t of u){const e=Promise.resolve(t()).catch((()=>{})).finally((()=>o.splice(o.indexOf(e))));o.push(e)}await Promise.all(o)}function P(e){const p=e.componentName||"NuxtLink";function S(t,r){if(!t||"append"!==e.trailingSlash&&"remove"!==e.trailingSlash)return t;if("string"==typeof t)return A(t,e.trailingSlash);const a="path"in t&&void 0!==t.path?t.path:r(t).path;return{...t,name:void 0,path:A(a,e.trailingSlash)}}function q(e){const t=r(),a=x(),n=h((()=>!!e.target&&"_self"!==e.target)),l=h((()=>{const t=e.to||e.href||"";return"string"==typeof t&&g(t,{acceptRelative:!0})})),o=f("RouterLink"),u=o&&"string"!=typeof o?o.useLink:void 0,i=h((()=>{if(e.external)return!0;const t=e.to||e.href||"";return"object"!=typeof t&&(""===t||l.value)})),s=h((()=>{const r=e.to||e.href||"";return i.value?r:S(r,t.resolve)})),c=i.value?void 0:u?.({...e,to:s}),v=h((()=>{if(!s.value||l.value)return s.value;if(i.value){const e="object"==typeof s.value&&"path"in s.value?b(s.value):s.value;return S("object"==typeof e?t.resolve(e).href:e,t.resolve)}return"object"==typeof s.value?t.resolve(s.value)?.href??null:S(y(a.app.baseURL,s.value),t.resolve)}));return{to:s,hasTarget:n,isAbsoluteUrl:l,isExternal:i,href:v,isActive:c?.isActive??h((()=>s.value===t.currentRoute.value.path)),isExactActive:c?.isExactActive??h((()=>s.value===t.currentRoute.value.path)),route:c?.route??h((()=>t.resolve(s.value))),async navigate(){await m(v.value,{replace:e.replace,external:i.value||n.value})}}}return a({name:p,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:q,setup(a,{slots:p}){const h=r(),{to:g,href:y,navigate:m,isExternal:x,hasTarget:S,isAbsoluteUrl:P}=q(a),A=n(!1),C=n(null),_=e=>{C.value=a.custom?e?.$el?.nextElementSibling:e?.$el};function R(t){return!A.value&&("string"==typeof a.prefetchOn?a.prefetchOn===t:a.prefetchOn?.[t]??e.prefetchOn?.[t])&&!1!==(a.prefetch??e.prefetch)&&!0!==a.noPrefetch&&"_blank"!==a.target&&!function(){const e=navigator.connection;return!(!e||!e.saveData&&!/2g/.test(e.effectiveType))}()}async function k(e=l()){if(A.value)return;A.value=!0;const r="string"==typeof g.value?g.value:x.value?b(g.value):h.resolve(g.value).fullPath;await Promise.all([e.hooks.callHook("link:prefetch",r).catch((()=>{})),!x.value&&!S.value&&t(g.value,h).catch((()=>{}))])}if(R("visibility")){const e=l();let t,r=null;o((()=>{const a=function(){const e=l();if(e._observer)return e._observer;let t=null;const r=new Map,a=(e,a)=>(t||(t=new IntersectionObserver((e=>{for(const t of e){const e=r.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&e&&e()}}))),r.set(e,a),t.observe(e),()=>{r.delete(e),t.unobserve(e),0===r.size&&(t.disconnect(),t=null)}),n=e._observer={observe:a};return n}();u((()=>{t=i((()=>{C?.value?.tagName&&(r=a.observe(C.value,(async()=>{r?.(),r=null,await k(e)})))}))}))})),s((()=>{t&&c(t),r?.(),r=null}))}return()=>{if(!x.value&&!S.value){const t={ref:_,to:g.value,activeClass:a.activeClass||e.activeClass,exactActiveClass:a.exactActiveClass||e.exactActiveClass,replace:a.replace,ariaCurrentValue:a.ariaCurrentValue,custom:a.custom};return a.custom||(R("interaction")&&(t.onPointerenter=k.bind(null,void 0),t.onFocus=k.bind(null,void 0)),A.value&&(t.class=a.prefetchedClass||e.prefetchedClass),t.rel=a.rel||void 0),v(f("RouterLink"),t,p.default)}const t=a.target||null,r=((...e)=>e.find((e=>void 0!==e)))(a.noRel?"":a.rel,e.externalRelAttribute,P.value||S.value?"noopener noreferrer":"")||null;return a.custom?p.default?p.default({href:y.value,navigate:m,prefetch:k,get route(){if(!y.value)return;const e=new URL(y.value,window.location.href);return{path:e.pathname,fullPath:e.pathname,get query(){return d(e.search)},hash:e.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:y.value}},rel:r,target:t,isExternal:x.value||S.value,isActive:!1,isExactActive:!1}):null:v("a",{ref:C,href:y.value||null,rel:r,target:t},p.default?.())}}})}function A(e,t){const r="append"===t?S:q;return g(e)&&!e.startsWith("http")?e:r(e,!0)}e("_",P(p))}}}));

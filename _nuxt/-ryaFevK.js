import{P as t,aY as b,r,cO as z,aC as i,cP as c,cQ as p,d as m,S as y,Q as F,bV as h,aV as w,b3 as P}from"./L3kcE7qW.js";const I=o=>{const s=b();return t(()=>{var u,l;return(l=(u=s==null?void 0:s.proxy)==null?void 0:u.$props)==null?void 0:l[o]})},_=(o,s={})=>{const u=r(void 0),l=s.prop?u:I("size"),e=s.global?u:z(),a=s.form?{size:void 0}:i(c,void 0),n=s.formItem?{size:void 0}:i(p,void 0);return t(()=>l.value||m(o)||(n==null?void 0:n.size)||(a==null?void 0:a.size)||e.value||"")},K=o=>{const s=I("disabled"),u=i(c,void 0);return t(()=>s.value||m(o)||(u==null?void 0:u.disabled)||!1)},L=()=>{const o=i(c,void 0),s=i(p,void 0);return{form:o,formItem:s}},Q=(o,{formItemContext:s,disableIdGeneration:u,disableIdManagement:l})=>{u||(u=r(!1)),l||(l=r(!1));const e=r();let a;const n=t(()=>{var v;return!!(!(o.label||o.ariaLabel)&&s&&s.inputIds&&((v=s.inputIds)==null?void 0:v.length)<=1)});return y(()=>{a=F([w(o,"id"),u],([v,f])=>{const d=v!=null?v:f?void 0:h().value;d!==e.value&&(s!=null&&s.removeInputId&&(e.value&&s.removeInputId(e.value),!(l!=null&&l.value)&&!f&&d&&s.addInputId(d)),e.value=d)},{immediate:!0})}),P(()=>{a&&a(),s!=null&&s.removeInputId&&e.value&&s.removeInputId(e.value)}),{isLabeledByFormItem:n,inputId:e}};export{_ as a,K as b,Q as c,L as u};

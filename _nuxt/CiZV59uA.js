import{I as t,F as z,r,d2 as b,l as d,d3 as c,d4 as p,e as m,o as F,s as y,cg as h,bc as w,Y as _}from"./gDhoqvA1.js";const I=o=>{const s=z();return t(()=>{var u,l;return(l=(u=s==null?void 0:s.proxy)==null?void 0:u.$props)==null?void 0:l[o]})},L=(o,s={})=>{const u=r(void 0),l=s.prop?u:I("size"),e=s.global?u:b(),a=s.form?{size:void 0}:d(c,void 0),i=s.formItem?{size:void 0}:d(p,void 0);return t(()=>l.value||m(o)||(i==null?void 0:i.size)||(a==null?void 0:a.size)||e.value||"")},R=o=>{const s=I("disabled"),u=d(c,void 0);return t(()=>s.value||m(o)||(u==null?void 0:u.disabled)||!1)},S=()=>{const o=d(c,void 0),s=d(p,void 0);return{form:o,formItem:s}},U=(o,{formItemContext:s,disableIdGeneration:u,disableIdManagement:l})=>{u||(u=r(!1)),l||(l=r(!1));const e=r();let a;const i=t(()=>{var v;return!!(!(o.label||o.ariaLabel)&&s&&s.inputIds&&((v=s.inputIds)==null?void 0:v.length)<=1)});return F(()=>{a=y([w(o,"id"),u],([v,f])=>{const n=v!=null?v:f?void 0:h().value;n!==e.value&&(s!=null&&s.removeInputId&&(e.value&&s.removeInputId(e.value),!(l!=null&&l.value)&&!f&&n&&s.addInputId(n)),e.value=n)},{immediate:!0})}),_(()=>{a&&a(),s!=null&&s.removeInputId&&e.value&&s.removeInputId(e.value)}),{isLabeledByFormItem:i,inputId:e}};export{L as a,R as b,U as c,S as u};

System.register(["./CF775p2q-legacy.js","./CXmh6w0z-legacy.js","./B56JDj7E-legacy.js"],(function(e,l){"use strict";var o,a,c,r,i,n,t,d,b,u,s,h,x,k,v,p,m,g,f,_,y,C,L,V,w,z,B,S,F,I,E,U,N,D,O,G,j,$,R,Y,A,W,q,H,K,M,P,X,Z,J,Q,T,ee;return{setters:[e=>{o=e.a_,a=e.b0,c=e.U,r=e.W,i=e.X,n=e.bW,t=e.q,d=e.L,b=e.V,u=e.z,s=e.b2,h=e.A,x=e.I,k=e.r,v=e.aY,p=e.cj,m=e.bZ,g=e.ck,f=e.cl,_=e.n,y=e.Y,C=e.y,L=e.a,V=e.c,w=e.w,z=e.b,B=e.F,S=e.e,F=e.a1,I=e.D,E=e.i,U=e.az,N=e.cm,D=e.S,O=e.ac,G=e.f,j=e.t,$=e.a3,R=e.aC,Y=e.H,A=e.G,W=e.k,q=e.l,H=e.R,K=e.cn,M=e.b_,P=e.a4,X=e.a5},e=>{Z=e.b,J=e.u,Q=e.a,T=e.c},e=>{ee=e.i}],execute:function(){var l=document.createElement("style");l.textContent='.el-checkbox{--el-checkbox-font-size:14px;--el-checkbox-font-weight:var(--el-font-weight-primary);--el-checkbox-text-color:var(--el-text-color-regular);--el-checkbox-input-height:14px;--el-checkbox-input-width:14px;--el-checkbox-border-radius:var(--el-border-radius-small);--el-checkbox-bg-color:var(--el-fill-color-blank);--el-checkbox-input-border:var(--el-border);--el-checkbox-disabled-border-color:var(--el-border-color);--el-checkbox-disabled-input-fill:var(--el-fill-color-light);--el-checkbox-disabled-icon-color:var(--el-text-color-placeholder);--el-checkbox-disabled-checked-input-fill:var(--el-border-color-extra-light);--el-checkbox-disabled-checked-input-border-color:var(--el-border-color);--el-checkbox-disabled-checked-icon-color:var(--el-text-color-placeholder);--el-checkbox-checked-text-color:var(--el-color-primary);--el-checkbox-checked-input-border-color:var(--el-color-primary);--el-checkbox-checked-bg-color:var(--el-color-primary);--el-checkbox-checked-icon-color:var(--el-color-white);--el-checkbox-input-border-color-hover:var(--el-color-primary);align-items:center;color:var(--el-checkbox-text-color);cursor:pointer;display:inline-flex;font-size:var(--el-font-size-base);font-weight:var(--el-checkbox-font-weight);height:var(--el-checkbox-height,32px);margin-right:30px;position:relative;-webkit-user-select:none;user-select:none;white-space:nowrap}.el-checkbox.is-disabled{cursor:not-allowed}.el-checkbox.is-bordered{border:var(--el-border);border-radius:var(--el-border-radius-base);box-sizing:border-box;padding:0 15px 0 9px}.el-checkbox.is-bordered.is-checked{border-color:var(--el-color-primary)}.el-checkbox.is-bordered.is-disabled{border-color:var(--el-border-color-lighter)}.el-checkbox.is-bordered.el-checkbox--large{border-radius:var(--el-border-radius-base);padding:0 19px 0 11px}.el-checkbox.is-bordered.el-checkbox--large .el-checkbox__label{font-size:var(--el-font-size-base)}.el-checkbox.is-bordered.el-checkbox--large .el-checkbox__inner{height:14px;width:14px}.el-checkbox.is-bordered.el-checkbox--small{border-radius:calc(var(--el-border-radius-base) - 1px);padding:0 11px 0 7px}.el-checkbox.is-bordered.el-checkbox--small .el-checkbox__label{font-size:12px}.el-checkbox.is-bordered.el-checkbox--small .el-checkbox__inner{height:12px;width:12px}.el-checkbox.is-bordered.el-checkbox--small .el-checkbox__inner:after{height:6px;width:2px}.el-checkbox input:focus-visible+.el-checkbox__inner{border-radius:var(--el-checkbox-border-radius);outline:2px solid var(--el-checkbox-input-border-color-hover);outline-offset:1px}.el-checkbox__input{cursor:pointer;display:inline-flex;outline:none;position:relative;white-space:nowrap}.el-checkbox__input.is-disabled .el-checkbox__inner{background-color:var(--el-checkbox-disabled-input-fill);border-color:var(--el-checkbox-disabled-border-color);cursor:not-allowed}.el-checkbox__input.is-disabled .el-checkbox__inner:after{border-color:var(--el-checkbox-disabled-icon-color);cursor:not-allowed}.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner{background-color:var(--el-checkbox-disabled-checked-input-fill);border-color:var(--el-checkbox-disabled-checked-input-border-color)}.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner:after{border-color:var(--el-checkbox-disabled-checked-icon-color)}.el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner{background-color:var(--el-checkbox-disabled-checked-input-fill);border-color:var(--el-checkbox-disabled-checked-input-border-color)}.el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner:before{background-color:var(--el-checkbox-disabled-checked-icon-color);border-color:var(--el-checkbox-disabled-checked-icon-color)}.el-checkbox__input.is-disabled+span.el-checkbox__label{color:var(--el-disabled-text-color);cursor:not-allowed}.el-checkbox__input.is-checked .el-checkbox__inner{background-color:var(--el-checkbox-checked-bg-color);border-color:var(--el-checkbox-checked-input-border-color)}.el-checkbox__input.is-checked .el-checkbox__inner:after{border-color:var(--el-checkbox-checked-icon-color);transform:rotate(45deg) scaleY(1)}.el-checkbox__input.is-checked+.el-checkbox__label{color:var(--el-checkbox-checked-text-color)}.el-checkbox__input.is-focus:not(.is-checked) .el-checkbox__original:not(:focus-visible){border-color:var(--el-checkbox-input-border-color-hover)}.el-checkbox__input.is-indeterminate .el-checkbox__inner{background-color:var(--el-checkbox-checked-bg-color);border-color:var(--el-checkbox-checked-input-border-color)}.el-checkbox__input.is-indeterminate .el-checkbox__inner:before{background-color:var(--el-checkbox-checked-icon-color);content:"";display:block;height:2px;left:0;position:absolute;right:0;top:5px;transform:scale(.5)}.el-checkbox__input.is-indeterminate .el-checkbox__inner:after{display:none}.el-checkbox__inner{background-color:var(--el-checkbox-bg-color);border:var(--el-checkbox-input-border);border-radius:var(--el-checkbox-border-radius);box-sizing:border-box;display:inline-block;height:var(--el-checkbox-input-height);position:relative;transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46),outline .25s cubic-bezier(.71,-.46,.29,1.46);width:var(--el-checkbox-input-width);z-index:var(--el-index-normal)}.el-checkbox__inner:hover{border-color:var(--el-checkbox-input-border-color-hover)}.el-checkbox__inner:after{border:1px solid #0000;border-left:0;border-top:0;box-sizing:initial;content:"";height:7px;left:4px;position:absolute;top:1px;transform:rotate(45deg) scaleY(0);transform-origin:center;transition:transform .15s ease-in .05s;width:3px}.el-checkbox__original{height:0;margin:0;opacity:0;outline:none;position:absolute;width:0;z-index:-1}.el-checkbox__label{display:inline-block;font-size:var(--el-checkbox-font-size);line-height:1;padding-left:8px}.el-checkbox.el-checkbox--large{height:40px}.el-checkbox.el-checkbox--large .el-checkbox__label{font-size:14px}.el-checkbox.el-checkbox--large .el-checkbox__inner{height:14px;width:14px}.el-checkbox.el-checkbox--small{height:24px}.el-checkbox.el-checkbox--small .el-checkbox__label{font-size:12px}.el-checkbox.el-checkbox--small .el-checkbox__inner{height:12px;width:12px}.el-checkbox.el-checkbox--small .el-checkbox__input.is-indeterminate .el-checkbox__inner:before{top:4px}.el-checkbox.el-checkbox--small .el-checkbox__inner:after{height:6px;width:2px}.el-checkbox:last-of-type{margin-right:0}\n',document.head.appendChild(l);const le={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},border:Boolean,size:o,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...a(["ariaControls"])},oe={[c]:e=>r(e)||i(e)||n(e),change:e=>r(e)||i(e)||n(e)},ae=Symbol("checkboxGroupContextKey"),ce=(e,{model:l,isLimitExceeded:o,hasOwnLabel:a,isDisabled:c,isLabeledByFormItem:r})=>{const i=t(ae,void 0),{formItem:n}=J(),{emit:b}=x();function k(l){var o,a,c,r;return[!0,e.trueValue,e.trueLabel].includes(l)?null==(a=null!=(o=e.trueValue)?o:e.trueLabel)||a:null!=(r=null!=(c=e.falseValue)?c:e.falseLabel)&&r}const v=d((()=>(null==i?void 0:i.validateEvent)||e.validateEvent));return u((()=>e.modelValue),(()=>{v.value&&(null==n||n.validate("change").catch((e=>s())))})),{handleChange:function(e){if(o.value)return;const l=e.target;b("change",k(l.checked),e)},onClickRoot:async function(i){o.value||a.value||c.value||!r.value||i.composedPath().some((e=>"LABEL"===e.tagName))||(l.value=k([!1,e.falseValue,e.falseLabel].includes(l.value)),await h(),function(e,l){b("change",k(e),l)}(l.value,i))}}},re=(e,l)=>{const{formItem:o}=J(),{model:a,isGroup:r,isLimitExceeded:i}=(e=>{const l=k(!1),{emit:o}=x(),a=t(ae,void 0),r=d((()=>!1===b(a))),i=k(!1),n=d({get(){var o,c;return r.value?null==(o=null==a?void 0:a.modelValue)?void 0:o.value:null!=(c=e.modelValue)?c:l.value},set(e){var t,d;r.value&&v(e)?(i.value=void 0!==(null==(t=null==a?void 0:a.max)?void 0:t.value)&&e.length>(null==a?void 0:a.max.value)&&e.length>n.value.length,!1===i.value&&(null==(d=null==a?void 0:a.changeEvent)||d.call(a,e))):(o(c,e),l.value=e)}});return{model:n,isGroup:r,isLimitExceeded:i}})(e),{isFocused:u,isChecked:s,checkboxButtonSize:h,checkboxSize:_,hasOwnLabel:y,actualValue:C}=((e,l,{model:o})=>{const a=t(ae,void 0),c=k(!1),r=d((()=>p(e.value)?e.label:e.value)),i=d((()=>{const l=o.value;return n(l)?l:v(l)?m(r.value)?l.map(g).some((e=>ee(e,r.value))):l.map(g).includes(r.value):null!=l?l===e.trueValue||l===e.trueLabel:!!l}));return{checkboxButtonSize:Q(d((()=>{var e;return null==(e=null==a?void 0:a.size)?void 0:e.value})),{prop:!0}),isChecked:i,isFocused:c,checkboxSize:Q(d((()=>{var e;return null==(e=null==a?void 0:a.size)?void 0:e.value}))),hasOwnLabel:d((()=>!!l.default||!p(r.value))),actualValue:r}})(e,l,{model:a}),{isDisabled:L}=(({model:e,isChecked:l})=>{const o=t(ae,void 0),a=d((()=>{var a,c;const r=null==(a=null==o?void 0:o.max)?void 0:a.value,i=null==(c=null==o?void 0:o.min)?void 0:c.value;return!b(r)&&e.value.length>=r&&!l.value||!b(i)&&e.value.length<=i&&l.value}));return{isDisabled:Z(d((()=>(null==o?void 0:o.disabled.value)||a.value))),isLimitDisabled:a}})({model:a,isChecked:s}),{inputId:V,isLabeledByFormItem:w}=T(e,{formItemContext:o,disableIdGeneration:y,disableIdManagement:r}),{handleChange:z,onClickRoot:B}=ce(e,{model:a,isLimitExceeded:i,hasOwnLabel:y,isDisabled:L,isLabeledByFormItem:w});var S,F;return e.checked&&(v(a.value)&&!a.value.includes(C.value)?a.value.push(C.value):a.value=null==(F=null!=(S=e.trueValue)?S:e.trueLabel)||F),f({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},d((()=>r.value&&p(e.value)))),f({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},d((()=>!!e.trueLabel))),f({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},d((()=>!!e.falseLabel))),{inputId:V,isLabeledByFormItem:w,isChecked:s,isDisabled:L,isFocused:u,checkboxButtonSize:h,checkboxSize:_,hasOwnLabel:y,model:a,actualValue:C,handleChange:z,onClickRoot:B}},ie=_({name:"ElCheckbox"}),ne=_({...ie,props:le,emits:oe,setup(e){const l=e,o=y(),{inputId:a,isLabeledByFormItem:c,isChecked:r,isDisabled:i,isFocused:n,checkboxSize:t,hasOwnLabel:b,model:u,actualValue:s,handleChange:h,onClickRoot:x}=re(l,o),k=C("checkbox"),v=d((()=>[k.b(),k.m(t.value),k.is("disabled",i.value),k.is("bordered",l.border),k.is("checked",r.value)])),p=d((()=>[k.e("input"),k.is("disabled",i.value),k.is("checked",r.value),k.is("indeterminate",l.indeterminate),k.is("focus",n.value)]));return(e,l)=>(L(),V(R(!S(b)&&S(c)?"span":"label"),{class:B(S(v)),"aria-controls":e.indeterminate?e.ariaControls:null,onClick:S(x)},{default:w((()=>{var l,o;return[z("span",{class:B(S(p))},[e.trueValue||e.falseValue||e.trueLabel||e.falseLabel?F((L(),I("input",{key:0,id:S(a),"onUpdate:modelValue":e=>E(u)?u.value=e:null,class:B(S(k).e("original")),type:"checkbox",indeterminate:e.indeterminate,name:e.name,tabindex:e.tabindex,disabled:S(i),"true-value":null!=(l=e.trueValue)?l:e.trueLabel,"false-value":null!=(o=e.falseValue)?o:e.falseLabel,onChange:S(h),onFocus:e=>n.value=!0,onBlur:e=>n.value=!1,onClick:U((()=>{}),["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[N,S(u)]]):F((L(),I("input",{key:1,id:S(a),"onUpdate:modelValue":e=>E(u)?u.value=e:null,class:B(S(k).e("original")),type:"checkbox",indeterminate:e.indeterminate,disabled:S(i),value:S(s),name:e.name,tabindex:e.tabindex,onChange:S(h),onFocus:e=>n.value=!0,onBlur:e=>n.value=!1,onClick:U((()=>{}),["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","disabled","value","name","tabindex","onChange","onFocus","onBlur","onClick"])),[[N,S(u)]]),z("span",{class:B(S(k).e("inner"))},null,2)],2),S(b)?(L(),I("span",{key:0,class:B(S(k).e("label"))},[D(e.$slots,"default"),e.$slots.default?$("v-if",!0):(L(),I(O,{key:0},[G(j(e.label),1)],64))],2)):$("v-if",!0)]})),_:3},8,["class","aria-controls","onClick"]))}});var te=Y(ne,[["__file","checkbox.vue"]]);const de=_({name:"ElCheckboxButton"}),be=_({...de,props:le,emits:oe,setup(e){const l=e,o=y(),{isFocused:a,isChecked:c,isDisabled:r,checkboxButtonSize:i,model:n,actualValue:b,handleChange:u}=re(l,o),s=t(ae,void 0),h=C("checkbox"),x=d((()=>{var e,l,o,a;const c=null!=(l=null==(e=null==s?void 0:s.fill)?void 0:e.value)?l:"";return{backgroundColor:c,borderColor:c,color:null!=(a=null==(o=null==s?void 0:s.textColor)?void 0:o.value)?a:"",boxShadow:c?`-1px 0 0 0 ${c}`:void 0}})),k=d((()=>[h.b("button"),h.bm("button",i.value),h.is("disabled",r.value),h.is("checked",c.value),h.is("focus",a.value)]));return(e,l)=>{var o,i;return L(),I("label",{class:B(S(k))},[e.trueValue||e.falseValue||e.trueLabel||e.falseLabel?F((L(),I("input",{key:0,"onUpdate:modelValue":e=>E(n)?n.value=e:null,class:B(S(h).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:S(r),"true-value":null!=(o=e.trueValue)?o:e.trueLabel,"false-value":null!=(i=e.falseValue)?i:e.falseLabel,onChange:S(u),onFocus:e=>a.value=!0,onBlur:e=>a.value=!1,onClick:U((()=>{}),["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[N,S(n)]]):F((L(),I("input",{key:1,"onUpdate:modelValue":e=>E(n)?n.value=e:null,class:B(S(h).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:S(r),value:S(b),onChange:S(u),onFocus:e=>a.value=!0,onBlur:e=>a.value=!1,onClick:U((()=>{}),["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","value","onChange","onFocus","onBlur","onClick"])),[[N,S(n)]]),e.$slots.default||e.label?(L(),I("span",{key:2,class:B(S(h).be("button","inner")),style:A(S(c)?S(x):void 0)},[D(e.$slots,"default",{},(()=>[G(j(e.label),1)]))],6)):$("v-if",!0)],2)}}});var ue=Y(be,[["__file","checkbox-button.vue"]]);const se=W({modelValue:{type:q(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:o,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...a(["ariaLabel"])}),he={[c]:e=>v(e),change:e=>v(e)},xe=_({name:"ElCheckboxGroup"}),ke=_({...xe,props:se,emits:he,setup(e,{emit:l}){const o=e,a=C("checkbox"),{formItem:r}=J(),{inputId:i,isLabeledByFormItem:n}=T(o,{formItemContext:r}),t=async e=>{l(c,e),await h(),l("change",e)},b=d({get:()=>o.modelValue,set(e){t(e)}});return H(ae,{...K(M(o),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:b,changeEvent:t}),u((()=>o.modelValue),(()=>{o.validateEvent&&(null==r||r.validate("change").catch((e=>s())))})),(e,l)=>{var o;return L(),V(R(e.tag),{id:S(i),class:B(S(a).b("group")),role:"group","aria-label":S(n)?void 0:e.ariaLabel||"checkbox-group","aria-labelledby":S(n)?null==(o=S(r))?void 0:o.labelId:void 0},{default:w((()=>[D(e.$slots,"default")])),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ve=Y(ke,[["__file","checkbox-group.vue"]]);e("E",P(te,{CheckboxButton:ue,CheckboxGroup:ve})),X(ue),X(ve)}}}));

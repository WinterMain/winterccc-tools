import{E as f}from"./MV-qhCxk.js";import{E as v}from"./-OrqnAWW.js";import{_ as z}from"./DpewvzMh.js";import{r as c,c as C,w as d,a as p,b as e,t as r,d as _,e as u,i as x,A as V,bz as q,a0 as H,u as N}from"./fcEDHlqk.js";import"./DS9hx6jB.js";import"./CDJVyvPN.js";import"./DBEYFFUx.js";import"./j-RNux4N.js";const g={内容:"Content","支持文本、网址和_3558":"Supports text, URL and email",清除:"Clear",生成结果:"Generate result"},b={内容:"内容","支持文本、网址和_3558":"支持文本、网址和电子邮箱",清除:"清除",生成结果:"生成结果"},B={内容:"內容","支持文本、网址和_3558":"支持文本、網址和電子郵箱",清除:"清除",生成结果:"生成結果"},m={en_US:g,zh_Hans_CN:b,zh_Hant_HK:B},E={class:"qrcode-stage"},$={class:"input-qr"},k={class:"label"},A={class:"result-qr"},S={key:0},U={class:"label"},w={class:"qrcode-area"},P={__name:"qrcode",setup(K){const o=n=>{const l=N().$lang.value||"zh_Hans_CN",a=m[l]||m.zh_Hans_CN||{};return a[n]===void 0?n:a[n]},t=c("hello");return c("black"),c("white"),(n,s)=>{const l=f,a=v,h=z;return p(),C(h,{class:"p-qrcode"},{default:d(()=>[e("div",E,[e("div",$,[e("div",k,[e("span",null,r(o("内容")),1),_(l,{class:"p-3 h-20 text-12 mr-12",size:"small",onClick:s[0]||(s[0]=i=>t.value="")},{default:d(()=>[e("span",null,r(o("清除")),1)]),_:1})]),_(a,{modelValue:u(t),"onUpdate:modelValue":s[1]||(s[1]=i=>x(t)?t.value=i:null),type:"textarea",placeholder:o("支持文本、网址和_3558"),resize:"none"},null,8,["modelValue","placeholder"])]),e("div",A,[u(t)?(p(),V("div",S,[e("div",U,[e("span",null,r(o("生成结果")),1)]),e("div",w,[_(q,{value:u(t),size:260},null,8,["value"])])])):H("",!0)])])]),_:1})}}};export{P as default};

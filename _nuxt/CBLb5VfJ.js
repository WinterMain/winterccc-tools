import{u as g,_ as j}from"./ClrcZIwR.js";import{E as v}from"./Dd8xN0Fr.js";import{r as C,P as _,j as N,b as r,d as s,a as n,t as m,i as H,u as x,_ as z,o as V,p as b}from"./L3kcE7qW.js";import{S}from"./DHFzNY8C.js";import"./BUNvxL0a.js";import"./Y1Xo33K5.js";import"./-ryaFevK.js";const $={待格式化内容:"Content to be formatted",格式化结果:"Formatted result",请输入内容:"Please enter content",非法内容:"Illegal content"},w={待格式化内容:"待格式化内容",格式化结果:"格式化结果",请输入内容:"请输入内容",非法内容:"非法内容"},y={待格式化内容:"待格式化內容",格式化结果:"格式化結果",请输入内容:"請輸入內容",非法内容:"非法內容"},p={en_US:$,zh_Hans_CN:w,zh_Hant_HK:y},A={class:"p-jsonformat"},B={class:"jsonformat"},E={class:"label"},F={class:"label mt-20"},O={class:"output-result"},R={__name:"jsonformat",setup(P){const e=t=>{const c=x().$lang.value||"zh_Hans_CN",a=p[c]||p.zh_Hans_CN||{};return a[t]===void 0?t:a[t]},{currentFunc:i}=g(),o=C(""),u=_(()=>b(o.value,e("非法内容"))),d=_(()=>{try{return JSON.stringify(u.value,null,4)}catch(t){return""}});return(t,l)=>{const c=j,a=v,f=z;return V(),N("div",A,[r(c,{"current-func":s(i)},null,8,["current-func"]),n("div",B,[n("div",E,[n("span",null,m(e("待格式化内容")),1)]),r(a,{modelValue:s(o),"onUpdate:modelValue":l[0]||(l[0]=h=>H(o)?o.value=h:null),type:"textarea",placeholder:e("请输入内容"),resize:"none"},null,8,["modelValue","placeholder"]),n("div",F,[n("span",null,m(e("格式化结果")),1),r(f,{msg:s(d)},null,8,["msg"])]),n("div",O,[r(s(S),{data:s(u),"show-length":"","show-line":"","show-line-number":"","show-icon":""},null,8,["data"])])])])}}};export{R as default};

import{u as g,_ as v}from"./DwAuV3q2.js";import{E as C}from"./AhIsmCD7.js";import{_ as N}from"./fjn7lpH7.js";import{r as j,k as m,c as H,b as r,f as o,a as t,t as _,i as x,u as z,o as V}from"./CdqmKw55.js";import{p as b}from"./DSSgMjVv.js";import{S}from"./3jcY8gB9.js";import"./Mgb_BLSe.js";import"./iEb7HSXw.js";import"./BfJqhShX.js";import"./Dd6UCYcX.js";const $={待格式化内容:"Content to be formatted",格式化结果:"Formatted result",请输入内容:"Please enter content",非法内容:"Illegal content"},w={待格式化内容:"待格式化内容",格式化结果:"格式化结果",请输入内容:"请输入内容",非法内容:"非法内容"},y={待格式化内容:"待格式化內容",格式化结果:"格式化結果",请输入内容:"請輸入內容",非法内容:"非法內容"},p={en_US:$,zh_Hans_CN:w,zh_Hant_HK:y},A={class:"p-jsonformat"},B={class:"jsonformat"},E={class:"label"},F={class:"label mt-20"},O={class:"output-result"},G={__name:"jsonformat",setup(U){const s=n=>{const c=z().$lang.value||"zh_Hans_CN",a=p[c]||p.zh_Hans_CN||{};return a[n]===void 0?n:a[n]},{currentFunc:i}=g(),e=j(""),u=m(()=>b(e.value,s("非法内容"))),d=m(()=>{try{return JSON.stringify(u.value,null,4)}catch(n){return""}});return(n,l)=>{const c=v,a=C,f=N;return V(),H("div",A,[r(c,{"current-func":o(i)},null,8,["current-func"]),t("div",B,[t("div",E,[t("span",null,_(s("待格式化内容")),1)]),r(a,{modelValue:o(e),"onUpdate:modelValue":l[0]||(l[0]=h=>x(e)?e.value=h:null),type:"textarea",placeholder:s("请输入内容"),resize:"none"},null,8,["modelValue","placeholder"]),t("div",F,[t("span",null,_(s("格式化结果")),1),r(f,{msg:o(d)},null,8,["msg"])]),t("div",O,[r(o(S),{data:o(u),"show-length":"","show-line":"","show-line-number":"","show-icon":""},null,8,["data"])])])])}}};export{G as default};

import{u as g,_ as v}from"./jRjCKTF6.js";import{E as C}from"./Bss34sMb.js";import{_ as N}from"./DZzwRMX-.js";import{r as j,J as m,c as H,b as r,f as o,a as t,t as p,i as x,u as z,o as V}from"./C8StUWGy.js";import{p as b}from"./CgaOJydi.js";import{S}from"./B25Nwzma.js";import"./CNI_GuDQ.js";import"./DNvO8caS.js";import"./C5IjCZLR.js";import"./CQ3Gzr2w.js";import"./JAUZZBS7.js";import"./gvHnYDgd.js";import"./l0sNRNKZ.js";import"./UDGGry3B.js";const $={待格式化内容:"Content to be formatted",格式化结果:"Formatted result",请输入内容:"Please enter content",非法内容:"Illegal content"},w={待格式化内容:"待格式化内容",格式化结果:"格式化结果",请输入内容:"请输入内容",非法内容:"非法内容"},y={待格式化内容:"待格式化內容",格式化结果:"格式化結果",请输入内容:"請輸入內容",非法内容:"非法內容"},_={en_US:$,zh_Hans_CN:w,zh_Hant_HK:y},A={class:"p-jsonformat"},B={class:"jsonformat"},E={class:"label"},F={class:"label mt-20"},J={class:"output-result"},X={__name:"jsonformat",setup(O){const s=n=>{const c=z().$lang.value||"zh_Hans_CN",a=_[c]||_.zh_Hans_CN||{};return a[n]===void 0?n:a[n]},{currentFunc:i}=g(),e=j(""),u=m(()=>b(e.value,s("非法内容"))),d=m(()=>{try{return JSON.stringify(u.value,null,4)}catch(n){return""}});return(n,l)=>{const c=v,a=C,f=N;return V(),H("div",A,[r(c,{"current-func":o(i)},null,8,["current-func"]),t("div",B,[t("div",E,[t("span",null,p(s("待格式化内容")),1)]),r(a,{modelValue:o(e),"onUpdate:modelValue":l[0]||(l[0]=h=>x(e)?e.value=h:null),type:"textarea",placeholder:s("请输入内容"),resize:"none"},null,8,["modelValue","placeholder"]),t("div",F,[t("span",null,p(s("格式化结果")),1),r(f,{msg:o(d)},null,8,["msg"])]),t("div",J,[r(o(S),{data:o(u),"show-length":"","show-line":"","show-line-number":"","show-icon":""},null,8,["data"])])])])}}};export{X as default};

import{u as g,_ as v}from"./BkomurJX.js";import{E as C}from"./CRoULCxn.js";import{_ as N}from"./DvfQB8Ed.js";import{r as j,J as m,c as H,b as r,f as o,a as t,t as p,i as x,u as z,o as V}from"./BqIzPuHs.js";import{p as b}from"./CaVTocOX.js";import{S}from"./Dbi8Ult6.js";import"./Bh483JU6.js";import"./B87X8Odx.js";import"./B3QkTwGb.js";import"./BFC23mpI.js";import"./JAUZZBS7.js";import"./BryZLUEu.js";import"./l0sNRNKZ.js";import"./COv-KNy0.js";const $={待格式化内容:"Content to be formatted",格式化结果:"Formatted result",请输入内容:"Please enter content",非法内容:"Illegal content"},w={待格式化内容:"待格式化内容",格式化结果:"格式化结果",请输入内容:"请输入内容",非法内容:"非法内容"},y={待格式化内容:"待格式化內容",格式化结果:"格式化結果",请输入内容:"請輸入內容",非法内容:"非法內容"},_={en_US:$,zh_Hans_CN:w,zh_Hant_HK:y},A={class:"p-jsonformat"},B={class:"jsonformat"},E={class:"label"},F={class:"label mt-20"},J={class:"output-result"},X={__name:"jsonformat",setup(O){const s=n=>{const c=z().$lang.value||"zh_Hans_CN",a=_[c]||_.zh_Hans_CN||{};return a[n]===void 0?n:a[n]},{currentFunc:i}=g(),e=j(""),u=m(()=>b(e.value,s("非法内容"))),d=m(()=>{try{return JSON.stringify(u.value,null,4)}catch(n){return""}});return(n,l)=>{const c=v,a=C,f=N;return V(),H("div",A,[r(c,{"current-func":o(i)},null,8,["current-func"]),t("div",B,[t("div",E,[t("span",null,p(s("待格式化内容")),1)]),r(a,{modelValue:o(e),"onUpdate:modelValue":l[0]||(l[0]=h=>x(e)?e.value=h:null),type:"textarea",placeholder:s("请输入内容"),resize:"none"},null,8,["modelValue","placeholder"]),t("div",F,[t("span",null,p(s("格式化结果")),1),r(f,{msg:o(d)},null,8,["msg"])]),t("div",J,[r(o(S),{data:o(u),"show-length":"","show-line":"","show-line-number":"","show-icon":""},null,8,["data"])])])])}}};export{X as default};

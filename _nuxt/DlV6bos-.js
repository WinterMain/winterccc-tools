import{u as g,_ as y}from"./CksdB5nZ.js";import{E as b}from"./TVo827VU.js";import{r as N,I as _,A as v,d as r,e,b as t,t as m,i as C,u as j,_ as x,a as H,p as z}from"./CGqMbvwJ.js";import{S as V}from"./DZJK9O2T.js";import"./BN-IElrq.js";import"./BfXNeC-b.js";import"./fVGb_Eos.js";const S={待格式化内容:"Content to be formatted",格式化结果:"Formatted result",请输入内容:"Please enter content",非法内容:"Illegal content"},$={待格式化内容:"待格式化内容",格式化结果:"格式化结果",请输入内容:"请输入内容",非法内容:"非法内容"},w={待格式化内容:"待格式化內容",格式化结果:"格式化結果",请输入内容:"請輸入內容",非法内容:"非法內容"},p={en_US:S,zh_Hans_CN:$,zh_Hant_HK:w},A={class:"p-jsonformat"},I={class:"jsonformat"},B={class:"label"},E={class:"label mt-20"},F={class:"output-result"},R={__name:"jsonformat",setup(O){const s=n=>{const u=j().$lang.value||"zh_Hans_CN",a=p[u]||p.zh_Hans_CN||{};return a[n]===void 0?n:a[n]},{currentFunc:i}=g(),o=N('[{"constant":false,"inputs":[{"name":"_fName","type":"string"},{"name":"_age","type":"uint256"},{"name":"_sex","type":"string"},{"name":"_marriage","type":"bool"}],"name":"setInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'),c=_(()=>z(o.value,s("非法内容"))),d=_(()=>{try{return JSON.stringify(c.value,null,4)}catch(n){return""}});return(n,l)=>{const u=y,a=b,f=x;return H(),v("div",A,[r(u,{"current-func":e(i)},null,8,["current-func"]),t("div",I,[t("div",B,[t("span",null,m(s("待格式化内容")),1)]),r(a,{modelValue:e(o),"onUpdate:modelValue":l[0]||(l[0]=h=>C(o)?o.value=h:null),type:"textarea",placeholder:s("请输入内容"),resize:"none"},null,8,["modelValue","placeholder"]),t("div",E,[t("span",null,m(s("格式化结果")),1),r(f,{msg:e(d)},null,8,["msg"])]),t("div",F,[r(e(V),{data:e(c),"show-length":"","show-line":"","show-line-number":"","show-icon":""},null,8,["data"])])])])}}};export{R as default};

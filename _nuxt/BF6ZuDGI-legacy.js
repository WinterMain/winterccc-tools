System.register(["./Cxwga9SU-legacy.js","./CMi9P1J6-legacy.js","./Buni21CU-legacy.js","./CVImP6D3-legacy.js","./KHCtYwAy-legacy.js","./eMDIkeUM-legacy.js","./gcgJK_4L-legacy.js"],(function(e,t){"use strict";var n,a,l,r,s,o,u,c,i,m,p,d,h,g,f,x;return{setters:[e=>{n=e.u,a=e._},e=>{l=e.E},e=>{r=e.r,s=e.n,o=e.j,u=e.b,c=e.d,i=e.a,m=e.t,p=e.i,d=e.u,h=e._,g=e.o,f=e.p},e=>{x=e.S},null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".p-jsonformat .jsonformat{padding:20px}.p-jsonformat .jsonformat .label{align-items:center;display:flex;font-size:14px;font-weight:600;line-height:22px;padding-bottom:8px}.p-jsonformat .jsonformat .label>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(20px*(1 - var(--tw-space-x-reverse)));margin-right:calc(20px*var(--tw-space-x-reverse))}.p-jsonformat .jsonformat .el-textarea .el-textarea__inner{height:300px;min-height:320px!important}@media (max-width:767px){.p-jsonformat .jsonformat .el-textarea .el-textarea__inner{height:200px;min-height:200px!important}}\n",document.head.appendChild(t);const j={en_US:{"待格式化内容":"Content to be formatted","格式化结果":"Formatted result","请输入内容":"Please enter content","非法内容":"Illegal content"},zh_Hans_CN:{"待格式化内容":"待格式化内容","格式化结果":"格式化结果","请输入内容":"请输入内容","非法内容":"非法内容"},zh_Hant_HK:{"待格式化内容":"待格式化內容","格式化结果":"格式化結果","请输入内容":"請輸入內容","非法内容":"非法內容"}},v={class:"p-jsonformat"},_={class:"jsonformat"},y={class:"label"},w={class:"label mt-20"},b={class:"output-result"};e("default",{__name:"jsonformat",setup(e){const t=e=>{const t=d().$lang.value||"zh_Hans_CN",n=j[t]||j.zh_Hans_CN||{};return void 0===n[e]?e:n[e]},{currentFunc:z}=n(),C=r(""),H=s((()=>f(C.value,t("非法内容")))),N=s((()=>{try{return JSON.stringify(H.value,null,4)}catch(e){return""}}));return(e,n)=>{const r=a,s=l,d=h;return g(),o("div",v,[u(r,{"current-func":c(z)},null,8,["current-func"]),i("div",_,[i("div",y,[i("span",null,m(t("待格式化内容")),1)]),u(s,{modelValue:c(C),"onUpdate:modelValue":n[0]||(n[0]=e=>p(C)?C.value=e:null),type:"textarea",placeholder:t("请输入内容"),resize:"none"},null,8,["modelValue","placeholder"]),i("div",w,[i("span",null,m(t("格式化结果")),1),u(d,{msg:c(N)},null,8,["msg"])]),i("div",b,[u(c(x),{data:c(H),"show-length":"","show-line":"","show-line-number":"","show-icon":""},null,8,["data"])])])])}}})}}}));

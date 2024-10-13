System.register(["./D477K2jy-legacy.js","./Bp7GGT3w-legacy.js","./Cl81qLaE-legacy.js","./DWpycQU6-legacy.js","./DlNiSjeR-legacy.js","./DGkwy6MS-legacy.js","./DOkCY8PU-legacy.js","./Dmnt7uQJ-legacy.js","./CUdyZ4a8-legacy.js","./CG-_B779-legacy.js","./DgXjq-ZU-legacy.js","./D_kZP7EF-legacy.js","./3aoUq6nG-legacy.js","./C1w035U2-legacy.js","./Cz9gYjXO-legacy.js","./D29XOQL7-legacy.js","./CkIDLQZx-legacy.js","./BsteJtbu-legacy.js","./QMdpx9gx-legacy.js"],(function(e,a){"use strict";var l,t,n,i,r,u,s,o,c,p,h,d,m,g,f,v,b,y,x,_,w,H,k,S,V,A,j,P,D,K;return{setters:[e=>{l=e.u,t=e._},e=>{n=e.E},e=>{i=e.E},e=>{r=e.a,u=e.b},e=>{s=e.r,o=e.af,c=e.J,p=e.K,h=e.o,d=e.c,m=e.a,g=e.t,f=e.b,v=e.f,b=e.i,y=e.k,x=e.w,_=e.d,w=e.F,H=e.j,k=e.e,S=e.bn,V=e.u,A=e.E,j=e.ae},null,null,e=>{P=e.E},e=>{D=e.b},e=>{K=e.C},null,null,null,null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent=".c-hash{padding:20px}.c-hash .input-tip{color:#5e6773;margin-top:20px}.c-hash .label{font-size:14px;font-weight:600;line-height:22px;padding-bottom:8px}.c-hash .result-text{background-image:none;border-radius:4px;border-width:1px;box-sizing:border-box;color:#606266;font-size:inherit;line-height:1.5;min-height:170px;padding:15px;transition:border-color .2s cubic-bezier(.645,.045,.355,1);width:100%;word-break:break-all;--tw-bg-opacity:1;background-color:rgb(248 250 253/var(--tw-bg-opacity));border-color:#eff1f5}.c-hash .input-area{padding-top:12px}.c-hash .input-area,.c-hash .input-area .input-subitem-key{align-items:center;display:flex}.c-hash .input-area .input-select{margin-right:20px;width:120px}.c-hash .input-area .btn-confirm{width:120px}.c-hash .input-area .input-label{color:#3d424a;margin-right:8px}.c-hash .input-area .el-select__prefix{border-color:#eff1f5;border-right-width:1px;padding-right:12px}.c-hash .input-area .el-input{height:32px;margin-right:20px}.c-hash .input-area .el-input .el-input-group__prepend{border-bottom-left-radius:8px;border-top-left-radius:8px;box-shadow:none}.c-hash .input-area .input-psw{width:280px}.c-hash .input-area .input-pbkdf{width:250px}.c-hash .input-area .input-iteration{width:200px}.c-hash .input-area .el-button{margin-left:20px}@media (max-width:767px){.c-hash .input-area{display:block}.c-hash .input-area .input-subitem-key .el-input{flex:1 1 0%;margin-right:0;width:auto}.c-hash .input-area .btn-confirm{margin-left:0;margin-top:20px;width:100%}.c-hash .input-area .input-select{margin-right:0;width:100%}.c-hash .input-area .input-iteration,.c-hash .input-area .input-pbkdf{margin-right:0;margin-top:8px;width:100%}}.p-hash{padding-bottom:60px}\n",document.head.appendChild(a);const B={format(e,a=8){if(/\./.test(e)){let l=/\.(\d*)?/.exec(e);return l&&l.length&&(l=l[1]),l&&l.length>=a?e.split(".")[0]+"."+l.substring(0,a):e}return e},check(e){const{val:a,oldVal:l,maxVal:t,callback:n,decimals:i,minVal:r}=e;try{if(void 0!==t&&a.cmp(t)>0)return n(t);if(void 0!==r&&a.cmp(r)<0)return n(r);if(a!==l&&a){const e=a.plus("0");if("NaN"===e)return n(l);let t=i;(void 0===i||isNaN(parseInt(i)))&&(t=8);const r=this.format(e,t);n(r!==e?r:this.format(a,t))}}catch{n(l)}}},F={en_US:{"PBKDF2为新_a0f2":"PBKDF2 uses SHA256 as the internal hash algorithm of the new version. Some old versions of PBKDF2 implement the internal hash algorithm of SHA1. The hash results calculated by the old version will be inconsistent with the new version.","出错了":"Something went wrong","刷新":"Refresh","取消":"Cancel","确定":"Confirm","秘钥：":"Secret key:","算法初始化错误，_f61b":"Algorithm initialization error, please refresh and try again","结果":"Result","计算":"Calculate","请输入":"Please input","请输入以下参数，_a896":"Please enter the following parameters and click Confirm to hash","请输入内容":"Please enter content","请选择":"Please select","输入":"Input"},zh_Hans_CN:{"PBKDF2为新_a0f2":"PBKDF2为新版内部哈希算法采用的是SHA256，有一些旧版的PBKDF2实现其内部哈希算法是SHA1，旧版计算的哈希结果会与新版的不一致","出错了":"出错了","刷新":"刷新","取消":"取消","确定":"确定","秘钥：":"秘钥：","算法初始化错误，_f61b":"算法初始化错误，请刷新重试","结果":"结果","计算":"计算","请输入":"请输入","请输入以下参数，_a896":"请输入以下参数，点击确定进行哈希","请输入内容":"请输入内容","请选择":"请选择","输入":"输入"},zh_Hant_HK:{"PBKDF2为新_a0f2":"PBKDF2為新版內部哈希算法采用的是SHA256，有一些舊版的PBKDF2實現其內部哈希算法是SHA1，舊版計算的哈希結果會與新版的不一致","出错了":"出錯了","刷新":"刷新","取消":"取消","确定":"確定","秘钥：":"秘鑰：","算法初始化错误，_f61b":"算法初始化錯誤，請刷新重試","结果":"結果","计算":"計算","请输入":"請輸入","请输入以下参数，_a896":"請輸入以下參數，點擊確定進行哈希","请输入内容":"請輸入內容","请选择":"請選擇","输入":"輸入"}},C={class:"c-hash"},z={class:"label"},E={key:0,class:"input-tip"},I={key:1,class:"input-area"},N={class:"input-subitem-key"},U={class:"input-label"},M={key:2,class:"input-area"},R={key:3,class:"pt-20 flex flex-wrap items-center space-x-20"},T={class:"label mt-20"},q={class:"result-text"},G={key:4,class:"mt-12 text-quaternary text-12"},J={__name:"Hash",props:{algo:{type:String,default:""}},setup(e){const a=e=>{const a=V().$lang.value||"zh_Hans_CN",l=F[a]||F.zh_Hans_CN||{};return void 0===l[e]?e:l[e]},l=e,t=["HmacMD5","HmacSHA1","HmacSHA224","HmacSHA256","HmacSHA384","HmacSHA512","HmacRIPEMD160","PBKDF2"],j=s(""),J=o(["MD5","SHA1","SHA224","SHA256","SHA384","SHA512",{title:"SHA3",algo:"SHA3",outs:[512,384,256,224]},"RIPEMD160"].concat(t)),L=s(256),$=s(""),O=s(128),Q=s(""),W=s("1"),X=s(""),Y=s([128,256,512]);let Z="";const ee=c((()=>{const e=D(l.algo);return J.find((a=>"string"==typeof a?D(a)===e:D(a.algo)===e))||""})),ae=c((()=>ee.value&&(ee.value.algo||ee.value))),le=c((()=>"PBKDF2"===ae.value)),te=c((()=>t.includes(ae.value)&&!le.value)),ne=e=>{Z=e||"",X.value=Z.toString()},ie=e=>{try{"SHA3"===ae.value?ne(K[ae.value](j.value,{outputLength:L.value})):"PBKDF2"===ae.value?ne(K[ae.value](j.value,Q.value,{keySize:O.value/32,iterations:parseInt(W.value)})):t.includes(ae.value)?ne(K[ae.value](j.value,$.value)):ne(K[ae.value](j.value))}catch(l){l.message&&l.message.includes("Maximum call stack size exceeded")&&P.confirm(a("算法初始化错误，_f61b"),a("出错了"),{confirmButtonText:a("刷新"),cancelButtonText:a("取消"),type:"warning"}).then((()=>{location.reload()})).catch((()=>{location.reload()}))}},re=()=>{ne(""),"PBKDF2"===ae.value||t.includes(ae.value)||ie()};return p(W,((e,a)=>{B.check({val:e,oldVal:oldVal,minVal:"1",decimals:0,callback:e=>{W.value=e}})})),(e,l)=>{const t=n,s=i,o=r,c=u,p=A;return h(),d("div",C,[m("p",z,g(a("输入")),1),f(t,{modelValue:v(j),"onUpdate:modelValue":l[0]||(l[0]=e=>b(j)?j.value=e:null),type:"textarea",placeholder:a("请输入内容"),rows:6,resize:"none",onInput:l[1]||(l[1]=e=>re())},null,8,["modelValue","placeholder"]),v(te)||v(le)?(h(),d("p",E,g(a("请输入以下参数，_a896")),1)):y("",!0),v(te)?(h(),d("div",I,[m("div",N,[m("span",U,g(a("秘钥：")),1),f(t,{modelValue:v($),"onUpdate:modelValue":l[2]||(l[2]=e=>b($)?$.value=e:null),class:"input-psw"},null,8,["modelValue"])]),f(s,{type:"primary",class:"btn-confirm",plain:"",onClick:ie},{default:x((()=>[_(g(a("确定")),1)])),_:1})])):v(le)?(h(),d("div",M,[f(c,{modelValue:v(O),"onUpdate:modelValue":l[3]||(l[3]=e=>b(O)?O.value=e:null),placeholder:a("请选择"),class:"input-select",onChange:l[4]||(l[4]=e=>re())},{prefix:x((()=>l[10]||(l[10]=[_("Key")]))),default:x((()=>[(h(!0),d(w,null,H(v(Y),(e=>(h(),k(o,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"]),f(t,{modelValue:v(Q),"onUpdate:modelValue":l[5]||(l[5]=e=>b(Q)?Q.value=e:null),placeholder:a("请输入"),class:"input-pbkdf"},{prepend:x((()=>l[11]||(l[11]=[_("Salt")]))),_:1},8,["modelValue","placeholder"]),f(t,{modelValue:v(W),"onUpdate:modelValue":l[6]||(l[6]=e=>b(W)?W.value=e:null),placeholder:a("请输入"),class:"input-iteration"},{prepend:x((()=>l[12]||(l[12]=[_("Iterations")]))),_:1},8,["modelValue","placeholder"]),f(s,{type:"primary",class:"btn-confirm",plain:"",onClick:ie},{default:x((()=>[_(g(a("确定")),1)])),_:1})])):(h(),d("div",R,[v(ee).title?(h(),k(c,{key:0,modelValue:v(L),"onUpdate:modelValue":l[7]||(l[7]=e=>b(L)?L.value=e:null),placeholder:a("请选择"),class:"w-120",onChange:l[8]||(l[8]=e=>re())},{default:x((()=>[(h(!0),d(w,null,H(v(ee).outs,(e=>(h(),k(o,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])):y("",!0),f(s,{class:"w-120",type:"primary",onClick:l[9]||(l[9]=e=>re())},{default:x((()=>[_(g(a("计算")),1)])),_:1})])),m("p",T,g(a("结果")),1),m("div",q,g(v(X)),1),v(le)?(h(),d("div",G,[f(p,null,{default:x((()=>[f(v(S))])),_:1}),_(" "+g(a("PBKDF2为新_a0f2")),1)])):y("",!0)])}}},L={class:"p-hash"};e("default",{__name:"hash",setup(e){const a=j(),{currentFunc:n}=l();return(e,l)=>{const i=t,r=J;return h(),d("div",L,[f(i,{"current-func":v(n)},null,8,["current-func"]),f(r,{algo:v(a).name},null,8,["algo"])])}}})}}}));

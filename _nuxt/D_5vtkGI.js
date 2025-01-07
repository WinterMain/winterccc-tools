import{u as X,_ as j}from"./Df0PuaTU.js";import{E as G}from"./BxTCji6M.js";import{E as Q}from"./CX2kbXyP.js";import{E as Y,a as Z}from"./BaBHMHQp.js";import{r as m,X as ee,I as C,ca as K,s as te,a as s,A as p,b as y,t as i,d as o,e as a,i as h,a0 as E,w as c,f as _,a9 as L,a8 as O,c as z,ab as le,u as ae,E as ne,aO as se}from"./dvdgqlpy.js";import"./No6cgSZ2.js";/* empty css        */import{a as oe}from"./DX0uqCfA.js";import{C as P}from"./kxWCAlEE.js";import{E as re}from"./Dy0trXLK.js";import"./DDBMNXPq.js";import"./B7T--ujF.js";import"./BdjQUN5C.js";import"./D9VwdAKt.js";import"./DL4WzQrQ.js";import"./CNwQkSGO.js";import"./BPh3dUyJ.js";const ue={PBKDF2为新_a0f2:"PBKDF2 uses SHA256 as the internal hash algorithm of the new version. Some old versions of PBKDF2 implement the internal hash algorithm of SHA1. The hash results calculated by the old version will be inconsistent with the new version.",出错了:"Something went wrong",刷新:"Refresh",取消:"Cancel",确定:"Confirm","秘钥：":"Secret key:","算法初始化错误，_f61b":"Algorithm initialization error, please refresh and try again",结果:"Result",计算:"Calculate",请输入:"Please input","请输入以下参数，_a896":"Please enter the following parameters and click Confirm to hash",请输入内容:"Please enter content",请选择:"Please select",输入:"Input"},ie={PBKDF2为新_a0f2:"PBKDF2为新版内部哈希算法采用的是SHA256，有一些旧版的PBKDF2实现其内部哈希算法是SHA1，旧版计算的哈希结果会与新版的不一致",出错了:"出错了",刷新:"刷新",取消:"取消",确定:"确定","秘钥：":"秘钥：","算法初始化错误，_f61b":"算法初始化错误，请刷新重试",结果:"结果",计算:"计算",请输入:"请输入","请输入以下参数，_a896":"请输入以下参数，点击确定进行哈希",请输入内容:"请输入内容",请选择:"请选择",输入:"输入"},ce={PBKDF2为新_a0f2:"PBKDF2為新版內部哈希算法采用的是SHA256，有一些舊版的PBKDF2實現其內部哈希算法是SHA1，舊版計算的哈希結果會與新版的不一致",出错了:"出錯了",刷新:"刷新",取消:"取消",确定:"確定","秘钥：":"秘鑰：","算法初始化错误，_f61b":"算法初始化錯誤，請刷新重試",结果:"結果",计算:"計算",请输入:"請輸入","请输入以下参数，_a896":"請輸入以下參數，點擊確定進行哈希",请输入内容:"請輸入內容",请选择:"請選擇",输入:"輸入"},q={en_US:ue,zh_Hans_CN:ie,zh_Hant_HK:ce},pe={class:"c-hash"},de={class:"label"},me={key:0,class:"input-tip"},_e={key:1,class:"input-area"},fe={class:"input-subitem-key"},ve={class:"input-label"},he={key:2,class:"input-area"},ge={key:3,class:"pt-20 flex flex-wrap items-center space-x-20"},He={class:"label mt-20"},Se={class:"result-text"},ye={key:4,class:"mt-12 text-quaternary text-12"},Ae={__name:"Hash",props:{algo:{type:String,default:""}},setup(I){const l=n=>{const d=ae().$lang.value||"zh_Hans_CN",v=q[d]||q.zh_Hans_CN||{};return v[n]===void 0?n:v[n]},w=I,$=["MD5","SHA1","SHA224","SHA256","SHA384","SHA512",{title:"SHA3",algo:"SHA3",outs:[512,384,256,224]},"RIPEMD160"],g=["HmacMD5","HmacSHA1","HmacSHA224","HmacSHA256","HmacSHA384","HmacSHA512","HmacRIPEMD160","PBKDF2"],u=m(""),D=ee($.concat(g)),A=m(256),V=m(""),b=m(128),k=m(""),f=m("1"),N=m(""),J=m([128,256,512]);let U="";const H=C(()=>{const n=K(w.algo);return D.find(e=>typeof e=="string"?K(e)===n:K(e.algo)===n)||""}),r=C(()=>H.value&&(H.value.algo||H.value)),x=C(()=>r.value==="PBKDF2"),M=C(()=>g.includes(r.value)&&!x.value),S=n=>{U=n||"",N.value=U.toString()},F=n=>{try{r.value==="SHA3"?S(P[r.value](u.value,{outputLength:A.value})):r.value==="PBKDF2"?S(P[r.value](u.value,k.value,{keySize:b.value/32,iterations:parseInt(f.value)})):g.includes(r.value)?S(P[r.value](u.value,V.value)):S(P[r.value](u.value))}catch(e){e.message&&e.message.includes("Maximum call stack size exceeded")&&re.confirm(l("算法初始化错误，_f61b"),l("出错了"),{confirmButtonText:l("刷新"),cancelButtonText:l("取消"),type:"warning"}).then(()=>{location.reload()}).catch(()=>{location.reload()})}},B=()=>{S(""),r.value!=="PBKDF2"&&!g.includes(r.value)&&F()};return te(f,(n,e)=>{oe.check({val:n,oldVal,minVal:"1",decimals:0,callback:d=>{f.value=d}})}),(n,e)=>{const d=G,v=Q,R=Y,T=Z,W=ne;return s(),p("div",pe,[y("p",de,i(l("输入")),1),o(d,{modelValue:a(u),"onUpdate:modelValue":e[0]||(e[0]=t=>h(u)?u.value=t:null),type:"textarea",placeholder:l("请输入内容"),rows:6,resize:"none",onInput:e[1]||(e[1]=t=>B())},null,8,["modelValue","placeholder"]),a(M)||a(x)?(s(),p("p",me,i(l("请输入以下参数，_a896")),1)):E("",!0),a(M)?(s(),p("div",_e,[y("div",fe,[y("span",ve,i(l("秘钥：")),1),o(d,{modelValue:a(V),"onUpdate:modelValue":e[2]||(e[2]=t=>h(V)?V.value=t:null),class:"input-psw"},null,8,["modelValue"])]),o(v,{type:"primary",class:"btn-confirm",plain:"",onClick:F},{default:c(()=>[_(i(l("确定")),1)]),_:1})])):a(x)?(s(),p("div",he,[o(T,{modelValue:a(b),"onUpdate:modelValue":e[3]||(e[3]=t=>h(b)?b.value=t:null),placeholder:l("请选择"),class:"input-select",onChange:e[4]||(e[4]=t=>B())},{prefix:c(()=>e[10]||(e[10]=[_("Key")])),default:c(()=>[(s(!0),p(L,null,O(a(J),t=>(s(),z(R,{key:t,label:t,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),o(d,{modelValue:a(k),"onUpdate:modelValue":e[5]||(e[5]=t=>h(k)?k.value=t:null),placeholder:l("请输入"),class:"input-pbkdf"},{prepend:c(()=>e[11]||(e[11]=[_("Salt")])),_:1},8,["modelValue","placeholder"]),o(d,{modelValue:a(f),"onUpdate:modelValue":e[6]||(e[6]=t=>h(f)?f.value=t:null),placeholder:l("请输入"),class:"input-iteration"},{prepend:c(()=>e[12]||(e[12]=[_("Iterations")])),_:1},8,["modelValue","placeholder"]),o(v,{type:"primary",class:"btn-confirm",plain:"",onClick:F},{default:c(()=>[_(i(l("确定")),1)]),_:1})])):(s(),p("div",ge,[a(H).title?(s(),z(T,{key:0,modelValue:a(A),"onUpdate:modelValue":e[7]||(e[7]=t=>h(A)?A.value=t:null),placeholder:l("请选择"),class:"w-120",onChange:e[8]||(e[8]=t=>B())},{default:c(()=>[(s(!0),p(L,null,O(a(H).outs,t=>(s(),z(R,{key:t,label:t,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])):E("",!0),o(v,{class:"w-120",type:"primary",onClick:e[9]||(e[9]=t=>B())},{default:c(()=>[_(i(l("计算")),1)]),_:1})])),y("p",He,i(l("结果")),1),y("div",Se,i(a(N)),1),a(x)?(s(),p("div",ye,[o(W,null,{default:c(()=>[o(a(le))]),_:1}),_(" "+i(l("PBKDF2为新_a0f2")),1)])):E("",!0)])}}},Ve={class:"p-hash"},Re={__name:"hash",setup(I){const l=se(),{currentFunc:w}=X();return($,g)=>{const u=j,D=Ae;return s(),p("div",Ve,[o(u,{"current-func":a(w)},null,8,["current-func"]),o(D,{algo:a(l).name},null,8,["algo"])])}}};export{Re as default};

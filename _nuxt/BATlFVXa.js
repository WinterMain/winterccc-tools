import{u as W,_ as G}from"./BMrJj4pl.js";import{E as Q}from"./Ok1Vbbmn.js";import{E as X}from"./BNPlmGXy.js";import{a as Y,b as Z}from"./CGUpPoAz.js";import{r as g,af as ee,J as F,K as te,o as u,c as _,a as C,t as m,b as i,f as a,i as A,k as N,w as f,d as S,F as L,j as J,e as z,bn as le,u as ae,E as ne,ae as se}from"./Dupm0P8Z.js";import"./CNRFqGNT.js";import"./DHbk17xm.js";import{E as oe}from"./DdBFrG9A.js";import{b as I}from"./D2Ywwrxg.js";import{C as K}from"./Dc6vFwTv.js";import"./ymzRHqqe.js";import"./CmzOlyzv.js";import"./DD3rUsbn.js";import"./BcJN59Lq.js";import"./JAUZZBS7.js";import"./Cb11IP7D.js";import"./ZYxwzyaP.js";import"./BPh3dUyJ.js";import"./CZsOgIJ5.js";const re={format(p,t=8){if(/\./.test(p)){let n=/\.(\d*)?/.exec(p);return n&&n.length&&(n=n[1]),n&&n.length>=t?p.split(".")[0]+"."+n.substring(0,t):p}else return p},check(p){const{val:t,oldVal:n,maxVal:V,callback:o,decimals:s,minVal:H}=p;try{if(typeof V<"u"&&t.cmp(V)>0)return o(V);if(typeof H<"u"&&t.cmp(H)<0)return o(H);if(t!==n&&t){const d=t.plus("0");if(d==="NaN")return o(n);let h=s;(typeof s>"u"||isNaN(parseInt(s)))&&(h=8);const y=this.format(d,h);o(y!==d?y:this.format(t,h))}}catch(d){o(n)}}},ue={PBKDF2为新_a0f2:"PBKDF2 uses SHA256 as the internal hash algorithm of the new version. Some old versions of PBKDF2 implement the internal hash algorithm of SHA1. The hash results calculated by the old version will be inconsistent with the new version.",出错了:"Something went wrong",刷新:"Refresh",取消:"Cancel",确定:"Confirm","秘钥：":"Secret key:","算法初始化错误，_f61b":"Algorithm initialization error, please refresh and try again",结果:"Result",计算:"Calculate",请输入:"Please input","请输入以下参数，_a896":"Please enter the following parameters and click Confirm to hash",请输入内容:"Please enter content",请选择:"Please select",输入:"Input"},ie={PBKDF2为新_a0f2:"PBKDF2为新版内部哈希算法采用的是SHA256，有一些旧版的PBKDF2实现其内部哈希算法是SHA1，旧版计算的哈希结果会与新版的不一致",出错了:"出错了",刷新:"刷新",取消:"取消",确定:"确定","秘钥：":"秘钥：","算法初始化错误，_f61b":"算法初始化错误，请刷新重试",结果:"结果",计算:"计算",请输入:"请输入","请输入以下参数，_a896":"请输入以下参数，点击确定进行哈希",请输入内容:"请输入内容",请选择:"请选择",输入:"输入"},ce={PBKDF2为新_a0f2:"PBKDF2為新版內部哈希算法采用的是SHA256，有一些舊版的PBKDF2實現其內部哈希算法是SHA1，舊版計算的哈希結果會與新版的不一致",出错了:"出錯了",刷新:"刷新",取消:"取消",确定:"確定","秘钥：":"秘鑰：","算法初始化错误，_f61b":"算法初始化錯誤，請刷新重試",结果:"結果",计算:"計算",请输入:"請輸入","请输入以下参数，_a896":"請輸入以下參數，點擊確定進行哈希",请输入内容:"請輸入內容",请选择:"請選擇",输入:"輸入"},O={en_US:ue,zh_Hans_CN:ie,zh_Hant_HK:ce},pe={class:"c-hash"},de={class:"label"},me={key:0,class:"input-tip"},fe={key:1,class:"input-area"},_e={class:"input-subitem-key"},he={class:"input-label"},ve={key:2,class:"input-area"},ge={key:3,class:"pt-20 flex flex-wrap items-center space-x-20"},He={class:"label mt-20"},ye={class:"result-text"},Se={key:4,class:"mt-12 text-quaternary text-12"},Ve={__name:"Hash",props:{algo:{type:String,default:""}},setup(p){const t=r=>{const v=ae().$lang.value||"zh_Hans_CN",k=O[v]||O.zh_Hans_CN||{};return k[r]===void 0?r:k[r]},n=p,V=["MD5","SHA1","SHA224","SHA256","SHA384","SHA512",{title:"SHA3",algo:"SHA3",outs:[512,384,256,224]},"RIPEMD160"],o=["HmacMD5","HmacSHA1","HmacSHA224","HmacSHA256","HmacSHA384","HmacSHA512","HmacRIPEMD160","PBKDF2"],s=g(""),H=ee(V.concat(o)),d=g(256),h=g(""),y=g(128),w=g(""),b=g("1"),$=g(""),j=g([128,256,512]);let U="";const x=F(()=>{const r=I(n.algo);return H.find(e=>typeof e=="string"?I(e)===r:I(e.algo)===r)||""}),c=F(()=>x.value&&(x.value.algo||x.value)),P=F(()=>c.value==="PBKDF2"),M=F(()=>o.includes(c.value)&&!P.value),B=r=>{U=r||"",$.value=U.toString()},E=r=>{try{c.value==="SHA3"?B(K[c.value](s.value,{outputLength:d.value})):c.value==="PBKDF2"?B(K[c.value](s.value,w.value,{keySize:y.value/32,iterations:parseInt(b.value)})):o.includes(c.value)?B(K[c.value](s.value,h.value)):B(K[c.value](s.value))}catch(e){e.message&&e.message.includes("Maximum call stack size exceeded")&&oe.confirm(t("算法初始化错误，_f61b"),t("出错了"),{confirmButtonText:t("刷新"),cancelButtonText:t("取消"),type:"warning"}).then(()=>{location.reload()}).catch(()=>{location.reload()})}},D=()=>{B(""),c.value!=="PBKDF2"&&!o.includes(c.value)&&E()};return te(b,(r,e)=>{re.check({val:r,oldVal,minVal:"1",decimals:0,callback:v=>{b.value=v}})}),(r,e)=>{const v=Q,k=X,R=Y,T=Z,q=ne;return u(),_("div",pe,[C("p",de,m(t("输入")),1),i(v,{modelValue:a(s),"onUpdate:modelValue":e[0]||(e[0]=l=>A(s)?s.value=l:null),type:"textarea",placeholder:t("请输入内容"),rows:6,resize:"none",onInput:e[1]||(e[1]=l=>D())},null,8,["modelValue","placeholder"]),a(M)||a(P)?(u(),_("p",me,m(t("请输入以下参数，_a896")),1)):N("",!0),a(M)?(u(),_("div",fe,[C("div",_e,[C("span",he,m(t("秘钥：")),1),i(v,{modelValue:a(h),"onUpdate:modelValue":e[2]||(e[2]=l=>A(h)?h.value=l:null),class:"input-psw"},null,8,["modelValue"])]),i(k,{type:"primary",class:"btn-confirm",plain:"",onClick:E},{default:f(()=>[S(m(t("确定")),1)]),_:1})])):a(P)?(u(),_("div",ve,[i(T,{modelValue:a(y),"onUpdate:modelValue":e[3]||(e[3]=l=>A(y)?y.value=l:null),placeholder:t("请选择"),class:"input-select",onChange:e[4]||(e[4]=l=>D())},{prefix:f(()=>e[10]||(e[10]=[S("Key")])),default:f(()=>[(u(!0),_(L,null,J(a(j),l=>(u(),z(R,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),i(v,{modelValue:a(w),"onUpdate:modelValue":e[5]||(e[5]=l=>A(w)?w.value=l:null),placeholder:t("请输入"),class:"input-pbkdf"},{prepend:f(()=>e[11]||(e[11]=[S("Salt")])),_:1},8,["modelValue","placeholder"]),i(v,{modelValue:a(b),"onUpdate:modelValue":e[6]||(e[6]=l=>A(b)?b.value=l:null),placeholder:t("请输入"),class:"input-iteration"},{prepend:f(()=>e[12]||(e[12]=[S("Iterations")])),_:1},8,["modelValue","placeholder"]),i(k,{type:"primary",class:"btn-confirm",plain:"",onClick:E},{default:f(()=>[S(m(t("确定")),1)]),_:1})])):(u(),_("div",ge,[a(x).title?(u(),z(T,{key:0,modelValue:a(d),"onUpdate:modelValue":e[7]||(e[7]=l=>A(d)?d.value=l:null),placeholder:t("请选择"),class:"w-120",onChange:e[8]||(e[8]=l=>D())},{default:f(()=>[(u(!0),_(L,null,J(a(x).outs,l=>(u(),z(R,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])):N("",!0),i(k,{class:"w-120",type:"primary",onClick:e[9]||(e[9]=l=>D())},{default:f(()=>[S(m(t("计算")),1)]),_:1})])),C("p",He,m(t("结果")),1),C("div",ye,m(a($)),1),a(P)?(u(),_("div",Se,[i(q,null,{default:f(()=>[i(a(le))]),_:1}),S(" "+m(t("PBKDF2为新_a0f2")),1)])):N("",!0)])}}},be={class:"p-hash"},Le={__name:"hash",setup(p){const t=se(),{currentFunc:n}=W();return(V,o)=>{const s=G,H=Ve;return u(),_("div",be,[i(s,{"current-func":a(n)},null,8,["current-func"]),i(H,{algo:a(t).name},null,8,["algo"])])}}};export{Le as default};

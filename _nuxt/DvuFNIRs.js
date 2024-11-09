import{u as Y,_ as ee}from"./BCdSUzyH.js";import{E as le}from"./ChRhelWV.js";import{E as te,a as ae}from"./DoayHaSr.js";import{E as se}from"./T00GZsZr.js";import{E as oe}from"./DUjgctp3.js";import{u as K,r as m,$ as A,L as N,c8 as U,a as d,D as C,b as c,t as f,d as n,e as a,i as v,ac as I,w as V,ab as L,c as z,a3 as J,f as B,N as ne,O as ue,E as re,aR as pe}from"./B55AcAOi.js";import"./BTToniuf.js";import{C as s}from"./Djo1i7Am.js";import"./BP0rVQK5.js";import"./T5xS_YPz.js";import"./BsfCND4p.js";import"./Ci8gAwtx.js";import"./IjHKuM4t.js";import"./Cgkro4bB.js";import"./BPh3dUyJ.js";const ce={加密:"Encrypt",密文:"Cipher text",密码:"Password",明文:"Plain text",自定义IV:"Custom IV",解密:"Decrypt",计算完成:"Calculation completed",请输入内容:"Please enter content",请选择:"Please select"},de={加密:"加密",密文:"密文",密码:"密码",明文:"明文",自定义IV:"自定义IV",解密:"解密",计算完成:"计算完成",请输入内容:"请输入内容",请选择:"请选择"},ie={加密:"加密",密文:"密文",密码:"密碼",明文:"明文",自定义IV:"自定義IV",解密:"解密",计算完成:"計算完成",请输入内容:"請輸入內容",请选择:"請選擇"},W={en_US:ce,zh_Hans_CN:de,zh_Hant_HK:ie},me={class:"c-encrypt"},ve={class:"flex-1"},_e={class:"label"},fe={class:"op-area"},Ve={class:"sub-label"},Ce={class:"flex-1 xs:mt-20"},ye={class:"label"},be={__name:"Encrypt",props:{algo:{type:String,default:""}},setup(H){const o=l=>{const _=K().$lang.value||"zh_Hans_CN",x=W[_]||W.zh_Hans_CN||{};return x[l]===void 0?l:x[l]},S=H,D=K(),r=m(""),p=m(""),h=A(["AES","DES","TripleDES","Rabbit","RC4","RC4Drop"]),y=m("CBC"),X=A(["CBC","CFB","CTR","OFB","ECB"]),b=m("Pkcs7"),Z=A(["Pkcs7","Iso97971","AnsiX923","Iso10126","ZeroPadding","NoPadding"]),u=m(""),g=m(192),E=m(!1),R=m("");let P="";const k=N(()=>{const l=U(S.algo);return h.find(e=>typeof e=="string"?U(e)===l:U(e.algo)===l)||""}),i=N(()=>k.value&&(k.value.algo||k.value)),w=N(()=>["AES","DES","TripleDES"].includes(i.value)),$=l=>{P=l||"",p.value=P.toString()},F=l=>{try{l&&l(),D.$message.success(o("计算完成","计算完成"))}catch(e){D.$message.error(e.message)}},T=l=>(E.value&&(l=l||{},l.iv=s.enc.Hex.parse(R.value)),l),j=()=>{$(),F(()=>{let l;w.value?l=s.AES.encrypt(r.value,u.value,T({mode:s.mode[y.value],padding:s.pad[b.value]})):i.value==="Rabbit"?l=s.Rabbit.encrypt(r.value,u.value,T()):i.value==="RC4"?l=s.RC4.encrypt(r.value,u.value):i.value==="RC4Drop"&&(l=s.RC4Drop.encrypt(r.value,u.value,{drop:parseInt(g.value)})),$(l)})},q=()=>{r.value="",F(()=>{let l;w.value?l=s.AES.decrypt(p.value,u.value,{mode:s.mode[y.value],padding:s.pad[b.value]}):i.value==="Rabbit"?l=s.Rabbit.decrypt(p.value,u.value):i.value==="RC4"?l=s.RC4.decrypt(p.value,u.value):i.value==="RC4Drop"&&(l=s.RC4Drop.decrypt(p.value,u.value,{drop:parseInt(g.value)})),r.value=l.toString(s.enc.Utf8)})};return(l,e)=>{const _=le,x=te,M=ae,G=se,O=oe,Q=re;return d(),C("div",me,[c("div",ve,[c("p",_e,f(o("明文")),1),n(_,{modelValue:a(r),"onUpdate:modelValue":e[0]||(e[0]=t=>v(r)?r.value=t:null),type:"textarea",placeholder:o("请输入内容"),resize:"none"},null,8,["modelValue","placeholder"])]),c("div",fe,[a(w)?(d(),C(I,{key:0},[e[8]||(e[8]=c("div",{class:"sub-label"},"Mode",-1)),n(M,{modelValue:a(y),"onUpdate:modelValue":e[1]||(e[1]=t=>v(y)?y.value=t:null),placeholder:o("请选择"),class:"select"},{default:V(()=>[(d(!0),C(I,null,L(a(X),t=>(d(),z(x,{key:t,label:t,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),e[9]||(e[9]=c("div",{class:"sub-label"},"Padding scheme",-1)),n(M,{modelValue:a(b),"onUpdate:modelValue":e[2]||(e[2]=t=>v(b)?b.value=t:null),placeholder:o("请选择"),class:"select"},{default:V(()=>[(d(!0),C(I,null,L(a(Z),t=>(d(),z(x,{key:t,label:t,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])],64)):a(i)==="RC4Drop"?(d(),C(I,{key:1},[e[10]||(e[10]=c("div",{class:"sub-label"},"Drop words",-1)),n(_,{modelValue:a(g),"onUpdate:modelValue":e[3]||(e[3]=t=>v(g)?g.value=t:null),size:"small",class:"select"},null,8,["modelValue"])],64)):J("",!0),n(G,{modelValue:a(E),"onUpdate:modelValue":e[4]||(e[4]=t=>v(E)?E.value=t:null),class:"mt-20"},{default:V(()=>[B(f(o("自定义IV")),1)]),_:1},8,["modelValue"]),a(E)?(d(),z(_,{key:2,modelValue:a(R),"onUpdate:modelValue":e[5]||(e[5]=t=>v(R)?R.value=t:null),placeholder:"Hex string",size:"small",class:"select mt-5 h-32"},null,8,["modelValue"])):J("",!0),c("div",Ve,f(o("密码")),1),n(_,{modelValue:a(u),"onUpdate:modelValue":e[6]||(e[6]=t=>v(u)?u.value=t:null),"show-password":"",class:"select h-32"},null,8,["modelValue"]),n(O,{type:"primary",class:"m-auto w-full mt-40 xs:mt-20",icon:a(ne),onClick:j},{default:V(()=>[B(f(o("加密")),1)]),_:1},8,["icon"]),n(O,{type:"primary",class:"m-auto w-full mt-20 xs:mt-12",onClick:q},{default:V(()=>[B(f(o("解密")),1),n(Q,null,{default:V(()=>[n(a(ue))]),_:1})]),_:1}),e[11]||(e[11]=c("div",{class:"flex-1"},null,-1))]),c("div",Ce,[c("p",ye,f(o("密文")),1),n(_,{modelValue:a(p),"onUpdate:modelValue":e[7]||(e[7]=t=>v(p)?p.value=t:null),type:"textarea",placeholder:o("请输入内容"),resize:"none"},null,8,["modelValue","placeholder"])])])}}},ge={class:"p-cipher"},Pe={__name:"cipher",setup(H){const o=pe(),{currentFunc:S}=Y();return(D,r)=>{const p=ee,h=be;return d(),C("div",ge,[n(p,{"current-func":a(S)},null,8,["current-func"]),n(h,{algo:a(o).name},null,8,["algo"])])}}};export{Pe as default};

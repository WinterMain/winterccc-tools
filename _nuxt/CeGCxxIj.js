import{b as k,E as C,a as z}from"./DhnABNJK.js";import{E as H}from"./BfBe-_62.js";import{E as v}from"./Bwz5LC22.js";import{_ as N}from"./BRMPyW1j.js";import{ag as O,af as F,a,A as m,b as r,c as i,w as n,f as d,t as l,a9 as b,a8 as S,a0 as U,d as h}from"./DLp33f98.js";import"./DmWhdC9e.js";import{C as u}from"./BWjdp0_q.js";const w={交换:"Switch","将[a][/a]_e162":"Convert [a][/a] string to [b][/b] string",未找到与输入的字_25f2:"No encoding found matching the input string",请输入内容:"Please enter content",请选择:"Please select",转换:"Convert","转换失败，可能输_3397":"The conversion failed. The input string may not match the selected encoding.",输入的字符串不是_8fb9:"The input string is not #type# format"},x={交换:"交换","将[a][/a]_e162":"将[a][/a]字符串转为[b][/b]字符串",未找到与输入的字_25f2:"未找到与输入的字符串相匹配的编码",请输入内容:"请输入内容",请选择:"请选择",转换:"转换","转换失败，可能输_3397":"转换失败，可能输入的字符串与选择的编码不匹配",输入的字符串不是_8fb9:"输入的字符串不是#type#编码"},B={交换:"交換","将[a][/a]_e162":"將[a][/a]字符串轉為[b][/b]字符串",未找到与输入的字_25f2:"未找到與輸入的字符串相匹配的編碼",请输入内容:"請輸入內容",请选择:"請選擇",转换:"轉換","转换失败，可能输_3397":"轉換失敗，可能輸入的字符串與選擇的編碼不匹配",输入的字符串不是_8fb9:"輸入的字符串不是#type#編碼"},f={en_US:w,zh_Hans_CN:x,zh_Hant_HK:B},p={props:{dataFrom:{type:String,default:""},dataTo:{type:String,default:""}},data(){return{text:"",from:this.dataFrom||"Utf8",to:this.dataTo||"Hex",result:"",encs:["Base64","Hex","Utf8","Utf16","Utf16LE","Latin1"],checked:!1,error:""}},watch:{from(e){localStorage.SET_FROM=e},to(e){localStorage.SET_TO=e},text(e){if(e)try{this.checkWords(e,this.from),this.$nextTick(()=>{this.error=""})}catch(t){if(this.checked){let o;for(let c=0;c<this.encs.length;c++)try{this.checkWords(e,this.encs[c]),o=this.encs[c];break}catch($){}o?this.$nextTick(()=>{this.error="",this.from=o}):this.$nextTick(()=>{this.error=this.$VEncoder("未找到与输入的字_25f2","未找到与输入的字符串相匹配的编码")})}else this.$nextTick(()=>{this.error=this.$VEncoder("输入的字符串不是_8fb9","输入的字符串不是#type#编码").replace("#type#",e)})}else this.$nextTick(()=>{this.error=""})}},beforeCreate(){this.Sort=O},mounted(){!this.dataFrom&&localStorage.SET_FROM&&this.encs.find(e=>e===localStorage.SET_FROM)&&(this.from=localStorage.SET_FROM),!this.dataTo&&localStorage.SET_TO&&this.encs.find(e=>e===localStorage.SET_TO)&&(this.to=localStorage.SET_TO)},methods:{checkWords(e,t){try{u.enc[t].parse(e)}catch(o){}},changeText(){try{const e=u.enc[this.from].parse(this.text);this.result=u.enc[this.to].stringify(e)}catch(e){this.$message.error(this.$VEncoder("转换失败，可能输_3397","转换失败，可能输入的字符串与选择的编码不匹配"))}},switchCase(){const e=this.from,t=this.text;this.from=this.to,this.to=e,this.text=this.result,this.result=t}}};p.methods?Object.assign(p.methods,{$VEncoder(e){const t=this.$lang.value||"zh_Hans_CN",o=f[t]||f.zh_Hans_CN||{};return o[e]===void 0?e:o[e]}}):p.methods={$VEncoder(e){const t=this.$lang.value||"zh_Hans_CN",o=f[t]||f.zh_Hans_CN||{};return o[e]===void 0?e:o[e]}};const M=p,L={class:"c-encoder"},R={class:"title-selector"},I={key:2,class:"ml-30 text-12 text-red-500"},W={class:"py-20 flex items-center xs:flex-col"},j={class:"flex items-center"},K={class:"tip-text"},P={class:"tip-text"},A={class:"title-selector"};function D(e,t,o,c,$,J){const _=k,g=C,T=z,E=H,V=v,y=N;return a(),m("div",L,[r("div",R,[t[5]||(t[5]=r("p",{class:"e-label"},"From",-1)),e.dataFrom?(a(),i(_,{key:0,class:"ml-12"},{default:n(()=>[d(l(e.from),1)]),_:1})):(a(),i(T,{key:1,modelValue:e.from,"onUpdate:modelValue":t[0]||(t[0]=s=>e.from=s),placeholder:e.$VEncoder("请选择"),size:"small"},{default:n(()=>[(a(!0),m(b,null,S(e.encs,s=>(a(),i(g,{key:s,label:s,value:s},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])),e.error?(a(),m("p",I,[t[4]||(t[4]=r("i",{class:"el-icon-error"},null,-1)),d(l(e.error),1)])):U("",!0)]),h(E,{modelValue:e.text,"onUpdate:modelValue":t[1]||(t[1]=s=>e.text=s),type:"textarea",placeholder:e.$VEncoder("请输入内容"),rows:5,resize:"none",onInput:e.changeText},null,8,["modelValue","placeholder","onInput"]),r("div",W,[r("div",j,[h(V,{size:"small",type:"primary",class:"btn",onClick:e.changeText},{default:n(()=>[d(l(e.$VEncoder("转换")),1)]),_:1},8,["onClick"]),h(V,{icon:e.Sort,size:"small",class:"btn",onClick:e.switchCase},{default:n(()=>[d(l(e.$VEncoder("交换")),1)]),_:1},8,["icon","onClick"])]),h(y,{text:e.$VEncoder("将[a][/a]_e162"),class:"tip"},{a:n(()=>[r("span",K,l(e.from),1)]),b:n(()=>[r("span",P,l(e.to),1)]),_:1},8,["text"])]),r("div",A,[t[6]||(t[6]=r("p",{class:"e-label"},"To",-1)),e.dataTo?(a(),i(_,{key:0,class:"ml-12"},{default:n(()=>[d(l(e.to),1)]),_:1})):(a(),i(T,{key:1,modelValue:e.to,"onUpdate:modelValue":t[2]||(t[2]=s=>e.to=s),placeholder:e.$VEncoder("请选择"),size:"small"},{default:n(()=>[(a(!0),m(b,null,S(e.encs,s=>(a(),i(g,{key:s,label:s,value:s},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]))]),h(E,{modelValue:e.result,"onUpdate:modelValue":t[3]||(t[3]=s=>e.result=s),type:"textarea",rows:5,resize:"none",class:"text-primary"},null,8,["modelValue"])])}const te=F(M,[["render",D]]);export{te as _};

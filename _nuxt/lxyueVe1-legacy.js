System.register(["./83nbcDOI-legacy.js","./DQfppGMk-legacy.js","./DmiyQMxA-legacy.js","./CTr1QRrg-legacy.js","./BZGEdiVD-legacy.js","./C6Dy1d6i-legacy.js"],(function(e,t){"use strict";var a,l,s,o,r,n,c,i,d,h,p,u,m,g,f,x,_,y,T,b,S;return{setters:[e=>{a=e.C,l=e.E,s=e.a,o=e.b},e=>{r=e.E},e=>{n=e.E},e=>{c=e.k,i=e.l,d=e._,h=e.o,p=e.c,u=e.a,m=e.e,g=e.w,f=e.d,x=e.t,_=e.F,y=e.j,T=e.m,b=e.b,S=e.s},null,null],execute:function(){var t=document.createElement("style");t.textContent=".c-encoder{padding:20px}.c-encoder .title-selector{align-items:center;display:flex;padding-bottom:16px;padding-top:12px}.c-encoder .title-selector .el-select{height:auto;margin-left:20px;width:110px}.c-encoder .btn{font-size:16px;width:110px}.c-encoder .tip{margin-left:20px;--tw-text-opacity:1;color:rgb(243 139 44/var(--tw-text-opacity))}.c-encoder .tip .tip-text{font-weight:600;margin:0 5px}@media (max-width:767px){.c-encoder .tip{margin-left:0;margin-top:12px}}.c-encoder .el-checkbox__input{margin-top:2px}.c-encoder .el-textarea.is-disabled .el-textarea__inner{color:#22262a}\n",document.head.appendChild(t);const k={props:{text:{type:String,default:""},closeTag:{type:String,default:"/"},containerTag:{type:String,default:"div"}},setup(e,{slots:t}){const a=c((()=>{const t=e.text,a=RegExp(`\\[(.+?)\\](.*?)\\[\\${e.closeTag}\\1\\]`,"g");return t.replace(a,(e=>`#@#${e}#@#`)).split("#@#").map((e=>{const t=a.exec(e);return t?[t[2],t[1]]:[e]}))}));return()=>i(e.containerTag,{class:["c-common-language","div"===e.containerTag&&"inline-block"]},a.value.map((e=>{const a=e[0],l=e[1],s=l&&t[l];return s?s({value:a}):a})))}},E={en_US:{"交换":"Switch","将[a][/a]_e162":"Convert [a][/a] string to [b][/b] string","未找到与输入的字_25f2":"No encoding found matching the input string","请输入内容":"Please enter content","请选择":"Please select","转换":"Convert","转换失败，可能输_3397":"The conversion failed. The input string may not match the selected encoding.","输入的字符串不是_8fb9":"The input string is not #type# format"},zh_Hans_CN:{"交换":"交换","将[a][/a]_e162":"将[a][/a]字符串转为[b][/b]字符串","未找到与输入的字_25f2":"未找到与输入的字符串相匹配的编码","请输入内容":"请输入内容","请选择":"请选择","转换":"转换","转换失败，可能输_3397":"转换失败，可能输入的字符串与选择的编码不匹配","输入的字符串不是_8fb9":"输入的字符串不是#type#编码"},zh_Hant_HK:{"交换":"交換","将[a][/a]_e162":"將[a][/a]字符串轉為[b][/b]字符串","未找到与输入的字_25f2":"未找到與輸入的字符串相匹配的編碼","请输入内容":"請輸入內容","请选择":"請選擇","转换":"轉換","转换失败，可能输_3397":"轉換失敗，可能輸入的字符串與選擇的編碼不匹配","输入的字符串不是_8fb9":"輸入的字符串不是#type#編碼"}},v={props:{dataFrom:{type:String,default:""},dataTo:{type:String,default:""}},data(){return{text:"",from:this.dataFrom||"Base64",to:this.dataTo||"Utf8",result:"",encs:["Base64","Hex","Utf8","Utf16","Utf16LE","Latin1"],checked:!1,error:""}},watch:{from(e){localStorage.SET_FROM=e},to(e){localStorage.SET_TO=e},text(e){if(e)try{this.checkWords(e,this.from),this.$nextTick((()=>{this.error=""}))}catch(t){if(this.checked){let a;for(let l=0;l<this.encs.length;l++)try{this.checkWords(e,this.encs[l]),a=this.encs[l];break}catch(t){}a?this.$nextTick((()=>{this.error="",this.from=a})):this.$nextTick((()=>{this.error=this.$VEncoder("未找到与输入的字_25f2","未找到与输入的字符串相匹配的编码")}))}else this.$nextTick((()=>{this.error=this.$VEncoder("输入的字符串不是_8fb9","输入的字符串不是#type#编码").replace("#type#",e)}))}else this.$nextTick((()=>{this.error=""}))}},beforeCreate(){this.Sort=S},mounted(){!this.dataFrom&&localStorage.SET_FROM&&this.encs.find((e=>e===localStorage.SET_FROM))&&(this.from=localStorage.SET_FROM),!this.dataTo&&localStorage.SET_TO&&this.encs.find((e=>e===localStorage.SET_TO))&&(this.to=localStorage.SET_TO)},methods:{checkWords(e,t){try{a.enc[t].parse(e)}catch(l){}},changeText(){try{const e=a.enc[this.from].parse(this.text);this.result=a.enc[this.to].stringify(e)}catch(e){this.$message.error(this.$VEncoder("转换失败，可能输_3397","转换失败，可能输入的字符串与选择的编码不匹配"))}},switchCase(){const e=this.from,t=this.text;this.from=this.to,this.to=e,this.text=this.result,this.result=t}}};v.methods?Object.assign(v.methods,{$VEncoder(e){const t=this.$lang.value||"zh_Hans_CN",a=E[t]||E.zh_Hans_CN||{};return void 0===a[e]?e:a[e]}}):v.methods={$VEncoder(e){const t=this.$lang.value||"zh_Hans_CN",a=E[t]||E.zh_Hans_CN||{};return void 0===a[e]?e:a[e]}};const V={class:"c-encoder"},$={class:"title-selector"},C={key:2,class:"ml-30 text-12 text-red-500"},w={class:"py-20 flex items-center xs:flex-col"},z={class:"flex items-center"},F={class:"tip-text"},O={class:"tip-text"},U={class:"title-selector"};e("_",d(v,[["render",function(e,t,a,c,i,d){const S=l,E=s,v=o,j=r,H=n,N=k;return h(),p("div",V,[u("div",$,[t[5]||(t[5]=u("p",{class:"e-label"},"From",-1)),e.dataFrom?(h(),m(S,{key:0,class:"ml-12"},{default:g((()=>[f(x(e.from),1)])),_:1})):(h(),m(v,{key:1,modelValue:e.from,"onUpdate:modelValue":t[0]||(t[0]=t=>e.from=t),placeholder:e.$VEncoder("请选择"),size:"small"},{default:g((()=>[(h(!0),p(_,null,y(e.encs,(e=>(h(),m(E,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])),e.error?(h(),p("p",C,[t[4]||(t[4]=u("i",{class:"el-icon-error"},null,-1)),f(x(e.error),1)])):T("",!0)]),b(j,{modelValue:e.text,"onUpdate:modelValue":t[1]||(t[1]=t=>e.text=t),type:"textarea",placeholder:e.$VEncoder("请输入内容"),rows:5,resize:"none",onInput:e.changeText},null,8,["modelValue","placeholder","onInput"]),u("div",w,[u("div",z,[b(H,{size:"small",type:"primary",class:"btn",onClick:e.changeText},{default:g((()=>[f(x(e.$VEncoder("转换")),1)])),_:1},8,["onClick"]),b(H,{icon:e.Sort,size:"small",class:"btn",onClick:e.switchCase},{default:g((()=>[f(x(e.$VEncoder("交换")),1)])),_:1},8,["icon","onClick"])]),b(N,{text:e.$VEncoder("将[a][/a]_e162"),class:"tip"},{a:g((()=>[u("span",F,x(e.from),1)])),b:g((()=>[u("span",O,x(e.to),1)])),_:1},8,["text"])]),u("div",U,[t[6]||(t[6]=u("p",{class:"e-label"},"To",-1)),e.dataTo?(h(),m(S,{key:0,class:"ml-12"},{default:g((()=>[f(x(e.to),1)])),_:1})):(h(),m(v,{key:1,modelValue:e.to,"onUpdate:modelValue":t[2]||(t[2]=t=>e.to=t),placeholder:e.$VEncoder("请选择"),size:"small"},{default:g((()=>[(h(!0),p(_,null,y(e.encs,(e=>(h(),m(E,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"]))]),b(j,{modelValue:e.result,"onUpdate:modelValue":t[3]||(t[3]=t=>e.result=t),type:"textarea",rows:5,resize:"none",class:"text-primary",disabled:""},null,8,["modelValue"])])}]]))}}}));

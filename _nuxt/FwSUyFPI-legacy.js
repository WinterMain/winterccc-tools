System.register(["./LgY-Fzyd-legacy.js"],(function(t,e){"use strict";var r,a,o,n;return{setters:[t=>{r=t.r,a=t.a,o=t.A,n=t.x}],execute:function(){var e=document.createElement("style");e.textContent=".c-output-area{height:100%;overflow-y:auto;word-break:break-all;--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));color:#3ee421;font-size:12px;height:306px;line-height:16px;padding:8px}.c-output-area .out-text.error{--tw-text-opacity:1;color:rgb(235 69 99/var(--tw-text-opacity))}.c-output-area .out-text.warning{--tw-text-opacity:1;color:rgb(243 139 44/var(--tw-text-opacity))}.c-output-area .out-text .o-tab{margin-left:12px}.c-output-area .out-text .o-space{margin-left:2px;margin-right:2px}\n",document.head.appendChild(e),t("_",{__name:"Output",setup(t,{expose:e}){const c=r();function u(){const t=Array.from(arguments),e=t.slice(0,t.length-1),r=t[t.length-1],a=e.map((t=>`${(void 0!==t||null!==t?t:"").toString().replace(/\n/g,"<br>").replace(/\t/g,'<span class="o-tab"></span>').replace(/ /g,'<span class="o-space"></span>')}`));c.value.innerHTML=`${c.value.innerHTML}<div class="out-text ${r}">${a.join('<span class="o-space"></span>')}</div>`,n((()=>{c.value.scrollTop=c.value.scrollHeight}))}return e({success:function(){u(...Array.from(arguments),"success")},error:function(){u(...Array.from(arguments),"error")},log:u,clear:function(){c.value.innerHTML=""}}),(t,e)=>(a(),o("div",{ref_key:"outputEl",ref:c,class:"c-output-area"},null,512))}})}}}));

System.register(["./CPUHwStd-legacy.js","./i3PfXIa--legacy.js","./Dly7pj5V-legacy.js","./BVygtB32-legacy.js","./CVQWnRaL-legacy.js","./CBcSlEpY-legacy.js","./DtrIbKZW-legacy.js"],(function(e,t){"use strict";var r,s,a,o,l,i,n,c,d,p,u,f,g,v,b,w,h,x,y,m,k,M,_,C,S,z,E,L,j,D,I;return{setters:[e=>{r=e.n,s=e.o,a=e.j,o=e.F,l=e.x,i=e.Y,n=e.a,c=e.d,d=e.y,p=e.bo,u=e.r,f=e.m,g=e.q,v=e.bp,b=e.aL,w=e.c,h=e.w,x=e.D,y=e.t,m=e.b,k=e.bq,M=e.br,_=e.bs,C=e.bt,S=e.bu,z=e.bv,E=e.u,L=e.E},e=>{j=e.E},e=>{D=e._},e=>{I=e.s},null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".c-main-tetris-brick .tetris-row .tetris-brick{padding:1px!important}.c-main-tetris-brick .tetris-row .tetris-brick .brick-inner{height:6px!important;width:6px!important}.p-tetris{-webkit-user-select:none;-moz-user-select:none;user-select:none}.p-tetris .t-logo svg{height:30px;margin:auto}.p-tetris .tetris-core{border-radius:20px;box-shadow:inset 0 0 10px #fff;width:320px;--tw-bg-opacity:1;background-color:rgb(60 130 246/var(--tw-bg-opacity));padding:10px 36px 30px}.p-tetris .cartoon{animation:cartoon-animation 3s infinite}.p-tetris .tetris-stage{background-color:#9ead86;border-color:currentcolor;border-color:rgba(60,130,246,.6) rgba(60,130,246,.4) rgba(60,130,246,.4) rgba(60,130,246,.6);border-style:solid;border-width:3px;display:flex;padding:8px}.p-tetris .tetris-stage .tetris-main{padding-bottom:1px;padding-left:1px;position:relative}.p-tetris .tetris-stage .tetris-main,.p-tetris .tetris-stage .tetris-main .gameover{border-width:1px;--tw-border-opacity:1;border-color:rgb(34 38 42/var(--tw-border-opacity))}.p-tetris .tetris-stage .tetris-main .gameover{background-color:#9ead86;bottom:0;height:24px;left:0;margin:auto;padding:2px;position:absolute;right:0;top:0;width:116px}.p-tetris .tetris-stage .t-field{-webkit-user-select:none;-moz-user-select:none;user-select:none}.p-tetris .tetris-stage .t-field>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(4px*var(--tw-space-y-reverse));margin-top:calc(4px*(1 - var(--tw-space-y-reverse)))}.p-tetris .tetris-stage .tetris-row{align-items:center;display:flex}.p-tetris .tetris-stage .tetris-row .tetris-brick{border-color:#879372;border-width:1px;margin-right:1px;margin-top:1px;padding:2px}.p-tetris .tetris-stage .tetris-row .tetris-brick .brick-inner{background-color:#879372;height:8px;width:8px}.p-tetris .tetris-stage .tetris-row .tetris-brick.take{--tw-border-opacity:1;border-color:rgb(34 38 42/var(--tw-border-opacity))}.p-tetris .tetris-stage .tetris-row .tetris-brick.take .brick-inner{--tw-bg-opacity:1;background-color:rgb(34 38 42/var(--tw-bg-opacity))}.p-tetris .el-button{border-color:rgb(94 103 115/var(--tw-border-opacity));box-shadow:inset 0 5px 10px rgba(255,255,255,.8);width:32px;--tw-border-opacity:.6;--tw-bg-opacity:1;background-color:rgb(60 130 246/var(--tw-bg-opacity));font-size:16px;line-height:24px;padding:0;--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.p-tetris .el-button:hover{opacity:.8}.p-tetris .el-button:active{box-shadow:inset 0 5px 5px rgba(255,255,255,.6)}.p-tetris .btn-op{border-radius:9999px;height:44px;width:44px}.p-tetris .btns-side{align-items:center;flex-direction:row;justify-content:center;text-align:center}.p-tetris .btn-sure{border-radius:9999px;height:70px;width:70px}.p-tetris .op-stage{margin-top:20px}.p-tetris .op-stage .direct{height:100%;position:relative;width:40px;--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.p-tetris .op-stage .direct .el-icon{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none}.p-tetris .op-stage .direct .el-icon:first-child{bottom:0;left:5px;margin:auto;top:0}.p-tetris .op-stage .direct .el-icon:nth-child(2){left:0;margin-left:auto;margin-right:auto;right:0;top:-15px}.p-tetris .op-stage .direct .el-icon:nth-child(3){bottom:0;margin:auto;right:6px;top:0}.p-tetris .op-stage .direct .el-icon:nth-child(4){bottom:-15px;left:0;margin:auto;right:0}@media (max-width:767px){.p-tetris{touch-action:manipulation}.p-tetris .tetris-core{width:100%}}@keyframes cartoon-animation{0%{--tw-rotate:-45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}50%{--tw-rotate:-0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}to{--tw-rotate:45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}}\n",document.head.appendChild(t);const $={class:"c-main-tetris-brick"},A={__name:"TetrisBrick",props:{xCount:{type:Number,default:4},yCount:{type:Number,default:4},coords:{type:Array,default:()=>[]}},setup(e){const t=e,d=e=>{const{xMin:r,xMax:s,yMax:a,yMin:o}=(e=>{let r=-1*t.xCount,s=-1*t.yCount,a=t.xCount,o=t.yCount;const l=[];for(let t=0;t<e.length;t++){const i=e[t];l.push(`${i[0]}-${i[1]}`),a>=i[0]&&(a=i[0]),o>=i[1]&&(o=i[1]),r<=i[0]&&(r=i[0]),s<=i[1]&&(s=i[1])}return{xMax:r,yMax:s,xMin:a,yMin:o,unfold:l.join(",")}})(e),l=Math.round((t.xCount-(s-r+1))/2)-r,i=[];for(let t=0;t<e.length;t++){const r=e[t];i.push([r[0]+l,r[1]])}const n=[],c=Math.round((t.yCount-(a-o+1))/2)-o;for(let t=0;t<e.length;t++){const e=i[t];n.push([e[0],e[1]+c])}return n},p=r((()=>{const e=[];for(let r=0;r<t.yCount;r++){const s=[];for(let e=0;e<t.xCount;e++){let a=!1;t.coords.length&&d(t.coords).find((t=>t.join("-")===`${e}-${r}`))&&(a=!0),s.push({take:a})}e.push(s)}return{bricks:e}}));return(e,t)=>(s(),a("div",$,[(s(!0),a(o,null,l(c(p).bricks,((e,r)=>(s(),a("div",{key:r,class:"tetris-row"},[(s(!0),a(o,null,l(e,((e,r)=>(s(),a("div",{key:r,class:i(["tetris-brick",{take:e.take}])},t[0]||(t[0]=[n("div",{class:"brick-inner"},null,-1)]),2)))),128))])))),128))]))}},N=d("/images/gameover.svg"),T=d("/images/rabit1.svg?t=1"),J={en_US:{"大按钮，旋转按钮_6e4b":"Large button is the rotate button, or use one of the following: Arrow key↑, space bar, W key.","小按钮，控制左、_5fd0":"Small button to control left, right, and down directions. Note that the up direction is rotation. Or use one of the following: ↑←→↓ arrow keys on the keyboard, W A S D keys on the keyboard.","开始或者暂停":"Start or Pause","操作说明":"Instructions","重新开始":"Restart game"},zh_Hans_CN:{"大按钮，旋转按钮_6e4b":"大按钮，旋转按钮，或者下面其中一种：方向键↑、空格键、W按键。","小按钮，控制左、_5fd0":"小按钮，控制左、右、下方向，注意方向上为旋转。或者下面其中一种：键盘上的↑←→↓方向键、键盘上W A S D按键。","开始或者暂停":"开始或者暂停","操作说明":"操作说明","重新开始":"重新开始"},zh_Hant_HK:{"大按钮，旋转按钮_6e4b":"大按鈕，旋轉按鈕，或者下面其中一種：方向鍵↑、空格鍵、W按鍵。","小按钮，控制左、_5fd0":"小按鈕，控制左、右、下方向，注意方向上為旋轉。或者下面其中一種：鍵盤上的↑←→↓方向鍵、鍵盤上W A S D按鍵。","开始或者暂停":"開始或者暫停","操作说明":"操作說明","重新开始":"重新開始"}},O={class:"tetris-stage"},W={class:"tetris-main"},Y={key:0,class:"gameover",src:N},H={class:"text-12 flex-1 text-right space-y-20 flex flex-col"},K={class:"t-field"},Z={class:"f-pixel"},R={class:"t-field"},X={class:"flex justify-end"},q={class:"t-field"},B={class:"f-pixel"},P={class:"flex justify-end flex-1"},U={class:"t-field"},F={class:"f-pixel",style:{"font-size":"5px"}},V={class:"op-stage"},G={class:"pb-20 text-center"},Q={class:"flex items-center justify-between"},ee={class:"btns-side relative"},te={class:"flex items-center whitespace-nowrap relative"},re={class:"direct"},se={class:"mt-40"},ae={class:"label select-none"},oe={class:"space-y-12"},le={class:"flex items-center"},ie={class:"ml-20 select-none"},ne={class:"flex items-center"},ce={class:"ml-20"},de={class:"flex items-center"},pe={class:"ml-20"},ue={class:"flex items-center"},fe={class:"ml-20"};e("default",{__name:"tetris",setup(e){const t=e=>{const t=E().$lang.value||"zh_Hans_CN",r=J[t]||J.zh_Hans_CN||{};return void 0===r[e]?e:r[e]};p({meta:[{name:"viewport",content:"user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-touch-fullscreen",content:"yes"},{name:"browsermode",content:"application"},{name:"x5-page-mode",content:"app"},{name:"apple-mobile-web-app-status-bar-style",content:"black"}]});const d={S:"S",Z:"Z",L:"L",I:"I",O:"O",T:"T",J:"J"},$=[600,500,400,300,200,150,100,90,80,70,60,50],N=u(10),ge=u(20),ve=f([]),be=f({type:d.S,coords:[]}),we=f({type:d.S,coords:[]}),he=u($[0]),xe=u(),ye=u(!1),me=u(!0),ke=u(0),Me=u(!1),_e=u(),Ce=u(),Se=u(),ze=[{side:"left",ref:_e,inter:null},{side:"right",ref:Ce,inter:null},{side:"down",ref:Se,inter:null}],Ee=r((()=>$.findIndex((e=>e===he.value))+1)),Le=r((()=>{const e=[];for(let t=0;t<ge.value;t++){const r=[];for(let e=0;e<N.value;e++){let s=!1;ve[e]&&ve[e][t]&&(s=!0),be.coords.find((r=>r.join("-")===`${e}-${t}`))&&(s=!0),r.push({take:s})}e.push(r)}return{bricks:e}})),je=()=>{for(let e=0;e<N.value;e++)ve[e]=[]},De=e=>{let t=-1*N.value,r=-1*ge.value,s=N.value,a=ge.value;const o=[];for(let l=0;l<e.length;l++){const i=e[l];o.push(`${i[0]}-${i[1]}`),s>=i[0]&&(s=i[0]),a>=i[1]&&(a=i[1]),t<=i[0]&&(t=i[0]),r<=i[1]&&(r=i[1])}return{xMax:t,yMax:r,xMin:s,yMin:a,unfold:o.join(",")}},Ie=(e=0,t=0,r=!0)=>r?[[e,t],[e,t+1],[e+1,t+1],[e+1,t+2]]:[[e+1,t],[e+2,t],[e,t+1],[e+1,t+1]],$e=(e=0,t=0,r=!0)=>r?[[e+1,t],[e,t+1],[e+1,t+1],[e,t+2]]:[[e,t],[e+1,t],[e+1,t+1],[e+2,t+1]],Ae=(e=0,t=0,r=0)=>{switch(r){case 0:return[[e,t],[e,t+1],[e+1,t+1],[e+2,t+1]];case 1:return[[e,t],[e+1,t],[e,t+1],[e,t+2]];case 2:return[[e,t],[e+1,t],[e+2,t],[e+2,t+1]];case 3:return[[e+1,t],[e+1,t+1],[e,t+2],[e+1,t+2]]}},Ne=(e=0,t=0,r=0)=>{switch(r){case 0:return[[e+2,t],[e,t+1],[e+1,t+1],[e+2,t+1]];case 1:return[[e,t],[e,t+1],[e,t+2],[e+1,t+2]];case 2:return[[e,t],[e+1,t],[e+2,t],[e,t+1]];case 3:return[[e,t],[e+1,t],[e+1,t+1],[e+1,t+2]]}},Te=(e=0,t=0,r=!0)=>r?[[e,t],[e,t+1],[e,t+2],[e,t+3]]:[[e,t],[e+1,t],[e+2,t],[e+3,t]],Je=(e=0,t=0,r=0)=>{switch(r){case 0:return[[e+1,t],[e,t+1],[e+1,t+1],[e+1,t+2]];case 1:return[[e+1,t],[e,t+1],[e+1,t+1],[e+2,t+1]];case 2:return[[e,t],[e,t+1],[e+1,t+1],[e,t+2]];case 3:return[[e,t],[e+1,t],[e+2,t],[e+1,t+1]]}},Oe=(e,t,r)=>{const{xMin:s,yMin:a,yMax:o,unfold:l}=De(t),i=o-a,n={0:1,1:2,2:1,3:2};let c=0;const p=r({xMin:s,yMin:a,yMax:o,unfold:l});for(let d=0;d<p.length;d++)if(i===(void 0===p[d].offset?n[p[d].side]:p[d].offset)){const e=p[d].coords;let t=!0;for(let r=0;r<e.length;r++){const s=e[r];if(l.includes(`${s[0]}-${s[1]}`)){t=!1;break}}if(t){c=p[d].side;break}}return c++,c>3&&(c=0),e===d.L?Ae(s,a,c):e===d.J?Ne(s,a,c):Je(s,a,c)},We=({type:e,coords:t})=>{let r=t;switch(e){case d.S:case d.Z:case d.I:r=((e,t)=>{const{xMin:r,yMin:s,yMax:a}=De(e),o=a-s>=2;return d.I===t?Te(r,s,!o):t===d.S?Ie(r,s,!o):$e(r,s,!o)})(t,be.type);break;case d.L:s=t,r=Oe(d.L,s,(({xMin:e,yMin:t})=>[{coords:[[e+1,t],[e+2,t]],side:0},{coords:[[e+1,t+1],[e+1,t+2]],side:1},{coords:[[e,t+1],[e+1,t+1]],side:2},{coords:[[e,t],[e,t+1]],side:3}]));break;case d.J:r=(e=>Oe(d.J,e,(({xMin:e,yMin:t})=>[{coords:[[e,t],[e+1,t]],side:0},{coords:[[e+1,t],[e+1,t+1]],side:1},{coords:[[e+1,t+1],[e+2,t+1]],side:2},{coords:[[e,t+1],[e,t+2]],side:3}])))(t);break;case d.T:r=(e=>Oe(d.T,e,(({xMin:e,yMin:t})=>[{coords:[[e,t],[e,t+2]],side:0,offset:2},{coords:[[e,t],[e+2,t]],side:1,offset:1},{coords:[[e+1,t],[e+1,t+2]],side:2,offset:2},{coords:[[e,t+1],[e+2,t+1]],side:3,offset:1}])))(t);break;default:r=t}var s;for(let a=0;a<r.length;a++)if(!Ye(r[a]))return t;return r},Ye=e=>e[0]>=0&&e[0]<N.value&&e[1]<ge.value&&!(ve[e[0]]&&ve[e[0]][e[1]]),He=({type:e,coords:t})=>{be.type=e;const r=(e=>{const{xMin:t,xMax:r}=De(e),s=Math.round((N.value-(r-t+1))/2)-t,a=[];for(let o=0;o<e.length;o++){const t=e[o];a.push([t[0]+s,t[1]])}return a})(t),{yMax:s}=De(r);for(let a=0;a<r.length;a++)r[a][1]=r[a][1]-s-1;be.coords=r},Ke=()=>{const e=parseInt(Date.now()*Math.random()),t=Object.keys(d),r=d[t[e%t.length]];let s=e%4;[d.S,d.Z,d.I].includes(r)&&(s=s>1);const a=((e,t)=>{switch(e){case d.S:return Ie(0,0,t);case d.Z:return $e(0,0,t);case d.L:return Ae(0,0,t);case d.J:return Ne(0,0,t);case d.I:return Te(0,0,t);case d.O:return((e=0,t=0)=>[[e,t],[e+1,t],[e,t+1],[e+1,t+1]])(0,0);case d.T:return Je(0,0,t)}})(r,s);0===be.coords.length?(He({type:r,coords:a}),Ke()):0===we.coords.length?(we.type=r,we.coords=a):(He({...we}),we.type=r,we.coords=a)},Ze=(e=0,t=0)=>{let r=!0,s=e;for(;s<ge.value;s++){r=!0;for(let e=0;e<N.value;e++)if(!ve[e][s]){r=!1;break}if(r)break}if(r){ke.value+=2**t*100;const e=Math.min($.length-1,parseInt(ke.value/(100*ge.value)));he.value=$[e];for(let t=0;t<N.value;t++)ve[t][s]=!1;const r=JSON.parse(JSON.stringify(ve));if(s>=0&&s<ge.value)for(let t=s;t>=0;t--)for(let e=0;e<N.value;e++)ve[e][t]=t-1>=0&&r[e][t-1];Ze(s,t+1)}},Re=(e,t,r)=>{const s=[];ye.value=!1,Me.value=!Me.value;for(let a=0;a<be.coords.length;a++){const r=be.coords[a];let o;if("left"===e?o=[r[0]-1,r[1]]:"right"===e?o=[r[0]+1,r[1]]:"up"===e?o=[r[0],r[1]-1]:"down"===e&&(o=[r[0],r[1]+1]),t)s.push(o);else{if(!Ye(o)){if("down"===e){if(o[1]<=0)return ye.value=!0,void Ve();be.coords.forEach((e=>{e[0]>=0&&e[1]>=0&&(ve[e[0]][e[1]]=!0)})),Ze(),Ke()}return}s.push(o)}}if(t)return s;be.coords=s,r&&r()},Xe=(e,t)=>{ye.value||(ze.forEach((e=>{clearInterval(e.inter)})),Re(e),t.preventDefault())},qe=()=>{Re("down",!1,(()=>{qe()}))},Be=()=>{ye.value||(be.coords=We(be))};let Pe;const Ue=()=>{me.value=!1,clearTimeout(Pe),Pe=setTimeout((()=>{Ue(),Re("down")}),he.value)},Fe=()=>{me.value?(ye.value&&Ge(),ye.value=!1,0!==be.coords.length&&0!==we.coords.length||Ke(),Ue()):Ve()},Ve=()=>{me.value=!0,clearTimeout(Pe)},Ge=()=>{ye.value=!1,be.coords=[],we.coords=[],je(),Ke(),Ue(),me.value=!1,ke.value=0,he.value=$[0]},Qe=e=>{if(ye.value)e.preventDefault();else switch(e.code){case"KeyS":case"ArrowDown":qe(),e.preventDefault();break;case"Space":case"KeyW":case"ArrowUp":Be(),e.preventDefault();break;case"KeyA":case"ArrowLeft":Re("left"),e.preventDefault();break;case"KeyD":case"ArrowRight":Re("right"),e.preventDefault()}},et=function(e){e.preventDefault()};return g((()=>{je(),Fe(),window.addEventListener("keydown",Qe,{}),xe.value.focus(),ze.forEach((e=>{v(e.ref,(()=>{ze.forEach((e=>{clearInterval(e.inter)})),e.inter=I((()=>{Re(e.side)}),100)}),{delay:200}),e.ref.value.$el.addEventListener("pointerup",(()=>{clearInterval(e.inter)})),e.ref.value.$el.addEventListener("dblclick",(e=>{e.preventDefault()}),{passive:!1})})),document.addEventListener("touchstart",et,!1)})),b((()=>{Ve(),window.removeEventListener("keydown",Qe),window.removeEventListener("touchstart",et)})),(e,r)=>{const d=A,p=j,u=L,f=D;return s(),w(f,{class:"p-tetris"},{default:h((()=>[n("div",{ref_key:"tetrisCore",ref:xe,class:"tetris-core",tabindex:"-1"},[r[6]||(r[6]=n("div",{class:"t-logo"},[n("svg",{viewBox:"0 0 500 200",xmlns:"http://www.w3.org/2000/svg"},[n("g",null,[n("title",null,"Layer 1"),n("polyline",{stroke:"null",fill:"white",points:"110.58999633789062,290.98870849609375 110.58999633789062,291.6787109375 110.58999633789062,291.98870849609375 ",class:"cls-1"}),n("g",{id:"svg_4"},[n("path",{stroke:"null",fill:"white",d:"m161.70001,64.285l0,48.6c0,24 -15.36,37.32 -41.28,37.32c-11,0 -19.67,-2.88 -26,-7.92c-6.24,5 -15,7.92 -26,7.92c-25.8,0 -41.16,-13.32 -41.16,-37.32l0,-48.6l28.32,0l0,47.78c-0.07,10.08 3.77,15.22 12.34,15.22s12.36,-5.16 12.36,-15.24l0,-47.76l28.32,0l0,47.78c0,10.08 3.84,15.24 12.47,15.24s12.36,-5.16 12.36,-15.24l0,-47.78l28.27,0z",class:"cls-1"}),n("path",{stroke:"null",fill:"white",d:"m171.07001,63.585c0,-7.79 6.36,-13.79 16.32,-13.79s16.32,5.49 16.32,13.32c0,8.27 -6.36,14.27 -16.32,14.27s-16.32,-6 -16.32,-13.8zm2.76,19.08l27.09,0l0,65.62l-27.09,0l0,-65.62z",class:"cls-1"}),n("path",{stroke:"null",fill:"white",d:"m285.42001,110.865l0,37.42l-27.12,0l0,-32.74c0,-8.16 -3.12,-11.28 -8,-11.28c-5.51,0 -10.2,3.48 -10.2,13.2l0,30.82l-27.18,0l0,-65.62l25.8,0l0,6.48c5.15,-5.16 12.11,-7.68 19.79,-7.68c15.15,0 26.91,8.76 26.91,29.4z",class:"cls-1"}),n("path",{stroke:"null",fill:"white",d:"m342.30001,146.025c-4.2,2.4 -10.32,3.48 -16.68,3.48c-18.12,0 -28.67,-8.52 -28.67,-26.64l0,-55l27.11,0l0,18.42l13.44,0l0,19.8l-13.44,0l0,16.54c0,4.08 2.4,6.36 5.64,6.36a11.06,11.06 0 0 0 6.12,-1.8l6.48,18.84z",class:"cls-1"}),n("path",{stroke:"null",fill:"white",d:"m398.10001,124.665l14.16,14.28c-6.48,7 -15.72,10.56 -28.68,10.56c-24.12,0 -39.71,-14.52 -39.71,-34.08c0,-19.92 16.08,-34 37.67,-34c19.08,0 35.64,11.76 35.64,33.6l-44.88,8.64c2.16,4.08 6.24,5.76 12.12,5.76s9.36,-1.52 13.68,-4.76zm-27.6,-13.8l21,-4.08a10,10 0 0 0 -9.84,-6.84c-6.12,0 -10.32,3.48 -11.16,10.92z",class:"cls-1"}),n("path",{stroke:"null",fill:"white",d:"m472.74001,81.465l0,24a37.58,37.58 0 0 0 -6,-0.48c-8.16,0 -13.92,3.72 -13.92,14.16l0,29.14l-27.11,0l0,-65.62l25.79,0l0,7.08c4.8,-5.52 12.12,-8.28 21.24,-8.28z",class:"cls-1"})])])])],-1)),n("div",O,[n("div",W,[(s(!0),a(o,null,l(c(Le).bricks,((e,t)=>(s(),a("div",{key:t,class:"tetris-row"},[(s(!0),a(o,null,l(e,((e,t)=>(s(),a("div",{key:t,class:i(["tetris-brick",{take:e.take}])},r[2]||(r[2]=[n("div",{class:"brick-inner"},null,-1)]),2)))),128))])))),128)),c(ye)?(s(),a("img",Y)):x("",!0)]),n("div",H,[n("div",K,[n("p",Z,y(c(ke)),1),r[3]||(r[3]=n("p",{class:"f-pixel"},"SCORE",-1))]),n("div",R,[n("div",X,[m(d,{coords:c(we).coords},null,8,["coords"])]),r[4]||(r[4]=n("p",{class:"f-pixel"},"NEXT",-1))]),n("div",q,[n("p",B,y(c(Ee)),1),r[5]||(r[5]=n("p",{class:"f-pixel"},"SPEED LEVEL",-1))]),n("div",P,[n("img",{src:T,class:i(["h-30",{cartoon:!c(me)}])},null,2)]),n("div",U,[n("p",F,y(e.$brandName)+".com",1)])])]),n("div",V,[n("div",G,[m(p,{type:"danger",round:"",icon:c(me)?c(k):c(M),onClick:Fe},null,8,["icon"]),m(p,{type:"danger",round:"",class:"bg-red-01",onClick:Ge})]),n("div",Q,[n("div",ee,[m(p,{class:"btn-op z-1 -mb-4",onClick:Be}),n("div",te,[m(p,{ref_key:"btnLeft",ref:_e,class:"btn-op",onClick:r[0]||(r[0]=e=>Xe("left",e))},null,512),n("div",re,[m(u,null,{default:h((()=>[m(c(_))])),_:1}),m(u,null,{default:h((()=>[m(c(C))])),_:1}),m(u,null,{default:h((()=>[m(c(S))])),_:1}),m(u,null,{default:h((()=>[m(c(z))])),_:1})]),m(p,{ref_key:"btnRight",ref:Ce,class:"btn-op",onClick:r[1]||(r[1]=e=>Xe("right",e))},null,512)]),m(p,{ref_key:"btnDown",ref:Se,class:"btn-op z-1 -mt-4",onClick:qe},null,512)]),m(p,{class:"btn-sure",onClick:Be})])])],512),n("div",se,[n("p",ae,y(t("操作说明")),1),n("div",oe,[n("div",le,[m(p,{type:"danger",round:"",icon:c(me)?c(k):c(M)},null,8,["icon"]),n("p",ie,y(t("开始或者暂停")),1)]),n("div",ne,[m(p,{type:"danger",round:"",class:"bg-red-01"}),n("p",ce,y(t("重新开始")),1)]),n("div",de,[m(p,{type:"danger",class:"w-32 min-w-32",round:""}),n("p",pe,y(t("小按钮，控制左、_5fd0")),1)]),n("div",ue,[m(p,{type:"danger",class:"w-32 min-w-32",round:""}),n("p",fe,y(t("大按钮，旋转按钮_6e4b")),1)])])])])),_:1})}}})}}}));

import{k as Q,o as C,c as $,F as J,j as R,O as X,a as n,f as p,p as ke,r as w,ag as Y,N as Ae,aO as Ie,av as Te,e as Ne,w as O,m as De,t as A,b as v,aP as _e,aQ as ve,aR as Oe,aS as je,aT as He,aU as Je,u as Re,E as Ve}from"./CRlzxUvk.js";import{E as Pe}from"./ophomNM5.js";import{_ as We}from"./Cz3y_gpF.js";import{u as Ze}from"./SDR2wsIz.js";import{s as Ke}from"./Bw92_PH2.js";import"./C46z4x6h.js";import"./JAUZZBS7.js";import"./CGy7nKQY.js";import"./COXVnOfv.js";import"./rDjYV1p9.js";const Ue={class:"c-main-tetris-brick"},Fe={__name:"TetrisBrick",props:{xCount:{type:Number,default:4},yCount:{type:Number,default:4},coords:{type:Array,default:()=>[]}},setup(q){const k=q,l=_=>{let u=k.xCount*-1,c=k.yCount*-1,d=k.xCount,m=k.yCount;const S=[];for(let g=0;g<_.length;g++){const f=_[g];S.push("".concat(f[0],"-").concat(f[1])),d>=f[0]&&(d=f[0]),m>=f[1]&&(m=f[1]),u<=f[0]&&(u=f[0]),c<=f[1]&&(c=f[1])}return{xMax:u,yMax:c,xMin:d,yMin:m,unfold:S.join(",")}},I=_=>{const{xMin:u,xMax:c,yMax:d,yMin:m}=l(_),S=Math.round((k.xCount-(c-u+1))/2)-u,g=[];for(let L=0;L<_.length;L++){const E=_[L];g.push([E[0]+S,E[1]])}const f=[],T=Math.round((k.yCount-(d-m+1))/2)-m;for(let L=0;L<_.length;L++){const E=g[L];f.push([E[0],E[1]+T])}return f},b=Q(()=>{const _=[];for(let u=0;u<k.yCount;u++){const c=[];for(let d=0;d<k.xCount;d++){let m=!1;k.coords.length&&I(k.coords).find(g=>g.join("-")==="".concat(d,"-").concat(u))&&(m=!0),c.push({take:m})}_.push(c)}return{bricks:_}});return(_,u)=>(C(),$("div",Ue,[(C(!0),$(J,null,R(p(b).bricks,(c,d)=>(C(),$("div",{key:d,class:"tetris-row"},[(C(!0),$(J,null,R(c,(m,S)=>(C(),$("div",{key:S,class:X(["tetris-brick",{take:m.take}])},u[0]||(u[0]=[n("div",{class:"brick-inner"},null,-1)]),2))),128))]))),128))]))}},Ye=ke("/images/gameover.svg"),Qe=ke("/images/rabit1.svg"),Xe={"大按钮，旋转按钮_6e4b":"Large button is the rotate button, or use one of the following: Arrow key↑, space bar, W key.","小按钮，控制左、_5fd0":"Small button to control left, right, and down directions. Note that the up direction is rotation. Or use one of the following: ↑←→↓ arrow keys on the keyboard, W A S D keys on the keyboard.",开始或者暂停:"Start or Pause",操作说明:"Instructions",重新开始:"Restart game"},qe={"大按钮，旋转按钮_6e4b":"大按钮，旋转按钮，或者下面其中一种：方向键↑、空格键、W按键。","小按钮，控制左、_5fd0":"小按钮，控制左、右、下方向，注意方向上为旋转。或者下面其中一种：键盘上的↑←→↓方向键、键盘上W A S D按键。",开始或者暂停:"开始或者暂停",操作说明:"操作说明",重新开始:"重新开始"},Ge={"大按钮，旋转按钮_6e4b":"大按鈕，旋轉按鈕，或者下面其中一種：方向鍵↑、空格鍵、W按鍵。","小按钮，控制左、_5fd0":"小按鈕，控制左、右、下方向，注意方向上為旋轉。或者下面其中一種：鍵盤上的↑←→↓方向鍵、鍵盤上W A S D按鍵。",开始或者暂停:"開始或者暫停",操作说明:"操作說明",重新开始:"重新開始"},he={en_US:Xe,zh_Hans_CN:qe,zh_Hant_HK:Ge},Me={class:"tetris-stage"},ye={class:"tetris-main"},xe={key:0,class:"gameover",src:Ye},et={class:"text-12 flex-1 text-right space-y-20 flex flex-col"},tt={class:"t-field"},st={class:"f-pixel"},ot={class:"t-field"},rt={class:"flex justify-end"},nt={class:"t-field"},lt={class:"f-pixel"},ct={class:"flex justify-end flex-1"},at={class:"t-field"},it={class:"f-pixel",style:{"font-size":"5px"}},ut={class:"op-stage"},dt={class:"pb-20 text-center"},ft={class:"flex items-center justify-between"},pt={class:"btns-side relative"},_t={class:"flex items-center whitespace-nowrap relative"},vt={class:"direct"},ht={class:"mt-40"},kt={class:"label select-none"},mt={class:"space-y-12"},gt={class:"flex items-center"},bt={class:"ml-20 select-none"},wt={class:"flex items-center"},Ct={class:"ml-20"},St={class:"flex items-center"},Lt={class:"ml-20"},$t={class:"flex items-center"},Bt={class:"ml-20"},Jt={__name:"tetris",setup(q){const k=t=>{const s=Re().$lang.value||"zh_Hans_CN",o=he[s]||he.zh_Hans_CN||{};return o[t]===void 0?t:o[t]};Ze({meta:[{name:"viewport",content:"user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"},{name:"apple-mobile-web-app-capable",content:"yes"}]});const l={S:"S",Z:"Z",L:"L",I:"I",O:"O",T:"T",J:"J"},I=[600,500,400,300,200,150,100,90,80,70,60,50],b=w(10),_=w(20),u=Y([]),c=Y({type:l.S,coords:[]}),d=Y({type:l.S,coords:[]}),m=w(I[0]),S=w(),g=w(!1),f=w(!0),T=w(0),L=w(!1),E=w(),G=w(),M=w(),me=Q(()=>I.findIndex(t=>t===m.value)+1),ge=Q(()=>{const t=[];for(let e=0;e<_.value;e++){const s=[];for(let o=0;o<b.value;o++){let r=!1;u[o]&&u[o][e]&&(r=!0),c.coords.find(a=>a.join("-")==="".concat(o,"-").concat(e))&&(r=!0),s.push({take:r})}t.push(s)}return{bricks:t}}),y=()=>{for(let t=0;t<b.value;t++)u[t]=[]},j=t=>{let e=b.value*-1,s=_.value*-1,o=b.value,r=_.value;const a=[];for(let i=0;i<t.length;i++){const h=t[i];a.push("".concat(h[0],"-").concat(h[1])),o>=h[0]&&(o=h[0]),r>=h[1]&&(r=h[1]),e<=h[0]&&(e=h[0]),s<=h[1]&&(s=h[1])}return{xMax:e,yMax:s,xMin:o,yMin:r,unfold:a.join(",")}},be=t=>{const{xMin:e,xMax:s}=j(t),o=Math.round((b.value-(s-e+1))/2)-e,r=[];for(let a=0;a<t.length;a++){const i=t[a];r.push([i[0]+o,i[1]])}return r},x=(t=0,e=0,s=!0)=>s?[[t,e],[t,e+1],[t+1,e+1],[t+1,e+2]]:[[t+1,e],[t+2,e],[t,e+1],[t+1,e+1]],ee=(t=0,e=0,s=!0)=>s?[[t+1,e],[t,e+1],[t+1,e+1],[t,e+2]]:[[t,e],[t+1,e],[t+1,e+1],[t+2,e+1]],te=(t=0,e=0,s=0)=>{switch(s){case 0:return[[t,e],[t,e+1],[t+1,e+1],[t+2,e+1]];case 1:return[[t,e],[t+1,e],[t,e+1],[t,e+2]];case 2:return[[t,e],[t+1,e],[t+2,e],[t+2,e+1]];case 3:return[[t+1,e],[t+1,e+1],[t,e+2],[t+1,e+2]]}},se=(t=0,e=0,s=0)=>{switch(s){case 0:return[[t+2,e],[t,e+1],[t+1,e+1],[t+2,e+1]];case 1:return[[t,e],[t,e+1],[t,e+2],[t+1,e+2]];case 2:return[[t,e],[t+1,e],[t+2,e],[t,e+1]];case 3:return[[t,e],[t+1,e],[t+1,e+1],[t+1,e+2]]}},oe=(t=0,e=0,s=!0)=>s?[[t,e],[t,e+1],[t,e+2],[t,e+3]]:[[t,e],[t+1,e],[t+2,e],[t+3,e]],we=(t=0,e=0)=>[[t,e],[t+1,e],[t,e+1],[t+1,e+1]],re=(t=0,e=0,s=0)=>{switch(s){case 0:return[[t+1,e],[t,e+1],[t+1,e+1],[t+1,e+2]];case 1:return[[t+1,e],[t,e+1],[t+1,e+1],[t+2,e+1]];case 2:return[[t,e],[t,e+1],[t+1,e+1],[t,e+2]];case 3:return[[t,e],[t+1,e],[t+2,e],[t+1,e+1]]}},Ce=(t,e)=>{const{xMin:s,yMin:o,yMax:r}=j(t),a=r-o>=2;return l.I===e?oe(s,o,!a):e===l.S?x(s,o,!a):ee(s,o,!a)},V=(t,e,s)=>{const{xMin:o,yMin:r,yMax:a,unfold:i}=j(e),h=a-r,U={0:1,1:2,2:1,3:2};let B=0;const D=s({xMin:o,yMin:r,yMax:a,unfold:i});for(let N=0;N<D.length;N++){const ze=typeof D[N].offset>"u"?U[D[N].side]:D[N].offset;if(h===ze){const de=D[N].coords;let fe=!0;for(let F=0;F<de.length;F++){const pe=de[F];if(i.includes("".concat(pe[0],"-").concat(pe[1]))){fe=!1;break}}if(fe){B=D[N].side;break}}}return B++,B>3&&(B=0),t===l.L?te(o,r,B):t===l.J?se(o,r,B):re(o,r,B)},Se=t=>V(l.L,t,({xMin:e,yMin:s})=>[{coords:[[e+1,s],[e+2,s]],side:0},{coords:[[e+1,s+1],[e+1,s+2]],side:1},{coords:[[e,s+1],[e+1,s+1]],side:2},{coords:[[e,s],[e,s+1]],side:3}]),Le=t=>V(l.J,t,({xMin:e,yMin:s})=>[{coords:[[e,s],[e+1,s]],side:0},{coords:[[e+1,s],[e+1,s+1]],side:1},{coords:[[e+1,s+1],[e+2,s+1]],side:2},{coords:[[e,s+1],[e,s+2]],side:3}]),$e=t=>V(l.T,t,({xMin:e,yMin:s})=>[{coords:[[e,s],[e,s+2]],side:0,offset:2},{coords:[[e,s],[e+2,s]],side:1,offset:1},{coords:[[e+1,s],[e+1,s+2]],side:2,offset:2},{coords:[[e,s+1],[e+2,s+1]],side:3,offset:1}]),Be=(t,e)=>{switch(t){case l.S:return x(0,0,e);case l.Z:return ee(0,0,e);case l.L:return te(0,0,e);case l.J:return se(0,0,e);case l.I:return oe(0,0,e);case l.O:return we(0,0);case l.T:return re(0,0,e)}},P=({type:t,coords:e})=>{let s=e;switch(t){case l.S:case l.Z:case l.I:s=Ce(e,c.type);break;case l.L:s=Se(e);break;case l.J:s=Le(e);break;case l.T:s=$e(e);break;default:s=e}for(let o=0;o<s.length;o++)if(!ne(s[o]))return e;return s},ne=t=>t[0]>=0&&t[0]<b.value&&t[1]<_.value&&!(u[t[0]]&&u[t[0]][t[1]]),le=({type:t,coords:e})=>{c.type=t;const s=be(e),{yMax:o}=j(s);for(let r=0;r<s.length;r++)s[r][1]=s[r][1]-o-1;c.coords=s},H=()=>{const t=parseInt(Date.now()*Math.random()),e=Object.keys(l),s=l[e[t%e.length]];let o=t%4;[l.S,l.Z,l.I].includes(s)&&(o=o>1);const r=Be(s,o);c.coords.length===0?(le({type:s,coords:r}),H()):d.coords.length===0?(d.type=s,d.coords=r):(le({...d}),d.type=s,d.coords=r)},Ee=t=>{t.forEach(e=>{e[0]>=0&&e[1]>=0&&(u[e[0]][e[1]]=!0)})},ce=(t=0,e=0)=>{let s=!0,o=t;for(;o<_.value;o++){s=!0;for(let r=0;r<b.value;r++)if(!u[r][o]){s=!1;break}if(s)break}if(s){T.value+=2**e*100;const r=Math.min(I.length-1,parseInt(T.value/(_.value*100)));console.log(r,parseInt(T.value/(_*100))),m.value=I[r];for(let i=0;i<b.value;i++)u[i][o]=!1;const a=JSON.parse(JSON.stringify(u));if(o>=0&&o<_.value)for(let i=o;i>=0;i--)for(let h=0;h<b.value;h++)u[h][i]=i-1>=0?a[h][i-1]:!1;ce(o,e+1)}},z=(t,e)=>{const s=[];g.value=!1,L.value=!L.value;for(let o=0;o<c.coords.length;o++){const r=c.coords[o];let a;if(t==="left"?a=[r[0]-1,r[1]]:t==="right"?a=[r[0]+1,r[1]]:t==="up"?a=[r[0],r[1]-1]:t==="down"&&(a=[r[0],r[1]+1]),ne(a))s.push(a);else{if(t==="down")if(a[1]<=0){g.value=!0,K();return}else Ee(c.coords),ce(),H();return}}c.coords=s};let W;const Z=()=>{f.value=!1,clearTimeout(W),W=setTimeout(()=>{Z(),z("down")},m.value)},ae=()=>{f.value?(g.value&&ie(),g.value=!1,(c.coords.length===0||d.coords.length===0)&&H(),Z()):K()},K=()=>{f.value=!0,clearTimeout(W)},ie=()=>{g.value=!1,c.coords=[],d.coords=[],y(),H(),Z(),f.value=!1,T.value=0,m.value=I[0]},ue=t=>{switch(t.code){case"KeyS":case"ArrowDown":z("down"),t.preventDefault();break;case"Space":case"KeyW":case"ArrowUp":c.coords=P(c),t.preventDefault();break;case"KeyA":case"ArrowLeft":z("left"),t.preventDefault();break;case"KeyD":case"ArrowRight":z("right"),t.preventDefault();break}};return Ae(()=>{y(),ae(),window.addEventListener("keydown",ue,{}),S.value.focus(),[{side:"left",ref:E,inter:null},{side:"right",ref:G,inter:null},{side:"down",ref:M,inter:null}].forEach(t=>{Ie(t.ref,()=>{clearInterval(t.inter),t.inter=Ke(()=>{z(t.side)},100)}),t.ref.value.$el.addEventListener("pointerup",()=>{clearInterval(t.inter)}),t.ref.value.$el.addEventListener("dblclick",e=>{e.preventDefault()},{passive:!1})})}),Te(()=>{K(),window.removeEventListener("keydown",ue)}),(t,e)=>{const s=Fe,o=Pe,r=Ve,a=We;return C(),Ne(a,{class:"p-tetris"},{default:O(()=>[n("div",{ref_key:"tetrisCore",ref:S,class:"tetris-core",tabindex:"-1"},[e[9]||(e[9]=n("div",{class:"t-logo"},[n("svg",{viewBox:"0 0 500 200",xmlns:"http://www.w3.org/2000/svg"},[n("g",null,[n("title",null,"Layer 1"),n("polyline",{stroke:"null",fill:"white",points:"110.58999633789062,290.98870849609375 110.58999633789062,291.6787109375 110.58999633789062,291.98870849609375 ",class:"cls-1"}),n("g",{id:"svg_4"},[n("path",{stroke:"null",fill:"white",d:"m161.70001,64.285l0,48.6c0,24 -15.36,37.32 -41.28,37.32c-11,0 -19.67,-2.88 -26,-7.92c-6.24,5 -15,7.92 -26,7.92c-25.8,0 -41.16,-13.32 -41.16,-37.32l0,-48.6l28.32,0l0,47.78c-0.07,10.08 3.77,15.22 12.34,15.22s12.36,-5.16 12.36,-15.24l0,-47.76l28.32,0l0,47.78c0,10.08 3.84,15.24 12.47,15.24s12.36,-5.16 12.36,-15.24l0,-47.78l28.27,0z",class:"cls-1"}),n("path",{stroke:"null",fill:"white",d:"m171.07001,63.585c0,-7.79 6.36,-13.79 16.32,-13.79s16.32,5.49 16.32,13.32c0,8.27 -6.36,14.27 -16.32,14.27s-16.32,-6 -16.32,-13.8zm2.76,19.08l27.09,0l0,65.62l-27.09,0l0,-65.62z",class:"cls-1"}),n("path",{stroke:"null",fill:"white",d:"m285.42001,110.865l0,37.42l-27.12,0l0,-32.74c0,-8.16 -3.12,-11.28 -8,-11.28c-5.51,0 -10.2,3.48 -10.2,13.2l0,30.82l-27.18,0l0,-65.62l25.8,0l0,6.48c5.15,-5.16 12.11,-7.68 19.79,-7.68c15.15,0 26.91,8.76 26.91,29.4z",class:"cls-1"}),n("path",{stroke:"null",fill:"white",d:"m342.30001,146.025c-4.2,2.4 -10.32,3.48 -16.68,3.48c-18.12,0 -28.67,-8.52 -28.67,-26.64l0,-55l27.11,0l0,18.42l13.44,0l0,19.8l-13.44,0l0,16.54c0,4.08 2.4,6.36 5.64,6.36a11.06,11.06 0 0 0 6.12,-1.8l6.48,18.84z",class:"cls-1"}),n("path",{stroke:"null",fill:"white",d:"m398.10001,124.665l14.16,14.28c-6.48,7 -15.72,10.56 -28.68,10.56c-24.12,0 -39.71,-14.52 -39.71,-34.08c0,-19.92 16.08,-34 37.67,-34c19.08,0 35.64,11.76 35.64,33.6l-44.88,8.64c2.16,4.08 6.24,5.76 12.12,5.76s9.36,-1.52 13.68,-4.76zm-27.6,-13.8l21,-4.08a10,10 0 0 0 -9.84,-6.84c-6.12,0 -10.32,3.48 -11.16,10.92z",class:"cls-1"}),n("path",{stroke:"null",fill:"white",d:"m472.74001,81.465l0,24a37.58,37.58 0 0 0 -6,-0.48c-8.16,0 -13.92,3.72 -13.92,14.16l0,29.14l-27.11,0l0,-65.62l25.79,0l0,7.08c4.8,-5.52 12.12,-8.28 21.24,-8.28z",class:"cls-1"})])])])],-1)),n("div",Me,[n("div",ye,[(C(!0),$(J,null,R(p(ge).bricks,(i,h)=>(C(),$("div",{key:h,class:"tetris-row"},[(C(!0),$(J,null,R(i,(U,B)=>(C(),$("div",{key:B,class:X(["tetris-brick",{take:U.take}])},e[5]||(e[5]=[n("div",{class:"brick-inner"},null,-1)]),2))),128))]))),128)),p(g)?(C(),$("img",xe)):De("",!0)]),n("div",et,[n("div",tt,[n("p",st,A(p(T)),1),e[6]||(e[6]=n("p",{class:"f-pixel"},"SCORE",-1))]),n("div",ot,[n("div",rt,[v(s,{coords:p(d).coords},null,8,["coords"])]),e[7]||(e[7]=n("p",{class:"f-pixel"},"NEXT",-1))]),n("div",nt,[n("p",lt,A(p(me)),1),e[8]||(e[8]=n("p",{class:"f-pixel"},"SPEED LEVEL",-1))]),n("div",ct,[n("img",{src:Qe,class:X(["h-30",{cartoon:!p(f)}])},null,2)]),n("div",at,[n("p",it,A(t.$brandName)+".com",1)])])]),n("div",ut,[n("div",dt,[v(o,{type:"danger",round:"",icon:p(f)?p(_e):p(ve),onClick:ae},null,8,["icon"]),v(o,{type:"danger",round:"",class:"bg-red-01",onClick:ie})]),n("div",ft,[n("div",pt,[v(o,{class:"btn-op z-1 -mb-4",onClick:e[0]||(e[0]=i=>p(c).coords=P(p(c)))}),n("div",_t,[v(o,{ref_key:"btnLeft",ref:E,class:"btn-op",onClick:e[1]||(e[1]=i=>z("left"))},null,512),n("div",vt,[v(r,null,{default:O(()=>[v(p(Oe))]),_:1}),v(r,null,{default:O(()=>[v(p(je))]),_:1}),v(r,null,{default:O(()=>[v(p(He))]),_:1}),v(r,null,{default:O(()=>[v(p(Je))]),_:1})]),v(o,{ref_key:"btnRight",ref:G,class:"btn-op",onClick:e[2]||(e[2]=i=>z("right"))},null,512)]),v(o,{ref_key:"btnDown",ref:M,class:"btn-op z-1 -mt-4",onClick:e[3]||(e[3]=i=>z("down"))},null,512)]),v(o,{class:"btn-sure",onClick:e[4]||(e[4]=i=>p(c).coords=P(p(c)))})])])],512),n("div",ht,[n("p",kt,A(k("操作说明")),1),n("div",mt,[n("div",gt,[v(o,{type:"danger",round:"",icon:p(f)?p(_e):p(ve)},null,8,["icon"]),n("p",bt,A(k("开始或者暂停")),1)]),n("div",wt,[v(o,{type:"danger",round:"",class:"bg-red-01"}),n("p",Ct,A(k("重新开始")),1)]),n("div",St,[v(o,{type:"danger",class:"w-32 min-w-32",round:""}),n("p",Lt,A(k("小按钮，控制左、_5fd0")),1)]),n("div",$t,[v(o,{type:"danger",class:"w-32 min-w-32",round:""}),n("p",Bt,A(k("大按钮，旋转按钮_6e4b")),1)])])])]),_:1})}}};export{Jt as default};

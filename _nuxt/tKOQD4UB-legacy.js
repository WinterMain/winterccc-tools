System.register(["./CPUHwStd-legacy.js"],(function(e,r){"use strict";var t,s,a,o,i,n,l,p,c,d,g,u,b,h,f,x,k,m,v,y,_,w,$,B,I,N,D;return{setters:[e=>{t=e.I,s=e.J,a=e.M,o=e.R,i=e.n,n=e.bk,l=e.bb,p=e.aB,c=e.bc,d=e.a0,g=e.aO,u=e.am,b=e.o,h=e.j,f=e.Y,x=e.d,k=e.a,m=e.Z,v=e.aa,y=e.t,_=e.D,w=e.c,$=e.w,B=e.a5,I=e.E,N=e.ac,D=e.ag}],execute:function(){var r=document.createElement("style");r.textContent='.el-progress{align-items:center;display:flex;line-height:1;position:relative}.el-progress__text{color:var(--el-text-color-regular);font-size:14px;line-height:1;margin-left:5px;min-width:50px}.el-progress__text i{display:block;vertical-align:middle}.el-progress--circle,.el-progress--dashboard{display:inline-block}.el-progress--circle .el-progress__text,.el-progress--dashboard .el-progress__text{left:0;margin:0;position:absolute;text-align:center;top:50%;transform:translateY(-50%);width:100%}.el-progress--circle .el-progress__text i,.el-progress--dashboard .el-progress__text i{display:inline-block;vertical-align:middle}.el-progress--without-text .el-progress__text{display:none}.el-progress--without-text .el-progress-bar{display:block;margin-right:0;padding-right:0}.el-progress--text-inside .el-progress-bar{margin-right:0;padding-right:0}.el-progress.is-success .el-progress-bar__inner{background-color:var(--el-color-success)}.el-progress.is-success .el-progress__text{color:var(--el-color-success)}.el-progress.is-warning .el-progress-bar__inner{background-color:var(--el-color-warning)}.el-progress.is-warning .el-progress__text{color:var(--el-color-warning)}.el-progress.is-exception .el-progress-bar__inner{background-color:var(--el-color-danger)}.el-progress.is-exception .el-progress__text{color:var(--el-color-danger)}.el-progress-bar{box-sizing:border-box;flex-grow:1}.el-progress-bar__outer{background-color:var(--el-border-color-lighter);border-radius:100px;height:6px;overflow:hidden;position:relative;vertical-align:middle}.el-progress-bar__inner{background-color:var(--el-color-primary);border-radius:100px;height:100%;left:0;line-height:1;position:absolute;text-align:right;top:0;transition:width .6s ease;white-space:nowrap}.el-progress-bar__inner:after{content:"";display:inline-block;height:100%;vertical-align:middle}.el-progress-bar__inner--indeterminate{animation:indeterminate 3s infinite;transform:translateZ(0)}.el-progress-bar__inner--striped{background-image:linear-gradient(45deg,rgba(0,0,0,.1) 25%,rgba(0,0,0,0) 0,rgba(0,0,0,0) 50%,rgba(0,0,0,.1) 0,rgba(0,0,0,.1) 75%,rgba(0,0,0,0) 0,rgba(0,0,0,0));background-size:1.25em 1.25em}.el-progress-bar__inner--striped.el-progress-bar__inner--striped-flow{animation:striped-flow 3s linear infinite}.el-progress-bar__innerText{color:#fff;display:inline-block;font-size:12px;margin:0 5px;vertical-align:middle}@keyframes progress{0%{background-position:0 0}to{background-position:32px 0}}@keyframes indeterminate{0%{left:-100%}to{left:100%}}@keyframes striped-flow{0%{background-position:-100%}to{background-position:100%}}\n',document.head.appendChild(r);const F=t({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:e=>e>=0&&e<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:Boolean,duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:s(String),default:"round"},textInside:Boolean,width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:s([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:s(Function),default:e=>`${e}%`}}),S=a({name:"ElProgress"}),T=a({...S,props:F,setup(e){const r=e,t={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},s=o("progress"),a=i((()=>{const e={width:`${r.percentage}%`,animationDuration:`${r.duration}s`},t=P(r.percentage);return t.includes("gradient")?e.background=t:e.backgroundColor=t,e})),N=i((()=>(r.strokeWidth/r.width*100).toFixed(1))),D=i((()=>["circle","dashboard"].includes(r.type)?Number.parseInt(""+(50-Number.parseFloat(N.value)/2),10):0)),F=i((()=>{const e=D.value,t="dashboard"===r.type;return`\n          M 50 50\n          m 0 ${t?"":"-"}${e}\n          a ${e} ${e} 0 1 1 0 ${t?"-":""}${2*e}\n          a ${e} ${e} 0 1 1 0 ${t?"":"-"}${2*e}\n          `})),S=i((()=>2*Math.PI*D.value)),T=i((()=>"dashboard"===r.type?.75:1)),z=i((()=>-1*S.value*(1-T.value)/2+"px")),E=i((()=>({strokeDasharray:`${S.value*T.value}px, ${S.value}px`,strokeDashoffset:z.value}))),W=i((()=>({strokeDasharray:`${S.value*T.value*(r.percentage/100)}px, ${S.value}px`,strokeDashoffset:z.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"}))),C=i((()=>{let e;return e=r.color?P(r.percentage):t[r.status]||t.default,e})),L=i((()=>"warning"===r.status?n:"line"===r.type?"success"===r.status?l:p:"success"===r.status?c:d)),M=i((()=>"line"===r.type?12+.4*r.strokeWidth:.111111*r.width+2)),j=i((()=>r.format(r.percentage))),P=e=>{var t;const{color:s}=r;if(g(s))return s(e);if(u(s))return s;{const r=function(e){const r=100/e.length;return e.map(((e,t)=>u(e)?{color:e,percentage:(t+1)*r}:e)).sort(((e,r)=>e.percentage-r.percentage))}(s);for(const t of r)if(t.percentage>e)return t.color;return null==(t=r[r.length-1])?void 0:t.color}};return(e,r)=>(b(),h("div",{class:f([x(s).b(),x(s).m(e.type),x(s).is(e.status),{[x(s).m("without-text")]:!e.showText,[x(s).m("text-inside")]:e.textInside}]),role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"},["line"===e.type?(b(),h("div",{key:0,class:f(x(s).b("bar"))},[k("div",{class:f(x(s).be("bar","outer")),style:m({height:`${e.strokeWidth}px`})},[k("div",{class:f([x(s).be("bar","inner"),{[x(s).bem("bar","inner","indeterminate")]:e.indeterminate},{[x(s).bem("bar","inner","striped")]:e.striped},{[x(s).bem("bar","inner","striped-flow")]:e.stripedFlow}]),style:m(x(a))},[(e.showText||e.$slots.default)&&e.textInside?(b(),h("div",{key:0,class:f(x(s).be("bar","innerText"))},[v(e.$slots,"default",{percentage:e.percentage},(()=>[k("span",null,y(x(j)),1)]))],2)):_("v-if",!0)],6)],6)],2)):(b(),h("div",{key:1,class:f(x(s).b("circle")),style:m({height:`${e.width}px`,width:`${e.width}px`})},[(b(),h("svg",{viewBox:"0 0 100 100"},[k("path",{class:f(x(s).be("circle","track")),d:x(F),stroke:`var(${x(s).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":e.strokeLinecap,"stroke-width":x(N),fill:"none",style:m(x(E))},null,14,["d","stroke","stroke-linecap","stroke-width"]),k("path",{class:f(x(s).be("circle","path")),d:x(F),stroke:x(C),fill:"none",opacity:e.percentage?1:0,"stroke-linecap":e.strokeLinecap,"stroke-width":x(N),style:m(x(W))},null,14,["d","stroke","opacity","stroke-linecap","stroke-width"])]))],6)),!e.showText&&!e.$slots.default||e.textInside?_("v-if",!0):(b(),h("div",{key:2,class:f(x(s).e("text")),style:m({fontSize:`${x(M)}px`})},[v(e.$slots,"default",{percentage:e.percentage},(()=>[e.status?(b(),w(x(I),{key:1},{default:$((()=>[(b(),w(B(x(L))))])),_:1})):(b(),h("span",{key:0},y(x(j)),1))]))],6))],10,["aria-valuenow"]))}});e("E",D(N(T,[["__file","progress.vue"]])))}}}));

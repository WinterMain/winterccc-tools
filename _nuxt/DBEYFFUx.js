import{a as p,A as m,b as i,t as l,aO as d,u as f,ak as _,I as g,al as x,o as v,cR as F}from"./fcEDHlqk.js";import{u as b}from"./j-RNux4N.js";const S={class:"c-page-title"},y={class:"p-title"},h={class:"text-12 text-quaternary"},k={__name:"PageTitle",props:{currentFunc:{type:Object,default:()=>{}}},setup(t){return(a,n)=>(p(),m("div",S,[i("p",y,l(t.currentFunc.title||t.currentFunc.name),1),i("p",h,l(t.currentFunc.description),1)]))}};function A(){var u,r;const t=d(),{menus:a}=b(),n=f(),s=_(),e=g(()=>F(a,t.name)||{});return x({title:e.value.title+n.$brand.websiteSuffix,ogTitle:e.value.title+n.$brand.websiteSuffix,description:e.value.description,ogDescription:e.value.description}),s.setCategory(((r=(u=e.value)==null?void 0:u.parent)==null?void 0:r.name)||""),v(()=>{setTimeout(()=>{var c,o;s.setCategory(((o=(c=e.value)==null?void 0:c.parent)==null?void 0:o.name)||"")},200)}),{currentFunc:e}}export{k as _,A as u};

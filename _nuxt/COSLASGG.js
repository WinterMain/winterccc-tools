import{o as p,j as m,a as i,t as l,at as d,u as f,z as x,n as _,A as g,q as v,cx as F}from"./mr6caFf0.js";import{u as S}from"./jWIpVdzN.js";const b={class:"c-page-title"},y={class:"p-title"},h={class:"text-12 text-quaternary"},A={__name:"PageTitle",props:{currentFunc:{type:Object,default:()=>{}}},setup(t){return(s,n)=>(p(),m("div",b,[i("p",y,l(t.currentFunc.title||t.currentFunc.name),1),i("p",h,l(t.currentFunc.description),1)]))}};function B(){var u,r;const t=d(),{menus:s}=S(),n=f(),a=x(),e=_(()=>F(s,t.name)||{});return g({title:e.value.title+n.$brand.websiteSuffix,ogTitle:e.value.title+n.$brand.websiteSuffix,description:e.value.description,ogDescription:e.value.description}),a.setCategory(((r=(u=e.value)==null?void 0:u.parent)==null?void 0:r.name)||""),v(()=>{setTimeout(()=>{var c,o;a.setCategory(((o=(c=e.value)==null?void 0:c.parent)==null?void 0:o.name)||"")},200)}),{currentFunc:e}}export{A as _,B as u};

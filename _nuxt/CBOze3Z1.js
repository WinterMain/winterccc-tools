import{I as s,c4 as i}from"./gDhoqvA1.js";const l={props:{text:{type:String,default:""},closeTag:{type:String,default:"/"},containerTag:{type:String,default:"div"}},setup(a,{slots:r}){const o=s(()=>{const c=a.text,n=RegExp("\\[(.+?)\\](.*?)\\[\\".concat(a.closeTag,"\\1\\]"),"g");return c.replace(n,t=>"#@#".concat(t,"#@#")).split("#@#").map(t=>{const e=n.exec(t);return e?[e[2],e[1]]:[t]})});return()=>i(a.containerTag,{class:["c-common-language",a.containerTag==="div"&&"inline-block"]},o.value.map(c=>{const n=c[0],t=c[1],e=t&&r[t];return e?e({value:n}):n}))}};export{l as _};

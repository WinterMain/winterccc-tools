import{r as g,a as f,A as m,x as _}from"./dvdgqlpy.js";const y={__name:"Output",setup(v,{expose:t}){const s=g();function r(){const e=Array.from(arguments),a=e.slice(0,e.length-1),u=e[e.length-1],p=a.map(n=>{const i=(typeof n<"u"||n!==null?n:"").toString();return"".concat(i.replace(/\n/g,"<br>").replace(/\t/g,'<span class="o-tab"></span>').replace(/ /g,'<span class="o-space"></span>'))});s.value.innerHTML="".concat(s.value.innerHTML,'<div class="out-text ').concat(u,'">').concat(p.join('<span class="o-space"></span>'),"</div>"),_(()=>{s.value.scrollTop=s.value.scrollHeight})}function o(){const e=Array.from(arguments);r(...e,"success")}function c(){const e=Array.from(arguments);r(...e,"error")}function l(){s.value.innerHTML=""}return t({success:o,error:c,log:r,clear:l}),(e,a)=>(f(),m("div",{ref_key:"outputEl",ref:s,class:"c-output-area"},null,512))}};export{y as _};

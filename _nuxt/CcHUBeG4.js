import{_ as w}from"./CGdP4FPL.js";import{u as x}from"./BpTTrgbY.js";import{u as C}from"./DGZdupqm.js";import{ac as H,ae as B,aL as b,K as v,M as y,o as m,c as d,F as k,j as E,e as M,w as N,a as h,N as p,t as L,f as _}from"./IrXStpLt.js";const A={class:"c-common-left-menu"},W={__name:"LeftMenu",setup(i){const{menus:l}=x(),e=C(),{category:a}=H(e),r=B();b();const t=(s,n)=>{e.setCategory(s.name)};return v(()=>r.hash,s=>{e.setCategory(s.replace("#","").toLowerCase())}),y(()=>{}),(s,n)=>{const c=w;return m(),d("div",A,[(m(!0),d(k,null,E(_(l),(o,u)=>(m(),M(c,{key:u,class:p(["menu-item",{active:_(a)===o.name}]),to:"/#"+o.name,onClick:f=>t(o)},{default:N(()=>[h("i",{class:p(["iconfont",o.icon])},null,2),h("p",null,L(o.title),1)]),_:2},1032,["to","class","onClick"]))),128))])}}};function j(i){const l=()=>{if(!i)return;const e=i.value||i;if(!e||!e.getElementsByClassName)return;const a=e.getElementsByClassName("left-content")[0],r=e.getElementsByClassName("right-content")[0],t=a.getElementsByClassName("fixed-area")[0],s=80;if(t&&t.clientHeight&&t.clientWidth>0)if(r.offsetHeight-50>t.offsetHeight){const n=a.getBoundingClientRect(),c=t.getBoundingClientRect(),o=n.top,u=t.clientHeight+o;if(o<0&&u<window.innerHeight){const f=c.width;t.setAttribute("fixed",!0),t.style.width=f+"px";const g=()=>Math.min(n.bottom,window.innerHeight)-s>c.height?(t.style.bottom="auto",t.style.top=s+"px",!0):!1;n.bottom<window.innerHeight?g()||(t.style.top="auto",t.style.bottom=window.innerHeight-n.bottom+"px"):g()||(t.style.top="auto",t.style.bottom="10px")}else t.removeAttribute("fixed")}else r.offsetHeight-50<=t.offsetHeight&&t.removeAttribute("fixed")};y(()=>{document.addEventListener("scroll",l)})}export{W as _,j as u};

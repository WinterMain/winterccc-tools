import{an as w,a9 as x,aR as C,bi as b,z as H,o as y,a as m,D as d,ac as B,ab as v,c as k,w as E,b as h,F as p,t as N,e as _,aN as M}from"./BT5G2MOW.js";import{u as R}from"./BUO4A4cH.js";const A={class:"c-common-left-menu"},z={__name:"LeftMenu",setup(a){const{menus:l}=R(),e=w(),{category:i}=x(e),c=C();b();const t=(s,n)=>{e.setCategory(s.name)};return H(()=>c.hash,s=>{e.setCategory(s.replace("#","").toLowerCase())}),y(()=>{}),(s,n)=>{const r=M;return m(),d("div",A,[(m(!0),d(B,null,v(_(l),(o,u)=>(m(),k(r,{key:u,class:p(["menu-item",{active:_(i)===o.name}]),to:"/#"+o.name,onClick:f=>t(o)},{default:E(()=>[h("i",{class:p(["iconfont",o.icon])},null,2),h("p",null,N(o.title),1)]),_:2},1032,["to","class","onClick"]))),128))])}}};function D(a){const l=()=>{if(!a)return;const e=a.value||a;if(!e||!e.getElementsByClassName)return;const i=e.getElementsByClassName("left-content")[0],c=e.getElementsByClassName("right-content")[0],t=i.getElementsByClassName("fixed-area")[0],s=80;if(t&&t.clientHeight&&t.clientWidth>0)if(c.offsetHeight-50>t.offsetHeight){const n=i.getBoundingClientRect(),r=t.getBoundingClientRect(),o=n.top,u=t.clientHeight+o;if(o<0&&u<window.innerHeight){const f=r.width;t.setAttribute("fixed",!0),t.style.width=f+"px";const g=()=>Math.min(n.bottom,window.innerHeight)-s>r.height?(t.style.bottom="auto",t.style.top=s+"px",!0):!1;n.bottom<window.innerHeight?g()||(t.style.top="auto",t.style.bottom=window.innerHeight-n.bottom+"px"):g()||(t.style.top="auto",t.style.bottom="10px")}else t.removeAttribute("fixed")}else c.offsetHeight-50<=t.offsetHeight&&t.removeAttribute("fixed")};y(()=>{document.addEventListener("scroll",l)})}export{z as _,D as u};

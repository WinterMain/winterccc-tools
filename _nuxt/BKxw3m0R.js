import{E as T}from"./BLz4mDo_.js";import{r as C,u as x,L as b,c_ as m,a as r,D as i,d as $,w as g,e as u,c$ as M,b as t,a3 as U,ac as N,ab as z,t as p,c as E,aO as K,aN as R,aQ as B,an as F,a9 as q,$ as D,F as H,bi as L}from"./DXUkUyzH.js";import{u as I}from"./IEeyHE-V.js";import{_ as O}from"./JZypKlk3.js";const P={搜索:"Search"},Q={搜索:"搜索"},j={搜索:"搜索"},S={en_US:P,zh_Hans_CN:Q,zh_Hant_HK:j},G={class:"c-search-tool"},J={class:"search-list"},W={key:0,class:"empty",src:O},X=["href"],Y={class:"font-w500 text-primary"},Z={class:"description text-12 text-tertiary"},ee={class:"font-w500 text-primary"},se={class:"description text-12 text-tertiary"},te={__name:"SearchTool",setup(w){const d=s=>{const l=x().$lang.value||"zh_Hans_CN",f=S[l]||S.zh_Hans_CN||{};return f[s]===void 0?s:f[s]},a=C(""),_=C(!1),{menus:h}=I(),v=x(),n=b(()=>{const s=[];for(let e=0;e<h.length;e++)h[e].subMenus.forEach(l=>{(!l.brand||l.brand.includes(v.$brandName))&&s.push(l)});return s}),c=b(()=>(m(a.value),a.value?n.value.filter(s=>m(s.title).includes(a.value)||m(s.description).includes(a.value)):n.value));return(s,e)=>{const l=T,f=R,V=B;return r(),i("div",G,[$(V,{visible:_.value,"onUpdate:visible":e[3]||(e[3]=o=>_.value=o),width:"240",placement:"bottom-end","popper-class":"c-search-tool-popover",trigger:"click","show-arrow":!1},{reference:g(()=>[$(l,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o),style:{width:"240px"},size:"small",placeholder:d("搜索"),"prefix-icon":u(M)},null,8,["modelValue","placeholder","prefix-icon"])]),default:g(()=>[t("div",J,[u(c).length===0?(r(),i("img",W)):U("",!0),(r(!0),i(N,null,z(u(c),(o,y)=>(r(),i(N,{key:y},[o.href?(r(),i("a",{key:0,href:o.href,target:"_blank",rel:"noopener noreferrer",class:"search-item",onClick:e[1]||(e[1]=A=>_.value=!1)},[t("p",Y,p(o.title),1),t("p",Z,p(o.description),1)],8,X)):(r(),E(f,{key:1,class:"search-item",to:("getRouteName"in s?s.getRouteName:u(K))(o),onClick:e[2]||(e[2]=A=>_.value=!1)},{default:g(()=>[t("p",ee,p(o.title),1),t("p",se,p(o.description),1)]),_:2},1032,["to"]))],64))),128))])]),_:1},8,["visible"])])}}},oe={万花筒工具箱:"A Kaleidoscope Toolbox",全部:"All",我的收藏:"Favorite","没有找到工具？提_ff19":"Not found tool? Make a request"},ne={万花筒工具箱:"万花筒工具箱",全部:"全部",我的收藏:"我的收藏","没有找到工具？提_ff19":"没有找到工具？提个需求吧"},ae={万花筒工具箱:"萬花筒工具箱",全部:"全部",我的收藏:"我的收藏","没有找到工具？提_ff19":"沒有找到工具？提個需求吧"},k={en_US:oe,zh_Hans_CN:ne,zh_Hant_HK:ae},le={class:"c-common-slogan"},re={class:"flex items-center"},ce={class:"slogan-text"},ie={class:"slogan-nav"},_e=["onClick"],ue=["href"],ve={__name:"Slogan",setup(w){const d=n=>{const s=x().$lang.value||"zh_Hans_CN",e=k[s]||k.zh_Hans_CN||{};return e[n]===void 0?n:e[n]},a=F(),{nav:_}=q(a),h=D([{title:d("全部"),icon:"iconfont icon-quanbu",active:"text-theme",val:"all"},{title:d("我的收藏"),icon:"iconfont icon-unstore",active:"text-orange-01 icon-store",val:"like"}]),v=n=>{a.setNav(n),L().push("/")};return(n,c)=>{const s=te;return r(),i("div",le,[t("div",re,[c[0]||(c[0]=t("i",{class:"iconfont icon-wonhot"},null,-1)),t("p",ce,p(d("万花筒工具箱")),1),t("div",ie,[(r(!0),i(N,null,z(u(h),(e,l)=>(r(),i("div",{key:l,class:H(["nav-item",{active:e.val===u(_)}]),onClick:f=>v(e.val)},[t("i",{class:H([e.icon,e.val===u(_)?e.active:""])},null,2),t("span",null,p(e.title),1)],10,_e))),128))])]),c[1]||(c[1]=t("div",{class:"flex-1"},null,-1)),t("a",{href:n.$brand.issue,class:"no-tool mr-20",target:"_blank",rel:"noopener noreferrer"},p(d("没有找到工具？提_ff19")),9,ue),$(s)])}}};export{ve as _};

import{E as T}from"./BxTCji6M.js";import{r as C,u as x,I as H,d0 as m,a as r,A as i,d as $,w as g,e as u,d1 as K,b as t,a0 as M,a9 as N,a8 as z,t as p,c as U,aL as B,aK as E,aN as R,ak as q,a6 as F,X as I,B as S,bf as L}from"./dvdgqlpy.js";import{u as D}from"./DDBMNXPq.js";import{_ as P}from"./Cuaud8yA.js";const X={搜索:"Search"},j={搜索:"搜索"},G={搜索:"搜索"},b={en_US:X,zh_Hans_CN:j,zh_Hant_HK:G},J={class:"c-search-tool"},O={class:"search-list"},Q={key:0,class:"empty",src:P},W=["href"],Y={class:"font-w500 text-primary"},Z={class:"description text-12 text-tertiary"},ee={class:"font-w500 text-primary"},se={class:"description text-12 text-tertiary"},te={__name:"SearchTool",setup(w){const d=s=>{const l=x().$lang.value||"zh_Hans_CN",f=b[l]||b.zh_Hans_CN||{};return f[s]===void 0?s:f[s]},a=C(""),_=C(!1),{menus:h}=D(),v=x(),n=H(()=>{const s=[];for(let e=0;e<h.length;e++)h[e].subMenus.forEach(l=>{(!l.brand||l.brand.includes(v.$brandName))&&s.push(l)});return s}),c=H(()=>(m(a.value),a.value?n.value.filter(s=>m(s.title).includes(a.value)||m(s.description).includes(a.value)):n.value));return(s,e)=>{const l=T,f=E,V=R;return r(),i("div",J,[$(V,{visible:_.value,"onUpdate:visible":e[3]||(e[3]=o=>_.value=o),width:"240",placement:"bottom-end","popper-class":"c-search-tool-popover",trigger:"click","show-arrow":!1},{reference:g(()=>[$(l,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o),style:{width:"240px"},size:"small",placeholder:d("搜索"),"prefix-icon":u(K)},null,8,["modelValue","placeholder","prefix-icon"])]),default:g(()=>[t("div",O,[u(c).length===0?(r(),i("img",Q)):M("",!0),(r(!0),i(N,null,z(u(c),(o,A)=>(r(),i(N,{key:A},[o.href?(r(),i("a",{key:0,href:o.href,target:"_blank",rel:"noopener noreferrer",class:"search-item",onClick:e[1]||(e[1]=y=>_.value=!1)},[t("p",Y,p(o.title),1),t("p",Z,p(o.description),1)],8,W)):(r(),U(f,{key:1,class:"search-item",to:("getRouteName"in s?s.getRouteName:u(B))(o),onClick:e[2]||(e[2]=y=>_.value=!1)},{default:g(()=>[t("p",ee,p(o.title),1),t("p",se,p(o.description),1)]),_:2},1032,["to"]))],64))),128))])]),_:1},8,["visible"])])}}},oe={万花筒工具箱:"A Kaleidoscope Toolbox",全部:"All",我的收藏:"Favorite","没有找到工具？提_ff19":"Not found tool? Make a request"},ne={万花筒工具箱:"万花筒工具箱",全部:"全部",我的收藏:"我的收藏","没有找到工具？提_ff19":"没有找到工具？提个需求吧"},ae={万花筒工具箱:"萬花筒工具箱",全部:"全部",我的收藏:"我的收藏","没有找到工具？提_ff19":"沒有找到工具？提個需求吧"},k={en_US:oe,zh_Hans_CN:ne,zh_Hant_HK:ae},le={class:"c-common-slogan"},re={class:"flex items-center"},ce={class:"slogan-text"},ie={class:"slogan-nav"},_e=["onClick"],ue=["href"],ve={__name:"Slogan",setup(w){const d=n=>{const s=x().$lang.value||"zh_Hans_CN",e=k[s]||k.zh_Hans_CN||{};return e[n]===void 0?n:e[n]},a=q(),{nav:_}=F(a),h=I([{title:d("全部"),icon:"iconfont icon-quanbu",active:"text-theme",val:"all"},{title:d("我的收藏"),icon:"iconfont icon-unstore",active:"text-orange-01 icon-store",val:"like"}]),v=n=>{a.setNav(n),L().push("/")};return(n,c)=>{const s=te;return r(),i("div",le,[t("div",re,[c[0]||(c[0]=t("i",{class:"iconfont icon-wonhot"},null,-1)),t("p",ce,p(d("万花筒工具箱")),1),t("div",ie,[(r(!0),i(N,null,z(u(h),(e,l)=>(r(),i("div",{key:l,class:S(["nav-item",{active:e.val===u(_)}]),onClick:f=>v(e.val)},[t("i",{class:S([e.icon,e.val===u(_)?e.active:""])},null,2),t("span",null,p(e.title),1)],10,_e))),128))])]),c[1]||(c[1]=t("div",{class:"flex-1"},null,-1)),t("a",{href:n.$brand.issue,class:"no-tool mr-20",target:"_blank",rel:"noopener noreferrer"},p(d("没有找到工具？提_ff19")),9,ue),$(s)])}}};export{ve as _};

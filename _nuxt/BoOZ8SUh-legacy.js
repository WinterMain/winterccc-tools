(function(){System.register(["./CBJWmNg2-legacy.js","./Cn0fzFuX-legacy.js"],(function(exports,module){"use strict";var unpackMeta,defineStore,useHead;return{setters:[e=>{unpackMeta=e.cu,defineStore=e.cv},e=>{useHead=e.u}],execute:function(){function useSeoMeta(e,t){const{title:a,titleTemplate:r,...n}=e;return useHead({title:a,titleTemplate:r,_flatMeta:n},{...t,transform(e){const t=unpackMeta({...e._flatMeta});return delete e._flatMeta,{...e,meta:t}}})}function upperCase(e){return(e||"").toUpperCase()}function lowerCase(e){return(e||"").toLowerCase()}exports({a:useSeoMeta,b:upperCase,l:lowerCase,p:parseJSON,v:valToArray});const getRouteName=exports("g",(e=>(e.name||e.title).toLowerCase())),getCurrentFunc=exports("c",((e,t)=>{for(let a=0;a<e.length;a++){if(getRouteName(e[a])===t)return e[a];for(let r=0;r<e[a].subMenus.length;r++)if(getRouteName(e[a].subMenus[r])===t)return{...e[a].subMenus[r],parent:e[a]}}}));function valToArray(e){return void 0===e||e instanceof Array?e:[e]}function parseJSON(value,illegalOrCallBack){try{return value?JSON.parse(value):""}catch(error){try{let x;return eval(`x = ${value}`),x}catch(e){}if(!value)return"";if("function"!=typeof illegalOrCallBack)return illegalOrCallBack;illegalOrCallBack()}}const useMainStore=exports("u",defineStore("main",{state:()=>({category:"browserplugin",nav:"all",likes:[],donateCoins:[{coin:"BTC",address:"1Q6ZDFC3FueXY3JocmeMqgiSsGGtppbvz2",icon:"/images/btc.png"},{coin:"ETH",address:"0xff6FC30033269845d196cB48F6a0660598D218D8",icon:"/images/eth.png"}]}),getters:{},actions:{setCategory(e){this.category=e||"browserplugin"},setNav(e){this.nav=e},setLikes(e){this.likes=valToArray(e)||[],localStorage.SUPER_TOOLS_LIKE=JSON.stringify(this.likes)},initLikes(){try{{const e=JSON.parse(localStorage.SUPER_TOOLS_LIKE);this.likes=valToArray(e)||[]}}catch(e){}}}}))}}}))})();

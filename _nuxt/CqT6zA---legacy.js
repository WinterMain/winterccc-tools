System.register(["./DMzSBC0q-legacy.js"],(function(e,t){"use strict";var r,u,n;return{setters:[e=>{r=e.au,u=e.bA,n=e.bB}],execute:function(){e("u",((e,t)=>{const i={},l=r([]);return{children:l,addChild:r=>{i[r.uid]=r,l.value=((e,t,r)=>u(e.subTree).filter((e=>{var r;return n(e)&&(null==(r=e.type)?void 0:r.name)===t&&!!e.component})).map((e=>e.component.uid)).map((e=>r[e])).filter((e=>!!e)))(e,t,i)},removeChild:e=>{delete i[e],l.value=l.value.filter((t=>t.uid!==e))}}}))}}}));

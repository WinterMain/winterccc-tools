import{aA as _,aM as w,aD as b,aE as I,aL as m,aG as y,bW as c,aO as P,az as g,aQ as A,U as E}from"./DdpXWx5W.js";function T(n){return n}function C(n,r,e){switch(e.length){case 0:return n.call(r);case 1:return n.call(r,e[0]);case 2:return n.call(r,e[0],e[1]);case 3:return n.call(r,e[0],e[1],e[2])}return n.apply(r,e)}var N=800,G=16,K=Date.now;function M(n){var r=0,e=0;return function(){var a=K(),t=G-(a-e);if(e=a,t>0){if(++r>=N)return arguments[0]}else r=0;return n.apply(void 0,arguments)}}function $(n){return function(){return n}}var f=function(){try{var n=_(Object,"defineProperty");return n({},"",{}),n}catch(r){}}(),F=f?function(n,r){return f(n,"toString",{configurable:!0,enumerable:!1,value:$(r),writable:!0})}:T,L=M(F),R=9007199254740991,z=/^(?:0|[1-9]\d*)$/;function S(n,r){var e=typeof n;return r=r==null?R:r,!!r&&(e=="number"||e!="symbol"&&z.test(n))&&n>-1&&n%1==0&&n<r}function H(n,r,e){r=="__proto__"&&f?f(n,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):n[r]=e}var U=Object.prototype,D=U.hasOwnProperty;function X(n,r,e){var a=n[r];(!(D.call(n,r)&&w(a,e))||e===void 0&&!(r in n))&&H(n,r,e)}var h=Math.max;function q(n,r,e){return r=h(r===void 0?n.length-1:r,0),function(){for(var a=arguments,t=-1,u=h(a.length-r,0),o=Array(u);++t<u;)o[t]=a[r+t];t=-1;for(var i=Array(r+1);++t<r;)i[t]=a[t];return i[r]=e(o),C(n,this,i)}}var B=9007199254740991;function Q(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=B}var W="[object Arguments]";function p(n){return b(n)&&I(n)==W}var O=Object.prototype,J=O.hasOwnProperty,Y=O.propertyIsEnumerable,x=p(function(){return arguments}())?p:function(n){return b(n)&&J.call(n,"callee")&&!Y.call(n,"callee")};function Z(n,r){for(var e=-1,a=r.length,t=n.length;++e<a;)n[t+e]=r[e];return n}var v=m?m.isConcatSpreadable:void 0;function V(n){return y(n)||x(n)||!!(v&&n&&n[v])}function k(n,r,e,a,t){var u=-1,o=n.length;for(e||(e=V),t||(t=[]);++u<o;){var i=n[u];e(i)?Z(t,i):t[t.length]=i}return t}function j(n){var r=n==null?0:n.length;return r?k(n):[]}function nn(n){return L(q(n,void 0,j),n+"")}function rn(n,r){return n!=null&&r in Object(n)}function en(n,r,e){r=c(r,n);for(var a=-1,t=r.length,u=!1;++a<t;){var o=P(r[a]);if(!(u=n!=null&&e(n,o)))break;n=n[o]}return u||++a!=t?u:(t=n==null?0:n.length,!!t&&Q(t)&&S(o,t)&&(y(n)||x(n)))}function tn(n,r){return n!=null&&en(n,r,rn)}function an(n,r,e,a){if(!g(n))return n;r=c(r,n);for(var t=-1,u=r.length,o=u-1,i=n;i!=null&&++t<u;){var s=P(r[t]),l=e;if(s==="__proto__"||s==="constructor"||s==="prototype")return n;if(t!=o){var d=i[s];l=void 0,l===void 0&&(l=g(d)?d:S(r[t+1])?[]:{})}X(i,s,l),i=i[s]}return n}function un(n,r,e){for(var a=-1,t=r.length,u={};++a<t;){var o=r[a],i=A(n,o);e(i,o)&&an(u,c(o,n),i)}return u}function on(n,r){return un(n,r,function(e,a){return tn(n,a)})}var sn=nn(function(n,r){return n==null?{}:on(n,r)});const ln=E({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),cn=n=>sn(ln,n),dn=Symbol("formContextKey"),mn=Symbol("formItemContextKey");export{x as a,S as b,Z as c,T as d,dn as e,mn as f,tn as h,Q as i,sn as p,cn as u};

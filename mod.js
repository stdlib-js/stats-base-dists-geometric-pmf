// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,g,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,v,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,c,f,s,l,p,g,y,v;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)c+=t;else{if(e=void 0!==t.precision,!(t=U(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,E(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,g=t.width,y=t.padRight,v=void 0,(v=g-p.length)<0?p:p=y?p+m(v):m(v)+p)),c+=t.arg||"",f+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,n,t,i;for(n=[],i=0,t=I.exec(r);t;)(e=r.slice(i,I.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=I.lastIndex,t=I.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function F(r){var e,n;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return S.apply(null,e)}var N=Object.prototype,j=N.toString,T=N.__defineGetter__,O=N.__defineSetter__,V=N.__lookupGetter__,$=N.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=N,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var W=Math.floor;function C(r){return W(r)===r&&r>=0}function L(r){return r!=r}function P(r){return W(r)===r}function R(r){return P(r/2)}function Z(r){return R(r>0?r-1:r+1)}var M=Number.POSITIVE_INFINITY,X=Number.NEGATIVE_INFINITY;function Y(r){return r===M||r===X}var q=Math.sqrt;function z(r){return Math.abs(r)}var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var D=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var rr=B&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return D.call(r);n=r[Q],a=Q,e=null!=(i=r)&&J.call(i,a);try{r[Q]=void 0}catch(e){return D.call(r)}return t=D.call(r),e?r[Q]=n:delete r[Q],t}:function(r){return D.call(r)},er="function"==typeof Uint32Array;var nr="function"==typeof Uint32Array?Uint32Array:null;var tr,ir="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,e,n;if("function"!=typeof nr)return!1;try{e=new nr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(er&&n instanceof Uint32Array||"[object Uint32Array]"===rr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar=tr,or="function"==typeof Float64Array;var ur="function"==typeof Float64Array?Float64Array:null;var cr,fr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,n;if("function"!=typeof ur)return!1;try{e=new ur([1,3.14,-3.14,NaN]),n=e,r=(or&&n instanceof Float64Array||"[object Float64Array]"===rr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr=cr,lr="function"==typeof Uint8Array;var pr="function"==typeof Uint8Array?Uint8Array:null;var gr,yr="function"==typeof Uint8Array?Uint8Array:void 0;gr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,256,257]),n=e,r=(lr&&n instanceof Uint8Array||"[object Uint8Array]"===rr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var vr=gr,dr="function"==typeof Uint16Array;var hr="function"==typeof Uint16Array?Uint16Array:null;var wr,br="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,e,n;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(dr&&n instanceof Uint16Array||"[object Uint16Array]"===rr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var mr,Ar={uint16:wr,uint8:vr};(mr=new Ar.uint16(1))[0]=4660;var _r,Er,Ur=52===new Ar.uint8(mr.buffer)[0];!0===Ur?(_r=1,Er=0):(_r=0,Er=1);var Sr={HIGH:_r,LOW:Er},Ir=new sr(1),kr=new ar(Ir.buffer),xr=Sr.HIGH,Fr=Sr.LOW;function Nr(r,e,n,t){return Ir[0]=r,e[t]=kr[xr],e[t+n]=kr[Fr],e}function jr(r){return Nr(r,[0,0],1,0)}H(jr,"assign",Nr);var Tr=!0===Ur?0:1,Or=new sr(1),Vr=new ar(Or.buffer);function $r(r,e){return Or[0]=r,Vr[Tr]=e>>>0,Or[0]}function Gr(r){return 0|r}var Hr,Wr,Cr=2147483647,Lr=2147483648,Pr=!0===Ur?1:0,Rr=new sr(1),Zr=new ar(Rr.buffer);function Mr(r){return Rr[0]=r,Zr[Pr]}!0===Ur?(Hr=1,Wr=0):(Hr=0,Wr=1);var Xr={HIGH:Hr,LOW:Wr},Yr=new sr(1),qr=new ar(Yr.buffer),zr=Xr.HIGH,Br=Xr.LOW;function Dr(r,e){return qr[zr]=r,qr[Br]=e,Yr[0]}var Jr=[0,0];function Kr(r,e){var n,t;return jr.assign(r,Jr,1,0),n=Jr[0],n&=Cr,t=Mr(e),Dr(n|=t&=Lr,Jr[1])}var Qr=1072693247,re=1e300,ee=1e-300;var ne=!0===Ur?1:0,te=new sr(1),ie=new ar(te.buffer);function ae(r,e){return te[0]=r,ie[ne]=e>>>0,te[0]}var oe=1023;var ue=1048575,ce=1048576,fe=1072693248,se=536870912,le=524288,pe=20,ge=9007199254740992,ye=.9617966939259756,ve=.9617967009544373,de=-7.028461650952758e-9,he=[1,1.5],we=[0,.5849624872207642],be=[0,1.350039202129749e-8];var me=1.4426950408889634,Ae=1.4426950216293335,_e=1.9259629911266175e-8;var Ee=1023,Ue=-1023,Se=-1074,Ie=22250738585072014e-324,ke=4503599627370496;function xe(r,e,n,t){return L(r)||Y(r)?(e[t]=r,e[t+n]=0,e):0!==r&&z(r)<Ie?(e[t]=r*ke,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return xe(r,[0,0],1,0)}),"assign",xe);var Fe=2146435072;var Ne=2220446049250313e-31,je=2148532223,Te=[0,0],Oe=[0,0];function Ve(r,e){var n,t;return 0===e||0===r||L(r)||Y(r)?r:(xe(r,Te,1,0),r=Te[0],e+=Te[1],e+=function(r){var e=Mr(r);return(e=(e&Fe)>>>20)-oe|0}(r),e<Se?Kr(0,r):e>Ee?r<0?X:M:(e<=Ue?(e+=52,t=Ne):t=1,jr.assign(r,Oe,1,0),n=Oe[0],n&=je,t*Dr(n|=e+oe<<20,Oe[1])))}var $e=.6931471805599453,Ge=1048575;var He=1048576,We=1071644672,Ce=20,Le=.6931471824645996,Pe=-1.904654299957768e-9;var Re=1072693247,Ze=1105199104,Me=1139802112,Xe=1083179008,Ye=1072693248,qe=1083231232,ze=3230714880,Be=31,De=1e300,Je=1e-300,Ke=8008566259537294e-32,Qe=[0,0],rn=[0,0];function en(r,e){var n,t,i,a,o,u,c,f,s,l,p,g,y,v;if(L(r)||L(e))return NaN;if(jr.assign(e,Qe,1,0),o=Qe[0],0===Qe[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return q(r);if(-.5===e)return 1/q(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Y(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:z(r)<1==(e===M)?0:M}(r,e)}if(jr.assign(r,Qe,1,0),a=Qe[0],0===Qe[1]){if(0===a)return function(r,e){return e===X?M:e===M?0:e>0?Z(e)?r:0:Z(e)?Kr(M,r):M}(r,e);if(1===r)return 1;if(-1===r&&Z(e))return-1;if(Y(r))return r===X?en(-0,-e):e<0?0:M}if(r<0&&!1===P(e))return(r-r)/(r-r);if(i=z(r),n=a&Cr|0,t=o&Cr|0,c=o>>>Be|0,u=(u=a>>>Be|0)&&Z(e)?-1:1,t>Ze){if(t>Me)return function(r,e){return(Mr(r)&Cr)<=Qr?e<0?re*re:ee*ee:e>0?re*re:ee*ee}(r,e);if(n<Re)return 1===c?u*De*De:u*Je*Je;if(n>Ye)return 0===c?u*De*De:u*Je*Je;p=function(r,e){var n,t,i,a,o,u,c;return a=(i=e-1)*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333)),n=(u=i*_e-a*me)-((t=$r(t=(o=Ae*i)+u,0))-o),r[0]=t,r[1]=n,r}(rn,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,g,y,v,d,h,w,b,m,A,_,E;return m=0,n<ce&&(m-=53,n=Mr(e*=ge)),m+=(n>>pe)-oe|0,n=(A=n&ue|0)|fe|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=ce),o=$r(i=(w=(e=ae(e,n))-(f=he[_]))*(b=1/(e+f)),0),t=(n>>1|se)+le,c=ae(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=$r(c=3+(a=o*o)+(h+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),l=$r(l=(w=o*c)+(b=u*c+(h-(c-3-a))*i),0),p=ve*l,v=(g=de*l+(b-(l-w))*ye+be[_])-((y=$r(y=p+g+(s=we[_])+(d=m),0))-d-s-p),r[0]=y,r[1]=v,r}(rn,i,n);if(g=(l=(e-(f=$r(e,0)))*p[0]+e*p[1])+(s=f*p[0]),jr.assign(g,Qe,1,0),y=Gr(Qe[0]),v=Gr(Qe[1]),y>=Xe){if(0!=(y-Xe|v))return u*De*De;if(l+Ke>g-s)return u*De*De}else if((y&Cr)>=qe){if(0!=(y-ze|v))return u*Je*Je;if(l<=g-s)return u*Je*Je}return g=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&Cr|0)>>Ce)-oe|0,f=0,s>We&&(i=ae(0,((f=r+(He>>l+1)>>>0)&~(Ge>>(l=((f&Cr)>>Ce)-oe|0)))>>>0),f=(f&Ge|He)>>Ce-l>>>0,r<0&&(f=-f),e-=i),r=Gr(r=Mr(c=1-((c=(a=(i=$r(i=n+e,0))*Le)+(o=(n-(i-e))*$e+i*Pe))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<Ce>>>0)>>Ce<=0?Ve(c,f):ae(c,r)}(y,s,l),u*g}function nn(r,e){return L(r)||L(e)||e<0||e>1?NaN:C(r)?e*en(1-e,r):0}function tn(r){return L(r)||r<0||r>1?(e=NaN,function(){return e}):function(e){if(L(e))return NaN;if(C(e))return r*en(1-r,e);return 0};var e}H(nn,"factory",tn);export{nn as default,tn as factory};
//# sourceMappingURL=mod.js.map

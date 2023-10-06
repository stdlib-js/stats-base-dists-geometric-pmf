// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,v,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var E=String.fromCharCode,U=isNaN,I=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function N(r){var e,n,t,a,o,f,s,l,p;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=S(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,U(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,U(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!U(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=U(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=k.exec(r);t;)(e=r.slice(i,k.lastIndex-t[0].length)).length&&n.push(e),n.push(x(t)),i=k.lastIndex,t=k.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return N.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var P=Math.floor;function R(r){return P(r)===r&&r>=0}function Z(r){return r!=r}function M(r){return P(r)===r}function X(r){return M(r/2)}function Y(r){return X(r>0?r-1:r+1)}var q=Number.POSITIVE_INFINITY,z=Number.NEGATIVE_INFINITY;function B(r){return r===q||r===z}var D=Math.sqrt;function J(r){return Math.abs(r)}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Q=Object.prototype.toString;var rr=Object.prototype.hasOwnProperty;var er="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof er?er.toStringTag:"";var tr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Q.call(r);n=r[nr],a=nr,e=null!=(i=r)&&rr.call(i,a);try{r[nr]=void 0}catch(e){return Q.call(r)}return t=Q.call(r),e?r[nr]=n:delete r[nr],t}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array;var ar="function"==typeof Uint32Array?Uint32Array:null;var or,ur="function"==typeof Uint32Array?Uint32Array:void 0;or=function(){var r,e,n;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ir&&n instanceof Uint32Array||"[object Uint32Array]"===tr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var cr=or,fr="function"==typeof Float64Array;var sr="function"==typeof Float64Array?Float64Array:null;var lr,pr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),n=e,r=(fr&&n instanceof Float64Array||"[object Float64Array]"===tr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr=lr,gr="function"==typeof Uint8Array;var vr="function"==typeof Uint8Array?Uint8Array:null;var dr,hr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,e,n;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,256,257]),n=e,r=(gr&&n instanceof Uint8Array||"[object Uint8Array]"===tr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var wr=dr,br="function"==typeof Uint16Array;var mr="function"==typeof Uint16Array?Uint16Array:null;var Ar,_r="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,e,n;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===tr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Ur={uint16:Ar,uint8:wr};(Er=new Ur.uint16(1))[0]=4660;var Ir,Sr,Nr=52===new Ur.uint8(Er.buffer)[0];!0===Nr?(Ir=1,Sr=0):(Ir=0,Sr=1);var kr={HIGH:Ir,LOW:Sr},xr=new yr(1),Fr=new cr(xr.buffer),jr=kr.HIGH,Tr=kr.LOW;function Or(r,e,n,t){return xr[0]=r,e[t]=Fr[jr],e[t+n]=Fr[Tr],e}function Vr(r){return Or(r,[0,0],1,0)}L(Vr,"assign",Or);var $r=!0===Nr?0:1,Gr=new yr(1),Hr=new cr(Gr.buffer);function Wr(r,e){return Gr[0]=r,Hr[$r]=e>>>0,Gr[0]}function Cr(r){return 0|r}var Lr,Pr,Rr=!0===Nr?1:0,Zr=new yr(1),Mr=new cr(Zr.buffer);function Xr(r){return Zr[0]=r,Mr[Rr]}!0===Nr?(Lr=1,Pr=0):(Lr=0,Pr=1);var Yr={HIGH:Lr,LOW:Pr},qr=new yr(1),zr=new cr(qr.buffer),Br=Yr.HIGH,Dr=Yr.LOW;function Jr(r,e){return zr[Br]=r,zr[Dr]=e,qr[0]}var Kr=[0,0];function Qr(r,e){var n,t;return Vr.assign(r,Kr,1,0),n=Kr[0],n&=2147483647,t=Xr(e),Jr(n|=t&=2147483648,Kr[1])}var re=!0===Nr?1:0,ee=new yr(1),ne=new cr(ee.buffer);function te(r,e){return ee[0]=r,ne[re]=e>>>0,ee[0]}var ie=[1,1.5],ae=[0,.5849624872207642],oe=[0,1.350039202129749e-8];function ue(r,e,n,t){return Z(r)||B(r)?(e[t]=r,e[t+n]=0,e):0!==r&&J(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return ue(r,[0,0],1,0)}),"assign",ue);var ce=[0,0],fe=[0,0];function se(r,e){var n,t;return 0===e||0===r||Z(r)||B(r)?r:(ue(r,ce,1,0),e+=ce[1],e+=function(r){var e=Xr(r);return(e=(2146435072&e)>>>20)-1023|0}(r=ce[0]),e<-1074?Qr(0,r):e>1023?r<0?z:q:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Vr.assign(r,fe,1,0),n=fe[0],n&=2148532223,t*Jr(n|=e+1023<<20,fe[1])))}var le=1e300,pe=1e-300,ye=[0,0],ge=[0,0];function ve(r,e){var n,t,i,a,o,u,c,f,s,l,p,y,g,v;if(Z(r)||Z(e))return NaN;if(Vr.assign(e,ye,1,0),o=ye[0],0===ye[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return D(r);if(-.5===e)return 1/D(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(B(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:J(r)<1==(e===q)?0:q}(r,e)}if(Vr.assign(r,ye,1,0),a=ye[0],0===ye[1]){if(0===a)return function(r,e){return e===z?q:e===q?0:e>0?Y(e)?r:0:Y(e)?Qr(q,r):q}(r,e);if(1===r)return 1;if(-1===r&&Y(e))return-1;if(B(r))return r===z?ve(-0,-e):e<0?0:q}if(r<0&&!1===M(e))return(r-r)/(r-r);if(i=J(r),n=2147483647&a|0,t=2147483647&o|0,c=o>>>31|0,u=(u=a>>>31|0)&&Y(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&Xr(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?u*le*le:u*pe*pe;if(n>1072693248)return 0===c?u*le*le:u*pe*pe;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Wr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(ge,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y,g,v,d,h,w,b,m,A,_,E;return m=0,n<1048576&&(m-=53,n=Xr(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=1048576),o=Wr(i=(w=(e=te(e,n))-(f=ie[_]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=te(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Wr(c=3+(a=o*o)+(h+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),v=(y=-7.028461650952758e-9*(l=Wr(l=(w=o*c)+(b=u*c+(h-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+oe[_])-((g=Wr(g=(p=.9617967009544373*l)+y+(s=ae[_])+(d=m),0))-d-s-p),r[0]=g,r[1]=v,r}(ge,i,n);if(y=(l=(e-(f=Wr(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Vr.assign(y,ye,1,0),g=Cr(ye[0]),v=Cr(ye[1]),g>=1083179008){if(0!=(g-1083179008|v))return u*le*le;if(l+8008566259537294e-32>y-s)return u*le*le}else if((2147483647&g)>=1083231232){if(0!=(g-3230714880|v))return u*pe*pe;if(l<=y-s)return u*pe*pe}return y=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=te(0,t)),r=Cr(r=Xr(f=1-((f=(o=.6931471824645996*(a=Wr(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=f-(a=f*f)*(0===(y=a)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((c=u-(f-o))+f*c)-f))),(r+=s<<20>>>0)>>20<=0?se(f,s):te(f,r)}(g,s,l),u*y}function de(r,e){return Z(r)||Z(e)||e<0||e>1?NaN:R(r)?e*ve(1-e,r):0}function he(r){return Z(r)||r<0||r>1?(e=NaN,function(){return e}):function(e){if(Z(e))return NaN;if(R(e))return r*ve(1-r,e);return 0};var e}L(de,"factory",he);export{de as default,he as factory};
//# sourceMappingURL=mod.js.map

// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l=Math.floor;function y(r){return l(r)===r&&r>=0}function p(r){return r!=r}function v(r){return l(r)===r}function b(r){return v(r/2)}function w(r){return b(r>0?r-1:r+1)}var d=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;function A(r){return r===d||r===s}var _=Math.sqrt;function m(r){return Math.abs(r)}var h,U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),g=Object.prototype.toString,j=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",I=U&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return g.call(r);t=r[N],u=N,n=null!=(o=r)&&j.call(o,u);try{r[N]=void 0}catch(n){return g.call(r)}return e=g.call(r),n?r[N]=t:delete r[N],e}:function(r){return g.call(r)},O="function"==typeof Uint32Array,S="function"==typeof Uint32Array?Uint32Array:null,E="function"==typeof Uint32Array?Uint32Array:void 0;h=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(O&&t instanceof Uint32Array||"[object Uint32Array]"===I(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=h,H="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,P="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G([1,3.14,-3.14,NaN]),t=n,r=(H&&t instanceof Float64Array||"[object Float64Array]"===I(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L,V=F,W="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,M="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,256,257]),t=n,r=(W&&t instanceof Uint8Array||"[object Uint8Array]"===I(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var k,Y=L,q="function"==typeof Uint16Array,C="function"==typeof Uint16Array?Uint16Array:null,z="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,n,t;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,65536,65537]),t=n,r=(q&&t instanceof Uint16Array||"[object Uint16Array]"===I(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B,D={uint16:k,uint8:Y};(B=new D.uint16(1))[0]=4660;var J,K,Q=52===new D.uint8(B.buffer)[0];!0===Q?(J=1,K=0):(J=0,K=1);var R={HIGH:J,LOW:K},X=new V(1),Z=new T(X.buffer),$=R.HIGH,rr=R.LOW;function nr(r,n){return X[0]=n,r[0]=Z[$],r[1]=Z[rr],r}function tr(r,n){return 1===arguments.length?nr([0,0],r):nr(r,n)}var er=!0===Q?0:1,or=new V(1),ur=new T(or.buffer);function ir(r,n){return or[0]=r,ur[er]=n>>>0,or[0]}function fr(r){return 0|r}var ar,cr,lr=!0===Q?1:0,yr=new V(1),pr=new T(yr.buffer);function vr(r){return yr[0]=r,pr[lr]}!0===Q?(ar=1,cr=0):(ar=0,cr=1);var br={HIGH:ar,LOW:cr},wr=new V(1),dr=new T(wr.buffer),sr=br.HIGH,Ar=br.LOW;function _r(r,n){return dr[sr]=r,dr[Ar]=n,wr[0]}var mr=[0,0];function hr(r,n){var t,e;return tr(mr,r),t=mr[0],t&=2147483647,e=vr(n),_r(t|=e&=2147483648,mr[1])}var Ur=!0===Q?1:0,gr=new V(1),jr=new T(gr.buffer);function Nr(r,n){return gr[0]=r,jr[Ur]=n>>>0,gr[0]}var Ir=1023,Or=1048576,Sr=[1,1.5],Er=[0,.5849624872207642],Fr=[0,1.350039202129749e-8];function Tr(r,n,t,e){return p(r)||A(r)?(n[e]=r,n[e+t]=0,n):0!==r&&m(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Tr(r,[0,0],1,0)}),"assign",Tr);var Hr=[0,0],Gr=[0,0];function Pr(r,n){var t,e;return 0===n||0===r||p(r)||A(r)?r:(Tr(r,Hr,1,0),n+=Hr[1],n+=function(r){var n=vr(r);return(n=(2146435072&n)>>>20)-Ir|0}(r=Hr[0]),n<-1074?hr(0,r):n>1023?r<0?s:d:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,tr(Gr,r),t=Gr[0],t&=2148532223,e*_r(t|=n+Ir<<20,Gr[1])))}var Lr=2147483647,Vr=1048575,Wr=1048576,xr=2147483647,Mr=1083179008,kr=1e300,Yr=1e-300,qr=[0,0],Cr=[0,0];function zr(r,n){var t,e,o,u,i,f,a,c,l,y,b,h,U,g;if(p(r)||p(n))return NaN;if(tr(qr,n),i=qr[0],0===qr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return _(r);if(-.5===n)return 1/_(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(A(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:m(r)<1==(n===d)?0:d}(r,n)}if(tr(qr,r),u=qr[0],0===qr[1]){if(0===u)return function(r,n){return n===s?d:n===d?0:n>0?w(n)?r:0:w(n)?hr(d,r):d}(r,n);if(1===r)return 1;if(-1===r&&w(n))return-1;if(A(r))return r===s?zr(-0,-n):n<0?0:d}if(r<0&&!1===v(n))return(r-r)/(r-r);if(o=m(r),t=u&xr|0,e=i&xr|0,a=i>>>31|0,f=(f=u>>>31|0)&&w(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&vr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*kr*kr:f*Yr*Yr;if(t>1072693248)return 0===a?f*kr*kr:f*Yr*Yr;b=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=ir(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Cr,o)}else b=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,b,w,d,s,A,_,m,h,U,g;return m=0,t<Or&&(m-=53,t=vr(n*=9007199254740992)),m+=(t>>20)-Ir|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,t-=Or),i=ir(o=(A=(n=Nr(n,t))-(c=Sr[U]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=Nr(0,e+=U<<18),s=(u=o*o)*u*(0===(g=u)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=ir(a=3+(u=i*i)+(s+=(f=_*(A-i*a-i*(n-(a-c))))*(i+o)),0),w=(v=-7.028461650952758e-9*(y=ir(y=(A=i*a)+(_=f*a+(s-(a-3-u))*o),0))+.9617966939259756*(_-(y-A))+Fr[U])-((b=ir(b=(p=.9617967009544373*y)+v+(l=Er[U])+(d=m),0))-d-l-p),r[0]=b,r[1]=w,r}(Cr,o,t);if(y=(n-(c=ir(n,0)))*b[0]+n*b[1],l=c*b[0],tr(qr,h=y+l),U=fr(qr[0]),g=fr(qr[1]),U>=Mr){if(0!=(U-Mr|g))return f*kr*kr;if(y+8008566259537294e-32>h-l)return f*kr*kr}else if((U&xr)>=1083231232){if(0!=(U-3230714880|g))return f*Yr*Yr;if(y<=h-l)return f*Yr*Yr}return h=function(r,n,t){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&Lr|0)>>20)-Ir|0,c=0,l>1071644672&&(o=Nr(0,((c=r+(Wr>>y+1)>>>0)&~(Vr>>(y=((c&Lr)>>20)-Ir|0)))>>>0),c=(c&Vr|Wr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=fr(r=vr(a=1-((a=(u=.6931471824645996*(o=ir(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Pr(a,c):Nr(a,r)}(U,l,y),f*h}function Br(r,n){return p(r)||p(n)||n<0||n>1?NaN:y(r)?n*zr(1-n,r):0}return c(Br,"factory",(function(r){return p(r)||r<0||r>1?(n=NaN,function(){return n}):function(n){return p(n)?NaN:y(n)?r*zr(1-r,n):0};var n})),Br},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).pmf=n();
//# sourceMappingURL=browser.js.map

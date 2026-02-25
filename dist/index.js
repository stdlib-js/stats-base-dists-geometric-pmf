"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=n(function(O,u){
var c=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-pow/dist');function g(e,r){var t;return a(e)||a(r)||r<0||r>1?NaN:c(e)?(t=1-r,r*N(t,e)):0}u.exports=g
});var f=n(function(R,v){
var y=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),m=require('@stdlib/utils-constant-function/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-pow/dist');function I(e){if(s(e)||e<0||e>1)return m(NaN);return r;function r(t){var i;return s(t)?NaN:y(t)?(i=1-e,e*w(i,t)):0}}v.exports=I
});var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=o(),l=f();d(q,"factory",l);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

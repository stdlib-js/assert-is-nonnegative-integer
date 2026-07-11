"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(g){throw (r=0, g)}};};var t=i(function(P,u){
var q=require('@stdlib/assert-is-integer/dist').isPrimitive;function N(e){return q(e)&&e>=0}u.exports=N
});var s=i(function(d,v){
var O=require('@stdlib/assert-is-integer/dist').isObject;function m(e){return O(e)&&e.valueOf()>=0}v.exports=m
});var c=i(function(y,a){
var I=t(),b=s();function f(e){return I(e)||b(e)}a.exports=f
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=c(),j=t(),p=s();o(n,"isPrimitive",j);o(n,"isObject",p);module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

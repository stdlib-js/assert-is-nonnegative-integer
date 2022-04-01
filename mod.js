// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return t({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__;var l=e,f=function(t,r,e){var l,f,v,b;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(u.call(t,r)||c.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),v="get"in e,b="set"in e,f&&(v||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(t,r,e.get),b&&a&&a.call(t,r,e.set),t},v=r()?l:f;var b=function(t,r,e){v(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})};var p=function(t){return"number"==typeof t};var y=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return y&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,m=s;var j=function(t){return m.call(t)},d=Object.prototype.hasOwnProperty;var O=function(t,r){return null!=t&&d.call(t,r)},g="function"==typeof Symbol?Symbol.toStringTag:"",S=O,P=g,h=s;var w=j,I=function(t){var r,e,n;if(null==t)return h.call(t);e=t[P],r=S(t,P);try{t[P]=void 0}catch(r){return h.call(t)}return n=h.call(t),r?t[P]=e:delete t[P],n},N=_()?I:w,T=Number,E=T.prototype.toString;var V=N,A=T,F=function(t){try{return E.call(t),!0}catch(t){return!1}},G=_();var k=function(t){return"object"==typeof t&&(t instanceof A||(G?F(t):"[object Number]"===V(t)))},x=p,Y=k;var C=b,M=function(t){return x(t)||Y(t)},q=k;C(M,"isPrimitive",p),C(M,"isObject",q);var z=M,B=Number.POSITIVE_INFINITY,D=T.NEGATIVE_INFINITY,H=Math.floor;var J=B,K=D,L=function(t){return H(t)===t};var Q=function(t){return t<J&&t>K&&L(t)},R=z.isPrimitive,U=Q;var W=function(t){return R(t)&&U(t)},X=z.isObject,Z=Q;var $=function(t){return X(t)&&Z(t.valueOf())},tt=W,rt=$;var et=b,nt=function(t){return tt(t)||rt(t)},ot=$;et(nt,"isPrimitive",W),et(nt,"isObject",ot);var it=nt.isPrimitive;var at=function(t){return it(t)&&t>=0},ut=nt.isObject;var ct=function(t){return ut(t)&&t.valueOf()>=0},lt=at,ft=ct;var vt=b,bt=function(t){return lt(t)||ft(t)},pt=at,yt=ct;vt(bt,"isPrimitive",pt),vt(bt,"isObject",yt);var _t=bt;export{_t as default,yt as isObject,pt as isPrimitive};
//# sourceMappingURL=mod.js.map

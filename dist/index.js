"use strict";var q=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var y=q(function(P,g){
var b=require('@stdlib/assert-is-ndarray-like/dist'),h=require('@stdlib/assert-is-plain-object/dist'),w=require('@stdlib/assert-is-nonnegative-integer-array/dist').primitives,s=require('@stdlib/assert-has-own-property/dist'),c=require('@stdlib/ndarray-base-shape2strides/dist'),O=require('@stdlib/ndarray-base-strides2offset/dist'),T=require('@stdlib/ndarray-base-numel/dist'),d=require('@stdlib/ndarray-dtype/dist'),f=require('@stdlib/ndarray-shape/dist'),l=require('@stdlib/ndarray-order/dist'),j=require('@stdlib/ndarray-ctor/dist'),k=require('@stdlib/array-empty/dist'),E=require('@stdlib/buffer-alloc-unsafe/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist');function A(a){var e,i,n,m,o,v,t,u,r;if(!b(a))throw new TypeError(p('1dZ5t',a));if(o={},arguments.length>1){if(e=arguments[1],!h(e))throw new TypeError(p('1dZ2V',e));if(s(e,"dtype")?i=e.dtype:i=d(a),s(e,"shape")){if(r=e.shape,typeof r=="number"&&(r=[r]),!w(r))throw new TypeError(p('1dZDs',"shape",r))}else r=f(a);s(e,"order")?n=e.order:n=l(a),s(e,"mode")&&(o.mode=e.mode),s(e,"submode")&&(o.submode=e.submode)}else i=d(a),r=f(a),n=l(a);return m=r.length,m>0?(t=T(r),t<0&&(t=0),u=c(r,n)):(t=1,u=[0]),i==="binary"?v=E(t):v=k(t,i),new j(i,v,r,u,O(r,u),n,o)}g.exports=A
});var L=y();module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
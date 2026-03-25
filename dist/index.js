"use strict";var q=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var y=q(function(V,g){"use strict";var b=require("@stdlib/assert-is-number").isPrimitive,h=require("@stdlib/assert-is-ndarray-like"),c=require("@stdlib/assert-is-plain-object"),w=require("@stdlib/assert-is-nonnegative-integer-array").primitives,O=require("@stdlib/assert-is-empty-collection"),n=require("@stdlib/assert-has-own-property"),E=require("@stdlib/ndarray-base-shape2strides"),T=require("@stdlib/ndarray-base-numel"),d=require("@stdlib/ndarray-dtype"),l=require("@stdlib/ndarray-shape"),f=require("@stdlib/ndarray-order"),j=require("@stdlib/ndarray-ctor"),k=require("@stdlib/array-empty"),N=require("@stdlib/buffer-alloc-unsafe"),m=require("@stdlib/string-format");function P(i){var e,a,t,p,s,u,o,v,r;if(!h(i))throw new TypeError(m("invalid argument. First argument must be an ndarray-like object. Value: `%s`.",i));if(s={},arguments.length>1){if(e=arguments[1],!c(e))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",e));if(n(e,"dtype")?a=e.dtype:a=d(i),n(e,"shape")){if(r=e.shape,b(r)&&(r=[r]),!w(r)&&!O(r))throw new TypeError(m("invalid option. `%s` option must be a nonnegative integer or an array of nonnegative integers. Option: `%s`.","shape",r))}else r=l(i);n(e,"order")?t=e.order:t=f(i),n(e,"mode")&&(s.mode=e.mode),n(e,"submode")&&(s.submode=e.submode)}else a=d(i),r=l(i),t=f(i);return p=r.length,p>0?(o=T(r),v=E(r,t)):(o=1,v=[0]),a==="binary"?u=N(o):u=k(o,a),new j(a,u,r,v,0,t,s)}g.exports=P});var A=y();module.exports=A;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map

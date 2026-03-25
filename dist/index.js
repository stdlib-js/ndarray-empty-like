"use strict";var b=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var y=b(function(C,q){"use strict";var h=require("@stdlib/assert-is-number").isPrimitive,c=require("@stdlib/assert-is-ndarray-like"),w=require("@stdlib/assert-is-plain-object"),O=require("@stdlib/assert-is-nonnegative-integer-array").primitives,E=require("@stdlib/assert-is-empty-collection"),n=require("@stdlib/assert-has-own-property"),T=require("@stdlib/ndarray-base-dtype-resolve-str"),j=require("@stdlib/ndarray-base-shape2strides"),k=require("@stdlib/ndarray-base-numel"),l=require("@stdlib/ndarray-dtype"),f=require("@stdlib/ndarray-shape"),g=require("@stdlib/ndarray-order"),N=require("@stdlib/ndarray-ctor"),P=require("@stdlib/array-empty"),A=require("@stdlib/buffer-alloc-unsafe"),p=require("@stdlib/string-format");function L(i){var e,a,t,d,s,u,o,v,m,r;if(!c(i))throw new TypeError(p("invalid argument. First argument must be an ndarray-like object. Value: `%s`.",i));if(s={},arguments.length>1){if(e=arguments[1],!w(e))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",e));if(n(e,"dtype")?a=e.dtype:a=l(i),n(e,"shape")){if(r=e.shape,h(r)&&(r=[r]),!O(r)&&!E(r))throw new TypeError(p("invalid option. `%s` option must be a nonnegative integer or an array of nonnegative integers. Option: `%s`.","shape",r))}else r=f(i);n(e,"order")?t=e.order:t=g(i),n(e,"mode")&&(s.mode=e.mode),n(e,"submode")&&(s.submode=e.submode)}else a=l(i),r=f(i),t=g(i);return d=r.length,d>0?(o=k(r),m=j(r,t)):(o=1,m=[0]),v=T(a),v==="binary"?u=A(o):u=P(o,v),new N(a,u,r,m,0,t,s)}q.exports=L});var S=y();module.exports=S;
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

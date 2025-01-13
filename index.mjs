// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import{primitives as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtype@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-order@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-empty@v0.3.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-alloc-unsafe@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function v(v){var f,b,y,g,c,x,u,w;if(!s(v))throw new TypeError(l("1dZ5t",v));if(g={},arguments.length>1){if(!e(f=arguments[1]))throw new TypeError(l("1dZ2V",f));if(b=t(f,"dtype")?f.dtype:m(v),t(f,"shape")){if("number"==typeof(w=f.shape)&&(w=[w]),!r(w))throw new TypeError(l("1dZDs","shape",w))}else w=o(v);y=t(f,"order")?f.order:p(v),t(f,"mode")&&(g.mode=f.mode),t(f,"submode")&&(g.submode=f.submode)}else b=m(v),w=o(v),y=p(v);return w.length>0?(x=n(w),u=d(w,y)):(x=1,u=[0]),c="binary"===b?h(x):a(x,b),new j(b,c,w,u,i(w,u),y,g)}export{v as default};
//# sourceMappingURL=index.mjs.map

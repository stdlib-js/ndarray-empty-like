<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# emptyLike

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an uninitialized [ndarray][@stdlib/ndarray/ctor] having the same shape and [data type][@stdlib/ndarray/dtypes] as a provided ndarray.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-empty-like
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var emptyLike = require( '@stdlib/ndarray-empty-like' );
```

#### emptyLike( x\[, options] )

Creates an uninitialized [ndarray][@stdlib/ndarray/ctor] having the same shape and [data type][@stdlib/ndarray/dtypes] as a provided ndarray.

```javascript
var getShape = require( '@stdlib/ndarray-shape' );
var getDType = require( '@stdlib/ndarray-dtype' );
var zeros = require( '@stdlib/ndarray-zeros' );

var x = zeros( [ 2, 2 ] );
// returns <ndarray>

var y = emptyLike( x );
// returns <ndarray>

var sh = getShape( y );
// returns [ 2, 2 ]

var dt = String( getDType( y ) );
// returns 'float64'
```

The function supports the following `options`:

-   **dtype**: output [ndarray][@stdlib/ndarray/ctor] [data type][@stdlib/ndarray/dtypes]. Overrides the input ndarray's inferred [data type][@stdlib/ndarray/dtypes].
-   **shape**: output [ndarray][@stdlib/ndarray/ctor] shape. Overrides the input ndarray's inferred shape.
-   **order**: specifies whether the output [ndarray][@stdlib/ndarray/ctor] should be `'row-major'` (C-style) or `'column-major'` (Fortran-style). Overrides the input ndarray's inferred order.
-   **mode**: specifies how to handle indices which exceed array dimensions (see [`ndarray`][@stdlib/ndarray/ctor]). Default: `'throw'`.
-   **submode**: a mode array which specifies for each dimension how to handle subscripts which exceed array dimensions  (see [`ndarray`][@stdlib/ndarray/ctor]). If provided fewer modes than dimensions, the constructor recycles modes using modulo arithmetic. Default: `[ options.mode ]`.

To override either the `dtype`, `shape`, or `order`, specify the corresponding option. For example, to override the inferred [data type][@stdlib/ndarray/dtypes],

```javascript
var getShape = require( '@stdlib/ndarray-shape' );
var getDType = require( '@stdlib/ndarray-dtype' );
var zeros = require( '@stdlib/ndarray-zeros' );

var x = zeros( [ 2, 2 ] );
// returns <ndarray>

var dt = String( getDType( x ) );
// returns 'float64'

var y = emptyLike( x, {
    'dtype': 'int32'
});
// returns <ndarray>

var sh = getShape( y );
// returns [ 2, 2 ]

dt = String( getDType( y ) );
// returns 'int32'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If the resolved output data type is `'generic'`, the function always returns a zero-filled array.
-   For returned [ndarrays][@stdlib/ndarray/ctor] whose underlying memory is **not** initialized, memory contents are unknown and may contain **sensitive** data.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var getData = require( '@stdlib/ndarray-data-buffer' );
var dtypes = require( '@stdlib/ndarray-dtypes' );
var empty = require( '@stdlib/ndarray-empty' );
var emptyLike = require( '@stdlib/ndarray-empty-like' );

// Get a list of data types:
var dt = dtypes( 'integer_and_generic' );

// Generate uninitialized arrays...
var x;
var y;
var i;
for ( i = 0; i < dt.length; i++ ) {
    x = empty( [ 2, 2 ], {
        'dtype': dt[ i ]
    });
    y = emptyLike( x );
    console.log( getData( y ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray-empty`][@stdlib/ndarray/empty]</span><span class="delimiter">: </span><span class="description">create an uninitialized ndarray having a specified shape and data type.</span>
-   <span class="package-name">[`@stdlib/ndarray-zeros-like`][@stdlib/ndarray/zeros-like]</span><span class="delimiter">: </span><span class="description">create a zero-filled ndarray having the same shape and data type as a provided ndarray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-empty-like.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-empty-like

[test-image]: https://github.com/stdlib-js/ndarray-empty-like/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-empty-like/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-empty-like/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-empty-like?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-empty-like.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-empty-like/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-empty-like/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-empty-like/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-empty-like/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-empty-like/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-empty-like/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-empty-like/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-empty-like/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-empty-like/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes

<!-- <related-links> -->

[@stdlib/ndarray/empty]: https://github.com/stdlib-js/ndarray-empty

[@stdlib/ndarray/zeros-like]: https://github.com/stdlib-js/ndarray-zeros-like

<!-- </related-links> -->

</section>

<!-- /.links -->

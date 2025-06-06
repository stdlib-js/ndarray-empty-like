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

'use strict';

// MODULES //

var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var isndarrayLike = require( '@stdlib/assert-is-ndarray-like' );
var isPlainObject = require( '@stdlib/assert-is-plain-object' );
var isNonNegativeIntegerArray = require( '@stdlib/assert-is-nonnegative-integer-array' ).primitives;
var isEmptyCollection = require( '@stdlib/assert-is-empty-collection' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var strides2offset = require( '@stdlib/ndarray-base-strides2offset' );
var numel = require( '@stdlib/ndarray-base-numel' );
var getDType = require( '@stdlib/ndarray-dtype' );
var getShape = require( '@stdlib/ndarray-shape' );
var getOrder = require( '@stdlib/ndarray-order' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var emptyArray = require( '@stdlib/array-empty' );
var allocUnsafe = require( '@stdlib/buffer-alloc-unsafe' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Creates an uninitialized ndarray having the same shape and data type as a provided ndarray.
*
* @param {ndarray} x - input array
* @param {Options} [options] - function options
* @param {string} [options.dtype] - output array data type (overrides the input array's inferred data type)
* @param {string} [options.order] - specifies whether the output array should be 'row-major' (C-style) or 'column-major' (Fortran-style) (overrides the input array's inferred order)
* @param {(NonNegativeIntegerArray|NonNegativeInteger)} [options.shape] - output array shape (overrides the input array's inferred shape)
* @param {string} [options.mode="throw"] - specifies how to handle indices which exceed array dimensions
* @param {StringArray} [options.submode=["throw"]] - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @throws {TypeError} first argument must have a recognized data type
* @throws {TypeError} options argument must be an object
* @throws {TypeError} `dtype` option must be a supported ndarray data type
* @throws {TypeError} `order` option must be a supported order
* @throws {TypeError} `shape` option must be either a nonnegative integer or an array of nonnegative integers
* @throws {TypeError} must provide valid options
* @returns {ndarray} ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray-zeros' );
*
* var x = zeros( [ 2, 2 ] );
* // returns <ndarray>
*
* var y = emptyLike( x );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns [ 2, 2 ]
*
* var dt = y.dtype;
* // returns 'float64'
*/
function emptyLike( x ) {
	var options;
	var dtype;
	var order;
	var ndims;
	var opts;
	var buf;
	var len;
	var st;
	var sh;

	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', x ) );
	}
	opts = {};
	if ( arguments.length > 1 ) {
		options = arguments[ 1 ];
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		if ( hasOwnProp( options, 'dtype' ) ) {
			dtype = options.dtype;
		} else {
			dtype = getDType( x );
		}
		if ( hasOwnProp( options, 'shape' ) ) {
			sh = options.shape;
			if ( isNumber( sh ) ) {
				sh = [ sh ];
			}
			if ( !isNonNegativeIntegerArray( sh ) && !isEmptyCollection( sh ) ) { // eslint-disable-line max-len
				throw new TypeError( format( 'invalid option. `%s` option must be a nonnegative integer or an array of nonnegative integers. Option: `%s`.', 'shape', sh ) );
			}
		} else {
			sh = getShape( x );
		}
		if ( hasOwnProp( options, 'order' ) ) {
			order = options.order;
		} else {
			order = getOrder( x );
		}
		if ( hasOwnProp( options, 'mode' ) ) {
			opts.mode = options.mode;
		}
		if ( hasOwnProp( options, 'submode' ) ) {
			opts.submode = options.submode;
		}
	} else {
		dtype = getDType( x );
		sh = getShape( x );
		order = getOrder( x );
	}
	ndims = sh.length;
	if ( ndims > 0 ) {
		len = numel( sh );
		st = shape2strides( sh, order );
	} else {
		// For 0-dimensional arrays, the buffer should contain a single element...
		len = 1;
		st = [ 0 ];
	}
	if ( dtype === 'binary' ) {
		buf = allocUnsafe( len );
	} else {
		buf = emptyArray( len, dtype );
	}
	return new ndarray( dtype, buf, sh, st, strides2offset( sh, st ), order, opts ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = emptyLike;

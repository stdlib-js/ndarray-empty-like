/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array-float64' );
var Float32Array = require( '@stdlib/array-float32' );
var Int32Array = require( '@stdlib/array-int32' );
var Uint32Array = require( '@stdlib/array-uint32' );
var Int16Array = require( '@stdlib/array-int16' );
var Uint16Array = require( '@stdlib/array-uint16' );
var Int8Array = require( '@stdlib/array-int8' );
var Uint8Array = require( '@stdlib/array-uint8' );
var Uint8ClampedArray = require( '@stdlib/array-uint8c' );
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex128Array = require( '@stdlib/array-complex128' );
var BooleanArray = require( '@stdlib/array-bool' );
var Buffer = require( '@stdlib/buffer-ctor' );
var instanceOf = require( '@stdlib/assert-instance-of' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var zeros = require( '@stdlib/ndarray-base-zeros' );
var empty = require( '@stdlib/ndarray-base-empty' );
var emptyLike = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof emptyLike, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument having an unrecognized data type', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		{
			'data': true
		}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			emptyLike( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument having an unrecognized data type (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		{
			'data': true
		}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			emptyLike( value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			emptyLike( zeros( 'generic', [ 2, 2 ], 'row-major' ), value );
		};
	}
});

tape( 'the function throws an error if provided a `dtype` option which is not a recognized data type', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			emptyLike( zeros( 'generic', [ 2, 2 ], 'row-major' ), {
				'dtype': value
			});
		};
	}
});

tape( 'the function throws an error if provided an `order` option which is not a recognized order', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			emptyLike( zeros( 'generic', [ 2, 2 ], 'row-major' ), {
				'order': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `shape` option which is not a valid shape', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
		true,
		false,
		null,
		void 0,
		[ '5' ],
		[ 3.14 ],
		[ -1 ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			emptyLike( zeros( 'generic', [ 2, 2 ], 'row-major' ), {
				'shape': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `mode` option which is not a recognized mode', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'THROW',
		5,
		null,
		true,
		false,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			emptyLike( zeros( 'generic', [ 2, 2 ], 'row-major' ), {
				'mode': value
			});
		};
	}
});

tape( 'the function throws an error if provided an invalid `submode` option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'THROW',
		5,
		null,
		true,
		false,
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			emptyLike( zeros( 'generic', [ 2, 2 ], 'row-major' ), {
				'submode': [ value ]
			});
		};
	}
});

tape( 'the function returns an uninitialized array (dtype=float64, inferred)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'float64', [ 2, 2 ], 'row-major' );
	arr = emptyLike( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float64', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=float64, options)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'generic', [ 4 ], 'row-major' );
	arr = emptyLike( x, {
		'shape': [ 2, 2 ],
		'dtype': 'float64',
		'order': 'column-major'
	});

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float64', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=float64, options, integer shape)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'generic', [ 0 ], 'row-major' );
	arr = emptyLike( x, {
		'shape': 4,
		'dtype': 'float64',
		'order': 'column-major'
	});

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float64', 'returns expected value' );
	t.deepEqual( arr.shape, [ 4 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=float32, inferred)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'float32', [ 2, 2 ], 'row-major' );
	arr = emptyLike( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float32', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float32Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=float32, options)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'generic', [ 4 ], 'row-major' );
	arr = emptyLike( x, {
		'shape': [ 2, 2 ],
		'dtype': 'float32',
		'order': 'column-major'
	});

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'float32', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Float32Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=int32, inferred)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'int32', [ 2, 2 ], 'row-major' );
	arr = emptyLike( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int32', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int32Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=int32, options)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'generic', [ 4 ], 'row-major' );
	arr = emptyLike( x, {
		'shape': [ 2, 2 ],
		'dtype': 'int32',
		'order': 'column-major'
	});

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int32', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int32Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=int16, inferred)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'int16', [ 2, 2 ], 'row-major' );
	arr = emptyLike( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int16', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int16Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=int16, options)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'generic', [ 4 ], 'row-major' );
	arr = emptyLike( x, {
		'shape': [ 2, 2 ],
		'dtype': 'int16',
		'order': 'column-major'
	});

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int16', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int16Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=int8, inferred)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'int8', [ 2, 2 ], 'row-major' );
	arr = emptyLike( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int8', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int8Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=int8, options)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'generic', [ 4 ], 'row-major' );
	arr = emptyLike( x, {
		'shape': [ 2, 2 ],
		'dtype': 'int8',
		'order': 'column-major'
	});

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'int8', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Int8Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=uint32, inferred)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'uint32', [ 2, 2 ], 'row-major' );
	arr = emptyLike( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint32', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=uint32, options)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'generic', [ 4 ], 'row-major' );
	arr = emptyLike( x, {
		'shape': [ 2, 2 ],
		'dtype': 'uint32',
		'order': 'column-major'
	});

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint32', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=uint16, inferred)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'uint16', [ 2, 2 ], 'row-major' );
	arr = emptyLike( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint16', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=uint16, options)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'generic', [ 4 ], 'row-major' );
	arr = emptyLike( x, {
		'shape': [ 2, 2 ],
		'dtype': 'uint16',
		'order': 'column-major'
	});

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint16', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=uint8, inferred)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'uint8', [ 2, 2 ], 'row-major' );
	arr = emptyLike( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint8', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=uint8, options)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'generic', [ 4 ], 'row-major' );
	arr = emptyLike( x, {
		'shape': [ 2, 2 ],
		'dtype': 'uint8',
		'order': 'column-major'
	});

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint8', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=uint8c, inferred)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'uint8c', [ 2, 2 ], 'row-major' );
	arr = emptyLike( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint8c', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=uint8c, options)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'generic', [ 4 ], 'row-major' );
	arr = emptyLike( x, {
		'shape': [ 2, 2 ],
		'dtype': 'uint8c',
		'order': 'column-major'
	});

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'uint8c', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=binary, inferred)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'binary', [ 2, 2 ], 'row-major' );
	arr = emptyLike( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'binary', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Buffer ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=binary, options)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'generic', [ 4 ], 'row-major' );
	arr = emptyLike( x, {
		'shape': [ 2, 2 ],
		'dtype': 'binary',
		'order': 'column-major'
	});

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'binary', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Buffer ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=complex128, inferred)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'complex128', [ 2, 2 ], 'row-major' );
	arr = emptyLike( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex128', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=complex128, options)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'generic', [ 4 ], 'row-major' );
	arr = emptyLike( x, {
		'shape': [ 2, 2 ],
		'dtype': 'complex128',
		'order': 'column-major'
	});

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex128', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=complex64, inferred)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'complex64', [ 2, 2 ], 'row-major' );
	arr = emptyLike( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex64', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=complex64, options)', function test( t ) {
	var arr;
	var x;

	x = zeros( 'generic', [ 4 ], 'row-major' );
	arr = emptyLike( x, {
		'shape': [ 2, 2 ],
		'dtype': 'complex64',
		'order': 'column-major'
	});

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'complex64', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=bool, inferred)', function test( t ) {
	var arr;
	var x;

	x = empty( 'bool', [ 2, 2 ], 'row-major' );
	arr = emptyLike( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'bool', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns an uninitialized array (dtype=bool, options)', function test( t ) {
	var arr;
	var x;

	x = empty( 'generic', [ 4 ], 'row-major' );
	arr = emptyLike( x, {
		'shape': [ 2, 2 ],
		'dtype': 'bool',
		'order': 'column-major'
	});

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'bool', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=generic, inferred)', function test( t ) {
	var expected;
	var arr;
	var x;

	expected = [ 0, 0, 0, 0 ];

	x = zeros( 'generic', [ 2, 2 ], 'row-major' );
	arr = emptyLike( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'generic', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();
});

tape( 'the function returns a zero-filled array (dtype=generic, options)', function test( t ) {
	var expected;
	var arr;
	var x;

	expected = [ 0, 0, 0, 0 ];

	x = zeros( 'float64', [ 4 ], 'row-major' );
	arr = emptyLike( x, {
		'shape': [ 2, 2 ],
		'dtype': 'generic',
		'order': 'column-major'
	});

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'generic', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function guards against array having shapes containing negative dimension sizes', function test( t ) {
	var x = {
		'data': [ 1, 2, 3, 4 ],
		'ndims': 3,
		'shape': [ 2, -1, 2 ],
		'strides': [ -2, 2, 1 ],
		'offset': 0,
		'order': 'row-major',
		'dtype': 'generic',
		'length': 0,
		'flags': {},
		'get': noop,
		'set': noop
	};
	t.throws( badValue, Error, 'throws an error' );

	t.end();

	function badValue() {
		return emptyLike( x );
	}

	function noop() {}
});

tape( 'the function supports zero-dimensional arrays', function test( t ) {
	var expected;
	var arr;
	var x;

	expected = [ 0 ];

	x = {
		'dtype': 'generic',
		'ndims': 0,
		'length': 0,
		'data': [ 0 ],
		'shape': [],
		'strides': [ 0 ],
		'offset': 0,
		'order': 'row-major',
		'flags': {},
		'get': noop,
		'set': noop
	};
	arr = emptyLike( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'generic', 'returns expected value' );
	t.deepEqual( arr.shape, [], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();

	function noop() {}
});

tape( 'the function supports empty arrays', function test( t ) {
	var expected;
	var arr;
	var x;

	expected = [];

	x = {
		'dtype': 'generic',
		'ndims': 3,
		'length': 0,
		'data': [],
		'shape': [ 2, 0, 2 ],
		'strides': [ 0, 2, 1 ],
		'offset': 0,
		'order': 'row-major',
		'flags': {},
		'get': noop,
		'set': noop
	};
	arr = emptyLike( x );

	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'generic', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 0, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.end();

	function noop() {}
});

tape( 'the function supports specifying array index modes and submodes', function test( t ) {
	var expected;
	var opts;
	var arr;
	var x;

	expected = [ 0, 0, 0, 0, 0, 0, 0, 0 ];

	opts = {
		'mode': 'clamp',
		'submode': [ 'wrap' ]
	};
	x = zeros( 'generic', [ 2, 2, 2 ], 'row-major' );
	arr = emptyLike( x, opts );
	t.strictEqual( instanceOf( arr, ndarray ), true, 'returns expected value' );
	t.strictEqual( arr.dtype, 'generic', 'returns expected value' );
	t.deepEqual( arr.shape, [ 2, 2, 2 ], 'returns expected value' );
	t.strictEqual( instanceOf( arr.data, Array ), true, 'returns expected value' );
	t.deepEqual( arr.data, expected, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	t.strictEqual( arr.iget( arr.length+10 ), 0, 'returns expected value' );
	arr.iset( arr.length+10, 1 );
	t.strictEqual( arr.iget( arr.length+10 ), 1, 'returns expected value' );

	t.strictEqual( arr.get( 2, 2, 2 ), 0, 'returns expected value' );
	arr.set( 2, 2, 2, 3 );
	t.strictEqual( arr.get( 0, 0, 0 ), 3, 'returns expected value' );
	t.strictEqual( arr.get( 2, 2, 2 ), 3, 'returns expected value' );

	t.end();
});

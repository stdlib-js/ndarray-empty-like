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

var dtypes = require( '@stdlib/ndarray-dtypes' );
var empty = require( '@stdlib/ndarray-empty' );
var emptyLike = require( './../lib' );

// Get a list of data types:
var dt = dtypes();

// Generate uninitialized arrays...
var x;
var y;
var i;
for ( i = 0; i < dt.length; i++ ) {
	x = empty( [ 2, 2 ], {
		'dtype': dt[ i ]
	});
	y = emptyLike( x );
	console.log( y.data );
}

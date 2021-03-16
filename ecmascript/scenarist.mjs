export default function Scenarist ( setting = {}, symbol = {

start: Symbol (),
pattern: Symbol (),
owner: Symbol ()

} ) {

if ( ( typeof setting !== 'function' || typeof setting .prototype !== 'object' )
&& ( ! setting || typeof setting !== 'object' ) )
return;

const book = {};
const scenario = function scenario ( ... details ) {

if ( details [ 0 ] === null )
return;

if ( details .length === 0 )
return setting;

switch ( details [ 0 ] ) {

case scenario .start:
return Scenarist (
typeof setting === 'function' ? new setting ( ... details .splice ( 1 ) ) : Object .create ( setting ), symbol
);

case scenario .pattern:
return scenario .Pattern;

case scenario .owner:
return scenario .Owner;

}

if ( typeof details [ 0 ] === 'object' ) {

if ( details [ 0 ] .scenaristable === true && typeof details [ 0 ] .value === 'function' )
details [ 0 ] .value .scenaristable = true;

cast ( true, setting, ... details );

return scenario;

}

let scene = typeof details [ 0 ] === 'function' ? details [ 0 ] : setting [ details [ 0 ] ];
let script = book [ details [ 0 ] ];

if ( typeof scene === 'object' ) {

if ( ! script || script () !== scene ) {

script = book [ details [ 0 ] ] = Scenarist ( scene, symbol );
script .Owner = scenario;

}

scene = script;

}

if ( typeof scene === 'function' )

if ( scene .scenaristable === true )
return scene .call ( setting, scenario, ... details .splice ( typeof details [ 0 ] !== 'function' ? 0 : 1 ) );

else
return scene .call ( setting, ... details .splice ( 1 ) );

scene = details [ 1 ];

if ( typeof scene === 'function' )
scene .scenaristable = true;

if ( typeof scene !== 'undefined' )
cast ( false, setting, scene, details [ 0 ], ... details .splice ( 2 ) );

return setting [ details [ 0 ] ];

};

scenario .owner = symbol .owner || Symbol ();

scenario .pattern = symbol .pattern || Symbol ();
scenario .Pattern = Scenarist ( Object .getPrototypeOf ( setting ), symbol );

scenario .start = symbol .start || Symbol ();
scenario .Start = () => scenario ( scenario .start );

return scenario;

};

const cast = ( descriptor, script, scene, ... actors ) => {

let actor;

if ( descriptor === true )
var { enumerable, configurable } = scene;

for ( const double of actors )

if ( typeof double !== 'object' && typeof double !== 'function' )

if ( actor === undefined ) {

actor = double;

if ( descriptor === true )
Object .defineProperty ( script, actor, scene );

else
script [ actor ] = scene;

}

else
Object .defineProperty ( script, double, Object .assign ( { enumerable, configurable }, {

get: () => script [ actor ],
set: scene => script [ actor ] = scene

} ) );

};

/*

MIT License

Copyright (c) 2021 Faddy Michel Samaan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

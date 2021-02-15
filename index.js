const enumerable = true;
let configurable;
let value;

export default function Scenarist () {

const scenario = function scenario ( ... details ) {

switch ( typeof details [ 0 ] ) {

case 'object':
case 'function':

if ( typeof details [ 0 ] === 'object' ) {

const _scenario = Scenarist ();

for ( const setting in details [ 0 ] )
_scenario ( setting, details [ 0 ] [ setting ] );

value = _scenario;

}

else
value = details [ 0 ];

configurable = false;

for ( const event of details )
if ( [ 'string', 'symbol' ] .includes ( typeof event ) ) {

const descriptor = Object .getOwnPropertyDescriptor ( scenario, event );

if ( ! descriptor || typeof descriptor === 'object' && descriptor .configurable === true ) {

Object .defineProperty ( scenario, event, { configurable, enumerable, value } );

}

}

return scenario;

case 'number':
case 'string':
case 'symbol':

const scene = scenario [ details [ 0 ] ];

switch ( typeof scene ) {

case 'function':

return scene .call ( scenario, ... details .splice ( 1 ) );

default:

value = details [ 1 ];
configurable = true;

if ( typeof value !== 'undefined' )
Object .defineProperty ( scenario, details [ 0 ], { configurable, enumerable, value } );

return scenario [ details [ 0 ] ];

}

}

};

return scenario;

};

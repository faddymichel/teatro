const configurable = true;
const enumerable = true;
let value;

export default function Scenario () {

const scenario = function scenario ( ... details ) {

switch ( typeof details [ 0 ] ) {

case 'object':
case 'function':

if ( typeof details [ 0 ] === 'object' ) {

value = Scenario ();
Object .assign ( value, details [ 0 ] );

}

else
value = details [ 0 ];

for ( const event of details )
if ( [ 'string', 'symbol' ] .includes ( typeof event ) ) {

const descriptor = Object .getOwnPropertyDescriptor ( scenario, event );

if ( ! descriptor || typeof descriptor === 'object' && descriptor .configurable === true ) {

Object .defineProperty ( scenario, event, { enumerable, value } );

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

if ( typeof value !== 'undefined' )
Object .defineProperty ( scenario, details [ 0 ], { configurable, enumerable, value } );

return scenario [ details [ 0 ] ];

}

}

};

return scenario;

};

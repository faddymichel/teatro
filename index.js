const enumerable = true;
let configurable;
let value;

export default function Scenarist ( script = {} ) {

const setting = Object .create ( script );

const scenario = function scenario ( ... details ) {

if ( details .length === 0 )
return Scenarist ( script );

switch ( typeof details [ 0 ] ) {

case 'object':
case 'function':

if ( typeof details [ 0 ] === 'object' ) {

const _scenario = Scenarist ();

for ( const character in details [ 0 ] )
_scenario ( character, details [ 0 ] [ character ] );

value = _scenario;

}

else
value = details [ 0 ];

configurable = false;

for ( const event of details )
if ( [ 'string', 'symbol' ] .includes ( typeof event ) ) {

const descriptor = Object .getOwnPropertyDescriptor ( scenario, event );

if ( ! descriptor || typeof descriptor === 'object' && descriptor .configurable === true ) {

Object .defineProperty ( script, event, { configurable, enumerable, value } );

}

}

return scenario;

case 'number':
case 'string':
case 'symbol':

const scene = setting [ details [ 0 ] ];

switch ( typeof scene ) {

case 'function':

return scene .call ( scenario, ... details .splice ( 1 ) );

default:

value = details [ 1 ];
configurable = true;

if ( typeof value !== 'undefined' )
Object .defineProperty ( setting, details [ 0 ], { configurable, enumerable, value } );

return setting [ details [ 0 ] ];

}

}

};

return scenario;

};

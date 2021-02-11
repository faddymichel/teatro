const book = Symbol ();

export default function Scenario () {

const scenario = function scenario ( ... details ) {

switch ( typeof details [ 0 ] ) {

case 'function':
case 'object':

for ( const event of details )
if ( [ 'string', 'symbol' ] .includes ( typeof event ) ) {

const descriptor = Object .getOwnPropertyDescriptor ( scenario, event );

if ( ! descriptor || typeof descriptor === 'object' && descriptor .configurable === true )
Object .defineProperty ( scenario, event, {

enumerable: true,
value: details [ 0 ]

} );

}

return scenario;

case 'number':
case 'string':
case 'symbol':

const scene = scenario [ details [ 0 ] ];

switch ( typeof scene ) {

case 'function':

return scenario [ details [ 0 ] ] .call ( scenario, details [ 0 ], ... details );

case 'object':

return Object .assign ( scene, ... details );

}

break;

}

// return scenario ( '$error', 'details [ 0 ] not found' );

};

return scenario;

};

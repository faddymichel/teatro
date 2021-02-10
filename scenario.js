const book = Symbol ();

export default function Scenario () {

const scenario = function scenario ( scene, ... details ) {

let bookmark, script;

switch ( typeof scene ) {

case 'function':

let value = scenario [ book ] || {};
Object .defineProperty ( scenario, book, { value } );

bookmark = Symbol ();
value = {};
script = Object .defineProperty ( scenario [ book ], bookmark, { value } ) [ bookmark ];

value = scene;
Object .defineProperty ( script, 'action', { value } );

value = {};
Object .defineProperty ( script, 'setting', { value } );

for ( const event of details )
if ( [ 'string', 'symbol' ] .includes ( typeof event ) ) {

Object .defineProperty ( scenario [ book ], event, {

configurable: true,
value: bookmark

} );

}

return bookmark;

case 'number':
case 'string':
case 'symbol':

bookmark = scenario [ book ] [ scene ];
script = scenario [ book ] [ bookmark ];

if ( typeof script === 'object' && typeof script .action === 'function' )
return script .action .call ( scenario, scene, ... details );

break;

}

// return scenario ( '$error', 'Scene not found' );

};

return scenario;

};

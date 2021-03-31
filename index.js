const Scenarist = function Scenarist ( setting = {}, special ) {

if ( ( typeof setting !== 'function' || typeof setting .prototype !== 'object' )
&& ( ! setting || typeof setting !== 'object' ) )
return;

const book = {};
const scenario = function scenario ( ... details ) {

if ( details [ 0 ] === null )
return;

if ( details .length === 0 )
return setting;

const prepend = details .indexOf ( scenario .prepend );

if ( prepend > -1 )
return scenario ( ... details .splice ( prepend + 1 ), ... details .splice ( 0, details .length - 1 ) );

const play = details .indexOf ( scenario .play );

if ( play > -1 )
return scenario ( ... details .splice ( 0, play ), scenario ( ... details [ 1 ] ), ... details .splice ( 2 ) );

if ( typeof details [ 0 ] === 'object' ) {

if ( details [ 0 ] .scenaristable === true && typeof details [ 0 ] .value === 'function' )
details [ 0 ] .value .scenaristable = true;

return scenario ( scenario .describe, details [ 1 ], details [ 0 ], ... details .splice ( 2 ) );

}

else if ( typeof details [ 0 ] === 'function' ) {

details [ 0 ] .scenaristable = true;

return scenario ( scenario .assign, details [ 1 ], details [ 0 ], ... details .splice ( 2 ) );

}

let scene, script;

switch ( details [ 0 ] ) {

case scenario .script:
return scenario;

case scenario .describe:
if ( scenario .strict === true )
return setting [ details [ 1 ] ];

Object .defineProperty ( setting, details [ 1 ], details [ 2 ] );

return scenario ( scenario .cast, details [ 1 ], ... details .splice ( 3 ) );

case scenario .assign:
if ( scenario .strict === true )
return setting [ details [ 1 ] ];

setting [ details [ 1 ] ] = details [ 2 ];

return scenario ( scenario .cast, details [ 1 ], ... details .splice ( 3 ) );

case scenario .cast:
let actor = details [ 1 ];
let { enumerable, configurable } = Object .getOwnPropertyDescriptor ( setting, actor );

for ( const double of details .splice ( 2 ) )
Object .defineProperty ( setting, double, Object .assign ( { enumerable, configurable }, {

get: () => setting [ actor ],
set: scene => setting [ actor ] = scene

} ) );

return;

case scenario .pattern:
scene = scenario .Pattern;
break;

case scenario .owner:
scene = scenario .Owner;
break;

case scenario .live:

if ( typeof details [ 1 ] !== 'function' )
return;

scene = details [ 1 ];
details = details .splice ( 2 );
break;

default:

scene = setting [ details [ 0 ] ];
script = book [ details [ 0 ] ];

if ( typeof scene === 'object' ) {

if ( ! script || script () !== scene ) {

script = book [ details [ 0 ] ] = Scenarist ( scene, special );
script .Owner = scenario;

}

scene = script;

}

}

if ( typeof scene === 'function' )

if ( scene .scenaristable === true )
return scene .call ( setting, scenario, ... details );

else
return scene .call ( setting, ... details .splice ( 1 ) );

if ( details [ 1 ] === scenario .branch )
details [ 1 ] = scenario .Branch ( ... typeof setting === 'function' ? details .splice ( 2 ) : [] ) ();

scene = details [ 1 ];

if ( typeof scene !== 'undefined' )
scenario ( scenario .assign, ... details );

return setting [ details [ 0 ] ];

};

Object .assign ( scenario, {

play: Symbol (),
cast: Symbol (),
assign: Symbol (),
describe: Symbol (),
branch: Symbol (),
pattern: Symbol (),
owner: Symbol (),
script: Symbol (),
prepend: Symbol (),
live: Symbol ()

}, special );

scenario .Pattern = Scenarist ( Object .getPrototypeOf ( setting ), special );
scenario .Branch = ( ... details ) => Scenarist ( typeof setting === 'function' ? new setting ( ... details ) : Object .create ( setting ), special );

return scenario;

};

module .exports = Scenarist;

const Scenarist = function Scenarist ( setting = {}, special ) {

if ( ( typeof setting !== 'function' || typeof setting .prototype !== 'object' )
&& ( ! setting || typeof setting !== 'object' ) )
return;

const book = {};
const scenario = function scenario ( ... details ) {

if ( details [ 0 ] === null )
return;

if ( details .length === 0 && order .strict !== true )
return setting;

let scene, script;

switch ( details [ 0 ] ) {

case order .script:
return scenario;

case order .describe:
if ( order .strict === true )
return setting [ details [ 1 ] ];

Object .defineProperty ( setting, details [ 1 ], details [ 2 ] );

return scenario ( order .cast, details [ 1 ], ... details .splice ( 3 ) );

case order .assign:
if ( order .strict === true )
return setting [ details [ 1 ] ];

setting [ details [ 1 ] ] = details [ 2 ];

return scenario ( order .cast, details [ 1 ], ... details .splice ( 3 ) );

case order .cast:
let actor = details [ 1 ];
let { enumerable, configurable } = Object .getOwnPropertyDescriptor ( setting, actor );

for ( const double of details .splice ( 2 ) )
Object .defineProperty ( setting, double, Object .assign ( { enumerable, configurable }, {

get: () => setting [ actor ],
set: scene => setting [ actor ] = scene

} ) );

return;

case order .pattern:
scene = order .Pattern;
break;

case order .owner:
scene = order .Owner;
break;

case order .live:

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

if ( details [ 1 ] === order .branch )
details [ 1 ] = order .Branch ( ... typeof setting === 'function' ? details .splice ( 2 ) : [] ) ();

scene = details [ 1 ];

if ( typeof scene !== 'undefined' )
scenario ( order .assign, ... details );

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

order .Pattern = Scenarist ( Object .getPrototypeOf ( setting ), special );
order .Branch = ( ... details ) => Scenarist ( typeof setting === 'function' ? new setting ( ... details ) : Object .create ( setting ), special );

return scenario;

};

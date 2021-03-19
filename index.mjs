const Scenarist = function Scenarist ( setting = {}, symbol = {

cast: Symbol (),
assign: Symbol (),
describe: Symbol (),
branch: Symbol (),
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

case scenario .describe:
Object .defineProperty ( setting, details [ 1 ], details [ 2 ] );

return scenario ( scenario .cast, details [ 1 ], ... details .splice ( 3 ) );

case scenario .assign:
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

return scenario;

case scenario .branch:
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

return scenario ( scenario .describe, details [ 1 ], details [ 0 ], ... details .splice ( 2 ) );

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
scenario ( scenario .assign, ... details );

return setting [ details [ 0 ] ];

};

Object .assign ( scenario, symbol );

scenario .Pattern = Scenarist ( Object .getPrototypeOf ( setting ), symbol );
scenario .Branch = () => scenario ( scenario .branch );

return scenario;

};

export default Scenarist;

const error = ( name, message ) => Object .assign ( Error ( message ), { name } );

const isAction = action => [ 'function', 'object' ] .includes ( typeof action );

const cast = ( script, scene, actor, ... doubles ) => {

if ( isAction ( actor ) )
throw error ( 'ScenaristError#cast', "Couldn't cast actors for scene. Invalid actor." );

script [ actor ] = scene;

for ( const double of doubles )
if ( ! isAction ( double ) )
if ( isAction ( scene ) )
script [ double ] = scene;

else
Object .defineProperty ( script, double, {

configurable: true,
enumerable: true,
get: () => script [ actor ],
set: scene => script [ actor ] = scene

} );

};

export default function Scenarist ( setting = {}, thisScenario = true ) {

let establishment;

if ( typeof setting === 'function' )
try {

establishment = setting;
setting = new setting ();

} catch ( e ) {

throw error ( 'ScenaristError#establish', "Couldn't establish scenario using the passed setting." );

}

const Script = Object .getPrototypeOf ( setting );

const scenario = function scenario ( ... details ) {

if ( details .length === 0 )
return Scenarist ( scenario .establishment || Script .constructor, thisScenario );

if ( isAction ( details [ 0 ] ) ) {

details [ 0 ] = typeof details [ 0 ] === 'object' ? Scenarist ( details [ 0 ], thisScenario ) : details [ 0 ];

cast ( Script, ... details );

return scenario;

}

let scene = scenario .setting [ details [ 0 ] ] || setting [ details [ 0 ] ];

if ( isAction ( scene ) ) {

if ( typeof scene === 'object' )
scene = scenario .setting [ details [ 0 ] ] = Scenarist ( scene, false );

return thisScenario ? scene .call ( scenario, ... details ) : scene ( ... details .splice ( 1 ) );

}

scene = details [ 1 ];

if ( typeof scene === 'object' )
scene = Scenarist ( scene, false );

if ( typeof scene !== 'undefined' )
cast ( setting, scene, details [ 0 ], ... details .splice ( 2 ) );

return setting [ details [ 0 ] ];

};

scenario .setting = {};

if ( establishment )
scenario .establishment = establishment;

return scenario;

};

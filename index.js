export default function Scenarist ( setting = {} ) {

if ( ! setting || typeof setting !== 'object' )
return;

const book = {};
const scenario = function scenario ( ... details ) {

if ( details [ 0 ] === null )
return;

if ( details [ 0 ] === scenario )
return scenario ( ... details .split ( 1 ) );

if ( details .length === 0 )
return setting;

if ( typeof details [ 0 ] === 'function' ) {

const _scenario = Scenarist ( Object .create ( setting ) );
const _setting = _scenario ();

Object .assign (
_setting,
details [ 0 ] .call ( _setting, _scenario, ... details .splice ( 1 ) ) 
);

return _scenario;

}

if ( typeof details [ 0 ] === 'object' ) {

if ( details [ 0 ] .scenaristable === true && typeof details [ 0 ] .value === 'function' )
details [ 0 ] .value .scenaristable = true;

cast ( setting, ... details );

return scenario;

}

let scene = setting [ details [ 0 ] ];
let script = book [ details [ 0 ] ];

if ( typeof scene === 'object' ) {

if ( ! script || script () !== scene )
script = book [ details [ 0 ] ] = Scenarist ( scene );

scene = script;

}

if ( typeof scene === 'function' )

if ( scene .scenaristable === true )
return scene .call ( setting, scenario, ... details .splice ( 1 ) );

else
return scene .call ( setting, ... details .splice ( 1 ) );

scene = details [ 1 ];

if ( typeof scene === 'object' )
scene = Scenarist ( scene );

else if ( typeof scene === 'function' && ! scene .scenaristable )
scene .scenaristable = true;

if ( typeof scene !== 'undefined' )
cast ( setting, {

value: scene,
configurable: true,
enumerable: true,
writable: true

}, details [ 0 ], ... details .splice ( 2 ) );

return setting [ details [ 0 ] ];

};

scenario .Scenario = Scenarist ( Object .getPrototypeOf ( setting ) );

return scenario;

};

const cast = ( script, descriptor, ... actors ) => {

let actor;
const { enumerable, configurable } = descriptor;

for ( const double of actors )

if ( typeof double !== 'object' && typeof double !== 'function' )

if ( actor === undefined ) {

actor = double;

Object .defineProperty ( script, actor, descriptor );

}

else
Object .defineProperty ( script, double, Object .assign ( { enumerable, configurable }, {

get: () => script [ actor ],
set: scene => script [ actor ] = scene

} ) );

};

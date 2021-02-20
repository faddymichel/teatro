export default function Scenarist ( setting = {} ) {

if ( ! setting || typeof setting !== 'object' )
return;

const book = {};
const scenario = function scenario ( ... details ) {

if ( details [ 0 ] === null )
return;

if ( details .length === 0 )
return setting;

if ( typeof details [ 0 ] === 'function' ) {

const _scenario = Scenarist ( Object .create ( setting ) );

details [ 0 ] .call ( _scenario, ... details .splice ( 1 ) );

return _scenario;

}

if ( typeof details [ 0 ] === 'object' ) {

cast ( setting, ... details );

return scenario;

}

let scene = book [ details [ 0 ] ] || setting [ details [ 0 ] ];

if ( typeof scene === 'object' )
scene = book [ details [ 0 ] ] = Scenarist ( scene );

if ( typeof scene === 'function' )
return scene .call ( setting, ... details .splice ( 1 ) );

scene = details [ 1 ];

if ( typeof scene === 'object' )
scene = Scenarist ( scene );

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

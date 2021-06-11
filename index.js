const Scenarist = function Scenarist ( setting = {}, signature = Symbol (), establishment ) {

if ( typeof setting !== 'object' && typeof setting !== 'function' )
return;

const play = typeof this === 'function' ? this () : this;
const passage = {};
const scenario = function scenario ( ... details ) {

const [ order ] = details;
details = details .splice ( 1 );

if ( order === signature )
return setting;

if ( typeof order === 'object' ) {

const bookmark = Symbol ();
Object .defineProperty ( play, bookmark, order );

for ( const direction of details )

if ( typeof direction !== 'function' && typeof direction !== 'object' )
Object .defineProperty ( play, direction, {

configurable: order .configurable === true,
get: () => play [ bookmark ],
set: value => play [ bookmark ] = value

} );

}

const _setting = setting [ order ];

if ( _setting && typeof _setting === 'object' ) {

let _scenario = passage [ order ];

if ( ! _scenario || _scenario ( signature ) !== _setting )
_scenario = passage [ order ] = Scenarist .call ( Object .create ( play ), _setting, signature, establishment );

return _scenario ( ... details );

}

if ( typeof play [ order ] === 'function' )
return play [ order ] .call ( { scenario, order }, ... details );

if ( play [ order ] )
return play [ order ] = details .length > 0 ? details [ 0 ] : play [ order ];

if ( typeof setting [ order ] === 'function' )
return setting [ order ] .call ( setting, ... details );

return setting [ order ];

};

if ( typeof establishment === 'function' )
establishment ( scenario, signature );

return scenario;

} .bind ( () => ( {} ) );

module .exports = Scenarist;

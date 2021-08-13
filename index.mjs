const Scenarist = function Scenarist ( setting = {}, establishment ) {

if ( ! setting || typeof setting !== 'object' && typeof setting !== 'function' && setting !== null )
return;

const { play, appendix } = typeof this === 'function' ? this () : this;

Object .defineProperty ( appendix, 'setting', { value: setting } );

const prologue = Object .getPrototypeOf ( play );
const $ = function scenario ( ... act ) {

if ( act .length === 0 )
return $;

const [ actor, ... details ] = act;

if ( actor === appendix .signature )
return appendix;

if ( typeof actor === 'function' )
return describe ( ... act );

if ( actor instanceof Array )
return [ $ ( ... actor ), $ ( ... details ) ];

if ( typeof actor === 'object' )
return Object .keys ( ( _act = actor ) )
.map ( _actor => $ ( _actor, ... ( _act [ _actor ] instanceof Array ? _act [ _actor ] : [ _act [ _actor ] ] ) ) );

const { character } = play [ actor ] || { character: actor };
let scene = setting [ character ];

if ( typeof scene === 'object' && ! ( play [ character ] && play [ character ] .setting === scene ) ) {

describe ( Scenarist .call ( {

play: Object .create ( prologue ),
appendix: Object .defineProperties ( {}, {

signature: { enumerable: true, value: appendix .signature },
depth: { enumerable: true, value: appendix .depth + 1 },
binder: { enumerable: true, value: $ }

} )

}, setting [ character ], establishment ), character );

play [ character ] .setting = scene;

}

if ( typeof scene === 'function' )
scene = scene .call ( setting, ... details );

else if ( typeof scene !== 'object' && details .length > 0 && appendix .writable === true )
scene = setting [ character ] = details .length === 1 ? details [ 0 ] : details;

const { action, cue, blooper } = play [ character ] || {};

if ( action )
( async ( order = Object .defineProperty ( { $, scene, character, actor }, 'transition', {

enumerable: true,
value: []

} ) ) => ( action .call ( order, ... details ), order ) ) ()
.then ( order => cue .length ? cue .forEach ( character => $ ( character, ... order .transition ) ) : undefined )
.catch ( error => blooper .length ? blooper .forEach ( character => $ ( character, error ) ) : undefined );

return scene;

};

function describe ( ... details ) {

if ( details .length < 2 )
return;

const { actor } = this || {};
const [ action, character, ... cast ] = details;

if ( typeof action !== 'function' )
return;

const script = ( actor === appendix .prologue ? prologue : play ) [ character ] = { character, action };

for ( const actor of [ 'cue', 'blooper' ] )
script [ actor ] = script [ $ [ actor ] ] = script [ `un${ actor }` ] = script [ $ [ `un${ actor }` ] ] = [];

return direct ( character, ... cast );

}

function direct ( ... direction ) {

if ( direction .length < 2 )
return;

const [ character, actor, ... details ] = direction;

if ( ! play [ character ] )
return;

Object .defineProperty ( play, actor, {

configurable: true,
get: () => play [ character ]

} );

return direct ( character, ... details );

}

function stream ( actor, ... cast ) {

if ( ! play [ actor ] )
return;

const { character } = play [ actor ];
const stream = play [ actor ] [ this .actor ];
const characters = cast .filter ( actor => ! stream .includes ( character ) )
.map ( actor => play [ actor ] .character );

if ( [ appendix .cue, appendix .blooper ] .includes ( this .actor ) )
stream .push ( ... characters );

else
stream .forEach ( () => characters .includes ( stream [ stream .length - 1 ] ) ? stream .pop () : stream .shift ( stream .pop () ) );

}

for ( const key of [ 'describe', 'prologue', 'direct', 'cue', 'blooper', 'uncue', 'unblooper' ] )
Object .defineProperty ( appendix, key, { enumerable: true, value: Symbol () } );

describe ( describe, appendix .describe, appendix .prologue );
describe ( direct, appendix .direct );
describe ( stream, appendix .cue, appendix .blooper, appendix .uncue, appendix .unblooper );

if ( typeof establishment === 'function' )
establishment ( $, appendix );

return $;

} .bind ( () => ( {

play: Object .create ( {} ),
appendix: Object .defineProperties ( {}, {

signature: { enumerable: true, value: Symbol () },
depth: { enumerable: true, value: 0 }

} )

} ) );

export default Scenarist;

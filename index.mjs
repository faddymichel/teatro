const Scenarist = function Scenarist ( setting = {}, establishment ) {

if ( ! setting || typeof setting !== 'object' && typeof setting !== 'function' && setting !== null )
return;

const { play, appendix } = typeof this === 'function' ? this () : this;
appendix .setting = setting;
const passage = {};

const $ = function scenario ( ... situation ) {

if ( situation .length === 0 )
return $;

const [ actor, ... details ] = situation;

if ( typeof actor === 'function' )
return describe ( ... situation );

if ( actor instanceof Array )
return [ $ ( ... actor ), $ ( ... details ) ];

if ( actor === appendix .signature )
return appendix;

const { character } = play [ actor ] || { character: actor };
let scene = setting [ character ];

if ( typeof scene === 'object' )
scene = passage [ character ] = passage [ character ] && passage [ character ] ( appendix .signature ) .setting === scene ?
passage [ character ] :
Scenarist .call ( {

play: Object .create ( play ),
appendix: {

signature: appendix .signature,
depth: appendix .depth + 1,
binder: $

}


}, scene, establishment );

if ( typeof scene === 'function' )
scene = scene .call ( setting, ... details );

const { action, cue, blooper } = play [ character ] || {};

if ( action )
( async ( order = Object .defineProperty ( { $, scene, character, actor }, 'transition', { enumerable: true, value: [] } ) ) => ( action .call ( order, ... details ), order ) ) ()
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

const script = play [ character ] = { character, action };

for ( const signal of [ 'cue', 'blooper' ] )
script [ signal ] = script [ $ [ signal ] ] = script [ `un${ signal }` ] = script [ $ [ `un${ signal }` ] ] = [];

return direct ( character, ... cast );

}

function direct ( ... details ) {

if ( details .length < 2 )
return;

const [ character, actor ] = details;

if ( ! play [ character ] )
return;

Object .defineProperty ( play, actor, {

configurable: true,
get: () => play [ character ],
set: value => play [ character ] = value

} );

return direct ( character, ... details .splice ( 2 ) );

}

for ( const key of [ 'describe', 'direct', 'cue', 'blooper', 'uncue', 'unblooper' ] )
$ [ key ] = Symbol ();

describe ( describe, $ .describe );
describe ( direct, $ .direct );
describe ( function stream ( actor, ... cast ) {

if ( ! play [ actor ] )
return;

const { character } = play [ actor ];
const stream = play [ actor ] [ this .actor ];
const characters = cast .filter ( actor => ! stream .includes ( character ) )
.map ( actor => play [ actor ] .character );

if ( [ $ .cue, $ .blooper ] .includes ( this .actor ) )
stream .push ( ... characters );

else
stream .forEach ( () => characters .includes ( stream [ stream .length - 1 ] ) ? stream .pop () : stream .shift ( stream .pop () ) );

}, $ .cue, $ .blooper, $ .uncue, $ .unblooper );

if ( typeof establishment === 'function' )
establishment ( $, appendix );

return $;

} .bind ( () => ( {

play: {},
appendix: {

signature: Symbol (),
depth: 0

}

} ) );

export default Scenarist;

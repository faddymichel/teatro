const Scenarist = function Scenarist ( setting = {}, signature = Symbol (), establishment ) {

if ( ! setting || typeof setting !== 'object' && typeof setting !== 'function' && setting !== null )
return;

const play = typeof this === 'function' ? this () : this;
const passage = {};

const $ = function scenario ( ... situation ) {

if ( situation .length === 0 )
return $;

const [ actor, ... details ] = situation;

if ( typeof actor === 'function' )
return describe ( ... situation );

if ( actor instanceof Array )
return [ $ ( ... actor ), $ ( ... details ) ];

if ( actor === signature )
return setting;

const { character } = play [ actor ] || { character: actor };
let scene = setting [ character ];

if ( typeof scene === 'object' )
scene = passage [ character ] = passage [ character ] && passage [ character ] ( signature ) === scene ?
passage [ character ] :
Scenarist .call ( Object .create ( play ), scene, signature, establishment );

if ( typeof scene === 'function' )
scene = scene .call ( setting, ... details );

const { action, cue, blooper } = play [ character ] || {};

if ( action )
( async function play () {

return action .call ( this, ... details ), this;

} ) .bind ( { $, scene, character, actor, transition: [] } ) ()
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
describe ( function cue ( actor, ... cast ) {

const script = play [ actor ];
const signal = this .actor;

if ( script ) {

const characters = cast
.filter ( actor => ! script [ signal ] .includes ( script .character ) )
.map ( actor => play [ actor ] .character );

if ( [ $ .cue, $ .blooper ] .includes ( signal ) )
for ( const character of characters )
script [ signal ] .push ( character );

else
for ( const character of characters ) {

const index = script [ signal ] .indexOf ( character );

if ( index > -1 )
delete script [ signal ] [ index ];

}

}

}, $ .cue, $ .blooper, $ .uncue, $ .unblooper );

if ( typeof establishment === 'function' )
establishment ( $, signature );

return $;

} .bind ( () => ( {} ) );

export default Scenarist;

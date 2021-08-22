const Scenarist = function Scenarist ( setting = {}, establishment ) {

if ( ! setting || typeof setting !== 'object' && typeof setting !== 'function' && setting !== null )
return;

const play = typeof this === 'function' ? new this ( setting ) : this;
const { script, plot, appendix } = play;
const $ = function scenario ( ... situation ) {

if ( situation .length === 0 )
return $;

const [ actor, ... details ] = situation;

if ( actor instanceof Array )
return [ $ ( ... actor ), $ ( ... details ) ];

if ( typeof actor === 'function' )
return $ ( appendix .describe, ... situation );

const { character } = plot [ actor ] || { character: actor };

if ( typeof setting [ character ] === 'object' && typeof passage [ character ] && passage [ character ] ( appendix .setting ) !== setting [ character ] )
passage [ character ] = Scenarist .call ( play .branch ( resolution ), resolution, establishment );

let resolution = plot [ character ];

if ( typeof resolution === 'function' )
resolution = resolution .call ( script, ... details );

else if ( details .length > 0 )
resolution = script [ character ] = details .length === 1 ? details [ 0 ] : details;

const { action, cue, blooper } = plot [ character ] || {};

if ( action )
( async ( order = Object .defineProperty ( { $, resolution, character, actor }, 'transition', {

enumerable: true,
value: []

} ) ) => ( action .call ( order, ... details ), order ) ) ()
.then ( order => cue .length ? cue .forEach ( character => $ ( character, ... order .transition ) ) : undefined )
.catch ( error => blooper .length ? blooper .forEach ( character => $ ( character, error ) ) : undefined );

return resolution;

};

if ( typeof establishment === 'function' )
establishment ( $, appendix );

return $;

} .bind ( ( () => {

const Play = function Play ( appendix, setting ) {

const play = this;

play .appendix = appendix;

play .setting = setting;
play .script = Object .create ( play .setting );

play .prologue = prologue;
play .plot = Object .create ( play .prologue );

};

setting,
appendix = ( () => {

const appendix = {};

for ( const key of [ 'describe', 'prologue', 'cast', 'cue', 'blooper', 'uncue', 'unblooper' ] )
Object .defineProperty ( appendix, key, { enumerable: true, value: Symbol () } );

return appendix;

} ) (),
basis = ( () => {

const basis = {};

basis [ appendix .setting ] = setting;
basis [ appendix .depth ] = 0;

return basis;

} ) (),
prologue = ( () => {

const prologue = {};
const write = describe .bind ( {

resolution: { plot: prologue, appendix }

} );

write ( describe, appendix .describe, appendix .prologue );
write ( cast, appendix .cast );
write ( stream, appendix .cue, appendix .blooper, appendix .uncue, appendix .unblooper );

return prologue;

} ) ()

) {

const play = this;

play .appendix = appendix;

play .setting = setting;
play .basis = Object .setPrototypeOf ( basis, play .setting );
play .script = Object .create ( play .basis );

play .prologue = prologue;
play .plot = Object .create ( play .prologue );

};

Play .prototype .branch = setting => new Play ( setting );

function describe ( ... details ) {

const { plot, appendix } = this .resolution;
const [ action, character, ... actors ] = details;

if ( details .length < 2 || typeof action !== 'function' )
return plot;

const scene = plot [ character ] = { character, action };

for ( const stream of [ 'cue', 'blooper' ] )
scene [ stream ] = scene [ appendix [ stream ] ] = scene [ `un${ stream }` ] = scene [ appendix [ `un${ stream }` ] ] = [];

return cast .call ( this, character, ... actors );

}

function cast ( ... details ) {

const { plot } = this .resolution;
const [ character, actor, ... actors ] = details;

if ( details .length < 2 || ! plot [ character ] )
return plot;

Object .defineProperty ( plot, actor, {

configurable: true,
get: () => plot [ character ]

} );

return cast .call ( this, character, ... actors );

}

function stream ( actor, ... cast ) {

if ( ! plot [ actor ] )
return;

const { character } = plot [ actor ];
const stream = plot [ actor ] [ this .actor ];
const characters = cast .filter ( actor => ! stream .includes ( character ) )
.map ( actor => plot [ actor ] .character );

if ( [ appendix .cue, appendix .blooper ] .includes ( this .actor ) )
stream .push ( ... characters );

else
stream .forEach ( () => characters .includes ( stream [ stream .length - 1 ] ) ? stream .pop () : stream .shift ( stream .pop () ) );

}

return Play;

} ) () );

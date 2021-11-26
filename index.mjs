const Scenarist = function Scenarist ( setting ) {

return this ( { setting } );

} .bind ( ( () => {

const scenario = async function scenario ( direction, ... details ) {

const production = typeof this === 'function' ? this () : this;
const { setting, play, scene } = production;

switch ( typeof scene .conflict ) {

case 'undefined':

Object .assign ( scene, { direction, details } );

if ( typeof setting .establishment === 'function' )
setting .establishment ( scene );

if ( ( scene .conflict = setting [ scene .direction ] ) === undefined )
return;

scene .location .push ( scene .direction );

break;

case 'object':

if ( ! scene .conflict )
return scene .conflict;

return scenarist ( {

setting: scene .conflict,
location: scene .location .slice (),
previous: scene

} ) ( ... scene .details );

default:

if ( scene .cue )
play [ scene .cue ] = play [ scene .cue ] || new Climax ();

scene .resolution = ( play [ scene .cue ] ?.resolution || Promise .resolve () )
.then ( transition => {

Object .assign ( scene, { transition } );

const climax = play [ scene .signal ] = play [ scene .signal ] || new Climax ();
const resolution = typeof scene .conflict === 'function' ?
scene .conflict .call ( typeof setting === 'function' ? new setting ( scene ) : setting, ... scene .details ) :
scene .resolution || scene .conflict;

climax .resolve ( resolution );

return resolution;

} );

return typeof setting .reversal === 'function' ? setting .reversal ( Object .assign ( scene, {

plot: scenarist ( {

setting, play,
location: scene .location .slice (),
cue: scene .signal,
previous: scene

} )

} ) ) : scene .resolution;

}

return scenario .call ( production, scene .direction, ... scene .details );

};

const Climax = function Climax () {

this .resolution = new Promise ( resolve => { Object .assign ( this, { resolve } ) } );

};

const scenarist = function scenarist ( { setting, play, location, previous, cue } ) {

const bound = scenario .bind ( () => ( {

setting,
play: play || {},
scene: Object .defineProperty ( { location: location || [], cue, previous }, 'scenario', {

enumerable: true,
get: () => bound

} )

} ) );

return Object .defineProperty ( bound, 'name', { name: 'Scenarist' } );

};

return scenarist;

} ) () );

export default Scenarist;

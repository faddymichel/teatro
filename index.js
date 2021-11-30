const Scenarist = function Scenarist ( setting ) {

return this ( { setting } );

} .bind ( ( () => {

const scenario = async function scenario ( direction, ... details ) {

const script = typeof this === 'function' ? this () : this;
const { setting, play, scene } = script;

switch ( typeof scene .conflict ) {

case 'undefined':

Object .assign ( scene, { direction, details } );

if ( typeof setting === 'function' && setting === setting ?.prototype ?.constructor )
script .setting = new setting ( scene );

if ( ( scene .conflict = script .setting [ scene .direction ] ) === undefined )
return;

scene .location .push ( scene .direction );

break;

case 'object':
case 'function':

if ( ! scene .conflict )
return scene .conflict;

if ( typeof scene .conflict === 'object' || scene .conflict === scene .conflict ?.prototype ?.constrructor ) {

scene .resolution = scenarist ( {

setting: scene .conflict,
location: scene .location .slice (),
previous: scene

} ) ( ... scene .details );

scene .conflict = false;
}

default:

if ( scene .cue )
play [ scene .cue ] = play [ scene .cue ] || new Climax ();

scene .resolution = scene .resolution || ( play [ scene .cue ] ?.resolution || Promise .resolve () )
.then ( transition => {

if ( scene .transition !== undefined )
Object .defineProperty ( setting, scene .transition, { value: transition, enumerable: true } );

const climax = play [ scene .signal ] = play [ scene .signal ] || new Climax ();
const resolution = typeof scene .conflict === 'function' ? scene .conflict .call ( setting, ... scene .details ) : scene .resolution || scene .conflict;

climax .resolve ( resolution );

return climax .resolution;

} );

return typeof scene .reversal === 'function' ? scene .reversal ( Object .assign ( scene, {

plot: scenarist ( {

setting, play,
location: scene .location .slice (),
cue: scene .signal,
previous: scene

} )

} ) ) : scene .resolution;

}

return scenario .call ( script, scene .direction, ... scene .details );

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

module .exports = Scenarist;

import Scenarist from '../node_modules/scenarist/index.js';

const Context = window .AudioContext || window .WebkitAudioContext;

window .onload = () => {

const oscilla = Scenarist ();

oscilla ( 'context', new Context (), 'engine' )

oscilla ( () => {

oscilla ( 'note', oscilla ( 'context', 'createOscillator' ) );
oscilla ( 'loudness', oscilla ( 'context', 'createGain' ) );
oscilla ( 'note', 'connect', oscilla ( 'loudness' ) );
oscilla ( 'loudness', 'connect', oscilla ( 'context', 'destination' ) );
oscilla ( 'note', 'start' );

}, 'play' );

const button = document .createElement ( 'button' );
button .onclick = () => oscilla ( 'play' );
button .textContent = 'Play Oscilla';

document .body .appendChild ( button )

/*
oscilla ( {}, 'graph' );

console .log ( 'Creating oscillator ...',
oscilla ( 'context', 'createOscillator' ) );
*/

};

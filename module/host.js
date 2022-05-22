import Play from './Play.js';

export default ( venue ) => {

const descriptor = {};

descriptor .enumerable = true;
descriptor .value = function host ( scenario, signature ) {

const teatro = this;

if ( typeof scenario !== 'function' ) {

teatro .emit ( 'error', new TypeError ( "scenario must be of type 'function'." ) );

return false;

}
const key = Symbol ();
const play = new Play ( scenario, signature );

play .on ( 'ticket', ( stamp ) => {

play .once ( 'end', () => {

teatro .cancel ( stamp, play .signature );

} );

} );

Object .defineProperty ( venue, key, {

configurable: true,
value: play

} );

return key;

};

return descriptor;

};

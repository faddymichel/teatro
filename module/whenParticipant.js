const $ = require ( './symbol' );
const $ticket = require ( './ticket/symbol' );
const _usher = require ( './usher' );

const descriptor = module .exports;

descriptor .value = function whenParticipant () {

const teatro = this;

const stamp = teatro [ $ .ticket ] [ $ticket .issue ] ( _usher );
const usher = teatro [ $ .ticket ] [ $ticket .retrieve ] ( stamp );

teatro [ $ .server ] .on ( 'connection', ( socket ) => {

usher .play ( socket );

} );

teatro .on ( 'host', ( stamp, host ) => {

host .on ( 'end', ( { socket } ) => {

usher .play ( socket );

} );
 
} );

};

const $ = require ( './symbol' );
const { issue, retrieve } = require ( './ticket/symbol' );
const _usher = require ( './usher' );

const descriptor = module .exports;

descriptor .value = function whenParticipant () {

const teatro = this;

const stamp = teatro [ $ .ticket ] [ issue ] ( _usher ( teatro [ $ .ticket ], retrieve ) );
const usher = teatro [ $ .ticket ] [ retrieve ] ( stamp );

teatro [ $ .server ] .on ( 'connection', ( socket ) => {

usher .play ( socket );

} );

teatro .on ( 'host', ( stamp, host ) => {

host .on ( 'end', ( { socket } ) => {

usher .play ( socket );

} );
 
} );

};

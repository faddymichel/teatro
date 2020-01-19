const EventEmitter = require ( 'events' );
 
const Play = module .exports = function Play ( _ ) {

const play = this;

EventEmitter .call ( play );

Object .assign ( play, _ );

play .subprocess .stdin .setEncoding ( 'utf8' );
play .subprocess .stdout .setEncoding ( 'utf8' );
play .subprocess .stderr .setEncoding ( 'utf8' );
 
play .subprocess .on ( 'close', () => {

play .emit ( 'end' );

} );

};

Play .prototype = Object .create ( EventEmitter .prototype );

Object .defineProperty ( Play .prototype, 'constructor', {

value: Play,
enumerable: false,
writable: true

} );

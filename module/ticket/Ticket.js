const EventEmitter = require ( 'events' );
 
const Ticket = module .exports = function Ticket ( play, owner ) {

EventEmitter .call ( this );

Object .defineProperty ( this, 'play', {

value: play,
enumerable: true

} );

Object .defineProperty ( this, 'owner', {

value: owner,
enumerable: true

} );
 
};

Ticket .prototype = Object .create ( EventEmitter .prototype );

Object .defineProperty ( Ticket .prototype, 'constructor', {

value: Ticket,
enumerable: false,
writable: true

} );

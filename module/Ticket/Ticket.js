const EventEmitter = require ( 'events' );
 
const Ticket = function Ticket () {

EventEmitter .call ( this );

};

Ticket .prototype = Object .create ( EventEmitter .prototype );

Object .defineProperty ( Ticket .prototype, 'constructor', {

value: Ticket,
enumerable: false,
writable: true

} );

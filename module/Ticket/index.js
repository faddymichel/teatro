const EventEmitter = require ( 'events' );
 
const descriptor = module .exports;

descriptor .enumerable = true;

const Ticket = descriptor .value = function Ticket () {

EventEmitter .call ( this );
 
};

Ticket .prototype = Object .create ( EventEmitter .prototype );

Object .defineProperty ( Ticket .prototype, 'constructor', {

value: Ticket,
enumerable: false,
writable: true

} );
 
[

'issue',
'check'

] .forEach ( ( property ) => {

Object .defineProperty ( Ticket, property, require ( './' + property ) );

} );

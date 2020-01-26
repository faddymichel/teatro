const Emitter = require ( 'events' );

const Ticket = module .exports = function Ticket ( signature ) {

const ticket = this;

Emitter .call ( ticket );

Object .keys ( ticket ) .forEach ( ( property ) => {

const descriptor = Object .getOwnPropertyDescriptor ( ticket, property );
descriptor .enumerable = false;
Object .defineProperty ( ticket, property, descriptor );

} );
 
Object .defineProperty ( ticket, 'signature', {

value: signature,
enumerable: true

} );

};

Ticket .prototype = Object .create ( Emitter .prototype );

Object .defineProperty ( Ticket .prototype, 'constructor', {

value: Ticket,
writable: true,
enumerable: false

} );

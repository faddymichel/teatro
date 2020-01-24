const $ = require ( './symbol' );
const Emitter = require ( 'events' );
 
const descriptor = module .exports;

const Ticket = descriptor .value = function Ticket ( Role, signature ) {

const ticket = this;

Emitter .call ( ticket );

Object .defineProperty ( ticket, 'Role', {

value: Role,
enumerable: true

} );

Object .defineProperty ( ticket, 'signature', {

value: signature,
enumerable: true

} );

};

Ticket .prototype = Object .create ( Emitter .prototype );

Object .defineProperty ( Ticket .prototype, 'constructor', {

value: Ticket,
enumerable: false,
writable: true

} );

Object .keys ( $ ) .forEach ( ( property ) => {

Object .defineProperty ( Ticket, $ [ property ], require ( './' + property ) );

} );

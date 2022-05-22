import Emitter from 'events';

export default function Ticket ( key ) {

const ticket = this;

Emitter .call ( ticket );

Object .keys ( ticket ) .forEach ( ( property ) => {

const descriptor = Object .getOwnPropertyDescriptor ( ticket, property );
descriptor .enumerable = false;
Object .defineProperty ( ticket, property, descriptor );

} );

Object .defineProperty ( ticket, 'play', {

value: key

} );

};

Ticket .prototype = Object .create ( Emitter .prototype );

Object .defineProperty ( Ticket .prototype, 'constructor', {

value: Ticket,
writable: true,
enumerable: false

} );

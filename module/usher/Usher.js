const EventEmitter = require ( 'events' );

const Usher = function Usher ( socket ) {

const usher = this;

EventEmitter .call ( usher );

Object .defineProperty ( usher, socket, {

value: socket

} );

socket .send ( '#participant #usher' );
socket .send ( '?ticket' );

socket .once ( 'message', ( stamp ) => {

stamp = stamp
.trim ()
.toString ( 'hex' );

const ticket = Ticket [ retrieve ] ( stamp );

if ( ticket ) {

ticket .participate ( socket );

usher .emit ( 'participant', ticket, socket );

}

else {

socket .send ( '#ticket #retrieve #false' );
usher .participate ( socket );

}

} );

};

module .exports = ( Ticket, retrieve ) => {

return function _usher ( socket ) {

const usher = this;

socket .send ( '#play #usher' );
socket .send ( '?ticket' );

socket .once ( 'message', ( stamp ) => {

stamp = stamp
.trim ()
.toString ( 'hex' );

const ticket = Ticket [ retrieve ] ( stamp );

if ( ticket ) {

ticket .play ( socket );

usher .emit ( 'participant', ticket, socket );

}

else {

socket .send ( '#false' );
usher .play ( socket );

}

} );

};

};

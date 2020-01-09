const { check } = require ( './ticket' );

const $receptionist = module .exports = function $receptionist ( socket ) {

const receptionist = this;

socket .send ( '?ticket' );

socket .once ( 'message', ( stamp ) => {

stamp = stamp
.trim ()
.toString ( 'hex' );

const ticket = receptionist .play .check ( stamp );

if ( ticket ) {

ticket .play ( socket );

receptionist .emit ( 'participant', ticket, socket );

}

else {

socket .send ( '#false' );

receptionist .play ( socket );

}

} );

};

Object .defineProperty ( $receptionist, 'check', {

value: check,
enumerable: true

} );

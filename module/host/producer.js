const _actor = require ( './actor' );
const _audience = require ( './audience' );

module .exports = function __producer ( _ ) {

const { owner, Ticket, issue, cancel, subprocess } = _;

return function _producer ( socket ) {

const producer = this;

socket .send ( '#play #producer' );
socket .send ( '?command' );

subprocess .on ( 'close', ( code, signal ) => {

socket .send ( '#play #end' );

} );

socket .on ( 'message', ( argv ) => {

argv = argv
.trim ()
.split ( ' ' );

switch ( argv [ 0 ] ) {

case 'issue':

let stamp;

switch ( argv [ 1 ] ) {

case 'actor':

stamp = Ticket [ issue ] ( _actor ( subprocess ), owner );

break;

case 'audience':

stamp = Ticket [ issue ] ( _audience ( subprocess ), owner );

break;

case 'producer':

stamp = Ticket [ issue ] ( __producer ( _ ), owner );

break;

default:

socket .send ( '#false' );

}

if ( stamp ) {

socket .send ( '#ticket #' + argv [ 1 ] + ' ' + stamp );
producer .emit ( 'ticket', stamp );

}

break;

case 'cancel':

if ( Ticket [ cancel ] ( argv [ 1 ], owner ) )

socket .send ( '#true' );

else

socket .send ( '#false' );

break;

case 'end':

subprocess .kill ();

break;

}

socket .send ( '?command' );

} );

};

};

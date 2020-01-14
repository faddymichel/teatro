const { spawn } = require ( 'child_process' );
const _producer = require ( './producer' );

module .exports = function __host ( _ ) {

return function _host ( socket ) {

const host = this;

socket .send ( '#play #host' );
socket .send ( '?command' );

socket .once ( 'message', ( argv ) => {

argv = argv
.trim ()
.split ( ' ' );

_ .subprocess = spawn ( argv [ 0 ], argv .slice [ 1 ] );

host .emit ( 'prepare', _ .subprocess );

if ( _ .subprocess .pid ) {

_ .owner = Symbol ();

const stamp = _ .Ticket [ _ .issue ] ( _producer ( _ ), _ .owner );

socket .send ( '#ticket #producer ' + stamp );
 
host .emit ( 'play', _ );

}

else {

socket .send ( '#false' );

}

_ .socket = socket;

host .emit ( 'end', _ );

} );

};

};

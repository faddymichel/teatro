const { spawn } = require ( 'child_process' );
const _producer = require ( './producer' );
const Play = require ( './Play' );

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
_ .count = 1;

const play = new Play ( _ );

play .on ( 'ticket', ( stamp ) => {

play .once ( 'end', () => {

_ .Ticket [ _ .cancel ] ( stamp, _ .owner );

} );

} );

const stamp = _ .Ticket [ _ .issue ] ( _producer ( play ), _ .owner );

play .emit ( 'ticket', stamp );
socket .send ( '#ticket #issue #producer ' + stamp );
host .emit ( 'play', play );
 
}

else {

socket .send ( '#command #false' );

}

_ .socket = socket;

host .emit ( 'end', _ );

} );

};

};

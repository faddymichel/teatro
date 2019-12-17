const { spawn } = require ( 'child_process' );

const descriptor = module .exports;

descriptor .enumerable = true;

descriptor .value = function host ( socket ) {

const ticket = this;

socket .send ( '?command' );

socket .once ( 'message', ( data ) => {

const argv = data .split ( ' ' );

const subprocess = spawn ( argv [ 0 ], argv .slice [ 1 ] );

const actor = play ( 'actor', socket, subprocess );
const audience = play ( 'audience', socket, subprocess );

socket .send ( '#actor ' + teatro .Ticket .issue ( actor ) );
socket .send ( '#audience ' + teatro .Ticket .issue ( audience ) );

} );

};

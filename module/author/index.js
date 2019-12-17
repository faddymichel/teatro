const { spawn } = require ( 'child_process' );
const play = require ( './play' );

const descriptor = module .exports;

descriptor .enumerable = true;

descriptor .value = function author ( socket ) {

const teatro = this;

socket .send ( '#command' );

socket .once ( 'message', ( data ) => {

const argv = data .split ( ' ' );

const subprocess = spawn ( argv [ 0 ], argv .slice [ 1 ] );

console .log ( 'subprocess created ...' );

const actor = play ( 'actor', socket, subprocess );
const audience = play ( 'audience', socket, subprocess );

console .log ( actor, audience );
console .log ( teatro );

socket .send ( '#actor ' + teatro .Ticket .issue ( actor ) );
socket .send ( '#audience ' + teatro .Ticket .issue ( audience ) );

} );

};

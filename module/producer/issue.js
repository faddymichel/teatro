const _actor = require ( './actor' );
const _audience = require ( './audience' );
const _producer = require ( './' );

module .exports = function __issue ( play ) {

const { producer, subprocess, owner, Ticket, issue } = play;

return function _issue ( socket, argv ) {

let stamp;

switch ( argv [ 1 ] ) {

case 'actor':

stamp = Ticket [ issue ] ( _actor ( subprocess ), owner );

break;

case 'audience':

stamp = Ticket [ issue ] ( _audience ( subprocess ), owner );

break;

case 'producer':

stamp = Ticket [ issue ] ( _producer ( play ), owner );
play .count++;

break;

}

if ( stamp ) {

play .emit ( 'ticket', stamp );
socket .send ( `#ticket #issue #${ argv [ 1 ] } ${ stamp }` );

}

else
socket .send ( '#ticket #issue #false' );

return true;

};

};

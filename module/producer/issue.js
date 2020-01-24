const $ = require ( './symbol' );
const _actor = require ( './actor' );
const _audience = require ( './audience' );
const _producer = require ( './' );

const descriptor = module .exports;

descriptor .value = function _issue ( socket, argv ) {

const producer = this;
const play = producer .participate [ $ .play ];
const { subprocess, signature, Ticket, issue } = play;
let stamp;

switch ( argv [ 1 ] ) {

case 'actor':

stamp = Ticket [ issue ] ( _actor ( subprocess ), signature );

break;

case 'audience':

stamp = Ticket [ issue ] ( _audience ( subprocess ), signature );

break;

case 'producer':

stamp = Ticket [ issue ] ( _producer ( play ), signature );
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

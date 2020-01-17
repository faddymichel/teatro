module .exports = function __cancel ( play ) {

const { producer, owner, Ticket, cancel } = play;

return function _cancel ( socket, argv ) {

const ticket = Ticket [ cancel ] ( argv [ 1 ], owner );

if ( ticket .play .name === '_producer' ) {

play .count--;

if ( play .count === 0 )
play .emit ( 'end' );

}

if ( ticket !== producer ) {

if ( ticket )
socket .send ( `#ticket #cancel ${ argv [ 1 ] }` );

else
socket .send ( '#ticket #cancel #false' );

return true;

}

return false;

};

};

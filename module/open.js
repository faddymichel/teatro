const ws = require ( 'ws' );
const Ticket = require ( './ticket' );

const descriptor = module .exports;

descriptor .value = function ( args ) {

const Teatro = this;
const teatro = new Teatro ();

Object .defineProperty ( teatro, 'server', {

value: new ws .Server ( args )

} );

teatro .server .on ( 'listening', () => {

teatro .emit ( 'open', new Ticket ( 'producer' ) );

} );

teatro .server .on ( 'connection', function ( socket, request ) {

} );

return teatro;

};

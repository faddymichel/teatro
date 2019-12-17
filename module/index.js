const EventEmitter = require ( 'events' );
 const argv = require ( './argv' );
const ws = require ( 'ws' );

const Teatro = module .exports = function Teatro ( options ) {

EventEmitter .call ( this );

Object .defineProperty ( this, 'server', {

value: new ws .Server ( {

host: options .host,
port: options .port

} ),
//enumerable: true

} );

this .host ();
this .seat ();

};

Teatro .prototype = Object .create ( EventEmitter .prototype );

Object .defineProperty ( Teatro .prototype, 'constructor', {

value: Teatro,
enumerable: false,
writable: true

} );

[

'play',
'Ticket',
'host',
'seat'

] .forEach ( ( property ) => {

Object .defineProperty ( Teatro .prototype, property, require ( './' + property ) );

} );
 
module .exports = new Teatro ( argv );

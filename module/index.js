const EventEmitter = require ( 'events' );
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
'ticket',
'host',
'seat'

] .forEach ( ( property ) => {

Object .defineProperty ( Teatro .prototype, property, require ( './' + property ) );

} );

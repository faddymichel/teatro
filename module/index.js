const EventEmitter = require ( 'events' );
const ws = require ( 'ws' );

const Teatro = module .exports = function Teatro ( options ) {

EventEmitter .call ( this );

Object .defineProperty ( this, 'server', {

value: new ws .Server ( {

host: options .host,
port: options .port

} ),
enumerable: true

} );

this .whenOpen ();
this .whenParticipant ();
this .whenError ();

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
'close',
'whenOpen',
'whenParticipant',
'whenError'

] .forEach ( ( property ) => {

Object .defineProperty ( Teatro .prototype, property, require ( './' + property ) );

} );

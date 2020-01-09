const EventEmitter = require ( 'events' );

const Teatro = module .exports = function Teatro ( options ) {

EventEmitter .call ( this );

Object .assign ( require ( './options' ), options );

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

'close',
'whenOpen',
'whenParticipant',
'whenError'

] .forEach ( ( property ) => {

Object .defineProperty ( Teatro .prototype, property, require ( './' + property ) );

} );

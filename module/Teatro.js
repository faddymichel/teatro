const $ = require ( './symbol' );
const { Server } = require ( 'ws' );
const EventEmitter = require ( 'events' );

const Teatro = module .exports = function Teatro ( options ) {

EventEmitter .call ( this );

Object .defineProperty ( this, $ .server, {

value: new Server ( options .server )

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

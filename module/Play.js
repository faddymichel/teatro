const EventEmitter = require ( 'events' );
 
const Play = module .exports = function Play ( _ ) {

EventEmitter .call ( this );

Object .assign ( this, _ );
 
};

Play .prototype = Object .create ( EventEmitter .prototype );

Object .defineProperty ( Play .prototype, 'constructor', {

value: Play,
enumerable: false,
writable: true

} );

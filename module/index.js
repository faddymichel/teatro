const EventEmitter = require ( 'events' );

const Teatro = module .exports = function Teatro () {

EventEmitter .call ( this );

};

Teatro .prototype = Object .create ( EventEmitter .prototype );

Object .defineProperty ( Teatro .prototype, 'constructor', {

value: Teatro,
enumerable: false,
writable: true

} );

[

'create'

] .forEach ( ( property ) => {

Object .defineProperty ( Teatro, property, require ( './' + property ) );

} );

[

'enter'

] .forEach ( ( property ) => {

Object .defineProperty ( Teatro .prototype, property, require ( './' + property ) );

} );

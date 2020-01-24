const $ = require ( './symbol' );
const Emitter = require ( 'events' );

const Role = module .exports = function Role ( socket ) {

const role = this;

Emitter .call ( role );

Object .defineProperty ( role, $ .socket, {

value: socket

} );

};

Role .prototype = Object .create ( Emitter .prototype );

Object .defineProperty ( Role .prototype, 'constructor', {

value: Role,
writable: true,
enumerable: false

} );

Object .keys ( {

start: $ .start,
finish: $ .finish

} ) .forEach ( ( property ) => {

Object .defineProperty ( Role .prototype, $ [ property ], require ( './' + property ) );

} );

const keys = require ( './keys' );
const Book = require ( './book' );
const Emitter = require ( 'events' );
const { Server } = require ( 'ws' );

const Teatro = module .exports = function Teatro ( options ) {

const teatro = this;

Emitter .call ( teatro );

Object .keys ( teatro ) .forEach ( ( property ) => {

const descriptor = Object .getOwnPropertyDescriptor ( teatro, property );
descriptor .enumerable = false;
Object .defineProperty ( teatro, property, descriptor );

} );

const $ = Teatro .keys ();

Object .defineProperty ( teatro, $ .server,  {

value: new Server ( options .server )

} );

teatro [ $ .server ] .on ( 'listening', () => {

Object .defineProperty ( teatro, $ .book, {

value: new Book ( $ [ $ .book ] )

} );

[

'issue',
'close'

] .forEach ( ( property ) => {

Object .defineProperty ( teatro, property, require ( './' + property ) ( $ [ property ] ) );

} );

teatro .emit ( 'open' );

} );

};

Teatro .prototype = Object .create ( Emitter .prototype );

Object .defineProperty ( Teatro .prototype, 'constructor', {

value: Teatro,
enumerable: false,
writable: true

} );

Object .defineProperty ( Teatro, 'keys', require ( './keys' ) );

const $ = require ( './symbol' );
const { issue, retrieve } = require ( './ticket/symbol' );
const _Usher = require ( './usher' );
const { start } = require ( './role/symbol' );
const { Server } = require ( 'ws' );
const Emitter = require ( 'events' );

const Teatro = module .exports = function Teatro ( options ) {

const teatro = this;

Emitter .call ( teatro );

const Usher = _Usher ( teatro [ $ .ticket ], retrieve );
const stamp = teatro [ $ .ticket ] [ issue ] ( Usher, Symbol () );
const ticket = teatro [ $ .ticket ] [ retrieve ] ( stamp );

Object .defineProperty ( teatro, $ .server, {

value: new Server ( options .server )

} );

teatro [ $ .server ] .on ( 'connection', ( socket ) => {

let usher = new ticket .Role ( socket );
usher [ start ] ();

usher .on ( 'finish', ( role ) => {

role .once ( 'finish', () => {

usher [ start ] ();

} );

} );

} );

};

Teatro .prototype = Object .create ( Emitter .prototype );

Object .defineProperty ( Teatro .prototype, 'constructor', {

value: Teatro,
enumerable: false,
writable: true

} );

Object .defineProperty ( Teatro .prototype, $ .ticket, require ( './ticket' ) );

[

//'close'

] .forEach ( ( property ) => {

Object .defineProperty ( Teatro .prototype, property, require ( './' + property ) );

} );

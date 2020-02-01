const ws = require ( 'ws' );

const descriptor = module .exports;

descriptor .enumerable = true;
descriptor .value = function open ( options ) {

const teatro = this;
const raise = ( error ) => {

teatro .emit ( 'error', error );

};
const server = new ws .Server ( options .server );

server .on ( 'error', raise );
server .on ( 'listening', () => {

const book = {};
const Stamp = require ( './Stamp' ) ();
const venue = {};

Object .defineProperty ( teatro, 'close', require ( './close' ) ( server, options .lock ) );

Object .defineProperty ( teatro, 'issue', require ( './issue' ) ( book, Stamp, venue ) );
Object .defineProperty ( teatro, 'retrieve', require ( './retrieve' ) ( book ) );
Object .defineProperty ( teatro, 'cancel', require ( './cancel' ) ( book, venue ) );

Object .defineProperty ( teatro, 'host', require ( './host' ) ( venue ) );
Object .defineProperty ( teatro, 'end', require ( './end' ) ( venue ) );
Object .defineProperty ( teatro, 'play', require ( './play' ) ( venue ) );

server .on ( 'connection', ( socket ) => {

const participant = ws .createWebSocketStream ( socket );

socket .on ( 'error', raise );
participant .on ( 'error', raise );

teatro .emit ( 'participant', participant );

} );

teatro .emit ( 'open' );

} );

};

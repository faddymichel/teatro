const ws = require ( 'ws' );

const descriptor = module .exports;

descriptor .enumerable = true;
descriptor .value = function open ( options ) {

const teatro = this;
const server = new ws .Server ( options .server );

server .on ( 'listening', () => {

const book = {};
const Stamp = require ( './stamp' ) ();
const venue = {};

Object .defineProperty ( teatro, 'issue', require ( './issue' ) ( book, Stamp, venue ) );
Object .defineProperty ( teatro, 'retrieve', require ( './retrieve' ) ( book ) );
Object .defineProperty ( teatro, 'cancel', require ( './cancel' ) ( book, venue ) );
Object .defineProperty ( teatro, 'host', require ( './host' ) ( venue ) );
Object .defineProperty ( teatro, 'end', require ( './end' ) ( venue ) );
Object .defineProperty ( teatro, 'participate', require ( './participate' ) ( venue ) );

server .on ( 'connection', ( socket ) => {

teatro .emit ( 'participant', ws .createWebSocketStream ( socket ) );

} );

teatro .emit ( 'open' );

} );

};

import ws from 'ws';
import stamp from './stamp.js';
import close from './close.js';
import issue from './issue.js';
import retrieve from './retrieve.js';
import cancel from './cancel.js';
import host from './host.js';
import end from './end.js';
import play from './play.js';

const descriptor = {};

descriptor .enumerable = true;
descriptor .value = function open ( options ) {

const teatro = this;
const raise = ( error ) => {

teatro .emit ( 'error', error );

};
const server = new ws .Server ( options .ws );

server .on ( 'error', raise );
server .on ( 'listening', () => {

const book = {};
const Stamp = stamp ();
const venue = {};

Object .defineProperty ( teatro, 'close', close ( server, options .lock ) );
Object .defineProperty ( teatro, 'issue', issue ( book, Stamp, venue ) );
Object .defineProperty ( teatro, 'retrieve', retrieve ( book ) );
Object .defineProperty ( teatro, 'cancel', cancel ( book, venue ) );

Object .defineProperty ( teatro, 'host', host ( venue ) );
Object .defineProperty ( teatro, 'end', end ( venue ) );
Object .defineProperty ( teatro, 'play', play ( venue ) );

server .on ( 'connection', ( socket ) => {

const participant = socket;
//ws .createWebSocketStream ( socket );

socket .on ( 'error', raise );
participant .on ( 'error', raise );

teatro .emit ( 'participant', participant );

} );

teatro .emit ( 'open' );

} );

};

export default descriptor;

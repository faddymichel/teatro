import ws from 'ws';
import Emitter from 'events';
import crypto from 'crypto';

const Teatro = class Teatro extends Emitter {

#server;
#book = {};
#venue = {};

constructor ( options ) {

super ();

const teatro = this;
const server = teatro .#server = new ws .Server ( options .ws );

server .on ( 'error', error => teatro .emit ( 'error', error ) );
server .on ( 'listening', () => {

server .on ( 'connection', socket => {

const participant = socket; //ws .createWebSocketStream ( socket );

participant .on ( 'error', error => teatro .emit ( 'error', error ) );
teatro .emit ( 'participant', participant );

} );

teatro .emit ( 'open' );

} );

}

close ( key ) {

const teatro = this;

if ( key !== lock )
throw ReferenceError ( "The lock could not be released by the provided key to close Teatro." );

teatro .#server .close ();
teatro .emit ( 'close' );

}

host ( scenario, signature ) {

if ( typeof scenario !== 'function' )
throw TypeError ( "scenario must be of type 'function'." );

const teatro = this;
const venue = teatro .#venue;
const key = Symbol ();
const play = new Play ( scenario, signature );

play .on (

'ticket',
stamp => play .once ( 'end', () => teatro .cancel ( stamp, play .signature ) )

);

Object .defineProperty ( venue, key, {

configurable: true,
value: play

} );

return key;

}

play ( participant, ticket, ... settings ) {

const teatro = this;

teatro .#venue [ ticket .play ] .on ( 'end', () => participant .end ( '#play #end' ) );

return new Promise ( ( ... directions ) => teatro .#venue [ ticket .play ] .scenario .call ( teatro, participant, ... settings, ... directions ) );

}

end ( key, signature ) {

if ( teatro .#venue [ key ] && teatro .#venue [ key ] .signature === signature ) {

teatro .#venue [ key ] .emit ( 'end' );

return delete teatro .#venue [ key ];

}

return false;

}

issue ( key, stamp = Stamp () ) {

const teatro = this;

if ( typeof key !== 'symbol' )
throw TypeError ( "key must be of type 'symbol'." );

if ( typeof stamp !== 'string' )
throw TypeError ( "stamp must be of type 'string'." );

if ( teatro .#venue [ key ] === undefined )
throw ReferenceError ( "Could not reference a play in this Teatro's venue using the provided 'key'." );

const ticket = teatro .retrieve ( stamp ) || new Ticket ( key );

Object .defineProperty ( teatro .#book, stamp, {

configurable: true,
value: ticket

} );

teatro .#venue [ key ] .emit ( 'ticket', stamp );

return stamp;

}

retrieve ( stamp ) {

return this .#book [ stamp ] || false;

}

cancel ( stamp, signature ) {

if ( teatro .#book [ stamp ] && teatro .#venue [ teatro .#book [ stamp ] .play ] .signature === signature )
return delete teatro .#book [ stamp ];

return false;

}

};

const Play = class Play extends Emitter {

constructor ( scenario, signature ) {

super ();

const play = this;

Object .defineProperties ( play, {

scenario: { value: scenario },
signature: { value: signature }

} );

}

};

const Ticket = class Ticket extends Emitter {

constructor ( location ) {

super ();

const ticket = this;

Object .defineProperty ( ticket, 'play', {

value: location

} );

}

};

const random = Math .random ();
let index = 0;

const Stamp = function Stamp () {

return crypto
.createHash ( 'sha256' )
.update ( ( Stamp .random + Stamp .index++ ) .toString () + '.' + Date .now () )
.digest ( 'hex' );

};

export default Teatro;

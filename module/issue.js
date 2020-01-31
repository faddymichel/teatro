const Ticket = require ( './ticket' );

module .exports = ( book, Stamp, venue ) => {

const descriptor = {};

descriptor .enumerable = true;
descriptor .value = function issue ( key, signature ) {

if ( typeof key !== 'symbol' )
throw TypeError ( "key must be of type 'symbol'." );

if ( venue [ key ] === undefined )
throw new ReferenceError ( "Could not reference a play in this Teatro's venue using the provided 'key'." );

if ( typeof signature !== 'symbol' )
throw TypeError ( "key must be of type 'symbol'." );

const ticket = new Ticket ( key );
const stamp = Stamp ();

Object .defineProperty ( book, stamp, {

configurable: true,
value: ticket

} );

venue [ key ] .emit ( 'ticket', stamp );

return stamp;
 
};

return descriptor;

};

const Ticket = require ( './Ticket' );

module .exports = ( book, Stamp, venue ) => {

const descriptor = {};

descriptor .enumerable = true;
descriptor .value = function issue ( key ) {

const teatro = this;

let error = false;

if ( typeof key !== 'symbol' ) {

error = true;
teatro .emit ( 'error', new TypeError ( "key must be of type 'symbol'." ) );

}

if ( venue [ key ] === undefined ) {

error = true;
teatro .emit ( 'error', new ReferenceError ( "Could not reference a play in this Teatro's venue using the provided 'key'." ) );

}

if ( error )
return false;

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

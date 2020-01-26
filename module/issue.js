const Ticket = require ( './ticket' );

module .exports = ( $ ) => {

const descriptor = {};

descriptor .enumerable = true;
descriptor .value = function issue ( signature ) {

if ( typeof signature !== 'symbol' )
throw TypeError ( "Signature must be of type 'symbol'." );

const teatro = this;

const host = new Ticket ( signature );
const stamp = teatro [ $ .book ] [ $ .issue ] ( host );

return stamp;
 
};

return descriptor;

};

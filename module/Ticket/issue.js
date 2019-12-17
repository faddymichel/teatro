const book = require ( './book' );
const stamper = require ( './stamper' );
 
const descriptor = module .exports;

descriptor .value = function issue ( play ) {

const Ticket = this;
const stamp = stamper ();

book [ stamp ] = new Ticket ( play );

return stamp;

};

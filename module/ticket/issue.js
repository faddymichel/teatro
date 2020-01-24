const $ = require ( './symbol' );

const descriptor = module .exports;

descriptor .value = function issue ( Role, signature ) {

const Ticket = this;

const stamp = Ticket [ $ .stamp ] ();

Ticket [ $ .book ] [ stamp ] = new Ticket ( Role, signature );

return stamp;

};

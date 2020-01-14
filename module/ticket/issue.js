const $ = require ( './symbol' );

const descriptor = module .exports;

descriptor .value = function issue ( play, owner ) {

const Ticket = this;

const stamp = Ticket [ $ .stamp ] ();

Ticket [ $ .book ] [ stamp ] = new Ticket ( play, owner );

return stamp;

};

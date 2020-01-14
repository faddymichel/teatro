const $ = require ( './symbol' );

const descriptor = module .exports;

descriptor .value = function cancel ( stamp, owner ) {

const Ticket = this;
const ticket = Ticket [ $ .book ] [ stamp ];

return ticket && ticket .owner === owner ?
delete Ticket [ $ .book ] [ stamp ] :
false;

};

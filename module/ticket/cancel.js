const $ = require ( './symbol' ) .modules;

const descriptor = module .exports;

descriptor .value = function cancel ( stamp, signature ) {

const Ticket = this;
const ticket = Ticket [ $ .book ] [ stamp ];

if ( ticket && ticket .signature === signature ) {

ticket .emit ( 'cancel' );
delete Ticket [ $ .book ] [ stamp ];

return ticket;

}

};

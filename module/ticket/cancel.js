const $ = require ( './symbol' );

const descriptor = module .exports;

descriptor .value = function cancel ( stamp, owner ) {

const Ticket = this;
const ticket = Ticket [ $ .book ] [ stamp ];

if ( ticket && ticket .owner === owner ) {

ticket .emit ( 'cancel' );
delete Ticket [ $ .book ] [ stamp ];

return ticket;

}

};

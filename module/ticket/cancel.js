const $ = require ( './symbol' );

const descriptor = module .exports;

descriptor .value = function cancel ( stamp ) {

return Ticket [ $ .book ] [ stamp ] ?
delete Ticket [ $ .book ] [ stamp ] :
false;

};

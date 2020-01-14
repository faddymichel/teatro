const $ = require ( './symbol' );

const descriptor = module .exports;

descriptor .value = function retrieve ( stamp ) {

const Ticket = this;

return Ticket [ $ .book ] [ stamp ];

};

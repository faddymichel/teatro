module .exports = ( $ ) => {

const descriptor = {};

descriptor .value = function cancel ( stamp, signature ) {

const book = this;
const ticket = book [ $ .entries ] [ stamp ];

if ( ticket && ticket .signature === signature ) {

delete book [ $ .entries ] [ stamp ];

return ticket;

}

};

return descriptor;

};

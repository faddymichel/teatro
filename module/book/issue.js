module .exports = ( $ ) => {

const descriptor = {};

descriptor .value = function issue ( ticket ) {

const book = this;

const stamp = book [ $ .methods .stamp ] ();

book [ $ .entries ] [ stamp ] = ticket;

return stamp;

};

return descriptor;

};

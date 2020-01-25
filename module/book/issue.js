const descriptor = module .exports;

descriptor .value = function issue ( ticket, $ ) {

const book = this;

const stamp = book [ $ .stamp ] ();

book [ $ .entries ] [ stamp ] = ticket;

return stamp;

};

module .exports = ( $ ) => {

const descriptor = {};

descriptor .value = function retrieve ( stamp ) {

const book = this;

return book [ $ .entries ] [ stamp ] || false;

};

return descriptor;

};

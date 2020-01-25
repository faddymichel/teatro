const descriptor = module .exports;

descriptor .value = function retrieve ( stamp, $ ) {

const book = this;

return book [ $ .entries ] [ stamp ] || false;

};

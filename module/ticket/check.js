const book = require ( './book' );

const descriptor = module .exports;

descriptor .value = function check ( stamp ) {

return book [ stamp ] || false;

};

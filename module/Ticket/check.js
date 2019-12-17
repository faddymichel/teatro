const book = require ( './book' );

const descriptor = module .exports;

descriptor .value = function check ( stamp ) {

stamp = stamp
.trim ()
.toString ( 'hex' );
 

return book [ stamp ] ? book [ stamp ] : false;

};

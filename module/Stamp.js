const crypto = require ( 'crypto' );

module .exports = () => {

let random = Math .random ();
let index = 0;

return function Stamp () {

return crypto
.createHash ( 'sha256' )
.update ( ( random + index++ ) .toString () + '.' + Date .now () )
.digest ( 'hex' );

};

return descriptor;

};

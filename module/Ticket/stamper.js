const crypto = require ( 'crypto' );
let index = 0;
const random = Math .random ();

const stamper = module .exports = function stamper () {

return crypto
.createHash ( 'sha256' )
.update ( ( random + index++ ) .toString () )
.digest ( 'hex' );

};

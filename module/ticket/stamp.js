const crypto = require ( 'crypto' );
let index = 0;
const random = Math .random ();

const stamp = module .exports = function stamp () {

return crypto
.createHash ( 'sha256' )
.update ( ( random + index++ ) .toString () )
.digest ( 'hex' );

};

import crypto from 'crypto';

export default () => {

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

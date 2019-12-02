module .exports = function () {

const address = this .address ();

console .log ( `listening on ${ address .address }:${ address .port } ...` );

const hash = require ( 'crypto' )
.createHash ( 'sha256' )
.update ( Math .random () .toString () )
.digest ( 'hex' );

console .log ( 'super:', super );
 
};

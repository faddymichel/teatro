const crypto = require ( 'crypto' );
const random = Math .random ();

const Ticket = module .exports = function Ticket ( role, act = process ) {

this .hash = crypto
.createHash ( 'sha256' )
.update ( ( random + act .pid ) .toString () )
.digest ( 'hex' );
 
};

[

'create'

] .forEach ( ( property ) => {

Object .defineProperty ( Ticket .prototype, property, require ( './' + property ) );

} );

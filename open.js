module .exports = function open () {

console .log ( '#teatro #kan-wakan-wakan #open' );

const teatro = this;
const interface = require ( 'readline' ) .createInterface ( {

input: process .stdin,
output: process .stdout

} );
const signature = Symbol ();

interface .question ( '\n?order\n... ', function order ( argv ) {

argv = argv
.trim ()
.split ( ' ' );

switch ( argv [ 0 ] ) {

case 'issue':

console .log ( '#ticket', '#issued', '#host', teatro .issue ( signature ) );

break;

default:

console .log ( '#order', '#false' );

}

interface .question ( '\n?order\n... ', order );

} );

};

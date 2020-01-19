module .exports = function _execute ( play ) {

const { producer } = play;
const order = {};

[

'issue',
'cancel',
'end'

] .forEach ( ( argv0 ) => {

order [ argv0 ] = require ( './' + argv0 ) ( play );

} );

return function execute ( argv ) {

const socket = this;
let finish = true;

argv = argv
.trim ()
.split ( ' ' );

if ( order [ argv [ 0 ] ] )
finish = order [ argv [ 0 ] ] ( socket, argv );

else
socket .send ( '#order #false' );

if ( finish )
socket .send ( '?order' );

};

};

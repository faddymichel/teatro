module .exports = function _execute ( play ) {

const { producer } = play;
const command = {};

[

'issue',
'cancel',
'end'

] .forEach ( ( argv0 ) => {

command [ argv0 ] = require ( './' + argv0 ) ( play );

} );

return function execute ( argv ) {

const socket = this;
let finish = true;

argv = argv
.trim ()
.split ( ' ' );

if ( command [ argv [ 0 ] ] )
finish = command [ argv [ 0 ] ] ( socket, argv );

else
socket .send ( '#command #false' );

if ( finish )
socket .send ( '?command' );

};

};

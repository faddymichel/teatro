module .exports = function __producer ( play ) {

const { subprocess } = play;

return function _producer ( socket ) {

play .producer = this;
const execute = require ( './execute' ) ( play );
 
socket .send ( '#play #producer' );
socket .send ( '?order' );

socket .on ( 'message', execute );

play .producer .once ( 'cancel', () => {

socket .removeListener ( 'message', execute );

} );

};

};

let count = 0;

module .exports = ( subprocess ) => {

subprocess .stdin .setEncoding ( 'utf8' );
subprocess .stdout .setEncoding ( 'utf8' );

return function $actor ( socket ) {

const actor = this;

actor .emit ( 'count', ++count );

socket .on ( 'close', () => {

actor .emit ( 'count', --count );

} );

socket .send ( '#play #actor' );

socket .on ( 'message', ( data ) => {

subprocess .stdin .write ( data );

} );

subprocess .stdout .on ( 'data', ( data ) => {

socket .send ( data );

} );

};

};

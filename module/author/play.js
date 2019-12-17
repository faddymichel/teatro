module .exports = ( role, socket, subprocess ) => {

console .log ( 'writing play ...' );

if ( role !== 'actor' && role !== 'audience' )
return;

console .log ( 'connecting socket to subprocess ...' );

subprocess .stdin .setEncoding ( 'utf8' );
subprocess .stdout .setEncoding ( 'utf8' );

return function ( socket ) {

Object .defineProperty ( this, 'name', {

value: role,
configurable: true

} );

if ( role === 'actor' )
socket .on ( 'message', ( data ) => {

subprocess .stdin .write ( data );

} );

subprocess .stdout .on ( 'data', ( data ) => {

socket .send ( data );

} );

};

};

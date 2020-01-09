const descriptor = module .exports;

descriptor .value = ( socket, subprocess ) => {

subprocess .stdin .setEncoding ( 'utf8' );
subprocess .stdout .setEncoding ( 'utf8' );

return function $actor ( socket ) {

socket .on ( 'message', ( data ) => {

subprocess .stdin .write ( data );

} );

subprocess .stdout .on ( 'data', ( data ) => {

socket .send ( data );

} );

};

};

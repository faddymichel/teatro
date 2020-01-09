const descriptor = module .exports;

descriptor .value = ( socket, subprocess ) => {

subprocess .stdout .setEncoding ( 'utf8' );

return function $audience ( socket ) {

subprocess .stdout .on ( 'data', ( data ) => {

socket .send ( data );

} );

};

};
